/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameCom extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmq3ng9w";

	public static createInstance():FGUI_PGameCom {
		return <FGUI_PGameCom>(fgui.UIPackage.createObject("GameMain", "PGameCom"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}