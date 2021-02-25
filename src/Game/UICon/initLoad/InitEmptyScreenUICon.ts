import FGUI_EmptyScreenUI from "src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI";
import BaseUICon, { IBaseUIConDefines } from "src/_T/D2/FGUI/BaseUICon";

/**
 * 白屏ui控制器
 */
export default class InitEmptyScreenUICon extends BaseUICon {
    /** UI列表，可以显示很多个ui */
    protected _UIs: {
        [_index: string]: IBaseUIConDefines;
    } = {
            initEmptyScreen: {
                uiCreate: FGUI_EmptyScreenUI,
            },
        };
}