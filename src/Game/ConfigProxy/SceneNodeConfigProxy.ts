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

    /**
     * 通过id获取数据
     * @param _id id
     */
    public static byIdGetData(_id: number): _SceneNodeConfig.DataType {
        return this.instance.m_dataList.find((item) => {
            return item.id == _id;
        });
    }
}