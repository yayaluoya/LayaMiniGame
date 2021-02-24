/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameSet extends fgui.GComponent {

	public m_text:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmm6vcq4u";

	public static createInstance():FGUI_PGameSet {
		return <FGUI_PGameSet>(fgui.UIPackage.createObject("GameMain", "PGameSet"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GTextField>(this.getChildAt(0));
	}
}