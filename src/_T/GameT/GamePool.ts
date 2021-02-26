
/**
 * 游戏对象池
 * ! 只能游戏内使用，不要在工具中使用
 * ! 尽量只在计算量非常大的地方使用，不然会得不偿失
 */
export default class GamePool {
    /** 对象池列表 */
    private static poolList: {
        [_index: string]: any[],
    } = {};

    /**
     * 获取一个元素
     * @param _sign 
     */
    public static getItem<T extends any>(_sign: EGamePoolSign): T {
        //先到本地对象池列表中查找
        if (this.poolList[_sign] && this.poolList[_sign].length > 0) {
            return this.poolList[_sign].pop() as T;
        } else {
            switch (_sign) {
                case EGamePoolSign.v3:
                    return (new Laya.Vector3) as T;
                case EGamePoolSign.v2:
                    return (new Laya.Vector2) as T;
            }
        }
    }

    /**
     * 回收元素
     * @param _sign 回收标识
     * @param _item 回收内容
     */
    public static recycleItem(_sign: EGamePoolSign, ..._items: any[]) {
        if (!this.poolList[_sign]) {
            this.poolList[_sign] = [];
        }
        //只添加不包含的元素
        for (let _o of _items) {
            if (!this.poolList[_sign].includes(_o)) {
                this.poolList[_sign].push(_o);
            }
        }
    }

    /**
     * 获取v3
     */
    public static getV3(): Laya.Vector3 {
        let _v3: Laya.Vector3 = this.getItem<Laya.Vector3>(EGamePoolSign.v3);
        _v3.setValue(0, 0, 0);
        return _v3;
    }
    /**
     * 回收v3
     * @param _v3 待回收的v3
     */
    public static recycleV3(..._v3s: Laya.Vector3[]) {
        this.recycleItem(EGamePoolSign.v3, _v3s);
    }

    /**
     * 获取v2
     */
    public static getV2(): Laya.Vector2 {
        let _v2: Laya.Vector2 = this.getItem<Laya.Vector2>(EGamePoolSign.v2);
        _v2.setValue(0, 0);
        return _v2;
    }
    /**
     * 回收v2
     * @param _v2 待回收的v2
     */
    public static recycleV2(..._v2s: Laya.Vector2[]) {
        this.recycleItem(EGamePoolSign.v2, ..._v2s);
    }
}

/**
 * 游戏对象池标识
 */
export enum EGamePoolSign {
    /** 3维向量 */
    v3,
    /** 2维向量 */
    v2,
}