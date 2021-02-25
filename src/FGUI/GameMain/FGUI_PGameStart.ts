/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameStart extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmg7a1v";

	public static createInstance():FGUI_PGameStart {
		return <FGUI_PGameStart>(fgui.UIPackage.createObject("GameMain", "PGameStart"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}