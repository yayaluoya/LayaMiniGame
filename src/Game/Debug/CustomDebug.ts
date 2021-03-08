import BaseDebug from "src/_T/Debug/BaseDebug";
import InstanceT from "src/_T/Ts/InstanceT";
/**
 * 自定义调试对象
 */
@InstanceT.DecorateInstance()
export default class CustomDebug extends BaseDebug {
    /** 单例 */
    public static readonly instance: CustomDebug;
    //
    private constructor() { super(); }
}