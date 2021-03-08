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

/***/ "./src/Game/ConfigProxy/SceneNodeConfigProxy.ts":
/*!******************************************************!*\
  !*** ./src/Game/ConfigProxy/SceneNodeConfigProxy.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/BaseConfigProxy */ "./src/_T/Config/BaseConfigProxy.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_config/_SceneNodeConfig */ "./src/Game/_config/_SceneNodeConfig.ts");
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
 * 场景节点配置表代理
 */
let SceneNodeConfigProxy = class SceneNodeConfigProxy extends src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
    //
    initData() {
        this.m_dataList = _config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_2__._SceneNodeConfig.datas;
    }
};
SceneNodeConfigProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], SceneNodeConfigProxy);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneNodeConfigProxy);


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

/***/ "./src/Game/Debug/CustomDebug.ts":
/*!***************************************!*\
  !*** ./src/Game/Debug/CustomDebug.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Debug_BaseDebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Debug/BaseDebug */ "./src/_T/Debug/BaseDebug.ts");
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
 * 自定义调试对象
 */
let CustomDebug = class CustomDebug extends src_T_Debug_BaseDebug__WEBPACK_IMPORTED_MODULE_0__.default {
    //
    constructor() { super(); }
};
CustomDebug = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], CustomDebug);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDebug);


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
/* harmony import */ var _test_TestMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_test/TestMain */ "./src/Game/_test/TestMain.ts");






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
        //TODO 进入测试模块
        _test_TestMain__WEBPACK_IMPORTED_MODULE_5__.default.instance.start();
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

/***/ "./src/Game/UICon/_test/_TestMainUICon.ts":
/*!************************************************!*\
  !*** ./src/Game/UICon/_test/_TestMainUICon.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/_Test/FGUI_TestMain */ "./src/FGUI/_Test/FGUI_TestMain.ts");
/* harmony import */ var src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUICon */ "./src/_T/D2/FGUI/BaseUICon.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
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
 * 测试主页面控制器
 */
let _TestMainUICon = class _TestMainUICon extends src_T_D2_FGUI_BaseUICon__WEBPACK_IMPORTED_MODULE_1__.default {
    //
    constructor() {
        super();
        /** UI列表，可以显示很多个ui */
        this._UIs = {
            initEmptyScreen: {
                uiCreate: src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__.default,
            },
        };
    }
};
_TestMainUICon = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], _TestMainUICon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TestMainUICon);


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

/***/ "./src/Game/_test/DataTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/DataTest.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/TestDataProxy */ "./src/Game/Data/TestDataProxy.ts");
/* harmony import */ var _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Debug/CustomDebug */ "./src/Game/Debug/CustomDebug.ts");
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
 * 数据测试类
 */
let DataTest = class DataTest {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        console.log('数据测试', _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.data);
        //
        _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__.default.instance.addItem('proxyData', _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.data);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('数据设置回调');
        });
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('数组被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.data.array);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.data.object);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性 a 被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__.TestDataProxy.instance.data.object, 'a');
    }
};
DataTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], DataTest);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTest);


/***/ }),

/***/ "./src/Game/_test/LibraryTest.ts":
/*!***************************************!*\
  !*** ./src/Game/_test/LibraryTest.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
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
 * 类库测试
 */
let LibraryTest = class LibraryTest {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        //
        console.log('时间工具', dayjs('2020/2/20'));
        //这里只有本地访问才行，线上访问会跨域
        axios.get('http://baidu.com').then((data) => {
            console.log('请求工具请求百度网页', {
                string: data.data,
            });
        });
        //
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        console.log('_随机打乱数组', _.shuffle(a));
        console.log('_随机取值数组', _.sample(a, 2));
    }
};
LibraryTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], LibraryTest);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryTest);


/***/ }),

/***/ "./src/Game/_test/OtherTest.ts":
/*!*************************************!*\
  !*** ./src/Game/_test/OtherTest.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
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
 * 类库测试
 */
let OtherTest = class OtherTest {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        //
    }
};
OtherTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], OtherTest);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherTest);


/***/ }),

/***/ "./src/Game/_test/PackTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/PackTest.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
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
 * 类库测试
 */
let PackTest = class PackTest {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        console.log('打包测试21');
    }
};
PackTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], PackTest);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackTest);


/***/ }),

/***/ "./src/Game/_test/TestMain.ts":
/*!************************************!*\
  !*** ./src/Game/_test/TestMain.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigProxy/SceneNodeConfigProxy */ "./src/Game/ConfigProxy/SceneNodeConfigProxy.ts");
/* harmony import */ var _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Scene/SceneManager */ "./src/Game/Scene/SceneManager.ts");
/* harmony import */ var _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UICon/_test/_TestMainUICon */ "./src/Game/UICon/_test/_TestMainUICon.ts");
/* harmony import */ var _DataTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataTest */ "./src/Game/_test/DataTest.ts");
/* harmony import */ var _LibraryTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LibraryTest */ "./src/Game/_test/LibraryTest.ts");
/* harmony import */ var _OtherTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OtherTest */ "./src/Game/_test/OtherTest.ts");
/* harmony import */ var _PackTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PackTest */ "./src/Game/_test/PackTest.ts");
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
 * 测试主脚本
 */
let TestMain = class TestMain {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        //构建Scene场景下的debug节点
        _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_2__.default.instance.getScene('Scene')
            .getSceneNode('debug')
            .asyncBuild()
            .then((node) => {
            console.log('当前场景', node.scene);
            console.log('当前节点', node);
            //为该场景设置环境
            node.scene.setEnvironment();
            console.log('场景节点配置表内容');
            console.log(_ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__.default.instance.dataList);
        });
        //显示测试ui
        _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_3__.default.instance.Show();
        //数据
        _DataTest__WEBPACK_IMPORTED_MODULE_4__.default.instance.start();
        //类库测试
        _LibraryTest__WEBPACK_IMPORTED_MODULE_5__.default.instance.start();
        //打包测试
        _PackTest__WEBPACK_IMPORTED_MODULE_7__.default.instance.start();
        //其他测试
        _OtherTest__WEBPACK_IMPORTED_MODULE_6__.default.instance.start();
    }
};
TestMain = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__.default.DecorateInstance(),
    __metadata("design:paramtypes", [])
], TestMain);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestMain);


/***/ }),

/***/ "./src/_T/Config/BaseConfigProxy.ts":
/*!******************************************!*\
  !*** ./src/_T/Config/BaseConfigProxy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseConfigProxy),
/* harmony export */   "BaseConstProxy": () => (/* binding */ BaseConstProxy)
/* harmony export */ });
/**
 * 数据代理基类
 */
class _BaseConfigProxy {
    //初始化
    constructor() {
        this.initData();
    }
    /**
     * 初始化 使用时覆盖
     */
    initData() {
        //
    }
}
/**
 * Config数据代理基类
 */
class BaseConfigProxy extends _BaseConfigProxy {
    /** 配置数据列表 */
    get dataList() {
        return this.m_dataList;
    }
}
/**
 * Const数据代理基类
 */
class BaseConstProxy extends _BaseConfigProxy {
    /** 配置数据 */
    get data() {
        return this.m_data;
    }
}


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

/***/ "./src/_T/Debug/BaseDebug.ts":
/*!***********************************!*\
  !*** ./src/_T/Debug/BaseDebug.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseDebug)
/* harmony export */ });
/* harmony import */ var src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_GameConfig */ "./src/Config/_GameConfig.ts");
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");


/**
 * 根调试类，所有调试类必须由此继承
 */
