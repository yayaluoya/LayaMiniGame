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
    /**
     * 返回场景个数
     */
    getSceneCount() {
        return Math.max(...this.m_dataList.map((item) => {
            return item.id;
        }));
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
/* harmony import */ var _Manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manager/AudioManager */ "./src/Game/Manager/AudioManager.ts");
/* harmony import */ var _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scene/SceneManager */ "./src/Game/Scene/SceneManager.ts");
/* harmony import */ var _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UICon/UIConManager */ "./src/Game/UICon/UIConManager.ts");
/* harmony import */ var _test_TestMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_test/TestMain */ "./src/Game/_test/TestMain.ts");







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
        _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_4__["default"].instance.init(); //场景管理器
        _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.init(); //ui控制器管理器
        _Data_DataManager__WEBPACK_IMPORTED_MODULE_1__["default"].instance.init(); //数据管理器
        //
        _Manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.init();
    }
    //进入游戏
    enterGame() {
        //进入游戏
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog('进入游戏'));
        // /**
        // TODO 进入测试模块
        _test_TestMain__WEBPACK_IMPORTED_MODULE_6__["default"].instance.start();
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
/* harmony import */ var src_WhiteScreenT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/WhiteScreenT */ "./src/WhiteScreenT.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_T/D2/FGUI/FGUIPack */ "./src/_T/D2/FGUI/FGUIPack.ts");
/* harmony import */ var src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_T/Main/BaseInitLoad */ "./src/_T/Main/BaseInitLoad.ts");
/* harmony import */ var src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_T/Res/ComResUrl */ "./src/_T/Res/ComResUrl.ts");
/* harmony import */ var src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_T/Res/EKeyResName */ "./src/_T/Res/EKeyResName.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_T/Res/KeyResManager */ "./src/_T/Res/KeyResManager.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/_T/Res/ResLoadItem */ "./src/_T/Res/ResLoadItem.ts");
/* harmony import */ var _ResE_EFont__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ResE/EFont */ "./src/Game/ResE/EFont.ts");
/* harmony import */ var _ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ResE/EMusics */ "./src/Game/ResE/EMusics.ts");
/* harmony import */ var _ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ResE/ESounds */ "./src/Game/ResE/ESounds.ts");
/* harmony import */ var _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../_config/BuildConfigTs */ "./src/Game/_config/BuildConfigTs.ts");
/* harmony import */ var _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../_prefabsName/_EAllScenePrefabsNames */ "./src/Game/_prefabsName/_EAllScenePrefabsNames.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");






















/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_9__["default"] {
    /** 白屏ui控制器 */
    // private m_initEmptyScreenUICon: InitEmptyScreenUICon;
    /** 初始化加载ui控制器 */
    // private m_initLoadUICon: InitLoadUICon;
    /**
     * 初始化
     */
    _init() {
        //初始化需要的ui控制器实例
        // this.m_initEmptyScreenUICon = new InitEmptyScreenUICon();
        // this.m_initLoadUICon = new InitLoadUICon();
        //设置路径
        for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_20__["_EAllScenePrefabsNames"]) {
            src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_11__["EKeyResName"].RootRes) + `${_i}/`); //注入预制体路径
        }
        //设置预制体场景对照
        src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_20__["_EAllScenePrefabsNames"]);
    }
    /**
     * 获取加载项列表
     */
    _getLoadItems() {
        let _loadItems = [];
        //获取fgui加载项
        this.immitFGUiLoadItems(_loadItems);
        //注入配置表加载项
        this.immitConfigLoadItems(_loadItems);
        //注入其他资源加载项
        this.immitOtherLoadItems(_loadItems);
        //
        return _loadItems;
    }
    //注入fgui的所有加载项
    immitFGUiLoadItems(_loadItems) {
        //先绑定所有ui
        this.FGUIBinder();
        //加载fgui包
        // _loadItems.push(this.getFGUILoadItems('InitEmptyScreen', undefined, Laya.Handler.create(this, this.initEmptyScreen)));//白屏ui包
        // _loadItems.push(this.getFGUILoadItems('InitLoad', 0, Laya.Handler.create(this, this.initLoad)));//加载界面包
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
        new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_8__["FGUIPack"](src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    addFGUIPackage(_name) {
        try {
            fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FGUIPackURL(_name));
        }
        catch (E) {
            console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__["default"].packWarn('FGUI添加包有问题。', _name));
        }
    }
    //注入配置表加载项
    immitConfigLoadItems(_loadItems) {
        //配置表
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [];
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_21__["_EAllExportSceneName"]) {
            sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_21__["_EAllExportSceneName"][_i]));
        }
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"]([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_6__["default"].BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__["default"].packLogLight('所有配置表内容：', _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig()));
        }), Laya.Handler.create(this, (i) => {
            // console.log('配置表加载进度', i);
        }, undefined, false)));
    }
    //注入其他资源加载项
    immitOtherLoadItems(_loadItems) {
        let _audios = [];
        for (let _i in _ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"]) {
            _ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_10__["default"].MusicURL(_ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"][_i]));
        }
        for (let _i in _ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"]) {
            _ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_10__["default"].SoundURL(_ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"][_i]));
        }
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_audios, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, 'audio', Laya.Handler.create(this, () => {
            console.log('所有音效资源：', _audios);
        })));
        let _font = [];
        for (let _i in _ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"]) {
            _ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"][_i] && _font.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FontURL(_ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"][_i]));
        }
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_font, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, 'font', Laya.Handler.create(this, () => {
            console.log('所有字体资源：', _font);
        })));
    }
    //白屏显示
    initEmptyScreen() {
        //显示白屏ui
        // this.m_initEmptyScreenUICon.Show();
    }
    //加载显示
    initLoad() {
        // this.m_initEmptyScreenUICon.Hide();//隐藏
        // this.m_initEmptyScreenUICon = null;//清除引用
        // //显示加载ui
        // this.m_initLoadUICon.Show();
    }
    /**
     * 加载进度
     * @param _i 进度值
     */
    _loadPlan(_i) {
        // console.log('游戏加载进度->', _i);
        // if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
        //     this.m_initLoadUICon.setPlan(_i);
        // }
        src_WhiteScreenT__WEBPACK_IMPORTED_MODULE_5__["default"].setPlan(_i);
    }
    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    _loadItemsCom(_resLoad) {
        //
    }
    /**
     * 加载完成
     */
    _loadCom() {
        // this.m_initLoadUICon.Hide();//隐藏
        // this.m_initLoadUICon = null;//清除引用
        src_WhiteScreenT__WEBPACK_IMPORTED_MODULE_5__["default"].close();
    }
}


/***/ }),

/***/ "./src/Game/Manager/AudioManager.ts":
/*!******************************************!*\
  !*** ./src/Game/Manager/AudioManager.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Res/ComResUrl */ "./src/_T/Res/ComResUrl.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/SetDataProxy */ "./src/Game/Data/SetDataProxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AudioManager_1;



/**
 * 音效管理类
 */
let AudioManager = AudioManager_1 = class AudioManager {
    //
    constructor() {
        //当前播放的音效列表
        this.m_onSoundList = new Set();
    }
    //初始化
    init() {
        //根据数据设置背景音乐和音效是否静音
        AudioManager_1.soundMuted = !_Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.data.ifOpenSound;
        AudioManager_1.musicMuted = !_Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.data.ifOpenMusic;
    }
    /**
     * 背景音乐和所有音效是否静音。
     */
    static set muted(value) {
        Laya.SoundManager.muted = value;
    }
    /**
     * 所有音效（不包括背景音乐）是否静音。
     */
    static set soundMuted(value) {
        Laya.SoundManager.soundMuted = value;
    }
    /**
     * 背景音乐（不包括音效）是否静音。
     */
    static set musicMuted(value) {
        Laya.SoundManager.musicMuted = value;
    }
    /**
     * 音效暂停
     */
    static pauseSound() {
        //暂停所有音效
        Laya.SoundManager.stopAllSound();
    }
    /**
     * 音效继续
     */
    static resumeSound() {
        //继续播放当前播放的音效
        this.instance.m_onSoundList.forEach((item) => {
            item.resume();
        });
    }
    /**
     * 暂停背景音乐
     */
    static pauseMusic() {
        Laya.SoundManager.stopMusic();
    }
    /**
     * 继续播放背景音乐
     */
    static resumeMusic() {
        this.instance.m_onBGM && this.instance.m_onBGM.resume();
    }
    /**
     * 设置音效音量
     * @param _n 音量 0~1
     * @param _url 资源地址
     */
    static setSoundVolume(_n = 1, _url) {
        Laya.SoundManager.setSoundVolume(_n, _url);
    }
    /**
     * 设置背景音乐音量
     * @param _n 音量 0~1
     */
    static setMusicVolume(_n = 1) {
        Laya.SoundManager.setMusicVolume(_n);
    }
    /**
     * 播放音效。音效可以同时播放多个。
     * @param name 音效名字
     * @param loops 循环次数,0表示无限循环。
     * @param complete 声音播放完成回调  Handler对象。
     * @param soundClass 使用哪个声音类进行播放，null表示自动选择。
     * @param startTime 声音播放起始时间。
     * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
     */
    static playSound(name, loops, complete, soundClass, startTime) {
        if (!name) {
            return;
        }
        let _sound = Laya.SoundManager.playSound(name, loops, complete, soundClass, startTime);
        this.instance.m_onSoundList.add(_sound);
        return _sound;
    }
    /**
     * 播放背景音乐。背景音乐同时只能播放一个，如果在播放背景音乐时再次调用本方法，会先停止之前的背景音乐，再播放当前的背景音乐。
     * @param name 背景音效名字
     * @param loops 循环次数,0表示无限循环。
     * @param complete 声音播放完成回调,complete 结果参数 true: 播放完成, false/undefined ：stop触发的complete。
     * @param startTime 声音播放起始时间。
     * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
     */
    static playMusic(name, loops, complete, startTime) {
        if (!name) {
            return;
        }
        let _music = Laya.SoundManager.playMusic(name, loops, complete, startTime);
        this.instance.m_onBGM = _music;
        return _music;
    }
    /**
     * 停止音效播放。
     * @param soundsName 音效名字
     */
    static stopSound(soundsName) {
        Laya.SoundManager.stopSound(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].SoundURL(soundsName));
    }
    /**
     * 停止背景音效播放。
     * @param musicName 音效名字
     */
    static stopMusic(musicName) {
        Laya.SoundManager.stopSound(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].MusicURL(musicName));
    }
};
AudioManager = AudioManager_1 = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], AudioManager);
/* harmony default export */ __webpack_exports__["default"] = (AudioManager);


/***/ }),

/***/ "./src/Game/ResE/EFont.ts":
/*!********************************!*\
  !*** ./src/Game/ResE/EFont.ts ***!
  \********************************/
/*! exports provided: EFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFont", function() { return EFont; });
/**
 * 字体资源枚举 (会预加载)
 * ! 必须是字符串，不能是数字否则会加上反射属性
 */
var EFont;
(function (EFont) {
    EFont["null"] = "";
    //
})(EFont || (EFont = {}));


/***/ }),

/***/ "./src/Game/ResE/EMusics.ts":
/*!**********************************!*\
  !*** ./src/Game/ResE/EMusics.ts ***!
  \**********************************/
/*! exports provided: EMusics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMusics", function() { return EMusics; });
/**
 * 所有背景音乐 (会预加载)
 * ! 必须是字符串，不能是数字否则会加上反射属性
 */
var EMusics;
(function (EMusics) {
    EMusics["null"] = "";
    //
})(EMusics || (EMusics = {}));


/***/ }),

/***/ "./src/Game/ResE/ESounds.ts":
/*!**********************************!*\
  !*** ./src/Game/ResE/ESounds.ts ***!
  \**********************************/
/*! exports provided: ESounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESounds", function() { return ESounds; });
/**
 * 所有音效 (会预加载)
 * ! 必须是字符串，不能是数字否则会加上反射属性
 */
var ESounds;
(function (ESounds) {
    ESounds["null"] = "";
    //音效
})(ESounds || (ESounds = {}));


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
        _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__["default"].instance.addItem('dataTest', _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data);
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

/***/ "./src/Game/_test/LibraryTest.ts":
/*!***************************************!*\
  !*** ./src/Game/_test/LibraryTest.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
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
        // console.log('时间工具', dayjs('2020/2/20'));
        // //这里只有本地访问才行，线上访问会跨域
        // axios.get<string>('http://baidu.com').then((data) => {
        //     console.log('请求工具请求百度网页', {
        //         string: data.data,
        //     });
        // });
        // //
        // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // console.log('_随机打乱数组', _.shuffle(a));
        // console.log('_随机取值数组', _.sample(a, 2));
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog('pako工具', typeof pako));
        console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog('axios工具', typeof axios));
    }
};
LibraryTest = __decorate([
    src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance(),
    __metadata("design:paramtypes", [])
], LibraryTest);
/* harmony default export */ __webpack_exports__["default"] = (LibraryTest);


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
        console.log('打包测试67');
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
        _LibraryTest__WEBPACK_IMPORTED_MODULE_5__["default"].instance.start();
        //配置表测试
        _ConfigTest__WEBPACK_IMPORTED_MODULE_3__["default"].instance.start();
        //打包测试
        _PackTest__WEBPACK_IMPORTED_MODULE_7__["default"].instance.start();
        //其他测试
        _OtherTest__WEBPACK_IMPORTED_MODULE_6__["default"].instance.start();
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
/* harmony import */ var _WhiteScreenT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WhiteScreenT */ "./src/WhiteScreenT.ts");
/* harmony import */ var _T_TMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_T/TMain */ "./src/_T/TMain.ts");




class Main {
    constructor() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].height);
        else
            Laya.init(_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].width, _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.bgColor = "#000000";
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
        /** 正式开始，加载白屏ui #28df99 */
        _WhiteScreenT__WEBPACK_IMPORTED_MODULE_2__["default"].load().then(() => {
            //框架入口
            new _T_TMain__WEBPACK_IMPORTED_MODULE_3__["default"]();
            //打开白屏
            _WhiteScreenT__WEBPACK_IMPORTED_MODULE_2__["default"].open().then(() => {
                //游戏入口
                new _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__["default"]();
            });
        });
    }
}
//激活启动类
new Main();


/***/ }),

/***/ "./src/WhiteScreenT.ts":
/*!*****************************!*\
  !*** ./src/WhiteScreenT.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WhiteScreenT; });
/**
 * 白屏工具
 */
class WhiteScreenT {
    /**
     * 加载
     */
    static load() {
        return new Promise((r) => {
            Laya.loader.load([
                "initLoad.json",
                'atlas/initLoad.atlas',
                'atlas/initLoad.png',
            ], Laya.Handler.create(this, () => {
                r();
            }));
        });
    }
    /**
     * 打开
     */
    static open() {
        return new Promise((r) => {
            //打开白屏ui
            Laya.Scene.open('initLoad.json', undefined, undefined, Laya.Handler.create(this, (_scene) => {
                this.m_scene = _scene;
                this.m_bg = this.m_scene.getChildByName('bg');
                this.updateView();
                //监听屏幕改变事件
                Laya.stage.on(Laya.Event.RESIZE, this, this.updateView);
                //
                this.openLater().then(r);
            }));
        });
    }
    /**
     * 打开之后的回调，可以在此加载分包
     */
    static openLater() {
        return Promise.resolve();
    }
    /**
     * 设置进度
     * @param _n 进度值
     */
    static setPlan(_n) {
        // console.log('设置进度', _n);
    }
    /**
     * 关闭
     */
    static close() {
        //删除场景
        this.m_scene && this.m_scene.destroy();
        this.m_scene = null;
        this.m_bg = null;
        //关闭监听事件
        Laya.stage.offAllCaller(this);
    }
    /**
     * 更新视图
     */
    static updateView() {
        let _width = Laya.stage.width;
        let _height = Laya.stage.height;
        //
        this.m_scene.width = _width;
        this.m_scene.height = _height;
        //
        this.m_bg.width = _width;
        this.m_bg.height = _height;
    }
}


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
/* harmony import */ var src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Utils/V3Utils */ "./src/_T/Utils/V3Utils.ts");


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
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.position, _spr.transform.localPosition);
            }
            //设置旋转
            if (!_target.transform.euler) {
                //默认旋转
                _spr.transform.localRotationEuler.setValue(0, 0, 0);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
            }
            //设置缩放
            if (!_target.transform.scale) {
                //默认缩放
                _spr.transform.localScale.setValue(1, 1, 1);
            }
            else {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.scale, _spr.transform.localScale);
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
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ._transform.position, _transform[0]);
            }
            if (_differ._transform.euler) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ._transform.euler, _transform[1]);
            }
            if (_differ._transform.scale) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ._transform.scale, _transform[2]);
            }
        }
        //判断是否有transform属性
        if (_differ.transform) {
            //
            if (_differ.transform.position) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ.transform.position, _centreV3);
                Laya.Vector3.add(_transform[0], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localPosition);
                _spr.transform.localPosition = _spr.transform.localPosition;
            }
            if (_differ.transform.euler) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ.transform.euler, _centreV3);
                Laya.Vector3.add(_transform[1], _centreV3, _centreV3);
                _centreV3.cloneTo(_spr.transform.localRotationEuler);
                _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
            }
            if (_differ.transform.scale) {
                src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_differ.transform.scale, _centreV3);
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
     * @param _getPrefabs 获取预制体的方法
     */
    static buildNode(_node, _nodeConfig, _prefabs, _getPrefabs) {
        if (!_nodeConfig) {
            return;
        }
        //先判断是不是预制体
        let _prefabName = _nodeConfig.prefabName;
        let _spr;
        if (_prefabName) {
            _spr = _getPrefabs(_prefabName);
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
                    this.buildNode(_spr, item, _prefabs, _getPrefabs);
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
/* harmony import */ var src_T_Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_T/Utils/ArrayUtils */ "./src/_T/Utils/ArrayUtils.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_com_BaseItemPool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_T/com/BaseItemPool */ "./src/_T/com/BaseItemPool.ts");









/**
 * 场景 实例
 * 根据指定的场景配置表构建场景
 * 本身继承自对象池基类，用来管理预制体精灵
 * * 可以继承此类自定义场景
 */
class Scene extends src_T_com_BaseItemPool__WEBPACK_IMPORTED_MODULE_8__["default"] {
    /**
     * 初始化
     * @param _sceneName 场景名字
     */
    constructor(_sceneName) {
        super();
        /** 场景配置信息 */
        this.m_sceneConfig = {};
        /** 场景节点实例缓存 */
        this.m_sceneNodesCache = new Map();
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
     * @param _findCache 是否在缓存中查找 true
     * @param _addCache 是否添加到缓存 true
     */
    getSceneNode(_name, _findCache = true, _addCache = true) {
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
        let _sceneNode;
        //判断是否在缓存中找
        if (_findCache) {
            for (let [_key, _value] of this.m_sceneNodesCache) {
                if (src_T_Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_6__["default"].ContentIfSame(_key, _names)) {
                    let _usable = _value.filter((item) => {
                        return item.ifDelete;
                    });
                    if (_usable.length > 0) {
                        _sceneNode = _usable.pop();
                    }
                    break;
                }
            }
        }
        //
        if (!_sceneNode) {
            //新建一个实例
            _sceneNode = new _SceneNode__WEBPACK_IMPORTED_MODULE_4__["default"](_nodeConfig, this);
            //判断是否添加到缓存
            if (_addCache) {
                let _if = false;
                for (let [_key, _value] of this.m_sceneNodesCache) {
                    //
                    if (src_T_Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_6__["default"].ContentIfSame(_key, _names)) {
                        _value.push(_sceneNode);
                        //
                        _if = true;
                        break;
                    }
                }
                if (!_if) {
                    this.m_sceneNodesCache.set(_names, [_sceneNode]);
                }
            }
        }
        //
        return _sceneNode;
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
     * 构建节点
     * 当这个场景下的某个节点被构建时会自动执行这个方法
     * ! 框架执行
     * @param _node 节点
     */
    buildNode(_node) {
        this.m_onSceneNodes.add(_node);
        //执行回调
        this._buildNode(_node);
    }
    /**
     * 删除节点
     * 当这个场景下的某个节点被删除时会自动执行这个方法，会在节点真正被删除前执行，可以在这里收集预制体。
     * ! 框架执行
     * @param _node 节点
     */
    deleteNode(_node) {
        this.m_onSceneNodes.delete(_node);
        //执行回调
        this._deleteNode(_node);
    }
    /**
     * 节点加载进度
     * 当这个场景下的某个节点被加载时，回调用这个回调传出加载进度
     * ! 框架执行
     * @param _n 进度值
     * @param _node 当前加载的节点
     */
    loadProgress(_n, _node) {
        // console.log(_n, _node);
        this._loadProgress(_n, _node);
    }
    /**
     * 获取预制体
     * 当当前场景下的节点被构建时，会从这里拿预制体，可以在这里收集预制体
     * ! 框架执行
     * @param _name 预制体名字
     */
    getPrefabs(_name) {
        return this._getPrefabs(_name);
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
    /**
     * 节点被构建的回调
     * @param _node 目标节点
     */
    _buildNode(_node) {
        // console.log('节点构建', _node);
    }
    /**
     * 节点被删除的回调
     * @param _node 目标节点
     */
    _deleteNode(_node) {
        // console.log('节点删除', _node);
    }
    /** 通过预制体名字获取预制体的回调 */
    _getPrefabs(_name) {
        // console.log('取预制体', _name);
        return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_7__["default"].GetRes(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_2__["default"].PrefabURL(_name));
    }
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
        //调用场景的回调
        this.m_scene.buildNode(this);
        this.m_node = new Laya.Node;
        //添加到所属场景环境中
        this.m_scene.environment.scene.addChild(this.m_node);
        this.m_prefabs = {};
        let _spr;
        this.m_nodeConfigs.forEach((item) => {
            _spr = new Laya.Sprite3D;
            this.m_node.addChild(_spr);
            _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].buildNode(_spr, item, this.m_prefabs, (_name) => {
                return this.m_scene.getPrefabs(_name);
            });
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
        //删除之前调用场景的回调，方便收集预制体
        this.m_scene.deleteNode(this);
        //
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
            // queueMicrotask(() => {//某些平台会不兼容
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
     * @param _type 该对象类型
     */
    addItem(_key, _item) {
        //判断是否开启了调试
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
        this._init();
    }
    /**
     * 加载
     * @param _comBack 加载完成回调
     */
    load(_comBack) {
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom('开始加载游戏初始化资源'));
        //执行加载之前的异步
        this._loadBefore().then(() => {
            //获取加载项
            let _resLoadItems = this._getLoadItems();
            //异步加载加载项
            _Res_ResLoadGroup__WEBPACK_IMPORTED_MODULE_1__["default"].loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
                this._loadPlan(i);
            }, undefined, false), Laya.Handler.create(this, this._loadItemsCom, undefined, false))
                .then(() => {
                console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom('游戏加载完成'));
                //
                this._loadCom();
                //
                _comBack && _comBack.run();
            });
        });
    }
    // * --------
    /**
     * 初始化
     */
    _init() { }
    /**
     * 游戏加载之前
     * 可以在这里先加载一些东西
     */
    _loadBefore() {
        return Promise.resolve();
    }
    /**
     * 获取加载项列表
     */
    _getLoadItems() {
        return [];
    }
    /**
     * 加载进度
     * @param _i 进度值
     */
    _loadPlan(_i) { }
    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    _loadItemsCom(_resLoad) { }
    /**
     * 加载完成
     */
    _loadCom() { }
}


/***/ }),

