/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameTestUI extends fairygui.GComponent {

	public m_bg:fairygui.GGraph;

	public static URL:string = "ui://kk7g5mmmh66e9z";

	public static createInstance():FGUI_PGameTestUI {
		return <FGUI_PGameTestUI><any>(fairygui.UIPackage.createObject("GameMain","PGameTestUI"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fairygui.GGraph><any>(this.getChildAt(0));
	}
}