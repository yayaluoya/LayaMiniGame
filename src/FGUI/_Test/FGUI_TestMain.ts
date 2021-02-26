/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_TestMain extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://hxu4zc9dioo80";

	public static createInstance():FGUI_TestMain {
		return <FGUI_TestMain>(fgui.UIPackage.createObject("_Test", "TestMain"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}