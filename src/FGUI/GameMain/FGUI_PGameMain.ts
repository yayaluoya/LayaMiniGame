/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameMain extends fairygui.GComponent {

	public m_text:fairygui.GTextField;

	public static URL:string = "ui://kk7g5mmmsyta9f";

	public static createInstance():FGUI_PGameMain {
		return <FGUI_PGameMain><any>(fairygui.UIPackage.createObject("GameMain","PGameMain"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text = <fairygui.GTextField><any>(this.getChildAt(0));
	}
}