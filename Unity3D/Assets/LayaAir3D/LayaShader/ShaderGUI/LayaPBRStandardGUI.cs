//#if UNITY_EDITOR 
using System;
using UnityEngine;
using UnityEditor;

class LayaPBRStandardGUI : ShaderGUI
{
    public override void AssignNewShaderToMaterial(Material material, Shader oldShader, Shader newShader)
    {
        material.shader = newShader;
        onChangeRender(material, (RenderMode)material.GetFloat("_Mode"));
    }
    public enum RenderMode
    {
        /**äÖÈ¾×´Ì¬_²»Í¸Ã÷¡£*/
        Opaque = 0,
        /**äÖÈ¾×´Ì¬_Í¸Ã÷²âÊÔ¡£*/
        Cutout = 1,
        /**äÖÈ¾×´Ì¬_Í¸Ã÷»ìºÏ_·ÆÄù¶û²»Ó°ÏìÍ¸Ã÷¶È¡£*/
        Fade = 2,
        /**äÖÈ¾×´Ì¬_Í¸Ã÷»ìºÏ_ÎïÀíÉÏ¿´ËÆºÏÀíµÄÍ¸Ã÷¡£*/
        Transparent = 3,
        /**äÖÈ¾×´Ì¬_×Ô¶¨Òå¡£*/
        Custom = 4
    }

    public enum SrcBlendMode
    {
        //Blend factor is (0, 0, 0, 0).
        Zero = 0,
        //Blend factor is (1, 1, 1, 1).
        One = 1,
        //Blend factor is (Rd, Gd, Bd, Ad).
        DstColor = 2,
        //Blend factor is (Rs, Gs, Bs, As).
        SrcColor = 3,
        //Blend factor is (1 - Rd, 1 - Gd, 1 - Bd, 1 - Ad).
        OneMinusDstColor = 4,
        //Blend factor is (As, As, As, As).
        SrcAlpha = 5,
        //Blend factor is (1 - Rs, 1 - Gs, 1 - Bs, 1 - As).
        OneMinusSrcColor = 6,
        //Blend factor is (Ad, Ad, Ad, Ad).
        DstAlpha = 7,
        //Blend factor is (1 - Ad, 1 - Ad, 1 - Ad, 1 - Ad).
        OneMinusDstAlpha = 8,
        //Blend factor is (f, f, f, 1); where f = min(As, 1 - Ad).
        SrcAlphaSaturate = 9,
        //Blend factor is (1 - As, 1 - As, 1 - As, 1 - As).
        OneMinusSrcAlpha = 10
    }

    public enum DstBlendMode
    {
        //Blend factor is (0, 0, 0, 0).
        Zero = 0,
        //Blend factor is (1, 1, 1, 1).
        One = 1,
        //Blend factor is (Rd, Gd, Bd, Ad).
        DstColor = 2,
        //Blend factor is (Rs, Gs, Bs, As).
        SrcColor = 3,
        //Blend factor is (1 - Rd, 1 - Gd, 1 - Bd, 1 - Ad).
        OneMinusDstColor = 4,
        //Blend factor is (As, As, As, As).
        SrcAlpha = 5,
        //Blend factor is (1 - Rs, 1 - Gs, 1 - Bs, 1 - As).
        OneMinusSrcColor = 6,
        //Blend factor is (Ad, Ad, Ad, Ad).
        DstAlpha = 7,
        //Blend factor is (1 - Ad, 1 - Ad, 1 - Ad, 1 - Ad).
        OneMinusDstAlpha = 8,
        //Blend factor is (f, f, f, 1); where f = min(As, 1 - Ad).
        SrcAlphaSaturate = 9,
        //Blend factor is (1 - As, 1 - As, 1 - As, 1 - As).
        OneMinusSrcAlpha = 10
    }

    public enum CullMode
    {
        CULL_NONE = 0,
        CULL_FRONT = 1,
        CULL_BACK = 2,
    }

