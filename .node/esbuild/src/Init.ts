import FileWatch from "./file/FileWatch";
import ResURL from "./_T/ResURL";
const fs = require('fs');

/**
 * 初始化
 */
export default class Init {
    /**
     * 初始化项目
     */
    public static init(): Promise<void> {
        return new Promise<void>((r, e) => {
            try {
                //创建后端缓存目录
                fs.mkdirSync(ResURL.codeBuildCacheURL);
            } catch { }
            //开启文件监听
            FileWatch.start();
            //
            r();
        });
    }
}