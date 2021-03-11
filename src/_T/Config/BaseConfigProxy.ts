import { IBaseConfigContainer, IConfigContainer, IConstContainer } from "./ConfigT";

/**
 * 数据代理基类
 */
class _BaseConfigProxy {
    /** 配置表模板 */
    protected configTemplate: IBaseConfigContainer;

    //初始化
    public constructor() {
        //
        this._initData();
        this.initData();
    }

    /** 初始化之前执行 */
    protected _initData() { }

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
    /** 配置表模板 */
    protected configTemplate: IConfigContainer;

    //配置数据列表
    protected m_dataList: Data[];

    /** 配置数据列表 */
    public get dataList(): Data[] {
        return this.m_dataList;
    }

    /** 初始化之前 */
    protected _initData() {
        this.m_dataList = this.configTemplate.datas;
    }
}

/**
 * Const数据代理基类
 */
export class BaseConstProxy<Data> extends _BaseConfigProxy {
    /** 配置表模板 */
    protected configTemplate: IConstContainer;

    //配置数据
    protected m_data: Data;

    /** 配置数据 */
    public get data(): Data {
        return this.m_data;
    }

    /** 初始化之前 */
    protected _initData() {
        this.m_data = this.configTemplate.data;
    }
}