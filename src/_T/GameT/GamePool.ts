
/**
 * 游戏对象池
 * ! 只能游戏内使用，不要在工具中引用
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
     * 回收一个元素
     * @param _sign 回收标识
     * @param _item 回收内容
     */
    public static recycleItem(_sign: EGamePoolSign, _item: any) {
        if (!this.poolList[_sign]) {
            this.poolList[_sign] = [];
        }
        this.poolList[_sign].push(_item);
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