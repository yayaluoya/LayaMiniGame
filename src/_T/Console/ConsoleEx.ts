import _MainConfig from "src/Config/_MainConfig";
import ConsoleConst from "./ConsoleConst";

/**
 * 打印台扩展
 */
export default class ConsoleEx {
    /**
     * 包装信息
     * @param _style 样式
     * @param _par 参数
     */
    private static pack(_style: string, _par: any[]): any {
        return ['%c%s', _style, 'log', ..._par];
    }
    /**
     * 包装普通消息
     * @param any 内容
     */
    public static packLog(...any: any[]) {
        if (_MainConfig.OnLine) { return any; }
        //
        return this.pack(ConsoleConst.logStyle, any);
    }

    /**
     * 包装普通轻消息
     * @param any 内容
     */
    public static packLogLight(...any: any[]) {
        if (_MainConfig.OnLine) { return any; }
        //
        return this.pack(ConsoleConst.logLightStyle, any);
    }

    /**
     * 包装成功消息
     * @param any 内容
     */
    public static packCom(...any: any[]) {
        if (_MainConfig.OnLine) { return any; }
        //
        return this.pack(ConsoleConst.comStyle, any);
    }

    /**
     * 包装警告消息
     * @param any 内容
     */
    public static packWarn(...any: any[]) {
        if (_MainConfig.OnLine) { return any; }
        //
        return this.pack(ConsoleConst.warnStyle, any);
    }

    /**
     * 包装错误消息
     * @param any 内容
     */
    public static packError(...any: any[]) {
        if (_MainConfig.OnLine) { return any; }
        //
        return this.pack(ConsoleConst.errorStyle, any);
    }
}