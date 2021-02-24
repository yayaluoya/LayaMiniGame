/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Config/_ConstConfig.ts":
/*!************************************!*\
  !*** ./src/Config/_ConstConfig.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _ConstConfig
/* harmony export */ });
/**
 * 常量配置
 */
class _ConstConfig {
}
/** fgui相关 */
_ConstConfig.FGUI = {
    /** 包后缀 */
    packageFileExtension: 'bin',
};


/***/ }),

/***/ "./src/Config/_GameConfig.ts":
/*!***********************************!*\
  !*** ./src/Config/_GameConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _GameConfig
/* harmony export */ });
/* harmony import */ var _MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MainConfig */ "./src/Config/_MainConfig.ts");

/**
 * 游戏最高层配置
 */
class _GameConfig {
}
/** 是否开启游戏测试 */
_GameConfig.ifGameTest = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) && false;
/** 是否开启测试类 */
_GameConfig.ifTest = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) && false;
/** 是否开启调试类 */
_GameConfig.ifDebug = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) && true;
/** 是否打开一个新窗口调试 */
_GameConfig.ifOpenWindowDebug = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) && false;


/***/ }),

/***/ "./src/Config/_MainConfig.ts":
/*!***********************************!*\
  !*** ./src/Config/_MainConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _MainConfig
/* harmony export */ });
/**
 * 项目最高层配置
 */
class _MainConfig {
}
/** 游戏所属团队 */
_MainConfig.Team = 'LayaBox小游戏';
/** 游戏名字，尽量不要出现中文和特殊字符*/
_MainConfig.Name = 'LayaMiniGame';
/** 中文名字 */
_MainConfig.ZHName = 'LayaBox小游戏';
/** 游戏说明 */
_MainConfig.Explain = 'LayaBox小游戏，说明。';
/** 数据版本 可以带字母但是尽量不要出现中文和特殊字符*/
_MainConfig.Versions = '0.0.0.1';
/** 是否上线为false则是开发环境 */
_MainConfig.OnLine = false;


/***/ }),

/***/ "./src/FGUI/GameCommon/GameCommonBinder.ts":
/*!*************************************************!*\
  !*** ./src/FGUI/GameCommon/GameCommonBinder.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameCommonBinder
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class GameCommonBinder {
    static bindAll() {
    }
}


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameCom.ts":
/*!********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameCom.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameCom
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameCom extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameCom"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGameCom.URL = "ui://kk7g5mmmq3ng9w";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameCustomsLoading.ts":
/*!*******************************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameCustomsLoading.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameCustomsLoading
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameCustomsLoading extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameCustomsLoading"));
    }
    onConstruct() {
        this.m_shade = (this.getChildAt(0));
        this.m_text = (this.getChildAt(1));
        this.m_progress = (this.getChildAt(2));
    }
}
FGUI_PGameCustomsLoading.URL = "ui://kk7g5mmmdbmi13";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameEnd.ts":
/*!********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameEnd.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameEnd
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameEnd extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameEnd"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGameEnd.URL = "ui://kk7g5mmmlaxd19";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameLoading.ts":
/*!************************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameLoading.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameLoading
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameLoading extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameLoading"));
    }
    onConstruct() {
        this.m_shade = (this.getChildAt(0));
        this.m_text = (this.getChildAt(1));
        this.m_progress = (this.getChildAt(2));
    }
}
FGUI_PGameLoading.URL = "ui://kk7g5mmmg7a1o";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameMain.ts":
/*!*********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameMain.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameMain
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameMain extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameMain"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGameMain.URL = "ui://kk7g5mmmsyta9f";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGamePause.ts":
/*!**********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGamePause.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGamePause
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGamePause extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGamePause"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGamePause.URL = "ui://kk7g5mmm6vcq5g";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGamePlay.ts":
/*!*********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGamePlay.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGamePlay
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGamePlay extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGamePlay"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGamePlay.URL = "ui://kk7g5mmmg7a1r";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameSet.ts":
/*!********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameSet.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameSet
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameSet extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameSet"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGameSet.URL = "ui://kk7g5mmm6vcq4u";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameStart.ts":
/*!**********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameStart.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameStart
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameStart extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameStart"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_PGameStart.URL = "ui://kk7g5mmmg7a1v";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameTestMain.ts":
/*!*************************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameTestMain.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameTestMain
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameTestMain extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameTestMain"));
    }
    onConstruct() {
        this.m_UIButton = (this.getChildAt(0));
        this.m_UI = (this.getChildAt(1));
        this.m_test = (this.getChildAt(3));
        this.m_testText = (this.getChildAt(4));
        this.m_dataTest = (this.getChildAt(6));
        this.m_dataTestText = (this.getChildAt(7));
        this.m__test = (this.getChildAt(9));
    }
}
FGUI_PGameTestMain.URL = "ui://kk7g5mmmo9js9x";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameTestPlatform.ts":
/*!*****************************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameTestPlatform.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameTestPlatform
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameTestPlatform extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameTestPlatform"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_lookVAd = (this.getChildAt(1));
        this.m_lookVAdText = (this.getChildAt(2));
        this.m__lookVAd = (this.getChildAt(3));
        this.m_share = (this.getChildAt(4));
        this.m_shareText = (this.getChildAt(5));
        this.m__share = (this.getChildAt(6));
        this.m_showToast = (this.getChildAt(7));
        this.m_showToastText = (this.getChildAt(8));
        this.m__showToast = (this.getChildAt(9));
    }
}
FGUI_PGameTestPlatform.URL = "ui://kk7g5mmmt1pw9y";


/***/ }),

/***/ "./src/FGUI/GameMain/FGUI_PGameTestUI.ts":
/*!***********************************************!*\
  !*** ./src/FGUI/GameMain/FGUI_PGameTestUI.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_PGameTestUI
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_PGameTestUI extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("GameMain", "PGameTestUI"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
FGUI_PGameTestUI.URL = "ui://kk7g5mmmh66e9z";


/***/ }),

/***/ "./src/FGUI/GameMain/GameMainBinder.ts":
/*!*********************************************!*\
  !*** ./src/FGUI/GameMain/GameMainBinder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameMainBinder
/* harmony export */ });
/* harmony import */ var _FGUI_PGameSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_PGameSet */ "./src/FGUI/GameMain/FGUI_PGameSet.ts");
/* harmony import */ var _FGUI_PGamePause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FGUI_PGamePause */ "./src/FGUI/GameMain/FGUI_PGamePause.ts");
/* harmony import */ var _FGUI_PGameCustomsLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FGUI_PGameCustomsLoading */ "./src/FGUI/GameMain/FGUI_PGameCustomsLoading.ts");
/* harmony import */ var _FGUI_PGameLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FGUI_PGameLoading */ "./src/FGUI/GameMain/FGUI_PGameLoading.ts");
/* harmony import */ var _FGUI_PGamePlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FGUI_PGamePlay */ "./src/FGUI/GameMain/FGUI_PGamePlay.ts");
/* harmony import */ var _FGUI_PGameStart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FGUI_PGameStart */ "./src/FGUI/GameMain/FGUI_PGameStart.ts");
/* harmony import */ var _FGUI_PGameTestUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FGUI_PGameTestUI */ "./src/FGUI/GameMain/FGUI_PGameTestUI.ts");
/* harmony import */ var _FGUI_PGameEnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FGUI_PGameEnd */ "./src/FGUI/GameMain/FGUI_PGameEnd.ts");
/* harmony import */ var _FGUI_PGameTestMain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FGUI_PGameTestMain */ "./src/FGUI/GameMain/FGUI_PGameTestMain.ts");
/* harmony import */ var _FGUI_PGameCom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FGUI_PGameCom */ "./src/FGUI/GameMain/FGUI_PGameCom.ts");
/* harmony import */ var _FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FGUI_PGameMain */ "./src/FGUI/GameMain/FGUI_PGameMain.ts");
/* harmony import */ var _FGUI_PGameTestPlatform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FGUI_PGameTestPlatform */ "./src/FGUI/GameMain/FGUI_PGameTestPlatform.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/












class GameMainBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_PGameSet__WEBPACK_IMPORTED_MODULE_0__.default.URL, _FGUI_PGameSet__WEBPACK_IMPORTED_MODULE_0__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGamePause__WEBPACK_IMPORTED_MODULE_1__.default.URL, _FGUI_PGamePause__WEBPACK_IMPORTED_MODULE_1__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameCustomsLoading__WEBPACK_IMPORTED_MODULE_2__.default.URL, _FGUI_PGameCustomsLoading__WEBPACK_IMPORTED_MODULE_2__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameLoading__WEBPACK_IMPORTED_MODULE_3__.default.URL, _FGUI_PGameLoading__WEBPACK_IMPORTED_MODULE_3__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGamePlay__WEBPACK_IMPORTED_MODULE_4__.default.URL, _FGUI_PGamePlay__WEBPACK_IMPORTED_MODULE_4__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameStart__WEBPACK_IMPORTED_MODULE_5__.default.URL, _FGUI_PGameStart__WEBPACK_IMPORTED_MODULE_5__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestUI__WEBPACK_IMPORTED_MODULE_6__.default.URL, _FGUI_PGameTestUI__WEBPACK_IMPORTED_MODULE_6__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameEnd__WEBPACK_IMPORTED_MODULE_7__.default.URL, _FGUI_PGameEnd__WEBPACK_IMPORTED_MODULE_7__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestMain__WEBPACK_IMPORTED_MODULE_8__.default.URL, _FGUI_PGameTestMain__WEBPACK_IMPORTED_MODULE_8__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameCom__WEBPACK_IMPORTED_MODULE_9__.default.URL, _FGUI_PGameCom__WEBPACK_IMPORTED_MODULE_9__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_10__.default.URL, _FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_10__.default);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestPlatform__WEBPACK_IMPORTED_MODULE_11__.default.URL, _FGUI_PGameTestPlatform__WEBPACK_IMPORTED_MODULE_11__.default);
    }
}


/***/ }),

/***/ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts":
/*!********************************************************!*\
  !*** ./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_EmptyScreenUI
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_EmptyScreenUI extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("InitEmptyScreen", "EmptyScreenUI"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
FGUI_EmptyScreenUI.URL = "ui://7ktzib8oq3ng0";


/***/ }),

/***/ "./src/FGUI/InitEmptyScreen/InitEmptyScreenBinder.ts":
/*!***********************************************************!*\
  !*** ./src/FGUI/InitEmptyScreen/InitEmptyScreenBinder.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitEmptyScreenBinder
/* harmony export */ });
/* harmony import */ var _FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_EmptyScreenUI */ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class InitEmptyScreenBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__.default.URL, _FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__.default);
    }
}


/***/ }),

/***/ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts":
/*!**********************************************!*\
  !*** ./src/FGUI/InitLoad/FGUI_initLoadUI.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUI_initLoadUI
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_initLoadUI extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("InitLoad", "initLoadUI"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_progress = (this.getChildAt(1));
        this.m_loading_progress = (this.getChildAt(2));
        this.m_text_logo = (this.getChildAt(3));
        this.m_text_progress = (this.getChildAt(4));
        this.m_text_laya = (this.getChildAt(5));
        this.m_text_explain = (this.getChildAt(6));
        this.m_text_v = (this.getChildAt(7));
        this.m_text_laya_v = (this.getChildAt(8));
        this.m_text_game_explain = (this.getChildAt(9));
        this.m__show = this.getTransitionAt(0);
        this.m__hide = this.getTransitionAt(1);
    }
}
FGUI_initLoadUI.URL = "ui://n3oedpp6nihr0";


/***/ }),

/***/ "./src/FGUI/InitLoad/InitLoadBinder.ts":
/*!*********************************************!*\
  !*** ./src/FGUI/InitLoad/InitLoadBinder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitLoadBinder
/* harmony export */ });
/* harmony import */ var _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class InitLoadBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__.default.URL, _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__.default);
    }
}


/***/ }),

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameConfig
/* harmony export */ });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
/*
* 游戏初始化配置;
*/
class GameConfig {
    constructor() { }
    static init() {
        var reg = Laya.ClassUtils.regClass;
    }
}
GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode = "fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;
GameConfig.init();


/***/ }),

/***/ "./src/Game/GameMain.ts":
/*!******************************!*\
  !*** ./src/Game/GameMain.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameMain
/* harmony export */ });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/GameInitLoad */ "./src/Game/Main/GameInitLoad.ts");


/**
 * 游戏入口
 */
class GameMain {
    //初始化
    constructor() {
        this.init();
    }
    //初始化
    init() {
        //获取游戏初始化加载实例
        let _gameInitLoad = new _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_1__.default();
        //开始加载
        _gameInitLoad.load(Laya.Handler.create(this, this.gameInitLoadCom));
    }
    //游戏加载完成
    gameInitLoadCom() {
        //进入游戏
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packLog('进入游戏'));
    }
}


/***/ }),

/***/ "./src/Game/Main/GameInitLoad.ts":
/*!***************************************!*\
  !*** ./src/Game/Main/GameInitLoad.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameInitLoad
/* harmony export */ });
/* harmony import */ var src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/GameCommon/GameCommonBinder */ "./src/FGUI/GameCommon/GameCommonBinder.ts");
/* harmony import */ var src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/GameMain/GameMainBinder */ "./src/FGUI/GameMain/GameMainBinder.ts");
/* harmony import */ var src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/FGUI/InitEmptyScreen/InitEmptyScreenBinder */ "./src/FGUI/InitEmptyScreen/InitEmptyScreenBinder.ts");
/* harmony import */ var src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/FGUI/InitLoad/InitLoadBinder */ "./src/FGUI/InitLoad/InitLoadBinder.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_T/D2/FGUI/FGUIPack */ "./src/_T/D2/FGUI/FGUIPack.ts");
/* harmony import */ var src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_T/Main/BaseInitLoad */ "./src/_T/Main/BaseInitLoad.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_T/Res/ResLoadItem */ "./src/_T/Res/ResLoadItem.ts");
/* harmony import */ var _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UICon/initLoad/initEmptyScreenUICon */ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts");
/* harmony import */ var _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UICon/initLoad/initLoadUICon */ "./src/Game/UICon/initLoad/initLoadUICon.ts");
/* harmony import */ var _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_config/BuildConfigTs */ "./src/Game/_config/BuildConfigTs.ts");














