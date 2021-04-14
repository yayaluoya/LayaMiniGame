import { PlatformCommonEvent } from "../Common/PlatformCommonEventId";
import PlatformData from "../Data/PlatformData";
import PlatformManagerProxy from "../PlatformManagerProxy";
import { EPlatformType } from "../T/EPlatformType";
import WXPlatform from "./WXPlatform";
/**
 * QQ平台实例
 */
export default class QQPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.QQ;
    blockAd: any;
    appBox: any;
    Init(platformData: PlatformData) {
        this._base = window["qq"];
        if (this._base == null) {
            console.error("平台初始化错误", PlatformManagerProxy.platformStr);
            return;
        }
        this.platformData = platformData;
        this.recordManager.Platform = this;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        window["iplatform"] = this;
        console.error("平台初始化完成", PlatformManagerProxy.platformStr);
    }

    protected _InitSystemInfo() {
        try {
            let systemInfo = this._base.getSystemInfoSync();
            this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
            this.safeArea = {} as PlatformCommonDefine.SafeArea;
            this.safeArea.width = systemInfo.windowWidth;
            this.safeArea.height = systemInfo.windowHeight;
            this.safeArea.top = systemInfo.statusBarHeight;
            this.safeArea.bottom = 0;

            console.log("QQ覆写_InitSystemInfo", this.safeArea);
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }

    protected _CreateBannerAd(show?: boolean) {
        if (!this.platformData.bannerId) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        let styleObj = {};

        styleObj["top"] = windowHeight - 80;
        styleObj["width"] = 300;
        styleObj["left"] = (windowWidth - styleObj["width"]) / 2;
        bannerObj["style"] = styleObj;

        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;

        this._bannerAd.onLoad(() => {
            console.log("qq banner加载成功", this._bannerAd);
            this._isBannerLoaded = true;
            if (show) {
                this._bannerAd.show();
            }
        });

        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });

        this._bannerAd.onResize((size) => {
            console.log("onResize", size);
            this._bannerAd.style.top = windowHeight - 80;
            this._bannerAd.style.left = (windowWidth - 300) / 2;
            console.log("onResize", this._bannerAd);
        });
        // super._CreateBannerAd();
    }

    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }
    isBannerShowing: boolean = false;
    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
        this.isBannerShowing = true;
        Laya.timer.loop(15 * 1000, this, this.refreshBanner);
    }
    refreshBanner() {
        if (this.isBannerShowing) {
            console.log('refresh banner');
            this._bannerAd.hide();
            this._CreateBannerAd(true);
        }
    }
    HideBannerAd() {

        if (!this.IsBannerAvaliable()) return;
        if (this._bannerAd) {
            this._bannerAd.hide();
            Laya.timer.clear(this, this.refreshBanner);
            this.isBannerShowing = false;
        }
        this._CreateBannerAd();

    }

    protected _DoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(PlatformCommonEvent.PAUSE_AUDIO);
        this._rewardVideo.show();
    }

    protected _DoNoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (!this._isVideoLoaded || !this._rewardVideo) {
            if (!this.platformData.rewardVideoId) {
                console.log("无有效的视频广告ID,取消加载");
                onSkipped.run();
                return;
            }
            let createRewardedVideoAd = this._base["createRewardedVideoAd"];
            if (createRewardedVideoAd == null) {
                console.error("无createRewardedVideoAd方法,跳过初始化");
                onSkipped.run();
                return;
            }
            this._videoFailedCount = 0;
            let videoObj = {};
            videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
            this._rewardVideo = createRewardedVideoAd(videoObj);
            this._rewardVideo.onLoad(() => {
                console.log("视频广告加载成功");
                this._isVideoLoaded = true;
            });
            this._rewardVideo.onError((res) => {
                this._videoFailedCount++;
                console.error("视频广告加载失败", res, this._videoFailedCount);
            });
            this._rewardVideo.onClose((res) => {
                Laya.stage.event(PlatformCommonEvent.RESUM_AUDIO);
                console.log(" NoCache - 视频回调", res);
                let isEnd = res["isEnded"] as boolean;
                console.log("noCache---", isEnd, "----", !!this._rewardSuccessed, "-----", !!this._rewardSkipped);
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        }
        this._rewardVideo.show().then(() => {
            //
        }).catch(err => {
            console.log("广告组件出现问题", err);
            // 可以手动加载一次
            this._rewardVideo.load().then(() => {
                console.log("手动加载成功");
                // 加载成功后需要再显示广告
                return this._rewardVideo.show().then(() => {
                    //
                });
            });
        });;
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        } else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }

    ShowRewardVideoAdAsync(): Promise<boolean> {
        return new Promise(function (resolve) {
            PlatformManagerProxy.instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }, null, true), Laya.Handler.create(this, () => {
                resolve(false);
            }, null, true));
        });
    }
    ShowInterstitalAd() {
        if (!this._isInterstitialLoaded) {
            console.error("插页广告尚未加载好");
            return;
        }
        this._intersitialAd.show();
    }

    OpenGameBox(appIds: string[] = []) {
        this.showAppBox();
    }
    /**
     * 盒子广告
     */
    showAppBox() {
        if (this.appBox) {
            this.appBox.show();
        }
    }
    createAppBox(show?: boolean) {
        if (!this.appBox) {
            this.appBox = this._base.createAppBox({
                adUnitId: ''
            });
        }

        this.appBox.load().then(() => {
            if (show) {
                this.appBox.show();
            }
        });
        this.appBox.onClose(() => {
            console.log('关闭盒子');
        });

    }
    hideAppBox() {
        if (this.appBox) {
            this.appBox.destroy();
        }
    }
    /**
     * 积木广告 1-5
     */
    showBlockAd(count: number = 1) {
        let obj = {
            adUnitId: "",
            style: { left: 55, top: Laya.stage.height / 2 },
            size: count,//范围是1~5，积木广告的个数（展示以实际拉取广告数量为准）
            orientation: 'vertical'//landscape 或者 vertical，积木广告横向展示或者竖向展示
        }
        this.blockAd = this._base.createBlockAd(obj);
        this.blockAd.onLoad(() => {
            console.log('积木广告加载完成');
            this.blockAd.show().then(() => { console.log('积木展示成功') }).catch(e => {
                console.error('积木展示失败', e);
            });
        });
        this.blockAd.onError((err?) => {
            console.error('积木广告加载错误', err);
        });
        this.blockAd.onResize((res?) => {
            console.log('积木resize', res);
        });
    }
    hideBlockAd() {
        if (this.blockAd) {
            this.blockAd.hide();
            this.blockAd.destroy();
        }
    }


}

//
interface BlockADItem {
    adUnitId: string;
    style: { left: number, top: number };
    size: number;//范围是1~5，积木广告的个数（展示以实际拉取广告数量为准）
    orientation: string;//landscape 或者 vertical，积木广告横向展示或者竖向展示
}