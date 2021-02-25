import { EFGUIConst } from "./EFGUIConst";
import { EUILayer } from "./EUILayer";
import FGuiData from "./FGuiData";
import FGUIRootManager from "./FGUIRootManager";
import FGUIT from "./FGUIT";
import IUICreate from "./IUICreate";

/**
 * UI控制器基类(用来控制UI界面)
 */
export default abstract class BaseUICon {
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

    //创建ui
    private createUI() {
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        FGUIRootManager.getLayerUI(this._layer).addChild(this.m_rootUI);
        for (let _i in this._UIs) {
            this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance()) as fgui.GComponent;
        }
    }

    /**
     * 获取ui
     * @param _name ui名字
     */
    public getUI<UI extends fgui.GComponent>(_name: string): UI {
        return this._UIs[_name].ui as UI;
    }

    /**
     * 显示UI
     * @param par 其他参数，会传到显示之后的回调中
     */
    public Show(...par: any[]) {
        if (this.m_ifShow) { return; }
        this.m_ifShow = true;
        this._OnshowBefore();
        if (!this.m_rootUI || this.m_rootUI.isDisposed) {
            //创建ui
            this.createUI();
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
        //播放动画
        this.stopAni(EFGUIConst.hideAni);//先停止隐藏动画
        this.playAni(EFGUIConst.showAni, Laya.Handler.create(this, this._OnShowAniCom, ...par));
        //
        this._OnShow(...par);
    }

    /** 显示之前调用 */
    protected _OnshowBefore(...par: any[]) { }
    /** 显示之后调用 */
    protected _OnShow(...par: any[]) { }
    /** 显示动画完成后调用 */
    protected _OnShowAniCom(...par: any[]) { }

    /**
     * 隐藏
     * @param _ifClear 是否清理
     * @param par 其他参数，会传到隐藏的回调中
     */
    public Hide(_ifClear: boolean = this._ifClear, ...par: any[]) {
        if (!this.m_ifShow) { return; }
        this.m_ifShow = false;
        this._OnHideBefore(par);
        let _hideF: Function = () => {
            if (_ifClear) {
                this.m_rootUI.dispose();
                //清理引用
                for (let _i in this._UIs) {
                    this._UIs[_i].ui = null;
                }
            } else {
                this.m_rootUI.visible = false;
            }
        };
        //取消监听事件
        Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
        //播放动画
        this.stopAni(EFGUIConst.showAni);//先停止显示动画
        this.playAni(EFGUIConst.hideAni, Laya.Handler.create(this, () => {
            _hideF();
            this._OnHideAniCom(...par);
        }));
        //
        this._OnHide(par);
    }

    /** 隐藏之前调用 */
    protected _OnHideBefore(...par: any[]) { }
    /** 隐藏之后调用 */
    protected _OnHide(...par: any[]) { }
    /** 隐藏动画完成后回调 */
    protected _OnHideAniCom(...par: any[]) { }

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

    //临时期约
    private aniPromise: Promise<any>;
    /**
     * 播放动画
     * @param _name 动效名字
     * @param _comBack 播放完成回调
     */
    private playAni(_name: string, _comBack?: Laya.Handler) {
        let _promises: Promise<void>[] = [];
        //遍历所有ui并添加期约列表
        for (let _i in this._UIs) {
            _promises.push(new Promise<void>((r) => {
                this._UIs[_i].ui
                    && this._UIs[_i].ui[_name]
                    && (this._UIs[_i].ui[_name] as fgui.Transition).play(Laya.Handler.create(this, r));
            }));
        }
        //执行期约
        this.aniPromise = Promise.all(_promises).then(() => {
            _comBack && _comBack.run();
        });
    }

    /**
     * 停止动效
     * @param _name 动效名字
     */
    private stopAni(_name: string) {
        //停止所有动画期约
        // this.aniPromise && this.aniPromise;
        //遍历所有ui并添加期约列表
        for (let _i in this._UIs) {
            this._UIs[_i].ui
                && this._UIs[_i].ui[_name]
                && (this._UIs[_i].ui[_name] as fgui.Transition).stop();
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