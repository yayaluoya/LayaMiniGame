export default abstract class BaseCacheData {
    protected readonly _cacheName: string;
    getItem<Data extends any>(_key: string): Data;
    setItem(_key: string, _data: any): void;
    private getCacheObject;
}
