import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import ResLoad from "src/_T/Res/ResLoad";
import { INodeConfig, ISceneConfig } from "./INodeConfig";
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
        let url = EssentialResUrls.LevelConfigURL(this._sceneName);
        //这里必须不使用克隆资源
        let config: ISceneConfig = ResLoad.GetRes(url, true);
        //判断有没有压缩
        if (config.zip) {
            //解压
            let _time = Date.now();
            config.nodes = JSON.parse(pako.inflate(config.nodes, { to: 'string' }));
            _time = Date.now() - _time;
            //判断解压时间差
            if (_time > 500) {
                console.warn(...ConsoleEx.packWarn('配置表解压时间过长，可能是配置表文件过大', url, _time));
            }
        }
        // console.log(config.root);
        //
        if (config.nodes) {
            //获取根节点下的节点
            for (let _i = 0; _i < config.nodes.length; _i++) {
                this.m_sceneConfig[config.nodes[_i].name] = config.nodes[_i];
            }
        } else {
            console.error(...ConsoleEx.packError('找不到配置表root节点数据', url));
        }
        //清理资源缓存只使用一次
        ResLoad.UnLoad(url);
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
}