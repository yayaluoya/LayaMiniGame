import { EPlatformType } from "../T/EPlatformType";
import { ShareInfo } from "../T/ShareInfo";
import DefaultDevice from "../Device/DefaultDevice";
import IPlatform from "../T/IPlatform";
import { WebRecordManager } from "../Record/WebRecordManager";
import IRecordManager from "../T/IRecordManager";
import { IDevice } from "../T/IDevice";
import PlatformManagerProxy from "../PlatformManagerProxy";
import PlatformData from "../Data/PlatformData";
/**
 * 默认平台
 */
export default class DefaultPlatform implements IPlatform {
    base: any;
    platformData: PlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.Web;
    safeArea: PlatformCommonDefine.SafeArea = null;
    lauchOption: PlatformCommonDefine.LaunchOption;
    loginState: PlatformCommonDefine.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new WebRecordManager();
    device: IDevice = new DefaultDevice();
    systemInfo: any = null;

    /**
     * 是否支持直接跳转到其他小程序
     * 默认平台进行强制fake true,方便进行调试
     */
    isSupportJumpOther: boolean = true;

    Init(platformData: PlatformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.recordManager.Platform = this;
        Laya.timer.once(500, this, this._FakeLoginEnd);
    }
    private _FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    IsBannerAvaliable() {
        return false;
    }
    IsVideoAvaliable() {
        return true;
    }
    IsInterstitalAvaliable() {
        return false;
    }
    /**
     * 显示banner
     */
    ShowBannerAd() {
        console.log("调用ShowBannerAd");
    }
    HideBannerAd() {
        console.log("调用HideBannerAd");
    }
    /**
     * 显示激励视频
     */
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        console.log("调用ShowRewardVideoAd");
        //默认看完广告
        onSuccess.run();
    }
    ShowRewardVideoAdAsync(): Promise<boolean> {
        return new Promise(function (resolve) {
            PlatformManagerProxy.instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
    }

    /**
     * 显示插屏广告
     */
    ShowInterstitalAd() {
        console.log("调用ShowInterstitalAd");
    }
    GetFromAppId(): string {
        return null;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null) {
        console.log("分享消息", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        if (onSuccess) {
            onSuccess.run();
        }
    }

    RecordEvent(eventId: string, param: object) {
        console.log("记录事件", eventId, param);
    }

    ShareVideoInfo() {
        console.log(PlatformManagerProxy.platformStr, "暂未实现录屏功能");
    }

    _CheckUpdate() {

    }

    ShowToast(str: string) {
        //
        console.log('显示消息：', str);
    }

    OpenGameBox() {
        console.error("当前平台", PlatformManagerProxy.platformStr, "暂不支持互推游戏盒子");
    }
    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.error("当前平台", PlatformManagerProxy.platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    createShortcut() {
        console.log('创建桌面图标');
    }
    GetStorage(key: string) {
        console.log('读本地存储');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key: string, data: any): void {
        console.log('写本地存储');
        Laya.LocalStorage.setItem(key, data);

    }
}