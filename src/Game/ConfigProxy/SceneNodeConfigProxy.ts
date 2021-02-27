import BaseConfigProxy from "src/_T/Config/BaseConfigProxy";
import { _SceneNodeConfig } from "../_config/_SceneNodeConfig";
/**
 * 场景节点配置表代理
 */
export default class SceneNodeConfigProxy extends BaseConfigProxy<_SceneNodeConfig.DataType> {
    /** 单例 */
    private static _instance: SceneNodeConfigProxy;
    public static get instance(): SceneNodeConfigProxy {
        if (this._instance == null) {
            this._instance = new SceneNodeConfigProxy();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    //
    protected initData() {
        this.m_dataList = _SceneNodeConfig.datas;
    }
}