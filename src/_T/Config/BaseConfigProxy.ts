/**
 * 数据代理基类
 */
class _BaseConfigProxy {
    //初始化
    public constructor() {
        this.initData();
    }

    /**
     * 初始化 使用时覆盖
     */
    protected initData() {
        //
    }
}

/**
 * Config数据代理基类
 */
export default class BaseConfigProxy<Data> extends _BaseConfigProxy {
    //配置数据列表
    protected m_dataList: Data[];

    /** 配置数据列表 */
    public get dataList(): Data[] {
        return this.m_dataList;
    }
}

/**
 * Const数据代理基类
 */
export class BaseConstProxy<Data> extends _BaseConfigProxy {
    //配置数据
    protected m_data: Data;

    /** 配置数据 */
    public get data(): Data {
        return this.m_data;
    }
}