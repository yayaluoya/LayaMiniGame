import BaseUICon from "./BaseUICon";
import RootUICon from "./RootUICon";

/**
 * 基类UI控制器代理
 * 当一个页面UI种类过多时，可以通过继承这个类把不同的UI功能分出去
 */
export default abstract class BaseUIConProxy<UI extends fgui.GComponent, Con extends BaseUICon> extends RootUICon {
    /** 是否开始代理 */
    private m_ifProxy: boolean = false;

    /** 是否显示 */
    private m_ifShow: boolean = false;

    /** 代理的控制器 */
    private m_con: Con;

    /** 代理的UI */
    private m_ui: UI;

    /** 是否开始代理 */
    public get ifProxy(): boolean {
        return this.m_ifProxy;
    }

    /** 获取是否显示 */
    public get ifShow(): boolean {
        return this.m_ifShow;
    }

    /** 获取控制器 */
    public get con(): Con {
        return this.m_con;
    }

    /** 获取ui */
    public get ui(): UI {
        return this.m_ui;
    }

    /**
     * 设置代理
     * @param _con 代理的该UI的控制器
     * @param _ui 代理的UI
     * @param _state 初始显示状态
     */
    public setProxy(_con: Con, _ui: UI, _state: boolean = true) {
        this.m_ifProxy = true;
        this.m_con = _con;
        this.m_ui = _ui;
        this.m_ui.visible = _state;
        _con.addUIProxy(this);
        //执行回调
        this._start();
    }
    /** 开始代理 继承使用 */
    protected _start() { }

    /**
     * 结束代理
     */
    public endProxy() {
        this.m_con.removeUIProxy(this);
        this.m_con = null;
        this.m_ui = null;
        this.m_ifProxy = false;
        this.m_ifShow = false;
        //执行回调
        this._end();
    }
    /** 结束代理 继承使用*/
    protected _end() { }

    public Show(...par) {
        //必须要还在代理的是否才能使用
        if (!this.ifProxy) { return; }
        if (this.m_ifShow) { return; }
        this.m_ifShow = true;
        this._onShowBefore();
        this.m_ui.visible = true;
        this._onShow(false, ...par);
    }

    public Hide(...par) {
        //必须要还在代理的是否才能使用
        if (!this.ifProxy) { return; }
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        this._onHideBefore();
        this.m_ui.visible = false;
        this._onHide(false, ...par);
    }

    protected _onShowBefore(...par) { }

    protected _onShow(_ifNew: boolean, ...par) { }

    protected _onHideBefore(...par) { }

    protected _onHide(_ifDelete: boolean, ...par) { }
}