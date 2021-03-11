import BaseConfigProxy from "src/_T/Config/BaseConfigProxy";
import ConfigT from "src/_T/Config/ConfigT";
import InstanceT from "src/_T/Ts/InstanceT";
import { _SceneNodeConfig } from "../_config/_SceneNodeConfig";
/**
 * 场景节点配置表代理
 */
@InstanceT.DecorateInstance()
@ConfigT.DecorateConfigProxy(_SceneNodeConfig)
export default class SceneNodeConfigProxy extends BaseConfigProxy<_SceneNodeConfig.DataType> {
    /** 单例 */
    public static readonly instance: SceneNodeConfigProxy;
    //
    private constructor() { super(); }
}