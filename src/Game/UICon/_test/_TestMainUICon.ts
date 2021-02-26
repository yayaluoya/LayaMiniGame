import FGUI_TestMain from "src/FGUI/_Test/FGUI_TestMain";
import BaseUICon, { IBaseUIConDefines } from "src/_T/D2/FGUI/BaseUICon";
/**
 * 测试主页面控制器
 */
export default class _TestMainUICon extends BaseUICon {
    /** 单例 */
    private static _instance: _TestMainUICon;
    public static get instance(): _TestMainUICon {
        if (this._instance == null) {
            this._instance = new _TestMainUICon();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    /** UI列表，可以显示很多个ui */
    protected _UIs: {
        [_index: string]: IBaseUIConDefines;
    } = {
            initEmptyScreen: {
                uiCreate: FGUI_TestMain,
            },
        };
}