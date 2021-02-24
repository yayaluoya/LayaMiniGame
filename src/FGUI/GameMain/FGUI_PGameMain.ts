/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameMain extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmsyta9f";

	public static createInstance():FGUI_PGameMain {
		return <FGUI_PGameMain>(fgui.UIPackage.createObject("GameMain", "PGameMain"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}