/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameCustomsLoading extends fairygui.GComponent {

	public m_shade:fairygui.GGraph;
	public m_text:fairygui.GTextField;
	public m_progress:fairygui.GProgressBar;

	public static URL:string = "ui://kk7g5mmmdbmi13";

	public static createInstance():FGUI_PGameCustomsLoading {
		return <FGUI_PGameCustomsLoading><any>(fairygui.UIPackage.createObject("GameMain","PGameCustomsLoading"));
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