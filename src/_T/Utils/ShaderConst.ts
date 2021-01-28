/**
 * Shader常用常量，不够可以自己加
 */
export default class ShaderConst {
    /**
     * 属性表格
     */
    public static AttributeMap: { [index: string]: number } = {
        'a_Position': Laya.VertexMesh.MESH_POSITION0,//顶点在投影空间下的位置
        'a_Color': Laya.VertexMesh.MESH_COLOR0,//顶点色
        'a_Normal': Laya.VertexMesh.MESH_NORMAL0,//顶点在视图坐标系下的法向量
        'a_Texcoord0': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,//第一个uv坐标
        'a_Texcoord1': Laya.VertexMesh.MESH_TEXTURECOORDINATE1,//第二个uv坐标
        'a_BoneWeights': Laya.VertexMesh.MESH_BLENDWEIGHT0,//骨骼权重
        'a_BoneIndices': Laya.VertexMesh.MESH_BLENDINDICES0,//骨骼索引
        'a_Tangent0': Laya.VertexMesh.MESH_TANGENT0,//切向量
        'a_MvpMatrix': Laya.VertexMesh.MESH_MVPMATRIX_ROW0,//MVP矩阵
        'a_WorldMat': Laya.VertexMesh.MESH_WORLDMATRIX_ROW0//世界矩阵
    };

