/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_splash extends fairygui.GComponent {

	public m_bg:fairygui.GGraph;
	public m_progress:fairygui.GProgressBar;
	public m_loading_progress:fairygui.GTextField;
	public m_text_logo:fairygui.GTextField;
	public m_text_progress:fairygui.GTextField;
	public m_text_laya:fairygui.GTextField;
	public m_text_explain:fairygui.GTextField;
	public m_text_v:fairygui.GTextField;
	public m_text_laya_v:fairygui.GTextField;
	public m_text_game_explain:fairygui.GTextField;

	public static URL:string = "ui://n3oedpp6nihr0";

	public static createInstance():FGUI_splash {
		return <FGUI_splash><any>(fairygui.UIPackage.createObject("InitLoad","splash"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fairygui.GGraph><any>(this.getChildAt(0));
		this.m_progress = <fairygui.GProgressBar><any>(this.getChildAt(1));
		this.m_loading_progress = <fairygui.GTextField><any>(this.getChildAt(2));
		this.m_text_logo = <fairygui.GTextField><any>(this.getChildAt(3));
		this.m_text_progress = <fairygui.GTextField><any>(this.getChildAt(4));
		this.m_text_laya = <fairygui.GTextField><any>(this.getChildAt(5));
		this.m_text_explain = <fairygui.GTextField><any>(this.getChildAt(6));
		this.m_text_v = <fairygui.GTextField><any>(this.getChildAt(7));
		this.m_text_laya_v = <fairygui.GTextField><any>(this.getChildAt(8));
		this.m_text_game_explain = <fairygui.GTextField><any>(this.getChildAt(9));
	}
}