/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Config/_ConstConfig.ts":
/*!************************************!*\
  !*** ./src/Config/_ConstConfig.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ConstConfig; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GameConfig; });
/* harmony import */ var _MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MainConfig */ "./src/Config/_MainConfig.ts");

/**
 * 游戏最高层配置
 */
class _GameConfig {
}
/** 是否开启游戏测试 */
_GameConfig.ifGameTest = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) && false;
/** 是否开启测试类 */
_GameConfig.ifTest = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) && false;
/** 是否开启调试类 */
_GameConfig.ifDebug = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) && true;
/** 是否打开一个新窗口调试 */
_GameConfig.ifOpenWindowDebug = (!_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) && false;


/***/ }),

/***/ "./src/Config/_MainConfig.ts":
/*!***********************************!*\
  !*** ./src/Config/_MainConfig.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MainConfig; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameCommonBinder; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameCom; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameCustomsLoading; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameEnd; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameLoading; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameMain; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGamePause; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGamePlay; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameSet; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameStart; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameTestMain; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameTestPlatform; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_PGameTestUI; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMainBinder; });
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
        fgui.UIObjectFactory.setExtension(_FGUI_PGameSet__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _FGUI_PGameSet__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGamePause__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _FGUI_PGamePause__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameCustomsLoading__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _FGUI_PGameCustomsLoading__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameLoading__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _FGUI_PGameLoading__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGamePlay__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _FGUI_PGamePlay__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameStart__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _FGUI_PGameStart__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestUI__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _FGUI_PGameTestUI__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameEnd__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _FGUI_PGameEnd__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestMain__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _FGUI_PGameTestMain__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameCom__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _FGUI_PGameCom__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_FGUI_PGameTestPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _FGUI_PGameTestPlatform__WEBPACK_IMPORTED_MODULE_11__["default"]);
    }
}


/***/ }),

/***/ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts":
/*!********************************************************!*\
  !*** ./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_EmptyScreenUI; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitEmptyScreenBinder; });
/* harmony import */ var _FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_EmptyScreenUI */ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class InitEmptyScreenBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts":
/*!**********************************************!*\
  !*** ./src/FGUI/InitLoad/FGUI_initLoadUI.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_initLoadUI; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitLoadBinder; });
/* harmony import */ var _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class InitLoadBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/FGUI/_Test/FGUI_TestMain.ts":
/*!*****************************************!*\
  !*** ./src/FGUI/_Test/FGUI_TestMain.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUI_TestMain; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TestBinder; });
/* harmony import */ var _FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGUI_TestMain */ "./src/FGUI/_Test/FGUI_TestMain.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class _TestBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/Game/ConfigProxy/SceneNodeConfigProxy.ts":
/*!******************************************************!*\
  !*** ./src/Game/ConfigProxy/SceneNodeConfigProxy.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/BaseConfigProxy */ "./src/_T/Config/BaseConfigProxy.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_config/_SceneNodeConfig */ "./src/Game/_config/_SceneNodeConfig.ts");
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
let SceneNodeConfigProxy = class SceneNodeConfigProxy extends src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
    /**
     * 通过id获取数据
     * @param _id id
     */
    byIdGetData(_id) {
        return this.m_dataList.find((item) => {
            return item.id == _id;
        });
    }
    /**
     * 通过关卡名字获取关卡数据
     * @param _name 关卡名字
     */
    byNameGetData(_name) {
        return this.m_dataList.find((item) => {
            return item.name == _name;
        });
    }
    /**
     * 通过场景名字获取数据列表
     * @param _name 场景名字
     */
    bySceneNameGetData(_name) {
        return this.m_dataList.filter((item) => {
            return item.scene == _name;
        });
    }
};
SceneNodeConfigProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateConfigProxy(_config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_3__["_SceneNodeConfig"]),
    __metadata("design:paramtypes", [])
], SceneNodeConfigProxy);
/* harmony default export */ __webpack_exports__["default"] = (SceneNodeConfigProxy);


/***/ }),

/***/ "./src/Game/ConfigProxy/TestConstProxy.ts":
/*!************************************************!*\
  !*** ./src/Game/ConfigProxy/TestConstProxy.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/BaseConfigProxy */ "./src/_T/Config/BaseConfigProxy.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _config_TestConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_config/_TestConst */ "./src/Game/_config/_TestConst.ts");
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
 * 测试常量配置表代理
 */
let TestConstProxy = class TestConstProxy extends src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__["BaseConstProxy"] {
    //
    constructor() { super(); }
};
TestConstProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateConfigProxy(_config_TestConst__WEBPACK_IMPORTED_MODULE_3__["_TestConst"]),
    __metadata("design:paramtypes", [])
], TestConstProxy);
/* harmony default export */ __webpack_exports__["default"] = (TestConstProxy);


/***/ }),

/***/ "./src/Game/Data/DataManager.ts":
/*!**************************************!*\
  !*** ./src/Game/Data/DataManager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        _TestDataProxy__WEBPACK_IMPORTED_MODULE_5__["TestDataProxy"].instance.initData();
        _MainDataProxy__WEBPACK_IMPORTED_MODULE_1__["MainDataProxy"].instance.initData();
        _SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.initData();
        _SignDataProxy__WEBPACK_IMPORTED_MODULE_4__["SignDataProxy"].instance.initData();
        _ShortDataProxy__WEBPACK_IMPORTED_MODULE_3__["default"].instance.initData();
    }
};
DataManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], DataManager);
/* harmony default export */ __webpack_exports__["default"] = (DataManager);


/***/ }),

/***/ "./src/Game/Data/MainDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/MainDataProxy.ts ***!
  \****************************************/
/*! exports provided: MainDataProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDataProxy", function() { return MainDataProxy; });
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
let MainDataProxy = class MainDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
};
MainDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_MainData__WEBPACK_IMPORTED_MODULE_3__["default"]),
    __metadata("design:paramtypes", [])
], MainDataProxy);



/***/ }),

/***/ "./src/Game/Data/SetDataProxy.ts":
/*!***************************************!*\
  !*** ./src/Game/Data/SetDataProxy.ts ***!
  \***************************************/
/*! exports provided: SetDataProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDataProxy", function() { return SetDataProxy; });
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
let SetDataProxy = class SetDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
};
SetDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_SetData__WEBPACK_IMPORTED_MODULE_3__["default"]),
    __metadata("design:paramtypes", [])
], SetDataProxy);



/***/ }),

/***/ "./src/Game/Data/ShortDataProxy.ts":
/*!*****************************************!*\
  !*** ./src/Game/Data/ShortDataProxy.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
let ShortDataProxy = class ShortDataProxy extends src_T_Data_BaseShortDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
};
ShortDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_ShortData__WEBPACK_IMPORTED_MODULE_3__["default"]),
    __metadata("design:paramtypes", [])
], ShortDataProxy);
/* harmony default export */ __webpack_exports__["default"] = (ShortDataProxy);


/***/ }),

/***/ "./src/Game/Data/SignDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/SignDataProxy.ts ***!
  \****************************************/
/*! exports provided: SignDataProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignDataProxy", function() { return SignDataProxy; });
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
let SignDataProxy = class SignDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
};
SignDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_SignData__WEBPACK_IMPORTED_MODULE_3__["default"]),
    __metadata("design:paramtypes", [])
], SignDataProxy);



/***/ }),

/***/ "./src/Game/Data/TestDataProxy.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/TestDataProxy.ts ***!
  \****************************************/
/*! exports provided: TestDataProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDataProxy", function() { return TestDataProxy; });
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
let TestDataProxy = class TestDataProxy extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
    //
    _initData() {
        //
    }
};
TestDataProxy = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_TestData__WEBPACK_IMPORTED_MODULE_3__["default"]),
    __metadata("design:paramtypes", [])
], TestDataProxy);



/***/ }),

/***/ "./src/Game/Data/type/MainData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/MainData.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainData; });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 主要数据
 */
class MainData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/Game/Data/type/SetData.ts":
/*!***************************************!*\
  !*** ./src/Game/Data/type/SetData.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetData; });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 设置数据
 */
class SetData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShortData; });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 临时数据
 */
class ShortData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/Game/Data/type/SignData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/SignData.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignData; });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 签到数据
 */
class SignData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/Game/Data/type/TestData.ts":
/*!****************************************!*\
  !*** ./src/Game/Data/type/TestData.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestData; });
/* harmony import */ var src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseData */ "./src/_T/Data/BaseData.ts");

/**
 * 测试数据
 */
class TestData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
let CustomDebug = class CustomDebug extends src_T_Debug_BaseDebug__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
};
CustomDebug = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], CustomDebug);
/* harmony default export */ __webpack_exports__["default"] = (CustomDebug);


/***/ }),

/***/ "./src/Game/GameMain.ts":
/*!******************************!*\
  !*** ./src/Game/GameMain.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMain; });
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
        let _gameInitLoad = new _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_2__["default"]();
        //开始加载
        _gameInitLoad.load(Laya.Handler.create(this, () => {
            this.gameInitLoadCom();
            this.enterGame();
        }));
    }
    //游戏加载完成
    gameInitLoadCom() {
        //初始化各个管理器
        _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.init(); //场景管理器
        _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_4__["default"].instance.init(); //ui控制器管理器
        _Data_DataManager__WEBPACK_IMPORTED_MODULE_1__["default"].instance.init(); //数据管理器
    }
    //进入游戏
    enterGame() {
        //进入游戏
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog('进入游戏'));
        // /**
        // TODO 进入测试模块
        _test_TestMain__WEBPACK_IMPORTED_MODULE_5__["default"].instance.start();
        //  */
    }
}


/***/ }),

/***/ "./src/Game/Main/GameInitLoad.ts":
/*!***************************************!*\
  !*** ./src/Game/Main/GameInitLoad.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameInitLoad; });
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
class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_8__["default"] {
    /**
     * 初始化
     */
    init() {
        //初始化需要的ui控制器实例
        this.m_initEmptyScreenUICon = new _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_14__["default"]();
        this.m_initLoadUICon = new _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_15__["default"]();
    }
    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    loadBefore() {
        //设置路径
        for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_17__["_EAllScenePrefabsNames"]) {
            src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_11__["default"].addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_11__["default"].getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_9__["EKeyResName"].RootRes) + `${_i}/`); //注入预制体路径
        }
        //设置预制体场景对照
        src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__["default"].setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_17__["_EAllScenePrefabsNames"]);
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
        src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll();
        src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll();
        src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__["default"].bindAll();
        src_FGUI_Test_TestBinder__WEBPACK_IMPORTED_MODULE_4__["default"].bindAll();
        src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll();
    }
    //获取FGUI加载项
    getFGUILoadItems(_name, _atliasCount, _comBack) {
        let _fguiRes = [];
        //注入包路径
        new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_7__["FGUIPack"](src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__["default"].FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_13__["default"](_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_12__["EResLoadModel"].D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    addFGUIPackage(_name) {
        fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__["default"].FGUIPackURL(_name));
    }
    //注入配置表加载项
    immitConfigLoadItems(_loadItems) {
        //配置表
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__["BuildConfigTs"].getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__["default"].ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [];
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_18__["_EAllExportSceneName"]) {
            sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_10__["default"].SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_18__["_EAllExportSceneName"][_i]));
        }
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_13__["default"]([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_12__["EResLoadModel"].D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_5__["default"].BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__["BuildConfigTs"].getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_6__["default"].packLogLight('所有配置表内容->', _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_16__["BuildConfigTs"].getAllConfig()));
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__["_EAllExportSceneName"]) {
            _name = _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__["_EAllExportSceneName"][_i];
            this.m_sceneList[_name] = new src_T_D3_scene_Scene__WEBPACK_IMPORTED_MODULE_0__["default"](_name);
            continue;
            //根据不同的场景实例化不同的类
            switch (_name) {
            }
        }
    }
};
SceneManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], SceneManager);
/* harmony default export */ __webpack_exports__["default"] = (SceneManager);


/***/ }),

/***/ "./src/Game/UICon/UIConManager.ts":
/*!****************************************!*\
  !*** ./src/Game/UICon/UIConManager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
let UIConManager = class UIConManager extends src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    //
    constructor() { super(); }
    /** 初始化回调，继承使用，主要设置ui列表和代理器 */
    _init() {
        //
    }
};
UIConManager = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], UIConManager);
/* harmony default export */ __webpack_exports__["default"] = (UIConManager);


/***/ }),

/***/ "./src/Game/UICon/_test/_TestMainUICon.ts":
/*!************************************************!*\
  !*** ./src/Game/UICon/_test/_TestMainUICon.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/_Test/FGUI_TestMain */ "./src/FGUI/_Test/FGUI_TestMain.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");
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
let _TestMainUICon = class _TestMainUICon extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__["default"] {
    //
    constructor() {
        super();
        /** ui */
        this._UI = src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
};
_TestMainUICon = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], _TestMainUICon);
/* harmony default export */ __webpack_exports__["default"] = (_TestMainUICon);


/***/ }),

/***/ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts":
/*!*********************************************************!*\
  !*** ./src/Game/UICon/initLoad/initEmptyScreenUICon.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitEmptyScreenUICon; });
/* harmony import */ var src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI */ "./src/FGUI/InitEmptyScreen/FGUI_EmptyScreenUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");


/**
 * 白屏ui控制器
 */
class InitEmptyScreenUICon extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        /** UI列表 */
        this._UI = src_FGUI_InitEmptyScreen_FGUI_EmptyScreenUI__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}


/***/ }),

/***/ "./src/Game/UICon/initLoad/initLoadUICon.ts":
/*!**************************************************!*\
  !*** ./src/Game/UICon/initLoad/initLoadUICon.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitLoadUICon; });
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/InitLoad/FGUI_initLoadUI */ "./src/FGUI/InitLoad/FGUI_initLoadUI.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");



/**
 * 初始化加载ui控制器
 */
class InitLoadUICon extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super(...arguments);
        /** UI */
        this._UI = src_FGUI_InitLoad_FGUI_initLoadUI__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    //显示回调
    _OnShow() {
        //设置数据
        this.ui.m_text_logo.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].ZHName;
        this.ui.m_text_v.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].Versions;
        this.ui.m_text_game_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].Explain;
        this.ui.m_text_explain.text = src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].Team;
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
/*! exports provided: BuildConfigTs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigTs", function() { return BuildConfigTs; });
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
        configs.push(_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_0__["_SceneNodeConfig"]);
        configs.push(_TestConfig__WEBPACK_IMPORTED_MODULE_1__["_TestConfig"]);
        configs.push(_TestConst__WEBPACK_IMPORTED_MODULE_2__["_TestConst"]);
        return configs;
    }
}


/***/ }),

/***/ "./src/Game/_config/_SceneNodeConfig.ts":
/*!**********************************************!*\
  !*** ./src/Game/_config/_SceneNodeConfig.ts ***!
  \**********************************************/
/*! exports provided: _SceneNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SceneNodeConfig", function() { return _SceneNodeConfig; });
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
/*! exports provided: _TestConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TestConfig", function() { return _TestConfig; });
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
/*! exports provided: _TestConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TestConst", function() { return _TestConst; });
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
/*! exports provided: _EAllScenePrefabsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_EAllScenePrefabsNames", function() { return _EAllScenePrefabsNames; });
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
/*! exports provided: _EAllExportSceneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_EAllExportSceneName", function() { return _EAllExportSceneName; });
/**
 * 所有导出场景名字
 * ! 此文件是Unity自动导出的，不要修改，也不要直接依赖。
 */
var _EAllExportSceneName;
(function (_EAllExportSceneName) {
    _EAllExportSceneName["Scene"] = "Scene";
})(_EAllExportSceneName || (_EAllExportSceneName = {}));


/***/ }),

/***/ "./src/Game/_test/ConfigTest.ts":
/*!**************************************!*\
  !*** ./src/Game/_test/ConfigTest.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigProxy/SceneNodeConfigProxy */ "./src/Game/ConfigProxy/SceneNodeConfigProxy.ts");
/* harmony import */ var _ConfigProxy_TestConstProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConfigProxy/TestConstProxy */ "./src/Game/ConfigProxy/TestConstProxy.ts");
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
 * 配置表测试
 */
let ConfigTest = class ConfigTest {
    //
    constructor() { }
    /**
     * 开始
     */
    start() {
        console.log('场景节点配置表内容');
        console.log(_ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__["default"].instance.dataList);
        console.log('常量测试配置表内容');
        console.log(_ConfigProxy_TestConstProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data);
    }
};
ConfigTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], ConfigTest);
/* harmony default export */ __webpack_exports__["default"] = (ConfigTest);


/***/ }),

/***/ "./src/Game/_test/DataTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/DataTest.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        console.log('数据测试', _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data);
        //
        _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__["default"].instance.addItem('proxyData', _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
            console.log('数据设置回调');
        });
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
            console.log('数组被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.array);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.object);
        //
        _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性 a 被设置');
        }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.object, 'a');
    }
};
DataTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], DataTest);
/* harmony default export */ __webpack_exports__["default"] = (DataTest);


/***/ }),

/***/ "./src/Game/_test/OtherTest.ts":
/*!*************************************!*\
  !*** ./src/Game/_test/OtherTest.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], OtherTest);
/* harmony default export */ __webpack_exports__["default"] = (OtherTest);


/***/ }),

/***/ "./src/Game/_test/PackTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/PackTest.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        console.log('打包测试32');
    }
};
PackTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], PackTest);
/* harmony default export */ __webpack_exports__["default"] = (PackTest);


/***/ }),

/***/ "./src/Game/_test/TestMain.ts":
/*!************************************!*\
  !*** ./src/Game/_test/TestMain.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scene/SceneManager */ "./src/Game/Scene/SceneManager.ts");
/* harmony import */ var _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UICon/_test/_TestMainUICon */ "./src/Game/UICon/_test/_TestMainUICon.ts");
/* harmony import */ var _ConfigTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigTest */ "./src/Game/_test/ConfigTest.ts");
/* harmony import */ var _DataTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataTest */ "./src/Game/_test/DataTest.ts");
/* harmony import */ var _OtherTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OtherTest */ "./src/Game/_test/OtherTest.ts");
/* harmony import */ var _PackTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PackTest */ "./src/Game/_test/PackTest.ts");
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
        _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].instance.getScene('Scene')
            .getSceneNode('debug')
            .asyncBuild()
            .then((node) => {
            console.log('当前场景', node.scene);
            console.log('当前节点', node);
            //为该场景设置环境
            node.scene.setEnvironment();
        });
        //显示测试ui
        _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
        //数据
        _DataTest__WEBPACK_IMPORTED_MODULE_4__["default"].instance.start();
        //类库测试
        // LibraryTest.instance.start();
        //配置表测试
        _ConfigTest__WEBPACK_IMPORTED_MODULE_3__["default"].instance.start();
        //打包测试
        _PackTest__WEBPACK_IMPORTED_MODULE_6__["default"].instance.start();
        //其他测试
        _OtherTest__WEBPACK_IMPORTED_MODULE_5__["default"].instance.start();
    }
};
TestMain = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], TestMain);
/* harmony default export */ __webpack_exports__["default"] = (TestMain);


