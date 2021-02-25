/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FGUI_PGameTestPlatform extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_lookVAd:fgui.GButton;
	public m_lookVAdText:fgui.GTextField;
	public m__lookVAd:fgui.GGroup;
	public m_share:fgui.GButton;
	public m_shareText:fgui.GTextField;
	public m__share:fgui.GGroup;
	public m_showToast:fgui.GButton;
	public m_showToastText:fgui.GTextField;
	public m__showToast:fgui.GGroup;
	public static URL:string = "ui://kk7g5mmmt1pw9y";

	public static createInstance():FGUI_PGameTestPlatform {
		return <FGUI_PGameTestPlatform>(fgui.UIPackage.createObject("GameMain", "PGameTestPlatform"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_lookVAd = <fgui.GButton>(this.getChildAt(1));
		this.m_lookVAdText = <fgui.GTextField>(this.getChildAt(2));
		this.m__lookVAd = <fgui.GGroup>(this.getChildAt(3));
		this.m_share = <fgui.GButton>(this.getChildAt(4));
		this.m_shareText = <fgui.GTextField>(this.getChildAt(5));
		this.m__share = <fgui.GGroup>(this.getChildAt(6));
		this.m_showToast = <fgui.GButton>(this.getChildAt(7));
		this.m_showToastText = <fgui.GTextField>(this.getChildAt(8));
		this.m__showToast = <fgui.GGroup>(this.getChildAt(9));
	}
}