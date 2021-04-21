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
        // console.log(...ConsoleEx.packLog('axios工具', typeof axios));
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
        this.m_itemPool[_key] = [...new Set(this.m_itemPool[_key])];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VGb250LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRU11c2ljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fU2NlbmVOb2RlQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvQ29uZmlnVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9EYXRhVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9MaWJyYXJ5VGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9PdGhlclRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvUGFja1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1doaXRlU2NyZWVuVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0NvbmZpZ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRDJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUm9vdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9EM01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9EYXRhVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EZWJ1Zy9CYXNlRGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0dhbWVUL0dhbWVQb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0NvbVJlc1VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Ucy9JbnN0YW5jZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL1YzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL19UQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9jb20vQmFzZUl0ZW1Qb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUk47QUFBQTtBQUFBO0FBQXdDO0FBRXhDOztHQUVHO0FBQ1ksTUFBTSxXQUFXOztBQUM1QixlQUFlO0FBQ0Qsc0JBQVUsR0FB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LENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBZ0JNLEtBQUs7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJ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QUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFPLENBQUM7U0FDM0M7UUFDRCxFQUFFO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9NYWluLnRzXCIpO1xuIiwiLyoqXHJcbiAqIOW4uOmHj+mFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0NvbnN0Q29uZmlnIHtcclxuICAgIC8qKiBmZ3Vp55u45YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUkgPSB7XHJcbiAgICAgICAgLyoqIOWMheWQjue8gCAqL1xyXG4gICAgICAgIHBhY2thZ2VGaWxlRXh0ZW5zaW9uOiAnYmluJyxcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcIi4vX01haW5Db25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9HYW1lQ29uZmlnIHtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/muLjmiI/mtYvor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZHYW1lVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/mtYvor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkRlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIHRydWU7XHJcbn0iLCIvKipcclxuICog6aG555uu5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTWFpbkNvbmZpZyB7XHJcbiAgICAvKiog5ri45oiP5omA5bGe5Zui6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlYW06IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/lkI3lrZfvvIzlsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOYW1lOiBzdHJpbmcgPSAnTGF5YU1pbmlHYW1lJztcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkhOYW1lOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP6K+05piOICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV4cGxhaW46IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiP77yM6K+05piO44CCJztcclxuICAgIC8qKiDmlbDmja7niYjmnKwg5Y+v5Lul5bim5a2X5q+N5L2G5piv5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmVyc2lvbnM6IHN0cmluZyA9ICcwLjAuMC4xJztcclxuICAgIC8qKiDmmK/lkKbkuIrnur/kuLpmYWxzZeWImeaYr+W8gOWPkeeOr+WigyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPbkxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbW1vbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDb20gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1xM25nOXdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDb20ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ29tPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ29tXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1kYm1pMTNcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUN1c3RvbXNMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lRW5kIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbGF4ZDE5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lRW5kIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUVuZD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUVuZFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUxvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2Exb1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUxvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUxvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tc3l0YTlmXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBhdXNlIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTVnXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGF1c2Uge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGF1c2U+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQYXVzZVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBsYXkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExclwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBsYXkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGxheT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBsYXlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTZXQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNHVcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTZXQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU2V0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU2V0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU3RhcnQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExdlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVN0YXJ0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVN0YXJ0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU3RhcnRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX1VJQnV0dG9uOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9VSTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fdGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX190ZXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbW85anM5eFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fVUlCdXR0b24gPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX1VJID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV90ZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fX3Rlc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9sb29rVkFkOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9sb29rVkFkVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX2xvb2tWQWQ6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hhcmU6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3NoYXJlVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3NoYXJlOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hvd1RvYXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Nob3dUb2FzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW10MXB3OXlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0UGxhdGZvcm0ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFBsYXRmb3JtPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFBsYXRmb3JtXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWQgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWRUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV9fbG9va1ZBZCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV9zaGFyZSA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fc2hhcmVUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV9fc2hhcmUgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV9fc2hvd1RvYXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1taDY2ZTl6XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfUEdhbWVTZXQgZnJvbSBcIi4vRkdVSV9QR2FtZVNldFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBhdXNlIGZyb20gXCIuL0ZHVUlfUEdhbWVQYXVzZVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUxvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUxvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQbGF5IGZyb20gXCIuL0ZHVUlfUEdhbWVQbGF5XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lU3RhcnQgZnJvbSBcIi4vRkdVSV9QR2FtZVN0YXJ0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFVJIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0VUlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVFbmQgZnJvbSBcIi4vRkdVSV9QR2FtZUVuZFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0TWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUNvbSBmcm9tIFwiLi9GR1VJX1BHYW1lQ29tXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lTWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVNldC5VUkwsIEZHVUlfUEdhbWVTZXQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQYXVzZS5VUkwsIEZHVUlfUEdhbWVQYXVzZSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGxheS5VUkwsIEZHVUlfUEdhbWVQbGF5KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU3RhcnQuVVJMLCBGR1VJX1BHYW1lU3RhcnQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0VUkuVVJMLCBGR1VJX1BHYW1lVGVzdFVJKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lRW5kLlVSTCwgRkdVSV9QR2FtZUVuZCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RNYWluLlVSTCwgRkdVSV9QR2FtZVRlc3RNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ29tLlVSTCwgRkdVSV9QR2FtZUNvbSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZU1haW4uVVJMLCBGR1VJX1BHYW1lTWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS5VUkwsIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0pO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX0VtcHR5U2NyZWVuVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vN2t0emliOG9xM25nMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9FbXB0eVNjcmVlblVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9FbXB0eVNjcmVlblVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0RW1wdHlTY3JlZW5cIiwgXCJFbXB0eVNjcmVlblVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9FbXB0eVNjcmVlblVJIGZyb20gXCIuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEVtcHR5U2NyZWVuQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX0VtcHR5U2NyZWVuVUkuVVJMLCBGR1VJX0VtcHR5U2NyZWVuVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX2luaXRMb2FkVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgbV9sb2FkaW5nX3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xvZ286Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YV92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2dhbWVfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL24zb2VkcHA2bmlocjBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfaW5pdExvYWRVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfaW5pdExvYWRVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdExvYWRcIiwgXCJpbml0TG9hZFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvYWRpbmdfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX3RleHRfbG9nbyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV90ZXh0X2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3RleHRfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhX3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZ2FtZV9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfaW5pdExvYWRVSSBmcm9tIFwiLi9GR1VJX2luaXRMb2FkVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRMb2FkQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX2luaXRMb2FkVUkuVVJMLCBGR1VJX2luaXRMb2FkVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1Rlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2h4dTR6YzlkaW9vODBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1Rlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJfVGVzdFwiLCBcIlRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1Rlc3RNYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVGVzdEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9UZXN0TWFpbi5VUkwsIEZHVUlfVGVzdE1haW4pO1xyXG5cdH1cclxufSIsImltcG9ydCBCYXNlQ29uZmlnUHJveHkgZnJvbSBcInNyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfU2NlbmVOb2RlQ29uZmlnIH0gZnJvbSBcIi4uL19jb25maWcvX1NjZW5lTm9kZUNvbmZpZ1wiO1xyXG4vKipcclxuICog5Zy65pmv6IqC54K56YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9TY2VuZU5vZGVDb25maWcpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZUNvbmZpZ1Byb3h5IGV4dGVuZHMgQmFzZUNvbmZpZ1Byb3h5PF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGU+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTm9kZUNvbmZpZ1Byb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h2lk6I635Y+W5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lkIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieUlkR2V0RGF0YShfaWQ6IG51bWJlcik6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBfaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flhbPljaHlkI3lrZfojrflj5blhbPljaHmlbDmja5cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlhbPljaHlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ5TmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5Zy65pmv5ZCN5a2X6I635Y+W5pWw5o2u5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieVNjZW5lTmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2NlbmUgPT0gX25hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57lnLrmma/kuKrmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4udGhpcy5tX2RhdGFMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZDtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29uc3RQcm94eSB9IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XluLjph4/phY3nva7ooajku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBDb25maWdULkRlY29yYXRlQ29uZmlnUHJveHkoX1Rlc3RDb25zdClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdENvbnN0UHJveHkgZXh0ZW5kcyBCYXNlQ29uc3RQcm94eTxfVGVzdENvbnN0LkRhdGFUeXBlPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3RDb25zdFByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgTWFpbkRhdGFQcm94eSB9IGZyb20gXCIuL01haW5EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4vU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBTaG9ydERhdGFQcm94eSBmcm9tIFwiLi9TaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTaWduRGF0YVByb3h5IH0gZnJvbSBcIi4vU2lnbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4vVGVzdERhdGFQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrueuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5omA5pyJ5pWw5o2uXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIE1haW5EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTZXREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaWduRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2hvcnREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IE1haW5EYXRhIGZyb20gXCIuL3R5cGUvTWFpbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShNYWluRGF0YSlcclxuZXhwb3J0IGNsYXNzIE1haW5EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8TWFpbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTWFpbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTZXREYXRhIGZyb20gXCIuL3R5cGUvU2V0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNldERhdGEpXHJcbmV4cG9ydCBjbGFzcyBTZXREYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2V0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTZXREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VTaG9ydERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2hvcnREYXRhIGZyb20gXCIuL3R5cGUvU2hvcnREYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2hvcnREYXRhKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGFQcm94eSBleHRlbmRzIEJhc2VTaG9ydERhdGFQcm94eTxTaG9ydERhdGE+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNob3J0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNpZ25EYXRhIGZyb20gXCIuL3R5cGUvU2lnbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaWduRGF0YSlcclxuZXhwb3J0IGNsYXNzIFNpZ25EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2lnbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2lnbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBUZXN0RGF0YSBmcm9tIFwiLi90eXBlL1Rlc3REYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoVGVzdERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUZXN0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFRlc3REYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3REYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXREYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOmfs+aViCAqL1xyXG4gICAgaWZPcGVuU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOiDjOaZr+mfs+S5kCAqL1xyXG4gICAgaWZPcGVuTXVzaWM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+mch+WKqCAqL1xyXG4gICAgaWZPcGVuVmlicmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHsgfSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3REYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyaW5nOiBzdHJpbmcgPSAnc3RyaW5nJztcclxuICAgIGJvb2xlYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgICBhOiBudW1iZXIsXHJcbiAgICAgICAgYjogc3RyaW5nLFxyXG4gICAgICAgIGM6IGJvb2xlYW5cclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgIGI6ICdiJyxcclxuICAgICAgICAgICAgYzogdHJ1ZSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IEJhc2VEZWJ1ZyBmcm9tIFwic3JjL19UL0RlYnVnL0Jhc2VEZWJ1Z1wiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDoh6rlrprkuYnosIPor5Xlr7nosaFcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURlYnVnIGV4dGVuZHMgQmFzZURlYnVnIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEN1c3RvbURlYnVnO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlciBmcm9tIFwiLi9VSUNvbi9VSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IFRlc3RNYWluIGZyb20gXCIuL190ZXN0L1Rlc3RNYWluXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbiB7XHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmuLjmiI/liJ3lp4vljJbliqDovb3lrp7kvotcclxuICAgICAgICBsZXQgX2dhbWVJbml0TG9hZDogR2FtZUluaXRMb2FkID0gbmV3IEdhbWVJbml0TG9hZCgpO1xyXG4gICAgICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgX2dhbWVJbml0TG9hZC5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0TG9hZENvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+WKoOi9veWujOaIkFxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdExvYWRDb20oKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITkuKrnrqHnkIblmahcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5Zy65pmv566h55CG5ZmoXHJcbiAgICAgICAgVUlDb25NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL3Vp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5pWw5o2u566h55CG5ZmoXHJcbiAgICAgICAgLy9cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgLy8gVE9ETyDov5vlhaXmtYvor5XmqKHlnZdcclxuICAgICAgICBUZXN0TWFpbi5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAqL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgX1Rlc3RCaW5kZXIgZnJvbSBcInNyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyXCI7XHJcbmltcG9ydCBXaGl0ZVNjcmVlblQgZnJvbSBcInNyYy9XaGl0ZVNjcmVlblRcIjtcclxuaW1wb3J0IENvbmZpZ1QsIHsgSUJhc2VDb25maWdDb250YWluZXIgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgeyBGR1VJUGFjayB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9GR1VJUGFja1wiO1xyXG5pbXBvcnQgQmFzZUluaXRMb2FkIGZyb20gXCJzcmMvX1QvTWFpbi9CYXNlSW5pdExvYWRcIjtcclxuaW1wb3J0IENvbVJlc1VybCBmcm9tIFwic3JjL19UL1Jlcy9Db21SZXNVcmxcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwic3JjL19UL1Jlcy9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCJzcmMvX1QvUmVzL0tleVJlc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRJdGVtXCI7XHJcbmltcG9ydCB7IEVGb250IH0gZnJvbSBcIi4uL1Jlc0UvRUZvbnRcIjtcclxuaW1wb3J0IHsgRU11c2ljcyB9IGZyb20gXCIuLi9SZXNFL0VNdXNpY3NcIjtcclxuaW1wb3J0IHsgRVNvdW5kcyB9IGZyb20gXCIuLi9SZXNFL0VTb3VuZHNcIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlblVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvblwiO1xyXG5pbXBvcnQgSW5pdExvYWRVSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdExvYWRVSUNvblwiO1xyXG5pbXBvcnQgeyBCdWlsZENvbmZpZ1RzIH0gZnJvbSBcIi4uL19jb25maWcvQnVpbGRDb25maWdUc1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4uL19jb25maWcvX1Rlc3RDb25zdFwiO1xyXG5pbXBvcnQgeyBfRUFsbFNjZW5lUHJlZmFic05hbWVzIH0gZnJvbSBcIi4uL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/liJ3lp4vljJbliqDovb1cclxuICogISDlj6rotJ/otKPmuLjmiI/liJ3lp4vljJblkozliqDovb3vvIzkuI3lgZrlhbbku5bkuovmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbml0TG9hZCBleHRlbmRzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvKiog55m95bGPdWnmjqfliLblmaggKi9cclxuICAgIC8vIHByaXZhdGUgbV9pbml0RW1wdHlTY3JlZW5VSUNvbjogSW5pdEVtcHR5U2NyZWVuVUlDb247XHJcbiAgICAvKiog5Yid5aeL5YyW5Yqg6L29dWnmjqfliLblmaggKi9cclxuICAgIC8vIHByaXZhdGUgbV9pbml0TG9hZFVJQ29uOiBJbml0TG9hZFVJQ29uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMlumcgOimgeeahHVp5o6n5Yi25Zmo5a6e5L6LXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbmV3IEluaXRFbXB0eVNjcmVlblVJQ29uKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24gPSBuZXcgSW5pdExvYWRVSUNvbigpO1xyXG4gICAgICAgIC8v6K6+572u6Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxTY2VuZVByZWZhYnNOYW1lcykge1xyXG4gICAgICAgICAgICBLZXlSZXNNYW5hZ2VyLmFkZFJlc1VybChfaSwgS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuUm9vdFJlcykgKyBgJHtfaX0vYCk7Ly/ms6jlhaXpooTliLbkvZPot6/lvoRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7pooTliLbkvZPlnLrmma/lr7nnhadcclxuICAgICAgICBFc3NlbnRpYWxSZXNVcmxzLnNldFByZWZhYlNjZW5lTmFtZXMoX0VBbGxTY2VuZVByZWZhYnNOYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9nZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSBbXTtcclxuICAgICAgICAvL+iOt+WPlmZndWnliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpemFjee9ruihqOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2xvYWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpWZndWnnmoTmiYDmnInliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+WFiOe7keWumuaJgOaciXVpXHJcbiAgICAgICAgdGhpcy5GR1VJQmluZGVyKCk7XHJcbiAgICAgICAgLy/liqDovb1mZ3Vp5YyFXHJcbiAgICAgICAgLy8gX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdEVtcHR5U2NyZWVuJywgdW5kZWZpbmVkLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdEVtcHR5U2NyZWVuKSkpOy8v55m95bGPdWnljIVcclxuICAgICAgICAvLyBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0TG9hZCcsIDAsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0TG9hZCkpKTsvL+WKoOi9veeVjOmdouWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVCYWcnKSk7Ly/ljp/ljIXvvIzpgJrluLjkuLrotYTmupDljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQ29tbW9uJykpOy8v5YWs5YWx5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnX1Rlc3QnKSk7Ly/mtYvor5XljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lTWFpbicsIDApKTsvL+S4u+WMhVxyXG4gICAgfVxyXG4gICAgLy9mZ3Vp57uR5a6aXHJcbiAgICBwcml2YXRlIEZHVUlCaW5kZXIoKSB7XHJcbiAgICAgICAgSW5pdEVtcHR5U2NyZWVuQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBJbml0TG9hZEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZUNvbW1vbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgX1Rlc3RCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVNYWluQmluZGVyLmJpbmRBbGwoKTtcclxuICAgIH1cclxuICAgIC8v6I635Y+WRkdVSeWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBnZXRGR1VJTG9hZEl0ZW1zKF9uYW1lOiBzdHJpbmcsIF9hdGxpYXNDb3VudD86IG51bWJlciwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpOiBSZXNMb2FkSXRlbSB7XHJcbiAgICAgICAgbGV0IF9mZ3VpUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIC8v5rOo5YWl5YyF6Lev5b6EXHJcbiAgICAgICAgbmV3IEZHVUlQYWNrKEVzc2VudGlhbFJlc1VybHMuRkdVSVBhY2tVUkwoX25hbWUpLCBfYXRsaWFzQ291bnQpLmdldFJlc1VSTChfZmd1aVJlcyk7XHJcbiAgICAgICAgLy/liJvlu7rliqDovb3poblcclxuICAgICAgICByZXR1cm4gbmV3IFJlc0xvYWRJdGVtKF9mZ3VpUmVzLCBFUmVzTG9hZE1vZGVsLkQyLCBfbmFtZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5YyFXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRkdVSVBhY2thZ2UoX25hbWUpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICAvL+a3u+WKoOWMhVxyXG4gICAgcHJpdmF0ZSBhZGRGR1VJUGFja2FnZShfbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoRSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCdGR1VJ5re75Yqg5YyF5pyJ6Zeu6aKY44CCJywgX25hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8v6YWN572u6KGoXHJcbiAgICAgICAgbGV0IF9jb25maWdSZXM6IGFueVtdID0gQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTCgoaXRlbSBhcyBJQmFzZUNvbmZpZ0NvbnRhaW5lcikuZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Zy65pmvanNvbuaWh+S7tlxyXG4gICAgICAgIGxldCBzY2VuZUpzb25SZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgc2NlbmVKc29uUmVzLnB1c2goRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTChfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKFsuLi5fY29uZmlnUmVzLCAuLi5zY2VuZUpzb25SZXNdLCBFUmVzTG9hZE1vZGVsLkQyLCAnY29uZmlnJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo6YWN572u6KGo5YaF5a65XHJcbiAgICAgICAgICAgIENvbmZpZ1QuQnVpbGRDb25maWdzKEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZ0xpZ2h0KCfmiYDmnInphY3nva7ooajlhoXlrrnvvJonLCBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKSk7XHJcbiAgICAgICAgfSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+mFjee9ruihqOWKoOi9vei/m+W6picsIGkpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgbGV0IF9hdWRpb3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRU11c2ljcykge1xyXG4gICAgICAgICAgICBFTXVzaWNzW19pXSAmJiBfYXVkaW9zLnB1c2goQ29tUmVzVXJsLk11c2ljVVJMKEVNdXNpY3NbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVTb3VuZHMpIHtcclxuICAgICAgICAgICAgRVNvdW5kc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5Tb3VuZFVSTChFU291bmRzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9hdWRpb3MsIEVSZXNMb2FkTW9kZWwuRDIsICdhdWRpbycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ6Z+z5pWI6LWE5rqQ77yaJywgX2F1ZGlvcyk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBsZXQgX2ZvbnQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRUZvbnQpIHtcclxuICAgICAgICAgICAgRUZvbnRbX2ldICYmIF9mb250LnB1c2goRXNzZW50aWFsUmVzVXJscy5Gb250VVJMKEVGb250W19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9mb250LCBFUmVzTG9hZE1vZGVsLkQyLCAnZm9udCcsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ5a2X5L2T6LWE5rqQ77yaJywgX2ZvbnQpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nmb3lsY/mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdEVtcHR5U2NyZWVuKCkge1xyXG4gICAgICAgIC8v5pi+56S655m95bGPdWlcclxuICAgICAgICAvLyB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG4gICAgLy/liqDovb3mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdExvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgICAgICAvLyAvL+aYvuekuuWKoOi9vXVpXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuLjmiI/liqDovb3ov5vluqYtPicsIF9pKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5tX2luaXRMb2FkVUlDb24gJiYgdGhpcy5tX2luaXRMb2FkVUlDb24uaWZTaG93KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLnNldFBsYW4oX2kpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBXaGl0ZVNjcmVlblQuc2V0UGxhbihfaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRDb20oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgV2hpdGVTY3JlZW5ULmNsb3NlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tUmVzVXJsIGZyb20gXCJzcmMvX1QvUmVzL0NvbVJlc1VybFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuLi9EYXRhL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBFTXVzaWNzIH0gZnJvbSBcIi4uL1Jlc0UvRU11c2ljc1wiO1xyXG5pbXBvcnQgeyBFU291bmRzIH0gZnJvbSBcIi4uL1Jlc0UvRVNvdW5kc1wiO1xyXG4vKipcclxuICog6Z+z5pWI566h55CG57G7XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogQXVkaW9NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvL+W9k+WJjeaSreaUvueahGJnbVxyXG4gICAgcHJpdmF0ZSBtX29uQkdNOiBMYXlhLlNvdW5kQ2hhbm5lbDtcclxuXHJcbiAgICAvL+W9k+WJjeaSreaUvueahOmfs+aViOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX29uU291bmRMaXN0OiBTZXQ8TGF5YS5Tb3VuZENoYW5uZWw+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+agueaNruaVsOaNruiuvue9ruiDjOaZr+mfs+S5kOWSjOmfs+aViOaYr+WQpumdmemfs1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5zb3VuZE11dGVkID0gIVNldERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmlmT3BlblNvdW5kO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5tdXNpY011dGVkID0gIVNldERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmlmT3Blbk11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6Z+z5LmQ5ZKM5omA5pyJ6Z+z5pWI5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgbXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDmnInpn7PmlYjvvIjkuI3ljIXmi6zog4zmma/pn7PkuZDvvInmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBzb3VuZE11dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/pn7PkuZDvvIjkuI3ljIXmi6zpn7PmlYjvvInmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBtdXNpY011dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI5pqC5YGcXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZCgpIHtcclxuICAgICAgICAvL+aaguWBnOaJgOaciemfs+aViFxyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjnu6fnu61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVTb3VuZCgpIHtcclxuICAgICAgICAvL+e7p+e7reaSreaUvuW9k+WJjeaSreaUvueahOmfs+aViFxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vblNvdW5kTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmoLlgZzog4zmma/pn7PkuZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXVzZU11c2ljKCkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25CR00gJiYgdGhpcy5pbnN0YW5jZS5tX29uQkdNLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6Z+z5pWI6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0gX24g6Z+z6YePIDB+MVxyXG4gICAgICogQHBhcmFtIF91cmwg6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U291bmRWb2x1bWUoX246IG51bWJlciA9IDEsIF91cmw/OiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZShfbiwgX3VybCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruiDjOaZr+mfs+S5kOmfs+mHj1xyXG4gICAgICogQHBhcmFtIF9uIOmfs+mHjyAwfjFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZShfbjogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNldE11c2ljVm9sdW1lKF9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOOAgumfs+aViOWPr+S7peWQjOaXtuaSreaUvuWkmuS4quOAglxyXG4gICAgICogQHBhcmFtIG5hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gbG9vcHMg5b6q546v5qyh5pWwLDDooajnpLrml6DpmZDlvqrnjq/jgIJcclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZSDlo7Dpn7Pmkq3mlL7lrozmiJDlm57osIMgIEhhbmRsZXLlr7nosaHjgIJcclxuICAgICAqIEBwYXJhbSBzb3VuZENsYXNzIOS9v+eUqOWTquS4quWjsOmfs+exu+i/m+ihjOaSreaUvu+8jG51bGzooajnpLroh6rliqjpgInmi6njgIJcclxuICAgICAqIEBwYXJhbSBzdGFydFRpbWUg5aOw6Z+z5pKt5pS+6LW35aeL5pe26Ze044CCXHJcbiAgICAgKiBAcmV0dXJuIFNvdW5kQ2hhbm5lbOWvueixoe+8jOmAmui/h+atpOWvueixoeWPr+S7peWvueWjsOmfs+i/m+ihjOaOp+WItu+8jOS7peWPiuiOt+WPluWjsOmfs+S/oeaBr+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheVNvdW5kKG5hbWU6IEVTb3VuZHMsIGxvb3BzPzogbnVtYmVyLCBjb21wbGV0ZT86IGxheWEudXRpbHMuSGFuZGxlciwgc291bmRDbGFzcz86IG5ldyAoKSA9PiBhbnksIHN0YXJ0VGltZT86IG51bWJlcik6IGxheWEubWVkaWEuU291bmRDaGFubmVsIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IF9zb3VuZDogTGF5YS5Tb3VuZENoYW5uZWwgPSBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQobmFtZSwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vblNvdW5kTGlzdC5hZGQoX3NvdW5kKTtcclxuICAgICAgICByZXR1cm4gX3NvdW5kO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZDjgILog4zmma/pn7PkuZDlkIzml7blj6rog73mkq3mlL7kuIDkuKrvvIzlpoLmnpzlnKjmkq3mlL7og4zmma/pn7PkuZDml7blho3mrKHosIPnlKjmnKzmlrnms5XvvIzkvJrlhYjlgZzmraLkuYvliY3nmoTog4zmma/pn7PkuZDvvIzlho3mkq3mlL7lvZPliY3nmoTog4zmma/pn7PkuZDjgIJcclxuICAgICAqIEBwYXJhbSBuYW1lIOiDjOaZr+mfs+aViOWQjeWtl1xyXG4gICAgICogQHBhcmFtIGxvb3BzIOW+queOr+asoeaVsCww6KGo56S65peg6ZmQ5b6q546v44CCXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUg5aOw6Z+z5pKt5pS+5a6M5oiQ5Zue6LCDLGNvbXBsZXRlIOe7k+aenOWPguaVsCB0cnVlOiDmkq3mlL7lrozmiJAsIGZhbHNlL3VuZGVmaW5lZCDvvJpzdG9w6Kem5Y+R55qEY29tcGxldGXjgIJcclxuICAgICAqIEBwYXJhbSBzdGFydFRpbWUg5aOw6Z+z5pKt5pS+6LW35aeL5pe26Ze044CCXHJcbiAgICAgKiBAcmV0dXJuIFNvdW5kQ2hhbm5lbOWvueixoe+8jOmAmui/h+atpOWvueixoeWPr+S7peWvueWjsOmfs+i/m+ihjOaOp+WItu+8jOS7peWPiuiOt+WPluWjsOmfs+S/oeaBr+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheU11c2ljKG5hbWU6IEVNdXNpY3MsIGxvb3BzPzogbnVtYmVyLCBjb21wbGV0ZT86IGxheWEudXRpbHMuSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKTogbGF5YS5tZWRpYS5Tb3VuZENoYW5uZWwge1xyXG4gICAgICAgIGlmICghbmFtZSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX211c2ljOiBMYXlhLlNvdW5kQ2hhbm5lbCA9IExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhuYW1lLCBsb29wcywgY29tcGxldGUsIHN0YXJ0VGltZSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uQkdNID0gX211c2ljO1xyXG4gICAgICAgIHJldHVybiBfbXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLpn7PmlYjmkq3mlL7jgIJcclxuICAgICAqIEBwYXJhbSBzb3VuZHNOYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RvcFNvdW5kKHNvdW5kc05hbWU6IEVTb3VuZHMpOiB2b2lkIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wU291bmQoQ29tUmVzVXJsLlNvdW5kVVJMKHNvdW5kc05hbWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6IOM5pmv6Z+z5pWI5pKt5pS+44CCXHJcbiAgICAgKiBAcGFyYW0gbXVzaWNOYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RvcE11c2ljKG11c2ljTmFtZTogRU11c2ljcyk6IHZvaWQge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BTb3VuZChDb21SZXNVcmwuTXVzaWNVUkwobXVzaWNOYW1lKSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5a2X5L2T6LWE5rqQ5p6a5Li+ICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFRm9udCB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL1xyXG59IiwiLyoqXHJcbiAqIOaJgOacieiDjOaZr+mfs+S5kCAo5Lya6aKE5Yqg6L29KVxyXG4gKiAhIOW/hemhu+aYr+Wtl+espuS4su+8jOS4jeiDveaYr+aVsOWtl+WQpuWImeS8muWKoOS4iuWPjeWwhOWxnuaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRU11c2ljcyB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL1xyXG59IiwiLyoqXHJcbiAqIOaJgOaciemfs+aViCAo5Lya6aKE5Yqg6L29KVxyXG4gKiAhIOW/hemhu+aYr+Wtl+espuS4su+8jOS4jeiDveaYr+aVsOWtl+WQpuWImeS8muWKoOS4iuWPjeWwhOWxnuaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRVNvdW5kcyB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL+mfs+aViFxyXG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCJzcmMvX1QvRDMvc2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv566h55CG5ZmoXHJcbiAqIOeuoeeQhuWcuuaZr++8jOiOt+WPluWcuuaZr++8jOeEtuWQjumAmui/h+WcuuaZr+WunuS+i+aehOW7uuWcuuaZr+S4reWvueixoeeahOiKgueCuVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqIOWcuuaZr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTGlzdDoge1xyXG4gICAgICAgIFtpbmRleDogc3RyaW5nXTogU2NlbmUsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flnLrmma/lkI3lrZfojrflj5blnLrmma9cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lPFMgZXh0ZW5kcyBTY2VuZT4oX25hbWU6IHN0cmluZyk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXSBhcyBTO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIGxldCBfbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo5Zy65pmvXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgX25hbWUgPSBfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdID0gbmV3IFNjZW5lKF9uYW1lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM55qE5Zy65pmv5a6e5L6L5YyW5LiN5ZCM55qE57G7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX25hbWUpIHsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlVUlDb25NYW5hZ2VyIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlclByb3h5IGZyb20gXCIuL1VJQ29uTWFuYWdlclByb3h5XCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uTWFuYWdlciBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXI8VUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFVJQ29uTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJX1Rlc3RNYWluIGZyb20gXCJzcmMvRkdVSS9fVGVzdC9GR1VJX1Rlc3RNYWluXCI7XHJcbmltcG9ydCBCYXNlU2luZ2xlVUlDb24gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvblwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDmtYvor5XkuLvpobXpnaLmjqfliLblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UZXN0TWFpblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfVGVzdE1haW4+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IF9UZXN0TWFpblVJQ29uO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuICAgIC8qKiB1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfVGVzdE1haW47XHJcbn0iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uZmlnIH0gZnJvbSBcIi4vX1Rlc3RDb25maWdcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4qIOaehOW7uuWFqOmDqOmFjee9ruihqFxyXG4qICEg6Ieq5Yqo5a+85Ye6XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZENvbmZpZ1RzIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ55qE6YWN572u6KGo5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcclxuICAgICAgICBsZXQgY29uZmlnczogYW55W10gPSBbXTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1NjZW5lTm9kZUNvbmZpZyk7XHJcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1Rlc3RDb25zdCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1NjZW5lTm9kZUNvbmZpZyBjb25maWfphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1NjZW5lTm9kZUNvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5YWz5Y2haWRb5b+F6KaBXSAqL1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgIC8qKiDlhbPljaHlkI3lrZfvvIzlj6/ku6XpgJrov4flkI3lrZfojrflj5blhbPljaHmlbDmja4gKi9cbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cbiAgICAgICAgc2NlbmU6IHN0cmluZztcbiAgICAgICAvKiog6IqC54K55ZCN5a2X5YiX6KGoICovXG4gICAgICAgIG5vZGVOYW1lOiBzdHJpbmc7XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnU2NlbmVOb2RlQ29uZmlnLmpzb24nO1xufVxuICAgICIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9UZXN0Q29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC877yM5LiN566h5LuA5LmI5YC877yM6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5a2X56ym5Liy77yM5LiN566h5piv5LuA5LmI5YC877yM5pyA5ZCO6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIHM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC877yM5LiN566h5LuA5LmI5YC86YO95Lya6L2s5biD5bCU5YC8ICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfVGVzdENvbmZpZy5EYXRhVHlwZVtdID0gW107XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25zdCBjb25zdOmFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbnN0IHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25zdCc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlSAqL1xuICAgICAgICBuOiBudW1iZXI7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlTIgKi9cbiAgICAgICAgbjI6IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMyAqL1xuICAgICAgICBuMzogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UyICovXG4gICAgICAgIHMyOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTMgKi9cbiAgICAgICAgczM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTEgKi9cbiAgICAgICAgYjI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTIgKi9cbiAgICAgICAgYjM6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xuICAgICAgICBiNDogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMyAqL1xuICAgICAgICBiNTogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNCAqL1xuICAgICAgICBiNjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNSAqL1xuICAgICAgICBiNzogYm9vbGVhbjtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VICovXG4gICAgICAgIG86IGFueTtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMSAqL1xuICAgICAgICBvMjogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UyICovXG4gICAgICAgIG8zOiBhbnk7XG4gICAgfVxuICAgIC8qKiBjb25zdOaVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YTogX1Rlc3RDb25zdC5EYXRhVHlwZSA9IG51bGw7XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25zdC5qc29uJztcbn1cbiAgICAiLCIvKipcclxuICog5omA5pyJ5Zy65pmv5a+55bqU55qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMge1xyXG4gICAgUHJlZmFiID0gJ0BDdWJlQEBTcGhlcmVAJyxcclxuXHJcbn1cclxuLy8iLCIvKipcclxuICog5omA5pyJ5a+85Ye65Zy65pmv5ZCN5a2XXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsRXhwb3J0U2NlbmVOYW1lIHtcclxuICAgIFNjZW5lID0gJ1NjZW5lJyxcblxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlQ29uZmlnUHJveHkgZnJvbSBcIi4uL0NvbmZpZ1Byb3h5L1NjZW5lTm9kZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBUZXN0Q29uc3RQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvVGVzdENvbnN0UHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Rlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogQ29uZmlnVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflnLrmma/oioLngrnphY3nva7ooajlhoXlrrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhTY2VuZU5vZGVDb25maWdQcm94eS5pbnN0YW5jZS5kYXRhTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W4uOmHj+a1i+ivlemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRlc3RDb25zdFByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4uL0RhdGEvVGVzdERhdGFQcm94eVwiO1xyXG5pbXBvcnQgQ3VzdG9tRGVidWcgZnJvbSBcIi4uL0RlYnVnL0N1c3RvbURlYnVnXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5rWL6K+V57G7XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBEYXRhVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7mtYvor5UnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgQ3VzdG9tRGVidWcuaW5zdGFuY2UuYWRkSXRlbSgnZGF0YVRlc3QnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7orr7nva7lm57osIMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw57uE6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmFycmF5KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCn6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WvueixoeWxnuaApyBhIOiiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5vYmplY3QsICdhJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeVRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTGlicmFyeVRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfml7bpl7Tlt6XlhbcnLCBkYXlqcygnMjAyMC8yLzIwJykpO1xyXG4gICAgICAgIC8vIC8v6L+Z6YeM5Y+q5pyJ5pys5Zyw6K6/6Zeu5omN6KGM77yM57q/5LiK6K6/6Zeu5Lya6Leo5Z+fXHJcbiAgICAgICAgLy8gYXhpb3MuZ2V0PHN0cmluZz4oJ2h0dHA6Ly9iYWlkdS5jb20nKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfor7fmsYLlt6Xlhbfor7fmsYLnmb7luqbnvZHpobUnLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBzdHJpbmc6IGRhdGEuZGF0YSxcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gLy9cclxuICAgICAgICAvLyBsZXQgYSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX+maj+acuuaJk+S5seaVsOe7hCcsIF8uc2h1ZmZsZShhKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1/pmo/mnLrlj5blgLzmlbDnu4QnLCBfLnNhbXBsZShhLCAyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ3Bha2/lt6XlhbcnLCB0eXBlb2YgcGFrbykpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCdheGlvc+W3peWFtycsIHR5cGVvZiBheGlvcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE90aGVyVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBQYWNrVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmiZPljIXmtYvor5U2NycpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IF9UZXN0TWFpblVJQ29uIGZyb20gXCIuLi9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvblwiO1xyXG5pbXBvcnQgQ29uZmlnVGVzdCBmcm9tIFwiLi9Db25maWdUZXN0XCI7XHJcbmltcG9ydCBEYXRhVGVzdCBmcm9tIFwiLi9EYXRhVGVzdFwiO1xyXG5pbXBvcnQgTGlicmFyeVRlc3QgZnJvbSBcIi4vTGlicmFyeVRlc3RcIjtcclxuaW1wb3J0IE90aGVyVGVzdCBmcm9tIFwiLi9PdGhlclRlc3RcIjtcclxuaW1wb3J0IFBhY2tUZXN0IGZyb20gXCIuL1BhY2tUZXN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5Li76ISa5pysXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0TWFpbiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0TWFpbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v5p6E5bu6U2NlbmXlnLrmma/kuIvnmoRkZWJ1Z+iKgueCuVxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5nZXRTY2VuZSgnU2NlbmUnKVxyXG4gICAgICAgICAgICAuZ2V0U2NlbmVOb2RlKCdkZWJ1ZycpXHJcbiAgICAgICAgICAgIC5hc3luY0J1aWxkKClcclxuICAgICAgICAgICAgLnRoZW4oKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3lnLrmma8nLCBub2RlLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3oioLngrknLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIC8v5Li66K+l5Zy65pmv6K6+572u546v5aKDXHJcbiAgICAgICAgICAgICAgICBub2RlLnNjZW5lLnNldEVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8v5pi+56S65rWL6K+VdWlcclxuICAgICAgICBfVGVzdE1haW5VSUNvbi5pbnN0YW5jZS5TaG93KCk7XHJcbiAgICAgICAgLy/mlbDmja5cclxuICAgICAgICBEYXRhVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v57G75bqT5rWL6K+VXHJcbiAgICAgICAgTGlicmFyeVRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+mFjee9ruihqOa1i+ivlVxyXG4gICAgICAgIENvbmZpZ1Rlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+aJk+WMhea1i+ivlVxyXG4gICAgICAgIFBhY2tUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/lhbbku5bmtYvor5VcclxuICAgICAgICBPdGhlclRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgc3RhdGljIHdpZHRoOiBudW1iZXIgPSA3NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0OiBudW1iZXIgPSAxMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTogc3RyaW5nID0gXCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTogc3RyaW5nID0gXCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOiBzdHJpbmcgPSBcInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDogc3RyaW5nID0gXCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTogYW55ID0gXCJcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZU1haW4gZnJvbSBcIi4vR2FtZS9HYW1lTWFpblwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBXaGl0ZVNjcmVlblQgZnJvbSBcIi4vV2hpdGVTY3JlZW5UXCI7XHJcbmltcG9ydCBUTWFpbiBmcm9tIFwiLi9fVC9UTWFpblwiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5iZ0NvbG9yID0gXCIjMDAwMDAwXCI7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHRcdC8vXHJcblx0XHQvKiog5q2j5byP5byA5aeL77yM5Yqg6L2955m95bGPdWkgIzI4ZGY5OSAqL1xyXG5cdFx0V2hpdGVTY3JlZW5ULmxvYWQoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Ly/moYbmnrblhaXlj6NcclxuXHRcdFx0bmV3IFRNYWluKCk7XHJcblx0XHRcdC8v5omT5byA55m95bGPXHJcblx0XHRcdFdoaXRlU2NyZWVuVC5vcGVuKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0Ly/muLjmiI/lhaXlj6NcclxuXHRcdFx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7IiwiLyoqXHJcbiAqIOeZveWxj+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVTY3JlZW5UIHtcclxuICAgIC8qKiDlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fc2NlbmU6IExheWEuU2NlbmU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX2JnOiBMYXlhLlNwcml0ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEubG9hZGVyLmxvYWQoW1xyXG4gICAgICAgICAgICAgICAgXCJpbml0TG9hZC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAnYXRsYXMvaW5pdExvYWQuYXRsYXMnLFxyXG4gICAgICAgICAgICAgICAgJ2F0bGFzL2luaXRMb2FkLnBuZycsXHJcbiAgICAgICAgICAgIF0sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBvcGVuKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICAvL+aJk+W8gOeZveWxj3VpXHJcbiAgICAgICAgICAgIExheWEuU2NlbmUub3BlbignaW5pdExvYWQuanNvbicsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChfc2NlbmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZSA9IF9zY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9iZyA9IHRoaXMubV9zY2VuZS5nZXRDaGlsZEJ5TmFtZSgnYmcnKSBhcyBMYXlhLlNwcml0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgICAgICAgICAgLy/nm5HlkKzlsY/luZXmlLnlj5jkuovku7ZcclxuICAgICAgICAgICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlVmlldyk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGF0ZXIoKS50aGVuKHIpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDkuYvlkI7nmoTlm57osIPvvIzlj6/ku6XlnKjmraTliqDovb3liIbljIVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3BlbkxhdGVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFBsYW4oX246IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7ov5vluqYnLCBfbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbG9zZSgpIHtcclxuICAgICAgICAvL+WIoOmZpOWcuuaZr1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSAmJiB0aGlzLm1fc2NlbmUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX2JnID0gbnVsbDtcclxuICAgICAgICAvL+WFs+mXreebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw6KeG5Zu+XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IF93aWR0aDogbnVtYmVyID0gTGF5YS5zdGFnZS53aWR0aDtcclxuICAgICAgICBsZXQgX2hlaWdodDogbnVtYmVyID0gTGF5YS5zdGFnZS5oZWlnaHQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUud2lkdGggPSBfd2lkdGg7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmhlaWdodCA9IF9oZWlnaHQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fYmcud2lkdGggPSBfd2lkdGg7XHJcbiAgICAgICAgdGhpcy5tX2JnLmhlaWdodCA9IF9oZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQmFzZUNvbmZpZ0NvbnRhaW5lciwgSUNvbmZpZ0NvbnRhaW5lciwgSUNvbnN0Q29udGFpbmVyIH0gZnJvbSBcIi4vQ29uZmlnVFwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuY2xhc3MgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElCYXNlQ29uZmlnQ29udGFpbmVyO1xyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmN5omn6KGMICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJYg5L2/55So5pe26KaG55uWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uZmln5pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29uZmlnUHJveHk8RGF0YT4gZXh0ZW5kcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUNvbmZpZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL+mFjee9ruaVsOaNruWIl+ihqFxyXG4gICAgcHJvdGVjdGVkIG1fZGF0YUxpc3Q6IERhdGFbXTtcclxuXHJcbiAgICAvKiog6YWN572u5pWw5o2u5YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGFMaXN0KCk6IERhdGFbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmNICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhTGlzdCA9IHRoaXMuY29uZmlnVGVtcGxhdGUuZGF0YXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25zdOaVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VDb25zdFByb3h5PERhdGE+IGV4dGVuZHMgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElDb25zdENvbnRhaW5lcjtcclxuXHJcbiAgICAvL+mFjee9ruaVsOaNrlxyXG4gICAgcHJvdGVjdGVkIG1fZGF0YTogRGF0YTtcclxuXHJcbiAgICAvKiog6YWN572u5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY0gKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLmNvbmZpZ1RlbXBsYXRlLmRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9jb20vSUNvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcIi4uL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCIuLi9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVCB7XHJcbiAgICAvKipcclxuICAgICAqIOijhemlsOmFjee9ruihqOS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9jb25maWcg6YWN572u6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVDb25maWdQcm94eShfY29uZmlnOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7phY3nva7ooajmqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5jb25maWdUZW1wbGF0ZSA9IF9jb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66YWN572u6KGo5YiX6KGoXHJcbiAgICAgKiDlj6rmnoTlu7rvvIzkuI3liqDovb1cclxuICAgICAqIEBwYXJhbSBfY29uZmlncyDphY3nva7ooajliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBCdWlsZENvbmZpZ3MoX2NvbmZpZ3M6IElCYXNlQ29uZmlnQ29udGFpbmVyW10pIHtcclxuICAgICAgICBsZXQgX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9jb25maWdzKSB7XHJcbiAgICAgICAgICAgIF91cmwgPSBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoX28uZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAvL+Whq+WFheaVsOaNrlxyXG4gICAgICAgICAgICBzd2l0Y2ggKF9vLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25maWdDb250YWluZXIpLmRhdGFzID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbnN0Q29udGFpbmVyKS5kYXRhID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqGpzb27mlbDmja5cclxuICAgICAqIO+8geazqOaEj++8jOiOt+WPluS6huivpei1hOa6kOivpei1hOa6kOWwseS8muiiq+WIoOmZpOaOiVxyXG4gICAgICogQHBhcmFtIF91cmwg6YWN572u6KGo6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnSnNvbkRhdGEoX3VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvL+iOt+WPlui1hOa6kFxyXG4gICAgICAgIGxldCBjb25maWdEYXRhOiBJQ29uZmlnRGF0YSA9IFJlc0xvYWQuR2V0UmVzKF91cmwsIHRydWUpO1xyXG4gICAgICAgIC8v5riF55CG6LWE5rqQ57yT5a2Y5Y+q5L2/55So5LiA5qyhXHJcbiAgICAgICAgUmVzTG9hZC5DbGVhclJlcyhfdXJsKTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWOi+e8qVxyXG4gICAgICAgIGlmIChjb25maWdEYXRhLnppcCkge1xyXG4gICAgICAgICAgICAvL+ino+WOi1xyXG4gICAgICAgICAgICBsZXQgX3RpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0RhdGEuZGF0YSA9IEpTT04ucGFyc2UocGFrby5pbmZsYXRlKGNvbmZpZ0RhdGEuZGF0YSwgeyB0bzogJ3N0cmluZycgfSkpO1xyXG4gICAgICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICAgICAgLy/liKTmlq3op6Pljovml7bpl7Tlt65cclxuICAgICAgICAgICAgaWYgKF90aW1lID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfphY3nva7ooajop6Pljovml7bpl7Tov4fplb/vvIzlj6/og73mmK/phY3nva7ooajmlofku7bov4flpKctPicsIF91cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBjb25maWdEYXRhLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbvphY3nva7ooajlrrnlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbmZpZyDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ0NvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja7liJfooaggKi9cclxuICAgIGRhdGFzOiBhbnlbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbnN0IOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhOiBhbnk7XHJcbn0iLCIvKipcclxuICog5omT5Y2w5Y+w5bi455So6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQ29uc3Qge1xyXG5cclxuICAgIC8qKiDlhazlhbHmoLflvI8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBwdWJsaWNTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaZrumAmua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjOUJBNEI0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOi9u+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nTGlnaHRTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNzc2ZDhhJywgJyNFQkVCRUInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6K2m5ZGK5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJuU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzVjNmUwNicsICcjZmZhOTMxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmUmeivr+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXJyb3JTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNlYzAxMDEnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaIkOWKn+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29tU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjYWRlNDk4Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX2NvbG9yIOWtl+S9k+minOiJslxyXG4gICAgICogQHBhcmFtIF9iZ0NvbG9yIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFN0eWxlKF9jb2xvcjogc3RyaW5nLCBfYmdDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7X2JnQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGArIHRoaXMucHVibGljU3R5bGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVDb25zdCBmcm9tIFwiLi9Db25zb2xlQ29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmiZPljbDlj7DmianlsZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFeCB7XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zdHlsZSDmoLflvI9cclxuICAgICAqIEBwYXJhbSBfcGFyIOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYWNrKF9zdHlsZTogc3RyaW5nLCBfcGFyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJWMlcycsIF9zdHlsZSwgJ2xvZycsIC4uLl9wYXJdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZyguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmui9u+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nTGlnaHQoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nTGlnaHRTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaIkOWKn+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrQ29tKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmNvbVN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6K2m5ZGK5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tXYXJuKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0Lndhcm5TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijhemUmeivr+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrRXJyb3IoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuZXJyb3JTdHlsZSwgYW55KTtcclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSS9GR1VJUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAyZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDJNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiogZmd1aeagueeuoeeQhuWZqCAqL1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75Y2V6aG16Z2i5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2luZ2xlVUlDb248VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+IGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiBfVUkg57G75Z6LICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJOiBJVUlDcmVhdGU8VUk+O1xyXG5cclxuICAgIC8qKiB1aeexu+Wei+WIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBkZWZhdWx0OiBJQmFzZVVJQ29uRGVmaW5lcyxcclxuICAgIH07XHJcblxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcml2YXRlIG1fdWk6IFVJO1xyXG5cclxuICAgIC8qKiDojrflj5Z1aSAqL1xyXG4gICAgcHVibGljIGdldCB1aSgpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICAvL+iuvue9ruWNlXVpXHJcbiAgICAgICAgICAgIHRoaXMuX1VJcyA9IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB1aUNyZWF0ZTogdGhpcy5fVUksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu65a6M5oiQdWnlkI7nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHtcclxuICAgICAgICB0aGlzLm1fdWkgPSB0aGlzLl9VSXMuZGVmYXVsdC51aSBhcyBVSTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uUHJveHkgZnJvbSBcIi4vQmFzZVVJQ29uUHJveHlcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5pbXBvcnQgRkd1aURhdGEgZnJvbSBcIi4vRkd1aURhdGFcIjtcclxuaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJUm9vdE1hbmFnZXJcIjtcclxuaW1wb3J0IEZHVUlUIGZyb20gXCIuL0ZHVUlUXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcbmltcG9ydCBSb290VUlDb24gZnJvbSBcIi4vUm9vdFVJQ29uXCI7XHJcblxyXG4vKipcclxuICogVUnmjqfliLblmajln7rnsbso55So5p2l5o6n5Yi2VUnnlYzpnaIpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb24gZXh0ZW5kcyBSb290VUlDb24ge1xyXG4gICAgLyoqIFVJ5YiX6KGo77yM5Y+v5Lul5pi+56S65b6I5aSa5LiqdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSUJhc2VVSUNvbkRlZmluZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDllK/kuIDplK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOiOt+WPluWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3ltYm9sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHByaXZhdGUgbV9yb290VUk6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHVibGljIGdldCByb290VUkoKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RVSTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Zyo6ZqQ6JeP5pe25riF55CG5o6JdWnvvIzpu5jorqTkuLp0cnVlICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmQ2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBVSeWxgue6p+exu+Wei++8jOW/hemhu+WcqOWIneWni+WMluaXtuiuvue9riAqL1xyXG4gICAgcHJvdGVjdGVkIF9sYXllcjogRVVJTGF5ZXIgPSBFVUlMYXllci5QYW5lbDtcclxuXHJcbiAgICAvKiogdWnlsYLnuqcgKi9cclxuICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwcml2YXRlIG1faWZTaG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp5Luj55CG5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJveHlVSUxpc3Q6IFNldDxCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmFkZChfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmRlbGV0ZShfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uU2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdWnku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuZFVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5lbmRQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6dWlcclxuICAgIHByaXZhdGUgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUlCZWZvcmVFeCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5om+5YiwdWnliJvlu7rlmajliJfooaghJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIneWni+WMluagueiKgueCuXVpXHJcbiAgICAgICAgdGhpcy5tX3Jvb3RVSSA9IG5ldyBmZ3VpLkdDb21wb25lbnQoKTtcclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuZ2V0TGF5ZXJVSSh0aGlzLl9sYXllcikuYWRkQ2hpbGQodGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSB0aGlzLm1fcm9vdFVJLmFkZENoaWxkKHRoaXMuX1VJc1tfaV0udWlDcmVhdGUuY3JlYXRlSW5zdGFuY2UoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJRVgoKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7p1aeS5i+WJjeeahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHsgfVxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDIOWPquiDveWcqOaJqeWxleS4reS9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUVYKCkgeyB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujHVp5ZCO5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aVxyXG4gICAgICogQHBhcmFtIF9uYW1lIHVp5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4oX25hbWU6IHN0cmluZyk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUlzW19uYW1lXS51aSBhcyBVSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdyguLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb25TaG93QmVmb3JlKC4uLnBhcik7XHJcbiAgICAgICAgbGV0IF9pZk5ldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSSB8fCB0aGlzLm1fcm9vdFVJLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgLy/liJvlu7p1aVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgICAgIF9pZk5ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5Yiw5b2T5YmN5bGC57qn6aG25bGC5pi+56S6XHJcbiAgICAgICAgRkdVSVQuc2V0VUlUb3BTaG93KHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIC8v5omL5Yqo5pu05paw5LiA5qyhXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgLy/nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25TaG93KF9pZk5ldywgLi4ucGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49cclxuICAgICAqIEBwYXJhbSBfaWZDbGVhciDmmK/lkKbmuIXnkIZcclxuICAgICAqIEBwYXJhbSBwYXIg5YW25LuW5Y+C5pWw77yM5Lya5Lyg5Yiw6ZqQ6JeP55qE5Zue6LCD5LitXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBIaWRlKF9pZkNsZWFyOiBib29sZWFuID0gdGhpcy5faWZDbGVhciwgLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb25IaWRlQmVmb3JlKHBhcik7XHJcbiAgICAgICAgaWYgKF9pZkNsZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VVSSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPlua2iOebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25IaWRlKF9pZkNsZWFyLCBwYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeiiq+a4heeQhuaXtueahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9kaXNwb3NlVUkoKSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqIOabtOaWsOWkp+WwjyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgIC8v5qC55o2u5a2QdWnmkLrluKbnmoTmlbDmja7pgILphY3lsY/luZXlpKflsI9cclxuICAgICAgICBsZXQgX2RhdGE6IEZHdWlEYXRhO1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBfZGF0YSA9IHRoaXMuX1VJc1tfaV0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFfZGF0YSB8fCAhX2RhdGEuaWZVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoLCBfaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoIC0gX2RhdGEubGVmdCAtIF9kYXRhLnJpZ2h0LCBfaGVpZ2h0IC0gX2RhdGEuYm90dG9tIC0gX2RhdGEudG9wKTtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWShfZGF0YS5sZWZ0LCBfZGF0YS50b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu3Vp5o6n5Yi25Zmo57G75Z6L5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlVUlDb25EZWZpbmVzIHtcclxuICAgIC8qKiB1aeWIm+W7uuWZqCAqL1xyXG4gICAgdWlDcmVhdGU6IElVSUNyZWF0ZTxmZ3VpLkdDb21wb25lbnQ+O1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YT86IEZHdWlEYXRhO1xyXG4gICAgLyoqIHVpICovXHJcbiAgICB1aT86IGZndWkuR0NvbXBvbmVudDtcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uIGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIHVp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAqIOe7n+S4gOeuoeeQhnVp5o6n5Yi25ZmoXHJcbiAqIOW/hemhu+mFjeWQiOS7o+eQhuWZqOS9v+eUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlcjxQcm94eSBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG4gICAgLyoqIHVp5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aVByb3h5OiBQcm94eTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIOahhuaetuiwg+eUqO+8jOS4jeiDveebtOaOpeiwg+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5LmL5ZCO55qE5qOA5rWLXHJcbiAgICBwcml2YXRlIF9faW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJbnrqHnkIbnmoR1aeWIl+ihqCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlQcm94eSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlnVp5Luj55CGJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5Luj55CG5Zmo5Luj55CGXHJcbiAgICAgICAgICAgIHRoaXMubV91aVByb3h5LnNldFByb3h5KHRoaXMubV91aUNvbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHVpIOaOp+WItuWZqOeuoeeQhuWZqOS7o+eQhlxyXG4gKiDotJ/otKPku6PnkIZ1aeaOp+WItuWZqOeuoeeQhuWZqOS4reeahOaOp+WItuWZqO+8jOmYsuatouW+queOr+S+nei1llxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXJQcm94eSB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcblxyXG4gICAgLyoqIOiOt+WPluW9k+WJjeaYvuekuueahHVpICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2hvd1VJKCk6IEJhc2VVSUNvbltdIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogQmFzZVVJQ29uW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLmlmU2hvdyAmJiBfdWlDb25zLnB1c2godGhpcy5tX3VpQ29uTGlzdFtfaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfdWlDb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfdWlMaXN0IHVp5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eShfdWlMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubV91aUNvbkxpc3QgPSBfdWlMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2udWnplK7lgLzojrflj5bkuIDkuKp1aVxyXG4gICAgICogQHBhcmFtIF9rZXkgdWnplK7lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uPihfa2V5OiBzdHJpbmcpOiBVSUNvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aUNvbkxpc3RbX2tleV0gYXMgVUlDb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLp1aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOe0ouW8leaIluiAhee0ouW8leWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9pZkhpZGVPdGhlclVJIOaYr+WQpumakOiXj+WFtuS7lnVpIFt0cnVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10sIF9pZkhpZGVPdGhlclVJOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmpDol4/lhbbku5Z1aVxyXG4gICAgICAgIGlmIChfaWZIaWRlT3RoZXJVSSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV91aUNvbnMuaW5jbHVkZXMoX2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtfaV0uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3VpQ29uTGlzdFtpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5TaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj3Vp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo5a6e5L6L5oiW5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lvZPliY3mmL7npLrnmoTmiYDmnIl1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZUFsbFVJKCkge1xyXG4gICAgICAgIHRoaXMub25TaG93VUkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxufSIsIi8qKlxyXG4gKiBVSeWIhuWxgizmjInpobrluo/mmL7npLpcclxuICovXHJcbmV4cG9ydCBlbnVtIEVVSUxheWVyIHtcclxuICAgIC8qKiDog4zmma/pobXpnaIgKi9cclxuICAgIEJnID0gJ0JnJyxcclxuICAgIC8qKiDkuLvnlYzpnaIgIOawuOi/nOWtmOWcqCAqL1xyXG4gICAgTWFpbiA9IFwiTWFpblwiLFxyXG4gICAgLyoqIOmdouadvyAg5Y+v5Lul5pyJ5b6I5aSaICovXHJcbiAgICBQYW5lbCA9IFwiUGFuZWxcIixcclxuICAgIC8qKiDlvLnnqpcgKi9cclxuICAgIFBvcHVwID0gXCJQb3B1cFwiLFxyXG4gICAgLyoqIOmBk+WFtyAqL1xyXG4gICAgUHJvcCA9ICdQcm9wJyxcclxuICAgIC8qKiDlsI/pg6jku7YgKi9cclxuICAgIFRpcCA9IFwiVGlwXCIsXHJcbiAgICAvKiog5pqC5YGcICovXHJcbiAgICBQYXVzZSA9ICdQYXVzZScsXHJcbiAgICAvKiog6K6+572uICovXHJcbiAgICBTZXQgPSAnU2V0JyxcclxuICAgIC8qKiDmnIDpq5ggKi9cclxuICAgIFRvcCA9ICdUb3AnLFxyXG4gICAgLyoqIOWKoOi9vemhtemdoiAqL1xyXG4gICAgTG9hZGluZyA9ICdMb2FkaW5nJyxcclxuICAgIC8qKiDljp/nlJ8gKi9cclxuICAgIE5hdGl2ZSA9ICdOYXRpdmUnLFxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5YyF57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRkdVSVBhY2sge1xyXG4gICAgLy8g5YyF6Lev5b6EXHJcbiAgICBwcml2YXRlIHBhY2tQYXRoOiBzdHJpbmc7XHJcbiAgICAvLyDlhbbku5botYTmupDmlbDph49cclxuICAgIHByaXZhdGUgYXRsaWFzQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWMhVxyXG4gICAgICogQHBhcmFtIF9wYWNrVXJsIOWMheWcsOWdgFxyXG4gICAgICogQHBhcmFtIF9hdGxpYXNDb3VudCDlm77pm4bmlbDph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX3BhY2tVcmw6IHN0cmluZywgX2F0bGlhc0NvdW50OiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHRoaXMucGFja1BhdGggPSBfcGFja1VybDtcclxuICAgICAgICB0aGlzLmF0bGlhc0NvdW50ID0gX2F0bGlhc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3VybHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRSZXNVUkwoX3VybHMpO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQyREFzeW5jKF91cmxzLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSB1cmxzIOi+k+WHuuaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVzVVJMKHVybHM6IGFueVtdKSB7XHJcbiAgICAgICAgLy/liqDlhaXljIXlkI1cclxuICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyAnLicgKyBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbiwgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0pO1xyXG4gICAgICAgIC8v5Yqg6L2957q555CG6ZuGXHJcbiAgICAgICAgaWYgKHRoaXMuYXRsaWFzQ291bnQgPj0gMCkge1xyXG4gICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczAucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmF0bGlhc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMF9cIiArIGkgKyBcIi5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogRkdVSSDmoLnnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlSb290TWFuYWdlciB7XHJcbiAgICAvL1VJ5bGC57qndWnliJfooahcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5ZXJVSUxpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBmZ3VpLkdDb21wb25lbnQgfTtcclxuXHJcbiAgICAvLyDojrflj5bmn5DkuIDlsYJVSVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXllclVJKGxheWVyVHlwZTogRVVJTGF5ZXIpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJVSUxpc3RbbGF5ZXJUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8g6K6+572u5YyF5ZCN5ZCO57yAXHJcbiAgICAgICAgZmd1aS5VSUNvbmZpZy5wYWNrYWdlRmlsZUV4dGVuc2lvbiA9IF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoZmd1aS5HUm9vdC5pbnN0LmRpc3BsYXlPYmplY3QpO1xyXG4gICAgICAgIC8v5re75YqgRkdVSeagueiKgueCueaMiemhuuW6j+aYvuekulxyXG4gICAgICAgIHRoaXMubGF5ZXJVSUxpc3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFVUlMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVyVUlMaXN0W0VVSUxheWVyW19pXV0gPSBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQobmV3IGZndWkuR0NvbXBvbmVudCgpKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIGZndWkg5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJVCB7XHJcbiAgICAvKiogdWnlsYLnuqdrZXkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIFVJTGF5ZXJLZXk6IHN5bWJvbCA9IFN5bWJvbCgnVUlMYXllcicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnlsYLnuqfvvIzpmaTkuoZmZ3Vp5qC5566h55CG5Zmo5Zue6LCD55So77yM5YW25LuW55qE5Zyw5pa56K+35LiN6KaB6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHBhcmFtIF9sYXllciDlsYLnuqcgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCwgX2xheWVyOiBFVUlMYXllcikge1xyXG4gICAgICAgIF91aVt0aGlzLlVJTGF5ZXJLZXldID0gX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWnlsYLnuqdcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcmV0dXJucyB1aeWxgue6p1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIF91aVt0aGlzLlVJTGF5ZXJLZXldIGFzIEVVSUxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnpobblsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSVRvcFNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWkp+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1heChfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aeW6leWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJRG93blNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWwj+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1pbihfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciAtIDE7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qC5dWnmjqfliLblmahcclxuICog5omA5pyJdWnmjqfliLblmajnsbvlnovnsbvlnYfnlLHmraTnu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJvb3RVSUNvbiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekulVJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2hvdyguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZOZXcg5piv5ZCm5paw5bu6XHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePVUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBIaWRlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZkRlbGV0ZSDmmK/lkKbliKDpmaRcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG59IiwiaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vc2NlbmUvR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIDNk566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM01hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8qKiDliJ3lp4vljJblhajlsYDnjq/looMgKi9cclxuICAgICAgICBHbG9iYWxEM0Vudmlyb25tZW50LmluaXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIOWFqOWxgDNE546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxEM0Vudmlyb25tZW50IHtcclxuICAgIC8qKiAzZOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9TY2VuZTNEOiBMYXlhLlNjZW5lM0Q7XHJcbiAgICAvKiog5pGE5YOP5py6ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0NhbWVyYTogTGF5YS5DYW1lcmE7XHJcbiAgICAvKiog54Gv5YWJICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0xpZ2h0OiBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG5cclxuICAgIC8qKiDojrflj5YgM2TlnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNjZW5lM0QoKTogTGF5YS5TY2VuZTNEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX1NjZW5lM0Q7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOaRhOWDj+acuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ2FtZXJhKCk6IExheWEuQ2FtZXJhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0NhbWVyYTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg54Gv5YWJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMaWdodCgpOiBMYXlhLkRpcmVjdGlvbkxpZ2h0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0xpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5tX1NjZW5lM0QsXHJcbiAgICAgICAgICAgIGNhbWVyYTogdGhpcy5tX0NhbWVyYSxcclxuICAgICAgICAgICAgbGlnaHQ6IHRoaXMubV9MaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRCA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCkgYXMgTGF5YS5TY2VuZTNEO1xyXG4gICAgICAgIHRoaXMubV9DYW1lcmEgPSBuZXcgTGF5YS5DYW1lcmE7XHJcbiAgICAgICAgdGhpcy5tX0xpZ2h0ID0gbmV3IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0NhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0xpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lUG9vbCBmcm9tIFwic3JjL19UL0dhbWVUL0dhbWVQb29sXCI7XHJcbmltcG9ydCBWM1V0aWxzIGZyb20gXCJzcmMvX1QvVXRpbHMvVjNVdGlsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNDb25maWcsIElQcmVmYWJzRGlmZmVyQ29uZmlnLCBJUHJlZmFic0dhdGhlciB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog6IqC54K55bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlVCB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYr+mihOWItuS9k+mFjee9rlxyXG4gICAgICogQHBhcmFtIF9jb25maWcg6YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZQcmVmYWJzQ29uZmlnKF9jb25maWc6IElOb2RlQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChfY29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lICYmIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7oioLngrnmlbDmja7liJ3lp4vljJboioLngrlcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF90YXJnZXQg55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZShfc3ByOiBMYXlhLlNwcml0ZTNELCBfdGFyZ2V0OiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIsIF90YXJnZXQpO1xyXG4gICAgICAgIC8v6K6+572u5ZCN5a2XXHJcbiAgICAgICAgX3Nwci5uYW1lID0gX3RhcmdldC5uYW1lO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y+Y5o2i55u45YWz55qE5bGe5oCnXHJcbiAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7kvY3nva5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTkvY3nva5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5wb3NpdGlvbiwgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7ml4vovaxcclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTml4vovaxcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLmV1bGVyLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u57yp5pS+XHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k57yp5pS+XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uc2NhbGUsIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6Kem5Y+R55uR5ZCsXHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgIC8v6K6+572u5beu5byCXHJcbiAgICAgICAgbGV0IF9wcmVmYWJDb25maWc6IElQcmVmYWJzQ29uZmlnID0gX3RhcmdldCBhcyBJUHJlZmFic0NvbmZpZztcclxuICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJOYW1lICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLCBfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKrnsr7ngbXlkozmupDnsr7ngbXnmoTlt67lvIJcclxuICAgICAqIEBwYXJhbSBfc3ByIOeyvueBtVxyXG4gICAgICogQHBhcmFtIF9kaWZmZXIg5beu5byC5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNldERpZmZlcihfc3ByOiBMYXlhLlNwcml0ZTNELCBfZGlmZmVyOiBJUHJlZmFic0RpZmZlckNvbmZpZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7lt67lvIInLCBfc3ByLCBfZGlmZmVyKTtcclxuICAgICAgICAvL+iOt+WPluS4gOS4quS4tOaXtuWQkemHj1xyXG4gICAgICAgIGxldCBfY2VudHJlVjM6IExheWEuVmVjdG9yMyA9IEdhbWVQb29sLmdldFYzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfZGlmZiBvZiBfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpZmZlcihfc3ByLmdldENoaWxkQXQoX2RpZmYuaW5kZXgpIGFzIExheWEuU3ByaXRlM0QsIF9kaWZmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlua6kOWPmOaNolxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtOiBMYXlhLlZlY3RvcjNbXSA9IFtHYW1lUG9vbC5nZXRWMygpLCBHYW1lUG9vbC5nZXRWMygpLCBHYW1lUG9vbC5nZXRWMygpXTtcclxuICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5wb3NpdGlvbiwgX3RyYW5zZm9ybVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLmV1bGVyLCBfdHJhbnNmb3JtWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0uc2NhbGUsIF90cmFuc2Zvcm1bMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5pyJdHJhbnNmb3Jt5bGe5oCnXHJcbiAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24sIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMF0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5ldWxlciwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVsxXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzJdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zue5pS25Li05pe25ZCR6YePXHJcbiAgICAgICAgR2FtZVBvb2wucmVjeWNsZVYzKC4uLltfY2VudHJlVjMsIC4uLl90cmFuc2Zvcm1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumihOWItuS9k+WQjeWtl1xyXG4gICAgICogQHBhcmFtIF9wcmVmYWJzTmFtZXMg6L6T5Ye655qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcpIHtcclxuICAgICAgICBpZiAoIV9ub2RlQ29uZmlnKSB7IHJldHVybjsgfVxyXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5piv6aKE5Yi25L2TXHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lOiBzdHJpbmcgPSAoX25vZGVDb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWU7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJOYW1lKSB7XHJcbiAgICAgICAgICAgIC8v5Y676YeNXHJcbiAgICAgICAgICAgIGlmICghX3ByZWZhYnNOYW1lcy5pbmNsdWRlcyhfcHJlZmFiTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIF9wcmVmYWJzTmFtZXMucHVzaChfcHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpui/mOacieWtkOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoX25vZGVDb25maWcuY2hpbGQgJiYgX25vZGVDb25maWcuY2hpbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJlZmFic05hbWVzKF9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7roioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZSDniLboioLngrlcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqIEBwYXJhbSBfZ2V0UHJlZmFicyDojrflj5bpooTliLbkvZPnmoTmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZE5vZGUoX25vZGU6IExheWEuTm9kZSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnLCBfcHJlZmFiczogSVByZWZhYnNHYXRoZXIsIF9nZXRQcmVmYWJzOiAoX25hbWU6IHN0cmluZykgPT4gTGF5YS5TcHJpdGUzRCkge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/kuI3mmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgX3NwciA9IF9nZXRQcmVmYWJzKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0gPSBfcHJlZmFic1tfcHJlZmFiTmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIF9wcmVmYWJzW19wcmVmYWJOYW1lXS5wdXNoKF9zcHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIF9wcmVmYWJzLCBfZ2V0UHJlZmFicyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElTY2VuZUNvbmZpZyB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi9TY2VuZU5vZGVcIjtcclxuaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgQXJyYXlVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL0FycmF5VXRpbHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgQmFzZUl0ZW1Qb29sIGZyb20gXCJzcmMvX1QvY29tL0Jhc2VJdGVtUG9vbFwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZryDlrp7kvotcclxuICog5qC55o2u5oyH5a6a55qE5Zy65pmv6YWN572u6KGo5p6E5bu65Zy65pmvXHJcbiAqIOacrOi6q+e7p+aJv+iHquWvueixoeaxoOWfuuexu++8jOeUqOadpeeuoeeQhumihOWItuS9k+eyvueBtVxyXG4gKiAqIOWPr+S7pee7p+aJv+atpOexu+iHquWumuS5ieWcuuaZr1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBCYXNlSXRlbVBvb2wge1xyXG4gICAgLyoqIOWcuuaZr+WQjeWtlyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zY2VuZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiog546v5aKDICovXHJcbiAgICBwcm90ZWN0ZWQgbV9lbnZpcm9ubWVudDogSVNjZW5lRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgLyoqIOWcuuaZr+mFjee9ruS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lQ29uZmlnOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSU5vZGVDb25maWcsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOWcuuaZr+iKgueCueWunuS+i+e8k+WtmCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTm9kZXNDYWNoZTogTWFwPHN0cmluZ1tdLCBTY2VuZU5vZGVbXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqIOWcuuaZr+S4reWtmOWcqOeahG5vZGXoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9vblNjZW5lTm9kZXM6IFNldDxTY2VuZU5vZGU+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/phY3nva4gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVDb25maWcoKTogSVNjZW5lQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W546v5aKDICovXHJcbiAgICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2Vudmlyb25tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/lvZPliY3lrZjlnKjnmoToioLngrnliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgb25TY2VuZU5vZGVzKCk6IFNjZW5lTm9kZVtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubV9vblNjZW5lTm9kZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lTmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9zY2VuZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9zY2VuZU5hbWUgPSBfc2NlbmVOYW1lO1xyXG4gICAgICAgIC8v5qC55o2u5Zy65pmv5ZCN5a2X6K+75Y+W6YWN572u6KGo5L+h5oGvXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInliJ3lp4vljJblnLrmma/nmoTlkI3lrZfvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9kYXRhOiBJTm9kZUNvbmZpZ1tdID0gQ29uZmlnVC5nZXRDb25maWdKc29uRGF0YShFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKHRoaXMuX3NjZW5lTmFtZSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZy5yb290KTtcclxuICAgICAgICBpZiAoX2RhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bmoLnoioLngrnkuIvnmoToioLngrlcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF9kYXRhLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lQ29uZmlnW19kYXRhW19pXS5uYW1lXSA9IF9kYXRhW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign6I635Y+W5Zy65pmv5pWw5o2u5aSx6LSlLT4nLCB0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7njq/looPvvIzpu5jorqTkuLrlhajlsYAzZOeOr+Wig++8jOWPr+S7peiHquWumuS5ieeOr+Wig1xyXG4gICAgICAgIHRoaXMubV9lbnZpcm9ubWVudCA9IEdsb2JhbEQzRW52aXJvbm1lbnQuRW52aXJvbm1lbnQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnphY3nva5cclxuICAgICAqIEBwYXJhbSBfbm9kZU5hbWUg6IqC54K55ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlQ29uZmlnKF9ub2RlTmFtZTogc3RyaW5nKTogSU5vZGVDb25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVDb25maWdbX25vZGVOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWcuuaZr+iKgueCuVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOiKgueCueWQjeWtl++8jOWPr+S7peWkmuS4quS4gOi1t+aehOW7ulxyXG4gICAgICogQHBhcmFtIF9maW5kQ2FjaGUg5piv5ZCm5Zyo57yT5a2Y5Lit5p+l5om+IHRydWVcclxuICAgICAqIEBwYXJhbSBfYWRkQ2FjaGUg5piv5ZCm5re75Yqg5Yiw57yT5a2YIHRydWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lTm9kZShfbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sIF9maW5kQ2FjaGU6IGJvb2xlYW4gPSB0cnVlLCBfYWRkQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogU2NlbmVOb2RlIHtcclxuICAgICAgICBsZXQgX25hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX25hbWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaChfbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goLi4uX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX25vZGVDb25maWc6IElOb2RlQ29uZmlnW10gPSBbXTtcclxuICAgICAgICBfbmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5wdXNoKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfmnInkuKrlnLrmma/oioLngrnmsqHmnInmib7liLAnLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoX25vZGVDb25maWcubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6I635Y+W5Zy65pmv6IqC54K55pe277yM5LiA5Liq6YWN572u5L+h5oGv6YO95rKh5om+5YiwJywgX25hbWVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9zY2VuZU5vZGU6IFNjZW5lTm9kZTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuWcqOe8k+WtmOS4reaJvlxyXG4gICAgICAgIGlmIChfZmluZENhY2hlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IFtfa2V5LCBfdmFsdWVdIG9mIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheVV0aWxzLkNvbnRlbnRJZlNhbWUoX2tleSwgX25hbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdXNhYmxlOiBTY2VuZU5vZGVbXSA9IF92YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWZEZWxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF91c2FibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2NlbmVOb2RlID0gX3VzYWJsZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoIV9zY2VuZU5vZGUpIHtcclxuICAgICAgICAgICAgLy/mlrDlu7rkuIDkuKrlrp7kvotcclxuICAgICAgICAgICAgX3NjZW5lTm9kZSA9IG5ldyBTY2VuZU5vZGUoX25vZGVDb25maWcsIHRoaXMpO1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpua3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICBpZiAoX2FkZENhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2lmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbX2tleSwgX3ZhbHVlXSBvZiB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXlVdGlscy5Db250ZW50SWZTYW1lKF9rZXksIF9uYW1lcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlLnB1c2goX3NjZW5lTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghX2lmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZS5zZXQoX25hbWVzLCBbX3NjZW5lTm9kZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7njq/looNcclxuICAgICAqIOS8muagueaNruW9k+WJjeWcuuaZr+S4reeOr+Wig+mFjee9ruiuvue9rueOr+Wig1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgbGV0IF9zY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgICAgICAvL+iuvue9ruWFqOWxgOaRhOWDj+aculxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmNhbWVyYSwgX3NjZW5lQ29uZmlnLmNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5YWo5bGA54Gv5YWJXHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5saWdodCkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5saWdodCwgX3NjZW5lQ29uZmlnLmxpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvmnoTlu7rml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBidWlsZE5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuYWRkKF9ub2RlKTtcclxuICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgIHRoaXMuX2J1aWxkTm9kZShfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaToioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+WIoOmZpOaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazle+8jOS8muWcqOiKgueCueecn+ato+iiq+WIoOmZpOWJjeaJp+ihjO+8jOWPr+S7peWcqOi/memHjOaUtumbhumihOWItuS9k+OAglxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZU5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuZGVsZXRlKF9ub2RlKTtcclxuICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZU5vZGUoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K55Yqg6L296L+b5bqmXHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvliqDovb3ml7bvvIzlm57osIPnlKjov5nkuKrlm57osIPkvKDlh7rliqDovb3ov5vluqZcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9uLCBfbm9kZSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZFByb2dyZXNzKF9uLCBfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTliLbkvZNcclxuICAgICAqIOW9k+W9k+WJjeWcuuaZr+S4i+eahOiKgueCueiiq+aehOW7uuaXtu+8jOS8muS7jui/memHjOaLv+mihOWItuS9k++8jOWPr+S7peWcqOi/memHjOaUtumbhumihOWItuS9k1xyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbmFtZSDpooTliLbkvZPlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFByZWZhYnMoX25hbWU6IHN0cmluZyk6IExheWEuU3ByaXRlM0Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRQcmVmYWJzKF9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tLS0tIOWbnuiwg+WHveaVsFxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKiDorr7nva7njq/looPlkI7miafooYznmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfc2V0RW52aXJvbm1lbnQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7IH1cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K56KKr5p6E5bu655qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfYnVpbGROb2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6IqC54K55p6E5bu6JywgX25vZGUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnooqvliKDpmaTnmoTlm57osINcclxuICAgICAqIEBwYXJhbSBfbm9kZSDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9kZWxldGVOb2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6IqC54K55Yig6ZmkJywgX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDpgJrov4fpooTliLbkvZPlkI3lrZfojrflj5bpooTliLbkvZPnmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0UHJlZmFicyhfbmFtZTogc3RyaW5nKTogTGF5YS5TcHJpdGUzRCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WPlumihOWItuS9kycsIF9uYW1lKTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5HZXRSZXMoRXNzZW50aWFsUmVzVXJscy5QcmVmYWJVUkwoX25hbWUpKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv6IqC54K5XHJcbiAqIOeUqOadpeaehOW7uuWcuuaZr+iKgueCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlIHtcclxuICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZTogU2NlbmU7XHJcbiAgICAvKiog5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwcml2YXRlIG1faWZEZWxldGU6IGJvb2xlYW47XHJcbiAgICAvKiog6IqC54K56YWN572u5L+h5oGv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW107XHJcbiAgICAvKiog6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fbm9kZTogTGF5YS5Ob2RlO1xyXG4gICAgLyoqIOmihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnNOYW1lczogc3RyaW5nW107XHJcbiAgICAvKiog6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFiczogSVByZWZhYnNHYXRoZXI7XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwcml2YXRlIG1faWZMb2FkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiDojrflj5bmiYDlsZ7lnLrmma8gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6IqC54K56YWN572u5L+h5oGvICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGVDb25maWdzKCk6IElOb2RlQ29uZmlnW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZUNvbmZpZ3M7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZEZWxldGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5Zy65pmv6IqC54K5ICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGUoKTogTGF5YS5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnMoKTogSVByZWZhYnNHYXRoZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFicztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFic05hbWUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFic05hbWVzO1xyXG4gICAgfVxyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHVibGljIGdldCBpZkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblnLrmma/oioLngrnlrp7kvotcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZ3Mg6IqC54K56YWN572u5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lIOaJgOWxnuWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdLCBfc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgLy/pu5jorqTkuLrliKDpmaTnirbmgIFcclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncyA9IF9ub2RlQ29uZmlncztcclxuICAgICAgICAvL+aPkOWPlumihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzTmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBOb2RlVC5nZXRQcmVmYWJzTmFtZXModGhpcy5tX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZXNVUkw6IHN0cmluZ1tdID0gdGhpcy5tX3ByZWZhYnNOYW1lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQzREFzeW5jKF9wcmVmYWJOYW1lc1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAobikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyhuKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW25dO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXmnoTlu7pcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNCdWlsZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8U2NlbmVOb2RlPiB7XHJcbiAgICAgICAgdGhpcy5tX2lmTG9hZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNjZW5lTm9kZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3luY0xvYWQoX29uUHJvZ3Jlc3MpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lmTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WQkeWcuuaZr+S8oOWHuuWKoOi9vei/m+W6plxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5sb2FkUHJvZ3Jlc3MoX24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu6XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgLy/osIPnlKjlnLrmma/nmoTlm57osINcclxuICAgICAgICB0aGlzLm1fc2NlbmUuYnVpbGROb2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbmV3IExheWEuTm9kZTtcclxuICAgICAgICAvL+a3u+WKoOWIsOaJgOWxnuWcuuaZr+eOr+Wig+S4rVxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5lbnZpcm9ubWVudC5zY2VuZS5hZGRDaGlsZCh0aGlzLm1fbm9kZSk7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSB7fTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIHRoaXMubV9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICBOb2RlVC5idWlsZE5vZGUoX3NwciwgaXRlbSwgdGhpcy5tX3ByZWZhYnMsIChfbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lLmdldFByZWZhYnMoX25hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkxvYWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv6IqC54K56L+Y5Zyo5p6E5bu65Y206K+V5Zu+5Yig6Zmk44CCJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgLy/liKDpmaTkuYvliY3osIPnlKjlnLrmma/nmoTlm57osIPvvIzmlrnkvr/mlLbpm4bpooTliLbkvZNcclxuICAgICAgICB0aGlzLm1fc2NlbmUuZGVsZXRlTm9kZSh0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Z+657G75pWw5o2uXHJcbiAqICEg5Y+q6IO95Ye6546w5pWw5o2u5bGC6Z2i55qE5Lic6KW/XHJcbiAqIOaVsOe7hO+8jOWvueixoe+8jOWAvCAo5pWw5a2X77yM5a2X56ym5Liy77yM5biD5bCU5YC8KVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiXHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75pWw5o2u5Luj55CGXHJcbiAqIOaJgOacieWFs+S6juS7o+eQhuaVsOaNrueahOexu+mDveS7jui/memHjOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IHtcclxuICAgIC8qKiDmlbDmja7mqKHmnb8gKi9cclxuICAgIHByaXZhdGUgZGF0YVRlbXBsYXRlOiB7IG5ldygpOiBEYXRhIH07XHJcblxyXG4gICAgLyoqIOaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOaVsOaNruS7o+eQhuW3peWFtyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fb2JqZWN0UHJveHlUOiBPYmplY3RQcm94eVQ7XHJcblxyXG4gICAgLyoqIOmcgOimgeS/neWtmOeahOaVsOaNriAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZGF0YTogRGF0YTtcclxuXHJcbiAgICAvKiog6I635Y+W5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2V0UHJveHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNldFByb3h5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pWw5o2u5Luj55CG5ZmoXHJcbiAgICAgKiDpgJrov4fov5nkuKrmlbDmja7ku6PnkIblmajlj6/ku6Xmt7vliqDku6PnkIbmlbDmja7vvIzlkozmt7vliqDmlbDmja7nm5HlkKzlm57osIMgW+mFjeWQiCByb290RGF0YSDkvb/nlKhdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2JqZWN0UHJveHlUKCk6IE9iamVjdFByb3h5VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9vYmplY3RQcm94eVQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quaWsOeahOaVsOaNrlxyXG4gICAgICog55So5LqO6YeN5p6E5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXROZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v5aaC5p6c5rKh5pyJ5pWw5o2u5qih5p2/55qE6K+dXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsOaVsOaNruaooeadv++8geivt+S9v+eUqOaVsOaNruaooeadv+ijhemlsOWZqOijhemlsOivpeexuycsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge30gYXMgRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmRhdGFUZW1wbGF0ZSgpIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGluaXREYXRhKCk7XHJcbn0iLCJpbXBvcnQgTWQ1IGZyb20gJy4vTWQ1JztcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gJy4vQmFzZURhdGFQcm94eSc7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tICcuL0Jhc2VEYXRhJztcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gJ3NyYy9Db25maWcvX01haW5Db25maWcnO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gJy4vT2JqZWN0UHJveHlUJztcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmnKzlnLDmlbDmja7ku6PnkIbvvIzpgJrov4fmraTnsbvlj6/ku6Xorr/pl67mnKzlnLDkv53lrZjnmoTmlbDmja5cclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9jYWxEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblr7nmr5TmlbDmja5cclxuICAgICAqIOm7mOiupOS4unRydWXvvIzlpoLmnpzkuLrnnJ/lvZPkuLrnur/kuIrmqKHlvI/ml7bkvJrnlJ/miJDkuIDkuKrliqDlr4bnmoTlr7nmr5TmlbDmja7vvIzpmLLmraLnlKjmiLfmlLnliqjmnKzlnLDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkRpZmZlckRhdGE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOiOt+WPluS/neWtmOWQjeensFxyXG4gICAgICog6buY6K6k6L+U5Zue57G75ZCN77yM5Y+v5Lul6YeN5YaZXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX3NhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pu5jorqTov5Tlm57nsbvlkI1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5L+d5a2Y5pWw5o2u55qE5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBzYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6aG555uu5ZCN5a2XICsg5L+d5a2Y5ZCN5a2XICsg6aG555uu54mI5pysXHJcbiAgICAgICAgcmV0dXJuIF9NYWluQ29uZmlnLk5hbWUgKyAnLScgKyB0aGlzLl9zYXZlTmFtZSArICctJyArIF9NYWluQ29uZmlnLlZlcnNpb25zICsgKF9NYWluQ29uZmlnLk9uTGluZSA/ICdeb24nIDogJ150ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5a+55q+U5pWw5o2u55qE5L+d5a2Y5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBkaWZmZXJOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KHRoaXMuc2F2ZU5hbWUgKyAnX192ZXJpZnknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy/orrDlvZXml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLl9yZWFkRGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CG5YyF6KOF5pWw5o2uXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5pWw5o2u5Luj55CG5bel5YW3XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg6K6+572u55uR5ZCsXHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCB0aGlzLl9kYXRhU2V0TW9uaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfliJ3lp4vljJbmnKzlnLDmlbDmja7ml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5a6M5oiQ77yM57un5om/5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqIOaVsOaNruiiq+iuvue9ruebkeWQrCAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0YVNldE1vbml0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOS/neWtmOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gSDpu5jorqTkuLp0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTYXZlKF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSwgX2lmQ2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDkv53lrZjmiafooYzpmJ/liJcgKi9cclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrUXVldWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgICogQHBhcmFtIG1fZGF0YSDmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlKG1fZGF0YTogRGF0YSwgX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgLy/mt7vliqDml7bpl7TliKTmlq1cclxuICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmZDmtYFcclxuICAgICAgICBpZiAoIV9pZkNsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUrKztcclxuICAgICAgICAgICAgLy/pmZDmtYHvvIzmr4/kuIDmrKHlro/ku7vliqHlj6rkv53lrZjkuIDmrKHmlbDmja5cclxuICAgICAgICAgICAgLy/miorkv53lrZjku7vliqHms6jlhozov5vlvq7ku7vliqHliJfooajvvIzlsIbkvJrlnKjmnKzmrKHmlbDmja7kv67mlLnnmoTlro/ku7vliqHlrozmiJDlkI7lubblnKjkuIvmrKHlro/ku7vliqHlvIDlp4vliY3ooqvlhajpg6jmiafooYxcclxuICAgICAgICAgICAgLy8gcXVldWVNaWNyb3Rhc2soKCkgPT4gey8v5p+Q5Lqb5bmz5Y+w5Lya5LiN5YW85a65XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZS0tO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNruWJjScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrUXVldWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgIHByaXZhdGUgX3NhdmUobV9kYXRhPzogRGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja4nKTtcclxuICAgICAgICAvL+W6j+WIl+WMllxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkobV9kYXRhKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5zYXZlTmFtZSwganNvbik7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlckpzb24gPSB0aGlzLmdldERpZmZlckRhdGEoanNvbik7XHJcbiAgICAgICAgICAgIC8v5L+d5a2Y5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04odGhpcy5kaWZmZXJOYW1lLCBfZGlmZmVySnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKSAtIHRoaXMubV9zYXZlVG9EaXNrVGltZTtcclxuICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPSAwO1xyXG4gICAgICAgIC8v5Yik5pat5pe26Ze05beuXHJcbiAgICAgICAgaWYgKF90aW1lID4gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/kv53lrZjml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7juacrOWcsOiOt+WPluaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfcmVhZERhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgLy/or7vlj5bmnKzlnLDmlbDmja5cclxuICAgICAgICBsZXQgcmVhZFN0ciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5zYXZlTmFtZSk7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIrnjq/looNcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lICYmIHRoaXMuX2lmRGlmZmVyRGF0YSkge1xyXG4gICAgICAgICAgICAvL+WvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgX2RpZmZlciA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04odGhpcy5kaWZmZXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlmZmVyRGF0YShyZWFkU3RyKSAhPSBfZGlmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluS4gOS4quaWsOeahOWunuS+i1xyXG4gICAgICAgIGxldCBfc2F2ZURhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaVsOaNruaYr+WQpuiiq+evoeaUuVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlYWRTdHIpO1xyXG4gICAgICAgICAgICAgICAgLy/nlKjmnKzlnLDnmoTmlbDmja7loavlhYXlvZPliY3mlbDmja5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBfc2F2ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2F2ZURhdGFba2V5XSA9IGpzb25EYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2F2ZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blubbkv53lrZjkuIDkuKrmlrDmlbDmja5cclxuICAgIHByaXZhdGUgX3NhdmVOZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIGxldCBtX2RhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+S/neWtmOaVsOaNru+8jOS4jemZkOa1gVxyXG4gICAgICAgIHRoaXMuc2F2ZShtX2RhdGEgYXMgRGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG1fZGF0YSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aSE55CG5a+55q+U5pWw5o2uXHJcbiAgICBwcml2YXRlIGdldERpZmZlckRhdGEoX3N0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuepulxyXG4gICAgICAgIGlmICghX3N0cmluZykgcmV0dXJuICcnO1xyXG4gICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdChfc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aVsOaNruWNleWQkeWKoOWvhlxyXG4gICAgcHJpdmF0ZSBlbmNyeXB0KF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfZW5jcnlwdFN0cjogc3RyaW5nID0gYExheWFNaW5pR2FtZS0ke3RoaXMuc2F2ZU5hbWV9OiR7X3N0cmluZ31gO1xyXG4gICAgICAgIC8v5Yik5pat6IO95ZCm5L2/55SobWQ1XHJcbiAgICAgICAgaWYgKE1kNS5pZlVzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWQ1Lmhhc2hTdHIoX2VuY3J5cHRTdHIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/kuI3nlKjku7vkvZXliqDlr4ZcclxuICAgICAgICAgICAgcmV0dXJuICdub0VuY3J5cHQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tIFwiLi9CYXNlRGF0YVByb3h5XCI7XHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2u5Luj55CG5Z+657G7XHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNob3J0RGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKiDkuLTml7bmlbDmja7pu5jorqTkuI3orr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluaVsOaNruWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5aSE55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVCB7XHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruaooeadv+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9kYXRhIOaVsOaNruaooeadv1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlRGF0YVRlbXBsYXRlKF9kYXRhOiB7IG5ldygpOiBCYXNlRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruaVsOaNruaooeadv1xyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLmRhdGFUZW1wbGF0ZSA9IF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBUeXBlU2NyaXB0IE1kNeWKoOWvhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWQ1IHtcclxuICAgIC8qKiDog73lkKbkvb/nlKggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZVc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIE9uZSB0aW1lIGhhc2hpbmcgZnVuY3Rpb25zXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaEFzY2lpU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZEFzY2lpU3RyKHN0cilcclxuICAgICAgICAgICAgLmVuZChyYXcpO1xyXG4gICAgfVxyXG4gICAgLy8gUHJpdmF0ZSBTdGF0aWMgVmFyaWFibGVzXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0ZUlkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGJ1ZmZlcjMySWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4Q2hhcnMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhPdXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLy8gUGVybWFuZW50IGluc3RhbmNlIGlzIHRvIHVzZSBmb3Igb25lLWNhbGwgaGFzaGluZ1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25lUGFzc0hhc2hlciA9IG5ldyBNZDUoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaGV4KHg6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGMgPSBNZDUuaGV4Q2hhcnM7XHJcbiAgICAgICAgY29uc3QgaG8gPSBNZDUuaGV4T3V0O1xyXG4gICAgICAgIGxldCBuO1xyXG4gICAgICAgIGxldCBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGo7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gaSAqIDg7XHJcbiAgICAgICAgICAgIG4gPSB4W2ldO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgODsgaiArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAxICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAwICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xyXG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9tZDVjeWNsZSh4OiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXksIGs6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSkge1xyXG4gICAgICAgIGxldCBhID0geFswXTtcclxuICAgICAgICBsZXQgYiA9IHhbMV07XHJcbiAgICAgICAgbGV0IGMgPSB4WzJdO1xyXG4gICAgICAgIGxldCBkID0geFszXTtcclxuICAgICAgICAvLyBmZigpXHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1swXSAtIDY4MDg3NjkzNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzFdIC0gMzg5NTY0NTg2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzJdICsgNjA2MTA1ODE5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzNdIC0gMTA0NDUyNTMzMCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s0XSAtIDE3NjQxODg5NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzVdICsgMTIwMDA4MDQyNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1s2XSAtIDE0NzMyMzEzNDEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbN10gLSA0NTcwNTk4MyB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s4XSArIDE3NzAwMzU0MTYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s5XSAtIDE5NTg0MTQ0MTcgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTBdIC0gNDIwNjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTFdIC0gMTk5MDQwNDE2MiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1sxMl0gKyAxODA0NjAzNjgyIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMTNdIC0gNDAzNDExMDEgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTRdIC0gMTUwMjAwMjI5MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxNV0gKyAxMjM2NTM1MzI5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICAvLyBnZygpXHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxXSAtIDE2NTc5NjUxMCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzZdIC0gMTA2OTUwMTYzMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzExXSArIDY0MzcxNzcxMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1swXSAtIDM3Mzg5NzMwMiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s1XSAtIDcwMTU1ODY5MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzEwXSArIDM4MDE2MDgzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTVdIC0gNjYwNDc4MzM1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzRdIC0gNDA1NTM3ODQ4IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzldICsgNTY4NDQ2NDM4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTRdIC0gMTAxOTgwMzY5MCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzNdIC0gMTg3MzYzOTYxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzhdICsgMTE2MzUzMTUwMSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1sxM10gLSAxNDQ0NjgxNDY3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMl0gLSA1MTQwMzc4NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzddICsgMTczNTMyODQ3MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1sxMl0gLSAxOTI2NjA3NzM0IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICAvLyBoaCgpXHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbNV0gLSAzNzg1NTggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbOF0gLSAyMDIyNTc0NDYzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxMV0gKyAxODM5MDMwNTYyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxNF0gLSAzNTMwOTU1NiB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxXSAtIDE1MzA5OTIwNjAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbNF0gKyAxMjcyODkzMzUzIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1s3XSAtIDE1NTQ5NzYzMiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTBdIC0gMTA5NDczMDY0MCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxM10gKyA2ODEyNzkxNzQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMF0gLSAzNTg1MzcyMjIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzNdIC0gNzIyNTIxOTc5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1s2XSArIDc2MDI5MTg5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzldIC0gNjQwMzY0NDg3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzEyXSAtIDQyMTgxNTgzNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTVdICsgNTMwNzQyNTIwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1syXSAtIDk5NTMzODY1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICAvLyBpaSgpXHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMF0gLSAxOTg2MzA4NDQgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbN10gKyAxMTI2ODkxNDE1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxNF0gLSAxNDE2MzU0OTA1IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s1XSAtIDU3NDM0MDU1IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1sxMl0gKyAxNzAwNDg1NTcxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzNdIC0gMTg5NDk4NjYwNiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTBdIC0gMTA1MTUyMyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMV0gLSAyMDU0OTIyNzk5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s4XSArIDE4NzMzMTMzNTkgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTVdIC0gMzA2MTE3NDQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzZdIC0gMTU2MDE5ODM4MCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMTNdICsgMTMwOTE1MTY0OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbNF0gLSAxNDU1MjMwNzAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTFdIC0gMTEyMDIxMDM3OSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMl0gKyA3MTg3ODcyNTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzldIC0gMzQzNDg1NTUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuXHJcbiAgICAgICAgeFswXSA9IGEgKyB4WzBdIHwgMDtcclxuICAgICAgICB4WzFdID0gYiArIHhbMV0gfCAwO1xyXG4gICAgICAgIHhbMl0gPSBjICsgeFsyXSB8IDA7XHJcbiAgICAgICAgeFszXSA9IGQgKyB4WzNdIHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9idWZmZXJMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogSW50MzJBcnJheSA9IG5ldyBJbnQzMkFycmF5KDQpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyOiBBcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig2OCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI4OiBVaW50OEFycmF5O1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyMzI6IFVpbnQzMkFycmF5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjggPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIsIDAsIDY4KTtcclxuICAgICAgICB0aGlzLl9idWZmZXIzMiA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9idWZmZXIsIDAsIDE3KTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuc2V0KE1kNS5zdGF0ZUlkZW50aXR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFyIHRvIGNvZGUgcG9pbnQgdG8gdG8gYXJyYXkgY29udmVyc2lvbjpcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9jaGFyQ29kZUF0XHJcbiAgICAvLyAjRXhhbXBsZS4zQV9GaXhpbmdfY2hhckNvZGVBdF90b19oYW5kbGVfbm9uLUJhc2ljLU11bHRpbGluZ3VhbC1QbGFuZV9jaGFyYWN0ZXJzX2lmX3RoZWlyX3ByZXNlbmNlX2VhcmxpZXJfaW5fdGhlX3N0cmluZ19pc191bmtub3duXHJcbiAgICBwdWJsaWMgYXBwZW5kU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBjb2RlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYpICsgMHhDMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZSAmIDB4M0YgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweEQ4MDAgfHwgY29kZSA+IDB4REJGRikge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIpICsgMHhFMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9ICgoY29kZSAtIDB4RDgwMCkgKiAweDQwMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAtIDB4REMwMCkgKyAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDEwRkZGRikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5pY29kZSBzdGFuZGFyZCBzdXBwb3J0cyBjb2RlIHBvaW50cyB1cCB0byBVKzEwRkZGRicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTgpICsgMHhGMDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA+PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgICAgIGJ1ZkxlbiAtPSA2NDtcclxuICAgICAgICAgICAgICAgIGJ1ZjMyWzBdID0gYnVmMzJbMTZdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQXNjaWlTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oc3RyLmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBzdHIuY2hhckNvZGVBdChqKyspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEJ5dGVBcnJheShpbnB1dDogVWludDhBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihpbnB1dC5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gaW5wdXRbaisrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBzID0gc2VsZi5fc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcjogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBzZWxmLl9idWZmZXI4KSxcclxuICAgICAgICAgICAgYnVmbGVuOiBzZWxmLl9idWZmZXJMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogc2VsZi5fZGF0YUxlbmd0aCxcclxuICAgICAgICAgICAgc3RhdGU6IFtzWzBdLCBzWzFdLCBzWzJdLCBzWzNdXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBidWYgPSBzdGF0ZS5idWZmZXI7XHJcbiAgICAgICAgY29uc3QgeCA9IHN0YXRlLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLl9zdGF0ZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBzdGF0ZS5idWZsZW47XHJcbiAgICAgICAgc1swXSA9IHhbMF07XHJcbiAgICAgICAgc1sxXSA9IHhbMV07XHJcbiAgICAgICAgc1syXSA9IHhbMl07XHJcbiAgICAgICAgc1szXSA9IHhbM107XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyOFtpXSA9IGJ1Zi5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5kKHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgY29uc3QgaSA9IChidWZMZW4gPj4gMikgKyAxO1xyXG4gICAgICAgIGxldCBkYXRhQml0c0xlbjtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSBidWZMZW47XHJcblxyXG4gICAgICAgIGJ1ZjhbYnVmTGVuXSA9IDB4ODA7XHJcbiAgICAgICAgYnVmOFtidWZMZW4gKyAxXSA9IGJ1ZjhbYnVmTGVuICsgMl0gPSBidWY4W2J1ZkxlbiArIDNdID0gMDtcclxuICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkuc3ViYXJyYXkoaSksIGkpO1xyXG5cclxuICAgICAgICBpZiAoYnVmTGVuID4gNTUpIHtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWYzMi5zZXQoTWQ1LmJ1ZmZlcjMySWRlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIGZpbmFsIGNvbXB1dGF0aW9uIGJhc2VkIG9uIHRoZSB0YWlsIGFuZCBsZW5ndGhcclxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1heSBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcclxuICAgICAgICBkYXRhQml0c0xlbiA9IHRoaXMuX2RhdGFMZW5ndGggKiA4O1xyXG4gICAgICAgIGlmIChkYXRhQml0c0xlbiA8PSAweEZGRkZGRkZGKSB7XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGRhdGFCaXRzTGVuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhQml0c0xlbi50b1N0cmluZygxNikubWF0Y2goLyguKj8pKC57MCw4fSkkLyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTYpO1xyXG4gICAgICAgICAgICBjb25zdCBoaSA9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDE2KSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gbG87XHJcbiAgICAgICAgICAgIGJ1ZjMyWzE1XSA9IGhpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmF3ID8gdGhpcy5fc3RhdGUgOiBNZDUuX2hleCh0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5qOA5p+lTWQ15piv5ZCm5Y+v55SoXHJcbmlmIChNZDUuaGFzaFN0cignaGVsbG8nKSAhPT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xyXG4gICAgLy/orr7nva7kuI3og73kvb/nlKhcclxuICAgIE1kNS5pZlVzZSA9IGZhbHNlO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybignTWQ1IHNlbGYgdGVzdCBmYWlsZWQuJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIOWvueixoeS7o+eQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJveHlUIHtcclxuICAgIC8qKiDnm5HlkKzliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9tb25pdG9yTGlzdDoge1xyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzln58gKi9cclxuICAgICAgICBfdGhpczogYW55LFxyXG4gICAgICAgIC8qKiDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5UgKi9cclxuICAgICAgICBfYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgLyoqIOa6kOWvueixoSAqL1xyXG4gICAgICAgIF9vYmo/OiBvYmplY3QsXHJcbiAgICAgICAgLyoqIOmUruWAvCAqL1xyXG4gICAgICAgIF9rZXk/OiBzdHJpbmcsXHJcbiAgICB9W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOebkeWQrFxyXG4gICAgICog55uR5ZCs5p+Q5Liq5a+56LGh55qE5p+Q5Liq5bGe5oCn5piv5ZCm5Y+R55Sf5pu05pS5XHJcbiAgICAgKiDlpoLmnpzlj6/pgInlsZ7mgKfpg73kuI3loavnmoTor53liJnnm5HlkKzlhajpg6jnm5HlkKzmlbDmja7lsZ7mgKfmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfdGhpcyDnm5HlkKzop6blj5Hlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDnm5HlkKzop6blj5Hlm57osIPmiafooYzmlrnms5VcclxuICAgICAqIEBwYXJhbSBfb2JqIOebruagh+Wvueixoe+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWGheWuueabtOaUuVxyXG4gICAgICogQHBhcmFtIF9rZXkg6ZSu5ZCN77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRNb25pdG9yPE8gZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBPPihfdGhpczogYW55LCBfYmFjazogRnVuY3Rpb24sIF9vYmo/OiBPLCBfa2V5PzogSykge1xyXG4gICAgICAgIC8v5re75Yqg5Yiw55uR5ZCs5YiX6KGoXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBfdGhpcyxcclxuICAgICAgICAgICAgX2JhY2ssXHJcbiAgICAgICAgICAgIF9vYmosXHJcbiAgICAgICAgICAgIF9rZXk6IF9rZXkgYXMgc3RyaW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhck1vbml0b3IoX3RoaXM6IGFueSwgX2JhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdCA9IHRoaXMubV9tb25pdG9yTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEoXHJcbiAgICAgICAgICAgICAgICBpdGVtLl90aGlzID09IF90aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj6/pgInnmoTlm57osINcclxuICAgICAgICAgICAgICAgICAgICAmJiBfYmFjayA/IGl0ZW0uX2JhY2sgPT0gX2JhY2sgOiB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX28g5rqQ5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eTxEYXRhIGV4dGVuZHMgb2JqZWN0PihfbzogRGF0YSk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRQcm94eShfbykgYXMgRGF0YTtcclxuICAgIH1cclxuICAgIC8v6YWN5ZCI6K6+572u5Luj55CGXHJcbiAgICBwcml2YXRlIF9zZXRQcm94eShfbyk6IG9iamVjdCB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mma7pgJrlgLznsbvlnovlkozmlrnms5VcclxuICAgICAgICBpZiAodHlwZW9mIF9vID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgX28gIT0gXCJvYmplY3RcIiB8fCAhX28pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9vO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+WPr+i/reS7o+WvueixoeWSjOaWueazlVxyXG4gICAgICAgIGlmICghX29bU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4gICAgICAgICAgICAvL+mBjeWOhuWvueixoeiuvue9ruS7o+eQhlxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICAgICAgX29bX2ldID0gdGhpcy5fc2V0UHJveHkoX29bX2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i/lOWbnuacgOe7iOeahOS7o+eQhuWvueixoVxyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShfbywge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqICBzZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v5L+u5pS55bGe5oCnXHJcbiAgICAgICAgICAgICAgICBsZXQgX2lmOiBib29sZWFuID0gUmVmbGVjdC5zZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9pZikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5piv5LiN5piv5pWw57uE55qEbGVuZ3Ro5bGe5oCn6KKr5L+u5pS5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoQXJyYXkuaXNBcnJheSh0cmFwVGFyZ2V0KSAmJiBrZXkgPT0gJ2xlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pZjtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogZ2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoe+8iOmAmuW4uOaYr+S7o+eQhu+8iVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5bGe5oCnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKlxyXG4gICAgICog5Luj55CG5a+56LGh6KKr6K6+572u5pe255qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Luj55CG5a+56LGh6KKr6K6+572uJywgdHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGxldCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIC8v5omn6KGM55uR5ZCsXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy/lhYjliKTmlq3ku6PnkIbnm67moIdcclxuICAgICAgICAgICAgaWYgKGl0ZW0uX29iaiAmJiBpdGVtLl9vYmogIT0gcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fa2V5ICYmIGl0ZW0uX2tleSAhPSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICBpdGVtLl9iYWNrLmNhbGwoaXRlbS5fdGhpcywgLi4uX2FyZ3VtZW50cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0dhbWVDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDmoLnosIPor5XnsbvvvIzmiYDmnInosIPor5Xnsbvlv4XpobvnlLHmraTnu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEZWJ1ZyB7XHJcbiAgICAvKiog5YmN57yAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFByZWZpeDogc3RyaW5nID0gJyREZWJ1Zyc7XHJcblxyXG4gICAgLyoqIOagueiwg+ivleWvueixoSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWJ1Z09iajogYW55ID0ge307XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5ZCN5a2X77yM55SoIFdpbmRvd1vliY3nvIAgKyBfbmFtZV0g6K6/6ZeuXHJcbiAgICAgKiDlj6/ku6Xnu6fmib/mm7TmlLnov5nkuKrlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBfbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBfaWZJbml0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuIDkuKrosIPor5Xlr7nosaFcclxuICAgICAqIEBwYXJhbSBfa2V5IGtleVxyXG4gICAgICogQHBhcmFtIF9pdGVtIOivpeWvueixoVxyXG4gICAgICogQHBhcmFtIF90eXBlIOivpeWvueixoeexu+Wei1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSXRlbShfa2V5OiBzdHJpbmcsIF9pdGVtOiBhbnkpIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuW8gOWQr+S6huiwg+ivlVxyXG4gICAgICAgIGlmICghX0dhbWVDb25maWcuaWZEZWJ1Zykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5faWZJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lmSW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIEJhc2VEZWJ1Zy5EZWJ1Z09ialt0aGlzLl9uYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNbX2tleV0gPSBfaXRlbTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKblvIDlkK/kuobosIPor5XmqKHlvI9cclxuaWYgKF9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgIC8v5rOo5YaM5YWo5bGA6LCD6K+V5a+56LGhXHJcbiAgICB3aW5kb3dbQmFzZURlYnVnLlByZWZpeF0gPSBCYXNlRGVidWcuRGVidWdPYmo7XHJcbiAgICAvL1xyXG4gICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5byA5ZCv6LCD6K+V5qih5byP77yM6YCa6L+HJywgQmFzZURlYnVnLlByZWZpeCwgJ+iuv+mXricpKTtcclxufSIsIlxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGgXHJcbiAqICEg5Y+q6IO95ri45oiP5YaF5L2/55So77yM5LiN6KaB5Zyo5bel5YW35Lit5L2/55SoXHJcbiAqICEg5bC96YeP5Y+q5Zyo6YeN5aSN5Yib5bu66Z2e5bi45aSa5a+56LGh55qE5Zyw5pa55L2/55So77yM5LiN54S25Lya5b6X5LiN5YG/5aSxXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUG9vbCB7XHJcbiAgICAvKiog5a+56LGh5rGg5YiX6KGoICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IGFueVtdLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gX3NpZ24gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SXRlbTxUIGV4dGVuZHMgYW55Pihfc2lnbjogRUdhbWVQb29sU2lnbik6IFQge1xyXG4gICAgICAgIC8v5YWI5Yiw5pys5Zyw5a+56LGh5rGg5YiX6KGo5Lit5p+l5om+XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbExpc3RbX3NpZ25dICYmIHRoaXMucG9vbExpc3RbX3NpZ25dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9vbExpc3RbX3NpZ25dLnBvcCgpIGFzIFQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfc2lnbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFR2FtZVBvb2xTaWduLnYzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IExheWEuVmVjdG9yMykgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFR2FtZVBvb2xTaWduLnYyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IExheWEuVmVjdG9yMikgYXMgYW55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS25YWD57SgXHJcbiAgICAgKiBAcGFyYW0gX3NpZ24g5Zue5pS25qCH6K+GXHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g5Zue5pS25YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZUl0ZW0oX3NpZ246IEVHYW1lUG9vbFNpZ24sIC4uLl9pdGVtczogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbExpc3RbX3NpZ25dID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+q5re75Yqg5LiN5YyF5ZCr55qE5YWD57SgXHJcbiAgICAgICAgZm9yIChsZXQgX28gb2YgX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wb29sTGlzdFtfc2lnbl0uaW5jbHVkZXMoX28pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXS5wdXNoKF9vKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjMoKTogTGF5YS5WZWN0b3IzIHtcclxuICAgICAgICBsZXQgX3YzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IzPihFR2FtZVBvb2xTaWduLnYzKTtcclxuICAgICAgICBfdjMuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djNcclxuICAgICAqIEBwYXJhbSBfdjMg5b6F5Zue5pS255qEdjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjMoLi4uX3YzczogTGF5YS5WZWN0b3IzW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjMsIC4uLl92M3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWMigpOiBMYXlhLlZlY3RvcjIge1xyXG4gICAgICAgIGxldCBfdjI6IExheWEuVmVjdG9yMiA9IHRoaXMuZ2V0SXRlbTxMYXlhLlZlY3RvcjI+KEVHYW1lUG9vbFNpZ24udjIpO1xyXG4gICAgICAgIF92Mi5zZXRWYWx1ZSgwLCAwKTtcclxuICAgICAgICByZXR1cm4gX3YyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLZ2MlxyXG4gICAgICogQHBhcmFtIF92MiDlvoXlm57mlLbnmoR2MlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVWMiguLi5fdjJzOiBMYXlhLlZlY3RvcjJbXSkge1xyXG4gICAgICAgIHRoaXMucmVjeWNsZUl0ZW0oRUdhbWVQb29sU2lnbi52MiwgLi4uX3Yycyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/lr7nosaHmsaDmoIfor4ZcclxuICovXHJcbmV4cG9ydCBlbnVtIEVHYW1lUG9vbFNpZ24ge1xyXG4gICAgLyoqIDPnu7TlkJHph48gKi9cclxuICAgIHYzLFxyXG4gICAgLyoqIDLnu7TlkJHph48gKi9cclxuICAgIHYyLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IFJlc0xvYWRHcm91cCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRHcm91cFwiO1xyXG5pbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4uL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+i/m+WFpeS5i+WJjeeahOWKoOi9veWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUluaXRMb2FkIHtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+W8gOWni+WKoOi9vea4uOaIj+WIneWni+WMlui1hOa6kCcpKTtcclxuICAgICAgICAvL+aJp+ihjOWKoOi9veS5i+WJjeeahOW8guatpVxyXG4gICAgICAgIHRoaXMuX2xvYWRCZWZvcmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy/ojrflj5bliqDovb3poblcclxuICAgICAgICAgICAgbGV0IF9yZXNMb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSB0aGlzLl9nZXRMb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgLy/lvILmraXliqDovb3liqDovb3poblcclxuICAgICAgICAgICAgUmVzTG9hZEdyb3VwLmxvYWRBc3luYyhfcmVzTG9hZEl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkUGxhbihpKTtcclxuICAgICAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5fbG9hZEl0ZW1zQ29tLCB1bmRlZmluZWQsIGZhbHNlKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0NvbSgn5ri45oiP5Yqg6L295a6M5oiQJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZENvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WKoOi9veS5i+WJjVxyXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5YWI5Yqg6L295LiA5Lqb5Lic6KW/XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEJlZm9yZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9nZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFBsYW4oX2k6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRDb20oKSB7IH1cclxufSIsImltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcIi4vRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSBcIi4vS2V5UmVzTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIOWFrOWFsei1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tUmVzVXJsIHtcclxuICAgIC8qKlxyXG4gICAgICog6Z+z5LmQ5paH5Lu26Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDmlofku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE11c2ljVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5tcDMnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUubXVzaWMpICsgbmFtZSArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOmfs+aViOWQjeWtlyBcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNvdW5kVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5tcDMnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuc291bmQpICsgbmFtZSArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77moIfotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOWbvuagh+WQjeensCBcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEljb25VUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAnLnBuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5pY29uKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+54mH6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77niYfotYTmupDlkI3lrZdcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEltZ1VSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICdwbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuaW1nKSArIG5hbWUgKyAnLicgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55qu6IKk6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDnmq7ogqTlkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTa2luVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJ3BuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5za2luKSArIG5hbWUgKyAnLicgKyBfO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWQjeWtl+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUtleVJlc05hbWUge1xyXG4gICAgLyoqIOagueebruW9lSAqL1xyXG4gICAgUm9vdFJlcyA9ICdyZXMnLFxyXG4gICAgLyoqIOmFjee9ruihqOebruW9lSAqL1xyXG4gICAgQ29uZmlnSnNvbiA9ICdDb25maWdKc29uJyxcclxuICAgIC8qKiDlrZfkvZPnm67lvZUgKi9cclxuICAgIEZvbnQgPSAnRm9udCcsXHJcbiAgICAvKiogRkdVSei1hOa6kOebruW9lSAqL1xyXG4gICAgRkdVSSA9ICdGR1VJJyxcclxuICAgIC8qKiDlhbPljaHphY3nva7ooajnm67lvZUgKi9cclxuICAgIFNjZW5lSnNvbiA9ICdTY2VuZUpzb24nLFxyXG4gICAgLyoqIOWFtuWug+ebruW9lSAqL1xyXG4gICAgT3RoZXIgPSAnT3RoZXInLFxyXG4gICAgLyoqIGljb27nm67lvZUgKi9cclxuICAgIGljb24gPSAnaWNvbicsXHJcbiAgICAvKiogaW1n55uu5b2VICovXHJcbiAgICBpbWcgPSAnaW1nJyxcclxuICAgIC8qKiDpn7PkuZDmlofku7bnm67lvZUgKi9cclxuICAgIG11c2ljID0gJ211c2ljJyxcclxuICAgIC8qKiDpn7PmlYjmlofku7bnm67lvZUgKi9cclxuICAgIHNvdW5kID0gJ3NvdW5kJyxcclxuICAgIC8qKiDnmq7ogqTmlofku7bnm67lvZUgKi9cclxuICAgIHNraW4gPSAnc2tpbicsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tICcuL0VLZXlSZXNOYW1lJztcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSAnLi9LZXlSZXNNYW5hZ2VyJztcclxuLyoqXHJcbiAqIOW/heimgeeahOa4uOaIj+i1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXNzZW50aWFsUmVzVXJscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbPljaHphY3nva7mlofku7ZcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTY2VuZUNvbmZpZ1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuU2NlbmVKc29uKSArIF9uYW1lICsgJy5qc29uJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqEpzb27mlofku7ZSVUxcclxuICAgICAqIEBwYXJhbSBfbmFtZSDphY3nva7ooajlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWdKc29uVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Db25maWdKc29uKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRkdVSeWMhVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWMheWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUlQYWNrVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5GR1VJKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2X5L2T5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5a2X5L2T5ZCN5a2X77yM5Yqg5ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9udFVSTChfbmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZvbnQpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miYDmnInpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgIHByaXZhdGUgc3RhdGljIF9BbGxTY2VuZVByZWZhYnNOYW1lczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8v6aKE5Yi25L2T5Zy65pmv57yT5a2YXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJlZmFic1NjZW5lQ2FjaGU6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIOmihOWItuS9k+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbkvZPlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJVUkwocHJlZmFiOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5YWI5Zyo57yT5a2Y5Lit5p+l5om+5Zy65pmv5ZCN5a2XXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6K+l6aKE5Yi25L2T5Zyo5ZOq5Liq5Zy65pmv5Lit6KKr5a+85Ye655qEXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXS5pbmRleE9mKCdAJyArIHByZWZhYiArICdAJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdID0gX2k7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoX2kpICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWcqOWcuuaZr+aJvuWIsOmihOWItuS9kycsIHByZWZhYiwgJ+WPr+iDveaYr+ayoeacieWvvOWHuuWcuuaZr+mihOWItuS9k+WIl+ihqOWvvOiHtOeahOOAgicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWcuuaZr+mihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9vIOWcuuaZr+mihOWItuS9k+mbhuWQiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFByZWZhYlNjZW5lTmFtZXMoX286IGFueSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldID0gX29bX2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcIi4uL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcblxyXG4vKipcclxuICog5YWz6ZSu6LWE5rqQ54K55YiX6KGo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlSZXNNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBLZXlSZXNNYW5hZ2VyO1xyXG5cclxuICAgIC8v5YWz6ZSu6LWE5rqQ5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fS2V5UmVzTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/ms6jlhozlhbPplK7otYTmupDnm67lvZVcclxuICAgICAgICB0aGlzLm1fS2V5UmVzTGlzdCA9IHtcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlJvb3RSZXNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuQ29uZmlnSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Db25maWdKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRkdVSV06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5GR1VJICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuU2NlbmVKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLlNjZW5lSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZvbnRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRm9udCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLk90aGVyXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nLFxyXG4gICAgICAgICAgICAvL+WFtuS7lui3r+W+hFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaWNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmljb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pbWddOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pbWcgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5tdXNpY106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLm11c2ljICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc291bmRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5zb3VuZCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNraW5dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5za2luICsgJy8nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tX0tleVJlc0xpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWtmOWcqOafkOS4quWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZLZXlSZXMoX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KS5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT0gX2tleTtcclxuICAgICAgICB9KSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFs+mUrueCuei1hOa6kOeahOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVzVVJMKF9rZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB5re75Yqg5YWz6ZSu6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7lgLxcclxuICAgICAqIEBwYXJhbSBfc3RyaW5nIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFJlc1VybChfa2V5OiBzdHJpbmcsIF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldID0gX3N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX3N0ciDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlZGl0S2V5UmVzTGlzdChfa2V5OiBzdHJpbmcsIF9zdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfcmVwbGFjZTogc3RyaW5nID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfcmVwbGFjZSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+S/ruaUuei1hOa6kOi3r+W+hOWksei0pe+8jOayoeaciScgKyBfa2V5ICsgJ+i/meS4quWFs+mUrui3r+W+hO+8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abv+aNouaJgOaciei1hOa6kOi3r+W+hOS4reeahOWFs+mUrueCuei3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXSA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXS5yZXBsYWNlKF9yZXBsYWNlLCBfc3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EJywgX3JlcGxhY2UsICfmm7/mjaLmiJAnLCBfc3RyKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZCB7XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6E5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCh1cmxzOiBhbnksIG1vZGVsOiBFUmVzTG9hZE1vZGVsLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXJscykpIHtcclxuICAgICAgICAgICAgLy/ljrvpmaTomZrlgLxcclxuICAgICAgICAgICAgdXJscyA9IHVybHMuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuacieWGheWuuemcgOimgeWKoOi9vVxyXG4gICAgICAgIGlmICghdXJscyB8fCAoQXJyYXkuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIHN3aXRjaCAobW9kZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQzOlxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGXmmK8zROeahOaOpeWPo++8jOmAgueUqOS6jjNE6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5jcmVhdGUodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDI6XHJcbiAgICAgICAgICAgICAgICAvL2xvYWTmmK8yZOeahOaOpeWPo++8jOmAgueUqOS6jjJk6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoQgXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMiwgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0RBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkM0QodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDJEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5vQ2xvbmUg5piv5ZCm5LiN6I635Y+W5YWL6ZqG55qE6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmVzKHJlc1VybDogc3RyaW5nLCBub0Nsb25lOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCBnZXRSZXMgPSBMYXlhLmxvYWRlci5nZXRSZXMocmVzVXJsKTtcclxuICAgICAgICBpZiAoIWdldFJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoXCLotYTmupDlsJrmnKrliqDovb1cIiwgcmVzVXJsKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vQ2xvbmUgPyBnZXRSZXMgOiBnZXRSZXMuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuaMh+Wumui1hOa6kOWcsOWdgOe8k+WtmOOAglxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDbGVhclJlcyhyZXNVcmw6IHN0cmluZykge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyUmVzKHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIEVSZXNMb2FkTW9kZWwge1xyXG4gICAgLyoqIDNEIOi1hOa6kCAqL1xyXG4gICAgRDMsXHJcbiAgICAvKiogMmQg6LWE5rqQICovXHJcbiAgICBEMixcclxufSIsImltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vee7hFxyXG4gKiDotJ/otKPlpJrkuKrotYTmupDliqDovb3pobnnmoTnu5/kuIDliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRHcm91cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqICEg6L+Z6YeM5piv5L6d5qyh5Yqg6L295bm25LiN5piv5ZCM5pe25Yqg6L2955qEXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovkvZzkuLrlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5rKh5pyJ5Yqg6L296aG5XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5rWF5ou36LSd77yM6Ziy5q2i5rGh5p+T5rqQ5YiX6KGoXHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICAgIC8v5byC5q2l5YiX6KGo6ZW/5bqmXHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAvL+S4gOatpeS4gOatpea2iOi0ueW8guatpeWIl+ihqFxyXG4gICAgICAgIGxldCBfZjogRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25JdGVtOiBSZXNMb2FkSXRlbSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBvbkl0ZW0ubG9hZEFzeW5jKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuaAu+i/m+W6plxyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2xlbmd0aCAtIGl0ZW1zLmxlbmd0aCAtIDEpICsgaSkgLyBfbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuWNleS4quWKoOi9vemhueWKoOi9veWujOaIkOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20uYXJncyA9IFtvbkl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20ucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBfZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzpgJLlvZLliqDovb3mlrnms5VcclxuICAgICAgICBfZigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXN5bmMoaXRlbXM6IFJlc0xvYWRJdGVtW10sIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChpdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcywgX29uSXRlbUNvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVzTG9hZCwgeyBFUmVzTG9hZE1vZGVsIH0gZnJvbSBcIi4vUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vemhuVxyXG4gKiDotJ/otKPkuIDnu4TotYTmupDliJfooajnmoTliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRJdGVtIHtcclxuICAgIC8qKiDliqDovb3mqKHlvI8gKi9cclxuICAgIHByaXZhdGUgbV9sb2FkTW9kZWw6IEVSZXNMb2FkTW9kZWw7XHJcblxyXG4gICAgLyoqIOWKoOi9veWFs+mUrumUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogYW55O1xyXG5cclxuICAgIC8qKiDliqDovb3lrozmiJDlm57osIMgKi9cclxuICAgIHByaXZhdGUgbV9jb21CYWNrOiBMYXlhLkhhbmRsZXI7XHJcbiAgICAvKiog5Yqg6L296L+b5bqm5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fb25Qcm9ncmVzczogTGF5YS5IYW5kbGVyO1xyXG5cclxuICAgIC8qKiDotYTmupDot6/lvoTliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9yZXM6IGFueTtcclxuXHJcbiAgICAvKiog6I635Y+W5YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3JlcyDotYTmupDliJfooahcclxuICAgICAqIEBwYXJhbSBfbW9kZSDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrumUruWAvFxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOaXtueahOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3JlczogYW55LCBfbW9kZTogRVJlc0xvYWRNb2RlbCwgX2tleT86IGFueSwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tX3JlcyA9IF9yZXM7XHJcbiAgICAgICAgdGhpcy5tX2xvYWRNb2RlbCA9IF9tb2RlO1xyXG4gICAgICAgIHRoaXMubV9rZXkgPSBfa2V5O1xyXG4gICAgICAgIHRoaXMubV9jb21CYWNrID0gX2NvbUJhY2s7XHJcbiAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MgPSBfb25Qcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5YyF6KOF6L+b5bqm5Zue6LCDXHJcbiAgICAgICAgbGV0IF9fb25Qcm9ncmVzczogTGF5YS5IYW5kbGVyID0gX29uUHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKF9fb25Qcm9ncmVzcyAmJiB0aGlzLm1fb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICBfX29uUHJvZ3Jlc3MgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW2ldO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fb25Qcm9ncmVzcy5hcmdzID0gW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgX19vblByb2dyZXNzID0gdGhpcy5tX29uUHJvZ3Jlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1fY29tQmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIW9uQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgdGhpcy5tX2NvbUJhY2ssIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgX19vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBvbkNvbXBsZXRlZCwgX19vblByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3luYyhfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0dhbWVDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0dhbWVDb25maWdcIjtcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCJzcmMvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgRDJNYW5hZ2VyIGZyb20gXCIuL0QyL0QyTWFuYWdlclwiO1xyXG5pbXBvcnQgRDNNYW5hZ2VyIGZyb20gXCIuL0QzL0QzTWFuYWdlclwiO1xyXG5pbXBvcnQgX1RDb25maWcgZnJvbSBcIi4vX1RDb25maWdcIjtcclxuXHJcbi8qKiBcclxuICog5qGG5p625YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUTWFpbiB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ms6jlhaXmoYbmnrbkv6Hmga9cclxuICAgICAgICB3aW5kb3dbX1RDb25maWcuTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIC8qKiDmoYbmnrbphY3nva4gKi9cclxuICAgICAgICAgICAgLi4uX1RDb25maWcsXHJcbiAgICAgICAgICAgIC8qKiBsYXlh6YWN572uICovXHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IHsgLi4uR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog6aG555uu6YWN572uICovXHJcbiAgICAgICAgICAgIF9tYWluQ29uZmlnOiB7IC4uLl9NYWluQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDmuLjmiI/phY3nva4gKi9cclxuICAgICAgICAgICAgX2dhbWVDb25maWc6IHsgLi4uX0dhbWVDb25maWcgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE56eN5ZCE5qC355qE566h55CG5ZmoXHJcbiAgICAgICAgRDNNYW5hZ2VyLmluaXQoKTsvLzNE566h55CG5ZmoXHJcbiAgICAgICAgRDJNYW5hZ2VyLmluaXQoKTsvL3Vp566h55CG5ZmoXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Y2V5L6L5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YW5jZVQge1xyXG4gICAgLyoqIOWNleS+i+WxnuaAp+WQjSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VLZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOWNleS+i+WxnuaAp+WQjSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VOYW1lOiBzdHJpbmcgPSAnaW5zdGFuY2UnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5L6L57G76KOF6aWw5ZmoXHJcbiAgICAgKiBAcGFyYW0gX2lmUGFzc2l2ZSDmmK/lkKbooqvliqjorr/pl67nmoTml7blgJnliJvlu7rlrp7kvovvvIzkuLpmYWxzZeeahOivneS8mueri+WNs+WIm+W7uuWHuuWunuS+i1xyXG4gICAgICogISDooqvoo4XppbDnmoTnsbvnmoTmnoTpgKDmlrnms5XkuI3og73ml7ZwdWJsaWPnsbvlnovnmoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUluc3RhbmNlKF9pZlBhc3NpdmU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoX2lmUGFzc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDkuIDkuKrnm5HlkKzlsZ7mgKdcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIEluc3RhbmNlVC5JbnN0YW5jZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0gPSBuZXcgdGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZU5hbWVdID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaVsOe7hOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreS4pOS4quaVsOe7hOWGheWuueaYr+WQpuebuOWQjFxyXG4gICAgICogQHBhcmFtIHggeOaVsOe7hFxyXG4gICAgICogQHBhcmFtIHkgeeaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnRlbnRJZlNhbWUoeDogYW55W10sIHk6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCEoeCkgfHwgISh5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh4Lmxlbmd0aCAhPSB5Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8v5pa55rOV77yaIOeUqOS4gOS4qm1vcOadpee7n+iuoXjmlbDnu4TlkITkuKrlhYPntKDlh7rnjrDnmoTmrKHmlbDvvIzlho3nlKh55pWw57uE5p2l6YCS5YeP5ZCE5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5aaC5p6c5pyA57uI57uT5p6c5Li6MOWImeS4pOS4quaVsOe7hOebuOWQjFxyXG4gICAgICAgIGxldCBtOiBNYXA8YW55LCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHguZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBtLnNldChpdGVtLCAobS5oYXMoaXRlbSkgPyBtLmdldChpdGVtKSA6IDApICsgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG0uc2V0KGl0ZW0sIChtLmhhcyhpdGVtKSA/IG0uZ2V0KGl0ZW0pIDogMCkgLSAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WPquimgeWFtuS4reS4gOWFg+e0oOeahOe7n+iuoeS4jeS4ujDlsLHov5Tlm55mYWxzZVxyXG4gICAgICAgIGxldCBiOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBbX3ZhbHVlLCBfbnVtYmVyXSBvZiBtKSB7XHJcbiAgICAgICAgICAgIGlmIChfbnVtYmVyICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5Y676YeN5L+d55WZ6Z2g5YmN55qE5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOWOu+mHjeS/neeVmemdoOWQjueahOWGheWuuVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXZlcnNlUmVzZXJ2ZVVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIucmV2ZXJzZSgpKSkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a+56LGh5pWw57uE5Y676YeNXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIF9GIOiOt+WPluWvueavlOmUruWAvOWHveaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE9ialVuaXF1ZTxUPihhcnI6IFRbXSwgX0Y6IChvOiBUKSA9PiBzdHJpbmcpOiBUW10ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxLCBsZW4gPSBhcnIubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChfRihhcnJbaV0pID09PSBfRihhcnJbal0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqLS07ICAgICAgICAvLyDmr4/liKDpmaTkuIDkuKrmlbBq55qE5YC85bCx5YePMVxyXG4gICAgICAgICAgICAgICAgICAgIGxlbi0tOyAgICAgIC8vIGrlgLzlh4/lsI/ml7ZsZW7kuZ/opoHnm7jlupTlh48x77yI5YeP5bCR5b6q546v5qyh5pWw77yM6IqC55yB5oCn6IO977yJICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabv+aNouaVsOe7hOeahOafkOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBvbGRPYmog6KKr5pu/5o2i55qE5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gbmV3T2JqIOabv+aNouWFg+e0oFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlcGxhY2U8VD4oYXJyOiBUW10sIG9sZE9iajogVCwgbmV3T2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2xkT2JqKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSwgbmV3T2JqKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOS4gOS4quWFg+e0oOW5tui/lOWbnue7k+aenFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBvYmog5Yig6Zmk55uu5qCH5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVtb3ZlSXRlbTxUPihhcnI6IFRbXSwgb2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7ntKLlvJXliKDpmaTkuIDkuKrmlbDmja5cclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gaW5kZXgg57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVtb3ZlQXQ8VD4oYXJyOiBUW10sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8PSBpbmRleCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5piv5ZCm5YyF5ZCr5p+Q5Liq5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gYXJyIFxyXG4gICAgICogQHBhcmFtIG9iaiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250YWluczxUPihhcnI6IFRbXSwgb2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkjeWItuS4gOS4quaVsOe7hFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb3B5PFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuaJk+S5seaVsOe7hFxyXG4gICAgICogQHBhcmFtIF9hcnJheSDnm67moIfmlbDnu4QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdXBzZXRBcnJheTxUPihfYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgLy/kubHluo9cclxuICAgICAgICByZXR1cm4gX2FycmF5LnNvcnQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuiOt+WPluaVsOe7hOS4reeahOmaj+acuuWAvO+8jOWPr+aMh+WumumVv+W6plxyXG4gICAgICogQHBhcmFtIF9hcnJheSDljp/mlbDnu4RcclxuICAgICAqIEBwYXJhbSBfbiDpmo/mnLrkuKrmlbBcclxuICAgICAqIEBwYXJhbSBfd2VpZ2h0IOadg+mHjeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmRvbUdldDxUPihfYXJyYXk6IFRbXSwgX246IG51bWJlciA9IDEsIF93ZWlnaHQ6IG51bWJlcltdID0gX2FycmF5Lm1hcCgoaXRlbSkgPT4geyByZXR1cm4gMTsgfSkpOiBUW10ge1xyXG4gICAgICAgIGlmIChfYXJyYXkubGVuZ3RoIDw9IDApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IF9yb290QXJyYXk6IFRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBfbmV3QXJyYXk6IFRbXSA9IFtdO1xyXG4gICAgICAgIC8v5p2D6YeN57Si5byV5YiX6KGoXHJcbiAgICAgICAgbGV0IF9pbmRleEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIC8v5om+5Yiw5pyA5bCP55qE5p2D6YeNXHJcbiAgICAgICAgbGV0IF9taW5XZWlnaHQ6IG51bWJlciA9IF93ZWlnaHRbMF07XHJcbiAgICAgICAgX3dlaWdodC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9taW5XZWlnaHQgPSBNYXRoLm1pbihfbWluV2VpZ2h0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfd2VpZ2h0ID0gX3dlaWdodC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaXRlbSAqICgxIC8gX21pbldlaWdodCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9hcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBfcm9vdEFycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfd2VpZ2h0W2luZGV4XTsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgX2luZGV4QXJyYXkucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgX2luZGV4OiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF9uOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChfcm9vdEFycmF5Lmxlbmd0aCA8PSAwKSB7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgIF9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9pbmRleEFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIF9pbmRleEFycmF5ID0gX2luZGV4QXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPSBfaW5kZXg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfbmV3QXJyYXkucHVzaChfcm9vdEFycmF5LnNwbGljZShfaW5kZXhBcnJheVtfaW5kZXhdLCAxKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9uZXdBcnJheTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPkuo52M+WQkemHj+eahOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVjNVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+S4gOS4quWtl+espuS4suaehOW7unYz5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gc3RyIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlVmVjdG9yMyhzdHI6IHN0cmluZywgX291dFYzOiBMYXlhLlZlY3RvcjMpIHtcclxuICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdCgnLCcpO1xyXG4gICAgICAgIF9vdXRWMy5zZXRWYWx1ZShOdW1iZXIoc3Ryc1swXSksIE51bWJlcihzdHJzWzFdKSwgTnVtYmVyKHN0cnNbMl0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rlYz5ZCR6YeP6ZW/5bqmXHJcbiAgICAgKiBAcGFyYW0gX3YzIOebruagh+WQkemHj1xyXG4gICAgICogQHBhcmFtIF9sIOebruagh+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFYzTGVuZ3RoKF92MzogTGF5YS5WZWN0b3IzLCBfbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IExheWEuVmVjdG9yMy5zY2FsYXJMZW5ndGgoX3YzKTtcclxuICAgICAgICBpZiAoX2xlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBfYTogbnVtYmVyID0gX2wgLyBfbGVuZ3RoO1xyXG4gICAgICAgICAgICBfdjMueCA9IF92My54ICogX2E7XHJcbiAgICAgICAgICAgIF92My55ID0gX3YzLnkgKiBfYTtcclxuICAgICAgICAgICAgX3YzLnogPSBfdjMueiAqIF9hO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueaPkuWAvOenu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfbGVycCDmj5LlgLznp7vliqjmr5TkvotcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2luaXRpYWxMZW5ndGgg5Yid5aeL6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90TGVycE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9sZXJwOiBudW1iZXIsIF9vdXRWMzogTGF5YS5WZWN0b3IzLCBfaW5pdGlhbExlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfZGlzdGFuY2U6IG51bWJlciA9IExheWEuVmVjdG9yMy5kaXN0YW5jZShfcG9zLCBfdHJhZ2V0UG90KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuVmVjdG9yMy5sZXJwKF9wb3MsIF90cmFnZXRQb3QsIF9sZXJwLCBfb3V0VjMpO1xyXG4gICAgICAgIC8v6L+U5Zue6L+b5bqmXHJcbiAgICAgICAgcmV0dXJuIDEgLSAoX2Rpc3RhbmNlIC8gX2luaXRpYWxMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5Liq54K55YyA6YCf56e75Yqo5Yiw5Y+m5LiA5Liq54K5XHJcbiAgICAgKiBAcGFyYW0gX3BvcyDlvZPliY3ngrlcclxuICAgICAqIEBwYXJhbSBfdHJhZ2V0UG90IOebruagh+eCuVxyXG4gICAgICogQHBhcmFtIF9zcGVlZCDpgJ/luqZcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90Q29uc3RhbnRTcGVlZE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9zcGVlZDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghX291dFYzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W/hemhu+acieS4gOS4qui+k+WHuueahOWQkemHj++8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IF9pZkVuZDogYm9vbGVhbjtcclxuICAgICAgICBsZXQgX2RpZmZlclYzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMuc3VidHJhY3QoX3RyYWdldFBvdCwgX3BvcywgX2RpZmZlclYzKTtcclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF9kaWZmZXJWMyk7XHJcbiAgICAgICAgaWYgKF9kaXN0YW5jZSA+IF9zcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFYzTGVuZ3RoKF9kaWZmZXJWMywgX3NwZWVkKTtcclxuICAgICAgICAgICAgX2lmRW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX2lmRW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nm7jliqBcclxuICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9wb3MsIF9kaWZmZXJWMywgX291dFYzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfaWZFbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgcm90YXRlQXhpc1YzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDml4vovazkuIDkuKrlkJHph49cclxuICAgICAqIEBwYXJhbSBfdjMg6ZyA6KaB5peL6L2s55qE6YKj5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2FuZ2VyIOaXi+i9rOinkuW6plxyXG4gICAgICogQHBhcmFtIF9heGlzIOaXi+i9rOi9tFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJvdGF0ZVYzKF92MzogTGF5YS5WZWN0b3IzLCBfYW5nZXI6IG51bWJlciwgX2F4aXM6IExheWEuVmVjdG9yMyA9IHRoaXMucm90YXRlQXhpc1YzKSB7XHJcbiAgICAgICAgLy/ml4vovazlm5vlhYPmlbBcclxuICAgICAgICB2YXIgcSA9IG5ldyBMYXlhLlF1YXRlcm5pb24oKTtcclxuICAgICAgICBMYXlhLlF1YXRlcm5pb24uY3JlYXRlRnJvbUF4aXNBbmdsZShfYXhpcywgKF9hbmdlciAvIDE4MCkgKiBNYXRoLlBJLCBxKTtcclxuICAgICAgICBMYXlhLlZlY3RvcjMudHJhbnNmb3JtUXVhdChfdjMsIHEsIF92Myk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qGG5p626YWN572u5paH5Lu2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVENvbmZpZyB7XHJcbiAgICAvKiog5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5hbWU6IHN0cmluZyA9IFwiTGF5YU1pbmlHYW1lXCI7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFpITmFtZTogc3RyaW5nID0gXCJMYXlhQm945bCP5ri45oiPXCI7XHJcbiAgICAvKiog54mI5pysICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFZlcnNpb25zOiBzdHJpbmcgPSBcIjAuMC4wLjJcIjtcclxufSIsIi8qKlxyXG4gKiDln7rnsbvlr7nosaHmsaBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJdGVtUG9vbCB7XHJcbiAgICAvKiog5rGg5a2QICovXHJcbiAgICBwcml2YXRlIG1faXRlbVBvb2w6IHtcclxuICAgICAgICBbX2tleTogc3RyaW5nXTogYW55W10sXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOiOt+WPluWvueixoeaxoCAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBpdGVtUG9vbCgpOiB7XHJcbiAgICAgICAgW19rZXk6IHN0cmluZ106IGFueVtdLFxyXG4gICAgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pdGVtUG9vbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvueixoeaxoOaYr+WQpuacieWGheWuuVxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb29sSGFzSXRlbShfa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1faXRlbVBvb2xbX2tleV0gJiYgdGhpcy5tX2l0ZW1Qb29sW19rZXldLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO5a+56LGh5rGg5Lit6I635Y+W5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEl0ZW1CeVBvb2w8VCBleHRlbmRzIG9iamVjdD4oX2tleTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmnInlhoXlrrlcclxuICAgICAgICBpZiAodGhpcy5wb29sSGFzSXRlbShfa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2l0ZW1Qb29sW19rZXldLnBvcCgpIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlr7nosaHov5vlr7nosaHmsaBcclxuICAgICAqIEBwYXJhbSBfa2V5IGtleVxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSXRlbVRvUG9vbChfa2V5OiBzdHJpbmcsIF9pdGVtOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pdGVtUG9vbFtfa2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1faXRlbVBvb2xbX2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tX2l0ZW1Qb29sW19rZXldLnB1c2goX2l0ZW0pO1xyXG4gICAgICAgIC8v5Y676YeNXHJcbiAgICAgICAgdGhpcy5tX2l0ZW1Qb29sW19rZXldID0gWy4uLm5ldyBTZXQodGhpcy5tX2l0ZW1Qb29sW19rZXldKV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrlr7nosaHmsaBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVtcHR5UG9vbCgpIHtcclxuICAgICAgICB0aGlzLm1faXRlbVBvb2wgPSB7fTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=