/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import FGUI_PGameSet from "./FGUI_PGameSet";
import FGUI_PGamePause from "./FGUI_PGamePause";
import FGUI_PGameCustomsLoading from "./FGUI_PGameCustomsLoading";
import FGUI_PGameLoading from "./FGUI_PGameLoading";
import FGUI_PGamePlay from "./FGUI_PGamePlay";
import FGUI_PGameStart from "./FGUI_PGameStart";
import FGUI_PGameTestUI from "./FGUI_PGameTestUI";
import FGUI_PGameEnd from "./FGUI_PGameEnd";
import FGUI_PGameTestMain from "./FGUI_PGameTestMain";
import FGUI_PGameCom from "./FGUI_PGameCom";
import FGUI_PGameMain from "./FGUI_PGameMain";
import FGUI_PGameTestPlatform from "./FGUI_PGameTestPlatform";

export default class GameMainBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(FGUI_PGameSet.URL, FGUI_PGameSet);
		fgui.UIObjectFactory.setExtension(FGUI_PGamePause.URL, FGUI_PGamePause);
		fgui.UIObjectFactory.setExtension(FGUI_PGameCustomsLoading.URL, FGUI_PGameCustomsLoading);
		fgui.UIObjectFactory.setExtension(FGUI_PGameLoading.URL, FGUI_PGameLoading);
		fgui.UIObjectFactory.setExtension(FGUI_PGamePlay.URL, FGUI_PGamePlay);
		fgui.UIObjectFactory.setExtension(FGUI_PGameStart.URL, FGUI_PGameStart);
		fgui.UIObjectFactory.setExtension(FGUI_PGameTestUI.URL, FGUI_PGameTestUI);
		fgui.UIObjectFactory.setExtension(FGUI_PGameEnd.URL, FGUI_PGameEnd);
		fgui.UIObjectFactory.setExtension(FGUI_PGameTestMain.URL, FGUI_PGameTestMain);
		fgui.UIObjectFactory.setExtension(FGUI_PGameCom.URL, FGUI_PGameCom);
		fgui.UIObjectFactory.setExtension(FGUI_PGameMain.URL, FGUI_PGameMain);
		fgui.UIObjectFactory.setExtension(FGUI_PGameTestPlatform.URL, FGUI_PGameTestPlatform);
	}
}