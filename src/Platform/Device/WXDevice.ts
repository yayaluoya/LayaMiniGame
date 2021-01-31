import DefaultDevice from "./DefaultDevice";
/**
 * 微信设备
 */
export default class WXDevice extends DefaultDevice {
    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
        //判断是否在小游戏平台
        if (window['wx']) {
            if (isLong) {
                Laya.timer.callLater(wx, wx.vibrateLong, [null]);
            } else {
                Laya.timer.callLater(wx, wx.vibrateShort, [null]);
            }
        }
    }
}