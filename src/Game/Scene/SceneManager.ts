import Scene from "src/_T/D3/scene/Scene";
import { _EAllExportSceneName } from "../_sceneName/_EAllExportSceneName";

/**
 * 场景管理器
 * 管理场景，获取场景，然后通过场景实例构建场景中对象的节点
 */
export default class SceneManager {
    /** 单例 */
    private static _instance: SceneManager;
    public static get instance(): SceneManager {
        if (this._instance == null) {
            this._instance = new SceneManager();
        }
        return this._instance;
    }
    //
    private constructor() { }

    /** 场景列表 */
    private m_sceneList: {
        [index: string]: Scene,
    } = {};

    /**
     * 通过场景名字获取场景
     * @param _name 场景名字
     */
    public getScene(_name: string): Scene {
        return this.m_sceneList[_name];
    }

    /**
     * 初始化
     */
    public init() {
        let _name: string;
        //初始化全部场景
        for (let _i in _EAllExportSceneName) {
            _name = _EAllExportSceneName[_i];
            this.m_sceneList[_name] = new Scene(_name);
        }
    }
}