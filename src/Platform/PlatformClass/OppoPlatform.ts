import DefaultDevice from "../Device/DefaultDevice";
import DefaultRecordManager from "../Record/DefaultRecordManager";
import { EPlatformType } from "../T/EPlatformType";
import { ShareInfo } from "../T/ShareInfo";
import WXPlatform from "./WXPlatform";
import IRecordManager from "../T/IRecordManager";
import { IDevice } from "../T/IDevice";
import { PlatformCommonEvent } from "../Common/PlatformCommonEventId";
import PlatformManagerProxy from "../PlatformManagerProxy";
import PlatformData from "../Data/PlatformData";
/**
 * OPPO平台实例
 */
export default class OppoPlatform extends WXPlatform {

    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.OPPO;
    safeArea: PlatformCommonDefine.SafeArea = null;
    lauchOption: PlatformCommonDefine.LaunchOption;
    loginState: PlatformCommonDefine.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();
    device: IDevice = new DefaultDevice();
    systemInfo: any;

    /**
     * 是否支持直接跳转到其他小程序
     */
    isSupportJumpOther: boolean = true;

    protected _data: PlatformData;

    protected _bannerAd;
    protected _rewardVideo;
    protected _isBannerLoaded: boolean = false;
    protected _isVideoLoaded: boolean = false;
    protected _isInterstitialLoaded: boolean = false;
    protected _isInterstitialCanShow: boolean = true;
    protected _nativeAdLoaded: boolean = false;
    protected _videoFailedCount: number;
    protected _interstitalFailedCount: number;
    protected _nativeAdFailedCount: number;

    protected _rewardSuccessed: Laya.Handler;
    protected _rewardSkipped: Laya.Handler;

    protected _cacheScreenScale: number;

    protected _shareVideoBtn;

    protected _base: any;

    protected _cacheVideoAD: boolean = false;

    Init(platformData: PlatformData) {
        this._base = window["qg"];
        if (this._base == null) {
            console.error("平台初始化错误", PlatformManagerProxy.platformStr);
            return;
        }
        this.platformData = platformData;
        this.recordManager.Platform = this;
        this._InitLauchOption();
        this._Login();
        this._InitSystemInfo();
        this.getSystemInfo();
        if (this.systemInfo.platformVersion >= 1051) {
            // 不需要在进行initAdService
        } else {
            this._base.initAdService({
                appId: platformData.appId,
                isDebug: true,
                success: () => {
                    console.log("oppo广告", "初始化广告服务成功", platformData);
                    // 不提前进行预加载
                    // this._CreateBannerAd();
                    this._CreateVideoAd();
                    // this._CreateInterstitalAd();
                    // this.intersitialAd = new NativeADUnit(platformData.interstitialId);
                    // this.iconNative = new NativeADUnit(platformData.nativeId);
                    // this.nativeAd = new NativeADUnit(platformData.nativeId);
                },
                fail: () => {
                    console.error("oppo广告", "初始化广告服务失败");
                }
            });
        }

        window["iplatform"] = this;
    }

