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
/* harmony export */   "default": () => (/* binding */ _ConstConfig)
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
/* harmony export */   "default": () => (/* binding */ _GameConfig)
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
/* harmony export */   "default": () => (/* binding */ _MainConfig)
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
/* harmony export */   "default": () => (/* binding */ GameCommonBinder)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameCom)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameCustomsLoading)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameEnd)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameLoading)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameMain)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGamePause)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGamePlay)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameSet)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameStart)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameTestMain)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameTestPlatform)
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
/* harmony export */   "default": () => (/* binding */ FGUI_PGameTestUI)
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
/* harmony export */   "default": () => (/* binding */ GameMainBinder)
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
/* harmony export */   "default": () => (/* binding */ FGUI_EmptyScreenUI)
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
/* harmony export */   "default": () => (/* binding */ InitEmptyScreenBinder)
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
/* harmony export */   "default": () => (/* binding */ FGUI_initLoadUI)
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
/* harmony export */   "default": () => (/* binding */ InitLoadBinder)
/* harmony export */ });
/* harmony import */ var _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class InitLoadBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__.default.URL, _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__.default);
    }
}


/***/ }),

/***/ "./src/FGUI/_Test/FGUI_TestMain.ts":
/*!*****************************************!*\
  !*** ./src/FGUI/_Test/FGUI_TestMain.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FGUI_TestMain)
/* harmony export */ });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class FGUI_TestMain extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("_Test", "TestMain"));
    }
    onConstruct() {
        this.m_text = (this.getChildAt(0));
    }
}
FGUI_TestMain.URL = "ui://hxu4zc9dioo80";


/***/ }),

/***/ "./src/FGUI/_Test/_TestBinder.ts":
/*!***************************************!*\
  !*** ./src/FGUI/_Test/_TestBinder.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _TestBinder)
/* harmony export */ });
/* harmony import */ var _FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_TestMain */ "./src/FGUI/_Test/FGUI_TestMain.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class _TestBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__.default.URL, _FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__.default);
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
/* harmony export */   "default": () => (/* binding */ GameConfig)
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

/***/ "./src/Game/Data/DataManager.ts":
/*!**************************************!*\
  !*** ./src/Game/Data/DataManager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _MainDataProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainDataProxy */ "./src/Game/Data/MainDataProxy.ts");
/* harmony import */ var _SetDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetDataProxy */ "./src/Game/Data/SetDataProxy.ts");
/* harmony import */ var _ShortDataProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShortDataProxy */ "./src/Game/Data/ShortDataProxy.ts");
/* harmony import */ var _SignDataProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignDataProxy */ "./src/Game/Data/SignDataProxy.ts");
/* harmony import */ var _TestDataProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestDataProxy */ "./src/Game/Data/TestDataProxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 数据管理器
 */
let DataManager = class DataManager {
    //
    constructor() { }
    /**
     * 初始化
     */
    init() {
        //初始化所有数据
        _TestDataProxy__WEBPACK_IMPORTED_MODULE_5__.TestDataProxy.instance.initData();
        _MainDataProxy__WEBPACK_IMPORTED_MODULE_1__.MainDataProxy.instance.initData();
        _SetDataProxy__WEBPACK_IMPORTED_MODULE_2__.SetDataProxy.instance.initData();
        _SignDataProxy__WEBPACK_IMPORTED_MODULE_4__.SignDataProxy.instance.initData();
        _ShortDataProxy__WEBPACK_IMPORTED_MODULE_3__.default.instance.initData();
    }
};
DataManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], DataManager);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManager);


/***/ }),

/***/ "./src/Game/Data/MainDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/MainDataProxy.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDataProxy": () => (/* binding */ MainDataProxy)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseLocalDataProxy */ "./src/_T/Data/BaseLocalDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_MainData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/MainData */ "./src/Game/Data/type/MainData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 主要数据代理
 */
let MainDataProxy = class MainDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
};
MainDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateDataTemplate(_type_MainData__WEBPACK_IMPORTED_MODULE_3__.default),
    __metadata("design:paramtypes", [])
], MainDataProxy);



/***/ }),

/***/ "./src/Game/Data/SetDataProxy.ts":
/*!***************************************!*\
  !*** ./src/Game/Data/SetDataProxy.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetDataProxy": () => (/* binding */ SetDataProxy)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseLocalDataProxy */ "./src/_T/Data/BaseLocalDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_SetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/SetData */ "./src/Game/Data/type/SetData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 设置数据代理
 */
let SetDataProxy = class SetDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
};
SetDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateDataTemplate(_type_SetData__WEBPACK_IMPORTED_MODULE_3__.default),
    __metadata("design:paramtypes", [])
], SetDataProxy);



/***/ }),

/***/ "./src/Game/Data/ShortDataProxy.ts":
/*!*****************************************!*\
  !*** ./src/Game/Data/ShortDataProxy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseShortDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseShortDataProxy */ "./src/_T/Data/BaseShortDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_ShortData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/ShortData */ "./src/Game/Data/type/ShortData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 临时数据
 */
let ShortDataProxy = class ShortDataProxy extends src_T_Data_BaseShortDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
};
ShortDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateDataTemplate(_type_ShortData__WEBPACK_IMPORTED_MODULE_3__.default),
    __metadata("design:paramtypes", [])
], ShortDataProxy);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortDataProxy);


/***/ }),

/***/ "./src/Game/Data/SignDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/SignDataProxy.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignDataProxy": () => (/* binding */ SignDataProxy)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseLocalDataProxy */ "./src/_T/Data/BaseLocalDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_SignData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/SignData */ "./src/Game/Data/type/SignData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 签到数据代理
 */
let SignDataProxy = class SignDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
};
SignDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateDataTemplate(_type_SignData__WEBPACK_IMPORTED_MODULE_3__.default),
    __metadata("design:paramtypes", [])
], SignDataProxy);



/***/ }),

/***/ "./src/Game/Data/TestDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/TestDataProxy.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataProxy": () => (/* binding */ TestDataProxy)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseLocalDataProxy */ "./src/_T/Data/BaseLocalDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_TestData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/TestData */ "./src/Game/Data/type/TestData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 测试数据代理
 */
let TestDataProxy = class TestDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
    //
    _initData() {
        //
    }
};
TestDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateDataTemplate(_type_TestData__WEBPACK_IMPORTED_MODULE_3__.default),
    __metadata("design:paramtypes", [])
], TestDataProxy);



/***/ }),

/***/ "./src/Game/Data/type/MainData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/MainData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainData)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 主要数据
 */
class MainData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__.default {
}


/***/ }),

/***/ "./src/Game/Data/type/SetData.ts":
/*!***************************************!*\
  !*** ./src/Game/Data/type/SetData.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetData)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 设置数据
 */
class SetData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super(...arguments);
        /** 是否打开音效 */
        this.ifOpenSound = true;
        /** 是否打开背景音乐 */
        this.ifOpenMusic = true;
        /** 是否开启震动 */
        this.ifOpenVibration = true;
    }
}


/***/ }),

/***/ "./src/Game/Data/type/ShortData.ts":
/*!*****************************************!*\
  !*** ./src/Game/Data/type/ShortData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortData)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 临时数据
 */
class ShortData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__.default {
}


/***/ }),

/***/ "./src/Game/Data/type/SignData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/SignData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignData)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 签到数据
 */
class SignData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__.default {
}


/***/ }),

/***/ "./src/Game/Data/type/TestData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/TestData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestData)
/* harmony export */ });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 测试数据
 */
class TestData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super(...arguments);
        this.number = 0;
        this.string = 'string';
        this.boolean = true;
        this.array = [];
        this.object = {
            a: 1,
            b: 'b',
            c: true,
        };
    }
}


/***/ }),

/***/ "./src/Game/GameMain.ts":
/*!******************************!*\
  !*** ./src/Game/GameMain.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameMain)
/* harmony export */ });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Data_DataManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/DataManager */ "./src/Game/Data/DataManager.ts");
/* harmony import */ var _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/GameInitLoad */ "./src/Game/Main/GameInitLoad.ts");
/* harmony import */ var _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scene/SceneManager */ "./src/Game/Scene/SceneManager.ts");
/* harmony import */ var _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UICon/UIConManager */ "./src/Game/UICon/UIConManager.ts");





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
        let _gameInitLoad = new _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_2__.default();
        //开始加载
        _gameInitLoad.load(Laya.Handler.create(this, () => {
            this.gameInitLoadCom();
            this.enterGame();
        }));
    }
    //游戏加载完成
    gameInitLoadCom() {
        //初始化各个管理器
        _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__.default.instance.init(); //场景管理器
        _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_4__.default.instance.init(); //ui控制器管理器
        _Data_DataManager__WEBPACK_IMPORTED_MODULE_1__.default.instance.init(); //数据管理器
    }
    //进入游戏
    enterGame() {
        //进入游戏
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packLog('进入游戏'));
        /**
            // TODO 进入测试模块
            TestMain.instance.start();
         */
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
/* harmony export */   "default": () => (/* binding */ GameInitLoad)
/* harmony export */ });
/* harmony import */ var src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/GameCommon/GameCommonBinder */ "./src/FGUI/GameCommon/GameCommonBinder.ts");
/* harmony import */ var src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/GameMain/GameMainBinder */ "./src/FGUI/GameMain/GameMainBinder.ts");
/* harmony import */ var src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/FGUI/InitEmptyScreen/InitEmptyScreenBinder */ "./src/FGUI/InitEmptyScreen/InitEmptyScreenBinder.ts");
/* harmony import */ var src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/FGUI/InitLoad/InitLoadBinder */ "./src/FGUI/InitLoad/InitLoadBinder.ts");
/* harmony import */ var src_FGUI_Test_TestBinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/FGUI/_Test/_TestBinder */ "./src/FGUI/_Test/_TestBinder.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_T/D2/FGUI/FGUIPack */ "./src/_T/D2/FGUI/FGUIPack.ts");
/* harmony import */ var src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_T/Main/BaseInitLoad */ "./src/_T/Main/BaseInitLoad.ts");
/* harmony import */ var src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_T/Res/EKeyResName */ "./src/_T/Res/EKeyResName.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_T/Res/KeyResManager */ "./src/_T/Res/KeyResManager.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_T/Res/ResLoadItem */ "./src/_T/Res/ResLoadItem.ts");
/* harmony import */ var _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UICon/initLoad/initEmptyScreenUICon */ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts");
/* harmony import */ var _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../UICon/initLoad/initLoadUICon */ "./src/Game/UICon/initLoad/initLoadUICon.ts");
/* harmony import */ var _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_config/BuildConfigTs */ "./src/Game/_config/BuildConfigTs.ts");
/* harmony import */ var _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_prefabsName/_EAllScenePrefabsNames */ "./src/Game/_prefabsName/_EAllScenePrefabsNames.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");



















/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_8__.default {
    /**
     * 初始化
     */
    init() {
        //初始化需要的ui控制器实例
        this.m_initEmptyScreenUICon = new _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_14__.default();
        this.m_initLoadUICon = new _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_15__.default();
    }
    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    loadBefore() {
        //设置路径
        for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_17__._EAllScenePrefabsNames) {
            src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_11__.default.addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_11__.default.getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_9__.EKeyResName.RootRes) + `${_i}/`); //注入预制体路径
        }
        //设置预制体场景对照
        src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_17__._EAllScenePrefabsNames);
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
        _loadItems.push(this.getFGUILoadItems('_Test')); //测试包
        _loadItems.push(this.getFGUILoadItems('GameMain', 0)); //主包
    }
    //fgui绑定
    FGUIBinder() {
        src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__.default.bindAll();
        src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__.default.bindAll();
        src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__.default.bindAll();
        src_FGUI_Test_TestBinder__WEBPACK_IMPORTED_MODULE_4__.default.bindAll();
        src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__.default.bindAll();
    }
    //获取FGUI加载项
    getFGUILoadItems(_name, _atliasCount, _comBack) {
        let _fguiRes = [];
        //注入包路径
        new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_7__.FGUIPack(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_13__.default(_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_12__.EResLoadModel.D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    addFGUIPackage(_name) {
        fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.FGUIPackURL(_name));
    }
    //注入配置表加载项
    immitConfigLoadItems(_loadItems) {
        //配置表
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__.BuildConfigTs.getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [];
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_18__._EAllExportSceneName) {
            sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_18__._EAllExportSceneName[_i]));
        }
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_13__.default([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_12__.EResLoadModel.D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_5__.default.BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__.BuildConfigTs.getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_6__.default.packLogLight('所有配置表内容->', _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__.BuildConfigTs.getAllConfig()));
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

/***/ "./src/Game/Scene/SceneManager.ts":
/*!****************************************!*\
  !*** ./src/Game/Scene/SceneManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_D3_scene_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D3/scene/Scene */ "./src/_T/D3/scene/Scene.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 场景管理器
 * 管理场景，获取场景，然后通过场景实例构建场景中对象的节点
 */
let SceneManager = class SceneManager {
    //
    constructor() {
        /** 场景列表 */
        this.m_sceneList = {};
    }
    /**
     * 通过场景名字获取场景
     * @param _name 场景名字
     */
    getScene(_name) {
        return this.m_sceneList[_name];
    }
    /**
     * 初始化
     */
    init() {
        let _name;
        //初始化全部场景
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__._EAllExportSceneName) {
            _name = _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__._EAllExportSceneName[_i];
            this.m_sceneList[_name] = new src_T_D3_scene_Scene__WEBPACK_IMPORTED_MODULE_0__.default(_name);
            continue;
            //根据不同的场景实例化不同的类
            switch (_name) {
            }
        }
    }
};
SceneManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], SceneManager);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneManager);


/***/ }),

/***/ "./src/Game/UICon/UIConManager.ts":
/*!****************************************!*\
  !*** ./src/Game/UICon/UIConManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUIConManager */ "./src/_T/D2/FGUI/BaseUIConManager.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * ui控制器管理器
 */
let UIConManager = class UIConManager extends src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    _init() {
        //
    }
};
UIConManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], UIConManager);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIConManager);


/***/ }),

/***/ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts":
/*!*********************************************************!*\
  !*** ./src/Game/UICon/initLoad/initEmptyScreenUICon.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitEmptyScreenUICon)
/* harmony export */ });
/* harmony import */ var src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI */ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");


/**
 * 白屏ui控制器
 */
class InitEmptyScreenUICon extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super(...arguments);
        /** UI列表 */
        this._UI = src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__.default;
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
/* harmony export */   "default": () => (/* binding */ InitLoadUICon)
/* harmony export */ });
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/InitLoad/FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");



/**
 * 初始化加载ui控制器
 */
class InitLoadUICon extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor() {
        super(...arguments);
        /** UI */
        this._UI = src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__.default;
    }
    //显示回调
    _OnShow() {
        //设置数据
        this.ui.m_text_logo.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.ZHName;
        this.ui.m_text_v.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Versions;
        this.ui.m_text_game_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Explain;
        this.ui.m_text_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.Team;
        this.ui.m_text_laya_v.text = Laya.version;
    }
    /**
     * 设置进度
     * @param _i 进度值
     */
    setPlan(_i) {
        _i *= 100;
        this.ui.m_progress.value = _i;
        this.ui.m_loading_progress.text = Math.floor(_i) + ' %';
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
/* harmony export */   "BuildConfigTs": () => (/* binding */ BuildConfigTs)
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
/* harmony export */   "_SceneNodeConfig": () => (/* binding */ _SceneNodeConfig)
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
/* harmony export */   "_TestConfig": () => (/* binding */ _TestConfig)
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
/* harmony export */   "_TestConst": () => (/* binding */ _TestConst)
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

/***/ "./src/Game/_prefabsName/_EAllScenePrefabsNames.ts":
/*!*********************************************************!*\
  !*** ./src/Game/_prefabsName/_EAllScenePrefabsNames.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_EAllScenePrefabsNames": () => (/* binding */ _EAllScenePrefabsNames)
/* harmony export */ });
/**
 * 所有场景对应的预制体名字列表
 * ! 此文件是Unity自动导出的，不要修改，也不要直接依赖。
 */
var _EAllScenePrefabsNames;
(function (_EAllScenePrefabsNames) {
    _EAllScenePrefabsNames["Prefab"] = "@Cube@@Sphere@";
})(_EAllScenePrefabsNames || (_EAllScenePrefabsNames = {}));
//


/***/ }),

/***/ "./src/Game/_sceneName/_EAllExportSceneName.ts":
/*!*****************************************************!*\
  !*** ./src/Game/_sceneName/_EAllExportSceneName.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_EAllExportSceneName": () => (/* binding */ _EAllExportSceneName)
/* harmony export */ });
/**
 * 所有导出场景名字
 * ! 此文件是Unity自动导出的，不要修改，也不要直接依赖。
 */
var _EAllExportSceneName;
(function (_EAllExportSceneName) {
    _EAllExportSceneName["Scene"] = "Scene";
})(_EAllExportSceneName || (_EAllExportSceneName = {}));


/***/ }),

/***/ "./src/_T/Config/ConfigT.ts":
/*!**********************************!*\
  !*** ./src/_T/Config/ConfigT.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigT)
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Res/ResLoad */ "./src/_T/Res/ResLoad.ts");



/**
 * 配置表工具
 */
class ConfigT {
    /**
     * 装饰配置表代理
     * @param _config 配置表
     */
    static DecorateConfigProxy(_config) {
        return function (target) {
            //设置配置表模板
            target.prototype.configTemplate = _config;
        };
    }
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
/* harmony export */   "default": () => (/* binding */ ConsoleConst)
/* harmony export */ });
/**
 * 打印台常用配置
 */
class ConsoleConst {
    /** 公共样式 */
    static get publicStyle() {
        return `
                border-radius: 3px;
                line-height: 15px;
                `;
    }
    /** 普通消息 */
    static get logStyle() {
        return this.getStyle('#fff', '#9BA4B4');
    }
    /** 轻消息 */
    static get logLightStyle() {
        return this.getStyle('#776d8a', '#EBEBEB');
    }
    /** 警告消息 */
    static get warnStyle() {
        return this.getStyle('#5c6e06', '#ffa931');
    }
    /** 错误消息 */
    static get errorStyle() {
        return this.getStyle('#fff', '#ec0101');
    }
    /** 成功消息 */
    static get comStyle() {
        return this.getStyle('#fff', '#ade498');
    }
    /**
     * 获取样式
     * @param _color 字体颜色
     * @param _bgColor 背景颜色
     */
    static getStyle(_color, _bgColor) {
        return `
                color: ${_color};
                background-color: ${_bgColor};
                padding: 0px 3px;
                ` + this.publicStyle;
    }
}


/***/ }),

/***/ "./src/_T/Console/ConsoleEx.ts":
/*!*************************************!*\
  !*** ./src/_T/Console/ConsoleEx.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleEx)
/* harmony export */ });
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var _ConsoleConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleConst */ "./src/_T/Console/ConsoleConst.ts");


/**
 * 打印台扩展
 */
class ConsoleEx {
    /**
     * 包装信息
     * @param _style 样式
     * @param _par 参数
     */
    static pack(_style, _par) {
        return ['%c%s', _style, 'log', ..._par];
    }
    /**
     * 包装普通消息
     * @param any 内容
     */
    static packLog(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__.default.OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.logStyle, any);
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
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.logLightStyle, any);
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
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.comStyle, any);
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
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.warnStyle, any);
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
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__.default.errorStyle, any);
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
/* harmony export */   "default": () => (/* binding */ D2Manager)
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

/***/ "./src/_T/D2/FGUI/BaseSingleUICon.ts":
/*!*******************************************!*\
  !*** ./src/_T/D2/FGUI/BaseSingleUICon.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseSingleUICon)
/* harmony export */ });
/* harmony import */ var _BaseUICon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseUICon */ "./src/_T/D2/FGUI/BaseUICon.ts");

/**
 * 基类单页面控制器
 */
class BaseSingleUICon extends _BaseUICon__WEBPACK_IMPORTED_MODULE_0__.default {
    /** 获取ui */
    get ui() {
        return this.m_ui;
    }
    /** 创建ui之前的扩展回调 */
    _createUIBeforeEx() {
        if (!this._UIs) {
            //设置单ui
            this._UIs = {
                default: {
                    uiCreate: this._UI,
                },
            };
        }
    }
    /** 创建完成ui后的扩展回调 */
    _createUIEX() {
        this.m_ui = this._UIs.default.ui;
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
/* harmony export */   "default": () => (/* binding */ BaseUICon)
/* harmony export */ });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _EUILayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EUILayer */ "./src/_T/D2/FGUI/EUILayer.ts");
/* harmony import */ var _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FGUIRootManager */ "./src/_T/D2/FGUI/FGUIRootManager.ts");
/* harmony import */ var _FGUIT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FGUIT */ "./src/_T/D2/FGUI/FGUIT.ts");
/* harmony import */ var _RootUICon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RootUICon */ "./src/_T/D2/FGUI/RootUICon.ts");





/**
 * UI控制器基类(用来控制UI界面)
 */
