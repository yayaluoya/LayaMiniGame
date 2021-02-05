"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EConfigConfig = void 0;
const BaseCacheData_1 = require("../../_com/BaseCacheData");
class ConfigCacheData extends BaseCacheData_1.default {
    constructor() {
        super();
        this._cacheName = 'configCache';
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new ConfigCacheData();
        }
        return this._instance;
    }
}
exports.default = ConfigCacheData;
var EConfigConfig;
(function (EConfigConfig) {
    EConfigConfig["jsonSaveURLCacheKey"] = "jsonSaveURL";
    EConfigConfig["TSSaveURLCacheKey"] = "TSSaveURL";
})(EConfigConfig = exports.EConfigConfig || (exports.EConfigConfig = {}));
//# sourceMappingURL=ConfigCacheData.js.map