import BaseUIConProxy from "./BaseUIConProxy";
import { EUILayer } from "./EUILayer";
import FGuiData from "./FGuiData";
import FGUIRootManager from "./FGUIRootManager";
import FGUIT from "./FGUIT";
import IUICreate from "./IUICreate";
import RootUICon from "./RootUICon";

/**
 * UI控制器基类(用来控制UI界面)
 */
export default abstract class BaseUICon extends RootUICon {
    /** UI列表，可以显示很多个ui */
    protected _UIs: {
        [_index: string]: IBaseUIConDefines;
    } = {};

    /** 唯一键值 */
    private m_key: symbol = Symbol();
    /** 获取唯一键值 */
    public get key(): symbol {
        return this.m_key;
    }

    /** 根ui实例 */
    private m_rootUI: fgui.GComponent;
    /** 根ui实例 */
    public get rootUI(): fgui.GComponent {
        return this.m_rootUI;
    }

    /** 是否在隐藏时清理掉ui，默认为true */
    protected _ifClear: boolean = true;

    /** UI层级类型，必须在初始化时设置 */
    protected _layer: EUILayer = EUILayer.Panel;

    /** ui层级 */
    public get layer(): EUILayer {
        return this._layer;
    }

    /** 是否显示 */
    private m_ifShow: boolean = false;

    /** 是否显示 */
    public get ifShow(): boolean {
        return this.m_ifShow;
    }

    /** ui代理列表 */
    private m_proxyUIList: Set<BaseUIConProxy<fgui.GComponent, BaseUICon>> = new Set();

    /**
     * 添加一个ui代理
     * @param _proxy 该代理
     */
    public addUIProxy(_proxy: BaseUIConProxy<fgui.GComponent, BaseUICon>) {
        this.m_proxyUIList.add(_proxy);
    }

    /**
     * 删除一个ui代理
     * @param _proxy 该代理
     */
    public removeUIProxy(_proxy: BaseUIConProxy<fgui.GComponent, BaseUICon>) {
        this.m_proxyUIList.delete(_proxy);
    }

    /**
     * 显示代理ui
     */
    public showUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.Show();
        });
    }

    /**
     * 隐藏代理ui
     */
    public hideUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.Hide();
        });
    }

    /**
     * 结束ui代理
     */
    public endUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.endProxy();
        });
    }

    //创建ui
    private createUI() {
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        FGUIRootManager.getLayerUI(this._layer).addChild(this.m_rootUI);
        for (let _i in this._UIs) {
            this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance()) as fgui.GComponent;
        }
        //
        this._createUI();
    }

    /** 创建完ui后回调 */
    protected _createUI() { }

    /**
     * 获取ui
     * @param _name ui名字
     */
    public getUI<UI extends fgui.GComponent>(_name: string): UI {
        return this._UIs[_name].ui as UI;
    }

    public Show(...par: any[]) {
        if (this.m_ifShow) { return; }
        this.m_ifShow = true;
        this._onShowBefore(...par);
        let _ifNew: boolean = false;
        if (!this.m_rootUI || this.m_rootUI.isDisposed) {
            //创建ui
            this.createUI();
            _ifNew = true;
        }
        if (!this.m_rootUI.visible) {
            this.m_rootUI.visible = true;
        }
        //设置到当前层级顶层显示
        FGUIT.setUITopShow(this.m_rootUI);
        //手动更新一次
        this.updateSize();
        //监听事件
        Laya.stage.on(Laya.Event.RESIZE, this, this.updateSize);
        //
        this._onShow(_ifNew, ...par);
    }

    protected _onShowBefore(...par: any[]) { }
    protected _onShow(_ifNew: boolean, ...par: any[]) { }

    /**
     * 隐藏
     * @param _ifClear 是否清理
     * @param par 其他参数，会传到隐藏的回调中
     */
    public Hide(_ifClear: boolean = this._ifClear, ...par: any[]) {
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        this._onHideBefore(par);
        if (_ifClear) {
            this.m_rootUI.dispose();
            //清理引用
            for (let _i in this._UIs) {
                this._UIs[_i].ui = null;
            }
            //
            this._disposeUI();
        } else {
            this.m_rootUI.visible = false;
        }
        //取消监听事件
        Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
        //
        this._onHide(_ifClear, par);
    }

    /** ui被清理时的回调 */
    protected _disposeUI() { }

    protected _onHideBefore(...par: any[]) { }
    protected _onHide(_ifDelete: boolean, ...par: any[]) { }

    /** 更新大小 */
    private updateSize() {
        //根据子ui携带的数据适配屏幕大小
        let _data: FGuiData;
        let _width: number = Laya.stage.width;
        let _height: number = Laya.stage.height;
        for (let _i in this._UIs) {
            _data = this._UIs[_i].data;
            if (!_data || !_data.ifUpdate) {
                //
                this._UIs[_i].ui.setSize(_width, _height);
                this._UIs[_i].ui.setXY(0, 0);
                continue;
            }
            this._UIs[_i].ui.setSize(_width - _data.left - _data.right, _height - _data.bottom - _data.top);
            this._UIs[_i].ui.setXY(_data.left, _data.top);
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
    /** ui */
    ui?: fgui.GComponent;
}