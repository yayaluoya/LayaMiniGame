import MesT from "src/_T/Mes/MesT";

/**
 * 所有的广告事件
 */
export enum EAdEvent {
    /** 看广告 */
    LookAd,
    /** 看完广告 */
    UnLookAd,
}

//
MesT.packE(EAdEvent);