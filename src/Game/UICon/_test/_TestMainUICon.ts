import FGUI_TestMain from "src/FGUI/_Test/FGUI_TestMain";
import BaseSingleUICon from "src/_T/D2/FGUI/BaseSingleUICon";
import InstanceT from "src/_T/Ts/InstanceT";
/**
 * 测试主页面控制器
 */
@InstanceT.DecorateInstance()
export default class _TestMainUICon extends BaseSingleUICon<FGUI_TestMain> {
    /** 单例 */
    public static readonly instance: _TestMainUICon;
    //
    private constructor() { super(); }
    /** ui */
    protected _UI = FGUI_TestMain;
}