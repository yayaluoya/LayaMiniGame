import { mkdirSync, readdirSync, writeFile } from "fs";
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
            //加个前缀，便于区分
            let __excelName = '_' + _excelName;
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
                    let _TSContent: string = TSFileT.fillConfig(_excelName, __excelName, _keyData, _typeData, _explainData);
                    //保存ts文件
                    this.saveTS(__excelName, _TSContent, _TSURL).then(() => {
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
                    let _TSContent: string = TSFileT.fillConst(_excelName, __excelName, _keyData, _typeData, _explainData);
                    this.saveTS(__excelName, _TSContent, _TSURL).then(() => {
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
            } catch (E) {
                //已经存在该目录
            }
            //保存文件
            try {
                //写入文件内容
                writeFile(ResURL.join(_url, `/${_name}.ts`), _conent, () => {
                    //构建配置表文件名字
                    let _buildConfigTsName: string = 'BuildConfigTs';
                    //获取该目录下的所有配置文件
                    let _configTsNames: string[] = readdirSync(_url).filter((item) => {
                        return /\.ts$/.test(item) && item != _buildConfigTsName + '.ts';
                    }).map((item) => {
                        //只提取名字
                        return item.replace('.ts', '');
                    });
                    //修改配置表构建文件
                    writeFile(ResURL.join(_url, `/${_buildConfigTsName}.ts`), TSFileT.fillAllTsFile(_buildConfigTsName, _configTsNames), () => {
                        r('');
                    });
                });
            } catch (E) {
                e('保存ts文件出错，' + E);
            }
        });
    }
}

/** 
 * ts文件工具
 */
class TSFileT {
    /**
     * 填充全部excel表集合ts文件
     * @param _url 保存路径
     */
    public static fillAllTsFile(_name: string, _tsNames: string[]): string {
        /** 导出内容 */
        let _import: string = '';
        /** 构建执行内容 */
        let _build: string = '        let configs: any[] = [];\n';
        for (let _o of _tsNames) {
            _import += `import { ${_o} } from "./${_o}";\n`;
            _build += `        configs.push(${_o});\n`;
        }
        _build += `        return configs;`;
        //
        return `// ！ 自动导出，请不要修改
//
${_import}
/**
* 构建全部配置表
* ! 自动导出
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

    /**
     * 填充config
     * @param _excelName 名字
     * @param __excelName 其他名字
     * @param _keyData key
     * @param _typeData 类型
     * @param _explainData 说明
     * @returns
     */
    public static fillConfig(_excelName: string, __excelName: string, _keyData: string[], _typeData: string[], _explainData: string[]): string {
        /** 数据类型列表 */
        let _dataType: string = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        //
        return `// ！ 自动导出，请不要修改
//
/**
 * ${__excelName} config配置文件
 * ! 自动导出，不要修改和直接引用
 */
export namespace ${__excelName} {
    /** 配置表类型 */
    export const type: string = 'config';
    /** 数据类型 */
    export class DataType {
${_dataType}
    }
    /** config数据列表 */
    export var datas: ${__excelName}.DataType[] = [];
    /** 文件名字 */
    export const fileName: string = '${_excelName}.json';
}
    `;
    }

    /**
     * 填充const
     * @param _excelName 名字
     * @param __excelName 其他名字
     * @param _keyData key
     * @param _typeData 类型
     * @param _explainData 说明
     * @returns
     */
    public static fillConst(_excelName: string, __excelName: string, _keyData: string[], _typeData: string[], _explainData: string[]): string {
        /** 数据类型列表 */
        let _dataType: string = ``;
        for (let _i in _keyData) {
            _dataType += `       /** ${_explainData[_i]} */\n        ${_keyData[_i]}: ${this.getType(_typeData[_i])};${Number(_i) == _keyData.length - 1 ? '' : '\n'}`;
        }
        //
        return `// ！ 自动导出，请不要修改
//
/**
 * ${__excelName} const配置文件
 * ! 自动导出，不要修改和直接引用
 */
export namespace ${__excelName} {
    /** 配置表类型 */
    export const type: string = 'const';
    /** 数据类型 */
    export class DataType {
${_dataType}
    }
    /** const数据列表 */
    export var data: ${__excelName}.DataType = null;
    /** 文件名字 */
    export const fileName: string = '${_excelName}.json';
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