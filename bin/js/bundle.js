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
/* harmony import */ var _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../UICon/initLoad/initEmptyScreenUICon */ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts");
/* harmony import */ var _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../UICon/initLoad/initLoadUICon */ "./src/Game/UICon/initLoad/initLoadUICon.ts");
/* harmony import */ var _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../_config/BuildConfigTs */ "./src/Game/_config/BuildConfigTs.ts");
/* harmony import */ var _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../_prefabsName/_EAllScenePrefabsNames */ "./src/Game/_prefabsName/_EAllScenePrefabsNames.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");
























/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_9__["default"] {
    /**
     * 初始化
     */
    _init() {
        //初始化需要的ui控制器实例
        this.m_initEmptyScreenUICon = new _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_19__["default"]();
        this.m_initLoadUICon = new _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_20__["default"]();
        //设置路径
        for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_22__["_EAllScenePrefabsNames"]) {
            src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_11__["EKeyResName"].RootRes) + `${_i}/`); //注入预制体路径
        }
        //设置预制体场景对照
        src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_22__["_EAllScenePrefabsNames"]);
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
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_21__["BuildConfigTs"].getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [];
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_23__["_EAllExportSceneName"]) {
            sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_23__["_EAllExportSceneName"][_i]));
        }
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"]([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_6__["default"].BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_21__["BuildConfigTs"].getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__["default"].packLogLight('所有配置表内容：', _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_21__["BuildConfigTs"].getAllConfig()));
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
        this.m_initEmptyScreenUICon.Show();
    }
    //加载显示
    initLoad() {
        this.m_initEmptyScreenUICon.Hide(); //隐藏
        this.m_initEmptyScreenUICon = null; //清除引用
        //显示加载ui
        this.m_initLoadUICon.Show();
        //关闭白屏
        src_WhiteScreenT__WEBPACK_IMPORTED_MODULE_5__["default"].close();
    }
    /**
     * 加载进度
     * @param _i 进度值
     */
    _loadPlan(_i) {
        // console.log('游戏加载进度->', _i);
        if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
            this.m_initLoadUICon.setPlan(_i);
        }
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
        this.m_initLoadUICon.Hide(); //隐藏
        this.m_initLoadUICon = null; //清除引用
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
        console.log('打包测试66');
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
                'whiteScreen.png',
                'whiteScreen.json',
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
            Laya.Scene.open('whiteScreen.json', undefined, undefined, Laya.Handler.create(this, (_scene) => {
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
            queueMicrotask(() => {
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
_TConfig.Versions = "0.0.0.1";


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VGb250LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRU11c2ljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0TG9hZFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvQnVpbGRDb25maWdUcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL19TY2VuZU5vZGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3NjZW5lTmFtZS9fRUFsbEV4cG9ydFNjZW5lTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9Db25maWdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L0RhdGFUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L0xpYnJhcnlUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L090aGVyVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9QYWNrVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2hpdGVTY3JlZW5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25maWcvQ29uZmlnVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uc29sZS9Db25zb2xlQ29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUV4LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9EMk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0VVSUxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlQYWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0ZHVUlSb290TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9Sb290VUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL0QzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvR2xvYmFsRDNFbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvTm9kZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZU5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZURhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0RhdGFULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL01kNS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9PYmplY3RQcm94eVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RlYnVnL0Jhc2VEZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvR2FtZVQvR2FtZVBvb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL01haW4vQmFzZUluaXRMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvQ29tUmVzVXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRUtleVJlc05hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvS2V5UmVzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL1Jlc0xvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvVE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RzL0luc3RhbmNlVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvVXRpbHMvQXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvVXRpbHMvVjNVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvX1RDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7O0dBRUc7QUFDWSxNQUFNLFlBQVk7O0FBQzdCLGFBQWE7QUFDQyxpQkFBSSxHQUFHO0lBQ2pCLFVBQVU7SUFDVixvQkFBb0IsRUFBRSxLQUFLO0NBQzlCLENBQUM7Ozs7Ozs7Ozs7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QUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcs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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsIi8qKlxyXG4gKiDluLjph4/phY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9Db25zdENvbmZpZyB7XHJcbiAgICAvKiogZmd1aeebuOWFsyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJID0ge1xyXG4gICAgICAgIC8qKiDljIXlkI7nvIAgKi9cclxuICAgICAgICBwYWNrYWdlRmlsZUV4dGVuc2lvbjogJ2JpbicsXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCIuL19NYWluQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfR2FtZUNvbmZpZyB7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5ri45oiP5rWL6K+VICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmR2FtZVRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv5rWL6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/osIPor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZEZWJ1ZzogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiB0cnVlO1xyXG59IiwiLyoqXHJcbiAqIOmhueebruacgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01haW5Db25maWcge1xyXG4gICAgLyoqIOa4uOaIj+aJgOWxnuWboumYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZWFtOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP5ZCN5a2X77yM5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTmFtZTogc3RyaW5nID0gJ0xheWFNaW5pR2FtZSc7XHJcbiAgICAvKiog5Lit5paH5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpITmFtZTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+ivtOaYjiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeHBsYWluOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIj++8jOivtOaYjuOAgic7XHJcbiAgICAvKiog5pWw5o2u54mI5pysIOWPr+S7peW4puWtl+avjeS9huaYr+WwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZlcnNpb25zOiBzdHJpbmcgPSAnMC4wLjAuMSc7XHJcbiAgICAvKiog5piv5ZCm5LiK57q/5Li6ZmFsc2XliJnmmK/lvIDlj5Hnjq/looMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT25MaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb21tb25CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ29tIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tcTNuZzl3XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ29tIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUNvbT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUNvbVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZGJtaTEzXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDdXN0b21zTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUVuZCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWxheGQxOVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUVuZCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVFbmQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVFbmRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVMb2FkaW5nIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fc2hhZGU6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMW9cIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUxvYWRpbmc+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXN5dGE5ZlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZU1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZU1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQYXVzZSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E1Z1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBhdXNlIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBhdXNlPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGF1c2VcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVQbGF5IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXJcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQbGF5IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVBsYXk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQbGF5XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU2V0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTR1XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU2V0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVNldD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVNldFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVN0YXJ0IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tZzdhMXZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTdGFydCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTdGFydD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVN0YXJ0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9VSUJ1dHRvbjpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fVUk6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Rlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Rlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fZGF0YVRlc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fdGVzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1vOWpzOXhcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX1VJQnV0dG9uID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9VSSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fdGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX190ZXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fbG9va1ZBZDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fbG9va1ZBZFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19sb29rVkFkOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3NoYXJlOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaGFyZVRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaGFyZTpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX19zaG93VG9hc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tdDFwdzl5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RQbGF0Zm9ybVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9sb29rVkFkID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb29rVkFkVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fX2xvb2tWQWQgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fc2hhcmUgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3NoYXJlVGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fX3NoYXJlID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fX3Nob3dUb2FzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWg2NmU5elwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0VUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0VUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1BHYW1lU2V0IGZyb20gXCIuL0ZHVUlfUEdhbWVTZXRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQYXVzZSBmcm9tIFwiLi9GR1VJX1BHYW1lUGF1c2VcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGxheSBmcm9tIFwiLi9GR1VJX1BHYW1lUGxheVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVN0YXJ0IGZyb20gXCIuL0ZHVUlfUEdhbWVTdGFydFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RVSSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFVJXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lRW5kIGZyb20gXCIuL0ZHVUlfUEdhbWVFbmRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdE1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVDb20gZnJvbSBcIi4vRkdVSV9QR2FtZUNvbVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZU1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZU1haW5cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTZXQuVVJMLCBGR1VJX1BHYW1lU2V0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGF1c2UuVVJMLCBGR1VJX1BHYW1lUGF1c2UpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUxvYWRpbmcuVVJMLCBGR1VJX1BHYW1lTG9hZGluZyk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBsYXkuVVJMLCBGR1VJX1BHYW1lUGxheSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVN0YXJ0LlVSTCwgRkdVSV9QR2FtZVN0YXJ0KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFVJLlVSTCwgRkdVSV9QR2FtZVRlc3RVSSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUVuZC5VUkwsIEZHVUlfUEdhbWVFbmQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0TWFpbi5VUkwsIEZHVUlfUEdhbWVUZXN0TWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUNvbS5VUkwsIEZHVUlfUEdhbWVDb20pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVNYWluLlVSTCwgRkdVSV9QR2FtZU1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0uVVJMLCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9FbXB0eVNjcmVlblVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovLzdrdHppYjhvcTNuZzBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfRW1wdHlTY3JlZW5VSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfRW1wdHlTY3JlZW5VST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdEVtcHR5U2NyZWVuXCIsIFwiRW1wdHlTY3JlZW5VSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfRW1wdHlTY3JlZW5VSSBmcm9tIFwiLi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9FbXB0eVNjcmVlblVJLlVSTCwgRkdVSV9FbXB0eVNjcmVlblVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9pbml0TG9hZFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIG1fcHJvZ3Jlc3M6Zmd1aS5HUHJvZ3Jlc3NCYXI7XHJcblx0cHVibGljIG1fbG9hZGluZ19wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sb2dvOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWE6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xheWFfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9nYW1lX2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9uM29lZHBwNm5paHIwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX2luaXRMb2FkVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX2luaXRMb2FkVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRMb2FkXCIsIFwiaW5pdExvYWRVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9sb2FkaW5nX3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xvZ28gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3RleHRfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YSA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg1KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV90ZXh0X3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3RleHRfbGF5YV92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV90ZXh0X2dhbWVfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcIi4vRkdVSV9pbml0TG9hZFVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TG9hZEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9pbml0TG9hZFVJLlVSTCwgRkdVSV9pbml0TG9hZFVJKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9UZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9oeHU0emM5ZGlvbzgwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1Rlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9UZXN0TWFpbj4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiX1Rlc3RcIiwgXCJUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9UZXN0TWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfVGVzdE1haW4uVVJMLCBGR1VJX1Rlc3RNYWluKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQmFzZUNvbmZpZ1Byb3h5IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuLi9fY29uZmlnL19TY2VuZU5vZGVDb25maWdcIjtcclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuemFjee9ruihqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQENvbmZpZ1QuRGVjb3JhdGVDb25maWdQcm94eShfU2NlbmVOb2RlQ29uZmlnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGVDb25maWdQcm94eSBleHRlbmRzIEJhc2VDb25maWdQcm94eTxfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTY2VuZU5vZGVDb25maWdQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4dpZOiOt+WPluaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZCBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlJZEdldERhdGEoX2lkOiBudW1iZXIpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gX2lkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5YWz5Y2h5ZCN5a2X6I635Y+W5YWz5Y2h5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YWz5Y2h5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBfbmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluaVsOaNruWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlTY2VuZU5hbWVHZXREYXRhKF9uYW1lOiBzdHJpbmcpOiBfU2NlbmVOb2RlQ29uZmlnLkRhdGFUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNjZW5lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbnN0UHJveHkgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9CYXNlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9UZXN0Q29uc3QgfSBmcm9tIFwiLi4vX2NvbmZpZy9fVGVzdENvbnN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5bi46YeP6YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9UZXN0Q29uc3QpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RDb25zdFByb3h5IGV4dGVuZHMgQmFzZUNvbnN0UHJveHk8X1Rlc3RDb25zdC5EYXRhVHlwZT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0Q29uc3RQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IE1haW5EYXRhUHJveHkgfSBmcm9tIFwiLi9NYWluRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNldERhdGFQcm94eSB9IGZyb20gXCIuL1NldERhdGFQcm94eVwiO1xyXG5pbXBvcnQgU2hvcnREYXRhUHJveHkgZnJvbSBcIi4vU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2lnbkRhdGFQcm94eSB9IGZyb20gXCIuL1NpZ25EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgVGVzdERhdGFQcm94eSB9IGZyb20gXCIuL1Rlc3REYXRhUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7nrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaJgOacieaVsOaNrlxyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBNYWluRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2V0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2lnbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNob3J0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBNYWluRGF0YSBmcm9tIFwiLi90eXBlL01haW5EYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoTWFpbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBNYWluRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PE1haW5EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE1haW5EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2V0RGF0YSBmcm9tIFwiLi90eXBlL1NldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTZXREYXRhKVxyXG5leHBvcnQgY2xhc3MgU2V0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNldERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2V0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlU2hvcnREYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNob3J0RGF0YSBmcm9tIFwiLi90eXBlL1Nob3J0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNob3J0RGF0YSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhUHJveHkgZXh0ZW5kcyBCYXNlU2hvcnREYXRhUHJveHk8U2hvcnREYXRhPiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaG9ydERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaWduRGF0YSBmcm9tIFwiLi90eXBlL1NpZ25EYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2lnbkRhdGEpXHJcbmV4cG9ydCBjbGFzcyBTaWduRGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFNpZ25EYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNpZ25EYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVGVzdERhdGEgZnJvbSBcIi4vdHlwZS9UZXN0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFRlc3REYXRhKVxyXG5leHBvcnQgY2xhc3MgVGVzdERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxUZXN0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDpn7PmlYggKi9cclxuICAgIGlmT3BlblNvdW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKbmiZPlvIDog4zmma/pn7PkuZAgKi9cclxuICAgIGlmT3Blbk11c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/pnIfliqggKi9cclxuICAgIGlmT3BlblZpYnJhdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7IH0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog562+5Yiw5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmluZzogc3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgICBib29sZWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2JqZWN0OiB7XHJcbiAgICAgICAgYTogbnVtYmVyLFxyXG4gICAgICAgIGI6IHN0cmluZyxcclxuICAgICAgICBjOiBib29sZWFuXHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICBiOiAnYicsXHJcbiAgICAgICAgICAgIGM6IHRydWUsXHJcbiAgICAgICAgfTtcclxufSIsImltcG9ydCBCYXNlRGVidWcgZnJvbSBcInNyYy9fVC9EZWJ1Zy9CYXNlRGVidWdcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG4vKipcclxuICog6Ieq5a6a5LmJ6LCD6K+V5a+56LGhXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21EZWJ1ZyBleHRlbmRzIEJhc2VEZWJ1ZyB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDdXN0b21EZWJ1ZztcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGEvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVJbml0TG9hZCBmcm9tIFwiLi9NYWluL0dhbWVJbml0TG9hZFwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXIgZnJvbSBcIi4vVUlDb24vVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBUZXN0TWFpbiBmcm9tIFwiLi9fdGVzdC9UZXN0TWFpblwiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW4ge1xyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgICAgIC8v6I635Y+W5ri45oiP5Yid5aeL5YyW5Yqg6L295a6e5L6LXHJcbiAgICAgICAgbGV0IF9nYW1lSW5pdExvYWQ6IEdhbWVJbml0TG9hZCA9IG5ldyBHYW1lSW5pdExvYWQoKTtcclxuICAgICAgICAvL+W8gOWni+WKoOi9vVxyXG4gICAgICAgIF9nYW1lSW5pdExvYWQubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdExvYWRDb20oKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckdhbWUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/liqDovb3lrozmiJBcclxuICAgIHByaXZhdGUgZ2FtZUluaXRMb2FkQ29tKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE5Liq566h55CG5ZmoXHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+WcuuaZr+euoeeQhuWZqFxyXG4gICAgICAgIFVJQ29uTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7Ly91aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL+aVsOaNrueuoeeQhuWZqFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgcHJpdmF0ZSBlbnRlckdhbWUoKSB7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn6L+b5YWl5ri45oiPJykpO1xyXG4gICAgICAgIC8vIC8qKlxyXG4gICAgICAgIC8vIFRPRE8g6L+b5YWl5rWL6K+V5qih5Z2XXHJcbiAgICAgICAgVGVzdE1haW4uaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvLyAgKi9cclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lQ29tbW9uQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lQ29tbW9uL0dhbWVDb21tb25CaW5kZXJcIjtcclxuaW1wb3J0IEdhbWVNYWluQmluZGVyIGZyb20gXCJzcmMvRkdVSS9HYW1lTWFpbi9HYW1lTWFpbkJpbmRlclwiO1xyXG5pbXBvcnQgSW5pdEVtcHR5U2NyZWVuQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0RW1wdHlTY3JlZW4vSW5pdEVtcHR5U2NyZWVuQmluZGVyXCI7XHJcbmltcG9ydCBJbml0TG9hZEJpbmRlciBmcm9tIFwic3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXJcIjtcclxuaW1wb3J0IF9UZXN0QmluZGVyIGZyb20gXCJzcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlclwiO1xyXG5pbXBvcnQgV2hpdGVTY3JlZW5UIGZyb20gXCJzcmMvV2hpdGVTY3JlZW5UXCI7XHJcbmltcG9ydCBDb25maWdULCB7IElCYXNlQ29uZmlnQ29udGFpbmVyIH0gZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IHsgRkdVSVBhY2sgfSBmcm9tIFwic3JjL19UL0QyL0ZHVUkvRkdVSVBhY2tcIjtcclxuaW1wb3J0IEJhc2VJbml0TG9hZCBmcm9tIFwic3JjL19UL01haW4vQmFzZUluaXRMb2FkXCI7XHJcbmltcG9ydCBDb21SZXNVcmwgZnJvbSBcInNyYy9fVC9SZXMvQ29tUmVzVXJsXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcInNyYy9fVC9SZXMvRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tIFwic3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5pbXBvcnQgeyBFRm9udCB9IGZyb20gXCIuLi9SZXNFL0VGb250XCI7XHJcbmltcG9ydCB7IEVNdXNpY3MgfSBmcm9tIFwiLi4vUmVzRS9FTXVzaWNzXCI7XHJcbmltcG9ydCB7IEVTb3VuZHMgfSBmcm9tIFwiLi4vUmVzRS9FU291bmRzXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdEVtcHR5U2NyZWVuVUlDb25cIjtcclxuaW1wb3J0IEluaXRMb2FkVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb25cIjtcclxuaW1wb3J0IHsgQnVpbGRDb25maWdUcyB9IGZyb20gXCIuLi9fY29uZmlnL0J1aWxkQ29uZmlnVHNcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuaW1wb3J0IHsgX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB9IGZyb20gXCIuLi9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lc1wiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbpnIDopoHnmoR1aeaOp+WItuWZqOWunuS+i1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG5ldyBJbml0RW1wdHlTY3JlZW5VSUNvbigpO1xyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbmV3IEluaXRMb2FkVUlDb24oKTtcclxuICAgICAgICAvL+iuvue9rui3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5hZGRSZXNVcmwoX2ksIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlJvb3RSZXMpICsgYCR7X2l9L2ApOy8v5rOo5YWl6aKE5Yi25L2T6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u6aKE5Yi25L2T5Zy65pmv5a+554WnXHJcbiAgICAgICAgRXNzZW50aWFsUmVzVXJscy5zZXRQcmVmYWJTY2VuZU5hbWVzKF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIGxldCBfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gW107XHJcbiAgICAgICAgLy/ojrflj5ZmZ3Vp5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9sb2FkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaVmZ3Vp55qE5omA5pyJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/lhYjnu5HlrprmiYDmnIl1aVxyXG4gICAgICAgIHRoaXMuRkdVSUJpbmRlcigpO1xyXG4gICAgICAgIC8v5Yqg6L29Zmd1aeWMhVxyXG4gICAgICAgIC8vIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRFbXB0eVNjcmVlbicsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRFbXB0eVNjcmVlbikpKTsvL+eZveWxj3Vp5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdExvYWQnLCAwLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdExvYWQpKSk7Ly/liqDovb3nlYzpnaLljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQmFnJykpOy8v5Y6f5YyF77yM6YCa5bi45Li66LWE5rqQ5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUNvbW1vbicpKTsvL+WFrOWFseWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ19UZXN0JykpOy8v5rWL6K+V5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZU1haW4nLCAwKSk7Ly/kuLvljIVcclxuICAgIH1cclxuICAgIC8vZmd1aee7keWumlxyXG4gICAgcHJpdmF0ZSBGR1VJQmluZGVyKCkge1xyXG4gICAgICAgIEluaXRFbXB0eVNjcmVlbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgSW5pdExvYWRCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVDb21tb25CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIF9UZXN0QmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lTWFpbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkZHVUnliqDovb3poblcclxuICAgIHByaXZhdGUgZ2V0RkdVSUxvYWRJdGVtcyhfbmFtZTogc3RyaW5nLCBfYXRsaWFzQ291bnQ/OiBudW1iZXIsIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKTogUmVzTG9hZEl0ZW0ge1xyXG4gICAgICAgIGxldCBfZmd1aVJlczogYW55W10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWMhei3r+W+hFxyXG4gICAgICAgIG5ldyBGR1VJUGFjayhFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSwgX2F0bGlhc0NvdW50KS5nZXRSZXNVUkwoX2ZndWlSZXMpO1xyXG4gICAgICAgIC8v5Yib5bu65Yqg6L296aG5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNMb2FkSXRlbShfZmd1aVJlcywgRVJlc0xvYWRNb2RlbC5EMiwgX25hbWUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOWMhVxyXG4gICAgICAgICAgICB0aGlzLmFkZEZHVUlQYWNrYWdlKF9uYW1lKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgLy/mt7vliqDljIVcclxuICAgIHByaXZhdGUgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHNjZW5lSnNvblJlcy5wdXNoKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwoX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a6577yaJywgQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKSkpO1xyXG4gICAgICAgIH0pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfphY3nva7ooajliqDovb3ov5vluqYnLCBpKTtcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIGxldCBfYXVkaW9zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVNdXNpY3MpIHtcclxuICAgICAgICAgICAgRU11c2ljc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5NdXNpY1VSTChFTXVzaWNzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFU291bmRzKSB7XHJcbiAgICAgICAgICAgIEVTb3VuZHNbX2ldICYmIF9hdWRpb3MucHVzaChDb21SZXNVcmwuU291bmRVUkwoRVNvdW5kc1tfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfYXVkaW9zLCBFUmVzTG9hZE1vZGVsLkQyLCAnYXVkaW8nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOaciemfs+aViOi1hOa6kO+8micsIF9hdWRpb3MpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgbGV0IF9mb250OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVGb250KSB7XHJcbiAgICAgICAgICAgIEVGb250W19pXSAmJiBfZm9udC5wdXNoKEVzc2VudGlhbFJlc1VybHMuRm9udFVSTChFRm9udFtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfZm9udCwgRVJlc0xvYWRNb2RlbC5EMiwgJ2ZvbnQnLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOacieWtl+S9k+i1hOa6kO+8micsIF9mb250KTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m95bGP5pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRFbXB0eVNjcmVlbigpIHtcclxuICAgICAgICAvL+aYvuekuueZveWxj3VpXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLlNob3coKTtcclxuICAgIH1cclxuICAgIC8v5Yqg6L295pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRMb2FkKCkge1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgLy/mmL7npLrliqDovb11aVxyXG4gICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLlNob3coKTtcclxuICAgICAgICAvL+WFs+mXreeZveWxj1xyXG4gICAgICAgIFdoaXRlU2NyZWVuVC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuLjmiI/liqDovb3ov5vluqYtPicsIF9pKTtcclxuICAgICAgICBpZiAodGhpcy5tX2luaXRMb2FkVUlDb24gJiYgdGhpcy5tX2luaXRMb2FkVUlDb24uaWZTaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbml0TG9hZFVJQ29uLnNldFBsYW4oX2kpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZENvbSgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgIH1cclxufSIsImltcG9ydCBDb21SZXNVcmwgZnJvbSBcInNyYy9fVC9SZXMvQ29tUmVzVXJsXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4uL0RhdGEvU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IEVNdXNpY3MgfSBmcm9tIFwiLi4vUmVzRS9FTXVzaWNzXCI7XHJcbmltcG9ydCB7IEVTb3VuZHMgfSBmcm9tIFwiLi4vUmVzRS9FU291bmRzXCI7XHJcbi8qKlxyXG4gKiDpn7PmlYjnrqHnkIbnsbtcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBBdWRpb01hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8v5b2T5YmN5pKt5pS+55qEYmdtXHJcbiAgICBwcml2YXRlIG1fb25CR006IExheWEuU291bmRDaGFubmVsO1xyXG5cclxuICAgIC8v5b2T5YmN5pKt5pS+55qE6Z+z5pWI5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fb25Tb3VuZExpc3Q6IFNldDxMYXlhLlNvdW5kQ2hhbm5lbD4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5qC55o2u5pWw5o2u6K6+572u6IOM5pmv6Z+z5LmQ5ZKM6Z+z5pWI5piv5ZCm6Z2Z6Z+zXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLnNvdW5kTXV0ZWQgPSAhU2V0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuaWZPcGVuU291bmQ7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLm11c2ljTXV0ZWQgPSAhU2V0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuaWZPcGVuTXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/pn7PkuZDlkozmiYDmnInpn7PmlYjmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBtdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaJgOaciemfs+aViO+8iOS4jeWMheaLrOiDjOaZr+mfs+S5kO+8ieaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IHNvdW5kTXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+S5kO+8iOS4jeWMheaLrOmfs+aViO+8ieaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IG11c2ljTXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjmmoLlgZxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXVzZVNvdW5kKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5omA5pyJ6Z+z5pWIXHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmfs+aViOe7p+e7rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc3VtZVNvdW5kKCkge1xyXG4gICAgICAgIC8v57un57ut5pKt5pS+5b2T5YmN5pKt5pS+55qE6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uU291bmRMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOiDjOaZr+mfs+S5kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vbkJHTSAmJiB0aGlzLmluc3RhbmNlLm1fb25CR00ucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pn7PmlYjpn7Pph49cclxuICAgICAqIEBwYXJhbSBfbiDpn7Pph48gMH4xXHJcbiAgICAgKiBAcGFyYW0gX3VybCDotYTmupDlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTb3VuZFZvbHVtZShfbjogbnVtYmVyID0gMSwgX3VybD86IHN0cmluZykge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNldFNvdW5kVm9sdW1lKF9uLCBfdXJsKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6IOM5pmv6Z+z5LmQ6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0gX24g6Z+z6YePIDB+MVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE11c2ljVm9sdW1lKF9uOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc2V0TXVzaWNWb2x1bWUoX24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z5pWI44CC6Z+z5pWI5Y+v5Lul5ZCM5pe25pKt5pS+5aSa5Liq44CCXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDpn7PmlYjlkI3lrZdcclxuICAgICAqIEBwYXJhbSBsb29wcyDlvqrnjq/mrKHmlbAsMOihqOekuuaXoOmZkOW+queOr+OAglxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlIOWjsOmfs+aSreaUvuWujOaIkOWbnuiwgyAgSGFuZGxlcuWvueixoeOAglxyXG4gICAgICogQHBhcmFtIHNvdW5kQ2xhc3Mg5L2/55So5ZOq5Liq5aOw6Z+z57G76L+b6KGM5pKt5pS+77yMbnVsbOihqOekuuiHquWKqOmAieaLqeOAglxyXG4gICAgICogQHBhcmFtIHN0YXJ0VGltZSDlo7Dpn7Pmkq3mlL7otbflp4vml7bpl7TjgIJcclxuICAgICAqIEByZXR1cm4gU291bmRDaGFubmVs5a+56LGh77yM6YCa6L+H5q2k5a+56LGh5Y+v5Lul5a+55aOw6Z+z6L+b6KGM5o6n5Yi277yM5Lul5Y+K6I635Y+W5aOw6Z+z5L+h5oGv44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5U291bmQobmFtZTogRVNvdW5kcywgbG9vcHM/OiBudW1iZXIsIGNvbXBsZXRlPzogbGF5YS51dGlscy5IYW5kbGVyLCBzb3VuZENsYXNzPzogbmV3ICgpID0+IGFueSwgc3RhcnRUaW1lPzogbnVtYmVyKTogbGF5YS5tZWRpYS5Tb3VuZENoYW5uZWwge1xyXG4gICAgICAgIGlmICghbmFtZSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX3NvdW5kOiBMYXlhLlNvdW5kQ2hhbm5lbCA9IExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChuYW1lLCBsb29wcywgY29tcGxldGUsIHNvdW5kQ2xhc3MsIHN0YXJ0VGltZSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uU291bmRMaXN0LmFkZChfc291bmQpO1xyXG4gICAgICAgIHJldHVybiBfc291bmQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuiDjOaZr+mfs+S5kOOAguiDjOaZr+mfs+S5kOWQjOaXtuWPquiDveaSreaUvuS4gOS4qu+8jOWmguaenOWcqOaSreaUvuiDjOaZr+mfs+S5kOaXtuWGjeasoeiwg+eUqOacrOaWueazle+8jOS8muWFiOWBnOatouS5i+WJjeeahOiDjOaZr+mfs+S5kO+8jOWGjeaSreaUvuW9k+WJjeeahOiDjOaZr+mfs+S5kOOAglxyXG4gICAgICogQHBhcmFtIG5hbWUg6IOM5pmv6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gbG9vcHMg5b6q546v5qyh5pWwLDDooajnpLrml6DpmZDlvqrnjq/jgIJcclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZSDlo7Dpn7Pmkq3mlL7lrozmiJDlm57osIMsY29tcGxldGUg57uT5p6c5Y+C5pWwIHRydWU6IOaSreaUvuWujOaIkCwgZmFsc2UvdW5kZWZpbmVkIO+8mnN0b3Dop6blj5HnmoRjb21wbGV0ZeOAglxyXG4gICAgICogQHBhcmFtIHN0YXJ0VGltZSDlo7Dpn7Pmkq3mlL7otbflp4vml7bpl7TjgIJcclxuICAgICAqIEByZXR1cm4gU291bmRDaGFubmVs5a+56LGh77yM6YCa6L+H5q2k5a+56LGh5Y+v5Lul5a+55aOw6Z+z6L+b6KGM5o6n5Yi277yM5Lul5Y+K6I635Y+W5aOw6Z+z5L+h5oGv44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5TXVzaWMobmFtZTogRU11c2ljcywgbG9vcHM/OiBudW1iZXIsIGNvbXBsZXRlPzogbGF5YS51dGlscy5IYW5kbGVyLCBzdGFydFRpbWU/OiBudW1iZXIpOiBsYXlhLm1lZGlhLlNvdW5kQ2hhbm5lbCB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfbXVzaWM6IExheWEuU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKG5hbWUsIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25CR00gPSBfbXVzaWM7XHJcbiAgICAgICAgcmV0dXJuIF9tdXNpYztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatoumfs+aViOaSreaUvuOAglxyXG4gICAgICogQHBhcmFtIHNvdW5kc05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wU291bmQoc291bmRzTmFtZTogRVNvdW5kcyk6IHZvaWQge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BTb3VuZChDb21SZXNVcmwuU291bmRVUkwoc291bmRzTmFtZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLog4zmma/pn7PmlYjmkq3mlL7jgIJcclxuICAgICAqIEBwYXJhbSBtdXNpY05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wTXVzaWMobXVzaWNOYW1lOiBFTXVzaWNzKTogdm9pZCB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcFNvdW5kKENvbVJlc1VybC5NdXNpY1VSTChtdXNpY05hbWUpKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlrZfkvZPotYTmupDmnprkuL4gKOS8mumihOWKoOi9vSlcclxuICogISDlv4XpobvmmK/lrZfnrKbkuLLvvIzkuI3og73mmK/mlbDlrZflkKbliJnkvJrliqDkuIrlj43lsITlsZ7mgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIEVGb250IHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6IOM5pmv6Z+z5LmQICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFTXVzaWNzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6Z+z5pWIICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU291bmRzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8v6Z+z5pWIXHJcbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcInNyYy9fVC9EMy9zY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/nrqHnkIblmahcclxuICog566h55CG5Zy65pmv77yM6I635Y+W5Zy65pmv77yM54S25ZCO6YCa6L+H5Zy65pmv5a6e5L6L5p6E5bu65Zy65pmv5Lit5a+56LGh55qE6IqC54K5XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKiog5Zy65pmv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVMaXN0OiB7XHJcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBTY2VuZSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluWcuuaZr1xyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmU8UyBleHRlbmRzIFNjZW5lPihfbmFtZTogc3RyaW5nKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdIGFzIFM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhajpg6jlnLrmma9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBfbmFtZSA9IF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gPSBuZXcgU2NlbmUoX25hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy/moLnmja7kuI3lkIznmoTlnLrmma/lrp7kvovljJbkuI3lkIznmoTnsbtcclxuICAgICAgICAgICAgc3dpdGNoIChfbmFtZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbk1hbmFnZXIgZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyUHJveHkgZnJvbSBcIi4vVUlDb25NYW5hZ2VyUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlcjxVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVUlDb25NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcInNyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW5cIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuLyoqXHJcbiAqIOa1i+ivleS4u+mhtemdouaOp+WItuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RNYWluVUlDb24gZXh0ZW5kcyBCYXNlU2luZ2xlVUlDb248RkdVSV9UZXN0TWFpbj4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogX1Rlc3RNYWluVUlDb247XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9UZXN0TWFpbjtcclxufSIsImltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICog55m95bGPdWnmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfRW1wdHlTY3JlZW5VST4ge1xyXG4gICAgLyoqIFVJ5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9FbXB0eVNjcmVlblVJO1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVNpbmdsZVVJQ29uIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlU2luZ2xlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRVSUNvbiBleHRlbmRzIEJhc2VTaW5nbGVVSUNvbjxGR1VJX2luaXRMb2FkVUk+IHtcclxuICAgIC8qKiBVSSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfaW5pdExvYWRVSTtcclxuXHJcbiAgICAvL+aYvuekuuWbnuiwg1xyXG4gICAgcHJvdGVjdGVkIF9PblNob3coKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGlzLnVpLm1fdGV4dF9sb2dvLnRleHQgPSBfTWFpbkNvbmZpZy5aSE5hbWU7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfdi50ZXh0ID0gX01haW5Db25maWcuVmVyc2lvbnM7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIHRoaXMudWkubV90ZXh0X2V4cGxhaW4udGV4dCA9IF9NYWluQ29uZmlnLlRlYW07XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfbGF5YV92LnRleHQgPSBMYXlhLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIF9pICo9IDEwMDtcclxuICAgICAgICB0aGlzLnVpLm1fcHJvZ3Jlc3MudmFsdWUgPSBfaTtcclxuICAgICAgICB0aGlzLnVpLm1fbG9hZGluZ19wcm9ncmVzcy50ZXh0ID0gTWF0aC5mbG9vcihfaSkgKyAnICUnO1xyXG4gICAgfVxyXG59IiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbmZpZyB9IGZyb20gXCIuL19UZXN0Q29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xuXG4vKipcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXG4qICEg6Ieq5Yqo5a+85Ye6XG4qL1xuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieeahOmFjee9ruihqOWGheWuuVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcbiAgICAgICAgbGV0IGNvbmZpZ3M6IGFueVtdID0gW107XG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uc3QpO1xuICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICB9XG59XG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDlhbPljaFpZFvlv4XopoFdICovXG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgLyoqIOWFs+WNoeWQjeWtl++8jOWPr+S7pemAmui/h+WQjeWtl+iOt+WPluWFs+WNoeaVsOaNriAqL1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xuICAgICAgICBzY2VuZTogc3RyaW5nO1xuICAgICAgIC8qKiDoioLngrnlkI3lrZfliJfooaggKi9cbiAgICAgICAgbm9kZU5hbWU6IHN0cmluZztcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdTY2VuZU5vZGVDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25maWcgY29uZmln6YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDmlbDlgLzvvIzkuI3nrqHku4DkuYjlgLzvvIzpg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgbjogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLvvIzkuI3nrqHmmK/ku4DkuYjlgLzvvIzmnIDlkI7pg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzvvIzkuI3nrqHku4DkuYjlgLzpg73kvJrovazluIPlsJTlgLwgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9UZXN0Q29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbmZpZy5qc29uJztcbn1cbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfVGVzdENvbnN0IGNvbnN06YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uc3Qge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbnN0JztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMiAqL1xuICAgICAgICBuMjogbnVtYmVyO1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UzICovXG4gICAgICAgIG4zOiBudW1iZXI7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlSAqL1xuICAgICAgICBzOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTIgKi9cbiAgICAgICAgczI6IHN0cmluZztcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMyAqL1xuICAgICAgICBzMzogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMSAqL1xuICAgICAgICBiMjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMiAqL1xuICAgICAgICBiMzogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI0OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UzICovXG4gICAgICAgIGI1OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U0ICovXG4gICAgICAgIGI2OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U1ICovXG4gICAgICAgIGI3OiBib29sZWFuO1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UgKi9cbiAgICAgICAgbzogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UxICovXG4gICAgICAgIG8yOiBhbnk7XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlTIgKi9cbiAgICAgICAgbzM6IGFueTtcbiAgICB9XG4gICAgLyoqIGNvbnN05pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhOiBfVGVzdENvbnN0LkRhdGFUeXBlID0gbnVsbDtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbnN0Lmpzb24nO1xufVxuICAgICIsIi8qKlxyXG4gKiDmiYDmnInlnLrmma/lr7nlupTnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB7XHJcbiAgICBQcmVmYWIgPSAnQEN1YmVAQFNwaGVyZUAnLFxyXG5cclxufVxyXG4vLyIsIi8qKlxyXG4gKiDmiYDmnInlr7zlh7rlnLrmma/lkI3lrZdcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxFeHBvcnRTY2VuZU5hbWUge1xyXG4gICAgU2NlbmUgPSAnU2NlbmUnLFxuXHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGVDb25maWdQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvU2NlbmVOb2RlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IFRlc3RDb25zdFByb3h5IGZyb20gXCIuLi9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOa1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDb25maWdUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WcuuaZr+iKgueCuemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFNjZW5lTm9kZUNvbmZpZ1Byb3h5Lmluc3RhbmNlLmRhdGFMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5bi46YeP5rWL6K+V6YWN572u6KGo5YaF5a65Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coVGVzdENvbnN0UHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IFRlc3REYXRhUHJveHkgfSBmcm9tIFwiLi4vRGF0YS9UZXN0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBDdXN0b21EZWJ1ZyBmcm9tIFwiLi4vRGVidWcvQ3VzdG9tRGVidWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7mtYvor5XnsbtcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNrua1i+ivlScsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBDdXN0b21EZWJ1Zy5pbnN0YW5jZS5hZGRJdGVtKCdkYXRhVGVzdCcsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruiuvue9ruWbnuiwgycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDnu4Tooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuYXJyYXkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflr7nosaHlsZ7mgKfooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEub2JqZWN0KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCnIGEg6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCwgJ2EnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5VGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBMaWJyYXJ5VGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+aXtumXtOW3peWFtycsIGRheWpzKCcyMDIwLzIvMjAnKSk7XHJcbiAgICAgICAgLy8gLy/ov5nph4zlj6rmnInmnKzlnLDorr/pl67miY3ooYzvvIznur/kuIrorr/pl67kvJrot6jln59cclxuICAgICAgICAvLyBheGlvcy5nZXQ8c3RyaW5nPignaHR0cDovL2JhaWR1LmNvbScpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+ivt+axguW3peWFt+ivt+axgueZvuW6pue9kemhtScsIHtcclxuICAgICAgICAvLyAgICAgICAgIHN0cmluZzogZGF0YS5kYXRhLFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyAvL1xyXG4gICAgICAgIC8vIGxldCBhID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDBdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdf6ZqP5py65omT5Lmx5pWw57uEJywgXy5zaHVmZmxlKGEpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX+maj+acuuWPluWAvOaVsOe7hCcsIF8uc2FtcGxlKGEsIDIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygncGFrb+W3peWFtycsIHR5cGVvZiBwYWtvKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ2F4aW9z5bel5YW3JywgdHlwZW9mIGF4aW9zKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdGhlclRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogT3RoZXJUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2tUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFBhY2tUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aJk+WMhea1i+ivlTY2Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSBcIi4uL1NjZW5lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgX1Rlc3RNYWluVUlDb24gZnJvbSBcIi4uL1VJQ29uL190ZXN0L19UZXN0TWFpblVJQ29uXCI7XHJcbmltcG9ydCBDb25maWdUZXN0IGZyb20gXCIuL0NvbmZpZ1Rlc3RcIjtcclxuaW1wb3J0IERhdGFUZXN0IGZyb20gXCIuL0RhdGFUZXN0XCI7XHJcbmltcG9ydCBMaWJyYXJ5VGVzdCBmcm9tIFwiLi9MaWJyYXJ5VGVzdFwiO1xyXG5pbXBvcnQgT3RoZXJUZXN0IGZyb20gXCIuL090aGVyVGVzdFwiO1xyXG5pbXBvcnQgUGFja1Rlc3QgZnJvbSBcIi4vUGFja1Rlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XkuLvohJrmnKxcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RNYWluIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3RNYWluO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgLy/mnoTlu7pTY2VuZeWcuuaZr+S4i+eahGRlYnVn6IqC54K5XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmdldFNjZW5lKCdTY2VuZScpXHJcbiAgICAgICAgICAgIC5nZXRTY2VuZU5vZGUoJ2RlYnVnJylcclxuICAgICAgICAgICAgLmFzeW5jQnVpbGQoKVxyXG4gICAgICAgICAgICAudGhlbigobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeWcuuaZrycsIG5vZGUuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeiKgueCuScsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy/kuLror6XlnLrmma/orr7nva7njq/looNcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NlbmUuc2V0RW52aXJvbm1lbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mmL7npLrmtYvor5V1aVxyXG4gICAgICAgIF9UZXN0TWFpblVJQ29uLmluc3RhbmNlLlNob3coKTtcclxuICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIERhdGFUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/nsbvlupPmtYvor5VcclxuICAgICAgICBMaWJyYXJ5VGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v6YWN572u6KGo5rWL6K+VXHJcbiAgICAgICAgQ29uZmlnVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v5omT5YyF5rWL6K+VXHJcbiAgICAgICAgUGFja1Rlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+WFtuS7lua1i+ivlVxyXG4gICAgICAgIE90aGVyVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcbiAgICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6IHN0cmluZyA9IFwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOiBzdHJpbmcgPSBcImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lTWFpbiBmcm9tIFwiLi9HYW1lL0dhbWVNYWluXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFdoaXRlU2NyZWVuVCBmcm9tIFwiLi9XaGl0ZVNjcmVlblRcIjtcclxuaW1wb3J0IFRNYWluIGZyb20gXCIuL19UL1RNYWluXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdFx0Ly9cclxuXHRcdC8qKiDmraPlvI/lvIDlp4vvvIzliqDovb3nmb3lsY91aSAjMjhkZjk5ICovXHJcblx0XHRXaGl0ZVNjcmVlblQubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHQvL+ahhuaetuWFpeWPo1xyXG5cdFx0XHRuZXcgVE1haW4oKTtcclxuXHRcdFx0Ly/miZPlvIDnmb3lsY9cclxuXHRcdFx0V2hpdGVTY3JlZW5ULm9wZW4oKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHQvL+a4uOaIj+WFpeWPo1xyXG5cdFx0XHRcdG5ldyBHYW1lTWFpbigpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTsiLCIvKipcclxuICog55m95bGP5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZVNjcmVlblQge1xyXG4gICAgLyoqIOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9zY2VuZTogTGF5YS5TY2VuZTtcclxuICAgIHByaXZhdGUgc3RhdGljIG1fYmc6IExheWEuU3ByaXRlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZChbXHJcbiAgICAgICAgICAgICAgICAnd2hpdGVTY3JlZW4ucG5nJyxcclxuICAgICAgICAgICAgICAgICd3aGl0ZVNjcmVlbi5qc29uJyxcclxuICAgICAgICAgICAgXSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5omT5byA55m95bGPdWlcclxuICAgICAgICAgICAgTGF5YS5TY2VuZS5vcGVuKCd3aGl0ZVNjcmVlbi5qc29uJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKF9zY2VuZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lID0gX3NjZW5lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2JnID0gdGhpcy5tX3NjZW5lLmdldENoaWxkQnlOYW1lKCdiZycpIGFzIExheWEuU3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAvL+ebkeWQrOWxj+W5leaUueWPmOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVWaWV3KTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5MYXRlcigpLnRoZW4ocik7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOS5i+WQjueahOWbnuiwg++8jOWPr+S7peWcqOatpOWKoOi9veWIhuWMhVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcGVuTGF0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xvc2UoKSB7XHJcbiAgICAgICAgLy/liKDpmaTlnLrmma9cclxuICAgICAgICB0aGlzLm1fc2NlbmUgJiYgdGhpcy5tX3NjZW5lLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubV9iZyA9IG51bGw7XHJcbiAgICAgICAgLy/lhbPpl63nm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOinhuWbvlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgIGxldCBfd2lkdGg6IG51bWJlciA9IExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IExheWEuc3RhZ2UuaGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5oZWlnaHQgPSBfaGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2JnLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9iZy5oZWlnaHQgPSBfaGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUJhc2VDb25maWdDb250YWluZXIsIElDb25maWdDb250YWluZXIsIElDb25zdENvbnRhaW5lciB9IGZyb20gXCIuL0NvbmZpZ1RcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmNsYXNzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjeaJp+ihjCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWIOS9v+eUqOaXtuimhuebllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ+aVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbmZpZ1Byb3h5PERhdGE+IGV4dGVuZHMgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElDb25maWdDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja7liJfooahcclxuICAgIHByb3RlY3RlZCBtX2RhdGFMaXN0OiBEYXRhW107XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNruWIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhTGlzdCgpOiBEYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YUxpc3QgPSB0aGlzLmNvbmZpZ1RlbXBsYXRlLmRhdGFzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uc3TmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uc3RQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQ29uc3RDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja5cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmNICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5jb25maWdUZW1wbGF0ZS5kYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29tL0lDb25maWdEYXRhXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCIuLi9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiDoo4XppbDphY3nva7ooajku6PnkIZcclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlQ29uZmlnUHJveHkoX2NvbmZpZzogSUJhc2VDb25maWdDb250YWluZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6YWN572u6KGo5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuY29uZmlnVGVtcGxhdGUgPSBfY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uumFjee9ruihqOWIl+ihqFxyXG4gICAgICog5Y+q5p6E5bu677yM5LiN5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZ3Mg6YWN572u6KGo5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQnVpbGRDb25maWdzKF9jb25maWdzOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcltdKSB7XHJcbiAgICAgICAgbGV0IF91cmw6IHN0cmluZztcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfY29uZmlncykge1xyXG4gICAgICAgICAgICBfdXJsID0gRXNzZW50aWFsUmVzVXJscy5Db25maWdKc29uVVJMKF9vLmZpbGVOYW1lKTtcclxuICAgICAgICAgICAgLy/loavlhYXmlbDmja5cclxuICAgICAgICAgICAgc3dpdGNoIChfby50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uZmlnQ29udGFpbmVyKS5kYXRhcyA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25zdENvbnRhaW5lcikuZGF0YSA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahqc29u5pWw5o2uXHJcbiAgICAgKiDvvIHms6jmhI/vvIzojrflj5bkuobor6XotYTmupDor6XotYTmupDlsLHkvJrooqvliKDpmaTmjolcclxuICAgICAqIEBwYXJhbSBfdXJsIOmFjee9ruihqOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0pzb25EYXRhKF91cmw6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy/ojrflj5botYTmupBcclxuICAgICAgICBsZXQgY29uZmlnRGF0YTogSUNvbmZpZ0RhdGEgPSBSZXNMb2FkLkdldFJlcyhfdXJsLCB0cnVlKTtcclxuICAgICAgICAvL+a4heeQhui1hOa6kOe8k+WtmOWPquS9v+eUqOS4gOasoVxyXG4gICAgICAgIFJlc0xvYWQuQ2xlYXJSZXMoX3VybCk7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInljovnvKlcclxuICAgICAgICBpZiAoY29uZmlnRGF0YS56aXApIHtcclxuICAgICAgICAgICAgLy/op6PljotcclxuICAgICAgICAgICAgbGV0IF90aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25maWdEYXRhLmRhdGEgPSBKU09OLnBhcnNlKHBha28uaW5mbGF0ZShjb25maWdEYXRhLmRhdGEsIHsgdG86ICdzdHJpbmcnIH0pKTtcclxuICAgICAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgICAgIC8v5Yik5pat6Kej5Y6L5pe26Ze05beuXHJcbiAgICAgICAgICAgIGlmIChfdGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6YWN572u6KGo6Kej5Y6L5pe26Ze06L+H6ZW/77yM5Y+v6IO95piv6YWN572u6KGo5paH5Lu26L+H5aSnLT4nLCBfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gY29uZmlnRGF0YS5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G76YWN572u6KGo5a655Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIHJlYWRvbmx5IGZpbGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25maWcg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWdDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2u5YiX6KGoICovXHJcbiAgICBkYXRhczogYW55W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25zdCDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0Q29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YTogYW55O1xyXG59IiwiLyoqXHJcbiAqIOaJk+WNsOWPsOW4uOeUqOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUNvbnN0IHtcclxuXHJcbiAgICAvKiog5YWs5YWx5qC35byPICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgcHVibGljU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmma7pgJrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnIzlCQTRCNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDovbvmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ0xpZ2h0U3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzc3NmQ4YScsICcjRUJFQkVCJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOitpuWRiua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyblN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM1YzZlMDYnLCAnI2ZmYTkzMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDplJnor6/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVycm9yU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjZWMwMTAxJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiJDlip/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvbVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2FkZTQ5OCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagt+W8j1xyXG4gICAgICogQHBhcmFtIF9jb2xvciDlrZfkvZPpopzoibJcclxuICAgICAqIEBwYXJhbSBfYmdDb2xvciDog4zmma/popzoibJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdHlsZShfY29sb3I6IHN0cmluZywgX2JnQ29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke19jb2xvcn07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke19iZ0NvbG9yfTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICBgKyB0aGlzLnB1YmxpY1N0eWxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlQ29uc3QgZnJvbSBcIi4vQ29uc29sZUNvbnN0XCI7XHJcblxyXG4vKipcclxuICog5omT5Y2w5Y+w5omp5bGVXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlRXgge1xyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xkv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc3R5bGUg5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX3BhciDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFjayhfc3R5bGU6IHN0cmluZywgX3BhcjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbJyVjJXMnLCBfc3R5bGUsICdsb2cnLCAuLi5fcGFyXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2coLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrovbvmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZ0xpZ2h0KC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ0xpZ2h0U3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XmiJDlip/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0NvbSguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5jb21TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheitpuWRiua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrV2FybiguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC53YXJuU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XplJnor6/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0Vycm9yKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmVycm9yU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogMmTnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQyTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIGZndWnmoLnnrqHnkIblmaggKi9cclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbiwgeyBJQmFzZVVJQ29uRGVmaW5lcyB9IGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+WNlemhtemdouaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNpbmdsZVVJQ29uPFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogX1VJIOexu+WeiyAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSTogSVVJQ3JlYXRlPFVJPjtcclxuXHJcbiAgICAvKiogdWnnsbvlnovliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogSUJhc2VVSUNvbkRlZmluZXMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiB1aSAqL1xyXG4gICAgcHJpdmF0ZSBtX3VpOiBVSTtcclxuXHJcbiAgICAvKiog6I635Y+WdWkgKi9cclxuICAgIHB1YmxpYyBnZXQgdWkoKTogVUkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7unVp5LmL5YmN55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgLy/orr7nva7ljZV1aVxyXG4gICAgICAgICAgICB0aGlzLl9VSXMgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDcmVhdGU6IHRoaXMuX1VJLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJRVgoKSB7XHJcbiAgICAgICAgdGhpcy5tX3VpID0gdGhpcy5fVUlzLmRlZmF1bHQudWkgYXMgVUk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvblByb3h5IGZyb20gXCIuL0Jhc2VVSUNvblByb3h5XCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuaW1wb3J0IEZHdWlEYXRhIGZyb20gXCIuL0ZHdWlEYXRhXCI7XHJcbmltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSVJvb3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBGR1VJVCBmcm9tIFwiLi9GR1VJVFwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5pbXBvcnQgUm9vdFVJQ29uIGZyb20gXCIuL1Jvb3RVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5o6n5Yi25Zmo5Z+657G7KOeUqOadpeaOp+WItlVJ55WM6Z2iKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uIGV4dGVuZHMgUm9vdFVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiog5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDojrflj5bllK/kuIDplK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IHN5bWJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwcml2YXRlIG1fcm9vdFVJOiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdFVJKCk6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yb290VUk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWcqOmakOiXj+aXtua4heeQhuaOiXVp77yM6buY6K6k5Li6dHJ1ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogVUnlsYLnuqfnsbvlnovvvIzlv4XpobvlnKjliJ3lp4vljJbml7borr7nva4gKi9cclxuICAgIHByb3RlY3RlZCBfbGF5ZXI6IEVVSUxheWVyID0gRVVJTGF5ZXIuUGFuZWw7XHJcblxyXG4gICAgLyoqIHVp5bGC57qnICovXHJcbiAgICBwdWJsaWMgZ2V0IGxheWVyKCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTaG93KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeS7o+eQhuWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3Byb3h5VUlMaXN0OiBTZXQ8QmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+PiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5hZGQoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5kZWxldGUoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLlNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn3Vp5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmRVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZW5kUHJveHkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7unVpXHJcbiAgICBwcml2YXRlIGNyZWF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJQmVmb3JlRXgoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsHVp5Yib5bu65Zmo5YiX6KGoIScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liJ3lp4vljJbmoLnoioLngrl1aVxyXG4gICAgICAgIHRoaXMubV9yb290VUkgPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmdldExheWVyVUkodGhpcy5fbGF5ZXIpLmFkZENoaWxkKHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gdGhpcy5tX3Jvb3RVSS5hZGRDaGlsZCh0aGlzLl9VSXNbX2ldLnVpQ3JlYXRlLmNyZWF0ZUluc3RhbmNlKCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9jcmVhdGVVSUVYKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMg5Y+q6IO95Zyo5omp5bGV5Lit5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7IH1cclxuICAgIC8qKiDliJvlu7rlrozmiJB1aeWQjueahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHsgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrox1aeWQjuWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWlcclxuICAgICAqIEBwYXJhbSBfbmFtZSB1aeWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+KF9uYW1lOiBzdHJpbmcpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJc1tfbmFtZV0udWkgYXMgVUk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU2hvd0JlZm9yZSguLi5wYXIpO1xyXG4gICAgICAgIGxldCBfaWZOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkgfHwgdGhpcy5tX3Jvb3RVSS5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu6dWlcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgICAgICBfaWZOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWIsOW9k+WJjeWxgue6p+mhtuWxguaYvuekulxyXG4gICAgICAgIEZHVUlULnNldFVJVG9wU2hvdyh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICAvL+aJi+WKqOabtOaWsOS4gOasoVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIC8v55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uU2hvdyhfaWZOZXcsIC4uLnBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2xlYXIg5piv5ZCm5riF55CGXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWFtuS7luWPguaVsO+8jOS8muS8oOWIsOmakOiXj+eahOWbnuiwg+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZShfaWZDbGVhcjogYm9vbGVhbiA9IHRoaXMuX2lmQ2xlYXIsIC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29uSGlkZUJlZm9yZShwYXIpO1xyXG4gICAgICAgIGlmIChfaWZDbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NlVUkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5bmtojnm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uSGlkZShfaWZDbGVhciwgcGFyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnooqvmuIXnkIbml7bnmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfZGlzcG9zZVVJKCkgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDlpKflsI8gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAvL+agueaNruWtkHVp5pC65bim55qE5pWw5o2u6YCC6YWN5bGP5bmV5aSn5bCPXHJcbiAgICAgICAgbGV0IF9kYXRhOiBGR3VpRGF0YTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSBMYXlhLnN0YWdlLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgX2RhdGEgPSB0aGlzLl9VSXNbX2ldLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghX2RhdGEgfHwgIV9kYXRhLmlmVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCAtIF9kYXRhLmxlZnQgLSBfZGF0YS5yaWdodCwgX2hlaWdodCAtIF9kYXRhLmJvdHRvbSAtIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoX2RhdGEubGVmdCwgX2RhdGEudG9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbt1aeaOp+WItuWZqOexu+Wei+aOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVVJQ29uRGVmaW5lcyB7XHJcbiAgICAvKiogdWnliJvlu7rlmaggKi9cclxuICAgIHVpQ3JlYXRlOiBJVUlDcmVhdGU8Zmd1aS5HQ29tcG9uZW50PjtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE/OiBGR3VpRGF0YTtcclxuICAgIC8qKiB1aSAqL1xyXG4gICAgdWk/OiBmZ3VpLkdDb21wb25lbnQ7XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIZ1aeaOp+WItuWZqFxyXG4gKiDlv4XpobvphY3lkIjku6PnkIblmajkvb/nlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXI8UHJveHkgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuICAgIC8qKiB1aeS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlQcm94eTogUHJveHk7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiDmoYbmnrbosIPnlKjvvIzkuI3og73nm7TmjqXosIPnlKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX19pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluS5i+WQjueahOajgOa1i1xyXG4gICAgcHJpdmF0ZSBfX2luaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyW566h55CG55qEdWnliJfooagnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3VpUHJveHkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJZ1aeS7o+eQhicpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS7o+eQhuWZqOS7o+eQhlxyXG4gICAgICAgICAgICB0aGlzLm1fdWlQcm94eS5zZXRQcm94eSh0aGlzLm1fdWlDb25MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1aSDmjqfliLblmajnrqHnkIblmajku6PnkIZcclxuICog6LSf6LSj5Luj55CGdWnmjqfliLblmajnrqHnkIblmajkuK3nmoTmjqfliLblmajvvIzpmLLmraLlvqrnjq/kvp3otZZcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDojrflj5blvZPliY3mmL7npLrnmoR1aSAqL1xyXG4gICAgcHVibGljIGdldCBvblNob3dVSSgpOiBCYXNlVUlDb25bXSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IEJhc2VVSUNvbltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W19pXS5pZlNob3cgJiYgX3VpQ29ucy5wdXNoKHRoaXMubV91aUNvbkxpc3RbX2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3VpQ29ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3VpTGlzdCB1aeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHkoX3VpTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLm1fdWlDb25MaXN0ID0gX3VpTGlzdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrnVp6ZSu5YC86I635Y+W5LiA5LiqdWlcclxuICAgICAqIEBwYXJhbSBfa2V5IHVp6ZSu5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSUNvbiBleHRlbmRzIEJhc2VVSUNvbj4oX2tleTogc3RyaW5nKTogVUlDb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWlDb25MaXN0W19rZXldIGFzIFVJQ29uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6dWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajntKLlvJXmiJbogIXntKLlvJXliJfooahcclxuICAgICAqIEBwYXJhbSBfaWZIaWRlT3RoZXJVSSDmmK/lkKbpmpDol4/lhbbku5Z1aSBbdHJ1ZV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdLCBfaWZIaWRlT3RoZXJVSTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZqQ6JeP5YW25LuWdWlcclxuICAgICAgICBpZiAoX2lmSGlkZU90aGVyVUkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdWlDb25zLmluY2x1ZGVzKF9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLkhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV91aUNvbkxpc3RbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol491aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOWunuS+i+aIluWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dICYmIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5b2T5YmN5pi+56S655qE5omA5pyJdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVBbGxVSSgpIHtcclxuICAgICAgICB0aGlzLm9uU2hvd1VJLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcbn0iLCIvKipcclxuICogVUnliIblsYIs5oyJ6aG65bqP5pi+56S6XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVUlMYXllciB7XHJcbiAgICAvKiog6IOM5pmv6aG16Z2iICovXHJcbiAgICBCZyA9ICdCZycsXHJcbiAgICAvKiog5Li755WM6Z2iICDmsLjov5zlrZjlnKggKi9cclxuICAgIE1haW4gPSBcIk1haW5cIixcclxuICAgIC8qKiDpnaLmnb8gIOWPr+S7peacieW+iOWkmiAqL1xyXG4gICAgUGFuZWwgPSBcIlBhbmVsXCIsXHJcbiAgICAvKiog5by556qXICovXHJcbiAgICBQb3B1cCA9IFwiUG9wdXBcIixcclxuICAgIC8qKiDpgZPlhbcgKi9cclxuICAgIFByb3AgPSAnUHJvcCcsXHJcbiAgICAvKiog5bCP6YOo5Lu2ICovXHJcbiAgICBUaXAgPSBcIlRpcFwiLFxyXG4gICAgLyoqIOaaguWBnCAqL1xyXG4gICAgUGF1c2UgPSAnUGF1c2UnLFxyXG4gICAgLyoqIOiuvue9riAqL1xyXG4gICAgU2V0ID0gJ1NldCcsXHJcbiAgICAvKiog5pyA6auYICovXHJcbiAgICBUb3AgPSAnVG9wJyxcclxuICAgIC8qKiDliqDovb3pobXpnaIgKi9cclxuICAgIExvYWRpbmcgPSAnTG9hZGluZycsXHJcbiAgICAvKiog5Y6f55SfICovXHJcbiAgICBOYXRpdmUgPSAnTmF0aXZlJyxcclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeWMheexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZHVUlQYWNrIHtcclxuICAgIC8vIOWMhei3r+W+hFxyXG4gICAgcHJpdmF0ZSBwYWNrUGF0aDogc3RyaW5nO1xyXG4gICAgLy8g5YW25LuW6LWE5rqQ5pWw6YePXHJcbiAgICBwcml2YXRlIGF0bGlhc0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ljIVcclxuICAgICAqIEBwYXJhbSBfcGFja1VybCDljIXlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfYXRsaWFzQ291bnQg5Zu+6ZuG5pWw6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9wYWNrVXJsOiBzdHJpbmcsIF9hdGxpYXNDb3VudDogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB0aGlzLnBhY2tQYXRoID0gX3BhY2tVcmw7XHJcbiAgICAgICAgdGhpcy5hdGxpYXNDb3VudCA9IF9hdGxpYXNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF91cmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzVVJMKF91cmxzKTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkMkRBc3luYyhfdXJscywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdXJscyDovpPlh7rmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlc1VSTCh1cmxzOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5Yqg5YWl5YyF5ZCNXHJcbiAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgJy4nICsgX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb24sIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9KTtcclxuICAgICAgICAvL+WKoOi9vee6ueeQhumbhlxyXG4gICAgICAgIGlmICh0aGlzLmF0bGlhc0NvdW50ID49IDApIHtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5hdGxpYXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczBfXCIgKyBpICsgXCIucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIEZHVUkg5qC5566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJUm9vdE1hbmFnZXIge1xyXG4gICAgLy9VSeWxgue6p3Vp5YiX6KGoXHJcbiAgICBwdWJsaWMgc3RhdGljIGxheWVyVUlMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogZmd1aS5HQ29tcG9uZW50IH07XHJcblxyXG4gICAgLy8g6I635Y+W5p+Q5LiA5bGCVUlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF5ZXJVSShsYXllclR5cGU6IEVVSUxheWVyKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyVUlMaXN0W2xheWVyVHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIOiuvue9ruWMheWQjeWQjue8gFxyXG4gICAgICAgIGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGZndWkuR1Jvb3QuaW5zdC5kaXNwbGF5T2JqZWN0KTtcclxuICAgICAgICAvL+a3u+WKoEZHVUnmoLnoioLngrnmjInpobrluo/mmL7npLpcclxuICAgICAgICB0aGlzLmxheWVyVUlMaXN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRVVJTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllclVJTGlzdFtFVUlMYXllcltfaV1dID0gZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKG5ldyBmZ3VpLkdDb21wb25lbnQoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBmZ3VpIOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVQge1xyXG4gICAgLyoqIHVp5bGC57qna2V5ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBVSUxheWVyS2V5OiBzeW1ib2wgPSBTeW1ib2woJ1VJTGF5ZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5bGC57qn77yM6Zmk5LqGZmd1aeagueeuoeeQhuWZqOWbnuiwg+eUqO+8jOWFtuS7lueahOWcsOaWueivt+S4jeimgeiwg+eUqFxyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEBwYXJhbSBfbGF5ZXIg5bGC57qnIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQsIF9sYXllcjogRVVJTGF5ZXIpIHtcclxuICAgICAgICBfdWlbdGhpcy5VSUxheWVyS2V5XSA9IF9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVp5bGC57qnXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHJldHVybnMgdWnlsYLnuqdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50KTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiBfdWlbdGhpcy5VSUxheWVyS2V5XSBhcyBFVUlMYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp6aG25bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlUb3BTaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlpKfnmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5tYXgoX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnlupXlsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSURvd25TaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlsI/nmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5taW4oX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgLSAxO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaguXVp5o6n5Yi25ZmoXHJcbiAqIOaJgOaciXVp5o6n5Yi25Zmo57G75Z6L57G75Z2H55Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSb290VUlDb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLpVSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNob3coLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmTmV3IOaYr+WQpuaWsOW7ulxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1VJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgSGlkZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZEZWxldGUg5piv5ZCm5Yig6ZmkXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxufSIsImltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAzZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiog5Yid5aeL5YyW5YWo5bGA546v5aKDICovXHJcbiAgICAgICAgR2xvYmFsRDNFbnZpcm9ubWVudC5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlhajlsYAzROeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRDNFbnZpcm9ubWVudCB7XHJcbiAgICAvKiogM2TlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fU2NlbmUzRDogTGF5YS5TY2VuZTNEO1xyXG4gICAgLyoqIOaRhOWDj+acuiAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9DYW1lcmE6IExheWEuQ2FtZXJhO1xyXG4gICAgLyoqIOeBr+WFiSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9MaWdodDogTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHJcbiAgICAvKiog6I635Y+WIDNk5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY2VuZTNEKCk6IExheWEuU2NlbmUzRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9TY2VuZTNEO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDmkYTlg4/mnLogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENhbWVyYSgpOiBMYXlhLkNhbWVyYSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9DYW1lcmE7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOeBr+WFiSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTGlnaHQoKTogTGF5YS5EaXJlY3Rpb25MaWdodCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9MaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMubV9TY2VuZTNELFxyXG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMubV9DYW1lcmEsXHJcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLm1fTGlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QpIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLm1fQ2FtZXJhID0gbmV3IExheWEuQ2FtZXJhO1xyXG4gICAgICAgIHRoaXMubV9MaWdodCA9IG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9DYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9MaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVBvb2wgZnJvbSBcInNyYy9fVC9HYW1lVC9HYW1lUG9vbFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFYzVXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9WM1V0aWxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0NvbmZpZywgSVByZWZhYnNEaWZmZXJDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDoioLngrnlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVUIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5piv6aKE5Yi25L2T6YWN572uXHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZyDphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlByZWZhYnNDb25maWcoX2NvbmZpZzogSU5vZGVDb25maWcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKF9jb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWUgJiYgdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiKgueCueaVsOaNruWIneWni+WMluiKgueCuVxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX3RhcmdldCDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlKF9zcHI6IExheWEuU3ByaXRlM0QsIF90YXJnZXQ6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3NwciwgX3RhcmdldCk7XHJcbiAgICAgICAgLy/orr7nva7lkI3lrZdcclxuICAgICAgICBfc3ByLm5hbWUgPSBfdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInlj5jmjaLnm7jlhbPnmoTlsZ7mgKdcclxuICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS9jee9rlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOS9jee9rlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9ruaXi+i9rFxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOaXi+i9rFxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIsIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7nvKnmlL5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTnvKnmlL5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSwgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/op6blj5Hnm5HlkKxcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgLy/orr7nva7lt67lvIJcclxuICAgICAgICBsZXQgX3ByZWZhYkNvbmZpZzogSVByZWZhYnNDb25maWcgPSBfdGFyZ2V0IGFzIElQcmVmYWJzQ29uZmlnO1xyXG4gICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYk5hbWUgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIsIF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4queyvueBteWSjOa6kOeyvueBteeahOW3ruW8glxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX2RpZmZlciDlt67lvILmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0RGlmZmVyKF9zcHI6IExheWEuU3ByaXRlM0QsIF9kaWZmZXI6IElQcmVmYWJzRGlmZmVyQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iuvue9ruW3ruW8gicsIF9zcHIsIF9kaWZmZXIpO1xyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5Li05pe25ZCR6YePXHJcbiAgICAgICAgbGV0IF9jZW50cmVWMzogTGF5YS5WZWN0b3IzID0gR2FtZVBvb2wuZ2V0VjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9kaWZmIG9mIF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIuZ2V0Q2hpbGRBdChfZGlmZi5pbmRleCkgYXMgTGF5YS5TcHJpdGUzRCwgX2RpZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5rqQ5Y+Y5o2iXHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm06IExheWEuVmVjdG9yM1tdID0gW0dhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCldO1xyXG4gICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLnBvc2l0aW9uLCBfdHJhbnNmb3JtWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0uZXVsZXIsIF90cmFuc2Zvcm1bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5zY2FsZSwgX3RyYW5zZm9ybVsyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnIl0cmFuc2Zvcm3lsZ7mgKdcclxuICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbiwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVswXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzFdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMl0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lm57mlLbkuLTml7blkJHph49cclxuICAgICAgICBHYW1lUG9vbC5yZWN5Y2xlVjMoLi4uW19jZW50cmVWMywgLi4uX3RyYW5zZm9ybV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gX3ByZWZhYnNOYW1lcyDovpPlh7rnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lczogc3RyaW5nW10sIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgLy/ljrvph41cclxuICAgICAgICAgICAgaWYgKCFfcHJlZmFic05hbWVzLmluY2x1ZGVzKF9wcmVmYWJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgX3ByZWZhYnNOYW1lcy5wdXNoKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm6L+Y5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlIOeItuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkTm9kZShfbm9kZTogTGF5YS5Ob2RlLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcsIF9wcmVmYWJzOiBJUHJlZmFic0dhdGhlcikge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/kuI3mmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgX3NwciA9IFJlc0xvYWQuR2V0UmVzKEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKF9wcmVmYWJOYW1lKSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0gPSBfcHJlZmFic1tfcHJlZmFiTmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIF9wcmVmYWJzW19wcmVmYWJOYW1lXS5wdXNoKF9zcHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIF9wcmVmYWJzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZUNvbmZpZywgSVNjZW5lQ29uZmlnIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuaW1wb3J0IElTY2VuZUVudmlyb25tZW50IGZyb20gXCIuL0lTY2VuZUVudmlyb25tZW50XCI7XHJcbmltcG9ydCBOb2RlVCBmcm9tIFwiLi9Ob2RlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuL1NjZW5lTm9kZVwiO1xyXG5pbXBvcnQgR2xvYmFsRDNFbnZpcm9ubWVudCBmcm9tIFwiLi9HbG9iYWxEM0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBBcnJheVV0aWxzIGZyb20gXCJzcmMvX1QvVXRpbHMvQXJyYXlVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZryDlrp7kvotcclxuICog5qC55o2u5oyH5a6a55qE5Zy65pmv6YWN572u6KGo5p6E5bu65Zy65pmvXHJcbiAqICog5Y+v5Lul57un5om/5q2k57G76Ieq5a6a5LmJ5Zy65pmvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgICAvKiog5Zy65pmv5ZCN5a2XICovXHJcbiAgICBwcm90ZWN0ZWQgX3NjZW5lTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKiDnjq/looMgKi9cclxuICAgIHByb3RlY3RlZCBtX2Vudmlyb25tZW50OiBJU2NlbmVFbnZpcm9ubWVudDtcclxuXHJcbiAgICAvKiog5Zy65pmv6YWN572u5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVDb25maWc6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJTm9kZUNvbmZpZyxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKiog5Zy65pmv6IqC54K55a6e5L6L57yT5a2YICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVOb2Rlc0NhY2hlOiBNYXA8c3RyaW5nW10sIFNjZW5lTm9kZVtdPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKiog5Zy65pmv5Lit5a2Y5Zyo55qEbm9kZeiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBtX29uU2NlbmVOb2RlczogU2V0PFNjZW5lTm9kZT4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+mFjee9riAqL1xyXG4gICAgcHVibGljIGdldCBzY2VuZUNvbmZpZygpOiBJU2NlbmVDb25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVDb25maWcgYXMgSVNjZW5lQ29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bnjq/looMgKi9cclxuICAgIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKTogSVNjZW5lRW52aXJvbm1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+W9k+WJjeWtmOWcqOeahOiKgueCueWIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBvblNjZW5lTm9kZXMoKTogU2NlbmVOb2RlW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tX29uU2NlbmVOb2Rlc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBfc2NlbmVOYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3NjZW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9zY2VuZU5hbWUgPSBfc2NlbmVOYW1lO1xyXG4gICAgICAgIC8v5qC55o2u5Zy65pmv5ZCN5a2X6K+75Y+W6YWN572u6KGo5L+h5oGvXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInliJ3lp4vljJblnLrmma/nmoTlkI3lrZfvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9kYXRhOiBJTm9kZUNvbmZpZ1tdID0gQ29uZmlnVC5nZXRDb25maWdKc29uRGF0YShFc3NlbnRpYWxSZXNVcmxzLlNjZW5lQ29uZmlnVVJMKHRoaXMuX3NjZW5lTmFtZSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZy5yb290KTtcclxuICAgICAgICBpZiAoX2RhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bmoLnoioLngrnkuIvnmoToioLngrlcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF9kYXRhLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lQ29uZmlnW19kYXRhW19pXS5uYW1lXSA9IF9kYXRhW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign6I635Y+W5Zy65pmv5pWw5o2u5aSx6LSlLT4nLCB0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7njq/looPvvIzpu5jorqTkuLrlhajlsYAzZOeOr+Wig++8jOWPr+S7peiHquWumuS5ieeOr+Wig1xyXG4gICAgICAgIHRoaXMubV9lbnZpcm9ubWVudCA9IEdsb2JhbEQzRW52aXJvbm1lbnQuRW52aXJvbm1lbnQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnphY3nva5cclxuICAgICAqIEBwYXJhbSBfbm9kZU5hbWUg6IqC54K55ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlQ29uZmlnKF9ub2RlTmFtZTogc3RyaW5nKTogSU5vZGVDb25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVDb25maWdbX25vZGVOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAgKiDojrflj5blnLrmma/oioLngrlcclxuICAgICAgICAgKiBAcGFyYW0gX25hbWUg6IqC54K55ZCN5a2X77yM5Y+v5Lul5aSa5Liq5LiA6LW35p6E5bu6XHJcbiAgICAgICAgICogQHBhcmFtIF9maW5kQ2FjaGUg5piv5ZCm5Zyo57yT5a2Y5Lit5p+l5om+IHRydWVcclxuICAgICAgICAgKiBAcGFyYW0gX2FkZENhY2hlIOaYr+WQpua3u+WKoOWIsOe8k+WtmCB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVOb2RlKF9uYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSwgX2ZpbmRDYWNoZTogYm9vbGVhbiA9IHRydWUsIF9hZGRDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBTY2VuZU5vZGUge1xyXG4gICAgICAgIGxldCBfbmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfbmFtZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKF9uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaCguLi5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWdbXSA9IFtdO1xyXG4gICAgICAgIF9uYW1lcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlQ29uZmlnLnB1c2godGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+acieS4quWcuuaZr+iKgueCueayoeacieaJvuWIsCcsIGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfbm9kZUNvbmZpZy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfojrflj5blnLrmma/oioLngrnml7bvvIzkuIDkuKrphY3nva7kv6Hmga/pg73msqHmib7liLAnLCBfbmFtZXMpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX3NjZW5lTm9kZTogU2NlbmVOb2RlO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Zyo57yT5a2Y5Lit5om+XHJcbiAgICAgICAgaWYgKF9maW5kQ2FjaGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgW19rZXksIF92YWx1ZV0gb2YgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5VXRpbHMuQ29udGVudElmU2FtZShfa2V5LCBfbmFtZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF91c2FibGU6IFNjZW5lTm9kZVtdID0gX3ZhbHVlLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZkRlbGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3VzYWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zY2VuZU5vZGUgPSBfdXNhYmxlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmICghX3NjZW5lTm9kZSkge1xyXG4gICAgICAgICAgICAvL+aWsOW7uuS4gOS4quWunuS+i1xyXG4gICAgICAgICAgICBfc2NlbmVOb2RlID0gbmV3IFNjZW5lTm9kZShfbm9kZUNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgIGlmIChfYWRkQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBfaWY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IFtfa2V5LCBfdmFsdWVdIG9mIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheVV0aWxzLkNvbnRlbnRJZlNhbWUoX2tleSwgX25hbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWUucHVzaChfc2NlbmVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2lmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFfaWYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlLnNldChfbmFtZXMsIFtfc2NlbmVOb2RlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3NjZW5lTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOW9k+WJjeiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5p6E5bu65pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOVXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkT25Ob2RlKF9ub2RlOiBTY2VuZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm1fb25TY2VuZU5vZGVzLmFkZChfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlvZPliY3oioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+WIoOmZpOaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZU9uTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5kZWxldGUoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u546v5aKDXHJcbiAgICAgKiDkvJrmoLnmja7lvZPliY3lnLrmma/kuK3njq/looPphY3nva7orr7nva7njq/looNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIGxldCBfc2NlbmVDb25maWc6IElTY2VuZUNvbmZpZyA9IHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDmkYTlg4/mnLpcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmNhbWVyYSkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5jYW1lcmEsIF9zY2VuZUNvbmZpZy5jYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWFqOWxgOeBr+WFiVxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcubGlnaHQpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQubGlnaHQsIF9zY2VuZUNvbmZpZy5saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5fc2V0RW52aXJvbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX24sIF9ub2RlKTtcclxuICAgICAgICB0aGlzLl9sb2FkUHJvZ3Jlc3MoX24sIF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAqIC0tLS0tLS0tLS0tIOWbnuiwg+WHveaVsFxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKiDorr7nva7njq/looPlkI7miafooYznmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfc2V0RW52aXJvbm1lbnQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOW9k+WJjeWKoOi9veeahOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuaW1wb3J0IE5vZGVUIGZyb20gXCIuL05vZGVUXCI7XHJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWcuuaZr+iKgueCuVxyXG4gKiDnlKjmnaXmnoTlu7rlnLrmma/oioLngrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZSB7XHJcbiAgICAvKiog5omA5bGe5Zy65pmvICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmU6IFNjZW5lO1xyXG4gICAgLyoqIOaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmRGVsZXRlOiBib29sZWFuO1xyXG4gICAgLyoqIOiKgueCuemFjee9ruS/oeaBr+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGVDb25maWdzOiBJTm9kZUNvbmZpZ1tdO1xyXG4gICAgLyoqIOiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBtX25vZGU6IExheWEuTm9kZTtcclxuICAgIC8qKiDpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIOmihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyO1xyXG4gICAgLyoqIOaYr+WQpuWcqOWKoOi9vSAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmTG9hZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiog6I635Y+W5omA5bGe5Zy65pmvICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lKCk6IFNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluiKgueCuemFjee9ruS/oeaBryAqL1xyXG4gICAgcHVibGljIGdldCBub2RlQ29uZmlncygpOiBJTm9kZUNvbmZpZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX25vZGVDb25maWdzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluaYr+WQpuWIoOmZpCAqL1xyXG4gICAgcHVibGljIGdldCBpZkRlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluWcuuaZr+iKgueCuSAqL1xyXG4gICAgcHVibGljIGdldCBub2RlKCk6IExheWEuTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ub2RlO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzKCk6IElQcmVmYWJzR2F0aGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnM7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6aKE5Yi25L2T5ZCN5a2X5YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IHByZWZhYnNOYW1lKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3ByZWZhYnNOYW1lcztcclxuICAgIH1cclxuICAgIC8qKiDmmK/lkKblnKjliqDovb0gKi9cclxuICAgIHB1YmxpYyBnZXQgaWZMb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZMb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5Zy65pmv6IqC54K55a6e5L6LXHJcbiAgICAgKiBAcGFyYW0gX25vZGVDb25maWdzIOiKgueCuemFjee9ruS/oeaBr1xyXG4gICAgICogQHBhcmFtIF9zY2VuZSDmiYDlsZ7lnLrmma9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXSwgX3NjZW5lOiBTY2VuZSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lID0gX3NjZW5lO1xyXG4gICAgICAgIC8v6buY6K6k5Li65Yig6Zmk54q25oCBXHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MgPSBfbm9kZUNvbmZpZ3M7XHJcbiAgICAgICAgLy/mj5Dlj5bpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAgICB0aGlzLm1fcHJlZmFic05hbWVzID0gW107XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgTm9kZVQuZ2V0UHJlZmFic05hbWVzKHRoaXMubV9wcmVmYWJzTmFtZXMsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0xvYWQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWVzVVJMOiBzdHJpbmdbXSA9IHRoaXMubV9wcmVmYWJzTmFtZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkM0RBc3luYyhfcHJlZmFiTmFtZXNVUkwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKG4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3Jlc3Mobik7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtuXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5p6E5bu6XHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jQnVpbGQoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPFNjZW5lTm9kZT4ge1xyXG4gICAgICAgIHRoaXMubV9pZkxvYWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTY2VuZU5vZGU+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXN5bmNMb2FkKF9vblByb2dyZXNzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9pZkxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/lkJHlnLrmma/kvKDlh7rliqDovb3ov5vluqZcclxuICAgICAgICB0aGlzLm1fc2NlbmUubG9hZFByb2dyZXNzKF9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7ulxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5hZGRPbk5vZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tX25vZGUgPSBuZXcgTGF5YS5Ob2RlO1xyXG4gICAgICAgIC8v5re75Yqg5Yiw5omA5bGe5Zy65pmv546v5aKD5LitXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmVudmlyb25tZW50LnNjZW5lLmFkZENoaWxkKHRoaXMubV9ub2RlKTtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IHt9O1xyXG4gICAgICAgIGxldCBfc3ByOiBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBuZXcgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgdGhpcy5tX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIE5vZGVULmJ1aWxkTm9kZShfc3ByLCBpdGVtLCB0aGlzLm1fcHJlZmFicyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICh0aGlzLm1faWZMb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+iKgueCuei/mOWcqOaehOW7uuWNtOivleWbvuWIoOmZpOOAgicpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5kZWxldGVPbk5vZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tX25vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8v5riF55CG5byV55SoXHJcbiAgICAgICAgdGhpcy5tX25vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0gbnVsbDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDln7rnsbvmlbDmja5cclxuICogISDlj6rog73lh7rnjrDmlbDmja7lsYLpnaLnmoTkuJzopb9cclxuICog5pWw57uE77yM5a+56LGh77yM5YC8ICjmlbDlrZfvvIzlrZfnrKbkuLLvvIzluIPlsJTlgLwpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCJcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmlbDmja7ku6PnkIZcclxuICog5omA5pyJ5YWz5LqO5Luj55CG5pWw5o2u55qE57G76YO95LuO6L+Z6YeM57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4ge1xyXG4gICAgLyoqIOaVsOaNruaooeadvyAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhVGVtcGxhdGU6IHsgbmV3KCk6IERhdGEgfTtcclxuXHJcbiAgICAvKiog5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiog5pWw5o2u5Luj55CG5bel5YW3ICovXHJcbiAgICBwcm90ZWN0ZWQgbV9vYmplY3RQcm94eVQ6IE9iamVjdFByb3h5VDtcclxuXHJcbiAgICAvKiog6ZyA6KaB5L+d5a2Y55qE5pWw5o2uICovXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhOiBEYXRhO1xyXG5cclxuICAgIC8qKiDojrflj5bmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTZXRQcm94eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2V0UHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlbDmja7ku6PnkIblmahcclxuICAgICAqIOmAmui/h+i/meS4quaVsOaNruS7o+eQhuWZqOWPr+S7pea3u+WKoOS7o+eQhuaVsOaNru+8jOWSjOa3u+WKoOaVsOaNruebkeWQrOWbnuiwgyBb6YWN5ZCIIHJvb3REYXRhIOS9v+eUqF1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvYmplY3RQcm94eVQoKTogT2JqZWN0UHJveHlUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX29iamVjdFByb3h5VDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5paw55qE5pWw5o2uXHJcbiAgICAgKiDnlKjkuo7ph43mnoTmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldE5ld0RhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgLy/lpoLmnpzmsqHmnInmlbDmja7mqKHmnb/nmoTor51cclxuICAgICAgICBpZiAoIXRoaXMuZGF0YVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5om+5Yiw5pWw5o2u5qih5p2/77yB6K+35L2/55So5pWw5o2u5qih5p2/6KOF6aWw5Zmo6KOF6aWw6K+l57G7JywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuZGF0YVRlbXBsYXRlKCkgYXMgRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5pdERhdGEoKTtcclxufSIsImltcG9ydCBNZDUgZnJvbSAnLi9NZDUnO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSAnLi9CYXNlRGF0YVByb3h5JztcclxuaW1wb3J0IEJhc2VEYXRhIGZyb20gJy4vQmFzZURhdGEnO1xyXG5pbXBvcnQgX01haW5Db25maWcgZnJvbSAnc3JjL0NvbmZpZy9fTWFpbkNvbmZpZyc7XHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSAnLi9PYmplY3RQcm94eVQnO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+acrOWcsOaVsOaNruS7o+eQhu+8jOmAmui/h+atpOexu+WPr+S7peiuv+mXruacrOWcsOS/neWtmOeahOaVsOaNrlxyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VMb2NhbERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWvueavlOaVsOaNrlxyXG4gICAgICog6buY6K6k5Li6dHJ1Ze+8jOWmguaenOS4uuecn+W9k+S4uue6v+S4iuaooeW8j+aXtuS8mueUn+aIkOS4gOS4quWKoOWvhueahOWvueavlOaVsOaNru+8jOmYsuatoueUqOaIt+aUueWKqOacrOWcsOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmRGlmZmVyRGF0YTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog6I635Y+W5L+d5a2Y5ZCN56ewXHJcbiAgICAgKiDpu5jorqTov5Tlm57nsbvlkI3vvIzlj6/ku6Xph43lhplcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBfc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+m7mOiupOi/lOWbnuexu+WQjVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bkv53lrZjmlbDmja7nmoTlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IHNhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pobnnm67lkI3lrZcgKyDkv53lrZjlkI3lrZcgKyDpobnnm67niYjmnKxcclxuICAgICAgICByZXR1cm4gX01haW5Db25maWcuTmFtZSArICctJyArIHRoaXMuX3NhdmVOYW1lICsgJy0nICsgX01haW5Db25maWcuVmVyc2lvbnMgKyAoX01haW5Db25maWcuT25MaW5lID8gJ15vbicgOiAnXnRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5blr7nmr5TmlbDmja7nmoTkv53lrZjlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IGRpZmZlck5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHQodGhpcy5zYXZlTmFtZSArICdfX3ZlcmlmeScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICAvL+iusOW9leaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuX3JlYWREYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIbljIXoo4XmlbDmja5cclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bmlbDmja7ku6PnkIblt6XlhbdcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICAgICAgLy/mt7vliqDorr7nva7nm5HlkKxcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsIHRoaXMuX2RhdGFTZXRNb25pdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgICAgIC8v5Yik5pat5pe26Ze05beuXHJcbiAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgaWYgKF90aW1lID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WIneWni+WMluacrOWcsOaVsOaNruaXtumXtOi/h+mVvycsIHRoaXMuc2F2ZU5hbWUsIF90aW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblrozmiJDvvIznu6fmib/kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxuXHJcbiAgICAvKiog5pWw5o2u6KKr6K6+572u55uR5ZCsICovXHJcbiAgICBwcml2YXRlIF9kYXRhU2V0TW9uaXRvcigpIHtcclxuICAgICAgICB0aGlzLnNhdmUodGhpcy5tX2RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omL5Yqo5L+d5a2Y5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2wg5piv5ZCm6ZmQ5rWBIOm7mOiupOS4unRydWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNhdmUoX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhLCBfaWZDbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOS/neWtmOaJp+ihjOmYn+WIlyAqL1xyXG4gICAgcHJpdmF0ZSBtX3NhdmVUb0Rpc2tRdWV1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICAgKiBAcGFyYW0gbV9kYXRhIOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhdmUobV9kYXRhOiBEYXRhLCBfaWZDbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICAvL+a3u+WKoOaXtumXtOWIpOaWrVxyXG4gICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpumZkOa1gVxyXG4gICAgICAgIGlmICghX2lmQ2wpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZShtX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZSsrO1xyXG4gICAgICAgICAgICAvL+mZkOa1ge+8jOavj+S4gOasoeWuj+S7u+WKoeWPquS/neWtmOS4gOasoeaVsOaNrlxyXG4gICAgICAgICAgICAvL+aKiuS/neWtmOS7u+WKoeazqOWGjOi/m+W+ruS7u+WKoeWIl+ihqO+8jOWwhuS8muWcqOacrOasoeaVsOaNruS/ruaUueeahOWuj+S7u+WKoeWujOaIkOWQjuW5tuWcqOS4i+asoeWuj+S7u+WKoeW8gOWni+WJjeiiq+WFqOmDqOaJp+ihjFxyXG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlLS07XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2u5YmNJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZShtX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgcHJpdmF0ZSBfc2F2ZShtX2RhdGE/OiBEYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNricpO1xyXG4gICAgICAgIC8v5bqP5YiX5YyWXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShtX2RhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLnNhdmVOYW1lLCBqc29uKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVySnNvbiA9IHRoaXMuZ2V0RGlmZmVyRGF0YShqc29uKTtcclxuICAgICAgICAgICAgLy/kv53lrZjlr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLmRpZmZlck5hbWUsIF9kaWZmZXJKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5tX3NhdmVUb0Rpc2tUaW1lO1xyXG4gICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IDA7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+S/neWtmOaXtumXtOi/h+mVvycsIHRoaXMuc2F2ZU5hbWUsIF90aW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5pys5Zyw6I635Y+W5pWw5o2uXHJcbiAgICBwcml2YXRlIF9yZWFkRGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+ivu+WPluacrOWcsOaVsOaNrlxyXG4gICAgICAgIGxldCByZWFkU3RyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLnNhdmVOYW1lKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLmRpZmZlck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXREaWZmZXJEYXRhKHJlYWRTdHIpICE9IF9kaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5paw55qE5a6e5L6LXHJcbiAgICAgICAgbGV0IF9zYXZlRGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5Yik5pat5pWw5o2u5piv5ZCm6KKr56+h5pS5XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlYWRTdHIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVhZFN0cik7XHJcbiAgICAgICAgICAgICAgICAvL+eUqOacrOWcsOeahOaVsOaNruWhq+WFheW9k+WJjeaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIF9zYXZlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zYXZlRGF0YVtrZXldID0ganNvbkRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zYXZlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluW5tuS/neWtmOS4gOS4quaWsOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfc2F2ZU5ld0RhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgbGV0IG1fZGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5L+d5a2Y5pWw5o2u77yM5LiN6ZmQ5rWBXHJcbiAgICAgICAgdGhpcy5zYXZlKG1fZGF0YSBhcyBEYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbV9kYXRhIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lpITnkIblr7nmr5TmlbDmja5cclxuICAgIHByaXZhdGUgZ2V0RGlmZmVyRGF0YShfc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li656m6XHJcbiAgICAgICAgaWYgKCFfc3RyaW5nKSByZXR1cm4gJyc7XHJcbiAgICAgICAgLy/liqDlr4ZcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KF9zdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pWw5o2u5Y2V5ZCR5Yqg5a+GXHJcbiAgICBwcml2YXRlIGVuY3J5cHQoX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9lbmNyeXB0U3RyOiBzdHJpbmcgPSBgTGF5YU1pbmlHYW1lLSR7dGhpcy5zYXZlTmFtZX06JHtfc3RyaW5nfWA7XHJcbiAgICAgICAgLy/liKTmlq3og73lkKbkvb/nlKhtZDVcclxuICAgICAgICBpZiAoTWQ1LmlmVXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNZDUuaGFzaFN0cihfZW5jcnlwdFN0cikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+S4jeeUqOS7u+S9leWKoOWvhlxyXG4gICAgICAgICAgICByZXR1cm4gJ25vRW5jcnlwdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gXCIuL0Jhc2VEYXRhUHJveHlcIjtcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja7ku6PnkIbln7rnsbtcclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2hvcnREYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqIOS4tOaXtuaVsOaNrum7mOiupOS4jeiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CGXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5pWw5o2u5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7lpITnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUIHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u5qih5p2/6KOF6aWw5ZmoXHJcbiAgICAgKiBAcGFyYW0gX2RhdGEg5pWw5o2u5qih5p2/XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVEYXRhVGVtcGxhdGUoX2RhdGE6IHsgbmV3KCk6IEJhc2VEYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5pWw5o2u5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuZGF0YVRlbXBsYXRlID0gX2RhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFR5cGVTY3JpcHQgTWQ15Yqg5a+GXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZDUge1xyXG4gICAgLyoqIOiDveWQpuS9v+eUqCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlVzZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gT25lIHRpbWUgaGFzaGluZyBmdW5jdGlvbnNcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaFN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoQXNjaWlTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kQXNjaWlTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcbiAgICAvLyBQcml2YXRlIFN0YXRpYyBWYXJpYWJsZXNcclxuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlSWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVmZmVyMzJJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhDaGFycyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcclxuICAgIHByaXZhdGUgc3RhdGljIGhleE91dDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvLyBQZXJtYW5lbnQgaW5zdGFuY2UgaXMgdG8gdXNlIGZvciBvbmUtY2FsbCBoYXNoaW5nXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmVQYXNzSGFzaGVyID0gbmV3IE1kNSgpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9oZXgoeDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoYyA9IE1kNS5oZXhDaGFycztcclxuICAgICAgICBjb25zdCBobyA9IE1kNS5oZXhPdXQ7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgbGV0IG9mZnNldDtcclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBpICogODtcclxuICAgICAgICAgICAgbiA9IHhbaV07XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCA4OyBqICs9IDIpIHtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDEgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDAgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaG8uam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21kNWN5Y2xlKHg6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSwgazogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5KSB7XHJcbiAgICAgICAgbGV0IGEgPSB4WzBdO1xyXG4gICAgICAgIGxldCBiID0geFsxXTtcclxuICAgICAgICBsZXQgYyA9IHhbMl07XHJcbiAgICAgICAgbGV0IGQgPSB4WzNdO1xyXG4gICAgICAgIC8vIGZmKClcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzBdIC0gNjgwODc2OTM2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMV0gLSAzODk1NjQ1ODYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMl0gKyA2MDYxMDU4MTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbM10gLSAxMDQ0NTI1MzMwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzRdIC0gMTc2NDE4ODk3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbNV0gKyAxMjAwMDgwNDI2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzZdIC0gMTQ3MzIzMTM0MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1s3XSAtIDQ1NzA1OTgzIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzhdICsgMTc3MDAzNTQxNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzldIC0gMTk1ODQxNDQxNyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxMF0gLSA0MjA2MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxMV0gLSAxOTkwNDA0MTYyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzEyXSArIDE4MDQ2MDM2ODIgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxM10gLSA0MDM0MTEwMSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxNF0gLSAxNTAyMDAyMjkwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzE1XSArIDEyMzY1MzUzMjkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGdnKClcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzFdIC0gMTY1Nzk2NTEwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbNl0gLSAxMDY5NTAxNjMyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTFdICsgNjQzNzE3NzEzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzBdIC0gMzczODk3MzAyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzVdIC0gNzAxNTU4NjkxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTBdICsgMzgwMTYwODMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxNV0gLSA2NjA0NzgzMzUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbNF0gLSA0MDU1Mzc4NDggfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbOV0gKyA1Njg0NDY0MzggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxNF0gLSAxMDE5ODAzNjkwIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbM10gLSAxODczNjM5NjEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbOF0gKyAxMTYzNTMxNTAxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzEzXSAtIDE0NDQ2ODE0NjcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1syXSAtIDUxNDAzNzg0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbN10gKyAxNzM1MzI4NDczIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzEyXSAtIDE5MjY2MDc3MzQgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGhoKClcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s1XSAtIDM3ODU1OCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s4XSAtIDIwMjI1NzQ0NjMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzExXSArIDE4MzkwMzA1NjIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzE0XSAtIDM1MzA5NTU2IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzFdIC0gMTUzMDk5MjA2MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s0XSArIDEyNzI4OTMzNTMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzddIC0gMTU1NDk3NjMyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxMF0gLSAxMDk0NzMwNjQwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzEzXSArIDY4MTI3OTE3NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1swXSAtIDM1ODUzNzIyMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbM10gLSA3MjI1MjE5NzkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzZdICsgNzYwMjkxODkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbOV0gLSA2NDAzNjQ0ODcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMTJdIC0gNDIxODE1ODM1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxNV0gKyA1MzA3NDI1MjAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzJdIC0gOTk1MzM4NjUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGlpKClcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1swXSAtIDE5ODYzMDg0NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1s3XSArIDExMjY4OTE0MTUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzE0XSAtIDE0MTYzNTQ5MDUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzVdIC0gNTc0MzQwNTUgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzEyXSArIDE3MDA0ODU1NzEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbM10gLSAxODk0OTg2NjA2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxMF0gLSAxMDUxNTIzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxXSAtIDIwNTQ5MjI3OTkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzhdICsgMTg3MzMxMzM1OSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxNV0gLSAzMDYxMTc0NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbNl0gLSAxNTYwMTk4MzgwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxM10gKyAxMzA5MTUxNjQ5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s0XSAtIDE0NTUyMzA3MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxMV0gLSAxMTIwMjEwMzc5IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1syXSArIDcxODc4NzI1OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbOV0gLSAzNDM0ODU1NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG5cclxuICAgICAgICB4WzBdID0gYSArIHhbMF0gfCAwO1xyXG4gICAgICAgIHhbMV0gPSBiICsgeFsxXSB8IDA7XHJcbiAgICAgICAgeFsyXSA9IGMgKyB4WzJdIHwgMDtcclxuICAgICAgICB4WzNdID0gZCArIHhbM10gfCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RhdGFMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2J1ZmZlckxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBJbnQzMkFycmF5ID0gbmV3IEludDMyQXJyYXkoNCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI6IEFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjg6IFVpbnQ4QXJyYXk7XHJcbiAgICBwcml2YXRlIF9idWZmZXIzMjogVWludDMyQXJyYXk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2J1ZmZlciwgMCwgNjgpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjMyID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2J1ZmZlciwgMCwgMTcpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5zZXQoTWQ1LnN0YXRlSWRlbnRpdHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYXIgdG8gY29kZSBwb2ludCB0byB0byBhcnJheSBjb252ZXJzaW9uOlxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2NoYXJDb2RlQXRcclxuICAgIC8vICNFeGFtcGxlLjNBX0ZpeGluZ19jaGFyQ29kZUF0X3RvX2hhbmRsZV9ub24tQmFzaWMtTXVsdGlsaW5ndWFsLVBsYW5lX2NoYXJhY3RlcnNfaWZfdGhlaXJfcHJlc2VuY2VfZWFybGllcl9pbl90aGVfc3RyaW5nX2lzX3Vua25vd25cclxuICAgIHB1YmxpYyBhcHBlbmRTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBpZiAoY29kZSA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNikgKyAweEMwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlICYgMHgzRiB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4RDgwMCB8fCBjb2RlID4gMHhEQkZGKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMikgKyAweEUwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gKChjb2RlIC0gMHhEODAwKSAqIDB4NDAwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpIC0gMHhEQzAwKSArIDB4MTAwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4MTBGRkZGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmljb2RlIHN0YW5kYXJkIHN1cHBvcnRzIGNvZGUgcG9pbnRzIHVwIHRvIFUrMTBGRkZGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxOCkgKyAweEYwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuID49IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICAgICAgYnVmTGVuIC09IDY0O1xyXG4gICAgICAgICAgICAgICAgYnVmMzJbMF0gPSBidWYzMlsxNl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRBc2NpaVN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihzdHIubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IHN0ci5jaGFyQ29kZUF0KGorKyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQnl0ZUFycmF5KGlucHV0OiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKGlucHV0Lmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBpbnB1dFtqKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWxmLl9zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnVmZmVyOiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHNlbGYuX2J1ZmZlcjgpLFxyXG4gICAgICAgICAgICBidWZsZW46IHNlbGYuX2J1ZmZlckxlbmd0aCxcclxuICAgICAgICAgICAgbGVuZ3RoOiBzZWxmLl9kYXRhTGVuZ3RoLFxyXG4gICAgICAgICAgICBzdGF0ZTogW3NbMF0sIHNbMV0sIHNbMl0sIHNbM11dXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHN0YXRlLmJ1ZmZlcjtcclxuICAgICAgICBjb25zdCB4ID0gc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IHN0YXRlLmJ1ZmxlbjtcclxuICAgICAgICBzWzBdID0geFswXTtcclxuICAgICAgICBzWzFdID0geFsxXTtcclxuICAgICAgICBzWzJdID0geFsyXTtcclxuICAgICAgICBzWzNdID0geFszXTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXI4W2ldID0gYnVmLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmQocmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBjb25zdCBpID0gKGJ1ZkxlbiA+PiAyKSArIDE7XHJcbiAgICAgICAgbGV0IGRhdGFCaXRzTGVuO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IGJ1ZkxlbjtcclxuXHJcbiAgICAgICAgYnVmOFtidWZMZW5dID0gMHg4MDtcclxuICAgICAgICBidWY4W2J1ZkxlbiArIDFdID0gYnVmOFtidWZMZW4gKyAyXSA9IGJ1ZjhbYnVmTGVuICsgM10gPSAwO1xyXG4gICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eS5zdWJhcnJheShpKSwgaSk7XHJcblxyXG4gICAgICAgIGlmIChidWZMZW4gPiA1NSkge1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEbyB0aGUgZmluYWwgY29tcHV0YXRpb24gYmFzZWQgb24gdGhlIHRhaWwgYW5kIGxlbmd0aFxyXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWF5IG5vdCBmaXQgaW4gMzIgYml0cyBzbyB3ZSB0YWtlIGNhcmUgb2YgdGhhdFxyXG4gICAgICAgIGRhdGFCaXRzTGVuID0gdGhpcy5fZGF0YUxlbmd0aCAqIDg7XHJcbiAgICAgICAgaWYgKGRhdGFCaXRzTGVuIDw9IDB4RkZGRkZGRkYpIHtcclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gZGF0YUJpdHNMZW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRhdGFCaXRzTGVuLnRvU3RyaW5nKDE2KS5tYXRjaCgvKC4qPykoLnswLDh9KSQvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG8gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpID0gcGFyc2VJbnQobWF0Y2hlc1sxXSwgMTYpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBsbztcclxuICAgICAgICAgICAgYnVmMzJbMTVdID0gaGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcblxyXG4gICAgICAgIHJldHVybiByYXcgPyB0aGlzLl9zdGF0ZSA6IE1kNS5faGV4KHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/mo4Dmn6VNZDXmmK/lkKblj6/nlKhcclxuaWYgKE1kNS5oYXNoU3RyKCdoZWxsbycpICE9PSAnNWQ0MTQwMmFiYzRiMmE3NmI5NzE5ZDkxMTAxN2M1OTInKSB7XHJcbiAgICAvL+iuvue9ruS4jeiDveS9v+eUqFxyXG4gICAgTWQ1LmlmVXNlID0gZmFsc2U7XHJcbiAgICAvL1xyXG4gICAgY29uc29sZS53YXJuKCdNZDUgc2VsZiB0ZXN0IGZhaWxlZC4nKTtcclxufVxyXG4iLCIvKipcclxuICog5a+56LGh5Luj55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm94eVQge1xyXG4gICAgLyoqIOebkeWQrOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX21vbml0b3JMaXN0OiB7XHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfnyAqL1xyXG4gICAgICAgIF90aGlzOiBhbnksXHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlSAqL1xyXG4gICAgICAgIF9iYWNrOiBGdW5jdGlvbixcclxuICAgICAgICAvKiog5rqQ5a+56LGhICovXHJcbiAgICAgICAgX29iaj86IG9iamVjdCxcclxuICAgICAgICAvKiog6ZSu5YC8ICovXHJcbiAgICAgICAgX2tleT86IHN0cmluZyxcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55uR5ZCsXHJcbiAgICAgKiDnm5HlkKzmn5DkuKrlr7nosaHnmoTmn5DkuKrlsZ7mgKfmmK/lkKblj5HnlJ/mm7TmlLlcclxuICAgICAqIOWmguaenOWPr+mAieWxnuaAp+mDveS4jeWhq+eahOivneWImeebkeWQrOWFqOmDqOebkeWQrOaVsOaNruWxnuaAp+abtOaUuVxyXG4gICAgICogQHBhcmFtIF90aGlzIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlVxyXG4gICAgICogQHBhcmFtIF9vYmog55uu5qCH5a+56LGh77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5YaF5a655pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDplK7lkI3vvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE1vbml0b3I8TyBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIE8+KF90aGlzOiBhbnksIF9iYWNrOiBGdW5jdGlvbiwgX29iaj86IE8sIF9rZXk/OiBLKSB7XHJcbiAgICAgICAgLy/mt7vliqDliLDnm5HlkKzliJfooahcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIF90aGlzLFxyXG4gICAgICAgICAgICBfYmFjayxcclxuICAgICAgICAgICAgX29iaixcclxuICAgICAgICAgICAgX2tleTogX2tleSBhcyBzdHJpbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIblm57osINcclxuICAgICAqIEBwYXJhbSBfdGhpcyDlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDlm57osIPmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyTW9uaXRvcihfdGhpczogYW55LCBfYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0ID0gdGhpcy5tX21vbml0b3JMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIShcclxuICAgICAgICAgICAgICAgIGl0ZW0uX3RoaXMgPT0gX3RoaXNcclxuICAgICAgICAgICAgICAgICAgICAvL+WPr+mAieeahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICYmIF9iYWNrID8gaXRlbS5fYmFjayA9PSBfYmFjayA6IHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ku6PnkIZcclxuICAgICAqIEBwYXJhbSBfbyDmupDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFByb3h5PERhdGEgZXh0ZW5kcyBvYmplY3Q+KF9vOiBEYXRhKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldFByb3h5KF9vKSBhcyBEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/phY3lkIjorr7nva7ku6PnkIZcclxuICAgIHByaXZhdGUgX3NldFByb3h5KF9vKTogb2JqZWN0IHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+aZrumAmuWAvOexu+Wei+WSjOaWueazlVxyXG4gICAgICAgIGlmICh0eXBlb2YgX28gPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBfbyAhPSBcIm9iamVjdFwiIHx8ICFfbykge1xyXG4gICAgICAgICAgICByZXR1cm4gX287XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5Y+v6L+t5Luj5a+56LGh5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKCFfb1tTeW1ib2wuaXRlcmF0b3JdKSB7XHJcbiAgICAgICAgICAgIC8v6YGN5Y6G5a+56LGh6K6+572u5Luj55CGXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgICAgICBfb1tfaV0gPSB0aGlzLl9zZXRQcm94eShfb1tfaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6L+U5Zue5pyA57uI55qE5Luj55CG5a+56LGhXHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KF9vLCB7XHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogIHNldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/kv67mlLnlsZ7mgKdcclxuICAgICAgICAgICAgICAgIGxldCBfaWY6IGJvb2xlYW4gPSBSZWZsZWN0LnNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2lmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3mmK/mmK/kuI3mmK/mlbDnu4TnmoRsZW5ndGjlsZ7mgKfooqvkv67mlLlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShBcnJheS5pc0FycmF5KHRyYXBUYXJnZXQpICYmIGtleSA9PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lmO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiBnZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIgcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGh77yI6YCa5bi45piv5Luj55CG77yJXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/ojrflj5blsZ7mgKdcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqXHJcbiAgICAgKiDku6PnkIblr7nosaHooqvorr7nva7ml7bnmoTlm57osINcclxuICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfku6PnkIblr7nosaHooqvorr7nva4nLCB0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgbGV0IF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgLy/miafooYznm5HlkKxcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFiOWIpOaWreS7o+eQhuebruagh1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5fb2JqICYmIGl0ZW0uX29iaiAhPSByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9rZXkgJiYgaXRlbS5fa2V5ICE9IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgIGl0ZW0uX2JhY2suY2FsbChpdGVtLl90aGlzLCAuLi5fYXJndW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOagueiwg+ivleexu++8jOaJgOacieiwg+ivleexu+W/hemhu+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURlYnVnIHtcclxuICAgIC8qKiDliY3nvIAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUHJlZml4OiBzdHJpbmcgPSAnJERlYnVnJztcclxuXHJcbiAgICAvKiog5qC56LCD6K+V5a+56LGhICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlYnVnT2JqOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDlkI3lrZfvvIznlKggV2luZG93W+WJjee8gCArIF9uYW1lXSDorr/pl65cclxuICAgICAqIOWPr+S7pee7p+aJv+abtOaUuei/meS4quWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIF9pZkluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quiwg+ivleWvueixoVxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g6K+l5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX3R5cGUg6K+l5a+56LGh57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtKF9rZXk6IHN0cmluZywgX2l0ZW06IGFueSkge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+VXHJcbiAgICAgICAgaWYgKCFfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pZkluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5faWZJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgQmFzZURlYnVnLkRlYnVnT2JqW3RoaXMuX25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc1tfa2V5XSA9IF9pdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuW8gOWQr+S6huiwg+ivleaooeW8j1xyXG5pZiAoX0dhbWVDb25maWcuaWZEZWJ1Zykge1xyXG4gICAgLy/ms6jlhozlhajlsYDosIPor5Xlr7nosaFcclxuICAgIHdpbmRvd1tCYXNlRGVidWcuUHJlZml4XSA9IEJhc2VEZWJ1Zy5EZWJ1Z09iajtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflvIDlkK/osIPor5XmqKHlvI/vvIzpgJrov4cnLCBCYXNlRGVidWcuUHJlZml4LCAn6K6/6ZeuJykpO1xyXG59IiwiXHJcbi8qKlxyXG4gKiDmuLjmiI/lr7nosaHmsaBcclxuICogISDlj6rog73muLjmiI/lhoXkvb/nlKjvvIzkuI3opoHlnKjlt6XlhbfkuK3kvb/nlKhcclxuICogISDlsL3ph4/lj6rlnKjph43lpI3liJvlu7rpnZ7luLjlpJrlr7nosaHnmoTlnLDmlrnkvb/nlKjvvIzkuI3nhLbkvJrlvpfkuI3lgb/lpLFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQb29sIHtcclxuICAgIC8qKiDlr7nosaHmsaDliJfooaggKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogYW55W10sXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJdGVtPFQgZXh0ZW5kcyBhbnk+KF9zaWduOiBFR2FtZVBvb2xTaWduKTogVCB7XHJcbiAgICAgICAgLy/lhYjliLDmnKzlnLDlr7nosaHmsaDliJfooajkuK3mn6Xmib5cclxuICAgICAgICBpZiAodGhpcy5wb29sTGlzdFtfc2lnbl0gJiYgdGhpcy5wb29sTGlzdFtfc2lnbl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sTGlzdFtfc2lnbl0ucG9wKCkgYXMgVDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9zaWduKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IzKSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IyKSBhcyBhbnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLblhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiDlm57mlLbmoIfor4ZcclxuICAgICAqIEBwYXJhbSBfaXRlbSDlm57mlLblhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlSXRlbShfc2lnbjogRUdhbWVQb29sU2lnbiwgLi4uX2l0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb29sTGlzdFtfc2lnbl0pIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj6rmt7vliqDkuI3ljIXlkKvnmoTlhYPntKBcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXS5pbmNsdWRlcyhfbykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9vbExpc3RbX3NpZ25dLnB1c2goX28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWMygpOiBMYXlhLlZlY3RvcjMge1xyXG4gICAgICAgIGxldCBfdjM6IExheWEuVmVjdG9yMyA9IHRoaXMuZ2V0SXRlbTxMYXlhLlZlY3RvcjM+KEVHYW1lUG9vbFNpZ24udjMpO1xyXG4gICAgICAgIF92My5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gX3YzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLZ2M1xyXG4gICAgICogQHBhcmFtIF92MyDlvoXlm57mlLbnmoR2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVWMyguLi5fdjNzOiBMYXlhLlZlY3RvcjNbXSkge1xyXG4gICAgICAgIHRoaXMucmVjeWNsZUl0ZW0oRUdhbWVQb29sU2lnbi52MywgLi4uX3Yzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2MlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYyKCk6IExheWEuVmVjdG9yMiB7XHJcbiAgICAgICAgbGV0IF92MjogTGF5YS5WZWN0b3IyID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMj4oRUdhbWVQb29sU2lnbi52Mik7XHJcbiAgICAgICAgX3YyLnNldFZhbHVlKDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYyXHJcbiAgICAgKiBAcGFyYW0gX3YyIOW+heWbnuaUtueahHYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYyKC4uLl92MnM6IExheWEuVmVjdG9yMltdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYyLCAuLi5fdjJzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoOagh+ivhlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUdhbWVQb29sU2lnbiB7XHJcbiAgICAvKiogM+e7tOWQkemHjyAqL1xyXG4gICAgdjMsXHJcbiAgICAvKiogMue7tOWQkemHjyAqL1xyXG4gICAgdjIsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgUmVzTG9hZEdyb3VwIGZyb20gXCIuLi9SZXMvUmVzTG9hZEdyb3VwXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRJdGVtXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP6L+b5YWl5LmL5YmN55qE5Yqg6L295Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb1cclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQoX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0NvbSgn5byA5aeL5Yqg6L295ri45oiP5Yid5aeL5YyW6LWE5rqQJykpO1xyXG4gICAgICAgIC8v5omn6KGM5Yqg6L295LmL5YmN55qE5byC5q2lXHJcbiAgICAgICAgdGhpcy5fbG9hZEJlZm9yZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+iOt+WPluWKoOi9vemhuVxyXG4gICAgICAgICAgICBsZXQgX3Jlc0xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSA9IHRoaXMuX2dldExvYWRJdGVtcygpO1xyXG4gICAgICAgICAgICAvL+W8guatpeWKoOi9veWKoOi9vemhuVxyXG4gICAgICAgICAgICBSZXNMb2FkR3JvdXAubG9hZEFzeW5jKF9yZXNMb2FkSXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRQbGFuKGkpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLl9sb2FkSXRlbXNDb20sIHVuZGVmaW5lZCwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCfmuLjmiI/liqDovb3lrozmiJAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQ29tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBfY29tQmFjayAmJiBfY29tQmFjay5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Yqg6L295LmL5YmNXHJcbiAgICAgKiDlj6/ku6XlnKjov5nph4zlhYjliqDovb3kuIDkupvkuJzopb9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQmVmb3JlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWKoOi9vemhueWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2dldExvYWRJdGVtcygpOiBSZXNMb2FkSXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkUGxhbihfaTogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRJdGVtc0NvbShfcmVzTG9hZDogUmVzTG9hZEl0ZW0pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZENvbSgpIHsgfVxyXG59IiwiaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tIFwiLi9LZXlSZXNNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICog5YWs5YWx6LWE5rqQ6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21SZXNVcmwge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PkuZDmlofku7bot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOaWh+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTXVzaWNVUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAnLm1wMycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5tdXNpYykgKyBuYW1lICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aViOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg6Z+z5pWI5ZCN5a2XIFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU291bmRVUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAnLm1wMycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5zb3VuZCkgKyBuYW1lICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5Zu+5qCH5ZCN56ewIFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSWNvblVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcucG5nJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLmljb24pICsgbmFtZSArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77niYfotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOWbvueJh+i1hOa6kOWQjeWtl1xyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSW1nVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJ3BuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5pbWcpICsgbmFtZSArICcuJyArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmq7ogqTotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOearuiCpOWQjeensCBcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNraW5VUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAncG5nJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLnNraW4pICsgbmFtZSArICcuJyArIF87XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz6ZSu6LWE5rqQ54K55ZCN5a2X5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFS2V5UmVzTmFtZSB7XHJcbiAgICAvKiog5qC555uu5b2VICovXHJcbiAgICBSb290UmVzID0gJ3JlcycsXHJcbiAgICAvKiog6YWN572u6KGo55uu5b2VICovXHJcbiAgICBDb25maWdKc29uID0gJ0NvbmZpZ0pzb24nLFxyXG4gICAgLyoqIOWtl+S9k+ebruW9lSAqL1xyXG4gICAgRm9udCA9ICdGb250JyxcclxuICAgIC8qKiBGR1VJ6LWE5rqQ55uu5b2VICovXHJcbiAgICBGR1VJID0gJ0ZHVUknLFxyXG4gICAgLyoqIOWFs+WNoemFjee9ruihqOebruW9lSAqL1xyXG4gICAgU2NlbmVKc29uID0gJ1NjZW5lSnNvbicsXHJcbiAgICAvKiog5YW25a6D55uu5b2VICovXHJcbiAgICBPdGhlciA9ICdPdGhlcicsXHJcbiAgICAvKiogaWNvbuebruW9lSAqL1xyXG4gICAgaWNvbiA9ICdpY29uJyxcclxuICAgIC8qKiBpbWfnm67lvZUgKi9cclxuICAgIGltZyA9ICdpbWcnLFxyXG4gICAgLyoqIOmfs+S5kOaWh+S7tuebruW9lSAqL1xyXG4gICAgbXVzaWMgPSAnbXVzaWMnLFxyXG4gICAgLyoqIOmfs+aViOaWh+S7tuebruW9lSAqL1xyXG4gICAgc291bmQgPSAnc291bmQnLFxyXG4gICAgLyoqIOearuiCpOaWh+S7tuebruW9lSAqL1xyXG4gICAgc2tpbiA9ICdza2luJyxcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gJy4vRUtleVJlc05hbWUnO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tICcuL0tleVJlc01hbmFnZXInO1xyXG4vKipcclxuICog5b+F6KaB55qE5ri45oiP6LWE5rqQ6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFc3NlbnRpYWxSZXNVcmxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFs+WNoemFjee9ruaWh+S7tlxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lQ29uZmlnVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5TY2VuZUpzb24pICsgX25hbWUgKyAnLmpzb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoSnNvbuaWh+S7tlJVTFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOmFjee9ruihqOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbmZpZ0pzb25VUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24pICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGR1VJ5YyFXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5YyF5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSVBhY2tVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZHVUkpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfkvZPlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlrZfkvZPlkI3lrZfvvIzliqDlkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGb250VVJMKF9uYW1lKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRm9udCkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJgOaciemihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FsbFNjZW5lUHJlZmFic05hbWVzOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLy/pooTliLbkvZPlnLrmma/nvJPlrZhcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmVmYWJzU2NlbmVDYWNoZToge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICog6aKE5Yi25L2T6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiIOmihOWItuS9k+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFByZWZhYlVSTChwcmVmYWI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/lhYjlnKjnvJPlrZjkuK3mn6Xmib7lnLrmma/lkI3lrZdcclxuICAgICAgICBpZiAodGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwodGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSkgKyAnQ29udmVudGlvbmFsLycgKyBwcmVmYWIgKyAnLmxoJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3or6XpooTliLbkvZPlnKjlk6rkuKrlnLrmma/kuK3ooqvlr7zlh7rnmoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldLmluZGV4T2YoJ0AnICsgcHJlZmFiICsgJ0AnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDliLDnvJPlrZhcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0gPSBfaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChfaSkgKyAnQ29udmVudGlvbmFsLycgKyBwcmVmYWIgKyAnLmxoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Zyo5Zy65pmv5om+5Yiw6aKE5Yi25L2TJywgcHJlZmFiLCAn5Y+v6IO95piv5rKh5pyJ5a+85Ye65Zy65pmv6aKE5Yi25L2T5YiX6KGo5a+86Ie055qE44CCJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Zy65pmv6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX28g5Zy65pmv6aKE5Yi25L2T6ZuG5ZCIXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UHJlZmFiU2NlbmVOYW1lcyhfbzogYW55KSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICB0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0gPSBfb1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwiLi4vVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcIi4vRUtleVJlc05hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnliJfooajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVJlc01hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEtleVJlc01hbmFnZXI7XHJcblxyXG4gICAgLy/lhbPplK7otYTmupDliJfooahcclxuICAgIHByaXZhdGUgbV9LZXlSZXNMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL+azqOWGjOWFs+mUrui1hOa6kOebruW9lVxyXG4gICAgICAgIHRoaXMubV9LZXlSZXNMaXN0ID0ge1xyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuUm9vdFJlc106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Db25maWdKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkNvbmZpZ0pzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5GR1VJXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZHVUkgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5TY2VuZUpzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuU2NlbmVKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRm9udF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Gb250ICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuT3RoZXJdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycsXHJcbiAgICAgICAgICAgIC8v5YW25LuW6Lev5b6EXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pY29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaWNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmltZ106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmltZyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLm11c2ljXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUubXVzaWMgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5zb3VuZF06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNvdW5kICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc2tpbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLnNraW4gKyAnLycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1fS2V5UmVzTGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5piv5ZCm5a2Y5Zyo5p+Q5Liq5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZktleVJlcyhfa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PSBfa2V5O1xyXG4gICAgICAgIH0pICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5YWz6ZSu54K56LWE5rqQ55qE6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSZXNVUkwoX2tleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjmgIHmt7vliqDlhbPplK7ot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUruWAvFxyXG4gICAgICogQHBhcmFtIF9zdHJpbmcg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkUmVzVXJsKF9rZXk6IHN0cmluZywgX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV0gPSBfc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfc3RyIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGVkaXRLZXlSZXNMaXN0KF9rZXk6IHN0cmluZywgX3N0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9yZXBsYWNlOiBzdHJpbmcgPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIF9yZXBsYWNlID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5L+u5pS56LWE5rqQ6Lev5b6E5aSx6LSl77yM5rKh5pyJJyArIF9rZXkgKyAn6L+Z5Liq5YWz6ZSu6Lev5b6E77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pu/5o2i5omA5pyJ6LWE5rqQ6Lev5b6E5Lit55qE5YWz6ZSu54K56Lev5b6EXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2ldLnJlcGxhY2UoX3JlcGxhY2UsIF9zdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoQnLCBfcmVwbGFjZSwgJ+abv+aNouaIkCcsIF9zdHIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L2957G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoTliJfooahcclxuICAgICAqIEBwYXJhbSBtb2RlbCDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkKHVybHM6IGFueSwgbW9kZWw6IEVSZXNMb2FkTW9kZWwsIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh1cmxzKSkge1xyXG4gICAgICAgICAgICAvL+WOu+mZpOiZmuWAvFxyXG4gICAgICAgICAgICB1cmxzID0gdXJscy5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5YaF5a656ZyA6KaB5Yqg6L29XHJcbiAgICAgICAgaWYgKCF1cmxzIHx8IChBcnJheS5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID09IDApKSB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yqg6L296LWE5rqQXHJcbiAgICAgICAgc3dpdGNoIChtb2RlbCkge1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDM6XHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZeaYrzNE55qE5o6l5Y+j77yM6YCC55So5LqOM0Tpobnnm65cclxuICAgICAgICAgICAgICAgIExheWEubG9hZGVyLmNyZWF0ZSh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMjpcclxuICAgICAgICAgICAgICAgIC8vbG9hZOaYrzJk55qE5o6l5Y+j77yM6YCC55So5LqOMmTpobnnm65cclxuICAgICAgICAgICAgICAgIExheWEubG9hZGVyLmxvYWQodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0QodXJsczogYW55LCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuTG9hZCh1cmxzLCBFUmVzTG9hZE1vZGVsLkQzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hCBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkMkQodXJsczogYW55LCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuTG9hZCh1cmxzLCBFUmVzTG9hZE1vZGVsLkQyLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQzRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkMkRBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkMkQodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botYTmupBcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbm9DbG9uZSDmmK/lkKbkuI3ojrflj5blhYvpmobnmoTotYTmupBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSZXMocmVzVXJsOiBzdHJpbmcsIG5vQ2xvbmU6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGdldFJlcyA9IExheWEubG9hZGVyLmdldFJlcyhyZXNVcmwpO1xyXG4gICAgICAgIGlmICghZ2V0UmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcihcIui1hOa6kOWwmuacquWKoOi9vVwiLCByZXNVcmwpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9DbG9uZSA/IGdldFJlcyA6IGdldFJlcy5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5oyH5a6a6LWE5rqQ5Zyw5Z2A57yT5a2Y44CCXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENsZWFyUmVzKHJlc1VybDogc3RyaW5nKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJSZXMocmVzVXJsKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veaooeW8j1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRVJlc0xvYWRNb2RlbCB7XHJcbiAgICAvKiogM0Qg6LWE5rqQICovXHJcbiAgICBEMyxcclxuICAgIC8qKiAyZCDotYTmupAgKi9cclxuICAgIEQyLFxyXG59IiwiaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuL1Jlc0xvYWRJdGVtXCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L2957uEXHJcbiAqIOi0n+i0o+WkmuS4qui1hOa6kOWKoOi9vemhueeahOe7n+S4gOWKoOi9vVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZEdyb3VwIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogISDov5nph4zmmK/kvp3mrKHliqDovb3lubbkuI3mmK/lkIzml7bliqDovb3nmoRcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+S9nOS4uuWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaXRlbXM6IFJlc0xvYWRJdGVtW10sIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/msqHmnInliqDovb3poblcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mtYXmi7fotJ3vvIzpmLLmraLmsaHmn5PmupDliJfooahcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICAgICAgLy/lvILmraXliJfooajplb/luqZcclxuICAgICAgICBsZXQgX2xlbmd0aDogbnVtYmVyID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIC8v5LiA5q2l5LiA5q2l5raI6LS55byC5q2l5YiX6KGoXHJcbiAgICAgICAgbGV0IF9mOiBGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBvbkl0ZW06IFJlc0xvYWRJdGVtID0gaXRlbXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIG9uSXRlbS5sb2FkQXN5bmMoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65oC76L+b5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChfbGVuZ3RoIC0gaXRlbXMubGVuZ3RoIC0gMSkgKyBpKSAvIF9sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lyg5Ye65Y2V5Liq5Yqg6L296aG55Yqg6L295a6M5oiQ5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5hcmdzID0gW29uSXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uSXRlbUNvbS5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9mKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOmAkuW9kuWKoOi9veaWueazlVxyXG4gICAgICAgIF9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqIEBwYXJhbSBpdGVtcyDotYTmupDliqDovb3pobnpm4blkIhcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfb25JdGVtQ29tIOWNleS4qui1hOa6kOmhueWKoOi9veWujOaIkOWbnuiwg++8jOS8muW4puS4iuivpei1hOa6kOmhueWunuS+i+WPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3luYyhpdGVtczogUmVzTG9hZEl0ZW1bXSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGl0ZW1zLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzLCBfb25JdGVtQ29tKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZXNMb2FkLCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwiLi9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L296aG5XHJcbiAqIOi0n+i0o+S4gOe7hOi1hOa6kOWIl+ihqOeahOWKoOi9vVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZEl0ZW0ge1xyXG4gICAgLyoqIOWKoOi9veaooeW8jyAqL1xyXG4gICAgcHJpdmF0ZSBtX2xvYWRNb2RlbDogRVJlc0xvYWRNb2RlbDtcclxuXHJcbiAgICAvKiog5Yqg6L295YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBhbnk7XHJcblxyXG4gICAgLyoqIOWKoOi9veWujOaIkOWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX2NvbUJhY2s6IExheWEuSGFuZGxlcjtcclxuICAgIC8qKiDliqDovb3ov5vluqblm57osIMgKi9cclxuICAgIHByaXZhdGUgbV9vblByb2dyZXNzOiBMYXlhLkhhbmRsZXI7XHJcblxyXG4gICAgLyoqIOi1hOa6kOi3r+W+hOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3JlczogYW55O1xyXG5cclxuICAgIC8qKiDojrflj5blhbPplK7plK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBfcmVzIOi1hOa6kOWIl+ihqFxyXG4gICAgICogQHBhcmFtIF9tb2RlIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX2NvbUJhY2sg5Yqg6L295a6M5oiQ5pe255qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihfcmVzOiBhbnksIF9tb2RlOiBFUmVzTG9hZE1vZGVsLCBfa2V5PzogYW55LCBfY29tQmFjaz86IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLm1fcmVzID0gX3JlcztcclxuICAgICAgICB0aGlzLm1fbG9hZE1vZGVsID0gX21vZGU7XHJcbiAgICAgICAgdGhpcy5tX2tleSA9IF9rZXk7XHJcbiAgICAgICAgdGhpcy5tX2NvbUJhY2sgPSBfY29tQmFjaztcclxuICAgICAgICB0aGlzLm1fb25Qcm9ncmVzcyA9IF9vblByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/ljIXoo4Xov5vluqblm57osINcclxuICAgICAgICBsZXQgX19vblByb2dyZXNzOiBMYXlhLkhhbmRsZXIgPSBfb25Qcm9ncmVzcztcclxuICAgICAgICBpZiAoX19vblByb2dyZXNzICYmIHRoaXMubV9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIF9fb25Qcm9ncmVzcyA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbaV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9vblByb2dyZXNzLmFyZ3MgPSBbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1fb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICBfX29uUHJvZ3Jlc3MgPSB0aGlzLm1fb25Qcm9ncmVzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubV9jb21CYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghb25Db21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCB0aGlzLm1fY29tQmFjaywgX19vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tQmFjay5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pLCBfX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIG9uQ29tcGxldGVkLCBfX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgX01haW5Db25maWcgZnJvbSBcInNyYy9Db25maWcvX01haW5Db25maWdcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcInNyYy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBEMk1hbmFnZXIgZnJvbSBcIi4vRDIvRDJNYW5hZ2VyXCI7XHJcbmltcG9ydCBEM01hbmFnZXIgZnJvbSBcIi4vRDMvRDNNYW5hZ2VyXCI7XHJcbmltcG9ydCBfVENvbmZpZyBmcm9tIFwiLi9fVENvbmZpZ1wiO1xyXG5cclxuLyoqIFxyXG4gKiDmoYbmnrblhaXlj6NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRNYWluIHtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICAvL+azqOWFpeahhuaetuS/oeaBr1xyXG4gICAgICAgIHdpbmRvd1tfVENvbmZpZy5OYW1lXSA9IHtcclxuICAgICAgICAgICAgLyoqIOahhuaetumFjee9riAqL1xyXG4gICAgICAgICAgICAuLi5fVENvbmZpZyxcclxuICAgICAgICAgICAgLyoqIGxheWHphY3nva4gKi9cclxuICAgICAgICAgICAgZ2FtZUNvbmZpZzogeyAuLi5HYW1lQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDpobnnm67phY3nva4gKi9cclxuICAgICAgICAgICAgX21haW5Db25maWc6IHsgLi4uX01haW5Db25maWcgfSxcclxuICAgICAgICAgICAgLyoqIOa4uOaIj+mFjee9riAqL1xyXG4gICAgICAgICAgICBfZ2FtZUNvbmZpZzogeyAuLi5fR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITnp43lkITmoLfnmoTnrqHnkIblmahcclxuICAgICAgICBEM01hbmFnZXIuaW5pdCgpOy8vM0TnrqHnkIblmahcclxuICAgICAgICBEMk1hbmFnZXIuaW5pdCgpOy8vdWnnrqHnkIblmahcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDljZXkvovlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RhbmNlVCB7XHJcbiAgICAvKiog5Y2V5L6L5bGe5oCn5ZCNICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZUtleTogc3ltYm9sID0gU3ltYm9sKCk7XHJcbiAgICAvKiog5Y2V5L6L5bGe5oCn5ZCNICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZU5hbWU6IHN0cmluZyA9ICdpbnN0YW5jZSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkvovnsbvoo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfaWZQYXNzaXZlIOaYr+WQpuiiq+WKqOiuv+mXrueahOaXtuWAmeWIm+W7uuWunuS+i++8jOS4umZhbHNl55qE6K+d5Lya56uL5Y2z5Yib5bu65Ye65a6e5L6LXHJcbiAgICAgKiAhIOiiq+ijhemlsOeahOexu+eahOaehOmAoOaWueazleS4jeiDveaXtnB1YmxpY+exu+Wei+eahFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlSW5zdGFuY2UoX2lmUGFzc2l2ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChfaWZQYXNzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOS4gOS4quebkeWQrOWxnuaAp1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgSW5zdGFuY2VULkluc3RhbmNlTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlTmFtZV0gPSBuZXcgdGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5pWw57uE5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheVV0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5Lik5Liq5pWw57uE5YaF5a655piv5ZCm55u45ZCMXHJcbiAgICAgKiBAcGFyYW0geCB45pWw57uEXHJcbiAgICAgKiBAcGFyYW0geSB55pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udGVudElmU2FtZSh4OiBhbnlbXSwgeTogYW55W10pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoISh4KSB8fCAhKHkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHgubGVuZ3RoICE9IHkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy/mlrnms5XvvJog55So5LiA5LiqbW9w5p2l57uf6K6heOaVsOe7hOWQhOS4quWFg+e0oOWHuueOsOeahOasoeaVsO+8jOWGjeeUqHnmlbDnu4TmnaXpgJLlh4/lkITlhYPntKDlh7rnjrDnmoTmrKHmlbDvvIzlpoLmnpzmnIDnu4jnu5PmnpzkuLow5YiZ5Lik5Liq5pWw57uE55u45ZCMXHJcbiAgICAgICAgbGV0IG06IE1hcDxhbnksIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgeC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG0uc2V0KGl0ZW0sIChtLmdldChpdGVtKSB8fCAwKSArIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBtLnNldChpdGVtLCAobS5nZXQoaXRlbSkgfHwgMCkgLSAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcclxuICAgICAgICBtLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGkgKz0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGkgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOWOu+mHjeS/neeVmemdoOWJjeeahOWGheWuuVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tljrvph43kv53nlZnpnaDlkI7nmoTlhoXlrrlcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmV2ZXJzZVJlc2VydmVVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyLnJldmVyc2UoKSkpLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvueixoeaVsOe7hOWOu+mHjVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfRiDojrflj5blr7nmr5TplK7lgLzlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmpVbmlxdWU8VD4oYXJyOiBUW10sIF9GOiAobzogVCkgPT4gc3RyaW5nKTogVFtdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMSwgbGVuID0gYXJyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX0YoYXJyW2ldKSA9PT0gX0YoYXJyW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tOyAgICAgICAgLy8g5q+P5Yig6Zmk5LiA5Liq5pWwaueahOWAvOWwseWHjzFcclxuICAgICAgICAgICAgICAgICAgICBsZW4tLTsgICAgICAvLyBq5YC85YeP5bCP5pe2bGVu5Lmf6KaB55u45bqU5YePMe+8iOWHj+WwkeW+queOr+asoeaVsO+8jOiKguecgeaAp+iDve+8iSAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7/mjaLmlbDnu4TnmoTmn5DkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2xkT2JqIOiiq+abv+aNoueahOWFg+e0oFxyXG4gICAgICogQHBhcmFtIG5ld09iaiDmm7/mjaLlhYPntKBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXBsYWNlPFQ+KGFycjogVFtdLCBvbGRPYmo6IFQsIG5ld09iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9sZE9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEsIG5ld09iaik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKrlhYPntKDlubbov5Tlm57nu5PmnpxcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2JqIOWIoOmZpOebruagh+WvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUl0ZW08VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u57Si5byV5Yig6Zmk5LiA5Liq5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIGluZGV4IOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUF0PFQ+KGFycjogVFtdLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPD0gaW5kZXgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOaYr+WQpuWMheWQq+afkOS4quaVsOaNrlxyXG4gICAgICogQHBhcmFtIGFyciBcclxuICAgICAqIEBwYXJhbSBvYmogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udGFpbnM8VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpI3liLbkuIDkuKrmlbDnu4RcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29weTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrmiZPkubHmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg55uu5qCH5pWw57uEIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwc2V0QXJyYXk8VD4oX2FycmF5OiBUW10pOiBUW10ge1xyXG4gICAgICAgIC8v5Lmx5bqPXHJcbiAgICAgICAgcmV0dXJuIF9hcnJheS5zb3J0KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3nmoTpmo/mnLrlgLzvvIzlj6/mjIflrprplb/luqZcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg5Y6f5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gX24g6ZqP5py65Liq5pWwXHJcbiAgICAgKiBAcGFyYW0gX3dlaWdodCDmnYPph43liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSYW5kb21HZXQ8VD4oX2FycmF5OiBUW10sIF9uOiBudW1iZXIgPSAxLCBfd2VpZ2h0OiBudW1iZXJbXSA9IF9hcnJheS5tYXAoKGl0ZW0pID0+IHsgcmV0dXJuIDE7IH0pKTogVFtdIHtcclxuICAgICAgICBpZiAoX2FycmF5Lmxlbmd0aCA8PSAwKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfcm9vdEFycmF5OiBUW10gPSBbXTtcclxuICAgICAgICBsZXQgX25ld0FycmF5OiBUW10gPSBbXTtcclxuICAgICAgICAvL+adg+mHjee0ouW8leWIl+ihqFxyXG4gICAgICAgIGxldCBfaW5kZXhBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAvL+aJvuWIsOacgOWwj+eahOadg+mHjVxyXG4gICAgICAgIGxldCBfbWluV2VpZ2h0OiBudW1iZXIgPSBfd2VpZ2h0WzBdO1xyXG4gICAgICAgIF93ZWlnaHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfbWluV2VpZ2h0ID0gTWF0aC5taW4oX21pbldlaWdodCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3dlaWdodCA9IF93ZWlnaHQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGl0ZW0gKiAoMSAvIF9taW5XZWlnaHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfYXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgX3Jvb3RBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX3dlaWdodFtpbmRleF07IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIF9pbmRleEFycmF5LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfbjsgX2krKykge1xyXG4gICAgICAgICAgICBpZiAoX3Jvb3RBcnJheS5sZW5ndGggPD0gMCkgeyBicmVhazsgfVxyXG4gICAgICAgICAgICBfaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfaW5kZXhBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBfaW5kZXhBcnJheSA9IF9pbmRleEFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gX2luZGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX25ld0FycmF5LnB1c2goX3Jvb3RBcnJheS5zcGxpY2UoX2luZGV4QXJyYXlbX2luZGV4XSwgMSlbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbmV3QXJyYXk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz5LqOdjPlkJHph4/nmoTlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYzVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4fkuIDkuKrlrZfnrKbkuLLmnoTlu7p2M+WQkemHj1xyXG4gICAgICogQHBhcmFtIHN0ciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVZlY3RvcjMoc3RyOiBzdHJpbmcsIF9vdXRWMzogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJywnKTtcclxuICAgICAgICBfb3V0VjMuc2V0VmFsdWUoTnVtYmVyKHN0cnNbMF0pLCBOdW1iZXIoc3Ryc1sxXSksIE51bWJlcihzdHJzWzJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5WM+WQkemHj+mVv+W6plxyXG4gICAgICogQHBhcmFtIF92MyDnm67moIflkJHph49cclxuICAgICAqIEBwYXJhbSBfbCDnm67moIfplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWM0xlbmd0aChfdjM6IExheWEuVmVjdG9yMywgX2w6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF92Myk7XHJcbiAgICAgICAgaWYgKF9sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgX2E6IG51bWJlciA9IF9sIC8gX2xlbmd0aDtcclxuICAgICAgICAgICAgX3YzLnggPSBfdjMueCAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueSA9IF92My55ICogX2E7XHJcbiAgICAgICAgICAgIF92My56ID0gX3YzLnogKiBfYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnmj5LlgLznp7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX2xlcnAg5o+S5YC856e75Yqo5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICogQHBhcmFtIF9pbml0aWFsTGVuZ3RoIOWIneWni+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdExlcnBNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfbGVycDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMywgX2luaXRpYWxMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuZGlzdGFuY2UoX3BvcywgX3RyYWdldFBvdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMubGVycChfcG9zLCBfdHJhZ2V0UG90LCBfbGVycCwgX291dFYzKTtcclxuICAgICAgICAvL+i/lOWbnui/m+W6plxyXG4gICAgICAgIHJldHVybiAxIC0gKF9kaXN0YW5jZSAvIF9pbml0aWFsTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueWMgOmAn+enu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfc3BlZWQg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdENvbnN0YW50U3BlZWRNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfc3BlZWQ6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfaWZFbmQ6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IF9kaWZmZXJWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnN1YnRyYWN0KF90cmFnZXRQb3QsIF9wb3MsIF9kaWZmZXJWMyk7XHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfZGlmZmVyVjMpO1xyXG4gICAgICAgIGlmIChfZGlzdGFuY2UgPiBfc3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWM0xlbmd0aChfZGlmZmVyVjMsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55u45YqgXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfcG9zLCBfZGlmZmVyVjMsIF9vdXRWMyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2lmRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJvdGF0ZUF4aXNWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICog5peL6L2s5LiA5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX3YzIOmcgOimgeaXi+i9rOeahOmCo+S4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF9hbmdlciDml4vovazop5LluqZcclxuICAgICAqIEBwYXJhbSBfYXhpcyDml4vovazovbRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSb3RhdGVWMyhfdjM6IExheWEuVmVjdG9yMywgX2FuZ2VyOiBudW1iZXIsIF9heGlzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLnJvdGF0ZUF4aXNWMykge1xyXG4gICAgICAgIC8v5peL6L2s5Zub5YWD5pWwXHJcbiAgICAgICAgdmFyIHEgPSBuZXcgTGF5YS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgTGF5YS5RdWF0ZXJuaW9uLmNyZWF0ZUZyb21BeGlzQW5nbGUoX2F4aXMsIChfYW5nZXIgLyAxODApICogTWF0aC5QSSwgcSk7XHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnRyYW5zZm9ybVF1YXQoX3YzLCBxLCBfdjMpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOahhuaetumFjee9ruaWh+S7tlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RDb25maWcge1xyXG4gICAgLyoqIOWQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBOYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBaSE5hbWU6IHN0cmluZyA9IFwiTGF5YUJveOWwj+a4uOaIj1wiO1xyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWZXJzaW9uczogc3RyaW5nID0gXCIwLjAuMC4xXCI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9