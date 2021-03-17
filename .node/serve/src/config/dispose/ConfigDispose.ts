import { EResponseCode } from "src/_com/EResponseCode";
import { IResponseData } from "src/_com/IResponseData";
import ResponseDataT from "src/_com/ResponseDataT";
import ResURL from "src/_com/ResURL";
import { readdirSync, readFileSync, Stats, statSync, writeFile } from "fs";
import Pako from "src/_com/Pako";
import ExcelToJson from "src/_com/ExcelToJson";
import ConfigResURL, { ELocalURLKey, ELocalURLKeyDescription } from "./ConfigResURL";
import ConfigLocalData from "./ConfigLocalData";
import { EConfigLocalDataKey } from "./EConfigLocalDataKey";

/**
 * 配置文件处理类
 */
export default class ConfigDispose {
    /**
     * 初始化
     */
    public static init() {
        //
    }

    /**
     * 获取所有配置表名字
     */
    public async getAllConfigsNames(): Promise<IResponseData<IFileComData[]>> {
        return new Promise<IResponseData<IFileComData[]>>((r, e) => {
            this.getAllFileNames(ConfigResURL.getURL(ELocalURLKey.configExcelURL), 'xlsx').then((data) => {
                let _info: Stats = null;
                let _excelInfos: IExcelInfo[] = ConfigLocalData.instance.getItem(EConfigLocalDataKey.excelInfoData) || [];
                let _excelInfo: IExcelInfo;
                let _ifAlter: boolean;
                //添加属性
                data.data = data.data.map((item) => {
                    //判断修改时间
                    _info = statSync(item.path);
                    _excelInfo = _excelInfos.find((_item) => {
                        return _item.url == item.path;
                    });
                    //默认为修改过
                    _ifAlter = true;
                    if (_excelInfo) {
                        //判断时间是否正确，如果不正确就说明有修改
                        // console.log(_info.mtime.toLocaleString(), _excelInfo.info.mtime);
                        _ifAlter = (_info.mtime.toLocaleString() != _excelInfo.info.mtime);
                    }
                    item['ifAlter'] = _ifAlter;
                    //
                    return item;
                });
                r(data);
            }).catch((E) => {
                e(E);
            });
        });
    }
    /**
     * 获取所有配置表json名字
     */
    public getAllConfigJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ConfigResURL.getURL(ELocalURLKey.configJsonURL), 'json');
    }
    /**
     * 获取所有场景json文件名字
     */
    public getAllSceneJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ConfigResURL.getURL(ELocalURLKey.sceneJsonURL), 'json');
    }

    /**
     * 获取一个目录下的全部文件名字,包括修改信息
     * @param _url 目录
     * @param _dis 文件后缀
     */
    private getAllFileNames(_url: string, _dis: string): Promise<IResponseData<IFileComData[]>> {
        let _jsonNames: IFileComData[];
        try {
            _jsonNames = readdirSync(_url).filter((item) => {
                return RegExp('^[a-zA-Z0-9_-]+\.' + _dis + '$').test(item);
            }).map((item) => {
                return {
                    name: item,
                    path: ResURL.join(_url, item),
                };
            });
        } catch (e) {
            _jsonNames = [];
        }
        return new Promise<IResponseData<IFileComData[]>>((r) => {
            //
            r(ResponseDataT.Pack(_jsonNames));
        });
    }

    /**
     * 读取json文件内容
     * @param _url 文件地址
     */
    public getJsonData(_url: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            //不允许读取其他内容
            if (!_url || !/\.json$/.test(_url)) {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '必须是.json后缀的文件！'));
                return;
            }
            // 同步读取
            try {
                let _data: any = JSON.parse(readFileSync(_url).toString());
                r(ResponseDataT.Pack(_data));
            } catch (e) {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '读取文件失败！'));
            }
        });
    }

    /**
     * 压缩json文件
     * @param _url 地址
     */
    public zipJsonFile(_url: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            try {
                this.getJsonData(_url).then((_data) => {
                    if (_data.code != EResponseCode.com) {
                        //压缩失败
                        r(_data);
                        return;
                    } else {
                        //获取数据
                        let _jsonData: IJsonData = _data.data as IJsonData;
                        if (!_jsonData.zip) {
                            _jsonData.data = Pako.deflate(JSON.stringify(_jsonData.data));
                            _jsonData.zip = true;
                        } else {
                            r(ResponseDataT.Pack(_jsonData));
                            return;
                        }
                        //重新存储数据
                        writeFile(_url, JSON.stringify(_jsonData), () => {
                            r(ResponseDataT.Pack(_jsonData));
                        });
                    }
                });
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '压缩失败'));
            }
        });
    }

    /**
     * 解压json文件
     * @param _url 文件地址
     */
    public unZipJsonFile(_url: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            try {
                this.getJsonData(_url).then((_data) => {
                    if (_data.code != EResponseCode.com) {
                        //压缩失败
                        r(_data);
                        return;
                    } else {
                        //获取数据
                        let _jsonData: IJsonData = _data.data as IJsonData;
                        if (_jsonData.zip) {
                            _jsonData.data = JSON.parse(Pako.inflate(_jsonData.data));
                            _jsonData.zip = false;
                        } else {
                            r(ResponseDataT.Pack(_jsonData));
                            return;
                        }
                        //重新存储数据
                        writeFile(_url, JSON.stringify(_jsonData), () => {
                            r(ResponseDataT.Pack(_jsonData));
                        });
                    }
                });
            } catch {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '解压失败'));
            }
        });
    }

    /**
     * 导出配置文件到json
     * @param _excel excel文件路径
     */
    public exportExcelToJson(_excel: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            ExcelToJson.excelToJson(
                _excel,
                ConfigResURL.getURL(ELocalURLKey.configJsonURL),
                ConfigResURL.getURL(ELocalURLKey.configTSURL),
            ).then((data) => {
                //修改本地缓存的配置表info数据
                let _excelInfos: IExcelInfo[] = ConfigLocalData.instance.getItem(EConfigLocalDataKey.excelInfoData) || [];
                let _index: number = _excelInfos.findIndex((item) => {
                    return item.url == _excel;
                });
                let _stat: Stats = statSync(_excel);
                if (_index != -1) {
                    _excelInfos[_index].info.mtime = _stat.mtime.toLocaleString();
                } else {
                    _excelInfos.push({
                        url: _excel,
                        info: {
                            mtime: _stat.mtime.toLocaleString(),
                        },
                    });
                }
                //重新存储数据
                ConfigLocalData.instance.setItem(EConfigLocalDataKey.excelInfoData, _excelInfos);
                //成功
                r(ResponseDataT.Pack(undefined, undefined, undefined, data));
            }).catch((_E) => {
                //失败
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, _E));
            });
        });
    }

    /**
     * 获取所有路径
     */
    public getAllURL(): Promise<IResponseData<any[]>> {
        return new Promise<IResponseData<any[]>>((r) => {
            let _urlKey: any[] = [];
            let ifExist: boolean = false;
            for (let _i in ELocalURLKey) {
                try {
                    ifExist = statSync(ConfigResURL.getURL(ELocalURLKey[_i])).isDirectory();
                } catch {
                    ifExist = false;
                }
                _urlKey.push({
                    key: ELocalURLKey[_i],
                    url: ConfigLocalData.instance.getItem(ELocalURLKey[_i]),
                    onUrl: ConfigResURL.getURL(ELocalURLKey[_i]),
                    explain: ELocalURLKeyDescription[ELocalURLKey[_i]],
                    ifExist: ifExist,
                });
            }
            r(ResponseDataT.Pack(_urlKey));
        });
    }

    /**
     * 修改路径
     * @param _key 路径数据关键键
     * @param _url 新地址
     */
    public alterURL(_key: ELocalURLKey, _url: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            if (!_key) {
                r(ResponseDataT.Pack('', EResponseCode.lose, '路径关键键不存在！'));
                return;
            }
            //修改本地数据
            ConfigLocalData.instance.setItem(_key, _url);
            //当前路径
            let _onUrl: string = ConfigResURL.getURL(_key);
            let ifExist: boolean = false;
            let moreUrl: string[] = [];
            try {
                ifExist = statSync(_onUrl).isDirectory();
                if (ifExist) {
                    //找更多目录
                    moreUrl = readdirSync(_onUrl).filter((item) => {
                        return statSync(ResURL.join(_onUrl, item)).isDirectory();
                    });
                }
            }
            catch {
                ifExist = false;
            }
            //
            r(ResponseDataT.Pack({
                url: _onUrl,
                ifExist: ifExist,
                moreUrl: moreUrl,
            }));
        });
    }
}

/**
 * 配置表info数据
 */
interface IExcelInfo {
    /** 路径 */
    url: string,
    /** info数据 */
    info: {
        /** 修改时间字符串 */
        mtime: string,
    },
}

/**
 * 文件基础数据接口
 */
interface IFileComData {
    /** 名字 */
    name: string,
    /** 地址 */
    path: string,
}