/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_7__.default {
    /**
     * 初始化
     */
    init() {
        this.m_initEmptyScreenUICon = new _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_11__.default();
        this.m_initLoadUICon = new _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_12__.default();
    }
    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    loadBefore() {
        //初始化平台。。。
    }
    /**
     * 获取加载项列表
     */
    getLoadItems() {
        let _loadItems = [];
        //注入分包加载项
        this.immitSubpackageLoadItems(_loadItems);
        //获取fgui加载项
        this.immitFGUiLoadItems(_loadItems);
        //注入配置表加载项
        this.immitConfigLoadItems(_loadItems);
        //注入其他资源加载项
        this.immitOtherLoadItems(_loadItems);
        //
        return _loadItems;
    }
    //注入分包加载项
    immitSubpackageLoadItems(_loadItems) {
        //
    }
    //注入fgui的所有加载项
    immitFGUiLoadItems(_loadItems) {
        //先绑定所有ui
        this.FGUIBinder();
        //
        _loadItems.push(this.getFGUILoadItems('InitEmptyScreen', undefined, Laya.Handler.create(this, this.initEmptyScreen))); //白屏ui包
        _loadItems.push(this.getFGUILoadItems('InitLoad', 0, Laya.Handler.create(this, this.initLoad))); //加载界面包
        _loadItems.push(this.getFGUILoadItems('GameBag')); //原包，通常为资源包
        _loadItems.push(this.getFGUILoadItems('GameCommon')); //公共包
        _loadItems.push(this.getFGUILoadItems('GameMain', 0)); //主包
    }
    //fgui绑定
    FGUIBinder() {
        src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__.default.bindAll();
        src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__.default.bindAll();
        src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__.default.bindAll();
        src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__.default.bindAll();
    }
    //获取FGUI加载项
    getFGUILoadItems(_name, _atliasCount, _comBack) {
        let _fguiRes = [];
        //注入包路径
        new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_6__.FGUIPack(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_8__.default.FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_10__.default(_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_9__.EResLoadModel.D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    addFGUIPackage(_name) {
        fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_8__.default.FGUIPackURL(_name));
    }
    //注入配置表加载项
    immitConfigLoadItems(_loadItems) {
        //配置表
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_13__.BuildConfigTs.getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_8__.default.ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [
            'Scene'
        ].map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_8__.default.SceneConfigURL(item);
        });
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_10__.default([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_9__.EResLoadModel.D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_4__.default.BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_13__.BuildConfigTs.getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_5__.default.packLogLight('所有配置表内容->'));
            console.log(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_13__.BuildConfigTs.getAllConfig());
        })));
    }
    //注入其他资源加载项
    immitOtherLoadItems(_loadItems) {
        //
    }
    //白屏显示
    initEmptyScreen() {
        //显示白屏ui
        this.m_initEmptyScreenUICon.Show();
    }
    //加载显示
    initLoad() {
        this.m_initEmptyScreenUICon.Hide(); //隐藏
        this.m_initEmptyScreenUICon = null; //清除引用
        //显示加载ui
        this.m_initLoadUICon.Show();
    }
    /**
     * 加载进度
     * @param _i 进度值
     */
    loadPlan(_i) {
        // console.log('游戏加载进度->', _i);
        if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
            this.m_initLoadUICon.setPlan(_i);
        }
    }
    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    loadItemsCom(_resLoad) {
        //
    }
    /**
     * 加载完成
     */
    loadCom() {
        this.m_initLoadUICon.Hide(); //隐藏
        this.m_initLoadUICon = null; //清除引用
    }
}


/***/ }),

/***/ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts":
/*!*********************************************************!*\
  !*** ./src/Game/UICon/initLoad/initEmptyScreenUICon.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitEmptyScreenUICon
/* harmony export */ });
/* harmony import */ var src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI */ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUICon */ "./src/_T/D2/FGUI/BaseUICon.ts");


/**
 * 白屏ui控制器
 */
class InitEmptyScreenUICon extends src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super(...arguments);
        /** UI列表，可以显示很多个ui */
        this._UIs = {
            initEmptyScreen: {
                uiCreate: src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__.default,
            },
        };
    }
}


/***/ }),

/***/ "./src/Game/UICon/initLoad/initLoadUICon.ts":
/*!**************************************************!*\
  !*** ./src/Game/UICon/initLoad/initLoadUICon.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitLoadUICon
/* harmony export */ });
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/InitLoad/FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUICon */ "./src/_T/D2/FGUI/BaseUICon.ts");



/**
 * 初始化加载ui控制器
 */
class InitLoadUICon extends src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor() {
        super(...arguments);
        /** UI列表，可以显示很多个ui */
        this._UIs = {
            initEmptyScreen: {
                uiCreate: src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__.default,
            },
        };
    }
    //显示回调
    _OnShow() {
        //设置数据
        let _ui = this.getUI('initEmptyScreen');
        _ui.m_text_logo.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.ZHName;
        _ui.m_text_v.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Versions;
        _ui.m_text_game_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Explain;
        _ui.m_text_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Team;
        _ui.m_text_laya_v.text = Laya.version;
    }
    /**
     * 设置进度
     * @param _i 进度值
     */
    setPlan(_i) {
        _i *= 100;
        let _ui = this.getUI('initEmptyScreen');
        _ui.m_progress.value = _i;
        _ui.m_loading_progress.text = Math.floor(_i) + ' %';
    }
}


/***/ }),

/***/ "./src/Game/_config/BuildConfigTs.ts":
/*!*******************************************!*\
  !*** ./src/Game/_config/BuildConfigTs.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildConfigTs": () => /* binding */ BuildConfigTs
/* harmony export */ });
/* harmony import */ var _SceneNodeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SceneNodeConfig */ "./src/Game/_config/_SceneNodeConfig.ts");
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_TestConfig */ "./src/Game/_config/_TestConfig.ts");
/* harmony import */ var _TestConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_TestConst */ "./src/Game/_config/_TestConst.ts");
// ！ 自动导出，请不要修改
//



/**
* 构建全部配置表
* ! 自动导出
*/
class BuildConfigTs {
    /**
     * 获取所有的配置表内容
     */
    static getAllConfig() {
        let configs = [];
        configs.push(_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_0__._SceneNodeConfig);
        configs.push(_TestConfig__WEBPACK_IMPORTED_MODULE_1__._TestConfig);
        configs.push(_TestConst__WEBPACK_IMPORTED_MODULE_2__._TestConst);
        return configs;
    }
}


/***/ }),

/***/ "./src/Game/_config/_SceneNodeConfig.ts":
/*!**********************************************!*\
  !*** ./src/Game/_config/_SceneNodeConfig.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SceneNodeConfig": () => /* binding */ _SceneNodeConfig
/* harmony export */ });
// ！ 自动导出，请不要修改
//
/**
 * _SceneNodeConfig config配置文件
 * ! 自动导出，不要修改和直接引用
 */
var _SceneNodeConfig;
(function (_SceneNodeConfig) {
    /** 配置表类型 */
    _SceneNodeConfig.type = 'config';
    /** 数据类型 */
    class DataType {
    }
    _SceneNodeConfig.DataType = DataType;
    /** config数据列表 */
    _SceneNodeConfig.datas = [];
    /** 文件名字 */
    _SceneNodeConfig.fileName = 'SceneNodeConfig.json';
})(_SceneNodeConfig || (_SceneNodeConfig = {}));


/***/ }),

/***/ "./src/Game/_config/_TestConfig.ts":
/*!*****************************************!*\
  !*** ./src/Game/_config/_TestConfig.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TestConfig": () => /* binding */ _TestConfig
/* harmony export */ });
// ！ 自动导出，请不要修改
//
/**
 * _TestConfig config配置文件
 * ! 自动导出，不要修改和直接引用
 */
var _TestConfig;
(function (_TestConfig) {
    /** 配置表类型 */
    _TestConfig.type = 'config';
    /** 数据类型 */
    class DataType {
    }
    _TestConfig.DataType = DataType;
    /** config数据列表 */
    _TestConfig.datas = [];
    /** 文件名字 */
    _TestConfig.fileName = 'TestConfig.json';
})(_TestConfig || (_TestConfig = {}));


/***/ }),

/***/ "./src/Game/_config/_TestConst.ts":
/*!****************************************!*\
  !*** ./src/Game/_config/_TestConst.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TestConst": () => /* binding */ _TestConst
/* harmony export */ });
// ！ 自动导出，请不要修改
//
/**
 * _TestConst const配置文件
 * ! 自动导出，不要修改和直接引用
 */
var _TestConst;
(function (_TestConst) {
    /** 配置表类型 */
    _TestConst.type = 'const';
    /** 数据类型 */
    class DataType {
    }
    _TestConst.DataType = DataType;
    /** const数据列表 */
    _TestConst.data = null;
    /** 文件名字 */
    _TestConst.fileName = 'TestConst.json';
})(_TestConst || (_TestConst = {}));


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/GameMain */ "./src/Game/GameMain.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _T_TMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_T/TMain */ "./src/_T/TMain.ts");



class Main {
    constructor() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.height);
        else
            Laya.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.scaleMode;
        Laya.stage.screenMode = _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.screenMode;
        Laya.stage.alignV = _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.alignV;
        Laya.stage.alignH = _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.alignH;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = _GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError(true);
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    onVersionLoaded() {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    }
    onConfigLoaded() {
        //加载IDE指定的场景
        // GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        //
        /** 正式开始 #28df99 */
        //
        //框架入口
        new _T_TMain__WEBPACK_IMPORTED_MODULE_2__.default();
        //游戏入口
        new _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__.default();
    }
}
//激活启动类
new Main();


/***/ }),

/***/ "./src/_T/Config/ConfigT.ts":
/*!**********************************!*\
  !*** ./src/_T/Config/ConfigT.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ConfigT
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Res/ResLoad */ "./src/_T/Res/ResLoad.ts");



/**
 * 配置表工具
 */
class ConfigT {
    /**
     * 构建配置表列表
     * 只构建，不加载
     * @param _configs 配置表列表
     */
    static BuildConfigs(_configs) {
        let _url;
        for (let _o of _configs) {
            _url = _Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__.default.ConfigJsonURL(_o.fileName);
            //填充数据
            switch (_o.type) {
                case 'config':
                    _o.datas = this.getConfigJsonData(_url);
                    break;
                case 'const':
                    _o.data = this.getConfigJsonData(_url);
                    break;
            }
        }
    }
    /**
     * 获取配置表json数据
     * ！注意，获取了该资源该资源就会被删除掉
     * @param _url 配置表资源地址
     */
    static getConfigJsonData(_url) {
        //获取资源
        let configData = _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__.default.GetRes(_url, true);
        //清理资源缓存只使用一次
        _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__.default.ClearRes(_url);
        //判断有没有压缩
        if (configData.zip) {
            //解压
            let _time = Date.now();
            configData.data = JSON.parse(pako.inflate(configData.data, { to: 'string' }));
            _time = Date.now() - _time;
            //判断解压时间差
            if (_time > 500) {
                console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packWarn('配置表解压时间过长，可能是配置表文件过大->', _url));
            }
        }
        //
        return configData.data;
    }
}


/***/ }),

/***/ "./src/_T/Console/ConsoleConst.ts":
/*!****************************************!*\
  !*** ./src/_T/Console/ConsoleConst.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ConsoleConst
/* harmony export */ });
/**
 * 打印台常用配置
 */
class ConsoleConst {
}
ConsoleConst.logStyle = `
        color: #fff;
        background-color: #8d93ab;
        border-radius: 3px;
        line-height: 15px;
        `;
ConsoleConst.logLightStyle = `
        color: #52575d;
        background-color: #EBEBEB;
        border-radius: 3px;
        line-height: 15px;
        `;
ConsoleConst.comStyle = `
        color: #fff;
        background-color: #ade498;
        border-radius: 3px;
        line-height: 15px;
        `;
ConsoleConst.warnStyle = `
        color: #5c6e06;
        background-color: #ffa931;
        border-radius: 3px;
        line-height: 15px;
        `;
ConsoleConst.errorStyle = `
        color: #fff;
        background-color: #ec0101;
        border-radius: 3px;
        line-height: 15px;
        `;
ConsoleConst.platformStyle = `
        color: #52575d;
        background-color: #e3fdfd;
        border-radius: 3px;
        line-height: 15px;
        `;


/***/ }),

/***/ "./src/_T/Console/ConsoleEx.ts":
/*!*************************************!*\
  !*** ./src/_T/Console/ConsoleEx.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ConsoleEx
/* harmony export */ });
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleConst */ "./src/_T/Console/ConsoleConst.ts");


/**
 * 打印台扩展
 */
