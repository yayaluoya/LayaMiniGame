import DefaultDevice from "./DefaultDevice";
/**
 * 头条设备
 */
export default class TTDevice extends DefaultDevice {

    protected _base: any;

    constructor(base: any) {
        super();
        this._base = base;
    }

    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
        if (isLong) {
            this._base.vibrateLong({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        } else {
            this._base.vibrateShort({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        }
    }
}