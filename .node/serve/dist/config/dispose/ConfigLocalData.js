"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocalData_1 = require("../../_com/BaseLocalData");
class ConfigLocalData extends BaseLocalData_1.default {
    constructor() {
        super();
        this._cacheName = 'configLocalData';
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new ConfigLocalData();
        }
        return this._instance;
    }
}
exports.default = ConfigLocalData;
//# sourceMappingURL=ConfigLocalData.js.map