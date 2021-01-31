import { IDevice } from "../T/IDevice";

/**
 * 默认设备
 */
export default class DefaultDevice implements IDevice {
    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
        //判断平台是否支持
        if (!navigator.vibrate) {
            // 不支持
            console.log("不支持设备震动！");
            return;
        }
        //
        if (isLong) {
            navigator.vibrate(400);
        } else {
            navigator.vibrate(15);
        }
    }
}