"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELocalURLKeyDescription = exports.ELocalURLKey = void 0;
const ResURL_1 = require("../../_com/ResURL");
const ConfigLocalData_1 = require("./ConfigLocalData");
class ConfigResURL {
    static getURL(_key) {
        switch (_key) {
            case ELocalURLKey.configExcelURL:
                return this.configExcelURL;
            case ELocalURLKey.configJsonURL:
                return this.configJsonURL;
            case ELocalURLKey.sceneJsonURL:
                return this.sceneJsonURL;
            case ELocalURLKey.configTSURL:
                return this.configTSURL;
        }
    }
    static get configExcelURL() {
        let _url = ConfigLocalData_1.default.instance.getItem(ELocalURLKey.configExcelURL);
        if (_url) {
            return ResURL_1.default.join(ResURL_1.default.rootURL, _url);
        }
        return ResURL_1.default.join(ResURL_1.default.rootURL, 'Doc/excel/');
    }
    static get configJsonURL() {
        let _url = ConfigLocalData_1.default.instance.getItem(ELocalURLKey.configJsonURL);
        if (_url) {
            return ResURL_1.default.join(ResURL_1.default.rootURL, _url);
        }
        return ResURL_1.default.join(ResURL_1.default.resURL, 'ConfigJson/');
    }
    static get sceneJsonURL() {
        let _url = ConfigLocalData_1.default.instance.getItem(ELocalURLKey.sceneJsonURL);
        if (_url) {
            return ResURL_1.default.join(ResURL_1.default.rootURL, _url);
        }
        return ResURL_1.default.join(ResURL_1.default.resURL, 'SceneJson/');
    }
    static get configTSURL() {
        let _url = ConfigLocalData_1.default.instance.getItem(ELocalURLKey.configTSURL);
        if (_url) {
            return ResURL_1.default.join(ResURL_1.default.rootURL, _url);
        }
        return ResURL_1.default.join(ResURL_1.default.gameSrcURL, '/_config');
    }
}
exports.default = ConfigResURL;
var ELocalURLKey;
(function (ELocalURLKey) {
    ELocalURLKey["configExcelURL"] = "configExcelURL";
    ELocalURLKey["configJsonURL"] = "configJsonURL";
    ELocalURLKey["configTSURL"] = "configTSURL";
    ELocalURLKey["sceneJsonURL"] = "sceneJsonURL";
})(ELocalURLKey = exports.ELocalURLKey || (exports.ELocalURLKey = {}));
var ELocalURLKeyDescription;
(function (ELocalURLKeyDescription) {
    ELocalURLKeyDescription["configExcelURL"] = "\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84";
    ELocalURLKeyDescription["configJsonURL"] = "configJson\u6587\u4EF6\u8DEF\u5F84";
    ELocalURLKeyDescription["configTSURL"] = "\u914D\u7F6Ets\u6587\u4EF6\u4FDD\u5B58\u8DEF\u5F84";
    ELocalURLKeyDescription["sceneJsonURL"] = "\u573A\u666Fjson\u6587\u4EF6\u8DEF\u5F84";
})(ELocalURLKeyDescription = exports.ELocalURLKeyDescription || (exports.ELocalURLKeyDescription = {}));
//# sourceMappingURL=ConfigResURL.js.map