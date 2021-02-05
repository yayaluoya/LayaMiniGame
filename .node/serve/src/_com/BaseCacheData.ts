import { readFileSync, writeFileSync } from "fs";
import ResURL from "./ResURL";

/**
 * 基类缓存数据
 */
export default abstract class BaseCacheData {
    /** 缓存名 */
    protected readonly _cacheName: string = 'cacheData';

    /**
     * 获取缓存内容
     * @param _key 缓存键
     */
    public getItem<Data extends any>(_key: string): Data {
        return this.getCacheObject()[_key] as Data;
    }

    /**
     * 设置缓存数据
     * @param _key 缓存键
     * @param _data 存储的数据
     */
    public setItem(_key: string, _data: any) {
        let _object: any = this.getCacheObject();
        _object[_key] = _data;
        //保存数据
        let _url: string = ResURL.join(ResURL.cacheURL, this._cacheName + '.json');
        //写入文件
        writeFileSync(_url, JSON.stringify(_object));
    }

    /**
     * 获取缓存对象
     */
    private getCacheObject(): any {
        let _object: any;
        let _url: string = ResURL.join(ResURL.cacheURL, this._cacheName + '.json');
        try {
            _object = JSON.parse(readFileSync(_url).toString());
        } catch (_E) {
            _object = {};
            //写入文件
            writeFileSync(_url, JSON.stringify(_object));
        }
        return _object;
    }
}