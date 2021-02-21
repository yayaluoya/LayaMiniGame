"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ResURL_1 = require("./ResURL");
var xlsx = require('node-xlsx').default;
class ExcelToJson {
    static excelToJson(_excel, _jsonURL, _TSURL) {
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
                this.saveJson(_excelName, _rowsDatas, _jsonURL).then(() => {
                    let _TSContent = TSFileT.fillConfig(_excelName, _keyData, _typeData, _explainData);
                    this.saveTS(_excelName, _TSContent, _TSURL).then(() => {
                        r({
                            _type: 'config',
                            _rowsDatas,
                            _explainData,
                            _typeData,
                            _keyData,
                            _excelData,
                            _TSContent,
                            _jsonURL,
                            _TSURL,
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
                this.saveJson(_excelName, _jsonData, _jsonURL).then(() => {
                    let _TSContent = TSFileT.fillConst(_excelName, _keyData, _typeData, _explainData);
                    this.saveTS(_excelName, _TSContent, _TSURL).then(() => {
                        r({
                            _type: 'const',
                            _jsonData,
                            _explainData,
                            _keyData,
                            _typeData,
                            _excelData,
                            _TSContent,
                            _jsonURL,
                            _TSURL,
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
            let _n = Number(_data);
            if (isNaN(_n)) {
                _n = 0;
            }
            return _n;
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
            return _data;
        }
    }
    static saveJson(_name, _data, _url) {
        return new Promise((r, e) => {
            let _jsonData = {
                data: _data,
                zip: false,
            };
            try {
                fs_1.mkdirSync(_url);
            }
            catch (e) {
            }
            _url = ResURL_1.default.join(_url, '/' + _name + '.json');
            fs_1.writeFile(_url, JSON.stringify(_jsonData), () => {
                r('');
            });
        });
    }
    static saveTS(_name, _conent, _url) {
        return new Promise((r, e) => {
            try {
                fs_1.mkdirSync(_url);
            }
            catch (E) {
            }
            try {
                fs_1.writeFile(ResURL_1.default.join(_url, `/${_name}.ts`), _conent, () => {
                    let _buildConfigTsName = 'BuildConfigTs';
                    let _configTsNames = fs_1.readdirSync(_url).filter((item) => {
                        return /\.ts$/.test(item) && item != _buildConfigTsName + '.ts';
                    }).map((item) => {
                        return item.replace('.ts', '');
                    });
                    fs_1.writeFile(ResURL_1.default.join(_url, `/${_buildConfigTsName}.ts`), TSFileT.fillAllTsFile(_buildConfigTsName, _configTsNames), () => {
                        r('');
                    });
                });
            }
            catch (E) {
                e('保存ts文件出错，' + E);
            }
        });
    }
}
exports.default = ExcelToJson;
class TSFileT {
    static fillAllTsFile(_name, _tsNames) {
        let _import = '';
        let _build = '        let configs: any[] = [];\n';
        for (let _o of _tsNames) {
            _import += `import { ${_o} } from "./${_o}";\n`;
            _build += `        configs.push(${_o});\n`;
        }
        _build += `        return configs;`;
        return `// ！ 自动导出，请不要修改
//
${_import}
/**
* 构建全部配置表
*/
export class ${_name} {
    /**
     * 获取所有的配置表内容
     */
    public static getAllConfig(): any[] {
${_build}
    }
}
`;
    }
    static fillConfig(_excelName, _keyData, _typeData, _explainData) {
        let _dataType = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        return `// ！ 自动导出，请不要修改
//
/**
 * ${_excelName} config配置文件
 */
export namespace ${_excelName} {
    /** 配置表类型 */
    export const type: string = 'config';
    /** 数据类型 */
    export class DataType {
${_dataType}
    }
    /** config数据列表 */
    export var datas: ${_excelName}.DataType[] = [];
    /** 文件名字 */
    export const fileName: string = '${_excelName}.json';
}
    `;
    }
    static fillConst(_excelName, _keyData, _typeData, _explainData) {
        let _dataType = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        return `// ！ 自动导出，请不要修改
//
/**
 * ${_excelName} const配置文件
 */
export namespace ${_excelName} {
    /** 配置表类型 */
    export const type: string = 'const';
    /** 数据类型 */
    export class DataType {
${_dataType}
    }
    /** const数据列表 */
    export var data: ${_excelName}.DataType = null;
    /** 文件名字 */
    export const fileName: string = '${_excelName}.json';
}
    `;
    }
    static getType(_type) {
        if (typeof _type == "undefined" || (typeof _type == "object" && !_type) || /any/i.test(_type)) {
            return 'any';
        }
        else if (/number/i.test(_type)) {
            return typeof 1;
        }
        else if (/string/i.test(_type)) {
            return typeof 'string';
        }
        else if (/boolean/i.test(_type)) {
            return typeof true;
        }
        else {
            return 'any';
        }
    }
}
//# sourceMappingURL=ExcelToJson.js.map