class ConsoleEx {
    /**
     * 打印普通消息
     * @param any 内容
     */
    static log(...any) {
        console.log(`%c ${any}`, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.logStyle);
    }
    /**
     * 打印警告消息
     * @param any 内容
     */
    static warn(...any) {
        console.log(`%c ${any}`, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.warnStyle);
    }
    /**
     * 打印错误消息
     * @param any 内容
     */
    static error(...any) {
        console.log(`%c ${any}`, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.errorStyle);
    }
    //* ---------- *//
    /**
     * 包装普通消息
     * @param any 内容
     */
    static packLog(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return [`%c ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.logStyle];
    }
    /**
     * 包装普通轻消息
     * @param any 内容
     */
    static packLogLight(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return [`%c ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.logLightStyle];
    }
    /**
     * 包装成功消息
     * @param any 内容
     */
    static packCom(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return [`%c ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.comStyle];
    }
    /**
     * 包装警告消息
     * @param any 内容
     */
    static packWarn(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return [`%c 警告: ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.warnStyle];
    }
    /**
     * 包装错误消息
     * @param any 内容
     */
    static packError(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return [`%c 错误: ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.errorStyle];
    }
    /**
     * 包装平台消息
     * @param any 内容
     */
    static packPlatform(...any) {
        return [`%c 平台: ${any} `, _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.platformStyle];
    }
}


/***/ }),

/***/ "./src/_T/D2/D2Manager.ts":
/*!********************************!*\
  !*** ./src/_T/D2/D2Manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ D2Manager
/* harmony export */ });
/* harmony import */ var _FGUI_FGUIRootManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI/FGUIRootManager */ "./src/_T/D2/FGUI/FGUIRootManager.ts");

/**
 * 2d管理器
 */
class D2Manager {
    /**
     * 初始化
     */
    static init() {
        /** fgui根管理器 */
        _FGUI_FGUIRootManager__WEBPACK_IMPORTED_MODULE_0__.default.init();
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/BaseUICon.ts":
/*!*************************************!*\
  !*** ./src/_T/D2/FGUI/BaseUICon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BaseUICon
/* harmony export */ });
/* harmony import */ var _EFGUIConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EFGUIConst */ "./src/_T/D2/FGUI/EFGUIConst.ts");
/* harmony import */ var _EUILayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EUILayer */ "./src/_T/D2/FGUI/EUILayer.ts");
/* harmony import */ var _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FGUIRootManager */ "./src/_T/D2/FGUI/FGUIRootManager.ts");
/* harmony import */ var _FGUIT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FGUIT */ "./src/_T/D2/FGUI/FGUIT.ts");




/**
 * UI控制器基类(用来控制UI界面)
 */
class BaseUICon {
    constructor() {
        /** UI列表，可以显示很多个ui */
        this._UIs = {};
        /** 唯一键值 */
        this.m_key = Symbol();
        /** 是否在隐藏时清理掉ui，默认为true */
        this._ifClear = true;
        /** UI层级类型，必须在初始化时设置 */
        this._layer = _EUILayer__WEBPACK_IMPORTED_MODULE_1__.EUILayer.Panel;
        /** 是否显示 */
        this.m_ifShow = false;
    }
    /** 获取唯一键值 */
    get key() {
        return this.m_key;
    }
    /** 根ui实例 */
    get rootUI() {
        return this.m_rootUI;
    }
    /** ui层级 */
    get layer() {
        return this._layer;
    }
    /** 是否显示 */
    get ifShow() {
        return this.m_ifShow;
    }
    //创建ui
    createUI() {
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__.default.getLayerUI(this._layer).addChild(this.m_rootUI);
        for (let _i in this._UIs) {
            this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance());
        }
    }
    /**
     * 获取ui
     * @param _name ui名字
     */
    getUI(_name) {
        return this._UIs[_name].ui;
    }
    /**
     * 显示UI
     * @param par 其他参数，会传到显示之后的回调中
     */
    Show(...par) {
        if (this.m_ifShow) {
            return;
        }
        this.m_ifShow = true;
        this._OnshowBefore();
        if (!this.m_rootUI || this.m_rootUI.isDisposed) {
            //创建ui
            this.createUI();
        }
        if (!this.m_rootUI.visible) {
            this.m_rootUI.visible = true;
        }
        //设置到当前层级顶层显示
        _FGUIT__WEBPACK_IMPORTED_MODULE_3__.default.setUITopShow(this.m_rootUI);
        //手动更新一次
        this.updateSize();
        //监听事件
        Laya.stage.on(Laya.Event.RESIZE, this, this.updateSize);
        //播放动画
        this.stopAni(_EFGUIConst__WEBPACK_IMPORTED_MODULE_0__.EFGUIConst.hideAni); //先停止隐藏动画
        this.playAni(_EFGUIConst__WEBPACK_IMPORTED_MODULE_0__.EFGUIConst.showAni, Laya.Handler.create(this, this._OnShowAniCom, ...par));
        //
        this._OnShow(...par);
    }
    /** 显示之前调用 */
    _OnshowBefore(...par) { }
    /** 显示之后调用 */
    _OnShow(...par) { }
    /** 显示动画完成后调用 */
    _OnShowAniCom(...par) { }
    /**
     * 隐藏
     * @param _ifClear 是否清理
     * @param par 其他参数，会传到隐藏的回调中
     */
    Hide(_ifClear = this._ifClear, ...par) {
        if (!this.m_ifShow) {
            return;
        }
        this.m_ifShow = false;
        this._OnHideBefore(par);
        let _hideF = () => {
            if (_ifClear) {
                this.m_rootUI.dispose();
                //清理引用
                for (let _i in this._UIs) {
                    this._UIs[_i].ui = null;
                }
            }
            else {
                this.m_rootUI.visible = false;
            }
        };
        //取消监听事件
        Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
        //播放动画
        this.stopAni(_EFGUIConst__WEBPACK_IMPORTED_MODULE_0__.EFGUIConst.showAni); //先停止显示动画
        this.playAni(_EFGUIConst__WEBPACK_IMPORTED_MODULE_0__.EFGUIConst.hideAni, Laya.Handler.create(this, () => {
            _hideF();
            this._OnHideAniCom(...par);
        }));
        //
        this._OnHide(par);
    }
    /** 隐藏之前调用 */
    _OnHideBefore(...par) { }
    /** 隐藏之后调用 */
    _OnHide(...par) { }
    /** 隐藏动画完成后回调 */
    _OnHideAniCom(...par) { }
    /** 更新大小 */
    updateSize() {
        //根据子ui携带的数据适配屏幕大小
        let _data;
        let _width = Laya.stage.width;
        let _height = Laya.stage.height;
        for (let _i in this._UIs) {
            _data = this._UIs[_i].data;
            if (!_data || !_data.ifUpdate) {
                //
                this._UIs[_i].ui.setSize(_width, _height);
                this._UIs[_i].ui.setXY(0, 0);
                continue;
            }
            this._UIs[_i].ui.setSize(_width - _data.left - _data.right, _height - _data.bottom - _data.top);
            this._UIs[_i].ui.setXY(_data.left, _data.top);
        }
    }
    /**
     * 播放动画
     * @param _name 动效名字
     * @param _comBack 播放完成回调
     */
    playAni(_name, _comBack) {
        let _promises = [];
        //遍历所有ui并添加期约列表
        for (let _i in this._UIs) {
            _promises.push(new Promise((r) => {
                this._UIs[_i].ui
                    && this._UIs[_i].ui[_name]
                    && this._UIs[_i].ui[_name].play(Laya.Handler.create(this, r));
            }));
        }
        //执行期约
        this.aniPromise = Promise.all(_promises).then(() => {
            _comBack && _comBack.run();
        });
    }
    /**
     * 停止动效
     * @param _name 动效名字
     */
    stopAni(_name) {
        //停止所有动画期约
        // this.aniPromise && this.aniPromise;
        //遍历所有ui并添加期约列表
        for (let _i in this._UIs) {
            this._UIs[_i].ui
                && this._UIs[_i].ui[_name]
                && this._UIs[_i].ui[_name].stop();
        }
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/EFGUIConst.ts":
/*!**************************************!*\
  !*** ./src/_T/D2/FGUI/EFGUIConst.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EFGUIConst": () => /* binding */ EFGUIConst
/* harmony export */ });
/**
 * fgui配置
 */
var EFGUIConst;
(function (EFGUIConst) {
    /** 显示动效 */
    EFGUIConst["showAni"] = "m__show";
    /** 隐藏动效 */
    EFGUIConst["hideAni"] = "m__hide";
})(EFGUIConst || (EFGUIConst = {}));


/***/ }),

/***/ "./src/_T/D2/FGUI/EUILayer.ts":
/*!************************************!*\
  !*** ./src/_T/D2/FGUI/EUILayer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EUILayer": () => /* binding */ EUILayer
/* harmony export */ });
/**
 * UI分层,按顺序显示
 */
var EUILayer;
(function (EUILayer) {
    /** 背景页面 */
    EUILayer["Bg"] = "Bg";
    /** 主界面  永远存在 */
    EUILayer["Main"] = "Main";
    /** 面板  可以有很多 */
    EUILayer["Panel"] = "Panel";
    /** 弹窗 */
    EUILayer["Popup"] = "Popup";
    /** 道具 */
    EUILayer["Prop"] = "Prop";
    /** 小部件 */
    EUILayer["Tip"] = "Tip";
    /** 暂停 */
    EUILayer["Pause"] = "Pause";
    /** 设置 */
    EUILayer["Set"] = "Set";
    /** 最高 */
    EUILayer["Top"] = "Top";
    /** 加载页面 */
    EUILayer["Loading"] = "Loading";
    /** 原生 */
    EUILayer["Native"] = "Native";
})(EUILayer || (EUILayer = {}));


/***/ }),

/***/ "./src/_T/D2/FGUI/FGUIPack.ts":
/*!************************************!*\
  !*** ./src/_T/D2/FGUI/FGUIPack.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGUIPack": () => /* binding */ FGUIPack
/* harmony export */ });
/* harmony import */ var src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_ConstConfig */ "./src/Config/_ConstConfig.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");


/**
 * UI包类
 */
class FGUIPack {
    /**
     * 加载包
     * @param _packUrl 包地址
     * @param _atliasCount 图集数量
     */
    constructor(_packUrl, _atliasCount = -1) {
        this.packPath = _packUrl;
        this.atliasCount = _atliasCount;
    }
    /**
     * 异步加载
     */
    asyncLoad(_onProgress) {
        let _urls = [];
        this.getResURL(_urls);
        return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_1__.default.Load2DAsync(_urls, _onProgress);
    }
    /**
     * 获取所有资源路径
     * @param urls 输出数组
     */
    getResURL(urls) {
        //加入包名
        urls.push({ url: this.packPath + '.' + src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__.default.FGUI.packageFileExtension, type: Laya.Loader.BUFFER });
        //加载纹理集
        if (this.atliasCount >= 0) {
            urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
            //
            for (let i = 1; i <= this.atliasCount; i++) {
                urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
            }
        }
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/FGUIRootManager.ts":
/*!*******************************************!*\
  !*** ./src/_T/D2/FGUI/FGUIRootManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUIRootManager
/* harmony export */ });
/* harmony import */ var src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_ConstConfig */ "./src/Config/_ConstConfig.ts");
/* harmony import */ var _EUILayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EUILayer */ "./src/_T/D2/FGUI/EUILayer.ts");


/**
 * FGUI 根管理器
 */
class FGUIRootManager {
    // 获取某一层UI
    static getLayerUI(layerType) {
        //
        return this.layerUIList[layerType];
    }
    /** 初始化 */
    static init() {
        // 设置包名后缀
        fgui.UIConfig.packageFileExtension = src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__.default.FGUI.packageFileExtension;
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        //添加FGUI根节点按顺序显示
        this.layerUIList = {};
        for (let _i in _EUILayer__WEBPACK_IMPORTED_MODULE_1__.EUILayer) {
            this.layerUIList[_EUILayer__WEBPACK_IMPORTED_MODULE_1__.EUILayer[_i]] = fgui.GRoot.inst.addChild(new fgui.GComponent());
        }
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/FGUIT.ts":
/*!*********************************!*\
  !*** ./src/_T/D2/FGUI/FGUIT.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FGUIT
/* harmony export */ });
/**
 * fgui 工具
 */
class FGUIT {
    /**
     * 设置ui层级，除了fgui根管理器回调用，其他的地方请不要调用
     * @param _ui ui
     * @param _layer 层级
     */
    static setUILayer(_ui, _layer) {
        _ui[this.UILayerKey] = _layer;
    }
    /**
     * 获取ui层级
     * @param _ui ui
     * @returns ui层级
     */
    static getUILayer(_ui) {
        return _ui[this.UILayerKey];
    }
    /**
     * 设置一个ui顶层显示
     * @param _ui 该ui
     */
    static setUITopShow(_ui) {
        //获取最大的显示顺序
        let _sortingOrder = _ui.sortingOrder;
        let _parentUI = _ui.parent;
        for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
            _sortingOrder = Math.max(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
        }
        //重新设置顺序
        _ui.sortingOrder = _sortingOrder + 1;
    }
    /**
     * 设置一个ui底层显示
     * @param _ui 该ui
     */
    static setUIDownShow(_ui) {
        //获取最小的显示顺序
        let _sortingOrder = _ui.sortingOrder;
        let _parentUI = _ui.parent;
        for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
            _sortingOrder = Math.min(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
        }
        //重新设置顺序
        _ui.sortingOrder = _sortingOrder - 1;
    }
}
/** ui层级key */
FGUIT.UILayerKey = Symbol('UILayer');


/***/ }),

/***/ "./src/_T/D3/D3Manager.ts":
/*!********************************!*\
  !*** ./src/_T/D3/D3Manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ D3Manager
/* harmony export */ });
/* harmony import */ var _scene_SceneRootManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene/SceneRootManager */ "./src/_T/D3/scene/SceneRootManager.ts");

/**
 * 3d管理器
 */
class D3Manager {
    /**
     * 初始化
     */
    static init() {
        /** 场景根管理器 */
        _scene_SceneRootManager__WEBPACK_IMPORTED_MODULE_0__.default.init();
    }
}


/***/ }),

/***/ "./src/_T/D3/scene/SceneRootManager.ts":
/*!*********************************************!*\
  !*** ./src/_T/D3/scene/SceneRootManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SceneRootManager
/* harmony export */ });
/**
 * 场景根管理器
 */
class SceneRootManager {
    /** 获取 3d场景 */
    static get Scene3D() {
        return this.m_Scene3D;
    }
    /** 获取 摄像机 */
    static get Camera() {
        return this.m_Camera;
    }
    /** 获取 灯光 */
    static get Light() {
        return this.m_Light;
    }
    /**
     * 初始化
     */
    static init() {
        this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D);
        this.m_Camera = new Laya.Camera;
        this.m_Light = new Laya.DirectionLight;
        this.m_Scene3D.addChild(this.m_Camera);
        this.m_Scene3D.addChild(this.m_Light);
    }
}


/***/ }),

/***/ "./src/_T/Main/BaseInitLoad.ts":
/*!*************************************!*\
  !*** ./src/_T/Main/BaseInitLoad.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BaseInitLoad
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Res_ResLoadGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Res/ResLoadGroup */ "./src/_T/Res/ResLoadGroup.ts");


/**
 * 游戏进入之前的加载基类
 */
class BaseInitLoad {
    //
    constructor() {
        this.init();
        this._init();
    }
    //初始化
    _init() {
        //执行加载之前的生命周期
        this.loadBefore();
    }
    /**
     * 加载
     * @param _comBack 加载完成回调
     */
    load(_comBack) {
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packLogLight('开始加载游戏初始化资源'));
        //获取加载项
        let _resLoadItems = this.getLoadItems();
        //异步加载加载项
        _Res_ResLoadGroup__WEBPACK_IMPORTED_MODULE_1__.default.loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
            this.loadPlan(i);
        }, undefined, false), Laya.Handler.create(this, this.loadItemsCom, undefined, false))
            .then(() => {
            console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packCom('游戏加载完成'));
            //
            this.loadCom();
            //
            _comBack && _comBack.run();
        });
    }
    // * --------
    /**
     * 初始化
     */
    init() { }
    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    loadBefore() { }
    /**
     * 获取加载项列表
     */
    getLoadItems() {
        return [];
    }
    /**
     * 加载进度
     * @param _i 进度值
     */
    loadPlan(_i) { }
    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    loadItemsCom(_resLoad) { }
    /**
     * 加载完成
     */
    loadCom() { }
}


/***/ }),

/***/ "./src/_T/Res/EKeyResName.ts":
/*!***********************************!*\
  !*** ./src/_T/Res/EKeyResName.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EKeyResName": () => /* binding */ EKeyResName
/* harmony export */ });
/**
 * 关键资源点名字枚举
 */
var EKeyResName;
(function (EKeyResName) {
    /** 根目录 */
    EKeyResName["RootRes"] = "res";
    /** 配置表目录 */
    EKeyResName["ConfigJson"] = "ConfigJson";
    /** 字体目录 */
    EKeyResName["Font"] = "Font";
    /** FGUI资源目录 */
    EKeyResName["FGUI"] = "FGUI";
    /** 关卡配置表目录 */
    EKeyResName["SceneJson"] = "SceneJson";
    /** 其它目录 */
    EKeyResName["Other"] = "Other";
    /** icon目录 */
    EKeyResName["icon"] = "icon";
    /** img目录 */
    EKeyResName["img"] = "img";
    /** 音乐文件目录 */
    EKeyResName["music"] = "music";
    /** 音效文件目录 */
    EKeyResName["sound"] = "sound";
    /** 皮肤文件目录 */
    EKeyResName["skin"] = "skin";
})(EKeyResName || (EKeyResName = {}));


/***/ }),

/***/ "./src/_T/Res/EssentialResUrls.ts":
/*!****************************************!*\
  !*** ./src/_T/Res/EssentialResUrls.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EssentialResUrls
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _EKeyResName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EKeyResName */ "./src/_T/Res/EKeyResName.ts");
/* harmony import */ var _KeyResManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyResManager */ "./src/_T/Res/KeyResManager.ts");



/**
 * 必要的游戏资源路径
 */
class EssentialResUrls {
    /**
     * 获取关卡配置文件
     * @param _name 场景名字
     */
    static SceneConfigURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.SceneJson) + _name + '.json';
    }
    /**
     * 获取配置表Json文件RUL
     * @param _name 配置表名字
     */
    static ConfigJsonURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.ConfigJson) + _name;
    }
    /**
     * FGUI包
     * @param _name 包名
     */
    static FGUIPackURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.FGUI) + _name;
    }
    /**
     * 字体地址
     * @param _name 字体名字，加后缀
     */
    static FontURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Font) + _name;
    }
    /**
     * 预制体资源路径
     * @param prefab 预制体名字
     */
    static PrefabURL(prefab) {
        //先在缓存中查找场景名字
        if (this._prefabsSceneCache[prefab]) {
            return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName[this._prefabsSceneCache[prefab]]) + 'Conventional/' + prefab + '.lh';
        }
        //判断该预制体在哪个场景中被导出的
        for (let _i in this._AllScenePrefabsNames) {
            if (this._AllScenePrefabsNames[_i].indexOf('@' + prefab + '@') != -1) {
                //添加到缓存
                this._prefabsSceneCache[prefab] = _i;
                //
                return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName[_i]) + 'Conventional/' + prefab + '.lh';
            }
        }
        //
        console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packError('没有在场景找到预制体', prefab, '可能是没有导出场景预制体列表导致的。'));
    }
}
//所有预制体名字列表
EssentialResUrls._AllScenePrefabsNames = {};
//预制体场景缓存
EssentialResUrls._prefabsSceneCache = {};


/***/ }),

/***/ "./src/_T/Res/KeyResManager.ts":
/*!*************************************!*\
  !*** ./src/_T/Res/KeyResManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ KeyResManager
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _EKeyResName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EKeyResName */ "./src/_T/Res/EKeyResName.ts");


/**
 * 关键资源点列表管理器
 */
class KeyResManager {
    //
    constructor() {
        //关键资源列表
        this.m_KeyResList = {};
        //注册关键资源目录
        this.m_KeyResList = {
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.ConfigJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.ConfigJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.FGUI]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.FGUI + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.SceneJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.SceneJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Font]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Font + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/',
            //其他路径
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.icon]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.icon + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.img]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.img + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.music]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.music + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.sound]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.sound + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.skin]: _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_1__.EKeyResName.skin + '/',
        };
        // console.log(this.m_KeyResList);
    }
    /** 单例 */
    static get instance() {
        if (this._instance == null) {
            this._instance = new KeyResManager();
        }
        //
        return this._instance;
    }
    ;
    /**
     * 判断是否存在某个关键点key
     * @param _key 关键点key
     */
    static ifKeyRes(_key) {
        return Object.keys(this.instance.m_KeyResList).findIndex((item) => {
            return item == _key;
        }) != -1;
    }
    /**
     * 获取一个关键点资源的路径
     * @param _key 关键点key
     */
    static getResURL(_key) {
        return this.instance.m_KeyResList[_key];
    }
    /**
     * 动态添加关键路径
     * @param _key 关键值
     * @param _string 路径
     */
    static addResUrl(_key, _string) {
        this.instance.m_KeyResList[_key] = _string;
    }
    /**
     * 修改关键点资源路径
     * @param _key 关键点key
     * @param _str 路径
     */
    static editKeyResList(_key, _str) {
        let _replace = this.instance.m_KeyResList[_key];
        if (typeof _replace == "undefined") {
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packWarn('修改资源路径失败，没有' + _key + '这个关键路径！'));
            return;
        }
        //替换所有资源路径中的关键点路径
        for (let _i in this.instance.m_KeyResList) {
            this.instance.m_KeyResList[_i] = this.instance.m_KeyResList[_i].replace(_replace, _str);
        }
        //
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packLog('修改关键点资源路径', _replace, '替换成', _str));
    }
}


/***/ }),

/***/ "./src/_T/Res/ResLoad.ts":
/*!*******************************!*\
  !*** ./src/_T/Res/ResLoad.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ResLoad,
/* harmony export */   "EResLoadModel": () => /* binding */ EResLoadModel
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");

/**
 * 资源加载类
 */
class ResLoad {
    /**
     * 加载资源
     * @param urls 资源路径列表
     * @param model 加载模式
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度
     */
    static Load(urls, model, onCompleted, _onProgress) {
        //判断是否有内容需要加载
        if (!urls || (Array.isArray(urls) && urls.length == 0)) {
            onCompleted.run();
            if (_onProgress) {
                _onProgress.args = [1];
                _onProgress.run();
            }
            return;
        }
        //加载资源
        switch (model) {
            case EResLoadModel.D3:
                //create是3D的接口，适用于3D项目
                Laya.loader.create(urls, onCompleted, _onProgress);
                break;
            case EResLoadModel.D2:
                //load是2d的接口，适用于2d项目
                Laya.loader.load(urls, onCompleted, _onProgress);
                break;
        }
    }
    /**
     * 加载3D资源
     * @param urls 资源路径
     * @param onCompleted 完成回调
     * @param _onProgress 进度回调
     */
    static Load3D(urls, onCompleted, _onProgress) {
        this.Load(urls, EResLoadModel.D3, onCompleted, _onProgress);
    }
    /**
     * 加载2D资源
     * @param urls 资源路径
     * @param onCompleted 完成回调
     * @param _onProgress 进度回调
     */
    static Load2D(urls, onCompleted, _onProgress) {
        this.Load(urls, EResLoadModel.D2, onCompleted, _onProgress);
    }
    /**
     * 异步加载3D资源
     * @param urls 资源路径
     * @param _onProgress 进度回调
     */
    static Load3DAsync(urls, _onProgress) {
        //
        return new Promise((resolve) => {
            ResLoad.Load3D(urls, Laya.Handler.create(null, () => {
                resolve();
            }), _onProgress);
        });
    }
    /**
     * 异步加载2D资源
     * @param urls 资源路径
     * @param _onProgress 进度回调
     */
    static Load2DAsync(urls, _onProgress) {
        //
        return new Promise(function (resolve) {
            ResLoad.Load2D(urls, Laya.Handler.create(null, () => {
                resolve();
            }), _onProgress);
        });
    }
    /**
     * 获取资源
     * @param resUrl 资源路径
     * @param noClone 是否不获取克隆的资源
     */
    static GetRes(resUrl, noClone = false) {
        let getRes = Laya.loader.getRes(resUrl);
        if (!getRes) {
            console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packError("资源尚未加载", resUrl));
            return;
        }
        return noClone ? getRes : getRes.clone();
    }
    /**
     * 清理指定资源地址缓存。
     * @param resUrl 资源路径
     */
    static ClearRes(resUrl) {
        Laya.loader.clearRes(resUrl);
    }
}
/**
 * 资源加载模式
 */
var EResLoadModel;
(function (EResLoadModel) {
    /** 3D 资源 */
    EResLoadModel[EResLoadModel["D3"] = 0] = "D3";
    /** 2d 资源 */
    EResLoadModel[EResLoadModel["D2"] = 1] = "D2";
})(EResLoadModel || (EResLoadModel = {}));


/***/ }),

/***/ "./src/_T/Res/ResLoadGroup.ts":
/*!************************************!*\
  !*** ./src/_T/Res/ResLoadGroup.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ResLoadGroup
/* harmony export */ });
/**
 * 资源加载组
 * 负责多个资源加载项的统一加载
 */
class ResLoadGroup {
    /**
     * 加载资源列表集合
     * @param items 资源加载项集合
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度回调
     * @param _onItemCom 单个资源项加载完成回调，会带上该资源项实例作为参数
     */
    static load(items, onCompleted, _onProgress, _onItemCom) {
        //没有加载项
        if (items.length == 0) {
            //加载完成
            onCompleted.run();
            if (_onProgress) {
                _onProgress.args = [1];
                _onProgress.run();
            }
            return;
        }
        //浅拷贝，防止污染源列表
        items = [...items];
        //异步列表长度
        let _length = items.length;
        //一步一步消费异步列表
        let _f = () => {
            if (items.length > 0) {
                let onItem = items.shift();
                onItem.loadAsync(Laya.Handler.create(this, (i) => {
                    //传出总进度
                    _onProgress.args = [
                        ((_length - items.length - 1) + i) / _length
                    ];
                    _onProgress.run();
                })).then(() => {
                    //传出单个加载项加载完成事件
                    _onItemCom.args = [onItem];
                    _onItemCom.run();
                    //
                    _f();
                });
            }
            else {
                //加载完成
                onCompleted.run();
            }
        };
        //执行递归加载方法
        _f();
    }
    /**
     * 异步加载资源列表集合
     * @param items 资源加载项集合
     * @param _onProgress 加载进度回调
     * @param _onItemCom 单个资源项加载完成回调，会带上该资源项实例参数
     */
    static loadAsync(items, _onProgress, _onItemCom) {
        return new Promise((r) => {
            this.load(items, Laya.Handler.create(this, () => {
                r();
            }), _onProgress, _onItemCom);
        });
    }
}


/***/ }),

/***/ "./src/_T/Res/ResLoadItem.ts":
/*!***********************************!*\
  !*** ./src/_T/Res/ResLoadItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ResLoadItem
/* harmony export */ });
/* harmony import */ var _ResLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResLoad */ "./src/_T/Res/ResLoad.ts");

/**
 * 资源加载项
 * 负责一组资源列表的加载
 */
class ResLoadItem {
    /**
     * 初始化
     * @param _res 资源列表
     * @param _mode 加载模式
     * @param _key 关键键值
     * @param _comBack 加载完成时的回调函数
     */
    constructor(_res, _mode, _key, _comBack) {
        this.m_res = _res;
        this.m_loadModel = _mode;
        this.m_key = _key;
        this.m_comBack = _comBack;
    }
    /** 获取关键键值 */
    get key() {
        return this.m_key;
    }
    /**
     * 加载资源
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度回调
     */
    load(onCompleted, _onProgress) {
        if (this.m_comBack) {
            if (!onCompleted) {
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__.default.Load(this.m_res, this.m_loadModel, this.m_comBack, _onProgress);
            }
            else {
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__.default.Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                    this.m_comBack.run();
                    onCompleted.run();
                }), _onProgress);
            }
        }
        else {
            _ResLoad__WEBPACK_IMPORTED_MODULE_0__.default.Load(this.m_res, this.m_loadModel, onCompleted, _onProgress);
        }
    }
    /**
     * 异步加载资源
     * @param _onProgress 加载进度回调
     */
    loadAsync(_onProgress) {
        return new Promise((r) => {
            this.load(Laya.Handler.create(this, () => {
                r();
            }), _onProgress);
        });
    }
}


/***/ }),

/***/ "./src/_T/TMain.ts":
/*!*************************!*\
  !*** ./src/_T/TMain.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TMain
/* harmony export */ });
/* harmony import */ var src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_GameConfig */ "./src/Config/_GameConfig.ts");
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var src_GameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _D2_D2Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./D2/D2Manager */ "./src/_T/D2/D2Manager.ts");
/* harmony import */ var _D3_D3Manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./D3/D3Manager */ "./src/_T/D3/D3Manager.ts");
/* harmony import */ var _TConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_TConfig */ "./src/_T/_TConfig.ts");






/**
 * 框架入口
 */
class TMain {
    //
    constructor() {
        this.init();
    }
    //初始化
    init() {
        //注入框架信息
        window[_TConfig__WEBPACK_IMPORTED_MODULE_5__.default.Name] = Object.assign(Object.assign({}, _TConfig__WEBPACK_IMPORTED_MODULE_5__.default), { 
            /** laya配置 */
            gameConfig: Object.assign({}, src_GameConfig__WEBPACK_IMPORTED_MODULE_2__.default), 
            /** 项目配置 */
            _mainConfig: Object.assign({}, src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_1__.default), 
            /** 游戏配置 */
            _gameConfig: Object.assign({}, src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__.default) });
        //初始化各种各样的管理器
        _D3_D3Manager__WEBPACK_IMPORTED_MODULE_4__.default.init(); //3D管理器
        _D2_D2Manager__WEBPACK_IMPORTED_MODULE_3__.default.init(); //ui管理器
    }
}


/***/ }),

/***/ "./src/_T/_TConfig.ts":
/*!****************************!*\
  !*** ./src/_T/_TConfig.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _TConfig
/* harmony export */ });
/**
 * 框架配置文件
 */
class _TConfig {
}
/** 名字 */
_TConfig.Name = "LayaMiniGame";
/** 中文名字 */
_TConfig.ZHName = "LayaBox小游戏";
/** 版本 */
_TConfig.Versions = "0.0.0.1";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX0NvbnN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX01haW5Db25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUVuZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGF1c2UudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTZXQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU3RhcnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RVSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRFbXB0eVNjcmVlblVJQ29uLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvVUlDb24vaW5pdExvYWQvaW5pdExvYWRVSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL19jb25maWcvQnVpbGRDb25maWdUcy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL19jb25maWcvX1NjZW5lTm9kZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvTWFpbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25maWcvQ29uZmlnVC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVDb25zdC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9EMk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9FRkdVSUNvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRVVJTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlSb290TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL0QzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZVJvb3RNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL01haW4vQmFzZUluaXRMb2FkLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9FS2V5UmVzTmFtZS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvS2V5UmVzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvUmVzTG9hZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9SZXNMb2FkSXRlbS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9UTWFpbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9fVENvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFD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ImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bi46YeP6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQ29uc3RDb25maWcge1xyXG4gICAgLyoqIGZndWnnm7jlhbMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSSA9IHtcclxuICAgICAgICAvKiog5YyF5ZCO57yAICovXHJcbiAgICAgICAgcGFja2FnZUZpbGVFeHRlbnNpb246ICdiaW4nLFxyXG4gICAgfTtcclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwiLi9fTWFpbkNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+acgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0dhbWVDb25maWcge1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a4uOaIj+a1i+ivlSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkdhbWVUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a1i+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6LCD6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmRGVidWc6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDkuIDkuKrmlrDnqpflj6PosIPor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZPcGVuV2luZG93RGVidWc6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbn0iLCIvKipcclxuICog6aG555uu5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTWFpbkNvbmZpZyB7XHJcbiAgICAvKiog5ri45oiP5omA5bGe5Zui6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlYW06IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/lkI3lrZfvvIzlsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOYW1lOiBzdHJpbmcgPSAnTGF5YU1pbmlHYW1lJztcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkhOYW1lOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP6K+05piOICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV4cGxhaW46IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiP77yM6K+05piO44CCJztcclxuICAgIC8qKiDmlbDmja7niYjmnKwg5Y+v5Lul5bim5a2X5q+N5L2G5piv5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmVyc2lvbnM6IHN0cmluZyA9ICcwLjAuMC4xJztcclxuICAgIC8qKiDmmK/lkKbkuIrnur/kuLpmYWxzZeWImeaYr+W8gOWPkeeOr+WigyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPbkxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbW1vbkJpbmRlciB7XG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xuXHR9XG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUNvbSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG5cblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXEzbmc5d1wiO1xuXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ29tIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDb20+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDb21cIikpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xuXHR9XG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1kYm1pMTNcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUN1c3RvbXNMb2FkaW5nXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xuXHR9XG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUVuZCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG5cblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWxheGQxOVwiO1xuXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lRW5kIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVFbmQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVFbmRcIikpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xuXHR9XG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUxvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX3NoYWRlOmZndWkuR0dyYXBoO1xuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTFvXCI7XG5cblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVMb2FkaW5nIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVMb2FkaW5nPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTG9hZGluZ1wiKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tc3l0YTlmXCI7XG5cblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVNYWluIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTWFpblwiKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XG5cdH1cbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lUGF1c2UgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNWdcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBhdXNlIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVQYXVzZT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBhdXNlXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQbGF5IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXJcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBsYXkge1xuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBsYXk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQbGF5XCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTZXQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNHVcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVNldCB7XG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU2V0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU2V0XCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTdGFydCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG5cblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTF2XCI7XG5cblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTdGFydCB7XG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU3RhcnQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVTdGFydFwiKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XG5cdH1cbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX1VJQnV0dG9uOmZndWkuR0J1dHRvbjtcblx0cHVibGljIG1fVUk6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV90ZXN0OmZndWkuR0J1dHRvbjtcblx0cHVibGljIG1fdGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV9kYXRhVGVzdDpmZ3VpLkdCdXR0b247XG5cdHB1YmxpYyBtX2RhdGFUZXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX190ZXN0OmZndWkuR0dyb3VwO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1vOWpzOXhcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RNYWluIHtcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RNYWluXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV9VSUJ1dHRvbiA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XG5cdFx0dGhpcy5tX1VJID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcblx0XHR0aGlzLm1fdGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XG5cdFx0dGhpcy5tX3Rlc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcblx0XHR0aGlzLm1fZGF0YVRlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNikpO1xuXHRcdHRoaXMubV9kYXRhVGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xuXHRcdHRoaXMubV9fdGVzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xuXHRwdWJsaWMgbV9sb29rVkFkOmZndWkuR0J1dHRvbjtcblx0cHVibGljIG1fbG9va1ZBZFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV9fbG9va1ZBZDpmZ3VpLkdHcm91cDtcblx0cHVibGljIG1fc2hhcmU6Zmd1aS5HQnV0dG9uO1xuXHRwdWJsaWMgbV9zaGFyZVRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV9fc2hhcmU6Zmd1aS5HR3JvdXA7XG5cdHB1YmxpYyBtX3Nob3dUb2FzdDpmZ3VpLkdCdXR0b247XG5cdHB1YmxpYyBtX3Nob3dUb2FzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV9fc2hvd1RvYXN0OmZndWkuR0dyb3VwO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW10MXB3OXlcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSB7XG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFBsYXRmb3JtPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFBsYXRmb3JtXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0XHR0aGlzLm1fbG9va1ZBZCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XG5cdFx0dGhpcy5tX2xvb2tWQWRUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcblx0XHR0aGlzLm1fX2xvb2tWQWQgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XG5cdFx0dGhpcy5tX3NoYXJlID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDQpKTtcblx0XHR0aGlzLm1fc2hhcmVUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcblx0XHR0aGlzLm1fX3NoYXJlID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoNikpO1xuXHRcdHRoaXMubV9zaG93VG9hc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNykpO1xuXHRcdHRoaXMubV9zaG93VG9hc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcblx0XHR0aGlzLm1fX3Nob3dUb2FzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xuXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1oNjZlOXpcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RVSSB7XG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFVJXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmltcG9ydCBGR1VJX1BHYW1lU2V0IGZyb20gXCIuL0ZHVUlfUEdhbWVTZXRcIjtcbmltcG9ydCBGR1VJX1BHYW1lUGF1c2UgZnJvbSBcIi4vRkdVSV9QR2FtZVBhdXNlXCI7XG5pbXBvcnQgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZ1wiO1xuaW1wb3J0IEZHVUlfUEdhbWVMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVMb2FkaW5nXCI7XG5pbXBvcnQgRkdVSV9QR2FtZVBsYXkgZnJvbSBcIi4vRkdVSV9QR2FtZVBsYXlcIjtcbmltcG9ydCBGR1VJX1BHYW1lU3RhcnQgZnJvbSBcIi4vRkdVSV9QR2FtZVN0YXJ0XCI7XG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RVSSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFVJXCI7XG5pbXBvcnQgRkdVSV9QR2FtZUVuZCBmcm9tIFwiLi9GR1VJX1BHYW1lRW5kXCI7XG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0TWFpblwiO1xuaW1wb3J0IEZHVUlfUEdhbWVDb20gZnJvbSBcIi4vRkdVSV9QR2FtZUNvbVwiO1xuaW1wb3J0IEZHVUlfUEdhbWVNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVNYWluXCI7XG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluQmluZGVyIHtcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTZXQuVVJMLCBGR1VJX1BHYW1lU2V0KTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBhdXNlLlVSTCwgRkdVSV9QR2FtZVBhdXNlKTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nKTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUxvYWRpbmcuVVJMLCBGR1VJX1BHYW1lTG9hZGluZyk7XG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQbGF5LlVSTCwgRkdVSV9QR2FtZVBsYXkpO1xuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU3RhcnQuVVJMLCBGR1VJX1BHYW1lU3RhcnQpO1xuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFVJLlVSTCwgRkdVSV9QR2FtZVRlc3RVSSk7XG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVFbmQuVVJMLCBGR1VJX1BHYW1lRW5kKTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RNYWluLlVSTCwgRkdVSV9QR2FtZVRlc3RNYWluKTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUNvbS5VUkwsIEZHVUlfUEdhbWVDb20pO1xuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTWFpbi5VUkwsIEZHVUlfUEdhbWVNYWluKTtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS5VUkwsIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0pO1xuXHR9XG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9FbXB0eVNjcmVlblVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovLzdrdHppYjhvcTNuZzBcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9FbXB0eVNjcmVlblVJIHtcblx0XHRyZXR1cm4gPEZHVUlfRW1wdHlTY3JlZW5VST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdEVtcHR5U2NyZWVuXCIsIFwiRW1wdHlTY3JlZW5VSVwiKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XG5cdH1cbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xuXG5pbXBvcnQgRkdVSV9FbXB0eVNjcmVlblVJIGZyb20gXCIuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RW1wdHlTY3JlZW5CaW5kZXIge1xuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9FbXB0eVNjcmVlblVJLlVSTCwgRkdVSV9FbXB0eVNjcmVlblVJKTtcblx0fVxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfaW5pdExvYWRVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG5cblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xuXHRwdWJsaWMgbV9sb2FkaW5nX3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIG1fdGV4dF9sb2dvOmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIG1fdGV4dF9wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX3RleHRfbGF5YTpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX3RleHRfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX3RleHRfdjpmZ3VpLkdUZXh0RmllbGQ7XG5cdHB1YmxpYyBtX3RleHRfbGF5YV92OmZndWkuR1RleHRGaWVsZDtcblx0cHVibGljIG1fdGV4dF9nYW1lX2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xuXHRwdWJsaWMgbV9fc2hvdzpmZ3VpLlRyYW5zaXRpb247XG5cdHB1YmxpYyBtX19oaWRlOmZndWkuVHJhbnNpdGlvbjtcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL24zb2VkcHA2bmlocjBcIjtcblxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9pbml0TG9hZFVJIHtcblx0XHRyZXR1cm4gPEZHVUlfaW5pdExvYWRVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdExvYWRcIiwgXCJpbml0TG9hZFVJXCIpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XG5cdFx0dGhpcy5tX2xvYWRpbmdfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xuXHRcdHRoaXMubV90ZXh0X2xvZ28gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMykpO1xuXHRcdHRoaXMubV90ZXh0X3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcblx0XHR0aGlzLm1fdGV4dF9sYXlhID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcblx0XHR0aGlzLm1fdGV4dF9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcblx0XHR0aGlzLm1fdGV4dF92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDcpKTtcblx0XHR0aGlzLm1fdGV4dF9sYXlhX3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xuXHRcdHRoaXMubV90ZXh0X2dhbWVfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XG5cdFx0dGhpcy5tX19zaG93ID0gdGhpcy5nZXRUcmFuc2l0aW9uQXQoMCk7XG5cdFx0dGhpcy5tX19oaWRlID0gdGhpcy5nZXRUcmFuc2l0aW9uQXQoMSk7XG5cdH1cbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xuXG5pbXBvcnQgRkdVSV9pbml0TG9hZFVJIGZyb20gXCIuL0ZHVUlfaW5pdExvYWRVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZEJpbmRlciB7XG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX2luaXRMb2FkVUkuVVJMLCBGR1VJX2luaXRMb2FkVUkpO1xuXHR9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcbiAgICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6IHN0cmluZyA9IFwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOiBzdHJpbmcgPSBcImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbiB7XHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmuLjmiI/liJ3lp4vljJbliqDovb3lrp7kvotcclxuICAgICAgICBsZXQgX2dhbWVJbml0TG9hZDogR2FtZUluaXRMb2FkID0gbmV3IEdhbWVJbml0TG9hZCgpO1xyXG4gICAgICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgX2dhbWVJbml0TG9hZC5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5nYW1lSW5pdExvYWRDb20pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+WKoOi9veWujOaIkFxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdExvYWRDb20oKSB7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn6L+b5YWl5ri45oiPJykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgQ29uZmlnVCwgeyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB9IGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCB7IEZHVUlQYWNrIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrXCI7XHJcbmltcG9ydCBCYXNlSW5pdExvYWQgZnJvbSBcInNyYy9fVC9NYWluL0Jhc2VJbml0TG9hZFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5pbXBvcnQgSW5pdEVtcHR5U2NyZWVuVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRFbXB0eVNjcmVlblVJQ29uXCI7XHJcbmltcG9ydCBJbml0TG9hZFVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0TG9hZFVJQ29uXCI7XHJcbmltcG9ydCB7IEJ1aWxkQ29uZmlnVHMgfSBmcm9tIFwiLi4vX2NvbmZpZy9CdWlsZENvbmZpZ1RzXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi4vX2NvbmZpZy9fVGVzdENvbnN0XCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBuZXcgSW5pdEVtcHR5U2NyZWVuVUlDb24oKTtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG5ldyBJbml0TG9hZFVJQ29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWIneWni+WMluS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEJlZm9yZSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluW5s+WPsOOAguOAguOAglxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWIhuWMheWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRTdWJwYWNrYWdlTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v6I635Y+WZmd1aeWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdENvbmZpZ0xvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpeWFtuS7lui1hOa6kOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbG9hZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YiG5YyF5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0U3VicGFja2FnZUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpWZndWnnmoTmiYDmnInliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+WFiOe7keWumuaJgOaciXVpXHJcbiAgICAgICAgdGhpcy5GR1VJQmluZGVyKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0RW1wdHlTY3JlZW4nLCB1bmRlZmluZWQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0RW1wdHlTY3JlZW4pKSk7Ly/nmb3lsY91aeWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRMb2FkJywgMCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRMb2FkKSkpOy8v5Yqg6L2955WM6Z2i5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUJhZycpKTsvL+WOn+WMhe+8jOmAmuW4uOS4uui1hOa6kOWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVDb21tb24nKSk7Ly/lhazlhbHljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lTWFpbicsIDApKTsvL+S4u+WMhVxyXG4gICAgfVxyXG4gICAgLy9mZ3Vp57uR5a6aXHJcbiAgICBwcml2YXRlIEZHVUlCaW5kZXIoKSB7XHJcbiAgICAgICAgSW5pdEVtcHR5U2NyZWVuQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBJbml0TG9hZEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZUNvbW1vbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZU1haW5CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5ZGR1VJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGdldEZHVUlMb2FkSXRlbXMoX25hbWU6IHN0cmluZywgX2F0bGlhc0NvdW50PzogbnVtYmVyLCBfY29tQmFjaz86IExheWEuSGFuZGxlcik6IFJlc0xvYWRJdGVtIHtcclxuICAgICAgICBsZXQgX2ZndWlSZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgLy/ms6jlhaXljIXot6/lvoRcclxuICAgICAgICBuZXcgRkdVSVBhY2soRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSksIF9hdGxpYXNDb3VudCkuZ2V0UmVzVVJMKF9mZ3VpUmVzKTtcclxuICAgICAgICAvL+WIm+W7uuWKoOi9vemhuVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzTG9hZEl0ZW0oX2ZndWlSZXMsIEVSZXNMb2FkTW9kZWwuRDIsIF9uYW1lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mt7vliqDljIVcclxuICAgICAgICAgICAgdGhpcy5hZGRGR1VJUGFja2FnZShfbmFtZSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIC8v5re75Yqg5YyFXHJcbiAgICBwdWJsaWMgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgJ1NjZW5lJ1xyXG4gICAgICAgIF0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a65LT4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+eZveWxj+aYvuekulxyXG4gICAgcHJpdmF0ZSBpbml0RW1wdHlTY3JlZW4oKSB7XHJcbiAgICAgICAgLy/mmL7npLrnmb3lsY91aVxyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5TaG93KCk7XHJcbiAgICB9XHJcbiAgICAvL+WKoOi9veaYvuekulxyXG4gICAgcHJpdmF0ZSBpbml0TG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgICAgIC8v5pi+56S65Yqg6L29dWlcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5ri45oiP5Yqg6L296L+b5bqmLT4nLCBfaSk7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pbml0TG9hZFVJQ29uICYmIHRoaXMubV9pbml0TG9hZFVJQ29uLmlmU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5zZXRQbGFuKF9pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQ29tKCkge1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwic3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIOeZveWxj3Vp5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RW1wdHlTY3JlZW5VSUNvbiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGluaXRFbXB0eVNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgdWlDcmVhdGU6IEZHVUlfRW1wdHlTY3JlZW5VSSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfSA9IHtcclxuICAgICAgICAgICAgaW5pdEVtcHR5U2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICB1aUNyZWF0ZTogRkdVSV9pbml0TG9hZFVJLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgLy/mmL7npLrlm57osINcclxuICAgIHByb3RlY3RlZCBfT25TaG93KCkge1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgbGV0IF91aTogRkdVSV9pbml0TG9hZFVJID0gdGhpcy5nZXRVSTxGR1VJX2luaXRMb2FkVUk+KCdpbml0RW1wdHlTY3JlZW4nKTtcclxuICAgICAgICBfdWkubV90ZXh0X2xvZ28udGV4dCA9IF9NYWluQ29uZmlnLlpITmFtZTtcclxuICAgICAgICBfdWkubV90ZXh0X3YudGV4dCA9IF9NYWluQ29uZmlnLlZlcnNpb25zO1xyXG4gICAgICAgIF91aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIF91aS5tX3RleHRfZXhwbGFpbi50ZXh0ID0gX01haW5Db25maWcuVGVhbTtcclxuICAgICAgICBfdWkubV90ZXh0X2xheWFfdi50ZXh0ID0gTGF5YS52ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICBfaSAqPSAxMDA7XHJcbiAgICAgICAgbGV0IF91aTogRkdVSV9pbml0TG9hZFVJID0gdGhpcy5nZXRVSTxGR1VJX2luaXRMb2FkVUk+KCdpbml0RW1wdHlTY3JlZW4nKTtcclxuICAgICAgICBfdWkubV9wcm9ncmVzcy52YWx1ZSA9IF9pO1xyXG4gICAgICAgIF91aS5tX2xvYWRpbmdfcHJvZ3Jlc3MudGV4dCA9IE1hdGguZmxvb3IoX2kpICsgJyAlJztcclxuICAgIH1cclxufSIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG5pbXBvcnQgeyBfU2NlbmVOb2RlQ29uZmlnIH0gZnJvbSBcIi4vX1NjZW5lTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IHsgX1Rlc3RDb25maWcgfSBmcm9tIFwiLi9fVGVzdENvbmZpZ1wiO1xuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuL19UZXN0Q29uc3RcIjtcblxuLyoqXG4qIOaehOW7uuWFqOmDqOmFjee9ruihqFxuKiAhIOiHquWKqOWvvOWHulxuKi9cbmV4cG9ydCBjbGFzcyBCdWlsZENvbmZpZ1RzIHtcbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInnmoTphY3nva7ooajlhoXlrrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbENvbmZpZygpOiBhbnlbXSB7XG4gICAgICAgIGxldCBjb25maWdzOiBhbnlbXSA9IFtdO1xuICAgICAgICBjb25maWdzLnB1c2goX1NjZW5lTm9kZUNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ3MucHVzaChfVGVzdENvbmZpZyk7XG4gICAgICAgIGNvbmZpZ3MucHVzaChfVGVzdENvbnN0KTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgfVxufVxuIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1NjZW5lTm9kZUNvbmZpZyBjb25maWfphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1NjZW5lTm9kZUNvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5YWz5Y2haWRb5b+F6KaBXSAqL1xuICAgICAgICBpZDogYW55O1xuICAgICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cbiAgICAgICAgc2NlbmU6IHN0cmluZztcbiAgICAgICAvKiog6IqC54K55ZCN5a2X5YiX6KGoICovXG4gICAgICAgIHNjZW5lTmFtZTogc3RyaW5nO1xuICAgIH1cbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhczogX1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZVtdID0gW107XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1NjZW5lTm9kZUNvbmZpZy5qc29uJztcbn1cbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfVGVzdENvbmZpZyBjb25maWfphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25maWcge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbmZpZyc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOaVsOWAvO+8jOS4jeeuoeS7gOS5iOWAvO+8jOmDveS8mui9rOaIkOWtl+espuS4siAqL1xuICAgICAgICBuOiBudW1iZXI7XG4gICAgICAgLyoqIOWtl+espuS4su+8jOS4jeeuoeaYr+S7gOS5iOWAvO+8jOacgOWQjumDveS8mui9rOaIkOWtl+espuS4siAqL1xuICAgICAgICBzOiBzdHJpbmc7XG4gICAgICAgLyoqIOW4g+WwlOWAvO+8jOS4jeeuoeS7gOS5iOWAvOmDveS8mui9rOW4g+WwlOWAvCAqL1xuICAgICAgICBiOiBib29sZWFuO1xuICAgIH1cbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhczogX1Rlc3RDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uZmlnLmpzb24nO1xufVxuICAgICIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9UZXN0Q29uc3QgY29uc3TphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25zdCB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uc3QnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UgKi9cbiAgICAgICAgbjogbnVtYmVyO1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UyICovXG4gICAgICAgIG4yOiBudW1iZXI7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlTMgKi9cbiAgICAgICAgbjM6IG51bWJlcjtcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VICovXG4gICAgICAgIHM6IHN0cmluZztcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMiAqL1xuICAgICAgICBzMjogc3RyaW5nO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UzICovXG4gICAgICAgIHMzOiBzdHJpbmc7XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xuICAgICAgICBiOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UxICovXG4gICAgICAgIGIyOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UyICovXG4gICAgICAgIGIzOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cbiAgICAgICAgYjQ6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTMgKi9cbiAgICAgICAgYjU6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTQgKi9cbiAgICAgICAgYjY6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTUgKi9cbiAgICAgICAgYjc6IGJvb2xlYW47XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlSAqL1xuICAgICAgICBvOiBhbnk7XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlTEgKi9cbiAgICAgICAgbzI6IGFueTtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMiAqL1xuICAgICAgICBvMzogYW55O1xuICAgIH1cbiAgICAvKiogY29uc3TmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGE6IF9UZXN0Q29uc3QuRGF0YVR5cGUgPSBudWxsO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uc3QuanNvbic7XG59XG4gICAgIiwiaW1wb3J0IEdhbWVNYWluIGZyb20gXCIuL0dhbWUvR2FtZU1haW5cIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgVE1haW4gZnJvbSBcIi4vX1QvVE1haW5cIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdFx0Ly9cclxuXHRcdC8qKiDmraPlvI/lvIDlp4sgIzI4ZGY5OSAqL1xyXG5cdFx0Ly9cclxuXHRcdC8v5qGG5p625YWl5Y+jXHJcblx0XHRuZXcgVE1haW4oKTtcclxuXHRcdC8v5ri45oiP5YWl5Y+jXHJcblx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7IiwiaW1wb3J0IHsgSUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29tL0lDb25maWdEYXRhXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCIuLi9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7rphY3nva7ooajliJfooahcclxuICAgICAqIOWPquaehOW7uu+8jOS4jeWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb25maWdzIOmFjee9ruihqOWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJ1aWxkQ29uZmlncyhfY29uZmlnczogSUJhc2VDb25maWdDb250YWluZXJbXSkge1xyXG4gICAgICAgIGxldCBfdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgZm9yIChsZXQgX28gb2YgX2NvbmZpZ3MpIHtcclxuICAgICAgICAgICAgX3VybCA9IEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTChfby5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgIC8v5aGr5YWF5pWw5o2uXHJcbiAgICAgICAgICAgIHN3aXRjaCAoX28udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbmZpZ0NvbnRhaW5lcikuZGF0YXMgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uc3RDb250YWluZXIpLmRhdGEgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoanNvbuaVsOaNrlxyXG4gICAgICog77yB5rOo5oSP77yM6I635Y+W5LqG6K+l6LWE5rqQ6K+l6LWE5rqQ5bCx5Lya6KKr5Yig6Zmk5o6JXHJcbiAgICAgKiBAcGFyYW0gX3VybCDphY3nva7ooajotYTmupDlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdKc29uRGF0YShfdXJsOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8v6I635Y+W6LWE5rqQXHJcbiAgICAgICAgbGV0IGNvbmZpZ0RhdGE6IElDb25maWdEYXRhID0gUmVzTG9hZC5HZXRSZXMoX3VybCwgdHJ1ZSk7XHJcbiAgICAgICAgLy/muIXnkIbotYTmupDnvJPlrZjlj6rkvb/nlKjkuIDmrKFcclxuICAgICAgICBSZXNMb2FkLkNsZWFyUmVzKF91cmwpO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y6L57ypXHJcbiAgICAgICAgaWYgKGNvbmZpZ0RhdGEuemlwKSB7XHJcbiAgICAgICAgICAgIC8v6Kej5Y6LXHJcbiAgICAgICAgICAgIGxldCBfdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uZmlnRGF0YS5kYXRhID0gSlNPTi5wYXJzZShwYWtvLmluZmxhdGUoY29uZmlnRGF0YS5kYXRhLCB7IHRvOiAnc3RyaW5nJyB9KSk7XHJcbiAgICAgICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgICAgICAvL+WIpOaWreino+WOi+aXtumXtOW3rlxyXG4gICAgICAgICAgICBpZiAoX3RpbWUgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+mFjee9ruihqOino+WOi+aXtumXtOi/h+mVv++8jOWPr+iDveaYr+mFjee9ruihqOaWh+S7tui/h+Wkpy0+JywgX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ0RhdGEuZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu+mFjee9ruihqOWuueWZqOaOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXHJcbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICByZWFkb25seSBmaWxlTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogY29uZmlnIOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnQ29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNruWIl+ihqCAqL1xyXG4gICAgZGF0YXM6IGFueVtdO1xyXG59XHJcblxyXG4vKipcclxuICogY29uc3Qg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdENvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE6IGFueTtcclxufSIsIi8qKlxyXG4gKiDmiZPljbDlj7DluLjnlKjphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVDb25zdCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZ1N0eWxlOiBzdHJpbmcgPSBgXHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkOTNhYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZ0xpZ2h0U3R5bGU6IHN0cmluZyA9IGBcclxuICAgICAgICBjb2xvcjogIzUyNTc1ZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29tU3R5bGU6IHN0cmluZyA9IGBcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRlNDk4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2FyblN0eWxlOiBzdHJpbmcgPSBgXHJcbiAgICAgICAgY29sb3I6ICM1YzZlMDY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTkzMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVycm9yU3R5bGU6IHN0cmluZyA9IGBcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMwMTAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhdGZvcm1TdHlsZTogc3RyaW5nID0gYFxyXG4gICAgICAgIGNvbG9yOiAjNTI1NzVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2ZkZmQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGA7XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVDb25zdCBmcm9tIFwiLi9Db25zb2xlQ29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmiZPljbDlj7DmianlsZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFeCB7XHJcbiAgICAvKipcclxuICAgICAqIOaJk+WNsOaZrumAmua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2coLi4uYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCVjICR7YW55fWAsIENvbnNvbGVDb25zdC5sb2dTdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPljbDorablkYrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgd2FybiguLi5hbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJWMgJHthbnl9YCwgQ29uc29sZUNvbnN0Lndhcm5TdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPljbDplJnor6/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZXJyb3IoLi4uYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCVjICR7YW55fWAsIENvbnNvbGVDb25zdC5lcnJvclN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyogLS0tLS0tLS0tLSAqLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nKC4uLmFueSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIFtgJWMgJHthbnl9IGAsIENvbnNvbGVDb25zdC5sb2dTdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrovbvmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZ0xpZ2h0KC4uLmFueSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIFtgJWMgJHthbnl9IGAsIENvbnNvbGVDb25zdC5sb2dMaWdodFN0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaIkOWKn+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrQ29tKC4uLmFueSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIFtgJWMgJHthbnl9IGAsIENvbnNvbGVDb25zdC5jb21TdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XorablkYrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja1dhcm4oLi4uYW55KSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gW2AlYyDorablkYo6ICR7YW55fSBgLCBDb25zb2xlQ29uc3Qud2FyblN0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijhemUmeivr+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrRXJyb3IoLi4uYW55KSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gW2AlYyDplJnor686ICR7YW55fSBgLCBDb25zb2xlQ29uc3QuZXJyb3JTdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XlubPlj7Dmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja1BsYXRmb3JtKC4uLmFueSkge1xyXG4gICAgICAgIHJldHVybiBbYCVjIOW5s+WPsDogJHthbnl9IGAsIENvbnNvbGVDb25zdC5wbGF0Zm9ybVN0eWxlXTtcclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSS9GR1VJUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAyZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDJNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiogZmd1aeagueeuoeeQhuWZqCAqL1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFRkdVSUNvbnN0IH0gZnJvbSBcIi4vRUZHVUlDb25zdFwiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcbmltcG9ydCBGR3VpRGF0YSBmcm9tIFwiLi9GR3VpRGF0YVwiO1xyXG5pbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUlSb290TWFuYWdlclwiO1xyXG5pbXBvcnQgRkdVSVQgZnJvbSBcIi4vRkdVSVRcIjtcclxuaW1wb3J0IElVSUNyZWF0ZSBmcm9tIFwiLi9JVUlDcmVhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeaOp+WItuWZqOWfuuexuyjnlKjmnaXmjqfliLZVSeeVjOmdoilcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKiog5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDojrflj5bllK/kuIDplK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IHN5bWJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwcml2YXRlIG1fcm9vdFVJOiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdFVJKCk6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yb290VUk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWcqOmakOiXj+aXtua4heeQhuaOiXVp77yM6buY6K6k5Li6dHJ1ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogVUnlsYLnuqfnsbvlnovvvIzlv4XpobvlnKjliJ3lp4vljJbml7borr7nva4gKi9cclxuICAgIHByb3RlY3RlZCBfbGF5ZXI6IEVVSUxheWVyID0gRVVJTGF5ZXIuUGFuZWw7XHJcblxyXG4gICAgLyoqIHVp5bGC57qnICovXHJcbiAgICBwdWJsaWMgZ2V0IGxheWVyKCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTaG93KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6dWlcclxuICAgIHByaXZhdGUgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmoLnoioLngrl1aVxyXG4gICAgICAgIHRoaXMubV9yb290VUkgPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmdldExheWVyVUkodGhpcy5fbGF5ZXIpLmFkZENoaWxkKHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gdGhpcy5tX3Jvb3RVSS5hZGRDaGlsZCh0aGlzLl9VSXNbX2ldLnVpQ3JlYXRlLmNyZWF0ZUluc3RhbmNlKCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aVxyXG4gICAgICogQHBhcmFtIF9uYW1lIHVp5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4oX25hbWU6IHN0cmluZyk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUlzW19uYW1lXS51aSBhcyBVSTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekulVJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWFtuS7luWPguaVsO+8jOS8muS8oOWIsOaYvuekuuS5i+WQjueahOWbnuiwg+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2hvdyguLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fT25zaG93QmVmb3JlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJIHx8IHRoaXMubV9yb290VUkuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAvL+WIm+W7unVpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7liLDlvZPliY3lsYLnuqfpobblsYLmmL7npLpcclxuICAgICAgICBGR1VJVC5zZXRVSVRvcFNob3codGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgLy/miYvliqjmm7TmlrDkuIDmrKFcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICAvL+ebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgLy/mkq3mlL7liqjnlLtcclxuICAgICAgICB0aGlzLnN0b3BBbmkoRUZHVUlDb25zdC5oaWRlQW5pKTsvL+WFiOWBnOatoumakOiXj+WKqOeUu1xyXG4gICAgICAgIHRoaXMucGxheUFuaShFRkdVSUNvbnN0LnNob3dBbmksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5fT25TaG93QW5pQ29tLCAuLi5wYXIpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX09uU2hvdyguLi5wYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmL7npLrkuYvliY3osIPnlKggKi9cclxuICAgIHByb3RlY3RlZCBfT25zaG93QmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgLyoqIOaYvuekuuS5i+WQjuiwg+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9PblNob3coLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICAvKiog5pi+56S65Yqo55S75a6M5oiQ5ZCO6LCD55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX09uU2hvd0FuaUNvbSguLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1xyXG4gICAgICogQHBhcmFtIF9pZkNsZWFyIOaYr+WQpua4heeQhlxyXG4gICAgICogQHBhcmFtIHBhciDlhbbku5blj4LmlbDvvIzkvJrkvKDliLDpmpDol4/nmoTlm57osIPkuK1cclxuICAgICAqL1xyXG4gICAgcHVibGljIEhpZGUoX2lmQ2xlYXI6IGJvb2xlYW4gPSB0aGlzLl9pZkNsZWFyLCAuLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9PbkhpZGVCZWZvcmUocGFyKTtcclxuICAgICAgICBsZXQgX2hpZGVGOiBGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKF9pZkNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fcm9vdFVJLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8v5riF55CG5byV55SoXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WPlua2iOebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8v5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5zdG9wQW5pKEVGR1VJQ29uc3Quc2hvd0FuaSk7Ly/lhYjlgZzmraLmmL7npLrliqjnlLtcclxuICAgICAgICB0aGlzLnBsYXlBbmkoRUZHVUlDb25zdC5oaWRlQW5pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgX2hpZGVGKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX09uSGlkZUFuaUNvbSguLi5wYXIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX09uSGlkZShwYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDpmpDol4/kuYvliY3osIPnlKggKi9cclxuICAgIHByb3RlY3RlZCBfT25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgLyoqIOmakOiXj+S5i+WQjuiwg+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9PbkhpZGUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICAvKiog6ZqQ6JeP5Yqo55S75a6M5oiQ5ZCO5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX09uSGlkZUFuaUNvbSguLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKiog5pu05paw5aSn5bCPICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgLy/moLnmja7lrZB1aeaQuuW4pueahOaVsOaNrumAgumFjeWxj+W5leWkp+Wwj1xyXG4gICAgICAgIGxldCBfZGF0YTogRkd1aURhdGE7XHJcbiAgICAgICAgbGV0IF93aWR0aDogbnVtYmVyID0gTGF5YS5zdGFnZS53aWR0aDtcclxuICAgICAgICBsZXQgX2hlaWdodDogbnVtYmVyID0gTGF5YS5zdGFnZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gdGhpcy5fVUlzW19pXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoIV9kYXRhIHx8ICFfZGF0YS5pZlVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWSgwLCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGggLSBfZGF0YS5sZWZ0IC0gX2RhdGEucmlnaHQsIF9oZWlnaHQgLSBfZGF0YS5ib3R0b20gLSBfZGF0YS50b3ApO1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKF9kYXRhLmxlZnQsIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Li05pe25pyf57qmXHJcbiAgICBwcml2YXRlIGFuaVByb21pc2U6IFByb21pc2U8YW55PjtcclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Yqo5pWI5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5pKt5pS+5a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxheUFuaShfbmFtZTogc3RyaW5nLCBfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGxldCBfcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIC8v6YGN5Y6G5omA5pyJdWnlubbmt7vliqDmnJ/nuqbliJfooahcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgX3Byb21pc2VzLnB1c2gobmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9VSXNbX2ldLnVpW19uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICYmICh0aGlzLl9VSXNbX2ldLnVpW19uYW1lXSBhcyBmZ3VpLlRyYW5zaXRpb24pLnBsYXkoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCByKSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzmnJ/nuqZcclxuICAgICAgICB0aGlzLmFuaVByb21pc2UgPSBQcm9taXNlLmFsbChfcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouWKqOaViFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWKqOaViOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0b3BBbmkoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8v5YGc5q2i5omA5pyJ5Yqo55S75pyf57qmXHJcbiAgICAgICAgLy8gdGhpcy5hbmlQcm9taXNlICYmIHRoaXMuYW5pUHJvbWlzZTtcclxuICAgICAgICAvL+mBjeWOhuaJgOaciXVp5bm25re75Yqg5pyf57qm5YiX6KGoXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWlcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuX1VJc1tfaV0udWlbX25hbWVdXHJcbiAgICAgICAgICAgICAgICAmJiAodGhpcy5fVUlzW19pXS51aVtfbmFtZV0gYXMgZmd1aS5UcmFuc2l0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G7dWnmjqfliLblmajnsbvlnovmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VVSUNvbkRlZmluZXMge1xyXG4gICAgLyoqIHVp5Yib5bu65ZmoICovXHJcbiAgICB1aUNyZWF0ZTogSVVJQ3JlYXRlO1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YT86IEZHdWlEYXRhO1xyXG4gICAgLyoqIHVpICovXHJcbiAgICB1aT86IGZndWkuR0NvbXBvbmVudDtcclxufSIsIi8qKlxyXG4gKiBmZ3Vp6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFRkdVSUNvbnN0IHtcclxuICAgIC8qKiDmmL7npLrliqjmlYggKi9cclxuICAgIHNob3dBbmkgPSAnbV9fc2hvdycsXHJcbiAgICAvKiog6ZqQ6JeP5Yqo5pWIICovXHJcbiAgICBoaWRlQW5pID0gJ21fX2hpZGUnLFxyXG59IiwiLyoqXHJcbiAqIFVJ5YiG5bGCLOaMiemhuuW6j+aYvuekulxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVJTGF5ZXIge1xyXG4gICAgLyoqIOiDjOaZr+mhtemdoiAqL1xyXG4gICAgQmcgPSAnQmcnLFxyXG4gICAgLyoqIOS4u+eVjOmdoiAg5rC46L+c5a2Y5ZyoICovXHJcbiAgICBNYWluID0gXCJNYWluXCIsXHJcbiAgICAvKiog6Z2i5p2/ICDlj6/ku6XmnInlvojlpJogKi9cclxuICAgIFBhbmVsID0gXCJQYW5lbFwiLFxyXG4gICAgLyoqIOW8ueeqlyAqL1xyXG4gICAgUG9wdXAgPSBcIlBvcHVwXCIsXHJcbiAgICAvKiog6YGT5YW3ICovXHJcbiAgICBQcm9wID0gJ1Byb3AnLFxyXG4gICAgLyoqIOWwj+mDqOS7tiAqL1xyXG4gICAgVGlwID0gXCJUaXBcIixcclxuICAgIC8qKiDmmoLlgZwgKi9cclxuICAgIFBhdXNlID0gJ1BhdXNlJyxcclxuICAgIC8qKiDorr7nva4gKi9cclxuICAgIFNldCA9ICdTZXQnLFxyXG4gICAgLyoqIOacgOmrmCAqL1xyXG4gICAgVG9wID0gJ1RvcCcsXHJcbiAgICAvKiog5Yqg6L296aG16Z2iICovXHJcbiAgICBMb2FkaW5nID0gJ0xvYWRpbmcnLFxyXG4gICAgLyoqIOWOn+eUnyAqL1xyXG4gICAgTmF0aXZlID0gJ05hdGl2ZScsXHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICogVUnljIXnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGR1VJUGFjayB7XHJcbiAgICAvLyDljIXot6/lvoRcclxuICAgIHByaXZhdGUgcGFja1BhdGg6IHN0cmluZztcclxuICAgIC8vIOWFtuS7lui1hOa6kOaVsOmHj1xyXG4gICAgcHJpdmF0ZSBhdGxpYXNDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YyFXHJcbiAgICAgKiBAcGFyYW0gX3BhY2tVcmwg5YyF5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX2F0bGlhc0NvdW50IOWbvumbhuaVsOmHj1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcGFja1VybDogc3RyaW5nLCBfYXRsaWFzQ291bnQ6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrUGF0aCA9IF9wYWNrVXJsO1xyXG4gICAgICAgIHRoaXMuYXRsaWFzQ291bnQgPSBfYXRsaWFzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICB0aGlzLmdldFJlc1VSTChfdXJscyk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDJEQXN5bmMoX3VybHMsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOaciei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHVybHMg6L6T5Ye65pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZXNVUkwodXJsczogYW55W10pIHtcclxuICAgICAgICAvL+WKoOWFpeWMheWQjVxyXG4gICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArICcuJyArIF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSk7XHJcbiAgICAgICAgLy/liqDovb3nurnnkIbpm4ZcclxuICAgICAgICBpZiAodGhpcy5hdGxpYXNDb3VudCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMC5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuYXRsaWFzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwX1wiICsgaSArIFwiLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBGR1VJIOagueeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVJvb3RNYW5hZ2VyIHtcclxuICAgIC8vVUnlsYLnuqd1aeWIl+ihqFxyXG4gICAgcHVibGljIHN0YXRpYyBsYXllclVJTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IGZndWkuR0NvbXBvbmVudCB9O1xyXG5cclxuICAgIC8vIOiOt+WPluafkOS4gOWxglVJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExheWVyVUkobGF5ZXJUeXBlOiBFVUlMYXllcik6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllclVJTGlzdFtsYXllclR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvLyDorr7nva7ljIXlkI3lkI7nvIBcclxuICAgICAgICBmZ3VpLlVJQ29uZmlnLnBhY2thZ2VGaWxlRXh0ZW5zaW9uID0gX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb247XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcbiAgICAgICAgLy/mt7vliqBGR1VJ5qC56IqC54K55oyJ6aG65bqP5pi+56S6XHJcbiAgICAgICAgdGhpcy5sYXllclVJTGlzdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVVSUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJVSUxpc3RbRVVJTGF5ZXJbX2ldXSA9IGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChuZXcgZmd1aS5HQ29tcG9uZW50KCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogZmd1aSDlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlUIHtcclxuICAgIC8qKiB1aeWxgue6p2tleSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlMYXllcktleTogc3ltYm9sID0gU3ltYm9sKCdVSUxheWVyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeWxgue6p++8jOmZpOS6hmZndWnmoLnnrqHnkIblmajlm57osIPnlKjvvIzlhbbku5bnmoTlnLDmlrnor7fkuI3opoHosIPnlKhcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyIOWxgue6pyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50LCBfbGF5ZXI6IEVVSUxheWVyKSB7XHJcbiAgICAgICAgX3VpW3RoaXMuVUlMYXllcktleV0gPSBfbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aeWxgue6p1xyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEByZXR1cm5zIHVp5bGC57qnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gX3VpW3RoaXMuVUlMYXllcktleV0gYXMgRVVJTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aemhtuWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJVG9wU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5aSn55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWF4KF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp5bqV5bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlEb3duU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5bCP55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWluKF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyIC0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY2VuZVJvb3RNYW5hZ2VyIGZyb20gXCIuL3NjZW5lL1NjZW5lUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAzZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiog5Zy65pmv5qC5566h55CG5ZmoICovXHJcbiAgICAgICAgU2NlbmVSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Zy65pmv5qC5566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVJvb3RNYW5hZ2VyIHtcclxuICAgIC8qKiAzZOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9TY2VuZTNEOiBMYXlhLlNjZW5lM0Q7XHJcbiAgICAvKiog5pGE5YOP5py6ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0NhbWVyYTogTGF5YS5DYW1lcmE7XHJcbiAgICAvKiog54Gv5YWJICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0xpZ2h0OiBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG5cclxuICAgIC8qKiDojrflj5YgM2TlnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNjZW5lM0QoKTogTGF5YS5TY2VuZTNEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX1NjZW5lM0Q7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOaRhOWDj+acuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ2FtZXJhKCk6IExheWEuQ2FtZXJhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0NhbWVyYTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg54Gv5YWJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMaWdodCgpOiBMYXlhLkRpcmVjdGlvbkxpZ2h0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0xpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRCA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCkgYXMgTGF5YS5TY2VuZTNEO1xyXG4gICAgICAgIHRoaXMubV9DYW1lcmEgPSBuZXcgTGF5YS5DYW1lcmE7XHJcbiAgICAgICAgdGhpcy5tX0xpZ2h0ID0gbmV3IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0NhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0xpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgICAgICAvL+aJp+ihjOWKoOi9veS5i+WJjeeahOeUn+WRveWRqOacn1xyXG4gICAgICAgIHRoaXMubG9hZEJlZm9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5byA5aeL5Yqg6L295ri45oiP5Yid5aeL5YyW6LWE5rqQJykpO1xyXG4gICAgICAgIC8v6I635Y+W5Yqg6L296aG5XHJcbiAgICAgICAgbGV0IF9yZXNMb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSB0aGlzLmdldExvYWRJdGVtcygpO1xyXG4gICAgICAgIC8v5byC5q2l5Yqg6L295Yqg6L296aG5XHJcbiAgICAgICAgUmVzTG9hZEdyb3VwLmxvYWRBc3luYyhfcmVzTG9hZEl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFBsYW4oaSk7XHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5sb2FkSXRlbXNDb20sIHVuZGVmaW5lZCwgZmFsc2UpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0NvbSgn5ri45oiP5Yqg6L295a6M5oiQJykpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbSgpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Yqg6L295LmL5YmNXHJcbiAgICAgKiDlj6/ku6XlnKjov5nph4zliJ3lp4vljJbkuIDkupvkuJzopb9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRCZWZvcmUoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWKoOi9vemhueWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFBsYW4oX2k6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQ29tKCkgeyB9XHJcbn0iLCIvKipcclxuICog5YWz6ZSu6LWE5rqQ54K55ZCN5a2X5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFS2V5UmVzTmFtZSB7XHJcbiAgICAvKiog5qC555uu5b2VICovXHJcbiAgICBSb290UmVzID0gJ3JlcycsXHJcbiAgICAvKiog6YWN572u6KGo55uu5b2VICovXHJcbiAgICBDb25maWdKc29uID0gJ0NvbmZpZ0pzb24nLFxyXG4gICAgLyoqIOWtl+S9k+ebruW9lSAqL1xyXG4gICAgRm9udCA9ICdGb250JyxcclxuICAgIC8qKiBGR1VJ6LWE5rqQ55uu5b2VICovXHJcbiAgICBGR1VJID0gJ0ZHVUknLFxyXG4gICAgLyoqIOWFs+WNoemFjee9ruihqOebruW9lSAqL1xyXG4gICAgU2NlbmVKc29uID0gJ1NjZW5lSnNvbicsXHJcbiAgICAvKiog5YW25a6D55uu5b2VICovXHJcbiAgICBPdGhlciA9ICdPdGhlcicsXHJcbiAgICAvKiogaWNvbuebruW9lSAqL1xyXG4gICAgaWNvbiA9ICdpY29uJyxcclxuICAgIC8qKiBpbWfnm67lvZUgKi9cclxuICAgIGltZyA9ICdpbWcnLFxyXG4gICAgLyoqIOmfs+S5kOaWh+S7tuebruW9lSAqL1xyXG4gICAgbXVzaWMgPSAnbXVzaWMnLFxyXG4gICAgLyoqIOmfs+aViOaWh+S7tuebruW9lSAqL1xyXG4gICAgc291bmQgPSAnc291bmQnLFxyXG4gICAgLyoqIOearuiCpOaWh+S7tuebruW9lSAqL1xyXG4gICAgc2tpbiA9ICdza2luJyxcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gJy4vRUtleVJlc05hbWUnO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tICcuL0tleVJlc01hbmFnZXInO1xyXG4vKipcclxuICog5b+F6KaB55qE5ri45oiP6LWE5rqQ6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFc3NlbnRpYWxSZXNVcmxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFs+WNoemFjee9ruaWh+S7tlxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lQ29uZmlnVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5TY2VuZUpzb24pICsgX25hbWUgKyAnLmpzb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoSnNvbuaWh+S7tlJVTFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOmFjee9ruihqOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbmZpZ0pzb25VUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24pICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGR1VJ5YyFXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YyF5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSVBhY2tVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZHVUkpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfkvZPlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlrZfkvZPlkI3lrZfvvIzliqDlkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGb250VVJMKF9uYW1lKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRm9udCkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJgOaciemihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FsbFNjZW5lUHJlZmFic05hbWVzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLy/pooTliLbkvZPlnLrmma/nvJPlrZhcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWJzU2NlbmVDYWNoZToge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICog6aKE5Yi25L2T6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiIOmihOWItuS9k+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFByZWZhYlVSTChwcmVmYWI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/lhYjlnKjnvJPlrZjkuK3mn6Xmib7lnLrmma/lkI3lrZdcclxuICAgICAgICBpZiAodGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWVbdGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXV0pICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6K+l6aKE5Yi25L2T5Zyo5ZOq5Liq5Zy65pmv5Lit6KKr5a+85Ye655qEXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXS5pbmRleE9mKCdAJyArIHByZWZhYiArICdAJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdID0gX2k7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lW19pXSkgKyAnQ29udmVudGlvbmFsLycgKyBwcmVmYWIgKyAnLmxoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Zyo5Zy65pmv5om+5Yiw6aKE5Yi25L2TJywgcHJlZmFiLCAn5Y+v6IO95piv5rKh5pyJ5a+85Ye65Zy65pmv6aKE5Yi25L2T5YiX6KGo5a+86Ie055qE44CCJykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWIl+ihqOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UmVzTWFuYWdlciB7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBLZXlSZXNNYW5hZ2VyO1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEtleVJlc01hbmFnZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEtleVJlc01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPplK7otYTmupDliJfooahcclxuICAgIHByaXZhdGUgbV9LZXlSZXNMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL+azqOWGjOWFs+mUrui1hOa6kOebruW9lVxyXG4gICAgICAgIHRoaXMubV9LZXlSZXNMaXN0ID0ge1xyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuUm9vdFJlc106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Db25maWdKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5GR1VJXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZHVUkgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5TY2VuZUpzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuU2NlbmVKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRm9udF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Gb250ICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuT3RoZXJdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycsXHJcbiAgICAgICAgICAgIC8v5YW25LuW6Lev5b6EXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pY29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaWNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmltZ106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmltZyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLm11c2ljXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUubXVzaWMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5zb3VuZF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNvdW5kICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc2tpbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNraW4gKyAnLycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1fS2V5UmVzTGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5piv5ZCm5a2Y5Zyo5p+Q5Liq5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZktleVJlcyhfa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PSBfa2V5O1xyXG4gICAgICAgIH0pICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5YWz6ZSu54K56LWE5rqQ55qE6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSZXNVUkwoX2tleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjmgIHmt7vliqDlhbPplK7ot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUruWAvFxyXG4gICAgICogQHBhcmFtIF9zdHJpbmcg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkUmVzVXJsKF9rZXk6IHN0cmluZywgX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV0gPSBfc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfc3RyIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGVkaXRLZXlSZXNMaXN0KF9rZXk6IHN0cmluZywgX3N0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9yZXBsYWNlOiBzdHJpbmcgPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIF9yZXBsYWNlID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5L+u5pS56LWE5rqQ6Lev5b6E5aSx6LSl77yM5rKh5pyJJyArIF9rZXkgKyAn6L+Z5Liq5YWz6ZSu6Lev5b6E77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pu/5o2i5omA5pyJ6LWE5rqQ6Lev5b6E5Lit55qE5YWz6ZSu54K56Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldLnJlcGxhY2UoX3JlcGxhY2UsIF9zdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoQnLCBfcmVwbGFjZSwgJ+abv+aNouaIkCcsIF9zdHIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L2957G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoTliJfooahcclxuICAgICAqIEBwYXJhbSBtb2RlbCDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkKHVybHM6IGFueSwgbW9kZWw6IEVSZXNMb2FkTW9kZWwsIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlhoXlrrnpnIDopoHliqDovb1cclxuICAgICAgICBpZiAoIXVybHMgfHwgKEFycmF5LmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMzpcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRl5pivM0TnmoTmjqXlj6PvvIzpgILnlKjkuo4zROmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIuY3JlYXRlKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQyOlxyXG4gICAgICAgICAgICAgICAgLy9sb2Fk5pivMmTnmoTmjqXlj6PvvIzpgILnlKjkuo4yZOmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EIFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDIsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDNEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQyRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui1hOa6kFxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBub0Nsb25lIOaYr+WQpuS4jeiOt+WPluWFi+mahueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJlcyhyZXNVcmw6IHN0cmluZywgbm9DbG9uZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICBsZXQgZ2V0UmVzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKHJlc1VybCk7XHJcbiAgICAgICAgaWYgKCFnZXRSZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKFwi6LWE5rqQ5bCa5pyq5Yqg6L29XCIsIHJlc1VybCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub0Nsb25lID8gZ2V0UmVzIDogZ2V0UmVzLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIbmjIflrprotYTmupDlnLDlnYDnvJPlrZjjgIJcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJSZXMocmVzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclJlcyhyZXNVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L295qih5byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFUmVzTG9hZE1vZGVsIHtcclxuICAgIC8qKiAzRCDotYTmupAgKi9cclxuICAgIEQzLFxyXG4gICAgLyoqIDJkIOi1hOa6kCAqL1xyXG4gICAgRDIsXHJcbn0iLCJpbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4vUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nu4RcclxuICog6LSf6LSj5aSa5Liq6LWE5rqQ5Yqg6L296aG555qE57uf5LiA5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkR3JvdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovkvZzkuLrlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5rKh5pyJ5Yqg6L296aG5XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5rWF5ou36LSd77yM6Ziy5q2i5rGh5p+T5rqQ5YiX6KGoXHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICAgIC8v5byC5q2l5YiX6KGo6ZW/5bqmXHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAvL+S4gOatpeS4gOatpea2iOi0ueW8guatpeWIl+ihqFxyXG4gICAgICAgIGxldCBfZjogRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25JdGVtOiBSZXNMb2FkSXRlbSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBvbkl0ZW0ubG9hZEFzeW5jKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuaAu+i/m+W6plxyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2xlbmd0aCAtIGl0ZW1zLmxlbmd0aCAtIDEpICsgaSkgLyBfbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuWNleS4quWKoOi9vemhueWKoOi9veWujOaIkOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20uYXJncyA9IFtvbkl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20ucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBfZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzpgJLlvZLliqDovb3mlrnms5VcclxuICAgICAgICBfZigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXN5bmMoaXRlbXM6IFJlc0xvYWRJdGVtW10sIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChpdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcywgX29uSXRlbUNvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVzTG9hZCwgeyBFUmVzTG9hZE1vZGVsIH0gZnJvbSBcIi4vUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vemhuVxyXG4gKiDotJ/otKPkuIDnu4TotYTmupDliJfooajnmoTliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRJdGVtIHtcclxuICAgIC8qKiDliqDovb3mqKHlvI8gKi9cclxuICAgIHByaXZhdGUgbV9sb2FkTW9kZWw6IEVSZXNMb2FkTW9kZWw7XHJcblxyXG4gICAgLyoqIOWKoOi9veWFs+mUrumUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogYW55O1xyXG5cclxuICAgIC8qKiDliqDovb3lrozmiJDlm57osIMgKi9cclxuICAgIHByaXZhdGUgbV9jb21CYWNrOiBMYXlhLkhhbmRsZXI7XHJcblxyXG4gICAgLyoqIOi1hOa6kOi3r+W+hOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3JlczogYW55O1xyXG5cclxuICAgIC8qKiDojrflj5blhbPplK7plK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBfcmVzIOi1hOa6kOWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9tb2RlIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5pe255qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihfcmVzOiBhbnksIF9tb2RlOiBFUmVzTG9hZE1vZGVsLCBfa2V5PzogYW55LCBfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMubV9yZXMgPSBfcmVzO1xyXG4gICAgICAgIHRoaXMubV9sb2FkTW9kZWwgPSBfbW9kZTtcclxuICAgICAgICB0aGlzLm1fa2V5ID0gX2tleTtcclxuICAgICAgICB0aGlzLm1fY29tQmFjayA9IF9jb21CYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9jb21CYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghb25Db21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCB0aGlzLm1fY29tQmFjaywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcInNyYy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBEMk1hbmFnZXIgZnJvbSBcIi4vRDIvRDJNYW5hZ2VyXCI7XHJcbmltcG9ydCBEM01hbmFnZXIgZnJvbSBcIi4vRDMvRDNNYW5hZ2VyXCI7XHJcbmltcG9ydCBfVENvbmZpZyBmcm9tIFwiLi9fVENvbmZpZ1wiO1xyXG5cclxuLyoqIFxyXG4gKiDmoYbmnrblhaXlj6NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRNYWluIHtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICAvL+azqOWFpeahhuaetuS/oeaBr1xyXG4gICAgICAgIHdpbmRvd1tfVENvbmZpZy5OYW1lXSA9IHtcclxuICAgICAgICAgICAgLyoqIOahhuaetumFjee9riAqL1xyXG4gICAgICAgICAgICAuLi5fVENvbmZpZyxcclxuICAgICAgICAgICAgLyoqIGxheWHphY3nva4gKi9cclxuICAgICAgICAgICAgZ2FtZUNvbmZpZzogeyAuLi5HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDpobnnm67phY3nva4gKi9cclxuICAgICAgICAgICAgX21haW5Db25maWc6IHsgLi4uX01haW5Db25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOa4uOaIj+mFjee9riAqL1xyXG4gICAgICAgICAgICBfZ2FtZUNvbmZpZzogeyAuLi5fR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITnp43lkITmoLfnmoTnrqHnkIblmahcclxuICAgICAgICBEM01hbmFnZXIuaW5pdCgpOy8vM0TnrqHnkIblmahcclxuICAgICAgICBEMk1hbmFnZXIuaW5pdCgpOy8vdWnnrqHnkIblmahcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoYbmnrbphY3nva7mlofku7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UQ29uZmlnIHtcclxuICAgIC8qKiDlkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTmFtZTogc3RyaW5nID0gXCJMYXlhTWluaUdhbWVcIjtcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgWkhOYW1lOiBzdHJpbmcgPSBcIkxheWFCb3jlsI/muLjmiI9cIjtcclxuICAgIC8qKiDniYjmnKwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVyc2lvbnM6IHN0cmluZyA9IFwiMC4wLjAuMVwiO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=