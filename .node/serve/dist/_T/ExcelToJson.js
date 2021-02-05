"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = require('node-xlsx').default;
class ExcelToJson {
    static excelToJson(_excel, _json, _ts) {
        return new Promise((r, e) => {
            if (!/[a-zA-Z0-9_-]+\.xlsx/.test(_excel)) {
                e('不是配置表' + _excel);
                return;
            }
            let _excelData;
            try {
                _excelData = xlsx.parse(_excel);
            }
            catch (_e) {
                e(_e);
                return;
            }
            let _excelName = _excel.match(/([^\/\\]+)\.xlsx$/)[1].replace(/^[a-z]/, function ($1) { return $1.toLocaleUpperCase(); });
            if (/config$/i.test(_excelName)) {
                let _rowsDatas = [];
                let _explainData;
                let _typeData;
                let _keyData;
                let _rowsData;
                let __data;
                for (let _o of _excelData) {
                    if (!_explainData) {
                        _explainData = _o.data[0];
                    }
                    if (!_typeData) {
                        _typeData = _o.data[1];
                    }
                    if (!_keyData) {
                        _keyData = _o.data[2];
                    }
                    for (let _i = 3, length = _o.data.length; _i < length; _i++) {
                        __data = _o.data[_i];
                        if (!__data || __data.length == 0) {
                            continue;
                        }
                        _rowsData = {};
                        for (let _keyI in _keyData) {
                            _rowsData[_keyData[_keyI]] = this.byStyleGetData(_typeData[_keyI], __data[_keyI]);
                        }
                        _rowsDatas.push(_rowsData);
                    }
                }
                this.saveJson(_excelName, _rowsDatas).then(() => {
                    let _TSContent = '';
                    this.saveTS(_excelName, _TSContent).then(() => {
                        r({
                            _rowsDatas,
                            _TSContent,
                            _explainData,
                            _typeData,
                            _keyData,
                            _excelData,
                        });
                        return;
                    }).catch((_E) => {
                        e(_E);
                        return;
                    });
                }).catch((_E) => {
                    e(_E);
                    return;
                });
            }
            else if (/const$/i.test(_excelName)) {
                let _jsonData = {};
                let _explainData = [];
                let _keyData = [];
                let _typeData = [];
                let __data;
                for (let _o of _excelData) {
                    if (!_explainData) { }
                    for (let _i = 1, length = _o.data.length; _i < length; _i++) {
                        __data = _o.data[_i];
                        if (!__data || _o.data[_i].length == 0) {
                            continue;
                        }
                        _jsonData[__data[0]] = this.byStyleGetData(__data[1], __data[2]);
                        _keyData.push(__data[0]);
                        _typeData.push(__data[1]);
                        _explainData.push(__data[3]);
                    }
                }
                this.saveJson(_excelName, _jsonData).then(() => {
                    let _TSContent = '';
                    this.saveTS(_excelName, _TSContent).then(() => {
                        r({
                            _jsonData,
                            _TSContent,
                            _explainData,
                            _keyData,
                            _typeData,
                            _excelData,
                        });
                        return;
                    }).catch((_E) => {
                        e(_E);
                        return;
                    });
                }).catch((_E) => {
                    e(_E);
                    return;
                });
            }
            else {
                e('表后缀不是，config | const');
                return;
            }
        });
    }
    static byStyleGetData(_type, _data) {
        if (typeof _data == "undefined" || (typeof _data == "object" && !_data)) {
            return undefined;
        }
        if (/number/i.test(_type)) {
            return Number(_data);
        }
        else if (/string/i.test(_type)) {
            return _data + '';
        }
        else if (/boolean/i.test(_type)) {
            if (/^((false)|0|(undefined)|(null)|(nan))$/i.test(_data)) {
                return false;
            }
            return Boolean(_data);
        }
        else {
            return _data + '';
        }
    }
    static saveJson(_name, _data) {
        return new Promise((r, e) => {
            r('');
        });
    }
    static saveTS(_name, _conent) {
        return new Promise((r, e) => {
            r('');
        });
    }
}
exports.default = ExcelToJson;
//# sourceMappingURL=ExcelToJson.js.map