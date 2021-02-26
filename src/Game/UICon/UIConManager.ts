import BaseUIConManager from "src/_T/D2/FGUI/BaseUIConManager";
import UIConManagerProxy from "./UIConManagerProxy";

/**
 * ui控制器管理器
 */
export default class UIConManager extends BaseUIConManager<UIConManagerProxy> {
    /** 单例 */
    private static _instance: UIConManager;
    public static get instance(): UIConManager {
        if (this._instance == null) {
            this._instance = new UIConManager();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    protected _init() {
        //
    }
}