    private getSystemInfo() {
        this._base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log(this.systemInfo);
            },
            fail: () => { },
            complete: () => { }
        });
    }
    /**
     * 上报数据
     */
    reportMonitor() {
        console.log('oppo上报数据', this.systemInfo);
        if (this.systemInfo && this.systemInfo.platformVersion >= 1060) {
            this._base.reportMonitor('game_scene', 0);
        }
    }

    _CheckUpdate() {

    }

    protected _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {} as PlatformCommonDefine.LoginData;
        loginData.success = (res) => {
            this._OnLoginSuccess(res);
        };
        loginData.fail = (res) => {
            console.error(PlatformManagerProxy.platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = (res) => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this._base.login(loginData);
    }

    protected _OnLoginSuccess(res: any) {
        console.log(PlatformManagerProxy.platformStr, "登录成功", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.token;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {

    }
    protected _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync() as PlatformCommonDefine.LaunchOption;
        this._OnShow(res);
    }
    /**
     * 是否可以创建桌面图标
     */
    canCreateShortcut(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标是否存在  
                    resolve(res);
                },
                fail: function (err) {
                    reject();
                },
                complete: function () {
                }
            });
        });
    }

    /** 发起创建桌面图标请求 */
    createShortcut() {
        return new Promise<void>((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        })
                    } else {
                        resolve();
                    }
                } as any,
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }

    protected _CreateInterstitalAd() {
        // if (!this._platformData.interstitialId) {
        //     console.log("无有效的插页广告ID,取消加载");
        //     return;
        // }
        // this._interstitalFailedCount = 0;
        // let intAdObj = {};
        // intAdObj["adUnitId"] = this._platformData.interstitialId;
        // this._intersitialAd = this._base.createInsertAd(intAdObj);

        // this._intersitialAd.onLoad(() => {
        //     console.log("插页广告加载成功");
        //     this._isInterstitialLoaded = true;
        // });
        // this._intersitialAd.onClose(() => {
        //     console.log("插页广告关闭");
        //     this._isInterstitialLoaded = false;
        //     this._intersitialAd.load();
        // });
        // this._intersitialAd.onError((err) => {
        //     this._interstitalFailedCount++;
        //     console.error("插页广告加载失败", err);
        //     if (this._interstitalFailedCount > 10) {
        //         console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
        //         // 失败自动加载广告
        //         this._intersitialAd.load();
        //     }
        // });
    }

    protected _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (this.platformData.rewardVideoId) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId;
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res);
            if (this._videoFailedCount > 10) {
                console.log("第", this._videoFailedCount, "次重新加载视频广告");
                // 失败自动加载广告
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(PlatformCommonEvent.RESUM_AUDIO);
            console.log("视频回调", res);

            let isEnd = res["isEnded"] as boolean;
            // 修复广告bug
            Laya.timer.frameOnce(2, this, () => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });
    }

    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return false;// LTSDK.instance.isADEnable && this._isInterstitialCanShow && CommonSaveData.instance.interstitialCount < 888;
    }
    IsNativeAvaliable() {
        return this._nativeAdLoaded;
    }
    async ShowBannerAd() {
        if (!this.platformData.bannerId) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        if (this._bannerAd) {
            this._bannerAd.show();
            console.log('展示已有banner');
            return;
        }
        this.HideBannerAd();
        this._bannerAd = this._base.createBannerAd(
            {
                adUnitId: this.platformData.bannerId
            });
        let isBannerLoading: boolean = true;
        let loadSuccess: boolean = false;
        this._bannerAd.show().then((res) => {
            console.log("banner加载成功", res);
            if (res['code'] == 0) {
                loadSuccess = true;
            }
            isBannerLoading = false;
        }).catch((res) => {
            console.error("banner加载失败", res);
            isBannerLoading = false;
        })
        while (isBannerLoading) {
            await new Promise<void>((r) => {
                Laya.timer.frameOnce(2, this, () => {
                    r();
                });
            });
        }
        if (loadSuccess) return;

        console.log("banner展示失败,展示native广告");
        // 销毁广告
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }

        // 没有则展示原生
        for (let i = 0; i < this.platformData.nativeIconIds.length; ++i) {
            let ret = await this._ShowNativeBanner(i);
            if (ret) {
                break;
            }
            this._bannerAd.destroy();
        }
    }


    private async _ShowNativeBanner(index: number) {
        let nativeBanner = this.base.createNativeAd({
            adUnitId: this.platformData.nativeBannerIds[index]
        });
        // 转接对象
        this._bannerAd = nativeBanner;

        let loadRet = await nativeBanner.load();
        if (loadRet["code"] == 0) {
            // 加载成功
            let adList = loadRet['adList'] as any[];
            if (adList == null || adList.length == 0) {
                console.error("native banner加载失败", loadRet);
                return false;
            }
            let adData = adList[0] as {
                adId: string,
                imgUrlList: string[],
                logoUrl: string,
                icon: string
            };
            if (adData == null) {
                console.error("native banner加载失败", loadRet);
                return false;
            }
            return true;
        } else {
            console.error("native banner加载失败", loadRet);
            return false;
        }
    }

    HideBannerAd() {
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }
    }
    async ShowNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        // await this._ShowNative();
    }
    HideNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        // this._HideNative();
    }
    // isNativeInterstitialAvaliable(){
    //     return this.intersitialAd.canShowAD
    // }

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
        if (this.platformData.rewardVideoId) {
            console.log("无有效的视频广告ID,取消加载");
            this._rewardSkipped && this._rewardSkipped.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            this._rewardSkipped && this._rewardSkipped.run();
            return;
        }
        if (this._rewardVideo) {
            this._rewardVideo.destroy();
        }
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        console.log("广告创建完成", videoObj);
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(PlatformCommonEvent.RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"] as boolean;
            //
            Laya.timer.frameOnce(2, this, () => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });

        this._rewardVideo.onError((err) => {
            console.log("广告组件出现问题", err);
            if (this._rewardSkipped) this._rewardSkipped.run();
        });
        this._rewardVideo.onLoad((res) => {
            console.log("广告加载成功", res);
        });
        this._rewardVideo.load().then(() => {
            this._rewardVideo.show();
        });


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
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
    }

    GetFromAppId(): string {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (this.lauchOption.referrerInfo.appId) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /** 发起创建桌面图标请求 */
    protected CreatShortcut() {
        return new Promise<void>((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        })
                    } else {
                        resolve();
                    }
                } as any,
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }

    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("分包加载成功", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("分包加载失败", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            console.log("分包加载进度", res);

            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }

    RecordEvent(eventId: string, param: object) {
        console.log("[记录事件]", eventId, param);
    }

    /**
     * 创建分享视频按钮
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    public CreateShareVideoBtn(x: number, y: number, width: number, height: number) {

    }

    /**
     * 隐藏分享视频按钮
     */
    public HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }

    ShowToast(str: string) {
        this._base.showToast(
            {
                title: str,
                duration: 2000
            }
        );
    }

    OpenGameBox(appIds: string[]) {

        console.error("当前平台", PlatformManagerProxy.platformStr, "暂不支持互推游戏盒子");
    }
    /**
     * @param appId oppo vivo传包名
     */
    NavigateToApp(appId: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: appId,
                path: path,
                extraData: extra,
                success: function () {
                    resolve(true);
                    console.log('oppo小游戏跳转成功');
                },
                fail: function (res) {
                    reject(false);
                    console.log('oppo小游戏跳转失败：', JSON.stringify(res));
                }
            });
        })
    }


}
export interface OppoAdData {
    adId: string;
    clickBtnTxt: string;
    creativeType: number;
    desc: string;
    icon: string;
    iconUrlList: Array<string>;
    imgUrlList: Array<string>;
    interactionType: number;
    logoUrl: string;
    title: string;
    /** 是否已上报展示 */
    show_reported?: boolean,
    /** 是否已上报点击 */
    click_reported?: boolean,
}

