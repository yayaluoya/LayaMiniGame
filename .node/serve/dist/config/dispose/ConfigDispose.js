"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EResponseCode_1 = require("../../_com/EResponseCode");
const IResponseData_1 = require("../../_com/IResponseData");
const ResponseDataT_1 = require("../../_com/ResponseDataT");
const ResURL_1 = require("../../_com/ResURL");
const fs_1 = require("fs");
const Pako_1 = require("../../_com/Pako");
const ExcelToJson_1 = require("../../_com/ExcelToJson");
const ConfigCacheData_1 = require("./ConfigCacheData");
class ConfigDispose {
    static init() {
        if (typeof ConfigCacheData_1.default.instance.getItem(ConfigCacheData_1.EConfigConfig.jsonSaveURLCacheKey) == "undefined") {
            ConfigCacheData_1.default.instance.setItem(ConfigCacheData_1.EConfigConfig.jsonSaveURLCacheKey, ResURL_1.default.join(ResURL_1.default.serveRootURL, 'dist/json/'));
        }
        if (typeof ConfigCacheData_1.default.instance.getItem(ConfigCacheData_1.EConfigConfig.TSSaveURLCacheKey) == "undefined") {
            ConfigCacheData_1.default.instance.setItem(ConfigCacheData_1.EConfigConfig.TSSaveURLCacheKey, ResURL_1.default.join(ResURL_1.default.serveRootURL, 'dist/ts/'));
        }
    }
    async getAllConfigsNames() {
        return this.getAllFileNames(ResURL_1.default.excelURL, 'xlsx');
    }
    getAllConfigJsonNames() {
        return this.getAllFileNames(ResURL_1.default.configJsonURL, 'json');
    }
    getAllSceneJsonNames() {
        return this.getAllFileNames(ResURL_1.default.sceneJsonURL, 'json');
    }
    getAllFileNames(_url, _dis) {
        var _jsonNames = fs_1.readdirSync(_url).filter((item) => {
            return RegExp('^[a-zA-Z0-9_-]+\.' + _dis + '$').test(item);
        }).map((item) => {
            return {
                name: item,
                path: ResURL_1.default.join(_url, item),
            };
        });
        return new Promise((r) => {
            r(ResponseDataT_1.default.Pack(_jsonNames));
        });
    }
    getJsonData(_url) {
        return new Promise((r) => {
            if (!_url || !/\.json$/.test(_url)) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '必须是.json后缀的文件！'));
                return;
            }
            try {
                let _data = fs_1.readFileSync(_url).toString();
                r(ResponseDataT_1.default.Pack(_data));
            }
            catch (e) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '读取文件失败！'));
            }
        });
    }
    zipJsonFile(_url) {
        return new Promise((r) => {
            this.getJsonData(_url).then((_data) => {
                if (_data.code != EResponseCode_1.EResponseCode.com) {
                    r(_data);
                    return;
                }
                else {
                    let _jsonData = JSON.parse(_data.data);
                    if (!_jsonData.zip) {
                        _jsonData.data = Pako_1.default.deflate(JSON.stringify(_jsonData.data));
                        _jsonData.zip = true;
                    }
                    else {
                        r(ResponseDataT_1.default.Pack(_jsonData));
                        return;
                    }
                    fs_1.writeFile(_url, JSON.stringify(_jsonData), () => {
                        r(ResponseDataT_1.default.Pack(_jsonData));
                    });
                }
            });
        });
    }
    unZipJsonFile(_url) {
        return new Promise((r) => {
            this.getJsonData(_url).then((_data) => {
                if (_data.code != EResponseCode_1.EResponseCode.com) {
                    r(_data);
                    return;
                }
                else {
                    let _jsonData = JSON.parse(_data.data);
                    if (_jsonData.zip) {
                        _jsonData.data = JSON.parse(Pako_1.default.inflate(_jsonData.data));
                        _jsonData.zip = false;
                    }
                    else {
                        r(ResponseDataT_1.default.Pack(_jsonData));
                        return;
                    }
                    fs_1.writeFile(_url, JSON.stringify(_jsonData), () => {
                        r(ResponseDataT_1.default.Pack(_jsonData));
                    });
                }
            });
        });
    }
    exportExcelToJson(_excel) {
        return new Promise((r) => {
            ExcelToJson_1.default.excelToJson(_excel, ConfigCacheData_1.default.instance.getItem(ConfigCacheData_1.EConfigConfig.jsonSaveURLCacheKey), ConfigCacheData_1.default.instance.getItem(ConfigCacheData_1.EConfigConfig.TSSaveURLCacheKey)).then((data) => {
                r(ResponseDataT_1.default.Pack(undefined, undefined, undefined, data));
            }).catch((_E) => {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, _E));
            });
        });
    }
}
exports.default = ConfigDispose;
//# sourceMappingURL=ConfigDispose.js.map