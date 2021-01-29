import ConsoleEx from 'src/_T/Console/ConsoleEx';
import { EUILayer } from './EUILayer';
import FGUIRootManager from './FGUIRootManager';
import IUICreate from './IUICreate';

/**
 * 基类 UI实例控制器
 * 可以直接实例化一个ui并进行显示和隐藏
 */
export default abstract class BaseUIInstanceCon<UI extends fgui.GComponent> {
    /** 是否初始化 */
    private m_ifInit: boolean = false;

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

    /** UI层级类型，必须在初始化时设置 */
    protected _layer: EUILayer = EUILayer.Panel;

    //初始化
    private init() {
        //先判断是否初始化
        if (!this.m_ifInit) {
            this.m_ifInit = true;
            if (!this._UIDefine) {
                console.error(...ConsoleEx.packError('没有设置UI类型'));
            }
            this.m_ui = this._UIDefine.createInstance() as UI;
            //
            FGUIRootManager.getLayerUI(this._layer).addChild(this.m_ui);
        }
    }

    /**
     * 显示
     */
    public Show() {
        if (this.m_ifShow) { return; }
        this.init();
        this.m_ifShow = true;
        this.ui.visible = true;
        this._Show();
    }

    /**
     * 隐藏
     */
    public Hide() {
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        this.ui.visible = false;
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