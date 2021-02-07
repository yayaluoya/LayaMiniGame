import ConfigDispose from "./config/dispose/ConfigDispose";
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
        //初始化配置文件处理
        ConfigDispose.init();
        //初始化日志处理
        LogDispose.init();
    }
}