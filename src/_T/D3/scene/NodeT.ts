import V3Utils from "src/_T/Utils/V3Utils";
import { INodeConfig, IPrefabsConfig, IPrefabsDifferConfig } from "./INodeConfig";


/**
 * 节点工具
 */
export default class NodeT {

    /**
     * 根据节点数据初始化节点
     * @param _spr 精灵
     * @param _target 目标节点
     */
    public static setNode(_spr: Laya.Sprite3D, _target: INodeConfig) {
        //设置名字
        _spr.name = _target.name;
        //设置位置
        if (!_target.transform.position) {
            //默认位置
            _spr.transform.localPosition.setValue(0, 0, 0);
        } else {
            V3Utils.parseVector3(_target.transform.position, _spr.transform.localPosition);
        }
        _spr.transform.localPosition = _spr.transform.localPosition;
        //设置旋转
        if (!_target.transform.euler) {
            //默认旋转
            _spr.transform.localRotationEuler.setValue(0, 0, 0);
        } else {
            V3Utils.parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
        }
        _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
        //设置缩放
        if (!_target.transform.scale) {
            //默认缩放
            _spr.transform.localScale.setValue(1, 1, 1);
        } else {
            V3Utils.parseVector3(_target.transform.scale, _spr.transform.localScale);
        }
        _spr.transform.localScale = _spr.transform.localScale;
        //设置差异
        let _prefabConfig: IPrefabsConfig = _target as IPrefabsConfig;
        if (_prefabConfig.prefabName != "undefined") {
            if (_prefabConfig.prefabDiffer) {
                this.setDiffer(_spr, _prefabConfig.prefabDiffer);
            }
        }
    }

    //中间临时向量
    private static _centreV3: Laya.Vector3 = new Laya.Vector3();
    /**
     * 设置一个精灵和源精灵的差异
     * @param _spr 精灵
     * @param _differ 差异数据
     */
    private static setDiffer(_spr: Laya.Sprite3D, _differ: IPrefabsDifferConfig) {
        // console.log('设置差异', _spr, _differ);
        if (_differ.child) {
            for (let _diff of _differ.child) {
                this.setDiffer(_spr.getChildAt(_diff.index) as Laya.Sprite3D, _diff);
            }
        }
        //
        if (_differ.position) {
            V3Utils.parseVector3(_differ.position, this._centreV3);
            Laya.Vector3.add(_spr.transform.localPosition, this._centreV3, this._centreV3);
            this._centreV3.cloneTo(_spr.transform.localPosition);
            _spr.transform.localPosition = _spr.transform.localPosition;
        }
        if (_differ.euler) {
            V3Utils.parseVector3(_differ.euler, this._centreV3);
            Laya.Vector3.add(_spr.transform.localRotationEuler, this._centreV3, this._centreV3);
            this._centreV3.cloneTo(_spr.transform.localRotationEuler);
            _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
        }
        if (_differ.scale) {
            V3Utils.parseVector3(_differ.scale, this._centreV3);
            Laya.Vector3.add(_spr.transform.localScale, this._centreV3, this._centreV3);
            this._centreV3.cloneTo(_spr.transform.localScale);
            _spr.transform.localScale = _spr.transform.localScale;
        }
    }
}