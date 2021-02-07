"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ResURL_1 = require("./ResURL");
class BaseLocalData {
    constructor() {
        this._cacheName = 'localData';
    }
    getItem(_key) {
        return this.getLocalData()[_key];
    }
    setItem(_key, _data) {
        let _object = this.getLocalData();
        _object[_key] = _data;
        let _url = ResURL_1.default.join(ResURL_1.default.localDataURL, this._cacheName + '.json');
        fs_1.writeFileSync(_url, JSON.stringify(_object));
    }
    getLocalData() {
        let _object;
        let _url = ResURL_1.default.join(ResURL_1.default.localDataURL, this._cacheName + '.json');
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
exports.default = BaseLocalData;
//# sourceMappingURL=BaseLocalData.js.map