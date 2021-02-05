import ConfigDispose from "./config/dispose/ConfigDispose";

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
    }
}