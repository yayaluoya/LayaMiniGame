import ConfigT from "src/_T/Config/ConfigT";
import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import { INodeConfig, ISceneConfig } from "./INodeConfig";
import ISceneEnvironment from "./ISceneEnvironment";
import NodeT from "./NodeT";
import SceneNode from "./SceneNode";
import GlobalD3Environment from "./GlobalD3Environment";

/**
 * 场景 实例
 * 根据指定的场景配置表构建场景
 * * 可以继承此类自定义场景
 */
export default class Scene {
    /** 场景名字 */
    protected _sceneName: string;

    /** 环境 */
    protected m_environment: ISceneEnvironment;

    /** 场景配置信息 */
    private m_sceneConfig: {
        [_index: string]: INodeConfig,
    } = {};

    /** 场景节点实例缓存 */
    private m_sceneNodes: SceneNode[] = [];

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
     */
    public getSceneNode(_name: string | string[]): SceneNode {
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
        //在缓存中找
        let __nodeConfig: INodeConfig[];
        let _a;
        let _number: number;
        let _index: number = this.m_sceneNodes.findIndex((item) => {
            __nodeConfig = item.nodeConfigs;
            if (_nodeConfig.length != __nodeConfig.length) { return false; }
            _a = {};
            _nodeConfig.forEach((_o) => {
                if (typeof _a[_o.name] == "undefined") {
                    _a[_o.name] = 1;
                } else {
                    _a[_o.name]++;
                }
            });
            __nodeConfig.forEach((__o) => {
                if (typeof _a[__o.name] == "undefined") {
                    _a[__o.name] = -1;
                } else {
                    _a[__o.name]--;
                }
            });
            _number = 0;
            for (let _i in _a) {
                _number += _a[_i];
            }
            return _number == 0;
        });
        if (_index != -1) {
            return this.m_sceneNodes[_index];
        }
        let _sceneNode: SceneNode = new SceneNode(_nodeConfig, this);
        //添加到缓存
        this.m_sceneNodes.push(_sceneNode);
        //
        return _sceneNode;
    }

    /**
     * 添加当前节点
     * 当这个场景下的某个节点被构建时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    public addOnNode(_node: SceneNode) {
        this.m_onSceneNodes.add(_node);
    }

    /**
     * 删除当前节点
     * 当这个场景下的某个节点被删除时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    public deleteOnNode(_node: SceneNode) {
        this.m_onSceneNodes.delete(_node);
    }

    /**
     * 设置环境
     * 会根据当前场景中环境配置设置环境
     */
    public setEnvironment() {
        let _sceneConfig: ISceneConfig = this.m_sceneConfig as ISceneConfig;
        //设置全局摄像机
        if (_sceneConfig.camera) {
            NodeT.setNode(this.m_environment.camera, _sceneConfig.camera);
        }
        //设置全局灯光
        if (_sceneConfig.light) {
            NodeT.setNode(this.m_environment.light, _sceneConfig.light);
        }
        //执行回调
        this._setEnvironment();
    }

    /**
     * 加载进度
     * ! 框架执行
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    public loadProgress(_n: number, _node: SceneNode) {
        // console.log(_n, _node);
        this._loadProgress(_n, _node);
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
}