import BaseCacheData from "src/_com/BaseCacheData";
export default class ConfigCacheData extends BaseCacheData {
    private static _instance;
    static get instance(): ConfigCacheData;
    private constructor();
    protected readonly _cacheName: string;
}
export declare enum EConfigConfig {
    jsonSaveURLCacheKey = "jsonSaveURL",
    TSSaveURLCacheKey = "TSSaveURL"
}
