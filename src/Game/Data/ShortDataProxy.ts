import BaseShortDataProxy from "src/_T/Data/BaseShortDataProxy";
import ShortData from "./type/ShortData";

/**
 * 临时数据
 */
export default class ShortDataProxy extends BaseShortDataProxy<ShortData> {
    /** 单例 */
    private static _instance: ShortDataProxy;
    public static get instance(): ShortDataProxy {
        if (this._instance == null) {
            this._instance = new ShortDataProxy();
            this._instance.m_dataTemplate = ShortData;
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}