/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameTestUI extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public static URL:string = "ui://kk7g5mmmh66e9z";

	public static createInstance():FGUI_PGameTestUI {
		return <FGUI_PGameTestUI>(fgui.UIPackage.createObject("GameMain", "PGameTestUI"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
	}
}