    public enum DepthWrite
    {
        OFF = 0,
        ON = 1
    }

    public enum DepthTest
    {
        OFF = 0,
        Never = 1,
        LESS = 2,
        EQUAL = 3,
        LEQUAL = 4,
        GREATER = 5,
        NOTEQUAL = 6,
        GEQUAL = 7,
        ALWAYS = 8
    }

    public enum RenderQueue
    {
        //Opaque geometry uses this queue.
        Geometry = 2000,
        //Alpha tested geometry uses this queue.
        AlphaTest = 2450,
        //This render queue is rendered after Geometry and AlphaTest, in back-to-front order.
        Transparent = 3000,
    }

    public enum SmoothnessTextureChannelMode
    {
        Metallic_Alpha = 0,
        Albedo_Alpha = 1
    }

    MaterialProperty diffuseTexture = null;
    MaterialProperty diffuseColor = null;

    MaterialProperty metallic = null; 
    MaterialProperty metallicGlossTexture = null;
    MaterialProperty smoothness = null;
    MaterialProperty smoothnessScale = null;
    MaterialProperty smoothnessTextureChannel = null;

    MaterialProperty normalTexture = null;
    MaterialProperty normalScale = null;

    MaterialProperty parallaxTexture = null;
    MaterialProperty parallaxScale = null;
    
    MaterialProperty occlusionTexture = null;
    MaterialProperty occlusionStrength = null;

    MaterialProperty reflection = null;

    MaterialProperty emission = null;
    MaterialProperty emissionTexture = null;
    MaterialProperty emissionColor = null;

    MaterialProperty cullMode = null;
    MaterialProperty renderMode = null;

    MaterialProperty alphaTest = null;
    MaterialProperty alphaCutoff = null;

    MaterialProperty alphaBlend = null;
    MaterialProperty srcBlendMode = null;
    MaterialProperty dstBlendMode = null;
    MaterialProperty depthWrite = null;
    MaterialProperty depthTest = null;

    MaterialEditor m_MaterialEditor;

    

    public void FindProperties(MaterialProperty[] props)
    {
        diffuseTexture = FindProperty("_MainTex", props);
        diffuseColor = FindProperty("_Color", props);

        metallic = FindProperty("_Metallic", props);
        metallicGlossTexture = FindProperty("_MetallicGlossMap", props);
        smoothness = FindProperty("_Glossiness", props);
        smoothnessScale = FindProperty("_GlossMapScale", props);
        smoothnessTextureChannel = FindProperty("_SmoothnessTextureChannel", props);

        occlusionTexture = FindProperty("_OcclusionMap", props);
        occlusionStrength = FindProperty("_OcclusionStrength", props);

        normalTexture = FindProperty("_BumpMap", props);
        normalScale = FindProperty("_BumpScale", props);

        parallaxTexture = FindProperty("_ParallaxMap", props);
        parallaxScale = FindProperty("_Parallax", props);

        reflection = FindProperty("_Reflection", props);

        emission = FindProperty("_EnableEmission", props);
        emissionTexture = FindProperty("_EmissionMap", props);
        emissionColor = FindProperty("_EmissionColor", props);

        renderMode = FindProperty("_Mode", props);
        cullMode = FindProperty("_Cull", props);

        alphaTest = FindProperty("_AlphaTest", props, false);
        alphaCutoff = FindProperty("_Cutoff", props, false);

        alphaBlend = FindProperty("_AlphaBlend", props, false);
        srcBlendMode = FindProperty("_SrcBlend", props);
        dstBlendMode = FindProperty("_DstBlend", props);

        depthWrite = FindProperty("_ZWrite", props);
        depthTest = FindProperty("_ZTest", props);
    }

    public override void OnGUI(MaterialEditor materialEditor, MaterialProperty[] props)
    {
        // render the default gui
        FindProperties(props);
        m_MaterialEditor = materialEditor;
        Material material = materialEditor.target as Material;

        //if (m_FirstTimeApply)
        //{
        //    onChangeRender(material, (RenderMode)material.GetFloat("_Mode"));
        //    m_FirstTimeApply = false;
        //}

        ShaderPropertiesGUI(material);
    }

