import ConfigT from "src/_T/Config/ConfigT";
import InstanceT from "src/_T/Ts/InstanceT";
import { _TestConfig } from "../_config/_TestConfig";
import BaseConfigProxy from "src/_T/Config/BaseConfigProxy";

/**
 * 测试配置表代理
 */
@InstanceT.DecorateInstance()
@ConfigT.DecorateConfigProxy(_TestConfig)
export default class TestConfigProxy extends BaseConfigProxy<_TestConfig.DataType>{
    /** 单例 */
    public static readonly instance: TestConfigProxy;
    //
    private constructor() { super(); }
}