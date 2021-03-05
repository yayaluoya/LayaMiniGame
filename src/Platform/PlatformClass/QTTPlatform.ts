import { PlatformCommonEvent } from "../Common/PlatformCommonEventId";
import PlatformData from "../Data/PlatformData";
import { EPlatformType } from "../T/EPlatformType";
import WXPlatform from "./WXPlatform";
/**
 * 趣头条实例
 */
export default class QTTPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.QTT;


    Init(platformData: PlatformData) {
        this._base = window["qttGame"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this.platformData = platformData;
        this.recordManager.Platform = this;
        // this._InitLauchOption();
        // this._Login();
        // this._InitShareInfo();
        // this._InitSystemInfo();
        // this._CreateBannerAd();
        // this._CreateVideoAd();
        // this._CreateInterstitalAd();

        window["iplatform"] = this;
    }

    IsBannerAvaliable() {
        return true;
    }

    ShowBannerAd() {
        this._base.showBanner({ index: 1 });
    }

    HideBannerAd() {
        this._base.hideBanner();
    }

    IsVideoAvaliable() {
        return true;
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        let options = {} as any;
        options.index = 1;//广告位置（1，2，3，4...）
        options.gametype = 1;//互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
        options.rewardtype = 1;//互动广告框，只有 1
        options.data = {};
        options.data.title = "获得奖励";//互动抽中奖后的道具提示文字
        Laya.stage.event(PlatformCommonEvent.PAUSE_AUDIO);
        this._base.showVideo(
            (res) => {
                Laya.stage.event(PlatformCommonEvent.RESUM_AUDIO);
                if (res == 1) {
                    // 播放完成，发放奖励
                    if (onSuccess) {
                        onSuccess.run();
                    }
                } else {
                    //res = 0    填充不足
                    //res = 2    提前关闭
                    if (onSkipped) {
                        onSkipped.run();
                    }
                }
            }
            , options);
    }

    ShowInterstitalAd() {
        // 趣头条插页广告转接为互动广告
        this.ShowHDReward();
    }

    /**
     * 显示互动广告
     */
    public ShowHDReward() {
        let options = {} as any;
        options.index = 1;
        options.rewardtype = 1;
        this._base.showHDReward(options);
    }

    RecordEvent(eventId: string, param: object) {
        console.log("记录事件", eventId, param);
    }
}