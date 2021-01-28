import ConsoleConst from "./ConsoleConst";

/**
 * 打印台扩展
 */
export default class ConsoleEx {
    /**
     * 打印普通消息
     * @param any 内容
     */
    public static log(...any) {
        console.log(`%c ${any}`, ConsoleConst.logStyle);
    }

    /**
     * 打印警告消息
     * @param any 内容
     */
    public static warn(...any) {
        console.log(`%c ${any}`, ConsoleConst.warnStyle);
    }

    /**
     * 打印错误消息
     * @param any 内容
     */
    public static error(...any) {
        console.log(`%c ${any}`, ConsoleConst.errorStyle);
    }

    //* ---------- *//

    /**
     * 包装普通消息
     * @param any 内容
     */
    public static packLog(...any) {
        return [`%c ${any} `, ConsoleConst.logStyle];
    }

    /**
     * 包装普通轻消息
     * @param any 内容
     */
    public static packLogLight(...any) {
        return [`%c ${any} `, ConsoleConst.logLightStyle];
    }

    /**
     * 包装成功消息
     * @param any 内容
     */
    public static comLog(...any) {
        return [`%c ${any} `, ConsoleConst.comStyle];
    }

    /**
     * 包装警告消息
     * @param any 内容
     */
    public static packWarn(...any) {
        return [`%c 警告: ${any} `, ConsoleConst.warnStyle];
    }

    /**
     * 包装错误消息
     * @param any 内容
     */
    public static packError(...any) {
        return [`%c 错误: ${any} `, ConsoleConst.errorStyle];
    }
}