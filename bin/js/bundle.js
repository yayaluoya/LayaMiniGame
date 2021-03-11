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
        let sceneJsonRes = [
            'Scene'
        ].map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__.default.SceneConfigURL(item);
        });
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
/* harmony export */   "default": () => (/* binding */ InitLoadUICon)
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

/***/ "./src/_T/D2/FGUI/BaseUICon.ts":
/*!*************************************!*\
  !*** ./src/_T/D2/FGUI/BaseUICon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseUICon)
/* harmony export */ });
/* harmony import */ var _EUILayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EUILayer */ "./src/_T/D2/FGUI/EUILayer.ts");
/* harmony import */ var _FGUIRootManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FGUIRootManager */ "./src/_T/D2/FGUI/FGUIRootManager.ts");
/* harmony import */ var _FGUIT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FGUIT */ "./src/_T/D2/FGUI/FGUIT.ts");
/* harmony import */ var _RootUICon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RootUICon */ "./src/_T/D2/FGUI/RootUICon.ts");




/**
 * UI控制器基类(用来控制UI界面)
 */
class BaseUICon extends _RootUICon__WEBPACK_IMPORTED_MODULE_3__.default {
    constructor() {
        super(...arguments);
        /** UI列表，可以显示很多个ui */
        this._UIs = {};
        /** 唯一键值 */
        this.m_key = Symbol();
        /** 是否在隐藏时清理掉ui，默认为true */
        this._ifClear = true;
        /** UI层级类型，必须在初始化时设置 */
        this._layer = _EUILayer__WEBPACK_IMPORTED_MODULE_0__.EUILayer.Panel;
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
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        _FGUIRootManager__WEBPACK_IMPORTED_MODULE_1__.default.getLayerUI(this._layer).addChild(this.m_rootUI);
        for (let _i in this._UIs) {
            this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance());
        }
        //
        this._createUI();
    }
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
        _FGUIT__WEBPACK_IMPORTED_MODULE_2__.default.setUITopShow(this.m_rootUI);
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
    /**
     * 设置ui代理
     * @param _uiList ui列表
     */
    setProxy(_uiList) {
        this.m_uiConList = _uiList;
        this.m_onShowUICon = [];
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
     */
    showUI(_uiCon) {
        let _uiCons = [];
        if (_uiCon instanceof Array) {
            _uiCons.push(..._uiCon);
        }
        else {
            _uiCons.push(_uiCon);
        }
        _uiCons.forEach((item) => {
            if (this.m_uiConList[item]) {
                this.m_uiConList[item].Show();
                this.m_onShowUICon.push(..._uiCons);
            }
        });
        //去重
        this.m_onShowUICon = Array.from(new Set(this.m_onShowUICon));
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
        //
        this.m_onShowUICon = this.m_onShowUICon.filter((item) => {
            return this.m_uiConList[item] && this.m_uiConList[item].ifShow;
        });
    }
    /**
     * 隐藏当前显示的所有ui
     */
    hideAllUI() {
        this.m_onShowUICon.forEach((item) => {
            this.m_uiConList[item] && this.m_uiConList[item].Hide();
        });
        this.m_onShowUICon = [];
    }
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
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX0NvbnN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX01haW5Db25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUVuZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGF1c2UudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTZXQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU3RhcnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RVSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9EYXRhTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvU2V0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9TaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvVGVzdERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9NYWluRGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL1Nob3J0RGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaWduRGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL0dhbWVNYWluLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvTWFpbi9HYW1lSW5pdExvYWQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9VSUNvbi9VSUNvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19TY2VuZU5vZGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbmZpZy9Db25maWdULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUV4LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0QyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9Sb290VUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvRDNNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvTm9kZVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZURhdGEudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9CYXNlRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvRGF0YVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRGF0YS9PYmplY3RQcm94eVQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvR2FtZVQvR2FtZVBvb2wudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvTWFpbi9CYXNlSW5pdExvYWQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1Jlcy9SZXNMb2FkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL1Jlc0xvYWRJdGVtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1RzL0luc3RhbmNlVC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9VdGlscy9WM1V0aWxzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL19UQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7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QUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FB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LENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFRCxlQUFlO1FBQ2QsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxjQUFjO1FBQ2IsWUFBWTtRQUNaLG1FQUFtRTtRQUNuRSxFQUFFO1FBQ0YsbUJBQW1CO1FBQ25CLEVBQUU7UUFDRixNQUFNO1FBQ04sSUFBSSw2Q0FBSyxFQUFFLENBQUM7UUFDWixNQUFNO1FBQ04sSUFBSSxtREFBUSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNEO0FBRUQsT0FBTztBQUNQLElBQUksSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOW4uOmHj+mFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0NvbnN0Q29uZmlnIHtcclxuICAgIC8qKiBmZ3Vp55u45YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUkgPSB7XHJcbiAgICAgICAgLyoqIOWMheWQjue8gCAqL1xyXG4gICAgICAgIHBhY2thZ2VGaWxlRXh0ZW5zaW9uOiAnYmluJyxcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcIi4vX01haW5Db25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9HYW1lQ29uZmlnIHtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/muLjmiI/mtYvor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZHYW1lVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/mtYvor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkRlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIHRydWU7XHJcbiAgICAvKiog5piv5ZCm5omT5byA5LiA5Liq5paw56qX5Y+j6LCD6K+VICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmT3BlbldpbmRvd0RlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG59IiwiLyoqXHJcbiAqIOmhueebruacgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01haW5Db25maWcge1xyXG4gICAgLyoqIOa4uOaIj+aJgOWxnuWboumYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZWFtOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP5ZCN5a2X77yM5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTmFtZTogc3RyaW5nID0gJ0xheWFNaW5pR2FtZSc7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpITmFtZTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+ivtOaYjiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeHBsYWluOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIj++8jOivtOaYjuOAgic7XHJcbiAgICAvKiog5pWw5o2u54mI5pysIOWPr+S7peW4puWtl+avjeS9huaYr+WwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZlcnNpb25zOiBzdHJpbmcgPSAnMC4wLjAuMSc7XHJcbiAgICAvKiog5piv5ZCm5LiK57q/5Li6ZmFsc2XliJnmmK/lvIDlj5Hnjq/looMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT25MaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb21tb25CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ29tIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tcTNuZzl3XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ29tIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUNvbT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUNvbVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZGJtaTEzXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDdXN0b21zTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUVuZCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWxheGQxOVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUVuZCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVFbmQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVFbmRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMW9cIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUxvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXN5dGE5ZlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZU1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZU1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQYXVzZSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E1Z1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBhdXNlIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBhdXNlPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGF1c2VcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQbGF5IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXJcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQbGF5IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBsYXk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQbGF5XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU2V0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTR1XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU2V0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVNldD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVNldFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVN0YXJ0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTdGFydCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTdGFydD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVN0YXJ0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9VSUJ1dHRvbjpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fVUk6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Rlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Rlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fZGF0YVRlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fdGVzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1vOWpzOXhcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX1VJQnV0dG9uID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9VSSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fdGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX190ZXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fbG9va1ZBZDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fbG9va1ZBZFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19sb29rVkFkOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3NoYXJlOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaGFyZVRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaGFyZTpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaG93VG9hc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tdDFwdzl5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RQbGF0Zm9ybVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9sb29rVkFkID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb29rVkFkVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fX2xvb2tWQWQgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fc2hhcmUgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3NoYXJlVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fX3NoYXJlID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fX3Nob3dUb2FzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWg2NmU5elwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0VUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0VUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1BHYW1lU2V0IGZyb20gXCIuL0ZHVUlfUEdhbWVTZXRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQYXVzZSBmcm9tIFwiLi9GR1VJX1BHYW1lUGF1c2VcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGxheSBmcm9tIFwiLi9GR1VJX1BHYW1lUGxheVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVN0YXJ0IGZyb20gXCIuL0ZHVUlfUEdhbWVTdGFydFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RVSSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFVJXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lRW5kIGZyb20gXCIuL0ZHVUlfUEdhbWVFbmRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdE1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDb20gZnJvbSBcIi4vRkdVSV9QR2FtZUNvbVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZU1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZU1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTZXQuVVJMLCBGR1VJX1BHYW1lU2V0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGF1c2UuVVJMLCBGR1VJX1BHYW1lUGF1c2UpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUxvYWRpbmcuVVJMLCBGR1VJX1BHYW1lTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBsYXkuVVJMLCBGR1VJX1BHYW1lUGxheSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVN0YXJ0LlVSTCwgRkdVSV9QR2FtZVN0YXJ0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFVJLlVSTCwgRkdVSV9QR2FtZVRlc3RVSSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUVuZC5VUkwsIEZHVUlfUEdhbWVFbmQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0TWFpbi5VUkwsIEZHVUlfUEdhbWVUZXN0TWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUNvbS5VUkwsIEZHVUlfUEdhbWVDb20pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVNYWluLlVSTCwgRkdVSV9QR2FtZU1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0uVVJMLCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9FbXB0eVNjcmVlblVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovLzdrdHppYjhvcTNuZzBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfRW1wdHlTY3JlZW5VSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfRW1wdHlTY3JlZW5VST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdEVtcHR5U2NyZWVuXCIsIFwiRW1wdHlTY3JlZW5VSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwiLi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9FbXB0eVNjcmVlblVJLlVSTCwgRkdVSV9FbXB0eVNjcmVlblVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9pbml0TG9hZFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIG1fbG9hZGluZ19wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sb2dvOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWE6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWFfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9nYW1lX2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9uM29lZHBwNm5paHIwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX2luaXRMb2FkVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX2luaXRMb2FkVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRMb2FkXCIsIFwiaW5pdExvYWRVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb2FkaW5nX3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xvZ28gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3RleHRfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV90ZXh0X3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YV92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV90ZXh0X2dhbWVfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcIi4vRkdVSV9pbml0TG9hZFVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9pbml0TG9hZFVJLlVSTCwgRkdVSV9pbml0TG9hZFVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9UZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9oeHU0emM5ZGlvbzgwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1Rlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9UZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiX1Rlc3RcIiwgXCJUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9UZXN0TWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfVGVzdE1haW4uVVJMLCBGR1VJX1Rlc3RNYWluKTtcclxuXHR9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyB3aWR0aDogbnVtYmVyID0gNzUwO1xyXG4gICAgc3RhdGljIGhlaWdodDogbnVtYmVyID0gMTMzNDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjogc3RyaW5nID0gXCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6IHN0cmluZyA9IFwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6IGFueSA9IFwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBNYWluRGF0YVByb3h5IH0gZnJvbSBcIi4vTWFpbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTZXREYXRhUHJveHkgfSBmcm9tIFwiLi9TZXREYXRhUHJveHlcIjtcclxuaW1wb3J0IFNob3J0RGF0YVByb3h5IGZyb20gXCIuL1Nob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNpZ25EYXRhUHJveHkgfSBmcm9tIFwiLi9TaWduRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFRlc3REYXRhUHJveHkgfSBmcm9tIFwiLi9UZXN0RGF0YVByb3h5XCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBEYXRhTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmiYDmnInmlbDmja5cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgTWFpbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNldERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNpZ25EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaG9ydERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgTWFpbkRhdGEgZnJvbSBcIi4vdHlwZS9NYWluRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKE1haW5EYXRhKVxyXG5leHBvcnQgY2xhc3MgTWFpbkRhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxNYWluRGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBNYWluRGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNldERhdGEgZnJvbSBcIi4vdHlwZS9TZXREYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2V0RGF0YSlcclxuZXhwb3J0IGNsYXNzIFNldERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxTZXREYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNldERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZVNob3J0RGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaG9ydERhdGEgZnJvbSBcIi4vdHlwZS9TaG9ydERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaG9ydERhdGEpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YVByb3h5IGV4dGVuZHMgQmFzZVNob3J0RGF0YVByb3h5PFNob3J0RGF0YT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2hvcnREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2lnbkRhdGEgZnJvbSBcIi4vdHlwZS9TaWduRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOetvuWIsOaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNpZ25EYXRhKVxyXG5leHBvcnQgY2xhc3MgU2lnbkRhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxTaWduRGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaWduRGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFRlc3REYXRhIGZyb20gXCIuL3R5cGUvVGVzdERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShUZXN0RGF0YSlcclxuZXhwb3J0IGNsYXNzIFRlc3REYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8VGVzdERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVGVzdERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLy9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvKiog5piv5ZCm5omT5byA6Z+z5pWIICovXHJcbiAgICBpZk9wZW5Tb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKiog5piv5ZCm5omT5byA6IOM5pmv6Z+z5LmQICovXHJcbiAgICBpZk9wZW5NdXNpYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6ZyH5YqoICovXHJcbiAgICBpZk9wZW5WaWJyYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhIGV4dGVuZHMgQmFzZURhdGEgeyB9IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOetvuWIsOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICBudW1iZXI6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpbmc6IHN0cmluZyA9ICdzdHJpbmcnO1xyXG4gICAgYm9vbGVhbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBhcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgIG9iamVjdDoge1xyXG4gICAgICAgIGE6IG51bWJlcixcclxuICAgICAgICBiOiBzdHJpbmcsXHJcbiAgICAgICAgYzogYm9vbGVhblxyXG4gICAgfSA9IHtcclxuICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgYjogJ2InLFxyXG4gICAgICAgICAgICBjOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGEvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVJbml0TG9hZCBmcm9tIFwiLi9NYWluL0dhbWVJbml0TG9hZFwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuL1NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyIGZyb20gXCIuL1VJQ29uL1VJQ29uTWFuYWdlclwiO1xyXG5pbXBvcnQgVGVzdE1haW4gZnJvbSBcIi4vX3Rlc3QvVGVzdE1haW5cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/lhaXlj6NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluIHtcclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICAvL+iOt+WPlua4uOaIj+WIneWni+WMluWKoOi9veWunuS+i1xyXG4gICAgICAgIGxldCBfZ2FtZUluaXRMb2FkOiBHYW1lSW5pdExvYWQgPSBuZXcgR2FtZUluaXRMb2FkKCk7XHJcbiAgICAgICAgLy/lvIDlp4vliqDovb1cclxuICAgICAgICBfZ2FtZUluaXRMb2FkLmxvYWQoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXRMb2FkQ29tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ri45oiP5Yqg6L295a6M5oiQXHJcbiAgICBwcml2YXRlIGdhbWVJbml0TG9hZENvbSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluWQhOS4queuoeeQhuWZqFxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly/lnLrmma/nrqHnkIblmahcclxuICAgICAgICBVSUNvbk1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8vdWnmjqfliLblmajnrqHnkIblmahcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly/mlbDmja7nrqHnkIblmahcclxuICAgIH1cclxuXHJcbiAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgcHJpdmF0ZSBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn6L+b5YWl5ri45oiPJykpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICAvLyBUT0RPIOi/m+WFpea1i+ivleaooeWdl1xyXG4gICAgICAgICAgICBUZXN0TWFpbi5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgICAqL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgX1Rlc3RCaW5kZXIgZnJvbSBcInNyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyXCI7XHJcbmltcG9ydCBDb25maWdULCB7IElCYXNlQ29uZmlnQ29udGFpbmVyIH0gZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IHsgRkdVSVBhY2sgfSBmcm9tIFwic3JjL19UL0QyL0ZHVUkvRkdVSVBhY2tcIjtcclxuaW1wb3J0IEJhc2VJbml0TG9hZCBmcm9tIFwic3JjL19UL01haW4vQmFzZUluaXRMb2FkXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcInNyYy9fVC9SZXMvRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tIFwic3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5pbXBvcnQgSW5pdEVtcHR5U2NyZWVuVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRFbXB0eVNjcmVlblVJQ29uXCI7XHJcbmltcG9ydCBJbml0TG9hZFVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0TG9hZFVJQ29uXCI7XHJcbmltcG9ydCB7IEJ1aWxkQ29uZmlnVHMgfSBmcm9tIFwiLi4vX2NvbmZpZy9CdWlsZENvbmZpZ1RzXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi4vX2NvbmZpZy9fVGVzdENvbnN0XCI7XHJcbmltcG9ydCB7IF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMgfSBmcm9tIFwiLi4vX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXNcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/liJ3lp4vljJbliqDovb1cclxuICogISDlj6rotJ/otKPmuLjmiI/liJ3lp4vljJblkozliqDovb3vvIzkuI3lgZrlhbbku5bkuovmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbml0TG9hZCBleHRlbmRzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvKiog55m95bGPdWnmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgbV9pbml0RW1wdHlTY3JlZW5VSUNvbjogSW5pdEVtcHR5U2NyZWVuVUlDb247XHJcbiAgICAvKiog5Yid5aeL5YyW5Yqg6L29dWnmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgbV9pbml0TG9hZFVJQ29uOiBJbml0TG9hZFVJQ29uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6ZyA6KaB55qEdWnmjqfliLblmajlrp7kvotcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBuZXcgSW5pdEVtcHR5U2NyZWVuVUlDb24oKTtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG5ldyBJbml0TG9hZFVJQ29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWIneWni+WMluS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEJlZm9yZSgpIHtcclxuICAgICAgICAvL+iuvue9rui3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5hZGRSZXNVcmwoX2ksIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlJvb3RSZXMpICsgYCR7X2l9L2ApOy8v5rOo5YWl6aKE5Yi25L2T6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u6aKE5Yi25L2T5Zy65pmv5a+554WnXHJcbiAgICAgICAgRXNzZW50aWFsUmVzVXJscy5zZXRQcmVmYWJTY2VuZU5hbWVzKF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWIhuWMheWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRTdWJwYWNrYWdlTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v6I635Y+WZmd1aeWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdENvbmZpZ0xvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpeWFtuS7lui1hOa6kOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbG9hZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YiG5YyF5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0U3VicGFja2FnZUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpWZndWnnmoTmiYDmnInliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+WFiOe7keWumuaJgOaciXVpXHJcbiAgICAgICAgdGhpcy5GR1VJQmluZGVyKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0RW1wdHlTY3JlZW4nLCB1bmRlZmluZWQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0RW1wdHlTY3JlZW4pKSk7Ly/nmb3lsY91aeWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRMb2FkJywgMCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRMb2FkKSkpOy8v5Yqg6L2955WM6Z2i5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUJhZycpKTsvL+WOn+WMhe+8jOmAmuW4uOS4uui1hOa6kOWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVDb21tb24nKSk7Ly/lhazlhbHljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdfVGVzdCcpKTsvL+a1i+ivleWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVNYWluJywgMCkpOy8v5Li75YyFXHJcbiAgICB9XHJcbiAgICAvL2ZndWnnu5HlrppcclxuICAgIHByaXZhdGUgRkdVSUJpbmRlcigpIHtcclxuICAgICAgICBJbml0RW1wdHlTY3JlZW5CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEluaXRMb2FkQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lQ29tbW9uQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBfVGVzdEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZU1haW5CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5ZGR1VJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGdldEZHVUlMb2FkSXRlbXMoX25hbWU6IHN0cmluZywgX2F0bGlhc0NvdW50PzogbnVtYmVyLCBfY29tQmFjaz86IExheWEuSGFuZGxlcik6IFJlc0xvYWRJdGVtIHtcclxuICAgICAgICBsZXQgX2ZndWlSZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgLy/ms6jlhaXljIXot6/lvoRcclxuICAgICAgICBuZXcgRkdVSVBhY2soRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSksIF9hdGxpYXNDb3VudCkuZ2V0UmVzVVJMKF9mZ3VpUmVzKTtcclxuICAgICAgICAvL+WIm+W7uuWKoOi9vemhuVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzTG9hZEl0ZW0oX2ZndWlSZXMsIEVSZXNMb2FkTW9kZWwuRDIsIF9uYW1lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mt7vliqDljIVcclxuICAgICAgICAgICAgdGhpcy5hZGRGR1VJUGFja2FnZShfbmFtZSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIC8v5re75Yqg5YyFXHJcbiAgICBwdWJsaWMgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgJ1NjZW5lJ1xyXG4gICAgICAgIF0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a65LT4nLCBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpeWFtuS7lui1hOa6kOWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBpbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m95bGP5pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRFbXB0eVNjcmVlbigpIHtcclxuICAgICAgICAvL+aYvuekuueZveWxj3VpXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLlNob3coKTtcclxuICAgIH1cclxuICAgIC8v5Yqg6L295pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRMb2FkKCkge1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgLy/mmL7npLrliqDovb11aVxyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuLjmiI/liqDovb3ov5vluqYtPicsIF9pKTtcclxuICAgICAgICBpZiAodGhpcy5tX2luaXRMb2FkVUlDb24gJiYgdGhpcy5tX2luaXRMb2FkVUlDb24uaWZTaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLnNldFBsYW4oX2kpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRDb20oKSB7XHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcInNyYy9fVC9EMy9zY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/nrqHnkIblmahcclxuICog566h55CG5Zy65pmv77yM6I635Y+W5Zy65pmv77yM54S25ZCO6YCa6L+H5Zy65pmv5a6e5L6L5p6E5bu65Zy65pmv5Lit5a+56LGh55qE6IqC54K5XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKiog5Zy65pmv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVMaXN0OiB7XHJcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBTY2VuZSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluWcuuaZr1xyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmUoX25hbWU6IHN0cmluZyk6IFNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhajpg6jlnLrmma9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBfbmFtZSA9IF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gPSBuZXcgU2NlbmUoX25hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy/moLnmja7kuI3lkIznmoTlnLrmma/lrp7kvovljJbkuI3lkIznmoTnsbtcclxuICAgICAgICAgICAgc3dpdGNoIChfbmFtZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbk1hbmFnZXIgZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyUHJveHkgZnJvbSBcIi4vVUlDb25NYW5hZ2VyUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlcjxVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVUlDb25NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwic3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIOeZveWxj3Vp5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RW1wdHlTY3JlZW5VSUNvbiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGluaXRFbXB0eVNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgdWlDcmVhdGU6IEZHVUlfRW1wdHlTY3JlZW5VSSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfSA9IHtcclxuICAgICAgICAgICAgaW5pdEVtcHR5U2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICB1aUNyZWF0ZTogRkdVSV9pbml0TG9hZFVJLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgLy/mmL7npLrlm57osINcclxuICAgIHByb3RlY3RlZCBfT25TaG93KCkge1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgbGV0IF91aTogRkdVSV9pbml0TG9hZFVJID0gdGhpcy5nZXRVSTxGR1VJX2luaXRMb2FkVUk+KCdpbml0RW1wdHlTY3JlZW4nKTtcclxuICAgICAgICBfdWkubV90ZXh0X2xvZ28udGV4dCA9IF9NYWluQ29uZmlnLlpITmFtZTtcclxuICAgICAgICBfdWkubV90ZXh0X3YudGV4dCA9IF9NYWluQ29uZmlnLlZlcnNpb25zO1xyXG4gICAgICAgIF91aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIF91aS5tX3RleHRfZXhwbGFpbi50ZXh0ID0gX01haW5Db25maWcuVGVhbTtcclxuICAgICAgICBfdWkubV90ZXh0X2xheWFfdi50ZXh0ID0gTGF5YS52ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICBfaSAqPSAxMDA7XHJcbiAgICAgICAgbGV0IF91aTogRkdVSV9pbml0TG9hZFVJID0gdGhpcy5nZXRVSTxGR1VJX2luaXRMb2FkVUk+KCdpbml0RW1wdHlTY3JlZW4nKTtcclxuICAgICAgICBfdWkubV9wcm9ncmVzcy52YWx1ZSA9IF9pO1xyXG4gICAgICAgIF91aS5tX2xvYWRpbmdfcHJvZ3Jlc3MudGV4dCA9IE1hdGguZmxvb3IoX2kpICsgJyAlJztcclxuICAgIH1cclxufSIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcclxuLy9cclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuL19TY2VuZU5vZGVDb25maWdcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25maWcgfSBmcm9tIFwiLi9fVGVzdENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xyXG5cclxuLyoqXHJcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXHJcbiogISDoh6rliqjlr7zlh7pcclxuKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInnmoTphY3nva7ooajlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbGxDb25maWcoKTogYW55W10ge1xyXG4gICAgICAgIGxldCBjb25maWdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1Rlc3RDb25maWcpO1xyXG4gICAgICAgIGNvbmZpZ3MucHVzaChfVGVzdENvbnN0KTtcclxuICAgICAgICByZXR1cm4gY29uZmlncztcclxuICAgIH1cclxufVxyXG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxyXG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcclxuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XHJcbiAgICAgICAvKiog5YWz5Y2haWRb5b+F6KaBXSAqL1xyXG4gICAgICAgIGlkOiBhbnk7XHJcbiAgICAgICAvKiog5omA5bGe5Zy65pmvICovXHJcbiAgICAgICAgc2NlbmU6IHN0cmluZztcclxuICAgICAgIC8qKiDoioLngrnlkI3lrZfliJfooaggKi9cclxuICAgICAgICBzY2VuZU5hbWU6IHN0cmluZztcclxuICAgIH1cclxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cclxuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnU2NlbmVOb2RlQ29uZmlnLmpzb24nO1xyXG59XHJcbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfVGVzdENvbmZpZyBjb25maWfphY3nva7mlofku7ZcclxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25maWcge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xyXG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcclxuICAgICAgIC8qKiDmlbDlgLzvvIzkuI3nrqHku4DkuYjlgLzvvIzpg73kvJrovazmiJDlrZfnrKbkuLIgKi9cclxuICAgICAgICBuOiBudW1iZXI7XHJcbiAgICAgICAvKiog5a2X56ym5Liy77yM5LiN566h5piv5LuA5LmI5YC877yM5pyA5ZCO6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXHJcbiAgICAgICAgczogc3RyaW5nO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvO+8jOS4jeeuoeS7gOS5iOWAvOmDveS8mui9rOW4g+WwlOWAvCAqL1xyXG4gICAgICAgIGI6IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXHJcbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfVGVzdENvbmZpZy5EYXRhVHlwZVtdID0gW107XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uZmlnLmpzb24nO1xyXG59XHJcbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfVGVzdENvbnN0IGNvbnN06YWN572u5paH5Lu2XHJcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uc3Qge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25zdCc7XHJcbiAgICAvKiog5pWw5o2u57G75Z6LICovXHJcbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xyXG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlSAqL1xyXG4gICAgICAgIG46IG51bWJlcjtcclxuICAgICAgIC8qKiDmlbDlgLzmtYvor5UyICovXHJcbiAgICAgICAgbjI6IG51bWJlcjtcclxuICAgICAgIC8qKiDmlbDlgLzmtYvor5UzICovXHJcbiAgICAgICAgbjM6IG51bWJlcjtcclxuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UgKi9cclxuICAgICAgICBzOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMiAqL1xyXG4gICAgICAgIHMyOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMyAqL1xyXG4gICAgICAgIHMzOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXHJcbiAgICAgICAgYjogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UxICovXHJcbiAgICAgICAgYjI6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMiAqL1xyXG4gICAgICAgIGIzOiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xyXG4gICAgICAgIGI0OiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTMgKi9cclxuICAgICAgICBiNTogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U0ICovXHJcbiAgICAgICAgYjY6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNSAqL1xyXG4gICAgICAgIGI3OiBib29sZWFuO1xyXG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlSAqL1xyXG4gICAgICAgIG86IGFueTtcclxuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UxICovXHJcbiAgICAgICAgbzI6IGFueTtcclxuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UyICovXHJcbiAgICAgICAgbzM6IGFueTtcclxuICAgIH1cclxuICAgIC8qKiBjb25zdOaVsOaNruWIl+ihqCAqL1xyXG4gICAgZXhwb3J0IHZhciBkYXRhOiBfVGVzdENvbnN0LkRhdGFUeXBlID0gbnVsbDtcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25zdC5qc29uJztcclxufVxyXG4gICAgIiwiLyoqXHJcbiAqIOaJgOacieWcuuaZr+WvueW6lOeahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbFNjZW5lUHJlZmFic05hbWVzIHtcclxuICAgIFByZWZhYiA9ICdAQ3ViZUBAU3BoZXJlQCcsXHJcblxyXG59XHJcbi8vIiwiLyoqXHJcbiAqIOaJgOacieWvvOWHuuWcuuaZr+WQjeWtl1xyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbEV4cG9ydFNjZW5lTmFtZSB7XHJcbiAgICBTY2VuZSA9ICdTY2VuZScsXHJcblxyXG59IiwiaW1wb3J0IHsgSUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29tL0lDb25maWdEYXRhXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCIuLi9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiDoo4XppbDphY3nva7ooajku6PnkIZcclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlQ29uZmlnUHJveHkoX2NvbmZpZzogSUJhc2VDb25maWdDb250YWluZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6YWN572u6KGo5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuY29uZmlnVGVtcGxhdGUgPSBfY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uumFjee9ruihqOWIl+ihqFxyXG4gICAgICog5Y+q5p6E5bu677yM5LiN5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZ3Mg6YWN572u6KGo5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQnVpbGRDb25maWdzKF9jb25maWdzOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcltdKSB7XHJcbiAgICAgICAgbGV0IF91cmw6IHN0cmluZztcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfY29uZmlncykge1xyXG4gICAgICAgICAgICBfdXJsID0gRXNzZW50aWFsUmVzVXJscy5Db25maWdKc29uVVJMKF9vLmZpbGVOYW1lKTtcclxuICAgICAgICAgICAgLy/loavlhYXmlbDmja5cclxuICAgICAgICAgICAgc3dpdGNoIChfby50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uZmlnQ29udGFpbmVyKS5kYXRhcyA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25zdENvbnRhaW5lcikuZGF0YSA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahqc29u5pWw5o2uXHJcbiAgICAgKiDvvIHms6jmhI/vvIzojrflj5bkuobor6XotYTmupDor6XotYTmupDlsLHkvJrooqvliKDpmaTmjolcclxuICAgICAqIEBwYXJhbSBfdXJsIOmFjee9ruihqOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0pzb25EYXRhKF91cmw6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy/ojrflj5botYTmupBcclxuICAgICAgICBsZXQgY29uZmlnRGF0YTogSUNvbmZpZ0RhdGEgPSBSZXNMb2FkLkdldFJlcyhfdXJsLCB0cnVlKTtcclxuICAgICAgICAvL+a4heeQhui1hOa6kOe8k+WtmOWPquS9v+eUqOS4gOasoVxyXG4gICAgICAgIFJlc0xvYWQuQ2xlYXJSZXMoX3VybCk7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInljovnvKlcclxuICAgICAgICBpZiAoY29uZmlnRGF0YS56aXApIHtcclxuICAgICAgICAgICAgLy/op6PljotcclxuICAgICAgICAgICAgbGV0IF90aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25maWdEYXRhLmRhdGEgPSBKU09OLnBhcnNlKHBha28uaW5mbGF0ZShjb25maWdEYXRhLmRhdGEsIHsgdG86ICdzdHJpbmcnIH0pKTtcclxuICAgICAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgICAgIC8v5Yik5pat6Kej5Y6L5pe26Ze05beuXHJcbiAgICAgICAgICAgIGlmIChfdGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6YWN572u6KGo6Kej5Y6L5pe26Ze06L+H6ZW/77yM5Y+v6IO95piv6YWN572u6KGo5paH5Lu26L+H5aSnLT4nLCBfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gY29uZmlnRGF0YS5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G76YWN572u6KGo5a655Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIHJlYWRvbmx5IGZpbGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25maWcg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWdDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2u5YiX6KGoICovXHJcbiAgICBkYXRhczogYW55W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25zdCDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0Q29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YTogYW55O1xyXG59IiwiLyoqXHJcbiAqIOaJk+WNsOWPsOW4uOeUqOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUNvbnN0IHtcclxuXHJcbiAgICAvKiog5YWs5YWx5qC35byPICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgcHVibGljU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmma7pgJrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnIzlCQTRCNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDovbvmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ0xpZ2h0U3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzc3NmQ4YScsICcjRUJFQkVCJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOitpuWRiua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyblN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM1YzZlMDYnLCAnI2ZmYTkzMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDplJnor6/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVycm9yU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjZWMwMTAxJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiJDlip/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvbVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2FkZTQ5OCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagt+W8j1xyXG4gICAgICogQHBhcmFtIF9jb2xvciDlrZfkvZPpopzoibJcclxuICAgICAqIEBwYXJhbSBfYmdDb2xvciDog4zmma/popzoibJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdHlsZShfY29sb3I6IHN0cmluZywgX2JnQ29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke19jb2xvcn07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke19iZ0NvbG9yfTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICBgKyB0aGlzLnB1YmxpY1N0eWxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlQ29uc3QgZnJvbSBcIi4vQ29uc29sZUNvbnN0XCI7XHJcblxyXG4vKipcclxuICog5omT5Y2w5Y+w5omp5bGVXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlRXgge1xyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xkv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc3R5bGUg5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX3BhciDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFjayhfc3R5bGU6IHN0cmluZywgX3BhcjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbJyVjJXMnLCBfc3R5bGUsICdsb2cnLCAuLi5fcGFyXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2coLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrovbvmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZ0xpZ2h0KC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ0xpZ2h0U3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XmiJDlip/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0NvbSguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5jb21TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheitpuWRiua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrV2FybiguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC53YXJuU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XplJnor6/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0Vycm9yKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmVycm9yU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogMmTnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQyTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIGZndWnmoLnnrqHnkIblmaggKi9cclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvblByb3h5IGZyb20gXCIuL0Jhc2VVSUNvblByb3h5XCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuaW1wb3J0IEZHdWlEYXRhIGZyb20gXCIuL0ZHdWlEYXRhXCI7XHJcbmltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSVJvb3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBGR1VJVCBmcm9tIFwiLi9GR1VJVFwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5pbXBvcnQgUm9vdFVJQ29uIGZyb20gXCIuL1Jvb3RVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5o6n5Yi25Zmo5Z+657G7KOeUqOadpeaOp+WItlVJ55WM6Z2iKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uIGV4dGVuZHMgUm9vdFVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDllK/kuIDplK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOiOt+WPluWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3ltYm9sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHByaXZhdGUgbV9yb290VUk6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHVibGljIGdldCByb290VUkoKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RVSTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Zyo6ZqQ6JeP5pe25riF55CG5o6JdWnvvIzpu5jorqTkuLp0cnVlICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmQ2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBVSeWxgue6p+exu+Wei++8jOW/hemhu+WcqOWIneWni+WMluaXtuiuvue9riAqL1xyXG4gICAgcHJvdGVjdGVkIF9sYXllcjogRVVJTGF5ZXIgPSBFVUlMYXllci5QYW5lbDtcclxuXHJcbiAgICAvKiogdWnlsYLnuqcgKi9cclxuICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwcml2YXRlIG1faWZTaG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp5Luj55CG5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJveHlVSUxpc3Q6IFNldDxCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmFkZChfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmRlbGV0ZShfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uU2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdWnku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuZFVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5lbmRQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6dWlcclxuICAgIHByaXZhdGUgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmoLnoioLngrl1aVxyXG4gICAgICAgIHRoaXMubV9yb290VUkgPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmdldExheWVyVUkodGhpcy5fbGF5ZXIpLmFkZENoaWxkKHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gdGhpcy5tX3Jvb3RVSS5hZGRDaGlsZCh0aGlzLl9VSXNbX2ldLnVpQ3JlYXRlLmNyZWF0ZUluc3RhbmNlKCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9jcmVhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrox1aeWQjuWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWlcclxuICAgICAqIEBwYXJhbSBfbmFtZSB1aeWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+KF9uYW1lOiBzdHJpbmcpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJc1tfbmFtZV0udWkgYXMgVUk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU2hvd0JlZm9yZSguLi5wYXIpO1xyXG4gICAgICAgIGxldCBfaWZOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkgfHwgdGhpcy5tX3Jvb3RVSS5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu6dWlcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgICAgICBfaWZOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWIsOW9k+WJjeWxgue6p+mhtuWxguaYvuekulxyXG4gICAgICAgIEZHVUlULnNldFVJVG9wU2hvdyh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICAvL+aJi+WKqOabtOaWsOS4gOasoVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIC8v55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uU2hvdyhfaWZOZXcsIC4uLnBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2xlYXIg5piv5ZCm5riF55CGXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWFtuS7luWPguaVsO+8jOS8muS8oOWIsOmakOiXj+eahOWbnuiwg+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZShfaWZDbGVhcjogYm9vbGVhbiA9IHRoaXMuX2lmQ2xlYXIsIC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29uSGlkZUJlZm9yZShwYXIpO1xyXG4gICAgICAgIGlmIChfaWZDbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NlVUkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5bmtojnm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uSGlkZShfaWZDbGVhciwgcGFyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnooqvmuIXnkIbml7bnmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfZGlzcG9zZVVJKCkgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDlpKflsI8gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAvL+agueaNruWtkHVp5pC65bim55qE5pWw5o2u6YCC6YWN5bGP5bmV5aSn5bCPXHJcbiAgICAgICAgbGV0IF9kYXRhOiBGR3VpRGF0YTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSBMYXlhLnN0YWdlLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgX2RhdGEgPSB0aGlzLl9VSXNbX2ldLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghX2RhdGEgfHwgIV9kYXRhLmlmVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCAtIF9kYXRhLmxlZnQgLSBfZGF0YS5yaWdodCwgX2hlaWdodCAtIF9kYXRhLmJvdHRvbSAtIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoX2RhdGEubGVmdCwgX2RhdGEudG9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbt1aeaOp+WItuWZqOexu+Wei+aOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVVJQ29uRGVmaW5lcyB7XHJcbiAgICAvKiogdWnliJvlu7rlmaggKi9cclxuICAgIHVpQ3JlYXRlOiBJVUlDcmVhdGU7XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhPzogRkd1aURhdGE7XHJcbiAgICAvKiogdWkgKi9cclxuICAgIHVpPzogZmd1aS5HQ29tcG9uZW50O1xyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlVUlDb24gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICog57uf5LiA566h55CGdWnmjqfliLblmahcclxuICog5b+F6aG76YWN5ZCI5Luj55CG5Zmo5L2/55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyPFByb3h5IGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlclByb3h5PiB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcbiAgICAvKiogdWnku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpUHJveHk6IFByb3h5O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICog5qGG5p626LCD55So77yM5LiN6IO955u05o6l6LCD55SoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICB0aGlzLl9faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIPvvIznu6fmib/kvb/nlKjvvIzkuLvopoHorr7nva51aeWIl+ihqOWSjOS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJbkuYvlkI7nmoTmo4DmtYtcclxuICAgIHByaXZhdGUgX19pbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlueuoeeQhueahHVp5YiX6KGoJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV91aVByb3h5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyWdWnku6PnkIYnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7ku6PnkIblmajku6PnkIZcclxuICAgICAgICAgICAgdGhpcy5tX3VpUHJveHkuc2V0UHJveHkodGhpcy5tX3VpQ29uTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdWkg5o6n5Yi25Zmo566h55CG5Zmo5Luj55CGXHJcbiAqIOi0n+i0o+S7o+eQhnVp5o6n5Yi25Zmo566h55CG5Zmo5Lit55qE5o6n5Yi25Zmo77yM6Ziy5q2i5b6q546v5L6d6LWWXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlclByb3h5IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKiog5b2T5YmN5pi+56S655qEdWnmjqfliLblmajntKLlvJXliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX29uU2hvd1VJQ29uOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3VpTGlzdCB1aeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHkoX3VpTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLm1fdWlDb25MaXN0ID0gX3VpTGlzdDtcclxuICAgICAgICB0aGlzLm1fb25TaG93VUlDb24gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrnVp6ZSu5YC86I635Y+W5LiA5LiqdWlcclxuICAgICAqIEBwYXJhbSBfa2V5IHVp6ZSu5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSUNvbiBleHRlbmRzIEJhc2VVSUNvbj4oX2tleTogc3RyaW5nKTogVUlDb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWlDb25MaXN0W19rZXldIGFzIFVJQ29uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6dWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajntKLlvJXmiJbogIXntKLlvJXliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV91aUNvbkxpc3RbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uU2hvd1VJQ29uLnB1c2goLi4uX3VpQ29ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgIHRoaXMubV9vblNob3dVSUNvbiA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLm1fb25TaG93VUlDb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj3Vp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo5a6e5L6L5oiW5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fb25TaG93VUlDb24gPSB0aGlzLm1fb25TaG93VUlDb24uZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dICYmIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uaWZTaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5b2T5YmN5pi+56S655qE5omA5pyJdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVBbGxVSSgpIHtcclxuICAgICAgICB0aGlzLm1fb25TaG93VUlDb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dICYmIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubV9vblNob3dVSUNvbiA9IFtdO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFVJ5YiG5bGCLOaMiemhuuW6j+aYvuekulxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVJTGF5ZXIge1xyXG4gICAgLyoqIOiDjOaZr+mhtemdoiAqL1xyXG4gICAgQmcgPSAnQmcnLFxyXG4gICAgLyoqIOS4u+eVjOmdoiAg5rC46L+c5a2Y5ZyoICovXHJcbiAgICBNYWluID0gXCJNYWluXCIsXHJcbiAgICAvKiog6Z2i5p2/ICDlj6/ku6XmnInlvojlpJogKi9cclxuICAgIFBhbmVsID0gXCJQYW5lbFwiLFxyXG4gICAgLyoqIOW8ueeqlyAqL1xyXG4gICAgUG9wdXAgPSBcIlBvcHVwXCIsXHJcbiAgICAvKiog6YGT5YW3ICovXHJcbiAgICBQcm9wID0gJ1Byb3AnLFxyXG4gICAgLyoqIOWwj+mDqOS7tiAqL1xyXG4gICAgVGlwID0gXCJUaXBcIixcclxuICAgIC8qKiDmmoLlgZwgKi9cclxuICAgIFBhdXNlID0gJ1BhdXNlJyxcclxuICAgIC8qKiDorr7nva4gKi9cclxuICAgIFNldCA9ICdTZXQnLFxyXG4gICAgLyoqIOacgOmrmCAqL1xyXG4gICAgVG9wID0gJ1RvcCcsXHJcbiAgICAvKiog5Yqg6L296aG16Z2iICovXHJcbiAgICBMb2FkaW5nID0gJ0xvYWRpbmcnLFxyXG4gICAgLyoqIOWOn+eUnyAqL1xyXG4gICAgTmF0aXZlID0gJ05hdGl2ZScsXHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICogVUnljIXnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGR1VJUGFjayB7XHJcbiAgICAvLyDljIXot6/lvoRcclxuICAgIHByaXZhdGUgcGFja1BhdGg6IHN0cmluZztcclxuICAgIC8vIOWFtuS7lui1hOa6kOaVsOmHj1xyXG4gICAgcHJpdmF0ZSBhdGxpYXNDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YyFXHJcbiAgICAgKiBAcGFyYW0gX3BhY2tVcmwg5YyF5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX2F0bGlhc0NvdW50IOWbvumbhuaVsOmHj1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcGFja1VybDogc3RyaW5nLCBfYXRsaWFzQ291bnQ6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrUGF0aCA9IF9wYWNrVXJsO1xyXG4gICAgICAgIHRoaXMuYXRsaWFzQ291bnQgPSBfYXRsaWFzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICB0aGlzLmdldFJlc1VSTChfdXJscyk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDJEQXN5bmMoX3VybHMsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOaciei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHVybHMg6L6T5Ye65pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZXNVUkwodXJsczogYW55W10pIHtcclxuICAgICAgICAvL+WKoOWFpeWMheWQjVxyXG4gICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArICcuJyArIF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSk7XHJcbiAgICAgICAgLy/liqDovb3nurnnkIbpm4ZcclxuICAgICAgICBpZiAodGhpcy5hdGxpYXNDb3VudCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMC5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuYXRsaWFzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwX1wiICsgaSArIFwiLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBGR1VJIOagueeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVJvb3RNYW5hZ2VyIHtcclxuICAgIC8vVUnlsYLnuqd1aeWIl+ihqFxyXG4gICAgcHVibGljIHN0YXRpYyBsYXllclVJTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IGZndWkuR0NvbXBvbmVudCB9O1xyXG5cclxuICAgIC8vIOiOt+WPluafkOS4gOWxglVJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExheWVyVUkobGF5ZXJUeXBlOiBFVUlMYXllcik6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllclVJTGlzdFtsYXllclR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvLyDorr7nva7ljIXlkI3lkI7nvIBcclxuICAgICAgICBmZ3VpLlVJQ29uZmlnLnBhY2thZ2VGaWxlRXh0ZW5zaW9uID0gX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb247XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcbiAgICAgICAgLy/mt7vliqBGR1VJ5qC56IqC54K55oyJ6aG65bqP5pi+56S6XHJcbiAgICAgICAgdGhpcy5sYXllclVJTGlzdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVVSUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJVSUxpc3RbRVVJTGF5ZXJbX2ldXSA9IGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChuZXcgZmd1aS5HQ29tcG9uZW50KCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogZmd1aSDlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlUIHtcclxuICAgIC8qKiB1aeWxgue6p2tleSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlMYXllcktleTogc3ltYm9sID0gU3ltYm9sKCdVSUxheWVyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeWxgue6p++8jOmZpOS6hmZndWnmoLnnrqHnkIblmajlm57osIPnlKjvvIzlhbbku5bnmoTlnLDmlrnor7fkuI3opoHosIPnlKhcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyIOWxgue6pyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50LCBfbGF5ZXI6IEVVSUxheWVyKSB7XHJcbiAgICAgICAgX3VpW3RoaXMuVUlMYXllcktleV0gPSBfbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aeWxgue6p1xyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEByZXR1cm5zIHVp5bGC57qnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gX3VpW3RoaXMuVUlMYXllcktleV0gYXMgRVVJTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aemhtuWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJVG9wU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5aSn55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWF4KF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp5bqV5bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlEb3duU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5bCP55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWluKF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyIC0gMTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoLl1aeaOp+WItuWZqFxyXG4gKiDmiYDmnIl1aeaOp+WItuWZqOexu+Wei+exu+Wdh+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUm9vdFVJQ29uIHtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6VUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTaG93KC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZk5ldyDmmK/lkKbmlrDlu7pcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49VSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IEhpZGUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmRGVsZXRlIOaYr+WQpuWIoOmZpFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGUoX2lmRGVsZXRlOiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbn0iLCJpbXBvcnQgR2xvYmFsRDNFbnZpcm9ubWVudCBmcm9tIFwiLi9zY2VuZS9HbG9iYWxEM0Vudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICogM2TnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQzTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIOWIneWni+WMluWFqOWxgOeOr+WigyAqL1xyXG4gICAgICAgIEdsb2JhbEQzRW52aXJvbm1lbnQuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElTY2VuZUVudmlyb25tZW50IGZyb20gXCIuL0lTY2VuZUVudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICog5YWo5bGAM0Tnjq/looNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbEQzRW52aXJvbm1lbnQge1xyXG4gICAgLyoqIDNk5Zy65pmvICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX1NjZW5lM0Q6IExheWEuU2NlbmUzRDtcclxuICAgIC8qKiDmkYTlg4/mnLogKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fQ2FtZXJhOiBMYXlhLkNhbWVyYTtcclxuICAgIC8qKiDnga/lhYkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fTGlnaHQ6IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcblxyXG4gICAgLyoqIOiOt+WPliAzZOWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2NlbmUzRCgpOiBMYXlhLlNjZW5lM0Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fU2NlbmUzRDtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg5pGE5YOP5py6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDYW1lcmEoKTogTGF5YS5DYW1lcmEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fQ2FtZXJhO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDnga/lhYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExpZ2h0KCk6IExheWEuRGlyZWN0aW9uTGlnaHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fTGlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRW52aXJvbm1lbnQoKTogSVNjZW5lRW52aXJvbm1lbnQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLm1fU2NlbmUzRCxcclxuICAgICAgICAgICAgY2FtZXJhOiB0aGlzLm1fQ2FtZXJhLFxyXG4gICAgICAgICAgICBsaWdodDogdGhpcy5tX0xpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNEID0gTGF5YS5zdGFnZS5hZGRDaGlsZChuZXcgTGF5YS5TY2VuZTNEKSBhcyBMYXlhLlNjZW5lM0Q7XHJcbiAgICAgICAgdGhpcy5tX0NhbWVyYSA9IG5ldyBMYXlhLkNhbWVyYTtcclxuICAgICAgICB0aGlzLm1fTGlnaHQgPSBuZXcgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fQ2FtZXJhKTtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fTGlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVQb29sIGZyb20gXCJzcmMvX1QvR2FtZVQvR2FtZVBvb2xcIjtcclxuaW1wb3J0IFYzVXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9WM1V0aWxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0NvbmZpZywgSVByZWZhYnNEaWZmZXJDb25maWcgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOiKgueCueW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7oioLngrnmlbDmja7liJ3lp4vljJboioLngrlcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF90YXJnZXQg55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZShfc3ByOiBMYXlhLlNwcml0ZTNELCBfdGFyZ2V0OiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIsIF90YXJnZXQpO1xyXG4gICAgICAgIC8v6K6+572u5ZCN5a2XXHJcbiAgICAgICAgX3Nwci5uYW1lID0gX3RhcmdldC5uYW1lO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y+Y5o2i55u45YWz55qE5bGe5oCnXHJcbiAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7kvY3nva5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTkvY3nva5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbiwgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7ml4vovaxcclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTml4vovaxcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLmV1bGVyLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u57yp5pS+XHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k57yp5pS+XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUsIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6Kem5Y+R55uR5ZCsXHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgIC8v6K6+572u5beu5byCXHJcbiAgICAgICAgbGV0IF9wcmVmYWJDb25maWc6IElQcmVmYWJzQ29uZmlnID0gX3RhcmdldCBhcyBJUHJlZmFic0NvbmZpZztcclxuICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJOYW1lICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLCBfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKrnsr7ngbXlkozmupDnsr7ngbXnmoTlt67lvIJcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF9kaWZmZXIg5beu5byC5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNldERpZmZlcihfc3ByOiBMYXlhLlNwcml0ZTNELCBfZGlmZmVyOiBJUHJlZmFic0RpZmZlckNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7lt67lvIInLCBfc3ByLCBfZGlmZmVyKTtcclxuICAgICAgICAvL+iOt+WPluS4gOS4quS4tOaXtuWQkemHj1xyXG4gICAgICAgIGxldCBfY2VudHJlVjM6IExheWEuVmVjdG9yMyA9IEdhbWVQb29sLmdldFYzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfZGlmZiBvZiBfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLmdldENoaWxkQXQoX2RpZmYuaW5kZXgpIGFzIExheWEuU3ByaXRlM0QsIF9kaWZmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaciXRyYW5zZm9ybeWxnuaAp1xyXG4gICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zue5pS25Li05pe25ZCR6YePXHJcbiAgICAgICAgR2FtZVBvb2wucmVjeWNsZVYzKF9jZW50cmVWMyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJU2NlbmVDb25maWcgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSBcIi4vU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma8g5a6e5L6LXHJcbiAqIOagueaNruaMh+WumueahOWcuuaZr+mFjee9ruihqOaehOW7uuWcuuaZr1xyXG4gKiAqIOWPr+S7pee7p+aJv+atpOexu+iHquWumuS5ieWcuuaZr1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xyXG4gICAgLyoqIOWcuuaZr+WQjeWtlyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zY2VuZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiog546v5aKDICovXHJcbiAgICBwcm90ZWN0ZWQgbV9lbnZpcm9ubWVudDogSVNjZW5lRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgLyoqIOWcuuaZr+mFjee9ruS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lQ29uZmlnOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSU5vZGVDb25maWcsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOWcuuaZr+iKgueCueWunuS+i+e8k+WtmCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTm9kZXM6IFNjZW5lTm9kZVtdID0gW107XHJcblxyXG4gICAgLyoqIOWcuuaZr+S4reWtmOWcqOeahG5vZGXoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9vblNjZW5lTm9kZXM6IFNldDxTY2VuZU5vZGU+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKiDojrflj5bnjq/looMgKi9cclxuICAgIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKTogSVNjZW5lRW52aXJvbm1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+W9k+WJjeWtmOWcqOeahOiKgueCueWIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBvblNjZW5lTm9kZXMoKTogU2NlbmVOb2RlW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tX29uU2NlbmVOb2Rlc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBfc2NlbmVOYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3NjZW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9zY2VuZU5hbWUgPSBfc2NlbmVOYW1lO1xyXG4gICAgICAgIC8v5qC55o2u5Zy65pmv5ZCN5a2X6K+75Y+W6YWN572u6KGo5L+h5oGvXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInliJ3lp4vljJblnLrmma/nmoTlkI3lrZfvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9kYXRhOiBJTm9kZUNvbmZpZ1tdID0gQ29uZmlnVC5nZXRDb25maWdKc29uRGF0YShFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKHRoaXMuX3NjZW5lTmFtZSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZy5yb290KTtcclxuICAgICAgICBpZiAoX2RhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bmoLnoioLngrnkuIvnmoToioLngrlcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF9kYXRhLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lQ29uZmlnW19kYXRhW19pXS5uYW1lXSA9IF9kYXRhW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign6I635Y+W5Zy65pmv5pWw5o2u5aSx6LSlLT4nLCB0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7njq/looPvvIzpu5jorqTkuLrlhajlsYAzZOeOr+Wig++8jOWPr+S7peiHquWumuS5ieeOr+Wig1xyXG4gICAgICAgIHRoaXMubV9lbnZpcm9ubWVudCA9IEdsb2JhbEQzRW52aXJvbm1lbnQuRW52aXJvbm1lbnQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnphY3nva5cclxuICAgICAqIEBwYXJhbSBfbm9kZU5hbWUg6IqC54K55ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlQ29uZmlnKF9ub2RlTmFtZTogc3RyaW5nKTogSU5vZGVDb25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVDb25maWdbX25vZGVOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWcuuaZr+iKgueCuVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOiKgueCueWQjeWtl++8jOWPr+S7peWkmuS4quS4gOi1t+aehOW7ulxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVOb2RlKF9uYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFNjZW5lTm9kZSB7XHJcbiAgICAgICAgbGV0IF9uYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIF9uYW1lID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goX25hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKC4uLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZ1tdID0gW107XHJcbiAgICAgICAgX25hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcucHVzaCh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5pyJ5Liq5Zy65pmv6IqC54K55rKh5pyJ5om+5YiwJywgaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+iOt+WPluWcuuaZr+iKgueCueaXtu+8jOS4gOS4qumFjee9ruS/oeaBr+mDveayoeaJvuWIsCcsIF9uYW1lcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zyo57yT5a2Y5Lit5om+XHJcbiAgICAgICAgbGV0IF9fbm9kZUNvbmZpZzogSU5vZGVDb25maWdbXTtcclxuICAgICAgICBsZXQgX2E7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlcjtcclxuICAgICAgICBsZXQgX2luZGV4OiBudW1iZXIgPSB0aGlzLm1fc2NlbmVOb2Rlcy5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX19ub2RlQ29uZmlnID0gaXRlbS5ub2RlQ29uZmlncztcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmxlbmd0aCAhPSBfX25vZGVDb25maWcubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgICAgICBfYSA9IHt9O1xyXG4gICAgICAgICAgICBfbm9kZUNvbmZpZy5mb3JFYWNoKChfbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfYVtfby5uYW1lXSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX28ubmFtZV0gPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfYVtfby5uYW1lXSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX19ub2RlQ29uZmlnLmZvckVhY2goKF9fbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfYVtfX28ubmFtZV0gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hW19fby5uYW1lXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfYVtfX28ubmFtZV0tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9udW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiBfYSkge1xyXG4gICAgICAgICAgICAgICAgX251bWJlciArPSBfYVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9udW1iZXIgPT0gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoX2luZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVOb2Rlc1tfaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX3NjZW5lTm9kZTogU2NlbmVOb2RlID0gbmV3IFNjZW5lTm9kZShfbm9kZUNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy/mt7vliqDliLDnvJPlrZhcclxuICAgICAgICB0aGlzLm1fc2NlbmVOb2Rlcy5wdXNoKF9zY2VuZU5vZGUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlvZPliY3oioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+aehOW7uuaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE9uTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5hZGQoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5b2T5YmN6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvliKDpmaTml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVPbk5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuZGVsZXRlKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueOr+Wig1xyXG4gICAgICog5Lya5qC55o2u5b2T5YmN5Zy65pmv5Lit546v5aKD6YWN572u6K6+572u546v5aKDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICBsZXQgX3NjZW5lQ29uZmlnOiBJU2NlbmVDb25maWcgPSB0aGlzLm1fc2NlbmVDb25maWcgYXMgSVNjZW5lQ29uZmlnO1xyXG4gICAgICAgIC8v6K6+572u5YWo5bGA5pGE5YOP5py6XHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5jYW1lcmEpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQuY2FtZXJhLCBfc2NlbmVDb25maWcuY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDnga/lhYlcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmxpZ2h0KSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmxpZ2h0LCBfc2NlbmVDb25maWcubGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgIHRoaXMuX3NldEVudmlyb25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX24sIF9ub2RlKTtcclxuICAgICAgICB0aGlzLl9sb2FkUHJvZ3Jlc3MoX24sIF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tLS0tIOWbnuiwg+WHveaVsFxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKiDorr7nva7njq/looPlkI7miafooYznmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfc2V0RW52aXJvbm1lbnQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzQ29uZmlnLCBJUHJlZmFic0dhdGhlciB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBOb2RlVCBmcm9tIFwiLi9Ob2RlVFwiO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/oioLngrlcclxuICog55So5p2l5p6E5bu65Zy65pmv6IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGUge1xyXG4gICAgLyoqIOaJgOWxnuWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lOiBTY2VuZTtcclxuICAgIC8qKiDmmK/lkKbliKDpmaQgKi9cclxuICAgIHByaXZhdGUgbV9pZkRlbGV0ZTogYm9vbGVhbjtcclxuICAgIC8qKiDoioLngrnphY3nva7kv6Hmga/liJfooaggKi9cclxuICAgIHByaXZhdGUgbV9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXTtcclxuICAgIC8qKiDoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9ub2RlOiBMYXlhLk5vZGU7XHJcbiAgICAvKiog6aKE5Yi25L2T5ZCN5a2X5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFic05hbWVzOiBzdHJpbmdbXTtcclxuICAgIC8qKiDpooTliLbkvZPpm4blkIggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzOiBJUHJlZmFic0dhdGhlcjtcclxuICAgIC8qKiDmmK/lkKblnKjliqDovb0gKi9cclxuICAgIHByaXZhdGUgbV9pZkxvYWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIOiOt+WPluaJgOWxnuWcuuaZryAqL1xyXG4gICAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5boioLngrnphY3nva7kv6Hmga8gKi9cclxuICAgIHB1YmxpYyBnZXQgbm9kZUNvbmZpZ3MoKTogSU5vZGVDb25maWdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ub2RlQ29uZmlncztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bmmK/lkKbliKDpmaQgKi9cclxuICAgIHB1YmxpYyBnZXQgaWZEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkRlbGV0ZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5blnLrmma/oioLngrkgKi9cclxuICAgIHB1YmxpYyBnZXQgbm9kZSgpOiBMYXlhLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPpm4blkIggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFicygpOiBJUHJlZmFic0dhdGhlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzTmFtZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzTmFtZXM7XHJcbiAgICB9XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmTG9hZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmTG9hZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluWcuuaZr+iKgueCueWunuS+i1xyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlncyDoioLngrnphY3nva7kv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc2NlbmUg5omA5bGe5Zy65pmvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW10sIF9zY2VuZTogU2NlbmUpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSA9IF9zY2VuZTtcclxuICAgICAgICAvL+m7mOiupOS4uuWIoOmZpOeKtuaAgVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzID0gX25vZGVDb25maWdzO1xyXG4gICAgICAgIC8v5o+Q5Y+W6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnNOYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJlZmFic05hbWVzKHRoaXMubV9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWVzVVJMOiBzdHJpbmdbXSA9IHRoaXMubV9wcmVmYWJzTmFtZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkM0RBc3luYyhfcHJlZmFiTmFtZXNVUkwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKG4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3Jlc3Mobik7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtuXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5p6E5bu6XHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jQnVpbGQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPFNjZW5lTm9kZT4ge1xyXG4gICAgICAgIHRoaXMubV9pZkxvYWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTY2VuZU5vZGU+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXN5bmNMb2FkKF9vblByb2dyZXNzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9pZkxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/lkJHlnLrmma/kvKDlh7rliqDovb3ov5vluqZcclxuICAgICAgICB0aGlzLm1fc2NlbmUubG9hZFByb2dyZXNzKF9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7ulxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5hZGRPbk5vZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tX25vZGUgPSBuZXcgTGF5YS5Ob2RlO1xyXG4gICAgICAgIC8v5re75Yqg5Yiw5omA5bGe5Zy65pmv546v5aKD5LitXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmVudmlyb25tZW50LnNjZW5lLmFkZENoaWxkKHRoaXMubV9ub2RlKTtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IHt9O1xyXG4gICAgICAgIGxldCBfc3ByOiBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBuZXcgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgdGhpcy5tX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9zcHIsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkRlbGV0ZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAodGhpcy5tX2lmTG9hZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/oioLngrnov5jlnKjmnoTlu7rljbTor5Xlm77liKDpmaTjgIInKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUuZGVsZXRlT25Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubV9ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gX3ByZWZhYnNOYW1lcyDovpPlh7rnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lczogc3RyaW5nW10sIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgLy/ljrvph41cclxuICAgICAgICAgICAgaWYgKCFfcHJlZmFic05hbWVzLmluY2x1ZGVzKF9wcmVmYWJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgX3ByZWZhYnNOYW1lcy5wdXNoKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm6L+Y5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlIOeItuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkTm9kZShfbm9kZTogTGF5YS5Ob2RlLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5LiN5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBSZXNMb2FkLkdldFJlcyhFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChfcHJlZmFiTmFtZSkpIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIF9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgdGhpcy5tX3ByZWZhYnNbX3ByZWZhYk5hbWVdID0gdGhpcy5tX3ByZWZhYnNbX3ByZWZhYk5hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlZmFic1tfcHJlZmFiTmFtZV0ucHVzaChfc3ByKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTm9kZShfbm9kZSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDln7rnsbvmlbDmja5cclxuICogISDlj6rog73lh7rnjrDmlbDmja7lsYLpnaLnmoTkuJzopb9cclxuICog5pWw57uE77yM5a+56LGh77yM5YC8ICjmlbDlrZfvvIzlrZfnrKbkuLLvvIzluIPlsJTlgLwpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCJcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmlbDmja7ku6PnkIZcclxuICog5omA5pyJ5YWz5LqO5Luj55CG5pWw5o2u55qE57G76YO95LuO6L+Z6YeM57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4ge1xyXG4gICAgLyoqIOaVsOaNruaooeadvyAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhVGVtcGxhdGU6IHsgbmV3KCk6IERhdGEgfTtcclxuXHJcbiAgICAvKiog5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiog5pWw5o2u5Luj55CG5bel5YW3ICovXHJcbiAgICBwcm90ZWN0ZWQgbV9vYmplY3RQcm94eVQ6IE9iamVjdFByb3h5VDtcclxuXHJcbiAgICAvKiog6ZyA6KaB5L+d5a2Y55qE5pWw5o2uICovXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhOiBEYXRhO1xyXG5cclxuICAgIC8qKiDojrflj5bmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTZXRQcm94eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2V0UHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlbDmja7ku6PnkIblmahcclxuICAgICAqIOmAmui/h+i/meS4quaVsOaNruS7o+eQhuWZqOWPr+S7pea3u+WKoOS7o+eQhuaVsOaNru+8jOWSjOa3u+WKoOaVsOaNruebkeWQrOWbnuiwgyBb6YWN5ZCIIHJvb3REYXRhIOS9v+eUqF1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvYmplY3RQcm94eVQoKTogT2JqZWN0UHJveHlUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX29iamVjdFByb3h5VDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5paw55qE5pWw5o2uXHJcbiAgICAgKiDnlKjkuo7ph43mnoTmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldE5ld0RhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgLy/lpoLmnpzmsqHmnInmlbDmja7mqKHmnb/nmoTor51cclxuICAgICAgICBpZiAoIXRoaXMuZGF0YVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5om+5Yiw5pWw5o2u5qih5p2/77yB6K+35L2/55So5pWw5o2u5qih5p2/6KOF6aWw5Zmo6KOF6aWw6K+l57G7JywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuZGF0YVRlbXBsYXRlKCkgYXMgRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5pdERhdGEoKTtcclxufSIsImltcG9ydCBNZDUgZnJvbSAnLi9NZDUnO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSAnLi9CYXNlRGF0YVByb3h5JztcclxuaW1wb3J0IEJhc2VEYXRhIGZyb20gJy4vQmFzZURhdGEnO1xyXG5pbXBvcnQgX01haW5Db25maWcgZnJvbSAnc3JjL0NvbmZpZy9fTWFpbkNvbmZpZyc7XHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSAnLi9PYmplY3RQcm94eVQnO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+acrOWcsOaVsOaNruS7o+eQhu+8jOmAmui/h+atpOexu+WPr+S7peiuv+mXruacrOWcsOS/neWtmOeahOaVsOaNrlxyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VMb2NhbERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWvueavlOaVsOaNrlxyXG4gICAgICog6buY6K6k5Li6dHJ1Ze+8jOWmguaenOS4uuecn+W9k+S4uue6v+S4iuaooeW8j+aXtuS8mueUn+aIkOS4gOS4quWKoOWvhueahOWvueavlOaVsOaNru+8jOmYsuatoueUqOaIt+aUueWKqOacrOWcsOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmRGlmZmVyRGF0YTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog6I635Y+W5L+d5a2Y5ZCN56ewXHJcbiAgICAgKiDpu5jorqTov5Tlm57nsbvlkI3vvIzlj6/ku6Xph43lhplcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBfc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+m7mOiupOi/lOWbnuexu+WQjVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bkv53lrZjmlbDmja7nmoTlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IHNhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pobnnm67lkI3lrZcgKyDkv53lrZjlkI3lrZcgKyDpobnnm67niYjmnKxcclxuICAgICAgICByZXR1cm4gX01haW5Db25maWcuTmFtZSArICctJyArIHRoaXMuX3NhdmVOYW1lICsgJy0nICsgX01haW5Db25maWcuVmVyc2lvbnMgKyAoX01haW5Db25maWcuT25MaW5lID8gJ15vbicgOiAnXnRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5blr7nmr5TmlbDmja7nmoTkv53lrZjlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IGRpZmZlck5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHQodGhpcy5zYXZlTmFtZSArICdfX3ZlcmlmeScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICAvL+iusOW9leaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuX3JlYWREYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIbljIXoo4XmlbDmja5cclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bmlbDmja7ku6PnkIblt6XlhbdcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICAgICAgLy/mt7vliqDorr7nva7nm5HlkKxcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsIHRoaXMuX2RhdGFTZXRNb25pdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgICAgIC8v5Yik5pat5pe26Ze05beuXHJcbiAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgaWYgKF90aW1lID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WIneWni+WMluacrOWcsOaVsOaNruaXtumXtOi/h+mVvycsIHRoaXMuc2F2ZU5hbWUsIF90aW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblrozmiJDvvIznu6fmib/kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxuXHJcbiAgICAvKiog5pWw5o2u6KKr6K6+572u55uR5ZCsICovXHJcbiAgICBwcml2YXRlIF9kYXRhU2V0TW9uaXRvcigpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omL5Yqo5L+d5a2Y5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBIOm7mOiupOS4unRydWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNhdmUoX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhLCBfaWZDbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOS/neWtmOaJp+ihjOmYn+WIlyAqL1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tRdWV1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICAgKiBAcGFyYW0gbV9kYXRhIOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhdmUobV9kYXRhOiBEYXRhLCBfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICAvL+a3u+WKoOaXtumXtOWIpOaWrVxyXG4gICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpumZkOa1gVxyXG4gICAgICAgIGlmICghX2lmQ2wpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZShtX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZSsrO1xyXG4gICAgICAgICAgICAvL+mZkOa1ge+8jOavj+S4gOasoeWuj+S7u+WKoeWPquS/neWtmOS4gOasoeaVsOaNrlxyXG4gICAgICAgICAgICAvL+aKiuS/neWtmOS7u+WKoeazqOWGjOi/m+W+ruS7u+WKoeWIl+ihqO+8jOWwhuS8muWcqOacrOasoeaVsOaNruS/ruaUueeahOWuj+S7u+WKoeWujOaIkOWQjuW5tuWcqOS4i+asoeWuj+S7u+WKoeW8gOWni+WJjeiiq+WFqOmDqOaJp+ihjFxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUtLTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja7liY0nKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICBwcml2YXRlIF9zYXZlKG1fZGF0YT86IERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2uJyk7XHJcbiAgICAgICAgLy/luo/liJfljJZcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG1fZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuc2F2ZU5hbWUsIGpzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5blr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXJKc29uID0gdGhpcy5nZXREaWZmZXJEYXRhKGpzb24pO1xyXG4gICAgICAgICAgICAvL+S/neWtmOWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuZGlmZmVyTmFtZSwgX2RpZmZlckpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCkgLSB0aGlzLm1fc2F2ZVRvRGlza1RpbWU7XHJcbiAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gMDtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv5L+d5a2Y5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47mnKzlnLDojrflj5bmlbDmja5cclxuICAgIHByaXZhdGUgX3JlYWREYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v6K+75Y+W5pys5Zyw5pWw5o2uXHJcbiAgICAgICAgbGV0IHJlYWRTdHIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuc2F2ZU5hbWUpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/lr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuZGlmZmVyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpZmZlckRhdGEocmVhZFN0cikgIT0gX2RpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrmlrDnmoTlrp7kvotcclxuICAgICAgICBsZXQgX3NhdmVEYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3mlbDmja7mmK/lkKbooqvnr6HmlLlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVhZFN0cikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShyZWFkU3RyKTtcclxuICAgICAgICAgICAgICAgIC8v55So5pys5Zyw55qE5pWw5o2u5aGr5YWF5b2T5YmN5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gX3NhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NhdmVEYXRhW2tleV0gPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3NhdmVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5bm25L+d5a2Y5LiA5Liq5paw5pWw5o2uXHJcbiAgICBwcml2YXRlIF9zYXZlTmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICBsZXQgbV9kYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/kv53lrZjmlbDmja7vvIzkuI3pmZDmtYFcclxuICAgICAgICB0aGlzLnNhdmUobV9kYXRhIGFzIERhdGEsIGZhbHNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBtX2RhdGEgYXMgRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WkhOeQhuWvueavlOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBnZXREaWZmZXJEYXRhKF9zdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoIV9zdHJpbmcpIHJldHVybiAnJztcclxuICAgICAgICAvL+WKoOWvhlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHQoX3N0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDmja7ljZXlkJHliqDlr4ZcclxuICAgIHByaXZhdGUgZW5jcnlwdChfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX2VuY3J5cHRTdHI6IHN0cmluZyA9IGBMYXlhTWluaUdhbWUtJHt0aGlzLnNhdmVOYW1lfToke19zdHJpbmd9YDtcclxuICAgICAgICAvL+WIpOaWreiDveWQpuS9v+eUqG1kNVxyXG4gICAgICAgIGlmIChNZDUuaWZVc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1kNS5oYXNoU3RyKF9lbmNyeXB0U3RyKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5LiN55So5Lu75L2V5Yqg5a+GXHJcbiAgICAgICAgICAgIHJldHVybiAnbm9FbmNyeXB0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSBcIi4vQmFzZURhdGFQcm94eVwiO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNruS7o+eQhuWfuuexu1xyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaG9ydERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKiog5Li05pe25pWw5o2u6buY6K6k5LiN6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIZcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbmlbDmja7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruWkhOeQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7mqKHmnb/oo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfZGF0YSDmlbDmja7mqKHmnb9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZURhdGFUZW1wbGF0ZShfZGF0YTogeyBuZXcoKTogQmFzZURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlbDmja7mqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5kYXRhVGVtcGxhdGUgPSBfZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVHlwZVNjcmlwdCBNZDXliqDlr4ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1kNSB7XHJcbiAgICAvKiog6IO95ZCm5L2/55SoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVXNlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBPbmUgdGltZSBoYXNoaW5nIGZ1bmN0aW9uc1xyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZFN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hBc2NpaVN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRBc2NpaVN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuICAgIC8vIFByaXZhdGUgU3RhdGljIFZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGVJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmZXIzMklkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4T3V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8vIFBlcm1hbmVudCBpbnN0YW5jZSBpcyB0byB1c2UgZm9yIG9uZS1jYWxsIGhhc2hpbmdcclxuICAgIHByaXZhdGUgc3RhdGljIG9uZVBhc3NIYXNoZXIgPSBuZXcgTWQ1KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hleCh4OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGhjID0gTWQ1LmhleENoYXJzO1xyXG4gICAgICAgIGNvbnN0IGhvID0gTWQ1LmhleE91dDtcclxuICAgICAgICBsZXQgbjtcclxuICAgICAgICBsZXQgb2Zmc2V0O1xyXG4gICAgICAgIGxldCBqO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGkgKiA4O1xyXG4gICAgICAgICAgICBuID0geFtpXTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7IGogKz0gMikge1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMSArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMCArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoby5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbWQ1Y3ljbGUoeDogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5LCBrOiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXkpIHtcclxuICAgICAgICBsZXQgYSA9IHhbMF07XHJcbiAgICAgICAgbGV0IGIgPSB4WzFdO1xyXG4gICAgICAgIGxldCBjID0geFsyXTtcclxuICAgICAgICBsZXQgZCA9IHhbM107XHJcbiAgICAgICAgLy8gZmYoKVxyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMF0gLSA2ODA4NzY5MzYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1syXSArIDYwNjEwNTgxOSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1szXSAtIDEwNDQ1MjUzMzAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s1XSArIDEyMDAwODA0MjYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbNl0gLSAxNDczMjMxMzQxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbOF0gKyAxNzcwMDM1NDE2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbOV0gLSAxOTU4NDE0NDE3IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzExXSAtIDE5OTA0MDQxNjIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMTJdICsgMTgwNDYwMzY4MiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzE0XSAtIDE1MDIwMDIyOTAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTVdICsgMTIzNjUzNTMyOSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgLy8gZ2coKVxyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMV0gLSAxNjU3OTY1MTAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxMV0gKyA2NDM3MTc3MTMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMF0gLSAzNzM4OTczMDIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxMF0gKyAzODAxNjA4MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzE1XSAtIDY2MDQ3ODMzNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s5XSArIDU2ODQ0NjQzOCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzE0XSAtIDEwMTk4MDM2OTAgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s4XSArIDExNjM1MzE1MDEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMTNdIC0gMTQ0NDY4MTQ2NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1s3XSArIDE3MzUzMjg0NzMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMTJdIC0gMTkyNjYwNzczNCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaGgoKVxyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzVdIC0gMzc4NTU4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzhdIC0gMjAyMjU3NDQ2MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTFdICsgMTgzOTAzMDU2MiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTRdIC0gMzUzMDk1NTYgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMV0gLSAxNTMwOTkyMDYwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzRdICsgMTI3Mjg5MzM1MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbN10gLSAxNTU0OTc2MzIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzEwXSAtIDEwOTQ3MzA2NDAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMTNdICsgNjgxMjc5MTc0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzBdIC0gMzU4NTM3MjIyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1szXSAtIDcyMjUyMTk3OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbNl0gKyA3NjAyOTE4OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s5XSAtIDY0MDM2NDQ4NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1sxMl0gLSA0MjE4MTU4MzUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzE1XSArIDUzMDc0MjUyMCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMl0gLSA5OTUzMzg2NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaWkoKVxyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzBdIC0gMTk4NjMwODQ0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTRdIC0gMTQxNjM1NDkwNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbNV0gLSA1NzQzNDA1NSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMTJdICsgMTcwMDQ4NTU3MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1szXSAtIDE4OTQ5ODY2MDYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzEwXSAtIDEwNTE1MjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzFdIC0gMjA1NDkyMjc5OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbOF0gKyAxODczMzEzMzU5IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzE1XSAtIDMwNjExNzQ0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzEzXSArIDEzMDkxNTE2NDkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzRdIC0gMTQ1NTIzMDcwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzJdICsgNzE4Nzg3MjU5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s5XSAtIDM0MzQ4NTU1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcblxyXG4gICAgICAgIHhbMF0gPSBhICsgeFswXSB8IDA7XHJcbiAgICAgICAgeFsxXSA9IGIgKyB4WzFdIHwgMDtcclxuICAgICAgICB4WzJdID0gYyArIHhbMl0gfCAwO1xyXG4gICAgICAgIHhbM10gPSBkICsgeFszXSB8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEludDMyQXJyYXkgPSBuZXcgSW50MzJBcnJheSg0KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjogQXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNjgpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyODogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjMyOiBVaW50MzJBcnJheTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyLCAwLCA2OCk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYnVmZmVyLCAwLCAxNyk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLnNldChNZDUuc3RhdGVJZGVudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhciB0byBjb2RlIHBvaW50IHRvIHRvIGFycmF5IGNvbnZlcnNpb246XHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvY2hhckNvZGVBdFxyXG4gICAgLy8gI0V4YW1wbGUuM0FfRml4aW5nX2NoYXJDb2RlQXRfdG9faGFuZGxlX25vbi1CYXNpYy1NdWx0aWxpbmd1YWwtUGxhbmVfY2hhcmFjdGVyc19pZl90aGVpcl9wcmVzZW5jZV9lYXJsaWVyX2luX3RoZV9zdHJpbmdfaXNfdW5rbm93blxyXG4gICAgcHVibGljIGFwcGVuZFN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgY29kZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2KSArIDB4QzA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGUgJiAweDNGIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhEODAwIHx8IGNvZGUgPiAweERCRkYpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyKSArIDB4RTA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSAoKGNvZGUgLSAweEQ4MDApICogMHg0MDApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgLSAweERDMDApICsgMHgxMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMEZGRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaWNvZGUgc3RhbmRhcmQgc3VwcG9ydHMgY29kZSBwb2ludHMgdXAgdG8gVSsxMEZGRkYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDE4KSArIDB4RjA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPj0gNjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgICAgICBidWZMZW4gLT0gNjQ7XHJcbiAgICAgICAgICAgICAgICBidWYzMlswXSA9IGJ1ZjMyWzE2XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEFzY2lpU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKHN0ci5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gc3RyLmNoYXJDb2RlQXQoaisrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRCeXRlQXJyYXkoaW5wdXQ6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oaW5wdXQubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGlucHV0W2orK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlbGYuX3N0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBidWZmZXI6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgc2VsZi5fYnVmZmVyOCksXHJcbiAgICAgICAgICAgIGJ1Zmxlbjogc2VsZi5fYnVmZmVyTGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHNlbGYuX2RhdGFMZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXRlOiBbc1swXSwgc1sxXSwgc1syXSwgc1szXV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYnVmID0gc3RhdGUuYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHggPSBzdGF0ZS5zdGF0ZTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gc3RhdGUuYnVmbGVuO1xyXG4gICAgICAgIHNbMF0gPSB4WzBdO1xyXG4gICAgICAgIHNbMV0gPSB4WzFdO1xyXG4gICAgICAgIHNbMl0gPSB4WzJdO1xyXG4gICAgICAgIHNbM10gPSB4WzNdO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcjhbaV0gPSBidWYuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZChyYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGNvbnN0IGkgPSAoYnVmTGVuID4+IDIpICsgMTtcclxuICAgICAgICBsZXQgZGF0YUJpdHNMZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gYnVmTGVuO1xyXG5cclxuICAgICAgICBidWY4W2J1Zkxlbl0gPSAweDgwO1xyXG4gICAgICAgIGJ1ZjhbYnVmTGVuICsgMV0gPSBidWY4W2J1ZkxlbiArIDJdID0gYnVmOFtidWZMZW4gKyAzXSA9IDA7XHJcbiAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5LnN1YmFycmF5KGkpLCBpKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZkxlbiA+IDU1KSB7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBmaW5hbCBjb21wdXRhdGlvbiBiYXNlZCBvbiB0aGUgdGFpbCBhbmQgbGVuZ3RoXHJcbiAgICAgICAgLy8gQmV3YXJlIHRoYXQgdGhlIGZpbmFsIGxlbmd0aCBtYXkgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XHJcbiAgICAgICAgZGF0YUJpdHNMZW4gPSB0aGlzLl9kYXRhTGVuZ3RoICogODtcclxuICAgICAgICBpZiAoZGF0YUJpdHNMZW4gPD0gMHhGRkZGRkZGRikge1xyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBkYXRhQml0c0xlbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YUJpdHNMZW4udG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsbyA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcclxuICAgICAgICAgICAgY29uc3QgaGkgPSBwYXJzZUludChtYXRjaGVzWzFdLCAxNikgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGxvO1xyXG4gICAgICAgICAgICBidWYzMlsxNV0gPSBoaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhdyA/IHRoaXMuX3N0YXRlIDogTWQ1Ll9oZXgodGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ajgOafpU1kNeaYr+WQpuWPr+eUqFxyXG5pZiAoTWQ1Lmhhc2hTdHIoJ2hlbGxvJykgIT09ICc1ZDQxNDAyYWJjNGIyYTc2Yjk3MTlkOTExMDE3YzU5MicpIHtcclxuICAgIC8v6K6+572u5LiN6IO95L2/55SoXHJcbiAgICBNZDUuaWZVc2UgPSBmYWxzZTtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oJ01kNSBzZWxmIHRlc3QgZmFpbGVkLicpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDlr7nosaHku6PnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3h5VCB7XHJcbiAgICAvKiog55uR5ZCs5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbW9uaXRvckxpc3Q6IHtcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fICovXHJcbiAgICAgICAgX3RoaXM6IGFueSxcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVICovXHJcbiAgICAgICAgX2JhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIC8qKiDmupDlr7nosaEgKi9cclxuICAgICAgICBfb2JqPzogb2JqZWN0LFxyXG4gICAgICAgIC8qKiDplK7lgLwgKi9cclxuICAgICAgICBfa2V5Pzogc3RyaW5nLFxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnm5HlkKxcclxuICAgICAqIOebkeWQrOafkOS4quWvueixoeeahOafkOS4quWxnuaAp+aYr+WQpuWPkeeUn+abtOaUuVxyXG4gICAgICog5aaC5p6c5Y+v6YCJ5bGe5oCn6YO95LiN5aGr55qE6K+d5YiZ55uR5ZCs5YWo6YOo55uR5ZCs5pWw5o2u5bGe5oCn5pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVXHJcbiAgICAgKiBAcGFyYW0gX29iaiDnm67moIflr7nosaHvvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlhoXlrrnmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfa2V5IOmUruWQje+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTW9uaXRvcjxPIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgTz4oX3RoaXM6IGFueSwgX2JhY2s6IEZ1bmN0aW9uLCBfb2JqPzogTywgX2tleT86IEspIHtcclxuICAgICAgICAvL+a3u+WKoOWIsOebkeWQrOWIl+ihqFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgX3RoaXMsXHJcbiAgICAgICAgICAgIF9iYWNrLFxyXG4gICAgICAgICAgICBfb2JqLFxyXG4gICAgICAgICAgICBfa2V5OiBfa2V5IGFzIHN0cmluZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF90aGlzIOWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOWbnuiwg+aWueazlVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJNb25pdG9yKF90aGlzOiBhbnksIF9iYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QgPSB0aGlzLm1fbW9uaXRvckxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICAgICAgICAgaXRlbS5fdGhpcyA9PSBfdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Y+v6YCJ55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgX2JhY2sgPyBpdGVtLl9iYWNrID09IF9iYWNrIDogdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9vIOa6kOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHk8RGF0YSBleHRlbmRzIG9iamVjdD4oX286IERhdGEpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0UHJveHkoX28pIGFzIERhdGE7XHJcbiAgICB9XHJcbiAgICAvL+mFjeWQiOiuvue9ruS7o+eQhlxyXG4gICAgcHJpdmF0ZSBfc2V0UHJveHkoX28pOiBvYmplY3Qge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5pmu6YCa5YC857G75Z6L5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIF9vICE9IFwib2JqZWN0XCIgfHwgIV9vKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/lj6/ov63ku6Plr7nosaHlkozmlrnms5VcclxuICAgICAgICBpZiAoIV9vW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuICAgICAgICAgICAgLy/pgY3ljoblr7nosaHorr7nva7ku6PnkIZcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgICAgIF9vW19pXSA9IHRoaXMuX3NldFByb3h5KF9vW19pXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ov5Tlm57mnIDnu4jnmoTku6PnkIblr7nosaFcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoX28sIHtcclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiAgc2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+aYr+S4jeaYr+aVsOe7hOeahGxlbmd0aOWxnuaAp+iiq+S/ruaUuVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoQXJyYXkuaXNBcnJheSh0cmFwVGFyZ2V0KSAmJiBrZXkgPT0gJ2xlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WPjeWwhOaWueazlVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogZ2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoe+8iOmAmuW4uOaYr+S7o+eQhu+8iVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+N5bCE5pa55rOVXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKlxyXG4gICAgICog5Luj55CG5a+56LGh6KKr6K6+572u5pe255qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Luj55CG5a+56LGh6KKr6K6+572uJywgdHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGxldCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIC8v5omn6KGM55uR5ZCsXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy/lhYjliKTmlq3ku6PnkIbnm67moIdcclxuICAgICAgICAgICAgaWYgKGl0ZW0uX29iaiAmJiBpdGVtLl9vYmogIT0gcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fa2V5ICYmIGl0ZW0uX2tleSAhPSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICBpdGVtLl9iYWNrLmNhbGwoaXRlbS5fdGhpcywgLi4uX2FyZ3VtZW50cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJcclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoFxyXG4gKiAhIOWPquiDvea4uOaIj+WGheS9v+eUqO+8jOS4jeimgeWcqOW3peWFt+S4reS9v+eUqFxyXG4gKiAhIOWwvemHj+WPquWcqOmHjeWkjeWIm+W7uumdnuW4uOWkmuWvueixoeeahOWcsOaWueS9v+eUqO+8jOS4jeeEtuS8muW+l+S4jeWBv+WksVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBvb2wge1xyXG4gICAgLyoqIOWvueixoeaxoOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbExpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW08VCBleHRlbmRzIGFueT4oX3NpZ246IEVHYW1lUG9vbFNpZ24pOiBUIHtcclxuICAgICAgICAvL+WFiOWIsOacrOWcsOWvueixoeaxoOWIl+ihqOS4reafpeaJvlxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xMaXN0W19zaWduXSAmJiB0aGlzLnBvb2xMaXN0W19zaWduXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2xMaXN0W19zaWduXS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3NpZ24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjMpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjIpIGFzIGFueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtuWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIOWbnuaUtuagh+ivhlxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWbnuaUtuWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVJdGVtKF9zaWduOiBFR2FtZVBvb2xTaWduLCAuLi5faXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPqua3u+WKoOS4jeWMheWQq+eahOWFg+e0oFxyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dLmluY2x1ZGVzKF9vKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0ucHVzaChfbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYzKCk6IExheWEuVmVjdG9yMyB7XHJcbiAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMz4oRUdhbWVQb29sU2lnbi52Myk7XHJcbiAgICAgICAgX3YzLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYzXHJcbiAgICAgKiBAcGFyYW0gX3YzIOW+heWbnuaUtueahHYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYzKC4uLl92M3M6IExheWEuVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYzLCAuLi5fdjNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjIoKTogTGF5YS5WZWN0b3IyIHtcclxuICAgICAgICBsZXQgX3YyOiBMYXlhLlZlY3RvcjIgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IyPihFR2FtZVBvb2xTaWduLnYyKTtcclxuICAgICAgICBfdjIuc2V0VmFsdWUoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djJcclxuICAgICAqIEBwYXJhbSBfdjIg5b6F5Zue5pS255qEdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjIoLi4uX3YyczogTGF5YS5WZWN0b3IyW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjIsIC4uLl92MnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGg5qCH6K+GXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFR2FtZVBvb2xTaWduIHtcclxuICAgIC8qKiAz57u05ZCR6YePICovXHJcbiAgICB2MyxcclxuICAgIC8qKiAy57u05ZCR6YePICovXHJcbiAgICB2MixcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgICAgICAvL+aJp+ihjOWKoOi9veS5i+WJjeeahOeUn+WRveWRqOacn1xyXG4gICAgICAgIHRoaXMubG9hZEJlZm9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+W8gOWni+WKoOi9vea4uOaIj+WIneWni+WMlui1hOa6kCcpKTtcclxuICAgICAgICAvL+iOt+WPluWKoOi9vemhuVxyXG4gICAgICAgIGxldCBfcmVzTG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gdGhpcy5nZXRMb2FkSXRlbXMoKTtcclxuICAgICAgICAvL+W8guatpeWKoOi9veWKoOi9vemhuVxyXG4gICAgICAgIFJlc0xvYWRHcm91cC5sb2FkQXN5bmMoX3Jlc0xvYWRJdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQbGFuKGkpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMubG9hZEl0ZW1zQ29tLCB1bmRlZmluZWQsIGZhbHNlKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+a4uOaIj+WKoOi9veWujOaIkCcpKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb20oKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WKoOi9veS5i+WJjVxyXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Yid5aeL5YyW5LiA5Lqb5Lic6KW/XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQmVmb3JlKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldExvYWRJdGVtcygpOiBSZXNMb2FkSXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRQbGFuKF9pOiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZENvbSgpIHsgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWQjeWtl+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUtleVJlc05hbWUge1xyXG4gICAgLyoqIOagueebruW9lSAqL1xyXG4gICAgUm9vdFJlcyA9ICdyZXMnLFxyXG4gICAgLyoqIOmFjee9ruihqOebruW9lSAqL1xyXG4gICAgQ29uZmlnSnNvbiA9ICdDb25maWdKc29uJyxcclxuICAgIC8qKiDlrZfkvZPnm67lvZUgKi9cclxuICAgIEZvbnQgPSAnRm9udCcsXHJcbiAgICAvKiogRkdVSei1hOa6kOebruW9lSAqL1xyXG4gICAgRkdVSSA9ICdGR1VJJyxcclxuICAgIC8qKiDlhbPljaHphY3nva7ooajnm67lvZUgKi9cclxuICAgIFNjZW5lSnNvbiA9ICdTY2VuZUpzb24nLFxyXG4gICAgLyoqIOWFtuWug+ebruW9lSAqL1xyXG4gICAgT3RoZXIgPSAnT3RoZXInLFxyXG4gICAgLyoqIGljb27nm67lvZUgKi9cclxuICAgIGljb24gPSAnaWNvbicsXHJcbiAgICAvKiogaW1n55uu5b2VICovXHJcbiAgICBpbWcgPSAnaW1nJyxcclxuICAgIC8qKiDpn7PkuZDmlofku7bnm67lvZUgKi9cclxuICAgIG11c2ljID0gJ211c2ljJyxcclxuICAgIC8qKiDpn7PmlYjmlofku7bnm67lvZUgKi9cclxuICAgIHNvdW5kID0gJ3NvdW5kJyxcclxuICAgIC8qKiDnmq7ogqTmlofku7bnm67lvZUgKi9cclxuICAgIHNraW4gPSAnc2tpbicsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tICcuL0VLZXlSZXNOYW1lJztcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSAnLi9LZXlSZXNNYW5hZ2VyJztcclxuLyoqXHJcbiAqIOW/heimgeeahOa4uOaIj+i1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXNzZW50aWFsUmVzVXJscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbPljaHphY3nva7mlofku7ZcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTY2VuZUNvbmZpZ1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuU2NlbmVKc29uKSArIF9uYW1lICsgJy5qc29uJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqEpzb27mlofku7ZSVUxcclxuICAgICAqIEBwYXJhbSBfbmFtZSDphY3nva7ooajlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWdKc29uVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Db25maWdKc29uKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRkdVSeWMhVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWMheWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUlQYWNrVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5GR1VJKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2X5L2T5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5a2X5L2T5ZCN5a2X77yM5Yqg5ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9udFVSTChfbmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZvbnQpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miYDmnInpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgIHByaXZhdGUgc3RhdGljIF9BbGxTY2VuZVByZWZhYnNOYW1lczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8v6aKE5Yi25L2T5Zy65pmv57yT5a2YXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJlZmFic1NjZW5lQ2FjaGU6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIOmihOWItuS9k+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbkvZPlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJVUkwocHJlZmFiOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5YWI5Zyo57yT5a2Y5Lit5p+l5om+5Zy65pmv5ZCN5a2XXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6K+l6aKE5Yi25L2T5Zyo5ZOq5Liq5Zy65pmv5Lit6KKr5a+85Ye655qEXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXS5pbmRleE9mKCdAJyArIHByZWZhYiArICdAJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdID0gX2k7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoX2kpICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWcqOWcuuaZr+aJvuWIsOmihOWItuS9kycsIHByZWZhYiwgJ+WPr+iDveaYr+ayoeacieWvvOWHuuWcuuaZr+mihOWItuS9k+WIl+ihqOWvvOiHtOeahOOAgicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWcuuaZr+mihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9vIOWcuuaZr+mihOWItuS9k+mbhuWQiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFByZWZhYlNjZW5lTmFtZXMoX286IGFueSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldID0gX29bX2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcIi4uL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcblxyXG4vKipcclxuICog5YWz6ZSu6LWE5rqQ54K55YiX6KGo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlSZXNNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBLZXlSZXNNYW5hZ2VyO1xyXG5cclxuICAgIC8v5YWz6ZSu6LWE5rqQ5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fS2V5UmVzTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/ms6jlhozlhbPplK7otYTmupDnm67lvZVcclxuICAgICAgICB0aGlzLm1fS2V5UmVzTGlzdCA9IHtcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlJvb3RSZXNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuQ29uZmlnSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Db25maWdKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRkdVSV06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5GR1VJICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuU2NlbmVKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLlNjZW5lSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZvbnRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRm9udCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLk90aGVyXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nLFxyXG4gICAgICAgICAgICAvL+WFtuS7lui3r+W+hFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaWNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmljb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pbWddOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pbWcgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5tdXNpY106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLm11c2ljICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc291bmRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5zb3VuZCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNraW5dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5za2luICsgJy8nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tX0tleVJlc0xpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWtmOWcqOafkOS4quWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZLZXlSZXMoX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KS5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT0gX2tleTtcclxuICAgICAgICB9KSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFs+mUrueCuei1hOa6kOeahOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVzVVJMKF9rZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB5re75Yqg5YWz6ZSu6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7lgLxcclxuICAgICAqIEBwYXJhbSBfc3RyaW5nIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFJlc1VybChfa2V5OiBzdHJpbmcsIF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldID0gX3N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX3N0ciDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlZGl0S2V5UmVzTGlzdChfa2V5OiBzdHJpbmcsIF9zdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfcmVwbGFjZTogc3RyaW5nID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfcmVwbGFjZSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+S/ruaUuei1hOa6kOi3r+W+hOWksei0pe+8jOayoeaciScgKyBfa2V5ICsgJ+i/meS4quWFs+mUrui3r+W+hO+8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abv+aNouaJgOaciei1hOa6kOi3r+W+hOS4reeahOWFs+mUrueCuei3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXSA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXS5yZXBsYWNlKF9yZXBsYWNlLCBfc3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EJywgX3JlcGxhY2UsICfmm7/mjaLmiJAnLCBfc3RyKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZCB7XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6E5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCh1cmxzOiBhbnksIG1vZGVsOiBFUmVzTG9hZE1vZGVsLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5YaF5a656ZyA6KaB5Yqg6L29XHJcbiAgICAgICAgaWYgKCF1cmxzIHx8IChBcnJheS5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID09IDApKSB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yqg6L296LWE5rqQXHJcbiAgICAgICAgc3dpdGNoIChtb2RlbCkge1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDM6XHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZeaYrzNE55qE5o6l5Y+j77yM6YCC55So5LqOM0Tpobnnm65cclxuICAgICAgICAgICAgICAgIExheWEubG9hZGVyLmNyZWF0ZSh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMjpcclxuICAgICAgICAgICAgICAgIC8vbG9hZOaYrzJk55qE5o6l5Y+j77yM6YCC55So5LqOMmTpobnnm65cclxuICAgICAgICAgICAgICAgIExheWEubG9hZGVyLmxvYWQodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0QodXJsczogYW55LCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuTG9hZCh1cmxzLCBFUmVzTG9hZE1vZGVsLkQzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hCBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkMkQodXJsczogYW55LCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuTG9hZCh1cmxzLCBFUmVzTG9hZE1vZGVsLkQyLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQzRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkMkRBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkMkQodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botYTmupBcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbm9DbG9uZSDmmK/lkKbkuI3ojrflj5blhYvpmobnmoTotYTmupBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSZXMocmVzVXJsOiBzdHJpbmcsIG5vQ2xvbmU6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGdldFJlcyA9IExheWEubG9hZGVyLmdldFJlcyhyZXNVcmwpO1xyXG4gICAgICAgIGlmICghZ2V0UmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcihcIui1hOa6kOWwmuacquWKoOi9vVwiLCByZXNVcmwpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9DbG9uZSA/IGdldFJlcyA6IGdldFJlcy5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5oyH5a6a6LWE5rqQ5Zyw5Z2A57yT5a2Y44CCXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENsZWFyUmVzKHJlc1VybDogc3RyaW5nKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJSZXMocmVzVXJsKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veaooeW8j1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRVJlc0xvYWRNb2RlbCB7XHJcbiAgICAvKiogM0Qg6LWE5rqQICovXHJcbiAgICBEMyxcclxuICAgIC8qKiAyZCDotYTmupAgKi9cclxuICAgIEQyLFxyXG59IiwiaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuL1Jlc0xvYWRJdGVtXCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L2957uEXHJcbiAqIOi0n+i0o+WkmuS4qui1hOa6kOWKoOi9vemhueeahOe7n+S4gOWKoOi9vVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZEdyb3VwIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5L2c5Li65Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChpdGVtczogUmVzTG9hZEl0ZW1bXSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+ayoeacieWKoOi9vemhuVxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a1heaLt+i0ne+8jOmYsuatouaxoeafk+a6kOWIl+ihqFxyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAvL+W8guatpeWIl+ihqOmVv+W6plxyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgLy/kuIDmraXkuIDmraXmtojotLnlvILmraXliJfooahcclxuICAgICAgICBsZXQgX2Y6IEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uSXRlbTogUmVzTG9hZEl0ZW0gPSBpdGVtcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgb25JdGVtLmxvYWRBc3luYyhMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rmgLvov5vluqZcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9sZW5ndGggLSBpdGVtcy5sZW5ndGggLSAxKSArIGkpIC8gX2xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rljZXkuKrliqDovb3pobnliqDovb3lrozmiJDkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLmFyZ3MgPSBbb25JdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgX2YoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM6YCS5b2S5Yqg6L295pa55rOVXHJcbiAgICAgICAgX2YoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzeW5jKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoaXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MsIF9vbkl0ZW1Db20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlc0xvYWQsIHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCIuL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3poblcclxuICog6LSf6LSj5LiA57uE6LWE5rqQ5YiX6KGo55qE5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkSXRlbSB7XHJcbiAgICAvKiog5Yqg6L295qih5byPICovXHJcbiAgICBwcml2YXRlIG1fbG9hZE1vZGVsOiBFUmVzTG9hZE1vZGVsO1xyXG5cclxuICAgIC8qKiDliqDovb3lhbPplK7plK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IGFueTtcclxuXHJcbiAgICAvKiog5Yqg6L295a6M5oiQ5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fY29tQmFjazogTGF5YS5IYW5kbGVyO1xyXG5cclxuICAgIC8qKiDotYTmupDot6/lvoTliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9yZXM6IGFueTtcclxuXHJcbiAgICAvKiog6I635Y+W5YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3JlcyDotYTmupDliJfooahcclxuICAgICAqIEBwYXJhbSBfbW9kZSDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrumUruWAvFxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOaXtueahOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3JlczogYW55LCBfbW9kZTogRVJlc0xvYWRNb2RlbCwgX2tleT86IGFueSwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLm1fcmVzID0gX3JlcztcclxuICAgICAgICB0aGlzLm1fbG9hZE1vZGVsID0gX21vZGU7XHJcbiAgICAgICAgdGhpcy5tX2tleSA9IF9rZXk7XHJcbiAgICAgICAgdGhpcy5tX2NvbUJhY2sgPSBfY29tQmFjaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1fY29tQmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIW9uQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgdGhpcy5tX2NvbUJhY2ssIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tQmFjay5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3luYyhfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0dhbWVDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0dhbWVDb25maWdcIjtcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCJzcmMvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgRDJNYW5hZ2VyIGZyb20gXCIuL0QyL0QyTWFuYWdlclwiO1xyXG5pbXBvcnQgRDNNYW5hZ2VyIGZyb20gXCIuL0QzL0QzTWFuYWdlclwiO1xyXG5pbXBvcnQgX1RDb25maWcgZnJvbSBcIi4vX1RDb25maWdcIjtcclxuXHJcbi8qKiBcclxuICog5qGG5p625YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUTWFpbiB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ms6jlhaXmoYbmnrbkv6Hmga9cclxuICAgICAgICB3aW5kb3dbX1RDb25maWcuTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIC8qKiDmoYbmnrbphY3nva4gKi9cclxuICAgICAgICAgICAgLi4uX1RDb25maWcsXHJcbiAgICAgICAgICAgIC8qKiBsYXlh6YWN572uICovXHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IHsgLi4uR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog6aG555uu6YWN572uICovXHJcbiAgICAgICAgICAgIF9tYWluQ29uZmlnOiB7IC4uLl9NYWluQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDmuLjmiI/phY3nva4gKi9cclxuICAgICAgICAgICAgX2dhbWVDb25maWc6IHsgLi4uX0dhbWVDb25maWcgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE56eN5ZCE5qC355qE566h55CG5ZmoXHJcbiAgICAgICAgRDNNYW5hZ2VyLmluaXQoKTsvLzNE566h55CG5ZmoXHJcbiAgICAgICAgRDJNYW5hZ2VyLmluaXQoKTsvL3Vp566h55CG5ZmoXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Y2V5L6L5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YW5jZVQge1xyXG4gICAgLyoqIOWNleS+i+WxnuaAp+WQjSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VLZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5L6L57G76KOF6aWw5ZmoXHJcbiAgICAgKiAhIOiiq+ijhemlsOeahOexu+eahOaehOmAoOaWueazleS4jeiDveaXtnB1YmxpY+exu+Wei+eahFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOS4gOS4quebkeWQrOWxnuaAp1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCAnaW5zdGFuY2UnLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPkuo52M+WQkemHj+eahOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVjNVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+S4gOS4quWtl+espuS4suaehOW7unYz5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gc3RyIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlVmVjdG9yMyhzdHI6IHN0cmluZywgX291dFYzOiBMYXlhLlZlY3RvcjMpIHtcclxuICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdCgnLCcpO1xyXG4gICAgICAgIF9vdXRWMy5zZXRWYWx1ZShOdW1iZXIoc3Ryc1swXSksIE51bWJlcihzdHJzWzFdKSwgTnVtYmVyKHN0cnNbMl0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rlYz5ZCR6YeP6ZW/5bqmXHJcbiAgICAgKiBAcGFyYW0gX3YzIOebruagh+WQkemHj1xyXG4gICAgICogQHBhcmFtIF9sIOebruagh+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFYzTGVuZ3RoKF92MzogTGF5YS5WZWN0b3IzLCBfbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IExheWEuVmVjdG9yMy5zY2FsYXJMZW5ndGgoX3YzKTtcclxuICAgICAgICBpZiAoX2xlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBfYTogbnVtYmVyID0gX2wgLyBfbGVuZ3RoO1xyXG4gICAgICAgICAgICBfdjMueCA9IF92My54ICogX2E7XHJcbiAgICAgICAgICAgIF92My55ID0gX3YzLnkgKiBfYTtcclxuICAgICAgICAgICAgX3YzLnogPSBfdjMueiAqIF9hO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueaPkuWAvOenu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfbGVycCDmj5LlgLznp7vliqjmr5TkvotcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2luaXRpYWxMZW5ndGgg5Yid5aeL6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90TGVycE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9sZXJwOiBudW1iZXIsIF9vdXRWMzogTGF5YS5WZWN0b3IzLCBfaW5pdGlhbExlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfZGlzdGFuY2U6IG51bWJlciA9IExheWEuVmVjdG9yMy5kaXN0YW5jZShfcG9zLCBfdHJhZ2V0UG90KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuVmVjdG9yMy5sZXJwKF9wb3MsIF90cmFnZXRQb3QsIF9sZXJwLCBfb3V0VjMpO1xyXG4gICAgICAgIC8v6L+U5Zue6L+b5bqmXHJcbiAgICAgICAgcmV0dXJuIDEgLSAoX2Rpc3RhbmNlIC8gX2luaXRpYWxMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5Liq54K55YyA6YCf56e75Yqo5Yiw5Y+m5LiA5Liq54K5XHJcbiAgICAgKiBAcGFyYW0gX3BvcyDlvZPliY3ngrlcclxuICAgICAqIEBwYXJhbSBfdHJhZ2V0UG90IOebruagh+eCuVxyXG4gICAgICogQHBhcmFtIF9zcGVlZCDpgJ/luqZcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90Q29uc3RhbnRTcGVlZE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9zcGVlZDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghX291dFYzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W/hemhu+acieS4gOS4qui+k+WHuueahOWQkemHj++8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IF9pZkVuZDogYm9vbGVhbjtcclxuICAgICAgICBsZXQgX2RpZmZlclYzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMuc3VidHJhY3QoX3RyYWdldFBvdCwgX3BvcywgX2RpZmZlclYzKTtcclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF9kaWZmZXJWMyk7XHJcbiAgICAgICAgaWYgKF9kaXN0YW5jZSA+IF9zcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFYzTGVuZ3RoKF9kaWZmZXJWMywgX3NwZWVkKTtcclxuICAgICAgICAgICAgX2lmRW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX2lmRW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nm7jliqBcclxuICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9wb3MsIF9kaWZmZXJWMywgX291dFYzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfaWZFbmQ7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qGG5p626YWN572u5paH5Lu2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVENvbmZpZyB7XHJcbiAgICAvKiog5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5hbWU6IHN0cmluZyA9IFwiTGF5YU1pbmlHYW1lXCI7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFpITmFtZTogc3RyaW5nID0gXCJMYXlhQm945bCP5ri45oiPXCI7XHJcbiAgICAvKiog54mI5pysICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFZlcnNpb25zOiBzdHJpbmcgPSBcIjAuMC4wLjFcIjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lTWFpbiBmcm9tIFwiLi9HYW1lL0dhbWVNYWluXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFRNYWluIGZyb20gXCIuL19UL1RNYWluXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHRcdC8vXHJcblx0XHQvKiog5q2j5byP5byA5aeLICMyOGRmOTkgKi9cclxuXHRcdC8vXHJcblx0XHQvL+ahhuaetuWFpeWPo1xyXG5cdFx0bmV3IFRNYWluKCk7XHJcblx0XHQvL+a4uOaIj+WFpeWPo1xyXG5cdFx0bmV3IEdhbWVNYWluKCk7XHJcblx0fVxyXG59XHJcblxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpOyJdLCJzb3VyY2VSb290IjoiIn0=