    public void ShaderPropertiesGUI(Material material)
    {
        // Use default labelWidth
        EditorGUIUtility.labelWidth = 0f;

        // Detect any changes to the material
        EditorGUI.BeginChangeCheck();
        {
            //renderMode
            GUILayout.BeginHorizontal();
            GUILayout.Label(Styles.renderModeText, GUILayout.Width(120));
            var mode = (RenderMode)renderMode.floatValue;
            mode = (RenderMode)EditorGUILayout.Popup((int)mode, Styles.renderModeNames);
            GUILayout.EndHorizontal();

            //Primary properties
            GUILayout.Label(Styles.PrimaryText, EditorStyles.boldLabel);

            //Diffuse
            m_MaterialEditor.TexturePropertySingleLine(Styles.diffuseText, diffuseTexture, diffuseColor);
            
            //metallic
            bool hasGlossMap = false;
            hasGlossMap = metallicGlossTexture.textureValue != null;
            m_MaterialEditor.TexturePropertySingleLine(Styles.metallicText, metallicGlossTexture, hasGlossMap ? null : metallic);

            //smoothness
            //m_MaterialEditor.ShaderProperty(smoothness, Styles.smoothnessText, MaterialEditor.kMiniTextureFieldLabelIndentLevel);
            bool showSmoothnessScale = hasGlossMap;
            int smoothnessChannel = (int)smoothnessTextureChannel.floatValue;
            if (smoothnessChannel == (int)SmoothnessTextureChannelMode.Albedo_Alpha)
            {
                showSmoothnessScale = true;
            }
            int indentation = 2; // align with labels of texture properties
            m_MaterialEditor.ShaderProperty(showSmoothnessScale ? smoothnessScale : smoothness, showSmoothnessScale ? Styles.smoothnessScaleText : Styles.smoothnessText, indentation);

            //smoothnessTextureChannel
            GUILayout.BeginHorizontal();
            GUILayout.Label("", GUILayout.Width(26));
            GUILayout.Label(Styles.smoothnessTextureChannelText, GUILayout.Width(120));
            var smoothMode = (SmoothnessTextureChannelMode)smoothnessTextureChannel.floatValue;
            smoothMode = (SmoothnessTextureChannelMode)EditorGUILayout.Popup((int)smoothMode, Styles.smoothnessTextureChannelModeNames);
            GUILayout.EndHorizontal();

            //mormal
            bool hasNormalTexture = false;
            hasNormalTexture = normalTexture.textureValue != null;
            m_MaterialEditor.TexturePropertySingleLine(Styles.normalMapText, normalTexture, hasNormalTexture ? normalScale : null);

            //parallax
            bool hasparallaxTexture = false;
            hasparallaxTexture = parallaxTexture.textureValue != null;
            m_MaterialEditor.TexturePropertySingleLine(Styles.parallaxText, parallaxTexture, hasparallaxTexture ? parallaxScale : null);

            //occlusion
            bool hasOcclusion = false;
            hasOcclusion = occlusionTexture.textureValue != null;
            m_MaterialEditor.TexturePropertySingleLine(Styles.occlusionText, occlusionTexture, hasOcclusion ? occlusionStrength : null);

            //reflection
            m_MaterialEditor.ShaderProperty(reflection, Styles.reflectionText);

            //emission
            m_MaterialEditor.ShaderProperty(emission, Styles.emissionText);
            if (emission.floatValue == 1)
            {
                m_MaterialEditor.TexturePropertySingleLine(Styles.emissionMapText, emissionTexture, emissionColor);
            }

            //scaleAndOffset
            m_MaterialEditor.TextureScaleOffsetProperty(diffuseTexture);

            GUILayout.Box("", GUILayout.Height(1), GUILayout.ExpandWidth(true));

            //Advanced properties
            GUILayout.Label(Styles.AdvancedText, EditorStyles.boldLabel);
            //alphaTest
            m_MaterialEditor.ShaderProperty(alphaTest, Styles.alphaTest);
            if (alphaTest.floatValue == 1)
            {
                m_MaterialEditor.ShaderProperty(alphaCutoff, Styles.alphaCutoffText, MaterialEditor.kMiniTextureFieldLabelIndentLevel + 1);
            }

            //alphaBlend
            m_MaterialEditor.ShaderProperty(alphaBlend, Styles.alphaBlendText);
            var dstMode = (DstBlendMode)dstBlendMode.floatValue;
            var srcMode = (SrcBlendMode)srcBlendMode.floatValue;
            if (alphaBlend.floatValue == 1)
            {
                GUILayout.BeginHorizontal();
                GUILayout.Label("", GUILayout.Width(20));
                srcMode = (SrcBlendMode)EditorGUILayout.Popup((int)srcMode, Styles.srcBlendNames);
                dstMode = (DstBlendMode)EditorGUILayout.Popup((int)dstMode, Styles.dstBlendNames);
                GUILayout.EndHorizontal();
            }

            //depthWrite
            GUILayout.BeginHorizontal();
            GUILayout.Label(Styles.depthWriteText, GUILayout.Width(120));
            var depthW = (DepthWrite)depthWrite.floatValue;
            depthW = (DepthWrite)EditorGUILayout.Popup((int)depthW, Styles.depthWriteNames);
            GUILayout.EndHorizontal();

            //depthTest
            GUILayout.BeginHorizontal();
            GUILayout.Label(Styles.depthTestText, GUILayout.Width(120));
            var depthT = (DepthTest)depthTest.floatValue;
            depthT = (DepthTest)EditorGUILayout.Popup((int)depthT, Styles.depthTestNames);
            GUILayout.EndHorizontal();

            //cullMode
            GUILayout.BeginHorizontal();
            GUILayout.Label(Styles.cullModeText, GUILayout.Width(120));
            var cull = (CullMode)cullMode.floatValue;
            cull = (CullMode)EditorGUILayout.Popup((int)cull, Styles.cullModeNames);
            GUILayout.EndHorizontal();

            if (EditorGUI.EndChangeCheck())
            {
                m_MaterialEditor.RegisterPropertyChangeUndo("Rendering Mode");

                //renderMode
                renderMode.floatValue = (float)mode;
                onChangeRender(material, (RenderMode)material.GetFloat("_Mode"));

                //smoothnessTextureChannel
                smoothnessTextureChannel.floatValue = (float)smoothMode;
                material.SetInt("_SmoothnessTextureChannel", (int)smoothMode);
                if (smoothnessTextureChannel.floatValue == 1)
                {
                    material.EnableKeyword("Smoothness_DiffuseTexture_Alpha");
                }
                else
                {
                    material.DisableKeyword("Smoothness_DiffuseTexture_Alpha");
                }

                //cullMode
                cullMode.floatValue = (float)cull;
                material.SetInt("_Cull", (int)cull);

                if ((RenderMode)material.GetFloat("_Mode") == RenderMode.Custom)
                {
                    //alphaTest
                    if (alphaTest.floatValue == 1)
                    {
                        material.EnableKeyword("EnableAlphaCutoff");
                        material.EnableKeyword("_ALPHATEST_ON");
                    }
                    else
                    {
                        material.DisableKeyword("EnableAlphaCutoff");
                        material.DisableKeyword("_ALPHATEST_ON");
                    }

                    //alphaBlend
                    if (alphaBlend.floatValue == 1)
                    {
                        srcBlendMode.floatValue = (float)srcMode;
                        dstBlendMode.floatValue = (float)dstMode;
                        material.SetInt("_SrcBlend", (int)srcMode);
                        material.SetInt("_DstBlend", (int)dstMode);
                        material.EnableKeyword("_ALPHABLEND_ON");
                        material.SetInt("_AlphaBlend", 1);
                    }
                    else
                    {
                        material.DisableKeyword("_ALPHABLEND_ON");
                        material.SetInt("_AlphaBlend", 0);
                        material.SetInt("_SrcBlend", (int)1);
                        material.SetInt("_DstBlend", (int)0);
                    }

                    //depthWrite
                    depthWrite.floatValue = (float)depthW;
                    material.SetInt("_ZWrite", (int)depthW);

                    //depthTest
                    depthTest.floatValue = (float)depthT;
                    material.SetInt("_ZTest", (int)depthT);

                }

                if (parallaxTexture.textureValue != null)
                {
                    material.EnableKeyword("ParallaxTexture");
                }
                else
                {
                    material.DisableKeyword("ParallaxTexture");
                }

                if (metallicGlossTexture.textureValue != null)
                {
                    material.EnableKeyword("MetallicGlossTexture");
                }
                else
                {
                    material.DisableKeyword("MetallicGlossTexture");
                }

                if (reflection.floatValue == 1)
                {
                    material.EnableKeyword("EnableReflection");
                }
                else
                {
                    material.DisableKeyword("EnableReflection");
                }

                if (emission.floatValue == 1)
                {
                    material.EnableKeyword("EnableEmission");
                }
                else
                {
                    material.DisableKeyword("EnableEmission");
                }
            }
        }
        m_MaterialEditor.RenderQueueField();
    }

