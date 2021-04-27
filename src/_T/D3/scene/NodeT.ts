import GamePool from "src/_T/GameT/GamePool";
import V3Utils from "src/_T/Utils/V3Utils";
import { INodeConfig, IPrefabsConfig, IPrefabsDifferConfig, IPrefabsGather } from "./INodeConfig";

/**
 * 节点工具
 */
export default class NodeT {
    /**
     * 是否是预制体配置
     * @param _config 配置数据
     */
    public static ifPrefabsConfig(_config: INodeConfig): boolean {
        return (_config as IPrefabsConfig).prefabName && true;
    }

    /**
     * 根据节点数据初始化节点
     * @param _spr 精灵
     * @param _target 目标节点
     */
    public static setNode(_spr: Laya.Sprite3D, _target: INodeConfig) {
        // console.log(_spr, _target);
        //设置名字
        _spr.name = _target.name;
        //判断有没有变换相关的属性
        if (!_target.transform) {
            _spr.transform.localPosition.setValue(0, 0, 0);
            _spr.transform.localRotationEuler.setValue(0, 0, 0);
            _spr.transform.localScale.setValue(1, 1, 1);
        } else {
            //设置位置
            if (!_target.transform.position) {
                //默认位置
                _spr.transform.localPosition.setValue(0, 0, 0);
            } else {
                V3Utils.parseVector3(_target.transform.position, _spr.transform.localPosition);
            }
            //设置旋转
            if (!_target.transform.euler) {
                //默认旋转
                _spr.transform.localRotationEuler.setValue(0, 0, 0);
            } else {
                V3Utils.parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
            }
            //设置缩放
            if (!_target.transform.scale) {
                //默认缩放
                _spr.transform.localScale.setValue(1, 1, 1);
            } else {
                V3Utils.parseVector3(_target.transform.scale, _spr.transform.localScale);
            }
        }
        //触发监听
        _spr.transform.localPosition = _spr.transform.localPosition;
        _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
        _spr.transform.localScale = _spr.transform.localScale;
        //设置差异
        let _prefabConfig: IPrefabsConfig = _target as IPrefabsConfig;
        if (_prefabConfig.prefabName != "undefined") {
            if (_prefabConfig.prefabDiffer) {
                this.setDiffer(_spr, _prefabConfig.prefabDiffer);
            }
        }
        //
        // console.log(_spr.transform.position);
    }

    /**
     * 设置一个精灵和源精灵的差异
     * @param _spr 精灵
     * @param _differ 差异数据
     */
    private static setDiffer(_spr: Laya.Sprite3D, _differ: IPrefabsDifferConfig) {
        // console.log('设置差异', _spr, _differ);
        //获取一个临时向量
        let _centreV3: Laya.Vector3 = GamePool.getV3();
        //
        if (_differ.child) {
            for (let _diff of _differ.child) {
                this.setDiffer(_spr.getChildAt(_diff.index) as Laya.Sprite3D, _diff);
            }
        }
        //获取源变换
        let _transform: Laya.Vector3[] = [GamePool.getV3(), GamePool.getV3(), GamePool.getV3()];
        if (_differ._transform) {
            if (_differ._transform.position) {
                V3Utils.parseVector3(_differ._transform.position, _transform[0]);
            }
            if (_differ._transform.euler) {
                V3Utils.parseVector3(_differ._transform.euler, _transform[1]);
            }
            if (_differ._transform.scale) {
                V3Utils.parseVector3(_differ._transform.scale, _transform[2]);
            }
        }
        //判断是否有transform属性
        if (_differ.transform) {
            //
            if (_differ.transform.position) {
                V3Utils.parseVector3(_differ.transform.position, _centreV3);
                Laya.Vector3.add(_transform[0], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localPosition);
                _spr.transform.localPosition = _spr.transform.localPosition;
            }
            if (_differ.transform.euler) {
                V3Utils.parseVector3(_differ.transform.euler, _centreV3);
                Laya.Vector3.add(_transform[1], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localRotationEuler);
                _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
            }
            if (_differ.transform.scale) {
                V3Utils.parseVector3(_differ.transform.scale, _centreV3);
                Laya.Vector3.add(_transform[2], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localScale);
                _spr.transform.localScale = _spr.transform.localScale;
            }
        }
        //回收临时向量
        GamePool.recycleV3(...[_centreV3, ..._transform]);
    }

    /**
     * 获取预制体名字
     * @param _prefabsNames 输出的预制体名字列表
     * @param _nodeConfig 节点配置数据
     */
    public static getPrefabsNames(_prefabsNames: string[], _nodeConfig: INodeConfig) {
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
     * 通过节点数据构节点
     * @param _onSpr 当前精灵
     * @param _nodeConfig 节点配置数据
     * @param _getPrefabs 获取预制体的方法
     */
    public static buildNode(_onSpr: Laya.Sprite3D, _nodeConfig: INodeConfig, _prefabs: IPrefabsGather, _getPrefabs: (_name: string) => Laya.Sprite3D) {
        if (!_nodeConfig) { return; }
        //设置节点数据
        this.setNode(_onSpr, _nodeConfig);
        //判断是否有子节点
        if (_nodeConfig.child && _nodeConfig.child.length > 0) {
            let _spr: Laya.Sprite3D;
            let _prefabName: string;
            _nodeConfig.child.forEach((item) => {
                _prefabName = (_nodeConfig as IPrefabsConfig).prefabName;
                //获取精灵
                _spr = typeof _prefabName == 'string' ? _getPrefabs(_prefabName) : new Laya.Sprite3D;
                _onSpr.addChild(_spr);
                //
                this.buildNode(_spr, item, _prefabs, _getPrefabs);
            });
        }
    }
}