import ConsoleEx from "src/_T/Console/ConsoleEx";
import BaseUICon from "./BaseUICon";

/**
 * ui控制器管理器
 * 统一管理ui控制器
 * 必须配合代理器使用
 */
export default abstract class BaseUIConManager<Proxy extends BaseUIConManagerProxy> {
    /** ui控制器列表 */
    protected m_uiConList: {
        [_index: string]: BaseUICon,
    };
    /** ui代理器 */
    protected m_uiProxy: Proxy;

    /** 
     * 初始化
     * 框架调用，不能直接调用
     */
    public init() {
        this._init();
        this.__init();
    }

    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    protected _init() {
        //
    }

    //初始化之后的检测
    private __init() {
        if (!this.m_uiConList) {
            console.warn(...ConsoleEx.packWarn('ui控制管理器没有初始化管理的ui列表'));
        }
        if (!this.m_uiProxy) {
            console.warn(...ConsoleEx.packWarn('ui控制管理器没有初始化ui代理'));
        } else {
            //设置代理器代理
            this.m_uiProxy.setProxy(this.m_uiConList);
        }
    }
}

/**
 * ui 控制器管理器代理
 * 负责代理ui控制器管理器中的控制器，防止循环依赖
 */
export abstract class BaseUIConManagerProxy {
    /** ui控制器列表 */
    protected m_uiConList: {
        [_index: string]: BaseUICon,
    };

    /** 获取当前显示的ui */
    public get onShowUI(): BaseUICon[] {
        let _uiCons: BaseUICon[] = [];
        for (let _i in this.m_uiConList) {
            this.m_uiConList[_i].ifShow && _uiCons.push(this.m_uiConList[_i]);
        }
        //
        return _uiCons;
    }

    /**
     * 设置ui代理
     * @param _uiList ui列表
     */
    public setProxy(_uiList: {
        [_index: string]: BaseUICon,
    }) {
        this.m_uiConList = _uiList;
        //
        this._init();
    }

    /**
     * 根据ui键值获取一个ui
     * @param _key ui键值
     */
    public getUI<UICon extends BaseUICon>(_key: string): UICon {
        return this.m_uiConList[_key] as UICon;
    }

    /**
     * 显示ui控制器
     * @param _uiCon ui控制器索引或者索引列表
     * @param _ifHideOtherUI 是否隐藏其他ui [true]
     */
    public showUI(_uiCon: string | string[], _ifHideOtherUI: boolean = true) {
        let _uiCons: string[] = [];
        if (_uiCon instanceof Array) {
            _uiCons.push(..._uiCon);
        } else {
            _uiCons.push(_uiCon);
        }
        //判断是否隐藏其他ui
        if (_ifHideOtherUI) {
            for (let _i in this.m_uiConList) {
                if (!_uiCons.includes(_i)) {
                    this.m_uiConList[_i].Hide();
                }
            }
        }
        _uiCons.forEach((item) => {
            if (this.m_uiConList[item]) {
                this.m_uiConList[item].Show();
            }
        });
    }

    /**
     * 隐藏ui控制器
     * @param _uiCon ui控制器实例或列表
     */
    public hideUI(_uiCon: string | string[]) {
        let _uiCons: string[] = [];
        if (_uiCon instanceof Array) {
            _uiCons.push(..._uiCon);
        } else {
            _uiCons.push(_uiCon);
        }
        _uiCons.forEach((item) => {
            this.m_uiConList[item] && this.m_uiConList[item].Hide();
        });
    }

    /**
     * 隐藏当前显示的所有ui
     */
    public hideAllUI() {
        this.onShowUI.forEach((item) => {
            item.Hide();
        });
    }

    /** 初始化回调 */
    protected _init() { }
}