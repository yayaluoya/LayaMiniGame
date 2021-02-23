/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// 导入文件


//! 这是由FGUI自动生成的文件，请不要修改 ~~~ **/

export default class FGUI_PGameTestPlatform extends fairygui.GComponent {

	public m_bg:fairygui.GGraph;
	public m_lookVAd:fairygui.GButton;
	public m_lookVAdText:fairygui.GTextField;
	public m__lookVAd:fairygui.GGroup;
	public m_share:fairygui.GButton;
	public m_shareText:fairygui.GTextField;
	public m__share:fairygui.GGroup;
	public m_showToast:fairygui.GButton;
	public m_showToastText:fairygui.GTextField;
	public m__showToast:fairygui.GGroup;

	public static URL:string = "ui://kk7g5mmmt1pw9y";

	public static createInstance():FGUI_PGameTestPlatform {
		return <FGUI_PGameTestPlatform><any>(fairygui.UIPackage.createObject("GameMain","PGameTestPlatform"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fairygui.GGraph><any>(this.getChildAt(0));
		this.m_lookVAd = <fairygui.GButton><any>(this.getChildAt(1));
		this.m_lookVAdText = <fairygui.GTextField><any>(this.getChildAt(2));
		this.m__lookVAd = <fairygui.GGroup><any>(this.getChildAt(3));
		this.m_share = <fairygui.GButton><any>(this.getChildAt(4));
		this.m_shareText = <fairygui.GTextField><any>(this.getChildAt(5));
		this.m__share = <fairygui.GGroup><any>(this.getChildAt(6));
		this.m_showToast = <fairygui.GButton><any>(this.getChildAt(7));
		this.m_showToastText = <fairygui.GTextField><any>(this.getChildAt(8));
		this.m__showToast = <fairygui.GGroup><any>(this.getChildAt(9));
	}
}