class BaseUICon extends _RootUICon__WEBPACK_IMPORTED_MODULE_4__.default {
    constructor() {
        super(...arguments);
        /** 唯一键值 */
        this.m_key = Symbol();
        /** 是否在隐藏时清理掉ui，默认为true */
        this._ifClear = true;
        /** UI层级类型，必须在初始化时设置 */
        this._layer = _EUILayer__WEBPACK_IMPORTED_MODULE_1__.EUILayer.Panel;
        /** 是否显示 */
        this.m_ifShow = false;
        /** ui代理列表 */
        this.m_proxyUIList = new Set();
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
    /**
     * 添加一个ui代理
     * @param _proxy 该代理
     */
    addUIProxy(_proxy) {
        this.m_proxyUIList.add(_proxy);
    }
    /**
     * 删除一个ui代理
     * @param _proxy 该代理
     */
    removeUIProxy(_proxy) {
        this.m_proxyUIList.delete(_proxy);
    }
    /**
     * 显示代理ui
     */
    showUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.Show();
        });
    }
    /**
     * 隐藏代理ui
     */
    hideUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.Hide();
        });
    }
    /**
     * 结束ui代理
     */
    endUIProxy() {
        this.m_proxyUIList.forEach((item) => {
            item.endProxy();
        });
    }
    //创建ui
    createUI() {
        this._createUIBeforeEx();
        if (!this._UIs) {
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packError('没有找到ui创建器列表!'));
        }
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__.default.getLayerUI(this._layer).addChild(this.m_rootUI);
        for (let _i in this._UIs) {
            this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance());
        }
        //
        this._createUIEX();
        this._createUI();
    }
    /** 创建ui之前的扩展回调 只能在扩展中使用 */
    _createUIBeforeEx() { }
    /** 创建完成ui后的扩展回调 只能在扩展中使用 */
    _createUIEX() { }
    /** 创建完ui后回调 */
    _createUI() { }
    /**
     * 获取ui
     * @param _name ui名字
     */
    getUI(_name) {
        return this._UIs[_name].ui;
    }
    Show(...par) {
        if (this.m_ifShow) {
            return;
        }
        this.m_ifShow = true;
        this._onShowBefore(...par);
        let _ifNew = false;
        if (!this.m_rootUI || this.m_rootUI.isDisposed) {
            //创建ui
            this.createUI();
            _ifNew = true;
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
        //
        this._onShow(_ifNew, ...par);
    }
    _onShowBefore(...par) { }
    _onShow(_ifNew, ...par) { }
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
        this._onHideBefore(par);
        if (_ifClear) {
            this.m_rootUI.dispose();
            //清理引用
            for (let _i in this._UIs) {
                this._UIs[_i].ui = null;
            }
            //
            this._disposeUI();
        }
        else {
            this.m_rootUI.visible = false;
        }
        //取消监听事件
        Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
        //
        this._onHide(_ifClear, par);
    }
    /** ui被清理时的回调 */
    _disposeUI() { }
    _onHideBefore(...par) { }
    _onHide(_ifDelete, ...par) { }
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
}


/***/ }),

/***/ "./src/_T/D2/FGUI/BaseUIConManager.ts":
/*!********************************************!*\
  !*** ./src/_T/D2/FGUI/BaseUIConManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseUIConManager),
/* harmony export */   "BaseUIConManagerProxy": () => (/* binding */ BaseUIConManagerProxy)
/* harmony export */ });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");

/**
 * ui控制器管理器
 * 统一管理ui控制器
 * 必须配合代理器使用
 */
class BaseUIConManager {
    /**
     * 初始化
     * 框架调用，不能直接调用
     */
    init() {
        this._init();
        this.__init();
    }
    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    _init() {
        //
    }
    //初始化之后的检测
    __init() {
        if (!this.m_uiConList) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packWarn('ui控制管理器没有初始化管理的ui列表'));
        }
        if (!this.m_uiProxy) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packWarn('ui控制管理器没有初始化ui代理'));
        }
        else {
            //设置代理器代理
            this.m_uiProxy.setProxy(this.m_uiConList);
        }
    }
}
/**
 * ui 控制器管理器代理
 * 负责代理ui控制器管理器中的控制器，防止循环依赖
 */
class BaseUIConManagerProxy {
    /** 获取当前显示的ui */
    get onShowUI() {
        let _uiCons = [];
        for (let _i in this.m_uiConList) {
            this.m_uiConList[_i].ifShow && _uiCons.push(this.m_uiConList[_i]);
        }
        //
        return _uiCons;
    }
    /**
     * 设置ui代理
     * @param _uiList ui列表
     */
    setProxy(_uiList) {
        this.m_uiConList = _uiList;
        //
        this._init();
    }
    /**
     * 根据ui键值获取一个ui
     * @param _key ui键值
     */
    getUI(_key) {
        return this.m_uiConList[_key];
    }
    /**
     * 显示ui控制器
     * @param _uiCon ui控制器索引或者索引列表
     * @param _ifHideOtherUI 是否隐藏其他ui [true]
     */
    showUI(_uiCon, _ifHideOtherUI = true) {
        let _uiCons = [];
        if (_uiCon instanceof Array) {
            _uiCons.push(..._uiCon);
        }
        else {
            _uiCons.push(_uiCon);
        }
        //判断是否隐藏其他ui
        if (_ifHideOtherUI) {
            for (let _i in this.m_uiConList) {
                if (!_uiCons.includes(_i)) {
                    this.m_uiConList[_i].Hide();
                }
            }
        }
        _uiCons.forEach((item) => {
            if (this.m_uiConList[item]) {
                this.m_uiConList[item].Show();
            }
        });
    }
    /**
     * 隐藏ui控制器
     * @param _uiCon ui控制器实例或列表
     */
    hideUI(_uiCon) {
        let _uiCons = [];
        if (_uiCon instanceof Array) {
            _uiCons.push(..._uiCon);
        }
        else {
            _uiCons.push(_uiCon);
        }
        _uiCons.forEach((item) => {
            this.m_uiConList[item] && this.m_uiConList[item].Hide();
        });
    }
    /**
     * 隐藏当前显示的所有ui
     */
    hideAllUI() {
        this.onShowUI.forEach((item) => {
            item.Hide();
        });
    }
    /** 初始化回调 */
    _init() { }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/EUILayer.ts":
/*!************************************!*\
  !*** ./src/_T/D2/FGUI/EUILayer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EUILayer": () => (/* binding */ EUILayer)
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
/* harmony export */   "FGUIPack": () => (/* binding */ FGUIPack)
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
/* harmony export */   "default": () => (/* binding */ FGUIRootManager)
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
/* harmony export */   "default": () => (/* binding */ FGUIT)
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

/***/ "./src/_T/D2/FGUI/RootUICon.ts":
/*!*************************************!*\
  !*** ./src/_T/D2/FGUI/RootUICon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootUICon)
/* harmony export */ });
/**
 * 根ui控制器
 * 所有ui控制器类型类均由此继承
 */
class RootUICon {
}


/***/ }),

/***/ "./src/_T/D3/D3Manager.ts":
/*!********************************!*\
  !*** ./src/_T/D3/D3Manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ D3Manager)
/* harmony export */ });
/* harmony import */ var _scene_GlobalD3Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene/GlobalD3Environment */ "./src/_T/D3/scene/GlobalD3Environment.ts");

/**
 * 3d管理器
 */
class D3Manager {
    /**
     * 初始化
     */
    static init() {
        /** 初始化全局环境 */
        _scene_GlobalD3Environment__WEBPACK_IMPORTED_MODULE_0__.default.init();
    }
}


/***/ }),

/***/ "./src/_T/D3/scene/GlobalD3Environment.ts":
/*!************************************************!*\
  !*** ./src/_T/D3/scene/GlobalD3Environment.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalD3Environment)
/* harmony export */ });
/**
 * 全局3D环境
 */
class GlobalD3Environment {
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
    /** 获取场景 */
    static get Environment() {
        return {
            scene: this.m_Scene3D,
            camera: this.m_Camera,
            light: this.m_Light,
        };
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

/***/ "./src/_T/D3/scene/NodeT.ts":
/*!**********************************!*\
  !*** ./src/_T/D3/scene/NodeT.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NodeT)
/* harmony export */ });
/* harmony import */ var src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/GameT/GamePool */ "./src/_T/GameT/GamePool.ts");
/* harmony import */ var src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Utils/V3Utils */ "./src/_T/Utils/V3Utils.ts");


/**
 * 节点工具
 */
class NodeT {
    /**
     * 根据节点数据初始化节点
     * @param _spr 精灵
     * @param _target 目标节点
     */
    static setNode(_spr, _target) {
        // console.log(_spr, _target);
        //设置名字
        _spr.name = _target.name;
        //判断有没有变换相关的属性
        if (!_target.transform) {
            _spr.transform.localPosition.setValue(0, 0, 0);
            _spr.transform.localRotationEuler.setValue(0, 0, 0);
            _spr.transform.localScale.setValue(1, 1, 1);
        }
        else {
            //设置位置
            if (!_target.transform.position) {
                //默认位置
                _spr.transform.localPosition.setValue(0, 0, 0);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_target.transform.position, _spr.transform.localPosition);
            }
            //设置旋转
            if (!_target.transform.euler) {
                //默认旋转
                _spr.transform.localRotationEuler.setValue(0, 0, 0);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
            }
            //设置缩放
            if (!_target.transform.scale) {
                //默认缩放
                _spr.transform.localScale.setValue(1, 1, 1);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_target.transform.scale, _spr.transform.localScale);
            }
        }
        //触发监听
        _spr.transform.localPosition = _spr.transform.localPosition;
        _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
        _spr.transform.localScale = _spr.transform.localScale;
        //设置差异
        let _prefabConfig = _target;
        if (_prefabConfig.prefabName != "undefined") {
            if (_prefabConfig.prefabDiffer) {
                this.setDiffer(_spr, _prefabConfig.prefabDiffer);
            }
        }
        //
        // console.log(_spr.transform.position);
    }
    /**
     * 设置一个精灵和源精灵的差异
     * @param _spr 精灵
     * @param _differ 差异数据
     */
    static setDiffer(_spr, _differ) {
        // console.log('设置差异', _spr, _differ);
        //获取一个临时向量
        let _centreV3 = src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__.default.getV3();
        //
        if (_differ.child) {
            for (let _diff of _differ.child) {
                this.setDiffer(_spr.getChildAt(_diff.index), _diff);
            }
        }
        //判断是否有transform属性
        if (_differ.transform) {
            //
            if (_differ.transform.position) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_differ.transform.position, _centreV3);
                Laya.Vector3.add(_spr.transform.localPosition, _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localPosition);
                _spr.transform.localPosition = _spr.transform.localPosition;
            }
            if (_differ.transform.euler) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_differ.transform.euler, _centreV3);
                Laya.Vector3.add(_spr.transform.localRotationEuler, _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localRotationEuler);
                _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
            }
            if (_differ.transform.scale) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__.default.parseVector3(_differ.transform.scale, _centreV3);
                Laya.Vector3.add(_spr.transform.localScale, _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localScale);
                _spr.transform.localScale = _spr.transform.localScale;
            }
        }
        //回收临时向量
        src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__.default.recycleV3(_centreV3);
    }
}


/***/ }),

/***/ "./src/_T/D3/scene/Scene.ts":
/*!**********************************!*\
  !*** ./src/_T/D3/scene/Scene.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var _NodeT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeT */ "./src/_T/D3/scene/NodeT.ts");
/* harmony import */ var _SceneNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SceneNode */ "./src/_T/D3/scene/SceneNode.ts");
/* harmony import */ var _GlobalD3Environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlobalD3Environment */ "./src/_T/D3/scene/GlobalD3Environment.ts");






/**
 * 场景 实例
 * 根据指定的场景配置表构建场景
 * * 可以继承此类自定义场景
 */
class Scene {
    /**
     * 初始化
     * @param _sceneName 场景名字
     */
    constructor(_sceneName) {
        /** 场景配置信息 */
        this.m_sceneConfig = {};
        /** 场景节点实例缓存 */
        this.m_sceneNodes = [];
        /** 场景中存在的node节点 */
        this.m_onSceneNodes = new Set();
        //
        this._sceneName = _sceneName;
        //根据场景名字读取配置表信息
        if (!this._sceneName) {
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packError('没有初始化场景的名字！'));
            return;
        }
        let _data = src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_0__.default.getConfigJsonData(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_2__.default.SceneConfigURL(this._sceneName));
        // console.log(config.root);
        if (_data) {
            //获取根节点下的节点
            for (let _i = 0; _i < _data.length; _i++) {
                this.m_sceneConfig[_data[_i].name] = _data[_i];
            }
        }
        else {
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packError('获取场景数据失败->', this._sceneName));
        }
        //设置环境，默认为全局3d环境，可以自定义环境
        this.m_environment = _GlobalD3Environment__WEBPACK_IMPORTED_MODULE_5__.default.Environment;
        //
        this._init();
    }
    /** 获取环境 */
    get environment() {
        return this.m_environment;
    }
    /** 获取场景当前存在的节点列表 */
    get onSceneNodes() {
        return [...this.m_onSceneNodes];
    }
    /**
     * 获取节点配置
     * @param _nodeName 节点名字
     */
    getNodeConfig(_nodeName) {
        return this.m_sceneConfig[_nodeName];
    }
    /**
     * 获取场景节点
     * @param _name 节点名字，可以多个一起构建
     */
    getSceneNode(_name) {
        let _names = [];
        if (typeof _name == "string") {
            _names.push(_name);
        }
        else {
            _names.push(..._name);
        }
        let _nodeConfig = [];
        _names.forEach((item) => {
            if (this.m_sceneConfig[item]) {
                _nodeConfig.push(this.m_sceneConfig[item]);
            }
            else {
                console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packWarn('有个场景节点没有找到', item));
            }
        });
        if (_nodeConfig.length == 0) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packWarn('获取场景节点时，一个配置信息都没找到', _names));
            return;
        }
        //在缓存中找
        let __nodeConfig;
        let _a;
        let _number;
        let _index = this.m_sceneNodes.findIndex((item) => {
            __nodeConfig = item.nodeConfigs;
            if (_nodeConfig.length != __nodeConfig.length) {
                return false;
            }
            _a = {};
            _nodeConfig.forEach((_o) => {
                if (typeof _a[_o.name] == "undefined") {
                    _a[_o.name] = 1;
                }
                else {
                    _a[_o.name]++;
                }
            });
            __nodeConfig.forEach((__o) => {
                if (typeof _a[__o.name] == "undefined") {
                    _a[__o.name] = -1;
                }
                else {
                    _a[__o.name]--;
                }
            });
            _number = 0;
            for (let _i in _a) {
                _number += _a[_i];
            }
            return _number == 0;
        });
        if (_index != -1) {
            return this.m_sceneNodes[_index];
        }
        let _sceneNode = new _SceneNode__WEBPACK_IMPORTED_MODULE_4__.default(_nodeConfig, this);
        //添加到缓存
        this.m_sceneNodes.push(_sceneNode);
        //
        return _sceneNode;
    }
    /**
     * 添加当前节点
     * 当这个场景下的某个节点被构建时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    addOnNode(_node) {
        this.m_onSceneNodes.add(_node);
    }
    /**
     * 删除当前节点
     * 当这个场景下的某个节点被删除时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    deleteOnNode(_node) {
        this.m_onSceneNodes.delete(_node);
    }
    /**
     * 设置环境
     * 会根据当前场景中环境配置设置环境
     */
    setEnvironment() {
        let _sceneConfig = this.m_sceneConfig;
        //设置全局摄像机
        if (_sceneConfig.camera) {
            _NodeT__WEBPACK_IMPORTED_MODULE_3__.default.setNode(this.m_environment.camera, _sceneConfig.camera);
        }
        //设置全局灯光
        if (_sceneConfig.light) {
            _NodeT__WEBPACK_IMPORTED_MODULE_3__.default.setNode(this.m_environment.light, _sceneConfig.light);
        }
        //执行回调
        this._setEnvironment();
    }
    /**
     * 加载进度
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    loadProgress(_n, _node) {
        // console.log(_n, _node);
        this._loadProgress(_n, _node);
    }
    // * ----------- 回调函数
    /** 初始化回调 */
    _init() { }
    /** 设置环境后执行的回调 */
    _setEnvironment() { }
    /**
     * 节点加载进度回调
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    _loadProgress(_n, _node) { }
}


/***/ }),

/***/ "./src/_T/D3/scene/SceneNode.ts":
/*!**************************************!*\
  !*** ./src/_T/D3/scene/SceneNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneNode)
/* harmony export */ });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var _NodeT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeT */ "./src/_T/D3/scene/NodeT.ts");




/**
 * 场景节点
 * 用来构建场景节点
 */
class SceneNode {
    /**
     * 初始化场景节点实例
     * @param _nodeConfigs 节点配置信息
     * @param _scene 所属场景
     */
    constructor(_nodeConfigs, _scene) {
        //
        this.m_scene = _scene;
        //默认为删除状态
        this.m_ifDelete = true;
        this.m_nodeConfigs = _nodeConfigs;
        //提取预制体名字列表
        this.m_prefabsNames = [];
        this.m_nodeConfigs.forEach((item) => {
            this.getPrefabsNames(this.m_prefabsNames, item);
        });
    }
    /** 获取所属场景 */
    get scene() {
        return this.m_scene;
    }
    /** 获取节点配置信息 */
    get nodeConfigs() {
        return this.m_nodeConfigs;
    }
    /** 获取是否删除 */
    get ifDelete() {
        return this.m_ifDelete;
    }
    /** 获取场景节点 */
    get node() {
        return this.m_node;
    }
    /** 获取预制体集合 */
    get prefabs() {
        return this.m_prefabs;
    }
    /** 获取预制体名字列表 */
    get prefabsName() {
        return this.m_prefabsNames;
    }
    /** 是否在加载 */
    get ifLoad() {
        return this.m_ifLoad;
    }
    /**
     * 异步加载
     * @param _onProgress 进度回调
     */
    asyncLoad(_onProgress) {
        let _prefabNamesURL = this.m_prefabsNames.map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__.default.PrefabURL(item);
        });
        return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__.default.Load3DAsync(_prefabNamesURL, Laya.Handler.create(this, (n) => {
            this.loadProgress(n);
            if (_onProgress) {
                _onProgress.args = [n];
                _onProgress.run();
            }
        }, undefined, false));
    }
    /**
     * 异步构建
     * @param onProgress 进度回调
     */
    asyncBuild(_onProgress) {
        this.m_ifLoad = true;
        return new Promise((resolve) => {
            this.asyncLoad(_onProgress).then(() => {
                this.m_ifLoad = false;
                //
                this.build();
                resolve(this);
            });
        });
    }
    /**
     * 加载进度
     * @param _n 进度值
     */
    loadProgress(_n) {
        //向场景传出加载进度
        this.m_scene.loadProgress(_n, this);
    }
    /**
     * 构建
     */
    build() {
        if (!this.m_ifDelete) {
            return;
        }
        this.m_ifDelete = false;
        this.m_scene.addOnNode(this);
        this.m_node = new Laya.Node;
        //添加到所属场景环境中
        this.m_scene.environment.scene.addChild(this.m_node);
        this.m_prefabs = {};
        let _spr;
        this.m_nodeConfigs.forEach((item) => {
            _spr = new Laya.Sprite3D;
            this.m_node.addChild(_spr);
            this.buildNode(_spr, item);
        });
    }
    /**
     * 删除
     */
    delete() {
        if (this.m_ifDelete) {
            return;
        }
        if (this.m_ifLoad) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packWarn('场景节点还在构建却试图删除。'));
            return;
        }
        this.m_ifDelete = true;
        this.m_scene.deleteOnNode(this);
        this.m_node.destroy();
        //清理引用
        this.m_node = null;
        this.m_prefabs = null;
    }
    // * -------------------- //
    /**
     * 获取预制体名字
     * @param _prefabsNames 输出的预制体名字列表
     * @param _nodeConfig 节点配置数据
     */
    getPrefabsNames(_prefabsNames, _nodeConfig) {
        if (!_nodeConfig) {
            return;
        }
        //先判断是否是预制体
        let _prefabName = _nodeConfig.prefabName;
        if (_prefabName) {
            //去重
            if (!_prefabsNames.includes(_prefabName)) {
                _prefabsNames.push(_prefabName);
            }
        }
        else {
            //判断是否还有子节点
            if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                _nodeConfig.child.forEach((item) => {
                    this.getPrefabsNames(_prefabsNames, item);
                });
            }
        }
    }
    /**
     * 构建节点
     * @param _node 父节点
     * @param _nodeConfig 节点配置数据
     */
    buildNode(_node, _nodeConfig) {
        if (!_nodeConfig) {
            return;
        }
        //先判断是不是预制体
        let _prefabName = _nodeConfig.prefabName;
        let _spr;
        if (_prefabName) {
            _spr = src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__.default.GetRes(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__.default.PrefabURL(_prefabName));
            _node.addChild(_spr);
            _NodeT__WEBPACK_IMPORTED_MODULE_3__.default.setNode(_spr, _nodeConfig);
            //
            this.m_prefabs[_prefabName] = this.m_prefabs[_prefabName] || [];
            this.m_prefabs[_prefabName].push(_spr);
        }
        else {
            //判断是否有子节点
            if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                _spr = new Laya.Sprite3D;
                _node.addChild(_spr);
                _NodeT__WEBPACK_IMPORTED_MODULE_3__.default.setNode(_spr, _nodeConfig);
                _nodeConfig.child.forEach((item) => {
                    this.buildNode(_node, item);
                });
            }
        }
    }
}


