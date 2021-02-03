import MesT from "src/_T/Mes/MesT";

/**
 * 所有的场景事件
 */
export enum ESceneEvent {
    /** 游戏开始 */
    GameStart,
    /** 游戏暂停 */
    GameSuspend,
    /** 游戏继续 */
    GameGoOn,
    /** 游戏重新开始 */
    GameRestart,
    /** 游戏结束 */
    GameEnd,
    /** 游戏完成 */
    GameCom,
    /** 游戏失败 */
    GameFail,
    /** 角色死亡 */
    RoleDie,
    /** 角色复活 */
    RoleRevive,
}

//
MesT.packE(ESceneEvent);