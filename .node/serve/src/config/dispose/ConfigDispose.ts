import { EResponseCode } from "src/_T/EResponseCode";
import { IResponseData } from "src/_T/IResponseData";
import ResponseDataT from "src/_T/ResponseDataT";
import ResURL from "src/_T/ResURL";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import Pako from "src/_T/Pako";
import ExcelToJson from "src/_T/ExcelToJson";
import { cache } from "webpack";

/**
 * 配置文件处理类
 */
export default class ConfigDispose {
    /**
     * 获取所有配置表名字
     */
    public async getAllConfigsNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ResURL.excelURL, 'xlsx');
    }
    /**
     * 获取所有配置表json名字
     */
    public getAllConfigJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ResURL.configJsonURL, 'json');
    }
    /**
     * 获取所有场景json文件名字
     */
    public getAllSceneJsonNames(): Promise<IResponseData<IFileComData[]>> {
        return this.getAllFileNames(ResURL.sceneJsonURL, 'json');
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
                path: join(_url, item),
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
    public getJsonData(_url: string): Promise<IResponseData<string>> {
        return new Promise<IResponseData<string>>((r) => {
            //不允许读取其他内容
            if (!_url || !/\.json$/.test(_url)) {
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, '必须是.json后缀的文件！'));
                return;
            }
            // 同步读取
            try {
                let _data: string = readFileSync(_url).toString();
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
    public zipJsonFile(_url: string): Promise<IResponseData<string>> {
        return new Promise<IResponseData<string>>((r) => {
            this.getJsonData(_url).then((_data) => {
                r(ResponseDataT.Pack(Pako.inflate(Pako.deflate('压缩'))));
                return;
                if (_data.code != EResponseCode.com) {
                    r(_data);
                    return;
                }
                //压缩文件
            });
        });
    }

    /**
     * 导出配置文件到json
     * @param _excel excel文件路径
     * @param _json json文件保存路径
     * @param _ts ts文件保存路径
     */
    public exportExcelToJson(_excel: string, _json: string, _ts: string): Promise<IResponseData<any>> {
        return new Promise<IResponseData<any>>((r) => {
            ExcelToJson.excelToJson(_excel, _json, _ts).then((data) => {
                //成功
                r(ResponseDataT.Pack(undefined, undefined, undefined, data));
            }).catch((data) => {
                //失败
                r(ResponseDataT.Pack(undefined, EResponseCode.lose, data));
            });
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

/**
 * json数据接口
 * 所有能处理的json文件必须满足这个接口定义
 */
interface IJsonData {
    /** 数据 */
    data: any,
    /** 是否压缩 */
    zip: boolean,
}