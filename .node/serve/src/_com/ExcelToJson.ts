import { mkdirSync, writeFile } from "fs";
import ResURL from "./ResURL";

var xlsx = require('node-xlsx').default;

/**
 * excel表导出到json
 */
export default class ExcelToJson {
    /**
     * 导出配置文件到json
     * @param _excel excel文件路径
     * @param _jsonURL json文件保存路径
     * @param _TSURL ts文件保存路径
     */
    public static excelToJson(_excel: string, _jsonURL: string, _TSURL: string): Promise<any> {
        return new Promise<any>((r, e) => {
            if (!/[a-zA-Z0-9_-]+\.xlsx/.test(_excel)) {
                e('不是配置表' + _excel);
                return;
            }
            //配置表数据
            let _excelData: IExcelData[];
            try {
                //读取配置表
                _excelData = xlsx.parse(_excel) as IExcelData[];
            } catch (_e) {
                e(_e);
                return;
            }
            //表名字
            let _excelName: string = _excel.match(/([^\/\\]+)\.xlsx$/)[1].replace(/^[a-z]/, function ($1) { return $1.toLocaleUpperCase(); });
            //判断是关系表还是非关系表
            if (/config$/i.test(_excelName)) {//关系表
                let _rowsDatas: any[] = [];//行数据
                let _explainData: string[];//说明数据
                let _typeData: string[];//类型数据
                let _keyData: string[];//键值数据
                let _rowsData: any;//单行数据
                let __data: any[];//临时数据
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
                    //从第3行开始才是数据
                    for (let _i = 3, length = _o.data.length; _i < length; _i++) {
                        __data = _o.data[_i];
                        if (!__data || __data.length == 0) {
                            continue;
                        }
                        _rowsData = {};
                        for (let _keyI in _keyData) {
                            //保存值
                            _rowsData[_keyData[_keyI]] = this.byStyleGetData(_typeData[_keyI], __data[_keyI]);
                        }
                        _rowsDatas.push(_rowsData);
                    }
                }
                //保存json文件
                this.saveJson(_excelName, _rowsDatas, _jsonURL).then(() => {
                    //ts内容
                    let _TSContent: string = FillTSFile.fillConfig(_excelName, _keyData, _typeData, _explainData);
                    //保存ts文件
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
            else if (/const$/i.test(_excelName)) {//非关系表
                let _jsonData: any = {};
                let _explainData: string[] = [];//说明数据
                let _keyData: string[] = [];//键数据
                let _typeData: string[] = [];//类型数据
                let __data: any[];//临时数据
                for (let _o of _excelData) {
                    if (!_explainData) { }
                    for (let _i = 1, length = _o.data.length; _i < length; _i++) {
                        __data = _o.data[_i];
                        if (!__data || _o.data[_i].length == 0) {
                            continue;
                        }
                        //保存值
                        _jsonData[__data[0]] = this.byStyleGetData(__data[1], __data[2]);
                        //键
                        _keyData.push(__data[0]);
                        //类型
                        _typeData.push(__data[1]);
                        //说明
                        _explainData.push(__data[3]);
                    }
                }
                //保存json文件
                this.saveJson(_excelName, _jsonData, _jsonURL).then(() => {
                    //ts内容
                    let _TSContent: string = FillTSFile.fillConst(_excelName, _keyData, _typeData, _explainData);
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

    /**
     * 根据类型获取数据
     * @param _type 类型
     * @param _data 原数据
     */
    private static byStyleGetData(_type: string, _data: any): any {
        //先判断是否为空
        if (typeof _data == "undefined" || (typeof _data == "object" && !_data)) {
            return undefined;
        }
        //判断类型
        if (/number/i.test(_type)) {
            let _n: number = Number(_data);
            if (isNaN(_n)) {
                _n = 0;
            }
            return _n;
        } else if (/string/i.test(_type)) {
            return _data + '';
        }
        else if (/boolean/i.test(_type)) {
            if (/^((false)|0|(undefined)|(null)|(nan))$/i.test(_data)) { return false; }
            return Boolean(_data);
        } else {
            //
            return _data;
        }
    }

    /**
     * 保存json数据
     * @param _name 文件名字
     * @param _data 数据
     * @param _url 保存目录
     */
    private static saveJson(_name: string, _data: any, _url: string): Promise<any> {
        return new Promise<any>((r, e) => {
            //准备保存的json内容
            let _jsonData: IJsonData = {
                data: _data,
                zip: false,
            };
            //先创建目录
            try {
                mkdirSync(_url);
            } catch (e) {
                //已经存在该目录
            }
            _url = ResURL.join(_url, '/' + _name + '.json');
            //写入文件
            writeFile(_url, JSON.stringify(_jsonData), () => {
                r('');
            });
        });
    }

    /**
     * 保存TS文件
     * @param _name 文件名字
     * @param _conent 内容
     * @param _courl 保存目录
     */
    private static saveTS(_name: string, _conent: string, _url: string): Promise<any> {
        return new Promise<any>((r, e) => {
            //先创建目录
            try {
                mkdirSync(_url);
            } catch (e) {
                //已经存在该目录
            }
            _url = ResURL.join(_url, '/' + _name + '.ts');
            //写入文件
            writeFile(_url, _conent, () => {
                r('');
            });
        });
    }
}

/** 
 * 填充ts文件
 */
class FillTSFile {
    /**
     * 填充config
     * @param _excelName 名字
     * @param _keyData key
     * @param _typeData 类型
     * @param _explainData 说明
     * @returns
     */
    public static fillConfig(_excelName: string, _keyData: string[], _typeData: string[], _explainData: string[]): string {
        /** 数据类型列表 */
        let _dataType: string = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        //
        return `/** 
 * ${_excelName} config配置文件
 * ! 自动导出，请不要更改
 */
export namespace ${_excelName} {
    /** 数据类型 */
    export class Type {
${_dataType}
    }
    /** config数据列表 */
    export var datas: ${_excelName}.Type[];
    /** 文件名字 */
    export const fileName = '${_excelName}.json';
}
    `;
    }

    /**
     * 填充const
     * @param _excelName 名字
     * @param _keyData key
     * @param _typeData 类型
     * @param _explainData 说明
     * @returns
     */
    public static fillConst(_excelName: string, _keyData: string[], _typeData: string[], _explainData: string[]): string {
        /** 数据类型列表 */
        let _dataType: string = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        //
        return `/** 
 * ${_excelName} const配置文件
 * ! 自动导出，请不要更改
 */
export namespace ${_excelName} {
    /** 数据类型 */
    export class Type {
${_dataType}
    }
    /** const数据列表 */
    export var data: ${_excelName}.Type;
    /** 文件名字 */
    export const fileName = '${_excelName}.json';
}
    `;
    }

    /**
     * 获取类型
     * @param _type 类型字符串
     */
    private static getType(_type: string): string {
        //先判断是否为空
        if (typeof _type == "undefined" || (typeof _type == "object" && !_type) || /any/i.test(_type)) {
            return 'any';
        }
        else if (/number/i.test(_type)) {
            return typeof 1;
        } else if (/string/i.test(_type)) {
            return typeof 'string';
        }
        else if (/boolean/i.test(_type)) {
            return typeof true;
        } else {
            //默认为sring类型
            return 'any';
        }
    }
}

/**
 * 工作表数据接口
 */
interface IExcelData {
    /** 工作表名字 */
    name: string,
    /** 工作表数据 */
    data: any[][];
}