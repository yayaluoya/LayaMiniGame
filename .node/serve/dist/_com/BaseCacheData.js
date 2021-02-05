"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ResURL_1 = require("./ResURL");
class BaseCacheData {
    constructor() {
        this._cacheName = 'cacheData';
    }
    getItem(_key) {
        return this.getCacheObject()[_key];
    }
    setItem(_key, _data) {
        let _object = this.getCacheObject();
        _object[_key] = _data;
        let _url = ResURL_1.default.join(ResURL_1.default.cacheURL, this._cacheName + '.json');
        fs_1.writeFileSync(_url, JSON.stringify(_object));
    }
    getCacheObject() {
        let _object;
        let _url = ResURL_1.default.join(ResURL_1.default.cacheURL, this._cacheName + '.json');
        try {
            _object = JSON.parse(fs_1.readFileSync(_url).toString());
        }
        catch (_E) {
            _object = {};
            fs_1.writeFileSync(_url, JSON.stringify(_object));
        }
        return _object;
    }
}
exports.default = BaseCacheData;
//# sourceMappingURL=BaseCacheData.js.map