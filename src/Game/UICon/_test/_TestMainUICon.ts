import FGUI_TestMain from "src/FGUI/_Test/FGUI_TestMain";
import BaseUICon, { IBaseUIConDefines } from "src/_T/D2/FGUI/BaseUICon";
import InstanceT from "src/_T/Ts/InstanceT";
/**
 * 测试主页面控制器
 */
@InstanceT.DecorateInstance()
export default class _TestMainUICon extends BaseUICon {
    /** 单例 */
    public static readonly instance: _TestMainUICon;
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