import Config from "src/config/Config";
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
            try {
                //源url
                let _rootUrl: string = _url;
                _url = URLT.join(ResURL.srcURL, _rootUrl);
                //判断是否带后缀
                if (!/\..*$/.test(_url)) {
                    _url += '.ts';
                }
                //读取目标文件
                fs.readFile(_url, (err, rootCode) => {
                    if (err) {
                        console.log(err);
                        e('');
                    } else {
                        rootCode = rootCode.toString();
                        // rootCode = 'let a: string = \'哈哈哈\'; console.log(a);';
                        //使用esbuild打包
                        esbuild.transform(rootCode, {
                            //装载器
                            loader: 'ts',
                            //内联映射
                            sourcemap: 'inline',
                            //是否压缩
                            minify: Config.minify,
                            //资源文件
                            sourcefile: _url,
                            //字符集
                            charset: 'utf8',
                            //
                        }).then(({ code }) => {
                            //文件过渡
                            code = FileTransition.buildBack(code);//打包后
                            // console.log('模块内容', data);
                            //返回内容
                            r(code);
                        }).catch((E) => {
                            console.error(E);
                            e('');
                        });
                    }
                });
            } catch (E) {
                console.error(E);
                e('');
            }
        });
    }
}