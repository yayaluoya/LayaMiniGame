/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameCustomsLoading extends fgui.GComponent {

	public m_shade:fgui.GGraph;
	public m_text:fgui.GTextField;
	public m_progress:fgui.GProgressBar;
	public static URL:string = "ui://kk7g5mmmdbmi13";

	public static createInstance():FGUI_PGameCustomsLoading {
		return <FGUI_PGameCustomsLoading>(fgui.UIPackage.createObject("GameMain", "PGameCustomsLoading"));
	}

	protected onConstruct():void {
		this.m_shade = <fgui.GGraph>(this.getChildAt(0));
		this.m_text = <fgui.GTextField>(this.getChildAt(1));
		this.m_progress = <fgui.GProgressBar>(this.getChildAt(2));
	}
}