/***/ }),

/***/ "./src/_T/Data/BaseData.ts":
/*!*********************************!*\
  !*** ./src/_T/Data/BaseData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseData)
/* harmony export */ });
/**
 * 基类数据
 * ! 只能出现数据层面的东西
 * 数组，对象，值 (数字，字符串，布尔值)
 */
class BaseData {
}


/***/ }),

/***/ "./src/_T/Data/BaseDataProxy.ts":
/*!**************************************!*\
  !*** ./src/_T/Data/BaseDataProxy.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseDataProxy)
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");

/**
 * 基类数据代理
 * 所有关于代理数据的类都从这里继承
 */
class BaseDataProxy {
    constructor() {
        /** 是否设置代理 */
        this.m_ifSetProxy = true;
    }
    /** 获取是否设置代理 */
    get ifSetProxy() {
        return this.m_ifSetProxy;
    }
    /**
     * 获取数据代理器
     * 通过这个数据代理器可以添加代理数据，和添加数据监听回调 [配合 rootData 使用]
     */
    get objectProxyT() {
        return this.m_objectProxyT;
    }
    /** 获取数据 */
    get data() {
        return this.m_data;
    }
    /**
     * 获取一个新的数据
     * 用于重构数据
     */
    getNewData() {
        //如果没有数据模板的话
        if (!this.dataTemplate) {
            console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packError('没有找到数据模板！请使用数据模板装饰器装饰该类', this.constructor.name));
            return {};
        }
        return new this.dataTemplate();
    }
}


/***/ }),

/***/ "./src/_T/Data/BaseLocalDataProxy.ts":
/*!*******************************************!*\
  !*** ./src/_T/Data/BaseLocalDataProxy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseLocalDataProxy)
/* harmony export */ });
/* harmony import */ var _Md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Md5 */ "./src/_T/Data/Md5.ts");
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _BaseDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDataProxy */ "./src/_T/Data/BaseDataProxy.ts");
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var _ObjectProxyT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObjectProxyT */ "./src/_T/Data/ObjectProxyT.ts");





/**
 * 基类本地数据代理，通过此类可以访问本地保存的数据
 * 泛型为数据类型
 */
class BaseLocalDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor() {
        super(...arguments);
        /**
         * 是否对比数据
         * 默认为true，如果为真当为线上模式时会生成一个加密的对比数据，防止用户改动本地数据
         */
        this._ifDifferData = true;
        /** 保存执行队列 */
        this.m_saveToDiskQueue = 0;
        this.m_saveToDiskTime = 0;
    }
    /**
     * 获取保存名称
     * 默认返回类名，可以重写
     */
    get _saveName() {
        //默认返回类名
        return this.constructor.name;
    }
    //获取保存数据的名字
    get saveName() {
        //项目名字 + 保存名字 + 项目版本
        return src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__.default.Name + '-' + this._saveName + '-' + src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__.default.Versions + (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__.default.OnLine ? '^on' : '^test');
    }
    // 获取对比数据的保存名字
    get differName() {
        //
        return this.encrypt(this.saveName + '__verify');
    }
    /**
     * 初始化数据
     */
    initData() {
        //记录时间
        let _time = Date.now();
        //
        this.m_data = this._readData();
        //设置代理包装数据
        if (this.m_ifSetProxy) {
            //获取数据代理工具
            this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_4__.default();
            this.m_data = this.m_objectProxyT.setProxy(this.m_data);
            //添加设置监听
            this.m_objectProxyT.addMonitor(this, this._dataSetMonitor);
        }
        //
        this._initData();
        //判断时间差
        _time = Date.now() - _time;
        if (_time > 100) {
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packWarn('初始化本地数据时间过长', this.saveName, _time));
        }
    }
    /** 初始化完成，继承使用 */
    _initData() { }
    /** 数据被设置监听 */
    _dataSetMonitor() {
        this.save(this.m_data);
    }
    /**
     * 手动保存数据
     * @param _ifCl 是否限流 默认为true
     */
    Save(_ifCl = true) {
        this.save(this.m_data, _ifCl);
    }
    /**
     * 保存数据到本地
     * @param m_data 数据
     * @param _ifCl 是否限流
     */
    save(m_data, _ifCl = true) {
        //添加时间判断
        if (this.m_saveToDiskTime == 0) {
            this.m_saveToDiskTime = Date.now();
        }
        //判断是否限流
        if (!_ifCl) {
            this._save(m_data);
        }
        else {
            this.m_saveToDiskQueue++;
            //限流，每一次宏任务只保存一次数据
            //把保存任务注册进微任务列表，将会在本次数据修改的宏任务完成后并在下次宏任务开始前被全部执行
            Promise.resolve().then(() => {
                this.m_saveToDiskQueue--;
                // console.log('保存数据前');
                if (this.m_saveToDiskQueue == 0) {
                    this._save(m_data);
                }
            });
        }
    }
    //保存数据到本地
    _save(m_data) {
        // console.log('保存数据');
        //序列化
        let json = JSON.stringify(m_data);
        //
        Laya.LocalStorage.setJSON(this.saveName, json);
        //判断是否是线上环境
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__.default.OnLine && this._ifDifferData) {
            //获取对比数据
            let _differJson = this.getDifferData(json);
            //保存对比数据
            Laya.LocalStorage.setJSON(this.differName, _differJson);
        }
        //判断时间
        let _time = Date.now() - this.m_saveToDiskTime;
        this.m_saveToDiskTime = 0;
        //判断时间差
        if (_time > 1000) {
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packWarn('场景保存时间过长', this.saveName, _time));
        }
    }
    //从本地获取数据
    _readData() {
        //读取本地数据
        let readStr = Laya.LocalStorage.getJSON(this.saveName);
        //判断是否是线上环境
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__.default.OnLine && this._ifDifferData) {
            //对比数据
            let _differ = Laya.LocalStorage.getJSON(this.differName);
            if (this.getDifferData(readStr) != _differ) {
                return this._saveNewData();
            }
        }
        //获取一个新的实例
        let _saveData = this.getNewData();
        //判断数据是否被篡改
        try {
            if (readStr) {
                let jsonData = JSON.parse(readStr);
                //用本地的数据填充当前数据
                for (let key in _saveData) {
                    _saveData[key] = jsonData[key];
                }
            }
            else {
                return this._saveNewData();
            }
        }
        catch (_a) {
            return this._saveNewData();
        }
        //
        return _saveData;
    }
    //获取并保存一个新数据
    _saveNewData() {
        let m_data = this.getNewData();
        //保存数据，不限流
        this.save(m_data, false);
        //
        return m_data;
    }
    //处理对比数据
    getDifferData(_string) {
        //判断是否为空
        if (!_string)
            return '';
        //加密
        return this.encrypt(_string);
    }
    //数据单向加密
    encrypt(_string) {
        let _encryptStr = `LayaMiniGame-${this.saveName}:${_string}`;
        //判断能否使用md5
        if (_Md5__WEBPACK_IMPORTED_MODULE_0__.default.ifUse) {
            return _Md5__WEBPACK_IMPORTED_MODULE_0__.default.hashStr(_encryptStr).toString();
        }
        else {
            //不用任何加密
            return 'noEncrypt';
        }
    }
}


/***/ }),

/***/ "./src/_T/Data/BaseShortDataProxy.ts":
/*!*******************************************!*\
  !*** ./src/_T/Data/BaseShortDataProxy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseShortDataProxy)
/* harmony export */ });
/* harmony import */ var _BaseDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDataProxy */ "./src/_T/Data/BaseDataProxy.ts");
/* harmony import */ var _ObjectProxyT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectProxyT */ "./src/_T/Data/ObjectProxyT.ts");


/**
 * 临时数据代理基类
 * 泛型为数据类型
 */
class BaseShortDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super(...arguments);
        /** 临时数据默认不设置代理 */
        this.m_ifSetProxy = false;
    }
    /**
     * 初始化数据
     */
    initData() {
        this.m_data = this.getNewData();
        //设置代理
        if (this.m_ifSetProxy) {
            this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_1__.default();
            this.m_data = this.m_objectProxyT.setProxy(this.m_data);
        }
        //
        this._initData();
    }
    /** 初始化数据回调 */
    _initData() { }
}


/***/ }),

/***/ "./src/_T/Data/DataT.ts":
/*!******************************!*\
  !*** ./src/_T/Data/DataT.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataT)
/* harmony export */ });
/**
 * 数据处理工具
 */
class DataT {
    /**
     * 数据模板装饰器
     * @param _data 数据模板
     */
    static DecorateDataTemplate(_data) {
        return function (target) {
            //设置数据模板
            target.prototype.dataTemplate = _data;
        };
    }
}


/***/ }),

/***/ "./src/_T/Data/Md5.ts":
/*!****************************!*\
  !*** ./src/_T/Data/Md5.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Md5)
/* harmony export */ });
/**
 * TypeScript Md5加密
 */
class Md5 {
    constructor() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    static hashStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    }
    static hashAsciiStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    }
    static _hex(x) {
        const hc = Md5.hexChars;
        const ho = Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    }
    static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    }
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    }
    appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    getState() {
        const self = this;
        const s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    }
    setState(state) {
        const buf = state.buffer;
        const x = state.state;
        const s = this._state;
        let i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    }
    end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        let dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            const lo = parseInt(matches[2], 16);
            const hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    }
}
/** 能否使用 */
Md5.ifUse = true;
// Private Static Variables
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
// Permanent instance is to use for one-call hashing
Md5.onePassHasher = new Md5();
//检查Md5是否可用
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    //设置不能使用
    Md5.ifUse = false;
    //
    console.warn('Md5 self test failed.');
}


/***/ }),

/***/ "./src/_T/Data/ObjectProxyT.ts":
/*!*************************************!*\
  !*** ./src/_T/Data/ObjectProxyT.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectProxyT)
/* harmony export */ });
/**
 * 对象代理工具
 */
class ObjectProxyT {
    constructor() {
        /** 监听列表 */
        this.m_monitorList = [];
    }
    /**
     * 添加监听
     * 监听某个对象的某个属性是否发生更改
     * 如果可选属性都不填的话则监听全部监听数据属性更改
     * @param _this 监听触发回调执行域
     * @param _back 监听触发回调执行方法
     * @param _obj 目标对象，如果不选则监听全部内容更改
     * @param _key 键名，如果不选则监听全部属性
     */
    addMonitor(_this, _back, _obj, _key) {
        //添加到监听列表
        this.m_monitorList.push({
            _this,
            _back,
            _obj,
            _key: _key,
        });
    }
    /**
     * 清理回调
     * @param _this 回调执行域
     * @param _back 回调方法
     */
    clearMonitor(_this, _back) {
        this.m_monitorList = this.m_monitorList.filter((item) => {
            return !(item._this == _this
                //可选的回调
                && _back ? item._back == _back : true);
        });
    }
    /**
     * 设置代理
     * @param _o 源对象
     */
    setProxy(_o) {
        return this._setProxy(_o);
    }
    //配合设置代理
    _setProxy(_o) {
        //判断是否是普通值类型和方法
        if (typeof _o == "function" || typeof _o != "object" || !_o) {
            return _o;
        }
        //判断是否是可迭代对象和方法
        if (!_o[Symbol.iterator]) {
            //遍历对象设置代理
            for (let _i in _o) {
                _o[_i] = this._setProxy(_o[_i]);
            }
        }
        //返回最终的代理对象
        let _this = this;
        return new Proxy(_o, {
            /***
             *  set 方法
             * @param trapTarget 代理的目标
             * @param key 属性名称
             * @param value 值
             * @param receiver 操作发生的对象
             * @returns {boolean}
             */
            set(trapTarget, key, value, receiver) {
                //判断是是不是数组的length属性被修改
                if (!(Array.isArray(trapTarget) && key == 'length')) {
                    //执行回调
                    _this.proxySet(trapTarget, key, value, receiver);
                }
                //反射方法
                return Reflect.set(trapTarget, key, value, receiver);
            },
            /***
             * get 方法
             * @param trapTarget 代理的目标
             * @param key 属性名称
             * @param receiver receiver 操作发生的对象（通常是代理）
             */
            get(trapTarget, key, receiver) {
                //反射方法
                return Reflect.get(trapTarget, key, receiver);
            },
        });
    }
    /***
     * 代理对象被设置时的回调
     * @param trapTarget 代理的目标
     * @param key 属性名称
     * @param value 值
     * @param receiver 操作发生的对象
     */
    proxySet(trapTarget, key, value, receiver) {
        // console.log('代理对象被设置', trapTarget, key, value, receiver);
        let _arguments = arguments;
        //执行监听
        this.m_monitorList.forEach((item) => {
            //先判断代理目标
            if (item._obj && item._obj != receiver) {
                return;
            }
            if (item._key && item._key != key) {
                return;
            }
            //执行回调
            item._back.call(item._this, ..._arguments);
        });
    }
}


/***/ }),

/***/ "./src/_T/GameT/GamePool.ts":
/*!**********************************!*\
  !*** ./src/_T/GameT/GamePool.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GamePool),
/* harmony export */   "EGamePoolSign": () => (/* binding */ EGamePoolSign)
/* harmony export */ });
/**
 * 游戏对象池
 * ! 只能游戏内使用，不要在工具中使用
 * ! 尽量只在重复创建非常多对象的地方使用，不然会得不偿失
 */
class GamePool {
    /**
     * 获取一个元素
     * @param _sign
     */
    static getItem(_sign) {
        //先到本地对象池列表中查找
        if (this.poolList[_sign] && this.poolList[_sign].length > 0) {
            return this.poolList[_sign].pop();
        }
        else {
            switch (_sign) {
                case EGamePoolSign.v3:
                    return (new Laya.Vector3);
                case EGamePoolSign.v2:
                    return (new Laya.Vector2);
            }
        }
    }
    /**
     * 回收元素
     * @param _sign 回收标识
     * @param _item 回收内容
     */
    static recycleItem(_sign, ..._items) {
        if (!this.poolList[_sign]) {
            this.poolList[_sign] = [];
        }
        //只添加不包含的元素
        for (let _o of _items) {
            if (!this.poolList[_sign].includes(_o)) {
                this.poolList[_sign].push(_o);
            }
        }
    }
    /**
     * 获取v3
     */
    static getV3() {
        let _v3 = this.getItem(EGamePoolSign.v3);
        _v3.setValue(0, 0, 0);
        return _v3;
    }
    /**
     * 回收v3
     * @param _v3 待回收的v3
     */
    static recycleV3(..._v3s) {
        this.recycleItem(EGamePoolSign.v3, ..._v3s);
    }
    /**
     * 获取v2
     */
    static getV2() {
        let _v2 = this.getItem(EGamePoolSign.v2);
        _v2.setValue(0, 0);
        return _v2;
    }
    /**
     * 回收v2
     * @param _v2 待回收的v2
     */
    static recycleV2(..._v2s) {
        this.recycleItem(EGamePoolSign.v2, ..._v2s);
    }
}
/** 对象池列表 */
GamePool.poolList = {};
/**
 * 游戏对象池标识
 */
var EGamePoolSign;
(function (EGamePoolSign) {
    /** 3维向量 */
    EGamePoolSign[EGamePoolSign["v3"] = 0] = "v3";
    /** 2维向量 */
    EGamePoolSign[EGamePoolSign["v2"] = 1] = "v2";
})(EGamePoolSign || (EGamePoolSign = {}));


/***/ }),

/***/ "./src/_T/Main/BaseInitLoad.ts":
/*!*************************************!*\
  !*** ./src/_T/Main/BaseInitLoad.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseInitLoad)
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
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packCom('开始加载游戏初始化资源'));
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
/* harmony export */   "EKeyResName": () => (/* binding */ EKeyResName)
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
/* harmony export */   "default": () => (/* binding */ EssentialResUrls)
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
            return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(this._prefabsSceneCache[prefab]) + 'Conventional/' + prefab + '.lh';
        }
        //判断该预制体在哪个场景中被导出的
        for (let _i in this._AllScenePrefabsNames) {
            if (this._AllScenePrefabsNames[_i].indexOf('@' + prefab + '@') != -1) {
                //添加到缓存
                this._prefabsSceneCache[prefab] = _i;
                return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__.default.getResURL(_i) + 'Conventional/' + prefab + '.lh';
            }
        }
        //
        console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__.default.packError('没有在场景找到预制体', prefab, '可能是没有导出场景预制体列表导致的。'));
    }
    /**
     * 设置场景预制体名字列表
     * @param _o 场景预制体集合
     */
    static setPrefabSceneNames(_o) {
        //
        for (let _i in _o) {
            this._AllScenePrefabsNames[_i] = _o[_i];
        }
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _EKeyResName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EKeyResName */ "./src/_T/Res/EKeyResName.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 关键资源点列表管理器
 */
let KeyResManager = class KeyResManager {
    //
    constructor() {
        //关键资源列表
        this.m_KeyResList = {};
        //注册关键资源目录
        this.m_KeyResList = {
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.ConfigJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.ConfigJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.FGUI]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.FGUI + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.SceneJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.SceneJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Font]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Font + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/',
            //其他路径
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.icon]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.icon + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.img]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.img + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.music]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.music + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.sound]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.sound + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.skin]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__.EKeyResName.skin + '/',
        };
        // console.log(this.m_KeyResList);
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
};
KeyResManager = __decorate([
    _Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], KeyResManager);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyResManager);


/***/ }),

/***/ "./src/_T/Res/ResLoad.ts":
/*!*******************************!*\
  !*** ./src/_T/Res/ResLoad.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResLoad),
/* harmony export */   "EResLoadModel": () => (/* binding */ EResLoadModel)
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
/* harmony export */   "default": () => (/* binding */ ResLoadGroup)
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
/* harmony export */   "default": () => (/* binding */ ResLoadItem)
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
/* harmony export */   "default": () => (/* binding */ TMain)
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

/***/ "./src/_T/Ts/InstanceT.ts":
/*!********************************!*\
  !*** ./src/_T/Ts/InstanceT.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InstanceT)
/* harmony export */ });
/**
 * 单例工具
 */
class InstanceT {
    /**
     * 单例类装饰器
     * ! 被装饰的类的构造方法不能时public类型的
     */
    static DecorateInstance() {
        return function (target) {
            //添加一个监听属性
            Object.defineProperty(target, 'instance', {
                get: function () {
                    if (!target[InstanceT.InstanceKey]) {
                        target[InstanceT.InstanceKey] = new target();
                    }
                    return target[InstanceT.InstanceKey];
                }
            });
        };
    }
}
/** 单例属性名 */
InstanceT.InstanceKey = Symbol();


/***/ }),

/***/ "./src/_T/Utils/V3Utils.ts":
/*!*********************************!*\
  !*** ./src/_T/Utils/V3Utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ V3Utils)
/* harmony export */ });
/**
 * 关于v3向量的工具
 */
class V3Utils {
    /**
     * 通过一个字符串构建v3向量
     * @param str
     */
    static parseVector3(str, _outV3) {
        var strs = str.split(',');
        _outV3.setValue(Number(strs[0]), Number(strs[1]), Number(strs[2]));
    }
    /**
     * 设置V3向量长度
     * @param _v3 目标向量
     * @param _l 目标长度
     */
    static setV3Length(_v3, _l) {
        let _length = Laya.Vector3.scalarLength(_v3);
        if (_length != 0) {
            let _a = _l / _length;
            _v3.x = _v3.x * _a;
            _v3.y = _v3.y * _a;
            _v3.z = _v3.z * _a;
        }
    }
    /**
     * 一个点插值移动到另一个点
     * @param _pos 当前点
     * @param _tragetPot 目标点
     * @param _lerp 插值移动比例
     * @param _outV3 输出向量
     * @param _initialLength 初始长度
     */
    static PotLerpMove(_pos, _tragetPot, _lerp, _outV3, _initialLength) {
        if (!_outV3) {
            console.error('必须有一个输出的向量！');
            return;
        }
        //
        let _distance = Laya.Vector3.distance(_pos, _tragetPot);
        //
        Laya.Vector3.lerp(_pos, _tragetPot, _lerp, _outV3);
        //返回进度
        return 1 - (_distance / _initialLength);
    }
    /**
     * 一个点匀速移动到另一个点
     * @param _pos 当前点
     * @param _tragetPot 目标点
     * @param _speed 速度
     * @param _outV3 输出向量
     */
    static PotConstantSpeedMove(_pos, _tragetPot, _speed, _outV3) {
        if (!_outV3) {
            console.error('必须有一个输出的向量！');
            return;
        }
        //
        let _ifEnd;
        let _differV3 = new Laya.Vector3();
        //
        Laya.Vector3.subtract(_tragetPot, _pos, _differV3);
        let _distance = Laya.Vector3.scalarLength(_differV3);
        if (_distance > _speed) {
            this.setV3Length(_differV3, _speed);
            _ifEnd = false;
        }
        else {
            _ifEnd = true;
        }
        //相加
        Laya.Vector3.add(_pos, _differV3, _outV3);
        //
        return _ifEnd;
    }
    /**
     * 旋转一个向量
     * @param _v3 需要旋转的那个向量
     * @param _anger 旋转角度
     * @param _axis 旋转轴
     */
    static RotateV3(_v3, _anger, _axis = this.rotateAxisV3) {
        //旋转四元数
        var q = new Laya.Quaternion();
        Laya.Quaternion.createFromAxisAngle(_axis, (_anger / 180) * Math.PI, q);
        Laya.Vector3.transformQuat(_v3, q, _v3);
    }
}
V3Utils.rotateAxisV3 = new Laya.Vector3(0, 1, 0);


