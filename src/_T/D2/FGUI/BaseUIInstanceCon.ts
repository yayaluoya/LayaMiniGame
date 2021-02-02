import ConsoleEx from 'src/_T/Console/ConsoleEx';
import { EUILayer } from './EUILayer';
import FGUIRootManager from './FGUIRootManager';
import IUICreate from './IUICreate';

/**
 * 基类 UI实例控制器
 * 可以直接实例化一个ui并进行显示和隐藏
 */
export default abstract class BaseUIInstanceCon<UI extends fgui.GComponent> {
    /** UI类型，必须初始化前设置 */
    protected _UIDefine: IUICreate;

    //是否隐藏
    private m_ifShow: boolean = false;
    /** 获取是否隐藏 */
    public get ifShow(): boolean {
        return this.m_ifShow;
    }

    /** 当前ui实例 */
    private m_ui: UI;
    /** 当前ui实例 */
    public get ui(): UI {
        return this.m_ui;
    }

    /** 是否在隐藏时清理掉ui，默认为true */
    protected _ifClear: boolean = true;

    /** UI层级类型，必须在初始化时设置 */
    protected _layer: EUILayer = EUILayer.Panel;

    //创建ui
    private createUI() {
        if (!this._UIDefine) {
            console.error(...ConsoleEx.packError('没有设置UI类型'));
        }
        this.m_ui = this._UIDefine.createInstance() as UI;
        //
        FGUIRootManager.getLayerUI(this._layer).addChild(this.m_ui);
    }

    /**
     * 显示
     */
    public Show() {
        if (this.m_ifShow) { return; }
        if (!this.m_ui || this.m_ui.isDisposed) {
            //创建ui
            this.createUI();
        }
        this.m_ifShow = true;
        this.m_ui.visible = true;
        this._Show();
    }

    /**
     * 隐藏
     */
    public Hide(_ifClear: boolean = this._ifClear) {
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        if (_ifClear) {
            this.m_ui.dispose();
        } else {
            this.m_ui.visible = false;
        }
        this._Hide();
    }

    /**
     * 显示回调
     */
    protected _Show() { }

    /**
     * 隐藏回调
     */
    protected _Hide() { }
}