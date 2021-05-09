import ConsoleEx from "src/_T/Console/ConsoleEx";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import ResLoad from "src/_T/Res/ResLoad";
import SpriteUtils from "src/_T/Utils/SpriteUtils";
import { INodeConfig, IPrefabsGather } from "./INodeConfig";
import NodeT from "./NodeT";
import Scene from "./Scene";

/**
 * 场景节点
 * 用来构建场景节点
 * ! 可能是多个场景组合的场景
 */
export default class SceneNode {
    /** 所属场景 */
    private m_scene: Scene;
    /** 是否删除 */
    private m_ifDelete: boolean;
    /** 节点配置信息列表 */
    private m_nodeConfigs: INodeConfig[];
    /** 根节点 */
    private m_rootNode: Laya.Node;
    /** 场景节点列表 */
    private m_sceneNodes: {
        [_index: string]: Laya.Sprite3D,
    };
    /** 预制体名字列表 */
    private m_prefabsNames: string[];
    /** 预制体集合 */
    private m_prefabs: IPrefabsGather;
    /** 可回收精灵列表 */
    private m_recoverableSprs: IPrefabsGather;
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
    /** 获取根节点 */
    public get rootNode(): Laya.Node {
        return this.m_rootNode;
    }
    /** 获取场景节点列表 */
    public get sceneNodes(): {
        [_index: string]: Laya.Sprite3D,
    } {
        return this.m_sceneNodes;
    }
    /** 获取预制体集合 */
    public get prefabs(): IPrefabsGather {
        return this.m_prefabs;
    }
    /** 获取可回收精灵 */
    public get recoverableSprs(): IPrefabsGather {
        return this.m_recoverableSprs;
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
                //
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
        this.m_rootNode = new Laya.Node;
        //添加到所属场景环境中
        this.m_scene.environment.scene.addChild(this.m_rootNode);
        this.m_prefabs = {};
        this.m_sceneNodes = {};
        let _spr: Laya.Sprite3D;
        this.m_nodeConfigs.forEach((item) => {
            _spr = new Laya.Sprite3D;
            this.m_rootNode.addChild(_spr);
            this.m_sceneNodes[item.name] = _spr;
            NodeT.buildNode(_spr, item, this.m_prefabs, (_name: string) => {
                return this.m_scene.getPrefabs(_name);
            });
        });
        //所有预制体默认为可回收精灵
        this.m_recoverableSprs = {
            ...this.m_prefabs,
        };
        //调用场景的回调
        this.m_scene.buildNode(this);
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
        this.m_rootNode.destroy();
        //清理引用
        this.m_rootNode = null;
        this.m_sceneNodes = null;
        this.m_prefabs = null;
        this.m_recoverableSprs = null;
    }

    /**
     * 精灵是否可回收
     * @param _spr 该精灵
     */
    public sprIfRecoverable(_spr: Laya.Sprite3D): boolean {
        let _b: boolean = false;
        for (let _i in this.m_recoverableSprs) {
            if (this.m_recoverableSprs[_i].includes(_spr)) {
                _b = true;
                break;
            }
        }
        //
        return _b;
    }

    /**
     * 添加可回收精灵
     * @param _key 关键键值或者名字
     * @param _spr 目标精灵或列表
     */
    public addRecoverableSprs(_key: string, _spr: Laya.Sprite3D | Laya.Sprite3D[]) {
        if (!Array.isArray(_spr)) {
            _spr = [_spr];
        }
        _spr.forEach((item) => {
            //先判断是该精灵是否可回收
            if (this.sprIfRecoverable(item)) {
                console.warn('重复添加精灵到可回收精灵列表中', _key, _spr);
                return;
            }
            //添加进可回收列表中
            (this.m_recoverableSprs[_key] = this.m_recoverableSprs[_key] || []).push(item);
        });
    }

    /**
     * 获取场景节点精灵
     * @param _sprName 精灵名字
     * @param _sceneNodeName 节点名字，或者索引，默认为第一个节点的名字
     */
    public getNode(_sprName: string, _sceneNodeName?: string | number): Laya.Node {
        switch (typeof _sceneNodeName) {
            case 'undefined':
                _sceneNodeName = this.m_nodeConfigs[0].name;
                break;
            case 'number':
                _sceneNodeName = this.m_nodeConfigs[Math.min(_sceneNodeName, this.m_nodeConfigs.length - 1)].name;

        }
        return this.m_sceneNodes[_sceneNodeName] && SpriteUtils.findChild(this.m_sceneNodes[_sceneNodeName], _sprName);
    }
}