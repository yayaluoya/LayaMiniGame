/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_EmptyScreenUI extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public static URL:string = "ui://7ktzib8oq3ng0";

	public static createInstance():FGUI_EmptyScreenUI {
		return <FGUI_EmptyScreenUI>(fgui.UIPackage.createObject("InitEmptyScreen", "EmptyScreenUI"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
	}
}