/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameTestMain extends fgui.GComponent {

	public m_UIButton:fgui.GButton;
	public m_UI:fgui.GTextField;
	public m_test:fgui.GButton;
	public m_testText:fgui.GTextField;
	public m_dataTest:fgui.GButton;
	public m_dataTestText:fgui.GTextField;
	public m__test:fgui.GGroup;
	public static URL:string = "ui://kk7g5mmmo9js9x";

	public static createInstance():FGUI_PGameTestMain {
		return <FGUI_PGameTestMain>(fgui.UIPackage.createObject("GameMain", "PGameTestMain"));
	}

	protected onConstruct():void {
		this.m_UIButton = <fgui.GButton>(this.getChildAt(0));
		this.m_UI = <fgui.GTextField>(this.getChildAt(1));
		this.m_test = <fgui.GButton>(this.getChildAt(3));
		this.m_testText = <fgui.GTextField>(this.getChildAt(4));
		this.m_dataTest = <fgui.GButton>(this.getChildAt(6));
		this.m_dataTestText = <fgui.GTextField>(this.getChildAt(7));
		this.m__test = <fgui.GGroup>(this.getChildAt(9));
	}
}