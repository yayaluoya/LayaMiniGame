#include "LayaBRDF.cginc"

half4 SpecularGloss(float2 uv)
{
	half4 sg;

	#ifdef SpecularTexture
		#if Smoothness_DiffuseTexture_Alpha
			sg.rgb = tex2D(_SpecGlossMap, uv).rgb;
			sg.a = tex2D(_MainTex, uv).a;
		#else
			sg = tex2D(_SpecGlossMap, uv);
		#endif
			sg.a *= _GlossMapScale;
	#else
		sg.rgb = _SpecColor.rgb;
		#ifdef Smoothness_DiffuseTexture_Alpha
			sg.a = tex2D(_MainTex, uv).a * _GlossMapScale;
		#else
			sg.a = _Glossiness;
		#endif
	#endif

	return sg;
}

inline half4 LayaPBRSpecularLighting(half4 diffuseColor, half3 specularColor, half smoothness, half3 normal, half3 viewDir, half3 lightDir, LayaGI gi)
{
	normal = normalize(normal);

	half oneMinusReflectivity;
	half3 diffColor;
	half alpha;

	diffColor = LayaEnergyConservationBetweenDiffuseAndSpecular(diffuseColor.rgb, specularColor, /*out*/ oneMinusReflectivity);

	diffColor = LayaPreMultiplyAlpha(diffColor, diffuseColor.a, oneMinusReflectivity, /*out*/alpha);

	half4 c = BRDF1_Laya_PBS(diffColor, specularColor, oneMinusReflectivity, smoothness, normal, viewDir, lightDir, gi);
	c.a = alpha;
	return c;
}
