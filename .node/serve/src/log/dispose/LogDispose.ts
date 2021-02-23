import { readdirSync, readFileSync, writeFile } from "fs";
import { EResponseCode } from "src/_com/EResponseCode";
import { IResponseData } from "src/_com/IResponseData";
import ResponseDataT from "src/_com/ResponseDataT";
import ResURL from "src/_com/ResURL";

/**
 * log处理类
 */
export default class LogDispose {
    /**
     * 初始化
     */
    public static init() { }

    /** 获取所有日志基础数据 */
    public getAllLog(): Promise<IResponseData<ILogData[]>> {
        return new Promise<IResponseData<ILogData[]>>((r, e) => {
            let _datas: ILogData[] = [];
            try {
                let _urls: string[] = readdirSync(ResURL.logURL).filter((item) => {
                    return /\.log$/.test(item);
                });
                //
                let _name: string;
                for (let _o of _urls) {
                    _name = _o.replace('.log', '');
                    _datas.push({
                        name: _name,
                        data: readFileSync(ResURL.join(ResURL.logURL, _name + '.log')).toString(),
                        data_: '',
                    });
                }
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '获取所有日志数据失败！'));
                return;
            }
            r(ResponseDataT.Pack(_datas));
            //
        });
    }

    /**
     * 获取日志数据
     * @param _name 日志名字
     */
    public getLog(_name: string): Promise<IResponseData<ILogData>> {
        return new Promise<IResponseData<ILogData>>((r, e) => {
            try {
                let _data: string = readFileSync(ResURL.join(ResURL.logURL, _name + '.log')).toString();
                let _data_: string = readFileSync(ResURL.join(ResURL.logURL, _name + '.log_')).toString();
                r(ResponseDataT.Pack({
                    name: _name,
                    data: _data,
                    data_: _data_,
                }));
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose));
            }
        });
    }

    /**
     * 写入日志
     * @param _log 日志基础类容
     * @param _log_ 日志类容
     * @param _key 标记类容
     */
    public writeLog(_log: string, _log_: string, _key: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r, e) => {
            let _name: string = _key + '_' + Date.now();
            //去除特殊符号
            _name = _name.replace(/[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g, '');
            try {
                writeFile(ResURL.join(ResURL.logURL, _name + '.log'), _log, () => {
                    writeFile(ResURL.join(ResURL.logURL, _name + '.log_'), _log_, () => {
                        r(ResponseDataT.Pack({
                            name: _name,
                        }));
                    });
                });
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '写入日志失败!'));
            }
        });
    }

    /**
     * 修改日志
     * @param _name 日志名字
     * @param _log 日志基础内容
     * @param _log_ 日志内容
     */
    public editLog(_name: string, _log: string, _log_: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<boolean>>((r, e) => {
            try {
                writeFile(ResURL.join(ResURL.logURL, _name + '.log'), _log, () => {
                    writeFile(ResURL.join(ResURL.logURL, _name + '.log_'), _log_, () => {
                        r(ResponseDataT.Pack(true));
                    });
                });
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '修改日志失败！'));
            }
        });
    }
}

/**
 * 日志数据
 */
export interface ILogData {
    /** 名字 */
    name: string,
    /** 基础数据 */
    data: string,
    /** 源数据 */
    data_: string,
}