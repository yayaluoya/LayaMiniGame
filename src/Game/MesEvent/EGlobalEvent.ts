import MesT from "src/_T/Mes/MesT";

/**
 * 全局事件
 */
export enum EGlobalEvent {
    /** 游戏初始化 */
    GameInit,
    /** 游戏初始化完成 */
    GameOnInit,
    /** 游戏加载 */
    GameLoading,
    /** 游戏资源加载 */
    GameResLoading,
}

//
MesT.packE(EGlobalEvent);