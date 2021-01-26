#include "LayaBRDF.cginc"

half2 MetallicGloss(float2 uv)
{
    half2 mg;

	#ifdef MetallicGlossTexture
		#ifdef Smoothness_DiffuseTexture_Alpha
			mg.r = tex2D(_MetallicGlossMap, uv).r;
			mg.g = tex2D(_MainTex, uv).a;
		#else
			mg = tex2D(_MetallicGlossMap, uv).ra;
		#endif
		mg.g *= _GlossMapScale;
	#else
		mg.r = _Metallic;
		#ifdef Smoothness_DiffuseTexture_Alpha
			mg.g = tex2D(_MainTex, uv).a * _GlossMapScale;
		#else
			mg.g = _Glossiness;
		#endif
	#endif

    return mg;
}

inline half4 LayaPBRStandardLighting (half4 diffuseColor, half metallic, half smoothness, half3 normal, half3 viewDir, half3 lightDir, LayaGI gi)
{
    normal = normalize(normal);

    half oneMinusReflectivity;
	half3 diffColor;
    half3 specColor;
	half alpha;

	diffColor = DiffuseAndSpecularFromMetallic (diffuseColor.rgb, metallic, /*out*/ specColor, /*out*/ oneMinusReflectivity);

	diffColor = LayaPreMultiplyAlpha(diffColor, diffuseColor.a, oneMinusReflectivity, /*out*/alpha);

    half4 color = BRDF1_Laya_PBS (diffColor, specColor, oneMinusReflectivity, smoothness, normal, viewDir, lightDir, gi);
	color.a = alpha;
    return color;
}
