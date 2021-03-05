import BaseDebug from "src/_T/Debug/BaseDebug";
/**
 * 自定义调试对象
 */
export default class CustomDebug extends BaseDebug {
    /** 单例 */
    private static _instance: CustomDebug;
    public static get instance(): CustomDebug {
        if (this._instance == null) {
            this._instance = new CustomDebug();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}