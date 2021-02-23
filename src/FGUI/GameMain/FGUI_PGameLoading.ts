/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameLoading extends fairygui.GComponent {

	public m_shade:fairygui.GGraph;
	public m_text:fairygui.GTextField;
	public m_progress:fairygui.GProgressBar;

	public static URL:string = "ui://kk7g5mmmg7a1o";

	public static createInstance():FGUI_PGameLoading {
		return <FGUI_PGameLoading><any>(fairygui.UIPackage.createObject("GameMain","PGameLoading"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_shade = <fairygui.GGraph><any>(this.getChildAt(0));
		this.m_text = <fairygui.GTextField><any>(this.getChildAt(1));
		this.m_progress = <fairygui.GProgressBar><any>(this.getChildAt(2));
	}
}