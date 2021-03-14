import BaseUIConManager from "src/_T/D2/FGUI/BaseUIConManager";
import InstanceT from "src/_T/Ts/InstanceT";
import UIConManagerProxy from "./UIConManagerProxy";

/**
 * ui控制器管理器
 */
@InstanceT.DecorateInstance()
export default class UIConManager extends BaseUIConManager<UIConManagerProxy> {
    /** 单例 */
    public static readonly instance: UIConManager;
    //
    private constructor() { super(); }

    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    protected _init() {
        //
    }
}