/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGamePause extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmm6vcq5g";

	public static createInstance():FGUI_PGamePause {
		return <FGUI_PGamePause>(fgui.UIPackage.createObject("GameMain", "PGamePause"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}