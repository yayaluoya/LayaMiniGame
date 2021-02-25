import _MainConfig from "src/Config/_MainConfig";
import FGUI_initLoadUI from "src/FGUI/InitLoad/FGUI_initLoadUI";
import BaseUICon, { IBaseUIConDefines } from "src/_T/D2/FGUI/BaseUICon";

/**
 * 初始化加载ui控制器
 */
export default class InitLoadUICon extends BaseUICon {
    /** UI列表，可以显示很多个ui */
    protected _UIs: {
        [_index: string]: IBaseUIConDefines;
    } = {
            initEmptyScreen: {
                uiCreate: FGUI_initLoadUI,
            },
        };

    //显示回调
    protected _OnShow() {
        //设置数据
        let _ui: FGUI_initLoadUI = this.getUI<FGUI_initLoadUI>('initEmptyScreen');
        _ui.m_text_logo.text = _MainConfig.ZHName;
        _ui.m_text_v.text = _MainConfig.Versions;
        _ui.m_text_game_explain.text = _MainConfig.Explain;
        _ui.m_text_explain.text = _MainConfig.Team;
        _ui.m_text_laya_v.text = Laya.version;
    }

    /**
     * 设置进度
     * @param _i 进度值
     */
    public setPlan(_i: number) {
        _i *= 100;
        let _ui: FGUI_initLoadUI = this.getUI<FGUI_initLoadUI>('initEmptyScreen');
        _ui.m_progress.value = _i;
        _ui.m_loading_progress.text = Math.floor(_i) + ' %';
    }
}