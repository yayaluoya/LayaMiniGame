import { EUILayer } from "./EUILayer";
import FGuiData from "./FGuiData";
import FGUIRootManager from "./FGUIRootManager";
import FGUIT from "./FGUIT";
import IUICreate from "./IUICreate";

/**
 * UI控制器基类(用来控制UI界面)
 */
export default abstract class BaseUICon {
    /** UI类型列表，可以显示很多个ui */
    protected _UIDefines: {
        [_index: string]: IBaseUIConDefines;
    } = {};

    /** 唯一键值 */
    private m_key: symbol = Symbol();
    /** 获取唯一键值 */
    public get key(): symbol {
        return this.m_key;
    }

    /** ui实例 */
    private m_ui: fgui.GComponent;
    /** 当前ui实例 */
    public get ui(): fgui.GComponent {
        return this.m_ui;
    }

    /** 是否在隐藏时清理掉ui，默认为true */
    protected _ifClear: boolean = true;

    /** UI层级类型，必须在初始化时设置 */
    protected _layer: EUILayer = EUILayer.Panel;

    /** ui层级 */
    public get layer(): EUILayer {
        return this._layer;
    }

    /** fgui数据 */
    protected get _fguiData(): FGuiData {
        return new FGuiData;
    }

    /** 是否显示 */
    private m_ifShow: boolean = false;

    /** 是否显示 */
    public get ifShow(): boolean {
        return this.m_ifShow;
    }

    //创建ui
    private createUI() {
        //初始化根节点ui
        this.m_ui = new fgui.GComponent();
        FGUIRootManager.getLayerUI(this._layer).addChild(this.m_ui);
        for (let _i in this._UIDefines) {
            this._UIDefines[_i]['ui'] = this.m_ui.addChild(this._UIDefines[_i].uiCreate.createInstance());
        }
    }

    /**
     * 显示UI
     */
    public Show(...par: any[]) {
        if (this.m_ifShow) { return; }
        this.m_ifShow = true;
        this._OnshowBefore();
        if (!this.m_ui || this.m_ui.isDisposed) {
            //创建ui
            this.createUI();
        }
        if (!this.m_ui.visible) {
            this.m_ui.visible = true;
        }
        //设置到当前层级顶层显示
        FGUIT.setUITopShow(this.m_ui);
        //监听事件
        Laya.stage.on(Laya.Event.RESIZE, this, this.update);
        //
        this._OnShow(...par);
    }

    /** 显示之前调用 */
    protected _OnshowBefore(...par: any[]) { }

    /** 显示之后调用 */
    protected _OnShow(...par: any[]) { }

    /**
     * 隐藏
     */
    public Hide(_ifClear: boolean = this._ifClear) {
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        this._OnHideBefore();
        if (_ifClear) {
            this.m_ui.dispose();
        } else {
            this.m_ui.visible = false;
        }
        //取消监听事件
        Laya.stage.off(Laya.Event.RESIZE, this, this.update);
        //
        this._OnHide();
    }

    /** 隐藏之前调用 */
    protected _OnHideBefore(...par: any[]) { }

    /** 隐藏之后调用 */
    protected _OnHide(...par: any[]) { }

    /** 更新 */
    private update() {
        //根据子ui携带的数据适配屏幕大小
        let _data: FGuiData;
        let _ui: fgui.GComponent;
        let _width: number = Laya.stage.width;
        let _height: number = Laya.stage.height;
        for (let _i in this._UIDefines) {
            _data = this._UIDefines[_i].data;
            if (!_data || !_data.ifUpdate) { continue; }
            _ui = this._fguiData[_i]['ui'];
            _ui.setSize(_width - _data.left - _data.right, _height - _data.bottom - _data.top);
            _ui.setXY(_data.left, _data.top);
        }
    }
}

/**
 * 基类ui控制器类型接口
 */
export interface IBaseUIConDefines {
    /** ui创建器 */
    uiCreate: IUICreate;
    /** 数据 */
    data?: FGuiData;
}