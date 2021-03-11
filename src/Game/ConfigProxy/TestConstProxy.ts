import { BaseConstProxy } from "src/_T/Config/BaseConfigProxy";
import ConfigT from "src/_T/Config/ConfigT";
import InstanceT from "src/_T/Ts/InstanceT";
import { _TestConst } from "../_config/_TestConst";

/**
 * 测试常量配置表代理
 */
@InstanceT.DecorateInstance()
@ConfigT.DecorateConfigProxy(_TestConst)
export default class TestConstProxy extends BaseConstProxy<_TestConst.DataType>{
    /** 单例 */
    public static readonly instance: TestConstProxy;
    //
    private constructor() { super(); }
}