/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGamePlay extends fairygui.GComponent {

	public m_text:fairygui.GTextField;

	public static URL:string = "ui://kk7g5mmmg7a1r";

	public static createInstance():FGUI_PGamePlay {
		return <FGUI_PGamePlay><any>(fairygui.UIPackage.createObject("GameMain","PGamePlay"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text = <fairygui.GTextField><any>(this.getChildAt(0));
	}
}