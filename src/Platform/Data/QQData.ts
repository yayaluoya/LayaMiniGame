import PlatformData from "./PlatformData";

/**
 * QQ小游戏数据
 */
export default class QQData extends PlatformData {
    /** 应用ID */
    public appId: string = '';
    public appKey: string = '';
    /** 广告id */
    public bannerId: string = '';
    public rewardVideoId: string = '';
    public interstitialId: string = '';
    public nativeId: string = '';
    //
    public nativeBannerIds: string[] = [];
    public nativeIconIds: string[] = [];
    public nativeinterstitialIds: string[] = [];
    public nativeinpageIds: string[] = [];
    //
    public shareId: string = '';
}