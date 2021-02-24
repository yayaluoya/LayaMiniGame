import ConfigT from "src/_T/Config/ConfigT";
import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import { INodeConfig } from "./INodeConfig";
import SceneNode from "./SceneNode";

/**
 * 基类场景
 * 根据指定的场景配置表构建场景
 */
export default abstract class BaseScene {
    /** 场景名字 */
    protected _sceneName: string;

    /** 场景配置信息 */
    private m_sceneConfig: {
        [_index: string]: INodeConfig,
    } = {};

    /** 场景节点实例缓存 */
    private m_sceneNodes: SceneNode[] = [];

    //
    public constructor() {
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
        //
        this._init();
    }

    /**
     * 初始化回调
     */
    protected _init() { }

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
            console.warn(...ConsoleEx.packWarn('获取场景节点时，一个配置信息都没找到', _name));
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
        let _sceneNode: SceneNode = new SceneNode(_nodeConfig);
        //添加到缓存
        this.m_sceneNodes.push(_sceneNode);
        //
        return _sceneNode;
    }

    /**
     * 设置环境
     * 会根据当前场景中的摄像机和灯光位置设置全局的摄像机和灯光位置
     */
    public setEnvironment() { }
}