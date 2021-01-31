import DefaultRecordManager from "./DefaultRecordManager";
/**
 * web录屏工具
 */
export class WebRecordManager extends DefaultRecordManager {

    supportRecord = false;

    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler) {
        if (this.supportRecord) {
            console.log("强制模拟成功");
            if (onSuccess) {
                onSuccess.run();
            }
        } else {
            console.log("强制模拟失败");
            if (onFailed) {
                onFailed.run();
            }
        }

    }
}