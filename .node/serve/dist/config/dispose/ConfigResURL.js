"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELocalURLKey = void 0;
const ResURL_1 = require("../../_com/ResURL");
const ConfigLocalData_1 = require("./ConfigLocalData");
class ConfigResURL {
    static get excelURL() {
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
    ELocalURLKey["sceneJsonURL"] = "sceneJsonURL";
    ELocalURLKey["configJsonURL"] = "configJsonURL";
    ELocalURLKey["configTSURL"] = "configTSURL";
})(ELocalURLKey = exports.ELocalURLKey || (exports.ELocalURLKey = {}));
//# sourceMappingURL=ConfigResURL.js.map