Shader "LayaAir3D/Mesh/PBR(Standard)" {
	Properties {
		_MainTex("Diffuse Texture", 2D) = "white" {}
		_Color("Diffuse Color", Color) = (1,1,1,1)

		[Gamma] _Metallic("Metallic", Range(0.0, 1.0)) = 0.0
		_MetallicGlossMap("Metallic", 2D) = "white" {}
		_Glossiness("Smoothness", Range(0.0, 1.0)) = 0.5
		_GlossMapScale("Smoothness Scale", Range(0.0, 1.0)) = 1.0
		_SmoothnessTextureChannel("Smoothness texture channel", Float) = 0

		_BumpMap("Normal Texture", 2D) = "bump" {}
		_BumpScale("Scale", Float) = 1.0

		_ParallaxMap ("Height Map", 2D) = "black" {}
		_Parallax ("Height Scale", Range (0.005, 0.08)) = 0.02

		_OcclusionMap("Occlusion", 2D) = "white" {}
		_OcclusionStrength("Strength", Range(0.0, 1.0)) = 1.0

		[ToggleOff] _Reflection("Reflection", Float) = 0.0

		[ToggleOff] _EnableEmission("Emission", Float) = 0.0
		_EmissionMap("EmissionMap", 2D) = "white" {}
		_EmissionColor("EmissionColor", Color) = (0,0,0,0)

		[ToggleOff] _AlphaTest("AlphaTest", Float) = 0.0
		_Cutoff("Alpha Cutoff", Range(0.0, 1.0)) = 0.01
		[ToggleOff] _AlphaBlend("AlphaBlend", Float) = 0.0

		[HideInInspector] _Cull ("__cull", Float) = 2.0
		[HideInInspector] _Mode ("__mode", Float) = 0.0
		[HideInInspector] _SrcBlend ("__src", Float) = 1.0
		[HideInInspector] _DstBlend ("__dst", Float) = 0.0
		[HideInInspector] _ZWrite("__zw", Float) = 1.0
		[HideInInspector] _ZTest("__zt", Float) = 4.0
		[HideInInspector] _RenderQueue("__rq", Float) = 2000.0
	}
	SubShader {
		Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent"}
		Pass { 
			Tags { "LightMode"="ForwardBase" }
		
			Blend [_SrcBlend] [_DstBlend]
			ZWrite[_ZWrite]
			ZTest[_ZTest]
			Cull [_Cull]

			CGPROGRAM

			#pragma shader_feature MetallicGlossTexture
			#pragma shader_feature Smoothness_DiffuseTexture_Alpha
			#pragma shader_feature ParallaxTexture
			#pragma shader_feature EnableEmission
			#pragma shader_feature EnableReflection
			#pragma shader_feature EnableAlphaCutoff
			#pragma shader_feature ALPHAPREMULTIPLY_ON

			#pragma multi_compile_fwdbase
			#pragma multi_compile_fog
			#pragma multi_compile LIGHTMAP_OFF LIGHTMAP_ON

			#pragma vertex vert
			#pragma fragment frag

			#include "../CGIncludes/LayaPBRStandardFB.cginc"
			
			ENDCG
		}
		Pass { 
			Tags { "LightMode"="ForwardAdd" }
			
			Blend One One

			CGPROGRAM

			#pragma shader_feature MetallicGlossTexture
			#pragma shader_feature Smoothness_DiffuseTexture_Alpha
			#pragma shader_feature ParallaxTexture
			#pragma shader_feature EnableEmission
			#pragma shader_feature EnableReflection
			#pragma shader_feature EnableAlphaCutoff
			#pragma shader_feature ALPHAPREMULTIPLY_ON
			
			#pragma multi_compile_fwdadd
			#pragma multi_compile_fwdadd_fullshadows
			#pragma multi_compile_fog
			#pragma multi_compile LIGHTMAP_OFF LIGHTMAP_ON

			#pragma vertex vert
			#pragma fragment frag

			#include "../CGIncludes/LayaPBRStandardFA.cginc"
			
			ENDCG
		}
	}
	CustomEditor "LayaPBRStandardGUI"
	FallBack "Standard"
}
