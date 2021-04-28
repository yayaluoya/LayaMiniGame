import ConfigT from "src/_T/Config/ConfigT";
import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import { INodeConfig, ISceneConfig } from "./INodeConfig";
import ISceneEnvironment from "./ISceneEnvironment";
import NodeT from "./NodeT";
import SceneNode from "./SceneNode";
import GlobalD3Environment from "./GlobalD3Environment";
import ArrayUtils from "src/_T/Utils/ArrayUtils";
import ResLoad from "src/_T/Res/ResLoad";
import BaseItemPool from "src/_T/com/BaseItemPool";
import V3Utils from "src/_T/Utils/V3Utils";

/**
 * 场景 实例
 * 根据指定的场景配置表构建场景
 * 本身继承自对象池基类，用来管理预制体精灵
 * * 可以继承此类自定义场景
 */
export default class Scene extends BaseItemPool {
    /** 场景名字 */
    protected _sceneName: string;

    /** 环境 */
    protected m_environment: ISceneEnvironment;

    /** 场景配置信息 */
    private m_sceneConfig: {
        [_index: string]: INodeConfig,
    } = {};

    /** 场景节点实例缓存 */
    private m_sceneNodesCache: Map<string[], SceneNode[]> = new Map();

    /** 场景中存在的node节点 */
    private m_onSceneNodes: Set<SceneNode> = new Set();

    /** 获取场景配置 */
    public get sceneConfig(): ISceneConfig {
        return this.m_sceneConfig as ISceneConfig;
    }

    /** 获取环境 */
    public get environment(): ISceneEnvironment {
        return this.m_environment;
    }

    /** 获取场景当前存在的节点列表 */
    public get onSceneNodes(): SceneNode[] {
        return [...this.m_onSceneNodes];
    }

    /**
     * 初始化
     * @param _sceneName 场景名字
     */
    public constructor(_sceneName: string) {
        super();
        //
        this._sceneName = _sceneName;
        //根据场景名字读取配置表信息
        if (!this._sceneName) {
            console.error(...ConsoleEx.packError('没有初始化场景的名字！'));
            return;
        }
        let _data: INodeConfig[] = ConfigT.getConfigJsonData(EssentialResUrls.SceneConfigURL(this._sceneName));
        // console.log(config.root);
        if (_data) {
            //获取根节点下的节点
            for (let _i = 0; _i < _data.length; _i++) {
                this.m_sceneConfig[_data[_i].name] = _data[_i];
            }
        } else {
            console.error(...ConsoleEx.packError('获取场景数据失败->', this._sceneName));
        }
        //设置环境，默认为全局3d环境，可以自定义环境
        this.m_environment = GlobalD3Environment.Environment;
        //
        this._init();
    }

    /**
     * 获取节点配置
     * @param _nodeName 节点名字
     */
    public getNodeConfig(_nodeName: string): INodeConfig {
        return this.m_sceneConfig[_nodeName];
    }

    /**
     * 获取场景节点
     * @param _name 节点名字，可以多个一起构建
     * @param _findCache 是否在缓存中查找 true
     * @param _addCache 是否添加到缓存 true
     */
    public getSceneNode(_name: string | string[], _findCache: boolean = true, _addCache: boolean = true): SceneNode {
        let _names: string[] = [];
        if (typeof _name == "string") {
            _names.push(_name);
        } else {
            _names.push(..._name);
        }
        let _nodeConfig: INodeConfig[] = [];
        _names.forEach((item) => {
            if (this.m_sceneConfig[item]) {
                _nodeConfig.push(this.m_sceneConfig[item]);
            } else {
                console.warn(...ConsoleEx.packWarn('有个场景节点没有找到', item));
            }
        });
        if (_nodeConfig.length == 0) {
            console.warn(...ConsoleEx.packWarn('获取场景节点时，一个配置信息都没找到', _names));
            return;
        }
        let _sceneNode: SceneNode;
        //判断是否在缓存中找
        if (_findCache) {
            for (let [_key, _value] of this.m_sceneNodesCache) {
                if (ArrayUtils.ContentIfSame(_key, _names)) {
                    let _usable: SceneNode[] = _value.filter((item) => {
                        return item.ifDelete;
                    });
                    if (_usable.length > 0) {
                        _sceneNode = _usable.pop();
                    }
                    break;
                }
            }
        }
        //
        if (!_sceneNode) {
            //新建一个实例
            _sceneNode = new SceneNode(_nodeConfig, this);
            //判断是否添加到缓存
            if (_addCache) {
                let _if: boolean = false;
                for (let [_key, _value] of this.m_sceneNodesCache) {
                    //
                    if (ArrayUtils.ContentIfSame(_key, _names)) {
                        _value.push(_sceneNode);
                        //
                        _if = true;
                        break;
                    }
                }
                if (!_if) {
                    this.m_sceneNodesCache.set(_names, [_sceneNode]);
                }
            }
        }
        //
        return _sceneNode;
    }

