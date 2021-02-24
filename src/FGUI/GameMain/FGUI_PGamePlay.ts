/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGamePlay extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmg7a1r";

	public static createInstance():FGUI_PGamePlay {
		return <FGUI_PGamePlay>(fgui.UIPackage.createObject("GameMain", "PGamePlay"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}