"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EResponseCode_1 = require("../../_com/EResponseCode");
const IResponseData_1 = require("../../_com/IResponseData");
const ResponseDataT_1 = require("../../_com/ResponseDataT");
const ResURL_1 = require("../../_com/ResURL");
const fs_1 = require("fs");
const Pako_1 = require("../../_com/Pako");
const ExcelToJson_1 = require("../../_com/ExcelToJson");
const ConfigResURL_1 = require("./ConfigResURL");
const ConfigLocalData_1 = require("./ConfigLocalData");
class ConfigDispose {
    static init() {
    }
    async getAllConfigsNames() {
        return this.getAllFileNames(ConfigResURL_1.default.excelURL, 'xlsx');
    }
    getAllConfigJsonNames() {
        return this.getAllFileNames(ConfigResURL_1.default.configJsonURL, 'json');
    }
    getAllSceneJsonNames() {
        return this.getAllFileNames(ConfigResURL_1.default.sceneJsonURL, 'json');
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
                let _data = JSON.parse(fs_1.readFileSync(_url).toString());
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
                    let _jsonData = _data.data;
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
                    let _jsonData = _data.data;
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
            ExcelToJson_1.default.excelToJson(_excel, ConfigResURL_1.default.configJsonURL, ConfigResURL_1.default.configTSURL).then((data) => {
                r(ResponseDataT_1.default.Pack(undefined, undefined, undefined, data));
            }).catch((_E) => {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, _E));
            });
        });
    }
    getURL(_key) {
        return new Promise((r) => {
            if (!_key) {
                r(ResponseDataT_1.default.Pack('', undefined));
                return;
            }
            r(ResponseDataT_1.default.Pack(ConfigLocalData_1.default.instance.getItem(_key)));
        });
    }
    alterURL(_key, _url) {
        return new Promise((r) => {
            if (!_key) {
                r(ResponseDataT_1.default.Pack(false, undefined, '路径关键键不存在！'));
                return;
            }
            ConfigLocalData_1.default.instance.setItem(_key, _url);
            r(ResponseDataT_1.default.Pack(true));
        });
    }
}
exports.default = ConfigDispose;
//# sourceMappingURL=ConfigDispose.js.map