    /**
     * 设置环境
     * 会根据当前场景中环境配置设置环境
     */
    public setEnvironment() {
        let _sceneConfig: ISceneConfig = this.m_sceneConfig as ISceneConfig;
        //设置摄像机
        if (_sceneConfig.camera) {
            NodeT.setNode(this.m_environment.camera, _sceneConfig.camera);
            // console.log('设置摄像机', _sceneConfig.camera);
            //设置摄像机其它数据
            if (_sceneConfig.camera.attachData) {
                this.m_environment.camera.fieldOfView = _sceneConfig.camera.attachData.fov;
                let _v3: Laya.Vector3 = new Laya.Vector3();
                V3Utils.parseVector3(_sceneConfig.camera.attachData.color, _v3);
                this.m_environment.camera.clearColor = new Laya.Vector4(_v3.x, _v3.y, _v3.z, 1);
            }
        }
        //设置灯光
        if (_sceneConfig.light) {
            NodeT.setNode(this.m_environment.light, _sceneConfig.light);
            // console.log('设置灯光', _sceneConfig.light);
            //设置灯光其它数据
            if (_sceneConfig.light.attachData) {
                this.m_environment.light.intensity = _sceneConfig.light.attachData.intensity;
                let _v3: Laya.Vector3 = new Laya.Vector3();
                V3Utils.parseVector3(_sceneConfig.light.attachData.color, _v3);
                this.m_environment.light.color = _v3;
            }
        }
        //执行回调
        this._setEnvironment();
    }

    /**
     * 构建节点
     * 当这个场景下的某个节点被构建时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    public buildNode(_node: SceneNode) {
        this.m_onSceneNodes.add(_node);
        //执行回调
        this._buildNode(_node);
    }

    /**
     * 删除节点
     * 当这个场景下的某个节点被删除时会自动执行这个方法，会在节点真正被删除前执行，可以在这里收集预制体。
     * ! 框架执行
     * @param _node 节点
     */
    public deleteNode(_node: SceneNode) {
        this.m_onSceneNodes.delete(_node);
        //执行回调
        this._deleteNode(_node);
    }

    /**
     * 节点加载进度
     * 当这个场景下的某个节点被加载时，回调用这个回调传出加载进度
     * ! 框架执行
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    public loadProgress(_n: number, _node: SceneNode) {
        // console.log(_n, _node);
        this._loadProgress(_n, _node);
    }

    /**
     * 获取预制体
     * 当当前场景下的节点被构建时，会从这里拿预制体，可以在这里收集预制体
     * ! 框架执行
     * @param _name 预制体名字
     */
    public getPrefabs(_name: string): Laya.Sprite3D {
        return this._getPrefabs(_name);
    }

    // * ----------- 回调函数

    /** 初始化回调 */
    protected _init() { }

    /** 设置环境后执行的回调 */
    protected _setEnvironment() { }

    /**
     * 节点加载进度回调
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    protected _loadProgress(_n: number, _node: SceneNode) { }
    /**
     * 节点被构建的回调
     * @param _node 目标节点
     */
    protected _buildNode(_node: SceneNode) {
        // console.log('节点构建', _node);
    }
    /**
     * 节点被删除的回调
     * @param _node 目标节点
     */
    protected _deleteNode(_node: SceneNode) {
        // console.log('节点删除', _node);
    }

    /** 通过预制体名字获取预制体的回调 */
    protected _getPrefabs(_name: string): Laya.Sprite3D {
        // console.log('取预制体', _name);
        return ResLoad.GetRes(EssentialResUrls.PrefabURL(_name)) as Laya.Sprite3D;
    }
}