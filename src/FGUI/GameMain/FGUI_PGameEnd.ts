/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameEnd extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmlaxd19";

	public static createInstance():FGUI_PGameEnd {
		return <FGUI_PGameEnd>(fgui.UIPackage.createObject("GameMain", "PGameEnd"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}