/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameTestMain extends fairygui.GComponent {

	public m_UIButton:fairygui.GButton;
	public m_UI:fairygui.GTextField;
	public m_test:fairygui.GButton;
	public m_testText:fairygui.GTextField;
	public m_dataTest:fairygui.GButton;
	public m_dataTestText:fairygui.GTextField;
	public m__test:fairygui.GGroup;

	public static URL:string = "ui://kk7g5mmmo9js9x";

	public static createInstance():FGUI_PGameTestMain {
		return <FGUI_PGameTestMain><any>(fairygui.UIPackage.createObject("GameMain","PGameTestMain"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_UIButton = <fairygui.GButton><any>(this.getChildAt(0));
		this.m_UI = <fairygui.GTextField><any>(this.getChildAt(1));
		this.m_test = <fairygui.GButton><any>(this.getChildAt(3));
		this.m_testText = <fairygui.GTextField><any>(this.getChildAt(4));
		this.m_dataTest = <fairygui.GButton><any>(this.getChildAt(6));
		this.m_dataTestText = <fairygui.GTextField><any>(this.getChildAt(7));
		this.m__test = <fairygui.GGroup><any>(this.getChildAt(9));
	}
}