/**
 * 节点配置
 */
export interface INodeConfig {
    /** 基本名字 */
    name: string;
    /** 子节点，可能是普通节点，也可能是预制体节点 */
    child: (INodeConfig | IPrefabsConfig)[];
    /** 3D变换 */
    transform: ITransform;
}

/**
 * 场景配置
 */
export interface ISceneConfig {
    /** 节点内容 */
    [_index: string]: INodeConfig,
    /** 摄像机 */
    camera: INodeConfig,
    /** 灯光 */
    light: INodeConfig,
}

/**
 * 预制体配置
 */
export interface IPrefabsConfig extends INodeConfig {
    /** 预制体名字 */
    prefabName: string;
    /** 预制体变换 */
    prefabDiffer: IPrefabsDifferConfig;
}

/**
 * 预制体差异配置
 */
export interface IPrefabsDifferConfig {
    /** 索引 */
    index: number;
    /** 3D变换 */
    transform: ITransform;
    /** 子节点 */
    child: IPrefabsDifferConfig[];
}

/**
 * 变换接口
 */
export interface ITransform {
    /** 位置 */
    position: string;
    /** 旋转 */
    euler: string;
    /** 缩放 */
    scale: string;
}

/**
 * 预制体集合
 */
export interface IPrefabsGather {
    [_prefabsName: string]: Laya.Sprite3D[];
}