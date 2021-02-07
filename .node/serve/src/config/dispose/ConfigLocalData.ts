import BaseLocalData from "src/_com/BaseLocalData";

/**
 * 配置表本地数据
 */
export default class ConfigLocalData extends BaseLocalData {
    //
    private static _instance: ConfigLocalData;
    /** 单例 */
    public static get instance(): ConfigLocalData {
        if (this._instance == null) {
            this._instance = new ConfigLocalData();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    /** 缓存名字 */
    protected readonly _cacheName: string = 'configLocalData';
}