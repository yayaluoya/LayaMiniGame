import BaseData from "./BaseData";
import BaseDataProxy from "./BaseDataProxy";
import DataProxy from "./DataProxy";

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
    public InitData() {
        this.m_rootData = new this.m_dataTemplate();
        //设置代理
        if (this.m_ifSetProxy) {
            this.m_dataProp = new DataProxy();
            this.m_data = this.m_dataProp.getProxyData<Data>(this.m_rootData);
        } else {
            this.m_data = this.m_rootData;
        }
        //
        this._initData();
    }

    /** 初始化数据回调 */
    protected _initData() { }
}