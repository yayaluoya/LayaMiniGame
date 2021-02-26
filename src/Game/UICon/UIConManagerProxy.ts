import { BaseUIConManagerProxy } from "src/_T/D2/FGUI/BaseUIConManager";

/**
 * ui控制器管理器代理
 */
export default class UIConManagerProxy extends BaseUIConManagerProxy {
    /** 单例 */
    private static _instance: UIConManagerProxy;
    public static get instance(): UIConManagerProxy {
        if (this._instance == null) {
            this._instance = new UIConManagerProxy();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}