    public void onChangeRender(Material material, RenderMode mode)
    {
        switch (mode)
        {
            case RenderMode.Opaque:
                material.SetInt("_Mode", 0);
                material.SetInt("_AlphaTest", 0);
                material.SetInt("_AlphaBlend", 0);
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.One);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.Zero);
                material.SetInt("_ZWrite", 1);
                material.SetInt("_ZTest", 4);
                material.DisableKeyword("_ALPHATEST_ON");
                material.DisableKeyword("_ALPHABLEND_ON");
                material.DisableKeyword("ALPHAPREMULTIPLY_ON");
                material.DisableKeyword("EnableAlphaCutoff");
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Geometry;
                break;
            case RenderMode.Cutout:
                material.SetInt("_Mode", 1);
                material.SetInt("_AlphaTest", 1);
                material.SetInt("_AlphaBlend", 0);
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.One);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.Zero);
                material.SetInt("_ZWrite", 1);
                material.SetInt("_ZTest", 4);
                material.EnableKeyword("_ALPHATEST_ON");
                material.DisableKeyword("_ALPHABLEND_ON");
                material.DisableKeyword("ALPHAPREMULTIPLY_ON");
                material.EnableKeyword("EnableAlphaCutoff");
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.AlphaTest;
                break;
            case RenderMode.Fade:
                material.SetInt("_Mode", 2);
                material.SetInt("_AlphaTest", 0);
                material.SetInt("_AlphaBlend", 1);
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.SrcAlpha);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
                material.SetInt("_ZWrite", 0);
                material.SetInt("_ZTest", 4);
                material.DisableKeyword("_ALPHATEST_ON");
                material.EnableKeyword("_ALPHABLEND_ON");
                material.DisableKeyword("ALPHAPREMULTIPLY_ON");
                material.DisableKeyword("EnableAlphaCutoff");
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Transparent;
                break;
            case RenderMode.Transparent:
                material.SetInt("_Mode", 3);
                material.SetInt("_AlphaTest", 0);
                material.SetInt("_AlphaBlend", 1);
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.One);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
                material.SetInt("_ZWrite", 0);
                material.SetInt("_ZTest", 4);
                material.DisableKeyword("_ALPHATEST_ON");
                material.EnableKeyword("_ALPHABLEND_ON");
                material.EnableKeyword("ALPHAPREMULTIPLY_ON");
                material.DisableKeyword("EnableAlphaCutoff");
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Transparent;
                break;
            case RenderMode.Custom:
                material.SetInt("_Mode", 4);
                material.renderQueue = material.GetInt("_RenderQueue");
                break;
            default:
                material.SetInt("_Mode", 0);
                material.SetInt("_AlphaTest", 0);
                material.SetInt("_AlphaBlend", 0);
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.One);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.Zero);
                material.SetInt("_ZWrite", 1);
                material.SetInt("_ZTest", 4);
                material.DisableKeyword("_ALPHATEST_ON");
                material.DisableKeyword("_ALPHABLEND_ON");
                material.DisableKeyword("ALPHAPREMULTIPLY_ON");
                material.DisableKeyword("EnableAlphaCutoff");
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Geometry;
                break;
        }
    }

    public static class Styles
    {
        public static GUIStyle optionsButton = "PaneOptions";
        public static GUIContent uvSetLabel = new GUIContent("UV Set");
        public static GUIContent[] uvSetOptions = new GUIContent[] { new GUIContent("UV channel 0"), new GUIContent("UV channel 1") };

        public static string emptyTootip = "";
        public static GUIContent diffuseText = new GUIContent("Albedo", "Albedo (RGB) and Transparency (A)");
        public static GUIContent specularText = new GUIContent("Specular", "Specular (RGB) and Transparency (A)");
        public static GUIContent specularShininessText = new GUIContent("Shininess", "Specular Range");
        
        public static GUIContent metallicText = new GUIContent("MetallicGloss", "Metallic");
        public static GUIContent smoothnessText = new GUIContent("Smoothness", "Smoothness");
        public static GUIContent smoothnessScaleText = new GUIContent("Smoothness Scale", "Smoothness scale factor");
        public static GUIContent smoothnessTextureChannelText = new GUIContent("Source", "Smoothness texture and channel");

        public static GUIContent normalMapText = new GUIContent("Normal Map", "Normal Map");
        public static GUIContent parallaxText = new GUIContent("Parallax Map", "Parallax Map");
       
        public static GUIContent occlusionText = new GUIContent("Occlusion Map", "Occlusion");
        public static GUIContent reflectionText = new GUIContent("Enable Reflection", "Enable Reflection");
        public static GUIContent emissionText = new GUIContent("Enable Emission", "Enable Emission");
        public static GUIContent emissionMapText = new GUIContent("Emission", "Emission");

        public static GUIContent cullModeText = new GUIContent("Cull", "CullMode");
        public static GUIContent renderModeText = new GUIContent("RenderMode", "RenderMode");
        public static GUIContent alphaTest = new GUIContent("AlphaTest", "AlphaTest");
        public static GUIContent alphaCutoffText = new GUIContent("Alpha Cutoff", "Threshold for alpha cutoff");
        public static GUIContent alphaBlendText = new GUIContent("AlphaBlend", "AlphaBlend");
        public static GUIContent depthWriteText = new GUIContent("DepthWrite", "DepthWrite");
        public static GUIContent depthTestText = new GUIContent("DepthTest", "DepthTest");

        public static string whiteSpaceString = " ";
        public static string PrimaryText = "Primary Properties";
        public static string AdvancedText = "Advanced Properties";

        public static readonly string[] srcBlendNames = Enum.GetNames(typeof(SrcBlendMode));
        public static readonly string[] dstBlendNames = Enum.GetNames(typeof(DstBlendMode));
        public static readonly string[] renderModeNames = Enum.GetNames(typeof(RenderMode));
        public static readonly string[] cullModeNames = Enum.GetNames(typeof(CullMode));
        public static readonly string[] depthWriteNames = Enum.GetNames(typeof(DepthWrite));
        public static readonly string[] depthTestNames = Enum.GetNames(typeof(DepthTest));
        public static readonly string[] smoothnessTextureChannelModeNames = Enum.GetNames(typeof(SmoothnessTextureChannelMode));
    }
}
//#endif  
