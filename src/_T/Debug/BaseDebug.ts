import _GameConfig from "src/Config/_GameConfig";
import ConsoleEx from "../Console/ConsoleEx";

/**
 * 根调试类，所有调试类必须由此继承
 */
export default abstract class BaseDebug {
    /** 前缀 */
    public static readonly Prefix: string = '$Debug';

    /** 调试对象 */
    public static DebugObj: any = {};

    /** 名字，用 Window[前缀 + _name] 访问 */
    protected abstract get _name(): string;

    /** 是否开始调试 */
    private _ifStart: boolean = false;

    /** 开启调试 */
    public startDebug() {
        //判断是否开始了调试
        if (!_GameConfig.ifDebug) { return; }
        this._ifStart = true;
        //注入到全局中
        if (BaseDebug.DebugObj[this._name]) {
            console.warn(...ConsoleEx.packWarn('有一个调试对象名字重名了，将会被第二个覆盖', this._name));
        }
        BaseDebug.DebugObj[this._name] = this;
        //
        this._startDebug();
    }

    /**
     * 添加一个调试对象
     * @param _key key
     * @param _item 该对象
     */
    public addItem(_key: string, _item: any) {
        //判断是否开启了调试
        if (!this._ifStart) { return; }
        //
        if (this[_key]) {
            console.warn(...ConsoleEx.packWarn('该调试对象已经存在了，将会被第二个覆盖', this._name, '-', _key));
        }
        this[_key] = _item;
    }

    /** 开启调试回调 */
    protected _startDebug() { }
}

//判断是否开启了调试模式
if (_GameConfig.ifDebug) {
    //注册全局调试对象
    window[BaseDebug.Prefix] = BaseDebug.DebugObj;
    //
    console.warn(...ConsoleEx.packWarn('开启调试模式，通过', BaseDebug.Prefix, '访问'));
}