export default abstract class BaseLocalData {
    protected readonly _cacheName: string;
    getItem<Data extends any>(_key: string): Data;
    setItem(_key: string, _data: any): void;
    private getLocalData;
}
