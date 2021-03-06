import ConsoleEx from "../Console/ConsoleEx";
import BaseData from "./BaseData"
import ObjectProxyT from "./ObjectProxyT";

/**
 * 基类数据代理
 * 所有关于代理数据的类都从这里继承
 */
export default abstract class BaseDataProxy<Data extends BaseData> {
    /** 数据模板 */
    protected m_dataTemplate: { new(): Data };

    /** 是否设置代理 */
    protected m_ifSetProxy: boolean = true;

    /** 数据代理工具 */
    protected m_objectProxyT: ObjectProxyT;

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
    public get objectProxyT(): ObjectProxyT {
        return this.m_objectProxyT;
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
        //如果没有数据模板的话
        if (!this.m_dataTemplate) {
            console.error(...ConsoleEx.packError('没有找到数据模板！'));
            return {} as Data;
        }
        return new this.m_dataTemplate() as Data;
    }

    /**
     * 初始化数据
     */
    public abstract initData();
}