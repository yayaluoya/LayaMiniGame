/**
 * 基类对象池
 */
export default class BaseItemPool {
    /** 池子 */
    private m_itemPool: {
        [_key: string]: any[],
    } = {};

    /** 获取对象池 */
    protected get itemPool(): {
        [_key: string]: any[],
    } {
        return this.m_itemPool;
    }

    /**
     * 对象池是否有内容
     * @param _key key
     */
    public isPool(_key: string): boolean {
        return Boolean(this.m_itemPool[_key] && this.m_itemPool[_key].length > 0);
    }

    /**
     * 从对象池中获取对象
     * @param _key key
     */
    public getItemByPool<T extends object>(_key: string): T {
        //先判断是否有内容
        if (this.isPool(_key)) {
            return this.m_itemPool[_key].pop() as T;
        }
        //
        return null;
    }

    /**
     * 添加对象进对象池
     * @param _key key
     * @param _item 对象
     */
    public addItemToPool(_key: string, _item: object) {
        if (!this.m_itemPool[_key]) {
            this.m_itemPool[_key] = [];
        }
        this.m_itemPool[_key].push(_item);
        //去重
        this.m_itemPool[_key] = [...new Set(...this.m_itemPool[_key])];
    }

    /**
     * 清空对象池
     */
    public emptyPool() {
        this.m_itemPool = {};
    }
}