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
    public byIdGetData(_id: number): _SceneNodeConfig.DataType {
        return this.m_dataList.find((item) => {
            return item.id == _id;
        });
    }

    /**
     * 通过关卡名字获取关卡数据
     * @param _name 关卡名字
     */
    public byNameGetData(_name: string): _SceneNodeConfig.DataType {
        return this.m_dataList.find((item) => {
            return item.name == _name;
        });
    }

    /**
     * 通过场景名字获取数据列表
     * @param _name 场景名字
     */
    public bySceneNameGetData(_name: string): _SceneNodeConfig.DataType[] {
        return this.m_dataList.filter((item) => {
            return item.scene == _name;
        });
    }

    /**
     * 返回场景个数
     */
    public getSceneCount(): number {
        return Math.max(...this.m_dataList.map((item) => {
            return item.id;
        }));
    }
}