/**
 * 平台数据类
 */
export default class PlatformData {
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
    //分享id
    public shareId: string = '';
}