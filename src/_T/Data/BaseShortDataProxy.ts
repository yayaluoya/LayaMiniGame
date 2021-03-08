import BaseData from "./BaseData";
import BaseDataProxy from "./BaseDataProxy";
import ObjectProxyT from "./ObjectProxyT";

/**
 * 临时数据代理基类
 * 泛型为数据类型
 */
export default abstract class BaseShortDataProxy<Data extends BaseData> extends BaseDataProxy<Data> {
    /** 临时数据默认不设置代理 */
    protected m_ifSetProxy: boolean = false;

    /**
     * 初始化数据
     */
    public initData() {
        this.m_data = this.getNewData();
        //设置代理
        if (this.m_ifSetProxy) {
            this.m_objectProxyT = new ObjectProxyT();
            this.m_data = this.m_objectProxyT.setProxy(this.m_data);
        }
        //
        this._initData();
    }

    /** 初始化数据回调 */
    protected _initData() { }
}