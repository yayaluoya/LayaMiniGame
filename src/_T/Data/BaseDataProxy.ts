import BaseData from "./BaseData"
import DataProxy from "./DataProxy";

/**
 * 基类数据代理
 * 所有关于代理数据的类都从这里继承
 */
export default abstract class BaseDataProxy<Data extends BaseData> {
    /** 数据模板 */
    protected m_dataTemplate: { new(): Data };

    /** 是否设置代理 */
    protected m_ifSetProxy: boolean = true;

    /** 数据代理器 */
    protected m_dataProp: DataProxy;

    /** 原始数据，用来和和代理数据对比查看哪个数据被改动了*/
    protected m_rootData: Data;

    /** 需要保存的数据 */
    protected m_data: Data;

    /** 获取是否设置代理 */
    public get ifSetProxy(): boolean {
        return this.m_ifSetProxy;
    }

    /**
     * 获取数据代理器
     * 通过这个数据代理器可以添加代理数据，和添加数据监听回调 [配合 rootData 使用]
     */
    public get dataProp(): DataProxy {
        return this.m_dataProp;
    }

    /** 
     * 获取原始数据，不能更改
     * 使用这个数据来设置监听数据的层级和位置
     */
    public get rootData(): Data {
        return this.m_rootData;
    }

    /** 获取数据 */
    public get data(): Data {
        return this.m_data;
    }

    /**
     * 获取一个新的数据
     * 用于重构数据
     */
    protected getNewData(): Data {
        return new this.m_dataTemplate() as Data;
    }

    /**
     * 初始化数据
     */
    public abstract InitData();
}