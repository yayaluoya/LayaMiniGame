import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import ResLoad from "src/_T/Res/ResLoad";
import { INodeConfig, IPrefabsGather } from "./INodeConfig";
import NodeT from "./NodeT";
import Scene from "./Scene";

/**
 * 场景节点
 * 用来构建场景节点
 */
export default class SceneNode {
    /** 所属场景 */
    private m_scene: Scene;
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
    /** 是否在加载 */
    private m_ifLoad: boolean;

    /** 获取所属场景 */
    public get scene(): Scene {
        return this.m_scene;
    }
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
    /** 是否在加载 */
    public get ifLoad(): boolean {
        return this.m_ifLoad;
    }

    /**
     * 初始化场景节点实例
     * @param _nodeConfigs 节点配置信息
     * @param _scene 所属场景
     */
    public constructor(_nodeConfigs: INodeConfig[], _scene: Scene) {
        //
        this.m_scene = _scene;
        //默认为删除状态
        this.m_ifDelete = true;
        this.m_nodeConfigs = _nodeConfigs;
        //提取预制体名字列表
        this.m_prefabsNames = [];
        this.m_nodeConfigs.forEach((item) => {
            NodeT.getPrefabsNames(this.m_prefabsNames, item);
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
        return ResLoad.Load3DAsync(_prefabNamesURL, Laya.Handler.create(this, (n) => {
            this.loadProgress(n);
            if (_onProgress) {
                _onProgress.args = [n];
                _onProgress.run();
            }
        }, undefined, false));
    }

    /**
     * 异步构建
     * @param onProgress 进度回调
     */
    public asyncBuild(_onProgress?: Laya.Handler): Promise<SceneNode> {
        this.m_ifLoad = true;
        return new Promise<SceneNode>((resolve) => {
            this.asyncLoad(_onProgress).then(() => {
                this.m_ifLoad = false;
                //
                this.build();
                resolve(this);
            });
        });
    }

    /**
     * 加载进度
     * @param _n 进度值
     */
    private loadProgress(_n: number) {
        //向场景传出加载进度
        this.m_scene.loadProgress(_n, this);
    }

    /**
     * 构建
     */
    private build() {
        if (!this.m_ifDelete) { return; }
        this.m_ifDelete = false;
        //调用场景的回调
        this.m_scene.buildNode(this);
        this.m_node = new Laya.Node;
        //添加到所属场景环境中
        this.m_scene.environment.scene.addChild(this.m_node);
        this.m_prefabs = {};
        let _spr: Laya.Sprite3D;
        this.m_nodeConfigs.forEach((item) => {
            _spr = new Laya.Sprite3D;
            this.m_node.addChild(_spr);
            NodeT.buildNode(_spr, item, this.m_prefabs, (_name: string) => {
                return this.m_scene.getPrefabs(_name);
            });
        });
    }

    /**
     * 删除
     */
    public delete() {
        if (this.m_ifDelete) { return; }
        if (this.m_ifLoad) {
            console.warn(...ConsoleEx.packWarn('场景节点还在构建却试图删除。'));
            return;
        }
        this.m_ifDelete = true;
        //删除之前调用场景的回调，方便收集预制体
        this.m_scene.deleteNode(this);
        //
        this.m_node.destroy();
        //清理引用
        this.m_node = null;
        this.m_prefabs = null;
    }
}