    /** 
     * 统一表格
     */
    public static UniformMap: { [index: string]: number } = {
        /** 
         * 逐精灵(PERIOD_SPRITE)
         */
        'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,//MVP矩阵
        'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE,//世界矩阵
        'u_LightmapScaleOffset': Laya.Shader3D.PERIOD_SPRITE,//光照贴图缩放和偏移
        'u_LightMap': Laya.Shader3D.PERIOD_SPRITE,//光照贴图
        'u_LightMapDirection': Laya.Shader3D.PERIOD_SPRITE,

        /** 
         * 逐相机(PERIOD_CAMERA)
         */
        'u_CameraDirection': Laya.Shader3D.PERIOD_CAMERA,//摄影机方向
        'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,//摄影机位置
        'u_CameraUp': Laya.Shader3D.PERIOD_CAMERA,//摄影机Up向量
        'u_Projection': Laya.Shader3D.PERIOD_CAMERA,//投影矩阵
        'u_ProjectionParams': Laya.Shader3D.PERIOD_CAMERA,//投影参数
        'u_Viewport': Laya.Shader3D.PERIOD_CAMERA,//摄影机视口
        'u_View': Laya.Shader3D.PERIOD_CAMERA,//视图矩阵
        'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,//视图矩阵x投影矩阵

        /**
         * 逐场景(PERIOD_SCENE)
         */
        //事件相关
        'u_Time': Laya.Shader3D.PERIOD_SCENE,//系统时间
        //反射相关
        'u_ReflectTexture': Laya.Shader3D.PERIOD_SCENE,//反射贴图
        'u_ReflectIntensity': Laya.Shader3D.PERIOD_SCENE,//反射强度
        //阴影相关
        'u_ShadowBias': Laya.Shader3D.PERIOD_SCENE,//阴影贴图基于深度的偏移
        'u_ShadowLightDirection': Laya.Shader3D.PERIOD_SCENE,//阴影方向
        'u_ShadowMap': Laya.Shader3D.PERIOD_SCENE,//平行光阴影贴图
        'u_ShadowParams': Laya.Shader3D.PERIOD_SCENE,//阴影参数
        'u_ShadowSplitSpheres': Laya.Shader3D.PERIOD_SCENE,//
        'u_ShadowMatrices': Laya.Shader3D.PERIOD_SCENE,
        'u_ShadowMapSize': Laya.Shader3D.PERIOD_SCENE,//阴影贴图的尺寸
        'u_SpotShadowMap': Laya.Shader3D.PERIOD_SCENE,//聚光灯的阴影贴图
        'u_ShadowLightPosition': Laya.Shader3D.PERIOD_SCENE,
        //景雾化相关
        'u_FogStart': Laya.Shader3D.PERIOD_SCENE,//雾化颜色
        'u_FogRange': Laya.Shader3D.PERIOD_SCENE,//雾化范围
        'u_FogColor': Laya.Shader3D.PERIOD_SCENE,//雾化颜色
        //灯光相关
        'u_DirationLightCount': Laya.Shader3D.PERIOD_SCENE,//平行光数量
        'u_LightBuffer': Laya.Shader3D.PERIOD_SCENE,//灯光缓存
        'u_LightClusterBuffer': Laya.Shader3D.PERIOD_SCENE,//聚类纹理
        'u_AmbientColor': Laya.Shader3D.PERIOD_SCENE,//环境光
        'u_SunLight.direction': Laya.Shader3D.PERIOD_SCENE,//太阳光方向
        'u_SunLight.color': Laya.Shader3D.PERIOD_SCENE,//太阳光颜色
        'u_AmbientSHAr': Laya.Shader3D.PERIOD_SCENE,//球谐光照相关的uniform，一共7个
        'u_AmbientSHAg': Laya.Shader3D.PERIOD_SCENE,
        'u_AmbientSHAb': Laya.Shader3D.PERIOD_SCENE,
        'u_AmbientSHBr': Laya.Shader3D.PERIOD_SCENE,
        'u_AmbientSHBg': Laya.Shader3D.PERIOD_SCENE,
        'u_AmbientSHBb': Laya.Shader3D.PERIOD_SCENE,
        'u_AmbientSHC': Laya.Shader3D.PERIOD_SCENE,
        'u_ReflectionProbe': Laya.Shader3D.PERIOD_SCENE,//反射探针(暂未支持)
        'u_ReflectCubeHDRParams': Laya.Shader3D.PERIOD_SCENE,//反射贴图HDR相关信息
        // ! 平行光相关（老版本，逐步会去除）
        // 'u_DirationLightCount': Laya.Shader3D.PERIOD_SCENE,//平行光数量
        'u_DirectionLight.color': Laya.Shader3D.PERIOD_SCENE,//平行光的颜色
        'u_DirectionLight.direction': Laya.Shader3D.PERIOD_SCENE,//平行光的方向
        // ! 点光相关（老版本，逐步会去除）
        'u_PointLight.position': Laya.Shader3D.PERIOD_SCENE,//点光的位置
        'u_PointLight.range': Laya.Shader3D.PERIOD_SCENE,//点光的范围
        'u_PointLight.color': Laya.Shader3D.PERIOD_SCENE,//点光的颜色
        'u_SpotViewProjectMatrix': Laya.Shader3D.PERIOD_SCENE,//点视图变换矩阵
        // !聚光相关（老版本，逐步会去除）
        'u_SpotLight.position': Laya.Shader3D.PERIOD_SCENE,//聚光的位置
        'u_SpotLight.direction': Laya.Shader3D.PERIOD_SCENE,//聚光的方向
        'u_SpotLight.range': Laya.Shader3D.PERIOD_SCENE,//聚光的范围
        'u_SpotLight.spot': Laya.Shader3D.PERIOD_SCENE,//聚光的角度
        'u_SpotLight.color': Laya.Shader3D.PERIOD_SCENE,//聚光的颜色

        /**
         * 逐材质(PERIOD_MATERIAL)
         */
        'u_DiffuseTexture': Laya.Shader3D.PERIOD_MATERIAL,//
        'u_DiffuseColor': Laya.Shader3D.PERIOD_MATERIAL,//
        'u_SpecularTexture': Laya.Shader3D.PERIOD_MATERIAL,//镜面贴图
        'u_NormalTexture': Laya.Shader3D.PERIOD_MATERIAL,//法线贴图
        'u_AlphaTestValue': Laya.Shader3D.PERIOD_MATERIAL,//透明贴图
        'u_MaterialSpecular': Laya.Shader3D.PERIOD_MATERIAL,//镜面材质
        'u_Shininess': Laya.Shader3D.PERIOD_MATERIAL,//发光
        'u_TilingOffset': Laya.Shader3D.PERIOD_MATERIAL,//平铺偏移量

        /**
         * 自定义
         */
        'u_Bones': Laya.Shader3D.PERIOD_CUSTOM,//骨骼
    };

    /**
     * 状态表格
     */
    public static StateMap: { [index: string]: number } = {
        's_Cull': Laya.Shader3D.RENDER_STATE_CULL,//剔除
        's_Blend': Laya.Shader3D.RENDER_STATE_BLEND,//混合
        's_BlendSrc': Laya.Shader3D.RENDER_STATE_BLEND_SRC,//混合源
        's_BlendDst': Laya.Shader3D.RENDER_STATE_BLEND_DST,//混合目标
        's_DepthTest': Laya.Shader3D.RENDER_STATE_DEPTH_TEST,//深度测试
        's_DepthWrite': Laya.Shader3D.RENDER_STATE_DEPTH_WRITE,//深度写入
    };
}