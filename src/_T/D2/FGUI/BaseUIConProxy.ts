import BaseUICon from "./BaseUICon";

/**
 * 基类UI控制器代理
 * 当一个页面UI种类过多时，可以通过继承这个类把不同的UI功能分出去
 */
export default abstract class BaseUIConProxy<UI extends fgui.GComponent, Con extends BaseUICon> {
    /** 是否开始代理 */
    protected m_ifProxy: boolean = false;

    /** 代理的控制器 */
    protected m_con: Con;

    /** 代理的UI */
    protected m_ui: UI;

    /** 是否开始代理 */
    public get ifProxy(): boolean {
        return this.m_ifProxy;
    }

    /**
     * 设置代理
     * @param _con 代理的该UI的控制器
     * @param _ui 代理的UI
     */
    public setProxy(_con: Con, _ui: UI) {
        this.m_ifProxy = true;
        this.m_con = _con;
        this.m_ui = _ui;
        //执行回调
        this._start();
    }
    /** 开始代理 继承使用 */
    protected _start() { }

    /**
     * 结束代理
     */
    public endProxy() {
        this.m_ifProxy = false;
        this.m_con = null;
        this.m_ui = null;
        //执行回调
        this._end();
    }
    /** 结束代理 继承使用*/
    protected _end() { }

    /** 
     * 显示
     */
    public Show(...prg) {
        //必须要还在代理的是否才能使用
        if (!this.ifProxy) { return; }
        this.m_ui.visible = true;
        this._show(...prg);
    }

    /** 
     * 隐藏
     */
    public Hide(...prg) {
        //必须要还在代理的是否才能使用
        if (!this.ifProxy) { return; }
        this.m_ui.visible = false;
        this._hide(...prg);
    }

    /** 显示回调 */
    protected _show(...prg) { }

    /** 隐藏回调 */
    protected _hide(...prg) { }
}