/***/ }),

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameConfig; });
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

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/GameMain */ "./src/Game/GameMain.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _T_TMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_T/TMain */ "./src/_T/TMain.ts");



class Main {
    constructor() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].height);
        else
            Laya.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].scaleMode;
        Laya.stage.screenMode = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].screenMode;
        Laya.stage.alignV = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].alignV;
        Laya.stage.alignH = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].alignH;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].stat)
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
        new _T_TMain__WEBPACK_IMPORTED_MODULE_2__["default"]();
        //游戏入口
        new _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}
//激活启动类
new Main();


/***/ }),

/***/ "./src/_T/Config/BaseConfigProxy.ts":
/*!******************************************!*\
  !*** ./src/_T/Config/BaseConfigProxy.ts ***!
  \******************************************/
/*! exports provided: default, BaseConstProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseConfigProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConstProxy", function() { return BaseConstProxy; });
/**
 * 数据代理基类
 */
class _BaseConfigProxy {
    //初始化
    constructor() {
        //
        this._initData();
        this.initData();
    }
    /** 初始化之前执行 */
    _initData() { }
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
    /** 初始化之前 */
    _initData() {
        this.m_dataList = this.configTemplate.datas;
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
    /** 初始化之前 */
    _initData() {
        this.m_data = this.configTemplate.data;
    }
}


/***/ }),

/***/ "./src/_T/Config/ConfigT.ts":
/*!**********************************!*\
  !*** ./src/_T/Config/ConfigT.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigT; });
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
            _url = _Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__["default"].ConfigJsonURL(_o.fileName);
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
        let configData = _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].GetRes(_url, true);
        //清理资源缓存只使用一次
        _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].ClearRes(_url);
        //判断有没有压缩
        if (configData.zip) {
            //解压
            let _time = Date.now();
            configData.data = JSON.parse(pako.inflate(configData.data, { to: 'string' }));
            _time = Date.now() - _time;
            //判断解压时间差
            if (_time > 500) {
                console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn('配置表解压时间过长，可能是配置表文件过大->', _url));
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsoleConst; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsoleEx; });
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
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].logStyle, any);
    }
    /**
     * 包装普通轻消息
     * @param any 内容
     */
    static packLogLight(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].logLightStyle, any);
    }
    /**
     * 包装成功消息
     * @param any 内容
     */
    static packCom(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].comStyle, any);
    }
    /**
     * 包装警告消息
     * @param any 内容
     */
    static packWarn(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].warnStyle, any);
    }
    /**
     * 包装错误消息
     * @param any 内容
     */
    static packError(...any) {
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
            return any;
        }
        //
        return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].errorStyle, any);
    }
}


/***/ }),

/***/ "./src/_T/D2/D2Manager.ts":
/*!********************************!*\
  !*** ./src/_T/D2/D2Manager.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return D2Manager; });
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
        _FGUI_FGUIRootManager__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/BaseSingleUICon.ts":
/*!*******************************************!*\
  !*** ./src/_T/D2/FGUI/BaseSingleUICon.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSingleUICon; });
/* harmony import */ var _BaseUICon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseUICon */ "./src/_T/D2/FGUI/BaseUICon.ts");

/**
 * 基类单页面控制器
 */
class BaseSingleUICon extends _BaseUICon__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseUICon; });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _EUILayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EUILayer */ "./src/_T/D2/FGUI/EUILayer.ts");
/* harmony import */ var _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FGUIRootManager */ "./src/_T/D2/FGUI/FGUIRootManager.ts");
/* harmony import */ var _FGUIT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FGUIT */ "./src/_T/D2/FGUI/FGUIT.ts");
/* harmony import */ var _RootUICon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RootUICon */ "./src/_T/D2/FGUI/RootUICon.ts");





/**
 * UI控制器基类(用来控制UI界面)
 */
class BaseUICon extends _RootUICon__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super(...arguments);
        /** 唯一键值 */
        this.m_key = Symbol();
        /** 是否在隐藏时清理掉ui，默认为true */
        this._ifClear = true;
        /** UI层级类型，必须在初始化时设置 */
        this._layer = _EUILayer__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].Panel;
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
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError('没有找到ui创建器列表!'));
        }
        //初始化根节点ui
        this.m_rootUI = new fgui.GComponent();
        _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__["default"].getLayerUI(this._layer).addChild(this.m_rootUI);
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
        _FGUIT__WEBPACK_IMPORTED_MODULE_3__["default"].setUITopShow(this.m_rootUI);
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
/*! exports provided: default, BaseUIConManagerProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseUIConManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUIConManagerProxy", function() { return BaseUIConManagerProxy; });
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
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn('ui控制管理器没有初始化管理的ui列表'));
        }
        if (!this.m_uiProxy) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn('ui控制管理器没有初始化ui代理'));
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
/*! exports provided: EUILayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUILayer", function() { return EUILayer; });
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
/*! exports provided: FGUIPack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FGUIPack", function() { return FGUIPack; });
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
        return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_1__["default"].Load2DAsync(_urls, _onProgress);
    }
    /**
     * 获取所有资源路径
     * @param urls 输出数组
     */
    getResURL(urls) {
        //加入包名
        urls.push({ url: this.packPath + '.' + src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__["default"].FGUI.packageFileExtension, type: Laya.Loader.BUFFER });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUIRootManager; });
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
        fgui.UIConfig.packageFileExtension = src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__["default"].FGUI.packageFileExtension;
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        //添加FGUI根节点按顺序显示
        this.layerUIList = {};
        for (let _i in _EUILayer__WEBPACK_IMPORTED_MODULE_1__["EUILayer"]) {
            this.layerUIList[_EUILayer__WEBPACK_IMPORTED_MODULE_1__["EUILayer"][_i]] = fgui.GRoot.inst.addChild(new fgui.GComponent());
        }
    }
}


/***/ }),

/***/ "./src/_T/D2/FGUI/FGUIT.ts":
/*!*********************************!*\
  !*** ./src/_T/D2/FGUI/FGUIT.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGUIT; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootUICon; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return D3Manager; });
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
        _scene_GlobalD3Environment__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    }
}


/***/ }),

/***/ "./src/_T/D3/scene/GlobalD3Environment.ts":
/*!************************************************!*\
  !*** ./src/_T/D3/scene/GlobalD3Environment.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalD3Environment; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeT; });
/* harmony import */ var src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/GameT/GamePool */ "./src/_T/GameT/GamePool.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_T/Utils/V3Utils */ "./src/_T/Utils/V3Utils.ts");




/**
 * 节点工具
 */
class NodeT {
    /**
     * 是否是预制体配置
     * @param _config 配置数据
     */
    static ifPrefabsConfig(_config) {
        return _config.prefabName && true;
    }
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
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_target.transform.position, _spr.transform.localPosition);
            }
            //设置旋转
            if (!_target.transform.euler) {
                //默认旋转
                _spr.transform.localRotationEuler.setValue(0, 0, 0);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
            }
            //设置缩放
            if (!_target.transform.scale) {
                //默认缩放
                _spr.transform.localScale.setValue(1, 1, 1);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_target.transform.scale, _spr.transform.localScale);
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
        let _centreV3 = src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].getV3();
        //
        if (_differ.child) {
            for (let _diff of _differ.child) {
                this.setDiffer(_spr.getChildAt(_diff.index), _diff);
            }
        }
        //获取源变换
        let _transform = [src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].getV3(), src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].getV3(), src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].getV3()];
        if (_differ._transform) {
            if (_differ._transform.position) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ._transform.position, _transform[0]);
            }
            if (_differ._transform.euler) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ._transform.euler, _transform[1]);
            }
            if (_differ._transform.scale) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ._transform.scale, _transform[2]);
            }
        }
        //判断是否有transform属性
        if (_differ.transform) {
            //
            if (_differ.transform.position) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ.transform.position, _centreV3);
                Laya.Vector3.add(_transform[0], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localPosition);
                _spr.transform.localPosition = _spr.transform.localPosition;
            }
            if (_differ.transform.euler) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ.transform.euler, _centreV3);
                Laya.Vector3.add(_transform[1], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localRotationEuler);
                _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
            }
            if (_differ.transform.scale) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_3__["default"].parseVector3(_differ.transform.scale, _centreV3);
                Laya.Vector3.add(_transform[2], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localScale);
                _spr.transform.localScale = _spr.transform.localScale;
            }
        }
        //回收临时向量
        src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].recycleV3(...[_centreV3, ..._transform]);
    }
    /**
     * 获取预制体名字
     * @param _prefabsNames 输出的预制体名字列表
     * @param _nodeConfig 节点配置数据
     */
    static getPrefabsNames(_prefabsNames, _nodeConfig) {
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
    static buildNode(_node, _nodeConfig, _prefabs) {
        if (!_nodeConfig) {
            return;
        }
        //先判断是不是预制体
        let _prefabName = _nodeConfig.prefabName;
        let _spr;
        if (_prefabName) {
            _spr = src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].GetRes(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__["default"].PrefabURL(_prefabName));
            _node.addChild(_spr);
            NodeT.setNode(_spr, _nodeConfig);
            //
            _prefabs[_prefabName] = _prefabs[_prefabName] || [];
            _prefabs[_prefabName].push(_spr);
        }
        else {
            //判断是否有子节点
            if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                _spr = new Laya.Sprite3D;
                _node.addChild(_spr);
                NodeT.setNode(_spr, _nodeConfig);
                _nodeConfig.child.forEach((item) => {
                    this.buildNode(_node, item, _prefabs);
                });
            }
        }
    }
}


/***/ }),

/***/ "./src/_T/D3/scene/Scene.ts":
/*!**********************************!*\
  !*** ./src/_T/D3/scene/Scene.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
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
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packError('没有初始化场景的名字！'));
            return;
        }
        let _data = src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_0__["default"].getConfigJsonData(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_2__["default"].SceneConfigURL(this._sceneName));
        // console.log(config.root);
        if (_data) {
            //获取根节点下的节点
            for (let _i = 0; _i < _data.length; _i++) {
                this.m_sceneConfig[_data[_i].name] = _data[_i];
            }
        }
        else {
            console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packError('获取场景数据失败->', this._sceneName));
        }
        //设置环境，默认为全局3d环境，可以自定义环境
        this.m_environment = _GlobalD3Environment__WEBPACK_IMPORTED_MODULE_5__["default"].Environment;
        //
        this._init();
    }
    /** 获取场景配置 */
    get sceneConfig() {
        return this.m_sceneConfig;
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
                console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn('有个场景节点没有找到', item));
            }
        });
        if (_nodeConfig.length == 0) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn('获取场景节点时，一个配置信息都没找到', _names));
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
        let _sceneNode = new _SceneNode__WEBPACK_IMPORTED_MODULE_4__["default"](_nodeConfig, this);
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
            _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].setNode(this.m_environment.camera, _sceneConfig.camera);
        }
        //设置全局灯光
        if (_sceneConfig.light) {
            _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].setNode(this.m_environment.light, _sceneConfig.light);
        }
        //执行回调
        this._setEnvironment();
    }
    /**
     * 加载进度
     * ! 框架执行
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneNode; });
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
            _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].getPrefabsNames(this.m_prefabsNames, item);
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
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__["default"].PrefabURL(item);
        });
        return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].Load3DAsync(_prefabNamesURL, Laya.Handler.create(this, (n) => {
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
            _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].buildNode(_spr, item, this.m_prefabs);
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
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn('场景节点还在构建却试图删除。'));
            return;
        }
        this.m_ifDelete = true;
        this.m_scene.deleteOnNode(this);
        this.m_node.destroy();
        //清理引用
        this.m_node = null;
        this.m_prefabs = null;
    }
}


/***/ }),

/***/ "./src/_T/Data/BaseData.ts":
/*!*********************************!*\
  !*** ./src/_T/Data/BaseData.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseData; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseDataProxy; });
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
            console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError('没有找到数据模板！请使用数据模板装饰器装饰该类', this.constructor.name));
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseLocalDataProxy; });
/* harmony import */ var _Md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Md5 */ "./src/_T/Data/Md5.ts");
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _BaseDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDataProxy */ "./src/_T/Data/BaseDataProxy.ts");
/* harmony import */ var src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Config/_MainConfig */ "./src/Config/_MainConfig.ts");
/* harmony import */ var _ObjectProxyT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObjectProxyT */ "./src/_T/Data/ObjectProxyT.ts");





/**
 * 基类本地数据代理，通过此类可以访问本地保存的数据
 * 泛型为数据类型
 */
class BaseLocalDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_2__["default"] {
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
        return src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].Name + '-' + this._saveName + '-' + src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].Versions + (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine ? '^on' : '^test');
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
            this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_4__["default"]();
            this.m_data = this.m_objectProxyT.setProxy(this.m_data);
            //添加设置监听
            this.m_objectProxyT.addMonitor(this, this._dataSetMonitor);
        }
        //
        this._initData();
        //判断时间差
        _time = Date.now() - _time;
        if (_time > 100) {
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn('初始化本地数据时间过长', this.saveName, _time));
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
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine && this._ifDifferData) {
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
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn('场景保存时间过长', this.saveName, _time));
        }
    }
    //从本地获取数据
    _readData() {
        //读取本地数据
        let readStr = Laya.LocalStorage.getJSON(this.saveName);
        //判断是否是线上环境
        if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine && this._ifDifferData) {
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
        if (_Md5__WEBPACK_IMPORTED_MODULE_0__["default"].ifUse) {
            return _Md5__WEBPACK_IMPORTED_MODULE_0__["default"].hashStr(_encryptStr).toString();
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseShortDataProxy; });
/* harmony import */ var _BaseDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDataProxy */ "./src/_T/Data/BaseDataProxy.ts");
/* harmony import */ var _ObjectProxyT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectProxyT */ "./src/_T/Data/ObjectProxyT.ts");


/**
 * 临时数据代理基类
 * 泛型为数据类型
 */
class BaseShortDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
            this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataT; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Md5; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProxyT; });
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
                //修改属性
                let _if = Reflect.set(trapTarget, key, value, receiver);
                if (_if) {
                    //判断是是不是数组的length属性被修改
                    if (!(Array.isArray(trapTarget) && key == 'length')) {
                        //执行回调
                        _this.proxySet(trapTarget, key, value, receiver);
                    }
                }
                //
                return _if;
            },
            /***
             * get 方法
             * @param trapTarget 代理的目标
             * @param key 属性名称
             * @param receiver receiver 操作发生的对象（通常是代理）
             */
            get(trapTarget, key, receiver) {
                //获取属性
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseDebug; });
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
        if (!src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"].ifDebug) {
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
if (src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"].ifDebug) {
    //注册全局调试对象
    window[BaseDebug.Prefix] = BaseDebug.DebugObj;
    //
    console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn('开启调试模式，通过', BaseDebug.Prefix, '访问'));
}


/***/ }),

/***/ "./src/_T/GameT/GamePool.ts":
/*!**********************************!*\
  !*** ./src/_T/GameT/GamePool.ts ***!
  \**********************************/
/*! exports provided: default, EGamePoolSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGamePoolSign", function() { return EGamePoolSign; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseInitLoad; });
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
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom('开始加载游戏初始化资源'));
        //获取加载项
        let _resLoadItems = this.getLoadItems();
        //异步加载加载项
        _Res_ResLoadGroup__WEBPACK_IMPORTED_MODULE_1__["default"].loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
            this.loadPlan(i);
        }, undefined, false), Laya.Handler.create(this, this.loadItemsCom, undefined, false))
            .then(() => {
            console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom('游戏加载完成'));
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
/*! exports provided: EKeyResName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EKeyResName", function() { return EKeyResName; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EssentialResUrls; });
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
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].SceneJson) + _name + '.json';
    }
    /**
     * 获取配置表Json文件RUL
     * @param _name 配置表名字
     */
    static ConfigJsonURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].ConfigJson) + _name;
    }
    /**
     * FGUI包
     * @param _name 包名
     */
    static FGUIPackURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].FGUI) + _name;
    }
    /**
     * 字体地址
     * @param _name 字体名字，加后缀
     */
    static FontURL(_name) {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].Font) + _name;
    }
    /**
     * 预制体资源路径
     * @param prefab 预制体名字
     */
    static PrefabURL(prefab) {
        //先在缓存中查找场景名字
        if (this._prefabsSceneCache[prefab]) {
            return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(this._prefabsSceneCache[prefab]) + 'Conventional/' + prefab + '.lh';
        }
        //判断该预制体在哪个场景中被导出的
        for (let _i in this._AllScenePrefabsNames) {
            if (this._AllScenePrefabsNames[_i].indexOf('@' + prefab + '@') != -1) {
                //添加到缓存
                this._prefabsSceneCache[prefab] = _i;
                return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_i) + 'Conventional/' + prefab + '.lh';
            }
        }
        //
        console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError('没有在场景找到预制体', prefab, '可能是没有导出场景预制体列表导致的。'));
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].ConfigJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].ConfigJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].FGUI]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].FGUI + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].SceneJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].SceneJson + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Font]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Font + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/',
            //其他路径
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].icon]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].icon + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].img]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].img + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].music]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].music + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].sound]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].sound + '/',
            [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].skin]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + '/' + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].skin + '/',
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
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn('修改资源路径失败，没有' + _key + '这个关键路径！'));
            return;
        }
        //替换所有资源路径中的关键点路径
        for (let _i in this.instance.m_KeyResList) {
            this.instance.m_KeyResList[_i] = this.instance.m_KeyResList[_i].replace(_replace, _str);
        }
        //
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog('修改关键点资源路径', _replace, '替换成', _str));
    }
};
KeyResManager = __decorate([
    _Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], KeyResManager);
/* harmony default export */ __webpack_exports__["default"] = (KeyResManager);


/***/ }),

/***/ "./src/_T/Res/ResLoad.ts":
/*!*******************************!*\
  !*** ./src/_T/Res/ResLoad.ts ***!
  \*******************************/
/*! exports provided: default, EResLoadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EResLoadModel", function() { return EResLoadModel; });
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
        //
        if (Array.isArray(urls)) {
            //去除虚值
            urls = urls.filter(Boolean);
        }
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
            console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError("资源尚未加载", resUrl));
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResLoadGroup; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResLoadItem; });
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
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, this.m_comBack, _onProgress);
            }
            else {
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                    this.m_comBack.run();
                    onCompleted.run();
                }), _onProgress);
            }
        }
        else {
            _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, onCompleted, _onProgress);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TMain; });
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
        window[_TConfig__WEBPACK_IMPORTED_MODULE_5__["default"].Name] = Object.assign(Object.assign({}, _TConfig__WEBPACK_IMPORTED_MODULE_5__["default"]), { 
            /** laya配置 */
            gameConfig: Object.assign({}, src_GameConfig__WEBPACK_IMPORTED_MODULE_2__["default"]), 
            /** 项目配置 */
            _mainConfig: Object.assign({}, src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_1__["default"]), 
            /** 游戏配置 */
            _gameConfig: Object.assign({}, src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"]) });
        //初始化各种各样的管理器
        _D3_D3Manager__WEBPACK_IMPORTED_MODULE_4__["default"].init(); //3D管理器
        _D2_D2Manager__WEBPACK_IMPORTED_MODULE_3__["default"].init(); //ui管理器
    }
}


/***/ }),

