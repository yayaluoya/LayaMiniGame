import LogT from "src/_com/LogT";

/**
 * log处理
 */
export default class LogDispose {
    /**
     * 写入日志
     * @param _log 日志内容
     */
    public static writeLog(_log: string) {
        LogT.writeLog(_log);
    }
}