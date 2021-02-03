import MesT from "src/_T/Mes/MesT";

/**
 * 所有的UI事件
 */
export enum EUIEvent {
    /** 关卡构建进度 */
    SceneGameCustomsLoading,
    /** 3D更新事件 */
    Updata3D,
}

//
MesT.packE(EUIEvent);