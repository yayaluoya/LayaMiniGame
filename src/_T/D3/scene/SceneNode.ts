import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import ResLoad from "src/_T/Res/ResLoad";
import { INodeConfig, IPrefabsConfig, IPrefabsGather } from "./INodeConfig";
import NodeT from "./NodeT";

/**
 * 场景节点
 * 用来构建场景节点
 */
export default class SceneNode {
    /** 是否删除 */
    private m_ifDelete: boolean;
    /** 节点配置信息列表 */
    private m_nodeConfigs: INodeConfig[];
    /** 节点 */
    private m_node: Laya.Node;
    /** 预制体名字列表 */
    private m_prefabsNames: string[];
    /** 预制体集合 */
    private m_prefabs: IPrefabsGather;

    /** 获取节点配置信息 */
    public get nodeConfigs(): INodeConfig[] {
        return this.m_nodeConfigs;
    }
    /** 获取是否删除 */
    public get ifDelete(): boolean {
        return this.m_ifDelete;
    }
    /** 获取场景节点 */
    public get node(): Laya.Node {
        return this.m_node;
    }
    /** 获取预制体集合 */
    public get prefabs(): IPrefabsGather {
        return this.m_prefabs;
    }
    /** 获取预制体名字列表 */
    public get prefabsName(): string[] {
        return this.m_prefabsNames;
    }

    /**
     * 初始化场景节点实例
     * @param _nodeConfigs 节点配置信息
     */
    public constructor(_nodeConfigs: INodeConfig[]) {
        //默认为删除状态
        this.m_ifDelete = true;
        this.m_nodeConfigs = _nodeConfigs;
        //提取预制体名字列表
        this.m_prefabsNames = [];
        this.m_nodeConfigs.forEach((item) => {
            this.getPrefabsNames(this.m_prefabsNames, item);
        });
    }

    /**
     * 异步加载
     * @param _onProgress 进度回调
     */
    public asyncLoad(_onProgress?: Laya.Handler): Promise<void> {
        let _prefabNamesURL: string[] = this.m_prefabsNames.map((item) => {
            return EssentialResUrls.PrefabURL(item);
        });
        return ResLoad.Load3DAsync(_prefabNamesURL, _onProgress);
    }

    /**
     * 异步构建场景
     * @param onProgress 进度回调
     */
    public asyncBuild(_onProgress?: Laya.Handler): Promise<SceneNode> {
        return new Promise<SceneNode>((resolve) => {
            this.asyncLoad(_onProgress).then(() => {
                this.build();
                //
                resolve(this);
            });
        });
    }

    /** 构建场景 */
    private build() {
        if (!this.m_ifDelete) { return; }
        this.m_ifDelete = false;
        this.m_node = new Laya.Node;
        this.m_prefabs = {};
        let _spr: Laya.Sprite3D;
        this.m_nodeConfigs.forEach((item) => {
            _spr = new Laya.Sprite3D;
            this.m_node.addChild(_spr);
            this.buildNode(_spr, item);
        });
    }

    /**
     * 删除场景
     */
    public delete() {
        if (this.m_ifDelete) { return; }
        this.m_ifDelete = true;
        this.m_node.destroy();
        this.m_node = null;
        this.m_prefabs = null;
    }

    // * -------------------- //

    /**
     * 获取预制体名字
     * @param _prefabsNames 输出的预制体名字列表
     * @param _nodeConfig 节点配置数据
     */
    private getPrefabsNames(_prefabsNames: string[], _nodeConfig: INodeConfig) {
        if (!_nodeConfig) { return; }
        //先判断是否是预制体
        let _prefabName: string = (_nodeConfig as IPrefabsConfig).prefabName;
        if (_prefabName) {
            //去重
            if (!_prefabsNames.includes(_prefabName)) {
                _prefabsNames.push(_prefabName);
            }
        } else {
            //判断是否还有子节点
            if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                _nodeConfig.child.forEach((item) => {
                    this.getPrefabsNames(_prefabsNames, item);
                });
            }
        }
    }

    /**
     * 构建节点
     * @param _node 父节点
     * @param _nodeConfig 节点配置数据
     */
    private buildNode(_node: Laya.Node, _nodeConfig: INodeConfig) {
        if (!_nodeConfig) { return; }
        //先判断是不是预制体
        let _prefabName: string = (_nodeConfig as IPrefabsConfig).prefabName;
        let _spr: Laya.Sprite3D;
        if (_prefabName) {
            _spr = ResLoad.GetRes(EssentialResUrls.PrefabURL(_prefabName)) as Laya.Sprite3D;
            _node.addChild(_spr);
            NodeT.setNode(_spr, _nodeConfig);
            //
            this.m_prefabs[_prefabName] = this.m_prefabs[_prefabName] || [];
            this.m_prefabs[_prefabName].push(_spr);
        } else {
            //判断是否有子节点
            if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                _spr = new Laya.Sprite3D;
                _node.addChild(_spr);
                NodeT.setNode(_spr, _nodeConfig);
                _nodeConfig.child.forEach((item) => {
                    this.buildNode(_node, item);
                });
            }
        }
    }
}