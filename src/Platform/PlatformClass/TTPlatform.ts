import PlatformData from "../Data/PlatformData";
import TTDevice from "../Device/TTDevice";
import TTRecordManager from "../Record/TTRecordManager";
import { EPlatformType } from "../T/EPlatformType";
import { IDevice } from "../T/IDevice";
import IRecordManager from "../T/IRecordManager";
import { ShareInfo } from "../T/ShareInfo";
import WXPlatform from "./WXPlatform";
/**
 * 头条平台实例
 */
export default class TTPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.TT;

    protected _showVideoLoad: boolean = false;

    recordManager: IRecordManager;
    device: IDevice;

    Init(platformData: PlatformData) {
        this._base = window["tt"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this.platformData = platformData;
        // 检测是否支持交叉推广
        let tt = this._base;
        let systemInfo = tt.getSystemInfoSync();
        if (systemInfo.platform == "ios") {
            this.isSupportJumpOther = false;
        }
        let [major, minor] = systemInfo.SDKVersion.split(".");
        if (major >= 1 && minor >= 33) {

        } else {
            this.isSupportJumpOther = false;
        }

        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        this.recordManager = new TTRecordManager(this._base);
        this.recordManager.Platform = this;
        this.device = new TTDevice(this._base);

        window["iplatform"] = this;
    }

    protected _CreateBannerAd() {
        if (this.platformData.bannerId) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;

        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        if (this._bannerAd) {
            this._bannerAd.onLoad(() => {
                console.log("banner加载成功", this._bannerAd);
                this._isBannerLoaded = true;
            });

            this._bannerAd.onError((res) => {
                console.error("banner广告加载失败", res);
                this._bannerAd == null;
            });

            this._bannerAd.onResize((size) => {
                this._bannerAd.style.top = windowHeight - size.height;
                this._bannerAd.style.left = (windowWidth - size.width) / 2;
            });
        }
    }

    RecordEvent(eventId: string, param: object) {
        let reportAnalytics = this._base["reportAnalytics"];
        if (reportAnalytics) {
            if (param == null) {
                param = {};
            }
            reportAnalytics(eventId, param);
        } else {
            console.error("reportAnalytics 方法不存在");
        }
    }

    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
    }

    ShareAppMessage(shareInfo: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        console.log("分享消息", shareInfo);

        let shareObj = WXPlatform._WrapShareInfo(shareInfo);
        shareObj["success"] = () => {
            if (onSuccess) {
                onSuccess.run();
            }
        }
        shareObj["fail"] = () => {
            if (onFailed) {
                onFailed.run();
            }
        }
        this._base.shareAppMessage(shareObj);
    }

    OpenGameBox(appIds: string[]) {
        let openData = [];
        for (let i = 0; i < appIds.length; ++i) {
            openData.push({
                appId: appIds[i]
            });
        }
        this._base.showMoreGamesModal({
            appLaunchOptions: openData
        });
    }

    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.isSupportJumpOther) {
                reject(false);
                console.log("当前平台不支持小游戏跳转", this);
            } else {
                this._base.showMoreGamesModal({
                    appLaunchOptions: [
                        {
                            appId: this.platformData.appId,
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }
                    ],
                    success(res) {
                        resolve(true);
                        console.log("跳转小游戏成功", appid);
                    },
                    fail(err) {
                        reject(false);
                        console.log("跳转小游戏失败", appid);
                    }
                });
            }
        });
    }
}