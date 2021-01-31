import { EPlatformType } from "./EPlatformType";
import IRecordManager from "./IRecordManager";
import { IDevice } from "./IDevice";
import PlatformData from "../Data/PlatformData";
import { ShareInfo } from "./ShareInfo";
/**
 * 平台实例接口
 */
export default interface IPlatform {

    /**
     * 基础句柄
     */
    base: any;

    /**
     * 平台数据
     */
    platformData: PlatformData;

    /**
     * 当前平台
     */
    platform: EPlatformType;

    /**
     * 启动参数
     */
    lauchOption: PlatformCommonDefine.LaunchOption;

    /**
     * 登录状态
     */
    loginState: PlatformCommonDefine.LoginState;

    /**
     * 登录完成回调(成功失败都会调用)
     */
    onLoginEnd: Laya.Handler;

    /**
     * 回到前台
     */
    onResume: Laya.Handler;
    /**
     * 回到前台
     */
    onPause: Laya.Handler;

    /**
     * 视频录制器
     */
    recordManager: IRecordManager;

    /**
     * 设备硬件驱动
     */
    device: IDevice;

    /**
     * 是否支持直接跳转到其他小程序
     */
    isSupportJumpOther: boolean;

    /**
     * 系统信息
     */
    systemInfo: any;

    /**
     * 初始化
     */
    Init(platformData: PlatformData);
    /**
     * 读取本地存储数据
     * @param key 键
     */
    GetStorage(key: string): any;
    /**
     * 设置本地存储数据
     * @param key 键
     */
    SetStorage(key: string, data: any): void;
    /**
     * banner广告是否可以展示
     */
    IsBannerAvaliable(): boolean;

    /**
     * 视频广告是否可以展示
     */
    IsVideoAvaliable(): boolean;

    /**
     * 插页广告是否可以展示
     */
    IsInterstitalAvaliable(): boolean;

    /**
     * 展示banner广告
     */
    ShowBannerAd();

    /**
     * 隐藏banner广告
     */
    HideBannerAd();

    /**
     * 展示有奖视频
     * @param onSuccess 
     * @param onSkipped 
     */
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler);

    /**
     * 异步方法展示广告
     */
    ShowRewardVideoAdAsync(): Promise<boolean>;

    /**
     * 展示插页广告
     */
    ShowInterstitalAd();

    /**
     * 获取来源APPID,如果没有则返回null
     */
    GetFromAppId(): string;

    /**
     * 分享消息
     * @param obj 
     * @param onSuccess 
     * @param onFailed 
     */
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler);

    /**
     * 加载分包内容
     */
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler);

    /**
     * 记录事件
     */
    RecordEvent(eventId: string, param: object);

    /**
     * 检查更新,非外部调用
     */
    _CheckUpdate();

    /**
     * 显示toast
     */
    ShowToast(str: string);

    /**
     * 打开游戏盒子
     */
    OpenGameBox(appIds: string[]);

    /**
     * 跳转到其他小程序
     */
    NavigateToApp(appId: string, path?: string, extra?: any, showGameCenter?: boolean, isBanner?: boolean, adid?: number): Promise<boolean>;
    /**
     * 创建桌面图标
     */
    createShortcut();
}