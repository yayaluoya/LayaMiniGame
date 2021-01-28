/**
 * 精灵工具
 */
export default class SpriteUtils {
    /**
     * 世界坐标转相对坐标
     * @param parent 
     * @param position 
     */
    public static InverseTransformPoint(parent: Laya.Transform3D, position: Laya.Vector3) {
        let tempMatrix = new Laya.Matrix4x4();
        parent.worldMatrix.invert(tempMatrix);
        let v3 = new Laya.Vector3();
        Laya.Vector3.transformCoordinate(position, tempMatrix, v3);
        return v3;
    }

    /**
     * 为物体设置阴影
     * @param obj 物体
     * @param castShadow 是否产生阴影 
     * @param receiveShadow 是否接受阴影
     */
    public static SetShadow(obj: any, castShadow: boolean, receiveShadow: boolean) {
        // 默认当meshrender处理
        let meshRenderer = obj.meshRenderer as Laya.MeshRenderer;
        if (meshRenderer != null) {
            meshRenderer.castShadow = castShadow;
            meshRenderer.receiveShadow = receiveShadow;
        }
        let skinnedMeshRenderer = obj.skinnedMeshRenderer as Laya.SkinnedMeshRenderer;
        if (skinnedMeshRenderer != null) {
            skinnedMeshRenderer.castShadow = castShadow;
            skinnedMeshRenderer.receiveShadow = receiveShadow;
        }
        let node = obj as Laya.Node;
        for (let i = 0; i < node.numChildren; ++i) {
            let getChild = node.getChildAt(i);
            this.SetShadow(getChild, castShadow, receiveShadow);
        }
    }

    /**
    * 查找节点
    * @param sp 精灵
    * @param name 需要查找的节点名
    */
    public static findChild(sp, name) {
        if (sp.name == name)
            return sp;
        else
            return this._findChild(sp._children, name);
    }
    //配合查找节点
    private static _findChild(spArr, name) {
        if (!spArr) return null;
        let arr = [];
        for (var i = 0; i < spArr.length; i++) {
            var child = spArr[i];
            if (child.name == name) {
                return child;
            }
            else if (child.numChildren) {
                arr = arr.concat(child._children);
            }
        }
        if (!arr.length)
            return null;
        return this._findChild(arr, name);
    }

    /**
     * 遍历精灵并通过回调函数处理每一个精灵
     * @param _spr 该精灵
     * @param _handler 遍历回调，注意是否只执行一次的参数要为false
     */
    public static foreachSpr(_spr: Laya.Sprite3D, _handler?: Laya.Handler) {
        //判断是否有遍历回调
        if (_handler) {
            _handler.args = [_spr];
            _handler.run();
        }
        //循环遍历子节点
        for (let i = 0, length = _spr.numChildren; i < length; i++) {
            this.foreachSpr(_spr.getChildAt(i) as Laya.Sprite3D, _handler);
        }
    }

    /**
     * 在子节点中获取组件
     * @param obj 
     * @param cmp 
     */
    public static GetComponentsInChildren(obj: Laya.Sprite3D, cmp: typeof Laya.Component): any[] {
        let result: typeof Laya.Component[] = [];
        this._GetComponentsInChildrenHelper(obj, cmp, result);
        return result;
    }
    //配合获取组件
    private static _GetComponentsInChildrenHelper(obj: Laya.Sprite3D, cmp: typeof Laya.Component, result: typeof Laya.Component[]) {
        let cmps = obj.getComponents(cmp) as typeof Laya.Component[];
        if (cmps != null) {
            for (let i = 0; i < cmps.length; ++i) {
                result.push(cmps[i]);
            }
        }
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this._GetComponentsInChildrenHelper(getChild as Laya.Sprite3D, cmp, result);
        }
    }

    /**
     * 获取精灵的脚本
     * @param _spr 该精灵
     * @param _scr 脚本类型，可以是继承链上的某个组件
     */
    public static getScrs<Scr extends Laya.Script3D>(_spr: Laya.Sprite3D, _scr: any): Scr[] {
        let _scrs: Scr[] = [];
        //获取脚本列表
        let __scrs: Laya.Script3D[] = _spr['_components'] as Laya.Script3D[];
        //遍历脚本列表
        for (let _o of __scrs) {
            if (_o instanceof _scr) {
                _scrs.push(_o as Scr);
            }
        }
        return _scrs;
    }


    /**
     * 设置层级
     * @param obj 
     * @param layerIndex 
     */
    public static SetLayer(obj: Laya.Sprite3D, layerIndex: number) {
        obj.layer = layerIndex;
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this.SetLayer(getChild as Laya.Sprite3D, layerIndex);
        }
    }

    /**
     * 获取一个物体的物理组件
     * @param _spr 该物体
     */
    public static getPhysicComponent(_spr: Laya.Sprite3D): Laya.PhysicsComponent {
        let _physicsCom: Laya.PhysicsComponent = _spr.getComponent(Laya.PhysicsCollider) as Laya.PhysicsComponent;
        if (!_physicsCom) {
            _physicsCom = _spr.getComponent(Laya.Rigidbody3D) as Laya.PhysicsComponent;
        }
        //
        return _physicsCom;
    }
}