/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_EmptyScreen extends fairygui.GComponent {

	public m_bg:fairygui.GGraph;

	public static URL:string = "ui://7ktzib8oq3ng0";

	public static createInstance():FGUI_EmptyScreen {
		return <FGUI_EmptyScreen><any>(fairygui.UIPackage.createObject("InitEmptyScreen","EmptyScreen"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fairygui.GGraph><any>(this.getChildAt(0));
	}
}