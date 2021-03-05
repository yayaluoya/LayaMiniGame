import _GameConfig from "src/Config/_GameConfig";
import ConsoleEx from "../Console/ConsoleEx";

/**
 * 根调试类，所有调试类必须由此继承
 */
export default abstract class BaseDebug {
    /** 前缀 */
    public static readonly Prefix: string = '$Debug';

    /** 根调试对象 */
    public static DebugObj: any = {};

    /** 
     * 名字，用 Window[前缀 + _name] 访问
     * 可以继承更改这个属性
     */
    protected get _name(): string {
        return this.constructor.name;
    }

    /** 是否初始化 */
    private _ifInit: boolean = false;

    /**
     * 添加一个调试对象
     * @param _key key
     * @param _item 该对象
     */
    public addItem(_key: string, _item: any) {
        if (!_GameConfig.ifDebug) {
            return;
        }
        if (!this._ifInit) {
            this._ifInit = true;
            BaseDebug.DebugObj[this._name] = this;
        }
        this[_key] = _item;
    }
}

//判断是否开启了调试模式
if (_GameConfig.ifDebug) {
    //注册全局调试对象
    window[BaseDebug.Prefix] = BaseDebug.DebugObj;
    //
    console.warn(...ConsoleEx.packWarn('开启调试模式，通过', BaseDebug.Prefix, '访问'));
}