/***/ "./src/_T/Ts/InstanceT.ts":
/*!********************************!*\
  !*** ./src/_T/Ts/InstanceT.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstanceT; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V3Utils; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TConfig; });
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvVUlDb24vVUlDb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL190ZXN0L19UZXN0TWFpblVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRFbXB0eVNjcmVlblVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9CdWlsZENvbmZpZ1RzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1NjZW5lTm9kZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L0NvbmZpZ1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvRGF0YVRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvT3RoZXJUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L1BhY2tUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L1Rlc3RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9NYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25maWcvQ29uZmlnVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uc29sZS9Db25zb2xlQ29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUV4LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9EMk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0VVSUxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlSb290TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9Sb290VUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL0QzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvR2xvYmFsRDNFbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvTm9kZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZU5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZURhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0RhdGFULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL01kNS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9PYmplY3RQcm94eVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RlYnVnL0Jhc2VEZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvR2FtZVQvR2FtZVBvb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL01haW4vQmFzZUluaXRMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRUtleVJlc05hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvS2V5UmVzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL1Jlc0xvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvVE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RzL0luc3RhbmNlVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvVXRpbHMvVjNVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvX1RDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Q0FBQztJQUVPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBMkIsRUFBRSxDQUEyQjtRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FB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akI7UUFDRCxJQUFJO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxFQUFFO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUdEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFpQixFQUFFLE1BQWMsRUFBRSxRQUFzQixJQUFJLENBQUMsWUFBWTtRQUM3RixPQUFPO1FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O0FBWnVCLG9CQUFZLEdBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0VuRjtBQUFBO0FBQUE7O0dBRUc7QUFDWSxNQUFNLFFBQVE7O0FBQ3pCLFNBQVM7QUFDSyxhQUFJLEdBQVcsY0FBYyxDQUFDO0FBQzVDLFdBQVc7QUFDRyxlQUFNLEdBQVcsWUFBWSxDQUFDO0FBQzVDLFNBQVM7QUFDSyxpQkFBUSxHQUFXLFNBQVMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9NYWluLnRzXCIpO1xuIiwiLyoqXHJcbiAqIOW4uOmHj+mFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0NvbnN0Q29uZmlnIHtcclxuICAgIC8qKiBmZ3Vp55u45YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUkgPSB7XHJcbiAgICAgICAgLyoqIOWMheWQjue8gCAqL1xyXG4gICAgICAgIHBhY2thZ2VGaWxlRXh0ZW5zaW9uOiAnYmluJyxcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcIi4vX01haW5Db25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9HYW1lQ29uZmlnIHtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/muLjmiI/mtYvor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZHYW1lVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/mtYvor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkRlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIHRydWU7XHJcbiAgICAvKiog5piv5ZCm5omT5byA5LiA5Liq5paw56qX5Y+j6LCD6K+VICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmT3BlbldpbmRvd0RlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG59IiwiLyoqXHJcbiAqIOmhueebruacgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01haW5Db25maWcge1xyXG4gICAgLyoqIOa4uOaIj+aJgOWxnuWboumYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZWFtOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP5ZCN5a2X77yM5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTmFtZTogc3RyaW5nID0gJ0xheWFNaW5pR2FtZSc7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpITmFtZTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+ivtOaYjiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeHBsYWluOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIj++8jOivtOaYjuOAgic7XHJcbiAgICAvKiog5pWw5o2u54mI5pysIOWPr+S7peW4puWtl+avjeS9huaYr+WwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZlcnNpb25zOiBzdHJpbmcgPSAnMC4wLjAuMSc7XHJcbiAgICAvKiog5piv5ZCm5LiK57q/5Li6ZmFsc2XliJnmmK/lvIDlj5Hnjq/looMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT25MaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb21tb25CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ29tIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tcTNuZzl3XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ29tIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUNvbT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUNvbVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZGJtaTEzXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDdXN0b21zTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUVuZCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWxheGQxOVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUVuZCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVFbmQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVFbmRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMW9cIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUxvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXN5dGE5ZlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZU1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZU1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQYXVzZSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E1Z1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBhdXNlIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBhdXNlPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGF1c2VcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQbGF5IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXJcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQbGF5IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBsYXk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQbGF5XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU2V0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTR1XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU2V0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVNldD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVNldFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVN0YXJ0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTdGFydCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTdGFydD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVN0YXJ0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9VSUJ1dHRvbjpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fVUk6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Rlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Rlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fZGF0YVRlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fdGVzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1vOWpzOXhcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX1VJQnV0dG9uID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9VSSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fdGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX190ZXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fbG9va1ZBZDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fbG9va1ZBZFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19sb29rVkFkOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3NoYXJlOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaGFyZVRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaGFyZTpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaG93VG9hc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tdDFwdzl5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RQbGF0Zm9ybVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9sb29rVkFkID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb29rVkFkVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fX2xvb2tWQWQgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fc2hhcmUgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3NoYXJlVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fX3NoYXJlID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fX3Nob3dUb2FzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWg2NmU5elwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0VUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0VUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1BHYW1lU2V0IGZyb20gXCIuL0ZHVUlfUEdhbWVTZXRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQYXVzZSBmcm9tIFwiLi9GR1VJX1BHYW1lUGF1c2VcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGxheSBmcm9tIFwiLi9GR1VJX1BHYW1lUGxheVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVN0YXJ0IGZyb20gXCIuL0ZHVUlfUEdhbWVTdGFydFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RVSSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFVJXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lRW5kIGZyb20gXCIuL0ZHVUlfUEdhbWVFbmRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdE1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDb20gZnJvbSBcIi4vRkdVSV9QR2FtZUNvbVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZU1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZU1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTZXQuVVJMLCBGR1VJX1BHYW1lU2V0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGF1c2UuVVJMLCBGR1VJX1BHYW1lUGF1c2UpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUxvYWRpbmcuVVJMLCBGR1VJX1BHYW1lTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBsYXkuVVJMLCBGR1VJX1BHYW1lUGxheSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVN0YXJ0LlVSTCwgRkdVSV9QR2FtZVN0YXJ0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFVJLlVSTCwgRkdVSV9QR2FtZVRlc3RVSSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUVuZC5VUkwsIEZHVUlfUEdhbWVFbmQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0TWFpbi5VUkwsIEZHVUlfUEdhbWVUZXN0TWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUNvbS5VUkwsIEZHVUlfUEdhbWVDb20pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVNYWluLlVSTCwgRkdVSV9QR2FtZU1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0uVVJMLCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9FbXB0eVNjcmVlblVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovLzdrdHppYjhvcTNuZzBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfRW1wdHlTY3JlZW5VSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfRW1wdHlTY3JlZW5VST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdEVtcHR5U2NyZWVuXCIsIFwiRW1wdHlTY3JlZW5VSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwiLi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9FbXB0eVNjcmVlblVJLlVSTCwgRkdVSV9FbXB0eVNjcmVlblVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9pbml0TG9hZFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIG1fbG9hZGluZ19wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sb2dvOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWE6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWFfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9nYW1lX2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9uM29lZHBwNm5paHIwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX2luaXRMb2FkVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX2luaXRMb2FkVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRMb2FkXCIsIFwiaW5pdExvYWRVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb2FkaW5nX3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xvZ28gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3RleHRfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV90ZXh0X3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YV92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV90ZXh0X2dhbWVfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcIi4vRkdVSV9pbml0TG9hZFVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9pbml0TG9hZFVJLlVSTCwgRkdVSV9pbml0TG9hZFVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9UZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9oeHU0emM5ZGlvbzgwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1Rlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9UZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiX1Rlc3RcIiwgXCJUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9UZXN0TWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfVGVzdE1haW4uVVJMLCBGR1VJX1Rlc3RNYWluKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQmFzZUNvbmZpZ1Byb3h5IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuLi9fY29uZmlnL19TY2VuZU5vZGVDb25maWdcIjtcclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuemFjee9ruihqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQENvbmZpZ1QuRGVjb3JhdGVDb25maWdQcm94eShfU2NlbmVOb2RlQ29uZmlnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGVDb25maWdQcm94eSBleHRlbmRzIEJhc2VDb25maWdQcm94eTxfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTY2VuZU5vZGVDb25maWdQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4dpZOiOt+WPluaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZCBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlJZEdldERhdGEoX2lkOiBudW1iZXIpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gX2lkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5YWz5Y2h5ZCN5a2X6I635Y+W5YWz5Y2h5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YWz5Y2h5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBfbmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluaVsOaNruWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlTY2VuZU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNjZW5lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbnN0UHJveHkgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9CYXNlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi4vX2NvbmZpZy9fVGVzdENvbnN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5bi46YeP6YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9UZXN0Q29uc3QpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RDb25zdFByb3h5IGV4dGVuZHMgQmFzZUNvbnN0UHJveHk8X1Rlc3RDb25zdC5EYXRhVHlwZT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0Q29uc3RQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IE1haW5EYXRhUHJveHkgfSBmcm9tIFwiLi9NYWluRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgU2hvcnREYXRhUHJveHkgZnJvbSBcIi4vU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2lnbkRhdGFQcm94eSB9IGZyb20gXCIuL1NpZ25EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuL1Rlc3REYXRhUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7nrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaJgOacieaVsOaNrlxyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBNYWluRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2V0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2lnbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNob3J0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBNYWluRGF0YSBmcm9tIFwiLi90eXBlL01haW5EYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoTWFpbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBNYWluRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PE1haW5EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE1haW5EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2V0RGF0YSBmcm9tIFwiLi90eXBlL1NldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTZXREYXRhKVxyXG5leHBvcnQgY2xhc3MgU2V0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNldERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2V0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlU2hvcnREYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNob3J0RGF0YSBmcm9tIFwiLi90eXBlL1Nob3J0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNob3J0RGF0YSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhUHJveHkgZXh0ZW5kcyBCYXNlU2hvcnREYXRhUHJveHk8U2hvcnREYXRhPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaG9ydERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaWduRGF0YSBmcm9tIFwiLi90eXBlL1NpZ25EYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2lnbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBTaWduRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNpZ25EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNpZ25EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVGVzdERhdGEgZnJvbSBcIi4vdHlwZS9UZXN0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFRlc3REYXRhKVxyXG5leHBvcnQgY2xhc3MgVGVzdERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxUZXN0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDpn7PmlYggKi9cclxuICAgIGlmT3BlblNvdW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDog4zmma/pn7PkuZAgKi9cclxuICAgIGlmT3Blbk11c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/pnIfliqggKi9cclxuICAgIGlmT3BlblZpYnJhdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7IH0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmluZzogc3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgICBib29sZWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2JqZWN0OiB7XHJcbiAgICAgICAgYTogbnVtYmVyLFxyXG4gICAgICAgIGI6IHN0cmluZyxcclxuICAgICAgICBjOiBib29sZWFuXHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICBiOiAnYicsXHJcbiAgICAgICAgICAgIGM6IHRydWUsXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBCYXNlRGVidWcgZnJvbSBcInNyYy9fVC9EZWJ1Zy9CYXNlRGVidWdcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG4vKipcclxuICog6Ieq5a6a5LmJ6LCD6K+V5a+56LGhXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21EZWJ1ZyBleHRlbmRzIEJhc2VEZWJ1ZyB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDdXN0b21EZWJ1ZztcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGEvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVJbml0TG9hZCBmcm9tIFwiLi9NYWluL0dhbWVJbml0TG9hZFwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuL1NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyIGZyb20gXCIuL1VJQ29uL1VJQ29uTWFuYWdlclwiO1xyXG5pbXBvcnQgVGVzdE1haW4gZnJvbSBcIi4vX3Rlc3QvVGVzdE1haW5cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/lhaXlj6NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluIHtcclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICAvL+iOt+WPlua4uOaIj+WIneWni+WMluWKoOi9veWunuS+i1xyXG4gICAgICAgIGxldCBfZ2FtZUluaXRMb2FkOiBHYW1lSW5pdExvYWQgPSBuZXcgR2FtZUluaXRMb2FkKCk7XHJcbiAgICAgICAgLy/lvIDlp4vliqDovb1cclxuICAgICAgICBfZ2FtZUluaXRMb2FkLmxvYWQoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXRMb2FkQ29tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ri45oiP5Yqg6L295a6M5oiQXHJcbiAgICBwcml2YXRlIGdhbWVJbml0TG9hZENvbSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluWQhOS4queuoeeQhuWZqFxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly/lnLrmma/nrqHnkIblmahcclxuICAgICAgICBVSUNvbk1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8vdWnmjqfliLblmajnrqHnkIblmahcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly/mlbDmja7nrqHnkIblmahcclxuICAgIH1cclxuXHJcbiAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgcHJpdmF0ZSBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn6L+b5YWl5ri45oiPJykpO1xyXG4gICAgICAgIC8vIC8qKlxyXG4gICAgICAgIC8vIFRPRE8g6L+b5YWl5rWL6K+V5qih5Z2XXHJcbiAgICAgICAgVGVzdE1haW4uaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvLyAgKi9cclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lQ29tbW9uQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXJcIjtcclxuaW1wb3J0IEdhbWVNYWluQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lTWFpbi9HYW1lTWFpbkJpbmRlclwiO1xyXG5pbXBvcnQgSW5pdEVtcHR5U2NyZWVuQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0RW1wdHlTY3JlZW4vSW5pdEVtcHR5U2NyZWVuQmluZGVyXCI7XHJcbmltcG9ydCBJbml0TG9hZEJpbmRlciBmcm9tIFwic3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXJcIjtcclxuaW1wb3J0IF9UZXN0QmluZGVyIGZyb20gXCJzcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlclwiO1xyXG5pbXBvcnQgQ29uZmlnVCwgeyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB9IGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCB7IEZHVUlQYWNrIH0gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrXCI7XHJcbmltcG9ydCBCYXNlSW5pdExvYWQgZnJvbSBcInNyYy9fVC9NYWluL0Jhc2VJbml0TG9hZFwiO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCJzcmMvX1QvUmVzL0VLZXlSZXNOYW1lXCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSBcInNyYy9fVC9SZXMvS2V5UmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFUmVzTG9hZE1vZGVsIH0gZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlblVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvblwiO1xyXG5pbXBvcnQgSW5pdExvYWRVSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdExvYWRVSUNvblwiO1xyXG5pbXBvcnQgeyBCdWlsZENvbmZpZ1RzIH0gZnJvbSBcIi4uL19jb25maWcvQnVpbGRDb25maWdUc1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4uL19jb25maWcvX1Rlc3RDb25zdFwiO1xyXG5pbXBvcnQgeyBfRUFsbFNjZW5lUHJlZmFic05hbWVzIH0gZnJvbSBcIi4uL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/liJ3lp4vljJbliqDovb1cclxuICogISDlj6rotJ/otKPmuLjmiI/liJ3lp4vljJblkozliqDovb3vvIzkuI3lgZrlhbbku5bkuovmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbml0TG9hZCBleHRlbmRzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvKiog55m95bGPdWnmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgbV9pbml0RW1wdHlTY3JlZW5VSUNvbjogSW5pdEVtcHR5U2NyZWVuVUlDb247XHJcbiAgICAvKiog5Yid5aeL5YyW5Yqg6L29dWnmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgbV9pbml0TG9hZFVJQ29uOiBJbml0TG9hZFVJQ29uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6ZyA6KaB55qEdWnmjqfliLblmajlrp7kvotcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBuZXcgSW5pdEVtcHR5U2NyZWVuVUlDb24oKTtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG5ldyBJbml0TG9hZFVJQ29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWIneWni+WMluS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEJlZm9yZSgpIHtcclxuICAgICAgICAvL+iuvue9rui3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5hZGRSZXNVcmwoX2ksIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlJvb3RSZXMpICsgYCR7X2l9L2ApOy8v5rOo5YWl6aKE5Yi25L2T6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u6aKE5Yi25L2T5Zy65pmv5a+554WnXHJcbiAgICAgICAgRXNzZW50aWFsUmVzVXJscy5zZXRQcmVmYWJTY2VuZU5hbWVzKF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWIhuWMheWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRTdWJwYWNrYWdlTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v6I635Y+WZmd1aeWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdENvbmZpZ0xvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpeWFtuS7lui1hOa6kOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbG9hZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YiG5YyF5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0U3VicGFja2FnZUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpWZndWnnmoTmiYDmnInliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+WFiOe7keWumuaJgOaciXVpXHJcbiAgICAgICAgdGhpcy5GR1VJQmluZGVyKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0RW1wdHlTY3JlZW4nLCB1bmRlZmluZWQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0RW1wdHlTY3JlZW4pKSk7Ly/nmb3lsY91aeWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRMb2FkJywgMCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRMb2FkKSkpOy8v5Yqg6L2955WM6Z2i5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUJhZycpKTsvL+WOn+WMhe+8jOmAmuW4uOS4uui1hOa6kOWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVDb21tb24nKSk7Ly/lhazlhbHljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdfVGVzdCcpKTsvL+a1i+ivleWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVNYWluJywgMCkpOy8v5Li75YyFXHJcbiAgICB9XHJcbiAgICAvL2ZndWnnu5HlrppcclxuICAgIHByaXZhdGUgRkdVSUJpbmRlcigpIHtcclxuICAgICAgICBJbml0RW1wdHlTY3JlZW5CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEluaXRMb2FkQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lQ29tbW9uQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBfVGVzdEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZU1haW5CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5ZGR1VJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGdldEZHVUlMb2FkSXRlbXMoX25hbWU6IHN0cmluZywgX2F0bGlhc0NvdW50PzogbnVtYmVyLCBfY29tQmFjaz86IExheWEuSGFuZGxlcik6IFJlc0xvYWRJdGVtIHtcclxuICAgICAgICBsZXQgX2ZndWlSZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgLy/ms6jlhaXljIXot6/lvoRcclxuICAgICAgICBuZXcgRkdVSVBhY2soRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSksIF9hdGxpYXNDb3VudCkuZ2V0UmVzVVJMKF9mZ3VpUmVzKTtcclxuICAgICAgICAvL+WIm+W7uuWKoOi9vemhuVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzTG9hZEl0ZW0oX2ZndWlSZXMsIEVSZXNMb2FkTW9kZWwuRDIsIF9uYW1lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgLy/mt7vliqDljIVcclxuICAgICAgICAgICAgdGhpcy5hZGRGR1VJUGFja2FnZShfbmFtZSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIC8v5re75Yqg5YyFXHJcbiAgICBwdWJsaWMgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHNjZW5lSnNvblJlcy5wdXNoKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwoX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a65LT4nLCBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpeWFtuS7lui1hOa6kOWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBpbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m95bGP5pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRFbXB0eVNjcmVlbigpIHtcclxuICAgICAgICAvL+aYvuekuueZveWxj3VpXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLlNob3coKTtcclxuICAgIH1cclxuICAgIC8v5Yqg6L295pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRMb2FkKCkge1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgLy/mmL7npLrliqDovb11aVxyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuLjmiI/liqDovb3ov5vluqYtPicsIF9pKTtcclxuICAgICAgICBpZiAodGhpcy5tX2luaXRMb2FkVUlDb24gJiYgdGhpcy5tX2luaXRMb2FkVUlDb24uaWZTaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLnNldFBsYW4oX2kpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRDb20oKSB7XHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcInNyYy9fVC9EMy9zY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/nrqHnkIblmahcclxuICog566h55CG5Zy65pmv77yM6I635Y+W5Zy65pmv77yM54S25ZCO6YCa6L+H5Zy65pmv5a6e5L6L5p6E5bu65Zy65pmv5Lit5a+56LGh55qE6IqC54K5XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKiog5Zy65pmv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVMaXN0OiB7XHJcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBTY2VuZSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluWcuuaZr1xyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmU8UyBleHRlbmRzIFNjZW5lPihfbmFtZTogc3RyaW5nKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdIGFzIFM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhajpg6jlnLrmma9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBfbmFtZSA9IF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gPSBuZXcgU2NlbmUoX25hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy/moLnmja7kuI3lkIznmoTlnLrmma/lrp7kvovljJbkuI3lkIznmoTnsbtcclxuICAgICAgICAgICAgc3dpdGNoIChfbmFtZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbk1hbmFnZXIgZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyUHJveHkgZnJvbSBcIi4vVUlDb25NYW5hZ2VyUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlcjxVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVUlDb25NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcInNyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW5cIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuLyoqXHJcbiAqIOa1i+ivleS4u+mhtemdouaOp+WItuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RNYWluVUlDb24gZXh0ZW5kcyBCYXNlU2luZ2xlVUlDb248RkdVSV9UZXN0TWFpbj4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogX1Rlc3RNYWluVUlDb247XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9UZXN0TWFpbjtcclxufSIsImltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICog55m95bGPdWnmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfRW1wdHlTY3JlZW5VST4ge1xyXG4gICAgLyoqIFVJ5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9FbXB0eVNjcmVlblVJO1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVNpbmdsZVVJQ29uIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlU2luZ2xlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRVSUNvbiBleHRlbmRzIEJhc2VTaW5nbGVVSUNvbjxGR1VJX2luaXRMb2FkVUk+IHtcclxuICAgIC8qKiBVSSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfaW5pdExvYWRVSTtcclxuXHJcbiAgICAvL+aYvuekuuWbnuiwg1xyXG4gICAgcHJvdGVjdGVkIF9PblNob3coKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGlzLnVpLm1fdGV4dF9sb2dvLnRleHQgPSBfTWFpbkNvbmZpZy5aSE5hbWU7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfdi50ZXh0ID0gX01haW5Db25maWcuVmVyc2lvbnM7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIHRoaXMudWkubV90ZXh0X2V4cGxhaW4udGV4dCA9IF9NYWluQ29uZmlnLlRlYW07XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfbGF5YV92LnRleHQgPSBMYXlhLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIF9pICo9IDEwMDtcclxuICAgICAgICB0aGlzLnVpLm1fcHJvZ3Jlc3MudmFsdWUgPSBfaTtcclxuICAgICAgICB0aGlzLnVpLm1fbG9hZGluZ19wcm9ncmVzcy50ZXh0ID0gTWF0aC5mbG9vcihfaSkgKyAnICUnO1xyXG4gICAgfVxyXG59IiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbmZpZyB9IGZyb20gXCIuL19UZXN0Q29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xuXG4vKipcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXG4qICEg6Ieq5Yqo5a+85Ye6XG4qL1xuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieeahOmFjee9ruihqOWGheWuuVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcbiAgICAgICAgbGV0IGNvbmZpZ3M6IGFueVtdID0gW107XG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uc3QpO1xuICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICB9XG59XG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDlhbPljaFpZFvlv4XopoFdICovXG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgLyoqIOWFs+WNoeWQjeWtl++8jOWPr+S7pemAmui/h+WQjeWtl+iOt+WPluWFs+WNoeaVsOaNriAqL1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xuICAgICAgICBzY2VuZTogc3RyaW5nO1xuICAgICAgIC8qKiDoioLngrnlkI3lrZfliJfooaggKi9cbiAgICAgICAgbm9kZU5hbWU6IHN0cmluZztcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdTY2VuZU5vZGVDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25maWcgY29uZmln6YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDmlbDlgLzvvIzkuI3nrqHku4DkuYjlgLzvvIzpg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgbjogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLvvIzkuI3nrqHmmK/ku4DkuYjlgLzvvIzmnIDlkI7pg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzvvIzkuI3nrqHku4DkuYjlgLzpg73kvJrovazluIPlsJTlgLwgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9UZXN0Q29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbmZpZy5qc29uJztcbn1cbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfVGVzdENvbnN0IGNvbnN06YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uc3Qge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbnN0JztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMiAqL1xuICAgICAgICBuMjogbnVtYmVyO1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UzICovXG4gICAgICAgIG4zOiBudW1iZXI7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlSAqL1xuICAgICAgICBzOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTIgKi9cbiAgICAgICAgczI6IHN0cmluZztcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMyAqL1xuICAgICAgICBzMzogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMSAqL1xuICAgICAgICBiMjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMiAqL1xuICAgICAgICBiMzogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI0OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UzICovXG4gICAgICAgIGI1OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U0ICovXG4gICAgICAgIGI2OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U1ICovXG4gICAgICAgIGI3OiBib29sZWFuO1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UgKi9cbiAgICAgICAgbzogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UxICovXG4gICAgICAgIG8yOiBhbnk7XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlTIgKi9cbiAgICAgICAgbzM6IGFueTtcbiAgICB9XG4gICAgLyoqIGNvbnN05pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhOiBfVGVzdENvbnN0LkRhdGFUeXBlID0gbnVsbDtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbnN0Lmpzb24nO1xufVxuICAgICIsIi8qKlxyXG4gKiDmiYDmnInlnLrmma/lr7nlupTnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB7XHJcbiAgICBQcmVmYWIgPSAnQEN1YmVAQFNwaGVyZUAnLFxyXG5cclxufVxyXG4vLyIsIi8qKlxyXG4gKiDmiYDmnInlr7zlh7rlnLrmma/lkI3lrZdcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxFeHBvcnRTY2VuZU5hbWUge1xyXG4gICAgU2NlbmUgPSAnU2NlbmUnLFxuXHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGVDb25maWdQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvU2NlbmVOb2RlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IFRlc3RDb25zdFByb3h5IGZyb20gXCIuLi9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOa1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDb25maWdUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WcuuaZr+iKgueCuemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFNjZW5lTm9kZUNvbmZpZ1Byb3h5Lmluc3RhbmNlLmRhdGFMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5bi46YeP5rWL6K+V6YWN572u6KGo5YaF5a65Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coVGVzdENvbnN0UHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IFRlc3REYXRhUHJveHkgfSBmcm9tIFwiLi4vRGF0YS9UZXN0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBDdXN0b21EZWJ1ZyBmcm9tIFwiLi4vRGVidWcvQ3VzdG9tRGVidWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7mtYvor5XnsbtcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNrua1i+ivlScsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBDdXN0b21EZWJ1Zy5pbnN0YW5jZS5hZGRJdGVtKCdwcm94eURhdGEnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7orr7nva7lm57osIMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw57uE6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmFycmF5KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCn6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WvueixoeWxnuaApyBhIOiiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5vYmplY3QsICdhJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdGhlclRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogT3RoZXJUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2tUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFBhY2tUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aJk+WMhea1i+ivlTMyJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4uL1NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgX1Rlc3RNYWluVUlDb24gZnJvbSBcIi4uL1VJQ29uL190ZXN0L19UZXN0TWFpblVJQ29uXCI7XHJcbmltcG9ydCBDb25maWdUZXN0IGZyb20gXCIuL0NvbmZpZ1Rlc3RcIjtcclxuaW1wb3J0IERhdGFUZXN0IGZyb20gXCIuL0RhdGFUZXN0XCI7XHJcbmltcG9ydCBMaWJyYXJ5VGVzdCBmcm9tIFwiLi9MaWJyYXJ5VGVzdFwiO1xyXG5pbXBvcnQgT3RoZXJUZXN0IGZyb20gXCIuL090aGVyVGVzdFwiO1xyXG5pbXBvcnQgUGFja1Rlc3QgZnJvbSBcIi4vUGFja1Rlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XkuLvohJrmnKxcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RNYWluIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3RNYWluO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy/mnoTlu7pTY2VuZeWcuuaZr+S4i+eahGRlYnVn6IqC54K5XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmdldFNjZW5lKCdTY2VuZScpXHJcbiAgICAgICAgICAgIC5nZXRTY2VuZU5vZGUoJ2RlYnVnJylcclxuICAgICAgICAgICAgLmFzeW5jQnVpbGQoKVxyXG4gICAgICAgICAgICAudGhlbigobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeWcuuaZrycsIG5vZGUuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeiKgueCuScsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy/kuLror6XlnLrmma/orr7nva7njq/looNcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NlbmUuc2V0RW52aXJvbm1lbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mmL7npLrmtYvor5V1aVxyXG4gICAgICAgIF9UZXN0TWFpblVJQ29uLmluc3RhbmNlLlNob3coKTtcclxuICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIERhdGFUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/nsbvlupPmtYvor5VcclxuICAgICAgICAvLyBMaWJyYXJ5VGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v6YWN572u6KGo5rWL6K+VXHJcbiAgICAgICAgQ29uZmlnVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v5omT5YyF5rWL6K+VXHJcbiAgICAgICAgUGFja1Rlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+WFtuS7lua1i+ivlVxyXG4gICAgICAgIE90aGVyVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcbiAgICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6IHN0cmluZyA9IFwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOiBzdHJpbmcgPSBcImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lTWFpbiBmcm9tIFwiLi9HYW1lL0dhbWVNYWluXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFRNYWluIGZyb20gXCIuL19UL1RNYWluXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHRcdC8vXHJcblx0XHQvKiog5q2j5byP5byA5aeLICMyOGRmOTkgKi9cclxuXHRcdC8vXHJcblx0XHQvL+ahhuaetuWFpeWPo1xyXG5cdFx0bmV3IFRNYWluKCk7XHJcblx0XHQvL+a4uOaIj+WFpeWPo1xyXG5cdFx0bmV3IEdhbWVNYWluKCk7XHJcblx0fVxyXG59XHJcblxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpOyIsImltcG9ydCB7IElCYXNlQ29uZmlnQ29udGFpbmVyLCBJQ29uZmlnQ29udGFpbmVyLCBJQ29uc3RDb250YWluZXIgfSBmcm9tIFwiLi9Db25maWdUXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5jbGFzcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUJhc2VDb25maWdDb250YWluZXI7XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY3miafooYwgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMliDkvb/nlKjml7bopobnm5ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWfmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb25maWdQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQ29uZmlnQ29udGFpbmVyO1xyXG5cclxuICAgIC8v6YWN572u5pWw5o2u5YiX6KGoXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhTGlzdDogRGF0YVtdO1xyXG5cclxuICAgIC8qKiDphY3nva7mlbDmja7liJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YUxpc3QoKTogRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY0gKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGFMaXN0ID0gdGhpcy5jb25maWdUZW1wbGF0ZS5kYXRhcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN05pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZUNvbnN0UHJveHk8RGF0YT4gZXh0ZW5kcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUNvbnN0Q29udGFpbmVyO1xyXG5cclxuICAgIC8v6YWN572u5pWw5o2uXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhOiBEYXRhO1xyXG5cclxuICAgIC8qKiDphY3nva7mlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuY29uZmlnVGVtcGxhdGUuZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElDb25maWdEYXRhIH0gZnJvbSBcIi4uL2NvbS9JQ29uZmlnRGF0YVwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwiLi4vUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6YWN572u6KGo5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWdUIHtcclxuICAgIC8qKlxyXG4gICAgICog6KOF6aWw6YWN572u6KGo5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZyDphY3nva7ooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUNvbmZpZ1Byb3h5KF9jb25maWc6IElCYXNlQ29uZmlnQ29udGFpbmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+iuvue9rumFjee9ruihqOaooeadv1xyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLmNvbmZpZ1RlbXBsYXRlID0gX2NvbmZpZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7rphY3nva7ooajliJfooahcclxuICAgICAqIOWPquaehOW7uu+8jOS4jeWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb25maWdzIOmFjee9ruihqOWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJ1aWxkQ29uZmlncyhfY29uZmlnczogSUJhc2VDb25maWdDb250YWluZXJbXSkge1xyXG4gICAgICAgIGxldCBfdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgZm9yIChsZXQgX28gb2YgX2NvbmZpZ3MpIHtcclxuICAgICAgICAgICAgX3VybCA9IEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTChfby5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgIC8v5aGr5YWF5pWw5o2uXHJcbiAgICAgICAgICAgIHN3aXRjaCAoX28udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbmZpZ0NvbnRhaW5lcikuZGF0YXMgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uc3RDb250YWluZXIpLmRhdGEgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoanNvbuaVsOaNrlxyXG4gICAgICog77yB5rOo5oSP77yM6I635Y+W5LqG6K+l6LWE5rqQ6K+l6LWE5rqQ5bCx5Lya6KKr5Yig6Zmk5o6JXHJcbiAgICAgKiBAcGFyYW0gX3VybCDphY3nva7ooajotYTmupDlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdKc29uRGF0YShfdXJsOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8v6I635Y+W6LWE5rqQXHJcbiAgICAgICAgbGV0IGNvbmZpZ0RhdGE6IElDb25maWdEYXRhID0gUmVzTG9hZC5HZXRSZXMoX3VybCwgdHJ1ZSk7XHJcbiAgICAgICAgLy/muIXnkIbotYTmupDnvJPlrZjlj6rkvb/nlKjkuIDmrKFcclxuICAgICAgICBSZXNMb2FkLkNsZWFyUmVzKF91cmwpO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y6L57ypXHJcbiAgICAgICAgaWYgKGNvbmZpZ0RhdGEuemlwKSB7XHJcbiAgICAgICAgICAgIC8v6Kej5Y6LXHJcbiAgICAgICAgICAgIGxldCBfdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uZmlnRGF0YS5kYXRhID0gSlNPTi5wYXJzZShwYWtvLmluZmxhdGUoY29uZmlnRGF0YS5kYXRhLCB7IHRvOiAnc3RyaW5nJyB9KSk7XHJcbiAgICAgICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgICAgICAvL+WIpOaWreino+WOi+aXtumXtOW3rlxyXG4gICAgICAgICAgICBpZiAoX3RpbWUgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+mFjee9ruihqOino+WOi+aXtumXtOi/h+mVv++8jOWPr+iDveaYr+mFjee9ruihqOaWh+S7tui/h+Wkpy0+JywgX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ0RhdGEuZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu+mFjee9ruihqOWuueWZqOaOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXHJcbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICByZWFkb25seSBmaWxlTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogY29uZmlnIOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnQ29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNruWIl+ihqCAqL1xyXG4gICAgZGF0YXM6IGFueVtdO1xyXG59XHJcblxyXG4vKipcclxuICogY29uc3Qg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdENvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE6IGFueTtcclxufSIsIi8qKlxyXG4gKiDmiZPljbDlj7DluLjnlKjphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVDb25zdCB7XHJcblxyXG4gICAgLyoqIOWFrOWFseagt+W8jyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHB1YmxpY1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pmu6YCa5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2dTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyM5QkE0QjQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6L275raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2dMaWdodFN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM3NzZkOGEnLCAnI0VCRUJFQicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorablkYrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdhcm5TdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNWM2ZTA2JywgJyNmZmE5MzEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6ZSZ6K+v5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBlcnJvclN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2VjMDEwMScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiog5oiQ5Yqf5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBjb21TdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNhZGU0OTgnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmoLflvI9cclxuICAgICAqIEBwYXJhbSBfY29sb3Ig5a2X5L2T6aKc6ImyXHJcbiAgICAgKiBAcGFyYW0gX2JnQ29sb3Ig6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3R5bGUoX2NvbG9yOiBzdHJpbmcsIF9iZ0NvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtfYmdDb2xvcn07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgYCsgdGhpcy5wdWJsaWNTdHlsZTtcclxuICAgIH1cclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29uc29sZUNvbnN0IGZyb20gXCIuL0NvbnNvbGVDb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOaJk+WNsOWPsOaJqeWxlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUV4IHtcclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3N0eWxlIOagt+W8j1xyXG4gICAgICogQHBhcmFtIF9wYXIg5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBhY2soX3N0eWxlOiBzdHJpbmcsIF9wYXI6IGFueVtdKTogYW55IHtcclxuICAgICAgICByZXR1cm4gWyclYyVzJywgX3N0eWxlLCAnbG9nJywgLi4uX3Bhcl07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ1N0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa6L275raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2dMaWdodCguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dMaWdodFN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5oiQ5Yqf5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tDb20oLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuY29tU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XorablkYrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja1dhcm4oLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3Qud2FyblN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6ZSZ6K+v5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tFcnJvciguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5lcnJvclN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJL0ZHVUlSb290TWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIDJk566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEMk1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8qKiBmZ3Vp5qC5566h55CG5ZmoICovXHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmluaXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlVUlDb24sIHsgSUJhc2VVSUNvbkRlZmluZXMgfSBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuaW1wb3J0IElVSUNyZWF0ZSBmcm9tIFwiLi9JVUlDcmVhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvljZXpobXpnaLmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaW5nbGVVSUNvbjxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4gZXh0ZW5kcyBCYXNlVUlDb24ge1xyXG4gICAgLyoqIF9VSSDnsbvlnosgKi9cclxuICAgIHByb3RlY3RlZCBfVUk6IElVSUNyZWF0ZTxVST47XHJcblxyXG4gICAgLyoqIHVp57G75Z6L5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IElCYXNlVUlDb25EZWZpbmVzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKiogdWkgKi9cclxuICAgIHByaXZhdGUgbV91aTogVUk7XHJcblxyXG4gICAgLyoqIOiOt+WPlnVpICovXHJcbiAgICBwdWJsaWMgZ2V0IHVpKCk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7p1aeS5i+WJjeeahOaJqeWxleWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUJlZm9yZUV4KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5Y2VdWlcclxuICAgICAgICAgICAgdGhpcy5fVUlzID0ge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ3JlYXRlOiB0aGlzLl9VSSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrozmiJB1aeWQjueahOaJqeWxleWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUVYKCkge1xyXG4gICAgICAgIHRoaXMubV91aSA9IHRoaXMuX1VJcy5kZWZhdWx0LnVpIGFzIFVJO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlVUlDb25Qcm94eSBmcm9tIFwiLi9CYXNlVUlDb25Qcm94eVwiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcbmltcG9ydCBGR3VpRGF0YSBmcm9tIFwiLi9GR3VpRGF0YVwiO1xyXG5pbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUlSb290TWFuYWdlclwiO1xyXG5pbXBvcnQgRkdVSVQgZnJvbSBcIi4vRkdVSVRcIjtcclxuaW1wb3J0IElVSUNyZWF0ZSBmcm9tIFwiLi9JVUlDcmVhdGVcIjtcclxuaW1wb3J0IFJvb3RVSUNvbiBmcm9tIFwiLi9Sb290VUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiBVSeaOp+WItuWZqOWfuuexuyjnlKjmnaXmjqfliLZVSeeVjOmdoilcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbiBleHRlbmRzIFJvb3RVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqIOWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogc3ltYm9sID0gU3ltYm9sKCk7XHJcbiAgICAvKiog6I635Y+W5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzeW1ib2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHJpdmF0ZSBtX3Jvb3RVSTogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwdWJsaWMgZ2V0IHJvb3RVSSgpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcm9vdFVJO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKblnKjpmpDol4/ml7bmuIXnkIbmjol1ae+8jOm7mOiupOS4unRydWUgKi9cclxuICAgIHByb3RlY3RlZCBfaWZDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFVJ5bGC57qn57G75Z6L77yM5b+F6aG75Zyo5Yid5aeL5YyW5pe26K6+572uICovXHJcbiAgICBwcm90ZWN0ZWQgX2xheWVyOiBFVUlMYXllciA9IEVVSUxheWVyLlBhbmVsO1xyXG5cclxuICAgIC8qKiB1aeWxgue6pyAqL1xyXG4gICAgcHVibGljIGdldCBsYXllcigpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHByaXZhdGUgbV9pZlNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2hvdygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnku6PnkIbliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcm94eVVJTGlzdDogU2V0PEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPj4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuYWRkKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZGVsZXRlKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5TaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/ku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5PmnZ91aeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5kVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmVuZFByb3h5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7p1aVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVVSSgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVVSUJlZm9yZUV4KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLB1aeWIm+W7uuWZqOWIl+ihqCEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5YyW5qC56IqC54K5dWlcclxuICAgICAgICB0aGlzLm1fcm9vdFVJID0gbmV3IGZndWkuR0NvbXBvbmVudCgpO1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5nZXRMYXllclVJKHRoaXMuX2xheWVyKS5hZGRDaGlsZCh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aSA9IHRoaXMubV9yb290VUkuYWRkQ2hpbGQodGhpcy5fVUlzW19pXS51aUNyZWF0ZS5jcmVhdGVJbnN0YW5jZSgpKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUlFWCgpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7unVp5LmL5YmN55qE5omp5bGV5Zue6LCDIOWPquiDveWcqOaJqeWxleS4reS9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUJlZm9yZUV4KCkgeyB9XHJcbiAgICAvKiog5Yib5bu65a6M5oiQdWnlkI7nmoTmianlsZXlm57osIMg5Y+q6IO95Zyo5omp5bGV5Lit5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJRVgoKSB7IH1cclxuXHJcbiAgICAvKiog5Yib5bu65a6MdWnlkI7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUkoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVpXHJcbiAgICAgKiBAcGFyYW0gX25hbWUgdWnlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PihfbmFtZTogc3RyaW5nKTogVUkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9VSXNbX25hbWVdLnVpIGFzIFVJO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9vblNob3dCZWZvcmUoLi4ucGFyKTtcclxuICAgICAgICBsZXQgX2lmTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJIHx8IHRoaXMubV9yb290VUkuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAvL+WIm+W7unVpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuICAgICAgICAgICAgX2lmTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7liLDlvZPliY3lsYLnuqfpobblsYLmmL7npLpcclxuICAgICAgICBGR1VJVC5zZXRVSVRvcFNob3codGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgLy/miYvliqjmm7TmlrDkuIDmrKFcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICAvL+ebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9vblNob3coX2lmTmV3LCAuLi5wYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgcHJvdGVjdGVkIF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1xyXG4gICAgICogQHBhcmFtIF9pZkNsZWFyIOaYr+WQpua4heeQhlxyXG4gICAgICogQHBhcmFtIHBhciDlhbbku5blj4LmlbDvvIzkvJrkvKDliLDpmpDol4/nmoTlm57osIPkuK1cclxuICAgICAqL1xyXG4gICAgcHVibGljIEhpZGUoX2lmQ2xlYXI6IGJvb2xlYW4gPSB0aGlzLl9pZkNsZWFyLCAuLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vbkhpZGVCZWZvcmUocGFyKTtcclxuICAgICAgICBpZiAoX2lmQ2xlYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIC8v5riF55CG5byV55SoXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgdGhpcy5fZGlzcG9zZVVJKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+W5raI55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vZmYoTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9vbkhpZGUoX2lmQ2xlYXIsIHBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp6KKr5riF55CG5pe255qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2Rpc3Bvc2VVSSgpIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGUoX2lmRGVsZXRlOiBib29sZWFuLCAuLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKiog5pu05paw5aSn5bCPICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgLy/moLnmja7lrZB1aeaQuuW4pueahOaVsOaNrumAgumFjeWxj+W5leWkp+Wwj1xyXG4gICAgICAgIGxldCBfZGF0YTogRkd1aURhdGE7XHJcbiAgICAgICAgbGV0IF93aWR0aDogbnVtYmVyID0gTGF5YS5zdGFnZS53aWR0aDtcclxuICAgICAgICBsZXQgX2hlaWdodDogbnVtYmVyID0gTGF5YS5zdGFnZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gdGhpcy5fVUlzW19pXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoIV9kYXRhIHx8ICFfZGF0YS5pZlVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWSgwLCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGggLSBfZGF0YS5sZWZ0IC0gX2RhdGEucmlnaHQsIF9oZWlnaHQgLSBfZGF0YS5ib3R0b20gLSBfZGF0YS50b3ApO1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKF9kYXRhLmxlZnQsIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G7dWnmjqfliLblmajnsbvlnovmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VVSUNvbkRlZmluZXMge1xyXG4gICAgLyoqIHVp5Yib5bu65ZmoICovXHJcbiAgICB1aUNyZWF0ZTogSVVJQ3JlYXRlPGZndWkuR0NvbXBvbmVudD47XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhPzogRkd1aURhdGE7XHJcbiAgICAvKiogdWkgKi9cclxuICAgIHVpPzogZmd1aS5HQ29tcG9uZW50O1xyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlVUlDb24gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICog57uf5LiA566h55CGdWnmjqfliLblmahcclxuICog5b+F6aG76YWN5ZCI5Luj55CG5Zmo5L2/55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyPFByb3h5IGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlclByb3h5PiB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcbiAgICAvKiogdWnku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpUHJveHk6IFByb3h5O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICog5qGG5p626LCD55So77yM5LiN6IO955u05o6l6LCD55SoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICB0aGlzLl9faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIPvvIznu6fmib/kvb/nlKjvvIzkuLvopoHorr7nva51aeWIl+ihqOWSjOS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJbkuYvlkI7nmoTmo4DmtYtcclxuICAgIHByaXZhdGUgX19pbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlueuoeeQhueahHVp5YiX6KGoJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV91aVByb3h5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyWdWnku6PnkIYnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7ku6PnkIblmajku6PnkIZcclxuICAgICAgICAgICAgdGhpcy5tX3VpUHJveHkuc2V0UHJveHkodGhpcy5tX3VpQ29uTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdWkg5o6n5Yi25Zmo566h55CG5Zmo5Luj55CGXHJcbiAqIOi0n+i0o+S7o+eQhnVp5o6n5Yi25Zmo566h55CG5Zmo5Lit55qE5o6n5Yi25Zmo77yM6Ziy5q2i5b6q546v5L6d6LWWXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlclByb3h5IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKiog6I635Y+W5b2T5YmN5pi+56S655qEdWkgKi9cclxuICAgIHB1YmxpYyBnZXQgb25TaG93VUkoKTogQmFzZVVJQ29uW10ge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBCYXNlVUlDb25bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtfaV0uaWZTaG93ICYmIF91aUNvbnMucHVzaCh0aGlzLm1fdWlDb25MaXN0W19pXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF91aUNvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF91aUxpc3QgdWnliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFByb3h5KF91aUxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5tX3VpQ29uTGlzdCA9IF91aUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja51aemUruWAvOiOt+WPluS4gOS4qnVpXHJcbiAgICAgKiBAcGFyYW0gX2tleSB1aemUruWAvFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUlDb24gZXh0ZW5kcyBCYXNlVUlDb24+KF9rZXk6IHN0cmluZyk6IFVJQ29uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VpQ29uTGlzdFtfa2V5XSBhcyBVSUNvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekunVp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo57Si5byV5oiW6ICF57Si5byV5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX2lmSGlkZU90aGVyVUkg5piv5ZCm6ZqQ6JeP5YW25LuWdWkgW3RydWVdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSwgX2lmSGlkZU90aGVyVUk6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpumakOiXj+WFtuS7lnVpXHJcbiAgICAgICAgaWYgKF9pZkhpZGVPdGhlclVJKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICghX3VpQ29ucy5pbmNsdWRlcyhfaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W19pXS5IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fdWlDb25MaXN0W2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dLlNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePdWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajlrp7kvovmiJbliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXSAmJiB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+W9k+WJjeaYvuekuueahOaJgOaciXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlQWxsVUkoKSB7XHJcbiAgICAgICAgdGhpcy5vblNob3dVSS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG59IiwiLyoqXHJcbiAqIFVJ5YiG5bGCLOaMiemhuuW6j+aYvuekulxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVJTGF5ZXIge1xyXG4gICAgLyoqIOiDjOaZr+mhtemdoiAqL1xyXG4gICAgQmcgPSAnQmcnLFxyXG4gICAgLyoqIOS4u+eVjOmdoiAg5rC46L+c5a2Y5ZyoICovXHJcbiAgICBNYWluID0gXCJNYWluXCIsXHJcbiAgICAvKiog6Z2i5p2/ICDlj6/ku6XmnInlvojlpJogKi9cclxuICAgIFBhbmVsID0gXCJQYW5lbFwiLFxyXG4gICAgLyoqIOW8ueeqlyAqL1xyXG4gICAgUG9wdXAgPSBcIlBvcHVwXCIsXHJcbiAgICAvKiog6YGT5YW3ICovXHJcbiAgICBQcm9wID0gJ1Byb3AnLFxyXG4gICAgLyoqIOWwj+mDqOS7tiAqL1xyXG4gICAgVGlwID0gXCJUaXBcIixcclxuICAgIC8qKiDmmoLlgZwgKi9cclxuICAgIFBhdXNlID0gJ1BhdXNlJyxcclxuICAgIC8qKiDorr7nva4gKi9cclxuICAgIFNldCA9ICdTZXQnLFxyXG4gICAgLyoqIOacgOmrmCAqL1xyXG4gICAgVG9wID0gJ1RvcCcsXHJcbiAgICAvKiog5Yqg6L296aG16Z2iICovXHJcbiAgICBMb2FkaW5nID0gJ0xvYWRpbmcnLFxyXG4gICAgLyoqIOWOn+eUnyAqL1xyXG4gICAgTmF0aXZlID0gJ05hdGl2ZScsXHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICogVUnljIXnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGR1VJUGFjayB7XHJcbiAgICAvLyDljIXot6/lvoRcclxuICAgIHByaXZhdGUgcGFja1BhdGg6IHN0cmluZztcclxuICAgIC8vIOWFtuS7lui1hOa6kOaVsOmHj1xyXG4gICAgcHJpdmF0ZSBhdGxpYXNDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YyFXHJcbiAgICAgKiBAcGFyYW0gX3BhY2tVcmwg5YyF5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX2F0bGlhc0NvdW50IOWbvumbhuaVsOmHj1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcGFja1VybDogc3RyaW5nLCBfYXRsaWFzQ291bnQ6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrUGF0aCA9IF9wYWNrVXJsO1xyXG4gICAgICAgIHRoaXMuYXRsaWFzQ291bnQgPSBfYXRsaWFzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICB0aGlzLmdldFJlc1VSTChfdXJscyk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDJEQXN5bmMoX3VybHMsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOaciei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHVybHMg6L6T5Ye65pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZXNVUkwodXJsczogYW55W10pIHtcclxuICAgICAgICAvL+WKoOWFpeWMheWQjVxyXG4gICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArICcuJyArIF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSk7XHJcbiAgICAgICAgLy/liqDovb3nurnnkIbpm4ZcclxuICAgICAgICBpZiAodGhpcy5hdGxpYXNDb3VudCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMC5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuYXRsaWFzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwX1wiICsgaSArIFwiLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBGR1VJIOagueeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVJvb3RNYW5hZ2VyIHtcclxuICAgIC8vVUnlsYLnuqd1aeWIl+ihqFxyXG4gICAgcHVibGljIHN0YXRpYyBsYXllclVJTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IGZndWkuR0NvbXBvbmVudCB9O1xyXG5cclxuICAgIC8vIOiOt+WPluafkOS4gOWxglVJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExheWVyVUkobGF5ZXJUeXBlOiBFVUlMYXllcik6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllclVJTGlzdFtsYXllclR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvLyDorr7nva7ljIXlkI3lkI7nvIBcclxuICAgICAgICBmZ3VpLlVJQ29uZmlnLnBhY2thZ2VGaWxlRXh0ZW5zaW9uID0gX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb247XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcbiAgICAgICAgLy/mt7vliqBGR1VJ5qC56IqC54K55oyJ6aG65bqP5pi+56S6XHJcbiAgICAgICAgdGhpcy5sYXllclVJTGlzdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVVSUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJVSUxpc3RbRVVJTGF5ZXJbX2ldXSA9IGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChuZXcgZmd1aS5HQ29tcG9uZW50KCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogZmd1aSDlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlUIHtcclxuICAgIC8qKiB1aeWxgue6p2tleSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlMYXllcktleTogc3ltYm9sID0gU3ltYm9sKCdVSUxheWVyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeWxgue6p++8jOmZpOS6hmZndWnmoLnnrqHnkIblmajlm57osIPnlKjvvIzlhbbku5bnmoTlnLDmlrnor7fkuI3opoHosIPnlKhcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyIOWxgue6pyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50LCBfbGF5ZXI6IEVVSUxheWVyKSB7XHJcbiAgICAgICAgX3VpW3RoaXMuVUlMYXllcktleV0gPSBfbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aeWxgue6p1xyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEByZXR1cm5zIHVp5bGC57qnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gX3VpW3RoaXMuVUlMYXllcktleV0gYXMgRVVJTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aemhtuWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJVG9wU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5aSn55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWF4KF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp5bqV5bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlEb3duU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5bCP55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWluKF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyIC0gMTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoLl1aeaOp+WItuWZqFxyXG4gKiDmiYDmnIl1aeaOp+WItuWZqOexu+Wei+exu+Wdh+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUm9vdFVJQ29uIHtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6VUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTaG93KC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZk5ldyDmmK/lkKbmlrDlu7pcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49VSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IEhpZGUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmRGVsZXRlIOaYr+WQpuWIoOmZpFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGUoX2lmRGVsZXRlOiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbn0iLCJpbXBvcnQgR2xvYmFsRDNFbnZpcm9ubWVudCBmcm9tIFwiLi9zY2VuZS9HbG9iYWxEM0Vudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICogM2TnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQzTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIOWIneWni+WMluWFqOWxgOeOr+WigyAqL1xyXG4gICAgICAgIEdsb2JhbEQzRW52aXJvbm1lbnQuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElTY2VuZUVudmlyb25tZW50IGZyb20gXCIuL0lTY2VuZUVudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICog5YWo5bGAM0Tnjq/looNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbEQzRW52aXJvbm1lbnQge1xyXG4gICAgLyoqIDNk5Zy65pmvICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX1NjZW5lM0Q6IExheWEuU2NlbmUzRDtcclxuICAgIC8qKiDmkYTlg4/mnLogKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fQ2FtZXJhOiBMYXlhLkNhbWVyYTtcclxuICAgIC8qKiDnga/lhYkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fTGlnaHQ6IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcblxyXG4gICAgLyoqIOiOt+WPliAzZOWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2NlbmUzRCgpOiBMYXlhLlNjZW5lM0Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fU2NlbmUzRDtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg5pGE5YOP5py6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDYW1lcmEoKTogTGF5YS5DYW1lcmEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fQ2FtZXJhO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDnga/lhYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExpZ2h0KCk6IExheWEuRGlyZWN0aW9uTGlnaHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fTGlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRW52aXJvbm1lbnQoKTogSVNjZW5lRW52aXJvbm1lbnQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLm1fU2NlbmUzRCxcclxuICAgICAgICAgICAgY2FtZXJhOiB0aGlzLm1fQ2FtZXJhLFxyXG4gICAgICAgICAgICBsaWdodDogdGhpcy5tX0xpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNEID0gTGF5YS5zdGFnZS5hZGRDaGlsZChuZXcgTGF5YS5TY2VuZTNEKSBhcyBMYXlhLlNjZW5lM0Q7XHJcbiAgICAgICAgdGhpcy5tX0NhbWVyYSA9IG5ldyBMYXlhLkNhbWVyYTtcclxuICAgICAgICB0aGlzLm1fTGlnaHQgPSBuZXcgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fQ2FtZXJhKTtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fTGlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVQb29sIGZyb20gXCJzcmMvX1QvR2FtZVQvR2FtZVBvb2xcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBWM1V0aWxzIGZyb20gXCJzcmMvX1QvVXRpbHMvVjNVdGlsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNDb25maWcsIElQcmVmYWJzRGlmZmVyQ29uZmlnLCBJUHJlZmFic0dhdGhlciB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog6IqC54K55bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlVCB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYr+mihOWItuS9k+mFjee9rlxyXG4gICAgICogQHBhcmFtIF9jb25maWcg6YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZQcmVmYWJzQ29uZmlnKF9jb25maWc6IElOb2RlQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChfY29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lICYmIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7oioLngrnmlbDmja7liJ3lp4vljJboioLngrlcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF90YXJnZXQg55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZShfc3ByOiBMYXlhLlNwcml0ZTNELCBfdGFyZ2V0OiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIsIF90YXJnZXQpO1xyXG4gICAgICAgIC8v6K6+572u5ZCN5a2XXHJcbiAgICAgICAgX3Nwci5uYW1lID0gX3RhcmdldC5uYW1lO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y+Y5o2i55u45YWz55qE5bGe5oCnXHJcbiAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7kvY3nva5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTkvY3nva5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbiwgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7ml4vovaxcclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTml4vovaxcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLmV1bGVyLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u57yp5pS+XHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k57yp5pS+XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUsIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6Kem5Y+R55uR5ZCsXHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgIC8v6K6+572u5beu5byCXHJcbiAgICAgICAgbGV0IF9wcmVmYWJDb25maWc6IElQcmVmYWJzQ29uZmlnID0gX3RhcmdldCBhcyBJUHJlZmFic0NvbmZpZztcclxuICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJOYW1lICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLCBfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKrnsr7ngbXlkozmupDnsr7ngbXnmoTlt67lvIJcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF9kaWZmZXIg5beu5byC5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNldERpZmZlcihfc3ByOiBMYXlhLlNwcml0ZTNELCBfZGlmZmVyOiBJUHJlZmFic0RpZmZlckNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7lt67lvIInLCBfc3ByLCBfZGlmZmVyKTtcclxuICAgICAgICAvL+iOt+WPluS4gOS4quS4tOaXtuWQkemHj1xyXG4gICAgICAgIGxldCBfY2VudHJlVjM6IExheWEuVmVjdG9yMyA9IEdhbWVQb29sLmdldFYzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfZGlmZiBvZiBfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLmdldENoaWxkQXQoX2RpZmYuaW5kZXgpIGFzIExheWEuU3ByaXRlM0QsIF9kaWZmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlua6kOWPmOaNolxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtOiBMYXlhLlZlY3RvcjNbXSA9IFtHYW1lUG9vbC5nZXRWMygpLCBHYW1lUG9vbC5nZXRWMygpLCBHYW1lUG9vbC5nZXRWMygpXTtcclxuICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5wb3NpdGlvbiwgX3RyYW5zZm9ybVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLmV1bGVyLCBfdHJhbnNmb3JtWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0uc2NhbGUsIF90cmFuc2Zvcm1bMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5pyJdHJhbnNmb3Jt5bGe5oCnXHJcbiAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24sIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMF0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5ldWxlciwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVsxXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzJdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zue5pS25Li05pe25ZCR6YePXHJcbiAgICAgICAgR2FtZVBvb2wucmVjeWNsZVYzKC4uLltfY2VudHJlVjMsIC4uLl90cmFuc2Zvcm1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumihOWItuS9k+WQjeWtl1xyXG4gICAgICogQHBhcmFtIF9wcmVmYWJzTmFtZXMg6L6T5Ye655qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIC8v5Y676YeNXHJcbiAgICAgICAgICAgIGlmICghX3ByZWZhYnNOYW1lcy5pbmNsdWRlcyhfcHJlZmFiTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIF9wcmVmYWJzTmFtZXMucHVzaChfcHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpui/mOacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7roioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZSDniLboioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZE5vZGUoX25vZGU6IExheWEuTm9kZSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnLCBfcHJlZmFiczogSVByZWZhYnNHYXRoZXIpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5LiN5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBSZXNMb2FkLkdldFJlcyhFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChfcHJlZmFiTmFtZSkpIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIF9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX3ByZWZhYnNbX3ByZWZhYk5hbWVdID0gX3ByZWZhYnNbX3ByZWZhYk5hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0ucHVzaChfc3ByKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTm9kZShfbm9kZSwgaXRlbSwgX3ByZWZhYnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJU2NlbmVDb25maWcgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSBcIi4vU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma8g5a6e5L6LXHJcbiAqIOagueaNruaMh+WumueahOWcuuaZr+mFjee9ruihqOaehOW7uuWcuuaZr1xyXG4gKiAqIOWPr+S7pee7p+aJv+atpOexu+iHquWumuS5ieWcuuaZr1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xyXG4gICAgLyoqIOWcuuaZr+WQjeWtlyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zY2VuZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiog546v5aKDICovXHJcbiAgICBwcm90ZWN0ZWQgbV9lbnZpcm9ubWVudDogSVNjZW5lRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgLyoqIOWcuuaZr+mFjee9ruS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lQ29uZmlnOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSU5vZGVDb25maWcsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOWcuuaZr+iKgueCueWunuS+i+e8k+WtmCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTm9kZXM6IFNjZW5lTm9kZVtdID0gW107XHJcblxyXG4gICAgLyoqIOWcuuaZr+S4reWtmOWcqOeahG5vZGXoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9vblNjZW5lTm9kZXM6IFNldDxTY2VuZU5vZGU+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/phY3nva4gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVDb25maWcoKTogSVNjZW5lQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W546v5aKDICovXHJcbiAgICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2Vudmlyb25tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/lvZPliY3lrZjlnKjnmoToioLngrnliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgb25TY2VuZU5vZGVzKCk6IFNjZW5lTm9kZVtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubV9vblNjZW5lTm9kZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lTmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9zY2VuZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fc2NlbmVOYW1lID0gX3NjZW5lTmFtZTtcclxuICAgICAgICAvL+agueaNruWcuuaZr+WQjeWtl+ivu+WPlumFjee9ruihqOS/oeaBr1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Yid5aeL5YyW5Zy65pmv55qE5ZCN5a2X77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfZGF0YTogSU5vZGVDb25maWdbXSA9IENvbmZpZ1QuZ2V0Q29uZmlnSnNvbkRhdGEoRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTCh0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcucm9vdCk7XHJcbiAgICAgICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5qC56IqC54K55LiL55qE6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZUNvbmZpZ1tfZGF0YVtfaV0ubmFtZV0gPSBfZGF0YVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+iOt+WPluWcuuaZr+aVsOaNruWksei0pS0+JywgdGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u546v5aKD77yM6buY6K6k5Li65YWo5bGAM2Tnjq/looPvvIzlj6/ku6Xoh6rlrprkuYnnjq/looNcclxuICAgICAgICB0aGlzLm1fZW52aXJvbm1lbnQgPSBHbG9iYWxEM0Vudmlyb25tZW50LkVudmlyb25tZW50O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6IqC54K56YWN572uXHJcbiAgICAgKiBAcGFyYW0gX25vZGVOYW1lIOiKgueCueWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUNvbmZpZyhfbm9kZU5hbWU6IHN0cmluZyk6IElOb2RlQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnW19ub2RlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnLrmma/oioLngrlcclxuICAgICAqIEBwYXJhbSBfbmFtZSDoioLngrnlkI3lrZfvvIzlj6/ku6XlpJrkuKrkuIDotbfmnoTlu7pcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lTm9kZShfbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBTY2VuZU5vZGUge1xyXG4gICAgICAgIGxldCBfbmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbmFtZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKF9uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaCguLi5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWdbXSA9IFtdO1xyXG4gICAgICAgIF9uYW1lcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLnB1c2godGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+acieS4quWcuuaZr+iKgueCueayoeacieaJvuWIsCcsIGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfbm9kZUNvbmZpZy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfojrflj5blnLrmma/oioLngrnml7bvvIzkuIDkuKrphY3nva7kv6Hmga/pg73msqHmib7liLAnLCBfbmFtZXMpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WcqOe8k+WtmOS4reaJvlxyXG4gICAgICAgIGxldCBfX25vZGVDb25maWc6IElOb2RlQ29uZmlnW107XHJcbiAgICAgICAgbGV0IF9hO1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyID0gdGhpcy5tX3NjZW5lTm9kZXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9fbm9kZUNvbmZpZyA9IGl0ZW0ubm9kZUNvbmZpZ3M7XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5sZW5ndGggIT0gX19ub2RlQ29uZmlnLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICAgICAgX2EgPSB7fTtcclxuICAgICAgICAgICAgX25vZGVDb25maWcuZm9yRWFjaCgoX28pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2FbX28ubmFtZV0gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hW19vLm5hbWVdID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX28ubmFtZV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9fbm9kZUNvbmZpZy5mb3JFYWNoKChfX28pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2FbX19vLm5hbWVdID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfYVtfX28ubmFtZV0gPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FbX19vLm5hbWVdLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gX2EpIHtcclxuICAgICAgICAgICAgICAgIF9udW1iZXIgKz0gX2FbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfbnVtYmVyID09IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9pbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lTm9kZXNbX2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9zY2VuZU5vZGU6IFNjZW5lTm9kZSA9IG5ldyBTY2VuZU5vZGUoX25vZGVDb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lTm9kZXMucHVzaChfc2NlbmVOb2RlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5b2T5YmN6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvmnoTlu7rml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRPbk5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuYWRkKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOW9k+WJjeiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5Yig6Zmk5pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlT25Ob2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmRlbGV0ZShfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7njq/looNcclxuICAgICAqIOS8muagueaNruW9k+WJjeWcuuaZr+S4reeOr+Wig+mFjee9ruiuvue9rueOr+Wig1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgbGV0IF9zY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgICAgICAvL+iuvue9ruWFqOWxgOaRhOWDj+aculxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmNhbWVyYSwgX3NjZW5lQ29uZmlnLmNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5YWo5bGA54Gv5YWJXHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5saWdodCkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5saWdodCwgX3NjZW5lQ29uZmlnLmxpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfbiwgX25vZGUpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRQcm9ncmVzcyhfbiwgX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS0tLS0g5Zue6LCD5Ye95pWwXHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqIOiuvue9rueOr+Wig+WQjuaJp+ihjOeahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zZXRFbnZpcm9ubWVudCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K55Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHsgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv6IqC54K5XHJcbiAqIOeUqOadpeaehOW7uuWcuuaZr+iKgueCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlIHtcclxuICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZTogU2NlbmU7XHJcbiAgICAvKiog5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwcml2YXRlIG1faWZEZWxldGU6IGJvb2xlYW47XHJcbiAgICAvKiog6IqC54K56YWN572u5L+h5oGv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW107XHJcbiAgICAvKiog6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fbm9kZTogTGF5YS5Ob2RlO1xyXG4gICAgLyoqIOmihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnNOYW1lczogc3RyaW5nW107XHJcbiAgICAvKiog6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFiczogSVByZWZhYnNHYXRoZXI7XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwcml2YXRlIG1faWZMb2FkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiDojrflj5bmiYDlsZ7lnLrmma8gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6IqC54K56YWN572u5L+h5oGvICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGVDb25maWdzKCk6IElOb2RlQ29uZmlnW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZUNvbmZpZ3M7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZEZWxldGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5Zy65pmv6IqC54K5ICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGUoKTogTGF5YS5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnMoKTogSVByZWZhYnNHYXRoZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFicztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFic05hbWUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFic05hbWVzO1xyXG4gICAgfVxyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHVibGljIGdldCBpZkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblnLrmma/oioLngrnlrp7kvotcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZ3Mg6IqC54K56YWN572u5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lIOaJgOWxnuWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdLCBfc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgLy/pu5jorqTkuLrliKDpmaTnirbmgIFcclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncyA9IF9ub2RlQ29uZmlncztcclxuICAgICAgICAvL+aPkOWPlumihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzTmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBOb2RlVC5nZXRQcmVmYWJzTmFtZXModGhpcy5tX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZXNVUkw6IHN0cmluZ1tdID0gdGhpcy5tX3ByZWZhYnNOYW1lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQzREFzeW5jKF9wcmVmYWJOYW1lc1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAobikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyhuKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW25dO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXmnoTlu7pcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNCdWlsZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8U2NlbmVOb2RlPiB7XHJcbiAgICAgICAgdGhpcy5tX2lmTG9hZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNjZW5lTm9kZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3luY0xvYWQoX29uUHJvZ3Jlc3MpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lmTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WQkeWcuuaZr+S8oOWHuuWKoOi9vei/m+W6plxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5sb2FkUHJvZ3Jlc3MoX24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu6XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmFkZE9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG5ldyBMYXlhLk5vZGU7XHJcbiAgICAgICAgLy/mt7vliqDliLDmiYDlsZ7lnLrmma/njq/looPkuK1cclxuICAgICAgICB0aGlzLm1fc2NlbmUuZW52aXJvbm1lbnQuc2NlbmUuYWRkQ2hpbGQodGhpcy5tX25vZGUpO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0ge307XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICB0aGlzLm1fbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgTm9kZVQuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIHRoaXMubV9wcmVmYWJzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkxvYWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv6IqC54K56L+Y5Zyo5p6E5bu65Y206K+V5Zu+5Yig6Zmk44CCJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmRlbGV0ZU9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWfuuexu+aVsOaNrlxyXG4gKiAhIOWPquiDveWHuueOsOaVsOaNruWxgumdoueahOS4nOilv1xyXG4gKiDmlbDnu4TvvIzlr7nosaHvvIzlgLwgKOaVsOWtl++8jOWtl+espuS4su+8jOW4g+WwlOWAvClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIlxyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+aVsOaNruS7o+eQhlxyXG4gKiDmiYDmnInlhbPkuo7ku6PnkIbmlbDmja7nmoTnsbvpg73ku47ov5nph4znu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiB7XHJcbiAgICAvKiog5pWw5o2u5qih5p2/ICovXHJcbiAgICBwcml2YXRlIGRhdGFUZW1wbGF0ZTogeyBuZXcoKTogRGF0YSB9O1xyXG5cclxuICAgIC8qKiDmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDmlbDmja7ku6PnkIblt6XlhbcgKi9cclxuICAgIHByb3RlY3RlZCBtX29iamVjdFByb3h5VDogT2JqZWN0UHJveHlUO1xyXG5cclxuICAgIC8qKiDpnIDopoHkv53lrZjnmoTmlbDmja4gKi9cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNldFByb3h5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTZXRQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaVsOaNruS7o+eQhuWZqFxyXG4gICAgICog6YCa6L+H6L+Z5Liq5pWw5o2u5Luj55CG5Zmo5Y+v5Lul5re75Yqg5Luj55CG5pWw5o2u77yM5ZKM5re75Yqg5pWw5o2u55uR5ZCs5Zue6LCDIFvphY3lkIggcm9vdERhdGEg5L2/55SoXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdFByb3h5VCgpOiBPYmplY3RQcm94eVQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fb2JqZWN0UHJveHlUO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrmlrDnmoTmlbDmja5cclxuICAgICAqIOeUqOS6jumHjeaehOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+WmguaenOayoeacieaVsOaNruaooeadv+eahOivnVxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLDmlbDmja7mqKHmnb/vvIHor7fkvb/nlKjmlbDmja7mqKHmnb/oo4XppbDlmajoo4XppbDor6XnsbsnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5kYXRhVGVtcGxhdGUoKSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0RGF0YSgpO1xyXG59IiwiaW1wb3J0IE1kNSBmcm9tICcuL01kNSc7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tICcuL0Jhc2VEYXRhUHJveHknO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSAnLi9CYXNlRGF0YSc7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tICdzcmMvQ29uZmlnL19NYWluQ29uZmlnJztcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tICcuL09iamVjdFByb3h5VCc7XHJcblxyXG4vKipcclxuICog5Z+657G75pys5Zyw5pWw5o2u5Luj55CG77yM6YCa6L+H5q2k57G75Y+v5Lul6K6/6Zeu5pys5Zyw5L+d5a2Y55qE5pWw5o2uXHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUxvY2FsRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a+55q+U5pWw5o2uXHJcbiAgICAgKiDpu5jorqTkuLp0cnVl77yM5aaC5p6c5Li655yf5b2T5Li657q/5LiK5qih5byP5pe25Lya55Sf5oiQ5LiA5Liq5Yqg5a+G55qE5a+55q+U5pWw5o2u77yM6Ziy5q2i55So5oi35pS55Yqo5pys5Zyw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaWZEaWZmZXJEYXRhOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDojrflj5bkv53lrZjlkI3np7BcclxuICAgICAqIOm7mOiupOi/lOWbnuexu+WQje+8jOWPr+S7pemHjeWGmVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9zYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6buY6K6k6L+U5Zue57G75ZCNXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS/neWtmOaVsOaNrueahOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+mhueebruWQjeWtlyArIOS/neWtmOWQjeWtlyArIOmhueebrueJiOacrFxyXG4gICAgICAgIHJldHVybiBfTWFpbkNvbmZpZy5OYW1lICsgJy0nICsgdGhpcy5fc2F2ZU5hbWUgKyAnLScgKyBfTWFpbkNvbmZpZy5WZXJzaW9ucyArIChfTWFpbkNvbmZpZy5PbkxpbmUgPyAnXm9uJyA6ICdedGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWvueavlOaVsOaNrueahOS/neWtmOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgZGlmZmVyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdCh0aGlzLnNhdmVOYW1lICsgJ19fdmVyaWZ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8v6K6w5b2V5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5fcmVhZERhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhuWMheijheaVsOaNrlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluaVsOaNruS7o+eQhuW3peWFt1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgICAgICAvL+a3u+WKoOiuvue9ruebkeWQrFxyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgdGhpcy5fZGF0YVNldE1vbml0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Yid5aeL5YyW5pys5Zyw5pWw5o2u5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWujOaIkO+8jOe7p+aJv+S9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKiDmlbDmja7ooqvorr7nva7nm5HlkKwgKi9cclxuICAgIHByaXZhdGUgX2RhdGFTZXRNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvliqjkv53lrZjmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYEg6buY6K6k5Li6dHJ1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2F2ZShfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEsIF9pZkNsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5L+d5a2Y5omn6KGM6Zif5YiXICovXHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1F1ZXVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgICAqIEBwYXJhbSBtX2RhdGEg5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2F2ZShtX2RhdGE6IERhdGEsIF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8v5re75Yqg5pe26Ze05Yik5patXHJcbiAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrVGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZmQ5rWBXHJcbiAgICAgICAgaWYgKCFfaWZDbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlKys7XHJcbiAgICAgICAgICAgIC8v6ZmQ5rWB77yM5q+P5LiA5qyh5a6P5Lu75Yqh5Y+q5L+d5a2Y5LiA5qyh5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5oqK5L+d5a2Y5Lu75Yqh5rOo5YaM6L+b5b6u5Lu75Yqh5YiX6KGo77yM5bCG5Lya5Zyo5pys5qyh5pWw5o2u5L+u5pS555qE5a6P5Lu75Yqh5a6M5oiQ5ZCO5bm25Zyo5LiL5qyh5a6P5Lu75Yqh5byA5aeL5YmN6KKr5YWo6YOo5omn6KGMXHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZS0tO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNruWJjScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrUXVldWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgIHByaXZhdGUgX3NhdmUobV9kYXRhPzogRGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja4nKTtcclxuICAgICAgICAvL+W6j+WIl+WMllxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkobV9kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5zYXZlTmFtZSwganNvbik7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlckpzb24gPSB0aGlzLmdldERpZmZlckRhdGEoanNvbik7XHJcbiAgICAgICAgICAgIC8v5L+d5a2Y5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5kaWZmZXJOYW1lLCBfZGlmZmVySnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKSAtIHRoaXMubV9zYXZlVG9EaXNrVGltZTtcclxuICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPSAwO1xyXG4gICAgICAgIC8v5Yik5pat5pe26Ze05beuXHJcbiAgICAgICAgaWYgKF90aW1lID4gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/kv53lrZjml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7juacrOWcsOiOt+WPluaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfcmVhZERhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgLy/or7vlj5bmnKzlnLDmlbDmja5cclxuICAgICAgICBsZXQgcmVhZFN0ciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5zYXZlTmFtZSk7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+WvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5kaWZmZXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlmZmVyRGF0YShyZWFkU3RyKSAhPSBfZGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluS4gOS4quaWsOeahOWunuS+i1xyXG4gICAgICAgIGxldCBfc2F2ZURhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaVsOaNruaYr+WQpuiiq+evoeaUuVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlYWRTdHIpO1xyXG4gICAgICAgICAgICAgICAgLy/nlKjmnKzlnLDnmoTmlbDmja7loavlhYXlvZPliY3mlbDmja5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBfc2F2ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2F2ZURhdGFba2V5XSA9IGpzb25EYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2F2ZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blubbkv53lrZjkuIDkuKrmlrDmlbDmja5cclxuICAgIHByaXZhdGUgX3NhdmVOZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIGxldCBtX2RhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+S/neWtmOaVsOaNru+8jOS4jemZkOa1gVxyXG4gICAgICAgIHRoaXMuc2F2ZShtX2RhdGEgYXMgRGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG1fZGF0YSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aSE55CG5a+55q+U5pWw5o2uXHJcbiAgICBwcml2YXRlIGdldERpZmZlckRhdGEoX3N0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuepulxyXG4gICAgICAgIGlmICghX3N0cmluZykgcmV0dXJuICcnO1xyXG4gICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdChfc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aVsOaNruWNleWQkeWKoOWvhlxyXG4gICAgcHJpdmF0ZSBlbmNyeXB0KF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfZW5jcnlwdFN0cjogc3RyaW5nID0gYExheWFNaW5pR2FtZS0ke3RoaXMuc2F2ZU5hbWV9OiR7X3N0cmluZ31gO1xyXG4gICAgICAgIC8v5Yik5pat6IO95ZCm5L2/55SobWQ1XHJcbiAgICAgICAgaWYgKE1kNS5pZlVzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWQ1Lmhhc2hTdHIoX2VuY3J5cHRTdHIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/kuI3nlKjku7vkvZXliqDlr4ZcclxuICAgICAgICAgICAgcmV0dXJuICdub0VuY3J5cHQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tIFwiLi9CYXNlRGF0YVByb3h5XCI7XHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2u5Luj55CG5Z+657G7XHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNob3J0RGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKiDkuLTml7bmlbDmja7pu5jorqTkuI3orr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluaVsOaNruWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5aSE55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVCB7XHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruaooeadv+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9kYXRhIOaVsOaNruaooeadv1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlRGF0YVRlbXBsYXRlKF9kYXRhOiB7IG5ldygpOiBCYXNlRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruaVsOaNruaooeadv1xyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLmRhdGFUZW1wbGF0ZSA9IF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBUeXBlU2NyaXB0IE1kNeWKoOWvhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWQ1IHtcclxuICAgIC8qKiDog73lkKbkvb/nlKggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZVc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIE9uZSB0aW1lIGhhc2hpbmcgZnVuY3Rpb25zXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaEFzY2lpU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZEFzY2lpU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG4gICAgLy8gUHJpdmF0ZSBTdGF0aWMgVmFyaWFibGVzXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0ZUlkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGJ1ZmZlcjMySWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4Q2hhcnMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhPdXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLy8gUGVybWFuZW50IGluc3RhbmNlIGlzIHRvIHVzZSBmb3Igb25lLWNhbGwgaGFzaGluZ1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25lUGFzc0hhc2hlciA9IG5ldyBNZDUoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaGV4KHg6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGMgPSBNZDUuaGV4Q2hhcnM7XHJcbiAgICAgICAgY29uc3QgaG8gPSBNZDUuaGV4T3V0O1xyXG4gICAgICAgIGxldCBuO1xyXG4gICAgICAgIGxldCBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGo7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gaSAqIDg7XHJcbiAgICAgICAgICAgIG4gPSB4W2ldO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgODsgaiArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAxICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAwICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9tZDVjeWNsZSh4OiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXksIGs6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSkge1xyXG4gICAgICAgIGxldCBhID0geFswXTtcclxuICAgICAgICBsZXQgYiA9IHhbMV07XHJcbiAgICAgICAgbGV0IGMgPSB4WzJdO1xyXG4gICAgICAgIGxldCBkID0geFszXTtcclxuICAgICAgICAvLyBmZigpXHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1swXSAtIDY4MDg3NjkzNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzFdIC0gMzg5NTY0NTg2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzJdICsgNjA2MTA1ODE5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzNdIC0gMTA0NDUyNTMzMCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s0XSAtIDE3NjQxODg5NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzVdICsgMTIwMDA4MDQyNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1s2XSAtIDE0NzMyMzEzNDEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbN10gLSA0NTcwNTk4MyB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s4XSArIDE3NzAwMzU0MTYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s5XSAtIDE5NTg0MTQ0MTcgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTBdIC0gNDIwNjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTFdIC0gMTk5MDQwNDE2MiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1sxMl0gKyAxODA0NjAzNjgyIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMTNdIC0gNDAzNDExMDEgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTRdIC0gMTUwMjAwMjI5MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxNV0gKyAxMjM2NTM1MzI5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICAvLyBnZygpXHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxXSAtIDE2NTc5NjUxMCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzZdIC0gMTA2OTUwMTYzMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzExXSArIDY0MzcxNzcxMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1swXSAtIDM3Mzg5NzMwMiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s1XSAtIDcwMTU1ODY5MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzEwXSArIDM4MDE2MDgzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTVdIC0gNjYwNDc4MzM1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzRdIC0gNDA1NTM3ODQ4IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzldICsgNTY4NDQ2NDM4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTRdIC0gMTAxOTgwMzY5MCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzNdIC0gMTg3MzYzOTYxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzhdICsgMTE2MzUzMTUwMSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxM10gLSAxNDQ0NjgxNDY3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMl0gLSA1MTQwMzc4NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzddICsgMTczNTMyODQ3MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1sxMl0gLSAxOTI2NjA3NzM0IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICAvLyBoaCgpXHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbNV0gLSAzNzg1NTggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbOF0gLSAyMDIyNTc0NDYzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxMV0gKyAxODM5MDMwNTYyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxNF0gLSAzNTMwOTU1NiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxXSAtIDE1MzA5OTIwNjAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbNF0gKyAxMjcyODkzMzUzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1s3XSAtIDE1NTQ5NzYzMiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTBdIC0gMTA5NDczMDY0MCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxM10gKyA2ODEyNzkxNzQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMF0gLSAzNTg1MzcyMjIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzNdIC0gNzIyNTIxOTc5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1s2XSArIDc2MDI5MTg5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzldIC0gNjQwMzY0NDg3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzEyXSAtIDQyMTgxNTgzNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTVdICsgNTMwNzQyNTIwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1syXSAtIDk5NTMzODY1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICAvLyBpaSgpXHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMF0gLSAxOTg2MzA4NDQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbN10gKyAxMTI2ODkxNDE1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxNF0gLSAxNDE2MzU0OTA1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s1XSAtIDU3NDM0MDU1IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1sxMl0gKyAxNzAwNDg1NTcxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzNdIC0gMTg5NDk4NjYwNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTBdIC0gMTA1MTUyMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMV0gLSAyMDU0OTIyNzk5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s4XSArIDE4NzMzMTMzNTkgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTVdIC0gMzA2MTE3NDQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzZdIC0gMTU2MDE5ODM4MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMTNdICsgMTMwOTE1MTY0OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbNF0gLSAxNDU1MjMwNzAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTFdIC0gMTEyMDIxMDM3OSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMl0gKyA3MTg3ODcyNTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzldIC0gMzQzNDg1NTUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuXHJcbiAgICAgICAgeFswXSA9IGEgKyB4WzBdIHwgMDtcclxuICAgICAgICB4WzFdID0gYiArIHhbMV0gfCAwO1xyXG4gICAgICAgIHhbMl0gPSBjICsgeFsyXSB8IDA7XHJcbiAgICAgICAgeFszXSA9IGQgKyB4WzNdIHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9idWZmZXJMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogSW50MzJBcnJheSA9IG5ldyBJbnQzMkFycmF5KDQpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyOiBBcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig2OCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI4OiBVaW50OEFycmF5O1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyMzI6IFVpbnQzMkFycmF5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjggPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIsIDAsIDY4KTtcclxuICAgICAgICB0aGlzLl9idWZmZXIzMiA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9idWZmZXIsIDAsIDE3KTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuc2V0KE1kNS5zdGF0ZUlkZW50aXR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFyIHRvIGNvZGUgcG9pbnQgdG8gdG8gYXJyYXkgY29udmVyc2lvbjpcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9jaGFyQ29kZUF0XHJcbiAgICAvLyAjRXhhbXBsZS4zQV9GaXhpbmdfY2hhckNvZGVBdF90b19oYW5kbGVfbm9uLUJhc2ljLU11bHRpbGluZ3VhbC1QbGFuZV9jaGFyYWN0ZXJzX2lmX3RoZWlyX3ByZXNlbmNlX2VhcmxpZXJfaW5fdGhlX3N0cmluZ19pc191bmtub3duXHJcbiAgICBwdWJsaWMgYXBwZW5kU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBjb2RlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYpICsgMHhDMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZSAmIDB4M0YgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweEQ4MDAgfHwgY29kZSA+IDB4REJGRikge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIpICsgMHhFMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9ICgoY29kZSAtIDB4RDgwMCkgKiAweDQwMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAtIDB4REMwMCkgKyAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDEwRkZGRikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5pY29kZSBzdGFuZGFyZCBzdXBwb3J0cyBjb2RlIHBvaW50cyB1cCB0byBVKzEwRkZGRicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTgpICsgMHhGMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA+PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgICAgIGJ1ZkxlbiAtPSA2NDtcclxuICAgICAgICAgICAgICAgIGJ1ZjMyWzBdID0gYnVmMzJbMTZdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQXNjaWlTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oc3RyLmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBzdHIuY2hhckNvZGVBdChqKyspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEJ5dGVBcnJheShpbnB1dDogVWludDhBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihpbnB1dC5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gaW5wdXRbaisrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBzID0gc2VsZi5fc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcjogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBzZWxmLl9idWZmZXI4KSxcclxuICAgICAgICAgICAgYnVmbGVuOiBzZWxmLl9idWZmZXJMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogc2VsZi5fZGF0YUxlbmd0aCxcclxuICAgICAgICAgICAgc3RhdGU6IFtzWzBdLCBzWzFdLCBzWzJdLCBzWzNdXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBidWYgPSBzdGF0ZS5idWZmZXI7XHJcbiAgICAgICAgY29uc3QgeCA9IHN0YXRlLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLl9zdGF0ZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBzdGF0ZS5idWZsZW47XHJcbiAgICAgICAgc1swXSA9IHhbMF07XHJcbiAgICAgICAgc1sxXSA9IHhbMV07XHJcbiAgICAgICAgc1syXSA9IHhbMl07XHJcbiAgICAgICAgc1szXSA9IHhbM107XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyOFtpXSA9IGJ1Zi5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5kKHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgY29uc3QgaSA9IChidWZMZW4gPj4gMikgKyAxO1xyXG4gICAgICAgIGxldCBkYXRhQml0c0xlbjtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSBidWZMZW47XHJcblxyXG4gICAgICAgIGJ1ZjhbYnVmTGVuXSA9IDB4ODA7XHJcbiAgICAgICAgYnVmOFtidWZMZW4gKyAxXSA9IGJ1ZjhbYnVmTGVuICsgMl0gPSBidWY4W2J1ZkxlbiArIDNdID0gMDtcclxuICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkuc3ViYXJyYXkoaSksIGkpO1xyXG5cclxuICAgICAgICBpZiAoYnVmTGVuID4gNTUpIHtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIGZpbmFsIGNvbXB1dGF0aW9uIGJhc2VkIG9uIHRoZSB0YWlsIGFuZCBsZW5ndGhcclxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1heSBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcclxuICAgICAgICBkYXRhQml0c0xlbiA9IHRoaXMuX2RhdGFMZW5ndGggKiA4O1xyXG4gICAgICAgIGlmIChkYXRhQml0c0xlbiA8PSAweEZGRkZGRkZGKSB7XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGRhdGFCaXRzTGVuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhQml0c0xlbi50b1N0cmluZygxNikubWF0Y2goLyguKj8pKC57MCw4fSkkLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTYpO1xyXG4gICAgICAgICAgICBjb25zdCBoaSA9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDE2KSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gbG87XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE1XSA9IGhpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmF3ID8gdGhpcy5fc3RhdGUgOiBNZDUuX2hleCh0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5qOA5p+lTWQ15piv5ZCm5Y+v55SoXHJcbmlmIChNZDUuaGFzaFN0cignaGVsbG8nKSAhPT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xyXG4gICAgLy/orr7nva7kuI3og73kvb/nlKhcclxuICAgIE1kNS5pZlVzZSA9IGZhbHNlO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybignTWQ1IHNlbGYgdGVzdCBmYWlsZWQuJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIOWvueixoeS7o+eQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJveHlUIHtcclxuICAgIC8qKiDnm5HlkKzliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9tb25pdG9yTGlzdDoge1xyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzln58gKi9cclxuICAgICAgICBfdGhpczogYW55LFxyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5UgKi9cclxuICAgICAgICBfYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgLyoqIOa6kOWvueixoSAqL1xyXG4gICAgICAgIF9vYmo/OiBvYmplY3QsXHJcbiAgICAgICAgLyoqIOmUruWAvCAqL1xyXG4gICAgICAgIF9rZXk/OiBzdHJpbmcsXHJcbiAgICB9W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOebkeWQrFxyXG4gICAgICog55uR5ZCs5p+Q5Liq5a+56LGh55qE5p+Q5Liq5bGe5oCn5piv5ZCm5Y+R55Sf5pu05pS5XHJcbiAgICAgKiDlpoLmnpzlj6/pgInlsZ7mgKfpg73kuI3loavnmoTor53liJnnm5HlkKzlhajpg6jnm5HlkKzmlbDmja7lsZ7mgKfmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfdGhpcyDnm5HlkKzop6blj5Hlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5VcclxuICAgICAqIEBwYXJhbSBfb2JqIOebruagh+Wvueixoe+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWGheWuueabtOaUuVxyXG4gICAgICogQHBhcmFtIF9rZXkg6ZSu5ZCN77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRNb25pdG9yPE8gZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBPPihfdGhpczogYW55LCBfYmFjazogRnVuY3Rpb24sIF9vYmo/OiBPLCBfa2V5PzogSykge1xyXG4gICAgICAgIC8v5re75Yqg5Yiw55uR5ZCs5YiX6KGoXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBfdGhpcyxcclxuICAgICAgICAgICAgX2JhY2ssXHJcbiAgICAgICAgICAgIF9vYmosXHJcbiAgICAgICAgICAgIF9rZXk6IF9rZXkgYXMgc3RyaW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhck1vbml0b3IoX3RoaXM6IGFueSwgX2JhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdCA9IHRoaXMubV9tb25pdG9yTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEoXHJcbiAgICAgICAgICAgICAgICBpdGVtLl90aGlzID09IF90aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj6/pgInnmoTlm57osINcclxuICAgICAgICAgICAgICAgICAgICAmJiBfYmFjayA/IGl0ZW0uX2JhY2sgPT0gX2JhY2sgOiB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX28g5rqQ5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eTxEYXRhIGV4dGVuZHMgb2JqZWN0PihfbzogRGF0YSk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRQcm94eShfbykgYXMgRGF0YTtcclxuICAgIH1cclxuICAgIC8v6YWN5ZCI6K6+572u5Luj55CGXHJcbiAgICBwcml2YXRlIF9zZXRQcm94eShfbyk6IG9iamVjdCB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mma7pgJrlgLznsbvlnovlkozmlrnms5VcclxuICAgICAgICBpZiAodHlwZW9mIF9vID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgX28gIT0gXCJvYmplY3RcIiB8fCAhX28pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9vO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+WPr+i/reS7o+WvueixoeWSjOaWueazlVxyXG4gICAgICAgIGlmICghX29bU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4gICAgICAgICAgICAvL+mBjeWOhuWvueixoeiuvue9ruS7o+eQhlxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICAgICAgX29bX2ldID0gdGhpcy5fc2V0UHJveHkoX29bX2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i/lOWbnuacgOe7iOeahOS7o+eQhuWvueixoVxyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShfbywge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqICBzZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v5L+u5pS55bGe5oCnXHJcbiAgICAgICAgICAgICAgICBsZXQgX2lmOiBib29sZWFuID0gUmVmbGVjdC5zZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9pZikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5piv5LiN5piv5pWw57uE55qEbGVuZ3Ro5bGe5oCn6KKr5L+u5pS5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoQXJyYXkuaXNBcnJheSh0cmFwVGFyZ2V0KSAmJiBrZXkgPT0gJ2xlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pZjtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogZ2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoe+8iOmAmuW4uOaYr+S7o+eQhu+8iVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5bGe5oCnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKlxyXG4gICAgICog5Luj55CG5a+56LGh6KKr6K6+572u5pe255qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Luj55CG5a+56LGh6KKr6K6+572uJywgdHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGxldCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIC8v5omn6KGM55uR5ZCsXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy/lhYjliKTmlq3ku6PnkIbnm67moIdcclxuICAgICAgICAgICAgaWYgKGl0ZW0uX29iaiAmJiBpdGVtLl9vYmogIT0gcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fa2V5ICYmIGl0ZW0uX2tleSAhPSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICBpdGVtLl9iYWNrLmNhbGwoaXRlbS5fdGhpcywgLi4uX2FyZ3VtZW50cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0dhbWVDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDmoLnosIPor5XnsbvvvIzmiYDmnInosIPor5Xnsbvlv4XpobvnlLHmraTnu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEZWJ1ZyB7XHJcbiAgICAvKiog5YmN57yAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFByZWZpeDogc3RyaW5nID0gJyREZWJ1Zyc7XHJcblxyXG4gICAgLyoqIOagueiwg+ivleWvueixoSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWJ1Z09iajogYW55ID0ge307XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5ZCN5a2X77yM55SoIFdpbmRvd1vliY3nvIAgKyBfbmFtZV0g6K6/6ZeuXHJcbiAgICAgKiDlj6/ku6Xnu6fmib/mm7TmlLnov5nkuKrlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBfbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBfaWZJbml0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuIDkuKrosIPor5Xlr7nosaFcclxuICAgICAqIEBwYXJhbSBfa2V5IGtleVxyXG4gICAgICogQHBhcmFtIF9pdGVtIOivpeWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSXRlbShfa2V5OiBzdHJpbmcsIF9pdGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAoIV9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2lmSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZkluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBCYXNlRGVidWcuRGVidWdPYmpbdGhpcy5fbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW19rZXldID0gX2l0ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+V5qih5byPXHJcbmlmIChfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAvL+azqOWGjOWFqOWxgOiwg+ivleWvueixoVxyXG4gICAgd2luZG93W0Jhc2VEZWJ1Zy5QcmVmaXhdID0gQmFzZURlYnVnLkRlYnVnT2JqO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+W8gOWQr+iwg+ivleaooeW8j++8jOmAmui/hycsIEJhc2VEZWJ1Zy5QcmVmaXgsICforr/pl64nKSk7XHJcbn0iLCJcclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoFxyXG4gKiAhIOWPquiDvea4uOaIj+WGheS9v+eUqO+8jOS4jeimgeWcqOW3peWFt+S4reS9v+eUqFxyXG4gKiAhIOWwvemHj+WPquWcqOmHjeWkjeWIm+W7uumdnuW4uOWkmuWvueixoeeahOWcsOaWueS9v+eUqO+8jOS4jeeEtuS8muW+l+S4jeWBv+WksVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBvb2wge1xyXG4gICAgLyoqIOWvueixoeaxoOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbExpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW08VCBleHRlbmRzIGFueT4oX3NpZ246IEVHYW1lUG9vbFNpZ24pOiBUIHtcclxuICAgICAgICAvL+WFiOWIsOacrOWcsOWvueixoeaxoOWIl+ihqOS4reafpeaJvlxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xMaXN0W19zaWduXSAmJiB0aGlzLnBvb2xMaXN0W19zaWduXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2xMaXN0W19zaWduXS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3NpZ24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjMpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjIpIGFzIGFueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtuWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIOWbnuaUtuagh+ivhlxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWbnuaUtuWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVJdGVtKF9zaWduOiBFR2FtZVBvb2xTaWduLCAuLi5faXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPqua3u+WKoOS4jeWMheWQq+eahOWFg+e0oFxyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dLmluY2x1ZGVzKF9vKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0ucHVzaChfbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYzKCk6IExheWEuVmVjdG9yMyB7XHJcbiAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMz4oRUdhbWVQb29sU2lnbi52Myk7XHJcbiAgICAgICAgX3YzLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYzXHJcbiAgICAgKiBAcGFyYW0gX3YzIOW+heWbnuaUtueahHYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYzKC4uLl92M3M6IExheWEuVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYzLCAuLi5fdjNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjIoKTogTGF5YS5WZWN0b3IyIHtcclxuICAgICAgICBsZXQgX3YyOiBMYXlhLlZlY3RvcjIgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IyPihFR2FtZVBvb2xTaWduLnYyKTtcclxuICAgICAgICBfdjIuc2V0VmFsdWUoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djJcclxuICAgICAqIEBwYXJhbSBfdjIg5b6F5Zue5pS255qEdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjIoLi4uX3YyczogTGF5YS5WZWN0b3IyW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjIsIC4uLl92MnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGg5qCH6K+GXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFR2FtZVBvb2xTaWduIHtcclxuICAgIC8qKiAz57u05ZCR6YePICovXHJcbiAgICB2MyxcclxuICAgIC8qKiAy57u05ZCR6YePICovXHJcbiAgICB2MixcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgICAgICAvL+aJp+ihjOWKoOi9veS5i+WJjeeahOeUn+WRveWRqOacn1xyXG4gICAgICAgIHRoaXMubG9hZEJlZm9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+W8gOWni+WKoOi9vea4uOaIj+WIneWni+WMlui1hOa6kCcpKTtcclxuICAgICAgICAvL+iOt+WPluWKoOi9vemhuVxyXG4gICAgICAgIGxldCBfcmVzTG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gdGhpcy5nZXRMb2FkSXRlbXMoKTtcclxuICAgICAgICAvL+W8guatpeWKoOi9veWKoOi9vemhuVxyXG4gICAgICAgIFJlc0xvYWRHcm91cC5sb2FkQXN5bmMoX3Jlc0xvYWRJdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQbGFuKGkpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMubG9hZEl0ZW1zQ29tLCB1bmRlZmluZWQsIGZhbHNlKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+a4uOaIj+WKoOi9veWujOaIkCcpKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb20oKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WKoOi9veS5i+WJjVxyXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Yid5aeL5YyW5LiA5Lqb5Lic6KW/XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkQmVmb3JlKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldExvYWRJdGVtcygpOiBSZXNMb2FkSXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRQbGFuKF9pOiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZENvbSgpIHsgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWQjeWtl+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUtleVJlc05hbWUge1xyXG4gICAgLyoqIOagueebruW9lSAqL1xyXG4gICAgUm9vdFJlcyA9ICdyZXMnLFxyXG4gICAgLyoqIOmFjee9ruihqOebruW9lSAqL1xyXG4gICAgQ29uZmlnSnNvbiA9ICdDb25maWdKc29uJyxcclxuICAgIC8qKiDlrZfkvZPnm67lvZUgKi9cclxuICAgIEZvbnQgPSAnRm9udCcsXHJcbiAgICAvKiogRkdVSei1hOa6kOebruW9lSAqL1xyXG4gICAgRkdVSSA9ICdGR1VJJyxcclxuICAgIC8qKiDlhbPljaHphY3nva7ooajnm67lvZUgKi9cclxuICAgIFNjZW5lSnNvbiA9ICdTY2VuZUpzb24nLFxyXG4gICAgLyoqIOWFtuWug+ebruW9lSAqL1xyXG4gICAgT3RoZXIgPSAnT3RoZXInLFxyXG4gICAgLyoqIGljb27nm67lvZUgKi9cclxuICAgIGljb24gPSAnaWNvbicsXHJcbiAgICAvKiogaW1n55uu5b2VICovXHJcbiAgICBpbWcgPSAnaW1nJyxcclxuICAgIC8qKiDpn7PkuZDmlofku7bnm67lvZUgKi9cclxuICAgIG11c2ljID0gJ211c2ljJyxcclxuICAgIC8qKiDpn7PmlYjmlofku7bnm67lvZUgKi9cclxuICAgIHNvdW5kID0gJ3NvdW5kJyxcclxuICAgIC8qKiDnmq7ogqTmlofku7bnm67lvZUgKi9cclxuICAgIHNraW4gPSAnc2tpbicsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tICcuL0VLZXlSZXNOYW1lJztcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSAnLi9LZXlSZXNNYW5hZ2VyJztcclxuLyoqXHJcbiAqIOW/heimgeeahOa4uOaIj+i1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXNzZW50aWFsUmVzVXJscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbPljaHphY3nva7mlofku7ZcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTY2VuZUNvbmZpZ1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuU2NlbmVKc29uKSArIF9uYW1lICsgJy5qc29uJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqEpzb27mlofku7ZSVUxcclxuICAgICAqIEBwYXJhbSBfbmFtZSDphY3nva7ooajlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWdKc29uVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Db25maWdKc29uKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRkdVSeWMhVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWMheWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUlQYWNrVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5GR1VJKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2X5L2T5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5a2X5L2T5ZCN5a2X77yM5Yqg5ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9udFVSTChfbmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZvbnQpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miYDmnInpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgIHByaXZhdGUgc3RhdGljIF9BbGxTY2VuZVByZWZhYnNOYW1lczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8v6aKE5Yi25L2T5Zy65pmv57yT5a2YXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJlZmFic1NjZW5lQ2FjaGU6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIOmihOWItuS9k+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbkvZPlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJVUkwocHJlZmFiOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5YWI5Zyo57yT5a2Y5Lit5p+l5om+5Zy65pmv5ZCN5a2XXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6K+l6aKE5Yi25L2T5Zyo5ZOq5Liq5Zy65pmv5Lit6KKr5a+85Ye655qEXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXS5pbmRleE9mKCdAJyArIHByZWZhYiArICdAJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdID0gX2k7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoX2kpICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWcqOWcuuaZr+aJvuWIsOmihOWItuS9kycsIHByZWZhYiwgJ+WPr+iDveaYr+ayoeacieWvvOWHuuWcuuaZr+mihOWItuS9k+WIl+ihqOWvvOiHtOeahOOAgicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWcuuaZr+mihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9vIOWcuuaZr+mihOWItuS9k+mbhuWQiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFByZWZhYlNjZW5lTmFtZXMoX286IGFueSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldID0gX29bX2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcIi4uL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcblxyXG4vKipcclxuICog5YWz6ZSu6LWE5rqQ54K55YiX6KGo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlSZXNNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBLZXlSZXNNYW5hZ2VyO1xyXG5cclxuICAgIC8v5YWz6ZSu6LWE5rqQ5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fS2V5UmVzTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/ms6jlhozlhbPplK7otYTmupDnm67lvZVcclxuICAgICAgICB0aGlzLm1fS2V5UmVzTGlzdCA9IHtcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlJvb3RSZXNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuQ29uZmlnSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Db25maWdKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRkdVSV06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5GR1VJICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuU2NlbmVKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLlNjZW5lSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZvbnRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRm9udCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLk90aGVyXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nLFxyXG4gICAgICAgICAgICAvL+WFtuS7lui3r+W+hFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaWNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmljb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pbWddOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pbWcgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5tdXNpY106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLm11c2ljICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc291bmRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5zb3VuZCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNraW5dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5za2luICsgJy8nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tX0tleVJlc0xpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWtmOWcqOafkOS4quWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZLZXlSZXMoX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KS5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT0gX2tleTtcclxuICAgICAgICB9KSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFs+mUrueCuei1hOa6kOeahOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVzVVJMKF9rZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB5re75Yqg5YWz6ZSu6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7lgLxcclxuICAgICAqIEBwYXJhbSBfc3RyaW5nIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFJlc1VybChfa2V5OiBzdHJpbmcsIF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldID0gX3N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX3N0ciDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlZGl0S2V5UmVzTGlzdChfa2V5OiBzdHJpbmcsIF9zdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfcmVwbGFjZTogc3RyaW5nID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfcmVwbGFjZSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+S/ruaUuei1hOa6kOi3r+W+hOWksei0pe+8jOayoeaciScgKyBfa2V5ICsgJ+i/meS4quWFs+mUrui3r+W+hO+8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abv+aNouaJgOaciei1hOa6kOi3r+W+hOS4reeahOWFs+mUrueCuei3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXSA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXS5yZXBsYWNlKF9yZXBsYWNlLCBfc3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EJywgX3JlcGxhY2UsICfmm7/mjaLmiJAnLCBfc3RyKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZCB7XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6E5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCh1cmxzOiBhbnksIG1vZGVsOiBFUmVzTG9hZE1vZGVsLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXJscykpIHtcclxuICAgICAgICAgICAgLy/ljrvpmaTomZrlgLxcclxuICAgICAgICAgICAgdXJscyA9IHVybHMuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuacieWGheWuuemcgOimgeWKoOi9vVxyXG4gICAgICAgIGlmICghdXJscyB8fCAoQXJyYXkuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIHN3aXRjaCAobW9kZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQzOlxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGXmmK8zROeahOaOpeWPo++8jOmAgueUqOS6jjNE6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5jcmVhdGUodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDI6XHJcbiAgICAgICAgICAgICAgICAvL2xvYWTmmK8yZOeahOaOpeWPo++8jOmAgueUqOS6jjJk6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoQgXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMiwgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0RBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkM0QodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDJEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5vQ2xvbmUg5piv5ZCm5LiN6I635Y+W5YWL6ZqG55qE6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmVzKHJlc1VybDogc3RyaW5nLCBub0Nsb25lOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCBnZXRSZXMgPSBMYXlhLmxvYWRlci5nZXRSZXMocmVzVXJsKTtcclxuICAgICAgICBpZiAoIWdldFJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoXCLotYTmupDlsJrmnKrliqDovb1cIiwgcmVzVXJsKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vQ2xvbmUgPyBnZXRSZXMgOiBnZXRSZXMuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuaMh+Wumui1hOa6kOWcsOWdgOe8k+WtmOOAglxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDbGVhclJlcyhyZXNVcmw6IHN0cmluZykge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyUmVzKHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIEVSZXNMb2FkTW9kZWwge1xyXG4gICAgLyoqIDNEIOi1hOa6kCAqL1xyXG4gICAgRDMsXHJcbiAgICAvKiogMmQg6LWE5rqQICovXHJcbiAgICBEMixcclxufSIsImltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vee7hFxyXG4gKiDotJ/otKPlpJrkuKrotYTmupDliqDovb3pobnnmoTnu5/kuIDliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRHcm91cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+S9nOS4uuWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaXRlbXM6IFJlc0xvYWRJdGVtW10sIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/msqHmnInliqDovb3poblcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mtYXmi7fotJ3vvIzpmLLmraLmsaHmn5PmupDliJfooahcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICAgICAgLy/lvILmraXliJfooajplb/luqZcclxuICAgICAgICBsZXQgX2xlbmd0aDogbnVtYmVyID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIC8v5LiA5q2l5LiA5q2l5raI6LS55byC5q2l5YiX6KGoXHJcbiAgICAgICAgbGV0IF9mOiBGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBvbkl0ZW06IFJlc0xvYWRJdGVtID0gaXRlbXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIG9uSXRlbS5sb2FkQXN5bmMoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65oC76L+b5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChfbGVuZ3RoIC0gaXRlbXMubGVuZ3RoIC0gMSkgKyBpKSAvIF9sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65Y2V5Liq5Yqg6L296aG55Yqg6L295a6M5oiQ5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5hcmdzID0gW29uSXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9mKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOmAkuW9kuWKoOi9veaWueazlVxyXG4gICAgICAgIF9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+WPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3luYyhpdGVtczogUmVzTG9hZEl0ZW1bXSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzLCBfb25JdGVtQ29tKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZXNMb2FkLCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwiLi9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L296aG5XHJcbiAqIOi0n+i0o+S4gOe7hOi1hOa6kOWIl+ihqOeahOWKoOi9vVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZEl0ZW0ge1xyXG4gICAgLyoqIOWKoOi9veaooeW8jyAqL1xyXG4gICAgcHJpdmF0ZSBtX2xvYWRNb2RlbDogRVJlc0xvYWRNb2RlbDtcclxuXHJcbiAgICAvKiog5Yqg6L295YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBhbnk7XHJcblxyXG4gICAgLyoqIOWKoOi9veWujOaIkOWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX2NvbUJhY2s6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICAvKiog6LWE5rqQ6Lev5b6E5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcmVzOiBhbnk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWFs+mUrumUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9yZXMg6LWE5rqQ5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX21vZGUg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7plK7lgLxcclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDml7bnmoTlm57osIPlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9yZXM6IGFueSwgX21vZGU6IEVSZXNMb2FkTW9kZWwsIF9rZXk/OiBhbnksIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tX3JlcyA9IF9yZXM7XHJcbiAgICAgICAgdGhpcy5tX2xvYWRNb2RlbCA9IF9tb2RlO1xyXG4gICAgICAgIHRoaXMubV9rZXkgPSBfa2V5O1xyXG4gICAgICAgIHRoaXMubV9jb21CYWNrID0gX2NvbUJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQob25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2NvbUJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIHRoaXMubV9jb21CYWNrLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwic3JjL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEQyTWFuYWdlciBmcm9tIFwiLi9EMi9EMk1hbmFnZXJcIjtcclxuaW1wb3J0IEQzTWFuYWdlciBmcm9tIFwiLi9EMy9EM01hbmFnZXJcIjtcclxuaW1wb3J0IF9UQ29uZmlnIGZyb20gXCIuL19UQ29uZmlnXCI7XHJcblxyXG4vKiogXHJcbiAqIOahhuaetuWFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE1haW4ge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YWl5qGG5p625L+h5oGvXHJcbiAgICAgICAgd2luZG93W19UQ29uZmlnLk5hbWVdID0ge1xyXG4gICAgICAgICAgICAvKiog5qGG5p626YWN572uICovXHJcbiAgICAgICAgICAgIC4uLl9UQ29uZmlnLFxyXG4gICAgICAgICAgICAvKiogbGF5YemFjee9riAqL1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiB7IC4uLkdhbWVDb25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOmhueebrumFjee9riAqL1xyXG4gICAgICAgICAgICBfbWFpbkNvbmZpZzogeyAuLi5fTWFpbkNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog5ri45oiP6YWN572uICovXHJcbiAgICAgICAgICAgIF9nYW1lQ29uZmlnOiB7IC4uLl9HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIneWni+WMluWQhOenjeWQhOagt+eahOeuoeeQhuWZqFxyXG4gICAgICAgIEQzTWFuYWdlci5pbml0KCk7Ly8zROeuoeeQhuWZqFxyXG4gICAgICAgIEQyTWFuYWdlci5pbml0KCk7Ly91aeeuoeeQhuWZqFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWNleS+i+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VUIHtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlS2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+exu+ijhemlsOWZqFxyXG4gICAgICogISDooqvoo4XppbDnmoTnsbvnmoTmnoTpgKDmlrnms5XkuI3og73ml7ZwdWJsaWPnsbvlnovnmoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/mt7vliqDkuIDkuKrnm5HlkKzlsZ7mgKdcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgJ2luc3RhbmNlJywge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz5LqOdjPlkJHph4/nmoTlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYzVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4fkuIDkuKrlrZfnrKbkuLLmnoTlu7p2M+WQkemHj1xyXG4gICAgICogQHBhcmFtIHN0ciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVZlY3RvcjMoc3RyOiBzdHJpbmcsIF9vdXRWMzogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJywnKTtcclxuICAgICAgICBfb3V0VjMuc2V0VmFsdWUoTnVtYmVyKHN0cnNbMF0pLCBOdW1iZXIoc3Ryc1sxXSksIE51bWJlcihzdHJzWzJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5WM+WQkemHj+mVv+W6plxyXG4gICAgICogQHBhcmFtIF92MyDnm67moIflkJHph49cclxuICAgICAqIEBwYXJhbSBfbCDnm67moIfplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWM0xlbmd0aChfdjM6IExheWEuVmVjdG9yMywgX2w6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF92Myk7XHJcbiAgICAgICAgaWYgKF9sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgX2E6IG51bWJlciA9IF9sIC8gX2xlbmd0aDtcclxuICAgICAgICAgICAgX3YzLnggPSBfdjMueCAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueSA9IF92My55ICogX2E7XHJcbiAgICAgICAgICAgIF92My56ID0gX3YzLnogKiBfYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnmj5LlgLznp7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX2xlcnAg5o+S5YC856e75Yqo5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICogQHBhcmFtIF9pbml0aWFsTGVuZ3RoIOWIneWni+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdExlcnBNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfbGVycDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMywgX2luaXRpYWxMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuZGlzdGFuY2UoX3BvcywgX3RyYWdldFBvdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMubGVycChfcG9zLCBfdHJhZ2V0UG90LCBfbGVycCwgX291dFYzKTtcclxuICAgICAgICAvL+i/lOWbnui/m+W6plxyXG4gICAgICAgIHJldHVybiAxIC0gKF9kaXN0YW5jZSAvIF9pbml0aWFsTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueWMgOmAn+enu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfc3BlZWQg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdENvbnN0YW50U3BlZWRNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfc3BlZWQ6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfaWZFbmQ6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IF9kaWZmZXJWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnN1YnRyYWN0KF90cmFnZXRQb3QsIF9wb3MsIF9kaWZmZXJWMyk7XHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfZGlmZmVyVjMpO1xyXG4gICAgICAgIGlmIChfZGlzdGFuY2UgPiBfc3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWM0xlbmd0aChfZGlmZmVyVjMsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55u45YqgXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfcG9zLCBfZGlmZmVyVjMsIF9vdXRWMyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2lmRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJvdGF0ZUF4aXNWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICog5peL6L2s5LiA5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX3YzIOmcgOimgeaXi+i9rOeahOmCo+S4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF9hbmdlciDml4vovazop5LluqZcclxuICAgICAqIEBwYXJhbSBfYXhpcyDml4vovazovbRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSb3RhdGVWMyhfdjM6IExheWEuVmVjdG9yMywgX2FuZ2VyOiBudW1iZXIsIF9heGlzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLnJvdGF0ZUF4aXNWMykge1xyXG4gICAgICAgIC8v5peL6L2s5Zub5YWD5pWwXHJcbiAgICAgICAgdmFyIHEgPSBuZXcgTGF5YS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgTGF5YS5RdWF0ZXJuaW9uLmNyZWF0ZUZyb21BeGlzQW5nbGUoX2F4aXMsIChfYW5nZXIgLyAxODApICogTWF0aC5QSSwgcSk7XHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnRyYW5zZm9ybVF1YXQoX3YzLCBxLCBfdjMpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOahhuaetumFjee9ruaWh+S7tlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RDb25maWcge1xyXG4gICAgLyoqIOWQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBOYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBaSE5hbWU6IHN0cmluZyA9IFwiTGF5YUJveOWwj+a4uOaIj1wiO1xyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWZXJzaW9uczogc3RyaW5nID0gXCIwLjAuMC4xXCI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9