/***/ "./src/_T/Res/ComResUrl.ts":
/*!*********************************!*\
  !*** ./src/_T/Res/ComResUrl.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComResUrl; });
/* harmony import */ var _EKeyResName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EKeyResName */ "./src/_T/Res/EKeyResName.ts");
/* harmony import */ var _KeyResManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyResManager */ "./src/_T/Res/KeyResManager.ts");


/**
 * 公共资源路径
 */
class ComResUrl {
    /**
     * 音乐文件路径
     * @param name 文件名称
     * @param _ 文件后缀
     */
    static MusicURL(name, _ = '.mp3') {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].music) + name + _;
    }
    /**
     * 音效资源路径
     * @param name 音效名字
     * @param _ 文件后缀
     */
    static SoundURL(name, _ = '.mp3') {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].sound) + name + _;
    }
    /**
     * 图标资源路径
     * @param name 图标名称
     * @param _ 文件后缀
     */
    static IconURL(name, _ = '.png') {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].icon) + name + _;
    }
    /**
     * 图片资源路径
     * @param name 图片资源名字
     * @param _ 文件后缀
     */
    static ImgURL(name, _ = 'png') {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].img) + name + '.' + _;
    }
    /**
     * 皮肤资源路径
     * @param name 皮肤名称
     * @param _ 文件后缀
     */
    static SkinURL(name, _ = 'png') {
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].skin) + name + '.' + _;
    }
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
     * ! 这里是依次加载并不是同时加载的
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
     * @param _onProgress 加载进度回调
     */
    constructor(_res, _mode, _key, _comBack, _onProgress) {
        this.m_res = _res;
        this.m_loadModel = _mode;
        this.m_key = _key;
        this.m_comBack = _comBack;
        this.m_onProgress = _onProgress;
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
        //包装进度回调
        let __onProgress = _onProgress;
        if (__onProgress && this.m_onProgress) {
            __onProgress = Laya.Handler.create(this, (i) => {
                _onProgress.args = [i];
                _onProgress.run();
                this.m_onProgress.args = [i];
                this.m_onProgress.run();
            }, undefined, false);
        }
        else if (this.m_onProgress) {
            __onProgress = this.m_onProgress;
        }
        if (this.m_comBack) {
            if (!onCompleted) {
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, this.m_comBack, __onProgress);
            }
            else {
                _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                    this.m_comBack.run();
                    onCompleted.run();
                }), __onProgress);
            }
        }
        else {
            _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, onCompleted, __onProgress);
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
     * @param _ifPassive 是否被动访问的时候创建实例，为false的话会立即创建出实例
     * ! 被装饰的类的构造方法不能时public类型的
     */
    static DecorateInstance(_ifPassive = true) {
        return function (target) {
            if (_ifPassive) {
                //添加一个监听属性
                Object.defineProperty(target, InstanceT.InstanceName, {
                    get: function () {
                        if (!target[InstanceT.InstanceKey]) {
                            target[InstanceT.InstanceKey] = new target();
                        }
                        return target[InstanceT.InstanceKey];
                    }
                });
            }
            else {
                target[InstanceT.InstanceName] = new target();
            }
        };
    }
}
/** 单例属性名 */
InstanceT.InstanceKey = Symbol();
/** 单例属性名 */
InstanceT.InstanceName = 'instance';


/***/ }),

/***/ "./src/_T/Utils/ArrayUtils.ts":
/*!************************************!*\
  !*** ./src/_T/Utils/ArrayUtils.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayUtils; });
/**
 * 数组工具
 */
class ArrayUtils {
    /**
     * 判断两个数组内容是否相同
     * @param x x数组
     * @param y y数组
     */
    static ContentIfSame(x, y) {
        if (!(x) || !(y))
            return false;
        if (x.length != y.length)
            return false;
        //方法： 用一个mop来统计x数组各个元素出现的次数，再用y数组来递减各元素出现的次数，如果最终结果为0则两个数组相同
        let m = new Map();
        x.forEach((item) => {
            m.set(item, (m.has(item) ? m.get(item) : 0) + 1);
        });
        y.forEach((item) => {
            m.set(item, (m.has(item) ? m.get(item) : 0) - 1);
        });
        //只要其中一元素的统计不为0就返回false
        let b = true;
        for (let [_value, _number] of m) {
            if (_number != 0) {
                b = false;
                break;
            }
        }
        return b;
    }
    /**
     * 数组去重保留靠前的内容
     * @param arr 源数组
     */
    static Unique(arr) {
        return Array.from(new Set(arr));
    }
    /**
     * 数组去重保留靠后的内容
     * @param arr 源数组
     */
    static ReverseReserveUnique(arr) {
        return Array.from(new Set(arr.reverse())).reverse();
    }
    /**
     * 对象数组去重
     * @param arr 源数组
     * @param _F 获取对比键值函数
     */
    static ObjUnique(arr, _F) {
        for (let i = 0, len = arr.length; i < len; i++) {
            for (let j = i + 1, len = arr.length; j < len; j++) {
                if (_F(arr[i]) === _F(arr[j])) {
                    arr.splice(j, 1);
                    j--; // 每删除一个数j的值就减1
                    len--; // j值减小时len也要相应减1（减少循环次数，节省性能）   
                }
            }
        }
        return arr;
    }
    /**
     * 替换数组的某个元素
     * @param arr 源数组
     * @param oldObj 被替换的元素
     * @param newObj 替换元素
     */
    static Replace(arr, oldObj, newObj) {
        let index = arr.indexOf(oldObj);
        if (index < 0)
            return false;
        arr.splice(index, 1, newObj);
        return true;
    }
    /**
     * 删除一个元素并返回结果
     * @param arr 源数组
     * @param obj 删除目标对象
     */
    static RemoveItem(arr, obj) {
        let index = arr.indexOf(obj);
        if (index < 0)
            return false;
        arr.splice(index, 1);
        return true;
    }
    /**
     * 根据索引删除一个数据
     * @param arr 源数组
     * @param index 索引
     */
    static RemoveAt(arr, index) {
        if (arr.length <= index)
            return false;
        arr.splice(index, 1);
        return true;
    }
    /**
     * 数组是否包含某个数据
     * @param arr
     * @param obj
     */
    static Contains(arr, obj) {
        let index = arr.indexOf(obj);
        return index >= 0;
    }
    /**
     * 复制一个数组
     * @param arr 源数组
     */
    static Copy(arr) {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        return result;
    }
    /**
     * 随机打乱数组
     * @param _array 目标数组
     */
    static upsetArray(_array) {
        //乱序
        return _array.sort(() => {
            return Math.random() - 0.5;
        });
    }
    /**
     * 随机获取数组中的随机值，可指定长度
     * @param _array 原数组
     * @param _n 随机个数
     * @param _weight 权重列表
     */
    static RandomGet(_array, _n = 1, _weight = _array.map((item) => { return 1; })) {
        if (_array.length <= 0) {
            return;
        }
        let _rootArray = [];
        let _newArray = [];
        //权重索引列表
        let _indexArray = [];
        //找到最小的权重
        let _minWeight = _weight[0];
        _weight.forEach((item) => {
            _minWeight = Math.min(_minWeight, item);
        });
        _weight = _weight.map((item) => {
            return Math.floor(item * (1 / _minWeight));
        });
        _array.forEach((item, index) => {
            _rootArray.push(item);
            //
            for (let _i = 0; _i < _weight[index]; _i++) {
                _indexArray.push(index);
            }
        });
        let _index;
        for (let _i = 0; _i < _n; _i++) {
            if (_rootArray.length <= 0) {
                break;
            }
            _index = Math.floor(Math.random() * _indexArray.length);
            _indexArray = _indexArray.filter((item) => {
                return item != _index;
            });
            _newArray.push(_rootArray.splice(_indexArray[_index], 1)[0]);
        }
        //
        return _newArray;
    }
}


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
_TConfig.Versions = "0.0.0.2";


/***/ }),

/***/ "./src/_T/com/BaseItemPool.ts":
/*!************************************!*\
  !*** ./src/_T/com/BaseItemPool.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseItemPool; });
/**
 * 基类对象池
 */
