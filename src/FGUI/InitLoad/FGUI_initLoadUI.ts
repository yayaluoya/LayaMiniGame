/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_initLoadUI extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_progress:fgui.GProgressBar;
	public m_loading_progress:fgui.GTextField;
	public m_text_logo:fgui.GTextField;
	public m_text_progress:fgui.GTextField;
	public m_text_laya:fgui.GTextField;
	public m_text_explain:fgui.GTextField;
	public m_text_v:fgui.GTextField;
	public m_text_laya_v:fgui.GTextField;
	public m_text_game_explain:fgui.GTextField;
	public static URL:string = "ui://n3oedpp6nihr0";

	public static createInstance():FGUI_initLoadUI {
		return <FGUI_initLoadUI>(fgui.UIPackage.createObject("InitLoad", "initLoadUI"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_progress = <fgui.GProgressBar>(this.getChildAt(1));
		this.m_loading_progress = <fgui.GTextField>(this.getChildAt(2));
		this.m_text_logo = <fgui.GTextField>(this.getChildAt(3));
		this.m_text_progress = <fgui.GTextField>(this.getChildAt(4));
		this.m_text_laya = <fgui.GTextField>(this.getChildAt(5));
		this.m_text_explain = <fgui.GTextField>(this.getChildAt(6));
		this.m_text_v = <fgui.GTextField>(this.getChildAt(7));
		this.m_text_laya_v = <fgui.GTextField>(this.getChildAt(8));
		this.m_text_game_explain = <fgui.GTextField>(this.getChildAt(9));
	}
}