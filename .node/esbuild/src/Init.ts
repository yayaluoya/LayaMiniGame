import SrcWatch from "./srcProxy/SrcWatch";

/**
 * 初始化
 */
export default class Init {
    /**
     * 初始化项目
     */
    public static init(): Promise<void> {
        return new Promise<void>((r, e) => {
            //开启文件监听
            SrcWatch.start();
            //
            r();
        });
    }
}