class BaseItemPool {
    constructor() {
        /** 池子 */
        this.m_itemPool = {};
    }
    /** 获取对象池 */
    get itemPool() {
        return this.m_itemPool;
    }
    /**
     * 对象池是否有内容
     * @param _key key
     */
    poolHasItem(_key) {
        return Boolean(this.m_itemPool[_key] && this.m_itemPool[_key].length > 0);
    }
    /**
     * 从对象池中获取对象
     * @param _key key
     */
    getItemByPool(_key) {
        //先判断是否有内容
        if (this.poolHasItem(_key)) {
            return this.m_itemPool[_key].pop();
        }
        //
        return null;
    }
    /**
     * 添加对象进对象池
     * @param _key key
     * @param _item 对象
     */
    addItemToPool(_key, _item) {
        if (!this.m_itemPool[_key]) {
            this.m_itemPool[_key] = [];
        }
        this.m_itemPool[_key].push(_item);
        //去重
        this.m_itemPool[_key] = [...new Set(...this.m_itemPool[_key])];
    }
    /**
     * 清空对象池
     */
    emptyPool() {
        this.m_itemPool = {};
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VGb250LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRU11c2ljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fU2NlbmVOb2RlQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvQ29uZmlnVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9EYXRhVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9MaWJyYXJ5VGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9PdGhlclRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvUGFja1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1doaXRlU2NyZWVuVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0NvbmZpZ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRDJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUm9vdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9EM01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9EYXRhVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EZWJ1Zy9CYXNlRGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0dhbWVUL0dhbWVQb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0NvbVJlc1VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Ucy9JbnN0YW5jZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL1YzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL19UQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9jb20vQmFzZUl0ZW1Qb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUk47QUFBQTtBQUFBO0FBQXdDO0FBRXhDOztHQUVHO0FBQ1ksTUFBTSxXQUFXOztBQUM1QixlQUFlO0FBQ0Qsc0JBQVUsR0FB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QyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNULEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ1o7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUEyQixFQUFFLENBQTJCO1FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFnQk0sS0FBSztRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLHFHQUFxRztJQUNyRyxxSUFBcUk7SUFDOUgsU0FBUyxDQUFDLEdBQVc7UUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLENBQUMsQ0FBQztRQUVOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDekI7aUJBQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN6QztpQkFBTTtnQkFDSCxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzVFLElBQUksSUFBSSxHQUFHLFFBQVEsRUFBRTtvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2lCQUMzRTtnQkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN6QztZQUNELElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNs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QyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGFBQWEsQ0FBbUIsSUFBWTtRQUMvQyxVQUFVO1FBQ1YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQU8sQ0FBQztTQUMzQztRQUNELEVBQUU7UUFDRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUk7UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsIi8qKlxyXG4gKiDluLjph4/phY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9Db25zdENvbmZpZyB7XHJcbiAgICAvKiogZmd1aeebuOWFsyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJID0ge1xyXG4gICAgICAgIC8qKiDljIXlkI7nvIAgKi9cclxuICAgICAgICBwYWNrYWdlRmlsZUV4dGVuc2lvbjogJ2JpbicsXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCIuL19NYWluQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfR2FtZUNvbmZpZyB7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5ri45oiP5rWL6K+VICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmR2FtZVRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5rWL6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/osIPor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZEZWJ1ZzogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiB0cnVlO1xyXG59IiwiLyoqXHJcbiAqIOmhueebruacgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01haW5Db25maWcge1xyXG4gICAgLyoqIOa4uOaIj+aJgOWxnuWboumYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZWFtOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP5ZCN5a2X77yM5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTmFtZTogc3RyaW5nID0gJ0xheWFNaW5pR2FtZSc7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpITmFtZTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+ivtOaYjiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeHBsYWluOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIj++8jOivtOaYjuOAgic7XHJcbiAgICAvKiog5pWw5o2u54mI5pysIOWPr+S7peW4puWtl+avjeS9huaYr+WwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZlcnNpb25zOiBzdHJpbmcgPSAnMC4wLjAuMSc7XHJcbiAgICAvKiog5piv5ZCm5LiK57q/5Li6ZmFsc2XliJnmmK/lvIDlj5Hnjq/looMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT25MaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb21tb25CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ29tIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tcTNuZzl3XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ29tIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUNvbT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUNvbVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZGJtaTEzXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDdXN0b21zTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUVuZCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWxheGQxOVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUVuZCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVFbmQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVFbmRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMW9cIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUxvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXN5dGE5ZlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZU1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZU1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQYXVzZSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E1Z1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBhdXNlIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBhdXNlPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGF1c2VcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQbGF5IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXJcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQbGF5IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBsYXk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQbGF5XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU2V0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTR1XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU2V0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVNldD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVNldFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVN0YXJ0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTdGFydCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTdGFydD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVN0YXJ0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9VSUJ1dHRvbjpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fVUk6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Rlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Rlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fZGF0YVRlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fdGVzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1vOWpzOXhcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX1VJQnV0dG9uID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9VSSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fdGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX190ZXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fbG9va1ZBZDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fbG9va1ZBZFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19sb29rVkFkOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3NoYXJlOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaGFyZVRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaGFyZTpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaG93VG9hc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tdDFwdzl5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RQbGF0Zm9ybVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9sb29rVkFkID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb29rVkFkVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fX2xvb2tWQWQgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fc2hhcmUgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3NoYXJlVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fX3NoYXJlID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fX3Nob3dUb2FzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWg2NmU5elwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0VUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0VUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1BHYW1lU2V0IGZyb20gXCIuL0ZHVUlfUEdhbWVTZXRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQYXVzZSBmcm9tIFwiLi9GR1VJX1BHYW1lUGF1c2VcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGxheSBmcm9tIFwiLi9GR1VJX1BHYW1lUGxheVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVN0YXJ0IGZyb20gXCIuL0ZHVUlfUEdhbWVTdGFydFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RVSSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFVJXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lRW5kIGZyb20gXCIuL0ZHVUlfUEdhbWVFbmRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdE1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDb20gZnJvbSBcIi4vRkdVSV9QR2FtZUNvbVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZU1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZU1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTZXQuVVJMLCBGR1VJX1BHYW1lU2V0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGF1c2UuVVJMLCBGR1VJX1BHYW1lUGF1c2UpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUxvYWRpbmcuVVJMLCBGR1VJX1BHYW1lTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBsYXkuVVJMLCBGR1VJX1BHYW1lUGxheSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVN0YXJ0LlVSTCwgRkdVSV9QR2FtZVN0YXJ0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFVJLlVSTCwgRkdVSV9QR2FtZVRlc3RVSSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUVuZC5VUkwsIEZHVUlfUEdhbWVFbmQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0TWFpbi5VUkwsIEZHVUlfUEdhbWVUZXN0TWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUNvbS5VUkwsIEZHVUlfUEdhbWVDb20pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVNYWluLlVSTCwgRkdVSV9QR2FtZU1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0uVVJMLCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9FbXB0eVNjcmVlblVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovLzdrdHppYjhvcTNuZzBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfRW1wdHlTY3JlZW5VSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfRW1wdHlTY3JlZW5VST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdEVtcHR5U2NyZWVuXCIsIFwiRW1wdHlTY3JlZW5VSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwiLi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9FbXB0eVNjcmVlblVJLlVSTCwgRkdVSV9FbXB0eVNjcmVlblVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9pbml0TG9hZFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIG1fbG9hZGluZ19wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sb2dvOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWE6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWFfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9nYW1lX2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9uM29lZHBwNm5paHIwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX2luaXRMb2FkVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX2luaXRMb2FkVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRMb2FkXCIsIFwiaW5pdExvYWRVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb2FkaW5nX3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xvZ28gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3RleHRfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV90ZXh0X3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YV92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV90ZXh0X2dhbWVfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcIi4vRkdVSV9pbml0TG9hZFVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9pbml0TG9hZFVJLlVSTCwgRkdVSV9pbml0TG9hZFVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9UZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9oeHU0emM5ZGlvbzgwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1Rlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9UZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiX1Rlc3RcIiwgXCJUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9UZXN0TWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfVGVzdE1haW4uVVJMLCBGR1VJX1Rlc3RNYWluKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQmFzZUNvbmZpZ1Byb3h5IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuLi9fY29uZmlnL19TY2VuZU5vZGVDb25maWdcIjtcclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuemFjee9ruihqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQENvbmZpZ1QuRGVjb3JhdGVDb25maWdQcm94eShfU2NlbmVOb2RlQ29uZmlnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGVDb25maWdQcm94eSBleHRlbmRzIEJhc2VDb25maWdQcm94eTxfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTY2VuZU5vZGVDb25maWdQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4dpZOiOt+WPluaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZCBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlJZEdldERhdGEoX2lkOiBudW1iZXIpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gX2lkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5YWz5Y2h5ZCN5a2X6I635Y+W5YWz5Y2h5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YWz5Y2h5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBfbmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluaVsOaNruWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlTY2VuZU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNjZW5lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5Zy65pmv5Liq5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLnRoaXMubV9kYXRhTGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbnN0UHJveHkgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9CYXNlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi4vX2NvbmZpZy9fVGVzdENvbnN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5bi46YeP6YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9UZXN0Q29uc3QpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RDb25zdFByb3h5IGV4dGVuZHMgQmFzZUNvbnN0UHJveHk8X1Rlc3RDb25zdC5EYXRhVHlwZT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0Q29uc3RQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IE1haW5EYXRhUHJveHkgfSBmcm9tIFwiLi9NYWluRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgU2hvcnREYXRhUHJveHkgZnJvbSBcIi4vU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2lnbkRhdGFQcm94eSB9IGZyb20gXCIuL1NpZ25EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuL1Rlc3REYXRhUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7nrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaJgOacieaVsOaNrlxyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBNYWluRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2V0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2lnbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNob3J0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBNYWluRGF0YSBmcm9tIFwiLi90eXBlL01haW5EYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoTWFpbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBNYWluRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PE1haW5EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE1haW5EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2V0RGF0YSBmcm9tIFwiLi90eXBlL1NldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTZXREYXRhKVxyXG5leHBvcnQgY2xhc3MgU2V0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNldERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2V0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlU2hvcnREYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNob3J0RGF0YSBmcm9tIFwiLi90eXBlL1Nob3J0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNob3J0RGF0YSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhUHJveHkgZXh0ZW5kcyBCYXNlU2hvcnREYXRhUHJveHk8U2hvcnREYXRhPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaG9ydERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaWduRGF0YSBmcm9tIFwiLi90eXBlL1NpZ25EYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2lnbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBTaWduRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNpZ25EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNpZ25EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVGVzdERhdGEgZnJvbSBcIi4vdHlwZS9UZXN0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFRlc3REYXRhKVxyXG5leHBvcnQgY2xhc3MgVGVzdERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxUZXN0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDpn7PmlYggKi9cclxuICAgIGlmT3BlblNvdW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDog4zmma/pn7PkuZAgKi9cclxuICAgIGlmT3Blbk11c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/pnIfliqggKi9cclxuICAgIGlmT3BlblZpYnJhdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7IH0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmluZzogc3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgICBib29sZWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2JqZWN0OiB7XHJcbiAgICAgICAgYTogbnVtYmVyLFxyXG4gICAgICAgIGI6IHN0cmluZyxcclxuICAgICAgICBjOiBib29sZWFuXHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICBiOiAnYicsXHJcbiAgICAgICAgICAgIGM6IHRydWUsXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBCYXNlRGVidWcgZnJvbSBcInNyYy9fVC9EZWJ1Zy9CYXNlRGVidWdcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG4vKipcclxuICog6Ieq5a6a5LmJ6LCD6K+V5a+56LGhXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21EZWJ1ZyBleHRlbmRzIEJhc2VEZWJ1ZyB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDdXN0b21EZWJ1ZztcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGEvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVJbml0TG9hZCBmcm9tIFwiLi9NYWluL0dhbWVJbml0TG9hZFwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXIgZnJvbSBcIi4vVUlDb24vVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBUZXN0TWFpbiBmcm9tIFwiLi9fdGVzdC9UZXN0TWFpblwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW4ge1xyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v6I635Y+W5ri45oiP5Yid5aeL5YyW5Yqg6L295a6e5L6LXHJcbiAgICAgICAgbGV0IF9nYW1lSW5pdExvYWQ6IEdhbWVJbml0TG9hZCA9IG5ldyBHYW1lSW5pdExvYWQoKTtcclxuICAgICAgICAvL+W8gOWni+WKoOi9vVxyXG4gICAgICAgIF9nYW1lSW5pdExvYWQubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdExvYWRDb20oKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/liqDovb3lrozmiJBcclxuICAgIHByaXZhdGUgZ2FtZUluaXRMb2FkQ29tKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE5Liq566h55CG5ZmoXHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+WcuuaZr+euoeeQhuWZqFxyXG4gICAgICAgIFVJQ29uTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly91aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+aVsOaNrueuoeeQhuWZqFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgcHJpdmF0ZSBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn6L+b5YWl5ri45oiPJykpO1xyXG4gICAgICAgIC8vIC8qKlxyXG4gICAgICAgIC8vIFRPRE8g6L+b5YWl5rWL6K+V5qih5Z2XXHJcbiAgICAgICAgVGVzdE1haW4uaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvLyAgKi9cclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lQ29tbW9uQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXJcIjtcclxuaW1wb3J0IEdhbWVNYWluQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lTWFpbi9HYW1lTWFpbkJpbmRlclwiO1xyXG5pbXBvcnQgSW5pdEVtcHR5U2NyZWVuQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0RW1wdHlTY3JlZW4vSW5pdEVtcHR5U2NyZWVuQmluZGVyXCI7XHJcbmltcG9ydCBJbml0TG9hZEJpbmRlciBmcm9tIFwic3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXJcIjtcclxuaW1wb3J0IF9UZXN0QmluZGVyIGZyb20gXCJzcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlclwiO1xyXG5pbXBvcnQgV2hpdGVTY3JlZW5UIGZyb20gXCJzcmMvV2hpdGVTY3JlZW5UXCI7XHJcbmltcG9ydCBDb25maWdULCB7IElCYXNlQ29uZmlnQ29udGFpbmVyIH0gZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IHsgRkdVSVBhY2sgfSBmcm9tIFwic3JjL19UL0QyL0ZHVUkvRkdVSVBhY2tcIjtcclxuaW1wb3J0IEJhc2VJbml0TG9hZCBmcm9tIFwic3JjL19UL01haW4vQmFzZUluaXRMb2FkXCI7XHJcbmltcG9ydCBDb21SZXNVcmwgZnJvbSBcInNyYy9fVC9SZXMvQ29tUmVzVXJsXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcInNyYy9fVC9SZXMvRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tIFwic3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5pbXBvcnQgeyBFRm9udCB9IGZyb20gXCIuLi9SZXNFL0VGb250XCI7XHJcbmltcG9ydCB7IEVNdXNpY3MgfSBmcm9tIFwiLi4vUmVzRS9FTXVzaWNzXCI7XHJcbmltcG9ydCB7IEVTb3VuZHMgfSBmcm9tIFwiLi4vUmVzRS9FU291bmRzXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdEVtcHR5U2NyZWVuVUlDb25cIjtcclxuaW1wb3J0IEluaXRMb2FkVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb25cIjtcclxuaW1wb3J0IHsgQnVpbGRDb25maWdUcyB9IGZyb20gXCIuLi9fY29uZmlnL0J1aWxkQ29uZmlnVHNcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuaW1wb3J0IHsgX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB9IGZyb20gXCIuLi9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lc1wiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICAvLyBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICAvLyBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbpnIDopoHnmoR1aeaOp+WItuWZqOWunuS+i1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG5ldyBJbml0RW1wdHlTY3JlZW5VSUNvbigpO1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbmV3IEluaXRMb2FkVUlDb24oKTtcclxuICAgICAgICAvL+iuvue9rui3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5hZGRSZXNVcmwoX2ksIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlJvb3RSZXMpICsgYCR7X2l9L2ApOy8v5rOo5YWl6aKE5Yi25L2T6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u6aKE5Yi25L2T5Zy65pmv5a+554WnXHJcbiAgICAgICAgRXNzZW50aWFsUmVzVXJscy5zZXRQcmVmYWJTY2VuZU5hbWVzKF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIGxldCBfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gW107XHJcbiAgICAgICAgLy/ojrflj5ZmZ3Vp5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9sb2FkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaVmZ3Vp55qE5omA5pyJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/lhYjnu5HlrprmiYDmnIl1aVxyXG4gICAgICAgIHRoaXMuRkdVSUJpbmRlcigpO1xyXG4gICAgICAgIC8v5Yqg6L29Zmd1aeWMhVxyXG4gICAgICAgIC8vIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRFbXB0eVNjcmVlbicsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRFbXB0eVNjcmVlbikpKTsvL+eZveWxj3Vp5YyFXHJcbiAgICAgICAgLy8gX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdExvYWQnLCAwLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdExvYWQpKSk7Ly/liqDovb3nlYzpnaLljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQmFnJykpOy8v5Y6f5YyF77yM6YCa5bi45Li66LWE5rqQ5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUNvbW1vbicpKTsvL+WFrOWFseWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ19UZXN0JykpOy8v5rWL6K+V5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZU1haW4nLCAwKSk7Ly/kuLvljIVcclxuICAgIH1cclxuICAgIC8vZmd1aee7keWumlxyXG4gICAgcHJpdmF0ZSBGR1VJQmluZGVyKCkge1xyXG4gICAgICAgIEluaXRFbXB0eVNjcmVlbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgSW5pdExvYWRCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVDb21tb25CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIF9UZXN0QmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lTWFpbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkZHVUnliqDovb3poblcclxuICAgIHByaXZhdGUgZ2V0RkdVSUxvYWRJdGVtcyhfbmFtZTogc3RyaW5nLCBfYXRsaWFzQ291bnQ/OiBudW1iZXIsIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKTogUmVzTG9hZEl0ZW0ge1xyXG4gICAgICAgIGxldCBfZmd1aVJlczogYW55W10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWMhei3r+W+hFxyXG4gICAgICAgIG5ldyBGR1VJUGFjayhFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSwgX2F0bGlhc0NvdW50KS5nZXRSZXNVUkwoX2ZndWlSZXMpO1xyXG4gICAgICAgIC8v5Yib5bu65Yqg6L296aG5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNMb2FkSXRlbShfZmd1aVJlcywgRVJlc0xvYWRNb2RlbC5EMiwgX25hbWUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOWMhVxyXG4gICAgICAgICAgICB0aGlzLmFkZEZHVUlQYWNrYWdlKF9uYW1lKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgLy/mt7vliqDljIVcclxuICAgIHByaXZhdGUgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKEUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybignRkdVSea3u+WKoOWMheaciemXrumimOOAgicsIF9uYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHNjZW5lSnNvblJlcy5wdXNoKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwoX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a6577yaJywgQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKSkpO1xyXG4gICAgICAgIH0pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfphY3nva7ooajliqDovb3ov5vluqYnLCBpKTtcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIGxldCBfYXVkaW9zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVNdXNpY3MpIHtcclxuICAgICAgICAgICAgRU11c2ljc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5NdXNpY1VSTChFTXVzaWNzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFU291bmRzKSB7XHJcbiAgICAgICAgICAgIEVTb3VuZHNbX2ldICYmIF9hdWRpb3MucHVzaChDb21SZXNVcmwuU291bmRVUkwoRVNvdW5kc1tfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfYXVkaW9zLCBFUmVzTG9hZE1vZGVsLkQyLCAnYXVkaW8nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOaciemfs+aViOi1hOa6kO+8micsIF9hdWRpb3MpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgbGV0IF9mb250OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVGb250KSB7XHJcbiAgICAgICAgICAgIEVGb250W19pXSAmJiBfZm9udC5wdXNoKEVzc2VudGlhbFJlc1VybHMuRm9udFVSTChFRm9udFtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfZm9udCwgRVJlc0xvYWRNb2RlbC5EMiwgJ2ZvbnQnLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOacieWtl+S9k+i1hOa6kO+8micsIF9mb250KTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m95bGP5pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRFbXB0eVNjcmVlbigpIHtcclxuICAgICAgICAvL+aYvuekuueZveWxj3VpXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLlNob3coKTtcclxuICAgIH1cclxuICAgIC8v5Yqg6L295pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRMb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICAvLyB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgLy8gLy/mmL7npLrliqDovb11aVxyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5ri45oiP5Yqg6L296L+b5bqmLT4nLCBfaSk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubV9pbml0TG9hZFVJQ29uICYmIHRoaXMubV9pbml0TG9hZFVJQ29uLmlmU2hvdykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5zZXRQbGFuKF9pKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgV2hpdGVTY3JlZW5ULnNldFBsYW4oX2kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQ29tKCkge1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgICAgIFdoaXRlU2NyZWVuVC5jbG9zZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbVJlc1VybCBmcm9tIFwic3JjL19UL1Jlcy9Db21SZXNVcmxcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBTZXREYXRhUHJveHkgfSBmcm9tIFwiLi4vRGF0YS9TZXREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgRU11c2ljcyB9IGZyb20gXCIuLi9SZXNFL0VNdXNpY3NcIjtcclxuaW1wb3J0IHsgRVNvdW5kcyB9IGZyb20gXCIuLi9SZXNFL0VTb3VuZHNcIjtcclxuLyoqXHJcbiAqIOmfs+aViOeuoeeQhuexu1xyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEF1ZGlvTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLy/lvZPliY3mkq3mlL7nmoRiZ21cclxuICAgIHByaXZhdGUgbV9vbkJHTTogTGF5YS5Tb3VuZENoYW5uZWw7XHJcblxyXG4gICAgLy/lvZPliY3mkq3mlL7nmoTpn7PmlYjliJfooahcclxuICAgIHByaXZhdGUgbV9vblNvdW5kTGlzdDogU2V0PExheWEuU291bmRDaGFubmVsPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/moLnmja7mlbDmja7orr7nva7og4zmma/pn7PkuZDlkozpn7PmlYjmmK/lkKbpnZnpn7NcclxuICAgICAgICBBdWRpb01hbmFnZXIuc291bmRNdXRlZCA9ICFTZXREYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5pZk9wZW5Tb3VuZDtcclxuICAgICAgICBBdWRpb01hbmFnZXIubXVzaWNNdXRlZCA9ICFTZXREYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5pZk9wZW5NdXNpYztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+S5kOWSjOaJgOaciemfs+aViOaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IG11dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omA5pyJ6Z+z5pWI77yI5LiN5YyF5ous6IOM5pmv6Z+z5LmQ77yJ5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgc291bmRNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6Z+z5LmQ77yI5LiN5YyF5ous6Z+z5pWI77yJ5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgbXVzaWNNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aViOaaguWBnFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhdXNlU291bmQoKSB7XHJcbiAgICAgICAgLy/mmoLlgZzmiYDmnInpn7PmlYhcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI57un57utXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzdW1lU291bmQoKSB7XHJcbiAgICAgICAgLy/nu6fnu63mkq3mlL7lvZPliY3mkq3mlL7nmoTpn7PmlYhcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25Tb3VuZExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VNdXNpYygpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uQkdNICYmIHRoaXMuaW5zdGFuY2UubV9vbkJHTS5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumfs+aViOmfs+mHj1xyXG4gICAgICogQHBhcmFtIF9uIOmfs+mHjyAwfjFcclxuICAgICAqIEBwYXJhbSBfdXJsIOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNvdW5kVm9sdW1lKF9uOiBudW1iZXIgPSAxLCBfdXJsPzogc3RyaW5nKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc2V0U291bmRWb2x1bWUoX24sIF91cmwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7og4zmma/pn7PkuZDpn7Pph49cclxuICAgICAqIEBwYXJhbSBfbiDpn7Pph48gMH4xXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TXVzaWNWb2x1bWUoX246IG51bWJlciA9IDEpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zZXRNdXNpY1ZvbHVtZShfbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PmlYjjgILpn7PmlYjlj6/ku6XlkIzml7bmkq3mlL7lpJrkuKrjgIJcclxuICAgICAqIEBwYXJhbSBuYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICogQHBhcmFtIGxvb3BzIOW+queOr+asoeaVsCww6KGo56S65peg6ZmQ5b6q546v44CCXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUg5aOw6Z+z5pKt5pS+5a6M5oiQ5Zue6LCDICBIYW5kbGVy5a+56LGh44CCXHJcbiAgICAgKiBAcGFyYW0gc291bmRDbGFzcyDkvb/nlKjlk6rkuKrlo7Dpn7Pnsbvov5vooYzmkq3mlL7vvIxudWxs6KGo56S66Ieq5Yqo6YCJ5oup44CCXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRUaW1lIOWjsOmfs+aSreaUvui1t+Wni+aXtumXtOOAglxyXG4gICAgICogQHJldHVybiBTb3VuZENoYW5uZWzlr7nosaHvvIzpgJrov4fmraTlr7nosaHlj6/ku6Xlr7nlo7Dpn7Pov5vooYzmjqfliLbvvIzku6Xlj4rojrflj5blo7Dpn7Pkv6Hmga/jgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlTb3VuZChuYW1lOiBFU291bmRzLCBsb29wcz86IG51bWJlciwgY29tcGxldGU/OiBsYXlhLnV0aWxzLkhhbmRsZXIsIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LCBzdGFydFRpbWU/OiBudW1iZXIpOiBsYXlhLm1lZGlhLlNvdW5kQ2hhbm5lbCB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfc291bmQ6IExheWEuU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKG5hbWUsIGxvb3BzLCBjb21wbGV0ZSwgc291bmRDbGFzcywgc3RhcnRUaW1lKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25Tb3VuZExpc3QuYWRkKF9zb3VuZCk7XHJcbiAgICAgICAgcmV0dXJuIF9zb3VuZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQ44CC6IOM5pmv6Z+z5LmQ5ZCM5pe25Y+q6IO95pKt5pS+5LiA5Liq77yM5aaC5p6c5Zyo5pKt5pS+6IOM5pmv6Z+z5LmQ5pe25YaN5qyh6LCD55So5pys5pa55rOV77yM5Lya5YWI5YGc5q2i5LmL5YmN55qE6IOM5pmv6Z+z5LmQ77yM5YaN5pKt5pS+5b2T5YmN55qE6IOM5pmv6Z+z5LmQ44CCXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDog4zmma/pn7PmlYjlkI3lrZdcclxuICAgICAqIEBwYXJhbSBsb29wcyDlvqrnjq/mrKHmlbAsMOihqOekuuaXoOmZkOW+queOr+OAglxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlIOWjsOmfs+aSreaUvuWujOaIkOWbnuiwgyxjb21wbGV0ZSDnu5Pmnpzlj4LmlbAgdHJ1ZTog5pKt5pS+5a6M5oiQLCBmYWxzZS91bmRlZmluZWQg77yac3RvcOinpuWPkeeahGNvbXBsZXRl44CCXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRUaW1lIOWjsOmfs+aSreaUvui1t+Wni+aXtumXtOOAglxyXG4gICAgICogQHJldHVybiBTb3VuZENoYW5uZWzlr7nosaHvvIzpgJrov4fmraTlr7nosaHlj6/ku6Xlr7nlo7Dpn7Pov5vooYzmjqfliLbvvIzku6Xlj4rojrflj5blo7Dpn7Pkv6Hmga/jgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlNdXNpYyhuYW1lOiBFTXVzaWNzLCBsb29wcz86IG51bWJlciwgY29tcGxldGU/OiBsYXlhLnV0aWxzLkhhbmRsZXIsIHN0YXJ0VGltZT86IG51bWJlcik6IGxheWEubWVkaWEuU291bmRDaGFubmVsIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IF9tdXNpYzogTGF5YS5Tb3VuZENoYW5uZWwgPSBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMobmFtZSwgbG9vcHMsIGNvbXBsZXRlLCBzdGFydFRpbWUpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vbkJHTSA9IF9tdXNpYztcclxuICAgICAgICByZXR1cm4gX211c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6Z+z5pWI5pKt5pS+44CCXHJcbiAgICAgKiBAcGFyYW0gc291bmRzTmFtZSDpn7PmlYjlkI3lrZdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0b3BTb3VuZChzb3VuZHNOYW1lOiBFU291bmRzKTogdm9pZCB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcFNvdW5kKENvbVJlc1VybC5Tb3VuZFVSTChzb3VuZHNOYW1lKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouiDjOaZr+mfs+aViOaSreaUvuOAglxyXG4gICAgICogQHBhcmFtIG11c2ljTmFtZSDpn7PmlYjlkI3lrZdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0b3BNdXNpYyhtdXNpY05hbWU6IEVNdXNpY3MpOiB2b2lkIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wU291bmQoQ29tUmVzVXJsLk11c2ljVVJMKG11c2ljTmFtZSkpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWtl+S9k+i1hOa6kOaemuS4viAo5Lya6aKE5Yqg6L29KVxyXG4gKiAhIOW/hemhu+aYr+Wtl+espuS4su+8jOS4jeiDveaYr+aVsOWtl+WQpuWImeS8muWKoOS4iuWPjeWwhOWxnuaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRUZvbnQge1xyXG4gICAgbnVsbCA9ICcnLFxyXG4gICAgLy9cclxufSIsIi8qKlxyXG4gKiDmiYDmnInog4zmma/pn7PkuZAgKOS8mumihOWKoOi9vSlcclxuICogISDlv4XpobvmmK/lrZfnrKbkuLLvvIzkuI3og73mmK/mlbDlrZflkKbliJnkvJrliqDkuIrlj43lsITlsZ7mgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIEVNdXNpY3Mge1xyXG4gICAgbnVsbCA9ICcnLFxyXG4gICAgLy9cclxufSIsIi8qKlxyXG4gKiDmiYDmnInpn7PmlYggKOS8mumihOWKoOi9vSlcclxuICogISDlv4XpobvmmK/lrZfnrKbkuLLvvIzkuI3og73mmK/mlbDlrZflkKbliJnkvJrliqDkuIrlj43lsITlsZ7mgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIEVTb3VuZHMge1xyXG4gICAgbnVsbCA9ICcnLFxyXG4gICAgLy/pn7PmlYhcclxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwic3JjL19UL0QzL3NjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX0VBbGxFeHBvcnRTY2VuZU5hbWUgfSBmcm9tIFwiLi4vX3NjZW5lTmFtZS9fRUFsbEV4cG9ydFNjZW5lTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZr+euoeeQhuWZqFxyXG4gKiDnrqHnkIblnLrmma/vvIzojrflj5blnLrmma/vvIznhLblkI7pgJrov4flnLrmma/lrp7kvovmnoTlu7rlnLrmma/kuK3lr7nosaHnmoToioLngrlcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTY2VuZU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKiDlnLrmma/liJfooaggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUxpc3Q6IHtcclxuICAgICAgICBbaW5kZXg6IHN0cmluZ106IFNjZW5lLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5Zy65pmv5ZCN5a2X6I635Y+W5Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZTxTIGV4dGVuZHMgU2NlbmU+KF9uYW1lOiBzdHJpbmcpOiBTIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gYXMgUztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICBsZXQgX25hbWU6IHN0cmluZztcclxuICAgICAgICAvL+WIneWni+WMluWFqOmDqOWcuuaZr1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIF9uYW1lID0gX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXSA9IG5ldyBTY2VuZShfbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvL+agueaNruS4jeWQjOeahOWcuuaZr+WunuS+i+WMluS4jeWQjOeahOexu1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9uYW1lKSB7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uTWFuYWdlciBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlclwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXJQcm94eSBmcm9tIFwiLi9VSUNvbk1hbmFnZXJQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIHVp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyPFVJQ29uTWFuYWdlclByb3h5PiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBVSUNvbk1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIPvvIznu6fmib/kvb/nlKjvvIzkuLvopoHorr7nva51aeWIl+ihqOWSjOS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwic3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpblwiO1xyXG5pbXBvcnQgQmFzZVNpbmdsZVVJQ29uIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlU2luZ2xlVUlDb25cIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG4vKipcclxuICog5rWL6K+V5Li76aG16Z2i5o6n5Yi25ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVGVzdE1haW5VSUNvbiBleHRlbmRzIEJhc2VTaW5nbGVVSUNvbjxGR1VJX1Rlc3RNYWluPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBfVGVzdE1haW5VSUNvbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbiAgICAvKiogdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUkgPSBGR1VJX1Rlc3RNYWluO1xyXG59IiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxyXG4vL1xyXG5pbXBvcnQgeyBfU2NlbmVOb2RlQ29uZmlnIH0gZnJvbSBcIi4vX1NjZW5lTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbmZpZyB9IGZyb20gXCIuL19UZXN0Q29uZmlnXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi9fVGVzdENvbnN0XCI7XHJcblxyXG4vKipcclxuKiDmnoTlu7rlhajpg6jphY3nva7ooahcclxuKiAhIOiHquWKqOWvvOWHulxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQnVpbGRDb25maWdUcyB7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieeahOmFjee9ruihqOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbENvbmZpZygpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgY29uZmlncy5wdXNoKF9TY2VuZU5vZGVDb25maWcpO1xyXG4gICAgICAgIGNvbmZpZ3MucHVzaChfVGVzdENvbmZpZyk7XHJcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uc3QpO1xyXG4gICAgICAgIHJldHVybiBjb25maWdzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9TY2VuZU5vZGVDb25maWcgY29uZmln6YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9TY2VuZU5vZGVDb25maWcge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbmZpZyc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOWFs+WNoWlkW+W/heimgV0gKi9cbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAvKiog5YWz5Y2h5ZCN5a2X77yM5Y+v5Lul6YCa6L+H5ZCN5a2X6I635Y+W5YWz5Y2h5pWw5o2uICovXG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAvKiog5omA5bGe5Zy65pmvICovXG4gICAgICAgIHNjZW5lOiBzdHJpbmc7XG4gICAgICAgLyoqIOiKgueCueWQjeWtl+WIl+ihqCAqL1xuICAgICAgICBub2RlTmFtZTogc3RyaW5nO1xuICAgIH1cbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhczogX1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZVtdID0gW107XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1NjZW5lTm9kZUNvbmZpZy5qc29uJztcbn1cbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfVGVzdENvbmZpZyBjb25maWfphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25maWcge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbmZpZyc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOaVsOWAvO+8jOS4jeeuoeS7gOS5iOWAvO+8jOmDveS8mui9rOaIkOWtl+espuS4siAqL1xuICAgICAgICBuOiBudW1iZXI7XG4gICAgICAgLyoqIOWtl+espuS4su+8jOS4jeeuoeaYr+S7gOS5iOWAvO+8jOacgOWQjumDveS8mui9rOaIkOWtl+espuS4siAqL1xuICAgICAgICBzOiBzdHJpbmc7XG4gICAgICAgLyoqIOW4g+WwlOWAvO+8jOS4jeeuoeS7gOS5iOWAvOmDveS8mui9rOW4g+WwlOWAvCAqL1xuICAgICAgICBiOiBib29sZWFuO1xuICAgIH1cbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhczogX1Rlc3RDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uZmlnLmpzb24nO1xufVxuICAgICIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9UZXN0Q29uc3QgY29uc3TphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25zdCB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uc3QnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UgKi9cbiAgICAgICAgbjogbnVtYmVyO1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UyICovXG4gICAgICAgIG4yOiBudW1iZXI7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlTMgKi9cbiAgICAgICAgbjM6IG51bWJlcjtcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VICovXG4gICAgICAgIHM6IHN0cmluZztcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMiAqL1xuICAgICAgICBzMjogc3RyaW5nO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UzICovXG4gICAgICAgIHMzOiBzdHJpbmc7XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xuICAgICAgICBiOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UxICovXG4gICAgICAgIGIyOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UyICovXG4gICAgICAgIGIzOiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cbiAgICAgICAgYjQ6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTMgKi9cbiAgICAgICAgYjU6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTQgKi9cbiAgICAgICAgYjY6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTUgKi9cbiAgICAgICAgYjc6IGJvb2xlYW47XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlSAqL1xuICAgICAgICBvOiBhbnk7XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlTEgKi9cbiAgICAgICAgbzI6IGFueTtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMiAqL1xuICAgICAgICBvMzogYW55O1xuICAgIH1cbiAgICAvKiogY29uc3TmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGE6IF9UZXN0Q29uc3QuRGF0YVR5cGUgPSBudWxsO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uc3QuanNvbic7XG59XG4gICAgIiwiLyoqXHJcbiAqIOaJgOacieWcuuaZr+WvueW6lOeahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbFNjZW5lUHJlZmFic05hbWVzIHtcclxuICAgIFByZWZhYiA9ICdAQ3ViZUBAU3BoZXJlQCcsXHJcblxyXG59XHJcbi8vIiwiLyoqXHJcbiAqIOaJgOacieWvvOWHuuWcuuaZr+WQjeWtl1xyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbEV4cG9ydFNjZW5lTmFtZSB7XHJcbiAgICBTY2VuZSA9ICdTY2VuZScsXG5cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZUNvbmZpZ1Byb3h5IGZyb20gXCIuLi9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgVGVzdENvbnN0UHJveHkgZnJvbSBcIi4uL0NvbmZpZ1Byb3h5L1Rlc3RDb25zdFByb3h5XCI7XHJcblxyXG4vKipcclxuICog6YWN572u6KGo5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWdUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IENvbmZpZ1Rlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Zy65pmv6IqC54K56YWN572u6KGo5YaF5a65Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coU2NlbmVOb2RlQ29uZmlnUHJveHkuaW5zdGFuY2UuZGF0YUxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfluLjph4/mtYvor5XphY3nva7ooajlhoXlrrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhUZXN0Q29uc3RQcm94eS5pbnN0YW5jZS5kYXRhKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuLi9EYXRhL1Rlc3REYXRhUHJveHlcIjtcclxuaW1wb3J0IEN1c3RvbURlYnVnIGZyb20gXCIuLi9EZWJ1Zy9DdXN0b21EZWJ1Z1wiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrua1i+ivleexu1xyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YVRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5rWL6K+VJywgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIEN1c3RvbURlYnVnLmluc3RhbmNlLmFkZEl0ZW0oJ2RhdGFUZXN0JywgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K6+572u5Zue6LCDJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOe7hOiiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5hcnJheSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WvueixoeWxnuaAp+iiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5vYmplY3QpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflr7nosaHlsZ7mgKcgYSDooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEub2JqZWN0LCAnYScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnlUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IExpYnJhcnlUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5pe26Ze05bel5YW3JywgZGF5anMoJzIwMjAvMi8yMCcpKTtcclxuICAgICAgICAvLyAvL+i/memHjOWPquacieacrOWcsOiuv+mXruaJjeihjO+8jOe6v+S4iuiuv+mXruS8mui3qOWfn1xyXG4gICAgICAgIC8vIGF4aW9zLmdldDxzdHJpbmc+KCdodHRwOi8vYmFpZHUuY29tJykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn6K+35rGC5bel5YW36K+35rGC55m+5bqm572R6aG1Jywge1xyXG4gICAgICAgIC8vICAgICAgICAgc3RyaW5nOiBkYXRhLmRhdGEsXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIC8vXHJcbiAgICAgICAgLy8gbGV0IGEgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1/pmo/mnLrmiZPkubHmlbDnu4QnLCBfLnNodWZmbGUoYSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdf6ZqP5py65Y+W5YC85pWw57uEJywgXy5zYW1wbGUoYSwgMikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCdwYWtv5bel5YW3JywgdHlwZW9mIHBha28pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygnYXhpb3Plt6XlhbcnLCB0eXBlb2YgYXhpb3MpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBPdGhlclRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja1Rlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogUGFja1Rlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5omT5YyF5rWL6K+VNjcnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBfVGVzdE1haW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vX3Rlc3QvX1Rlc3RNYWluVUlDb25cIjtcclxuaW1wb3J0IENvbmZpZ1Rlc3QgZnJvbSBcIi4vQ29uZmlnVGVzdFwiO1xyXG5pbXBvcnQgRGF0YVRlc3QgZnJvbSBcIi4vRGF0YVRlc3RcIjtcclxuaW1wb3J0IExpYnJhcnlUZXN0IGZyb20gXCIuL0xpYnJhcnlUZXN0XCI7XHJcbmltcG9ydCBPdGhlclRlc3QgZnJvbSBcIi4vT3RoZXJUZXN0XCI7XHJcbmltcG9ydCBQYWNrVGVzdCBmcm9tIFwiLi9QYWNrVGVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleS4u+iEmuacrFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdE1haW4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVGVzdE1haW47XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL+aehOW7ulNjZW5l5Zy65pmv5LiL55qEZGVidWfoioLngrlcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuZ2V0U2NlbmUoJ1NjZW5lJylcclxuICAgICAgICAgICAgLmdldFNjZW5lTm9kZSgnZGVidWcnKVxyXG4gICAgICAgICAgICAuYXN5bmNCdWlsZCgpXHJcbiAgICAgICAgICAgIC50aGVuKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN5Zy65pmvJywgbm9kZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN6IqC54K5Jywgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvL+S4uuivpeWcuuaZr+iuvue9rueOr+Wig1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2VuZS5zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuua1i+ivlXVpXHJcbiAgICAgICAgX1Rlc3RNYWluVUlDb24uaW5zdGFuY2UuU2hvdygpO1xyXG4gICAgICAgIC8v5pWw5o2uXHJcbiAgICAgICAgRGF0YVRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+exu+W6k+a1i+ivlVxyXG4gICAgICAgIExpYnJhcnlUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/phY3nva7ooajmtYvor5VcclxuICAgICAgICBDb25maWdUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/miZPljIXmtYvor5VcclxuICAgICAgICBQYWNrVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v5YW25LuW5rWL6K+VXHJcbiAgICAgICAgT3RoZXJUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyB3aWR0aDogbnVtYmVyID0gNzUwO1xyXG4gICAgc3RhdGljIGhlaWdodDogbnVtYmVyID0gMTMzNDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjogc3RyaW5nID0gXCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6IHN0cmluZyA9IFwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6IGFueSA9IFwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVNYWluIGZyb20gXCIuL0dhbWUvR2FtZU1haW5cIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgV2hpdGVTY3JlZW5UIGZyb20gXCIuL1doaXRlU2NyZWVuVFwiO1xyXG5pbXBvcnQgVE1haW4gZnJvbSBcIi4vX1QvVE1haW5cIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2UuYmdDb2xvciA9IFwiIzAwMDAwMFwiO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0XHQvL1xyXG5cdFx0LyoqIOato+W8j+W8gOWni++8jOWKoOi9veeZveWxj3VpICMyOGRmOTkgKi9cclxuXHRcdFdoaXRlU2NyZWVuVC5sb2FkKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdC8v5qGG5p625YWl5Y+jXHJcblx0XHRcdG5ldyBUTWFpbigpO1xyXG5cdFx0XHQvL+aJk+W8gOeZveWxj1xyXG5cdFx0XHRXaGl0ZVNjcmVlblQub3BlbigpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdC8v5ri45oiP5YWl5Y+jXHJcblx0XHRcdFx0bmV3IEdhbWVNYWluKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpOyIsIi8qKlxyXG4gKiDnmb3lsY/lt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoaXRlU2NyZWVuVCB7XHJcbiAgICAvKiog5Zy65pmvICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX3NjZW5lOiBMYXlhLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9iZzogTGF5YS5TcHJpdGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFtcclxuICAgICAgICAgICAgICAgIFwiaW5pdExvYWQuanNvblwiLFxyXG4gICAgICAgICAgICAgICAgJ2F0bGFzL2luaXRMb2FkLmF0bGFzJyxcclxuICAgICAgICAgICAgICAgICdhdGxhcy9pbml0TG9hZC5wbmcnLFxyXG4gICAgICAgICAgICBdLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgb3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgLy/miZPlvIDnmb3lsY91aVxyXG4gICAgICAgICAgICBMYXlhLlNjZW5lLm9wZW4oJ2luaXRMb2FkLmpzb24nLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoX3NjZW5lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYmcgPSB0aGlzLm1fc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ2JnJykgYXMgTGF5YS5TcHJpdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICAgICAgICAgIC8v55uR5ZCs5bGP5bmV5pS55Y+Y5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkxhdGVyKCkudGhlbihyKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5LmL5ZCO55qE5Zue6LCD77yM5Y+v5Lul5Zyo5q2k5Yqg6L295YiG5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG9wZW5MYXRlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQbGFuKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u6L+b5bqmJywgX24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xvc2UoKSB7XHJcbiAgICAgICAgLy/liKDpmaTlnLrmma9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgJiYgdGhpcy5tX3NjZW5lLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubV9iZyA9IG51bGw7XHJcbiAgICAgICAgLy/lhbPpl63nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOinhuWbvlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5oZWlnaHQgPSBfaGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2JnLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9iZy5oZWlnaHQgPSBfaGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUJhc2VDb25maWdDb250YWluZXIsIElDb25maWdDb250YWluZXIsIElDb25zdENvbnRhaW5lciB9IGZyb20gXCIuL0NvbmZpZ1RcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmNsYXNzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjeaJp+ihjCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWIOS9v+eUqOaXtuimhuebllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ+aVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbmZpZ1Byb3h5PERhdGE+IGV4dGVuZHMgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElDb25maWdDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja7liJfooahcclxuICAgIHByb3RlY3RlZCBtX2RhdGFMaXN0OiBEYXRhW107XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNruWIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhTGlzdCgpOiBEYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YUxpc3QgPSB0aGlzLmNvbmZpZ1RlbXBsYXRlLmRhdGFzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uc3TmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uc3RQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQ29uc3RDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja5cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmNICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5jb25maWdUZW1wbGF0ZS5kYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29tL0lDb25maWdEYXRhXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCIuLi9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiDoo4XppbDphY3nva7ooajku6PnkIZcclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlQ29uZmlnUHJveHkoX2NvbmZpZzogSUJhc2VDb25maWdDb250YWluZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6YWN572u6KGo5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuY29uZmlnVGVtcGxhdGUgPSBfY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uumFjee9ruihqOWIl+ihqFxyXG4gICAgICog5Y+q5p6E5bu677yM5LiN5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZ3Mg6YWN572u6KGo5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQnVpbGRDb25maWdzKF9jb25maWdzOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcltdKSB7XHJcbiAgICAgICAgbGV0IF91cmw6IHN0cmluZztcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfY29uZmlncykge1xyXG4gICAgICAgICAgICBfdXJsID0gRXNzZW50aWFsUmVzVXJscy5Db25maWdKc29uVVJMKF9vLmZpbGVOYW1lKTtcclxuICAgICAgICAgICAgLy/loavlhYXmlbDmja5cclxuICAgICAgICAgICAgc3dpdGNoIChfby50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uZmlnQ29udGFpbmVyKS5kYXRhcyA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25zdENvbnRhaW5lcikuZGF0YSA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahqc29u5pWw5o2uXHJcbiAgICAgKiDvvIHms6jmhI/vvIzojrflj5bkuobor6XotYTmupDor6XotYTmupDlsLHkvJrooqvliKDpmaTmjolcclxuICAgICAqIEBwYXJhbSBfdXJsIOmFjee9ruihqOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0pzb25EYXRhKF91cmw6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy/ojrflj5botYTmupBcclxuICAgICAgICBsZXQgY29uZmlnRGF0YTogSUNvbmZpZ0RhdGEgPSBSZXNMb2FkLkdldFJlcyhfdXJsLCB0cnVlKTtcclxuICAgICAgICAvL+a4heeQhui1hOa6kOe8k+WtmOWPquS9v+eUqOS4gOasoVxyXG4gICAgICAgIFJlc0xvYWQuQ2xlYXJSZXMoX3VybCk7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInljovnvKlcclxuICAgICAgICBpZiAoY29uZmlnRGF0YS56aXApIHtcclxuICAgICAgICAgICAgLy/op6PljotcclxuICAgICAgICAgICAgbGV0IF90aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25maWdEYXRhLmRhdGEgPSBKU09OLnBhcnNlKHBha28uaW5mbGF0ZShjb25maWdEYXRhLmRhdGEsIHsgdG86ICdzdHJpbmcnIH0pKTtcclxuICAgICAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgICAgIC8v5Yik5pat6Kej5Y6L5pe26Ze05beuXHJcbiAgICAgICAgICAgIGlmIChfdGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6YWN572u6KGo6Kej5Y6L5pe26Ze06L+H6ZW/77yM5Y+v6IO95piv6YWN572u6KGo5paH5Lu26L+H5aSnLT4nLCBfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gY29uZmlnRGF0YS5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G76YWN572u6KGo5a655Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIHJlYWRvbmx5IGZpbGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25maWcg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWdDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2u5YiX6KGoICovXHJcbiAgICBkYXRhczogYW55W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25zdCDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0Q29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YTogYW55O1xyXG59IiwiLyoqXHJcbiAqIOaJk+WNsOWPsOW4uOeUqOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUNvbnN0IHtcclxuXHJcbiAgICAvKiog5YWs5YWx5qC35byPICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgcHVibGljU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmma7pgJrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnIzlCQTRCNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDovbvmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ0xpZ2h0U3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzc3NmQ4YScsICcjRUJFQkVCJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOitpuWRiua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyblN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM1YzZlMDYnLCAnI2ZmYTkzMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDplJnor6/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVycm9yU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjZWMwMTAxJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiJDlip/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvbVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2FkZTQ5OCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagt+W8j1xyXG4gICAgICogQHBhcmFtIF9jb2xvciDlrZfkvZPpopzoibJcclxuICAgICAqIEBwYXJhbSBfYmdDb2xvciDog4zmma/popzoibJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdHlsZShfY29sb3I6IHN0cmluZywgX2JnQ29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke19jb2xvcn07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke19iZ0NvbG9yfTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICBgKyB0aGlzLnB1YmxpY1N0eWxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlQ29uc3QgZnJvbSBcIi4vQ29uc29sZUNvbnN0XCI7XHJcblxyXG4vKipcclxuICog5omT5Y2w5Y+w5omp5bGVXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlRXgge1xyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xkv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc3R5bGUg5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX3BhciDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFjayhfc3R5bGU6IHN0cmluZywgX3BhcjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbJyVjJXMnLCBfc3R5bGUsICdsb2cnLCAuLi5fcGFyXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2coLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrovbvmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZ0xpZ2h0KC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ0xpZ2h0U3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XmiJDlip/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0NvbSguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5jb21TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheitpuWRiua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrV2FybiguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC53YXJuU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XplJnor6/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0Vycm9yKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmVycm9yU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogMmTnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQyTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIGZndWnmoLnnrqHnkIblmaggKi9cclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbiwgeyBJQmFzZVVJQ29uRGVmaW5lcyB9IGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+WNlemhtemdouaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNpbmdsZVVJQ29uPFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogX1VJIOexu+WeiyAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSTogSVVJQ3JlYXRlPFVJPjtcclxuXHJcbiAgICAvKiogdWnnsbvlnovliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogSUJhc2VVSUNvbkRlZmluZXMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiB1aSAqL1xyXG4gICAgcHJpdmF0ZSBtX3VpOiBVSTtcclxuXHJcbiAgICAvKiog6I635Y+WdWkgKi9cclxuICAgIHB1YmxpYyBnZXQgdWkoKTogVUkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7unVp5LmL5YmN55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgLy/orr7nva7ljZV1aVxyXG4gICAgICAgICAgICB0aGlzLl9VSXMgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDcmVhdGU6IHRoaXMuX1VJLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJRVgoKSB7XHJcbiAgICAgICAgdGhpcy5tX3VpID0gdGhpcy5fVUlzLmRlZmF1bHQudWkgYXMgVUk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvblByb3h5IGZyb20gXCIuL0Jhc2VVSUNvblByb3h5XCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuaW1wb3J0IEZHdWlEYXRhIGZyb20gXCIuL0ZHdWlEYXRhXCI7XHJcbmltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSVJvb3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBGR1VJVCBmcm9tIFwiLi9GR1VJVFwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5pbXBvcnQgUm9vdFVJQ29uIGZyb20gXCIuL1Jvb3RVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5o6n5Yi25Zmo5Z+657G7KOeUqOadpeaOp+WItlVJ55WM6Z2iKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uIGV4dGVuZHMgUm9vdFVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiog5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDojrflj5bllK/kuIDplK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IHN5bWJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwcml2YXRlIG1fcm9vdFVJOiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdFVJKCk6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yb290VUk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWcqOmakOiXj+aXtua4heeQhuaOiXVp77yM6buY6K6k5Li6dHJ1ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogVUnlsYLnuqfnsbvlnovvvIzlv4XpobvlnKjliJ3lp4vljJbml7borr7nva4gKi9cclxuICAgIHByb3RlY3RlZCBfbGF5ZXI6IEVVSUxheWVyID0gRVVJTGF5ZXIuUGFuZWw7XHJcblxyXG4gICAgLyoqIHVp5bGC57qnICovXHJcbiAgICBwdWJsaWMgZ2V0IGxheWVyKCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTaG93KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeS7o+eQhuWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3Byb3h5VUlMaXN0OiBTZXQ8QmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+PiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5hZGQoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5kZWxldGUoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLlNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn3Vp5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmRVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZW5kUHJveHkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7unVpXHJcbiAgICBwcml2YXRlIGNyZWF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJQmVmb3JlRXgoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsHVp5Yib5bu65Zmo5YiX6KGoIScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liJ3lp4vljJbmoLnoioLngrl1aVxyXG4gICAgICAgIHRoaXMubV9yb290VUkgPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmdldExheWVyVUkodGhpcy5fbGF5ZXIpLmFkZENoaWxkKHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gdGhpcy5tX3Jvb3RVSS5hZGRDaGlsZCh0aGlzLl9VSXNbX2ldLnVpQ3JlYXRlLmNyZWF0ZUluc3RhbmNlKCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9jcmVhdGVVSUVYKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMg5Y+q6IO95Zyo5omp5bGV5Lit5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7IH1cclxuICAgIC8qKiDliJvlu7rlrozmiJB1aeWQjueahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHsgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrox1aeWQjuWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWlcclxuICAgICAqIEBwYXJhbSBfbmFtZSB1aeWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+KF9uYW1lOiBzdHJpbmcpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJc1tfbmFtZV0udWkgYXMgVUk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU2hvd0JlZm9yZSguLi5wYXIpO1xyXG4gICAgICAgIGxldCBfaWZOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkgfHwgdGhpcy5tX3Jvb3RVSS5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu6dWlcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgICAgICBfaWZOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWIsOW9k+WJjeWxgue6p+mhtuWxguaYvuekulxyXG4gICAgICAgIEZHVUlULnNldFVJVG9wU2hvdyh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICAvL+aJi+WKqOabtOaWsOS4gOasoVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIC8v55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uU2hvdyhfaWZOZXcsIC4uLnBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2xlYXIg5piv5ZCm5riF55CGXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWFtuS7luWPguaVsO+8jOS8muS8oOWIsOmakOiXj+eahOWbnuiwg+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZShfaWZDbGVhcjogYm9vbGVhbiA9IHRoaXMuX2lmQ2xlYXIsIC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29uSGlkZUJlZm9yZShwYXIpO1xyXG4gICAgICAgIGlmIChfaWZDbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NlVUkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5bmtojnm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uSGlkZShfaWZDbGVhciwgcGFyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnooqvmuIXnkIbml7bnmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfZGlzcG9zZVVJKCkgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDlpKflsI8gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAvL+agueaNruWtkHVp5pC65bim55qE5pWw5o2u6YCC6YWN5bGP5bmV5aSn5bCPXHJcbiAgICAgICAgbGV0IF9kYXRhOiBGR3VpRGF0YTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSBMYXlhLnN0YWdlLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgX2RhdGEgPSB0aGlzLl9VSXNbX2ldLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghX2RhdGEgfHwgIV9kYXRhLmlmVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCAtIF9kYXRhLmxlZnQgLSBfZGF0YS5yaWdodCwgX2hlaWdodCAtIF9kYXRhLmJvdHRvbSAtIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoX2RhdGEubGVmdCwgX2RhdGEudG9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbt1aeaOp+WItuWZqOexu+Wei+aOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVVJQ29uRGVmaW5lcyB7XHJcbiAgICAvKiogdWnliJvlu7rlmaggKi9cclxuICAgIHVpQ3JlYXRlOiBJVUlDcmVhdGU8Zmd1aS5HQ29tcG9uZW50PjtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE/OiBGR3VpRGF0YTtcclxuICAgIC8qKiB1aSAqL1xyXG4gICAgdWk/OiBmZ3VpLkdDb21wb25lbnQ7XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIZ1aeaOp+WItuWZqFxyXG4gKiDlv4XpobvphY3lkIjku6PnkIblmajkvb/nlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXI8UHJveHkgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuICAgIC8qKiB1aeS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlQcm94eTogUHJveHk7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiDmoYbmnrbosIPnlKjvvIzkuI3og73nm7TmjqXosIPnlKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX19pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluS5i+WQjueahOajgOa1i1xyXG4gICAgcHJpdmF0ZSBfX2luaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyW566h55CG55qEdWnliJfooagnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3VpUHJveHkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJZ1aeS7o+eQhicpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS7o+eQhuWZqOS7o+eQhlxyXG4gICAgICAgICAgICB0aGlzLm1fdWlQcm94eS5zZXRQcm94eSh0aGlzLm1fdWlDb25MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1aSDmjqfliLblmajnrqHnkIblmajku6PnkIZcclxuICog6LSf6LSj5Luj55CGdWnmjqfliLblmajnrqHnkIblmajkuK3nmoTmjqfliLblmajvvIzpmLLmraLlvqrnjq/kvp3otZZcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDojrflj5blvZPliY3mmL7npLrnmoR1aSAqL1xyXG4gICAgcHVibGljIGdldCBvblNob3dVSSgpOiBCYXNlVUlDb25bXSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IEJhc2VVSUNvbltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W19pXS5pZlNob3cgJiYgX3VpQ29ucy5wdXNoKHRoaXMubV91aUNvbkxpc3RbX2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3VpQ29ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3VpTGlzdCB1aeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHkoX3VpTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLm1fdWlDb25MaXN0ID0gX3VpTGlzdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrnVp6ZSu5YC86I635Y+W5LiA5LiqdWlcclxuICAgICAqIEBwYXJhbSBfa2V5IHVp6ZSu5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSUNvbiBleHRlbmRzIEJhc2VVSUNvbj4oX2tleTogc3RyaW5nKTogVUlDb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWlDb25MaXN0W19rZXldIGFzIFVJQ29uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6dWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajntKLlvJXmiJbogIXntKLlvJXliJfooahcclxuICAgICAqIEBwYXJhbSBfaWZIaWRlT3RoZXJVSSDmmK/lkKbpmpDol4/lhbbku5Z1aSBbdHJ1ZV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdLCBfaWZIaWRlT3RoZXJVSTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZqQ6JeP5YW25LuWdWlcclxuICAgICAgICBpZiAoX2lmSGlkZU90aGVyVUkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdWlDb25zLmluY2x1ZGVzKF9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLkhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV91aUNvbkxpc3RbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol491aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOWunuS+i+aIluWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dICYmIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5b2T5YmN5pi+56S655qE5omA5pyJdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVBbGxVSSgpIHtcclxuICAgICAgICB0aGlzLm9uU2hvd1VJLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcbn0iLCIvKipcclxuICogVUnliIblsYIs5oyJ6aG65bqP5pi+56S6XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVUlMYXllciB7XHJcbiAgICAvKiog6IOM5pmv6aG16Z2iICovXHJcbiAgICBCZyA9ICdCZycsXHJcbiAgICAvKiog5Li755WM6Z2iICDmsLjov5zlrZjlnKggKi9cclxuICAgIE1haW4gPSBcIk1haW5cIixcclxuICAgIC8qKiDpnaLmnb8gIOWPr+S7peacieW+iOWkmiAqL1xyXG4gICAgUGFuZWwgPSBcIlBhbmVsXCIsXHJcbiAgICAvKiog5by556qXICovXHJcbiAgICBQb3B1cCA9IFwiUG9wdXBcIixcclxuICAgIC8qKiDpgZPlhbcgKi9cclxuICAgIFByb3AgPSAnUHJvcCcsXHJcbiAgICAvKiog5bCP6YOo5Lu2ICovXHJcbiAgICBUaXAgPSBcIlRpcFwiLFxyXG4gICAgLyoqIOaaguWBnCAqL1xyXG4gICAgUGF1c2UgPSAnUGF1c2UnLFxyXG4gICAgLyoqIOiuvue9riAqL1xyXG4gICAgU2V0ID0gJ1NldCcsXHJcbiAgICAvKiog5pyA6auYICovXHJcbiAgICBUb3AgPSAnVG9wJyxcclxuICAgIC8qKiDliqDovb3pobXpnaIgKi9cclxuICAgIExvYWRpbmcgPSAnTG9hZGluZycsXHJcbiAgICAvKiog5Y6f55SfICovXHJcbiAgICBOYXRpdmUgPSAnTmF0aXZlJyxcclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeWMheexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZHVUlQYWNrIHtcclxuICAgIC8vIOWMhei3r+W+hFxyXG4gICAgcHJpdmF0ZSBwYWNrUGF0aDogc3RyaW5nO1xyXG4gICAgLy8g5YW25LuW6LWE5rqQ5pWw6YePXHJcbiAgICBwcml2YXRlIGF0bGlhc0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ljIVcclxuICAgICAqIEBwYXJhbSBfcGFja1VybCDljIXlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfYXRsaWFzQ291bnQg5Zu+6ZuG5pWw6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9wYWNrVXJsOiBzdHJpbmcsIF9hdGxpYXNDb3VudDogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB0aGlzLnBhY2tQYXRoID0gX3BhY2tVcmw7XHJcbiAgICAgICAgdGhpcy5hdGxpYXNDb3VudCA9IF9hdGxpYXNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF91cmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzVVJMKF91cmxzKTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkMkRBc3luYyhfdXJscywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdXJscyDovpPlh7rmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlc1VSTCh1cmxzOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5Yqg5YWl5YyF5ZCNXHJcbiAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgJy4nICsgX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb24sIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9KTtcclxuICAgICAgICAvL+WKoOi9vee6ueeQhumbhlxyXG4gICAgICAgIGlmICh0aGlzLmF0bGlhc0NvdW50ID49IDApIHtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5hdGxpYXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczBfXCIgKyBpICsgXCIucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIEZHVUkg5qC5566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJUm9vdE1hbmFnZXIge1xyXG4gICAgLy9VSeWxgue6p3Vp5YiX6KGoXHJcbiAgICBwdWJsaWMgc3RhdGljIGxheWVyVUlMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogZmd1aS5HQ29tcG9uZW50IH07XHJcblxyXG4gICAgLy8g6I635Y+W5p+Q5LiA5bGCVUlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF5ZXJVSShsYXllclR5cGU6IEVVSUxheWVyKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyVUlMaXN0W2xheWVyVHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIOiuvue9ruWMheWQjeWQjue8gFxyXG4gICAgICAgIGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGZndWkuR1Jvb3QuaW5zdC5kaXNwbGF5T2JqZWN0KTtcclxuICAgICAgICAvL+a3u+WKoEZHVUnmoLnoioLngrnmjInpobrluo/mmL7npLpcclxuICAgICAgICB0aGlzLmxheWVyVUlMaXN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRVVJTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllclVJTGlzdFtFVUlMYXllcltfaV1dID0gZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKG5ldyBmZ3VpLkdDb21wb25lbnQoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBmZ3VpIOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVQge1xyXG4gICAgLyoqIHVp5bGC57qna2V5ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBVSUxheWVyS2V5OiBzeW1ib2wgPSBTeW1ib2woJ1VJTGF5ZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5bGC57qn77yM6Zmk5LqGZmd1aeagueeuoeeQhuWZqOWbnuiwg+eUqO+8jOWFtuS7lueahOWcsOaWueivt+S4jeimgeiwg+eUqFxyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEBwYXJhbSBfbGF5ZXIg5bGC57qnIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQsIF9sYXllcjogRVVJTGF5ZXIpIHtcclxuICAgICAgICBfdWlbdGhpcy5VSUxheWVyS2V5XSA9IF9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVp5bGC57qnXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHJldHVybnMgdWnlsYLnuqdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50KTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiBfdWlbdGhpcy5VSUxheWVyS2V5XSBhcyBFVUlMYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp6aG25bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlUb3BTaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlpKfnmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5tYXgoX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnlupXlsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSURvd25TaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlsI/nmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5taW4oX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgLSAxO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaguXVp5o6n5Yi25ZmoXHJcbiAqIOaJgOaciXVp5o6n5Yi25Zmo57G75Z6L57G75Z2H55Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSb290VUlDb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLpVSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNob3coLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmTmV3IOaYr+WQpuaWsOW7ulxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1VJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgSGlkZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZEZWxldGUg5piv5ZCm5Yig6ZmkXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxufSIsImltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAzZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiog5Yid5aeL5YyW5YWo5bGA546v5aKDICovXHJcbiAgICAgICAgR2xvYmFsRDNFbnZpcm9ubWVudC5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlhajlsYAzROeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRDNFbnZpcm9ubWVudCB7XHJcbiAgICAvKiogM2TlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fU2NlbmUzRDogTGF5YS5TY2VuZTNEO1xyXG4gICAgLyoqIOaRhOWDj+acuiAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9DYW1lcmE6IExheWEuQ2FtZXJhO1xyXG4gICAgLyoqIOeBr+WFiSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9MaWdodDogTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHJcbiAgICAvKiog6I635Y+WIDNk5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY2VuZTNEKCk6IExheWEuU2NlbmUzRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9TY2VuZTNEO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDmkYTlg4/mnLogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENhbWVyYSgpOiBMYXlhLkNhbWVyYSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9DYW1lcmE7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOeBr+WFiSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTGlnaHQoKTogTGF5YS5EaXJlY3Rpb25MaWdodCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9MaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMubV9TY2VuZTNELFxyXG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMubV9DYW1lcmEsXHJcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLm1fTGlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QpIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLm1fQ2FtZXJhID0gbmV3IExheWEuQ2FtZXJhO1xyXG4gICAgICAgIHRoaXMubV9MaWdodCA9IG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9DYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9MaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVBvb2wgZnJvbSBcInNyYy9fVC9HYW1lVC9HYW1lUG9vbFwiO1xyXG5pbXBvcnQgVjNVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL1YzVXRpbHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzQ29uZmlnLCBJUHJlZmFic0RpZmZlckNvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOiKgueCueW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmK/pooTliLbkvZPphY3nva5cclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmUHJlZmFic0NvbmZpZyhfY29uZmlnOiBJTm9kZUNvbmZpZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoX2NvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZSAmJiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u6IqC54K55pWw5o2u5Yid5aeL5YyW6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfdGFyZ2V0IOebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE5vZGUoX3NwcjogTGF5YS5TcHJpdGUzRCwgX3RhcmdldDogSU5vZGVDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLCBfdGFyZ2V0KTtcclxuICAgICAgICAvL+iuvue9ruWQjeWtl1xyXG4gICAgICAgIF9zcHIubmFtZSA9IF90YXJnZXQubmFtZTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWPmOaNouebuOWFs+eahOWxnuaAp1xyXG4gICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5L2N572uXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5L2N572uXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24sIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u5peL6L2sXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5peL6L2sXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlciwgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9rue8qeaUvlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOe8qeaUvlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnNjYWxlLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+inpuWPkeebkeWQrFxyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAvL+iuvue9ruW3ruW8glxyXG4gICAgICAgIGxldCBfcHJlZmFiQ29uZmlnOiBJUHJlZmFic0NvbmZpZyA9IF90YXJnZXQgYXMgSVByZWZhYnNDb25maWc7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiTmFtZSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3NwciwgX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Nwci50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5Liq57K+54G15ZKM5rqQ57K+54G155qE5beu5byCXHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfZGlmZmVyIOW3ruW8guaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZXREaWZmZXIoX3NwcjogTGF5YS5TcHJpdGUzRCwgX2RpZmZlcjogSVByZWZhYnNEaWZmZXJDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u5beu5byCJywgX3NwciwgX2RpZmZlcik7XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrkuLTml7blkJHph49cclxuICAgICAgICBsZXQgX2NlbnRyZVYzOiBMYXlhLlZlY3RvcjMgPSBHYW1lUG9vbC5nZXRWMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2RpZmYgb2YgX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3Nwci5nZXRDaGlsZEF0KF9kaWZmLmluZGV4KSBhcyBMYXlhLlNwcml0ZTNELCBfZGlmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bmupDlj5jmjaJcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybTogTGF5YS5WZWN0b3IzW10gPSBbR2FtZVBvb2wuZ2V0VjMoKSwgR2FtZVBvb2wuZ2V0VjMoKSwgR2FtZVBvb2wuZ2V0VjMoKV07XHJcbiAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0ucG9zaXRpb24sIF90cmFuc2Zvcm1bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5ldWxlciwgX3RyYW5zZm9ybVsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLnNjYWxlLCBfdHJhbnNmb3JtWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaciXRyYW5zZm9ybeWxnuaAp1xyXG4gICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzBdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMV0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVsyXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WbnuaUtuS4tOaXtuWQkemHj1xyXG4gICAgICAgIEdhbWVQb29sLnJlY3ljbGVWMyguLi5bX2NlbnRyZVYzLCAuLi5fdHJhbnNmb3JtXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTliLbkvZPlkI3lrZdcclxuICAgICAqIEBwYXJhbSBfcHJlZmFic05hbWVzIOi+k+WHuueahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzOiBzdHJpbmdbXSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuaYr+mihOWItuS9k1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZTogc3RyaW5nID0gKF9ub2RlQ29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lO1xyXG4gICAgICAgIGlmIChfcHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgICAgICBpZiAoIV9wcmVmYWJzTmFtZXMuaW5jbHVkZXMoX3ByZWZhYk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFic05hbWVzLnB1c2goX3ByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbov5jmnInlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmNoaWxkICYmIF9ub2RlQ29uZmlnLmNoaWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg54i26IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2dldFByZWZhYnMg6I635Y+W6aKE5Yi25L2T55qE5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGROb2RlKF9ub2RlOiBMYXlhLk5vZGUsIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZywgX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyLCBfZ2V0UHJlZmFiczogKF9uYW1lOiBzdHJpbmcpID0+IExheWEuU3ByaXRlM0QpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5LiN5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBfZ2V0UHJlZmFicyhfcHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIF9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX3ByZWZhYnNbX3ByZWZhYk5hbWVdID0gX3ByZWZhYnNbX3ByZWZhYk5hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0ucHVzaChfc3ByKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgICAgICBOb2RlVC5zZXROb2RlKF9zcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTm9kZShfc3ByLCBpdGVtLCBfcHJlZmFicywgX2dldFByZWZhYnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJU2NlbmVDb25maWcgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSBcIi4vU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IEFycmF5VXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9BcnJheVV0aWxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IEJhc2VJdGVtUG9vbCBmcm9tIFwic3JjL19UL2NvbS9CYXNlSXRlbVBvb2xcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma8g5a6e5L6LXHJcbiAqIOagueaNruaMh+WumueahOWcuuaZr+mFjee9ruihqOaehOW7uuWcuuaZr1xyXG4gKiDmnKzouqvnu6fmib/oh6rlr7nosaHmsaDln7rnsbvvvIznlKjmnaXnrqHnkIbpooTliLbkvZPnsr7ngbVcclxuICogKiDlj6/ku6Xnu6fmib/mraTnsbvoh6rlrprkuYnlnLrmma9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQmFzZUl0ZW1Qb29sIHtcclxuICAgIC8qKiDlnLrmma/lkI3lrZcgKi9cclxuICAgIHByb3RlY3RlZCBfc2NlbmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIOeOr+WigyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZW52aXJvbm1lbnQ6IElTY2VuZUVudmlyb25tZW50O1xyXG5cclxuICAgIC8qKiDlnLrmma/phY3nva7kv6Hmga8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUNvbmZpZzoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElOb2RlQ29uZmlnLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDlnLrmma/oioLngrnlrp7kvovnvJPlrZggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZU5vZGVzQ2FjaGU6IE1hcDxzdHJpbmdbXSwgU2NlbmVOb2RlW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKiDlnLrmma/kuK3lrZjlnKjnmoRub2Rl6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fb25TY2VuZU5vZGVzOiBTZXQ8U2NlbmVOb2RlPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv6YWN572uICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lQ29uZmlnKCk6IElTY2VuZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlueOr+WigyAqL1xyXG4gICAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9lbnZpcm9ubWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv5b2T5YmN5a2Y5Zyo55qE6IqC54K55YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2NlbmVOb2RlcygpOiBTY2VuZU5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1fb25TY2VuZU5vZGVzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9zY2VuZU5hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfc2NlbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fc2NlbmVOYW1lID0gX3NjZW5lTmFtZTtcclxuICAgICAgICAvL+agueaNruWcuuaZr+WQjeWtl+ivu+WPlumFjee9ruihqOS/oeaBr1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Yid5aeL5YyW5Zy65pmv55qE5ZCN5a2X77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfZGF0YTogSU5vZGVDb25maWdbXSA9IENvbmZpZ1QuZ2V0Q29uZmlnSnNvbkRhdGEoRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTCh0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcucm9vdCk7XHJcbiAgICAgICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5qC56IqC54K55LiL55qE6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZUNvbmZpZ1tfZGF0YVtfaV0ubmFtZV0gPSBfZGF0YVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+iOt+WPluWcuuaZr+aVsOaNruWksei0pS0+JywgdGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u546v5aKD77yM6buY6K6k5Li65YWo5bGAM2Tnjq/looPvvIzlj6/ku6Xoh6rlrprkuYnnjq/looNcclxuICAgICAgICB0aGlzLm1fZW52aXJvbm1lbnQgPSBHbG9iYWxEM0Vudmlyb25tZW50LkVudmlyb25tZW50O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6IqC54K56YWN572uXHJcbiAgICAgKiBAcGFyYW0gX25vZGVOYW1lIOiKgueCueWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUNvbmZpZyhfbm9kZU5hbWU6IHN0cmluZyk6IElOb2RlQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnW19ub2RlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnLrmma/oioLngrlcclxuICAgICAqIEBwYXJhbSBfbmFtZSDoioLngrnlkI3lrZfvvIzlj6/ku6XlpJrkuKrkuIDotbfmnoTlu7pcclxuICAgICAqIEBwYXJhbSBfZmluZENhY2hlIOaYr+WQpuWcqOe8k+WtmOS4reafpeaJviB0cnVlXHJcbiAgICAgKiBAcGFyYW0gX2FkZENhY2hlIOaYr+WQpua3u+WKoOWIsOe8k+WtmCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZU5vZGUoX25hbWU6IHN0cmluZyB8IHN0cmluZ1tdLCBfZmluZENhY2hlOiBib29sZWFuID0gdHJ1ZSwgX2FkZENhY2hlOiBib29sZWFuID0gdHJ1ZSk6IFNjZW5lTm9kZSB7XHJcbiAgICAgICAgbGV0IF9uYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIF9uYW1lID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goX25hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKC4uLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZ1tdID0gW107XHJcbiAgICAgICAgX25hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcucHVzaCh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5pyJ5Liq5Zy65pmv6IqC54K55rKh5pyJ5om+5YiwJywgaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+iOt+WPluWcuuaZr+iKgueCueaXtu+8jOS4gOS4qumFjee9ruS/oeaBr+mDveayoeaJvuWIsCcsIF9uYW1lcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfc2NlbmVOb2RlOiBTY2VuZU5vZGU7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblnKjnvJPlrZjkuK3mib5cclxuICAgICAgICBpZiAoX2ZpbmRDYWNoZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbX2tleSwgX3ZhbHVlXSBvZiB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXlVdGlscy5Db250ZW50SWZTYW1lKF9rZXksIF9uYW1lcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3VzYWJsZTogU2NlbmVOb2RlW10gPSBfdmFsdWUuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlmRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdXNhYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NjZW5lTm9kZSA9IF91c2FibGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKCFfc2NlbmVOb2RlKSB7XHJcbiAgICAgICAgICAgIC8v5paw5bu65LiA5Liq5a6e5L6LXHJcbiAgICAgICAgICAgIF9zY2VuZU5vZGUgPSBuZXcgU2NlbmVOb2RlKF9ub2RlQ29uZmlnLCB0aGlzKTtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmt7vliqDliLDnvJPlrZhcclxuICAgICAgICAgICAgaWYgKF9hZGRDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW19rZXksIF92YWx1ZV0gb2YgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5VXRpbHMuQ29udGVudElmU2FtZShfa2V5LCBfbmFtZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5wdXNoKF9zY2VuZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV9pZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUuc2V0KF9uYW1lcywgW19zY2VuZU5vZGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u546v5aKDXHJcbiAgICAgKiDkvJrmoLnmja7lvZPliY3lnLrmma/kuK3njq/looPphY3nva7orr7nva7njq/looNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIGxldCBfc2NlbmVDb25maWc6IElTY2VuZUNvbmZpZyA9IHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDmkYTlg4/mnLpcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmNhbWVyYSkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5jYW1lcmEsIF9zY2VuZUNvbmZpZy5jYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWFqOWxgOeBr+WFiVxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcubGlnaHQpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQubGlnaHQsIF9zY2VuZUNvbmZpZy5saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5fc2V0RW52aXJvbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uuiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5p6E5bu65pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnVpbGROb2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmFkZChfbm9kZSk7XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9idWlsZE5vZGUoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvliKDpmaTml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5XvvIzkvJrlnKjoioLngrnnnJ/mraPooqvliKDpmaTliY3miafooYzvvIzlj6/ku6XlnKjov5nph4zmlLbpm4bpooTliLbkvZPjgIJcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVOb2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmRlbGV0ZShfbm9kZSk7XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9kZWxldGVOb2RlKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueWKoOi9vei/m+W6plxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5Yqg6L295pe277yM5Zue6LCD55So6L+Z5Liq5Zue6LCD5Lyg5Ye65Yqg6L296L+b5bqmXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfbiwgX25vZGUpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRQcm9ncmVzcyhfbiwgX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE5Yi25L2TXHJcbiAgICAgKiDlvZPlvZPliY3lnLrmma/kuIvnmoToioLngrnooqvmnoTlu7rml7bvvIzkvJrku47ov5nph4zmi7/pooTliLbkvZPvvIzlj6/ku6XlnKjov5nph4zmlLbpm4bpooTliLbkvZNcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQcmVmYWJzKF9uYW1lOiBzdHJpbmcpOiBMYXlhLlNwcml0ZTNEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJlZmFicyhfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLS0tLSDlm57osIPlh73mlbBcclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxuXHJcbiAgICAvKiog6K6+572u546v5aKD5ZCO5omn6KGM55qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX3NldEVudmlyb25tZW50KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkgeyB9XHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueiiq+aehOW7uueahOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9ub2RlIOebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2J1aWxkTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iKgueCueaehOW7uicsIF9ub2RlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K56KKr5Yig6Zmk55qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZGVsZXRlTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iKgueCueWIoOmZpCcsIF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6YCa6L+H6aKE5Yi25L2T5ZCN5a2X6I635Y+W6aKE5Yi25L2T55qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2dldFByZWZhYnMoX25hbWU6IHN0cmluZyk6IExheWEuU3ByaXRlM0Qge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCflj5bpooTliLbkvZMnLCBfbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuR2V0UmVzKEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKF9uYW1lKSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuVxyXG4gKiDnlKjmnaXmnoTlu7rlnLrmma/oioLngrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZSB7XHJcbiAgICAvKiog5omA5bGe5Zy65pmvICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmU6IFNjZW5lO1xyXG4gICAgLyoqIOaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmRGVsZXRlOiBib29sZWFuO1xyXG4gICAgLyoqIOiKgueCuemFjee9ruS/oeaBr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdO1xyXG4gICAgLyoqIOiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGU6IExheWEuTm9kZTtcclxuICAgIC8qKiDpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIOmihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyO1xyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmTG9hZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiog6I635Y+W5omA5bGe5Zy65pmvICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lKCk6IFNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluiKgueCuemFjee9ruS/oeaBryAqL1xyXG4gICAgcHVibGljIGdldCBub2RlQ29uZmlncygpOiBJTm9kZUNvbmZpZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGVDb25maWdzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHVibGljIGdldCBpZkRlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+iKgueCuSAqL1xyXG4gICAgcHVibGljIGdldCBub2RlKCk6IExheWEuTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ub2RlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzKCk6IElQcmVmYWJzR2F0aGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnM7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T5ZCN5a2X5YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnNOYW1lKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnNOYW1lcztcclxuICAgIH1cclxuICAgIC8qKiDmmK/lkKblnKjliqDovb0gKi9cclxuICAgIHB1YmxpYyBnZXQgaWZMb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZMb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5Zy65pmv6IqC54K55a6e5L6LXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWdzIOiKgueCuemFjee9ruS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zY2VuZSDmiYDlsZ7lnLrmma9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXSwgX3NjZW5lOiBTY2VuZSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lID0gX3NjZW5lO1xyXG4gICAgICAgIC8v6buY6K6k5Li65Yig6Zmk54q25oCBXHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MgPSBfbm9kZUNvbmZpZ3M7XHJcbiAgICAgICAgLy/mj5Dlj5bpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAgICB0aGlzLm1fcHJlZmFic05hbWVzID0gW107XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgTm9kZVQuZ2V0UHJlZmFic05hbWVzKHRoaXMubV9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWVzVVJMOiBzdHJpbmdbXSA9IHRoaXMubV9wcmVmYWJzTmFtZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkM0RBc3luYyhfcHJlZmFiTmFtZXNVUkwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKG4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3Jlc3Mobik7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtuXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5p6E5bu6XHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jQnVpbGQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPFNjZW5lTm9kZT4ge1xyXG4gICAgICAgIHRoaXMubV9pZkxvYWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTY2VuZU5vZGU+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXN5bmNMb2FkKF9vblByb2dyZXNzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9pZkxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/lkJHlnLrmma/kvKDlh7rliqDovb3ov5vluqZcclxuICAgICAgICB0aGlzLm1fc2NlbmUubG9hZFByb2dyZXNzKF9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7ulxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8v6LCD55So5Zy65pmv55qE5Zue6LCDXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmJ1aWxkTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG5ldyBMYXlhLk5vZGU7XHJcbiAgICAgICAgLy/mt7vliqDliLDmiYDlsZ7lnLrmma/njq/looPkuK1cclxuICAgICAgICB0aGlzLm1fc2NlbmUuZW52aXJvbm1lbnQuc2NlbmUuYWRkQ2hpbGQodGhpcy5tX25vZGUpO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0ge307XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICB0aGlzLm1fbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgTm9kZVQuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIHRoaXMubV9wcmVmYWJzLCAoX25hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZS5nZXRQcmVmYWJzKF9uYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICh0aGlzLm1faWZMb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+iKgueCuei/mOWcqOaehOW7uuWNtOivleWbvuWIoOmZpOOAgicpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIC8v5Yig6Zmk5LmL5YmN6LCD55So5Zy65pmv55qE5Zue6LCD77yM5pa55L6/5pS26ZuG6aKE5Yi25L2TXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmRlbGV0ZU5vZGUodGhpcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWfuuexu+aVsOaNrlxyXG4gKiAhIOWPquiDveWHuueOsOaVsOaNruWxgumdoueahOS4nOilv1xyXG4gKiDmlbDnu4TvvIzlr7nosaHvvIzlgLwgKOaVsOWtl++8jOWtl+espuS4su+8jOW4g+WwlOWAvClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIlxyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+aVsOaNruS7o+eQhlxyXG4gKiDmiYDmnInlhbPkuo7ku6PnkIbmlbDmja7nmoTnsbvpg73ku47ov5nph4znu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiB7XHJcbiAgICAvKiog5pWw5o2u5qih5p2/ICovXHJcbiAgICBwcml2YXRlIGRhdGFUZW1wbGF0ZTogeyBuZXcoKTogRGF0YSB9O1xyXG5cclxuICAgIC8qKiDmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDmlbDmja7ku6PnkIblt6XlhbcgKi9cclxuICAgIHByb3RlY3RlZCBtX29iamVjdFByb3h5VDogT2JqZWN0UHJveHlUO1xyXG5cclxuICAgIC8qKiDpnIDopoHkv53lrZjnmoTmlbDmja4gKi9cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNldFByb3h5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTZXRQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaVsOaNruS7o+eQhuWZqFxyXG4gICAgICog6YCa6L+H6L+Z5Liq5pWw5o2u5Luj55CG5Zmo5Y+v5Lul5re75Yqg5Luj55CG5pWw5o2u77yM5ZKM5re75Yqg5pWw5o2u55uR5ZCs5Zue6LCDIFvphY3lkIggcm9vdERhdGEg5L2/55SoXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdFByb3h5VCgpOiBPYmplY3RQcm94eVQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fb2JqZWN0UHJveHlUO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrmlrDnmoTmlbDmja5cclxuICAgICAqIOeUqOS6jumHjeaehOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+WmguaenOayoeacieaVsOaNruaooeadv+eahOivnVxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLDmlbDmja7mqKHmnb/vvIHor7fkvb/nlKjmlbDmja7mqKHmnb/oo4XppbDlmajoo4XppbDor6XnsbsnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5kYXRhVGVtcGxhdGUoKSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0RGF0YSgpO1xyXG59IiwiaW1wb3J0IE1kNSBmcm9tICcuL01kNSc7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tICcuL0Jhc2VEYXRhUHJveHknO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSAnLi9CYXNlRGF0YSc7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tICdzcmMvQ29uZmlnL19NYWluQ29uZmlnJztcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tICcuL09iamVjdFByb3h5VCc7XHJcblxyXG4vKipcclxuICog5Z+657G75pys5Zyw5pWw5o2u5Luj55CG77yM6YCa6L+H5q2k57G75Y+v5Lul6K6/6Zeu5pys5Zyw5L+d5a2Y55qE5pWw5o2uXHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUxvY2FsRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a+55q+U5pWw5o2uXHJcbiAgICAgKiDpu5jorqTkuLp0cnVl77yM5aaC5p6c5Li655yf5b2T5Li657q/5LiK5qih5byP5pe25Lya55Sf5oiQ5LiA5Liq5Yqg5a+G55qE5a+55q+U5pWw5o2u77yM6Ziy5q2i55So5oi35pS55Yqo5pys5Zyw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaWZEaWZmZXJEYXRhOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDojrflj5bkv53lrZjlkI3np7BcclxuICAgICAqIOm7mOiupOi/lOWbnuexu+WQje+8jOWPr+S7pemHjeWGmVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9zYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6buY6K6k6L+U5Zue57G75ZCNXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS/neWtmOaVsOaNrueahOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+mhueebruWQjeWtlyArIOS/neWtmOWQjeWtlyArIOmhueebrueJiOacrFxyXG4gICAgICAgIHJldHVybiBfTWFpbkNvbmZpZy5OYW1lICsgJy0nICsgdGhpcy5fc2F2ZU5hbWUgKyAnLScgKyBfTWFpbkNvbmZpZy5WZXJzaW9ucyArIChfTWFpbkNvbmZpZy5PbkxpbmUgPyAnXm9uJyA6ICdedGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWvueavlOaVsOaNrueahOS/neWtmOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgZGlmZmVyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdCh0aGlzLnNhdmVOYW1lICsgJ19fdmVyaWZ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8v6K6w5b2V5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5fcmVhZERhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhuWMheijheaVsOaNrlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluaVsOaNruS7o+eQhuW3peWFt1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgICAgICAvL+a3u+WKoOiuvue9ruebkeWQrFxyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgdGhpcy5fZGF0YVNldE1vbml0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Yid5aeL5YyW5pys5Zyw5pWw5o2u5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWujOaIkO+8jOe7p+aJv+S9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKiDmlbDmja7ooqvorr7nva7nm5HlkKwgKi9cclxuICAgIHByaXZhdGUgX2RhdGFTZXRNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvliqjkv53lrZjmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYEg6buY6K6k5Li6dHJ1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2F2ZShfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEsIF9pZkNsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5L+d5a2Y5omn6KGM6Zif5YiXICovXHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1F1ZXVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgICAqIEBwYXJhbSBtX2RhdGEg5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2F2ZShtX2RhdGE6IERhdGEsIF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8v5re75Yqg5pe26Ze05Yik5patXHJcbiAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrVGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZmQ5rWBXHJcbiAgICAgICAgaWYgKCFfaWZDbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlKys7XHJcbiAgICAgICAgICAgIC8v6ZmQ5rWB77yM5q+P5LiA5qyh5a6P5Lu75Yqh5Y+q5L+d5a2Y5LiA5qyh5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5oqK5L+d5a2Y5Lu75Yqh5rOo5YaM6L+b5b6u5Lu75Yqh5YiX6KGo77yM5bCG5Lya5Zyo5pys5qyh5pWw5o2u5L+u5pS555qE5a6P5Lu75Yqh5a6M5oiQ5ZCO5bm25Zyo5LiL5qyh5a6P5Lu75Yqh5byA5aeL5YmN6KKr5YWo6YOo5omn6KGMXHJcbiAgICAgICAgICAgIC8vIHF1ZXVlTWljcm90YXNrKCgpID0+IHsvL+afkOS6m+W5s+WPsOS8muS4jeWFvOWuuVxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUtLTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja7liY0nKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICBwcml2YXRlIF9zYXZlKG1fZGF0YT86IERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2uJyk7XHJcbiAgICAgICAgLy/luo/liJfljJZcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG1fZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuc2F2ZU5hbWUsIGpzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5blr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXJKc29uID0gdGhpcy5nZXREaWZmZXJEYXRhKGpzb24pO1xyXG4gICAgICAgICAgICAvL+S/neWtmOWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuZGlmZmVyTmFtZSwgX2RpZmZlckpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCkgLSB0aGlzLm1fc2F2ZVRvRGlza1RpbWU7XHJcbiAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gMDtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv5L+d5a2Y5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47mnKzlnLDojrflj5bmlbDmja5cclxuICAgIHByaXZhdGUgX3JlYWREYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v6K+75Y+W5pys5Zyw5pWw5o2uXHJcbiAgICAgICAgbGV0IHJlYWRTdHIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuc2F2ZU5hbWUpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/lr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuZGlmZmVyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpZmZlckRhdGEocmVhZFN0cikgIT0gX2RpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrmlrDnmoTlrp7kvotcclxuICAgICAgICBsZXQgX3NhdmVEYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3mlbDmja7mmK/lkKbooqvnr6HmlLlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVhZFN0cikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShyZWFkU3RyKTtcclxuICAgICAgICAgICAgICAgIC8v55So5pys5Zyw55qE5pWw5o2u5aGr5YWF5b2T5YmN5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gX3NhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NhdmVEYXRhW2tleV0gPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3NhdmVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5bm25L+d5a2Y5LiA5Liq5paw5pWw5o2uXHJcbiAgICBwcml2YXRlIF9zYXZlTmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICBsZXQgbV9kYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/kv53lrZjmlbDmja7vvIzkuI3pmZDmtYFcclxuICAgICAgICB0aGlzLnNhdmUobV9kYXRhIGFzIERhdGEsIGZhbHNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBtX2RhdGEgYXMgRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WkhOeQhuWvueavlOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBnZXREaWZmZXJEYXRhKF9zdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoIV9zdHJpbmcpIHJldHVybiAnJztcclxuICAgICAgICAvL+WKoOWvhlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHQoX3N0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDmja7ljZXlkJHliqDlr4ZcclxuICAgIHByaXZhdGUgZW5jcnlwdChfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX2VuY3J5cHRTdHI6IHN0cmluZyA9IGBMYXlhTWluaUdhbWUtJHt0aGlzLnNhdmVOYW1lfToke19zdHJpbmd9YDtcclxuICAgICAgICAvL+WIpOaWreiDveWQpuS9v+eUqG1kNVxyXG4gICAgICAgIGlmIChNZDUuaWZVc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1kNS5oYXNoU3RyKF9lbmNyeXB0U3RyKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5LiN55So5Lu75L2V5Yqg5a+GXHJcbiAgICAgICAgICAgIHJldHVybiAnbm9FbmNyeXB0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSBcIi4vQmFzZURhdGFQcm94eVwiO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNruS7o+eQhuWfuuexu1xyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaG9ydERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKiog5Li05pe25pWw5o2u6buY6K6k5LiN6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIZcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbmlbDmja7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruWkhOeQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7mqKHmnb/oo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfZGF0YSDmlbDmja7mqKHmnb9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZURhdGFUZW1wbGF0ZShfZGF0YTogeyBuZXcoKTogQmFzZURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlbDmja7mqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5kYXRhVGVtcGxhdGUgPSBfZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVHlwZVNjcmlwdCBNZDXliqDlr4ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1kNSB7XHJcbiAgICAvKiog6IO95ZCm5L2/55SoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVXNlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBPbmUgdGltZSBoYXNoaW5nIGZ1bmN0aW9uc1xyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZFN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hBc2NpaVN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRBc2NpaVN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuICAgIC8vIFByaXZhdGUgU3RhdGljIFZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGVJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmZXIzMklkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4T3V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8vIFBlcm1hbmVudCBpbnN0YW5jZSBpcyB0byB1c2UgZm9yIG9uZS1jYWxsIGhhc2hpbmdcclxuICAgIHByaXZhdGUgc3RhdGljIG9uZVBhc3NIYXNoZXIgPSBuZXcgTWQ1KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hleCh4OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGhjID0gTWQ1LmhleENoYXJzO1xyXG4gICAgICAgIGNvbnN0IGhvID0gTWQ1LmhleE91dDtcclxuICAgICAgICBsZXQgbjtcclxuICAgICAgICBsZXQgb2Zmc2V0O1xyXG4gICAgICAgIGxldCBqO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGkgKiA4O1xyXG4gICAgICAgICAgICBuID0geFtpXTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7IGogKz0gMikge1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMSArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMCArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoby5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbWQ1Y3ljbGUoeDogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5LCBrOiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXkpIHtcclxuICAgICAgICBsZXQgYSA9IHhbMF07XHJcbiAgICAgICAgbGV0IGIgPSB4WzFdO1xyXG4gICAgICAgIGxldCBjID0geFsyXTtcclxuICAgICAgICBsZXQgZCA9IHhbM107XHJcbiAgICAgICAgLy8gZmYoKVxyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMF0gLSA2ODA4NzY5MzYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1syXSArIDYwNjEwNTgxOSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1szXSAtIDEwNDQ1MjUzMzAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s1XSArIDEyMDAwODA0MjYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbNl0gLSAxNDczMjMxMzQxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbOF0gKyAxNzcwMDM1NDE2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbOV0gLSAxOTU4NDE0NDE3IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzExXSAtIDE5OTA0MDQxNjIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMTJdICsgMTgwNDYwMzY4MiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzE0XSAtIDE1MDIwMDIyOTAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTVdICsgMTIzNjUzNTMyOSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgLy8gZ2coKVxyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMV0gLSAxNjU3OTY1MTAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxMV0gKyA2NDM3MTc3MTMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMF0gLSAzNzM4OTczMDIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxMF0gKyAzODAxNjA4MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzE1XSAtIDY2MDQ3ODMzNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s5XSArIDU2ODQ0NjQzOCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzE0XSAtIDEwMTk4MDM2OTAgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s4XSArIDExNjM1MzE1MDEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMTNdIC0gMTQ0NDY4MTQ2NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1s3XSArIDE3MzUzMjg0NzMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMTJdIC0gMTkyNjYwNzczNCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaGgoKVxyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzVdIC0gMzc4NTU4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzhdIC0gMjAyMjU3NDQ2MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTFdICsgMTgzOTAzMDU2MiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTRdIC0gMzUzMDk1NTYgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMV0gLSAxNTMwOTkyMDYwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzRdICsgMTI3Mjg5MzM1MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbN10gLSAxNTU0OTc2MzIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzEwXSAtIDEwOTQ3MzA2NDAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMTNdICsgNjgxMjc5MTc0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzBdIC0gMzU4NTM3MjIyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1szXSAtIDcyMjUyMTk3OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbNl0gKyA3NjAyOTE4OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s5XSAtIDY0MDM2NDQ4NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1sxMl0gLSA0MjE4MTU4MzUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzE1XSArIDUzMDc0MjUyMCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMl0gLSA5OTUzMzg2NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaWkoKVxyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzBdIC0gMTk4NjMwODQ0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTRdIC0gMTQxNjM1NDkwNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbNV0gLSA1NzQzNDA1NSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMTJdICsgMTcwMDQ4NTU3MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1szXSAtIDE4OTQ5ODY2MDYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzEwXSAtIDEwNTE1MjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzFdIC0gMjA1NDkyMjc5OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbOF0gKyAxODczMzEzMzU5IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzE1XSAtIDMwNjExNzQ0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzEzXSArIDEzMDkxNTE2NDkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzRdIC0gMTQ1NTIzMDcwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzJdICsgNzE4Nzg3MjU5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s5XSAtIDM0MzQ4NTU1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcblxyXG4gICAgICAgIHhbMF0gPSBhICsgeFswXSB8IDA7XHJcbiAgICAgICAgeFsxXSA9IGIgKyB4WzFdIHwgMDtcclxuICAgICAgICB4WzJdID0gYyArIHhbMl0gfCAwO1xyXG4gICAgICAgIHhbM10gPSBkICsgeFszXSB8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEludDMyQXJyYXkgPSBuZXcgSW50MzJBcnJheSg0KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjogQXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNjgpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyODogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjMyOiBVaW50MzJBcnJheTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyLCAwLCA2OCk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYnVmZmVyLCAwLCAxNyk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLnNldChNZDUuc3RhdGVJZGVudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhciB0byBjb2RlIHBvaW50IHRvIHRvIGFycmF5IGNvbnZlcnNpb246XHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvY2hhckNvZGVBdFxyXG4gICAgLy8gI0V4YW1wbGUuM0FfRml4aW5nX2NoYXJDb2RlQXRfdG9faGFuZGxlX25vbi1CYXNpYy1NdWx0aWxpbmd1YWwtUGxhbmVfY2hhcmFjdGVyc19pZl90aGVpcl9wcmVzZW5jZV9lYXJsaWVyX2luX3RoZV9zdHJpbmdfaXNfdW5rbm93blxyXG4gICAgcHVibGljIGFwcGVuZFN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgY29kZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2KSArIDB4QzA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGUgJiAweDNGIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhEODAwIHx8IGNvZGUgPiAweERCRkYpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyKSArIDB4RTA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSAoKGNvZGUgLSAweEQ4MDApICogMHg0MDApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgLSAweERDMDApICsgMHgxMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMEZGRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaWNvZGUgc3RhbmRhcmQgc3VwcG9ydHMgY29kZSBwb2ludHMgdXAgdG8gVSsxMEZGRkYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDE4KSArIDB4RjA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPj0gNjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgICAgICBidWZMZW4gLT0gNjQ7XHJcbiAgICAgICAgICAgICAgICBidWYzMlswXSA9IGJ1ZjMyWzE2XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEFzY2lpU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKHN0ci5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gc3RyLmNoYXJDb2RlQXQoaisrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRCeXRlQXJyYXkoaW5wdXQ6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oaW5wdXQubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGlucHV0W2orK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlbGYuX3N0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBidWZmZXI6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgc2VsZi5fYnVmZmVyOCksXHJcbiAgICAgICAgICAgIGJ1Zmxlbjogc2VsZi5fYnVmZmVyTGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHNlbGYuX2RhdGFMZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXRlOiBbc1swXSwgc1sxXSwgc1syXSwgc1szXV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYnVmID0gc3RhdGUuYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHggPSBzdGF0ZS5zdGF0ZTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gc3RhdGUuYnVmbGVuO1xyXG4gICAgICAgIHNbMF0gPSB4WzBdO1xyXG4gICAgICAgIHNbMV0gPSB4WzFdO1xyXG4gICAgICAgIHNbMl0gPSB4WzJdO1xyXG4gICAgICAgIHNbM10gPSB4WzNdO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcjhbaV0gPSBidWYuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZChyYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGNvbnN0IGkgPSAoYnVmTGVuID4+IDIpICsgMTtcclxuICAgICAgICBsZXQgZGF0YUJpdHNMZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gYnVmTGVuO1xyXG5cclxuICAgICAgICBidWY4W2J1Zkxlbl0gPSAweDgwO1xyXG4gICAgICAgIGJ1ZjhbYnVmTGVuICsgMV0gPSBidWY4W2J1ZkxlbiArIDJdID0gYnVmOFtidWZMZW4gKyAzXSA9IDA7XHJcbiAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5LnN1YmFycmF5KGkpLCBpKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZkxlbiA+IDU1KSB7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBmaW5hbCBjb21wdXRhdGlvbiBiYXNlZCBvbiB0aGUgdGFpbCBhbmQgbGVuZ3RoXHJcbiAgICAgICAgLy8gQmV3YXJlIHRoYXQgdGhlIGZpbmFsIGxlbmd0aCBtYXkgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XHJcbiAgICAgICAgZGF0YUJpdHNMZW4gPSB0aGlzLl9kYXRhTGVuZ3RoICogODtcclxuICAgICAgICBpZiAoZGF0YUJpdHNMZW4gPD0gMHhGRkZGRkZGRikge1xyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBkYXRhQml0c0xlbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YUJpdHNMZW4udG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsbyA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcclxuICAgICAgICAgICAgY29uc3QgaGkgPSBwYXJzZUludChtYXRjaGVzWzFdLCAxNikgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGxvO1xyXG4gICAgICAgICAgICBidWYzMlsxNV0gPSBoaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhdyA/IHRoaXMuX3N0YXRlIDogTWQ1Ll9oZXgodGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ajgOafpU1kNeaYr+WQpuWPr+eUqFxyXG5pZiAoTWQ1Lmhhc2hTdHIoJ2hlbGxvJykgIT09ICc1ZDQxNDAyYWJjNGIyYTc2Yjk3MTlkOTExMDE3YzU5MicpIHtcclxuICAgIC8v6K6+572u5LiN6IO95L2/55SoXHJcbiAgICBNZDUuaWZVc2UgPSBmYWxzZTtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oJ01kNSBzZWxmIHRlc3QgZmFpbGVkLicpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDlr7nosaHku6PnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3h5VCB7XHJcbiAgICAvKiog55uR5ZCs5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbW9uaXRvckxpc3Q6IHtcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fICovXHJcbiAgICAgICAgX3RoaXM6IGFueSxcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVICovXHJcbiAgICAgICAgX2JhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIC8qKiDmupDlr7nosaEgKi9cclxuICAgICAgICBfb2JqPzogb2JqZWN0LFxyXG4gICAgICAgIC8qKiDplK7lgLwgKi9cclxuICAgICAgICBfa2V5Pzogc3RyaW5nLFxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnm5HlkKxcclxuICAgICAqIOebkeWQrOafkOS4quWvueixoeeahOafkOS4quWxnuaAp+aYr+WQpuWPkeeUn+abtOaUuVxyXG4gICAgICog5aaC5p6c5Y+v6YCJ5bGe5oCn6YO95LiN5aGr55qE6K+d5YiZ55uR5ZCs5YWo6YOo55uR5ZCs5pWw5o2u5bGe5oCn5pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVXHJcbiAgICAgKiBAcGFyYW0gX29iaiDnm67moIflr7nosaHvvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlhoXlrrnmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfa2V5IOmUruWQje+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTW9uaXRvcjxPIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgTz4oX3RoaXM6IGFueSwgX2JhY2s6IEZ1bmN0aW9uLCBfb2JqPzogTywgX2tleT86IEspIHtcclxuICAgICAgICAvL+a3u+WKoOWIsOebkeWQrOWIl+ihqFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgX3RoaXMsXHJcbiAgICAgICAgICAgIF9iYWNrLFxyXG4gICAgICAgICAgICBfb2JqLFxyXG4gICAgICAgICAgICBfa2V5OiBfa2V5IGFzIHN0cmluZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF90aGlzIOWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOWbnuiwg+aWueazlVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJNb25pdG9yKF90aGlzOiBhbnksIF9iYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QgPSB0aGlzLm1fbW9uaXRvckxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICAgICAgICAgaXRlbS5fdGhpcyA9PSBfdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Y+v6YCJ55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgX2JhY2sgPyBpdGVtLl9iYWNrID09IF9iYWNrIDogdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9vIOa6kOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHk8RGF0YSBleHRlbmRzIG9iamVjdD4oX286IERhdGEpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0UHJveHkoX28pIGFzIERhdGE7XHJcbiAgICB9XHJcbiAgICAvL+mFjeWQiOiuvue9ruS7o+eQhlxyXG4gICAgcHJpdmF0ZSBfc2V0UHJveHkoX28pOiBvYmplY3Qge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5pmu6YCa5YC857G75Z6L5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIF9vICE9IFwib2JqZWN0XCIgfHwgIV9vKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/lj6/ov63ku6Plr7nosaHlkozmlrnms5VcclxuICAgICAgICBpZiAoIV9vW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuICAgICAgICAgICAgLy/pgY3ljoblr7nosaHorr7nva7ku6PnkIZcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgICAgIF9vW19pXSA9IHRoaXMuX3NldFByb3h5KF9vW19pXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ov5Tlm57mnIDnu4jnmoTku6PnkIblr7nosaFcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoX28sIHtcclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiAgc2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S/ruaUueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IFJlZmxlY3Quc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChfaWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+aYr+S4jeaYr+aVsOe7hOeahGxlbmd0aOWxnuaAp+iiq+S/ruaUuVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkodHJhcFRhcmdldCkgJiYga2V5ID09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWY7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIGdldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaHvvIjpgJrluLjmmK/ku6PnkIbvvIlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluWxnuaAp1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKipcclxuICAgICAqIOS7o+eQhuWvueixoeiiq+iuvue9ruaXtueahOWbnuiwg1xyXG4gICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S7o+eQhuWvueixoeiiq+iuvue9ricsIHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICBsZXQgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAvL+aJp+ihjOebkeWQrFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5YWI5Yik5pat5Luj55CG55uu5qCHXHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9vYmogJiYgaXRlbS5fb2JqICE9IHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2tleSAmJiBpdGVtLl9rZXkgIT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgaXRlbS5fYmFjay5jYWxsKGl0ZW0uX3RoaXMsIC4uLl9hcmd1bWVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog5qC56LCD6K+V57G777yM5omA5pyJ6LCD6K+V57G75b+F6aG755Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGVidWcge1xyXG4gICAgLyoqIOWJjee8gCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQcmVmaXg6IHN0cmluZyA9ICckRGVidWcnO1xyXG5cclxuICAgIC8qKiDmoLnosIPor5Xlr7nosaEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVidWdPYmo6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWQjeWtl++8jOeUqCBXaW5kb3db5YmN57yAICsgX25hbWVdIOiuv+mXrlxyXG4gICAgICog5Y+v5Lul57un5om/5pu05pS56L+Z5Liq5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgX2lmSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq6LCD6K+V5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqIEBwYXJhbSBfaXRlbSDor6Xlr7nosaFcclxuICAgICAqIEBwYXJhbSBfdHlwZSDor6Xlr7nosaHnsbvlnotcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEl0ZW0oX2tleTogc3RyaW5nLCBfaXRlbTogYW55KSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblvIDlkK/kuobosIPor5VcclxuICAgICAgICBpZiAoIV9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2lmSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZkluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBCYXNlRGVidWcuRGVidWdPYmpbdGhpcy5fbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW19rZXldID0gX2l0ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+V5qih5byPXHJcbmlmIChfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAvL+azqOWGjOWFqOWxgOiwg+ivleWvueixoVxyXG4gICAgd2luZG93W0Jhc2VEZWJ1Zy5QcmVmaXhdID0gQmFzZURlYnVnLkRlYnVnT2JqO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+W8gOWQr+iwg+ivleaooeW8j++8jOmAmui/hycsIEJhc2VEZWJ1Zy5QcmVmaXgsICforr/pl64nKSk7XHJcbn0iLCJcclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoFxyXG4gKiAhIOWPquiDvea4uOaIj+WGheS9v+eUqO+8jOS4jeimgeWcqOW3peWFt+S4reS9v+eUqFxyXG4gKiAhIOWwvemHj+WPquWcqOmHjeWkjeWIm+W7uumdnuW4uOWkmuWvueixoeeahOWcsOaWueS9v+eUqO+8jOS4jeeEtuS8muW+l+S4jeWBv+WksVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBvb2wge1xyXG4gICAgLyoqIOWvueixoeaxoOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbExpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW08VCBleHRlbmRzIGFueT4oX3NpZ246IEVHYW1lUG9vbFNpZ24pOiBUIHtcclxuICAgICAgICAvL+WFiOWIsOacrOWcsOWvueixoeaxoOWIl+ihqOS4reafpeaJvlxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xMaXN0W19zaWduXSAmJiB0aGlzLnBvb2xMaXN0W19zaWduXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2xMaXN0W19zaWduXS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3NpZ24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjMpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjIpIGFzIGFueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtuWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIOWbnuaUtuagh+ivhlxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWbnuaUtuWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVJdGVtKF9zaWduOiBFR2FtZVBvb2xTaWduLCAuLi5faXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPqua3u+WKoOS4jeWMheWQq+eahOWFg+e0oFxyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dLmluY2x1ZGVzKF9vKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0ucHVzaChfbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYzKCk6IExheWEuVmVjdG9yMyB7XHJcbiAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMz4oRUdhbWVQb29sU2lnbi52Myk7XHJcbiAgICAgICAgX3YzLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYzXHJcbiAgICAgKiBAcGFyYW0gX3YzIOW+heWbnuaUtueahHYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYzKC4uLl92M3M6IExheWEuVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYzLCAuLi5fdjNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjIoKTogTGF5YS5WZWN0b3IyIHtcclxuICAgICAgICBsZXQgX3YyOiBMYXlhLlZlY3RvcjIgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IyPihFR2FtZVBvb2xTaWduLnYyKTtcclxuICAgICAgICBfdjIuc2V0VmFsdWUoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djJcclxuICAgICAqIEBwYXJhbSBfdjIg5b6F5Zue5pS255qEdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjIoLi4uX3YyczogTGF5YS5WZWN0b3IyW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjIsIC4uLl92MnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGg5qCH6K+GXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFR2FtZVBvb2xTaWduIHtcclxuICAgIC8qKiAz57u05ZCR6YePICovXHJcbiAgICB2MyxcclxuICAgIC8qKiAy57u05ZCR6YePICovXHJcbiAgICB2MixcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCflvIDlp4vliqDovb3muLjmiI/liJ3lp4vljJbotYTmupAnKSk7XHJcbiAgICAgICAgLy/miafooYzliqDovb3kuYvliY3nmoTlvILmraVcclxuICAgICAgICB0aGlzLl9sb2FkQmVmb3JlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5Yqg6L296aG5XHJcbiAgICAgICAgICAgIGxldCBfcmVzTG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gdGhpcy5fZ2V0TG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIC8v5byC5q2l5Yqg6L295Yqg6L296aG5XHJcbiAgICAgICAgICAgIFJlc0xvYWRHcm91cC5sb2FkQXN5bmMoX3Jlc0xvYWRJdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFBsYW4oaSk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuX2xvYWRJdGVtc0NvbSwgdW5kZWZpbmVkLCBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+a4uOaIj+WKoOi9veWujOaIkCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWFiOWKoOi9veS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRCZWZvcmUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQbGFuKF9pOiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQ29tKCkgeyB9XHJcbn0iLCJpbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCIuL0tleVJlc01hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDlhazlhbHotYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbVJlc1VybCB7XHJcbiAgICAvKipcclxuICAgICAqIOmfs+S5kOaWh+S7tui3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5paH5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNdXNpY1VSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLm11c2ljKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDpn7PmlYjlkI3lrZcgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTb3VuZFVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLnNvdW5kKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77moIflkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJY29uVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5wbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuaWNvbikgKyBuYW1lICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvueJh+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5Zu+54mH6LWE5rqQ5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbWdVUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAncG5nJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLmltZykgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOearuiCpOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg55qu6IKk5ZCN56ewIFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2tpblVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICdwbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuc2tpbikgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnlkI3lrZfmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVLZXlSZXNOYW1lIHtcclxuICAgIC8qKiDmoLnnm67lvZUgKi9cclxuICAgIFJvb3RSZXMgPSAncmVzJyxcclxuICAgIC8qKiDphY3nva7ooajnm67lvZUgKi9cclxuICAgIENvbmZpZ0pzb24gPSAnQ29uZmlnSnNvbicsXHJcbiAgICAvKiog5a2X5L2T55uu5b2VICovXHJcbiAgICBGb250ID0gJ0ZvbnQnLFxyXG4gICAgLyoqIEZHVUnotYTmupDnm67lvZUgKi9cclxuICAgIEZHVUkgPSAnRkdVSScsXHJcbiAgICAvKiog5YWz5Y2h6YWN572u6KGo55uu5b2VICovXHJcbiAgICBTY2VuZUpzb24gPSAnU2NlbmVKc29uJyxcclxuICAgIC8qKiDlhbblroPnm67lvZUgKi9cclxuICAgIE90aGVyID0gJ090aGVyJyxcclxuICAgIC8qKiBpY29u55uu5b2VICovXHJcbiAgICBpY29uID0gJ2ljb24nLFxyXG4gICAgLyoqIGltZ+ebruW9lSAqL1xyXG4gICAgaW1nID0gJ2ltZycsXHJcbiAgICAvKiog6Z+z5LmQ5paH5Lu255uu5b2VICovXHJcbiAgICBtdXNpYyA9ICdtdXNpYycsXHJcbiAgICAvKiog6Z+z5pWI5paH5Lu255uu5b2VICovXHJcbiAgICBzb3VuZCA9ICdzb3VuZCcsXHJcbiAgICAvKiog55qu6IKk5paH5Lu255uu5b2VICovXHJcbiAgICBza2luID0gJ3NraW4nLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSAnLi9FS2V5UmVzTmFtZSc7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gJy4vS2V5UmVzTWFuYWdlcic7XHJcbi8qKlxyXG4gKiDlv4XopoHnmoTmuLjmiI/otYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVzc2VudGlhbFJlc1VybHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWz5Y2h6YWN572u5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2NlbmVDb25maWdVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlNjZW5lSnNvbikgKyBfbmFtZSArICcuanNvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahKc29u5paH5Lu2UlVMXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6YWN572u6KGo5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlnSnNvblVSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuQ29uZmlnSnNvbikgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZHVUnljIVcclxuICAgICAqIEBwYXJhbSBfbmFtZSDljIXlkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJUGFja1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRkdVSSkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtl+S9k+WcsOWdgFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWtl+S9k+WQjeWtl++8jOWKoOWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZvbnRVUkwoX25hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Gb250KSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omA5pyJ6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWxsU2NlbmVQcmVmYWJzTmFtZXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvL+mihOWItuS9k+WcuuaZr+e8k+WtmFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ByZWZhYnNTY2VuZUNhY2hlOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliLbkvZPotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiVVJMKHByZWZhYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WFiOWcqOe8k+WtmOS4reafpeaJvuWcuuaZr+WQjeWtl1xyXG4gICAgICAgIGlmICh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTCh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreivpemihOWItuS9k+WcqOWTquS4quWcuuaZr+S4reiiq+WvvOWHuueahFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0uaW5kZXhPZignQCcgKyBwcmVmYWIgKyAnQCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSA9IF9pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKF9pKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInlnKjlnLrmma/mib7liLDpooTliLbkvZMnLCBwcmVmYWIsICflj6/og73mmK/msqHmnInlr7zlh7rlnLrmma/pooTliLbkvZPliJfooajlr7zoh7TnmoTjgIInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lnLrmma/pooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbyDlnLrmma/pooTliLbkvZPpm4blkIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmYWJTY2VuZU5hbWVzKF9vOiBhbnkpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXSA9IF9vW19pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCIuLi9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWIl+ihqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UmVzTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogS2V5UmVzTWFuYWdlcjtcclxuXHJcbiAgICAvL+WFs+mUrui1hOa6kOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX0tleVJlc0xpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v5rOo5YaM5YWz6ZSu6LWE5rqQ55uu5b2VXHJcbiAgICAgICAgdGhpcy5tX0tleVJlc0xpc3QgPSB7XHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Sb290UmVzXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkNvbmZpZ0pzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuQ29uZmlnSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZHVUldOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRkdVSSArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlNjZW5lSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5TY2VuZUpzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Gb250XTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZvbnQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5PdGhlcl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyxcclxuICAgICAgICAgICAgLy/lhbbku5bot6/lvoRcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmljb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pY29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaW1nXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaW1nICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUubXVzaWNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5tdXNpYyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNvdW5kXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc291bmQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5za2luXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc2tpbiArICcvJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubV9LZXlSZXNMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblrZjlnKjmn5DkuKrlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmS2V5UmVzKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09IF9rZXk7XHJcbiAgICAgICAgfSkgIT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhbPplK7ngrnotYTmupDnmoTot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJlc1VSTChfa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgea3u+WKoOWFs+mUrui3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX3N0cmluZyDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhZGRSZXNVcmwoX2tleTogc3RyaW5nLCBfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XSA9IF9zdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9zdHIg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZWRpdEtleVJlc0xpc3QoX2tleTogc3RyaW5nLCBfc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX3JlcGxhY2U6IHN0cmluZyA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JlcGxhY2UgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfkv67mlLnotYTmupDot6/lvoTlpLHotKXvvIzmsqHmnIknICsgX2tleSArICfov5nkuKrlhbPplK7ot6/lvoTvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7/mjaLmiYDmnInotYTmupDot6/lvoTkuK3nmoTlhbPplK7ngrnot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0gPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0ucmVwbGFjZShfcmVwbGFjZSwgX3N0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ+S/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hCcsIF9yZXBsYWNlLCAn5pu/5o2i5oiQJywgX3N0cikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hOWIl+ihqFxyXG4gICAgICogQHBhcmFtIG1vZGVsIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQodXJsczogYW55LCBtb2RlbDogRVJlc0xvYWRNb2RlbCwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVybHMpKSB7XHJcbiAgICAgICAgICAgIC8v5Y676Zmk6Jma5YC8XHJcbiAgICAgICAgICAgIHVybHMgPSB1cmxzLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlhoXlrrnpnIDopoHliqDovb1cclxuICAgICAgICBpZiAoIXVybHMgfHwgKEFycmF5LmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMzpcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRl5pivM0TnmoTmjqXlj6PvvIzpgILnlKjkuo4zROmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIuY3JlYXRlKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQyOlxyXG4gICAgICAgICAgICAgICAgLy9sb2Fk5pivMmTnmoTmjqXlj6PvvIzpgILnlKjkuo4yZOmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EIFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDIsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDNEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQyRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui1hOa6kFxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBub0Nsb25lIOaYr+WQpuS4jeiOt+WPluWFi+mahueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJlcyhyZXNVcmw6IHN0cmluZywgbm9DbG9uZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICBsZXQgZ2V0UmVzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKHJlc1VybCk7XHJcbiAgICAgICAgaWYgKCFnZXRSZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKFwi6LWE5rqQ5bCa5pyq5Yqg6L29XCIsIHJlc1VybCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub0Nsb25lID8gZ2V0UmVzIDogZ2V0UmVzLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIbmjIflrprotYTmupDlnLDlnYDnvJPlrZjjgIJcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJSZXMocmVzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclJlcyhyZXNVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L295qih5byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFUmVzTG9hZE1vZGVsIHtcclxuICAgIC8qKiAzRCDotYTmupAgKi9cclxuICAgIEQzLFxyXG4gICAgLyoqIDJkIOi1hOa6kCAqL1xyXG4gICAgRDIsXHJcbn0iLCJpbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4vUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nu4RcclxuICog6LSf6LSj5aSa5Liq6LWE5rqQ5Yqg6L296aG555qE57uf5LiA5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkR3JvdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiAhIOi/memHjOaYr+S+neasoeWKoOi9veW5tuS4jeaYr+WQjOaXtuWKoOi9veeahFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5L2c5Li65Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChpdGVtczogUmVzTG9hZEl0ZW1bXSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+ayoeacieWKoOi9vemhuVxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a1heaLt+i0ne+8jOmYsuatouaxoeafk+a6kOWIl+ihqFxyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAvL+W8guatpeWIl+ihqOmVv+W6plxyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgLy/kuIDmraXkuIDmraXmtojotLnlvILmraXliJfooahcclxuICAgICAgICBsZXQgX2Y6IEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uSXRlbTogUmVzTG9hZEl0ZW0gPSBpdGVtcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgb25JdGVtLmxvYWRBc3luYyhMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rmgLvov5vluqZcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9sZW5ndGggLSBpdGVtcy5sZW5ndGggLSAxKSArIGkpIC8gX2xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rljZXkuKrliqDovb3pobnliqDovb3lrozmiJDkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLmFyZ3MgPSBbb25JdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgX2YoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM6YCS5b2S5Yqg6L295pa55rOVXHJcbiAgICAgICAgX2YoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzeW5jKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoaXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MsIF9vbkl0ZW1Db20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlc0xvYWQsIHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCIuL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3poblcclxuICog6LSf6LSj5LiA57uE6LWE5rqQ5YiX6KGo55qE5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkSXRlbSB7XHJcbiAgICAvKiog5Yqg6L295qih5byPICovXHJcbiAgICBwcml2YXRlIG1fbG9hZE1vZGVsOiBFUmVzTG9hZE1vZGVsO1xyXG5cclxuICAgIC8qKiDliqDovb3lhbPplK7plK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IGFueTtcclxuXHJcbiAgICAvKiog5Yqg6L295a6M5oiQ5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fY29tQmFjazogTGF5YS5IYW5kbGVyO1xyXG4gICAgLyoqIOWKoOi9vei/m+W6puWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICAvKiog6LWE5rqQ6Lev5b6E5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcmVzOiBhbnk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWFs+mUrumUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9yZXMg6LWE5rqQ5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX21vZGUg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7plK7lgLxcclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDml7bnmoTlm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9yZXM6IGFueSwgX21vZGU6IEVSZXNMb2FkTW9kZWwsIF9rZXk/OiBhbnksIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMubV9yZXMgPSBfcmVzO1xyXG4gICAgICAgIHRoaXMubV9sb2FkTW9kZWwgPSBfbW9kZTtcclxuICAgICAgICB0aGlzLm1fa2V5ID0gX2tleTtcclxuICAgICAgICB0aGlzLm1fY29tQmFjayA9IF9jb21CYWNrO1xyXG4gICAgICAgIHRoaXMubV9vblByb2dyZXNzID0gX29uUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQob25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+WMheijhei/m+W6puWbnuiwg1xyXG4gICAgICAgIGxldCBfX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlciA9IF9vblByb2dyZXNzO1xyXG4gICAgICAgIGlmIChfX29uUHJvZ3Jlc3MgJiYgdGhpcy5tX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgX19vblByb2dyZXNzID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubV9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIF9fb25Qcm9ncmVzcyA9IHRoaXMubV9vblByb2dyZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tX2NvbUJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIHRoaXMubV9jb21CYWNrLCBfX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSksIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgb25Db21wbGV0ZWQsIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwic3JjL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEQyTWFuYWdlciBmcm9tIFwiLi9EMi9EMk1hbmFnZXJcIjtcclxuaW1wb3J0IEQzTWFuYWdlciBmcm9tIFwiLi9EMy9EM01hbmFnZXJcIjtcclxuaW1wb3J0IF9UQ29uZmlnIGZyb20gXCIuL19UQ29uZmlnXCI7XHJcblxyXG4vKiogXHJcbiAqIOahhuaetuWFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE1haW4ge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YWl5qGG5p625L+h5oGvXHJcbiAgICAgICAgd2luZG93W19UQ29uZmlnLk5hbWVdID0ge1xyXG4gICAgICAgICAgICAvKiog5qGG5p626YWN572uICovXHJcbiAgICAgICAgICAgIC4uLl9UQ29uZmlnLFxyXG4gICAgICAgICAgICAvKiogbGF5YemFjee9riAqL1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiB7IC4uLkdhbWVDb25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOmhueebrumFjee9riAqL1xyXG4gICAgICAgICAgICBfbWFpbkNvbmZpZzogeyAuLi5fTWFpbkNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog5ri45oiP6YWN572uICovXHJcbiAgICAgICAgICAgIF9nYW1lQ29uZmlnOiB7IC4uLl9HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIneWni+WMluWQhOenjeWQhOagt+eahOeuoeeQhuWZqFxyXG4gICAgICAgIEQzTWFuYWdlci5pbml0KCk7Ly8zROeuoeeQhuWZqFxyXG4gICAgICAgIEQyTWFuYWdlci5pbml0KCk7Ly91aeeuoeeQhuWZqFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWNleS+i+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VUIHtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlS2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlTmFtZTogc3RyaW5nID0gJ2luc3RhbmNlJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+exu+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9pZlBhc3NpdmUg5piv5ZCm6KKr5Yqo6K6/6Zeu55qE5pe25YCZ5Yib5bu65a6e5L6L77yM5Li6ZmFsc2XnmoTor53kvJrnq4vljbPliJvlu7rlh7rlrp7kvotcclxuICAgICAqICEg6KKr6KOF6aWw55qE57G755qE5p6E6YCg5pa55rOV5LiN6IO95pe2cHVibGlj57G75Z6L55qEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVJbnN0YW5jZShfaWZQYXNzaXZlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKF9pZlBhc3NpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5LiA5Liq55uR5ZCs5bGe5oCnXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBJbnN0YW5jZVQuSW5zdGFuY2VOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VOYW1lXSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmlbDnu4Tlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5VXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3kuKTkuKrmlbDnu4TlhoXlrrnmmK/lkKbnm7jlkIxcclxuICAgICAqIEBwYXJhbSB4IHjmlbDnu4RcclxuICAgICAqIEBwYXJhbSB5IHnmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250ZW50SWZTYW1lKHg6IGFueVtdLCB5OiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghKHgpIHx8ICEoeSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoeC5sZW5ndGggIT0geS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvL+aWueazle+8miDnlKjkuIDkuKptb3DmnaXnu5/orqF45pWw57uE5ZCE5Liq5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5YaN55SoeeaVsOe7hOadpemAkuWHj+WQhOWFg+e0oOWHuueOsOeahOasoeaVsO+8jOWmguaenOacgOe7iOe7k+aenOS4ujDliJnkuKTkuKrmlbDnu4Tnm7jlkIxcclxuICAgICAgICBsZXQgbTogTWFwPGFueSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICB4LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbS5zZXQoaXRlbSwgKG0uaGFzKGl0ZW0pID8gbS5nZXQoaXRlbSkgOiAwKSArIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBtLnNldChpdGVtLCAobS5oYXMoaXRlbSkgPyBtLmdldChpdGVtKSA6IDApIC0gMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lj6ropoHlhbbkuK3kuIDlhYPntKDnmoTnu5/orqHkuI3kuLow5bCx6L+U5ZueZmFsc2VcclxuICAgICAgICBsZXQgYjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgW192YWx1ZSwgX251bWJlcl0gb2YgbSkge1xyXG4gICAgICAgICAgICBpZiAoX251bWJlciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOWOu+mHjeS/neeVmemdoOWJjeeahOWGheWuuVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tljrvph43kv53nlZnpnaDlkI7nmoTlhoXlrrlcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmV2ZXJzZVJlc2VydmVVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyLnJldmVyc2UoKSkpLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvueixoeaVsOe7hOWOu+mHjVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfRiDojrflj5blr7nmr5TplK7lgLzlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmpVbmlxdWU8VD4oYXJyOiBUW10sIF9GOiAobzogVCkgPT4gc3RyaW5nKTogVFtdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMSwgbGVuID0gYXJyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX0YoYXJyW2ldKSA9PT0gX0YoYXJyW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tOyAgICAgICAgLy8g5q+P5Yig6Zmk5LiA5Liq5pWwaueahOWAvOWwseWHjzFcclxuICAgICAgICAgICAgICAgICAgICBsZW4tLTsgICAgICAvLyBq5YC85YeP5bCP5pe2bGVu5Lmf6KaB55u45bqU5YePMe+8iOWHj+WwkeW+queOr+asoeaVsO+8jOiKguecgeaAp+iDve+8iSAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7/mjaLmlbDnu4TnmoTmn5DkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2xkT2JqIOiiq+abv+aNoueahOWFg+e0oFxyXG4gICAgICogQHBhcmFtIG5ld09iaiDmm7/mjaLlhYPntKBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXBsYWNlPFQ+KGFycjogVFtdLCBvbGRPYmo6IFQsIG5ld09iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9sZE9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEsIG5ld09iaik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKrlhYPntKDlubbov5Tlm57nu5PmnpxcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2JqIOWIoOmZpOebruagh+WvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUl0ZW08VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u57Si5byV5Yig6Zmk5LiA5Liq5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIGluZGV4IOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUF0PFQ+KGFycjogVFtdLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPD0gaW5kZXgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOaYr+WQpuWMheWQq+afkOS4quaVsOaNrlxyXG4gICAgICogQHBhcmFtIGFyciBcclxuICAgICAqIEBwYXJhbSBvYmogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udGFpbnM8VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpI3liLbkuIDkuKrmlbDnu4RcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29weTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrmiZPkubHmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg55uu5qCH5pWw57uEIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwc2V0QXJyYXk8VD4oX2FycmF5OiBUW10pOiBUW10ge1xyXG4gICAgICAgIC8v5Lmx5bqPXHJcbiAgICAgICAgcmV0dXJuIF9hcnJheS5zb3J0KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3nmoTpmo/mnLrlgLzvvIzlj6/mjIflrprplb/luqZcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg5Y6f5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gX24g6ZqP5py65Liq5pWwXHJcbiAgICAgKiBAcGFyYW0gX3dlaWdodCDmnYPph43liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSYW5kb21HZXQ8VD4oX2FycmF5OiBUW10sIF9uOiBudW1iZXIgPSAxLCBfd2VpZ2h0OiBudW1iZXJbXSA9IF9hcnJheS5tYXAoKGl0ZW0pID0+IHsgcmV0dXJuIDE7IH0pKTogVFtdIHtcclxuICAgICAgICBpZiAoX2FycmF5Lmxlbmd0aCA8PSAwKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfcm9vdEFycmF5OiBUW10gPSBbXTtcclxuICAgICAgICBsZXQgX25ld0FycmF5OiBUW10gPSBbXTtcclxuICAgICAgICAvL+adg+mHjee0ouW8leWIl+ihqFxyXG4gICAgICAgIGxldCBfaW5kZXhBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAvL+aJvuWIsOacgOWwj+eahOadg+mHjVxyXG4gICAgICAgIGxldCBfbWluV2VpZ2h0OiBudW1iZXIgPSBfd2VpZ2h0WzBdO1xyXG4gICAgICAgIF93ZWlnaHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfbWluV2VpZ2h0ID0gTWF0aC5taW4oX21pbldlaWdodCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3dlaWdodCA9IF93ZWlnaHQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGl0ZW0gKiAoMSAvIF9taW5XZWlnaHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfYXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgX3Jvb3RBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX3dlaWdodFtpbmRleF07IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIF9pbmRleEFycmF5LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfbjsgX2krKykge1xyXG4gICAgICAgICAgICBpZiAoX3Jvb3RBcnJheS5sZW5ndGggPD0gMCkgeyBicmVhazsgfVxyXG4gICAgICAgICAgICBfaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfaW5kZXhBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBfaW5kZXhBcnJheSA9IF9pbmRleEFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gX2luZGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX25ld0FycmF5LnB1c2goX3Jvb3RBcnJheS5zcGxpY2UoX2luZGV4QXJyYXlbX2luZGV4XSwgMSlbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbmV3QXJyYXk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz5LqOdjPlkJHph4/nmoTlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYzVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4fkuIDkuKrlrZfnrKbkuLLmnoTlu7p2M+WQkemHj1xyXG4gICAgICogQHBhcmFtIHN0ciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVZlY3RvcjMoc3RyOiBzdHJpbmcsIF9vdXRWMzogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJywnKTtcclxuICAgICAgICBfb3V0VjMuc2V0VmFsdWUoTnVtYmVyKHN0cnNbMF0pLCBOdW1iZXIoc3Ryc1sxXSksIE51bWJlcihzdHJzWzJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5WM+WQkemHj+mVv+W6plxyXG4gICAgICogQHBhcmFtIF92MyDnm67moIflkJHph49cclxuICAgICAqIEBwYXJhbSBfbCDnm67moIfplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWM0xlbmd0aChfdjM6IExheWEuVmVjdG9yMywgX2w6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF92Myk7XHJcbiAgICAgICAgaWYgKF9sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgX2E6IG51bWJlciA9IF9sIC8gX2xlbmd0aDtcclxuICAgICAgICAgICAgX3YzLnggPSBfdjMueCAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueSA9IF92My55ICogX2E7XHJcbiAgICAgICAgICAgIF92My56ID0gX3YzLnogKiBfYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnmj5LlgLznp7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX2xlcnAg5o+S5YC856e75Yqo5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICogQHBhcmFtIF9pbml0aWFsTGVuZ3RoIOWIneWni+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdExlcnBNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfbGVycDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMywgX2luaXRpYWxMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuZGlzdGFuY2UoX3BvcywgX3RyYWdldFBvdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMubGVycChfcG9zLCBfdHJhZ2V0UG90LCBfbGVycCwgX291dFYzKTtcclxuICAgICAgICAvL+i/lOWbnui/m+W6plxyXG4gICAgICAgIHJldHVybiAxIC0gKF9kaXN0YW5jZSAvIF9pbml0aWFsTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueWMgOmAn+enu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfc3BlZWQg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdENvbnN0YW50U3BlZWRNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfc3BlZWQ6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfaWZFbmQ6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IF9kaWZmZXJWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnN1YnRyYWN0KF90cmFnZXRQb3QsIF9wb3MsIF9kaWZmZXJWMyk7XHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfZGlmZmVyVjMpO1xyXG4gICAgICAgIGlmIChfZGlzdGFuY2UgPiBfc3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWM0xlbmd0aChfZGlmZmVyVjMsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55u45YqgXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfcG9zLCBfZGlmZmVyVjMsIF9vdXRWMyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2lmRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJvdGF0ZUF4aXNWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICog5peL6L2s5LiA5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX3YzIOmcgOimgeaXi+i9rOeahOmCo+S4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF9hbmdlciDml4vovazop5LluqZcclxuICAgICAqIEBwYXJhbSBfYXhpcyDml4vovazovbRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSb3RhdGVWMyhfdjM6IExheWEuVmVjdG9yMywgX2FuZ2VyOiBudW1iZXIsIF9heGlzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLnJvdGF0ZUF4aXNWMykge1xyXG4gICAgICAgIC8v5peL6L2s5Zub5YWD5pWwXHJcbiAgICAgICAgdmFyIHEgPSBuZXcgTGF5YS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgTGF5YS5RdWF0ZXJuaW9uLmNyZWF0ZUZyb21BeGlzQW5nbGUoX2F4aXMsIChfYW5nZXIgLyAxODApICogTWF0aC5QSSwgcSk7XHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnRyYW5zZm9ybVF1YXQoX3YzLCBxLCBfdjMpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOahhuaetumFjee9ruaWh+S7tlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RDb25maWcge1xyXG4gICAgLyoqIOWQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBOYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBaSE5hbWU6IHN0cmluZyA9IFwiTGF5YUJveOWwj+a4uOaIj1wiO1xyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWZXJzaW9uczogc3RyaW5nID0gXCIwLjAuMC4yXCI7XHJcbn0iLCIvKipcclxuICog5Z+657G75a+56LGh5rGgXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSXRlbVBvb2wge1xyXG4gICAgLyoqIOaxoOWtkCAqL1xyXG4gICAgcHJpdmF0ZSBtX2l0ZW1Qb29sOiB7XHJcbiAgICAgICAgW19rZXk6IHN0cmluZ106IGFueVtdLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDojrflj5blr7nosaHmsaAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgaXRlbVBvb2woKToge1xyXG4gICAgICAgIFtfa2V5OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faXRlbVBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlr7nosaHmsaDmmK/lkKbmnInlhoXlrrlcclxuICAgICAqIEBwYXJhbSBfa2V5IGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9vbEhhc0l0ZW0oX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tX2l0ZW1Qb29sW19rZXldICYmIHRoaXMubV9pdGVtUG9vbFtfa2V5XS5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7juWvueixoeaxoOS4reiOt+WPluWvueixoVxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJdGVtQnlQb29sPFQgZXh0ZW5kcyBvYmplY3Q+KF9rZXk6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5pyJ5YaF5a65XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbEhhc0l0ZW0oX2tleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pdGVtUG9vbFtfa2V5XS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5a+56LGh6L+b5a+56LGh5rGgXHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqIEBwYXJhbSBfaXRlbSDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEl0ZW1Ub1Bvb2woX2tleTogc3RyaW5nLCBfaXRlbTogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faXRlbVBvb2xbX2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tX2l0ZW1Qb29sW19rZXldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9pdGVtUG9vbFtfa2V5XS5wdXNoKF9pdGVtKTtcclxuICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgIHRoaXMubV9pdGVtUG9vbFtfa2V5XSA9IFsuLi5uZXcgU2V0KC4uLnRoaXMubV9pdGVtUG9vbFtfa2V5XSldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65a+56LGh5rGgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbXB0eVBvb2woKSB7XHJcbiAgICAgICAgdGhpcy5tX2l0ZW1Qb29sID0ge307XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9