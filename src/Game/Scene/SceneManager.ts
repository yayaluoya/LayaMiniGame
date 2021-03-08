import Scene from "src/_T/D3/scene/Scene";
import InstanceT from "src/_T/Ts/InstanceT";
import { _EAllExportSceneName } from "../_sceneName/_EAllExportSceneName";

/**
 * 场景管理器
 * 管理场景，获取场景，然后通过场景实例构建场景中对象的节点
 */
@InstanceT.DecorateInstance()
export default class SceneManager {
    /** 单例 */
    public static readonly instance: SceneManager;
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
            continue;
            //根据不同的场景实例化不同的类
            switch (_name) { }
        }
    }
}