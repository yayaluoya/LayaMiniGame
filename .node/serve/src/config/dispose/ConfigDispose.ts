import { EResponseCode } from "src/_com/EResponseCode";
import { IResponseData } from "src/_com/IResponseData";
import ResponseDataT from "src/_com/ResponseDataT";
import ResURL from "src/_com/ResURL";
import { readdirSync, readFileSync, writeFile } from "fs";
import Pako from "src/_com/Pako";
import ExcelToJson from "src/_com/ExcelToJson";
import ConfigResURL, { ELocalURLKey } from "./ConfigResURL";
import ConfigLocalData from "./ConfigLocalData";

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
        return this.getAllFileNames(ConfigResURL.excelURL, 'xlsx');
    }
    /**
     * 获取所有配置表json名字
     */
    public getAllConfigJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ConfigResURL.configJsonURL, 'json');
    }
    /**
     * 获取所有场景json文件名字
     */
    public getAllSceneJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ConfigResURL.sceneJsonURL, 'json');
    }

    /**
     * 获取一个目录下的全部文件名字
     * @param _url 目录
     * @param _dis 文件后缀
     */
    private getAllFileNames(_url: string, _dis: string): Promise<IResponseData<IFileComData[]>> {
        var _jsonNames: IFileComData[] = readdirSync(_url).filter((item) => {
            return RegExp('^[a-zA-Z0-9_-]+\.' + _dis + '$').test(item);
        }).map((item) => {
            return {
                name: item,
                path: ResURL.join(_url, item),
            };
        });
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
        });
    }

    /**
     * 解压json文件
     * @param _url 文件地址
     */
    public unZipJsonFile(_url: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
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
                ConfigResURL.configJsonURL,
                ConfigResURL.configTSURL,
            ).then((data) => {
                //成功
                r(ResponseDataT.Pack(undefined, undefined, undefined, data));
            }).catch((_E) => {
                //失败
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, _E));
            });
        });
    }

    /**
     * 获取路径
     * @param _key 路径数据关键键
     */
    public getURL(_key: ELocalURLKey): Promise<IResponseData<string>> {
        return new Promise<IResponseData<string>>((r) => {
            if (!_key) {
                r(ResponseDataT.Pack('', undefined));
                return;
            }
            r(ResponseDataT.Pack(ConfigLocalData.instance.getItem(_key)));
        });
    }

    /**
     * 修改路径
     * @param _key 路径数据关键键
     * @param _url 新地址
     */
    public alterURL(_key: ELocalURLKey, _url: string): Promise<IResponseData<boolean>> {
        return new Promise<IResponseData<boolean>>((r) => {
            if (!_key) {
                r(ResponseDataT.Pack(false, undefined, '路径关键键不存在！'));
                return;
            }
            //修改本地数据
            ConfigLocalData.instance.setItem(_key, _url);
            //
            r(ResponseDataT.Pack(true));
        });
    }
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