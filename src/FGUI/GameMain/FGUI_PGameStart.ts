/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameStart extends fairygui.GComponent {

	public m_text:fairygui.GTextField;

	public static URL:string = "ui://kk7g5mmmg7a1v";

	public static createInstance():FGUI_PGameStart {
		return <FGUI_PGameStart><any>(fairygui.UIPackage.createObject("GameMain","PGameStart"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text = <fairygui.GTextField><any>(this.getChildAt(0));
	}
}