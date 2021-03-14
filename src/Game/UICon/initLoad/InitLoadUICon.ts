import _MainConfig from "src/Config/_MainConfig";
import FGUI_initLoadUI from "src/FGUI/InitLoad/FGUI_initLoadUI";
import BaseSingleUICon from "src/_T/D2/FGUI/BaseSingleUICon";

/**
 * 初始化加载ui控制器
 */
export default class InitLoadUICon extends BaseSingleUICon<FGUI_initLoadUI> {
    /** UI */
    protected _UI = FGUI_initLoadUI;

    //显示回调
    protected _OnShow() {
        //设置数据
        this.ui.m_text_logo.text = _MainConfig.ZHName;
        this.ui.m_text_v.text = _MainConfig.Versions;
        this.ui.m_text_game_explain.text = _MainConfig.Explain;
        this.ui.m_text_explain.text = _MainConfig.Team;
        this.ui.m_text_laya_v.text = Laya.version;
    }

    /**
     * 设置进度
     * @param _i 进度值
     */
    public setPlan(_i: number) {
        _i *= 100;
        this.ui.m_progress.value = _i;
        this.ui.m_loading_progress.text = Math.floor(_i) + ' %';
    }
}