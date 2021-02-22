import { mkdirSync, writeFile } from "fs";
import { EResponseCode } from "src/_com/EResponseCode";
import { IResponseData } from "src/_com/IResponseData";
import ResponseDataT from "src/_com/ResponseDataT";
import ResURL from "src/_com/ResURL";
import { IFileData } from "../com/IFileData";
var sd = require('silly-datetime');

/**
 * 文件处理类
 */
export default class FileDispose {
    /**
     * 初始化
     */
    public static init() { }

    /**
     * 上传文件
     * @param file 文件数据
     * @param body 其它数据
     */
    public uploadFile(file: IFileData, body: any): Promise<IResponseData<{ any }>> {
        return new Promise<IResponseData<any>>((r, e) => {
            //创建当天时间目录
            let _time: string = sd.format(new Date(), 'YYYY-MM-DD');
            //先创建目录
            try {
                mkdirSync(ResURL.join(ResURL.fileURL, _time));
            } catch (E) {
                //已经存在该目录
            }
            //
            let _url: string = ResURL.join(ResURL.fileURL, _time + '/' + Date.now() + '-' + file.originalname);
            try {
                //保存文件
                writeFile(_url, file.buffer, () => {
                    r(ResponseDataT.Pack({
                        url: ResURL.join(_url.replace(ResURL.serveResURL, ResURL.serveURL)),
                    }));
                });
            } catch (E) {
                e(ResponseDataT.Pack(undefined, EResponseCode.lose, E));
            }
        });
    }
}