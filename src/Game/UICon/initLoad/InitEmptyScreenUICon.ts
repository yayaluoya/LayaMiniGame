import FGUI_EmptyScreenUI from "src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI";
import BaseSingleUICon from "src/_T/D2/FGUI/BaseSingleUICon";

/**
 * 白屏ui控制器
 */
export default class InitEmptyScreenUICon extends BaseSingleUICon<FGUI_EmptyScreenUI> {
    /** UI列表 */
    protected _UI = FGUI_EmptyScreenUI;
}