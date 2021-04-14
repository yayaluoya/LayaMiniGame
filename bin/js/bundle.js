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
        fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FGUIPackURL(_name));
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
                    this.buildNode(_spr, item, _prefabs);
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
            m.set(item, (m.get(item) || 0) + 1);
        });
        y.forEach((item) => {
            m.set(item, (m.get(item) || 0) - 1);
        });
        let i = 0;
        m.forEach((value) => {
            i += value;
        });
        return i == 0;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VGb250LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRU11c2ljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fU2NlbmVOb2RlQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvQ29uZmlnVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9EYXRhVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9MaWJyYXJ5VGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9PdGhlclRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvUGFja1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1doaXRlU2NyZWVuVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0NvbmZpZ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRDJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUm9vdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9EM01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9EYXRhVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EZWJ1Zy9CYXNlRGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0dhbWVUL0dhbWVQb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0NvbVJlc1VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Ucy9JbnN0YW5jZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL1YzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL19UQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUk47QUFBQTtBQUFBO0FBQXdDO0FBRXhDOztHQUVHO0FBQ1ksTUFBTSxXQUFXOztBQUM1QixlQUFlO0FBQ0Qsc0JBQVUsR0FBWSxDQUFDLENBQUMsbURBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFL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QUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FB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SSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O0FBWnVCLG9CQUFZLEdBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0VuRjtBQUFBO0FBQUE7O0dBRUc7QUFDWSxNQUFNLFFBQVE7O0FBQ3pCLFNBQVM7QUFDSyxhQUFJLEdBQVcsY0FBYyxDQUFDO0FBQzVDLFdBQVc7QUFDRyxlQUFNLEdBQVcsWUFBWSxDQUFDO0FBQzVDLFNBQVM7QUFDSyxpQkFBUSxHQUFXLFNBQVMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9NYWluLnRzXCIpO1xuIiwiLyoqXHJcbiAqIOW4uOmHj+mFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0NvbnN0Q29uZmlnIHtcclxuICAgIC8qKiBmZ3Vp55u45YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUkgPSB7XHJcbiAgICAgICAgLyoqIOWMheWQjue8gCAqL1xyXG4gICAgICAgIHBhY2thZ2VGaWxlRXh0ZW5zaW9uOiAnYmluJyxcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcIi4vX01haW5Db25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9HYW1lQ29uZmlnIHtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/muLjmiI/mtYvor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZHYW1lVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/mtYvor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkRlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIHRydWU7XHJcbn0iLCIvKipcclxuICog6aG555uu5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTWFpbkNvbmZpZyB7XHJcbiAgICAvKiog5ri45oiP5omA5bGe5Zui6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlYW06IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/lkI3lrZfvvIzlsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOYW1lOiBzdHJpbmcgPSAnTGF5YU1pbmlHYW1lJztcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkhOYW1lOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP6K+05piOICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV4cGxhaW46IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiP77yM6K+05piO44CCJztcclxuICAgIC8qKiDmlbDmja7niYjmnKwg5Y+v5Lul5bim5a2X5q+N5L2G5piv5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmVyc2lvbnM6IHN0cmluZyA9ICcwLjAuMC4xJztcclxuICAgIC8qKiDmmK/lkKbkuIrnur/kuLpmYWxzZeWImeaYr+W8gOWPkeeOr+WigyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPbkxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbW1vbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDb20gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1xM25nOXdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDb20ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ29tPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ29tXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1kYm1pMTNcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUN1c3RvbXNMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lRW5kIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbGF4ZDE5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lRW5kIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUVuZD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUVuZFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUxvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2Exb1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUxvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUxvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tc3l0YTlmXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBhdXNlIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTVnXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGF1c2Uge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGF1c2U+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQYXVzZVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBsYXkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExclwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBsYXkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGxheT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBsYXlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTZXQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNHVcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTZXQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU2V0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU2V0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU3RhcnQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExdlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVN0YXJ0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVN0YXJ0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU3RhcnRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX1VJQnV0dG9uOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9VSTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fdGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX190ZXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbW85anM5eFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fVUlCdXR0b24gPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX1VJID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV90ZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fX3Rlc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9sb29rVkFkOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9sb29rVkFkVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX2xvb2tWQWQ6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hhcmU6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3NoYXJlVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3NoYXJlOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hvd1RvYXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Nob3dUb2FzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW10MXB3OXlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0UGxhdGZvcm0ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFBsYXRmb3JtPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFBsYXRmb3JtXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWQgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWRUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV9fbG9va1ZBZCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV9zaGFyZSA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fc2hhcmVUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV9fc2hhcmUgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV9fc2hvd1RvYXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1taDY2ZTl6XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfUEdhbWVTZXQgZnJvbSBcIi4vRkdVSV9QR2FtZVNldFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBhdXNlIGZyb20gXCIuL0ZHVUlfUEdhbWVQYXVzZVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUxvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUxvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQbGF5IGZyb20gXCIuL0ZHVUlfUEdhbWVQbGF5XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lU3RhcnQgZnJvbSBcIi4vRkdVSV9QR2FtZVN0YXJ0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFVJIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0VUlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVFbmQgZnJvbSBcIi4vRkdVSV9QR2FtZUVuZFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0TWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUNvbSBmcm9tIFwiLi9GR1VJX1BHYW1lQ29tXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lTWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVNldC5VUkwsIEZHVUlfUEdhbWVTZXQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQYXVzZS5VUkwsIEZHVUlfUEdhbWVQYXVzZSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGxheS5VUkwsIEZHVUlfUEdhbWVQbGF5KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU3RhcnQuVVJMLCBGR1VJX1BHYW1lU3RhcnQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0VUkuVVJMLCBGR1VJX1BHYW1lVGVzdFVJKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lRW5kLlVSTCwgRkdVSV9QR2FtZUVuZCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RNYWluLlVSTCwgRkdVSV9QR2FtZVRlc3RNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ29tLlVSTCwgRkdVSV9QR2FtZUNvbSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZU1haW4uVVJMLCBGR1VJX1BHYW1lTWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS5VUkwsIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0pO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX0VtcHR5U2NyZWVuVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vN2t0emliOG9xM25nMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9FbXB0eVNjcmVlblVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9FbXB0eVNjcmVlblVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0RW1wdHlTY3JlZW5cIiwgXCJFbXB0eVNjcmVlblVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9FbXB0eVNjcmVlblVJIGZyb20gXCIuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEVtcHR5U2NyZWVuQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX0VtcHR5U2NyZWVuVUkuVVJMLCBGR1VJX0VtcHR5U2NyZWVuVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX2luaXRMb2FkVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgbV9sb2FkaW5nX3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xvZ286Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YV92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2dhbWVfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL24zb2VkcHA2bmlocjBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfaW5pdExvYWRVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfaW5pdExvYWRVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdExvYWRcIiwgXCJpbml0TG9hZFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvYWRpbmdfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX3RleHRfbG9nbyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV90ZXh0X2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3RleHRfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhX3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZ2FtZV9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfaW5pdExvYWRVSSBmcm9tIFwiLi9GR1VJX2luaXRMb2FkVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRMb2FkQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX2luaXRMb2FkVUkuVVJMLCBGR1VJX2luaXRMb2FkVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1Rlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2h4dTR6YzlkaW9vODBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1Rlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJfVGVzdFwiLCBcIlRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1Rlc3RNYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVGVzdEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9UZXN0TWFpbi5VUkwsIEZHVUlfVGVzdE1haW4pO1xyXG5cdH1cclxufSIsImltcG9ydCBCYXNlQ29uZmlnUHJveHkgZnJvbSBcInNyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfU2NlbmVOb2RlQ29uZmlnIH0gZnJvbSBcIi4uL19jb25maWcvX1NjZW5lTm9kZUNvbmZpZ1wiO1xyXG4vKipcclxuICog5Zy65pmv6IqC54K56YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9TY2VuZU5vZGVDb25maWcpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZUNvbmZpZ1Byb3h5IGV4dGVuZHMgQmFzZUNvbmZpZ1Byb3h5PF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGU+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTm9kZUNvbmZpZ1Byb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h2lk6I635Y+W5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lkIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieUlkR2V0RGF0YShfaWQ6IG51bWJlcik6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBfaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flhbPljaHlkI3lrZfojrflj5blhbPljaHmlbDmja5cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlhbPljaHlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ5TmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5Zy65pmv5ZCN5a2X6I635Y+W5pWw5o2u5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieVNjZW5lTmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2NlbmUgPT0gX25hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29uc3RQcm94eSB9IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XluLjph4/phY3nva7ooajku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBDb25maWdULkRlY29yYXRlQ29uZmlnUHJveHkoX1Rlc3RDb25zdClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdENvbnN0UHJveHkgZXh0ZW5kcyBCYXNlQ29uc3RQcm94eTxfVGVzdENvbnN0LkRhdGFUeXBlPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3RDb25zdFByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgTWFpbkRhdGFQcm94eSB9IGZyb20gXCIuL01haW5EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4vU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBTaG9ydERhdGFQcm94eSBmcm9tIFwiLi9TaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTaWduRGF0YVByb3h5IH0gZnJvbSBcIi4vU2lnbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4vVGVzdERhdGFQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrueuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5omA5pyJ5pWw5o2uXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIE1haW5EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTZXREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaWduRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2hvcnREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IE1haW5EYXRhIGZyb20gXCIuL3R5cGUvTWFpbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShNYWluRGF0YSlcclxuZXhwb3J0IGNsYXNzIE1haW5EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8TWFpbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTWFpbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTZXREYXRhIGZyb20gXCIuL3R5cGUvU2V0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNldERhdGEpXHJcbmV4cG9ydCBjbGFzcyBTZXREYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2V0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTZXREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VTaG9ydERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2hvcnREYXRhIGZyb20gXCIuL3R5cGUvU2hvcnREYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2hvcnREYXRhKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGFQcm94eSBleHRlbmRzIEJhc2VTaG9ydERhdGFQcm94eTxTaG9ydERhdGE+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNob3J0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNpZ25EYXRhIGZyb20gXCIuL3R5cGUvU2lnbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaWduRGF0YSlcclxuZXhwb3J0IGNsYXNzIFNpZ25EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2lnbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2lnbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBUZXN0RGF0YSBmcm9tIFwiLi90eXBlL1Rlc3REYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoVGVzdERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUZXN0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFRlc3REYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3REYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXREYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOmfs+aViCAqL1xyXG4gICAgaWZPcGVuU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOiDjOaZr+mfs+S5kCAqL1xyXG4gICAgaWZPcGVuTXVzaWM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+mch+WKqCAqL1xyXG4gICAgaWZPcGVuVmlicmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHsgfSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3REYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyaW5nOiBzdHJpbmcgPSAnc3RyaW5nJztcclxuICAgIGJvb2xlYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgICBhOiBudW1iZXIsXHJcbiAgICAgICAgYjogc3RyaW5nLFxyXG4gICAgICAgIGM6IGJvb2xlYW5cclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgIGI6ICdiJyxcclxuICAgICAgICAgICAgYzogdHJ1ZSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IEJhc2VEZWJ1ZyBmcm9tIFwic3JjL19UL0RlYnVnL0Jhc2VEZWJ1Z1wiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDoh6rlrprkuYnosIPor5Xlr7nosaFcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURlYnVnIGV4dGVuZHMgQmFzZURlYnVnIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEN1c3RvbURlYnVnO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlciBmcm9tIFwiLi9VSUNvbi9VSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IFRlc3RNYWluIGZyb20gXCIuL190ZXN0L1Rlc3RNYWluXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbiB7XHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmuLjmiI/liJ3lp4vljJbliqDovb3lrp7kvotcclxuICAgICAgICBsZXQgX2dhbWVJbml0TG9hZDogR2FtZUluaXRMb2FkID0gbmV3IEdhbWVJbml0TG9hZCgpO1xyXG4gICAgICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgX2dhbWVJbml0TG9hZC5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0TG9hZENvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+WKoOi9veWujOaIkFxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdExvYWRDb20oKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITkuKrnrqHnkIblmahcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5Zy65pmv566h55CG5ZmoXHJcbiAgICAgICAgVUlDb25NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL3Vp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5pWw5o2u566h55CG5ZmoXHJcbiAgICAgICAgLy9cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgLy8gVE9ETyDov5vlhaXmtYvor5XmqKHlnZdcclxuICAgICAgICBUZXN0TWFpbi5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAqL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgX1Rlc3RCaW5kZXIgZnJvbSBcInNyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyXCI7XHJcbmltcG9ydCBXaGl0ZVNjcmVlblQgZnJvbSBcInNyYy9XaGl0ZVNjcmVlblRcIjtcclxuaW1wb3J0IENvbmZpZ1QsIHsgSUJhc2VDb25maWdDb250YWluZXIgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgeyBGR1VJUGFjayB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9GR1VJUGFja1wiO1xyXG5pbXBvcnQgQmFzZUluaXRMb2FkIGZyb20gXCJzcmMvX1QvTWFpbi9CYXNlSW5pdExvYWRcIjtcclxuaW1wb3J0IENvbVJlc1VybCBmcm9tIFwic3JjL19UL1Jlcy9Db21SZXNVcmxcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwic3JjL19UL1Jlcy9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCJzcmMvX1QvUmVzL0tleVJlc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRJdGVtXCI7XHJcbmltcG9ydCB7IEVGb250IH0gZnJvbSBcIi4uL1Jlc0UvRUZvbnRcIjtcclxuaW1wb3J0IHsgRU11c2ljcyB9IGZyb20gXCIuLi9SZXNFL0VNdXNpY3NcIjtcclxuaW1wb3J0IHsgRVNvdW5kcyB9IGZyb20gXCIuLi9SZXNFL0VTb3VuZHNcIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlblVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvblwiO1xyXG5pbXBvcnQgSW5pdExvYWRVSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdExvYWRVSUNvblwiO1xyXG5pbXBvcnQgeyBCdWlsZENvbmZpZ1RzIH0gZnJvbSBcIi4uL19jb25maWcvQnVpbGRDb25maWdUc1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4uL19jb25maWcvX1Rlc3RDb25zdFwiO1xyXG5pbXBvcnQgeyBfRUFsbFNjZW5lUHJlZmFic05hbWVzIH0gZnJvbSBcIi4uL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/liJ3lp4vljJbliqDovb1cclxuICogISDlj6rotJ/otKPmuLjmiI/liJ3lp4vljJblkozliqDovb3vvIzkuI3lgZrlhbbku5bkuovmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbml0TG9hZCBleHRlbmRzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvKiog55m95bGPdWnmjqfliLblmaggKi9cclxuICAgIC8vIHByaXZhdGUgbV9pbml0RW1wdHlTY3JlZW5VSUNvbjogSW5pdEVtcHR5U2NyZWVuVUlDb247XHJcbiAgICAvKiog5Yid5aeL5YyW5Yqg6L29dWnmjqfliLblmaggKi9cclxuICAgIC8vIHByaXZhdGUgbV9pbml0TG9hZFVJQ29uOiBJbml0TG9hZFVJQ29uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMlumcgOimgeeahHVp5o6n5Yi25Zmo5a6e5L6LXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbmV3IEluaXRFbXB0eVNjcmVlblVJQ29uKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24gPSBuZXcgSW5pdExvYWRVSUNvbigpO1xyXG4gICAgICAgIC8v6K6+572u6Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxTY2VuZVByZWZhYnNOYW1lcykge1xyXG4gICAgICAgICAgICBLZXlSZXNNYW5hZ2VyLmFkZFJlc1VybChfaSwgS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuUm9vdFJlcykgKyBgJHtfaX0vYCk7Ly/ms6jlhaXpooTliLbkvZPot6/lvoRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7pooTliLbkvZPlnLrmma/lr7nnhadcclxuICAgICAgICBFc3NlbnRpYWxSZXNVcmxzLnNldFByZWZhYlNjZW5lTmFtZXMoX0VBbGxTY2VuZVByZWZhYnNOYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliqDovb3pobnliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9nZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10gPSBbXTtcclxuICAgICAgICAvL+iOt+WPlmZndWnliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zKTtcclxuICAgICAgICAvL+azqOWFpemFjee9ruihqOWKoOi9vemhuVxyXG4gICAgICAgIHRoaXMuaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2xvYWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWFpWZndWnnmoTmiYDmnInliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRGR1VpTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+WFiOe7keWumuaJgOaciXVpXHJcbiAgICAgICAgdGhpcy5GR1VJQmluZGVyKCk7XHJcbiAgICAgICAgLy/liqDovb1mZ3Vp5YyFXHJcbiAgICAgICAgLy8gX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdEVtcHR5U2NyZWVuJywgdW5kZWZpbmVkLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdEVtcHR5U2NyZWVuKSkpOy8v55m95bGPdWnljIVcclxuICAgICAgICAvLyBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdJbml0TG9hZCcsIDAsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5pbml0TG9hZCkpKTsvL+WKoOi9veeVjOmdouWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0dhbWVCYWcnKSk7Ly/ljp/ljIXvvIzpgJrluLjkuLrotYTmupDljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQ29tbW9uJykpOy8v5YWs5YWx5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnX1Rlc3QnKSk7Ly/mtYvor5XljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lTWFpbicsIDApKTsvL+S4u+WMhVxyXG4gICAgfVxyXG4gICAgLy9mZ3Vp57uR5a6aXHJcbiAgICBwcml2YXRlIEZHVUlCaW5kZXIoKSB7XHJcbiAgICAgICAgSW5pdEVtcHR5U2NyZWVuQmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBJbml0TG9hZEJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgR2FtZUNvbW1vbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgX1Rlc3RCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVNYWluQmluZGVyLmJpbmRBbGwoKTtcclxuICAgIH1cclxuICAgIC8v6I635Y+WRkdVSeWKoOi9vemhuVxyXG4gICAgcHJpdmF0ZSBnZXRGR1VJTG9hZEl0ZW1zKF9uYW1lOiBzdHJpbmcsIF9hdGxpYXNDb3VudD86IG51bWJlciwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpOiBSZXNMb2FkSXRlbSB7XHJcbiAgICAgICAgbGV0IF9mZ3VpUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIC8v5rOo5YWl5YyF6Lev5b6EXHJcbiAgICAgICAgbmV3IEZHVUlQYWNrKEVzc2VudGlhbFJlc1VybHMuRkdVSVBhY2tVUkwoX25hbWUpLCBfYXRsaWFzQ291bnQpLmdldFJlc1VSTChfZmd1aVJlcyk7XHJcbiAgICAgICAgLy/liJvlu7rliqDovb3poblcclxuICAgICAgICByZXR1cm4gbmV3IFJlc0xvYWRJdGVtKF9mZ3VpUmVzLCBFUmVzTG9hZE1vZGVsLkQyLCBfbmFtZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5YyFXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRkdVSVBhY2thZ2UoX25hbWUpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICAvL+a3u+WKoOWMhVxyXG4gICAgcHJpdmF0ZSBhZGRGR1VJUGFja2FnZShfbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8v6YWN572u6KGoXHJcbiAgICAgICAgbGV0IF9jb25maWdSZXM6IGFueVtdID0gQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTCgoaXRlbSBhcyBJQmFzZUNvbmZpZ0NvbnRhaW5lcikuZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Zy65pmvanNvbuaWh+S7tlxyXG4gICAgICAgIGxldCBzY2VuZUpzb25SZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgc2NlbmVKc29uUmVzLnB1c2goRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTChfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKFsuLi5fY29uZmlnUmVzLCAuLi5zY2VuZUpzb25SZXNdLCBFUmVzTG9hZE1vZGVsLkQyLCAnY29uZmlnJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo6YWN572u6KGo5YaF5a65XHJcbiAgICAgICAgICAgIENvbmZpZ1QuQnVpbGRDb25maWdzKEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZ0xpZ2h0KCfmiYDmnInphY3nva7ooajlhoXlrrnvvJonLCBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKSk7XHJcbiAgICAgICAgfSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+mFjee9ruihqOWKoOi9vei/m+W6picsIGkpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgbGV0IF9hdWRpb3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRU11c2ljcykge1xyXG4gICAgICAgICAgICBFTXVzaWNzW19pXSAmJiBfYXVkaW9zLnB1c2goQ29tUmVzVXJsLk11c2ljVVJMKEVNdXNpY3NbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVTb3VuZHMpIHtcclxuICAgICAgICAgICAgRVNvdW5kc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5Tb3VuZFVSTChFU291bmRzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9hdWRpb3MsIEVSZXNMb2FkTW9kZWwuRDIsICdhdWRpbycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ6Z+z5pWI6LWE5rqQ77yaJywgX2F1ZGlvcyk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBsZXQgX2ZvbnQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRUZvbnQpIHtcclxuICAgICAgICAgICAgRUZvbnRbX2ldICYmIF9mb250LnB1c2goRXNzZW50aWFsUmVzVXJscy5Gb250VVJMKEVGb250W19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9mb250LCBFUmVzTG9hZE1vZGVsLkQyLCAnZm9udCcsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ5a2X5L2T6LWE5rqQ77yaJywgX2ZvbnQpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nmb3lsY/mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdEVtcHR5U2NyZWVuKCkge1xyXG4gICAgICAgIC8v5pi+56S655m95bGPdWlcclxuICAgICAgICAvLyB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG4gICAgLy/liqDovb3mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdExvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgICAgICAvLyAvL+aYvuekuuWKoOi9vXVpXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuLjmiI/liqDovb3ov5vluqYtPicsIF9pKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5tX2luaXRMb2FkVUlDb24gJiYgdGhpcy5tX2luaXRMb2FkVUlDb24uaWZTaG93KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLnNldFBsYW4oX2kpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBXaGl0ZVNjcmVlblQuc2V0UGxhbihfaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkuKrliqDovb3pobnlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfcmVzTG9hZCDliqDovb3pobnlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRDb20oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24uSGlkZSgpOy8v6ZqQ6JePXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRMb2FkVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgV2hpdGVTY3JlZW5ULmNsb3NlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tUmVzVXJsIGZyb20gXCJzcmMvX1QvUmVzL0NvbVJlc1VybFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuLi9EYXRhL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBFTXVzaWNzIH0gZnJvbSBcIi4uL1Jlc0UvRU11c2ljc1wiO1xyXG5pbXBvcnQgeyBFU291bmRzIH0gZnJvbSBcIi4uL1Jlc0UvRVNvdW5kc1wiO1xyXG4vKipcclxuICog6Z+z5pWI566h55CG57G7XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogQXVkaW9NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvL+W9k+WJjeaSreaUvueahGJnbVxyXG4gICAgcHJpdmF0ZSBtX29uQkdNOiBMYXlhLlNvdW5kQ2hhbm5lbDtcclxuXHJcbiAgICAvL+W9k+WJjeaSreaUvueahOmfs+aViOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX29uU291bmRMaXN0OiBTZXQ8TGF5YS5Tb3VuZENoYW5uZWw+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+agueaNruaVsOaNruiuvue9ruiDjOaZr+mfs+S5kOWSjOmfs+aViOaYr+WQpumdmemfs1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5zb3VuZE11dGVkID0gIVNldERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmlmT3BlblNvdW5kO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5tdXNpY011dGVkID0gIVNldERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmlmT3Blbk11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6Z+z5LmQ5ZKM5omA5pyJ6Z+z5pWI5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgbXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDmnInpn7PmlYjvvIjkuI3ljIXmi6zog4zmma/pn7PkuZDvvInmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBzb3VuZE11dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/pn7PkuZDvvIjkuI3ljIXmi6zpn7PmlYjvvInmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBtdXNpY011dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI5pqC5YGcXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZCgpIHtcclxuICAgICAgICAvL+aaguWBnOaJgOaciemfs+aViFxyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjnu6fnu61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVTb3VuZCgpIHtcclxuICAgICAgICAvL+e7p+e7reaSreaUvuW9k+WJjeaSreaUvueahOmfs+aViFxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vblNvdW5kTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmoLlgZzog4zmma/pn7PkuZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXVzZU11c2ljKCkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25CR00gJiYgdGhpcy5pbnN0YW5jZS5tX29uQkdNLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6Z+z5pWI6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0gX24g6Z+z6YePIDB+MVxyXG4gICAgICogQHBhcmFtIF91cmwg6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U291bmRWb2x1bWUoX246IG51bWJlciA9IDEsIF91cmw/OiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZShfbiwgX3VybCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruiDjOaZr+mfs+S5kOmfs+mHj1xyXG4gICAgICogQHBhcmFtIF9uIOmfs+mHjyAwfjFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZShfbjogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNldE11c2ljVm9sdW1lKF9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOOAgumfs+aViOWPr+S7peWQjOaXtuaSreaUvuWkmuS4quOAglxyXG4gICAgICogQHBhcmFtIG5hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gbG9vcHMg5b6q546v5qyh5pWwLDDooajnpLrml6DpmZDlvqrnjq/jgIJcclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZSDlo7Dpn7Pmkq3mlL7lrozmiJDlm57osIMgIEhhbmRsZXLlr7nosaHjgIJcclxuICAgICAqIEBwYXJhbSBzb3VuZENsYXNzIOS9v+eUqOWTquS4quWjsOmfs+exu+i/m+ihjOaSreaUvu+8jG51bGzooajnpLroh6rliqjpgInmi6njgIJcclxuICAgICAqIEBwYXJhbSBzdGFydFRpbWUg5aOw6Z+z5pKt5pS+6LW35aeL5pe26Ze044CCXHJcbiAgICAgKiBAcmV0dXJuIFNvdW5kQ2hhbm5lbOWvueixoe+8jOmAmui/h+atpOWvueixoeWPr+S7peWvueWjsOmfs+i/m+ihjOaOp+WItu+8jOS7peWPiuiOt+WPluWjsOmfs+S/oeaBr+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheVNvdW5kKG5hbWU6IEVTb3VuZHMsIGxvb3BzPzogbnVtYmVyLCBjb21wbGV0ZT86IGxheWEudXRpbHMuSGFuZGxlciwgc291bmRDbGFzcz86IG5ldyAoKSA9PiBhbnksIHN0YXJ0VGltZT86IG51bWJlcik6IGxheWEubWVkaWEuU291bmRDaGFubmVsIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IF9zb3VuZDogTGF5YS5Tb3VuZENoYW5uZWwgPSBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQobmFtZSwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vblNvdW5kTGlzdC5hZGQoX3NvdW5kKTtcclxuICAgICAgICByZXR1cm4gX3NvdW5kO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZDjgILog4zmma/pn7PkuZDlkIzml7blj6rog73mkq3mlL7kuIDkuKrvvIzlpoLmnpzlnKjmkq3mlL7og4zmma/pn7PkuZDml7blho3mrKHosIPnlKjmnKzmlrnms5XvvIzkvJrlhYjlgZzmraLkuYvliY3nmoTog4zmma/pn7PkuZDvvIzlho3mkq3mlL7lvZPliY3nmoTog4zmma/pn7PkuZDjgIJcclxuICAgICAqIEBwYXJhbSBuYW1lIOiDjOaZr+mfs+aViOWQjeWtl1xyXG4gICAgICogQHBhcmFtIGxvb3BzIOW+queOr+asoeaVsCww6KGo56S65peg6ZmQ5b6q546v44CCXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUg5aOw6Z+z5pKt5pS+5a6M5oiQ5Zue6LCDLGNvbXBsZXRlIOe7k+aenOWPguaVsCB0cnVlOiDmkq3mlL7lrozmiJAsIGZhbHNlL3VuZGVmaW5lZCDvvJpzdG9w6Kem5Y+R55qEY29tcGxldGXjgIJcclxuICAgICAqIEBwYXJhbSBzdGFydFRpbWUg5aOw6Z+z5pKt5pS+6LW35aeL5pe26Ze044CCXHJcbiAgICAgKiBAcmV0dXJuIFNvdW5kQ2hhbm5lbOWvueixoe+8jOmAmui/h+atpOWvueixoeWPr+S7peWvueWjsOmfs+i/m+ihjOaOp+WItu+8jOS7peWPiuiOt+WPluWjsOmfs+S/oeaBr+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheU11c2ljKG5hbWU6IEVNdXNpY3MsIGxvb3BzPzogbnVtYmVyLCBjb21wbGV0ZT86IGxheWEudXRpbHMuSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKTogbGF5YS5tZWRpYS5Tb3VuZENoYW5uZWwge1xyXG4gICAgICAgIGlmICghbmFtZSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX211c2ljOiBMYXlhLlNvdW5kQ2hhbm5lbCA9IExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhuYW1lLCBsb29wcywgY29tcGxldGUsIHN0YXJ0VGltZSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uQkdNID0gX211c2ljO1xyXG4gICAgICAgIHJldHVybiBfbXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLpn7PmlYjmkq3mlL7jgIJcclxuICAgICAqIEBwYXJhbSBzb3VuZHNOYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RvcFNvdW5kKHNvdW5kc05hbWU6IEVTb3VuZHMpOiB2b2lkIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wU291bmQoQ29tUmVzVXJsLlNvdW5kVVJMKHNvdW5kc05hbWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6IOM5pmv6Z+z5pWI5pKt5pS+44CCXHJcbiAgICAgKiBAcGFyYW0gbXVzaWNOYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RvcE11c2ljKG11c2ljTmFtZTogRU11c2ljcyk6IHZvaWQge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BTb3VuZChDb21SZXNVcmwuTXVzaWNVUkwobXVzaWNOYW1lKSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5a2X5L2T6LWE5rqQ5p6a5Li+ICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFRm9udCB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL1xyXG59IiwiLyoqXHJcbiAqIOaJgOacieiDjOaZr+mfs+S5kCAo5Lya6aKE5Yqg6L29KVxyXG4gKiAhIOW/hemhu+aYr+Wtl+espuS4su+8jOS4jeiDveaYr+aVsOWtl+WQpuWImeS8muWKoOS4iuWPjeWwhOWxnuaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRU11c2ljcyB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL1xyXG59IiwiLyoqXHJcbiAqIOaJgOaciemfs+aViCAo5Lya6aKE5Yqg6L29KVxyXG4gKiAhIOW/hemhu+aYr+Wtl+espuS4su+8jOS4jeiDveaYr+aVsOWtl+WQpuWImeS8muWKoOS4iuWPjeWwhOWxnuaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRVNvdW5kcyB7XHJcbiAgICBudWxsID0gJycsXHJcbiAgICAvL+mfs+aViFxyXG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCJzcmMvX1QvRDMvc2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv566h55CG5ZmoXHJcbiAqIOeuoeeQhuWcuuaZr++8jOiOt+WPluWcuuaZr++8jOeEtuWQjumAmui/h+WcuuaZr+WunuS+i+aehOW7uuWcuuaZr+S4reWvueixoeeahOiKgueCuVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqIOWcuuaZr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTGlzdDoge1xyXG4gICAgICAgIFtpbmRleDogc3RyaW5nXTogU2NlbmUsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flnLrmma/lkI3lrZfojrflj5blnLrmma9cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lPFMgZXh0ZW5kcyBTY2VuZT4oX25hbWU6IHN0cmluZyk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVMaXN0W19uYW1lXSBhcyBTO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIGxldCBfbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo5Zy65pmvXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgX25hbWUgPSBfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdID0gbmV3IFNjZW5lKF9uYW1lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM55qE5Zy65pmv5a6e5L6L5YyW5LiN5ZCM55qE57G7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX25hbWUpIHsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlVUlDb25NYW5hZ2VyIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlclByb3h5IGZyb20gXCIuL1VJQ29uTWFuYWdlclByb3h5XCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uTWFuYWdlciBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXI8VUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFVJQ29uTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJX1Rlc3RNYWluIGZyb20gXCJzcmMvRkdVSS9fVGVzdC9GR1VJX1Rlc3RNYWluXCI7XHJcbmltcG9ydCBCYXNlU2luZ2xlVUlDb24gZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvblwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDmtYvor5XkuLvpobXpnaLmjqfliLblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UZXN0TWFpblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfVGVzdE1haW4+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IF9UZXN0TWFpblVJQ29uO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuICAgIC8qKiB1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfVGVzdE1haW47XHJcbn0iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uZmlnIH0gZnJvbSBcIi4vX1Rlc3RDb25maWdcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4qIOaehOW7uuWFqOmDqOmFjee9ruihqFxyXG4qICEg6Ieq5Yqo5a+85Ye6XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBCdWlsZENvbmZpZ1RzIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ55qE6YWN572u6KGo5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcclxuICAgICAgICBsZXQgY29uZmlnczogYW55W10gPSBbXTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1NjZW5lTm9kZUNvbmZpZyk7XHJcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1Rlc3RDb25zdCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1NjZW5lTm9kZUNvbmZpZyBjb25maWfphY3nva7mlofku7ZcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgX1NjZW5lTm9kZUNvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5YWz5Y2haWRb5b+F6KaBXSAqL1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgIC8qKiDlhbPljaHlkI3lrZfvvIzlj6/ku6XpgJrov4flkI3lrZfojrflj5blhbPljaHmlbDmja4gKi9cbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cbiAgICAgICAgc2NlbmU6IHN0cmluZztcbiAgICAgICAvKiog6IqC54K55ZCN5a2X5YiX6KGoICovXG4gICAgICAgIG5vZGVOYW1lOiBzdHJpbmc7XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnU2NlbmVOb2RlQ29uZmlnLmpzb24nO1xufVxuICAgICIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcbi8vXG4vKipcbiAqIF9UZXN0Q29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbmZpZyB7XG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC877yM5LiN566h5LuA5LmI5YC877yM6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5a2X56ym5Liy77yM5LiN566h5piv5LuA5LmI5YC877yM5pyA5ZCO6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXG4gICAgICAgIHM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC877yM5LiN566h5LuA5LmI5YC86YO95Lya6L2s5biD5bCU5YC8ICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgfVxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfVGVzdENvbmZpZy5EYXRhVHlwZVtdID0gW107XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25zdCBjb25zdOmFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfVGVzdENvbnN0IHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25zdCc7XG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlSAqL1xuICAgICAgICBuOiBudW1iZXI7XG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlTIgKi9cbiAgICAgICAgbjI6IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMyAqL1xuICAgICAgICBuMzogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UyICovXG4gICAgICAgIHMyOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTMgKi9cbiAgICAgICAgczM6IHN0cmluZztcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTEgKi9cbiAgICAgICAgYjI6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTIgKi9cbiAgICAgICAgYjM6IGJvb2xlYW47XG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xuICAgICAgICBiNDogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMyAqL1xuICAgICAgICBiNTogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNCAqL1xuICAgICAgICBiNjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNSAqL1xuICAgICAgICBiNzogYm9vbGVhbjtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VICovXG4gICAgICAgIG86IGFueTtcbiAgICAgICAvKiog5YW25LuW57G75Z6L5rWL6K+VMSAqL1xuICAgICAgICBvMjogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UyICovXG4gICAgICAgIG8zOiBhbnk7XG4gICAgfVxuICAgIC8qKiBjb25zdOaVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YTogX1Rlc3RDb25zdC5EYXRhVHlwZSA9IG51bGw7XG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25zdC5qc29uJztcbn1cbiAgICAiLCIvKipcclxuICog5omA5pyJ5Zy65pmv5a+55bqU55qE6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMge1xyXG4gICAgUHJlZmFiID0gJ0BDdWJlQEBTcGhlcmVAJyxcclxuXHJcbn1cclxuLy8iLCIvKipcclxuICog5omA5pyJ5a+85Ye65Zy65pmv5ZCN5a2XXHJcbiAqICEg5q2k5paH5Lu25pivVW5pdHnoh6rliqjlr7zlh7rnmoTvvIzkuI3opoHkv67mlLnvvIzkuZ/kuI3opoHnm7TmjqXkvp3otZbjgIJcclxuICovXHJcbmV4cG9ydCBlbnVtIF9FQWxsRXhwb3J0U2NlbmVOYW1lIHtcclxuICAgIFNjZW5lID0gJ1NjZW5lJyxcblxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlQ29uZmlnUHJveHkgZnJvbSBcIi4uL0NvbmZpZ1Byb3h5L1NjZW5lTm9kZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBUZXN0Q29uc3RQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvVGVzdENvbnN0UHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Rlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogQ29uZmlnVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflnLrmma/oioLngrnphY3nva7ooajlhoXlrrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhTY2VuZU5vZGVDb25maWdQcm94eS5pbnN0YW5jZS5kYXRhTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W4uOmHj+a1i+ivlemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRlc3RDb25zdFByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4uL0RhdGEvVGVzdERhdGFQcm94eVwiO1xyXG5pbXBvcnQgQ3VzdG9tRGVidWcgZnJvbSBcIi4uL0RlYnVnL0N1c3RvbURlYnVnXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5rWL6K+V57G7XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBEYXRhVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7mtYvor5UnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgQ3VzdG9tRGVidWcuaW5zdGFuY2UuYWRkSXRlbSgnZGF0YVRlc3QnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7orr7nva7lm57osIMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw57uE6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmFycmF5KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCn6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WvueixoeWxnuaApyBhIOiiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5vYmplY3QsICdhJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeVRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTGlicmFyeVRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfml7bpl7Tlt6XlhbcnLCBkYXlqcygnMjAyMC8yLzIwJykpO1xyXG4gICAgICAgIC8vIC8v6L+Z6YeM5Y+q5pyJ5pys5Zyw6K6/6Zeu5omN6KGM77yM57q/5LiK6K6/6Zeu5Lya6Leo5Z+fXHJcbiAgICAgICAgLy8gYXhpb3MuZ2V0PHN0cmluZz4oJ2h0dHA6Ly9iYWlkdS5jb20nKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfor7fmsYLlt6Xlhbfor7fmsYLnmb7luqbnvZHpobUnLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBzdHJpbmc6IGRhdGEuZGF0YSxcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gLy9cclxuICAgICAgICAvLyBsZXQgYSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX+maj+acuuaJk+S5seaVsOe7hCcsIF8uc2h1ZmZsZShhKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1/pmo/mnLrlj5blgLzmlbDnu4QnLCBfLnNhbXBsZShhLCAyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ3Bha2/lt6XlhbcnLCB0eXBlb2YgcGFrbykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCdheGlvc+W3peWFtycsIHR5cGVvZiBheGlvcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE90aGVyVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBQYWNrVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmiZPljIXmtYvor5U2NycpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IF9UZXN0TWFpblVJQ29uIGZyb20gXCIuLi9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvblwiO1xyXG5pbXBvcnQgQ29uZmlnVGVzdCBmcm9tIFwiLi9Db25maWdUZXN0XCI7XHJcbmltcG9ydCBEYXRhVGVzdCBmcm9tIFwiLi9EYXRhVGVzdFwiO1xyXG5pbXBvcnQgTGlicmFyeVRlc3QgZnJvbSBcIi4vTGlicmFyeVRlc3RcIjtcclxuaW1wb3J0IE90aGVyVGVzdCBmcm9tIFwiLi9PdGhlclRlc3RcIjtcclxuaW1wb3J0IFBhY2tUZXN0IGZyb20gXCIuL1BhY2tUZXN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5Li76ISa5pysXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0TWFpbiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0TWFpbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v5p6E5bu6U2NlbmXlnLrmma/kuIvnmoRkZWJ1Z+iKgueCuVxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5nZXRTY2VuZSgnU2NlbmUnKVxyXG4gICAgICAgICAgICAuZ2V0U2NlbmVOb2RlKCdkZWJ1ZycpXHJcbiAgICAgICAgICAgIC5hc3luY0J1aWxkKClcclxuICAgICAgICAgICAgLnRoZW4oKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3lnLrmma8nLCBub2RlLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3oioLngrknLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIC8v5Li66K+l5Zy65pmv6K6+572u546v5aKDXHJcbiAgICAgICAgICAgICAgICBub2RlLnNjZW5lLnNldEVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8v5pi+56S65rWL6K+VdWlcclxuICAgICAgICBfVGVzdE1haW5VSUNvbi5pbnN0YW5jZS5TaG93KCk7XHJcbiAgICAgICAgLy/mlbDmja5cclxuICAgICAgICBEYXRhVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v57G75bqT5rWL6K+VXHJcbiAgICAgICAgTGlicmFyeVRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+mFjee9ruihqOa1i+ivlVxyXG4gICAgICAgIENvbmZpZ1Rlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+aJk+WMhea1i+ivlVxyXG4gICAgICAgIFBhY2tUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/lhbbku5bmtYvor5VcclxuICAgICAgICBPdGhlclRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgc3RhdGljIHdpZHRoOiBudW1iZXIgPSA3NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0OiBudW1iZXIgPSAxMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTogc3RyaW5nID0gXCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTogc3RyaW5nID0gXCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOiBzdHJpbmcgPSBcInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDogc3RyaW5nID0gXCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTogYW55ID0gXCJcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZU1haW4gZnJvbSBcIi4vR2FtZS9HYW1lTWFpblwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBXaGl0ZVNjcmVlblQgZnJvbSBcIi4vV2hpdGVTY3JlZW5UXCI7XHJcbmltcG9ydCBUTWFpbiBmcm9tIFwiLi9fVC9UTWFpblwiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5iZ0NvbG9yID0gXCIjMDAwMDAwXCI7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHRcdC8vXHJcblx0XHQvKiog5q2j5byP5byA5aeL77yM5Yqg6L2955m95bGPdWkgIzI4ZGY5OSAqL1xyXG5cdFx0V2hpdGVTY3JlZW5ULmxvYWQoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Ly/moYbmnrblhaXlj6NcclxuXHRcdFx0bmV3IFRNYWluKCk7XHJcblx0XHRcdC8v5omT5byA55m95bGPXHJcblx0XHRcdFdoaXRlU2NyZWVuVC5vcGVuKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0Ly/muLjmiI/lhaXlj6NcclxuXHRcdFx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7IiwiLyoqXHJcbiAqIOeZveWxj+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVTY3JlZW5UIHtcclxuICAgIC8qKiDlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fc2NlbmU6IExheWEuU2NlbmU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX2JnOiBMYXlhLlNwcml0ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEubG9hZGVyLmxvYWQoW1xyXG4gICAgICAgICAgICAgICAgXCJpbml0TG9hZC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAnYXRsYXMvaW5pdExvYWQuYXRsYXMnLFxyXG4gICAgICAgICAgICAgICAgJ2F0bGFzL2luaXRMb2FkLnBuZycsXHJcbiAgICAgICAgICAgIF0sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBvcGVuKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICAvL+aJk+W8gOeZveWxj3VpXHJcbiAgICAgICAgICAgIExheWEuU2NlbmUub3BlbignaW5pdExvYWQuanNvbicsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChfc2NlbmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZSA9IF9zY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9iZyA9IHRoaXMubV9zY2VuZS5nZXRDaGlsZEJ5TmFtZSgnYmcnKSBhcyBMYXlhLlNwcml0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgICAgICAgICAgLy/nm5HlkKzlsY/luZXmlLnlj5jkuovku7ZcclxuICAgICAgICAgICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlVmlldyk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTGF0ZXIoKS50aGVuKHIpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDkuYvlkI7nmoTlm57osIPvvIzlj6/ku6XlnKjmraTliqDovb3liIbljIVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3BlbkxhdGVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFBsYW4oX246IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7ov5vluqYnLCBfbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbG9zZSgpIHtcclxuICAgICAgICAvL+WIoOmZpOWcuuaZr1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSAmJiB0aGlzLm1fc2NlbmUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX2JnID0gbnVsbDtcclxuICAgICAgICAvL+WFs+mXreebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw6KeG5Zu+XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IF93aWR0aDogbnVtYmVyID0gTGF5YS5zdGFnZS53aWR0aDtcclxuICAgICAgICBsZXQgX2hlaWdodDogbnVtYmVyID0gTGF5YS5zdGFnZS5oZWlnaHQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUud2lkdGggPSBfd2lkdGg7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmhlaWdodCA9IF9oZWlnaHQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fYmcud2lkdGggPSBfd2lkdGg7XHJcbiAgICAgICAgdGhpcy5tX2JnLmhlaWdodCA9IF9oZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQmFzZUNvbmZpZ0NvbnRhaW5lciwgSUNvbmZpZ0NvbnRhaW5lciwgSUNvbnN0Q29udGFpbmVyIH0gZnJvbSBcIi4vQ29uZmlnVFwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuY2xhc3MgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElCYXNlQ29uZmlnQ29udGFpbmVyO1xyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmN5omn6KGMICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJYg5L2/55So5pe26KaG55uWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uZmln5pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29uZmlnUHJveHk8RGF0YT4gZXh0ZW5kcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUNvbmZpZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL+mFjee9ruaVsOaNruWIl+ihqFxyXG4gICAgcHJvdGVjdGVkIG1fZGF0YUxpc3Q6IERhdGFbXTtcclxuXHJcbiAgICAvKiog6YWN572u5pWw5o2u5YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGFMaXN0KCk6IERhdGFbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmNICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhTGlzdCA9IHRoaXMuY29uZmlnVGVtcGxhdGUuZGF0YXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25zdOaVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VDb25zdFByb3h5PERhdGE+IGV4dGVuZHMgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElDb25zdENvbnRhaW5lcjtcclxuXHJcbiAgICAvL+mFjee9ruaVsOaNrlxyXG4gICAgcHJvdGVjdGVkIG1fZGF0YTogRGF0YTtcclxuXHJcbiAgICAvKiog6YWN572u5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY0gKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLmNvbmZpZ1RlbXBsYXRlLmRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9jb20vSUNvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcIi4uL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCIuLi9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVCB7XHJcbiAgICAvKipcclxuICAgICAqIOijhemlsOmFjee9ruihqOS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9jb25maWcg6YWN572u6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVDb25maWdQcm94eShfY29uZmlnOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7phY3nva7ooajmqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5jb25maWdUZW1wbGF0ZSA9IF9jb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66YWN572u6KGo5YiX6KGoXHJcbiAgICAgKiDlj6rmnoTlu7rvvIzkuI3liqDovb1cclxuICAgICAqIEBwYXJhbSBfY29uZmlncyDphY3nva7ooajliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBCdWlsZENvbmZpZ3MoX2NvbmZpZ3M6IElCYXNlQ29uZmlnQ29udGFpbmVyW10pIHtcclxuICAgICAgICBsZXQgX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9jb25maWdzKSB7XHJcbiAgICAgICAgICAgIF91cmwgPSBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoX28uZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAvL+Whq+WFheaVsOaNrlxyXG4gICAgICAgICAgICBzd2l0Y2ggKF9vLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25maWdDb250YWluZXIpLmRhdGFzID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbnN0Q29udGFpbmVyKS5kYXRhID0gdGhpcy5nZXRDb25maWdKc29uRGF0YShfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqGpzb27mlbDmja5cclxuICAgICAqIO+8geazqOaEj++8jOiOt+WPluS6huivpei1hOa6kOivpei1hOa6kOWwseS8muiiq+WIoOmZpOaOiVxyXG4gICAgICogQHBhcmFtIF91cmwg6YWN572u6KGo6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnSnNvbkRhdGEoX3VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvL+iOt+WPlui1hOa6kFxyXG4gICAgICAgIGxldCBjb25maWdEYXRhOiBJQ29uZmlnRGF0YSA9IFJlc0xvYWQuR2V0UmVzKF91cmwsIHRydWUpO1xyXG4gICAgICAgIC8v5riF55CG6LWE5rqQ57yT5a2Y5Y+q5L2/55So5LiA5qyhXHJcbiAgICAgICAgUmVzTG9hZC5DbGVhclJlcyhfdXJsKTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWOi+e8qVxyXG4gICAgICAgIGlmIChjb25maWdEYXRhLnppcCkge1xyXG4gICAgICAgICAgICAvL+ino+WOi1xyXG4gICAgICAgICAgICBsZXQgX3RpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0RhdGEuZGF0YSA9IEpTT04ucGFyc2UocGFrby5pbmZsYXRlKGNvbmZpZ0RhdGEuZGF0YSwgeyB0bzogJ3N0cmluZycgfSkpO1xyXG4gICAgICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICAgICAgLy/liKTmlq3op6Pljovml7bpl7Tlt65cclxuICAgICAgICAgICAgaWYgKF90aW1lID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfphY3nva7ooajop6Pljovml7bpl7Tov4fplb/vvIzlj6/og73mmK/phY3nva7ooajmlofku7bov4flpKctPicsIF91cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBjb25maWdEYXRhLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbvphY3nva7ooajlrrnlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbmZpZyDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ0NvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja7liJfooaggKi9cclxuICAgIGRhdGFzOiBhbnlbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbnN0IOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhOiBhbnk7XHJcbn0iLCIvKipcclxuICog5omT5Y2w5Y+w5bi455So6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQ29uc3Qge1xyXG5cclxuICAgIC8qKiDlhazlhbHmoLflvI8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBwdWJsaWNTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaZrumAmua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjOUJBNEI0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOi9u+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9nTGlnaHRTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNzc2ZDhhJywgJyNFQkVCRUInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6K2m5ZGK5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJuU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzVjNmUwNicsICcjZmZhOTMxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmUmeivr+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXJyb3JTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNlYzAxMDEnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaIkOWKn+a2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29tU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjYWRlNDk4Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX2NvbG9yIOWtl+S9k+minOiJslxyXG4gICAgICogQHBhcmFtIF9iZ0NvbG9yIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFN0eWxlKF9jb2xvcjogc3RyaW5nLCBfYmdDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7X2JnQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGArIHRoaXMucHVibGljU3R5bGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IENvbnNvbGVDb25zdCBmcm9tIFwiLi9Db25zb2xlQ29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmiZPljbDlj7DmianlsZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFeCB7XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zdHlsZSDmoLflvI9cclxuICAgICAqIEBwYXJhbSBfcGFyIOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYWNrKF9zdHlsZTogc3RyaW5nLCBfcGFyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJWMlcycsIF9zdHlsZSwgJ2xvZycsIC4uLl9wYXJdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZyguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmui9u+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nTGlnaHQoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nTGlnaHRTdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaIkOWKn+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrQ29tKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmNvbVN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6K2m5ZGK5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tXYXJuKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0Lndhcm5TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijhemUmeivr+a2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrRXJyb3IoLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuZXJyb3JTdHlsZSwgYW55KTtcclxuICAgIH1cclxufSIsImltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSS9GR1VJUm9vdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAyZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDJNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiogZmd1aeagueeuoeeQhuWZqCAqL1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uLCB7IElCYXNlVUlDb25EZWZpbmVzIH0gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75Y2V6aG16Z2i5o6n5Yi25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2luZ2xlVUlDb248VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+IGV4dGVuZHMgQmFzZVVJQ29uIHtcclxuICAgIC8qKiBfVUkg57G75Z6LICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJOiBJVUlDcmVhdGU8VUk+O1xyXG5cclxuICAgIC8qKiB1aeexu+Wei+WIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBkZWZhdWx0OiBJQmFzZVVJQ29uRGVmaW5lcyxcclxuICAgIH07XHJcblxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcml2YXRlIG1fdWk6IFVJO1xyXG5cclxuICAgIC8qKiDojrflj5Z1aSAqL1xyXG4gICAgcHVibGljIGdldCB1aSgpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICAvL+iuvue9ruWNlXVpXHJcbiAgICAgICAgICAgIHRoaXMuX1VJcyA9IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB1aUNyZWF0ZTogdGhpcy5fVUksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu65a6M5oiQdWnlkI7nmoTmianlsZXlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHtcclxuICAgICAgICB0aGlzLm1fdWkgPSB0aGlzLl9VSXMuZGVmYXVsdC51aSBhcyBVSTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uUHJveHkgZnJvbSBcIi4vQmFzZVVJQ29uUHJveHlcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5pbXBvcnQgRkd1aURhdGEgZnJvbSBcIi4vRkd1aURhdGFcIjtcclxuaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJUm9vdE1hbmFnZXJcIjtcclxuaW1wb3J0IEZHVUlUIGZyb20gXCIuL0ZHVUlUXCI7XHJcbmltcG9ydCBJVUlDcmVhdGUgZnJvbSBcIi4vSVVJQ3JlYXRlXCI7XHJcbmltcG9ydCBSb290VUlDb24gZnJvbSBcIi4vUm9vdFVJQ29uXCI7XHJcblxyXG4vKipcclxuICogVUnmjqfliLblmajln7rnsbso55So5p2l5o6n5Yi2VUnnlYzpnaIpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb24gZXh0ZW5kcyBSb290VUlDb24ge1xyXG4gICAgLyoqIFVJ5YiX6KGo77yM5Y+v5Lul5pi+56S65b6I5aSa5LiqdWkgKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSUJhc2VVSUNvbkRlZmluZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDllK/kuIDplK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOiOt+WPluWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3ltYm9sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHByaXZhdGUgbV9yb290VUk6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHVibGljIGdldCByb290VUkoKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RVSTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Zyo6ZqQ6JeP5pe25riF55CG5o6JdWnvvIzpu5jorqTkuLp0cnVlICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmQ2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBVSeWxgue6p+exu+Wei++8jOW/hemhu+WcqOWIneWni+WMluaXtuiuvue9riAqL1xyXG4gICAgcHJvdGVjdGVkIF9sYXllcjogRVVJTGF5ZXIgPSBFVUlMYXllci5QYW5lbDtcclxuXHJcbiAgICAvKiogdWnlsYLnuqcgKi9cclxuICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwcml2YXRlIG1faWZTaG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp5Luj55CG5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJveHlVSUxpc3Q6IFNldDxCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmFkZChfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA5LiqdWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfcHJveHkg6K+l5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVVSVByb3h5KF9wcm94eTogQmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+KSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmRlbGV0ZShfcHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uU2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5Luj55CGdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdWnku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuZFVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5lbmRQcm94eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6dWlcclxuICAgIHByaXZhdGUgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUlCZWZvcmVFeCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5om+5YiwdWnliJvlu7rlmajliJfooaghJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIneWni+WMluagueiKgueCuXVpXHJcbiAgICAgICAgdGhpcy5tX3Jvb3RVSSA9IG5ldyBmZ3VpLkdDb21wb25lbnQoKTtcclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuZ2V0TGF5ZXJVSSh0aGlzLl9sYXllcikuYWRkQ2hpbGQodGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSB0aGlzLm1fcm9vdFVJLmFkZENoaWxkKHRoaXMuX1VJc1tfaV0udWlDcmVhdGUuY3JlYXRlSW5zdGFuY2UoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJRVgoKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7p1aeS5i+WJjeeahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlCZWZvcmVFeCgpIHsgfVxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDIOWPquiDveWcqOaJqeWxleS4reS9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUVYKCkgeyB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujHVp5ZCO5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aVxyXG4gICAgICogQHBhcmFtIF9uYW1lIHVp5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4oX25hbWU6IHN0cmluZyk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUlzW19uYW1lXS51aSBhcyBVSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdyguLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb25TaG93QmVmb3JlKC4uLnBhcik7XHJcbiAgICAgICAgbGV0IF9pZk5ldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSSB8fCB0aGlzLm1fcm9vdFVJLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgLy/liJvlu7p1aVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgICAgIF9pZk5ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3Jvb3RVSS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5Yiw5b2T5YmN5bGC57qn6aG25bGC5pi+56S6XHJcbiAgICAgICAgRkdVSVQuc2V0VUlUb3BTaG93KHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIC8v5omL5Yqo5pu05paw5LiA5qyhXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgLy/nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25TaG93KF9pZk5ldywgLi4ucGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49cclxuICAgICAqIEBwYXJhbSBfaWZDbGVhciDmmK/lkKbmuIXnkIZcclxuICAgICAqIEBwYXJhbSBwYXIg5YW25LuW5Y+C5pWw77yM5Lya5Lyg5Yiw6ZqQ6JeP55qE5Zue6LCD5LitXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBIaWRlKF9pZkNsZWFyOiBib29sZWFuID0gdGhpcy5faWZDbGVhciwgLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb25IaWRlQmVmb3JlKHBhcik7XHJcbiAgICAgICAgaWYgKF9pZkNsZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VVSSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPlua2iOebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub2ZmKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCB0aGlzLnVwZGF0ZVNpemUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fb25IaWRlKF9pZkNsZWFyLCBwYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeiiq+a4heeQhuaXtueahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9kaXNwb3NlVUkoKSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKSB7IH1cclxuICAgIHByb3RlY3RlZCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSkgeyB9XHJcblxyXG4gICAgLyoqIOabtOaWsOWkp+WwjyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgIC8v5qC55o2u5a2QdWnmkLrluKbnmoTmlbDmja7pgILphY3lsY/luZXlpKflsI9cclxuICAgICAgICBsZXQgX2RhdGE6IEZHdWlEYXRhO1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBfZGF0YSA9IHRoaXMuX1VJc1tfaV0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKCFfZGF0YSB8fCAhX2RhdGEuaWZVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoLCBfaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFNpemUoX3dpZHRoIC0gX2RhdGEubGVmdCAtIF9kYXRhLnJpZ2h0LCBfaGVpZ2h0IC0gX2RhdGEuYm90dG9tIC0gX2RhdGEudG9wKTtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWShfZGF0YS5sZWZ0LCBfZGF0YS50b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu3Vp5o6n5Yi25Zmo57G75Z6L5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlVUlDb25EZWZpbmVzIHtcclxuICAgIC8qKiB1aeWIm+W7uuWZqCAqL1xyXG4gICAgdWlDcmVhdGU6IElVSUNyZWF0ZTxmZ3VpLkdDb21wb25lbnQ+O1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YT86IEZHdWlEYXRhO1xyXG4gICAgLyoqIHVpICovXHJcbiAgICB1aT86IGZndWkuR0NvbXBvbmVudDtcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZVVJQ29uIGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIHVp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAqIOe7n+S4gOeuoeeQhnVp5o6n5Yi25ZmoXHJcbiAqIOW/hemhu+mFjeWQiOS7o+eQhuWZqOS9v+eUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlcjxQcm94eSBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG4gICAgLyoqIHVp5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aVByb3h5OiBQcm94eTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIOahhuaetuiwg+eUqO+8jOS4jeiDveebtOaOpeiwg+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5LmL5ZCO55qE5qOA5rWLXHJcbiAgICBwcml2YXRlIF9faW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJbnrqHnkIbnmoR1aeWIl+ihqCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlQcm94eSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlnVp5Luj55CGJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5Luj55CG5Zmo5Luj55CGXHJcbiAgICAgICAgICAgIHRoaXMubV91aVByb3h5LnNldFByb3h5KHRoaXMubV91aUNvbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHVpIOaOp+WItuWZqOeuoeeQhuWZqOS7o+eQhlxyXG4gKiDotJ/otKPku6PnkIZ1aeaOp+WItuWZqOeuoeeQhuWZqOS4reeahOaOp+WItuWZqO+8jOmYsuatouW+queOr+S+nei1llxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXJQcm94eSB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcblxyXG4gICAgLyoqIOiOt+WPluW9k+WJjeaYvuekuueahHVpICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2hvd1VJKCk6IEJhc2VVSUNvbltdIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogQmFzZVVJQ29uW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLmlmU2hvdyAmJiBfdWlDb25zLnB1c2godGhpcy5tX3VpQ29uTGlzdFtfaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfdWlDb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnku6PnkIZcclxuICAgICAqIEBwYXJhbSBfdWlMaXN0IHVp5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eShfdWlMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubV91aUNvbkxpc3QgPSBfdWlMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2udWnplK7lgLzojrflj5bkuIDkuKp1aVxyXG4gICAgICogQHBhcmFtIF9rZXkgdWnplK7lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJQ29uIGV4dGVuZHMgQmFzZVVJQ29uPihfa2V5OiBzdHJpbmcpOiBVSUNvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91aUNvbkxpc3RbX2tleV0gYXMgVUlDb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLp1aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOe0ouW8leaIluiAhee0ouW8leWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9pZkhpZGVPdGhlclVJIOaYr+WQpumakOiXj+WFtuS7lnVpIFt0cnVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10sIF9pZkhpZGVPdGhlclVJOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmpDol4/lhbbku5Z1aVxyXG4gICAgICAgIGlmIChfaWZIaWRlT3RoZXJVSSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV91aUNvbnMuaW5jbHVkZXMoX2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtfaV0uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3VpQ29uTGlzdFtpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5TaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj3Vp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo5a6e5L6L5oiW5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChfdWlDb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goLi4uX3VpQ29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdWlDb25zLnB1c2goX3VpQ29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0gJiYgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lvZPliY3mmL7npLrnmoTmiYDmnIl1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZUFsbFVJKCkge1xyXG4gICAgICAgIHRoaXMub25TaG93VUkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxufSIsIi8qKlxyXG4gKiBVSeWIhuWxgizmjInpobrluo/mmL7npLpcclxuICovXHJcbmV4cG9ydCBlbnVtIEVVSUxheWVyIHtcclxuICAgIC8qKiDog4zmma/pobXpnaIgKi9cclxuICAgIEJnID0gJ0JnJyxcclxuICAgIC8qKiDkuLvnlYzpnaIgIOawuOi/nOWtmOWcqCAqL1xyXG4gICAgTWFpbiA9IFwiTWFpblwiLFxyXG4gICAgLyoqIOmdouadvyAg5Y+v5Lul5pyJ5b6I5aSaICovXHJcbiAgICBQYW5lbCA9IFwiUGFuZWxcIixcclxuICAgIC8qKiDlvLnnqpcgKi9cclxuICAgIFBvcHVwID0gXCJQb3B1cFwiLFxyXG4gICAgLyoqIOmBk+WFtyAqL1xyXG4gICAgUHJvcCA9ICdQcm9wJyxcclxuICAgIC8qKiDlsI/pg6jku7YgKi9cclxuICAgIFRpcCA9IFwiVGlwXCIsXHJcbiAgICAvKiog5pqC5YGcICovXHJcbiAgICBQYXVzZSA9ICdQYXVzZScsXHJcbiAgICAvKiog6K6+572uICovXHJcbiAgICBTZXQgPSAnU2V0JyxcclxuICAgIC8qKiDmnIDpq5ggKi9cclxuICAgIFRvcCA9ICdUb3AnLFxyXG4gICAgLyoqIOWKoOi9vemhtemdoiAqL1xyXG4gICAgTG9hZGluZyA9ICdMb2FkaW5nJyxcclxuICAgIC8qKiDljp/nlJ8gKi9cclxuICAgIE5hdGl2ZSA9ICdOYXRpdmUnLFxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5YyF57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRkdVSVBhY2sge1xyXG4gICAgLy8g5YyF6Lev5b6EXHJcbiAgICBwcml2YXRlIHBhY2tQYXRoOiBzdHJpbmc7XHJcbiAgICAvLyDlhbbku5botYTmupDmlbDph49cclxuICAgIHByaXZhdGUgYXRsaWFzQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWMhVxyXG4gICAgICogQHBhcmFtIF9wYWNrVXJsIOWMheWcsOWdgFxyXG4gICAgICogQHBhcmFtIF9hdGxpYXNDb3VudCDlm77pm4bmlbDph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX3BhY2tVcmw6IHN0cmluZywgX2F0bGlhc0NvdW50OiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHRoaXMucGFja1BhdGggPSBfcGFja1VybDtcclxuICAgICAgICB0aGlzLmF0bGlhc0NvdW50ID0gX2F0bGlhc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3VybHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRSZXNVUkwoX3VybHMpO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQyREFzeW5jKF91cmxzLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSB1cmxzIOi+k+WHuuaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVzVVJMKHVybHM6IGFueVtdKSB7XHJcbiAgICAgICAgLy/liqDlhaXljIXlkI1cclxuICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyAnLicgKyBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbiwgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0pO1xyXG4gICAgICAgIC8v5Yqg6L2957q555CG6ZuGXHJcbiAgICAgICAgaWYgKHRoaXMuYXRsaWFzQ291bnQgPj0gMCkge1xyXG4gICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczAucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmF0bGlhc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMF9cIiArIGkgKyBcIi5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogRkdVSSDmoLnnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlSb290TWFuYWdlciB7XHJcbiAgICAvL1VJ5bGC57qndWnliJfooahcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5ZXJVSUxpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBmZ3VpLkdDb21wb25lbnQgfTtcclxuXHJcbiAgICAvLyDojrflj5bmn5DkuIDlsYJVSVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXllclVJKGxheWVyVHlwZTogRVVJTGF5ZXIpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJVSUxpc3RbbGF5ZXJUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8g6K6+572u5YyF5ZCN5ZCO57yAXHJcbiAgICAgICAgZmd1aS5VSUNvbmZpZy5wYWNrYWdlRmlsZUV4dGVuc2lvbiA9IF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoZmd1aS5HUm9vdC5pbnN0LmRpc3BsYXlPYmplY3QpO1xyXG4gICAgICAgIC8v5re75YqgRkdVSeagueiKgueCueaMiemhuuW6j+aYvuekulxyXG4gICAgICAgIHRoaXMubGF5ZXJVSUxpc3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFVUlMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVyVUlMaXN0W0VVSUxheWVyW19pXV0gPSBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQobmV3IGZndWkuR0NvbXBvbmVudCgpKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIGZndWkg5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJVCB7XHJcbiAgICAvKiogdWnlsYLnuqdrZXkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIFVJTGF5ZXJLZXk6IHN5bWJvbCA9IFN5bWJvbCgnVUlMYXllcicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572udWnlsYLnuqfvvIzpmaTkuoZmZ3Vp5qC5566h55CG5Zmo5Zue6LCD55So77yM5YW25LuW55qE5Zyw5pa56K+35LiN6KaB6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHBhcmFtIF9sYXllciDlsYLnuqcgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCwgX2xheWVyOiBFVUlMYXllcikge1xyXG4gICAgICAgIF91aVt0aGlzLlVJTGF5ZXJLZXldID0gX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWnlsYLnuqdcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcmV0dXJucyB1aeWxgue6p1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIF91aVt0aGlzLlVJTGF5ZXJLZXldIGFzIEVVSUxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnpobblsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSVRvcFNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWkp+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1heChfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aeW6leWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJRG93blNob3coX3VpOiBmZ3VpLkdDb21wb25lbnQpIHtcclxuICAgICAgICAvL+iOt+WPluacgOWwj+eahOaYvuekuumhuuW6j1xyXG4gICAgICAgIGxldCBfc29ydGluZ09yZGVyOiBudW1iZXIgPSBfdWkuc29ydGluZ09yZGVyO1xyXG4gICAgICAgIGxldCBfcGFyZW50VUk6IGZndWkuR0NvbXBvbmVudCA9IF91aS5wYXJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwLCBsZW5ndGggPSBfcGFyZW50VUkubnVtQ2hpbGRyZW47IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIF9zb3J0aW5nT3JkZXIgPSBNYXRoLm1pbihfc29ydGluZ09yZGVyLCBfcGFyZW50VUkuZ2V0Q2hpbGRBdChfaSkuc29ydGluZ09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDorr7nva7pobrluo9cclxuICAgICAgICBfdWkuc29ydGluZ09yZGVyID0gX3NvcnRpbmdPcmRlciAtIDE7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qC5dWnmjqfliLblmahcclxuICog5omA5pyJdWnmjqfliLblmajnsbvlnovnsbvlnYfnlLHmraTnu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJvb3RVSUNvbiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekulVJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2hvdyguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZOZXcg5piv5ZCm5paw5bu6XHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePVUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBIaWRlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZUJlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZkRlbGV0ZSDmmK/lkKbliKDpmaRcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlKF9pZkRlbGV0ZTogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG59IiwiaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vc2NlbmUvR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIDNk566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM01hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8qKiDliJ3lp4vljJblhajlsYDnjq/looMgKi9cclxuICAgICAgICBHbG9iYWxEM0Vudmlyb25tZW50LmluaXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIOWFqOWxgDNE546v5aKDXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxEM0Vudmlyb25tZW50IHtcclxuICAgIC8qKiAzZOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9TY2VuZTNEOiBMYXlhLlNjZW5lM0Q7XHJcbiAgICAvKiog5pGE5YOP5py6ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0NhbWVyYTogTGF5YS5DYW1lcmE7XHJcbiAgICAvKiog54Gv5YWJICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX0xpZ2h0OiBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG5cclxuICAgIC8qKiDojrflj5YgM2TlnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNjZW5lM0QoKTogTGF5YS5TY2VuZTNEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX1NjZW5lM0Q7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOaRhOWDj+acuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ2FtZXJhKCk6IExheWEuQ2FtZXJhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0NhbWVyYTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg54Gv5YWJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMaWdodCgpOiBMYXlhLkRpcmVjdGlvbkxpZ2h0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX0xpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5tX1NjZW5lM0QsXHJcbiAgICAgICAgICAgIGNhbWVyYTogdGhpcy5tX0NhbWVyYSxcclxuICAgICAgICAgICAgbGlnaHQ6IHRoaXMubV9MaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRCA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCkgYXMgTGF5YS5TY2VuZTNEO1xyXG4gICAgICAgIHRoaXMubV9DYW1lcmEgPSBuZXcgTGF5YS5DYW1lcmE7XHJcbiAgICAgICAgdGhpcy5tX0xpZ2h0ID0gbmV3IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0NhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QuYWRkQ2hpbGQodGhpcy5tX0xpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lUG9vbCBmcm9tIFwic3JjL19UL0dhbWVUL0dhbWVQb29sXCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgVjNVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL1YzVXRpbHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzQ29uZmlnLCBJUHJlZmFic0RpZmZlckNvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOiKgueCueW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmK/pooTliLbkvZPphY3nva5cclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmUHJlZmFic0NvbmZpZyhfY29uZmlnOiBJTm9kZUNvbmZpZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoX2NvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZSAmJiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u6IqC54K55pWw5o2u5Yid5aeL5YyW6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfdGFyZ2V0IOebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE5vZGUoX3NwcjogTGF5YS5TcHJpdGUzRCwgX3RhcmdldDogSU5vZGVDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfc3ByLCBfdGFyZ2V0KTtcclxuICAgICAgICAvL+iuvue9ruWQjeWtl1xyXG4gICAgICAgIF9zcHIubmFtZSA9IF90YXJnZXQubmFtZTtcclxuICAgICAgICAvL+WIpOaWreacieayoeacieWPmOaNouebuOWFs+eahOWxnuaAp1xyXG4gICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlLnNldFZhbHVlKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5L2N572uXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5L2N572uXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0ucG9zaXRpb24sIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6+572u5peL6L2sXHJcbiAgICAgICAgICAgIGlmICghX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIC8v6buY6K6k5peL6L2sXHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIuc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5ldWxlciwgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9rue8qeaUvlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOe8qeaUvlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnNjYWxlLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+inpuWPkeebkeWQrFxyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlciA9IF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAvL+iuvue9ruW3ruW8glxyXG4gICAgICAgIGxldCBfcHJlZmFiQ29uZmlnOiBJUHJlZmFic0NvbmZpZyA9IF90YXJnZXQgYXMgSVByZWZhYnNDb25maWc7XHJcbiAgICAgICAgaWYgKF9wcmVmYWJDb25maWcucHJlZmFiTmFtZSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYkRpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3NwciwgX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Nwci50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5Liq57K+54G15ZKM5rqQ57K+54G155qE5beu5byCXHJcbiAgICAgKiBAcGFyYW0gX3NwciDnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfZGlmZmVyIOW3ruW8guaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZXREaWZmZXIoX3NwcjogTGF5YS5TcHJpdGUzRCwgX2RpZmZlcjogSVByZWZhYnNEaWZmZXJDb25maWcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u5beu5byCJywgX3NwciwgX2RpZmZlcik7XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrkuLTml7blkJHph49cclxuICAgICAgICBsZXQgX2NlbnRyZVYzOiBMYXlhLlZlY3RvcjMgPSBHYW1lUG9vbC5nZXRWMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2RpZmYgb2YgX2RpZmZlci5jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWZmZXIoX3Nwci5nZXRDaGlsZEF0KF9kaWZmLmluZGV4KSBhcyBMYXlhLlNwcml0ZTNELCBfZGlmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bmupDlj5jmjaJcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybTogTGF5YS5WZWN0b3IzW10gPSBbR2FtZVBvb2wuZ2V0VjMoKSwgR2FtZVBvb2wuZ2V0VjMoKSwgR2FtZVBvb2wuZ2V0VjMoKV07XHJcbiAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0ucG9zaXRpb24sIF90cmFuc2Zvcm1bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5ldWxlciwgX3RyYW5zZm9ybVsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLnNjYWxlLCBfdHJhbnNmb3JtWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaciXRyYW5zZm9ybeWxnuaAp1xyXG4gICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzBdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5ldWxlcikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMV0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVsyXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFNjYWxlID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WbnuaUtuS4tOaXtuWQkemHj1xyXG4gICAgICAgIEdhbWVQb29sLnJlY3ljbGVWMyguLi5bX2NlbnRyZVYzLCAuLi5fdHJhbnNmb3JtXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTliLbkvZPlkI3lrZdcclxuICAgICAqIEBwYXJhbSBfcHJlZmFic05hbWVzIOi+k+WHuueahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzOiBzdHJpbmdbXSwgX25vZGVDb25maWc6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuaYr+mihOWItuS9k1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZTogc3RyaW5nID0gKF9ub2RlQ29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lO1xyXG4gICAgICAgIGlmIChfcHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgICAgICBpZiAoIV9wcmVmYWJzTmFtZXMuaW5jbHVkZXMoX3ByZWZhYk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFic05hbWVzLnB1c2goX3ByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbov5jmnInlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmNoaWxkICYmIF9ub2RlQ29uZmlnLmNoaWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByZWZhYnNOYW1lcyhfcHJlZmFic05hbWVzLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu66IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg54i26IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWcg6IqC54K56YWN572u5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGROb2RlKF9ub2RlOiBMYXlhLk5vZGUsIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZywgX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+WFiOWIpOaWreaYr+S4jeaYr+mihOWItuS9k1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZTogc3RyaW5nID0gKF9ub2RlQ29uZmlnIGFzIElQcmVmYWJzQ29uZmlnKS5wcmVmYWJOYW1lO1xyXG4gICAgICAgIGxldCBfc3ByOiBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIGlmIChfcHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICBfc3ByID0gUmVzTG9hZC5HZXRSZXMoRXNzZW50aWFsUmVzVXJscy5QcmVmYWJVUkwoX3ByZWZhYk5hbWUpKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZShfc3ByLCBfbm9kZUNvbmZpZyk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIF9wcmVmYWJzW19wcmVmYWJOYW1lXSA9IF9wcmVmYWJzW19wcmVmYWJOYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgX3ByZWZhYnNbX3ByZWZhYk5hbWVdLnB1c2goX3Nwcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmNoaWxkICYmIF9ub2RlQ29uZmlnLmNoaWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF9zcHIgPSBuZXcgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgICAgIF9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZShfc3ByLCBfbm9kZUNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZE5vZGUoX3NwciwgaXRlbSwgX3ByZWZhYnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJU2NlbmVDb25maWcgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSBcIi4vU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IEFycmF5VXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9BcnJheVV0aWxzXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmvIOWunuS+i1xyXG4gKiDmoLnmja7mjIflrprnmoTlnLrmma/phY3nva7ooajmnoTlu7rlnLrmma9cclxuICogKiDlj6/ku6Xnu6fmib/mraTnsbvoh6rlrprkuYnlnLrmma9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICAgIC8qKiDlnLrmma/lkI3lrZcgKi9cclxuICAgIHByb3RlY3RlZCBfc2NlbmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIOeOr+WigyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZW52aXJvbm1lbnQ6IElTY2VuZUVudmlyb25tZW50O1xyXG5cclxuICAgIC8qKiDlnLrmma/phY3nva7kv6Hmga8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUNvbmZpZzoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElOb2RlQ29uZmlnLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDlnLrmma/oioLngrnlrp7kvovnvJPlrZggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZU5vZGVzQ2FjaGU6IE1hcDxzdHJpbmdbXSwgU2NlbmVOb2RlW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKiDlnLrmma/kuK3lrZjlnKjnmoRub2Rl6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fb25TY2VuZU5vZGVzOiBTZXQ8U2NlbmVOb2RlPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv6YWN572uICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lQ29uZmlnKCk6IElTY2VuZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlueOr+WigyAqL1xyXG4gICAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9lbnZpcm9ubWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv5b2T5YmN5a2Y5Zyo55qE6IqC54K55YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2NlbmVOb2RlcygpOiBTY2VuZU5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1fb25TY2VuZU5vZGVzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9zY2VuZU5hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfc2NlbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX3NjZW5lTmFtZSA9IF9zY2VuZU5hbWU7XHJcbiAgICAgICAgLy/moLnmja7lnLrmma/lkI3lrZfor7vlj5bphY3nva7ooajkv6Hmga9cclxuICAgICAgICBpZiAoIXRoaXMuX3NjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWIneWni+WMluWcuuaZr+eahOWQjeWtl++8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX2RhdGE6IElOb2RlQ29uZmlnW10gPSBDb25maWdULmdldENvbmZpZ0pzb25EYXRhKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwodGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29uZmlnLnJvb3QpO1xyXG4gICAgICAgIGlmIChfZGF0YSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluagueiKgueCueS4i+eahOiKgueCuVxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX2RhdGEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2NlbmVDb25maWdbX2RhdGFbX2ldLm5hbWVdID0gX2RhdGFbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfojrflj5blnLrmma/mlbDmja7lpLHotKUtPicsIHRoaXMuX3NjZW5lTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rueOr+Wig++8jOm7mOiupOS4uuWFqOWxgDNk546v5aKD77yM5Y+v5Lul6Ieq5a6a5LmJ546v5aKDXHJcbiAgICAgICAgdGhpcy5tX2Vudmlyb25tZW50ID0gR2xvYmFsRDNFbnZpcm9ubWVudC5FbnZpcm9ubWVudDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluiKgueCuemFjee9rlxyXG4gICAgICogQHBhcmFtIF9ub2RlTmFtZSDoioLngrnlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5vZGVDb25maWcoX25vZGVOYW1lOiBzdHJpbmcpOiBJTm9kZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUNvbmZpZ1tfbm9kZU5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluWcuuaZr+iKgueCuVxyXG4gICAgICAgICAqIEBwYXJhbSBfbmFtZSDoioLngrnlkI3lrZfvvIzlj6/ku6XlpJrkuKrkuIDotbfmnoTlu7pcclxuICAgICAgICAgKiBAcGFyYW0gX2ZpbmRDYWNoZSDmmK/lkKblnKjnvJPlrZjkuK3mn6Xmib4gdHJ1ZVxyXG4gICAgICAgICAqIEBwYXJhbSBfYWRkQ2FjaGUg5piv5ZCm5re75Yqg5Yiw57yT5a2YIHRydWVcclxuICAgICAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZU5vZGUoX25hbWU6IHN0cmluZyB8IHN0cmluZ1tdLCBfZmluZENhY2hlOiBib29sZWFuID0gdHJ1ZSwgX2FkZENhY2hlOiBib29sZWFuID0gdHJ1ZSk6IFNjZW5lTm9kZSB7XHJcbiAgICAgICAgbGV0IF9uYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIF9uYW1lID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goX25hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKC4uLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZ1tdID0gW107XHJcbiAgICAgICAgX25hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcucHVzaCh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5pyJ5Liq5Zy65pmv6IqC54K55rKh5pyJ5om+5YiwJywgaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+iOt+WPluWcuuaZr+iKgueCueaXtu+8jOS4gOS4qumFjee9ruS/oeaBr+mDveayoeaJvuWIsCcsIF9uYW1lcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfc2NlbmVOb2RlOiBTY2VuZU5vZGU7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblnKjnvJPlrZjkuK3mib5cclxuICAgICAgICBpZiAoX2ZpbmRDYWNoZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbX2tleSwgX3ZhbHVlXSBvZiB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXlVdGlscy5Db250ZW50SWZTYW1lKF9rZXksIF9uYW1lcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3VzYWJsZTogU2NlbmVOb2RlW10gPSBfdmFsdWUuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlmRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdXNhYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NjZW5lTm9kZSA9IF91c2FibGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKCFfc2NlbmVOb2RlKSB7XHJcbiAgICAgICAgICAgIC8v5paw5bu65LiA5Liq5a6e5L6LXHJcbiAgICAgICAgICAgIF9zY2VuZU5vZGUgPSBuZXcgU2NlbmVOb2RlKF9ub2RlQ29uZmlnLCB0aGlzKTtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmt7vliqDliLDnvJPlrZhcclxuICAgICAgICAgICAgaWYgKF9hZGRDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW19rZXksIF92YWx1ZV0gb2YgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5VXRpbHMuQ29udGVudElmU2FtZShfa2V5LCBfbmFtZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5wdXNoKF9zY2VuZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV9pZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUuc2V0KF9uYW1lcywgW19zY2VuZU5vZGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5b2T5YmN6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvmnoTlu7rml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRPbk5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuYWRkKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOW9k+WJjeiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5Yig6Zmk5pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlT25Ob2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmRlbGV0ZShfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7njq/looNcclxuICAgICAqIOS8muagueaNruW9k+WJjeWcuuaZr+S4reeOr+Wig+mFjee9ruiuvue9rueOr+Wig1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgbGV0IF9zY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgICAgICAvL+iuvue9ruWFqOWxgOaRhOWDj+aculxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmNhbWVyYSwgX3NjZW5lQ29uZmlnLmNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u5YWo5bGA54Gv5YWJXHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5saWdodCkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5saWdodCwgX3NjZW5lQ29uZmlnLmxpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICB0aGlzLl9zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfbiwgX25vZGUpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRQcm9ncmVzcyhfbiwgX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS0tLS0g5Zue6LCD5Ye95pWwXHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqIOiuvue9rueOr+Wig+WQjuaJp+ihjOeahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zZXRFbnZpcm9ubWVudCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K55Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHsgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVByZWZhYnNHYXRoZXIgfSBmcm9tIFwiLi9JTm9kZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG4vKipcclxuICog5Zy65pmv6IqC54K5XHJcbiAqIOeUqOadpeaehOW7uuWcuuaZr+iKgueCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlIHtcclxuICAgIC8qKiDmiYDlsZ7lnLrmma8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZTogU2NlbmU7XHJcbiAgICAvKiog5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwcml2YXRlIG1faWZEZWxldGU6IGJvb2xlYW47XHJcbiAgICAvKiog6IqC54K56YWN572u5L+h5oGv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW107XHJcbiAgICAvKiog6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fbm9kZTogTGF5YS5Ob2RlO1xyXG4gICAgLyoqIOmihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnNOYW1lczogc3RyaW5nW107XHJcbiAgICAvKiog6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFiczogSVByZWZhYnNHYXRoZXI7XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwcml2YXRlIG1faWZMb2FkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiDojrflj5bmiYDlsZ7lnLrmma8gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6IqC54K56YWN572u5L+h5oGvICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGVDb25maWdzKCk6IElOb2RlQ29uZmlnW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZUNvbmZpZ3M7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZEZWxldGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5Zy65pmv6IqC54K5ICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGUoKTogTGF5YS5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T6ZuG5ZCIICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnMoKTogSVByZWZhYnNHYXRoZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFicztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFic05hbWUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcHJlZmFic05hbWVzO1xyXG4gICAgfVxyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHVibGljIGdldCBpZkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblnLrmma/oioLngrnlrp7kvotcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZ3Mg6IqC54K56YWN572u5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lIOaJgOWxnuWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdLCBfc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgLy/pu5jorqTkuLrliKDpmaTnirbmgIFcclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncyA9IF9ub2RlQ29uZmlncztcclxuICAgICAgICAvL+aPkOWPlumihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzTmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBOb2RlVC5nZXRQcmVmYWJzTmFtZXModGhpcy5tX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZXNVUkw6IHN0cmluZ1tdID0gdGhpcy5tX3ByZWZhYnNOYW1lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQzREFzeW5jKF9wcmVmYWJOYW1lc1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAobikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyhuKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW25dO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXmnoTlu7pcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNCdWlsZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8U2NlbmVOb2RlPiB7XHJcbiAgICAgICAgdGhpcy5tX2lmTG9hZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNjZW5lTm9kZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3luY0xvYWQoX29uUHJvZ3Jlc3MpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lmTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvL+WQkeWcuuaZr+S8oOWHuuWKoOi9vei/m+W6plxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5sb2FkUHJvZ3Jlc3MoX24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E5bu6XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmFkZE9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG5ldyBMYXlhLk5vZGU7XHJcbiAgICAgICAgLy/mt7vliqDliLDmiYDlsZ7lnLrmma/njq/looPkuK1cclxuICAgICAgICB0aGlzLm1fc2NlbmUuZW52aXJvbm1lbnQuc2NlbmUuYWRkQ2hpbGQodGhpcy5tX25vZGUpO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0ge307XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICB0aGlzLm1fbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgTm9kZVQuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIHRoaXMubV9wcmVmYWJzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZEZWxldGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkxvYWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv6IqC54K56L+Y5Zyo5p6E5bu65Y206K+V5Zu+5Yig6Zmk44CCJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmRlbGV0ZU9uTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1fbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICB0aGlzLm1fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWfuuexu+aVsOaNrlxyXG4gKiAhIOWPquiDveWHuueOsOaVsOaNruWxgumdoueahOS4nOilv1xyXG4gKiDmlbDnu4TvvIzlr7nosaHvvIzlgLwgKOaVsOWtl++8jOWtl+espuS4su+8jOW4g+WwlOWAvClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIlxyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+aVsOaNruS7o+eQhlxyXG4gKiDmiYDmnInlhbPkuo7ku6PnkIbmlbDmja7nmoTnsbvpg73ku47ov5nph4znu6fmib9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiB7XHJcbiAgICAvKiog5pWw5o2u5qih5p2/ICovXHJcbiAgICBwcml2YXRlIGRhdGFUZW1wbGF0ZTogeyBuZXcoKTogRGF0YSB9O1xyXG5cclxuICAgIC8qKiDmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHByb3RlY3RlZCBtX2lmU2V0UHJveHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDmlbDmja7ku6PnkIblt6XlhbcgKi9cclxuICAgIHByb3RlY3RlZCBtX29iamVjdFByb3h5VDogT2JqZWN0UHJveHlUO1xyXG5cclxuICAgIC8qKiDpnIDopoHkv53lrZjnmoTmlbDmja4gKi9cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHVibGljIGdldCBpZlNldFByb3h5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTZXRQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaVsOaNruS7o+eQhuWZqFxyXG4gICAgICog6YCa6L+H6L+Z5Liq5pWw5o2u5Luj55CG5Zmo5Y+v5Lul5re75Yqg5Luj55CG5pWw5o2u77yM5ZKM5re75Yqg5pWw5o2u55uR5ZCs5Zue6LCDIFvphY3lkIggcm9vdERhdGEg5L2/55SoXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdFByb3h5VCgpOiBPYmplY3RQcm94eVQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fb2JqZWN0UHJveHlUO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrmlrDnmoTmlbDmja5cclxuICAgICAqIOeUqOS6jumHjeaehOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+WmguaenOayoeacieaVsOaNruaooeadv+eahOivnVxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLDmlbDmja7mqKHmnb/vvIHor7fkvb/nlKjmlbDmja7mqKHmnb/oo4XppbDlmajoo4XppbDor6XnsbsnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5kYXRhVGVtcGxhdGUoKSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0RGF0YSgpO1xyXG59IiwiaW1wb3J0IE1kNSBmcm9tICcuL01kNSc7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tICcuL0Jhc2VEYXRhUHJveHknO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSAnLi9CYXNlRGF0YSc7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tICdzcmMvQ29uZmlnL19NYWluQ29uZmlnJztcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tICcuL09iamVjdFByb3h5VCc7XHJcblxyXG4vKipcclxuICog5Z+657G75pys5Zyw5pWw5o2u5Luj55CG77yM6YCa6L+H5q2k57G75Y+v5Lul6K6/6Zeu5pys5Zyw5L+d5a2Y55qE5pWw5o2uXHJcbiAqIOazm+Wei+S4uuaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUxvY2FsRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBCYXNlRGF0YVByb3h5PERhdGE+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a+55q+U5pWw5o2uXHJcbiAgICAgKiDpu5jorqTkuLp0cnVl77yM5aaC5p6c5Li655yf5b2T5Li657q/5LiK5qih5byP5pe25Lya55Sf5oiQ5LiA5Liq5Yqg5a+G55qE5a+55q+U5pWw5o2u77yM6Ziy5q2i55So5oi35pS55Yqo5pys5Zyw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaWZEaWZmZXJEYXRhOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDojrflj5bkv53lrZjlkI3np7BcclxuICAgICAqIOm7mOiupOi/lOWbnuexu+WQje+8jOWPr+S7pemHjeWGmVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9zYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6buY6K6k6L+U5Zue57G75ZCNXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS/neWtmOaVsOaNrueahOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+mhueebruWQjeWtlyArIOS/neWtmOWQjeWtlyArIOmhueebrueJiOacrFxyXG4gICAgICAgIHJldHVybiBfTWFpbkNvbmZpZy5OYW1lICsgJy0nICsgdGhpcy5fc2F2ZU5hbWUgKyAnLScgKyBfTWFpbkNvbmZpZy5WZXJzaW9ucyArIChfTWFpbkNvbmZpZy5PbkxpbmUgPyAnXm9uJyA6ICdedGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWvueavlOaVsOaNrueahOS/neWtmOWQjeWtl1xyXG4gICAgcHJpdmF0ZSBnZXQgZGlmZmVyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jcnlwdCh0aGlzLnNhdmVOYW1lICsgJ19fdmVyaWZ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8v6K6w5b2V5pe26Ze0XHJcbiAgICAgICAgbGV0IF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5fcmVhZERhdGEoKTtcclxuICAgICAgICAvL+iuvue9ruS7o+eQhuWMheijheaVsOaNrlxyXG4gICAgICAgIGlmICh0aGlzLm1faWZTZXRQcm94eSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPluaVsOaNruS7o+eQhuW3peWFt1xyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlUID0gbmV3IE9iamVjdFByb3h5VCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMubV9vYmplY3RQcm94eVQuc2V0UHJveHkodGhpcy5tX2RhdGEpO1xyXG4gICAgICAgICAgICAvL+a3u+WKoOiuvue9ruebkeWQrFxyXG4gICAgICAgICAgICB0aGlzLm1fb2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgdGhpcy5fZGF0YVNldE1vbml0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBfdGltZSA9IERhdGUubm93KCkgLSBfdGltZTtcclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Yid5aeL5YyW5pys5Zyw5pWw5o2u5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWujOaIkO+8jOe7p+aJv+S9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKiDmlbDmja7ooqvorr7nva7nm5HlkKwgKi9cclxuICAgIHByaXZhdGUgX2RhdGFTZXRNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvliqjkv53lrZjmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYEg6buY6K6k5Li6dHJ1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2F2ZShfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEsIF9pZkNsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5L+d5a2Y5omn6KGM6Zif5YiXICovXHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1F1ZXVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmlbDmja7liLDmnKzlnLBcclxuICAgICAqIEBwYXJhbSBtX2RhdGEg5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2F2ZShtX2RhdGE6IERhdGEsIF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8v5re75Yqg5pe26Ze05Yik5patXHJcbiAgICAgICAgaWYgKHRoaXMubV9zYXZlVG9EaXNrVGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZmQ5rWBXHJcbiAgICAgICAgaWYgKCFfaWZDbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlKys7XHJcbiAgICAgICAgICAgIC8v6ZmQ5rWB77yM5q+P5LiA5qyh5a6P5Lu75Yqh5Y+q5L+d5a2Y5LiA5qyh5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5oqK5L+d5a2Y5Lu75Yqh5rOo5YaM6L+b5b6u5Lu75Yqh5YiX6KGo77yM5bCG5Lya5Zyo5pys5qyh5pWw5o2u5L+u5pS555qE5a6P5Lu75Yqh5a6M5oiQ5ZCO5bm25Zyo5LiL5qyh5a6P5Lu75Yqh5byA5aeL5YmN6KKr5YWo6YOo5omn6KGMXHJcbiAgICAgICAgICAgIC8vIHF1ZXVlTWljcm90YXNrKCgpID0+IHsvL+afkOS6m+W5s+WPsOS8muS4jeWFvOWuuVxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUtLTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja7liY0nKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICBwcml2YXRlIF9zYXZlKG1fZGF0YT86IERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2uJyk7XHJcbiAgICAgICAgLy/luo/liJfljJZcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG1fZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuc2F2ZU5hbWUsIGpzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5blr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXJKc29uID0gdGhpcy5nZXREaWZmZXJEYXRhKGpzb24pO1xyXG4gICAgICAgICAgICAvL+S/neWtmOWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKHRoaXMuZGlmZmVyTmFtZSwgX2RpZmZlckpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCkgLSB0aGlzLm1fc2F2ZVRvRGlza1RpbWU7XHJcbiAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gMDtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv5L+d5a2Y5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47mnKzlnLDojrflj5bmlbDmja5cclxuICAgIHByaXZhdGUgX3JlYWREYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v6K+75Y+W5pys5Zyw5pWw5o2uXHJcbiAgICAgICAgbGV0IHJlYWRTdHIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuc2F2ZU5hbWUpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/lr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKHRoaXMuZGlmZmVyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpZmZlckRhdGEocmVhZFN0cikgIT0gX2RpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrmlrDnmoTlrp7kvotcclxuICAgICAgICBsZXQgX3NhdmVEYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3mlbDmja7mmK/lkKbooqvnr6HmlLlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVhZFN0cikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShyZWFkU3RyKTtcclxuICAgICAgICAgICAgICAgIC8v55So5pys5Zyw55qE5pWw5o2u5aGr5YWF5b2T5YmN5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gX3NhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NhdmVEYXRhW2tleV0gPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3NhdmVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5bm25L+d5a2Y5LiA5Liq5paw5pWw5o2uXHJcbiAgICBwcml2YXRlIF9zYXZlTmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICBsZXQgbV9kYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/kv53lrZjmlbDmja7vvIzkuI3pmZDmtYFcclxuICAgICAgICB0aGlzLnNhdmUobV9kYXRhIGFzIERhdGEsIGZhbHNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBtX2RhdGEgYXMgRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WkhOeQhuWvueavlOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBnZXREaWZmZXJEYXRhKF9zdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoIV9zdHJpbmcpIHJldHVybiAnJztcclxuICAgICAgICAvL+WKoOWvhlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHQoX3N0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDmja7ljZXlkJHliqDlr4ZcclxuICAgIHByaXZhdGUgZW5jcnlwdChfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX2VuY3J5cHRTdHI6IHN0cmluZyA9IGBMYXlhTWluaUdhbWUtJHt0aGlzLnNhdmVOYW1lfToke19zdHJpbmd9YDtcclxuICAgICAgICAvL+WIpOaWreiDveWQpuS9v+eUqG1kNVxyXG4gICAgICAgIGlmIChNZDUuaWZVc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1kNS5oYXNoU3RyKF9lbmNyeXB0U3RyKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5LiN55So5Lu75L2V5Yqg5a+GXHJcbiAgICAgICAgICAgIHJldHVybiAnbm9FbmNyeXB0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSBcIi4vQmFzZURhdGFQcm94eVwiO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNruS7o+eQhuWfuuexu1xyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaG9ydERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKiog5Li05pe25pWw5o2u6buY6K6k5LiN6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIZcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbmlbDmja7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruWkhOeQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7mqKHmnb/oo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfZGF0YSDmlbDmja7mqKHmnb9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZURhdGFUZW1wbGF0ZShfZGF0YTogeyBuZXcoKTogQmFzZURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlbDmja7mqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5kYXRhVGVtcGxhdGUgPSBfZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVHlwZVNjcmlwdCBNZDXliqDlr4ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1kNSB7XHJcbiAgICAvKiog6IO95ZCm5L2/55SoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVXNlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBPbmUgdGltZSBoYXNoaW5nIGZ1bmN0aW9uc1xyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZFN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hBc2NpaVN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRBc2NpaVN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuICAgIC8vIFByaXZhdGUgU3RhdGljIFZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGVJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmZXIzMklkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4T3V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8vIFBlcm1hbmVudCBpbnN0YW5jZSBpcyB0byB1c2UgZm9yIG9uZS1jYWxsIGhhc2hpbmdcclxuICAgIHByaXZhdGUgc3RhdGljIG9uZVBhc3NIYXNoZXIgPSBuZXcgTWQ1KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hleCh4OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGhjID0gTWQ1LmhleENoYXJzO1xyXG4gICAgICAgIGNvbnN0IGhvID0gTWQ1LmhleE91dDtcclxuICAgICAgICBsZXQgbjtcclxuICAgICAgICBsZXQgb2Zmc2V0O1xyXG4gICAgICAgIGxldCBqO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGkgKiA4O1xyXG4gICAgICAgICAgICBuID0geFtpXTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7IGogKz0gMikge1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMSArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMCArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoby5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbWQ1Y3ljbGUoeDogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5LCBrOiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXkpIHtcclxuICAgICAgICBsZXQgYSA9IHhbMF07XHJcbiAgICAgICAgbGV0IGIgPSB4WzFdO1xyXG4gICAgICAgIGxldCBjID0geFsyXTtcclxuICAgICAgICBsZXQgZCA9IHhbM107XHJcbiAgICAgICAgLy8gZmYoKVxyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMF0gLSA2ODA4NzY5MzYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1syXSArIDYwNjEwNTgxOSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1szXSAtIDEwNDQ1MjUzMzAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s1XSArIDEyMDAwODA0MjYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbNl0gLSAxNDczMjMxMzQxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbOF0gKyAxNzcwMDM1NDE2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbOV0gLSAxOTU4NDE0NDE3IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzExXSAtIDE5OTA0MDQxNjIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMTJdICsgMTgwNDYwMzY4MiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzE0XSAtIDE1MDIwMDIyOTAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTVdICsgMTIzNjUzNTMyOSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgLy8gZ2coKVxyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMV0gLSAxNjU3OTY1MTAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxMV0gKyA2NDM3MTc3MTMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMF0gLSAzNzM4OTczMDIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxMF0gKyAzODAxNjA4MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzE1XSAtIDY2MDQ3ODMzNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s5XSArIDU2ODQ0NjQzOCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzE0XSAtIDEwMTk4MDM2OTAgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s4XSArIDExNjM1MzE1MDEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMTNdIC0gMTQ0NDY4MTQ2NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1s3XSArIDE3MzUzMjg0NzMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMTJdIC0gMTkyNjYwNzczNCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaGgoKVxyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzVdIC0gMzc4NTU4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzhdIC0gMjAyMjU3NDQ2MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTFdICsgMTgzOTAzMDU2MiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTRdIC0gMzUzMDk1NTYgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMV0gLSAxNTMwOTkyMDYwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzRdICsgMTI3Mjg5MzM1MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbN10gLSAxNTU0OTc2MzIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzEwXSAtIDEwOTQ3MzA2NDAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMTNdICsgNjgxMjc5MTc0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzBdIC0gMzU4NTM3MjIyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1szXSAtIDcyMjUyMTk3OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbNl0gKyA3NjAyOTE4OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s5XSAtIDY0MDM2NDQ4NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1sxMl0gLSA0MjE4MTU4MzUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzE1XSArIDUzMDc0MjUyMCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMl0gLSA5OTUzMzg2NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaWkoKVxyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzBdIC0gMTk4NjMwODQ0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTRdIC0gMTQxNjM1NDkwNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbNV0gLSA1NzQzNDA1NSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMTJdICsgMTcwMDQ4NTU3MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1szXSAtIDE4OTQ5ODY2MDYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzEwXSAtIDEwNTE1MjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzFdIC0gMjA1NDkyMjc5OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbOF0gKyAxODczMzEzMzU5IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzE1XSAtIDMwNjExNzQ0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzEzXSArIDEzMDkxNTE2NDkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzRdIC0gMTQ1NTIzMDcwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzJdICsgNzE4Nzg3MjU5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s5XSAtIDM0MzQ4NTU1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcblxyXG4gICAgICAgIHhbMF0gPSBhICsgeFswXSB8IDA7XHJcbiAgICAgICAgeFsxXSA9IGIgKyB4WzFdIHwgMDtcclxuICAgICAgICB4WzJdID0gYyArIHhbMl0gfCAwO1xyXG4gICAgICAgIHhbM10gPSBkICsgeFszXSB8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEludDMyQXJyYXkgPSBuZXcgSW50MzJBcnJheSg0KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjogQXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNjgpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyODogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjMyOiBVaW50MzJBcnJheTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyLCAwLCA2OCk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYnVmZmVyLCAwLCAxNyk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLnNldChNZDUuc3RhdGVJZGVudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhciB0byBjb2RlIHBvaW50IHRvIHRvIGFycmF5IGNvbnZlcnNpb246XHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvY2hhckNvZGVBdFxyXG4gICAgLy8gI0V4YW1wbGUuM0FfRml4aW5nX2NoYXJDb2RlQXRfdG9faGFuZGxlX25vbi1CYXNpYy1NdWx0aWxpbmd1YWwtUGxhbmVfY2hhcmFjdGVyc19pZl90aGVpcl9wcmVzZW5jZV9lYXJsaWVyX2luX3RoZV9zdHJpbmdfaXNfdW5rbm93blxyXG4gICAgcHVibGljIGFwcGVuZFN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgY29kZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2KSArIDB4QzA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGUgJiAweDNGIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhEODAwIHx8IGNvZGUgPiAweERCRkYpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyKSArIDB4RTA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSAoKGNvZGUgLSAweEQ4MDApICogMHg0MDApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgLSAweERDMDApICsgMHgxMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMEZGRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaWNvZGUgc3RhbmRhcmQgc3VwcG9ydHMgY29kZSBwb2ludHMgdXAgdG8gVSsxMEZGRkYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDE4KSArIDB4RjA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPj0gNjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgICAgICBidWZMZW4gLT0gNjQ7XHJcbiAgICAgICAgICAgICAgICBidWYzMlswXSA9IGJ1ZjMyWzE2XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEFzY2lpU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKHN0ci5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gc3RyLmNoYXJDb2RlQXQoaisrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRCeXRlQXJyYXkoaW5wdXQ6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oaW5wdXQubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGlucHV0W2orK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlbGYuX3N0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBidWZmZXI6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgc2VsZi5fYnVmZmVyOCksXHJcbiAgICAgICAgICAgIGJ1Zmxlbjogc2VsZi5fYnVmZmVyTGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHNlbGYuX2RhdGFMZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXRlOiBbc1swXSwgc1sxXSwgc1syXSwgc1szXV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYnVmID0gc3RhdGUuYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHggPSBzdGF0ZS5zdGF0ZTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gc3RhdGUuYnVmbGVuO1xyXG4gICAgICAgIHNbMF0gPSB4WzBdO1xyXG4gICAgICAgIHNbMV0gPSB4WzFdO1xyXG4gICAgICAgIHNbMl0gPSB4WzJdO1xyXG4gICAgICAgIHNbM10gPSB4WzNdO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcjhbaV0gPSBidWYuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZChyYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGNvbnN0IGkgPSAoYnVmTGVuID4+IDIpICsgMTtcclxuICAgICAgICBsZXQgZGF0YUJpdHNMZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gYnVmTGVuO1xyXG5cclxuICAgICAgICBidWY4W2J1Zkxlbl0gPSAweDgwO1xyXG4gICAgICAgIGJ1ZjhbYnVmTGVuICsgMV0gPSBidWY4W2J1ZkxlbiArIDJdID0gYnVmOFtidWZMZW4gKyAzXSA9IDA7XHJcbiAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5LnN1YmFycmF5KGkpLCBpKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZkxlbiA+IDU1KSB7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBmaW5hbCBjb21wdXRhdGlvbiBiYXNlZCBvbiB0aGUgdGFpbCBhbmQgbGVuZ3RoXHJcbiAgICAgICAgLy8gQmV3YXJlIHRoYXQgdGhlIGZpbmFsIGxlbmd0aCBtYXkgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XHJcbiAgICAgICAgZGF0YUJpdHNMZW4gPSB0aGlzLl9kYXRhTGVuZ3RoICogODtcclxuICAgICAgICBpZiAoZGF0YUJpdHNMZW4gPD0gMHhGRkZGRkZGRikge1xyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBkYXRhQml0c0xlbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YUJpdHNMZW4udG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsbyA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcclxuICAgICAgICAgICAgY29uc3QgaGkgPSBwYXJzZUludChtYXRjaGVzWzFdLCAxNikgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGxvO1xyXG4gICAgICAgICAgICBidWYzMlsxNV0gPSBoaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhdyA/IHRoaXMuX3N0YXRlIDogTWQ1Ll9oZXgodGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ajgOafpU1kNeaYr+WQpuWPr+eUqFxyXG5pZiAoTWQ1Lmhhc2hTdHIoJ2hlbGxvJykgIT09ICc1ZDQxNDAyYWJjNGIyYTc2Yjk3MTlkOTExMDE3YzU5MicpIHtcclxuICAgIC8v6K6+572u5LiN6IO95L2/55SoXHJcbiAgICBNZDUuaWZVc2UgPSBmYWxzZTtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oJ01kNSBzZWxmIHRlc3QgZmFpbGVkLicpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDlr7nosaHku6PnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3h5VCB7XHJcbiAgICAvKiog55uR5ZCs5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbW9uaXRvckxpc3Q6IHtcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fICovXHJcbiAgICAgICAgX3RoaXM6IGFueSxcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVICovXHJcbiAgICAgICAgX2JhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIC8qKiDmupDlr7nosaEgKi9cclxuICAgICAgICBfb2JqPzogb2JqZWN0LFxyXG4gICAgICAgIC8qKiDplK7lgLwgKi9cclxuICAgICAgICBfa2V5Pzogc3RyaW5nLFxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnm5HlkKxcclxuICAgICAqIOebkeWQrOafkOS4quWvueixoeeahOafkOS4quWxnuaAp+aYr+WQpuWPkeeUn+abtOaUuVxyXG4gICAgICog5aaC5p6c5Y+v6YCJ5bGe5oCn6YO95LiN5aGr55qE6K+d5YiZ55uR5ZCs5YWo6YOo55uR5ZCs5pWw5o2u5bGe5oCn5pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVXHJcbiAgICAgKiBAcGFyYW0gX29iaiDnm67moIflr7nosaHvvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlhoXlrrnmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfa2V5IOmUruWQje+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTW9uaXRvcjxPIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgTz4oX3RoaXM6IGFueSwgX2JhY2s6IEZ1bmN0aW9uLCBfb2JqPzogTywgX2tleT86IEspIHtcclxuICAgICAgICAvL+a3u+WKoOWIsOebkeWQrOWIl+ihqFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgX3RoaXMsXHJcbiAgICAgICAgICAgIF9iYWNrLFxyXG4gICAgICAgICAgICBfb2JqLFxyXG4gICAgICAgICAgICBfa2V5OiBfa2V5IGFzIHN0cmluZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF90aGlzIOWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOWbnuiwg+aWueazlVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJNb25pdG9yKF90aGlzOiBhbnksIF9iYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QgPSB0aGlzLm1fbW9uaXRvckxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICAgICAgICAgaXRlbS5fdGhpcyA9PSBfdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Y+v6YCJ55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgX2JhY2sgPyBpdGVtLl9iYWNrID09IF9iYWNrIDogdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9vIOa6kOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHk8RGF0YSBleHRlbmRzIG9iamVjdD4oX286IERhdGEpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0UHJveHkoX28pIGFzIERhdGE7XHJcbiAgICB9XHJcbiAgICAvL+mFjeWQiOiuvue9ruS7o+eQhlxyXG4gICAgcHJpdmF0ZSBfc2V0UHJveHkoX28pOiBvYmplY3Qge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5pmu6YCa5YC857G75Z6L5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIF9vICE9IFwib2JqZWN0XCIgfHwgIV9vKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/lj6/ov63ku6Plr7nosaHlkozmlrnms5VcclxuICAgICAgICBpZiAoIV9vW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuICAgICAgICAgICAgLy/pgY3ljoblr7nosaHorr7nva7ku6PnkIZcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgICAgIF9vW19pXSA9IHRoaXMuX3NldFByb3h5KF9vW19pXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ov5Tlm57mnIDnu4jnmoTku6PnkIblr7nosaFcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoX28sIHtcclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiAgc2V0IOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHJhcFRhcmdldCDku6PnkIbnmoTnm67moIdcclxuICAgICAgICAgICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGhXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S/ruaUueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IFJlZmxlY3Quc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChfaWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+aYr+S4jeaYr+aVsOe7hOeahGxlbmd0aOWxnuaAp+iiq+S/ruaUuVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkodHJhcFRhcmdldCkgJiYga2V5ID09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWY7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIGdldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaHvvIjpgJrluLjmmK/ku6PnkIbvvIlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluWxnuaAp1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRyYXBUYXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKipcclxuICAgICAqIOS7o+eQhuWvueixoeiiq+iuvue9ruaXtueahOWbnuiwg1xyXG4gICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByb3h5U2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S7o+eQhuWvueixoeiiq+iuvue9ricsIHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICBsZXQgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAvL+aJp+ihjOebkeWQrFxyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5YWI5Yik5pat5Luj55CG55uu5qCHXHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9vYmogJiYgaXRlbS5fb2JqICE9IHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2tleSAmJiBpdGVtLl9rZXkgIT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgaXRlbS5fYmFjay5jYWxsKGl0ZW0uX3RoaXMsIC4uLl9hcmd1bWVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog5qC56LCD6K+V57G777yM5omA5pyJ6LCD6K+V57G75b+F6aG755Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGVidWcge1xyXG4gICAgLyoqIOWJjee8gCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQcmVmaXg6IHN0cmluZyA9ICckRGVidWcnO1xyXG5cclxuICAgIC8qKiDmoLnosIPor5Xlr7nosaEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVidWdPYmo6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWQjeWtl++8jOeUqCBXaW5kb3db5YmN57yAICsgX25hbWVdIOiuv+mXrlxyXG4gICAgICog5Y+v5Lul57un5om/5pu05pS56L+Z5Liq5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgX2lmSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq6LCD6K+V5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqIEBwYXJhbSBfaXRlbSDor6Xlr7nosaFcclxuICAgICAqIEBwYXJhbSBfdHlwZSDor6Xlr7nosaHnsbvlnotcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEl0ZW0oX2tleTogc3RyaW5nLCBfaXRlbTogYW55KSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblvIDlkK/kuobosIPor5VcclxuICAgICAgICBpZiAoIV9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2lmSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZkluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBCYXNlRGVidWcuRGVidWdPYmpbdGhpcy5fbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW19rZXldID0gX2l0ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+V5qih5byPXHJcbmlmIChfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAvL+azqOWGjOWFqOWxgOiwg+ivleWvueixoVxyXG4gICAgd2luZG93W0Jhc2VEZWJ1Zy5QcmVmaXhdID0gQmFzZURlYnVnLkRlYnVnT2JqO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+W8gOWQr+iwg+ivleaooeW8j++8jOmAmui/hycsIEJhc2VEZWJ1Zy5QcmVmaXgsICforr/pl64nKSk7XHJcbn0iLCJcclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoFxyXG4gKiAhIOWPquiDvea4uOaIj+WGheS9v+eUqO+8jOS4jeimgeWcqOW3peWFt+S4reS9v+eUqFxyXG4gKiAhIOWwvemHj+WPquWcqOmHjeWkjeWIm+W7uumdnuW4uOWkmuWvueixoeeahOWcsOaWueS9v+eUqO+8jOS4jeeEtuS8muW+l+S4jeWBv+WksVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBvb2wge1xyXG4gICAgLyoqIOWvueixoeaxoOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbExpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW08VCBleHRlbmRzIGFueT4oX3NpZ246IEVHYW1lUG9vbFNpZ24pOiBUIHtcclxuICAgICAgICAvL+WFiOWIsOacrOWcsOWvueixoeaxoOWIl+ihqOS4reafpeaJvlxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xMaXN0W19zaWduXSAmJiB0aGlzLnBvb2xMaXN0W19zaWduXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2xMaXN0W19zaWduXS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3NpZ24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjMpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjIpIGFzIGFueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtuWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIOWbnuaUtuagh+ivhlxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWbnuaUtuWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVJdGVtKF9zaWduOiBFR2FtZVBvb2xTaWduLCAuLi5faXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPqua3u+WKoOS4jeWMheWQq+eahOWFg+e0oFxyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dLmluY2x1ZGVzKF9vKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0ucHVzaChfbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYzKCk6IExheWEuVmVjdG9yMyB7XHJcbiAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMz4oRUdhbWVQb29sU2lnbi52Myk7XHJcbiAgICAgICAgX3YzLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYzXHJcbiAgICAgKiBAcGFyYW0gX3YzIOW+heWbnuaUtueahHYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYzKC4uLl92M3M6IExheWEuVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYzLCAuLi5fdjNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjIoKTogTGF5YS5WZWN0b3IyIHtcclxuICAgICAgICBsZXQgX3YyOiBMYXlhLlZlY3RvcjIgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IyPihFR2FtZVBvb2xTaWduLnYyKTtcclxuICAgICAgICBfdjIuc2V0VmFsdWUoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djJcclxuICAgICAqIEBwYXJhbSBfdjIg5b6F5Zue5pS255qEdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjIoLi4uX3YyczogTGF5YS5WZWN0b3IyW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjIsIC4uLl92MnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGg5qCH6K+GXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFR2FtZVBvb2xTaWduIHtcclxuICAgIC8qKiAz57u05ZCR6YePICovXHJcbiAgICB2MyxcclxuICAgIC8qKiAy57u05ZCR6YePICovXHJcbiAgICB2MixcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCflvIDlp4vliqDovb3muLjmiI/liJ3lp4vljJbotYTmupAnKSk7XHJcbiAgICAgICAgLy/miafooYzliqDovb3kuYvliY3nmoTlvILmraVcclxuICAgICAgICB0aGlzLl9sb2FkQmVmb3JlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5Yqg6L296aG5XHJcbiAgICAgICAgICAgIGxldCBfcmVzTG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gdGhpcy5fZ2V0TG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIC8v5byC5q2l5Yqg6L295Yqg6L296aG5XHJcbiAgICAgICAgICAgIFJlc0xvYWRHcm91cC5sb2FkQXN5bmMoX3Jlc0xvYWRJdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFBsYW4oaSk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuX2xvYWRJdGVtc0NvbSwgdW5kZWZpbmVkLCBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+a4uOaIj+WKoOi9veWujOaIkCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWFiOWKoOi9veS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRCZWZvcmUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQbGFuKF9pOiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQ29tKCkgeyB9XHJcbn0iLCJpbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCIuL0tleVJlc01hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDlhazlhbHotYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbVJlc1VybCB7XHJcbiAgICAvKipcclxuICAgICAqIOmfs+S5kOaWh+S7tui3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5paH5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNdXNpY1VSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLm11c2ljKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDpn7PmlYjlkI3lrZcgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTb3VuZFVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLnNvdW5kKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77moIflkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJY29uVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5wbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuaWNvbikgKyBuYW1lICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvueJh+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5Zu+54mH6LWE5rqQ5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbWdVUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAncG5nJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLmltZykgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOearuiCpOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg55qu6IKk5ZCN56ewIFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2tpblVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICdwbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuc2tpbikgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnlkI3lrZfmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVLZXlSZXNOYW1lIHtcclxuICAgIC8qKiDmoLnnm67lvZUgKi9cclxuICAgIFJvb3RSZXMgPSAncmVzJyxcclxuICAgIC8qKiDphY3nva7ooajnm67lvZUgKi9cclxuICAgIENvbmZpZ0pzb24gPSAnQ29uZmlnSnNvbicsXHJcbiAgICAvKiog5a2X5L2T55uu5b2VICovXHJcbiAgICBGb250ID0gJ0ZvbnQnLFxyXG4gICAgLyoqIEZHVUnotYTmupDnm67lvZUgKi9cclxuICAgIEZHVUkgPSAnRkdVSScsXHJcbiAgICAvKiog5YWz5Y2h6YWN572u6KGo55uu5b2VICovXHJcbiAgICBTY2VuZUpzb24gPSAnU2NlbmVKc29uJyxcclxuICAgIC8qKiDlhbblroPnm67lvZUgKi9cclxuICAgIE90aGVyID0gJ090aGVyJyxcclxuICAgIC8qKiBpY29u55uu5b2VICovXHJcbiAgICBpY29uID0gJ2ljb24nLFxyXG4gICAgLyoqIGltZ+ebruW9lSAqL1xyXG4gICAgaW1nID0gJ2ltZycsXHJcbiAgICAvKiog6Z+z5LmQ5paH5Lu255uu5b2VICovXHJcbiAgICBtdXNpYyA9ICdtdXNpYycsXHJcbiAgICAvKiog6Z+z5pWI5paH5Lu255uu5b2VICovXHJcbiAgICBzb3VuZCA9ICdzb3VuZCcsXHJcbiAgICAvKiog55qu6IKk5paH5Lu255uu5b2VICovXHJcbiAgICBza2luID0gJ3NraW4nLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSAnLi9FS2V5UmVzTmFtZSc7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gJy4vS2V5UmVzTWFuYWdlcic7XHJcbi8qKlxyXG4gKiDlv4XopoHnmoTmuLjmiI/otYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVzc2VudGlhbFJlc1VybHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWz5Y2h6YWN572u5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2NlbmVDb25maWdVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlNjZW5lSnNvbikgKyBfbmFtZSArICcuanNvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahKc29u5paH5Lu2UlVMXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6YWN572u6KGo5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlnSnNvblVSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuQ29uZmlnSnNvbikgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZHVUnljIVcclxuICAgICAqIEBwYXJhbSBfbmFtZSDljIXlkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJUGFja1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRkdVSSkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtl+S9k+WcsOWdgFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWtl+S9k+WQjeWtl++8jOWKoOWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZvbnRVUkwoX25hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Gb250KSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omA5pyJ6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWxsU2NlbmVQcmVmYWJzTmFtZXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvL+mihOWItuS9k+WcuuaZr+e8k+WtmFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ByZWZhYnNTY2VuZUNhY2hlOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliLbkvZPotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiVVJMKHByZWZhYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WFiOWcqOe8k+WtmOS4reafpeaJvuWcuuaZr+WQjeWtl1xyXG4gICAgICAgIGlmICh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTCh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreivpemihOWItuS9k+WcqOWTquS4quWcuuaZr+S4reiiq+WvvOWHuueahFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0uaW5kZXhPZignQCcgKyBwcmVmYWIgKyAnQCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSA9IF9pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKF9pKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInlnKjlnLrmma/mib7liLDpooTliLbkvZMnLCBwcmVmYWIsICflj6/og73mmK/msqHmnInlr7zlh7rlnLrmma/pooTliLbkvZPliJfooajlr7zoh7TnmoTjgIInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lnLrmma/pooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbyDlnLrmma/pooTliLbkvZPpm4blkIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmYWJTY2VuZU5hbWVzKF9vOiBhbnkpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXSA9IF9vW19pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCIuLi9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWIl+ihqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UmVzTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogS2V5UmVzTWFuYWdlcjtcclxuXHJcbiAgICAvL+WFs+mUrui1hOa6kOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX0tleVJlc0xpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v5rOo5YaM5YWz6ZSu6LWE5rqQ55uu5b2VXHJcbiAgICAgICAgdGhpcy5tX0tleVJlc0xpc3QgPSB7XHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Sb290UmVzXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkNvbmZpZ0pzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuQ29uZmlnSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZHVUldOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRkdVSSArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlNjZW5lSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5TY2VuZUpzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Gb250XTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZvbnQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5PdGhlcl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyxcclxuICAgICAgICAgICAgLy/lhbbku5bot6/lvoRcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmljb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pY29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaW1nXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaW1nICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUubXVzaWNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5tdXNpYyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNvdW5kXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc291bmQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5za2luXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc2tpbiArICcvJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubV9LZXlSZXNMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblrZjlnKjmn5DkuKrlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmS2V5UmVzKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09IF9rZXk7XHJcbiAgICAgICAgfSkgIT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhbPplK7ngrnotYTmupDnmoTot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJlc1VSTChfa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgea3u+WKoOWFs+mUrui3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX3N0cmluZyDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhZGRSZXNVcmwoX2tleTogc3RyaW5nLCBfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XSA9IF9zdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9zdHIg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZWRpdEtleVJlc0xpc3QoX2tleTogc3RyaW5nLCBfc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX3JlcGxhY2U6IHN0cmluZyA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JlcGxhY2UgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfkv67mlLnotYTmupDot6/lvoTlpLHotKXvvIzmsqHmnIknICsgX2tleSArICfov5nkuKrlhbPplK7ot6/lvoTvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7/mjaLmiYDmnInotYTmupDot6/lvoTkuK3nmoTlhbPplK7ngrnot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0gPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0ucmVwbGFjZShfcmVwbGFjZSwgX3N0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ+S/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hCcsIF9yZXBsYWNlLCAn5pu/5o2i5oiQJywgX3N0cikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hOWIl+ihqFxyXG4gICAgICogQHBhcmFtIG1vZGVsIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQodXJsczogYW55LCBtb2RlbDogRVJlc0xvYWRNb2RlbCwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVybHMpKSB7XHJcbiAgICAgICAgICAgIC8v5Y676Zmk6Jma5YC8XHJcbiAgICAgICAgICAgIHVybHMgPSB1cmxzLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlhoXlrrnpnIDopoHliqDovb1cclxuICAgICAgICBpZiAoIXVybHMgfHwgKEFycmF5LmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMzpcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRl5pivM0TnmoTmjqXlj6PvvIzpgILnlKjkuo4zROmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIuY3JlYXRlKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQyOlxyXG4gICAgICAgICAgICAgICAgLy9sb2Fk5pivMmTnmoTmjqXlj6PvvIzpgILnlKjkuo4yZOmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EIFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDIsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDNEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQyRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui1hOa6kFxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBub0Nsb25lIOaYr+WQpuS4jeiOt+WPluWFi+mahueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJlcyhyZXNVcmw6IHN0cmluZywgbm9DbG9uZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICBsZXQgZ2V0UmVzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKHJlc1VybCk7XHJcbiAgICAgICAgaWYgKCFnZXRSZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKFwi6LWE5rqQ5bCa5pyq5Yqg6L29XCIsIHJlc1VybCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub0Nsb25lID8gZ2V0UmVzIDogZ2V0UmVzLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIbmjIflrprotYTmupDlnLDlnYDnvJPlrZjjgIJcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJSZXMocmVzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclJlcyhyZXNVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L295qih5byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFUmVzTG9hZE1vZGVsIHtcclxuICAgIC8qKiAzRCDotYTmupAgKi9cclxuICAgIEQzLFxyXG4gICAgLyoqIDJkIOi1hOa6kCAqL1xyXG4gICAgRDIsXHJcbn0iLCJpbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4vUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nu4RcclxuICog6LSf6LSj5aSa5Liq6LWE5rqQ5Yqg6L296aG555qE57uf5LiA5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkR3JvdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiAhIOi/memHjOaYr+S+neasoeWKoOi9veW5tuS4jeaYr+WQjOaXtuWKoOi9veeahFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5L2c5Li65Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChpdGVtczogUmVzTG9hZEl0ZW1bXSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+ayoeacieWKoOi9vemhuVxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a1heaLt+i0ne+8jOmYsuatouaxoeafk+a6kOWIl+ihqFxyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAvL+W8guatpeWIl+ihqOmVv+W6plxyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgLy/kuIDmraXkuIDmraXmtojotLnlvILmraXliJfooahcclxuICAgICAgICBsZXQgX2Y6IEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uSXRlbTogUmVzTG9hZEl0ZW0gPSBpdGVtcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgb25JdGVtLmxvYWRBc3luYyhMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rmgLvov5vluqZcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9sZW5ndGggLSBpdGVtcy5sZW5ndGggLSAxKSArIGkpIC8gX2xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rljZXkuKrliqDovb3pobnliqDovb3lrozmiJDkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLmFyZ3MgPSBbb25JdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgX2YoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM6YCS5b2S5Yqg6L295pa55rOVXHJcbiAgICAgICAgX2YoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzeW5jKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoaXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MsIF9vbkl0ZW1Db20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlc0xvYWQsIHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCIuL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3poblcclxuICog6LSf6LSj5LiA57uE6LWE5rqQ5YiX6KGo55qE5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkSXRlbSB7XHJcbiAgICAvKiog5Yqg6L295qih5byPICovXHJcbiAgICBwcml2YXRlIG1fbG9hZE1vZGVsOiBFUmVzTG9hZE1vZGVsO1xyXG5cclxuICAgIC8qKiDliqDovb3lhbPplK7plK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IGFueTtcclxuXHJcbiAgICAvKiog5Yqg6L295a6M5oiQ5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fY29tQmFjazogTGF5YS5IYW5kbGVyO1xyXG4gICAgLyoqIOWKoOi9vei/m+W6puWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICAvKiog6LWE5rqQ6Lev5b6E5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcmVzOiBhbnk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWFs+mUrumUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9yZXMg6LWE5rqQ5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX21vZGUg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7plK7lgLxcclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDml7bnmoTlm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9yZXM6IGFueSwgX21vZGU6IEVSZXNMb2FkTW9kZWwsIF9rZXk/OiBhbnksIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMubV9yZXMgPSBfcmVzO1xyXG4gICAgICAgIHRoaXMubV9sb2FkTW9kZWwgPSBfbW9kZTtcclxuICAgICAgICB0aGlzLm1fa2V5ID0gX2tleTtcclxuICAgICAgICB0aGlzLm1fY29tQmFjayA9IF9jb21CYWNrO1xyXG4gICAgICAgIHRoaXMubV9vblByb2dyZXNzID0gX29uUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQob25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+WMheijhei/m+W6puWbnuiwg1xyXG4gICAgICAgIGxldCBfX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlciA9IF9vblByb2dyZXNzO1xyXG4gICAgICAgIGlmIChfX29uUHJvZ3Jlc3MgJiYgdGhpcy5tX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgX19vblByb2dyZXNzID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubV9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIF9fb25Qcm9ncmVzcyA9IHRoaXMubV9vblByb2dyZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tX2NvbUJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIHRoaXMubV9jb21CYWNrLCBfX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSksIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgb25Db21wbGV0ZWQsIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwic3JjL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEQyTWFuYWdlciBmcm9tIFwiLi9EMi9EMk1hbmFnZXJcIjtcclxuaW1wb3J0IEQzTWFuYWdlciBmcm9tIFwiLi9EMy9EM01hbmFnZXJcIjtcclxuaW1wb3J0IF9UQ29uZmlnIGZyb20gXCIuL19UQ29uZmlnXCI7XHJcblxyXG4vKiogXHJcbiAqIOahhuaetuWFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE1haW4ge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YWl5qGG5p625L+h5oGvXHJcbiAgICAgICAgd2luZG93W19UQ29uZmlnLk5hbWVdID0ge1xyXG4gICAgICAgICAgICAvKiog5qGG5p626YWN572uICovXHJcbiAgICAgICAgICAgIC4uLl9UQ29uZmlnLFxyXG4gICAgICAgICAgICAvKiogbGF5YemFjee9riAqL1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiB7IC4uLkdhbWVDb25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOmhueebrumFjee9riAqL1xyXG4gICAgICAgICAgICBfbWFpbkNvbmZpZzogeyAuLi5fTWFpbkNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog5ri45oiP6YWN572uICovXHJcbiAgICAgICAgICAgIF9nYW1lQ29uZmlnOiB7IC4uLl9HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIneWni+WMluWQhOenjeWQhOagt+eahOeuoeeQhuWZqFxyXG4gICAgICAgIEQzTWFuYWdlci5pbml0KCk7Ly8zROeuoeeQhuWZqFxyXG4gICAgICAgIEQyTWFuYWdlci5pbml0KCk7Ly91aeeuoeeQhuWZqFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWNleS+i+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VUIHtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlS2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlTmFtZTogc3RyaW5nID0gJ2luc3RhbmNlJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+exu+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9pZlBhc3NpdmUg5piv5ZCm6KKr5Yqo6K6/6Zeu55qE5pe25YCZ5Yib5bu65a6e5L6L77yM5Li6ZmFsc2XnmoTor53kvJrnq4vljbPliJvlu7rlh7rlrp7kvotcclxuICAgICAqICEg6KKr6KOF6aWw55qE57G755qE5p6E6YCg5pa55rOV5LiN6IO95pe2cHVibGlj57G75Z6L55qEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVJbnN0YW5jZShfaWZQYXNzaXZlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKF9pZlBhc3NpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5LiA5Liq55uR5ZCs5bGe5oCnXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBJbnN0YW5jZVQuSW5zdGFuY2VOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VOYW1lXSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmlbDnu4Tlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5VXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3kuKTkuKrmlbDnu4TlhoXlrrnmmK/lkKbnm7jlkIxcclxuICAgICAqIEBwYXJhbSB4IHjmlbDnu4RcclxuICAgICAqIEBwYXJhbSB5IHnmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250ZW50SWZTYW1lKHg6IGFueVtdLCB5OiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghKHgpIHx8ICEoeSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoeC5sZW5ndGggIT0geS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvL+aWueazle+8miDnlKjkuIDkuKptb3DmnaXnu5/orqF45pWw57uE5ZCE5Liq5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5YaN55SoeeaVsOe7hOadpemAkuWHj+WQhOWFg+e0oOWHuueOsOeahOasoeaVsO+8jOWmguaenOacgOe7iOe7k+aenOS4ujDliJnkuKTkuKrmlbDnu4Tnm7jlkIxcclxuICAgICAgICBsZXQgbTogTWFwPGFueSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICB4LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbS5zZXQoaXRlbSwgKG0uZ2V0KGl0ZW0pIHx8IDApICsgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG0uc2V0KGl0ZW0sIChtLmdldChpdGVtKSB8fCAwKSAtIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIG0uZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaSArPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5Y676YeN5L+d55WZ6Z2g5YmN55qE5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOWOu+mHjeS/neeVmemdoOWQjueahOWGheWuuVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXZlcnNlUmVzZXJ2ZVVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIucmV2ZXJzZSgpKSkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a+56LGh5pWw57uE5Y676YeNXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIF9GIOiOt+WPluWvueavlOmUruWAvOWHveaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE9ialVuaXF1ZTxUPihhcnI6IFRbXSwgX0Y6IChvOiBUKSA9PiBzdHJpbmcpOiBUW10ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxLCBsZW4gPSBhcnIubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChfRihhcnJbaV0pID09PSBfRihhcnJbal0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqLS07ICAgICAgICAvLyDmr4/liKDpmaTkuIDkuKrmlbBq55qE5YC85bCx5YePMVxyXG4gICAgICAgICAgICAgICAgICAgIGxlbi0tOyAgICAgIC8vIGrlgLzlh4/lsI/ml7ZsZW7kuZ/opoHnm7jlupTlh48x77yI5YeP5bCR5b6q546v5qyh5pWw77yM6IqC55yB5oCn6IO977yJICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabv+aNouaVsOe7hOeahOafkOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBvbGRPYmog6KKr5pu/5o2i55qE5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gbmV3T2JqIOabv+aNouWFg+e0oFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlcGxhY2U8VD4oYXJyOiBUW10sIG9sZE9iajogVCwgbmV3T2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2xkT2JqKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSwgbmV3T2JqKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOS4gOS4quWFg+e0oOW5tui/lOWbnue7k+aenFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBvYmog5Yig6Zmk55uu5qCH5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVtb3ZlSXRlbTxUPihhcnI6IFRbXSwgb2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7ntKLlvJXliKDpmaTkuIDkuKrmlbDmja5cclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gaW5kZXgg57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVtb3ZlQXQ8VD4oYXJyOiBUW10sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8PSBpbmRleCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5piv5ZCm5YyF5ZCr5p+Q5Liq5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gYXJyIFxyXG4gICAgICogQHBhcmFtIG9iaiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250YWluczxUPihhcnI6IFRbXSwgb2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkjeWItuS4gOS4quaVsOe7hFxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb3B5PFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuaJk+S5seaVsOe7hFxyXG4gICAgICogQHBhcmFtIF9hcnJheSDnm67moIfmlbDnu4QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdXBzZXRBcnJheTxUPihfYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgLy/kubHluo9cclxuICAgICAgICByZXR1cm4gX2FycmF5LnNvcnQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuiOt+WPluaVsOe7hOS4reeahOmaj+acuuWAvO+8jOWPr+aMh+WumumVv+W6plxyXG4gICAgICogQHBhcmFtIF9hcnJheSDljp/mlbDnu4RcclxuICAgICAqIEBwYXJhbSBfbiDpmo/mnLrkuKrmlbBcclxuICAgICAqIEBwYXJhbSBfd2VpZ2h0IOadg+mHjeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmRvbUdldDxUPihfYXJyYXk6IFRbXSwgX246IG51bWJlciA9IDEsIF93ZWlnaHQ6IG51bWJlcltdID0gX2FycmF5Lm1hcCgoaXRlbSkgPT4geyByZXR1cm4gMTsgfSkpOiBUW10ge1xyXG4gICAgICAgIGlmIChfYXJyYXkubGVuZ3RoIDw9IDApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IF9yb290QXJyYXk6IFRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBfbmV3QXJyYXk6IFRbXSA9IFtdO1xyXG4gICAgICAgIC8v5p2D6YeN57Si5byV5YiX6KGoXHJcbiAgICAgICAgbGV0IF9pbmRleEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIC8v5om+5Yiw5pyA5bCP55qE5p2D6YeNXHJcbiAgICAgICAgbGV0IF9taW5XZWlnaHQ6IG51bWJlciA9IF93ZWlnaHRbMF07XHJcbiAgICAgICAgX3dlaWdodC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9taW5XZWlnaHQgPSBNYXRoLm1pbihfbWluV2VpZ2h0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfd2VpZ2h0ID0gX3dlaWdodC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaXRlbSAqICgxIC8gX21pbldlaWdodCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9hcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBfcm9vdEFycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfd2VpZ2h0W2luZGV4XTsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgX2luZGV4QXJyYXkucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgX2luZGV4OiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF9uOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChfcm9vdEFycmF5Lmxlbmd0aCA8PSAwKSB7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgIF9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9pbmRleEFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIF9pbmRleEFycmF5ID0gX2luZGV4QXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPSBfaW5kZXg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfbmV3QXJyYXkucHVzaChfcm9vdEFycmF5LnNwbGljZShfaW5kZXhBcnJheVtfaW5kZXhdLCAxKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9uZXdBcnJheTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPkuo52M+WQkemHj+eahOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVjNVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+S4gOS4quWtl+espuS4suaehOW7unYz5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gc3RyIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlVmVjdG9yMyhzdHI6IHN0cmluZywgX291dFYzOiBMYXlhLlZlY3RvcjMpIHtcclxuICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdCgnLCcpO1xyXG4gICAgICAgIF9vdXRWMy5zZXRWYWx1ZShOdW1iZXIoc3Ryc1swXSksIE51bWJlcihzdHJzWzFdKSwgTnVtYmVyKHN0cnNbMl0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rlYz5ZCR6YeP6ZW/5bqmXHJcbiAgICAgKiBAcGFyYW0gX3YzIOebruagh+WQkemHj1xyXG4gICAgICogQHBhcmFtIF9sIOebruagh+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFYzTGVuZ3RoKF92MzogTGF5YS5WZWN0b3IzLCBfbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IExheWEuVmVjdG9yMy5zY2FsYXJMZW5ndGgoX3YzKTtcclxuICAgICAgICBpZiAoX2xlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBfYTogbnVtYmVyID0gX2wgLyBfbGVuZ3RoO1xyXG4gICAgICAgICAgICBfdjMueCA9IF92My54ICogX2E7XHJcbiAgICAgICAgICAgIF92My55ID0gX3YzLnkgKiBfYTtcclxuICAgICAgICAgICAgX3YzLnogPSBfdjMueiAqIF9hO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueaPkuWAvOenu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfbGVycCDmj5LlgLznp7vliqjmr5TkvotcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2luaXRpYWxMZW5ndGgg5Yid5aeL6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90TGVycE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9sZXJwOiBudW1iZXIsIF9vdXRWMzogTGF5YS5WZWN0b3IzLCBfaW5pdGlhbExlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfZGlzdGFuY2U6IG51bWJlciA9IExheWEuVmVjdG9yMy5kaXN0YW5jZShfcG9zLCBfdHJhZ2V0UG90KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuVmVjdG9yMy5sZXJwKF9wb3MsIF90cmFnZXRQb3QsIF9sZXJwLCBfb3V0VjMpO1xyXG4gICAgICAgIC8v6L+U5Zue6L+b5bqmXHJcbiAgICAgICAgcmV0dXJuIDEgLSAoX2Rpc3RhbmNlIC8gX2luaXRpYWxMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5Liq54K55YyA6YCf56e75Yqo5Yiw5Y+m5LiA5Liq54K5XHJcbiAgICAgKiBAcGFyYW0gX3BvcyDlvZPliY3ngrlcclxuICAgICAqIEBwYXJhbSBfdHJhZ2V0UG90IOebruagh+eCuVxyXG4gICAgICogQHBhcmFtIF9zcGVlZCDpgJ/luqZcclxuICAgICAqIEBwYXJhbSBfb3V0VjMg6L6T5Ye65ZCR6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUG90Q29uc3RhbnRTcGVlZE1vdmUoX3BvczogTGF5YS5WZWN0b3IzLCBfdHJhZ2V0UG90OiBMYXlhLlZlY3RvcjMsIF9zcGVlZDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghX291dFYzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W/hemhu+acieS4gOS4qui+k+WHuueahOWQkemHj++8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IF9pZkVuZDogYm9vbGVhbjtcclxuICAgICAgICBsZXQgX2RpZmZlclYzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMuc3VidHJhY3QoX3RyYWdldFBvdCwgX3BvcywgX2RpZmZlclYzKTtcclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF9kaWZmZXJWMyk7XHJcbiAgICAgICAgaWYgKF9kaXN0YW5jZSA+IF9zcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFYzTGVuZ3RoKF9kaWZmZXJWMywgX3NwZWVkKTtcclxuICAgICAgICAgICAgX2lmRW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX2lmRW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nm7jliqBcclxuICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF9wb3MsIF9kaWZmZXJWMywgX291dFYzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfaWZFbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgcm90YXRlQXhpc1YzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDml4vovazkuIDkuKrlkJHph49cclxuICAgICAqIEBwYXJhbSBfdjMg6ZyA6KaB5peL6L2s55qE6YKj5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2FuZ2VyIOaXi+i9rOinkuW6plxyXG4gICAgICogQHBhcmFtIF9heGlzIOaXi+i9rOi9tFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJvdGF0ZVYzKF92MzogTGF5YS5WZWN0b3IzLCBfYW5nZXI6IG51bWJlciwgX2F4aXM6IExheWEuVmVjdG9yMyA9IHRoaXMucm90YXRlQXhpc1YzKSB7XHJcbiAgICAgICAgLy/ml4vovazlm5vlhYPmlbBcclxuICAgICAgICB2YXIgcSA9IG5ldyBMYXlhLlF1YXRlcm5pb24oKTtcclxuICAgICAgICBMYXlhLlF1YXRlcm5pb24uY3JlYXRlRnJvbUF4aXNBbmdsZShfYXhpcywgKF9hbmdlciAvIDE4MCkgKiBNYXRoLlBJLCBxKTtcclxuICAgICAgICBMYXlhLlZlY3RvcjMudHJhbnNmb3JtUXVhdChfdjMsIHEsIF92Myk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5qGG5p626YWN572u5paH5Lu2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVENvbmZpZyB7XHJcbiAgICAvKiog5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5hbWU6IHN0cmluZyA9IFwiTGF5YU1pbmlHYW1lXCI7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFpITmFtZTogc3RyaW5nID0gXCJMYXlhQm945bCP5ri45oiPXCI7XHJcbiAgICAvKiog54mI5pysICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFZlcnNpb25zOiBzdHJpbmcgPSBcIjAuMC4wLjJcIjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=