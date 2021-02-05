import BaseCacheData from "src/_com/BaseCacheData";

/**
 * 配置表缓存数据
 */
export default class ConfigCacheData extends BaseCacheData {
    //
    private static _instance: ConfigCacheData;
    /** 单例 */
    public static get instance(): ConfigCacheData {
        if (this._instance == null) {
            this._instance = new ConfigCacheData();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    /** 缓存名字 */
    protected readonly _cacheName: string = 'configCache';
}

/**
 * 配置文件配置
 */
export enum EConfigConfig {
    /** joson存储地址缓存key */
    jsonSaveURLCacheKey = 'jsonSaveURL',
    /** ts存储地址缓存key */
    TSSaveURLCacheKey = 'TSSaveURL',
}