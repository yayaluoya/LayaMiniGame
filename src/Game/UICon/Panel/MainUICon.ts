import BaseSingleUICon from "src/_T/D2/FGUI/BaseSingleUICon";
import FGUI_PGameMain from "src/FGUI/GameMain/FGUI_PGameMain";
import InstanceT from "src/_T/Ts/InstanceT";

/**
 * 主页面控制器
 */
@InstanceT.DecorateInstance()
export default class MainUICon extends BaseSingleUICon<FGUI_PGameMain>{
    /** 单例 */
    public static readonly instance: MainUICon;
    //
    private constructor() { super(); }
    /** UI */
    protected _UI = FGUI_PGameMain;

    /** 显示后的回调 */
    protected _onShow() { }

    /** 隐藏之前回调 */
    protected _onHideBefore() { }
}