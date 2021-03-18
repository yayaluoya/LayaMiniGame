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
const EConfigLocalDataKey_1 = require("./EConfigLocalDataKey");
class ConfigDispose {
    static init() {
    }
    async getAllConfigsNames() {
        return new Promise((r, e) => {
            this.getAllFileNames(ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey.configExcelURL), 'xlsx').then((data) => {
                let _info = null;
                let _excelInfos = ConfigLocalData_1.default.instance.getItem(EConfigLocalDataKey_1.EConfigLocalDataKey.excelInfoData) || [];
                let _excelInfo;
                let _ifAlter;
                data.data = data.data.map((item) => {
                    _info = fs_1.statSync(item.path);
                    _excelInfo = _excelInfos.find((_item) => {
                        return _item.url == item.path;
                    });
                    _ifAlter = true;
                    if (_excelInfo) {
                        _ifAlter = (_info.mtime.toLocaleString() != _excelInfo.info.mtime);
                    }
                    item['ifAlter'] = _ifAlter;
                    return item;
                });
                r(data);
            }).catch((E) => {
                e(E);
            });
        });
    }
    getAllConfigJsonNames() {
        return this.getAllFileNames(ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey.configJsonURL), 'json');
    }
    getAllSceneJsonNames() {
        return this.getAllFileNames(ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey.sceneJsonURL), 'json');
    }
    getAllFileNames(_url, _dis) {
        let _jsonNames;
        try {
            _jsonNames = fs_1.readdirSync(_url).filter((item) => {
                return RegExp('^[a-zA-Z0-9_-]+\.' + _dis + '$').test(item);
            }).map((item) => {
                return {
                    name: item,
                    path: ResURL_1.default.join(_url, item),
                };
            });
        }
        catch (e) {
            _jsonNames = [];
        }
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
            try {
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
            }
            catch (_a) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '压缩失败'));
            }
        });
    }
    unZipJsonFile(_url) {
        return new Promise((r) => {
            try {
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
            }
            catch (_a) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '解压失败'));
            }
        });
    }
    exportExcelToJson(_excel) {
        return new Promise((r) => {
            ExcelToJson_1.default.excelToJson(_excel, ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey.configJsonURL), ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey.configTSURL)).then((data) => {
                let _excelInfos = ConfigLocalData_1.default.instance.getItem(EConfigLocalDataKey_1.EConfigLocalDataKey.excelInfoData) || [];
                let _index = _excelInfos.findIndex((item) => {
                    return item.url == _excel;
                });
                let _stat = fs_1.statSync(_excel);
                if (_index != -1) {
                    _excelInfos[_index].info.mtime = _stat.mtime.toLocaleString();
                }
                else {
                    _excelInfos.push({
                        url: _excel,
                        info: {
                            mtime: _stat.mtime.toLocaleString(),
                        },
                    });
                }
                ConfigLocalData_1.default.instance.setItem(EConfigLocalDataKey_1.EConfigLocalDataKey.excelInfoData, _excelInfos);
                r(ResponseDataT_1.default.Pack(undefined, undefined, undefined, data));
            }).catch((_E) => {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, _E));
            });
        });
    }
    getAllURL() {
        return new Promise((r) => {
            let _urlKey = [];
            let ifExist = false;
            for (let _i in ConfigResURL_1.ELocalURLKey) {
                try {
                    ifExist = fs_1.statSync(ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey[_i])).isDirectory();
                }
                catch (_a) {
                    ifExist = false;
                }
                _urlKey.push({
                    key: ConfigResURL_1.ELocalURLKey[_i],
                    url: ConfigLocalData_1.default.instance.getItem(ConfigResURL_1.ELocalURLKey[_i]),
                    onUrl: ConfigResURL_1.default.getURL(ConfigResURL_1.ELocalURLKey[_i]),
                    explain: ConfigResURL_1.ELocalURLKeyDescription[ConfigResURL_1.ELocalURLKey[_i]],
                    ifExist: ifExist,
                });
            }
            r(ResponseDataT_1.default.Pack(_urlKey));
        });
    }
    alterURL(_key, _url) {
        return new Promise((r) => {
            if (!_key) {
                r(ResponseDataT_1.default.Pack('', EResponseCode_1.EResponseCode.lose, '路径关键键不存在！'));
                return;
            }
            ConfigLocalData_1.default.instance.setItem(_key, _url);
            let _onUrl = ConfigResURL_1.default.getURL(_key);
            let ifExist = false;
            let moreUrl = [];
            try {
                ifExist = fs_1.statSync(_onUrl).isDirectory();
                if (ifExist) {
                    moreUrl = fs_1.readdirSync(_onUrl).filter((item) => {
                        return fs_1.statSync(ResURL_1.default.join(_onUrl, item)).isDirectory();
                    });
                }
            }
            catch (_a) {
                ifExist = false;
            }
            r(ResponseDataT_1.default.Pack({
                url: _onUrl,
                ifExist: ifExist,
                moreUrl: moreUrl,
            }));
        });
    }
}
exports.default = ConfigDispose;
//# sourceMappingURL=ConfigDispose.js.map