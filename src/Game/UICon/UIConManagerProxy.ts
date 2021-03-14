import { BaseUIConManagerProxy } from "src/_T/D2/FGUI/BaseUIConManager";
import InstanceT from "src/_T/Ts/InstanceT";

/**
 * ui控制器管理器代理
 */
@InstanceT.DecorateInstance()
export default class UIConManagerProxy extends BaseUIConManagerProxy {
    /** 单例 */
    public static readonly instance: UIConManagerProxy;
    //
    private constructor() { super(); }
}