/***/ }),

/***/ "./src/_T/_TConfig.ts":
/*!****************************!*\
  !*** ./src/_T/_TConfig.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _TConfig)
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX0NvbnN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX01haW5Db25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUVuZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGF1c2UudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTZXQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU3RhcnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RVSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9EYXRhTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvU2V0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9TaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvVGVzdERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9NYWluRGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL1Nob3J0RGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaWduRGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0dhbWVNYWluLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvTWFpbi9HYW1lSW5pdExvYWQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9VSUNvbi9VSUNvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19TY2VuZU5vZGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbmZpZy9Db25maWdULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUV4LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0QyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9Sb290VUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvRDNNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvTm9kZVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZURhdGEudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9CYXNlRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvRGF0YVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9PYmplY3RQcm94eVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvR2FtZVQvR2FtZVBvb2wudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvTWFpbi9CYXNlSW5pdExvYWQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9SZXNMb2FkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL1Jlc0xvYWRJdGVtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1RzL0luc3RhbmNlVC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9VdGlscy9WM1V0aWxzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL19UQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJB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O1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFD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QUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckksQ0FBQztJQUVELGVBQWU7UUFDZCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGNBQWM7UUFDYixZQUFZO1FBQ1osbUVBQW1FO1FBQ25FLEVBQUU7UUFDRixtQkFBbUI7UUFDbkIsRUFBRTtRQUNGLE1BQU07UUFDTixJQUFJLDZDQUFLLEVBQUUsQ0FBQztRQUNaLE1BQU07UUFDTixJQUFJLG1EQUFRLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0Q7QUFFRCxPQUFPO0FBQ1AsSUFBSSxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bi46YeP6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQ29uc3RDb25maWcge1xyXG4gICAgLyoqIGZndWnnm7jlhbMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSSA9IHtcclxuICAgICAgICAvKiog5YyF5ZCO57yAICovXHJcbiAgICAgICAgcGFja2FnZUZpbGVFeHRlbnNpb246ICdiaW4nLFxyXG4gICAgfTtcclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwiLi9fTWFpbkNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+acgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0dhbWVDb25maWcge1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a4uOaIj+a1i+ivlSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkdhbWVUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a1i+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6LCD6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmRGVidWc6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDkuIDkuKrmlrDnqpflj6PosIPor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZPcGVuV2luZG93RGVidWc6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbn0iLCIvKipcclxuICog6aG555uu5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTWFpbkNvbmZpZyB7XHJcbiAgICAvKiog5ri45oiP5omA5bGe5Zui6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlYW06IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/lkI3lrZfvvIzlsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOYW1lOiBzdHJpbmcgPSAnTGF5YU1pbmlHYW1lJztcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkhOYW1lOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP6K+05piOICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV4cGxhaW46IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiP77yM6K+05piO44CCJztcclxuICAgIC8qKiDmlbDmja7niYjmnKwg5Y+v5Lul5bim5a2X5q+N5L2G5piv5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmVyc2lvbnM6IHN0cmluZyA9ICcwLjAuMC4xJztcclxuICAgIC8qKiDmmK/lkKbkuIrnur/kuLpmYWxzZeWImeaYr+W8gOWPkeeOr+WigyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPbkxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbW1vbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDb20gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1xM25nOXdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDb20ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ29tPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ29tXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1kYm1pMTNcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUN1c3RvbXNMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lRW5kIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbGF4ZDE5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lRW5kIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUVuZD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUVuZFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUxvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2Exb1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUxvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUxvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tc3l0YTlmXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBhdXNlIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTVnXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGF1c2Uge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGF1c2U+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQYXVzZVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBsYXkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExclwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBsYXkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGxheT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBsYXlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTZXQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNHVcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTZXQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU2V0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU2V0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU3RhcnQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExdlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVN0YXJ0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVN0YXJ0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU3RhcnRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX1VJQnV0dG9uOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9VSTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fdGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX190ZXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbW85anM5eFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fVUlCdXR0b24gPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX1VJID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV90ZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fX3Rlc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9sb29rVkFkOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9sb29rVkFkVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX2xvb2tWQWQ6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hhcmU6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3NoYXJlVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3NoYXJlOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hvd1RvYXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Nob3dUb2FzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW10MXB3OXlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0UGxhdGZvcm0ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFBsYXRmb3JtPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFBsYXRmb3JtXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWQgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWRUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV9fbG9va1ZBZCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV9zaGFyZSA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fc2hhcmVUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV9fc2hhcmUgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV9fc2hvd1RvYXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1taDY2ZTl6XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfUEdhbWVTZXQgZnJvbSBcIi4vRkdVSV9QR2FtZVNldFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBhdXNlIGZyb20gXCIuL0ZHVUlfUEdhbWVQYXVzZVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUxvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUxvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQbGF5IGZyb20gXCIuL0ZHVUlfUEdhbWVQbGF5XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lU3RhcnQgZnJvbSBcIi4vRkdVSV9QR2FtZVN0YXJ0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFVJIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0VUlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVFbmQgZnJvbSBcIi4vRkdVSV9QR2FtZUVuZFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0TWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUNvbSBmcm9tIFwiLi9GR1VJX1BHYW1lQ29tXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lTWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVNldC5VUkwsIEZHVUlfUEdhbWVTZXQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQYXVzZS5VUkwsIEZHVUlfUEdhbWVQYXVzZSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGxheS5VUkwsIEZHVUlfUEdhbWVQbGF5KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU3RhcnQuVVJMLCBGR1VJX1BHYW1lU3RhcnQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0VUkuVVJMLCBGR1VJX1BHYW1lVGVzdFVJKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lRW5kLlVSTCwgRkdVSV9QR2FtZUVuZCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RNYWluLlVSTCwgRkdVSV9QR2FtZVRlc3RNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ29tLlVSTCwgRkdVSV9QR2FtZUNvbSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZU1haW4uVVJMLCBGR1VJX1BHYW1lTWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS5VUkwsIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0pO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX0VtcHR5U2NyZWVuVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vN2t0emliOG9xM25nMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9FbXB0eVNjcmVlblVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9FbXB0eVNjcmVlblVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0RW1wdHlTY3JlZW5cIiwgXCJFbXB0eVNjcmVlblVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9FbXB0eVNjcmVlblVJIGZyb20gXCIuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEVtcHR5U2NyZWVuQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX0VtcHR5U2NyZWVuVUkuVVJMLCBGR1VJX0VtcHR5U2NyZWVuVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX2luaXRMb2FkVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgbV9sb2FkaW5nX3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xvZ286Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YV92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2dhbWVfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL24zb2VkcHA2bmlocjBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfaW5pdExvYWRVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfaW5pdExvYWRVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdExvYWRcIiwgXCJpbml0TG9hZFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvYWRpbmdfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX3RleHRfbG9nbyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV90ZXh0X2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3RleHRfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhX3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZ2FtZV9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfaW5pdExvYWRVSSBmcm9tIFwiLi9GR1VJX2luaXRMb2FkVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRMb2FkQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX2luaXRMb2FkVUkuVVJMLCBGR1VJX2luaXRMb2FkVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1Rlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2h4dTR6YzlkaW9vODBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1Rlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJfVGVzdFwiLCBcIlRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1Rlc3RNYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVGVzdEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9UZXN0TWFpbi5VUkwsIEZHVUlfVGVzdE1haW4pO1xyXG5cdH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgc3RhdGljIHdpZHRoOiBudW1iZXIgPSA3NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0OiBudW1iZXIgPSAxMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTogc3RyaW5nID0gXCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTogc3RyaW5nID0gXCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOiBzdHJpbmcgPSBcInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDogc3RyaW5nID0gXCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTogYW55ID0gXCJcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IE1haW5EYXRhUHJveHkgfSBmcm9tIFwiLi9NYWluRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgU2hvcnREYXRhUHJveHkgZnJvbSBcIi4vU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2lnbkRhdGFQcm94eSB9IGZyb20gXCIuL1NpZ25EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuL1Rlc3REYXRhUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7nrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaJgOacieaVsOaNrlxyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBNYWluRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2V0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2lnbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNob3J0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBNYWluRGF0YSBmcm9tIFwiLi90eXBlL01haW5EYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoTWFpbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBNYWluRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PE1haW5EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE1haW5EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2V0RGF0YSBmcm9tIFwiLi90eXBlL1NldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTZXREYXRhKVxyXG5leHBvcnQgY2xhc3MgU2V0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNldERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2V0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlU2hvcnREYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNob3J0RGF0YSBmcm9tIFwiLi90eXBlL1Nob3J0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNob3J0RGF0YSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhUHJveHkgZXh0ZW5kcyBCYXNlU2hvcnREYXRhUHJveHk8U2hvcnREYXRhPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaG9ydERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaWduRGF0YSBmcm9tIFwiLi90eXBlL1NpZ25EYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2lnbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBTaWduRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNpZ25EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNpZ25EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVGVzdERhdGEgZnJvbSBcIi4vdHlwZS9UZXN0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFRlc3REYXRhKVxyXG5leHBvcnQgY2xhc3MgVGVzdERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxUZXN0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDpn7PmlYggKi9cclxuICAgIGlmT3BlblNvdW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDog4zmma/pn7PkuZAgKi9cclxuICAgIGlmT3Blbk11c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/pnIfliqggKi9cclxuICAgIGlmT3BlblZpYnJhdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7IH0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmluZzogc3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgICBib29sZWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2JqZWN0OiB7XHJcbiAgICAgICAgYTogbnVtYmVyLFxyXG4gICAgICAgIGI6IHN0cmluZyxcclxuICAgICAgICBjOiBib29sZWFuXHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICBiOiAnYicsXHJcbiAgICAgICAgICAgIGM6IHRydWUsXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXIgZnJvbSBcIi4vVUlDb24vVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBUZXN0TWFpbiBmcm9tIFwiLi9fdGVzdC9UZXN0TWFpblwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW4ge1xyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v6I635Y+W5ri45oiP5Yid5aeL5YyW5Yqg6L295a6e5L6LXHJcbiAgICAgICAgbGV0IF9nYW1lSW5pdExvYWQ6IEdhbWVJbml0TG9hZCA9IG5ldyBHYW1lSW5pdExvYWQoKTtcclxuICAgICAgICAvL+W8gOWni+WKoOi9vVxyXG4gICAgICAgIF9nYW1lSW5pdExvYWQubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdExvYWRDb20oKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/liqDovb3lrozmiJBcclxuICAgIHByaXZhdGUgZ2FtZUluaXRMb2FkQ29tKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE5Liq566h55CG5ZmoXHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+WcuuaZr+euoeeQhuWZqFxyXG4gICAgICAgIFVJQ29uTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly91aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+aVsOaNrueuoeeQhuWZqFxyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIC8vIFRPRE8g6L+b5YWl5rWL6K+V5qih5Z2XXHJcbiAgICAgICAgICAgIFRlc3RNYWluLmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgICovXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZUNvbW1vbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvR2FtZUNvbW1vbi9HYW1lQ29tbW9uQmluZGVyXCI7XHJcbmltcG9ydCBHYW1lTWFpbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvR2FtZU1haW4vR2FtZU1haW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlclwiO1xyXG5pbXBvcnQgSW5pdExvYWRCaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0luaXRMb2FkQmluZGVyXCI7XHJcbmltcG9ydCBfVGVzdEJpbmRlciBmcm9tIFwic3JjL0ZHVUkvX1Rlc3QvX1Rlc3RCaW5kZXJcIjtcclxuaW1wb3J0IENvbmZpZ1QsIHsgSUJhc2VDb25maWdDb250YWluZXIgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgeyBGR1VJUGFjayB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9GR1VJUGFja1wiO1xyXG5pbXBvcnQgQmFzZUluaXRMb2FkIGZyb20gXCJzcmMvX1QvTWFpbi9CYXNlSW5pdExvYWRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwic3JjL19UL1Jlcy9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCJzcmMvX1QvUmVzL0tleVJlc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRJdGVtXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdEVtcHR5U2NyZWVuVUlDb25cIjtcclxuaW1wb3J0IEluaXRMb2FkVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb25cIjtcclxuaW1wb3J0IHsgQnVpbGRDb25maWdUcyB9IGZyb20gXCIuLi9fY29uZmlnL0J1aWxkQ29uZmlnVHNcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuaW1wb3J0IHsgX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB9IGZyb20gXCIuLi9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lc1wiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMlumcgOimgeeahHVp5o6n5Yi25Zmo5a6e5L6LXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbmV3IEluaXRFbXB0eVNjcmVlblVJQ29uKCk7XHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24gPSBuZXcgSW5pdExvYWRVSUNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Yqg6L295LmL5YmNXHJcbiAgICAgKiDlj6/ku6XlnKjov5nph4zliJ3lp4vljJbkuIDkupvkuJzopb9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRCZWZvcmUoKSB7XHJcbiAgICAgICAgLy/orr7nva7ot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIEtleVJlc01hbmFnZXIuYWRkUmVzVXJsKF9pLCBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Sb290UmVzKSArIGAke19pfS9gKTsvL+azqOWFpemihOWItuS9k+i3r+W+hFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rumihOWItuS9k+WcuuaZr+WvueeFp1xyXG4gICAgICAgIEVzc2VudGlhbFJlc1VybHMuc2V0UHJlZmFiU2NlbmVOYW1lcyhfRUFsbFNjZW5lUHJlZmFic05hbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWKoOi9vemhueWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIGxldCBfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gW107XHJcbiAgICAgICAgLy/ms6jlhaXliIbljIXliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0U3VicGFja2FnZUxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+iOt+WPlmZndWnliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpemFjee9ruihqOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2xvYWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpeWIhuWMheWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBpbW1pdFN1YnBhY2thZ2VMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaVmZ3Vp55qE5omA5pyJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/lhYjnu5HlrprmiYDmnIl1aVxyXG4gICAgICAgIHRoaXMuRkdVSUJpbmRlcigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdEVtcHR5U2NyZWVuJywgdW5kZWZpbmVkLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdEVtcHR5U2NyZWVuKSkpOy8v55m95bGPdWnljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0TG9hZCcsIDAsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0TG9hZCkpKTsvL+WKoOi9veeVjOmdouWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVCYWcnKSk7Ly/ljp/ljIXvvIzpgJrluLjkuLrotYTmupDljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQ29tbW9uJykpOy8v5YWs5YWx5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnX1Rlc3QnKSk7Ly/mtYvor5XljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lTWFpbicsIDApKTsvL+S4u+WMhVxyXG4gICAgfVxyXG4gICAgLy9mZ3Vp57uR5a6aXHJcbiAgICBwcml2YXRlIEZHVUlCaW5kZXIoKSB7XHJcbiAgICAgICAgSW5pdEVtcHR5U2NyZWVuQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBJbml0TG9hZEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZUNvbW1vbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgX1Rlc3RCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVNYWluQmluZGVyLmJpbmRBbGwoKTtcclxuICAgIH1cclxuICAgIC8v6I635Y+WRkdVSeWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBnZXRGR1VJTG9hZEl0ZW1zKF9uYW1lOiBzdHJpbmcsIF9hdGxpYXNDb3VudD86IG51bWJlciwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpOiBSZXNMb2FkSXRlbSB7XHJcbiAgICAgICAgbGV0IF9mZ3VpUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIC8v5rOo5YWl5YyF6Lev5b6EXHJcbiAgICAgICAgbmV3IEZHVUlQYWNrKEVzc2VudGlhbFJlc1VybHMuRkdVSVBhY2tVUkwoX25hbWUpLCBfYXRsaWFzQ291bnQpLmdldFJlc1VSTChfZmd1aVJlcyk7XHJcbiAgICAgICAgLy/liJvlu7rliqDovb3poblcclxuICAgICAgICByZXR1cm4gbmV3IFJlc0xvYWRJdGVtKF9mZ3VpUmVzLCBFUmVzTG9hZE1vZGVsLkQyLCBfbmFtZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5YyFXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRkdVSVBhY2thZ2UoX25hbWUpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICAvL+a3u+WKoOWMhVxyXG4gICAgcHVibGljIGFkZEZHVUlQYWNrYWdlKF9uYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKEVzc2VudGlhbFJlc1VybHMuRkdVSVBhY2tVUkwoX25hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpemFjee9ruihqOWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBpbW1pdENvbmZpZ0xvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/phY3nva7ooahcclxuICAgICAgICBsZXQgX2NvbmZpZ1JlczogYW55W10gPSBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gRXNzZW50aWFsUmVzVXJscy5Db25maWdKc29uVVJMKChpdGVtIGFzIElCYXNlQ29uZmlnQ29udGFpbmVyKS5maWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lnLrmma9qc29u5paH5Lu2XHJcbiAgICAgICAgbGV0IHNjZW5lSnNvblJlczogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBzY2VuZUpzb25SZXMucHVzaChFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaChuZXcgUmVzTG9hZEl0ZW0oWy4uLl9jb25maWdSZXMsIC4uLnNjZW5lSnNvblJlc10sIEVSZXNMb2FkTW9kZWwuRDIsICdjb25maWcnLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJblhajpg6jphY3nva7ooajlhoXlrrlcclxuICAgICAgICAgICAgQ29uZmlnVC5CdWlsZENvbmZpZ3MoQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nTGlnaHQoJ+aJgOaciemFjee9ruihqOWGheWuuS0+JywgQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKSkpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+eZveWxj+aYvuekulxyXG4gICAgcHJpdmF0ZSBpbml0RW1wdHlTY3JlZW4oKSB7XHJcbiAgICAgICAgLy/mmL7npLrnmb3lsY91aVxyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5TaG93KCk7XHJcbiAgICB9XHJcbiAgICAvL+WKoOi9veaYvuekulxyXG4gICAgcHJpdmF0ZSBpbml0TG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgICAgIC8v5pi+56S65Yqg6L29dWlcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5ri45oiP5Yqg6L296L+b5bqmLT4nLCBfaSk7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pbml0TG9hZFVJQ29uICYmIHRoaXMubV9pbml0TG9hZFVJQ29uLmlmU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5zZXRQbGFuKF9pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQ29tKCkge1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCJzcmMvX1QvRDMvc2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv566h55CG5ZmoXHJcbiAqIOeuoeeQhuWcuuaZr++8jOiOt+WPluWcuuaZr++8jOeEtuWQjumAmui/h+WcuuaZr+WunuS+i+aehOW7uuWcuuaZr+S4reWvueixoeeahOiKgueCuVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqIOWcuuaZr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTGlzdDoge1xyXG4gICAgICAgIFtpbmRleDogc3RyaW5nXTogU2NlbmUsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flnLrmma/lkI3lrZfojrflj5blnLrmma9cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lPFMgZXh0ZW5kcyBTY2VuZT4oX25hbWU6IHN0cmluZyk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXSBhcyBTO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIGxldCBfbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo5Zy65pmvXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgX25hbWUgPSBfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdID0gbmV3IFNjZW5lKF9uYW1lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM55qE5Zy65pmv5a6e5L6L5YyW5LiN5ZCM55qE57G7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX25hbWUpIHsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlVUlDb25NYW5hZ2VyIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlclByb3h5IGZyb20gXCIuL1VJQ29uTWFuYWdlclByb3h5XCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uTWFuYWdlciBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXI8VUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFVJQ29uTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICog55m95bGPdWnmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfRW1wdHlTY3JlZW5VST4ge1xyXG4gICAgLyoqIFVJ5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9FbXB0eVNjcmVlblVJO1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVNpbmdsZVVJQ29uIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlU2luZ2xlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRVSUNvbiBleHRlbmRzIEJhc2VTaW5nbGVVSUNvbjxGR1VJX2luaXRMb2FkVUk+IHtcclxuICAgIC8qKiBVSSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfaW5pdExvYWRVSTtcclxuXHJcbiAgICAvL+aYvuekuuWbnuiwg1xyXG4gICAgcHJvdGVjdGVkIF9PblNob3coKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGlzLnVpLm1fdGV4dF9sb2dvLnRleHQgPSBfTWFpbkNvbmZpZy5aSE5hbWU7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfdi50ZXh0ID0gX01haW5Db25maWcuVmVyc2lvbnM7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIHRoaXMudWkubV90ZXh0X2V4cGxhaW4udGV4dCA9IF9NYWluQ29uZmlnLlRlYW07XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfbGF5YV92LnRleHQgPSBMYXlhLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIF9pICo9IDEwMDtcclxuICAgICAgICB0aGlzLnVpLm1fcHJvZ3Jlc3MudmFsdWUgPSBfaTtcclxuICAgICAgICB0aGlzLnVpLm1fbG9hZGluZ19wcm9ncmVzcy50ZXh0ID0gTWF0aC5mbG9vcihfaSkgKyAnICUnO1xyXG4gICAgfVxyXG59IiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbmZpZyB9IGZyb20gXCIuL19UZXN0Q29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xuXG4vKipcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXG4qICEg6Ieq5Yqo5a+85Ye6XG4qL1xuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieeahOmFjee9ruihqOWGheWuuVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcbiAgICAgICAgbGV0IGNvbmZpZ3M6IGFueVtdID0gW107XG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uc3QpO1xuICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICB9XG59XG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDlhbPljaFpZFvlv4XopoFdICovXG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgLyoqIOWFs+WNoeWQjeWtl++8jOWPr+S7pemAmui/h+WQjeWtl+iOt+WPluWFs+WNoeaVsOaNriAqL1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xuICAgICAgICBzY2VuZTogc3RyaW5nO1xuICAgICAgIC8qKiDoioLngrnlkI3lrZfliJfooaggKi9cbiAgICAgICAgc2NlbmVOYW1lOiBzdHJpbmc7XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnU2NlbmVOb2RlQ29uZmlnLmpzb24nO1xufVxuICAgICIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9UZXN0Q29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC877yM5LiN566h5LuA5LmI5YC877yM6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5a2X56ym5Liy77yM5LiN566h5piv5LuA5LmI5YC877yM5pyA5ZCO6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIHM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC877yM5LiN566h5LuA5LmI5YC86YO95Lya6L2s5biD5bCU5YC8ICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfVGVzdENvbmZpZy5EYXRhVHlwZVtdID0gW107XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25zdCBjb25zdOmFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbnN0IHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25zdCc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlSAqL1xuICAgICAgICBuOiBudW1iZXI7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlTIgKi9cbiAgICAgICAgbjI6IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMyAqL1xuICAgICAgICBuMzogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UyICovXG4gICAgICAgIHMyOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTMgKi9cbiAgICAgICAgczM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTEgKi9cbiAgICAgICAgYjI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTIgKi9cbiAgICAgICAgYjM6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xuICAgICAgICBiNDogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMyAqL1xuICAgICAgICBiNTogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNCAqL1xuICAgICAgICBiNjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNSAqL1xuICAgICAgICBiNzogYm9vbGVhbjtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VICovXG4gICAgICAgIG86IGFueTtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMSAqL1xuICAgICAgICBvMjogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UyICovXG4gICAgICAgIG8zOiBhbnk7XG4gICAgfVxuICAgIC8qKiBjb25zdOaVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YTogX1Rlc3RDb25zdC5EYXRhVHlwZSA9IG51bGw7XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25zdC5qc29uJztcbn1cbiAgICAiLCIvKipcclxuICog5omA5pyJ5Zy65pmv5a+55bqU55qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMge1xyXG4gICAgUHJlZmFiID0gJ0BDdWJlQEBTcGhlcmVAJyxcclxuXHJcbn1cclxuLy8iLCIvKipcclxuICog5omA5pyJ5a+85Ye65Zy65pmv5ZCN5a2XXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsRXhwb3J0U2NlbmVOYW1lIHtcclxuICAgIFNjZW5lID0gJ1NjZW5lJyxcclxuXHJcbn0iLCJpbXBvcnQgeyBJQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9jb20vSUNvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcIi4uL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCIuLi9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVCB7XHJcbiAgICAvKipcclxuICAgICAqIOijhemlsOmFjee9ruihqOS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9jb25maWcg6YWN572u6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVDb25maWdQcm94eShfY29uZmlnOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7phY3nva7ooajmqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5jb25maWdUZW1wbGF0ZSA9IF9jb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66YWN572u6KGo5YiX6KGoXHJcbiAgICAgKiDlj6rmnoTlu7rvvIzkuI3liqDovb1cclxuICAgICAqIEBwYXJhbSBfY29uZmlncyDphY3nva7ooajliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBCdWlsZENvbmZpZ3MoX2NvbmZpZ3M6IElCYXNlQ29uZmlnQ29udGFpbmVyW10pIHtcclxuICAgICAgICBsZXQgX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9jb25maWdzKSB7XHJcbiAgICAgICAgICAgIF91cmwgPSBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoX28uZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAvL+Whq+WFheaVsOaNrlxyXG4gICAgICAgICAgICBzd2l0Y2ggKF9vLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25maWdDb250YWluZXIpLmRhdGFzID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbnN0Q29udGFpbmVyKS5kYXRhID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqGpzb27mlbDmja5cclxuICAgICAqIO+8geazqOaEj++8jOiOt+WPluS6huivpei1hOa6kOivpei1hOa6kOWwseS8muiiq+WIoOmZpOaOiVxyXG4gICAgICogQHBhcmFtIF91cmwg6YWN572u6KGo6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnSnNvbkRhdGEoX3VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvL+iOt+WPlui1hOa6kFxyXG4gICAgICAgIGxldCBjb25maWdEYXRhOiBJQ29uZmlnRGF0YSA9IFJlc0xvYWQuR2V0UmVzKF91cmwsIHRydWUpO1xyXG4gICAgICAgIC8v5riF55CG6LWE5rqQ57yT5a2Y5Y+q5L2/55So5LiA5qyhXHJcbiAgICAgICAgUmVzTG9hZC5DbGVhclJlcyhfdXJsKTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWOi+e8qVxyXG4gICAgICAgIGlmIChjb25maWdEYXRhLnppcCkge1xyXG4gICAgICAgICAgICAvL+ino+WOi1xyXG4gICAgICAgICAgICBsZXQgX3RpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0RhdGEuZGF0YSA9IEpTT04ucGFyc2UocGFrby5pbmZsYXRlKGNvbmZpZ0RhdGEuZGF0YSwgeyB0bzogJ3N0cmluZycgfSkpO1xyXG4gICAgICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICAgICAgLy/liKTmlq3op6Pljovml7bpl7Tlt65cclxuICAgICAgICAgICAgaWYgKF90aW1lID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfphY3nva7ooajop6Pljovml7bpl7Tov4fplb/vvIzlj6/og73mmK/phY3nva7ooajmlofku7bov4flpKctPicsIF91cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBjb25maWdEYXRhLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbvphY3nva7ooajlrrnlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbmZpZyDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ0NvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja7liJfooaggKi9cclxuICAgIGRhdGFzOiBhbnlbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbnN0IOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhOiBhbnk7XHJcbn0iLCIvKipcclxuICog5omT5Y2w5Y+w5bi455So6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQ29uc3Qge1xyXG5cclxuICAgIC8qKiDlhazlhbHmoLflvI8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBwdWJsaWNTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaZrumAmua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjOUJBNEI0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOi9u+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nTGlnaHRTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNzc2ZDhhJywgJyNFQkVCRUInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6K2m5ZGK5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJuU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzVjNmUwNicsICcjZmZhOTMxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmUmeivr+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXJyb3JTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNlYzAxMDEnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaIkOWKn+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29tU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjYWRlNDk4Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX2NvbG9yIOWtl+S9k+minOiJslxyXG4gICAgICogQHBhcmFtIF9iZ0NvbG9yIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFN0eWxlKF9jb2xvcjogc3RyaW5nLCBfYmdDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7X2JnQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGArIHRoaXMucHVibGljU3R5bGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVDb25zdCBmcm9tIFwiLi9Db25zb2xlQ29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmiZPljbDlj7DmianlsZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFeCB7XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zdHlsZSDmoLflvI9cclxuICAgICAqIEBwYXJhbSBfcGFyIOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYWNrKF9zdHlsZTogc3RyaW5nLCBfcGFyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJWMlcycsIF9zdHlsZSwgJ2xvZycsIC4uLl9wYXJdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZyguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmui9u+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nTGlnaHQoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nTGlnaHRTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaIkOWKn+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrQ29tKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmNvbVN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6K2m5ZGK5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tXYXJuKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0Lndhcm5TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijhemUmeivr+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrRXJyb3IoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuZXJyb3JTdHlsZSwgYW55KTtcclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSS9GR1VJUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAyZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDJNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiogZmd1aeagueeuoeeQhuWZqCAqL1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75Y2V6aG16Z2i5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2luZ2xlVUlDb248VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+IGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiBfVUkg57G75Z6LICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJOiBJVUlDcmVhdGU8VUk+O1xyXG5cclxuICAgIC8qKiB1aeexu+Wei+WIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBkZWZhdWx0OiBJQmFzZVVJQ29uRGVmaW5lcyxcclxuICAgIH07XHJcblxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcml2YXRlIG1fdWk6IFVJO1xyXG5cclxuICAgIC8qKiDojrflj5Z1aSAqL1xyXG4gICAgcHVibGljIGdldCB1aSgpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICAvL+iuvue9ruWNlXVpXHJcbiAgICAgICAgICAgIHRoaXMuX1VJcyA9IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB1aUNyZWF0ZTogdGhpcy5fVUksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu65a6M5oiQdWnlkI7nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHtcclxuICAgICAgICB0aGlzLm1fdWkgPSB0aGlzLl9VSXMuZGVmYXVsdC51aSBhcyBVSTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uUHJveHkgZnJvbSBcIi4vQmFzZVVJQ29uUHJveHlcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5pbXBvcnQgRkd1aURhdGEgZnJvbSBcIi4vRkd1aURhdGFcIjtcclxuaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJUm9vdE1hbmFnZXJcIjtcclxuaW1wb3J0IEZHVUlUIGZyb20gXCIuL0ZHVUlUXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcbmltcG9ydCBSb290VUlDb24gZnJvbSBcIi4vUm9vdFVJQ29uXCI7XHJcblxyXG4vKipcclxuICogVUnmjqfliLblmajln7rnsbso55So5p2l5o6n5Yi2VUnnlYzpnaIpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb24gZXh0ZW5kcyBSb290VUlDb24ge1xyXG4gICAgLyoqIFVJ5YiX6KGo77yM5Y+v5Lul5pi+56S65b6I5aSa5LiqdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSUJhc2VVSUNvbkRlZmluZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDllK/kuIDplK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOiOt+WPluWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3ltYm9sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHByaXZhdGUgbV9yb290VUk6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHVibGljIGdldCByb290VUkoKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RVSTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Zyo6ZqQ6JeP5pe25riF55CG5o6JdWnvvIzpu5jorqTkuLp0cnVlICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmQ2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBVSeWxgue6p+exu+Wei++8jOW/hemhu+WcqOWIneWni+WMluaXtuiuvue9riAqL1xyXG4gICAgcHJvdGVjdGVkIF9sYXllcjogRVVJTGF5ZXIgPSBFVUlMYXllci5QYW5lbDtcclxuXHJcbiAgICAvKiogdWnlsYLnuqcgKi9cclxuICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwcml2YXRlIG1faWZTaG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp5Luj55CG5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJveHlVSUxpc3Q6IFNldDxCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmFkZChfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmRlbGV0ZShfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uU2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdWnku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuZFVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5lbmRQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6dWlcclxuICAgIHByaXZhdGUgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUlCZWZvcmVFeCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5om+5YiwdWnliJvlu7rlmajliJfooaghJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIneWni+WMluagueiKgueCuXVpXHJcbiAgICAgICAgdGhpcy5tX3Jvb3RVSSA9IG5ldyBmZ3VpLkdDb21wb25lbnQoKTtcclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuZ2V0TGF5ZXJVSSh0aGlzLl9sYXllcikuYWRkQ2hpbGQodGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSB0aGlzLm1fcm9vdFVJLmFkZENoaWxkKHRoaXMuX1VJc1tfaV0udWlDcmVhdGUuY3JlYXRlSW5zdGFuY2UoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJRVgoKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7p1aeS5i+WJjeeahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHsgfVxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDIOWPquiDveWcqOaJqeWxleS4reS9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUVYKCkgeyB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujHVp5ZCO5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aVxyXG4gICAgICogQHBhcmFtIF9uYW1lIHVp5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4oX25hbWU6IHN0cmluZyk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUlzW19uYW1lXS51aSBhcyBVSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdyguLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb25TaG93QmVmb3JlKC4uLnBhcik7XHJcbiAgICAgICAgbGV0IF9pZk5ldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSSB8fCB0aGlzLm1fcm9vdFVJLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgLy/liJvlu7p1aVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgICAgIF9pZk5ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5Yiw5b2T5YmN5bGC57qn6aG25bGC5pi+56S6XHJcbiAgICAgICAgRkdVSVQuc2V0VUlUb3BTaG93KHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIC8v5omL5Yqo5pu05paw5LiA5qyhXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgLy/nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25TaG93KF9pZk5ldywgLi4ucGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49cclxuICAgICAqIEBwYXJhbSBfaWZDbGVhciDmmK/lkKbmuIXnkIZcclxuICAgICAqIEBwYXJhbSBwYXIg5YW25LuW5Y+C5pWw77yM5Lya5Lyg5Yiw6ZqQ6JeP55qE5Zue6LCD5LitXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBIaWRlKF9pZkNsZWFyOiBib29sZWFuID0gdGhpcy5faWZDbGVhciwgLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb25IaWRlQmVmb3JlKHBhcik7XHJcbiAgICAgICAgaWYgKF9pZkNsZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VVSSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPlua2iOebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25IaWRlKF9pZkNsZWFyLCBwYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeiiq+a4heeQhuaXtueahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9kaXNwb3NlVUkoKSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqIOabtOaWsOWkp+WwjyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgIC8v5qC55o2u5a2QdWnmkLrluKbnmoTmlbDmja7pgILphY3lsY/luZXlpKflsI9cclxuICAgICAgICBsZXQgX2RhdGE6IEZHdWlEYXRhO1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBfZGF0YSA9IHRoaXMuX1VJc1tfaV0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFfZGF0YSB8fCAhX2RhdGEuaWZVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoLCBfaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoIC0gX2RhdGEubGVmdCAtIF9kYXRhLnJpZ2h0LCBfaGVpZ2h0IC0gX2RhdGEuYm90dG9tIC0gX2RhdGEudG9wKTtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWShfZGF0YS5sZWZ0LCBfZGF0YS50b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu3Vp5o6n5Yi25Zmo57G75Z6L5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlVUlDb25EZWZpbmVzIHtcclxuICAgIC8qKiB1aeWIm+W7uuWZqCAqL1xyXG4gICAgdWlDcmVhdGU6IElVSUNyZWF0ZTxmZ3VpLkdDb21wb25lbnQ+O1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YT86IEZHdWlEYXRhO1xyXG4gICAgLyoqIHVpICovXHJcbiAgICB1aT86IGZndWkuR0NvbXBvbmVudDtcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uIGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIHVp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAqIOe7n+S4gOeuoeeQhnVp5o6n5Yi25ZmoXHJcbiAqIOW/hemhu+mFjeWQiOS7o+eQhuWZqOS9v+eUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlcjxQcm94eSBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG4gICAgLyoqIHVp5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aVByb3h5OiBQcm94eTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIOahhuaetuiwg+eUqO+8jOS4jeiDveebtOaOpeiwg+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5LmL5ZCO55qE5qOA5rWLXHJcbiAgICBwcml2YXRlIF9faW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJbnrqHnkIbnmoR1aeWIl+ihqCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlQcm94eSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlnVp5Luj55CGJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5Luj55CG5Zmo5Luj55CGXHJcbiAgICAgICAgICAgIHRoaXMubV91aVByb3h5LnNldFByb3h5KHRoaXMubV91aUNvbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHVpIOaOp+WItuWZqOeuoeeQhuWZqOS7o+eQhlxyXG4gKiDotJ/otKPku6PnkIZ1aeaOp+WItuWZqOeuoeeQhuWZqOS4reeahOaOp+WItuWZqO+8jOmYsuatouW+queOr+S+nei1llxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXJQcm94eSB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcblxyXG4gICAgLyoqIOiOt+WPluW9k+WJjeaYvuekuueahHVpICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2hvd1VJKCk6IEJhc2VVSUNvbltdIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogQmFzZVVJQ29uW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLmlmU2hvdyAmJiBfdWlDb25zLnB1c2godGhpcy5tX3VpQ29uTGlzdFtfaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfdWlDb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfdWlMaXN0IHVp5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eShfdWlMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubV91aUNvbkxpc3QgPSBfdWlMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2udWnplK7lgLzojrflj5bkuIDkuKp1aVxyXG4gICAgICogQHBhcmFtIF9rZXkgdWnplK7lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uPihfa2V5OiBzdHJpbmcpOiBVSUNvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aUNvbkxpc3RbX2tleV0gYXMgVUlDb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLp1aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOe0ouW8leaIluiAhee0ouW8leWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9pZkhpZGVPdGhlclVJIOaYr+WQpumakOiXj+WFtuS7lnVpIFt0cnVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10sIF9pZkhpZGVPdGhlclVJOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmpDol4/lhbbku5Z1aVxyXG4gICAgICAgIGlmIChfaWZIaWRlT3RoZXJVSSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV91aUNvbnMuaW5jbHVkZXMoX2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtfaV0uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3VpQ29uTGlzdFtpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5TaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj3Vp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo5a6e5L6L5oiW5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lvZPliY3mmL7npLrnmoTmiYDmnIl1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZUFsbFVJKCkge1xyXG4gICAgICAgIHRoaXMub25TaG93VUkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxufSIsIi8qKlxyXG4gKiBVSeWIhuWxgizmjInpobrluo/mmL7npLpcclxuICovXHJcbmV4cG9ydCBlbnVtIEVVSUxheWVyIHtcclxuICAgIC8qKiDog4zmma/pobXpnaIgKi9cclxuICAgIEJnID0gJ0JnJyxcclxuICAgIC8qKiDkuLvnlYzpnaIgIOawuOi/nOWtmOWcqCAqL1xyXG4gICAgTWFpbiA9IFwiTWFpblwiLFxyXG4gICAgLyoqIOmdouadvyAg5Y+v5Lul5pyJ5b6I5aSaICovXHJcbiAgICBQYW5lbCA9IFwiUGFuZWxcIixcclxuICAgIC8qKiDlvLnnqpcgKi9cclxuICAgIFBvcHVwID0gXCJQb3B1cFwiLFxyXG4gICAgLyoqIOmBk+WFtyAqL1xyXG4gICAgUHJvcCA9ICdQcm9wJyxcclxuICAgIC8qKiDlsI/pg6jku7YgKi9cclxuICAgIFRpcCA9IFwiVGlwXCIsXHJcbiAgICAvKiog5pqC5YGcICovXHJcbiAgICBQYXVzZSA9ICdQYXVzZScsXHJcbiAgICAvKiog6K6+572uICovXHJcbiAgICBTZXQgPSAnU2V0JyxcclxuICAgIC8qKiDmnIDpq5ggKi9cclxuICAgIFRvcCA9ICdUb3AnLFxyXG4gICAgLyoqIOWKoOi9vemhtemdoiAqL1xyXG4gICAgTG9hZGluZyA9ICdMb2FkaW5nJyxcclxuICAgIC8qKiDljp/nlJ8gKi9cclxuICAgIE5hdGl2ZSA9ICdOYXRpdmUnLFxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5YyF57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRkdVSVBhY2sge1xyXG4gICAgLy8g5YyF6Lev5b6EXHJcbiAgICBwcml2YXRlIHBhY2tQYXRoOiBzdHJpbmc7XHJcbiAgICAvLyDlhbbku5botYTmupDmlbDph49cclxuICAgIHByaXZhdGUgYXRsaWFzQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWMhVxyXG4gICAgICogQHBhcmFtIF9wYWNrVXJsIOWMheWcsOWdgFxyXG4gICAgICogQHBhcmFtIF9hdGxpYXNDb3VudCDlm77pm4bmlbDph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX3BhY2tVcmw6IHN0cmluZywgX2F0bGlhc0NvdW50OiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHRoaXMucGFja1BhdGggPSBfcGFja1VybDtcclxuICAgICAgICB0aGlzLmF0bGlhc0NvdW50ID0gX2F0bGlhc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3VybHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRSZXNVUkwoX3VybHMpO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQyREFzeW5jKF91cmxzLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSB1cmxzIOi+k+WHuuaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVzVVJMKHVybHM6IGFueVtdKSB7XHJcbiAgICAgICAgLy/liqDlhaXljIXlkI1cclxuICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyAnLicgKyBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbiwgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0pO1xyXG4gICAgICAgIC8v5Yqg6L2957q555CG6ZuGXHJcbiAgICAgICAgaWYgKHRoaXMuYXRsaWFzQ291bnQgPj0gMCkge1xyXG4gICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczAucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmF0bGlhc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMF9cIiArIGkgKyBcIi5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogRkdVSSDmoLnnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlSb290TWFuYWdlciB7XHJcbiAgICAvL1VJ5bGC57qndWnliJfooahcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5ZXJVSUxpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBmZ3VpLkdDb21wb25lbnQgfTtcclxuXHJcbiAgICAvLyDojrflj5bmn5DkuIDlsYJVSVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXllclVJKGxheWVyVHlwZTogRVVJTGF5ZXIpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJVSUxpc3RbbGF5ZXJUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8g6K6+572u5YyF5ZCN5ZCO57yAXHJcbiAgICAgICAgZmd1aS5VSUNvbmZpZy5wYWNrYWdlRmlsZUV4dGVuc2lvbiA9IF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoZmd1aS5HUm9vdC5pbnN0LmRpc3BsYXlPYmplY3QpO1xyXG4gICAgICAgIC8v5re75YqgRkdVSeagueiKgueCueaMiemhuuW6j+aYvuekulxyXG4gICAgICAgIHRoaXMubGF5ZXJVSUxpc3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFVUlMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVyVUlMaXN0W0VVSUxheWVyW19pXV0gPSBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQobmV3IGZndWkuR0NvbXBvbmVudCgpKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIGZndWkg5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJVCB7XHJcbiAgICAvKiogdWnlsYLnuqdrZXkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIFVJTGF5ZXJLZXk6IHN5bWJvbCA9IFN5bWJvbCgnVUlMYXllcicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnlsYLnuqfvvIzpmaTkuoZmZ3Vp5qC5566h55CG5Zmo5Zue6LCD55So77yM5YW25LuW55qE5Zyw5pa56K+35LiN6KaB6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHBhcmFtIF9sYXllciDlsYLnuqcgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCwgX2xheWVyOiBFVUlMYXllcikge1xyXG4gICAgICAgIF91aVt0aGlzLlVJTGF5ZXJLZXldID0gX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWnlsYLnuqdcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcmV0dXJucyB1aeWxgue6p1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIF91aVt0aGlzLlVJTGF5ZXJLZXldIGFzIEVVSUxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnpobblsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSVRvcFNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWkp+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1heChfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aeW6leWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJRG93blNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWwj+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1pbihfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciAtIDE7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qC5dWnmjqfliLblmahcclxuICog5omA5pyJdWnmjqfliLblmajnsbvlnovnsbvlnYfnlLHmraTnu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJvb3RVSUNvbiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekulVJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2hvdyguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZOZXcg5piv5ZCm5paw5bu6XHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePVUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBIaWRlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZkRlbGV0ZSDmmK/lkKbliKDpmaRcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG59IiwiaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vc2NlbmUvR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIDNk566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM01hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8qKiDliJ3lp4vljJblhajlsYDnjq/looMgKi9cclxuICAgICAgICBHbG9iYWxEM0Vudmlyb25tZW50LmluaXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIOWFqOWxgDNE546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxEM0Vudmlyb25tZW50IHtcclxuICAgIC8qKiAzZOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9TY2VuZTNEOiBMYXlhLlNjZW5lM0Q7XHJcbiAgICAvKiog5pGE5YOP5py6ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0NhbWVyYTogTGF5YS5DYW1lcmE7XHJcbiAgICAvKiog54Gv5YWJICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0xpZ2h0OiBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG5cclxuICAgIC8qKiDojrflj5YgM2TlnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNjZW5lM0QoKTogTGF5YS5TY2VuZTNEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX1NjZW5lM0Q7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOaRhOWDj+acuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ2FtZXJhKCk6IExheWEuQ2FtZXJhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0NhbWVyYTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg54Gv5YWJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMaWdodCgpOiBMYXlhLkRpcmVjdGlvbkxpZ2h0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0xpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5tX1NjZW5lM0QsXHJcbiAgICAgICAgICAgIGNhbWVyYTogdGhpcy5tX0NhbWVyYSxcclxuICAgICAgICAgICAgbGlnaHQ6IHRoaXMubV9MaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRCA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCkgYXMgTGF5YS5TY2VuZTNEO1xyXG4gICAgICAgIHRoaXMubV9DYW1lcmEgPSBuZXcgTGF5YS5DYW1lcmE7XHJcbiAgICAgICAgdGhpcy5tX0xpZ2h0ID0gbmV3IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0NhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0xpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lUG9vbCBmcm9tIFwic3JjL19UL0dhbWVUL0dhbWVQb29sXCI7XHJcbmltcG9ydCBWM1V0aWxzIGZyb20gXCJzcmMvX1QvVXRpbHMvVjNVdGlsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNDb25maWcsIElQcmVmYWJzRGlmZmVyQ29uZmlnIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDoioLngrnlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVUIHtcclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u6IqC54K55pWw5o2u5Yid5aeL5YyW6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfdGFyZ2V0IOebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE5vZGUoX3NwcjogTGF5YS5TcHJpdGUzRCwgX3RhcmdldDogSU5vZGVDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLCBfdGFyZ2V0KTtcclxuICAgICAgICAvL+iuvue9ruWQjeWtl1xyXG4gICAgICAgIF9zcHIubmFtZSA9IF90YXJnZXQubmFtZTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWPmOaNouebuOWFs+eahOWxnuaAp1xyXG4gICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5L2N572uXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5L2N572uXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24sIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u5peL6L2sXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5peL6L2sXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlciwgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9rue8qeaUvlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOe8qeaUvlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnNjYWxlLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+inpuWPkeebkeWQrFxyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAvL+iuvue9ruW3ruW8glxyXG4gICAgICAgIGxldCBfcHJlZmFiQ29uZmlnOiBJUHJlZmFic0NvbmZpZyA9IF90YXJnZXQgYXMgSVByZWZhYnNDb25maWc7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiTmFtZSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3NwciwgX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Nwci50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5Liq57K+54G15ZKM5rqQ57K+54G155qE5beu5byCXHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfZGlmZmVyIOW3ruW8guaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZXREaWZmZXIoX3NwcjogTGF5YS5TcHJpdGUzRCwgX2RpZmZlcjogSVByZWZhYnNEaWZmZXJDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u5beu5byCJywgX3NwciwgX2RpZmZlcik7XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrkuLTml7blkJHph49cclxuICAgICAgICBsZXQgX2NlbnRyZVYzOiBMYXlhLlZlY3RvcjMgPSBHYW1lUG9vbC5nZXRWMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2RpZmYgb2YgX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3Nwci5nZXRDaGlsZEF0KF9kaWZmLmluZGV4KSBhcyBMYXlhLlNwcml0ZTNELCBfZGlmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnIl0cmFuc2Zvcm3lsZ7mgKdcclxuICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbiwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIsIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WbnuaUtuS4tOaXtuWQkemHj1xyXG4gICAgICAgIEdhbWVQb29sLnJlY3ljbGVWMyhfY2VudHJlVjMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVNjZW5lQ29uZmlnIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuaW1wb3J0IElTY2VuZUVudmlyb25tZW50IGZyb20gXCIuL0lTY2VuZUVudmlyb25tZW50XCI7XHJcbmltcG9ydCBOb2RlVCBmcm9tIFwiLi9Ob2RlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuL1NjZW5lTm9kZVwiO1xyXG5pbXBvcnQgR2xvYmFsRDNFbnZpcm9ubWVudCBmcm9tIFwiLi9HbG9iYWxEM0Vudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICog5Zy65pmvIOWunuS+i1xyXG4gKiDmoLnmja7mjIflrprnmoTlnLrmma/phY3nva7ooajmnoTlu7rlnLrmma9cclxuICogKiDlj6/ku6Xnu6fmib/mraTnsbvoh6rlrprkuYnlnLrmma9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICAgIC8qKiDlnLrmma/lkI3lrZcgKi9cclxuICAgIHByb3RlY3RlZCBfc2NlbmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIOeOr+WigyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZW52aXJvbm1lbnQ6IElTY2VuZUVudmlyb25tZW50O1xyXG5cclxuICAgIC8qKiDlnLrmma/phY3nva7kv6Hmga8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUNvbmZpZzoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElOb2RlQ29uZmlnLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDlnLrmma/oioLngrnlrp7kvovnvJPlrZggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZU5vZGVzOiBTY2VuZU5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8qKiDlnLrmma/kuK3lrZjlnKjnmoRub2Rl6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fb25TY2VuZU5vZGVzOiBTZXQ8U2NlbmVOb2RlPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKiog6I635Y+W546v5aKDICovXHJcbiAgICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2Vudmlyb25tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/lvZPliY3lrZjlnKjnmoToioLngrnliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgb25TY2VuZU5vZGVzKCk6IFNjZW5lTm9kZVtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubV9vblNjZW5lTm9kZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lTmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9zY2VuZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fc2NlbmVOYW1lID0gX3NjZW5lTmFtZTtcclxuICAgICAgICAvL+agueaNruWcuuaZr+WQjeWtl+ivu+WPlumFjee9ruihqOS/oeaBr1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Yid5aeL5YyW5Zy65pmv55qE5ZCN5a2X77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfZGF0YTogSU5vZGVDb25maWdbXSA9IENvbmZpZ1QuZ2V0Q29uZmlnSnNvbkRhdGEoRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTCh0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcucm9vdCk7XHJcbiAgICAgICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5qC56IqC54K55LiL55qE6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZUNvbmZpZ1tfZGF0YVtfaV0ubmFtZV0gPSBfZGF0YVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+iOt+WPluWcuuaZr+aVsOaNruWksei0pS0+JywgdGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u546v5aKD77yM6buY6K6k5Li65YWo5bGAM2Tnjq/looPvvIzlj6/ku6Xoh6rlrprkuYnnjq/looNcclxuICAgICAgICB0aGlzLm1fZW52aXJvbm1lbnQgPSBHbG9iYWxEM0Vudmlyb25tZW50LkVudmlyb25tZW50O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6IqC54K56YWN572uXHJcbiAgICAgKiBAcGFyYW0gX25vZGVOYW1lIOiKgueCueWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUNvbmZpZyhfbm9kZU5hbWU6IHN0cmluZyk6IElOb2RlQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnW19ub2RlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnLrmma/oioLngrlcclxuICAgICAqIEBwYXJhbSBfbmFtZSDoioLngrnlkI3lrZfvvIzlj6/ku6XlpJrkuKrkuIDotbfmnoTlu7pcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lTm9kZShfbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBTY2VuZU5vZGUge1xyXG4gICAgICAgIGxldCBfbmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbmFtZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKF9uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaCguLi5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWdbXSA9IFtdO1xyXG4gICAgICAgIF9uYW1lcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLnB1c2godGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+acieS4quWcuuaZr+iKgueCueayoeacieaJvuWIsCcsIGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfbm9kZUNvbmZpZy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfojrflj5blnLrmma/oioLngrnml7bvvIzkuIDkuKrphY3nva7kv6Hmga/pg73msqHmib7liLAnLCBfbmFtZXMpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WcqOe8k+WtmOS4reaJvlxyXG4gICAgICAgIGxldCBfX25vZGVDb25maWc6IElOb2RlQ29uZmlnW107XHJcbiAgICAgICAgbGV0IF9hO1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyID0gdGhpcy5tX3NjZW5lTm9kZXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9fbm9kZUNvbmZpZyA9IGl0ZW0ubm9kZUNvbmZpZ3M7XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5sZW5ndGggIT0gX19ub2RlQ29uZmlnLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICAgICAgX2EgPSB7fTtcclxuICAgICAgICAgICAgX25vZGVDb25maWcuZm9yRWFjaCgoX28pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2FbX28ubmFtZV0gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hW19vLm5hbWVdID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX28ubmFtZV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9fbm9kZUNvbmZpZy5mb3JFYWNoKChfX28pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2FbX19vLm5hbWVdID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfYVtfX28ubmFtZV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX19vLm5hbWVdLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gX2EpIHtcclxuICAgICAgICAgICAgICAgIF9udW1iZXIgKz0gX2FbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfbnVtYmVyID09IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9pbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lTm9kZXNbX2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9zY2VuZU5vZGU6IFNjZW5lTm9kZSA9IG5ldyBTY2VuZU5vZGUoX25vZGVDb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lTm9kZXMucHVzaChfc2NlbmVOb2RlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5b2T5YmN6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvmnoTlu7rml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRPbk5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuYWRkKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOW9k+WJjeiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5Yig6Zmk5pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlT25Ob2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmRlbGV0ZShfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7njq/looNcclxuICAgICAqIOS8muagueaNruW9k+WJjeWcuuaZr+S4reeOr+Wig+mFjee9ruiuvue9rueOr+Wig1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgbGV0IF9zY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgICAgICAvL+iuvue9ruWFqOWxgOaRhOWDj+aculxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmNhbWVyYSwgX3NjZW5lQ29uZmlnLmNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5YWo5bGA54Gv5YWJXHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5saWdodCkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5saWdodCwgX3NjZW5lQ29uZmlnLmxpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9uLCBfbm9kZSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZFByb2dyZXNzKF9uLCBfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLS0tLSDlm57osIPlh73mlbBcclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxuXHJcbiAgICAvKiog6K6+572u546v5aKD5ZCO5omn6KGM55qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX3NldEVudmlyb25tZW50KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkgeyB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0NvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv6IqC54K5XHJcbiAqIOeUqOadpeaehOW7uuWcuuaZr+iKgueCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlIHtcclxuICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZTogU2NlbmU7XHJcbiAgICAvKiog5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwcml2YXRlIG1faWZEZWxldGU6IGJvb2xlYW47XHJcbiAgICAvKiog6IqC54K56YWN572u5L+h5oGv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW107XHJcbiAgICAvKiog6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fbm9kZTogTGF5YS5Ob2RlO1xyXG4gICAgLyoqIOmihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnNOYW1lczogc3RyaW5nW107XHJcbiAgICAvKiog6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFiczogSVByZWZhYnNHYXRoZXI7XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwcml2YXRlIG1faWZMb2FkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiDojrflj5bmiYDlsZ7lnLrmma8gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6IqC54K56YWN572u5L+h5oGvICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGVDb25maWdzKCk6IElOb2RlQ29uZmlnW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZUNvbmZpZ3M7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZEZWxldGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5Zy65pmv6IqC54K5ICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGUoKTogTGF5YS5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnMoKTogSVByZWZhYnNHYXRoZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFicztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFic05hbWUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFic05hbWVzO1xyXG4gICAgfVxyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHVibGljIGdldCBpZkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblnLrmma/oioLngrnlrp7kvotcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZ3Mg6IqC54K56YWN572u5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lIOaJgOWxnuWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdLCBfc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgLy/pu5jorqTkuLrliKDpmaTnirbmgIFcclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncyA9IF9ub2RlQ29uZmlncztcclxuICAgICAgICAvL+aPkOWPlumihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzTmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldFByZWZhYnNOYW1lcyh0aGlzLm1fcHJlZmFic05hbWVzLCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lc1VSTDogc3RyaW5nW10gPSB0aGlzLm1fcHJlZmFic05hbWVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gRXNzZW50aWFsUmVzVXJscy5QcmVmYWJVUkwoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDNEQXN5bmMoX3ByZWZhYk5hbWVzVVJMLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2dyZXNzKG4pO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbbl07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeaehOW7ulxyXG4gICAgICogQHBhcmFtIG9uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0J1aWxkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTxTY2VuZU5vZGU+IHtcclxuICAgICAgICB0aGlzLm1faWZMb2FkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2NlbmVOb2RlPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzeW5jTG9hZChfb25Qcm9ncmVzcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1faWZMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3MoX246IG51bWJlcikge1xyXG4gICAgICAgIC8v5ZCR5Zy65pmv5Lyg5Ye65Yqg6L296L+b5bqmXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmxvYWRQcm9ncmVzcyhfbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7pcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZkRlbGV0ZSkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUuYWRkT25Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbmV3IExheWEuTm9kZTtcclxuICAgICAgICAvL+a3u+WKoOWIsOaJgOWxnuWcuuaZr+eOr+Wig+S4rVxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5lbnZpcm9ubWVudC5zY2VuZS5hZGRDaGlsZCh0aGlzLm1fbm9kZSk7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSB7fTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIHRoaXMubV9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkTm9kZShfc3ByLCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkxvYWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv6IqC54K56L+Y5Zyo5p6E5bu65Y206K+V5Zu+5Yig6Zmk44CCJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmRlbGV0ZU9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumihOWItuS9k+WQjeWtl1xyXG4gICAgICogQHBhcmFtIF9wcmVmYWJzTmFtZXMg6L6T5Ye655qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIC8v5Y676YeNXHJcbiAgICAgICAgICAgIGlmICghX3ByZWZhYnNOYW1lcy5pbmNsdWRlcyhfcHJlZmFiTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIF9wcmVmYWJzTmFtZXMucHVzaChfcHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpui/mOacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7roioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZSDniLboioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZE5vZGUoX25vZGU6IExheWEuTm9kZSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+WFiOWIpOaWreaYr+S4jeaYr+mihOWItuS9k1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZTogc3RyaW5nID0gKF9ub2RlQ29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lO1xyXG4gICAgICAgIGxldCBfc3ByOiBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIGlmIChfcHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICBfc3ByID0gUmVzTG9hZC5HZXRSZXMoRXNzZW50aWFsUmVzVXJscy5QcmVmYWJVUkwoX3ByZWZhYk5hbWUpKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZShfc3ByLCBfbm9kZUNvbmZpZyk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMubV9wcmVmYWJzW19wcmVmYWJOYW1lXSA9IHRoaXMubV9wcmVmYWJzW19wcmVmYWJOYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5tX3ByZWZhYnNbX3ByZWZhYk5hbWVdLnB1c2goX3Nwcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmNoaWxkICYmIF9ub2RlQ29uZmlnLmNoaWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF9zcHIgPSBuZXcgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgICAgIF9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZShfc3ByLCBfbm9kZUNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZE5vZGUoX25vZGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Z+657G75pWw5o2uXHJcbiAqICEg5Y+q6IO95Ye6546w5pWw5o2u5bGC6Z2i55qE5Lic6KW/XHJcbiAqIOaVsOe7hO+8jOWvueixoe+8jOWAvCAo5pWw5a2X77yM5a2X56ym5Liy77yM5biD5bCU5YC8KVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiXHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75pWw5o2u5Luj55CGXHJcbiAqIOaJgOacieWFs+S6juS7o+eQhuaVsOaNrueahOexu+mDveS7jui/memHjOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IHtcclxuICAgIC8qKiDmlbDmja7mqKHmnb8gKi9cclxuICAgIHByaXZhdGUgZGF0YVRlbXBsYXRlOiB7IG5ldygpOiBEYXRhIH07XHJcblxyXG4gICAgLyoqIOaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOaVsOaNruS7o+eQhuW3peWFtyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fb2JqZWN0UHJveHlUOiBPYmplY3RQcm94eVQ7XHJcblxyXG4gICAgLyoqIOmcgOimgeS/neWtmOeahOaVsOaNriAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZGF0YTogRGF0YTtcclxuXHJcbiAgICAvKiog6I635Y+W5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2V0UHJveHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNldFByb3h5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pWw5o2u5Luj55CG5ZmoXHJcbiAgICAgKiDpgJrov4fov5nkuKrmlbDmja7ku6PnkIblmajlj6/ku6Xmt7vliqDku6PnkIbmlbDmja7vvIzlkozmt7vliqDmlbDmja7nm5HlkKzlm57osIMgW+mFjeWQiCByb290RGF0YSDkvb/nlKhdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2JqZWN0UHJveHlUKCk6IE9iamVjdFByb3h5VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9vYmplY3RQcm94eVQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quaWsOeahOaVsOaNrlxyXG4gICAgICog55So5LqO6YeN5p6E5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXROZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v5aaC5p6c5rKh5pyJ5pWw5o2u5qih5p2/55qE6K+dXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsOaVsOaNruaooeadv++8geivt+S9v+eUqOaVsOaNruaooeadv+ijhemlsOWZqOijhemlsOivpeexuycsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge30gYXMgRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmRhdGFUZW1wbGF0ZSgpIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGluaXREYXRhKCk7XHJcbn0iLCJpbXBvcnQgTWQ1IGZyb20gJy4vTWQ1JztcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gJy4vQmFzZURhdGFQcm94eSc7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tICcuL0Jhc2VEYXRhJztcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gJ3NyYy9Db25maWcvX01haW5Db25maWcnO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gJy4vT2JqZWN0UHJveHlUJztcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmnKzlnLDmlbDmja7ku6PnkIbvvIzpgJrov4fmraTnsbvlj6/ku6Xorr/pl67mnKzlnLDkv53lrZjnmoTmlbDmja5cclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9jYWxEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblr7nmr5TmlbDmja5cclxuICAgICAqIOm7mOiupOS4unRydWXvvIzlpoLmnpzkuLrnnJ/lvZPkuLrnur/kuIrmqKHlvI/ml7bkvJrnlJ/miJDkuIDkuKrliqDlr4bnmoTlr7nmr5TmlbDmja7vvIzpmLLmraLnlKjmiLfmlLnliqjmnKzlnLDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkRpZmZlckRhdGE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOiOt+WPluS/neWtmOWQjeensFxyXG4gICAgICog6buY6K6k6L+U5Zue57G75ZCN77yM5Y+v5Lul6YeN5YaZXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX3NhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pu5jorqTov5Tlm57nsbvlkI1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5L+d5a2Y5pWw5o2u55qE5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBzYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6aG555uu5ZCN5a2XICsg5L+d5a2Y5ZCN5a2XICsg6aG555uu54mI5pysXHJcbiAgICAgICAgcmV0dXJuIF9NYWluQ29uZmlnLk5hbWUgKyAnLScgKyB0aGlzLl9zYXZlTmFtZSArICctJyArIF9NYWluQ29uZmlnLlZlcnNpb25zICsgKF9NYWluQ29uZmlnLk9uTGluZSA/ICdeb24nIDogJ150ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5a+55q+U5pWw5o2u55qE5L+d5a2Y5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBkaWZmZXJOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KHRoaXMuc2F2ZU5hbWUgKyAnX192ZXJpZnknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy/orrDlvZXml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLl9yZWFkRGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CG5YyF6KOF5pWw5o2uXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5pWw5o2u5Luj55CG5bel5YW3XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg6K6+572u55uR5ZCsXHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCB0aGlzLl9kYXRhU2V0TW9uaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfliJ3lp4vljJbmnKzlnLDmlbDmja7ml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5a6M5oiQ77yM57un5om/5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqIOaVsOaNruiiq+iuvue9ruebkeWQrCAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0YVNldE1vbml0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOS/neWtmOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gSDpu5jorqTkuLp0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTYXZlKF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSwgX2lmQ2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDkv53lrZjmiafooYzpmJ/liJcgKi9cclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrUXVldWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgICogQHBhcmFtIG1fZGF0YSDmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlKG1fZGF0YTogRGF0YSwgX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgLy/mt7vliqDml7bpl7TliKTmlq1cclxuICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmZDmtYFcclxuICAgICAgICBpZiAoIV9pZkNsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUrKztcclxuICAgICAgICAgICAgLy/pmZDmtYHvvIzmr4/kuIDmrKHlro/ku7vliqHlj6rkv53lrZjkuIDmrKHmlbDmja5cclxuICAgICAgICAgICAgLy/miorkv53lrZjku7vliqHms6jlhozov5vlvq7ku7vliqHliJfooajvvIzlsIbkvJrlnKjmnKzmrKHmlbDmja7kv67mlLnnmoTlro/ku7vliqHlrozmiJDlkI7lubblnKjkuIvmrKHlro/ku7vliqHlvIDlp4vliY3ooqvlhajpg6jmiafooYxcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlLS07XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2u5YmNJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZShtX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgcHJpdmF0ZSBfc2F2ZShtX2RhdGE/OiBEYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNricpO1xyXG4gICAgICAgIC8v5bqP5YiX5YyWXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShtX2RhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLnNhdmVOYW1lLCBqc29uKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVySnNvbiA9IHRoaXMuZ2V0RGlmZmVyRGF0YShqc29uKTtcclxuICAgICAgICAgICAgLy/kv53lrZjlr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLmRpZmZlck5hbWUsIF9kaWZmZXJKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5tX3NhdmVUb0Rpc2tUaW1lO1xyXG4gICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IDA7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+S/neWtmOaXtumXtOi/h+mVvycsIHRoaXMuc2F2ZU5hbWUsIF90aW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5pys5Zyw6I635Y+W5pWw5o2uXHJcbiAgICBwcml2YXRlIF9yZWFkRGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+ivu+WPluacrOWcsOaVsOaNrlxyXG4gICAgICAgIGxldCByZWFkU3RyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLnNhdmVOYW1lKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLmRpZmZlck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXREaWZmZXJEYXRhKHJlYWRTdHIpICE9IF9kaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5paw55qE5a6e5L6LXHJcbiAgICAgICAgbGV0IF9zYXZlRGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5Yik5pat5pWw5o2u5piv5ZCm6KKr56+h5pS5XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlYWRTdHIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVhZFN0cik7XHJcbiAgICAgICAgICAgICAgICAvL+eUqOacrOWcsOeahOaVsOaNruWhq+WFheW9k+WJjeaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIF9zYXZlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zYXZlRGF0YVtrZXldID0ganNvbkRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zYXZlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluW5tuS/neWtmOS4gOS4quaWsOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfc2F2ZU5ld0RhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgbGV0IG1fZGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5L+d5a2Y5pWw5o2u77yM5LiN6ZmQ5rWBXHJcbiAgICAgICAgdGhpcy5zYXZlKG1fZGF0YSBhcyBEYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbV9kYXRhIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lpITnkIblr7nmr5TmlbDmja5cclxuICAgIHByaXZhdGUgZ2V0RGlmZmVyRGF0YShfc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li656m6XHJcbiAgICAgICAgaWYgKCFfc3RyaW5nKSByZXR1cm4gJyc7XHJcbiAgICAgICAgLy/liqDlr4ZcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KF9zdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pWw5o2u5Y2V5ZCR5Yqg5a+GXHJcbiAgICBwcml2YXRlIGVuY3J5cHQoX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9lbmNyeXB0U3RyOiBzdHJpbmcgPSBgTGF5YU1pbmlHYW1lLSR7dGhpcy5zYXZlTmFtZX06JHtfc3RyaW5nfWA7XHJcbiAgICAgICAgLy/liKTmlq3og73lkKbkvb/nlKhtZDVcclxuICAgICAgICBpZiAoTWQ1LmlmVXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNZDUuaGFzaFN0cihfZW5jcnlwdFN0cikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+S4jeeUqOS7u+S9leWKoOWvhlxyXG4gICAgICAgICAgICByZXR1cm4gJ25vRW5jcnlwdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gXCIuL0Jhc2VEYXRhUHJveHlcIjtcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja7ku6PnkIbln7rnsbtcclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2hvcnREYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqIOS4tOaXtuaVsOaNrum7mOiupOS4jeiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CGXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5pWw5o2u5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7lpITnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUIHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u5qih5p2/6KOF6aWw5ZmoXHJcbiAgICAgKiBAcGFyYW0gX2RhdGEg5pWw5o2u5qih5p2/XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVEYXRhVGVtcGxhdGUoX2RhdGE6IHsgbmV3KCk6IEJhc2VEYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5pWw5o2u5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuZGF0YVRlbXBsYXRlID0gX2RhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFR5cGVTY3JpcHQgTWQ15Yqg5a+GXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZDUge1xyXG4gICAgLyoqIOiDveWQpuS9v+eUqCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlVzZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gT25lIHRpbWUgaGFzaGluZyBmdW5jdGlvbnNcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaFN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoQXNjaWlTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kQXNjaWlTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcbiAgICAvLyBQcml2YXRlIFN0YXRpYyBWYXJpYWJsZXNcclxuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlSWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVmZmVyMzJJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhDaGFycyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcclxuICAgIHByaXZhdGUgc3RhdGljIGhleE91dDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvLyBQZXJtYW5lbnQgaW5zdGFuY2UgaXMgdG8gdXNlIGZvciBvbmUtY2FsbCBoYXNoaW5nXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmVQYXNzSGFzaGVyID0gbmV3IE1kNSgpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9oZXgoeDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoYyA9IE1kNS5oZXhDaGFycztcclxuICAgICAgICBjb25zdCBobyA9IE1kNS5oZXhPdXQ7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgbGV0IG9mZnNldDtcclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBpICogODtcclxuICAgICAgICAgICAgbiA9IHhbaV07XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCA4OyBqICs9IDIpIHtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDEgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDAgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaG8uam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21kNWN5Y2xlKHg6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSwgazogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5KSB7XHJcbiAgICAgICAgbGV0IGEgPSB4WzBdO1xyXG4gICAgICAgIGxldCBiID0geFsxXTtcclxuICAgICAgICBsZXQgYyA9IHhbMl07XHJcbiAgICAgICAgbGV0IGQgPSB4WzNdO1xyXG4gICAgICAgIC8vIGZmKClcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzBdIC0gNjgwODc2OTM2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMV0gLSAzODk1NjQ1ODYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMl0gKyA2MDYxMDU4MTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbM10gLSAxMDQ0NTI1MzMwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzRdIC0gMTc2NDE4ODk3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbNV0gKyAxMjAwMDgwNDI2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzZdIC0gMTQ3MzIzMTM0MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1s3XSAtIDQ1NzA1OTgzIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzhdICsgMTc3MDAzNTQxNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzldIC0gMTk1ODQxNDQxNyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxMF0gLSA0MjA2MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxMV0gLSAxOTkwNDA0MTYyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzEyXSArIDE4MDQ2MDM2ODIgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxM10gLSA0MDM0MTEwMSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxNF0gLSAxNTAyMDAyMjkwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzE1XSArIDEyMzY1MzUzMjkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGdnKClcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzFdIC0gMTY1Nzk2NTEwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbNl0gLSAxMDY5NTAxNjMyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTFdICsgNjQzNzE3NzEzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzBdIC0gMzczODk3MzAyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzVdIC0gNzAxNTU4NjkxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTBdICsgMzgwMTYwODMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxNV0gLSA2NjA0NzgzMzUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbNF0gLSA0MDU1Mzc4NDggfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbOV0gKyA1Njg0NDY0MzggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxNF0gLSAxMDE5ODAzNjkwIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbM10gLSAxODczNjM5NjEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbOF0gKyAxMTYzNTMxNTAxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzEzXSAtIDE0NDQ2ODE0NjcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1syXSAtIDUxNDAzNzg0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbN10gKyAxNzM1MzI4NDczIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzEyXSAtIDE5MjY2MDc3MzQgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGhoKClcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s1XSAtIDM3ODU1OCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s4XSAtIDIwMjI1NzQ0NjMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzExXSArIDE4MzkwMzA1NjIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzE0XSAtIDM1MzA5NTU2IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzFdIC0gMTUzMDk5MjA2MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s0XSArIDEyNzI4OTMzNTMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzddIC0gMTU1NDk3NjMyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxMF0gLSAxMDk0NzMwNjQwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzEzXSArIDY4MTI3OTE3NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1swXSAtIDM1ODUzNzIyMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbM10gLSA3MjI1MjE5NzkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzZdICsgNzYwMjkxODkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbOV0gLSA2NDAzNjQ0ODcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMTJdIC0gNDIxODE1ODM1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxNV0gKyA1MzA3NDI1MjAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzJdIC0gOTk1MzM4NjUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGlpKClcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1swXSAtIDE5ODYzMDg0NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1s3XSArIDExMjY4OTE0MTUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzE0XSAtIDE0MTYzNTQ5MDUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzVdIC0gNTc0MzQwNTUgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzEyXSArIDE3MDA0ODU1NzEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbM10gLSAxODk0OTg2NjA2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxMF0gLSAxMDUxNTIzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxXSAtIDIwNTQ5MjI3OTkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzhdICsgMTg3MzMxMzM1OSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxNV0gLSAzMDYxMTc0NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbNl0gLSAxNTYwMTk4MzgwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxM10gKyAxMzA5MTUxNjQ5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s0XSAtIDE0NTUyMzA3MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxMV0gLSAxMTIwMjEwMzc5IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1syXSArIDcxODc4NzI1OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbOV0gLSAzNDM0ODU1NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG5cclxuICAgICAgICB4WzBdID0gYSArIHhbMF0gfCAwO1xyXG4gICAgICAgIHhbMV0gPSBiICsgeFsxXSB8IDA7XHJcbiAgICAgICAgeFsyXSA9IGMgKyB4WzJdIHwgMDtcclxuICAgICAgICB4WzNdID0gZCArIHhbM10gfCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RhdGFMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2J1ZmZlckxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBJbnQzMkFycmF5ID0gbmV3IEludDMyQXJyYXkoNCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI6IEFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjg6IFVpbnQ4QXJyYXk7XHJcbiAgICBwcml2YXRlIF9idWZmZXIzMjogVWludDMyQXJyYXk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2J1ZmZlciwgMCwgNjgpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjMyID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2J1ZmZlciwgMCwgMTcpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5zZXQoTWQ1LnN0YXRlSWRlbnRpdHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYXIgdG8gY29kZSBwb2ludCB0byB0byBhcnJheSBjb252ZXJzaW9uOlxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2NoYXJDb2RlQXRcclxuICAgIC8vICNFeGFtcGxlLjNBX0ZpeGluZ19jaGFyQ29kZUF0X3RvX2hhbmRsZV9ub24tQmFzaWMtTXVsdGlsaW5ndWFsLVBsYW5lX2NoYXJhY3RlcnNfaWZfdGhlaXJfcHJlc2VuY2VfZWFybGllcl9pbl90aGVfc3RyaW5nX2lzX3Vua25vd25cclxuICAgIHB1YmxpYyBhcHBlbmRTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBpZiAoY29kZSA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNikgKyAweEMwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlICYgMHgzRiB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4RDgwMCB8fCBjb2RlID4gMHhEQkZGKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMikgKyAweEUwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gKChjb2RlIC0gMHhEODAwKSAqIDB4NDAwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpIC0gMHhEQzAwKSArIDB4MTAwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4MTBGRkZGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmljb2RlIHN0YW5kYXJkIHN1cHBvcnRzIGNvZGUgcG9pbnRzIHVwIHRvIFUrMTBGRkZGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxOCkgKyAweEYwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuID49IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICAgICAgYnVmTGVuIC09IDY0O1xyXG4gICAgICAgICAgICAgICAgYnVmMzJbMF0gPSBidWYzMlsxNl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRBc2NpaVN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihzdHIubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IHN0ci5jaGFyQ29kZUF0KGorKyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQnl0ZUFycmF5KGlucHV0OiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKGlucHV0Lmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBpbnB1dFtqKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWxmLl9zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnVmZmVyOiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHNlbGYuX2J1ZmZlcjgpLFxyXG4gICAgICAgICAgICBidWZsZW46IHNlbGYuX2J1ZmZlckxlbmd0aCxcclxuICAgICAgICAgICAgbGVuZ3RoOiBzZWxmLl9kYXRhTGVuZ3RoLFxyXG4gICAgICAgICAgICBzdGF0ZTogW3NbMF0sIHNbMV0sIHNbMl0sIHNbM11dXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHN0YXRlLmJ1ZmZlcjtcclxuICAgICAgICBjb25zdCB4ID0gc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IHN0YXRlLmJ1ZmxlbjtcclxuICAgICAgICBzWzBdID0geFswXTtcclxuICAgICAgICBzWzFdID0geFsxXTtcclxuICAgICAgICBzWzJdID0geFsyXTtcclxuICAgICAgICBzWzNdID0geFszXTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXI4W2ldID0gYnVmLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmQocmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBjb25zdCBpID0gKGJ1ZkxlbiA+PiAyKSArIDE7XHJcbiAgICAgICAgbGV0IGRhdGFCaXRzTGVuO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IGJ1ZkxlbjtcclxuXHJcbiAgICAgICAgYnVmOFtidWZMZW5dID0gMHg4MDtcclxuICAgICAgICBidWY4W2J1ZkxlbiArIDFdID0gYnVmOFtidWZMZW4gKyAyXSA9IGJ1ZjhbYnVmTGVuICsgM10gPSAwO1xyXG4gICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eS5zdWJhcnJheShpKSwgaSk7XHJcblxyXG4gICAgICAgIGlmIChidWZMZW4gPiA1NSkge1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEbyB0aGUgZmluYWwgY29tcHV0YXRpb24gYmFzZWQgb24gdGhlIHRhaWwgYW5kIGxlbmd0aFxyXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWF5IG5vdCBmaXQgaW4gMzIgYml0cyBzbyB3ZSB0YWtlIGNhcmUgb2YgdGhhdFxyXG4gICAgICAgIGRhdGFCaXRzTGVuID0gdGhpcy5fZGF0YUxlbmd0aCAqIDg7XHJcbiAgICAgICAgaWYgKGRhdGFCaXRzTGVuIDw9IDB4RkZGRkZGRkYpIHtcclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gZGF0YUJpdHNMZW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRhdGFCaXRzTGVuLnRvU3RyaW5nKDE2KS5tYXRjaCgvKC4qPykoLnswLDh9KSQvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG8gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpID0gcGFyc2VJbnQobWF0Y2hlc1sxXSwgMTYpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBsbztcclxuICAgICAgICAgICAgYnVmMzJbMTVdID0gaGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcblxyXG4gICAgICAgIHJldHVybiByYXcgPyB0aGlzLl9zdGF0ZSA6IE1kNS5faGV4KHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/mo4Dmn6VNZDXmmK/lkKblj6/nlKhcclxuaWYgKE1kNS5oYXNoU3RyKCdoZWxsbycpICE9PSAnNWQ0MTQwMmFiYzRiMmE3NmI5NzE5ZDkxMTAxN2M1OTInKSB7XHJcbiAgICAvL+iuvue9ruS4jeiDveS9v+eUqFxyXG4gICAgTWQ1LmlmVXNlID0gZmFsc2U7XHJcbiAgICAvL1xyXG4gICAgY29uc29sZS53YXJuKCdNZDUgc2VsZiB0ZXN0IGZhaWxlZC4nKTtcclxufVxyXG4iLCIvKipcclxuICog5a+56LGh5Luj55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm94eVQge1xyXG4gICAgLyoqIOebkeWQrOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX21vbml0b3JMaXN0OiB7XHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfnyAqL1xyXG4gICAgICAgIF90aGlzOiBhbnksXHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlSAqL1xyXG4gICAgICAgIF9iYWNrOiBGdW5jdGlvbixcclxuICAgICAgICAvKiog5rqQ5a+56LGhICovXHJcbiAgICAgICAgX29iaj86IG9iamVjdCxcclxuICAgICAgICAvKiog6ZSu5YC8ICovXHJcbiAgICAgICAgX2tleT86IHN0cmluZyxcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55uR5ZCsXHJcbiAgICAgKiDnm5HlkKzmn5DkuKrlr7nosaHnmoTmn5DkuKrlsZ7mgKfmmK/lkKblj5HnlJ/mm7TmlLlcclxuICAgICAqIOWmguaenOWPr+mAieWxnuaAp+mDveS4jeWhq+eahOivneWImeebkeWQrOWFqOmDqOebkeWQrOaVsOaNruWxnuaAp+abtOaUuVxyXG4gICAgICogQHBhcmFtIF90aGlzIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlVxyXG4gICAgICogQHBhcmFtIF9vYmog55uu5qCH5a+56LGh77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5YaF5a655pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDplK7lkI3vvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE1vbml0b3I8TyBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIE8+KF90aGlzOiBhbnksIF9iYWNrOiBGdW5jdGlvbiwgX29iaj86IE8sIF9rZXk/OiBLKSB7XHJcbiAgICAgICAgLy/mt7vliqDliLDnm5HlkKzliJfooahcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIF90aGlzLFxyXG4gICAgICAgICAgICBfYmFjayxcclxuICAgICAgICAgICAgX29iaixcclxuICAgICAgICAgICAgX2tleTogX2tleSBhcyBzdHJpbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIblm57osINcclxuICAgICAqIEBwYXJhbSBfdGhpcyDlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDlm57osIPmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyTW9uaXRvcihfdGhpczogYW55LCBfYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0ID0gdGhpcy5tX21vbml0b3JMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIShcclxuICAgICAgICAgICAgICAgIGl0ZW0uX3RoaXMgPT0gX3RoaXNcclxuICAgICAgICAgICAgICAgICAgICAvL+WPr+mAieeahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICYmIF9iYWNrID8gaXRlbS5fYmFjayA9PSBfYmFjayA6IHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ku6PnkIZcclxuICAgICAqIEBwYXJhbSBfbyDmupDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFByb3h5PERhdGEgZXh0ZW5kcyBvYmplY3Q+KF9vOiBEYXRhKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldFByb3h5KF9vKSBhcyBEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/phY3lkIjorr7nva7ku6PnkIZcclxuICAgIHByaXZhdGUgX3NldFByb3h5KF9vKTogb2JqZWN0IHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+aZrumAmuWAvOexu+Wei+WSjOaWueazlVxyXG4gICAgICAgIGlmICh0eXBlb2YgX28gPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBfbyAhPSBcIm9iamVjdFwiIHx8ICFfbykge1xyXG4gICAgICAgICAgICByZXR1cm4gX287XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5Y+v6L+t5Luj5a+56LGh5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKCFfb1tTeW1ib2wuaXRlcmF0b3JdKSB7XHJcbiAgICAgICAgICAgIC8v6YGN5Y6G5a+56LGh6K6+572u5Luj55CGXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgICAgICBfb1tfaV0gPSB0aGlzLl9zZXRQcm94eShfb1tfaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6L+U5Zue5pyA57uI55qE5Luj55CG5a+56LGhXHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KF9vLCB7XHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogIHNldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3mmK/mmK/kuI3mmK/mlbDnu4TnmoRsZW5ndGjlsZ7mgKfooqvkv67mlLlcclxuICAgICAgICAgICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkodHJhcFRhcmdldCkgJiYga2V5ID09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/lj43lsITmlrnms5VcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIGdldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaHvvIjpgJrluLjmmK/ku6PnkIbvvIlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WPjeWwhOaWueazlVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKipcclxuICAgICAqIOS7o+eQhuWvueixoeiiq+iuvue9ruaXtueahOWbnuiwg1xyXG4gICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S7o+eQhuWvueixoeiiq+iuvue9ricsIHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICBsZXQgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAvL+aJp+ihjOebkeWQrFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5YWI5Yik5pat5Luj55CG55uu5qCHXHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9vYmogJiYgaXRlbS5fb2JqICE9IHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2tleSAmJiBpdGVtLl9rZXkgIT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgaXRlbS5fYmFjay5jYWxsKGl0ZW0uX3RoaXMsIC4uLl9hcmd1bWVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiDmuLjmiI/lr7nosaHmsaBcclxuICogISDlj6rog73muLjmiI/lhoXkvb/nlKjvvIzkuI3opoHlnKjlt6XlhbfkuK3kvb/nlKhcclxuICogISDlsL3ph4/lj6rlnKjph43lpI3liJvlu7rpnZ7luLjlpJrlr7nosaHnmoTlnLDmlrnkvb/nlKjvvIzkuI3nhLbkvJrlvpfkuI3lgb/lpLFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQb29sIHtcclxuICAgIC8qKiDlr7nosaHmsaDliJfooaggKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogYW55W10sXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJdGVtPFQgZXh0ZW5kcyBhbnk+KF9zaWduOiBFR2FtZVBvb2xTaWduKTogVCB7XHJcbiAgICAgICAgLy/lhYjliLDmnKzlnLDlr7nosaHmsaDliJfooajkuK3mn6Xmib5cclxuICAgICAgICBpZiAodGhpcy5wb29sTGlzdFtfc2lnbl0gJiYgdGhpcy5wb29sTGlzdFtfc2lnbl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sTGlzdFtfc2lnbl0ucG9wKCkgYXMgVDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9zaWduKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IzKSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IyKSBhcyBhbnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLblhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiDlm57mlLbmoIfor4ZcclxuICAgICAqIEBwYXJhbSBfaXRlbSDlm57mlLblhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlSXRlbShfc2lnbjogRUdhbWVQb29sU2lnbiwgLi4uX2l0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb29sTGlzdFtfc2lnbl0pIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj6rmt7vliqDkuI3ljIXlkKvnmoTlhYPntKBcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXS5pbmNsdWRlcyhfbykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9vbExpc3RbX3NpZ25dLnB1c2goX28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWMygpOiBMYXlhLlZlY3RvcjMge1xyXG4gICAgICAgIGxldCBfdjM6IExheWEuVmVjdG9yMyA9IHRoaXMuZ2V0SXRlbTxMYXlhLlZlY3RvcjM+KEVHYW1lUG9vbFNpZ24udjMpO1xyXG4gICAgICAgIF92My5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gX3YzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLZ2M1xyXG4gICAgICogQHBhcmFtIF92MyDlvoXlm57mlLbnmoR2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVWMyguLi5fdjNzOiBMYXlhLlZlY3RvcjNbXSkge1xyXG4gICAgICAgIHRoaXMucmVjeWNsZUl0ZW0oRUdhbWVQb29sU2lnbi52MywgLi4uX3Yzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2MlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYyKCk6IExheWEuVmVjdG9yMiB7XHJcbiAgICAgICAgbGV0IF92MjogTGF5YS5WZWN0b3IyID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMj4oRUdhbWVQb29sU2lnbi52Mik7XHJcbiAgICAgICAgX3YyLnNldFZhbHVlKDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYyXHJcbiAgICAgKiBAcGFyYW0gX3YyIOW+heWbnuaUtueahHYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYyKC4uLl92MnM6IExheWEuVmVjdG9yMltdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYyLCAuLi5fdjJzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoOagh+ivhlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUdhbWVQb29sU2lnbiB7XHJcbiAgICAvKiogM+e7tOWQkemHjyAqL1xyXG4gICAgdjMsXHJcbiAgICAvKiogMue7tOWQkemHjyAqL1xyXG4gICAgdjIsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgUmVzTG9hZEdyb3VwIGZyb20gXCIuLi9SZXMvUmVzTG9hZEdyb3VwXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRJdGVtXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP6L+b5YWl5LmL5YmN55qE5Yqg6L295Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgLy/miafooYzliqDovb3kuYvliY3nmoTnlJ/lkb3lkajmnJ9cclxuICAgICAgICB0aGlzLmxvYWRCZWZvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCflvIDlp4vliqDovb3muLjmiI/liJ3lp4vljJbotYTmupAnKSk7XHJcbiAgICAgICAgLy/ojrflj5bliqDovb3poblcclxuICAgICAgICBsZXQgX3Jlc0xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSA9IHRoaXMuZ2V0TG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgLy/lvILmraXliqDovb3liqDovb3poblcclxuICAgICAgICBSZXNMb2FkR3JvdXAubG9hZEFzeW5jKF9yZXNMb2FkSXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUGxhbihpKTtcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmxvYWRJdGVtc0NvbSwgdW5kZWZpbmVkLCBmYWxzZSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCfmuLjmiI/liqDovb3lrozmiJAnKSk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tKCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWIneWni+WMluS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEJlZm9yZSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkUGxhbihfaTogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRDb20oKSB7IH1cclxufSIsIi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnlkI3lrZfmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVLZXlSZXNOYW1lIHtcclxuICAgIC8qKiDmoLnnm67lvZUgKi9cclxuICAgIFJvb3RSZXMgPSAncmVzJyxcclxuICAgIC8qKiDphY3nva7ooajnm67lvZUgKi9cclxuICAgIENvbmZpZ0pzb24gPSAnQ29uZmlnSnNvbicsXHJcbiAgICAvKiog5a2X5L2T55uu5b2VICovXHJcbiAgICBGb250ID0gJ0ZvbnQnLFxyXG4gICAgLyoqIEZHVUnotYTmupDnm67lvZUgKi9cclxuICAgIEZHVUkgPSAnRkdVSScsXHJcbiAgICAvKiog5YWz5Y2h6YWN572u6KGo55uu5b2VICovXHJcbiAgICBTY2VuZUpzb24gPSAnU2NlbmVKc29uJyxcclxuICAgIC8qKiDlhbblroPnm67lvZUgKi9cclxuICAgIE90aGVyID0gJ090aGVyJyxcclxuICAgIC8qKiBpY29u55uu5b2VICovXHJcbiAgICBpY29uID0gJ2ljb24nLFxyXG4gICAgLyoqIGltZ+ebruW9lSAqL1xyXG4gICAgaW1nID0gJ2ltZycsXHJcbiAgICAvKiog6Z+z5LmQ5paH5Lu255uu5b2VICovXHJcbiAgICBtdXNpYyA9ICdtdXNpYycsXHJcbiAgICAvKiog6Z+z5pWI5paH5Lu255uu5b2VICovXHJcbiAgICBzb3VuZCA9ICdzb3VuZCcsXHJcbiAgICAvKiog55qu6IKk5paH5Lu255uu5b2VICovXHJcbiAgICBza2luID0gJ3NraW4nLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSAnLi9FS2V5UmVzTmFtZSc7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gJy4vS2V5UmVzTWFuYWdlcic7XHJcbi8qKlxyXG4gKiDlv4XopoHnmoTmuLjmiI/otYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVzc2VudGlhbFJlc1VybHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWz5Y2h6YWN572u5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2NlbmVDb25maWdVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlNjZW5lSnNvbikgKyBfbmFtZSArICcuanNvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahKc29u5paH5Lu2UlVMXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6YWN572u6KGo5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlnSnNvblVSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuQ29uZmlnSnNvbikgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZHVUnljIVcclxuICAgICAqIEBwYXJhbSBfbmFtZSDljIXlkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJUGFja1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRkdVSSkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtl+S9k+WcsOWdgFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWtl+S9k+WQjeWtl++8jOWKoOWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZvbnRVUkwoX25hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Gb250KSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omA5pyJ6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWxsU2NlbmVQcmVmYWJzTmFtZXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvL+mihOWItuS9k+WcuuaZr+e8k+WtmFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ByZWZhYnNTY2VuZUNhY2hlOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliLbkvZPotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiVVJMKHByZWZhYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WFiOWcqOe8k+WtmOS4reafpeaJvuWcuuaZr+WQjeWtl1xyXG4gICAgICAgIGlmICh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTCh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreivpemihOWItuS9k+WcqOWTquS4quWcuuaZr+S4reiiq+WvvOWHuueahFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0uaW5kZXhPZignQCcgKyBwcmVmYWIgKyAnQCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSA9IF9pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKF9pKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInlnKjlnLrmma/mib7liLDpooTliLbkvZMnLCBwcmVmYWIsICflj6/og73mmK/msqHmnInlr7zlh7rlnLrmma/pooTliLbkvZPliJfooajlr7zoh7TnmoTjgIInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lnLrmma/pooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbyDlnLrmma/pooTliLbkvZPpm4blkIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmYWJTY2VuZU5hbWVzKF9vOiBhbnkpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXSA9IF9vW19pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCIuLi9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWIl+ihqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UmVzTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogS2V5UmVzTWFuYWdlcjtcclxuXHJcbiAgICAvL+WFs+mUrui1hOa6kOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX0tleVJlc0xpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v5rOo5YaM5YWz6ZSu6LWE5rqQ55uu5b2VXHJcbiAgICAgICAgdGhpcy5tX0tleVJlc0xpc3QgPSB7XHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Sb290UmVzXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkNvbmZpZ0pzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuQ29uZmlnSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZHVUldOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRkdVSSArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlNjZW5lSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5TY2VuZUpzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Gb250XTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZvbnQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5PdGhlcl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyxcclxuICAgICAgICAgICAgLy/lhbbku5bot6/lvoRcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmljb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pY29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaW1nXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaW1nICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUubXVzaWNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5tdXNpYyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNvdW5kXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc291bmQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5za2luXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc2tpbiArICcvJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubV9LZXlSZXNMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblrZjlnKjmn5DkuKrlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmS2V5UmVzKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09IF9rZXk7XHJcbiAgICAgICAgfSkgIT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhbPplK7ngrnotYTmupDnmoTot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJlc1VSTChfa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgea3u+WKoOWFs+mUrui3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX3N0cmluZyDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhZGRSZXNVcmwoX2tleTogc3RyaW5nLCBfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XSA9IF9zdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9zdHIg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZWRpdEtleVJlc0xpc3QoX2tleTogc3RyaW5nLCBfc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX3JlcGxhY2U6IHN0cmluZyA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JlcGxhY2UgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfkv67mlLnotYTmupDot6/lvoTlpLHotKXvvIzmsqHmnIknICsgX2tleSArICfov5nkuKrlhbPplK7ot6/lvoTvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7/mjaLmiYDmnInotYTmupDot6/lvoTkuK3nmoTlhbPplK7ngrnot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0gPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0ucmVwbGFjZShfcmVwbGFjZSwgX3N0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ+S/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hCcsIF9yZXBsYWNlLCAn5pu/5o2i5oiQJywgX3N0cikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hOWIl+ihqFxyXG4gICAgICogQHBhcmFtIG1vZGVsIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQodXJsczogYW55LCBtb2RlbDogRVJlc0xvYWRNb2RlbCwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuacieWGheWuuemcgOimgeWKoOi9vVxyXG4gICAgICAgIGlmICghdXJscyB8fCAoQXJyYXkuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIHN3aXRjaCAobW9kZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQzOlxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGXmmK8zROeahOaOpeWPo++8jOmAgueUqOS6jjNE6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5jcmVhdGUodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDI6XHJcbiAgICAgICAgICAgICAgICAvL2xvYWTmmK8yZOeahOaOpeWPo++8jOmAgueUqOS6jjJk6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoQgXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMiwgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0RBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkM0QodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDJEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5vQ2xvbmUg5piv5ZCm5LiN6I635Y+W5YWL6ZqG55qE6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmVzKHJlc1VybDogc3RyaW5nLCBub0Nsb25lOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCBnZXRSZXMgPSBMYXlhLmxvYWRlci5nZXRSZXMocmVzVXJsKTtcclxuICAgICAgICBpZiAoIWdldFJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoXCLotYTmupDlsJrmnKrliqDovb1cIiwgcmVzVXJsKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vQ2xvbmUgPyBnZXRSZXMgOiBnZXRSZXMuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuaMh+Wumui1hOa6kOWcsOWdgOe8k+WtmOOAglxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDbGVhclJlcyhyZXNVcmw6IHN0cmluZykge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyUmVzKHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIEVSZXNMb2FkTW9kZWwge1xyXG4gICAgLyoqIDNEIOi1hOa6kCAqL1xyXG4gICAgRDMsXHJcbiAgICAvKiogMmQg6LWE5rqQICovXHJcbiAgICBEMixcclxufSIsImltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vee7hFxyXG4gKiDotJ/otKPlpJrkuKrotYTmupDliqDovb3pobnnmoTnu5/kuIDliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRHcm91cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+S9nOS4uuWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaXRlbXM6IFJlc0xvYWRJdGVtW10sIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/msqHmnInliqDovb3poblcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mtYXmi7fotJ3vvIzpmLLmraLmsaHmn5PmupDliJfooahcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICAgICAgLy/lvILmraXliJfooajplb/luqZcclxuICAgICAgICBsZXQgX2xlbmd0aDogbnVtYmVyID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIC8v5LiA5q2l5LiA5q2l5raI6LS55byC5q2l5YiX6KGoXHJcbiAgICAgICAgbGV0IF9mOiBGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBvbkl0ZW06IFJlc0xvYWRJdGVtID0gaXRlbXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIG9uSXRlbS5sb2FkQXN5bmMoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65oC76L+b5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChfbGVuZ3RoIC0gaXRlbXMubGVuZ3RoIC0gMSkgKyBpKSAvIF9sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65Y2V5Liq5Yqg6L296aG55Yqg6L295a6M5oiQ5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5hcmdzID0gW29uSXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9mKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOmAkuW9kuWKoOi9veaWueazlVxyXG4gICAgICAgIF9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+WPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3luYyhpdGVtczogUmVzTG9hZEl0ZW1bXSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzLCBfb25JdGVtQ29tKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZXNMb2FkLCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwiLi9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L296aG5XHJcbiAqIOi0n+i0o+S4gOe7hOi1hOa6kOWIl+ihqOeahOWKoOi9vVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZEl0ZW0ge1xyXG4gICAgLyoqIOWKoOi9veaooeW8jyAqL1xyXG4gICAgcHJpdmF0ZSBtX2xvYWRNb2RlbDogRVJlc0xvYWRNb2RlbDtcclxuXHJcbiAgICAvKiog5Yqg6L295YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBhbnk7XHJcblxyXG4gICAgLyoqIOWKoOi9veWujOaIkOWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX2NvbUJhY2s6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICAvKiog6LWE5rqQ6Lev5b6E5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcmVzOiBhbnk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWFs+mUrumUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9yZXMg6LWE5rqQ5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX21vZGUg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7plK7lgLxcclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDml7bnmoTlm57osIPlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9yZXM6IGFueSwgX21vZGU6IEVSZXNMb2FkTW9kZWwsIF9rZXk/OiBhbnksIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tX3JlcyA9IF9yZXM7XHJcbiAgICAgICAgdGhpcy5tX2xvYWRNb2RlbCA9IF9tb2RlO1xyXG4gICAgICAgIHRoaXMubV9rZXkgPSBfa2V5O1xyXG4gICAgICAgIHRoaXMubV9jb21CYWNrID0gX2NvbUJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQob25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2NvbUJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIHRoaXMubV9jb21CYWNrLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwic3JjL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEQyTWFuYWdlciBmcm9tIFwiLi9EMi9EMk1hbmFnZXJcIjtcclxuaW1wb3J0IEQzTWFuYWdlciBmcm9tIFwiLi9EMy9EM01hbmFnZXJcIjtcclxuaW1wb3J0IF9UQ29uZmlnIGZyb20gXCIuL19UQ29uZmlnXCI7XHJcblxyXG4vKiogXHJcbiAqIOahhuaetuWFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE1haW4ge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YWl5qGG5p625L+h5oGvXHJcbiAgICAgICAgd2luZG93W19UQ29uZmlnLk5hbWVdID0ge1xyXG4gICAgICAgICAgICAvKiog5qGG5p626YWN572uICovXHJcbiAgICAgICAgICAgIC4uLl9UQ29uZmlnLFxyXG4gICAgICAgICAgICAvKiogbGF5YemFjee9riAqL1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiB7IC4uLkdhbWVDb25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOmhueebrumFjee9riAqL1xyXG4gICAgICAgICAgICBfbWFpbkNvbmZpZzogeyAuLi5fTWFpbkNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog5ri45oiP6YWN572uICovXHJcbiAgICAgICAgICAgIF9nYW1lQ29uZmlnOiB7IC4uLl9HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIneWni+WMluWQhOenjeWQhOagt+eahOeuoeeQhuWZqFxyXG4gICAgICAgIEQzTWFuYWdlci5pbml0KCk7Ly8zROeuoeeQhuWZqFxyXG4gICAgICAgIEQyTWFuYWdlci5pbml0KCk7Ly91aeeuoeeQhuWZqFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWNleS+i+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VUIHtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlS2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+exu+ijhemlsOWZqFxyXG4gICAgICogISDooqvoo4XppbDnmoTnsbvnmoTmnoTpgKDmlrnms5XkuI3og73ml7ZwdWJsaWPnsbvlnovnmoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/mt7vliqDkuIDkuKrnm5HlkKzlsZ7mgKdcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgJ2luc3RhbmNlJywge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz5LqOdjPlkJHph4/nmoTlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYzVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4fkuIDkuKrlrZfnrKbkuLLmnoTlu7p2M+WQkemHj1xyXG4gICAgICogQHBhcmFtIHN0ciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVZlY3RvcjMoc3RyOiBzdHJpbmcsIF9vdXRWMzogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJywnKTtcclxuICAgICAgICBfb3V0VjMuc2V0VmFsdWUoTnVtYmVyKHN0cnNbMF0pLCBOdW1iZXIoc3Ryc1sxXSksIE51bWJlcihzdHJzWzJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5WM+WQkemHj+mVv+W6plxyXG4gICAgICogQHBhcmFtIF92MyDnm67moIflkJHph49cclxuICAgICAqIEBwYXJhbSBfbCDnm67moIfplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWM0xlbmd0aChfdjM6IExheWEuVmVjdG9yMywgX2w6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF92Myk7XHJcbiAgICAgICAgaWYgKF9sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgX2E6IG51bWJlciA9IF9sIC8gX2xlbmd0aDtcclxuICAgICAgICAgICAgX3YzLnggPSBfdjMueCAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueSA9IF92My55ICogX2E7XHJcbiAgICAgICAgICAgIF92My56ID0gX3YzLnogKiBfYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnmj5LlgLznp7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX2xlcnAg5o+S5YC856e75Yqo5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICogQHBhcmFtIF9pbml0aWFsTGVuZ3RoIOWIneWni+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdExlcnBNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfbGVycDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMywgX2luaXRpYWxMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuZGlzdGFuY2UoX3BvcywgX3RyYWdldFBvdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMubGVycChfcG9zLCBfdHJhZ2V0UG90LCBfbGVycCwgX291dFYzKTtcclxuICAgICAgICAvL+i/lOWbnui/m+W6plxyXG4gICAgICAgIHJldHVybiAxIC0gKF9kaXN0YW5jZSAvIF9pbml0aWFsTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueWMgOmAn+enu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfc3BlZWQg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdENvbnN0YW50U3BlZWRNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfc3BlZWQ6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfaWZFbmQ6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IF9kaWZmZXJWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnN1YnRyYWN0KF90cmFnZXRQb3QsIF9wb3MsIF9kaWZmZXJWMyk7XHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfZGlmZmVyVjMpO1xyXG4gICAgICAgIGlmIChfZGlzdGFuY2UgPiBfc3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWM0xlbmd0aChfZGlmZmVyVjMsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55u45YqgXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfcG9zLCBfZGlmZmVyVjMsIF9vdXRWMyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2lmRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJvdGF0ZUF4aXNWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICog5peL6L2s5LiA5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX3YzIOmcgOimgeaXi+i9rOeahOmCo+S4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF9hbmdlciDml4vovazop5LluqZcclxuICAgICAqIEBwYXJhbSBfYXhpcyDml4vovazovbRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSb3RhdGVWMyhfdjM6IExheWEuVmVjdG9yMywgX2FuZ2VyOiBudW1iZXIsIF9heGlzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLnJvdGF0ZUF4aXNWMykge1xyXG4gICAgICAgIC8v5peL6L2s5Zub5YWD5pWwXHJcbiAgICAgICAgdmFyIHEgPSBuZXcgTGF5YS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgTGF5YS5RdWF0ZXJuaW9uLmNyZWF0ZUZyb21BeGlzQW5nbGUoX2F4aXMsIChfYW5nZXIgLyAxODApICogTWF0aC5QSSwgcSk7XHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnRyYW5zZm9ybVF1YXQoX3YzLCBxLCBfdjMpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOahhuaetumFjee9ruaWh+S7tlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RDb25maWcge1xyXG4gICAgLyoqIOWQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBOYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBaSE5hbWU6IHN0cmluZyA9IFwiTGF5YUJveOWwj+a4uOaIj1wiO1xyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWZXJzaW9uczogc3RyaW5nID0gXCIwLjAuMC4xXCI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZU1haW4gZnJvbSBcIi4vR2FtZS9HYW1lTWFpblwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBUTWFpbiBmcm9tIFwiLi9fVC9UTWFpblwiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0XHQvL1xyXG5cdFx0LyoqIOato+W8j+W8gOWniyAjMjhkZjk5ICovXHJcblx0XHQvL1xyXG5cdFx0Ly/moYbmnrblhaXlj6NcclxuXHRcdG5ldyBUTWFpbigpO1xyXG5cdFx0Ly/muLjmiI/lhaXlj6NcclxuXHRcdG5ldyBHYW1lTWFpbigpO1xyXG5cdH1cclxufVxyXG5cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTsiXSwic291cmNlUm9vdCI6IiJ9