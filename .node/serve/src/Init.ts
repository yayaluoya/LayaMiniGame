import ComDispose from "./com/dispose/ComDispose";
import ConfigDispose from "./config/dispose/ConfigDispose";
import FileDispose from "./file/dispose/FileDispose";
import LogDispose from "./log/dispose/LogDispose";

/**
 * 初始化
 */
export default class Init {
    //
    public constructor() {
        this.init();
    }

    //
    private init() {
        //公共处理
        ComDispose.init();
        //初始化配置文件处理
        ConfigDispose.init();
        //初始化日志处理
        LogDispose.init();
        //文件处理
        FileDispose.init();
    }
}