class BaseDebug {
    constructor() {
        /** 是否初始化 */
        this._ifInit = false;
    }
    /**
     * 名字，用 Window[前缀 + _name] 访问
     * 可以继承更改这个属性
     */
    get _name() {
        return this.constructor.name;
    }
    /**
     * 添加一个调试对象
     * @param _key key
     * @param _item 该对象
     */
    addItem(_key, _item) {
        if (!src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__.default.ifDebug) {
            return;
        }
        if (!this._ifInit) {
            this._ifInit = true;
            BaseDebug.DebugObj[this._name] = this;
        }
        this[_key] = _item;
    }
}
/** 前缀 */
BaseDebug.Prefix = '$Debug';
/** 根调试对象 */
BaseDebug.DebugObj = {};
//判断是否开启了调试模式
if (src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__.default.ifDebug) {
    //注册全局调试对象
    window[BaseDebug.Prefix] = BaseDebug.DebugObj;
    //
    console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__.default.packWarn('开启调试模式，通过', BaseDebug.Prefix, '访问'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX0NvbnN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9Db25maWcvX01haW5Db25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUVuZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGF1c2UudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTZXQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU3RhcnQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RVSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvQ29uZmlnUHJveHkvU2NlbmVOb2RlQ29uZmlnUHJveHkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9NYWluRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9TZXREYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9TaWduRGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS9UZXN0RGF0YVByb3h5LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NldERhdGEudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9EYXRhL3R5cGUvU2hvcnREYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGF0YS90eXBlL1Rlc3REYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvRGVidWcvQ3VzdG9tRGVidWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL01haW4vR2FtZUluaXRMb2FkLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvVUlDb24vVUlDb25NYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvVUlDb24vX3Rlc3QvX1Rlc3RNYWluVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvbi50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19TY2VuZU5vZGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uZmlnLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX3Rlc3QvRGF0YVRlc3QudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvR2FtZS9fdGVzdC9MaWJyYXJ5VGVzdC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL190ZXN0L090aGVyVGVzdC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9HYW1lL190ZXN0L1BhY2tUZXN0LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0dhbWUvX3Rlc3QvVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25maWcvQ29uZmlnVC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVDb25zdC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9EMk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvRVVJTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlSb290TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL0QzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EMy9zY2VuZS9HbG9iYWxEM0Vudmlyb25tZW50LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0QzL3NjZW5lL1NjZW5lTm9kZS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvQmFzZURhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9EYXRhL0RhdGFULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvTWQ1LnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL0RlYnVnL0Jhc2VEZWJ1Zy50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9HYW1lVC9HYW1lUG9vbC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvRUtleVJlc05hbWUudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL1Jlc0xvYWQudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvUmVzL1Jlc0xvYWRHcm91cC50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvVE1haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvVHMvSW5zdGFuY2VULnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL19UL1V0aWxzL1YzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvX1QvX1RDb25maWcudHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDWSxNQUFNLFlBQVk7O0FBQzdCLGFBQWE7QUFDQyxpQkFBSSxHQUFHO0lBQ2pCLFVBQVU7SUFDVixvQkFBb0IsRUFBRSxLQUFLO0NBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0M7QUFFeEM7O0dBRUc7QUFDWSxNQUFNLFdBQVc7O0FBQzVCLGVBQWU7QUFDRCxzQkFBVSxHQUFZLENBQUMsQ0FBQyx1REFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNuRSxjQUFjO0FBQ0Esa0JBQU0sR0FBWSxDQUFDLENBQUMsdURBQWtCLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDL0QsY0FBYztBQUNBLG1CQUFPLEdBQVksQ0FBQyxDQUFDLHVEQUFrQixDQUFDLElBQUksSUFBSSxDQUFDO0FBQy9ELGtCQUFrQjtBQUNKLDZCQUFpQixHQUFZLENBQUMsQ0FBQyx1REFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQzs7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QUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFB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YyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsY0FBYztRQUNiLFlBQVk7UUFDWixtRUFBbUU7UUFDbkUsRUFBRTtRQUNGLG1CQUFtQjtRQUNuQixFQUFFO1FBQ0YsTUFBTTtRQUNOLElBQUksNkNBQUssRUFBRSxDQUFDO1FBQ1osTUFBTTtRQUNOLElBQUksbURBQVEsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRDtBQUVELE9BQU87QUFDUCxJQUFJLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDluLjph4/phY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9Db25zdENvbmZpZyB7XHJcbiAgICAvKiogZmd1aeebuOWFsyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJID0ge1xyXG4gICAgICAgIC8qKiDljIXlkI7nvIAgKi9cclxuICAgICAgICBwYWNrYWdlRmlsZUV4dGVuc2lvbjogJ2JpbicsXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCIuL19NYWluQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfR2FtZUNvbmZpZyB7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5ri45oiP5rWL6K+VICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmR2FtZVRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5rWL6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/osIPor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZEZWJ1ZzogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOS4gOS4quaWsOeql+WPo+iwg+ivlSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZk9wZW5XaW5kb3dEZWJ1ZzogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxufSIsIi8qKlxyXG4gKiDpobnnm67mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NYWluQ29uZmlnIHtcclxuICAgIC8qKiDmuLjmiI/miYDlsZ7lm6LpmJ8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVGVhbTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+WQjeWtl++8jOWwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5hbWU6IHN0cmluZyA9ICdMYXlhTWluaUdhbWUnO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBaSE5hbWU6IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/or7TmmI4gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRXhwbGFpbjogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI/vvIzor7TmmI7jgIInO1xyXG4gICAgLyoqIOaVsOaNrueJiOacrCDlj6/ku6XluKblrZfmr43kvYbmmK/lsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWZXJzaW9uczogc3RyaW5nID0gJzAuMC4wLjEnO1xyXG4gICAgLyoqIOaYr+WQpuS4iue6v+S4umZhbHNl5YiZ5piv5byA5Y+R546v5aKDICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9uTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29tbW9uQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUNvbSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXEzbmc5d1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUNvbSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDb20+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDb21cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3NoYWRlOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWRibWkxM1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ3VzdG9tc0xvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVFbmQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1sYXhkMTlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVFbmQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lRW5kPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lRW5kXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTG9hZGluZyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3NoYWRlOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTFvXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVMb2FkaW5nPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZU1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1zeXRhOWZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZU1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lUGF1c2UgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNWdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQYXVzZSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVQYXVzZT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBhdXNlXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lUGxheSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTFyXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGxheSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVQbGF5PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGxheVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVNldCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E0dVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVNldCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTZXQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVTZXRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTdGFydCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTF2XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU3RhcnQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU3RhcnQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVTdGFydFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fVUlCdXR0b246Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX1VJOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV90ZXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fZGF0YVRlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Rlc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbzlqczl4XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdE1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9VSUJ1dHRvbiA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fVUkgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Rlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3Rlc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9fdGVzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX2xvb2tWQWQ6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX2xvb2tWQWRUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fbG9va1ZBZDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaGFyZTpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hhcmVUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fc2hhcmU6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hvd1RvYXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fc2hvd1RvYXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXQxcHc5eVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0UGxhdGZvcm1cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fbG9va1ZBZCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fbG9va1ZBZFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX19sb29rVkFkID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3NoYXJlID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV9zaGFyZVRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNSkpO1xyXG5cdFx0dGhpcy5tX19zaGFyZSA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX19zaG93VG9hc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1oNjZlOXpcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0VUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9QR2FtZVNldCBmcm9tIFwiLi9GR1VJX1BHYW1lU2V0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGF1c2UgZnJvbSBcIi4vRkdVSV9QR2FtZVBhdXNlXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBsYXkgZnJvbSBcIi4vRkdVSV9QR2FtZVBsYXlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVTdGFydCBmcm9tIFwiLi9GR1VJX1BHYW1lU3RhcnRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0VUkgZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RVSVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUVuZCBmcm9tIFwiLi9GR1VJX1BHYW1lRW5kXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RNYWluXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lQ29tIGZyb20gXCIuL0ZHVUlfUEdhbWVDb21cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVNYWluXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0UGxhdGZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU2V0LlVSTCwgRkdVSV9QR2FtZVNldCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBhdXNlLlVSTCwgRkdVSV9QR2FtZVBhdXNlKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcuVVJMLCBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUxvYWRpbmcpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQbGF5LlVSTCwgRkdVSV9QR2FtZVBsYXkpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTdGFydC5VUkwsIEZHVUlfUEdhbWVTdGFydCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RVSS5VUkwsIEZHVUlfUEdhbWVUZXN0VUkpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVFbmQuVVJMLCBGR1VJX1BHYW1lRW5kKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdE1haW4uVVJMLCBGR1VJX1BHYW1lVGVzdE1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDb20uVVJMLCBGR1VJX1BHYW1lQ29tKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTWFpbi5VUkwsIEZHVUlfUEdhbWVNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFBsYXRmb3JtLlVSTCwgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfRW1wdHlTY3JlZW5VSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly83a3R6aWI4b3EzbmcwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX0VtcHR5U2NyZWVuVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX0VtcHR5U2NyZWVuVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRFbXB0eVNjcmVlblwiLCBcIkVtcHR5U2NyZWVuVUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcIi4vRkdVSV9FbXB0eVNjcmVlblVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RW1wdHlTY3JlZW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfRW1wdHlTY3JlZW5VSS5VUkwsIEZHVUlfRW1wdHlTY3JlZW5VSSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfaW5pdExvYWRVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBtX2xvYWRpbmdfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbG9nbzpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sYXlhOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sYXlhX3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZ2FtZV9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vbjNvZWRwcDZuaWhyMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9pbml0TG9hZFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9pbml0TG9hZFVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0TG9hZFwiLCBcImluaXRMb2FkVUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fbG9hZGluZ19wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sb2dvID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXh0X3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xheWEgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNSkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fdGV4dF92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xheWFfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9nYW1lX2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9pbml0TG9hZFVJIGZyb20gXCIuL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfaW5pdExvYWRVSS5VUkwsIEZHVUlfaW5pdExvYWRVSSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vaHh1NHpjOWRpb284MFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9UZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfVGVzdE1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIl9UZXN0XCIsIFwiVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1Rlc3RNYWluIGZyb20gXCIuL0ZHVUlfVGVzdE1haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UZXN0QmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1Rlc3RNYWluLlVSTCwgRkdVSV9UZXN0TWFpbik7XHJcblx0fVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcbiAgICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6IHN0cmluZyA9IFwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOiBzdHJpbmcgPSBcImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBCYXNlQ29uZmlnUHJveHkgZnJvbSBcInNyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuLi9fY29uZmlnL19TY2VuZU5vZGVDb25maWdcIjtcclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuemFjee9ruihqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlQ29uZmlnUHJveHkgZXh0ZW5kcyBCYXNlQ29uZmlnUHJveHk8X1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVOb2RlQ29uZmlnUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGFMaXN0ID0gX1NjZW5lTm9kZUNvbmZpZy5kYXRhcztcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgTWFpbkRhdGFQcm94eSB9IGZyb20gXCIuL01haW5EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4vU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBTaG9ydERhdGFQcm94eSBmcm9tIFwiLi9TaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTaWduRGF0YVByb3h5IH0gZnJvbSBcIi4vU2lnbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4vVGVzdERhdGFQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrueuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5omA5pyJ5pWw5o2uXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIE1haW5EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTZXREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaWduRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2hvcnREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IE1haW5EYXRhIGZyb20gXCIuL3R5cGUvTWFpbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShNYWluRGF0YSlcclxuZXhwb3J0IGNsYXNzIE1haW5EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8TWFpbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTWFpbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTZXREYXRhIGZyb20gXCIuL3R5cGUvU2V0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNldERhdGEpXHJcbmV4cG9ydCBjbGFzcyBTZXREYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2V0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTZXREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VTaG9ydERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2hvcnREYXRhIGZyb20gXCIuL3R5cGUvU2hvcnREYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2hvcnREYXRhKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGFQcm94eSBleHRlbmRzIEJhc2VTaG9ydERhdGFQcm94eTxTaG9ydERhdGE+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNob3J0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNpZ25EYXRhIGZyb20gXCIuL3R5cGUvU2lnbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaWduRGF0YSlcclxuZXhwb3J0IGNsYXNzIFNpZ25EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2lnbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2lnbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBUZXN0RGF0YSBmcm9tIFwiLi90eXBlL1Rlc3REYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoVGVzdERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUZXN0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFRlc3REYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3REYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXREYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOmfs+aViCAqL1xyXG4gICAgaWZPcGVuU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOiDjOaZr+mfs+S5kCAqL1xyXG4gICAgaWZPcGVuTXVzaWM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+mch+WKqCAqL1xyXG4gICAgaWZPcGVuVmlicmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHsgfSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3REYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyaW5nOiBzdHJpbmcgPSAnc3RyaW5nJztcclxuICAgIGJvb2xlYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgICBhOiBudW1iZXIsXHJcbiAgICAgICAgYjogc3RyaW5nLFxyXG4gICAgICAgIGM6IGJvb2xlYW5cclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgIGI6ICdiJyxcclxuICAgICAgICAgICAgYzogdHJ1ZSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IEJhc2VEZWJ1ZyBmcm9tIFwic3JjL19UL0RlYnVnL0Jhc2VEZWJ1Z1wiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDoh6rlrprkuYnosIPor5Xlr7nosaFcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURlYnVnIGV4dGVuZHMgQmFzZURlYnVnIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEN1c3RvbURlYnVnO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXIgZnJvbSBcIi4vVUlDb24vVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBUZXN0TWFpbiBmcm9tIFwiLi9fdGVzdC9UZXN0TWFpblwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW4ge1xyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v6I635Y+W5ri45oiP5Yid5aeL5YyW5Yqg6L295a6e5L6LXHJcbiAgICAgICAgbGV0IF9nYW1lSW5pdExvYWQ6IEdhbWVJbml0TG9hZCA9IG5ldyBHYW1lSW5pdExvYWQoKTtcclxuICAgICAgICAvL+W8gOWni+WKoOi9vVxyXG4gICAgICAgIF9nYW1lSW5pdExvYWQubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdExvYWRDb20oKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/liqDovb3lrozmiJBcclxuICAgIHByaXZhdGUgZ2FtZUluaXRMb2FkQ29tKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE5Liq566h55CG5ZmoXHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+WcuuaZr+euoeeQhuWZqFxyXG4gICAgICAgIFVJQ29uTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly91aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+aVsOaNrueuoeeQhuWZqFxyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLy9UT0RPIOi/m+WFpea1i+ivleaooeWdl1xyXG4gICAgICAgIFRlc3RNYWluLmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZUNvbW1vbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvR2FtZUNvbW1vbi9HYW1lQ29tbW9uQmluZGVyXCI7XHJcbmltcG9ydCBHYW1lTWFpbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvR2FtZU1haW4vR2FtZU1haW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlbkJpbmRlciBmcm9tIFwic3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlclwiO1xyXG5pbXBvcnQgSW5pdExvYWRCaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0luaXRMb2FkQmluZGVyXCI7XHJcbmltcG9ydCBfVGVzdEJpbmRlciBmcm9tIFwic3JjL0ZHVUkvX1Rlc3QvX1Rlc3RCaW5kZXJcIjtcclxuaW1wb3J0IENvbmZpZ1QsIHsgSUJhc2VDb25maWdDb250YWluZXIgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgeyBGR1VJUGFjayB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9GR1VJUGFja1wiO1xyXG5pbXBvcnQgQmFzZUluaXRMb2FkIGZyb20gXCJzcmMvX1QvTWFpbi9CYXNlSW5pdExvYWRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwic3JjL19UL1Jlcy9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCJzcmMvX1QvUmVzL0tleVJlc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRJdGVtXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdEVtcHR5U2NyZWVuVUlDb25cIjtcclxuaW1wb3J0IEluaXRMb2FkVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb25cIjtcclxuaW1wb3J0IHsgQnVpbGRDb25maWdUcyB9IGZyb20gXCIuLi9fY29uZmlnL0J1aWxkQ29uZmlnVHNcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuaW1wb3J0IHsgX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB9IGZyb20gXCIuLi9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lc1wiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WIneWni+WMluWKoOi9vVxyXG4gKiAhIOWPqui0n+i0o+a4uOaIj+WIneWni+WMluWSjOWKoOi9ve+8jOS4jeWBmuWFtuS7luS6i+aDhVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUluaXRMb2FkIGV4dGVuZHMgQmFzZUluaXRMb2FkIHtcclxuICAgIC8qKiDnmb3lsY91aeaOp+WItuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBtX2luaXRFbXB0eVNjcmVlblVJQ29uOiBJbml0RW1wdHlTY3JlZW5VSUNvbjtcclxuICAgIC8qKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBtX2luaXRMb2FkVUlDb246IEluaXRMb2FkVUlDb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbpnIDopoHnmoR1aeaOp+WItuWZqOWunuS+i1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG5ldyBJbml0RW1wdHlTY3JlZW5VSUNvbigpO1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbmV3IEluaXRMb2FkVUlDb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WKoOi9veS5i+WJjVxyXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Yid5aeL5YyW5LiA5Lqb5Lic6KW/XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQmVmb3JlKCkge1xyXG4gICAgICAgIC8v6K6+572u6Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxTY2VuZVByZWZhYnNOYW1lcykge1xyXG4gICAgICAgICAgICBLZXlSZXNNYW5hZ2VyLmFkZFJlc1VybChfaSwgS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuUm9vdFJlcykgKyBgJHtfaX0vYCk7Ly/ms6jlhaXpooTliLbkvZPot6/lvoRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7pooTliLbkvZPlnLrmma/lr7nnhadcclxuICAgICAgICBFc3NlbnRpYWxSZXNVcmxzLnNldFByZWZhYlNjZW5lTmFtZXMoX0VBbGxTY2VuZVByZWZhYnNOYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldExvYWRJdGVtcygpOiBSZXNMb2FkSXRlbVtdIHtcclxuICAgICAgICBsZXQgX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSA9IFtdO1xyXG4gICAgICAgIC8v5rOo5YWl5YiG5YyF5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdFN1YnBhY2thZ2VMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ojrflj5ZmZ3Vp5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9sb2FkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXliIbljIXliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRTdWJwYWNrYWdlTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWlZmd1aeeahOaJgOacieWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBpbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8v5YWI57uR5a6a5omA5pyJdWlcclxuICAgICAgICB0aGlzLkZHVUlCaW5kZXIoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRFbXB0eVNjcmVlbicsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRFbXB0eVNjcmVlbikpKTsvL+eZveWxj3Vp5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdExvYWQnLCAwLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdExvYWQpKSk7Ly/liqDovb3nlYzpnaLljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQmFnJykpOy8v5Y6f5YyF77yM6YCa5bi45Li66LWE5rqQ5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUNvbW1vbicpKTsvL+WFrOWFseWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ19UZXN0JykpOy8v5rWL6K+V5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZU1haW4nLCAwKSk7Ly/kuLvljIVcclxuICAgIH1cclxuICAgIC8vZmd1aee7keWumlxyXG4gICAgcHJpdmF0ZSBGR1VJQmluZGVyKCkge1xyXG4gICAgICAgIEluaXRFbXB0eVNjcmVlbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgSW5pdExvYWRCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVDb21tb25CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIF9UZXN0QmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lTWFpbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkZHVUnliqDovb3poblcclxuICAgIHByaXZhdGUgZ2V0RkdVSUxvYWRJdGVtcyhfbmFtZTogc3RyaW5nLCBfYXRsaWFzQ291bnQ/OiBudW1iZXIsIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKTogUmVzTG9hZEl0ZW0ge1xyXG4gICAgICAgIGxldCBfZmd1aVJlczogYW55W10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWMhei3r+W+hFxyXG4gICAgICAgIG5ldyBGR1VJUGFjayhFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSwgX2F0bGlhc0NvdW50KS5nZXRSZXNVUkwoX2ZndWlSZXMpO1xyXG4gICAgICAgIC8v5Yib5bu65Yqg6L296aG5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNMb2FkSXRlbShfZmd1aVJlcywgRVJlc0xvYWRNb2RlbC5EMiwgX25hbWUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOWMhVxyXG4gICAgICAgICAgICB0aGlzLmFkZEZHVUlQYWNrYWdlKF9uYW1lKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgLy/mt7vliqDljIVcclxuICAgIHB1YmxpYyBhZGRGR1VJUGFja2FnZShfbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8v6YWN572u6KGoXHJcbiAgICAgICAgbGV0IF9jb25maWdSZXM6IGFueVtdID0gQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTCgoaXRlbSBhcyBJQmFzZUNvbmZpZ0NvbnRhaW5lcikuZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Zy65pmvanNvbuaWh+S7tlxyXG4gICAgICAgIGxldCBzY2VuZUpzb25SZXM6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAnU2NlbmUnXHJcbiAgICAgICAgXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKFsuLi5fY29uZmlnUmVzLCAuLi5zY2VuZUpzb25SZXNdLCBFUmVzTG9hZE1vZGVsLkQyLCAnY29uZmlnJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo6YWN572u6KGo5YaF5a65XHJcbiAgICAgICAgICAgIENvbmZpZ1QuQnVpbGRDb25maWdzKEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZ0xpZ2h0KCfmiYDmnInphY3nva7ooajlhoXlrrktPicsIEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpKTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLy/nmb3lsY/mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdEVtcHR5U2NyZWVuKCkge1xyXG4gICAgICAgIC8v5pi+56S655m95bGPdWlcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG4gICAgLy/liqDovb3mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgICAgICAvL+aYvuekuuWKoOi9vXVpXHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkUGxhbihfaTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+a4uOaIj+WKoOi9vei/m+W6pi0+JywgX2kpO1xyXG4gICAgICAgIGlmICh0aGlzLm1faW5pdExvYWRVSUNvbiAmJiB0aGlzLm1faW5pdExvYWRVSUNvbi5pZlNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uc2V0UGxhbihfaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZENvbSgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgIH1cclxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwic3JjL19UL0QzL3NjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX0VBbGxFeHBvcnRTY2VuZU5hbWUgfSBmcm9tIFwiLi4vX3NjZW5lTmFtZS9fRUFsbEV4cG9ydFNjZW5lTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZr+euoeeQhuWZqFxyXG4gKiDnrqHnkIblnLrmma/vvIzojrflj5blnLrmma/vvIznhLblkI7pgJrov4flnLrmma/lrp7kvovmnoTlu7rlnLrmma/kuK3lr7nosaHnmoToioLngrlcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTY2VuZU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKiDlnLrmma/liJfooaggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUxpc3Q6IHtcclxuICAgICAgICBbaW5kZXg6IHN0cmluZ106IFNjZW5lLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5Zy65pmv5ZCN5a2X6I635Y+W5Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZShfbmFtZTogc3RyaW5nKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICBsZXQgX25hbWU6IHN0cmluZztcclxuICAgICAgICAvL+WIneWni+WMluWFqOmDqOWcuuaZr1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIF9uYW1lID0gX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXSA9IG5ldyBTY2VuZShfbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvL+agueaNruS4jeWQjOeahOWcuuaZr+WunuS+i+WMluS4jeWQjOeahOexu1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9uYW1lKSB7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uTWFuYWdlciBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlclwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXJQcm94eSBmcm9tIFwiLi9VSUNvbk1hbmFnZXJQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIHVp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyPFVJQ29uTWFuYWdlclByb3h5PiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBVSUNvbk1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIPvvIznu6fmib/kvb/nlKjvvIzkuLvopoHorr7nva51aeWIl+ihqOWSjOS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwic3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpblwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvblwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDmtYvor5XkuLvpobXpnaLmjqfliLblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UZXN0TWFpblVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IF9UZXN0TWFpblVJQ29uO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGluaXRFbXB0eVNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgdWlDcmVhdGU6IEZHVUlfVGVzdE1haW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiwgeyBJQmFzZVVJQ29uRGVmaW5lcyB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDnmb3lsY91aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEVtcHR5U2NyZWVuVUlDb24gZXh0ZW5kcyBCYXNlVUlDb24ge1xyXG4gICAgLyoqIFVJ5YiX6KGo77yM5Y+v5Lul5pi+56S65b6I5aSa5LiqdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSUJhc2VVSUNvbkRlZmluZXM7XHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBpbml0RW1wdHlTY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHVpQ3JlYXRlOiBGR1VJX0VtcHR5U2NyZWVuVUksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgRkdVSV9pbml0TG9hZFVJIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUlcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiwgeyBJQmFzZVVJQ29uRGVmaW5lcyB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRVSUNvbiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGluaXRFbXB0eVNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgdWlDcmVhdGU6IEZHVUlfaW5pdExvYWRVSSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgIC8v5pi+56S65Zue6LCDXHJcbiAgICBwcm90ZWN0ZWQgX09uU2hvdygpIHtcclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIGxldCBfdWk6IEZHVUlfaW5pdExvYWRVSSA9IHRoaXMuZ2V0VUk8RkdVSV9pbml0TG9hZFVJPignaW5pdEVtcHR5U2NyZWVuJyk7XHJcbiAgICAgICAgX3VpLm1fdGV4dF9sb2dvLnRleHQgPSBfTWFpbkNvbmZpZy5aSE5hbWU7XHJcbiAgICAgICAgX3VpLm1fdGV4dF92LnRleHQgPSBfTWFpbkNvbmZpZy5WZXJzaW9ucztcclxuICAgICAgICBfdWkubV90ZXh0X2dhbWVfZXhwbGFpbi50ZXh0ID0gX01haW5Db25maWcuRXhwbGFpbjtcclxuICAgICAgICBfdWkubV90ZXh0X2V4cGxhaW4udGV4dCA9IF9NYWluQ29uZmlnLlRlYW07XHJcbiAgICAgICAgX3VpLm1fdGV4dF9sYXlhX3YudGV4dCA9IExheWEudmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UGxhbihfaTogbnVtYmVyKSB7XHJcbiAgICAgICAgX2kgKj0gMTAwO1xyXG4gICAgICAgIGxldCBfdWk6IEZHVUlfaW5pdExvYWRVSSA9IHRoaXMuZ2V0VUk8RkdVSV9pbml0TG9hZFVJPignaW5pdEVtcHR5U2NyZWVuJyk7XHJcbiAgICAgICAgX3VpLm1fcHJvZ3Jlc3MudmFsdWUgPSBfaTtcclxuICAgICAgICBfdWkubV9sb2FkaW5nX3Byb2dyZXNzLnRleHQgPSBNYXRoLmZsb29yKF9pKSArICcgJSc7XHJcbiAgICB9XHJcbn0iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uZmlnIH0gZnJvbSBcIi4vX1Rlc3RDb25maWdcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4qIOaehOW7uuWFqOmDqOmFjee9ruihqFxyXG4qICEg6Ieq5Yqo5a+85Ye6XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZENvbmZpZ1RzIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ55qE6YWN572u6KGo5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcclxuICAgICAgICBsZXQgY29uZmlnczogYW55W10gPSBbXTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1NjZW5lTm9kZUNvbmZpZyk7XHJcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1Rlc3RDb25zdCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxyXG4vL1xyXG4vKipcclxuICogX1NjZW5lTm9kZUNvbmZpZyBjb25maWfphY3nva7mlofku7ZcclxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgX1NjZW5lTm9kZUNvbmZpZyB7XHJcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXHJcbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbmZpZyc7XHJcbiAgICAvKiog5pWw5o2u57G75Z6LICovXHJcbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xyXG4gICAgICAgLyoqIOWFs+WNoWlkW+W/heimgV0gKi9cclxuICAgICAgICBpZDogYW55O1xyXG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xyXG4gICAgICAgIHNjZW5lOiBzdHJpbmc7XHJcbiAgICAgICAvKiog6IqC54K55ZCN5a2X5YiX6KGoICovXHJcbiAgICAgICAgc2NlbmVOYW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXHJcbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10gPSBbXTtcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1NjZW5lTm9kZUNvbmZpZy5qc29uJztcclxufVxyXG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxyXG4vL1xyXG4vKipcclxuICogX1Rlc3RDb25maWcgY29uZmln6YWN572u5paH5Lu2XHJcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uZmlnIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcclxuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XHJcbiAgICAgICAvKiog5pWw5YC877yM5LiN566h5LuA5LmI5YC877yM6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXHJcbiAgICAgICAgbjogbnVtYmVyO1xyXG4gICAgICAgLyoqIOWtl+espuS4su+8jOS4jeeuoeaYr+S7gOS5iOWAvO+8jOacgOWQjumDveS8mui9rOaIkOWtl+espuS4siAqL1xyXG4gICAgICAgIHM6IHN0cmluZztcclxuICAgICAgIC8qKiDluIPlsJTlgLzvvIzkuI3nrqHku4DkuYjlgLzpg73kvJrovazluIPlsJTlgLwgKi9cclxuICAgICAgICBiOiBib29sZWFuO1xyXG4gICAgfVxyXG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xyXG4gICAgZXhwb3J0IHZhciBkYXRhczogX1Rlc3RDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbmZpZy5qc29uJztcclxufVxyXG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxyXG4vL1xyXG4vKipcclxuICogX1Rlc3RDb25zdCBjb25zdOmFjee9ruaWh+S7tlxyXG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbnN0IHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uc3QnO1xyXG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcclxuICAgICAgIC8qKiDmlbDlgLzmtYvor5UgKi9cclxuICAgICAgICBuOiBudW1iZXI7XHJcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMiAqL1xyXG4gICAgICAgIG4yOiBudW1iZXI7XHJcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMyAqL1xyXG4gICAgICAgIG4zOiBudW1iZXI7XHJcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VICovXHJcbiAgICAgICAgczogc3RyaW5nO1xyXG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTIgKi9cclxuICAgICAgICBzMjogc3RyaW5nO1xyXG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTMgKi9cclxuICAgICAgICBzMzogc3RyaW5nO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xyXG4gICAgICAgIGI6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMSAqL1xyXG4gICAgICAgIGIyOiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTIgKi9cclxuICAgICAgICBiMzogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cclxuICAgICAgICBiNDogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UzICovXHJcbiAgICAgICAgYjU6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNCAqL1xyXG4gICAgICAgIGI2OiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTUgKi9cclxuICAgICAgICBiNzogYm9vbGVhbjtcclxuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UgKi9cclxuICAgICAgICBvOiBhbnk7XHJcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMSAqL1xyXG4gICAgICAgIG8yOiBhbnk7XHJcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMiAqL1xyXG4gICAgICAgIG8zOiBhbnk7XHJcbiAgICB9XHJcbiAgICAvKiogY29uc3TmlbDmja7liJfooaggKi9cclxuICAgIGV4cG9ydCB2YXIgZGF0YTogX1Rlc3RDb25zdC5EYXRhVHlwZSA9IG51bGw7XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uc3QuanNvbic7XHJcbn1cclxuICAgICIsIi8qKlxyXG4gKiDmiYDmnInlnLrmma/lr7nlupTnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB7XHJcbiAgICBQcmVmYWIgPSAnQEN1YmVAQFNwaGVyZUAnLFxyXG5cclxufVxyXG4vLyIsIi8qKlxyXG4gKiDmiYDmnInlr7zlh7rlnLrmma/lkI3lrZdcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxFeHBvcnRTY2VuZU5hbWUge1xyXG4gICAgU2NlbmUgPSAnU2NlbmUnLFxyXG5cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuLi9EYXRhL1Rlc3REYXRhUHJveHlcIjtcclxuaW1wb3J0IEN1c3RvbURlYnVnIGZyb20gXCIuLi9EZWJ1Zy9DdXN0b21EZWJ1Z1wiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrua1i+ivleexu1xyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YVRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5rWL6K+VJywgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIEN1c3RvbURlYnVnLmluc3RhbmNlLmFkZEl0ZW0oJ3Byb3h5RGF0YScsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruiuvue9ruWbnuiwgycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDnu4Tooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuYXJyYXkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflr7nosaHlsZ7mgKfooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEub2JqZWN0KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCnIGEg6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCwgJ2EnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnlUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IExpYnJhcnlUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZygn5pe26Ze05bel5YW3JywgZGF5anMoJzIwMjAvMi8yMCcpKTtcclxuICAgICAgICAvL+i/memHjOWPquacieacrOWcsOiuv+mXruaJjeihjO+8jOe6v+S4iuiuv+mXruS8mui3qOWfn1xyXG4gICAgICAgIGF4aW9zLmdldDxzdHJpbmc+KCdodHRwOi8vYmFpZHUuY29tJykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5bel5YW36K+35rGC55m+5bqm572R6aG1Jywge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nOiBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IGEgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMF07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1/pmo/mnLrmiZPkubHmlbDnu4QnLCBfLnNodWZmbGUoYSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdf6ZqP5py65Y+W5YC85pWw57uEJywgXy5zYW1wbGUoYSwgMikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE90aGVyVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBQYWNrVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmiZPljIXmtYvor5UyMScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlQ29uZmlnUHJveHkgZnJvbSBcIi4uL0NvbmZpZ1Byb3h5L1NjZW5lTm9kZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4uL1NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgX1Rlc3RNYWluVUlDb24gZnJvbSBcIi4uL1VJQ29uL190ZXN0L19UZXN0TWFpblVJQ29uXCI7XHJcbmltcG9ydCBEYXRhVGVzdCBmcm9tIFwiLi9EYXRhVGVzdFwiO1xyXG5pbXBvcnQgTGlicmFyeVRlc3QgZnJvbSBcIi4vTGlicmFyeVRlc3RcIjtcclxuaW1wb3J0IE90aGVyVGVzdCBmcm9tIFwiLi9PdGhlclRlc3RcIjtcclxuaW1wb3J0IFBhY2tUZXN0IGZyb20gXCIuL1BhY2tUZXN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5Li76ISa5pysXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0TWFpbiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0TWFpbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v5p6E5bu6U2NlbmXlnLrmma/kuIvnmoRkZWJ1Z+iKgueCuVxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5nZXRTY2VuZSgnU2NlbmUnKVxyXG4gICAgICAgICAgICAuZ2V0U2NlbmVOb2RlKCdkZWJ1ZycpXHJcbiAgICAgICAgICAgIC5hc3luY0J1aWxkKClcclxuICAgICAgICAgICAgLnRoZW4oKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3lnLrmma8nLCBub2RlLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3oioLngrknLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIC8v5Li66K+l5Zy65pmv6K6+572u546v5aKDXHJcbiAgICAgICAgICAgICAgICBub2RlLnNjZW5lLnNldEVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Zy65pmv6IqC54K56YWN572u6KGo5YaF5a65Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhTY2VuZU5vZGVDb25maWdQcm94eS5pbnN0YW5jZS5kYXRhTGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8v5pi+56S65rWL6K+VdWlcclxuICAgICAgICBfVGVzdE1haW5VSUNvbi5pbnN0YW5jZS5TaG93KCk7XHJcbiAgICAgICAgLy/mlbDmja5cclxuICAgICAgICBEYXRhVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v57G75bqT5rWL6K+VXHJcbiAgICAgICAgTGlicmFyeVRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+aJk+WMhea1i+ivlVxyXG4gICAgICAgIFBhY2tUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/lhbbku5bmtYvor5VcclxuICAgICAgICBPdGhlclRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmNsYXNzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJYg5L2/55So5pe26KaG55uWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uZmln5pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29uZmlnUHJveHk8RGF0YT4gZXh0ZW5kcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8v6YWN572u5pWw5o2u5YiX6KGoXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhTGlzdDogRGF0YVtdO1xyXG5cclxuICAgIC8qKiDphY3nva7mlbDmja7liJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YUxpc3QoKTogRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uc3TmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uc3RQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLy/phY3nva7mlbDmja5cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElDb25maWdEYXRhIH0gZnJvbSBcIi4uL2NvbS9JQ29uZmlnRGF0YVwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwiLi4vUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6YWN572u6KGo5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWdUIHtcclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66YWN572u6KGo5YiX6KGoXHJcbiAgICAgKiDlj6rmnoTlu7rvvIzkuI3liqDovb1cclxuICAgICAqIEBwYXJhbSBfY29uZmlncyDphY3nva7ooajliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBCdWlsZENvbmZpZ3MoX2NvbmZpZ3M6IElCYXNlQ29uZmlnQ29udGFpbmVyW10pIHtcclxuICAgICAgICBsZXQgX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9jb25maWdzKSB7XHJcbiAgICAgICAgICAgIF91cmwgPSBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoX28uZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAvL+Whq+WFheaVsOaNrlxyXG4gICAgICAgICAgICBzd2l0Y2ggKF9vLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25maWdDb250YWluZXIpLmRhdGFzID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbnN0Q29udGFpbmVyKS5kYXRhID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqGpzb27mlbDmja5cclxuICAgICAqIO+8geazqOaEj++8jOiOt+WPluS6huivpei1hOa6kOivpei1hOa6kOWwseS8muiiq+WIoOmZpOaOiVxyXG4gICAgICogQHBhcmFtIF91cmwg6YWN572u6KGo6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnSnNvbkRhdGEoX3VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvL+iOt+WPlui1hOa6kFxyXG4gICAgICAgIGxldCBjb25maWdEYXRhOiBJQ29uZmlnRGF0YSA9IFJlc0xvYWQuR2V0UmVzKF91cmwsIHRydWUpO1xyXG4gICAgICAgIC8v5riF55CG6LWE5rqQ57yT5a2Y5Y+q5L2/55So5LiA5qyhXHJcbiAgICAgICAgUmVzTG9hZC5DbGVhclJlcyhfdXJsKTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWOi+e8qVxyXG4gICAgICAgIGlmIChjb25maWdEYXRhLnppcCkge1xyXG4gICAgICAgICAgICAvL+ino+WOi1xyXG4gICAgICAgICAgICBsZXQgX3RpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0RhdGEuZGF0YSA9IEpTT04ucGFyc2UocGFrby5pbmZsYXRlKGNvbmZpZ0RhdGEuZGF0YSwgeyB0bzogJ3N0cmluZycgfSkpO1xyXG4gICAgICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICAgICAgLy/liKTmlq3op6Pljovml7bpl7Tlt65cclxuICAgICAgICAgICAgaWYgKF90aW1lID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfphY3nva7ooajop6Pljovml7bpl7Tov4fplb/vvIzlj6/og73mmK/phY3nva7ooajmlofku7bov4flpKctPicsIF91cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBjb25maWdEYXRhLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbvphY3nva7ooajlrrnlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbmZpZyDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ0NvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja7liJfooaggKi9cclxuICAgIGRhdGFzOiBhbnlbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbnN0IOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhOiBhbnk7XHJcbn0iLCIvKipcclxuICog5omT5Y2w5Y+w5bi455So6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQ29uc3Qge1xyXG5cclxuICAgIC8qKiDlhazlhbHmoLflvI8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBwdWJsaWNTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaZrumAmua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjOUJBNEI0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOi9u+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nTGlnaHRTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNzc2ZDhhJywgJyNFQkVCRUInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6K2m5ZGK5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJuU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzVjNmUwNicsICcjZmZhOTMxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmUmeivr+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXJyb3JTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNlYzAxMDEnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaIkOWKn+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29tU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjYWRlNDk4Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX2NvbG9yIOWtl+S9k+minOiJslxyXG4gICAgICogQHBhcmFtIF9iZ0NvbG9yIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFN0eWxlKF9jb2xvcjogc3RyaW5nLCBfYmdDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7X2JnQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGArIHRoaXMucHVibGljU3R5bGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVDb25zdCBmcm9tIFwiLi9Db25zb2xlQ29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmiZPljbDlj7DmianlsZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFeCB7XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zdHlsZSDmoLflvI9cclxuICAgICAqIEBwYXJhbSBfcGFyIOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYWNrKF9zdHlsZTogc3RyaW5nLCBfcGFyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJWMlcycsIF9zdHlsZSwgJ2xvZycsIC4uLl9wYXJdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZyguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmui9u+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nTGlnaHQoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nTGlnaHRTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaIkOWKn+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrQ29tKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmNvbVN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6K2m5ZGK5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tXYXJuKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0Lndhcm5TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijhemUmeivr+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrRXJyb3IoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuZXJyb3JTdHlsZSwgYW55KTtcclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSS9GR1VJUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAyZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDJNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiogZmd1aeagueeuoeeQhuWZqCAqL1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uUHJveHkgZnJvbSBcIi4vQmFzZVVJQ29uUHJveHlcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5pbXBvcnQgRkd1aURhdGEgZnJvbSBcIi4vRkd1aURhdGFcIjtcclxuaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJUm9vdE1hbmFnZXJcIjtcclxuaW1wb3J0IEZHVUlUIGZyb20gXCIuL0ZHVUlUXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcbmltcG9ydCBSb290VUlDb24gZnJvbSBcIi4vUm9vdFVJQ29uXCI7XHJcblxyXG4vKipcclxuICogVUnmjqfliLblmajln7rnsbso55So5p2l5o6n5Yi2VUnnlYzpnaIpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb24gZXh0ZW5kcyBSb290VUlDb24ge1xyXG4gICAgLyoqIFVJ5YiX6KGo77yM5Y+v5Lul5pi+56S65b6I5aSa5LiqdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSUJhc2VVSUNvbkRlZmluZXM7XHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogc3ltYm9sID0gU3ltYm9sKCk7XHJcbiAgICAvKiog6I635Y+W5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzeW1ib2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHJpdmF0ZSBtX3Jvb3RVSTogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwdWJsaWMgZ2V0IHJvb3RVSSgpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcm9vdFVJO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKblnKjpmpDol4/ml7bmuIXnkIbmjol1ae+8jOm7mOiupOS4unRydWUgKi9cclxuICAgIHByb3RlY3RlZCBfaWZDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFVJ5bGC57qn57G75Z6L77yM5b+F6aG75Zyo5Yid5aeL5YyW5pe26K6+572uICovXHJcbiAgICBwcm90ZWN0ZWQgX2xheWVyOiBFVUlMYXllciA9IEVVSUxheWVyLlBhbmVsO1xyXG5cclxuICAgIC8qKiB1aeWxgue6pyAqL1xyXG4gICAgcHVibGljIGdldCBsYXllcigpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHByaXZhdGUgbV9pZlNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2hvdygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnku6PnkIbliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcm94eVVJTGlzdDogU2V0PEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPj4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuYWRkKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZGVsZXRlKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5TaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/ku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5PmnZ91aeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5kVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmVuZFByb3h5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7p1aVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVVSSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluagueiKgueCuXVpXHJcbiAgICAgICAgdGhpcy5tX3Jvb3RVSSA9IG5ldyBmZ3VpLkdDb21wb25lbnQoKTtcclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuZ2V0TGF5ZXJVSSh0aGlzLl9sYXllcikuYWRkQ2hpbGQodGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSB0aGlzLm1fcm9vdFVJLmFkZENoaWxkKHRoaXMuX1VJc1tfaV0udWlDcmVhdGUuY3JlYXRlSW5zdGFuY2UoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujHVp5ZCO5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aVxyXG4gICAgICogQHBhcmFtIF9uYW1lIHVp5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4oX25hbWU6IHN0cmluZyk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUlzW19uYW1lXS51aSBhcyBVSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdyguLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb25TaG93QmVmb3JlKC4uLnBhcik7XHJcbiAgICAgICAgbGV0IF9pZk5ldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSSB8fCB0aGlzLm1fcm9vdFVJLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgLy/liJvlu7p1aVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgICAgIF9pZk5ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5Yiw5b2T5YmN5bGC57qn6aG25bGC5pi+56S6XHJcbiAgICAgICAgRkdVSVQuc2V0VUlUb3BTaG93KHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIC8v5omL5Yqo5pu05paw5LiA5qyhXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgLy/nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25TaG93KF9pZk5ldywgLi4ucGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49cclxuICAgICAqIEBwYXJhbSBfaWZDbGVhciDmmK/lkKbmuIXnkIZcclxuICAgICAqIEBwYXJhbSBwYXIg5YW25LuW5Y+C5pWw77yM5Lya5Lyg5Yiw6ZqQ6JeP55qE5Zue6LCD5LitXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBIaWRlKF9pZkNsZWFyOiBib29sZWFuID0gdGhpcy5faWZDbGVhciwgLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb25IaWRlQmVmb3JlKHBhcik7XHJcbiAgICAgICAgaWYgKF9pZkNsZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VVSSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPlua2iOebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25IaWRlKF9pZkNsZWFyLCBwYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeiiq+a4heeQhuaXtueahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9kaXNwb3NlVUkoKSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqIOabtOaWsOWkp+WwjyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgIC8v5qC55o2u5a2QdWnmkLrluKbnmoTmlbDmja7pgILphY3lsY/luZXlpKflsI9cclxuICAgICAgICBsZXQgX2RhdGE6IEZHdWlEYXRhO1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBfZGF0YSA9IHRoaXMuX1VJc1tfaV0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFfZGF0YSB8fCAhX2RhdGEuaWZVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoLCBfaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoIC0gX2RhdGEubGVmdCAtIF9kYXRhLnJpZ2h0LCBfaGVpZ2h0IC0gX2RhdGEuYm90dG9tIC0gX2RhdGEudG9wKTtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWShfZGF0YS5sZWZ0LCBfZGF0YS50b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu3Vp5o6n5Yi25Zmo57G75Z6L5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlVUlDb25EZWZpbmVzIHtcclxuICAgIC8qKiB1aeWIm+W7uuWZqCAqL1xyXG4gICAgdWlDcmVhdGU6IElVSUNyZWF0ZTtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE/OiBGR3VpRGF0YTtcclxuICAgIC8qKiB1aSAqL1xyXG4gICAgdWk/OiBmZ3VpLkdDb21wb25lbnQ7XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIZ1aeaOp+WItuWZqFxyXG4gKiDlv4XpobvphY3lkIjku6PnkIblmajkvb/nlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXI8UHJveHkgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuICAgIC8qKiB1aeS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlQcm94eTogUHJveHk7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiDmoYbmnrbosIPnlKjvvIzkuI3og73nm7TmjqXosIPnlKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX19pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluS5i+WQjueahOajgOa1i1xyXG4gICAgcHJpdmF0ZSBfX2luaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyW566h55CG55qEdWnliJfooagnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3VpUHJveHkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJZ1aeS7o+eQhicpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS7o+eQhuWZqOS7o+eQhlxyXG4gICAgICAgICAgICB0aGlzLm1fdWlQcm94eS5zZXRQcm94eSh0aGlzLm1fdWlDb25MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1aSDmjqfliLblmajnrqHnkIblmajku6PnkIZcclxuICog6LSf6LSj5Luj55CGdWnmjqfliLblmajnrqHnkIblmajkuK3nmoTmjqfliLblmajvvIzpmLLmraLlvqrnjq/kvp3otZZcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDlvZPliY3mmL7npLrnmoR1aeaOp+WItuWZqOe0ouW8leWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fb25TaG93VUlDb246IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfdWlMaXN0IHVp5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eShfdWlMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubV91aUNvbkxpc3QgPSBfdWlMaXN0O1xyXG4gICAgICAgIHRoaXMubV9vblNob3dVSUNvbiA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2udWnplK7lgLzojrflj5bkuIDkuKp1aVxyXG4gICAgICogQHBhcmFtIF9rZXkgdWnplK7lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uPihfa2V5OiBzdHJpbmcpOiBVSUNvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aUNvbkxpc3RbX2tleV0gYXMgVUlDb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLp1aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOe0ouW8leaIluiAhee0ouW8leWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3VpQ29uTGlzdFtpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5TaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fb25TaG93VUlDb24ucHVzaCguLi5fdWlDb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Y676YeNXHJcbiAgICAgICAgdGhpcy5tX29uU2hvd1VJQ29uID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMubV9vblNob3dVSUNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePdWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajlrp7kvovmiJbliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXSAmJiB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9vblNob3dVSUNvbiA9IHRoaXMubV9vblNob3dVSUNvbi5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5pZlNob3c7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lvZPliY3mmL7npLrnmoTmiYDmnIl1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZUFsbFVJKCkge1xyXG4gICAgICAgIHRoaXMubV9vblNob3dVSUNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tX29uU2hvd1VJQ29uID0gW107XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVUnliIblsYIs5oyJ6aG65bqP5pi+56S6XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVUlMYXllciB7XHJcbiAgICAvKiog6IOM5pmv6aG16Z2iICovXHJcbiAgICBCZyA9ICdCZycsXHJcbiAgICAvKiog5Li755WM6Z2iICDmsLjov5zlrZjlnKggKi9cclxuICAgIE1haW4gPSBcIk1haW5cIixcclxuICAgIC8qKiDpnaLmnb8gIOWPr+S7peacieW+iOWkmiAqL1xyXG4gICAgUGFuZWwgPSBcIlBhbmVsXCIsXHJcbiAgICAvKiog5by556qXICovXHJcbiAgICBQb3B1cCA9IFwiUG9wdXBcIixcclxuICAgIC8qKiDpgZPlhbcgKi9cclxuICAgIFByb3AgPSAnUHJvcCcsXHJcbiAgICAvKiog5bCP6YOo5Lu2ICovXHJcbiAgICBUaXAgPSBcIlRpcFwiLFxyXG4gICAgLyoqIOaaguWBnCAqL1xyXG4gICAgUGF1c2UgPSAnUGF1c2UnLFxyXG4gICAgLyoqIOiuvue9riAqL1xyXG4gICAgU2V0ID0gJ1NldCcsXHJcbiAgICAvKiog5pyA6auYICovXHJcbiAgICBUb3AgPSAnVG9wJyxcclxuICAgIC8qKiDliqDovb3pobXpnaIgKi9cclxuICAgIExvYWRpbmcgPSAnTG9hZGluZycsXHJcbiAgICAvKiog5Y6f55SfICovXHJcbiAgICBOYXRpdmUgPSAnTmF0aXZlJyxcclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeWMheexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZHVUlQYWNrIHtcclxuICAgIC8vIOWMhei3r+W+hFxyXG4gICAgcHJpdmF0ZSBwYWNrUGF0aDogc3RyaW5nO1xyXG4gICAgLy8g5YW25LuW6LWE5rqQ5pWw6YePXHJcbiAgICBwcml2YXRlIGF0bGlhc0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ljIVcclxuICAgICAqIEBwYXJhbSBfcGFja1VybCDljIXlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfYXRsaWFzQ291bnQg5Zu+6ZuG5pWw6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9wYWNrVXJsOiBzdHJpbmcsIF9hdGxpYXNDb3VudDogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB0aGlzLnBhY2tQYXRoID0gX3BhY2tVcmw7XHJcbiAgICAgICAgdGhpcy5hdGxpYXNDb3VudCA9IF9hdGxpYXNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF91cmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzVVJMKF91cmxzKTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkMkRBc3luYyhfdXJscywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdXJscyDovpPlh7rmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlc1VSTCh1cmxzOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5Yqg5YWl5YyF5ZCNXHJcbiAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgJy4nICsgX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb24sIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9KTtcclxuICAgICAgICAvL+WKoOi9vee6ueeQhumbhlxyXG4gICAgICAgIGlmICh0aGlzLmF0bGlhc0NvdW50ID49IDApIHtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5hdGxpYXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczBfXCIgKyBpICsgXCIucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIEZHVUkg5qC5566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJUm9vdE1hbmFnZXIge1xyXG4gICAgLy9VSeWxgue6p3Vp5YiX6KGoXHJcbiAgICBwdWJsaWMgc3RhdGljIGxheWVyVUlMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogZmd1aS5HQ29tcG9uZW50IH07XHJcblxyXG4gICAgLy8g6I635Y+W5p+Q5LiA5bGCVUlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF5ZXJVSShsYXllclR5cGU6IEVVSUxheWVyKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyVUlMaXN0W2xheWVyVHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIOiuvue9ruWMheWQjeWQjue8gFxyXG4gICAgICAgIGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGZndWkuR1Jvb3QuaW5zdC5kaXNwbGF5T2JqZWN0KTtcclxuICAgICAgICAvL+a3u+WKoEZHVUnmoLnoioLngrnmjInpobrluo/mmL7npLpcclxuICAgICAgICB0aGlzLmxheWVyVUlMaXN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRVVJTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllclVJTGlzdFtFVUlMYXllcltfaV1dID0gZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKG5ldyBmZ3VpLkdDb21wb25lbnQoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBmZ3VpIOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVQge1xyXG4gICAgLyoqIHVp5bGC57qna2V5ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBVSUxheWVyS2V5OiBzeW1ib2wgPSBTeW1ib2woJ1VJTGF5ZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5bGC57qn77yM6Zmk5LqGZmd1aeagueeuoeeQhuWZqOWbnuiwg+eUqO+8jOWFtuS7lueahOWcsOaWueivt+S4jeimgeiwg+eUqFxyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEBwYXJhbSBfbGF5ZXIg5bGC57qnIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQsIF9sYXllcjogRVVJTGF5ZXIpIHtcclxuICAgICAgICBfdWlbdGhpcy5VSUxheWVyS2V5XSA9IF9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVp5bGC57qnXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHJldHVybnMgdWnlsYLnuqdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50KTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiBfdWlbdGhpcy5VSUxheWVyS2V5XSBhcyBFVUlMYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp6aG25bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlUb3BTaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlpKfnmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5tYXgoX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnlupXlsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSURvd25TaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlsI/nmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5taW4oX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgLSAxO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaguXVp5o6n5Yi25ZmoXHJcbiAqIOaJgOaciXVp5o6n5Yi25Zmo57G75Z6L57G75Z2H55Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSb290VUlDb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLpVSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNob3coLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmTmV3IOaYr+WQpuaWsOW7ulxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1VJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgSGlkZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZEZWxldGUg5piv5ZCm5Yig6ZmkXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxufSIsImltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAzZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiog5Yid5aeL5YyW5YWo5bGA546v5aKDICovXHJcbiAgICAgICAgR2xvYmFsRDNFbnZpcm9ubWVudC5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlhajlsYAzROeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRDNFbnZpcm9ubWVudCB7XHJcbiAgICAvKiogM2TlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fU2NlbmUzRDogTGF5YS5TY2VuZTNEO1xyXG4gICAgLyoqIOaRhOWDj+acuiAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9DYW1lcmE6IExheWEuQ2FtZXJhO1xyXG4gICAgLyoqIOeBr+WFiSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9MaWdodDogTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHJcbiAgICAvKiog6I635Y+WIDNk5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY2VuZTNEKCk6IExheWEuU2NlbmUzRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9TY2VuZTNEO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDmkYTlg4/mnLogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENhbWVyYSgpOiBMYXlhLkNhbWVyYSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9DYW1lcmE7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOeBr+WFiSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTGlnaHQoKTogTGF5YS5EaXJlY3Rpb25MaWdodCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9MaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMubV9TY2VuZTNELFxyXG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMubV9DYW1lcmEsXHJcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLm1fTGlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QpIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLm1fQ2FtZXJhID0gbmV3IExheWEuQ2FtZXJhO1xyXG4gICAgICAgIHRoaXMubV9MaWdodCA9IG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9DYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9MaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVBvb2wgZnJvbSBcInNyYy9fVC9HYW1lVC9HYW1lUG9vbFwiO1xyXG5pbXBvcnQgVjNVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL1YzVXRpbHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzQ29uZmlnLCBJUHJlZmFic0RpZmZlckNvbmZpZyB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog6IqC54K55bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlVCB7XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiKgueCueaVsOaNruWIneWni+WMluiKgueCuVxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX3RhcmdldCDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlKF9zcHI6IExheWEuU3ByaXRlM0QsIF90YXJnZXQ6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3NwciwgX3RhcmdldCk7XHJcbiAgICAgICAgLy/orr7nva7lkI3lrZdcclxuICAgICAgICBfc3ByLm5hbWUgPSBfdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInlj5jmjaLnm7jlhbPnmoTlsZ7mgKdcclxuICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS9jee9rlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOS9jee9rlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9ruaXi+i9rFxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOaXi+i9rFxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIsIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7nvKnmlL5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTnvKnmlL5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSwgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/op6blj5Hnm5HlkKxcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgLy/orr7nva7lt67lvIJcclxuICAgICAgICBsZXQgX3ByZWZhYkNvbmZpZzogSVByZWZhYnNDb25maWcgPSBfdGFyZ2V0IGFzIElQcmVmYWJzQ29uZmlnO1xyXG4gICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYk5hbWUgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIsIF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4queyvueBteWSjOa6kOeyvueBteeahOW3ruW8glxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX2RpZmZlciDlt67lvILmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0RGlmZmVyKF9zcHI6IExheWEuU3ByaXRlM0QsIF9kaWZmZXI6IElQcmVmYWJzRGlmZmVyQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iuvue9ruW3ruW8gicsIF9zcHIsIF9kaWZmZXIpO1xyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5Li05pe25ZCR6YePXHJcbiAgICAgICAgbGV0IF9jZW50cmVWMzogTGF5YS5WZWN0b3IzID0gR2FtZVBvb2wuZ2V0VjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9kaWZmIG9mIF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIuZ2V0Q2hpbGRBdChfZGlmZi5pbmRleCkgYXMgTGF5YS5TcHJpdGUzRCwgX2RpZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5pyJdHJhbnNmb3Jt5bGe5oCnXHJcbiAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24sIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5ldWxlciwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUsIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lm57mlLbkuLTml7blkJHph49cclxuICAgICAgICBHYW1lUG9vbC5yZWN5Y2xlVjMoX2NlbnRyZVYzKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElTY2VuZUNvbmZpZyB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi9TY2VuZU5vZGVcIjtcclxuaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZryDlrp7kvotcclxuICog5qC55o2u5oyH5a6a55qE5Zy65pmv6YWN572u6KGo5p6E5bu65Zy65pmvXHJcbiAqICog5Y+v5Lul57un5om/5q2k57G76Ieq5a6a5LmJ5Zy65pmvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgICAvKiog5Zy65pmv5ZCN5a2XICovXHJcbiAgICBwcm90ZWN0ZWQgX3NjZW5lTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKiDnjq/looMgKi9cclxuICAgIHByb3RlY3RlZCBtX2Vudmlyb25tZW50OiBJU2NlbmVFbnZpcm9ubWVudDtcclxuXHJcbiAgICAvKiog5Zy65pmv6YWN572u5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVDb25maWc6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJTm9kZUNvbmZpZyxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKiog5Zy65pmv6IqC54K55a6e5L6L57yT5a2YICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVOb2RlczogU2NlbmVOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvKiog5Zy65pmv5Lit5a2Y5Zyo55qEbm9kZeiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBtX29uU2NlbmVOb2RlczogU2V0PFNjZW5lTm9kZT4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLyoqIOiOt+WPlueOr+WigyAqL1xyXG4gICAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9lbnZpcm9ubWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv5b2T5YmN5a2Y5Zyo55qE6IqC54K55YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2NlbmVOb2RlcygpOiBTY2VuZU5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1fb25TY2VuZU5vZGVzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9zY2VuZU5hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfc2NlbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX3NjZW5lTmFtZSA9IF9zY2VuZU5hbWU7XHJcbiAgICAgICAgLy/moLnmja7lnLrmma/lkI3lrZfor7vlj5bphY3nva7ooajkv6Hmga9cclxuICAgICAgICBpZiAoIXRoaXMuX3NjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWIneWni+WMluWcuuaZr+eahOWQjeWtl++8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX2RhdGE6IElOb2RlQ29uZmlnW10gPSBDb25maWdULmdldENvbmZpZ0pzb25EYXRhKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwodGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29uZmlnLnJvb3QpO1xyXG4gICAgICAgIGlmIChfZGF0YSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluagueiKgueCueS4i+eahOiKgueCuVxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX2RhdGEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2NlbmVDb25maWdbX2RhdGFbX2ldLm5hbWVdID0gX2RhdGFbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfojrflj5blnLrmma/mlbDmja7lpLHotKUtPicsIHRoaXMuX3NjZW5lTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rueOr+Wig++8jOm7mOiupOS4uuWFqOWxgDNk546v5aKD77yM5Y+v5Lul6Ieq5a6a5LmJ546v5aKDXHJcbiAgICAgICAgdGhpcy5tX2Vudmlyb25tZW50ID0gR2xvYmFsRDNFbnZpcm9ubWVudC5FbnZpcm9ubWVudDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluiKgueCuemFjee9rlxyXG4gICAgICogQHBhcmFtIF9ub2RlTmFtZSDoioLngrnlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5vZGVDb25maWcoX25vZGVOYW1lOiBzdHJpbmcpOiBJTm9kZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUNvbmZpZ1tfbm9kZU5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Zy65pmv6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6IqC54K55ZCN5a2X77yM5Y+v5Lul5aSa5Liq5LiA6LW35p6E5bu6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZU5vZGUoX25hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogU2NlbmVOb2RlIHtcclxuICAgICAgICBsZXQgX25hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX25hbWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaChfbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goLi4uX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX25vZGVDb25maWc6IElOb2RlQ29uZmlnW10gPSBbXTtcclxuICAgICAgICBfbmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5wdXNoKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfmnInkuKrlnLrmma/oioLngrnmsqHmnInmib7liLAnLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoX25vZGVDb25maWcubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6I635Y+W5Zy65pmv6IqC54K55pe277yM5LiA5Liq6YWN572u5L+h5oGv6YO95rKh5om+5YiwJywgX25hbWVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lnKjnvJPlrZjkuK3mib5cclxuICAgICAgICBsZXQgX19ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZ1tdO1xyXG4gICAgICAgIGxldCBfYTtcclxuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyO1xyXG4gICAgICAgIGxldCBfaW5kZXg6IG51bWJlciA9IHRoaXMubV9zY2VuZU5vZGVzLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfX25vZGVDb25maWcgPSBpdGVtLm5vZGVDb25maWdzO1xyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcubGVuZ3RoICE9IF9fbm9kZUNvbmZpZy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgICAgIF9hID0ge307XHJcbiAgICAgICAgICAgIF9ub2RlQ29uZmlnLmZvckVhY2goKF9vKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9hW19vLm5hbWVdID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfYVtfby5uYW1lXSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hW19vLm5hbWVdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfX25vZGVDb25maWcuZm9yRWFjaCgoX19vKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9hW19fby5uYW1lXSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX19vLm5hbWVdID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hW19fby5uYW1lXS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX251bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIF9hKSB7XHJcbiAgICAgICAgICAgICAgICBfbnVtYmVyICs9IF9hW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX251bWJlciA9PSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZU5vZGVzW19pbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfc2NlbmVOb2RlOiBTY2VuZU5vZGUgPSBuZXcgU2NlbmVOb2RlKF9ub2RlQ29uZmlnLCB0aGlzKTtcclxuICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgIHRoaXMubV9zY2VuZU5vZGVzLnB1c2goX3NjZW5lTm9kZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3NjZW5lTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOW9k+WJjeiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5p6E5bu65pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkT25Ob2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmFkZChfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlvZPliY3oioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+WIoOmZpOaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZU9uTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5kZWxldGUoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u546v5aKDXHJcbiAgICAgKiDkvJrmoLnmja7lvZPliY3lnLrmma/kuK3njq/looPphY3nva7orr7nva7njq/looNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIGxldCBfc2NlbmVDb25maWc6IElTY2VuZUNvbmZpZyA9IHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDmkYTlg4/mnLpcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmNhbWVyYSkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5jYW1lcmEsIF9zY2VuZUNvbmZpZy5jYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWFqOWxgOeBr+WFiVxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcubGlnaHQpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQubGlnaHQsIF9zY2VuZUNvbmZpZy5saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5fc2V0RW52aXJvbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfbiwgX25vZGUpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRQcm9ncmVzcyhfbiwgX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS0tLS0g5Zue6LCD5Ye95pWwXHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqIOiuvue9rueOr+Wig+WQjuaJp+ihjOeahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zZXRFbnZpcm9ubWVudCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K55Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHsgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuVxyXG4gKiDnlKjmnaXmnoTlu7rlnLrmma/oioLngrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZSB7XHJcbiAgICAvKiog5omA5bGe5Zy65pmvICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmU6IFNjZW5lO1xyXG4gICAgLyoqIOaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmRGVsZXRlOiBib29sZWFuO1xyXG4gICAgLyoqIOiKgueCuemFjee9ruS/oeaBr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdO1xyXG4gICAgLyoqIOiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGU6IExheWEuTm9kZTtcclxuICAgIC8qKiDpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIOmihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyO1xyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmTG9hZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiog6I635Y+W5omA5bGe5Zy65pmvICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lKCk6IFNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluiKgueCuemFjee9ruS/oeaBryAqL1xyXG4gICAgcHVibGljIGdldCBub2RlQ29uZmlncygpOiBJTm9kZUNvbmZpZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGVDb25maWdzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHVibGljIGdldCBpZkRlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+iKgueCuSAqL1xyXG4gICAgcHVibGljIGdldCBub2RlKCk6IExheWEuTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ub2RlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzKCk6IElQcmVmYWJzR2F0aGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnM7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T5ZCN5a2X5YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnNOYW1lKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnNOYW1lcztcclxuICAgIH1cclxuICAgIC8qKiDmmK/lkKblnKjliqDovb0gKi9cclxuICAgIHB1YmxpYyBnZXQgaWZMb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZMb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5Zy65pmv6IqC54K55a6e5L6LXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWdzIOiKgueCuemFjee9ruS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zY2VuZSDmiYDlsZ7lnLrmma9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXSwgX3NjZW5lOiBTY2VuZSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lID0gX3NjZW5lO1xyXG4gICAgICAgIC8v6buY6K6k5Li65Yig6Zmk54q25oCBXHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MgPSBfbm9kZUNvbmZpZ3M7XHJcbiAgICAgICAgLy/mj5Dlj5bpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAgICB0aGlzLm1fcHJlZmFic05hbWVzID0gW107XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQcmVmYWJzTmFtZXModGhpcy5tX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZXNVUkw6IHN0cmluZ1tdID0gdGhpcy5tX3ByZWZhYnNOYW1lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQzREFzeW5jKF9wcmVmYWJOYW1lc1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAobikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyhuKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW25dO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXmnoTlu7pcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNCdWlsZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8U2NlbmVOb2RlPiB7XHJcbiAgICAgICAgdGhpcy5tX2lmTG9hZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNjZW5lTm9kZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3luY0xvYWQoX29uUHJvZ3Jlc3MpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lmTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WQkeWcuuaZr+S8oOWHuuWKoOi9vei/m+W6plxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5sb2FkUHJvZ3Jlc3MoX24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu6XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmFkZE9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG5ldyBMYXlhLk5vZGU7XHJcbiAgICAgICAgLy/mt7vliqDliLDmiYDlsZ7lnLrmma/njq/looPkuK1cclxuICAgICAgICB0aGlzLm1fc2NlbmUuZW52aXJvbm1lbnQuc2NlbmUuYWRkQ2hpbGQodGhpcy5tX25vZGUpO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0ge307XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICB0aGlzLm1fbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZE5vZGUoX3NwciwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICh0aGlzLm1faWZMb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+iKgueCuei/mOWcqOaehOW7uuWNtOivleWbvuWIoOmZpOOAgicpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5kZWxldGVPbk5vZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tX25vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8v5riF55CG5byV55SoXHJcbiAgICAgICAgdGhpcy5tX25vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTliLbkvZPlkI3lrZdcclxuICAgICAqIEBwYXJhbSBfcHJlZmFic05hbWVzIOi+k+WHuueahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzOiBzdHJpbmdbXSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuaYr+mihOWItuS9k1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZTogc3RyaW5nID0gKF9ub2RlQ29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lO1xyXG4gICAgICAgIGlmIChfcHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgICAgICBpZiAoIV9wcmVmYWJzTmFtZXMuaW5jbHVkZXMoX3ByZWZhYk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFic05hbWVzLnB1c2goX3ByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbov5jmnInlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmNoaWxkICYmIF9ub2RlQ29uZmlnLmNoaWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg54i26IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGROb2RlKF9ub2RlOiBMYXlhLk5vZGUsIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/kuI3mmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgX3NwciA9IFJlc0xvYWQuR2V0UmVzKEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKF9wcmVmYWJOYW1lKSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlZmFic1tfcHJlZmFiTmFtZV0gPSB0aGlzLm1fcHJlZmFic1tfcHJlZmFiTmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHRoaXMubV9wcmVmYWJzW19wcmVmYWJOYW1lXS5wdXNoKF9zcHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9ub2RlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWfuuexu+aVsOaNrlxyXG4gKiAhIOWPquiDveWHuueOsOaVsOaNruWxgumdoueahOS4nOilv1xyXG4gKiDmlbDnu4TvvIzlr7nosaHvvIzlgLwgKOaVsOWtl++8jOWtl+espuS4su+8jOW4g+WwlOWAvClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIlxyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+aVsOaNruS7o+eQhlxyXG4gKiDmiYDmnInlhbPkuo7ku6PnkIbmlbDmja7nmoTnsbvpg73ku47ov5nph4znu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiB7XHJcbiAgICAvKiog5pWw5o2u5qih5p2/ICovXHJcbiAgICBwcml2YXRlIGRhdGFUZW1wbGF0ZTogeyBuZXcoKTogRGF0YSB9O1xyXG5cclxuICAgIC8qKiDmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDmlbDmja7ku6PnkIblt6XlhbcgKi9cclxuICAgIHByb3RlY3RlZCBtX29iamVjdFByb3h5VDogT2JqZWN0UHJveHlUO1xyXG5cclxuICAgIC8qKiDpnIDopoHkv53lrZjnmoTmlbDmja4gKi9cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNldFByb3h5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTZXRQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaVsOaNruS7o+eQhuWZqFxyXG4gICAgICog6YCa6L+H6L+Z5Liq5pWw5o2u5Luj55CG5Zmo5Y+v5Lul5re75Yqg5Luj55CG5pWw5o2u77yM5ZKM5re75Yqg5pWw5o2u55uR5ZCs5Zue6LCDIFvphY3lkIggcm9vdERhdGEg5L2/55SoXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdFByb3h5VCgpOiBPYmplY3RQcm94eVQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fb2JqZWN0UHJveHlUO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrmlrDnmoTmlbDmja5cclxuICAgICAqIOeUqOS6jumHjeaehOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+WmguaenOayoeacieaVsOaNruaooeadv+eahOivnVxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLDmlbDmja7mqKHmnb/vvIHor7fkvb/nlKjmlbDmja7mqKHmnb/oo4XppbDlmajoo4XppbDor6XnsbsnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5kYXRhVGVtcGxhdGUoKSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0RGF0YSgpO1xyXG59IiwiaW1wb3J0IE1kNSBmcm9tICcuL01kNSc7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tICcuL0Jhc2VEYXRhUHJveHknO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSAnLi9CYXNlRGF0YSc7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tICdzcmMvQ29uZmlnL19NYWluQ29uZmlnJztcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tICcuL09iamVjdFByb3h5VCc7XHJcblxyXG4vKipcclxuICog5Z+657G75pys5Zyw5pWw5o2u5Luj55CG77yM6YCa6L+H5q2k57G75Y+v5Lul6K6/6Zeu5pys5Zyw5L+d5a2Y55qE5pWw5o2uXHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUxvY2FsRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a+55q+U5pWw5o2uXHJcbiAgICAgKiDpu5jorqTkuLp0cnVl77yM5aaC5p6c5Li655yf5b2T5Li657q/5LiK5qih5byP5pe25Lya55Sf5oiQ5LiA5Liq5Yqg5a+G55qE5a+55q+U5pWw5o2u77yM6Ziy5q2i55So5oi35pS55Yqo5pys5Zyw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaWZEaWZmZXJEYXRhOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDojrflj5bkv53lrZjlkI3np7BcclxuICAgICAqIOm7mOiupOi/lOWbnuexu+WQje+8jOWPr+S7pemHjeWGmVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9zYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6buY6K6k6L+U5Zue57G75ZCNXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS/neWtmOaVsOaNrueahOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+mhueebruWQjeWtlyArIOS/neWtmOWQjeWtlyArIOmhueebrueJiOacrFxyXG4gICAgICAgIHJldHVybiBfTWFpbkNvbmZpZy5OYW1lICsgJy0nICsgdGhpcy5fc2F2ZU5hbWUgKyAnLScgKyBfTWFpbkNvbmZpZy5WZXJzaW9ucyArIChfTWFpbkNvbmZpZy5PbkxpbmUgPyAnXm9uJyA6ICdedGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWvueavlOaVsOaNrueahOS/neWtmOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgZGlmZmVyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdCh0aGlzLnNhdmVOYW1lICsgJ19fdmVyaWZ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8v6K6w5b2V5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5fcmVhZERhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhuWMheijheaVsOaNrlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluaVsOaNruS7o+eQhuW3peWFt1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgICAgICAvL+a3u+WKoOiuvue9ruebkeWQrFxyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgdGhpcy5fZGF0YVNldE1vbml0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Yid5aeL5YyW5pys5Zyw5pWw5o2u5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWujOaIkO+8jOe7p+aJv+S9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKiDmlbDmja7ooqvorr7nva7nm5HlkKwgKi9cclxuICAgIHByaXZhdGUgX2RhdGFTZXRNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvliqjkv53lrZjmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYEg6buY6K6k5Li6dHJ1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2F2ZShfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEsIF9pZkNsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5L+d5a2Y5omn6KGM6Zif5YiXICovXHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1F1ZXVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgICAqIEBwYXJhbSBtX2RhdGEg5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2F2ZShtX2RhdGE6IERhdGEsIF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8v5re75Yqg5pe26Ze05Yik5patXHJcbiAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrVGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZmQ5rWBXHJcbiAgICAgICAgaWYgKCFfaWZDbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlKys7XHJcbiAgICAgICAgICAgIC8v6ZmQ5rWB77yM5q+P5LiA5qyh5a6P5Lu75Yqh5Y+q5L+d5a2Y5LiA5qyh5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5oqK5L+d5a2Y5Lu75Yqh5rOo5YaM6L+b5b6u5Lu75Yqh5YiX6KGo77yM5bCG5Lya5Zyo5pys5qyh5pWw5o2u5L+u5pS555qE5a6P5Lu75Yqh5a6M5oiQ5ZCO5bm25Zyo5LiL5qyh5a6P5Lu75Yqh5byA5aeL5YmN6KKr5YWo6YOo5omn6KGMXHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZS0tO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNruWJjScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrUXVldWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgIHByaXZhdGUgX3NhdmUobV9kYXRhPzogRGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja4nKTtcclxuICAgICAgICAvL+W6j+WIl+WMllxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkobV9kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5zYXZlTmFtZSwganNvbik7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlckpzb24gPSB0aGlzLmdldERpZmZlckRhdGEoanNvbik7XHJcbiAgICAgICAgICAgIC8v5L+d5a2Y5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5kaWZmZXJOYW1lLCBfZGlmZmVySnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKSAtIHRoaXMubV9zYXZlVG9EaXNrVGltZTtcclxuICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPSAwO1xyXG4gICAgICAgIC8v5Yik5pat5pe26Ze05beuXHJcbiAgICAgICAgaWYgKF90aW1lID4gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/kv53lrZjml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7juacrOWcsOiOt+WPluaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfcmVhZERhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgLy/or7vlj5bmnKzlnLDmlbDmja5cclxuICAgICAgICBsZXQgcmVhZFN0ciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5zYXZlTmFtZSk7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+WvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5kaWZmZXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlmZmVyRGF0YShyZWFkU3RyKSAhPSBfZGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluS4gOS4quaWsOeahOWunuS+i1xyXG4gICAgICAgIGxldCBfc2F2ZURhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaVsOaNruaYr+WQpuiiq+evoeaUuVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlYWRTdHIpO1xyXG4gICAgICAgICAgICAgICAgLy/nlKjmnKzlnLDnmoTmlbDmja7loavlhYXlvZPliY3mlbDmja5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBfc2F2ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2F2ZURhdGFba2V5XSA9IGpzb25EYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2F2ZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blubbkv53lrZjkuIDkuKrmlrDmlbDmja5cclxuICAgIHByaXZhdGUgX3NhdmVOZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIGxldCBtX2RhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+S/neWtmOaVsOaNru+8jOS4jemZkOa1gVxyXG4gICAgICAgIHRoaXMuc2F2ZShtX2RhdGEgYXMgRGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG1fZGF0YSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aSE55CG5a+55q+U5pWw5o2uXHJcbiAgICBwcml2YXRlIGdldERpZmZlckRhdGEoX3N0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuepulxyXG4gICAgICAgIGlmICghX3N0cmluZykgcmV0dXJuICcnO1xyXG4gICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdChfc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aVsOaNruWNleWQkeWKoOWvhlxyXG4gICAgcHJpdmF0ZSBlbmNyeXB0KF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfZW5jcnlwdFN0cjogc3RyaW5nID0gYExheWFNaW5pR2FtZS0ke3RoaXMuc2F2ZU5hbWV9OiR7X3N0cmluZ31gO1xyXG4gICAgICAgIC8v5Yik5pat6IO95ZCm5L2/55SobWQ1XHJcbiAgICAgICAgaWYgKE1kNS5pZlVzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWQ1Lmhhc2hTdHIoX2VuY3J5cHRTdHIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/kuI3nlKjku7vkvZXliqDlr4ZcclxuICAgICAgICAgICAgcmV0dXJuICdub0VuY3J5cHQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tIFwiLi9CYXNlRGF0YVByb3h5XCI7XHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2u5Luj55CG5Z+657G7XHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNob3J0RGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKiDkuLTml7bmlbDmja7pu5jorqTkuI3orr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluaVsOaNruWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5aSE55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVCB7XHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruaooeadv+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9kYXRhIOaVsOaNruaooeadv1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlRGF0YVRlbXBsYXRlKF9kYXRhOiB7IG5ldygpOiBCYXNlRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruaVsOaNruaooeadv1xyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLmRhdGFUZW1wbGF0ZSA9IF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBUeXBlU2NyaXB0IE1kNeWKoOWvhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWQ1IHtcclxuICAgIC8qKiDog73lkKbkvb/nlKggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZVc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIE9uZSB0aW1lIGhhc2hpbmcgZnVuY3Rpb25zXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaEFzY2lpU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZEFzY2lpU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG4gICAgLy8gUHJpdmF0ZSBTdGF0aWMgVmFyaWFibGVzXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0ZUlkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGJ1ZmZlcjMySWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4Q2hhcnMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhPdXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLy8gUGVybWFuZW50IGluc3RhbmNlIGlzIHRvIHVzZSBmb3Igb25lLWNhbGwgaGFzaGluZ1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25lUGFzc0hhc2hlciA9IG5ldyBNZDUoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaGV4KHg6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGMgPSBNZDUuaGV4Q2hhcnM7XHJcbiAgICAgICAgY29uc3QgaG8gPSBNZDUuaGV4T3V0O1xyXG4gICAgICAgIGxldCBuO1xyXG4gICAgICAgIGxldCBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGo7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gaSAqIDg7XHJcbiAgICAgICAgICAgIG4gPSB4W2ldO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgODsgaiArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAxICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAwICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9tZDVjeWNsZSh4OiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXksIGs6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSkge1xyXG4gICAgICAgIGxldCBhID0geFswXTtcclxuICAgICAgICBsZXQgYiA9IHhbMV07XHJcbiAgICAgICAgbGV0IGMgPSB4WzJdO1xyXG4gICAgICAgIGxldCBkID0geFszXTtcclxuICAgICAgICAvLyBmZigpXHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1swXSAtIDY4MDg3NjkzNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzFdIC0gMzg5NTY0NTg2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzJdICsgNjA2MTA1ODE5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzNdIC0gMTA0NDUyNTMzMCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s0XSAtIDE3NjQxODg5NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzVdICsgMTIwMDA4MDQyNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1s2XSAtIDE0NzMyMzEzNDEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbN10gLSA0NTcwNTk4MyB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s4XSArIDE3NzAwMzU0MTYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s5XSAtIDE5NTg0MTQ0MTcgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTBdIC0gNDIwNjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTFdIC0gMTk5MDQwNDE2MiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1sxMl0gKyAxODA0NjAzNjgyIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMTNdIC0gNDAzNDExMDEgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTRdIC0gMTUwMjAwMjI5MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxNV0gKyAxMjM2NTM1MzI5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICAvLyBnZygpXHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxXSAtIDE2NTc5NjUxMCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzZdIC0gMTA2OTUwMTYzMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzExXSArIDY0MzcxNzcxMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1swXSAtIDM3Mzg5NzMwMiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s1XSAtIDcwMTU1ODY5MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzEwXSArIDM4MDE2MDgzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTVdIC0gNjYwNDc4MzM1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzRdIC0gNDA1NTM3ODQ4IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzldICsgNTY4NDQ2NDM4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTRdIC0gMTAxOTgwMzY5MCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzNdIC0gMTg3MzYzOTYxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzhdICsgMTE2MzUzMTUwMSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxM10gLSAxNDQ0NjgxNDY3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMl0gLSA1MTQwMzc4NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzddICsgMTczNTMyODQ3MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1sxMl0gLSAxOTI2NjA3NzM0IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICAvLyBoaCgpXHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbNV0gLSAzNzg1NTggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbOF0gLSAyMDIyNTc0NDYzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxMV0gKyAxODM5MDMwNTYyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxNF0gLSAzNTMwOTU1NiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxXSAtIDE1MzA5OTIwNjAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbNF0gKyAxMjcyODkzMzUzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1s3XSAtIDE1NTQ5NzYzMiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTBdIC0gMTA5NDczMDY0MCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxM10gKyA2ODEyNzkxNzQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMF0gLSAzNTg1MzcyMjIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzNdIC0gNzIyNTIxOTc5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1s2XSArIDc2MDI5MTg5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzldIC0gNjQwMzY0NDg3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzEyXSAtIDQyMTgxNTgzNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTVdICsgNTMwNzQyNTIwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1syXSAtIDk5NTMzODY1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICAvLyBpaSgpXHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMF0gLSAxOTg2MzA4NDQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbN10gKyAxMTI2ODkxNDE1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxNF0gLSAxNDE2MzU0OTA1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s1XSAtIDU3NDM0MDU1IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1sxMl0gKyAxNzAwNDg1NTcxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzNdIC0gMTg5NDk4NjYwNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTBdIC0gMTA1MTUyMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMV0gLSAyMDU0OTIyNzk5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s4XSArIDE4NzMzMTMzNTkgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTVdIC0gMzA2MTE3NDQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzZdIC0gMTU2MDE5ODM4MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMTNdICsgMTMwOTE1MTY0OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbNF0gLSAxNDU1MjMwNzAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTFdIC0gMTEyMDIxMDM3OSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMl0gKyA3MTg3ODcyNTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzldIC0gMzQzNDg1NTUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuXHJcbiAgICAgICAgeFswXSA9IGEgKyB4WzBdIHwgMDtcclxuICAgICAgICB4WzFdID0gYiArIHhbMV0gfCAwO1xyXG4gICAgICAgIHhbMl0gPSBjICsgeFsyXSB8IDA7XHJcbiAgICAgICAgeFszXSA9IGQgKyB4WzNdIHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9idWZmZXJMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogSW50MzJBcnJheSA9IG5ldyBJbnQzMkFycmF5KDQpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyOiBBcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig2OCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI4OiBVaW50OEFycmF5O1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyMzI6IFVpbnQzMkFycmF5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjggPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIsIDAsIDY4KTtcclxuICAgICAgICB0aGlzLl9idWZmZXIzMiA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9idWZmZXIsIDAsIDE3KTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuc2V0KE1kNS5zdGF0ZUlkZW50aXR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFyIHRvIGNvZGUgcG9pbnQgdG8gdG8gYXJyYXkgY29udmVyc2lvbjpcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9jaGFyQ29kZUF0XHJcbiAgICAvLyAjRXhhbXBsZS4zQV9GaXhpbmdfY2hhckNvZGVBdF90b19oYW5kbGVfbm9uLUJhc2ljLU11bHRpbGluZ3VhbC1QbGFuZV9jaGFyYWN0ZXJzX2lmX3RoZWlyX3ByZXNlbmNlX2VhcmxpZXJfaW5fdGhlX3N0cmluZ19pc191bmtub3duXHJcbiAgICBwdWJsaWMgYXBwZW5kU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBjb2RlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYpICsgMHhDMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZSAmIDB4M0YgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweEQ4MDAgfHwgY29kZSA+IDB4REJGRikge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIpICsgMHhFMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9ICgoY29kZSAtIDB4RDgwMCkgKiAweDQwMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAtIDB4REMwMCkgKyAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDEwRkZGRikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5pY29kZSBzdGFuZGFyZCBzdXBwb3J0cyBjb2RlIHBvaW50cyB1cCB0byBVKzEwRkZGRicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTgpICsgMHhGMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA+PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgICAgIGJ1ZkxlbiAtPSA2NDtcclxuICAgICAgICAgICAgICAgIGJ1ZjMyWzBdID0gYnVmMzJbMTZdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQXNjaWlTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oc3RyLmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBzdHIuY2hhckNvZGVBdChqKyspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEJ5dGVBcnJheShpbnB1dDogVWludDhBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihpbnB1dC5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gaW5wdXRbaisrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBzID0gc2VsZi5fc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcjogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBzZWxmLl9idWZmZXI4KSxcclxuICAgICAgICAgICAgYnVmbGVuOiBzZWxmLl9idWZmZXJMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogc2VsZi5fZGF0YUxlbmd0aCxcclxuICAgICAgICAgICAgc3RhdGU6IFtzWzBdLCBzWzFdLCBzWzJdLCBzWzNdXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBidWYgPSBzdGF0ZS5idWZmZXI7XHJcbiAgICAgICAgY29uc3QgeCA9IHN0YXRlLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLl9zdGF0ZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBzdGF0ZS5idWZsZW47XHJcbiAgICAgICAgc1swXSA9IHhbMF07XHJcbiAgICAgICAgc1sxXSA9IHhbMV07XHJcbiAgICAgICAgc1syXSA9IHhbMl07XHJcbiAgICAgICAgc1szXSA9IHhbM107XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyOFtpXSA9IGJ1Zi5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5kKHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgY29uc3QgaSA9IChidWZMZW4gPj4gMikgKyAxO1xyXG4gICAgICAgIGxldCBkYXRhQml0c0xlbjtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSBidWZMZW47XHJcblxyXG4gICAgICAgIGJ1ZjhbYnVmTGVuXSA9IDB4ODA7XHJcbiAgICAgICAgYnVmOFtidWZMZW4gKyAxXSA9IGJ1ZjhbYnVmTGVuICsgMl0gPSBidWY4W2J1ZkxlbiArIDNdID0gMDtcclxuICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkuc3ViYXJyYXkoaSksIGkpO1xyXG5cclxuICAgICAgICBpZiAoYnVmTGVuID4gNTUpIHtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIGZpbmFsIGNvbXB1dGF0aW9uIGJhc2VkIG9uIHRoZSB0YWlsIGFuZCBsZW5ndGhcclxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1heSBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcclxuICAgICAgICBkYXRhQml0c0xlbiA9IHRoaXMuX2RhdGFMZW5ndGggKiA4O1xyXG4gICAgICAgIGlmIChkYXRhQml0c0xlbiA8PSAweEZGRkZGRkZGKSB7XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGRhdGFCaXRzTGVuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhQml0c0xlbi50b1N0cmluZygxNikubWF0Y2goLyguKj8pKC57MCw4fSkkLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTYpO1xyXG4gICAgICAgICAgICBjb25zdCBoaSA9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDE2KSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gbG87XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE1XSA9IGhpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmF3ID8gdGhpcy5fc3RhdGUgOiBNZDUuX2hleCh0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5qOA5p+lTWQ15piv5ZCm5Y+v55SoXHJcbmlmIChNZDUuaGFzaFN0cignaGVsbG8nKSAhPT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xyXG4gICAgLy/orr7nva7kuI3og73kvb/nlKhcclxuICAgIE1kNS5pZlVzZSA9IGZhbHNlO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybignTWQ1IHNlbGYgdGVzdCBmYWlsZWQuJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIOWvueixoeS7o+eQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJveHlUIHtcclxuICAgIC8qKiDnm5HlkKzliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9tb25pdG9yTGlzdDoge1xyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzln58gKi9cclxuICAgICAgICBfdGhpczogYW55LFxyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5UgKi9cclxuICAgICAgICBfYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgLyoqIOa6kOWvueixoSAqL1xyXG4gICAgICAgIF9vYmo/OiBvYmplY3QsXHJcbiAgICAgICAgLyoqIOmUruWAvCAqL1xyXG4gICAgICAgIF9rZXk/OiBzdHJpbmcsXHJcbiAgICB9W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOebkeWQrFxyXG4gICAgICog55uR5ZCs5p+Q5Liq5a+56LGh55qE5p+Q5Liq5bGe5oCn5piv5ZCm5Y+R55Sf5pu05pS5XHJcbiAgICAgKiDlpoLmnpzlj6/pgInlsZ7mgKfpg73kuI3loavnmoTor53liJnnm5HlkKzlhajpg6jnm5HlkKzmlbDmja7lsZ7mgKfmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfdGhpcyDnm5HlkKzop6blj5Hlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5VcclxuICAgICAqIEBwYXJhbSBfb2JqIOebruagh+Wvueixoe+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWGheWuueabtOaUuVxyXG4gICAgICogQHBhcmFtIF9rZXkg6ZSu5ZCN77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRNb25pdG9yPE8gZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBPPihfdGhpczogYW55LCBfYmFjazogRnVuY3Rpb24sIF9vYmo/OiBPLCBfa2V5PzogSykge1xyXG4gICAgICAgIC8v5re75Yqg5Yiw55uR5ZCs5YiX6KGoXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBfdGhpcyxcclxuICAgICAgICAgICAgX2JhY2ssXHJcbiAgICAgICAgICAgIF9vYmosXHJcbiAgICAgICAgICAgIF9rZXk6IF9rZXkgYXMgc3RyaW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhck1vbml0b3IoX3RoaXM6IGFueSwgX2JhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdCA9IHRoaXMubV9tb25pdG9yTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEoXHJcbiAgICAgICAgICAgICAgICBpdGVtLl90aGlzID09IF90aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj6/pgInnmoTlm57osINcclxuICAgICAgICAgICAgICAgICAgICAmJiBfYmFjayA/IGl0ZW0uX2JhY2sgPT0gX2JhY2sgOiB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX28g5rqQ5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eTxEYXRhIGV4dGVuZHMgb2JqZWN0PihfbzogRGF0YSk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRQcm94eShfbykgYXMgRGF0YTtcclxuICAgIH1cclxuICAgIC8v6YWN5ZCI6K6+572u5Luj55CGXHJcbiAgICBwcml2YXRlIF9zZXRQcm94eShfbyk6IG9iamVjdCB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mma7pgJrlgLznsbvlnovlkozmlrnms5VcclxuICAgICAgICBpZiAodHlwZW9mIF9vID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgX28gIT0gXCJvYmplY3RcIiB8fCAhX28pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9vO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+WPr+i/reS7o+WvueixoeWSjOaWueazlVxyXG4gICAgICAgIGlmICghX29bU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4gICAgICAgICAgICAvL+mBjeWOhuWvueixoeiuvue9ruS7o+eQhlxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICAgICAgX29bX2ldID0gdGhpcy5fc2V0UHJveHkoX29bX2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i/lOWbnuacgOe7iOeahOS7o+eQhuWvueixoVxyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShfbywge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqICBzZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5piv5LiN5piv5pWw57uE55qEbGVuZ3Ro5bGe5oCn6KKr5L+u5pS5XHJcbiAgICAgICAgICAgICAgICBpZiAoIShBcnJheS5pc0FycmF5KHRyYXBUYXJnZXQpICYmIGtleSA9PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5Y+N5bCE5pa55rOVXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiBnZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIgcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGh77yI6YCa5bi45piv5Luj55CG77yJXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/lj43lsITmlrnms5VcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqXHJcbiAgICAgKiDku6PnkIblr7nosaHooqvorr7nva7ml7bnmoTlm57osINcclxuICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfku6PnkIblr7nosaHooqvorr7nva4nLCB0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgbGV0IF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgLy/miafooYznm5HlkKxcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFiOWIpOaWreS7o+eQhuebruagh1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5fb2JqICYmIGl0ZW0uX29iaiAhPSByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9rZXkgJiYgaXRlbS5fa2V5ICE9IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgIGl0ZW0uX2JhY2suY2FsbChpdGVtLl90aGlzLCAuLi5fYXJndW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOagueiwg+ivleexu++8jOaJgOacieiwg+ivleexu+W/hemhu+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURlYnVnIHtcclxuICAgIC8qKiDliY3nvIAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUHJlZml4OiBzdHJpbmcgPSAnJERlYnVnJztcclxuXHJcbiAgICAvKiog5qC56LCD6K+V5a+56LGhICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlYnVnT2JqOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDlkI3lrZfvvIznlKggV2luZG93W+WJjee8gCArIF9uYW1lXSDorr/pl65cclxuICAgICAqIOWPr+S7pee7p+aJv+abtOaUuei/meS4quWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIF9pZkluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quiwg+ivleWvueixoVxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g6K+l5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtKF9rZXk6IHN0cmluZywgX2l0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICghX0dhbWVDb25maWcuaWZEZWJ1Zykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5faWZJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lmSW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIEJhc2VEZWJ1Zy5EZWJ1Z09ialt0aGlzLl9uYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNbX2tleV0gPSBfaXRlbTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKblvIDlkK/kuobosIPor5XmqKHlvI9cclxuaWYgKF9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgIC8v5rOo5YaM5YWo5bGA6LCD6K+V5a+56LGhXHJcbiAgICB3aW5kb3dbQmFzZURlYnVnLlByZWZpeF0gPSBCYXNlRGVidWcuRGVidWdPYmo7XHJcbiAgICAvL1xyXG4gICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5byA5ZCv6LCD6K+V5qih5byP77yM6YCa6L+HJywgQmFzZURlYnVnLlByZWZpeCwgJ+iuv+mXricpKTtcclxufSIsIlxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGgXHJcbiAqICEg5Y+q6IO95ri45oiP5YaF5L2/55So77yM5LiN6KaB5Zyo5bel5YW35Lit5L2/55SoXHJcbiAqICEg5bC96YeP5Y+q5Zyo6YeN5aSN5Yib5bu66Z2e5bi45aSa5a+56LGh55qE5Zyw5pa55L2/55So77yM5LiN54S25Lya5b6X5LiN5YG/5aSxXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUG9vbCB7XHJcbiAgICAvKiog5a+56LGh5rGg5YiX6KGoICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IGFueVtdLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gX3NpZ24gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SXRlbTxUIGV4dGVuZHMgYW55Pihfc2lnbjogRUdhbWVQb29sU2lnbik6IFQge1xyXG4gICAgICAgIC8v5YWI5Yiw5pys5Zyw5a+56LGh5rGg5YiX6KGo5Lit5p+l5om+XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbExpc3RbX3NpZ25dICYmIHRoaXMucG9vbExpc3RbX3NpZ25dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9vbExpc3RbX3NpZ25dLnBvcCgpIGFzIFQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfc2lnbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFR2FtZVBvb2xTaWduLnYzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IExheWEuVmVjdG9yMykgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFR2FtZVBvb2xTaWduLnYyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IExheWEuVmVjdG9yMikgYXMgYW55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS25YWD57SgXHJcbiAgICAgKiBAcGFyYW0gX3NpZ24g5Zue5pS25qCH6K+GXHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g5Zue5pS25YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZUl0ZW0oX3NpZ246IEVHYW1lUG9vbFNpZ24sIC4uLl9pdGVtczogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbExpc3RbX3NpZ25dID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+q5re75Yqg5LiN5YyF5ZCr55qE5YWD57SgXHJcbiAgICAgICAgZm9yIChsZXQgX28gb2YgX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wb29sTGlzdFtfc2lnbl0uaW5jbHVkZXMoX28pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXS5wdXNoKF9vKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjMoKTogTGF5YS5WZWN0b3IzIHtcclxuICAgICAgICBsZXQgX3YzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IzPihFR2FtZVBvb2xTaWduLnYzKTtcclxuICAgICAgICBfdjMuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djNcclxuICAgICAqIEBwYXJhbSBfdjMg5b6F5Zue5pS255qEdjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjMoLi4uX3YzczogTGF5YS5WZWN0b3IzW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjMsIC4uLl92M3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWMigpOiBMYXlhLlZlY3RvcjIge1xyXG4gICAgICAgIGxldCBfdjI6IExheWEuVmVjdG9yMiA9IHRoaXMuZ2V0SXRlbTxMYXlhLlZlY3RvcjI+KEVHYW1lUG9vbFNpZ24udjIpO1xyXG4gICAgICAgIF92Mi5zZXRWYWx1ZSgwLCAwKTtcclxuICAgICAgICByZXR1cm4gX3YyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLZ2MlxyXG4gICAgICogQHBhcmFtIF92MiDlvoXlm57mlLbnmoR2MlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVWMiguLi5fdjJzOiBMYXlhLlZlY3RvcjJbXSkge1xyXG4gICAgICAgIHRoaXMucmVjeWNsZUl0ZW0oRUdhbWVQb29sU2lnbi52MiwgLi4uX3Yycyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/lr7nosaHmsaDmoIfor4ZcclxuICovXHJcbmV4cG9ydCBlbnVtIEVHYW1lUG9vbFNpZ24ge1xyXG4gICAgLyoqIDPnu7TlkJHph48gKi9cclxuICAgIHYzLFxyXG4gICAgLyoqIDLnu7TlkJHph48gKi9cclxuICAgIHYyLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IFJlc0xvYWRHcm91cCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRHcm91cFwiO1xyXG5pbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4uL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+i/m+WFpeS5i+WJjeeahOWKoOi9veWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUluaXRMb2FkIHtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgICAgIC8v5omn6KGM5Yqg6L295LmL5YmN55qE55Sf5ZG95ZGo5pyfXHJcbiAgICAgICAgdGhpcy5sb2FkQmVmb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb1cclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQoX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0NvbSgn5byA5aeL5Yqg6L295ri45oiP5Yid5aeL5YyW6LWE5rqQJykpO1xyXG4gICAgICAgIC8v6I635Y+W5Yqg6L296aG5XHJcbiAgICAgICAgbGV0IF9yZXNMb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSB0aGlzLmdldExvYWRJdGVtcygpO1xyXG4gICAgICAgIC8v5byC5q2l5Yqg6L295Yqg6L296aG5XHJcbiAgICAgICAgUmVzTG9hZEdyb3VwLmxvYWRBc3luYyhfcmVzTG9hZEl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFBsYW4oaSk7XHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5sb2FkSXRlbXNDb20sIHVuZGVmaW5lZCwgZmFsc2UpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0NvbSgn5ri45oiP5Yqg6L295a6M5oiQJykpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbSgpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Yqg6L295LmL5YmNXHJcbiAgICAgKiDlj6/ku6XlnKjov5nph4zliJ3lp4vljJbkuIDkupvkuJzopb9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRCZWZvcmUoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWKoOi9vemhueWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFBsYW4oX2k6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQ29tKCkgeyB9XHJcbn0iLCIvKipcclxuICog5YWz6ZSu6LWE5rqQ54K55ZCN5a2X5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFS2V5UmVzTmFtZSB7XHJcbiAgICAvKiog5qC555uu5b2VICovXHJcbiAgICBSb290UmVzID0gJ3JlcycsXHJcbiAgICAvKiog6YWN572u6KGo55uu5b2VICovXHJcbiAgICBDb25maWdKc29uID0gJ0NvbmZpZ0pzb24nLFxyXG4gICAgLyoqIOWtl+S9k+ebruW9lSAqL1xyXG4gICAgRm9udCA9ICdGb250JyxcclxuICAgIC8qKiBGR1VJ6LWE5rqQ55uu5b2VICovXHJcbiAgICBGR1VJID0gJ0ZHVUknLFxyXG4gICAgLyoqIOWFs+WNoemFjee9ruihqOebruW9lSAqL1xyXG4gICAgU2NlbmVKc29uID0gJ1NjZW5lSnNvbicsXHJcbiAgICAvKiog5YW25a6D55uu5b2VICovXHJcbiAgICBPdGhlciA9ICdPdGhlcicsXHJcbiAgICAvKiogaWNvbuebruW9lSAqL1xyXG4gICAgaWNvbiA9ICdpY29uJyxcclxuICAgIC8qKiBpbWfnm67lvZUgKi9cclxuICAgIGltZyA9ICdpbWcnLFxyXG4gICAgLyoqIOmfs+S5kOaWh+S7tuebruW9lSAqL1xyXG4gICAgbXVzaWMgPSAnbXVzaWMnLFxyXG4gICAgLyoqIOmfs+aViOaWh+S7tuebruW9lSAqL1xyXG4gICAgc291bmQgPSAnc291bmQnLFxyXG4gICAgLyoqIOearuiCpOaWh+S7tuebruW9lSAqL1xyXG4gICAgc2tpbiA9ICdza2luJyxcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gJy4vRUtleVJlc05hbWUnO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tICcuL0tleVJlc01hbmFnZXInO1xyXG4vKipcclxuICog5b+F6KaB55qE5ri45oiP6LWE5rqQ6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFc3NlbnRpYWxSZXNVcmxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFs+WNoemFjee9ruaWh+S7tlxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lQ29uZmlnVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5TY2VuZUpzb24pICsgX25hbWUgKyAnLmpzb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoSnNvbuaWh+S7tlJVTFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOmFjee9ruihqOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbmZpZ0pzb25VUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24pICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGR1VJ5YyFXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YyF5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSVBhY2tVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZHVUkpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfkvZPlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlrZfkvZPlkI3lrZfvvIzliqDlkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGb250VVJMKF9uYW1lKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRm9udCkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJgOaciemihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FsbFNjZW5lUHJlZmFic05hbWVzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLy/pooTliLbkvZPlnLrmma/nvJPlrZhcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWJzU2NlbmVDYWNoZToge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICog6aKE5Yi25L2T6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiIOmihOWItuS9k+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFByZWZhYlVSTChwcmVmYWI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/lhYjlnKjnvJPlrZjkuK3mn6Xmib7lnLrmma/lkI3lrZdcclxuICAgICAgICBpZiAodGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwodGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSkgKyAnQ29udmVudGlvbmFsLycgKyBwcmVmYWIgKyAnLmxoJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3or6XpooTliLbkvZPlnKjlk6rkuKrlnLrmma/kuK3ooqvlr7zlh7rnmoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldLmluZGV4T2YoJ0AnICsgcHJlZmFiICsgJ0AnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDliLDnvJPlrZhcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0gPSBfaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChfaSkgKyAnQ29udmVudGlvbmFsLycgKyBwcmVmYWIgKyAnLmxoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Zyo5Zy65pmv5om+5Yiw6aKE5Yi25L2TJywgcHJlZmFiLCAn5Y+v6IO95piv5rKh5pyJ5a+85Ye65Zy65pmv6aKE5Yi25L2T5YiX6KGo5a+86Ie055qE44CCJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Zy65pmv6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX28g5Zy65pmv6aKE5Yi25L2T6ZuG5ZCIXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UHJlZmFiU2NlbmVOYW1lcyhfbzogYW55KSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICB0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0gPSBfb1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwiLi4vVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcIi4vRUtleVJlc05hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnliJfooajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVJlc01hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEtleVJlc01hbmFnZXI7XHJcblxyXG4gICAgLy/lhbPplK7otYTmupDliJfooahcclxuICAgIHByaXZhdGUgbV9LZXlSZXNMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL+azqOWGjOWFs+mUrui1hOa6kOebruW9lVxyXG4gICAgICAgIHRoaXMubV9LZXlSZXNMaXN0ID0ge1xyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuUm9vdFJlc106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Db25maWdKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5GR1VJXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZHVUkgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5TY2VuZUpzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuU2NlbmVKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRm9udF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Gb250ICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuT3RoZXJdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycsXHJcbiAgICAgICAgICAgIC8v5YW25LuW6Lev5b6EXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pY29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaWNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmltZ106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmltZyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLm11c2ljXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUubXVzaWMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5zb3VuZF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNvdW5kICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc2tpbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNraW4gKyAnLycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1fS2V5UmVzTGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5piv5ZCm5a2Y5Zyo5p+Q5Liq5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZktleVJlcyhfa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PSBfa2V5O1xyXG4gICAgICAgIH0pICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5YWz6ZSu54K56LWE5rqQ55qE6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSZXNVUkwoX2tleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjmgIHmt7vliqDlhbPplK7ot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUruWAvFxyXG4gICAgICogQHBhcmFtIF9zdHJpbmcg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkUmVzVXJsKF9rZXk6IHN0cmluZywgX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV0gPSBfc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfc3RyIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGVkaXRLZXlSZXNMaXN0KF9rZXk6IHN0cmluZywgX3N0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9yZXBsYWNlOiBzdHJpbmcgPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIF9yZXBsYWNlID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5L+u5pS56LWE5rqQ6Lev5b6E5aSx6LSl77yM5rKh5pyJJyArIF9rZXkgKyAn6L+Z5Liq5YWz6ZSu6Lev5b6E77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pu/5o2i5omA5pyJ6LWE5rqQ6Lev5b6E5Lit55qE5YWz6ZSu54K56Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldLnJlcGxhY2UoX3JlcGxhY2UsIF9zdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoQnLCBfcmVwbGFjZSwgJ+abv+aNouaIkCcsIF9zdHIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L2957G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoTliJfooahcclxuICAgICAqIEBwYXJhbSBtb2RlbCDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkKHVybHM6IGFueSwgbW9kZWw6IEVSZXNMb2FkTW9kZWwsIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlhoXlrrnpnIDopoHliqDovb1cclxuICAgICAgICBpZiAoIXVybHMgfHwgKEFycmF5LmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMzpcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRl5pivM0TnmoTmjqXlj6PvvIzpgILnlKjkuo4zROmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIuY3JlYXRlKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQyOlxyXG4gICAgICAgICAgICAgICAgLy9sb2Fk5pivMmTnmoTmjqXlj6PvvIzpgILnlKjkuo4yZOmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EIFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDIsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDNEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQyRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui1hOa6kFxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBub0Nsb25lIOaYr+WQpuS4jeiOt+WPluWFi+mahueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJlcyhyZXNVcmw6IHN0cmluZywgbm9DbG9uZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICBsZXQgZ2V0UmVzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKHJlc1VybCk7XHJcbiAgICAgICAgaWYgKCFnZXRSZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKFwi6LWE5rqQ5bCa5pyq5Yqg6L29XCIsIHJlc1VybCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub0Nsb25lID8gZ2V0UmVzIDogZ2V0UmVzLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIbmjIflrprotYTmupDlnLDlnYDnvJPlrZjjgIJcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJSZXMocmVzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclJlcyhyZXNVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L295qih5byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFUmVzTG9hZE1vZGVsIHtcclxuICAgIC8qKiAzRCDotYTmupAgKi9cclxuICAgIEQzLFxyXG4gICAgLyoqIDJkIOi1hOa6kCAqL1xyXG4gICAgRDIsXHJcbn0iLCJpbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4vUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nu4RcclxuICog6LSf6LSj5aSa5Liq6LWE5rqQ5Yqg6L296aG555qE57uf5LiA5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkR3JvdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovkvZzkuLrlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5rKh5pyJ5Yqg6L296aG5XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5rWF5ou36LSd77yM6Ziy5q2i5rGh5p+T5rqQ5YiX6KGoXHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICAgIC8v5byC5q2l5YiX6KGo6ZW/5bqmXHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAvL+S4gOatpeS4gOatpea2iOi0ueW8guatpeWIl+ihqFxyXG4gICAgICAgIGxldCBfZjogRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25JdGVtOiBSZXNMb2FkSXRlbSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBvbkl0ZW0ubG9hZEFzeW5jKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuaAu+i/m+W6plxyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2xlbmd0aCAtIGl0ZW1zLmxlbmd0aCAtIDEpICsgaSkgLyBfbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuWNleS4quWKoOi9vemhueWKoOi9veWujOaIkOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20uYXJncyA9IFtvbkl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20ucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBfZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzpgJLlvZLliqDovb3mlrnms5VcclxuICAgICAgICBfZigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXN5bmMoaXRlbXM6IFJlc0xvYWRJdGVtW10sIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChpdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcywgX29uSXRlbUNvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVzTG9hZCwgeyBFUmVzTG9hZE1vZGVsIH0gZnJvbSBcIi4vUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vemhuVxyXG4gKiDotJ/otKPkuIDnu4TotYTmupDliJfooajnmoTliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRJdGVtIHtcclxuICAgIC8qKiDliqDovb3mqKHlvI8gKi9cclxuICAgIHByaXZhdGUgbV9sb2FkTW9kZWw6IEVSZXNMb2FkTW9kZWw7XHJcblxyXG4gICAgLyoqIOWKoOi9veWFs+mUrumUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogYW55O1xyXG5cclxuICAgIC8qKiDliqDovb3lrozmiJDlm57osIMgKi9cclxuICAgIHByaXZhdGUgbV9jb21CYWNrOiBMYXlhLkhhbmRsZXI7XHJcblxyXG4gICAgLyoqIOi1hOa6kOi3r+W+hOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3JlczogYW55O1xyXG5cclxuICAgIC8qKiDojrflj5blhbPplK7plK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBfcmVzIOi1hOa6kOWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9tb2RlIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5pe255qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihfcmVzOiBhbnksIF9tb2RlOiBFUmVzTG9hZE1vZGVsLCBfa2V5PzogYW55LCBfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMubV9yZXMgPSBfcmVzO1xyXG4gICAgICAgIHRoaXMubV9sb2FkTW9kZWwgPSBfbW9kZTtcclxuICAgICAgICB0aGlzLm1fa2V5ID0gX2tleTtcclxuICAgICAgICB0aGlzLm1fY29tQmFjayA9IF9jb21CYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9jb21CYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghb25Db21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCB0aGlzLm1fY29tQmFjaywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcInNyYy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBEMk1hbmFnZXIgZnJvbSBcIi4vRDIvRDJNYW5hZ2VyXCI7XHJcbmltcG9ydCBEM01hbmFnZXIgZnJvbSBcIi4vRDMvRDNNYW5hZ2VyXCI7XHJcbmltcG9ydCBfVENvbmZpZyBmcm9tIFwiLi9fVENvbmZpZ1wiO1xyXG5cclxuLyoqIFxyXG4gKiDmoYbmnrblhaXlj6NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRNYWluIHtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICAvL+azqOWFpeahhuaetuS/oeaBr1xyXG4gICAgICAgIHdpbmRvd1tfVENvbmZpZy5OYW1lXSA9IHtcclxuICAgICAgICAgICAgLyoqIOahhuaetumFjee9riAqL1xyXG4gICAgICAgICAgICAuLi5fVENvbmZpZyxcclxuICAgICAgICAgICAgLyoqIGxheWHphY3nva4gKi9cclxuICAgICAgICAgICAgZ2FtZUNvbmZpZzogeyAuLi5HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDpobnnm67phY3nva4gKi9cclxuICAgICAgICAgICAgX21haW5Db25maWc6IHsgLi4uX01haW5Db25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOa4uOaIj+mFjee9riAqL1xyXG4gICAgICAgICAgICBfZ2FtZUNvbmZpZzogeyAuLi5fR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITnp43lkITmoLfnmoTnrqHnkIblmahcclxuICAgICAgICBEM01hbmFnZXIuaW5pdCgpOy8vM0TnrqHnkIblmahcclxuICAgICAgICBEMk1hbmFnZXIuaW5pdCgpOy8vdWnnrqHnkIblmahcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDljZXkvovlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RhbmNlVCB7XHJcbiAgICAvKiog5Y2V5L6L5bGe5oCn5ZCNICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZUtleTogc3ltYm9sID0gU3ltYm9sKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkvovnsbvoo4XppbDlmahcclxuICAgICAqICEg6KKr6KOF6aWw55qE57G755qE5p6E6YCg5pa55rOV5LiN6IO95pe2cHVibGlj57G75Z6L55qEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5LiA5Liq55uR5ZCs5bGe5oCnXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsICdpbnN0YW5jZScsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0gPSBuZXcgdGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+S6jnYz5ZCR6YeP55qE5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWM1V0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5LiA5Liq5a2X56ym5Liy5p6E5bu6djPlkJHph49cclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VWZWN0b3IzKHN0cjogc3RyaW5nLCBfb3V0VjM6IExheWEuVmVjdG9yMykge1xyXG4gICAgICAgIHZhciBzdHJzID0gc3RyLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgX291dFYzLnNldFZhbHVlKE51bWJlcihzdHJzWzBdKSwgTnVtYmVyKHN0cnNbMV0pLCBOdW1iZXIoc3Ryc1syXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572uVjPlkJHph4/plb/luqZcclxuICAgICAqIEBwYXJhbSBfdjMg55uu5qCH5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2wg55uu5qCH6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VjNMZW5ndGgoX3YzOiBMYXlhLlZlY3RvcjMsIF9sOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgX2xlbmd0aDogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfdjMpO1xyXG4gICAgICAgIGlmIChfbGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IF9hOiBudW1iZXIgPSBfbCAvIF9sZW5ndGg7XHJcbiAgICAgICAgICAgIF92My54ID0gX3YzLnggKiBfYTtcclxuICAgICAgICAgICAgX3YzLnkgPSBfdjMueSAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueiA9IF92My56ICogX2E7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5Liq54K55o+S5YC856e75Yqo5Yiw5Y+m5LiA5Liq54K5XHJcbiAgICAgKiBAcGFyYW0gX3BvcyDlvZPliY3ngrlcclxuICAgICAqIEBwYXJhbSBfdHJhZ2V0UG90IOebruagh+eCuVxyXG4gICAgICogQHBhcmFtIF9sZXJwIOaPkuWAvOenu+WKqOavlOS+i1xyXG4gICAgICogQHBhcmFtIF9vdXRWMyDovpPlh7rlkJHph49cclxuICAgICAqIEBwYXJhbSBfaW5pdGlhbExlbmd0aCDliJ3lp4vplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQb3RMZXJwTW92ZShfcG9zOiBMYXlhLlZlY3RvcjMsIF90cmFnZXRQb3Q6IExheWEuVmVjdG9yMywgX2xlcnA6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMsIF9pbml0aWFsTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghX291dFYzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W/hemhu+acieS4gOS4qui+k+WHuueahOWQkemHj++8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLmRpc3RhbmNlKF9wb3MsIF90cmFnZXRQb3QpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmxlcnAoX3BvcywgX3RyYWdldFBvdCwgX2xlcnAsIF9vdXRWMyk7XHJcbiAgICAgICAgLy/ov5Tlm57ov5vluqZcclxuICAgICAgICByZXR1cm4gMSAtIChfZGlzdGFuY2UgLyBfaW5pdGlhbExlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnljIDpgJ/np7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX3NwZWVkIOmAn+W6plxyXG4gICAgICogQHBhcmFtIF9vdXRWMyDovpPlh7rlkJHph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQb3RDb25zdGFudFNwZWVkTW92ZShfcG9zOiBMYXlhLlZlY3RvcjMsIF90cmFnZXRQb3Q6IExheWEuVmVjdG9yMywgX3NwZWVkOiBudW1iZXIsIF9vdXRWMzogTGF5YS5WZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2lmRW5kOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBfZGlmZmVyVjM6IExheWEuVmVjdG9yMyA9IG5ldyBMYXlhLlZlY3RvcjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuVmVjdG9yMy5zdWJ0cmFjdChfdHJhZ2V0UG90LCBfcG9zLCBfZGlmZmVyVjMpO1xyXG4gICAgICAgIGxldCBfZGlzdGFuY2U6IG51bWJlciA9IExheWEuVmVjdG9yMy5zY2FsYXJMZW5ndGgoX2RpZmZlclYzKTtcclxuICAgICAgICBpZiAoX2Rpc3RhbmNlID4gX3NwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VjNMZW5ndGgoX2RpZmZlclYzLCBfc3BlZWQpO1xyXG4gICAgICAgICAgICBfaWZFbmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfaWZFbmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ebuOWKoFxyXG4gICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3BvcywgX2RpZmZlclYzLCBfb3V0VjMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9pZkVuZDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoYbmnrbphY3nva7mlofku7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UQ29uZmlnIHtcclxuICAgIC8qKiDlkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTmFtZTogc3RyaW5nID0gXCJMYXlhTWluaUdhbWVcIjtcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgWkhOYW1lOiBzdHJpbmcgPSBcIkxheWFCb3jlsI/muLjmiI9cIjtcclxuICAgIC8qKiDniYjmnKwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVyc2lvbnM6IHN0cmluZyA9IFwiMC4wLjAuMVwiO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVNYWluIGZyb20gXCIuL0dhbWUvR2FtZU1haW5cIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgVE1haW4gZnJvbSBcIi4vX1QvVE1haW5cIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdFx0Ly9cclxuXHRcdC8qKiDmraPlvI/lvIDlp4sgIzI4ZGY5OSAqL1xyXG5cdFx0Ly9cclxuXHRcdC8v5qGG5p625YWl5Y+jXHJcblx0XHRuZXcgVE1haW4oKTtcclxuXHRcdC8v5ri45oiP5YWl5Y+jXHJcblx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==