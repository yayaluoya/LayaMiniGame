import ResURL from "src/_T/ResURL";
import URLT from "src/_T/URLT";
import FileTransition from "./FileTransition";
var fs = require("fs");
const esbuild = require('esbuild');

/**
 * 文件打包
 */
export default class FileBuild {
    /**
     * 打包
     * @param _url 模块路径
     */
    public static build(_url: string): Promise<string> {
        return new Promise<string>((r, e) => {
            //
            let _cacheFileUrl: string = URLT.join(ResURL.codeBuildCacheURL, _url.match(/[^\/\\]*?$/)[0] + '_' + Date.now());
            //打包到缓存目录
            esbuild.buildSync({
                entryPoints: [URLT.join(ResURL.srcURL, _url)],
                outfile: _cacheFileUrl,
            })
            //读取目标文件
            let content: string = fs.readFileSync(_cacheFileUrl);
            //文件过渡
            content = FileTransition.buildBack(content);//打包后
            //删除文件
            fs.unlinkSync(_cacheFileUrl);
            //包装内容
            content = `//
//esBuild: ${Date.now()}
//
${content}
//          `;
            //返回内容
            r(content);
        });
    }
}