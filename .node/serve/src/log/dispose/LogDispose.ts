import LogT from "src/_com/LogT";

/**
 * log处理类
 */
export default class LogDispose {
    /**
     * 初始化
     */
    public static init() { }

    /**
     * 写入日志
     * @param _log 日志内容
     */
    public writeLog(_log: string) {
        LogT.writeLog(_log);
    }
}