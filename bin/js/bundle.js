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
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_T/D2/FGUI/FGUIPack */ "./src/_T/D2/FGUI/FGUIPack.ts");
/* harmony import */ var src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_T/Main/BaseInitLoad */ "./src/_T/Main/BaseInitLoad.ts");
/* harmony import */ var src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_T/Res/ComResUrl */ "./src/_T/Res/ComResUrl.ts");
/* harmony import */ var src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_T/Res/EKeyResName */ "./src/_T/Res/EKeyResName.ts");
/* harmony import */ var src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_T/Res/EssentialResUrls */ "./src/_T/Res/EssentialResUrls.ts");
/* harmony import */ var src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_T/Res/KeyResManager */ "./src/_T/Res/KeyResManager.ts");
/* harmony import */ var src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_T/Res/ResLoad */ "./src/_T/Res/ResLoad.ts");
/* harmony import */ var src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/_T/Res/ResLoadItem */ "./src/_T/Res/ResLoadItem.ts");
/* harmony import */ var _ResE_EFont__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ResE/EFont */ "./src/Game/ResE/EFont.ts");
/* harmony import */ var _ResE_EMusics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ResE/EMusics */ "./src/Game/ResE/EMusics.ts");
/* harmony import */ var _ResE_ESounds__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ResE/ESounds */ "./src/Game/ResE/ESounds.ts");
/* harmony import */ var _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../UICon/initLoad/initEmptyScreenUICon */ "./src/Game/UICon/initLoad/initEmptyScreenUICon.ts");
/* harmony import */ var _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../UICon/initLoad/initLoadUICon */ "./src/Game/UICon/initLoad/initLoadUICon.ts");
/* harmony import */ var _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../_config/BuildConfigTs */ "./src/Game/_config/BuildConfigTs.ts");
/* harmony import */ var _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../_prefabsName/_EAllScenePrefabsNames */ "./src/Game/_prefabsName/_EAllScenePrefabsNames.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");























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
        this.m_initEmptyScreenUICon = new _UICon_initLoad_initEmptyScreenUICon__WEBPACK_IMPORTED_MODULE_18__["default"]();
        this.m_initLoadUICon = new _UICon_initLoad_initLoadUICon__WEBPACK_IMPORTED_MODULE_19__["default"]();
    }
    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    loadBefore() {
        //设置路径
        for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_21__["_EAllScenePrefabsNames"]) {
            src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_12__["default"].addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_12__["default"].getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_10__["EKeyResName"].RootRes) + `${_i}/`); //注入预制体路径
        }
        //设置预制体场景对照
        src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_21__["_EAllScenePrefabsNames"]);
    }
    /**
     * 获取加载项列表
     */
    getLoadItems() {
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
        new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_7__["FGUIPack"](src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_14__["default"](_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_13__["EResLoadModel"].D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    addFGUIPackage(_name) {
        fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].FGUIPackURL(_name));
    }
    //注入配置表加载项
    immitConfigLoadItems(_loadItems) {
        //配置表
        let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_20__["BuildConfigTs"].getAllConfig().map((item) => {
            return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigJsonURL(item.fileName);
        });
        //场景json文件
        let sceneJsonRes = [];
        for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_22__["_EAllExportSceneName"]) {
            sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_22__["_EAllExportSceneName"][_i]));
        }
        //
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_14__["default"]([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_13__["EResLoadModel"].D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_5__["default"].BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_20__["BuildConfigTs"].getAllConfig());
            console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_6__["default"].packLogLight('所有配置表内容：', _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_20__["BuildConfigTs"].getAllConfig()));
        }), Laya.Handler.create(this, (i) => {
            // console.log('配置表加载进度', i);
        }, undefined, false)));
    }
    //注入其他资源加载项
    immitOtherLoadItems(_loadItems) {
        let _audios = [];
        for (let _i in _ResE_EMusics__WEBPACK_IMPORTED_MODULE_16__["EMusics"]) {
            _ResE_EMusics__WEBPACK_IMPORTED_MODULE_16__["EMusics"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_9__["default"].MusicURL(_ResE_EMusics__WEBPACK_IMPORTED_MODULE_16__["EMusics"][_i]));
        }
        for (let _i in _ResE_ESounds__WEBPACK_IMPORTED_MODULE_17__["ESounds"]) {
            _ResE_ESounds__WEBPACK_IMPORTED_MODULE_17__["ESounds"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_9__["default"].SoundURL(_ResE_ESounds__WEBPACK_IMPORTED_MODULE_17__["ESounds"][_i]));
        }
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_14__["default"](_audios, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_13__["EResLoadModel"].D2, 'audio', Laya.Handler.create(this, () => {
            console.log('所有音效资源：', _audios);
        })));
        let _font = [];
        for (let _i in _ResE_EFont__WEBPACK_IMPORTED_MODULE_15__["EFont"]) {
            _ResE_EFont__WEBPACK_IMPORTED_MODULE_15__["EFont"][_i] && _font.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_11__["default"].FontURL(_ResE_EFont__WEBPACK_IMPORTED_MODULE_15__["EFont"][_i]));
        }
        _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_14__["default"](_font, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_13__["EResLoadModel"].D2, 'font', Laya.Handler.create(this, () => {
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
        console.log('打包测试65');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fQ29uc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9fR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19NYWluQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lQ29tLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lRW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQYXVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lUGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFVJLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0luaXRFbXB0eVNjcmVlbkJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9GR1VJX2luaXRMb2FkVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdExvYWQvSW5pdExvYWRCaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvX1Rlc3QvRkdVSV9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9fVGVzdEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9TY2VuZU5vZGVDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL0RhdGFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvTWFpbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1NldERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Nob3J0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2lnbkRhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL1Rlc3REYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL01haW5EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9TaG9ydERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NpZ25EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvdHlwZS9UZXN0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EZWJ1Zy9DdXN0b21EZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9HYW1lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYWluL0dhbWVJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9NYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VGb250LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRU11c2ljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9SZXNFL0VTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9pbml0TG9hZC9pbml0TG9hZFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvQnVpbGRDb25maWdUcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL19TY2VuZU5vZGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL19UZXN0Q29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3ByZWZhYnNOYW1lL19FQWxsU2NlbmVQcmVmYWJzTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3NjZW5lTmFtZS9fRUFsbEV4cG9ydFNjZW5lTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9Db25maWdUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L0RhdGFUZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL190ZXN0L090aGVyVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9QYWNrVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9UZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0NvbmZpZ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRDJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUm9vdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9EM01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9EYXRhVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EZWJ1Zy9CYXNlRGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0dhbWVUL0dhbWVQb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0NvbVJlc1VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Ucy9JbnN0YW5jZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL1YzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL19UQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztHQUVHO0FBQ1ksTUFBTSxZQUFZOztBQUM3QixhQUFhO0FBQ0MsaUJBQUksR0FBRztJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUk47QUFBQTtBQUFBO0FBQXdDO0FBRXhDOztHQUVHO0FBQ1ksTUFBTSxXQUFXOztBQUM1QixlQUFlO0FBQ0Qsc0JBQVUsR0FBWSxD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QUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87UUFDUCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTztRQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFD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T0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O0FBWnVCLG9CQUFZLEdBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0VuRjtBQUFBO0FBQUE7O0dBRUc7QUFDWSxNQUFNLFFBQVE7O0FBQ3pCLFNBQVM7QUFDSyxhQUFJLEdBQVcsY0FBYyxDQUFDO0FBQzVDLFdBQVc7QUFDRyxlQUFNLEdBQVcsWUFBWSxDQUFDO0FBQzVDLFNBQVM7QUFDSyxpQkFBUSxHQUFXLFNBQVMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9NYWluLnRzXCIpO1xuIiwiLyoqXHJcbiAqIOW4uOmHj+mFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0NvbnN0Q29uZmlnIHtcclxuICAgIC8qKiBmZ3Vp55u45YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUkgPSB7XHJcbiAgICAgICAgLyoqIOWMheWQjue8gCAqL1xyXG4gICAgICAgIHBhY2thZ2VGaWxlRXh0ZW5zaW9uOiAnYmluJyxcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgX01haW5Db25maWcgZnJvbSBcIi4vX01haW5Db25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9HYW1lQ29uZmlnIHtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/muLjmiI/mtYvor5UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZHYW1lVGVzdDogYm9vbGVhbiA9ICghX01haW5Db25maWcuT25MaW5lKSAmJiBmYWxzZTtcclxuICAgIC8qKiDmmK/lkKblvIDlkK/mtYvor5XnsbsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkRlYnVnOiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIHRydWU7XHJcbn0iLCIvKipcclxuICog6aG555uu5pyA6auY5bGC6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTWFpbkNvbmZpZyB7XHJcbiAgICAvKiog5ri45oiP5omA5bGe5Zui6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlYW06IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/lkI3lrZfvvIzlsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOYW1lOiBzdHJpbmcgPSAnTGF5YU1pbmlHYW1lJztcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkhOYW1lOiBzdHJpbmcgPSAnTGF5YUJveOWwj+a4uOaIjyc7XHJcbiAgICAvKiog5ri45oiP6K+05piOICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV4cGxhaW46IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiP77yM6K+05piO44CCJztcclxuICAgIC8qKiDmlbDmja7niYjmnKwg5Y+v5Lul5bim5a2X5q+N5L2G5piv5bC96YeP5LiN6KaB5Ye6546w5Lit5paH5ZKM54m55q6K5a2X56ymKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmVyc2lvbnM6IHN0cmluZyA9ICcwLjAuMC4xJztcclxuICAgIC8qKiDmmK/lkKbkuIrnur/kuLpmYWxzZeWImeaYr+W8gOWPkeeOr+WigyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPbkxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbW1vbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDb20gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1xM25nOXdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDb20ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lQ29tPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ29tXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1kYm1pMTNcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUN1c3RvbXNMb2FkaW5nXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3NoYWRlID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lRW5kIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbGF4ZDE5XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lRW5kIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUVuZD4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUVuZFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUxvYWRpbmcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9zaGFkZTpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2Exb1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUxvYWRpbmcge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lTG9hZGluZz4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZUxvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tc3l0YTlmXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBhdXNlIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tNnZjcTVnXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGF1c2Uge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGF1c2U+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVQYXVzZVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVBsYXkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExclwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVBsYXkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lUGxheT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBsYXlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTZXQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNHVcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVTZXQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU2V0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU2V0XCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lU3RhcnQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1nN2ExdlwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVN0YXJ0IHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVN0YXJ0PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lU3RhcnRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0TWFpbiBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX1VJQnV0dG9uOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9VSTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGVzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fdGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9kYXRhVGVzdFRleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX190ZXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbW85anM5eFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fVUlCdXR0b24gPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX1VJID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV90ZXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX2RhdGFUZXN0VGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fX3Rlc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9sb29rVkFkOmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9sb29rVkFkVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX2xvb2tWQWQ6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hhcmU6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX3NoYXJlVGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3NoYXJlOmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBtX3Nob3dUb2FzdDpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hvd1RvYXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Nob3dUb2FzdDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW10MXB3OXlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0UGxhdGZvcm0ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFBsYXRmb3JtPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFBsYXRmb3JtXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWQgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvb2tWQWRUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHRcdHRoaXMubV9fbG9va1ZBZCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV9zaGFyZSA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fc2hhcmVUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV9fc2hhcmUgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fc2hvd1RvYXN0ID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDgpKTtcclxuXHRcdHRoaXMubV9fc2hvd1RvYXN0ID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lVGVzdFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fYmc6Zmd1aS5HR3JhcGg7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1taDY2ZTl6XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZVRlc3RVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVRlc3RVSVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9iZyA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfUEdhbWVTZXQgZnJvbSBcIi4vRkdVSV9QR2FtZVNldFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBhdXNlIGZyb20gXCIuL0ZHVUlfUEdhbWVQYXVzZVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIGZyb20gXCIuL0ZHVUlfUEdhbWVDdXN0b21zTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUxvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUxvYWRpbmdcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVQbGF5IGZyb20gXCIuL0ZHVUlfUEdhbWVQbGF5XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lU3RhcnQgZnJvbSBcIi4vRkdVSV9QR2FtZVN0YXJ0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFVJIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0VUlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVFbmQgZnJvbSBcIi4vRkdVSV9QR2FtZUVuZFwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0TWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUNvbSBmcm9tIFwiLi9GR1VJX1BHYW1lQ29tXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTWFpbiBmcm9tIFwiLi9GR1VJX1BHYW1lTWFpblwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBmcm9tIFwiLi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbkJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVNldC5VUkwsIEZHVUlfUEdhbWVTZXQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQYXVzZS5VUkwsIEZHVUlfUEdhbWVQYXVzZSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTG9hZGluZy5VUkwsIEZHVUlfUEdhbWVMb2FkaW5nKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lUGxheS5VUkwsIEZHVUlfUEdhbWVQbGF5KTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU3RhcnQuVVJMLCBGR1VJX1BHYW1lU3RhcnQpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVUZXN0VUkuVVJMLCBGR1VJX1BHYW1lVGVzdFVJKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lRW5kLlVSTCwgRkdVSV9QR2FtZUVuZCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RNYWluLlVSTCwgRkdVSV9QR2FtZVRlc3RNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ29tLlVSTCwgRkdVSV9QR2FtZUNvbSk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZU1haW4uVVJMLCBGR1VJX1BHYW1lTWFpbik7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybS5VUkwsIEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0pO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX0VtcHR5U2NyZWVuVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vN2t0emliOG9xM25nMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9FbXB0eVNjcmVlblVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9FbXB0eVNjcmVlblVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0RW1wdHlTY3JlZW5cIiwgXCJFbXB0eVNjcmVlblVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9FbXB0eVNjcmVlblVJIGZyb20gXCIuL0ZHVUlfRW1wdHlTY3JlZW5VSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEVtcHR5U2NyZWVuQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX0VtcHR5U2NyZWVuVUkuVVJMLCBGR1VJX0VtcHR5U2NyZWVuVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX2luaXRMb2FkVUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgbV9wcm9ncmVzczpmZ3VpLkdQcm9ncmVzc0JhcjtcclxuXHRwdWJsaWMgbV9sb2FkaW5nX3Byb2dyZXNzOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2xvZ286Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YTpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbGF5YV92OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2dhbWVfZXhwbGFpbjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL24zb2VkcHA2bmlocjBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfaW5pdExvYWRVSSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfaW5pdExvYWRVST4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiSW5pdExvYWRcIiwgXCJpbml0TG9hZFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdFx0dGhpcy5tX3Byb2dyZXNzID0gPGZndWkuR1Byb2dyZXNzQmFyPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX2xvYWRpbmdfcHJvZ3Jlc3MgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX3RleHRfbG9nbyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgzKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg0KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDUpKTtcclxuXHRcdHRoaXMubV90ZXh0X2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNikpO1xyXG5cdFx0dGhpcy5tX3RleHRfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg3KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sYXlhX3YgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZ2FtZV9leHBsYWluID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuaW1wb3J0IEZHVUlfaW5pdExvYWRVSSBmcm9tIFwiLi9GR1VJX2luaXRMb2FkVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRMb2FkQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX2luaXRMb2FkVUkuVVJMLCBGR1VJX2luaXRMb2FkVUkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1Rlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fdGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2h4dTR6YzlkaW9vODBcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1Rlc3RNYWluPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJfVGVzdFwiLCBcIlRlc3RNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9UZXN0TWFpbiBmcm9tIFwiLi9GR1VJX1Rlc3RNYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfVGVzdEJpbmRlciB7XHJcblx0cHVibGljIHN0YXRpYyBiaW5kQWxsKCk6dm9pZCB7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9UZXN0TWFpbi5VUkwsIEZHVUlfVGVzdE1haW4pO1xyXG5cdH1cclxufSIsImltcG9ydCBCYXNlQ29uZmlnUHJveHkgZnJvbSBcInNyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfU2NlbmVOb2RlQ29uZmlnIH0gZnJvbSBcIi4uL19jb25maWcvX1NjZW5lTm9kZUNvbmZpZ1wiO1xyXG4vKipcclxuICog5Zy65pmv6IqC54K56YWN572u6KGo5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5AQ29uZmlnVC5EZWNvcmF0ZUNvbmZpZ1Byb3h5KF9TY2VuZU5vZGVDb25maWcpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTm9kZUNvbmZpZ1Byb3h5IGV4dGVuZHMgQmFzZUNvbmZpZ1Byb3h5PF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGU+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNjZW5lTm9kZUNvbmZpZ1Byb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h2lk6I635Y+W5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gX2lkIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieUlkR2V0RGF0YShfaWQ6IG51bWJlcik6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBfaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flhbPljaHlkI3lrZfojrflj5blhbPljaHmlbDmja5cclxuICAgICAqIEBwYXJhbSBfbmFtZSDlhbPljaHlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ5TmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3QuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IF9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5Zy65pmv5ZCN5a2X6I635Y+W5pWw5o2u5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieVNjZW5lTmFtZUdldERhdGEoX25hbWU6IHN0cmluZyk6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2NlbmUgPT0gX25hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29uc3RQcm94eSB9IGZyb20gXCJzcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eVwiO1xyXG5pbXBvcnQgQ29uZmlnVCBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XluLjph4/phY3nva7ooajku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBDb25maWdULkRlY29yYXRlQ29uZmlnUHJveHkoX1Rlc3RDb25zdClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdENvbnN0UHJveHkgZXh0ZW5kcyBCYXNlQ29uc3RQcm94eTxfVGVzdENvbnN0LkRhdGFUeXBlPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3RDb25zdFByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgTWFpbkRhdGFQcm94eSB9IGZyb20gXCIuL01haW5EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4vU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBTaG9ydERhdGFQcm94eSBmcm9tIFwiLi9TaG9ydERhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTaWduRGF0YVByb3h5IH0gZnJvbSBcIi4vU2lnbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4vVGVzdERhdGFQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNrueuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRGF0YU1hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5omA5pyJ5pWw5o2uXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIE1haW5EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTZXREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaWduRGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgU2hvcnREYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IE1haW5EYXRhIGZyb20gXCIuL3R5cGUvTWFpbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShNYWluRGF0YSlcclxuZXhwb3J0IGNsYXNzIE1haW5EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8TWFpbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTWFpbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTZXREYXRhIGZyb20gXCIuL3R5cGUvU2V0RGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNldERhdGEpXHJcbmV4cG9ydCBjbGFzcyBTZXREYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2V0RGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTZXREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VTaG9ydERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZVNob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2hvcnREYXRhIGZyb20gXCIuL3R5cGUvU2hvcnREYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li05pe25pWw5o2uXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2hvcnREYXRhKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydERhdGFQcm94eSBleHRlbmRzIEJhc2VTaG9ydERhdGFQcm94eTxTaG9ydERhdGE+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNob3J0RGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNpZ25EYXRhIGZyb20gXCIuL3R5cGUvU2lnbkRhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaWduRGF0YSlcclxuZXhwb3J0IGNsYXNzIFNpZ25EYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8U2lnbkRhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2lnbkRhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZUxvY2FsRGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlTG9jYWxEYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBUZXN0RGF0YSBmcm9tIFwiLi90eXBlL1Rlc3REYXRhXCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoVGVzdERhdGEpXHJcbmV4cG9ydCBjbGFzcyBUZXN0RGF0YVByb3h5IGV4dGVuZHMgQmFzZUxvY2FsRGF0YVByb3h5PFRlc3REYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFRlc3REYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog5Li76KaB5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluRGF0YSBleHRlbmRzIEJhc2VEYXRhIHtcclxuICAgIC8vXHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VEYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXREYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOmfs+aViCAqL1xyXG4gICAgaWZPcGVuU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuaJk+W8gOiDjOaZr+mfs+S5kCAqL1xyXG4gICAgaWZPcGVuTXVzaWM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+mch+WKqCAqL1xyXG4gICAgaWZPcGVuVmlicmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YSBleHRlbmRzIEJhc2VEYXRhIHsgfSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDnrb7liLDmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3REYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyaW5nOiBzdHJpbmcgPSAnc3RyaW5nJztcclxuICAgIGJvb2xlYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgICBhOiBudW1iZXIsXHJcbiAgICAgICAgYjogc3RyaW5nLFxyXG4gICAgICAgIGM6IGJvb2xlYW5cclxuICAgIH0gPSB7XHJcbiAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgIGI6ICdiJyxcclxuICAgICAgICAgICAgYzogdHJ1ZSxcclxuICAgICAgICB9O1xyXG59IiwiaW1wb3J0IEJhc2VEZWJ1ZyBmcm9tIFwic3JjL19UL0RlYnVnL0Jhc2VEZWJ1Z1wiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDoh6rlrprkuYnosIPor5Xlr7nosaFcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURlYnVnIGV4dGVuZHMgQmFzZURlYnVnIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEN1c3RvbURlYnVnO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlciBmcm9tIFwiLi9VSUNvbi9VSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IFRlc3RNYWluIGZyb20gXCIuL190ZXN0L1Rlc3RNYWluXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbiB7XHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmuLjmiI/liJ3lp4vljJbliqDovb3lrp7kvotcclxuICAgICAgICBsZXQgX2dhbWVJbml0TG9hZDogR2FtZUluaXRMb2FkID0gbmV3IEdhbWVJbml0TG9hZCgpO1xyXG4gICAgICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgX2dhbWVJbml0TG9hZC5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0TG9hZENvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+WKoOi9veWujOaIkFxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdExvYWRDb20oKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITkuKrnrqHnkIblmahcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5Zy65pmv566h55CG5ZmoXHJcbiAgICAgICAgVUlDb25NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL3Vp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5pWw5o2u566h55CG5ZmoXHJcbiAgICAgICAgLy9cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgLy8gVE9ETyDov5vlhaXmtYvor5XmqKHlnZdcclxuICAgICAgICBUZXN0TWFpbi5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAqL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgX1Rlc3RCaW5kZXIgZnJvbSBcInNyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyXCI7XHJcbmltcG9ydCBDb25maWdULCB7IElCYXNlQ29uZmlnQ29udGFpbmVyIH0gZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IHsgRkdVSVBhY2sgfSBmcm9tIFwic3JjL19UL0QyL0ZHVUkvRkdVSVBhY2tcIjtcclxuaW1wb3J0IEJhc2VJbml0TG9hZCBmcm9tIFwic3JjL19UL01haW4vQmFzZUluaXRMb2FkXCI7XHJcbmltcG9ydCBDb21SZXNVcmwgZnJvbSBcInNyYy9fVC9SZXMvQ29tUmVzVXJsXCI7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcInNyYy9fVC9SZXMvRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgS2V5UmVzTWFuYWdlciBmcm9tIFwic3JjL19UL1Jlcy9LZXlSZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVSZXNMb2FkTW9kZWwgfSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkSXRlbVwiO1xyXG5pbXBvcnQgeyBFRm9udCB9IGZyb20gXCIuLi9SZXNFL0VGb250XCI7XHJcbmltcG9ydCB7IEVNdXNpY3MgfSBmcm9tIFwiLi4vUmVzRS9FTXVzaWNzXCI7XHJcbmltcG9ydCB7IEVTb3VuZHMgfSBmcm9tIFwiLi4vUmVzRS9FU291bmRzXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdEVtcHR5U2NyZWVuVUlDb25cIjtcclxuaW1wb3J0IEluaXRMb2FkVUlDb24gZnJvbSBcIi4uL1VJQ29uL2luaXRMb2FkL2luaXRMb2FkVUlDb25cIjtcclxuaW1wb3J0IHsgQnVpbGRDb25maWdUcyB9IGZyb20gXCIuLi9fY29uZmlnL0J1aWxkQ29uZmlnVHNcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25zdCB9IGZyb20gXCIuLi9fY29uZmlnL19UZXN0Q29uc3RcIjtcclxuaW1wb3J0IHsgX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB9IGZyb20gXCIuLi9fcHJlZmFic05hbWUvX0VBbGxTY2VuZVByZWZhYnNOYW1lc1wiO1xyXG5pbXBvcnQgeyBfRUFsbEV4cG9ydFNjZW5lTmFtZSB9IGZyb20gXCIuLi9fc2NlbmVOYW1lL19FQWxsRXhwb3J0U2NlbmVOYW1lXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgICAgICAvL+WIneWni+WMlumcgOimgeeahHVp5o6n5Yi25Zmo5a6e5L6LXHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uID0gbmV3IEluaXRFbXB0eVNjcmVlblVJQ29uKCk7XHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24gPSBuZXcgSW5pdExvYWRVSUNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Yqg6L295LmL5YmNXHJcbiAgICAgKiDlj6/ku6XlnKjov5nph4zliJ3lp4vljJbkuIDkupvkuJzopb9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRCZWZvcmUoKSB7XHJcbiAgICAgICAgLy/orr7nva7ot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIEtleVJlc01hbmFnZXIuYWRkUmVzVXJsKF9pLCBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Sb290UmVzKSArIGAke19pfS9gKTsvL+azqOWFpemihOWItuS9k+i3r+W+hFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rumihOWItuS9k+WcuuaZr+WvueeFp1xyXG4gICAgICAgIEVzc2VudGlhbFJlc1VybHMuc2V0UHJlZmFiU2NlbmVOYW1lcyhfRUFsbFNjZW5lUHJlZmFic05hbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWKoOi9vemhueWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIGxldCBfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gW107XHJcbiAgICAgICAgLy/ojrflj5ZmZ3Vp5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9sb2FkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaVmZ3Vp55qE5omA5pyJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/lhYjnu5HlrprmiYDmnIl1aVxyXG4gICAgICAgIHRoaXMuRkdVSUJpbmRlcigpO1xyXG4gICAgICAgIC8v5Yqg6L29Zmd1aeWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRFbXB0eVNjcmVlbicsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRFbXB0eVNjcmVlbikpKTsvL+eZveWxj3Vp5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdExvYWQnLCAwLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdExvYWQpKSk7Ly/liqDovb3nlYzpnaLljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQmFnJykpOy8v5Y6f5YyF77yM6YCa5bi45Li66LWE5rqQ5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUNvbW1vbicpKTsvL+WFrOWFseWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ19UZXN0JykpOy8v5rWL6K+V5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZU1haW4nLCAwKSk7Ly/kuLvljIVcclxuICAgIH1cclxuICAgIC8vZmd1aee7keWumlxyXG4gICAgcHJpdmF0ZSBGR1VJQmluZGVyKCkge1xyXG4gICAgICAgIEluaXRFbXB0eVNjcmVlbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgSW5pdExvYWRCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVDb21tb25CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIF9UZXN0QmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lTWFpbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkZHVUnliqDovb3poblcclxuICAgIHByaXZhdGUgZ2V0RkdVSUxvYWRJdGVtcyhfbmFtZTogc3RyaW5nLCBfYXRsaWFzQ291bnQ/OiBudW1iZXIsIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKTogUmVzTG9hZEl0ZW0ge1xyXG4gICAgICAgIGxldCBfZmd1aVJlczogYW55W10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWMhei3r+W+hFxyXG4gICAgICAgIG5ldyBGR1VJUGFjayhFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSwgX2F0bGlhc0NvdW50KS5nZXRSZXNVUkwoX2ZndWlSZXMpO1xyXG4gICAgICAgIC8v5Yib5bu65Yqg6L296aG5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNMb2FkSXRlbShfZmd1aVJlcywgRVJlc0xvYWRNb2RlbC5EMiwgX25hbWUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOWMhVxyXG4gICAgICAgICAgICB0aGlzLmFkZEZHVUlQYWNrYWdlKF9uYW1lKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgLy/mt7vliqDljIVcclxuICAgIHB1YmxpYyBhZGRGR1VJUGFja2FnZShfbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRDb25maWdMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIC8v6YWN572u6KGoXHJcbiAgICAgICAgbGV0IF9jb25maWdSZXM6IGFueVtdID0gQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTCgoaXRlbSBhcyBJQmFzZUNvbmZpZ0NvbnRhaW5lcikuZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Zy65pmvanNvbuaWh+S7tlxyXG4gICAgICAgIGxldCBzY2VuZUpzb25SZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX0VBbGxFeHBvcnRTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgc2NlbmVKc29uUmVzLnB1c2goRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTChfRUFsbEV4cG9ydFNjZW5lTmFtZVtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKFsuLi5fY29uZmlnUmVzLCAuLi5zY2VuZUpzb25SZXNdLCBFUmVzTG9hZE1vZGVsLkQyLCAnY29uZmlnJywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5YWo6YOo6YWN572u6KGo5YaF5a65XHJcbiAgICAgICAgICAgIENvbmZpZ1QuQnVpbGRDb25maWdzKEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZ0xpZ2h0KCfmiYDmnInphY3nva7ooajlhoXlrrnvvJonLCBCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKSk7XHJcbiAgICAgICAgfSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+mFjee9ruihqOWKoOi9vei/m+W6picsIGkpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaXlhbbku5botYTmupDliqDovb3poblcclxuICAgIHByaXZhdGUgaW1taXRPdGhlckxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgbGV0IF9hdWRpb3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRU11c2ljcykge1xyXG4gICAgICAgICAgICBFTXVzaWNzW19pXSAmJiBfYXVkaW9zLnB1c2goQ29tUmVzVXJsLk11c2ljVVJMKEVNdXNpY3NbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVTb3VuZHMpIHtcclxuICAgICAgICAgICAgRVNvdW5kc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5Tb3VuZFVSTChFU291bmRzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9hdWRpb3MsIEVSZXNMb2FkTW9kZWwuRDIsICdhdWRpbycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ6Z+z5pWI6LWE5rqQ77yaJywgX2F1ZGlvcyk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBsZXQgX2ZvbnQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRUZvbnQpIHtcclxuICAgICAgICAgICAgRUZvbnRbX2ldICYmIF9mb250LnB1c2goRXNzZW50aWFsUmVzVXJscy5Gb250VVJMKEVGb250W19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2gobmV3IFJlc0xvYWRJdGVtKF9mb250LCBFUmVzTG9hZE1vZGVsLkQyLCAnZm9udCcsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omA5pyJ5a2X5L2T6LWE5rqQ77yaJywgX2ZvbnQpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nmb3lsY/mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdEVtcHR5U2NyZWVuKCkge1xyXG4gICAgICAgIC8v5pi+56S655m95bGPdWlcclxuICAgICAgICB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG4gICAgLy/liqDovb3mmL7npLpcclxuICAgIHByaXZhdGUgaW5pdExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgICAgICAvL+aYvuekuuWKoOi9vXVpXHJcbiAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkUGxhbihfaTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+a4uOaIj+WKoOi9vei/m+W6pi0+JywgX2kpO1xyXG4gICAgICAgIGlmICh0aGlzLm1faW5pdExvYWRVSUNvbiAmJiB0aGlzLm1faW5pdExvYWRVSUNvbi5pZlNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2luaXRMb2FkVUlDb24uc2V0UGxhbihfaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXNDb20oX3Jlc0xvYWQ6IFJlc0xvYWRJdGVtKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOaIkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZENvbSgpIHtcclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICB0aGlzLm1faW5pdExvYWRVSUNvbiA9IG51bGw7Ly/muIXpmaTlvJXnlKhcclxuICAgIH1cclxufSIsImltcG9ydCBDb21SZXNVcmwgZnJvbSBcInNyYy9fVC9SZXMvQ29tUmVzVXJsXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgU2V0RGF0YVByb3h5IH0gZnJvbSBcIi4uL0RhdGEvU2V0RGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IEVNdXNpY3MgfSBmcm9tIFwiLi4vUmVzRS9FTXVzaWNzXCI7XHJcbmltcG9ydCB7IEVTb3VuZHMgfSBmcm9tIFwiLi4vUmVzRS9FU291bmRzXCI7XHJcbi8qKlxyXG4gKiDpn7PmlYjnrqHnkIbnsbtcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBBdWRpb01hbmFnZXI7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8v5b2T5YmN5pKt5pS+55qEYmdtXHJcbiAgICBwcml2YXRlIG1fb25CR006IExheWEuU291bmRDaGFubmVsO1xyXG5cclxuICAgIC8v5b2T5YmN5pKt5pS+55qE6Z+z5pWI5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fb25Tb3VuZExpc3Q6IFNldDxMYXlhLlNvdW5kQ2hhbm5lbD4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5qC55o2u5pWw5o2u6K6+572u6IOM5pmv6Z+z5LmQ5ZKM6Z+z5pWI5piv5ZCm6Z2Z6Z+zXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLnNvdW5kTXV0ZWQgPSAhU2V0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuaWZPcGVuU291bmQ7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLm11c2ljTXV0ZWQgPSAhU2V0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuaWZPcGVuTXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/pn7PkuZDlkozmiYDmnInpn7PmlYjmmK/lkKbpnZnpn7PjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldCBtdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaJgOaciemfs+aViO+8iOS4jeWMheaLrOiDjOaZr+mfs+S5kO+8ieaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IHNvdW5kTXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+S5kO+8iOS4jeWMheaLrOmfs+aViO+8ieaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IG11c2ljTXV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjmmoLlgZxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXVzZVNvdW5kKCkge1xyXG4gICAgICAgIC8v5pqC5YGc5omA5pyJ6Z+z5pWIXHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmfs+aViOe7p+e7rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc3VtZVNvdW5kKCkge1xyXG4gICAgICAgIC8v57un57ut5pKt5pS+5b2T5YmN5pKt5pS+55qE6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uU291bmRMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOiDjOaZr+mfs+S5kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vbkJHTSAmJiB0aGlzLmluc3RhbmNlLm1fb25CR00ucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pn7PmlYjpn7Pph49cclxuICAgICAqIEBwYXJhbSBfbiDpn7Pph48gMH4xXHJcbiAgICAgKiBAcGFyYW0gX3VybCDotYTmupDlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTb3VuZFZvbHVtZShfbjogbnVtYmVyID0gMSwgX3VybD86IHN0cmluZykge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNldFNvdW5kVm9sdW1lKF9uLCBfdXJsKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6IOM5pmv6Z+z5LmQ6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0gX24g6Z+z6YePIDB+MVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE11c2ljVm9sdW1lKF9uOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc2V0TXVzaWNWb2x1bWUoX24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z5pWI44CC6Z+z5pWI5Y+v5Lul5ZCM5pe25pKt5pS+5aSa5Liq44CCXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDpn7PmlYjlkI3lrZdcclxuICAgICAqIEBwYXJhbSBsb29wcyDlvqrnjq/mrKHmlbAsMOihqOekuuaXoOmZkOW+queOr+OAglxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlIOWjsOmfs+aSreaUvuWujOaIkOWbnuiwgyAgSGFuZGxlcuWvueixoeOAglxyXG4gICAgICogQHBhcmFtIHNvdW5kQ2xhc3Mg5L2/55So5ZOq5Liq5aOw6Z+z57G76L+b6KGM5pKt5pS+77yMbnVsbOihqOekuuiHquWKqOmAieaLqeOAglxyXG4gICAgICogQHBhcmFtIHN0YXJ0VGltZSDlo7Dpn7Pmkq3mlL7otbflp4vml7bpl7TjgIJcclxuICAgICAqIEByZXR1cm4gU291bmRDaGFubmVs5a+56LGh77yM6YCa6L+H5q2k5a+56LGh5Y+v5Lul5a+55aOw6Z+z6L+b6KGM5o6n5Yi277yM5Lul5Y+K6I635Y+W5aOw6Z+z5L+h5oGv44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5U291bmQobmFtZTogRVNvdW5kcywgbG9vcHM/OiBudW1iZXIsIGNvbXBsZXRlPzogbGF5YS51dGlscy5IYW5kbGVyLCBzb3VuZENsYXNzPzogbmV3ICgpID0+IGFueSwgc3RhcnRUaW1lPzogbnVtYmVyKTogbGF5YS5tZWRpYS5Tb3VuZENoYW5uZWwge1xyXG4gICAgICAgIGlmICghbmFtZSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX3NvdW5kOiBMYXlhLlNvdW5kQ2hhbm5lbCA9IExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChuYW1lLCBsb29wcywgY29tcGxldGUsIHNvdW5kQ2xhc3MsIHN0YXJ0VGltZSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uU291bmRMaXN0LmFkZChfc291bmQpO1xyXG4gICAgICAgIHJldHVybiBfc291bmQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuiDjOaZr+mfs+S5kOOAguiDjOaZr+mfs+S5kOWQjOaXtuWPquiDveaSreaUvuS4gOS4qu+8jOWmguaenOWcqOaSreaUvuiDjOaZr+mfs+S5kOaXtuWGjeasoeiwg+eUqOacrOaWueazle+8jOS8muWFiOWBnOatouS5i+WJjeeahOiDjOaZr+mfs+S5kO+8jOWGjeaSreaUvuW9k+WJjeeahOiDjOaZr+mfs+S5kOOAglxyXG4gICAgICogQHBhcmFtIG5hbWUg6IOM5pmv6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gbG9vcHMg5b6q546v5qyh5pWwLDDooajnpLrml6DpmZDlvqrnjq/jgIJcclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZSDlo7Dpn7Pmkq3mlL7lrozmiJDlm57osIMsY29tcGxldGUg57uT5p6c5Y+C5pWwIHRydWU6IOaSreaUvuWujOaIkCwgZmFsc2UvdW5kZWZpbmVkIO+8mnN0b3Dop6blj5HnmoRjb21wbGV0ZeOAglxyXG4gICAgICogQHBhcmFtIHN0YXJ0VGltZSDlo7Dpn7Pmkq3mlL7otbflp4vml7bpl7TjgIJcclxuICAgICAqIEByZXR1cm4gU291bmRDaGFubmVs5a+56LGh77yM6YCa6L+H5q2k5a+56LGh5Y+v5Lul5a+55aOw6Z+z6L+b6KGM5o6n5Yi277yM5Lul5Y+K6I635Y+W5aOw6Z+z5L+h5oGv44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5TXVzaWMobmFtZTogRU11c2ljcywgbG9vcHM/OiBudW1iZXIsIGNvbXBsZXRlPzogbGF5YS51dGlscy5IYW5kbGVyLCBzdGFydFRpbWU/OiBudW1iZXIpOiBsYXlhLm1lZGlhLlNvdW5kQ2hhbm5lbCB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfbXVzaWM6IExheWEuU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKG5hbWUsIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25CR00gPSBfbXVzaWM7XHJcbiAgICAgICAgcmV0dXJuIF9tdXNpYztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatoumfs+aViOaSreaUvuOAglxyXG4gICAgICogQHBhcmFtIHNvdW5kc05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wU291bmQoc291bmRzTmFtZTogRVNvdW5kcyk6IHZvaWQge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BTb3VuZChDb21SZXNVcmwuU291bmRVUkwoc291bmRzTmFtZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLog4zmma/pn7PmlYjmkq3mlL7jgIJcclxuICAgICAqIEBwYXJhbSBtdXNpY05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wTXVzaWMobXVzaWNOYW1lOiBFTXVzaWNzKTogdm9pZCB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcFNvdW5kKENvbVJlc1VybC5NdXNpY1VSTChtdXNpY05hbWUpKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlrZfkvZPotYTmupDmnprkuL4gKOS8mumihOWKoOi9vSlcclxuICogISDlv4XpobvmmK/lrZfnrKbkuLLvvIzkuI3og73mmK/mlbDlrZflkKbliJnkvJrliqDkuIrlj43lsITlsZ7mgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIEVGb250IHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6IOM5pmv6Z+z5LmQICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFTXVzaWNzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6Z+z5pWIICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU291bmRzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8v6Z+z5pWIXHJcbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcInNyYy9fVC9EMy9zY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/nrqHnkIblmahcclxuICog566h55CG5Zy65pmv77yM6I635Y+W5Zy65pmv77yM54S25ZCO6YCa6L+H5Zy65pmv5a6e5L6L5p6E5bu65Zy65pmv5Lit5a+56LGh55qE6IqC54K5XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKiog5Zy65pmv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVMaXN0OiB7XHJcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBTY2VuZSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluWcuuaZr1xyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmU8UyBleHRlbmRzIFNjZW5lPihfbmFtZTogc3RyaW5nKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdIGFzIFM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhajpg6jlnLrmma9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBfbmFtZSA9IF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gPSBuZXcgU2NlbmUoX25hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy/moLnmja7kuI3lkIznmoTlnLrmma/lrp7kvovljJbkuI3lkIznmoTnsbtcclxuICAgICAgICAgICAgc3dpdGNoIChfbmFtZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbk1hbmFnZXIgZnJvbSBcInNyYy9fVC9EMi9GR1VJL0Jhc2VVSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgVUlDb25NYW5hZ2VyUHJveHkgZnJvbSBcIi4vVUlDb25NYW5hZ2VyUHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlcjxVSUNvbk1hbmFnZXJQcm94eT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVUlDb25NYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCD77yM57un5om/5L2/55So77yM5Li76KaB6K6+572udWnliJfooajlkozku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcInNyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW5cIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuLyoqXHJcbiAqIOa1i+ivleS4u+mhtemdouaOp+WItuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RNYWluVUlDb24gZXh0ZW5kcyBCYXNlU2luZ2xlVUlDb248RkdVSV9UZXN0TWFpbj4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogX1Rlc3RNYWluVUlDb247XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9UZXN0TWFpbjtcclxufSIsImltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9GR1VJX0VtcHR5U2NyZWVuVUlcIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICog55m95bGPdWnmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRFbXB0eVNjcmVlblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfRW1wdHlTY3JlZW5VST4ge1xyXG4gICAgLyoqIFVJ5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9FbXB0eVNjcmVlblVJO1xyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBGR1VJX2luaXRMb2FkVUkgZnJvbSBcInNyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5pbXBvcnQgQmFzZVNpbmdsZVVJQ29uIGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlU2luZ2xlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJbliqDovb11aeaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRVSUNvbiBleHRlbmRzIEJhc2VTaW5nbGVVSUNvbjxGR1VJX2luaXRMb2FkVUk+IHtcclxuICAgIC8qKiBVSSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSSA9IEZHVUlfaW5pdExvYWRVSTtcclxuXHJcbiAgICAvL+aYvuekuuWbnuiwg1xyXG4gICAgcHJvdGVjdGVkIF9PblNob3coKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGlzLnVpLm1fdGV4dF9sb2dvLnRleHQgPSBfTWFpbkNvbmZpZy5aSE5hbWU7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfdi50ZXh0ID0gX01haW5Db25maWcuVmVyc2lvbnM7XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfZ2FtZV9leHBsYWluLnRleHQgPSBfTWFpbkNvbmZpZy5FeHBsYWluO1xyXG4gICAgICAgIHRoaXMudWkubV90ZXh0X2V4cGxhaW4udGV4dCA9IF9NYWluQ29uZmlnLlRlYW07XHJcbiAgICAgICAgdGhpcy51aS5tX3RleHRfbGF5YV92LnRleHQgPSBMYXlhLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfaSDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBsYW4oX2k6IG51bWJlcikge1xyXG4gICAgICAgIF9pICo9IDEwMDtcclxuICAgICAgICB0aGlzLnVpLm1fcHJvZ3Jlc3MudmFsdWUgPSBfaTtcclxuICAgICAgICB0aGlzLnVpLm1fbG9hZGluZ19wcm9ncmVzcy50ZXh0ID0gTWF0aC5mbG9vcihfaSkgKyAnICUnO1xyXG4gICAgfVxyXG59IiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi9fU2NlbmVOb2RlQ29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbmZpZyB9IGZyb20gXCIuL19UZXN0Q29uZmlnXCI7XG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xuXG4vKipcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXG4qICEg6Ieq5Yqo5a+85Ye6XG4qL1xuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieeahOmFjee9ruihqOWGheWuuVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29uZmlnKCk6IGFueVtdIHtcbiAgICAgICAgbGV0IGNvbmZpZ3M6IGFueVtdID0gW107XG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uZmlnKTtcbiAgICAgICAgY29uZmlncy5wdXNoKF9UZXN0Q29uc3QpO1xuICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICB9XG59XG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDlhbPljaFpZFvlv4XopoFdICovXG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgLyoqIOWFs+WNoeWQjeWtl++8jOWPr+S7pemAmui/h+WQjeWtl+iOt+WPluWFs+WNoeaVsOaNriAqL1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xuICAgICAgICBzY2VuZTogc3RyaW5nO1xuICAgICAgIC8qKiDoioLngrnlkI3lrZfliJfooaggKi9cbiAgICAgICAgbm9kZU5hbWU6IHN0cmluZztcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xuICAgIC8qKiDmlofku7blkI3lrZcgKi9cbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdTY2VuZU5vZGVDb25maWcuanNvbic7XG59XG4gICAgIiwiLy8g77yBIOiHquWKqOWvvOWHuu+8jOivt+S4jeimgeS/ruaUuVxuLy9cbi8qKlxuICogX1Rlc3RDb25maWcgY29uZmln6YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uZmlnIHtcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xuICAgICAgIC8qKiDmlbDlgLzvvIzkuI3nrqHku4DkuYjlgLzvvIzpg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgbjogbnVtYmVyO1xuICAgICAgIC8qKiDlrZfnrKbkuLLvvIzkuI3nrqHmmK/ku4DkuYjlgLzvvIzmnIDlkI7pg73kvJrovazmiJDlrZfnrKbkuLIgKi9cbiAgICAgICAgczogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzvvIzkuI3nrqHku4DkuYjlgLzpg73kvJrovazluIPlsJTlgLwgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICB9XG4gICAgLyoqIGNvbmZpZ+aVsOaNruWIl+ihqCAqL1xuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9UZXN0Q29uZmlnLkRhdGFUeXBlW10gPSBbXTtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbmZpZy5qc29uJztcbn1cbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XG4vL1xuLyoqXG4gKiBfVGVzdENvbnN0IGNvbnN06YWN572u5paH5Lu2XG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxuICovXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uc3Qge1xuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cbiAgICBleHBvcnQgY29uc3QgdHlwZTogc3RyaW5nID0gJ2NvbnN0JztcbiAgICAvKiog5pWw5o2u57G75Z6LICovXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VICovXG4gICAgICAgIG46IG51bWJlcjtcbiAgICAgICAvKiog5pWw5YC85rWL6K+VMiAqL1xuICAgICAgICBuMjogbnVtYmVyO1xuICAgICAgIC8qKiDmlbDlgLzmtYvor5UzICovXG4gICAgICAgIG4zOiBudW1iZXI7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlSAqL1xuICAgICAgICBzOiBzdHJpbmc7XG4gICAgICAgLyoqIOWtl+espuS4sua1i+ivlTIgKi9cbiAgICAgICAgczI6IHN0cmluZztcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMyAqL1xuICAgICAgICBzMzogc3RyaW5nO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UgKi9cbiAgICAgICAgYjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMSAqL1xuICAgICAgICBiMjogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMiAqL1xuICAgICAgICBiMzogYm9vbGVhbjtcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXG4gICAgICAgIGI0OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UzICovXG4gICAgICAgIGI1OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U0ICovXG4gICAgICAgIGI2OiBib29sZWFuO1xuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U1ICovXG4gICAgICAgIGI3OiBib29sZWFuO1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UgKi9cbiAgICAgICAgbzogYW55O1xuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UxICovXG4gICAgICAgIG8yOiBhbnk7XG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlTIgKi9cbiAgICAgICAgbzM6IGFueTtcbiAgICB9XG4gICAgLyoqIGNvbnN05pWw5o2u5YiX6KGoICovXG4gICAgZXhwb3J0IHZhciBkYXRhOiBfVGVzdENvbnN0LkRhdGFUeXBlID0gbnVsbDtcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnVGVzdENvbnN0Lmpzb24nO1xufVxuICAgICIsIi8qKlxyXG4gKiDmiYDmnInlnLrmma/lr7nlupTnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxTY2VuZVByZWZhYnNOYW1lcyB7XHJcbiAgICBQcmVmYWIgPSAnQEN1YmVAQFNwaGVyZUAnLFxyXG5cclxufVxyXG4vLyIsIi8qKlxyXG4gKiDmiYDmnInlr7zlh7rlnLrmma/lkI3lrZdcclxuICogISDmraTmlofku7bmmK9Vbml0eeiHquWKqOWvvOWHuueahO+8jOS4jeimgeS/ruaUue+8jOS5n+S4jeimgeebtOaOpeS+nei1luOAglxyXG4gKi9cclxuZXhwb3J0IGVudW0gX0VBbGxFeHBvcnRTY2VuZU5hbWUge1xyXG4gICAgU2NlbmUgPSAnU2NlbmUnLFxuXHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTY2VuZU5vZGVDb25maWdQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvU2NlbmVOb2RlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IFRlc3RDb25zdFByb3h5IGZyb20gXCIuLi9Db25maWdQcm94eS9UZXN0Q29uc3RQcm94eVwiO1xyXG5cclxuLyoqXHJcbiAqIOmFjee9ruihqOa1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBDb25maWdUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WcuuaZr+iKgueCuemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFNjZW5lTm9kZUNvbmZpZ1Byb3h5Lmluc3RhbmNlLmRhdGFMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5bi46YeP5rWL6K+V6YWN572u6KGo5YaF5a65Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coVGVzdENvbnN0UHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IFRlc3REYXRhUHJveHkgfSBmcm9tIFwiLi4vRGF0YS9UZXN0RGF0YVByb3h5XCI7XHJcbmltcG9ydCBDdXN0b21EZWJ1ZyBmcm9tIFwiLi4vRGVidWcvQ3VzdG9tRGVidWdcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7mtYvor5XnsbtcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IERhdGFUZXN0O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNrua1i+ivlScsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBDdXN0b21EZWJ1Zy5pbnN0YW5jZS5hZGRJdGVtKCdkYXRhVGVzdCcsIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruiuvue9ruWbnuiwgycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDnu4Tooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEuYXJyYXkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflr7nosaHlsZ7mgKfooqvorr7nva4nKTtcclxuICAgICAgICB9LCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEub2JqZWN0KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCnIGEg6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCwgJ2EnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiDnsbvlupPmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBPdGhlclRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja1Rlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogUGFja1Rlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5omT5YyF5rWL6K+VNjUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBfVGVzdE1haW5VSUNvbiBmcm9tIFwiLi4vVUlDb24vX3Rlc3QvX1Rlc3RNYWluVUlDb25cIjtcclxuaW1wb3J0IENvbmZpZ1Rlc3QgZnJvbSBcIi4vQ29uZmlnVGVzdFwiO1xyXG5pbXBvcnQgRGF0YVRlc3QgZnJvbSBcIi4vRGF0YVRlc3RcIjtcclxuaW1wb3J0IExpYnJhcnlUZXN0IGZyb20gXCIuL0xpYnJhcnlUZXN0XCI7XHJcbmltcG9ydCBPdGhlclRlc3QgZnJvbSBcIi4vT3RoZXJUZXN0XCI7XHJcbmltcG9ydCBQYWNrVGVzdCBmcm9tIFwiLi9QYWNrVGVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleS4u+iEmuacrFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdE1haW4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVGVzdE1haW47XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL+aehOW7ulNjZW5l5Zy65pmv5LiL55qEZGVidWfoioLngrlcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuZ2V0U2NlbmUoJ1NjZW5lJylcclxuICAgICAgICAgICAgLmdldFNjZW5lTm9kZSgnZGVidWcnKVxyXG4gICAgICAgICAgICAuYXN5bmNCdWlsZCgpXHJcbiAgICAgICAgICAgIC50aGVuKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN5Zy65pmvJywgbm9kZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN6IqC54K5Jywgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvL+S4uuivpeWcuuaZr+iuvue9rueOr+Wig1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2VuZS5zZXRFbnZpcm9ubWVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuua1i+ivlXVpXHJcbiAgICAgICAgX1Rlc3RNYWluVUlDb24uaW5zdGFuY2UuU2hvdygpO1xyXG4gICAgICAgIC8v5pWw5o2uXHJcbiAgICAgICAgRGF0YVRlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+exu+W6k+a1i+ivlVxyXG4gICAgICAgIC8vIExpYnJhcnlUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/phY3nva7ooajmtYvor5VcclxuICAgICAgICBDb25maWdUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/miZPljIXmtYvor5VcclxuICAgICAgICBQYWNrVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v5YW25LuW5rWL6K+VXHJcbiAgICAgICAgT3RoZXJUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyB3aWR0aDogbnVtYmVyID0gNzUwO1xyXG4gICAgc3RhdGljIGhlaWdodDogbnVtYmVyID0gMTMzNDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjogc3RyaW5nID0gXCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6IHN0cmluZyA9IFwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6IGFueSA9IFwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVNYWluIGZyb20gXCIuL0dhbWUvR2FtZU1haW5cIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgVE1haW4gZnJvbSBcIi4vX1QvVE1haW5cIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdFx0Ly9cclxuXHRcdC8qKiDmraPlvI/lvIDlp4sgIzI4ZGY5OSAqL1xyXG5cdFx0Ly9cclxuXHRcdC8v5qGG5p625YWl5Y+jXHJcblx0XHRuZXcgVE1haW4oKTtcclxuXHRcdC8v5ri45oiP5YWl5Y+jXHJcblx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7IiwiaW1wb3J0IHsgSUJhc2VDb25maWdDb250YWluZXIsIElDb25maWdDb250YWluZXIsIElDb25zdENvbnRhaW5lciB9IGZyb20gXCIuL0NvbmZpZ1RcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmNsYXNzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjeaJp+ihjCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWIOS9v+eUqOaXtuimhuebllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ+aVsOaNruS7o+eQhuWfuuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbmZpZ1Byb3h5PERhdGE+IGV4dGVuZHMgX0Jhc2VDb25maWdQcm94eSB7XHJcbiAgICAvKiog6YWN572u6KGo5qih5p2/ICovXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnVGVtcGxhdGU6IElDb25maWdDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja7liJfooahcclxuICAgIHByb3RlY3RlZCBtX2RhdGFMaXN0OiBEYXRhW107XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNruWIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhTGlzdCgpOiBEYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YUxpc3QgPSB0aGlzLmNvbmZpZ1RlbXBsYXRlLmRhdGFzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uc3TmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uc3RQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQ29uc3RDb250YWluZXI7XHJcblxyXG4gICAgLy/phY3nva7mlbDmja5cclxuICAgIHByb3RlY3RlZCBtX2RhdGE6IERhdGE7XHJcblxyXG4gICAgLyoqIOmFjee9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5LmL5YmNICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5jb25maWdUZW1wbGF0ZS5kYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29tL0lDb25maWdEYXRhXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCIuLi9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiDoo4XppbDphY3nva7ooajku6PnkIZcclxuICAgICAqIEBwYXJhbSBfY29uZmlnIOmFjee9ruihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlQ29uZmlnUHJveHkoX2NvbmZpZzogSUJhc2VDb25maWdDb250YWluZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6YWN572u6KGo5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuY29uZmlnVGVtcGxhdGUgPSBfY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uumFjee9ruihqOWIl+ihqFxyXG4gICAgICog5Y+q5p6E5bu677yM5LiN5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZ3Mg6YWN572u6KGo5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQnVpbGRDb25maWdzKF9jb25maWdzOiBJQmFzZUNvbmZpZ0NvbnRhaW5lcltdKSB7XHJcbiAgICAgICAgbGV0IF91cmw6IHN0cmluZztcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfY29uZmlncykge1xyXG4gICAgICAgICAgICBfdXJsID0gRXNzZW50aWFsUmVzVXJscy5Db25maWdKc29uVVJMKF9vLmZpbGVOYW1lKTtcclxuICAgICAgICAgICAgLy/loavlhYXmlbDmja5cclxuICAgICAgICAgICAgc3dpdGNoIChfby50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uZmlnQ29udGFpbmVyKS5kYXRhcyA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vIGFzIElDb25zdENvbnRhaW5lcikuZGF0YSA9IHRoaXMuZ2V0Q29uZmlnSnNvbkRhdGEoX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahqc29u5pWw5o2uXHJcbiAgICAgKiDvvIHms6jmhI/vvIzojrflj5bkuobor6XotYTmupDor6XotYTmupDlsLHkvJrooqvliKDpmaTmjolcclxuICAgICAqIEBwYXJhbSBfdXJsIOmFjee9ruihqOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0pzb25EYXRhKF91cmw6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy/ojrflj5botYTmupBcclxuICAgICAgICBsZXQgY29uZmlnRGF0YTogSUNvbmZpZ0RhdGEgPSBSZXNMb2FkLkdldFJlcyhfdXJsLCB0cnVlKTtcclxuICAgICAgICAvL+a4heeQhui1hOa6kOe8k+WtmOWPquS9v+eUqOS4gOasoVxyXG4gICAgICAgIFJlc0xvYWQuQ2xlYXJSZXMoX3VybCk7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInljovnvKlcclxuICAgICAgICBpZiAoY29uZmlnRGF0YS56aXApIHtcclxuICAgICAgICAgICAgLy/op6PljotcclxuICAgICAgICAgICAgbGV0IF90aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25maWdEYXRhLmRhdGEgPSBKU09OLnBhcnNlKHBha28uaW5mbGF0ZShjb25maWdEYXRhLmRhdGEsIHsgdG86ICdzdHJpbmcnIH0pKTtcclxuICAgICAgICAgICAgX3RpbWUgPSBEYXRlLm5vdygpIC0gX3RpbWU7XHJcbiAgICAgICAgICAgIC8v5Yik5pat6Kej5Y6L5pe26Ze05beuXHJcbiAgICAgICAgICAgIGlmIChfdGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6YWN572u6KGo6Kej5Y6L5pe26Ze06L+H6ZW/77yM5Y+v6IO95piv6YWN572u6KGo5paH5Lu26L+H5aSnLT4nLCBfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gY29uZmlnRGF0YS5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G76YWN572u6KGo5a655Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIHJlYWRvbmx5IGZpbGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25maWcg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWdDb250YWluZXIgZXh0ZW5kcyBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog5pWw5o2u5YiX6KGoICovXHJcbiAgICBkYXRhczogYW55W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb25zdCDlrrnlmahcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0Q29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNriAqL1xyXG4gICAgZGF0YTogYW55O1xyXG59IiwiLyoqXHJcbiAqIOaJk+WNsOWPsOW4uOeUqOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUNvbnN0IHtcclxuXHJcbiAgICAvKiog5YWs5YWx5qC35byPICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgcHVibGljU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmma7pgJrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnIzlCQTRCNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDovbvmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvZ0xpZ2h0U3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnIzc3NmQ4YScsICcjRUJFQkVCJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOitpuWRiua2iOaBryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyblN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM1YzZlMDYnLCAnI2ZmYTkzMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDplJnor6/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVycm9yU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHlsZSgnI2ZmZicsICcjZWMwMTAxJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiJDlip/mtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvbVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2FkZTQ5OCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagt+W8j1xyXG4gICAgICogQHBhcmFtIF9jb2xvciDlrZfkvZPpopzoibJcclxuICAgICAqIEBwYXJhbSBfYmdDb2xvciDog4zmma/popzoibJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdHlsZShfY29sb3I6IHN0cmluZywgX2JnQ29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke19jb2xvcn07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke19iZ0NvbG9yfTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICBgKyB0aGlzLnB1YmxpY1N0eWxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlQ29uc3QgZnJvbSBcIi4vQ29uc29sZUNvbnN0XCI7XHJcblxyXG4vKipcclxuICog5omT5Y2w5Y+w5omp5bGVXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlRXgge1xyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xkv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc3R5bGUg5qC35byPXHJcbiAgICAgKiBAcGFyYW0gX3BhciDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFjayhfc3R5bGU6IHN0cmluZywgX3BhcjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbJyVjJXMnLCBfc3R5bGUsICdsb2cnLCAuLi5fcGFyXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2coLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QubG9nU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4Xmma7pgJrovbvmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0xvZ0xpZ2h0KC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ0xpZ2h0U3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XmiJDlip/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0NvbSguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5jb21TdHlsZSwgYW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMheijheitpuWRiua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrV2FybiguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC53YXJuU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XplJnor6/mtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja0Vycm9yKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmVycm9yU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUkvRkdVSVJvb3RNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogMmTnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQyTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIGZndWnmoLnnrqHnkIblmaggKi9cclxuICAgICAgICBGR1VJUm9vdE1hbmFnZXIuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VVSUNvbiwgeyBJQmFzZVVJQ29uRGVmaW5lcyB9IGZyb20gXCIuL0Jhc2VVSUNvblwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+WNlemhtemdouaOp+WItuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNpbmdsZVVJQ29uPFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PiBleHRlbmRzIEJhc2VVSUNvbiB7XHJcbiAgICAvKiogX1VJIOexu+WeiyAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSTogSVVJQ3JlYXRlPFVJPjtcclxuXHJcbiAgICAvKiogdWnnsbvlnovliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBfVUlzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogSUJhc2VVSUNvbkRlZmluZXMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiB1aSAqL1xyXG4gICAgcHJpdmF0ZSBtX3VpOiBVSTtcclxuXHJcbiAgICAvKiog6I635Y+WdWkgKi9cclxuICAgIHB1YmxpYyBnZXQgdWkoKTogVUkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7unVp5LmL5YmN55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgLy/orr7nva7ljZV1aVxyXG4gICAgICAgICAgICB0aGlzLl9VSXMgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDcmVhdGU6IHRoaXMuX1VJLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7uuWujOaIkHVp5ZCO55qE5omp5bGV5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJRVgoKSB7XHJcbiAgICAgICAgdGhpcy5tX3VpID0gdGhpcy5fVUlzLmRlZmF1bHQudWkgYXMgVUk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvblByb3h5IGZyb20gXCIuL0Jhc2VVSUNvblByb3h5XCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuaW1wb3J0IEZHdWlEYXRhIGZyb20gXCIuL0ZHdWlEYXRhXCI7XHJcbmltcG9ydCBGR1VJUm9vdE1hbmFnZXIgZnJvbSBcIi4vRkdVSVJvb3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBGR1VJVCBmcm9tIFwiLi9GR1VJVFwiO1xyXG5pbXBvcnQgSVVJQ3JlYXRlIGZyb20gXCIuL0lVSUNyZWF0ZVwiO1xyXG5pbXBvcnQgUm9vdFVJQ29uIGZyb20gXCIuL1Jvb3RVSUNvblwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ5o6n5Yi25Zmo5Z+657G7KOeUqOadpeaOp+WItlVJ55WM6Z2iKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uIGV4dGVuZHMgUm9vdFVJQ29uIHtcclxuICAgIC8qKiBVSeWIl+ihqO+8jOWPr+S7peaYvuekuuW+iOWkmuS4qnVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElCYXNlVUlDb25EZWZpbmVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiog5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwcml2YXRlIG1fa2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuICAgIC8qKiDojrflj5bllK/kuIDplK7lgLwgKi9cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IHN5bWJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwcml2YXRlIG1fcm9vdFVJOiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAvKiog5qC5dWnlrp7kvosgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdFVJKCk6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yb290VUk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuWcqOmakOiXj+aXtua4heeQhuaOiXVp77yM6buY6K6k5Li6dHJ1ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogVUnlsYLnuqfnsbvlnovvvIzlv4XpobvlnKjliJ3lp4vljJbml7borr7nva4gKi9cclxuICAgIHByb3RlY3RlZCBfbGF5ZXI6IEVVSUxheWVyID0gRVVJTGF5ZXIuUGFuZWw7XHJcblxyXG4gICAgLyoqIHVp5bGC57qnICovXHJcbiAgICBwdWJsaWMgZ2V0IGxheWVyKCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaYr+WQpuaYvuekuiAqL1xyXG4gICAgcHJpdmF0ZSBtX2lmU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTaG93KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZTaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiB1aeS7o+eQhuWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3Byb3h5VUlMaXN0OiBTZXQ8QmFzZVVJQ29uUHJveHk8Zmd1aS5HQ29tcG9uZW50LCBCYXNlVUlDb24+PiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5hZGQoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOS4gOS4qnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3Byb3h5IOivpeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlVUlQcm94eShfcHJveHk6IEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPikge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5kZWxldGUoX3Byb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLlNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S7o+eQhnVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn3Vp5Luj55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmRVSVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMubV9wcm94eVVJTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZW5kUHJveHkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7unVpXHJcbiAgICBwcml2YXRlIGNyZWF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJQmVmb3JlRXgoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsHVp5Yib5bu65Zmo5YiX6KGoIScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liJ3lp4vljJbmoLnoioLngrl1aVxyXG4gICAgICAgIHRoaXMubV9yb290VUkgPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmdldExheWVyVUkodGhpcy5fbGF5ZXIpLmFkZENoaWxkKHRoaXMubV9yb290VUkpO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gdGhpcy5tX3Jvb3RVSS5hZGRDaGlsZCh0aGlzLl9VSXNbX2ldLnVpQ3JlYXRlLmNyZWF0ZUluc3RhbmNlKCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9jcmVhdGVVSUVYKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yib5bu6dWnkuYvliY3nmoTmianlsZXlm57osIMg5Y+q6IO95Zyo5omp5bGV5Lit5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJQmVmb3JlRXgoKSB7IH1cclxuICAgIC8qKiDliJvlu7rlrozmiJB1aeWQjueahOaJqeWxleWbnuiwgyDlj6rog73lnKjmianlsZXkuK3kvb/nlKggKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUlFWCgpIHsgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrox1aeWQjuWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdWlcclxuICAgICAqIEBwYXJhbSBfbmFtZSB1aeWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+KF9uYW1lOiBzdHJpbmcpOiBVSSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJc1tfbmFtZV0udWkgYXMgVUk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coLi4ucGFyOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU2hvd0JlZm9yZSguLi5wYXIpO1xyXG4gICAgICAgIGxldCBfaWZOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkgfHwgdGhpcy5tX3Jvb3RVSS5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu6dWlcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgICAgICBfaWZOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV9yb290VUkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9ruWIsOW9k+WJjeWxgue6p+mhtuWxguaYvuekulxyXG4gICAgICAgIEZHVUlULnNldFVJVG9wU2hvdyh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICAvL+aJi+WKqOabtOaWsOS4gOasoVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIC8v55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uU2hvdyhfaWZOZXcsIC4uLnBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vblNob3dCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvdyhfaWZOZXc6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gX2lmQ2xlYXIg5piv5ZCm5riF55CGXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWFtuS7luWPguaVsO+8jOS8muS8oOWIsOmakOiXj+eahOWbnuiwg+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZShfaWZDbGVhcjogYm9vbGVhbiA9IHRoaXMuX2lmQ2xlYXIsIC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZlNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5tX2lmU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29uSGlkZUJlZm9yZShwYXIpO1xyXG4gICAgICAgIGlmIChfaWZDbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgLy/muIXnkIblvJXnlKhcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NlVUkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdFVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5bmtojnm5HlkKzkuovku7ZcclxuICAgICAgICBMYXlhLnN0YWdlLm9mZihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVTaXplKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX29uSGlkZShfaWZDbGVhciwgcGFyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnooqvmuIXnkIbml7bnmoTlm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfZGlzcG9zZVVJKCkgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pIHsgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDlpKflsI8gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAvL+agueaNruWtkHVp5pC65bim55qE5pWw5o2u6YCC6YWN5bGP5bmV5aSn5bCPXHJcbiAgICAgICAgbGV0IF9kYXRhOiBGR3VpRGF0YTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSBMYXlhLnN0YWdlLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgX2RhdGEgPSB0aGlzLl9VSXNbX2ldLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghX2RhdGEgfHwgIV9kYXRhLmlmVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRTaXplKF93aWR0aCAtIF9kYXRhLmxlZnQgLSBfZGF0YS5yaWdodCwgX2hlaWdodCAtIF9kYXRhLmJvdHRvbSAtIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0WFkoX2RhdGEubGVmdCwgX2RhdGEudG9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDln7rnsbt1aeaOp+WItuWZqOexu+Wei+aOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVVJQ29uRGVmaW5lcyB7XHJcbiAgICAvKiogdWnliJvlu7rlmaggKi9cclxuICAgIHVpQ3JlYXRlOiBJVUlDcmVhdGU8Zmd1aS5HQ29tcG9uZW50PjtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE/OiBGR3VpRGF0YTtcclxuICAgIC8qKiB1aSAqL1xyXG4gICAgdWk/OiBmZ3VpLkdDb21wb25lbnQ7XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VVSUNvbiBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIZ1aeaOp+WItuWZqFxyXG4gKiDlv4XpobvphY3lkIjku6PnkIblmajkvb/nlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbk1hbmFnZXI8UHJveHkgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuICAgIC8qKiB1aeS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlQcm94eTogUHJveHk7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiDmoYbmnrbosIPnlKjvvIzkuI3og73nm7TmjqXosIPnlKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX19pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluS5i+WQjueahOajgOa1i1xyXG4gICAgcHJpdmF0ZSBfX2luaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fdWlDb25MaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyW566h55CG55qEdWnliJfooagnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tX3VpUHJveHkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybigndWnmjqfliLbnrqHnkIblmajmsqHmnInliJ3lp4vljJZ1aeS7o+eQhicpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS7o+eQhuWZqOS7o+eQhlxyXG4gICAgICAgICAgICB0aGlzLm1fdWlQcm94eS5zZXRQcm94eSh0aGlzLm1fdWlDb25MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1aSDmjqfliLblmajnrqHnkIblmajku6PnkIZcclxuICog6LSf6LSj5Luj55CGdWnmjqfliLblmajnrqHnkIblmajkuK3nmoTmjqfliLblmajvvIzpmLLmraLlvqrnjq/kvp3otZZcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIHVp5o6n5Yi25Zmo5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgbV91aUNvbkxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKiDojrflj5blvZPliY3mmL7npLrnmoR1aSAqL1xyXG4gICAgcHVibGljIGdldCBvblNob3dVSSgpOiBCYXNlVUlDb25bXSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IEJhc2VVSUNvbltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W19pXS5pZlNob3cgJiYgX3VpQ29ucy5wdXNoKHRoaXMubV91aUNvbkxpc3RbX2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3VpQ29ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX3VpTGlzdCB1aeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UHJveHkoX3VpTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLm1fdWlDb25MaXN0ID0gX3VpTGlzdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrnVp6ZSu5YC86I635Y+W5LiA5LiqdWlcclxuICAgICAqIEBwYXJhbSBfa2V5IHVp6ZSu5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSTxVSUNvbiBleHRlbmRzIEJhc2VVSUNvbj4oX2tleTogc3RyaW5nKTogVUlDb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdWlDb25MaXN0W19rZXldIGFzIFVJQ29uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6dWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajntKLlvJXmiJbogIXntKLlvJXliJfooahcclxuICAgICAqIEBwYXJhbSBfaWZIaWRlT3RoZXJVSSDmmK/lkKbpmpDol4/lhbbku5Z1aSBbdHJ1ZV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdLCBfaWZIaWRlT3RoZXJVSTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZqQ6JeP5YW25LuWdWlcclxuICAgICAgICBpZiAoX2lmSGlkZU90aGVyVUkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdWlDb25zLmluY2x1ZGVzKF9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbX2ldLkhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV91aUNvbkxpc3RbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol491aeaOp+WItuWZqFxyXG4gICAgICogQHBhcmFtIF91aUNvbiB1aeaOp+WItuWZqOWunuS+i+aIluWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJKF91aUNvbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICBsZXQgX3VpQ29uczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoX3VpQ29uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKC4uLl91aUNvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3VpQ29ucy5wdXNoKF91aUNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF91aUNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dICYmIHRoaXMubV91aUNvbkxpc3RbaXRlbV0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5b2T5YmN5pi+56S655qE5omA5pyJdWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVBbGxVSSgpIHtcclxuICAgICAgICB0aGlzLm9uU2hvd1VJLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcbn0iLCIvKipcclxuICogVUnliIblsYIs5oyJ6aG65bqP5pi+56S6XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVUlMYXllciB7XHJcbiAgICAvKiog6IOM5pmv6aG16Z2iICovXHJcbiAgICBCZyA9ICdCZycsXHJcbiAgICAvKiog5Li755WM6Z2iICDmsLjov5zlrZjlnKggKi9cclxuICAgIE1haW4gPSBcIk1haW5cIixcclxuICAgIC8qKiDpnaLmnb8gIOWPr+S7peacieW+iOWkmiAqL1xyXG4gICAgUGFuZWwgPSBcIlBhbmVsXCIsXHJcbiAgICAvKiog5by556qXICovXHJcbiAgICBQb3B1cCA9IFwiUG9wdXBcIixcclxuICAgIC8qKiDpgZPlhbcgKi9cclxuICAgIFByb3AgPSAnUHJvcCcsXHJcbiAgICAvKiog5bCP6YOo5Lu2ICovXHJcbiAgICBUaXAgPSBcIlRpcFwiLFxyXG4gICAgLyoqIOaaguWBnCAqL1xyXG4gICAgUGF1c2UgPSAnUGF1c2UnLFxyXG4gICAgLyoqIOiuvue9riAqL1xyXG4gICAgU2V0ID0gJ1NldCcsXHJcbiAgICAvKiog5pyA6auYICovXHJcbiAgICBUb3AgPSAnVG9wJyxcclxuICAgIC8qKiDliqDovb3pobXpnaIgKi9cclxuICAgIExvYWRpbmcgPSAnTG9hZGluZycsXHJcbiAgICAvKiog5Y6f55SfICovXHJcbiAgICBOYXRpdmUgPSAnTmF0aXZlJyxcclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeWMheexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZHVUlQYWNrIHtcclxuICAgIC8vIOWMhei3r+W+hFxyXG4gICAgcHJpdmF0ZSBwYWNrUGF0aDogc3RyaW5nO1xyXG4gICAgLy8g5YW25LuW6LWE5rqQ5pWw6YePXHJcbiAgICBwcml2YXRlIGF0bGlhc0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ljIVcclxuICAgICAqIEBwYXJhbSBfcGFja1VybCDljIXlnLDlnYBcclxuICAgICAqIEBwYXJhbSBfYXRsaWFzQ291bnQg5Zu+6ZuG5pWw6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9wYWNrVXJsOiBzdHJpbmcsIF9hdGxpYXNDb3VudDogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB0aGlzLnBhY2tQYXRoID0gX3BhY2tVcmw7XHJcbiAgICAgICAgdGhpcy5hdGxpYXNDb3VudCA9IF9hdGxpYXNDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF91cmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzVVJMKF91cmxzKTtcclxuICAgICAgICByZXR1cm4gUmVzTG9hZC5Mb2FkMkRBc3luYyhfdXJscywgX29uUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdXJscyDovpPlh7rmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlc1VSTCh1cmxzOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5Yqg5YWl5YyF5ZCNXHJcbiAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgJy4nICsgX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb24sIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9KTtcclxuICAgICAgICAvL+WKoOi9vee6ueeQhumbhlxyXG4gICAgICAgIGlmICh0aGlzLmF0bGlhc0NvdW50ID49IDApIHtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5hdGxpYXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2goeyB1cmw6IHRoaXMucGFja1BhdGggKyBcIl9hdGxhczBfXCIgKyBpICsgXCIucG5nXCIsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9Db25zdENvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fQ29uc3RDb25maWdcIjtcclxuaW1wb3J0IHsgRVVJTGF5ZXIgfSBmcm9tIFwiLi9FVUlMYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIEZHVUkg5qC5566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJUm9vdE1hbmFnZXIge1xyXG4gICAgLy9VSeWxgue6p3Vp5YiX6KGoXHJcbiAgICBwdWJsaWMgc3RhdGljIGxheWVyVUlMaXN0OiB7IFtpbmRleDogc3RyaW5nXTogZmd1aS5HQ29tcG9uZW50IH07XHJcblxyXG4gICAgLy8g6I635Y+W5p+Q5LiA5bGCVUlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF5ZXJVSShsYXllclR5cGU6IEVVSUxheWVyKTogZmd1aS5HQ29tcG9uZW50IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyVUlMaXN0W2xheWVyVHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIOiuvue9ruWMheWQjeWQjue8gFxyXG4gICAgICAgIGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBfQ29uc3RDb25maWcuRkdVSS5wYWNrYWdlRmlsZUV4dGVuc2lvbjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGZndWkuR1Jvb3QuaW5zdC5kaXNwbGF5T2JqZWN0KTtcclxuICAgICAgICAvL+a3u+WKoEZHVUnmoLnoioLngrnmjInpobrluo/mmL7npLpcclxuICAgICAgICB0aGlzLmxheWVyVUlMaXN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gRVVJTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllclVJTGlzdFtFVUlMYXllcltfaV1dID0gZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKG5ldyBmZ3VpLkdDb21wb25lbnQoKSkgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBmZ3VpIOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVQge1xyXG4gICAgLyoqIHVp5bGC57qna2V5ICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBVSUxheWVyS2V5OiBzeW1ib2wgPSBTeW1ib2woJ1VJTGF5ZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp5bGC57qn77yM6Zmk5LqGZmd1aeagueeuoeeQhuWZqOWbnuiwg+eUqO+8jOWFtuS7lueahOWcsOaWueivt+S4jeimgeiwg+eUqFxyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEBwYXJhbSBfbGF5ZXIg5bGC57qnIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJTGF5ZXIoX3VpOiBmZ3VpLkdDb21wb25lbnQsIF9sYXllcjogRVVJTGF5ZXIpIHtcclxuICAgICAgICBfdWlbdGhpcy5VSUxheWVyS2V5XSA9IF9sYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVp5bGC57qnXHJcbiAgICAgKiBAcGFyYW0gX3VpIHVpIFxyXG4gICAgICogQHJldHVybnMgdWnlsYLnuqdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50KTogRVVJTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiBfdWlbdGhpcy5VSUxheWVyS2V5XSBhcyBFVUlMYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp6aG25bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlUb3BTaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlpKfnmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5tYXgoX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5LiA5LiqdWnlupXlsYLmmL7npLpcclxuICAgICAqIEBwYXJhbSBfdWkg6K+ldWlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSURvd25TaG93KF91aTogZmd1aS5HQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bmnIDlsI/nmoTmmL7npLrpobrluo9cclxuICAgICAgICBsZXQgX3NvcnRpbmdPcmRlcjogbnVtYmVyID0gX3VpLnNvcnRpbmdPcmRlcjtcclxuICAgICAgICBsZXQgX3BhcmVudFVJOiBmZ3VpLkdDb21wb25lbnQgPSBfdWkucGFyZW50O1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMCwgbGVuZ3RoID0gX3BhcmVudFVJLm51bUNoaWxkcmVuOyBfaSA8IGxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBfc29ydGluZ09yZGVyID0gTWF0aC5taW4oX3NvcnRpbmdPcmRlciwgX3BhcmVudFVJLmdldENoaWxkQXQoX2kpLnNvcnRpbmdPcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw6K6+572u6aG65bqPXHJcbiAgICAgICAgX3VpLnNvcnRpbmdPcmRlciA9IF9zb3J0aW5nT3JkZXIgLSAxO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaguXVp5o6n5Yi25ZmoXHJcbiAqIOaJgOaciXVp5o6n5Yi25Zmo57G75Z6L57G75Z2H55Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSb290VUlDb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLpVSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNob3coLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrkuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmTmV3IOaYr+WQpuaWsOW7ulxyXG4gICAgICogQHBhcmFtIHBhciDmmL7npLrmlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1VJXHJcbiAgICAgKiBAcGFyYW0gcGFyIOWPguaVsO+8jOS8muWFqOmDqOS8oOe7meWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgSGlkZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+S5i+WJjeiwg+eUqFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGVCZWZvcmUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSBfaWZEZWxldGUg5piv5ZCm5Yig6ZmkXHJcbiAgICAgKiBAcGFyYW0gcGFyIOmakOiXj+aWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uSGlkZShfaWZEZWxldGU6IGJvb2xlYW4sIC4uLnBhcjogYW55W10pO1xyXG5cclxufSIsImltcG9ydCBHbG9iYWxEM0Vudmlyb25tZW50IGZyb20gXCIuL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAzZOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvKiog5Yid5aeL5YyW5YWo5bGA546v5aKDICovXHJcbiAgICAgICAgR2xvYmFsRDNFbnZpcm9ubWVudC5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSVNjZW5lRW52aXJvbm1lbnQgZnJvbSBcIi4vSVNjZW5lRW52aXJvbm1lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlhajlsYAzROeOr+Wig1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRDNFbnZpcm9ubWVudCB7XHJcbiAgICAvKiogM2TlnLrmma8gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fU2NlbmUzRDogTGF5YS5TY2VuZTNEO1xyXG4gICAgLyoqIOaRhOWDj+acuiAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9DYW1lcmE6IExheWEuQ2FtZXJhO1xyXG4gICAgLyoqIOeBr+WFiSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9MaWdodDogTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHJcbiAgICAvKiog6I635Y+WIDNk5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY2VuZTNEKCk6IExheWEuU2NlbmUzRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9TY2VuZTNEO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDmkYTlg4/mnLogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENhbWVyYSgpOiBMYXlhLkNhbWVyYSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9DYW1lcmE7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+WIOeBr+WFiSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTGlnaHQoKTogTGF5YS5EaXJlY3Rpb25MaWdodCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9MaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMubV9TY2VuZTNELFxyXG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMubV9DYW1lcmEsXHJcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLm1fTGlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tX1NjZW5lM0QgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QpIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLm1fQ2FtZXJhID0gbmV3IExheWEuQ2FtZXJhO1xyXG4gICAgICAgIHRoaXMubV9MaWdodCA9IG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9DYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNELmFkZENoaWxkKHRoaXMubV9MaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVBvb2wgZnJvbSBcInNyYy9fVC9HYW1lVC9HYW1lUG9vbFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBSZXNMb2FkIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFYzVXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9WM1V0aWxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0NvbmZpZywgSVByZWZhYnNEaWZmZXJDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDoioLngrnlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVUIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5piv6aKE5Yi25L2T6YWN572uXHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZyDphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlByZWZhYnNDb25maWcoX2NvbmZpZzogSU5vZGVDb25maWcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKF9jb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWUgJiYgdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiKgueCueaVsOaNruWIneWni+WMluiKgueCuVxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX3RhcmdldCDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlKF9zcHI6IExheWEuU3ByaXRlM0QsIF90YXJnZXQ6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3NwciwgX3RhcmdldCk7XHJcbiAgICAgICAgLy/orr7nva7lkI3lrZdcclxuICAgICAgICBfc3ByLm5hbWUgPSBfdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInlj5jmjaLnm7jlhbPnmoTlsZ7mgKdcclxuICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS9jee9rlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOS9jee9rlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9ruaXi+i9rFxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOaXi+i9rFxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIsIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7nvKnmlL5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTnvKnmlL5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSwgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/op6blj5Hnm5HlkKxcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgLy/orr7nva7lt67lvIJcclxuICAgICAgICBsZXQgX3ByZWZhYkNvbmZpZzogSVByZWZhYnNDb25maWcgPSBfdGFyZ2V0IGFzIElQcmVmYWJzQ29uZmlnO1xyXG4gICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYk5hbWUgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIsIF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4queyvueBteWSjOa6kOeyvueBteeahOW3ruW8glxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX2RpZmZlciDlt67lvILmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0RGlmZmVyKF9zcHI6IExheWEuU3ByaXRlM0QsIF9kaWZmZXI6IElQcmVmYWJzRGlmZmVyQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iuvue9ruW3ruW8gicsIF9zcHIsIF9kaWZmZXIpO1xyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5Li05pe25ZCR6YePXHJcbiAgICAgICAgbGV0IF9jZW50cmVWMzogTGF5YS5WZWN0b3IzID0gR2FtZVBvb2wuZ2V0VjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9kaWZmIG9mIF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIuZ2V0Q2hpbGRBdChfZGlmZi5pbmRleCkgYXMgTGF5YS5TcHJpdGUzRCwgX2RpZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5rqQ5Y+Y5o2iXHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm06IExheWEuVmVjdG9yM1tdID0gW0dhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCldO1xyXG4gICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLnBvc2l0aW9uLCBfdHJhbnNmb3JtWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0uZXVsZXIsIF90cmFuc2Zvcm1bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5zY2FsZSwgX3RyYW5zZm9ybVsyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnIl0cmFuc2Zvcm3lsZ7mgKdcclxuICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbiwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVswXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzFdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMl0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lm57mlLbkuLTml7blkJHph49cclxuICAgICAgICBHYW1lUG9vbC5yZWN5Y2xlVjMoLi4uW19jZW50cmVWMywgLi4uX3RyYW5zZm9ybV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gX3ByZWZhYnNOYW1lcyDovpPlh7rnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lczogc3RyaW5nW10sIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgLy/ljrvph41cclxuICAgICAgICAgICAgaWYgKCFfcHJlZmFic05hbWVzLmluY2x1ZGVzKF9wcmVmYWJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgX3ByZWZhYnNOYW1lcy5wdXNoKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm6L+Y5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7uuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlIOeItuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlnIOiKgueCuemFjee9ruaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkTm9kZShfbm9kZTogTGF5YS5Ob2RlLCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcsIF9wcmVmYWJzOiBJUHJlZmFic0dhdGhlcikge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/kuI3mmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgX3NwciA9IFJlc0xvYWQuR2V0UmVzKEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKF9wcmVmYWJOYW1lKSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgX25vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0gPSBfcHJlZmFic1tfcHJlZmFiTmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIF9wcmVmYWJzW19wcmVmYWJOYW1lXS5wdXNoKF9zcHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS5hZGRDaGlsZChfc3ByKTtcclxuICAgICAgICAgICAgICAgIE5vZGVULnNldE5vZGUoX3NwciwgX25vZGVDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9ub2RlLCBpdGVtLCBfcHJlZmFicyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElTY2VuZUNvbmZpZyB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi9TY2VuZU5vZGVcIjtcclxuaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgQXJyYXlVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL0FycmF5VXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma8g5a6e5L6LXHJcbiAqIOagueaNruaMh+WumueahOWcuuaZr+mFjee9ruihqOaehOW7uuWcuuaZr1xyXG4gKiAqIOWPr+S7pee7p+aJv+atpOexu+iHquWumuS5ieWcuuaZr1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xyXG4gICAgLyoqIOWcuuaZr+WQjeWtlyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zY2VuZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiog546v5aKDICovXHJcbiAgICBwcm90ZWN0ZWQgbV9lbnZpcm9ubWVudDogSVNjZW5lRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgLyoqIOWcuuaZr+mFjee9ruS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lQ29uZmlnOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogSU5vZGVDb25maWcsXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqIOWcuuaZr+iKgueCueWunuS+i+e8k+WtmCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTm9kZXNDYWNoZTogTWFwPHN0cmluZ1tdLCBTY2VuZU5vZGVbXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqIOWcuuaZr+S4reWtmOWcqOeahG5vZGXoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9vblNjZW5lTm9kZXM6IFNldDxTY2VuZU5vZGU+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/phY3nva4gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVDb25maWcoKTogSVNjZW5lQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnIGFzIElTY2VuZUNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W546v5aKDICovXHJcbiAgICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCk6IElTY2VuZUVudmlyb25tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2Vudmlyb25tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blnLrmma/lvZPliY3lrZjlnKjnmoToioLngrnliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgb25TY2VuZU5vZGVzKCk6IFNjZW5lTm9kZVtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubV9vblNjZW5lTm9kZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3NjZW5lTmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9zY2VuZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fc2NlbmVOYW1lID0gX3NjZW5lTmFtZTtcclxuICAgICAgICAvL+agueaNruWcuuaZr+WQjeWtl+ivu+WPlumFjee9ruihqOS/oeaBr1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Yid5aeL5YyW5Zy65pmv55qE5ZCN5a2X77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfZGF0YTogSU5vZGVDb25maWdbXSA9IENvbmZpZ1QuZ2V0Q29uZmlnSnNvbkRhdGEoRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTCh0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcucm9vdCk7XHJcbiAgICAgICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5qC56IqC54K55LiL55qE6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZUNvbmZpZ1tfZGF0YVtfaV0ubmFtZV0gPSBfZGF0YVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+iOt+WPluWcuuaZr+aVsOaNruWksei0pS0+JywgdGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u546v5aKD77yM6buY6K6k5Li65YWo5bGAM2Tnjq/looPvvIzlj6/ku6Xoh6rlrprkuYnnjq/looNcclxuICAgICAgICB0aGlzLm1fZW52aXJvbm1lbnQgPSBHbG9iYWxEM0Vudmlyb25tZW50LkVudmlyb25tZW50O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6IqC54K56YWN572uXHJcbiAgICAgKiBAcGFyYW0gX25vZGVOYW1lIOiKgueCueWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUNvbmZpZyhfbm9kZU5hbWU6IHN0cmluZyk6IElOb2RlQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnW19ub2RlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAgICog6I635Y+W5Zy65pmv6IqC54K5XHJcbiAgICAgICAgICogQHBhcmFtIF9uYW1lIOiKgueCueWQjeWtl++8jOWPr+S7peWkmuS4quS4gOi1t+aehOW7ulxyXG4gICAgICAgICAqIEBwYXJhbSBfZmluZENhY2hlIOaYr+WQpuWcqOe8k+WtmOS4reafpeaJviB0cnVlXHJcbiAgICAgICAgICogQHBhcmFtIF9hZGRDYWNoZSDmmK/lkKbmt7vliqDliLDnvJPlrZggdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lTm9kZShfbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sIF9maW5kQ2FjaGU6IGJvb2xlYW4gPSB0cnVlLCBfYWRkQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogU2NlbmVOb2RlIHtcclxuICAgICAgICBsZXQgX25hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX25hbWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBfbmFtZXMucHVzaChfbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goLi4uX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX25vZGVDb25maWc6IElOb2RlQ29uZmlnW10gPSBbXTtcclxuICAgICAgICBfbmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3NjZW5lQ29uZmlnW2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5wdXNoKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfmnInkuKrlnLrmma/oioLngrnmsqHmnInmib7liLAnLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoX25vZGVDb25maWcubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign6I635Y+W5Zy65pmv6IqC54K55pe277yM5LiA5Liq6YWN572u5L+h5oGv6YO95rKh5om+5YiwJywgX25hbWVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9zY2VuZU5vZGU6IFNjZW5lTm9kZTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuWcqOe8k+WtmOS4reaJvlxyXG4gICAgICAgIGlmIChfZmluZENhY2hlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IFtfa2V5LCBfdmFsdWVdIG9mIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheVV0aWxzLkNvbnRlbnRJZlNhbWUoX2tleSwgX25hbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdXNhYmxlOiBTY2VuZU5vZGVbXSA9IF92YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWZEZWxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF91c2FibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2NlbmVOb2RlID0gX3VzYWJsZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiAoIV9zY2VuZU5vZGUpIHtcclxuICAgICAgICAgICAgLy/mlrDlu7rkuIDkuKrlrp7kvotcclxuICAgICAgICAgICAgX3NjZW5lTm9kZSA9IG5ldyBTY2VuZU5vZGUoX25vZGVDb25maWcsIHRoaXMpO1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpua3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICBpZiAoX2FkZENhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2lmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbX2tleSwgX3ZhbHVlXSBvZiB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXlVdGlscy5Db250ZW50SWZTYW1lKF9rZXksIF9uYW1lcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlLnB1c2goX3NjZW5lTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghX2lmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZS5zZXQoX25hbWVzLCBbX3NjZW5lTm9kZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlvZPliY3oioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+aehOW7uuaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE9uTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5hZGQoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5b2T5YmN6IqC54K5XHJcbiAgICAgKiDlvZPov5nkuKrlnLrmma/kuIvnmoTmn5DkuKroioLngrnooqvliKDpmaTml7bkvJroh6rliqjmiafooYzov5nkuKrmlrnms5VcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX25vZGUg6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVPbk5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIHRoaXMubV9vblNjZW5lTm9kZXMuZGVsZXRlKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueOr+Wig1xyXG4gICAgICog5Lya5qC55o2u5b2T5YmN5Zy65pmv5Lit546v5aKD6YWN572u6K6+572u546v5aKDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICBsZXQgX3NjZW5lQ29uZmlnOiBJU2NlbmVDb25maWcgPSB0aGlzLm1fc2NlbmVDb25maWcgYXMgSVNjZW5lQ29uZmlnO1xyXG4gICAgICAgIC8v6K6+572u5YWo5bGA5pGE5YOP5py6XHJcbiAgICAgICAgaWYgKF9zY2VuZUNvbmZpZy5jYW1lcmEpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQuY2FtZXJhLCBfc2NlbmVDb25maWcuY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDnga/lhYlcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmxpZ2h0KSB7XHJcbiAgICAgICAgICAgIE5vZGVULnNldE5vZGUodGhpcy5tX2Vudmlyb25tZW50LmxpZ2h0LCBfc2NlbmVDb25maWcubGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgIHRoaXMuX3NldEVudmlyb25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqICEg5qGG5p625omn6KGMXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9uLCBfbm9kZSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZFByb2dyZXNzKF9uLCBfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLS0tLSDlm57osIPlh73mlbBcclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7IH1cclxuXHJcbiAgICAvKiog6K6+572u546v5aKD5ZCO5omn6KGM55qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX3NldEVudmlyb25tZW50KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnliqDovb3ov5vluqblm57osINcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkUHJvZ3Jlc3MoX246IG51bWJlciwgX25vZGU6IFNjZW5lTm9kZSkgeyB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0dhdGhlciB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBOb2RlVCBmcm9tIFwiLi9Ob2RlVFwiO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/oioLngrlcclxuICog55So5p2l5p6E5bu65Zy65pmv6IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGUge1xyXG4gICAgLyoqIOaJgOWxnuWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lOiBTY2VuZTtcclxuICAgIC8qKiDmmK/lkKbliKDpmaQgKi9cclxuICAgIHByaXZhdGUgbV9pZkRlbGV0ZTogYm9vbGVhbjtcclxuICAgIC8qKiDoioLngrnphY3nva7kv6Hmga/liJfooaggKi9cclxuICAgIHByaXZhdGUgbV9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXTtcclxuICAgIC8qKiDoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9ub2RlOiBMYXlhLk5vZGU7XHJcbiAgICAvKiog6aKE5Yi25L2T5ZCN5a2X5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcHJlZmFic05hbWVzOiBzdHJpbmdbXTtcclxuICAgIC8qKiDpooTliLbkvZPpm4blkIggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzOiBJUHJlZmFic0dhdGhlcjtcclxuICAgIC8qKiDmmK/lkKblnKjliqDovb0gKi9cclxuICAgIHByaXZhdGUgbV9pZkxvYWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIOiOt+WPluaJgOWxnuWcuuaZryAqL1xyXG4gICAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5boioLngrnphY3nva7kv6Hmga8gKi9cclxuICAgIHB1YmxpYyBnZXQgbm9kZUNvbmZpZ3MoKTogSU5vZGVDb25maWdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ub2RlQ29uZmlncztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bmmK/lkKbliKDpmaQgKi9cclxuICAgIHB1YmxpYyBnZXQgaWZEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZkRlbGV0ZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5blnLrmma/oioLngrkgKi9cclxuICAgIHB1YmxpYyBnZXQgbm9kZSgpOiBMYXlhLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPpm4blkIggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFicygpOiBJUHJlZmFic0dhdGhlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzTmFtZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzTmFtZXM7XHJcbiAgICB9XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmTG9hZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmTG9hZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluWcuuaZr+iKgueCueWunuS+i1xyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlncyDoioLngrnphY3nva7kv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc2NlbmUg5omA5bGe5Zy65pmvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW10sIF9zY2VuZTogU2NlbmUpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9zY2VuZSA9IF9zY2VuZTtcclxuICAgICAgICAvL+m7mOiupOS4uuWIoOmZpOeKtuaAgVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzID0gX25vZGVDb25maWdzO1xyXG4gICAgICAgIC8v5o+Q5Y+W6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnNOYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIE5vZGVULmdldFByZWZhYnNOYW1lcyh0aGlzLm1fcHJlZmFic05hbWVzLCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNMb2FkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IF9wcmVmYWJOYW1lc1VSTDogc3RyaW5nW10gPSB0aGlzLm1fcHJlZmFic05hbWVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gRXNzZW50aWFsUmVzVXJscy5QcmVmYWJVUkwoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDNEQXN5bmMoX3ByZWZhYk5hbWVzVVJMLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2dyZXNzKG4pO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbbl07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeaehOW7ulxyXG4gICAgICogQHBhcmFtIG9uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luY0J1aWxkKF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTxTY2VuZU5vZGU+IHtcclxuICAgICAgICB0aGlzLm1faWZMb2FkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2NlbmVOb2RlPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzeW5jTG9hZChfb25Qcm9ncmVzcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1faWZMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3MoX246IG51bWJlcikge1xyXG4gICAgICAgIC8v5ZCR5Zy65pmv5Lyg5Ye65Yqg6L296L+b5bqmXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lLmxvYWRQcm9ncmVzcyhfbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7pcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9pZkRlbGV0ZSkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUuYWRkT25Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbmV3IExheWEuTm9kZTtcclxuICAgICAgICAvL+a3u+WKoOWIsOaJgOWxnuWcuuaZr+eOr+Wig+S4rVxyXG4gICAgICAgIHRoaXMubV9zY2VuZS5lbnZpcm9ubWVudC5zY2VuZS5hZGRDaGlsZCh0aGlzLm1fbm9kZSk7XHJcbiAgICAgICAgdGhpcy5tX3ByZWZhYnMgPSB7fTtcclxuICAgICAgICBsZXQgX3NwcjogTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfc3ByID0gbmV3IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIHRoaXMubV9ub2RlLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICBOb2RlVC5idWlsZE5vZGUoX3NwciwgaXRlbSwgdGhpcy5tX3ByZWZhYnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkRlbGV0ZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAodGhpcy5tX2lmTG9hZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/oioLngrnov5jlnKjmnoTlu7rljbTor5Xlm77liKDpmaTjgIInKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fc2NlbmUuZGVsZXRlT25Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubV9ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgIHRoaXMubV9ub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Z+657G75pWw5o2uXHJcbiAqICEg5Y+q6IO95Ye6546w5pWw5o2u5bGC6Z2i55qE5Lic6KW/XHJcbiAqIOaVsOe7hO+8jOWvueixoe+8jOWAvCAo5pWw5a2X77yM5a2X56ym5Liy77yM5biD5bCU5YC8KVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiXHJcbmltcG9ydCBPYmplY3RQcm94eVQgZnJvbSBcIi4vT2JqZWN0UHJveHlUXCI7XHJcblxyXG4vKipcclxuICog5Z+657G75pWw5o2u5Luj55CGXHJcbiAqIOaJgOacieWFs+S6juS7o+eQhuaVsOaNrueahOexu+mDveS7jui/memHjOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IHtcclxuICAgIC8qKiDmlbDmja7mqKHmnb8gKi9cclxuICAgIHByaXZhdGUgZGF0YVRlbXBsYXRlOiB7IG5ldygpOiBEYXRhIH07XHJcblxyXG4gICAgLyoqIOaYr+WQpuiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOaVsOaNruS7o+eQhuW3peWFtyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fb2JqZWN0UHJveHlUOiBPYmplY3RQcm94eVQ7XHJcblxyXG4gICAgLyoqIOmcgOimgeS/neWtmOeahOaVsOaNriAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZGF0YTogRGF0YTtcclxuXHJcbiAgICAvKiog6I635Y+W5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2V0UHJveHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pZlNldFByb3h5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pWw5o2u5Luj55CG5ZmoXHJcbiAgICAgKiDpgJrov4fov5nkuKrmlbDmja7ku6PnkIblmajlj6/ku6Xmt7vliqDku6PnkIbmlbDmja7vvIzlkozmt7vliqDmlbDmja7nm5HlkKzlm57osIMgW+mFjeWQiCByb290RGF0YSDkvb/nlKhdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2JqZWN0UHJveHlUKCk6IE9iamVjdFByb3h5VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9vYmplY3RQcm94eVQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBkYXRhKCk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quaWsOeahOaVsOaNrlxyXG4gICAgICog55So5LqO6YeN5p6E5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXROZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v5aaC5p6c5rKh5pyJ5pWw5o2u5qih5p2/55qE6K+dXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieaJvuWIsOaVsOaNruaooeadv++8geivt+S9v+eUqOaVsOaNruaooeadv+ijhemlsOWZqOijhemlsOivpeexuycsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge30gYXMgRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmRhdGFUZW1wbGF0ZSgpIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGluaXREYXRhKCk7XHJcbn0iLCJpbXBvcnQgTWQ1IGZyb20gJy4vTWQ1JztcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gJy4vQmFzZURhdGFQcm94eSc7XHJcbmltcG9ydCBCYXNlRGF0YSBmcm9tICcuL0Jhc2VEYXRhJztcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gJ3NyYy9Db25maWcvX01haW5Db25maWcnO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gJy4vT2JqZWN0UHJveHlUJztcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmnKzlnLDmlbDmja7ku6PnkIbvvIzpgJrov4fmraTnsbvlj6/ku6Xorr/pl67mnKzlnLDkv53lrZjnmoTmlbDmja5cclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9jYWxEYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblr7nmr5TmlbDmja5cclxuICAgICAqIOm7mOiupOS4unRydWXvvIzlpoLmnpzkuLrnnJ/lvZPkuLrnur/kuIrmqKHlvI/ml7bkvJrnlJ/miJDkuIDkuKrliqDlr4bnmoTlr7nmr5TmlbDmja7vvIzpmLLmraLnlKjmiLfmlLnliqjmnKzlnLDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZkRpZmZlckRhdGE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOiOt+WPluS/neWtmOWQjeensFxyXG4gICAgICog6buY6K6k6L+U5Zue57G75ZCN77yM5Y+v5Lul6YeN5YaZXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX3NhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pu5jorqTov5Tlm57nsbvlkI1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5L+d5a2Y5pWw5o2u55qE5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBzYXZlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v6aG555uu5ZCN5a2XICsg5L+d5a2Y5ZCN5a2XICsg6aG555uu54mI5pysXHJcbiAgICAgICAgcmV0dXJuIF9NYWluQ29uZmlnLk5hbWUgKyAnLScgKyB0aGlzLl9zYXZlTmFtZSArICctJyArIF9NYWluQ29uZmlnLlZlcnNpb25zICsgKF9NYWluQ29uZmlnLk9uTGluZSA/ICdeb24nIDogJ150ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5a+55q+U5pWw5o2u55qE5L+d5a2Y5ZCN5a2XXHJcbiAgICBwcml2YXRlIGdldCBkaWZmZXJOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KHRoaXMuc2F2ZU5hbWUgKyAnX192ZXJpZnknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy/orrDlvZXml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLl9yZWFkRGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CG5YyF6KOF5pWw5o2uXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5pWw5o2u5Luj55CG5bel5YW3XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg6K6+572u55uR5ZCsXHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCB0aGlzLl9kYXRhU2V0TW9uaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfliJ3lp4vljJbmnKzlnLDmlbDmja7ml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5a6M5oiQ77yM57un5om/5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqIOaVsOaNruiiq+iuvue9ruebkeWQrCAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0YVNldE1vbml0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOS/neWtmOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gSDpu5jorqTkuLp0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTYXZlKF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSwgX2lmQ2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDkv53lrZjmiafooYzpmJ/liJcgKi9cclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrUXVldWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgICogQHBhcmFtIG1fZGF0YSDmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlKG1fZGF0YTogRGF0YSwgX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgLy/mt7vliqDml7bpl7TliKTmlq1cclxuICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmZDmtYFcclxuICAgICAgICBpZiAoIV9pZkNsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUrKztcclxuICAgICAgICAgICAgLy/pmZDmtYHvvIzmr4/kuIDmrKHlro/ku7vliqHlj6rkv53lrZjkuIDmrKHmlbDmja5cclxuICAgICAgICAgICAgLy/miorkv53lrZjku7vliqHms6jlhozov5vlvq7ku7vliqHliJfooajvvIzlsIbkvJrlnKjmnKzmrKHmlbDmja7kv67mlLnnmoTlro/ku7vliqHlrozmiJDlkI7lubblnKjkuIvmrKHlro/ku7vliqHlvIDlp4vliY3ooqvlhajpg6jmiafooYxcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlLS07XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2u5YmNJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tRdWV1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZShtX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgcHJpdmF0ZSBfc2F2ZShtX2RhdGE/OiBEYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/neWtmOaVsOaNricpO1xyXG4gICAgICAgIC8v5bqP5YiX5YyWXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShtX2RhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLnNhdmVOYW1lLCBqc29uKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVySnNvbiA9IHRoaXMuZ2V0RGlmZmVyRGF0YShqc29uKTtcclxuICAgICAgICAgICAgLy/kv53lrZjlr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTih0aGlzLmRpZmZlck5hbWUsIF9kaWZmZXJKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5tX3NhdmVUb0Rpc2tUaW1lO1xyXG4gICAgICAgIHRoaXMubV9zYXZlVG9EaXNrVGltZSA9IDA7XHJcbiAgICAgICAgLy/liKTmlq3ml7bpl7Tlt65cclxuICAgICAgICBpZiAoX3RpbWUgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+WcuuaZr+S/neWtmOaXtumXtOi/h+mVvycsIHRoaXMuc2F2ZU5hbWUsIF90aW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5pys5Zyw6I635Y+W5pWw5o2uXHJcbiAgICBwcml2YXRlIF9yZWFkRGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+ivu+WPluacrOWcsOaVsOaNrlxyXG4gICAgICAgIGxldCByZWFkU3RyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLnNhdmVOYW1lKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iueOr+Wig1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUgJiYgdGhpcy5faWZEaWZmZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8v5a+55q+U5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBfZGlmZmVyID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTih0aGlzLmRpZmZlck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXREaWZmZXJEYXRhKHJlYWRTdHIpICE9IF9kaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5paw55qE5a6e5L6LXHJcbiAgICAgICAgbGV0IF9zYXZlRGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5Yik5pat5pWw5o2u5piv5ZCm6KKr56+h5pS5XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlYWRTdHIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVhZFN0cik7XHJcbiAgICAgICAgICAgICAgICAvL+eUqOacrOWcsOeahOaVsOaNruWhq+WFheW9k+WJjeaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIF9zYXZlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zYXZlRGF0YVtrZXldID0ganNvbkRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zYXZlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluW5tuS/neWtmOS4gOS4quaWsOaVsOaNrlxyXG4gICAgcHJpdmF0ZSBfc2F2ZU5ld0RhdGEoKTogRGF0YSB7XHJcbiAgICAgICAgbGV0IG1fZGF0YTogRGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v5L+d5a2Y5pWw5o2u77yM5LiN6ZmQ5rWBXHJcbiAgICAgICAgdGhpcy5zYXZlKG1fZGF0YSBhcyBEYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbV9kYXRhIGFzIERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lpITnkIblr7nmr5TmlbDmja5cclxuICAgIHByaXZhdGUgZ2V0RGlmZmVyRGF0YShfc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li656m6XHJcbiAgICAgICAgaWYgKCFfc3RyaW5nKSByZXR1cm4gJyc7XHJcbiAgICAgICAgLy/liqDlr4ZcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0KF9zdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pWw5o2u5Y2V5ZCR5Yqg5a+GXHJcbiAgICBwcml2YXRlIGVuY3J5cHQoX3N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9lbmNyeXB0U3RyOiBzdHJpbmcgPSBgTGF5YU1pbmlHYW1lLSR7dGhpcy5zYXZlTmFtZX06JHtfc3RyaW5nfWA7XHJcbiAgICAgICAgLy/liKTmlq3og73lkKbkvb/nlKhtZDVcclxuICAgICAgICBpZiAoTWQ1LmlmVXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNZDUuaGFzaFN0cihfZW5jcnlwdFN0cikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+S4jeeUqOS7u+S9leWKoOWvhlxyXG4gICAgICAgICAgICByZXR1cm4gJ25vRW5jcnlwdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcbmltcG9ydCBCYXNlRGF0YVByb3h5IGZyb20gXCIuL0Jhc2VEYXRhUHJveHlcIjtcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja7ku6PnkIbln7rnsbtcclxuICog5rOb5Z6L5Li65pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlU2hvcnREYXRhUHJveHk8RGF0YSBleHRlbmRzIEJhc2VEYXRhPiBleHRlbmRzIEJhc2VEYXRhUHJveHk8RGF0YT4ge1xyXG4gICAgLyoqIOS4tOaXtuaVsOaNrum7mOiupOS4jeiuvue9ruS7o+eQhiAqL1xyXG4gICAgcHJvdGVjdGVkIG1faWZTZXRQcm94eTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CGXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5pWw5o2u5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmlbDmja7lpITnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUIHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u5qih5p2/6KOF6aWw5ZmoXHJcbiAgICAgKiBAcGFyYW0gX2RhdGEg5pWw5o2u5qih5p2/XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVEYXRhVGVtcGxhdGUoX2RhdGE6IHsgbmV3KCk6IEJhc2VEYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5pWw5o2u5qih5p2/XHJcbiAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuZGF0YVRlbXBsYXRlID0gX2RhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFR5cGVTY3JpcHQgTWQ15Yqg5a+GXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZDUge1xyXG4gICAgLyoqIOiDveWQpuS9v+eUqCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlVzZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gT25lIHRpbWUgaGFzaGluZyBmdW5jdGlvbnNcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzaFN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoQXNjaWlTdHIoc3RyOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kQXNjaWlTdHIoc3RyKVxyXG4gICAgICAgICAgICAuZW5kKHJhdyk7XHJcbiAgICB9XHJcbiAgICAvLyBQcml2YXRlIFN0YXRpYyBWYXJpYWJsZXNcclxuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlSWRlbnRpdHkgPSBuZXcgSW50MzJBcnJheShbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF0pO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVmZmVyMzJJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBoZXhDaGFycyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcclxuICAgIHByaXZhdGUgc3RhdGljIGhleE91dDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvLyBQZXJtYW5lbnQgaW5zdGFuY2UgaXMgdG8gdXNlIGZvciBvbmUtY2FsbCBoYXNoaW5nXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmVQYXNzSGFzaGVyID0gbmV3IE1kNSgpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9oZXgoeDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoYyA9IE1kNS5oZXhDaGFycztcclxuICAgICAgICBjb25zdCBobyA9IE1kNS5oZXhPdXQ7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgbGV0IG9mZnNldDtcclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBpICogODtcclxuICAgICAgICAgICAgbiA9IHhbaV07XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCA4OyBqICs9IDIpIHtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDEgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDAgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XHJcbiAgICAgICAgICAgICAgICBuID4+Pj0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaG8uam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21kNWN5Y2xlKHg6IEludDMyQXJyYXkgfCBVaW50MzJBcnJheSwgazogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5KSB7XHJcbiAgICAgICAgbGV0IGEgPSB4WzBdO1xyXG4gICAgICAgIGxldCBiID0geFsxXTtcclxuICAgICAgICBsZXQgYyA9IHhbMl07XHJcbiAgICAgICAgbGV0IGQgPSB4WzNdO1xyXG4gICAgICAgIC8vIGZmKClcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzBdIC0gNjgwODc2OTM2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMV0gLSAzODk1NjQ1ODYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMl0gKyA2MDYxMDU4MTkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbM10gLSAxMDQ0NTI1MzMwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzRdIC0gMTc2NDE4ODk3IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbNV0gKyAxMjAwMDgwNDI2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzZdIC0gMTQ3MzIzMTM0MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1s3XSAtIDQ1NzA1OTgzIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzhdICsgMTc3MDAzNTQxNiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzldIC0gMTk1ODQxNDQxNyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxMF0gLSA0MjA2MyB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxMV0gLSAxOTkwNDA0MTYyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzEyXSArIDE4MDQ2MDM2ODIgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxM10gLSA0MDM0MTEwMSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1sxNF0gLSAxNTAyMDAyMjkwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzE1XSArIDEyMzY1MzUzMjkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGdnKClcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzFdIC0gMTY1Nzk2NTEwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbNl0gLSAxMDY5NTAxNjMyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTFdICsgNjQzNzE3NzEzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzBdIC0gMzczODk3MzAyIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzVdIC0gNzAxNTU4NjkxIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTBdICsgMzgwMTYwODMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxNV0gLSA2NjA0NzgzMzUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbNF0gLSA0MDU1Mzc4NDggfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbOV0gKyA1Njg0NDY0MzggfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxNF0gLSAxMDE5ODAzNjkwIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbM10gLSAxODczNjM5NjEgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbOF0gKyAxMTYzNTMxNTAxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzEzXSAtIDE0NDQ2ODE0NjcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1syXSAtIDUxNDAzNzg0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbN10gKyAxNzM1MzI4NDczIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzEyXSAtIDE5MjY2MDc3MzQgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGhoKClcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s1XSAtIDM3ODU1OCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s4XSAtIDIwMjI1NzQ0NjMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzExXSArIDE4MzkwMzA1NjIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzE0XSAtIDM1MzA5NTU2IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzFdIC0gMTUzMDk5MjA2MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s0XSArIDEyNzI4OTMzNTMgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzddIC0gMTU1NDk3NjMyIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxMF0gLSAxMDk0NzMwNjQwIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzEzXSArIDY4MTI3OTE3NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1swXSAtIDM1ODUzNzIyMiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbM10gLSA3MjI1MjE5NzkgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzZdICsgNzYwMjkxODkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbOV0gLSA2NDAzNjQ0ODcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMTJdIC0gNDIxODE1ODM1IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxNV0gKyA1MzA3NDI1MjAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzJdIC0gOTk1MzM4NjUxIHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xyXG4gICAgICAgIC8vIGlpKClcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1swXSAtIDE5ODYzMDg0NCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1s3XSArIDExMjY4OTE0MTUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzE0XSAtIDE0MTYzNTQ5MDUgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzVdIC0gNTc0MzQwNTUgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzEyXSArIDE3MDA0ODU1NzEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbM10gLSAxODk0OTg2NjA2IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxMF0gLSAxMDUxNTIzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxXSAtIDIwNTQ5MjI3OTkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzhdICsgMTg3MzMxMzM1OSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxNV0gLSAzMDYxMTc0NCB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbNl0gLSAxNTYwMTk4MzgwIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxM10gKyAxMzA5MTUxNjQ5IHwgMDtcclxuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s0XSAtIDE0NTUyMzA3MCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxMV0gLSAxMTIwMjEwMzc5IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1syXSArIDcxODc4NzI1OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbOV0gLSAzNDM0ODU1NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG5cclxuICAgICAgICB4WzBdID0gYSArIHhbMF0gfCAwO1xyXG4gICAgICAgIHhbMV0gPSBiICsgeFsxXSB8IDA7XHJcbiAgICAgICAgeFsyXSA9IGMgKyB4WzJdIHwgMDtcclxuICAgICAgICB4WzNdID0gZCArIHhbM10gfCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RhdGFMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2J1ZmZlckxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBJbnQzMkFycmF5ID0gbmV3IEludDMyQXJyYXkoNCk7XHJcbiAgICBwcml2YXRlIF9idWZmZXI6IEFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjg6IFVpbnQ4QXJyYXk7XHJcbiAgICBwcml2YXRlIF9idWZmZXIzMjogVWludDMyQXJyYXk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2J1ZmZlciwgMCwgNjgpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcjMyID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2J1ZmZlciwgMCwgMTcpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5zZXQoTWQ1LnN0YXRlSWRlbnRpdHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYXIgdG8gY29kZSBwb2ludCB0byB0byBhcnJheSBjb252ZXJzaW9uOlxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2NoYXJDb2RlQXRcclxuICAgIC8vICNFeGFtcGxlLjNBX0ZpeGluZ19jaGFyQ29kZUF0X3RvX2hhbmRsZV9ub24tQmFzaWMtTXVsdGlsaW5ndWFsLVBsYW5lX2NoYXJhY3RlcnNfaWZfdGhlaXJfcHJlc2VuY2VfZWFybGllcl9pbl90aGVfc3RyaW5nX2lzX3Vua25vd25cclxuICAgIHB1YmxpYyBhcHBlbmRTdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBpZiAoY29kZSA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNikgKyAweEMwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlICYgMHgzRiB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4RDgwMCB8fCBjb2RlID4gMHhEQkZGKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMikgKyAweEUwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gKChjb2RlIC0gMHhEODAwKSAqIDB4NDAwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpIC0gMHhEQzAwKSArIDB4MTAwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4MTBGRkZGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmljb2RlIHN0YW5kYXJkIHN1cHBvcnRzIGNvZGUgcG9pbnRzIHVwIHRvIFUrMTBGRkZGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxOCkgKyAweEYwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuID49IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICAgICAgYnVmTGVuIC09IDY0O1xyXG4gICAgICAgICAgICAgICAgYnVmMzJbMF0gPSBidWYzMlsxNl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRBc2NpaVN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgIGkgPSBNYXRoLm1pbihzdHIubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IHN0ci5jaGFyQ29kZUF0KGorKyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kQnl0ZUFycmF5KGlucHV0OiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKGlucHV0Lmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBpbnB1dFtqKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcclxuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xyXG4gICAgICAgICAgICBidWZMZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWxmLl9zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnVmZmVyOiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHNlbGYuX2J1ZmZlcjgpLFxyXG4gICAgICAgICAgICBidWZsZW46IHNlbGYuX2J1ZmZlckxlbmd0aCxcclxuICAgICAgICAgICAgbGVuZ3RoOiBzZWxmLl9kYXRhTGVuZ3RoLFxyXG4gICAgICAgICAgICBzdGF0ZTogW3NbMF0sIHNbMV0sIHNbMl0sIHNbM11dXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHN0YXRlLmJ1ZmZlcjtcclxuICAgICAgICBjb25zdCB4ID0gc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IHN0YXRlLmJ1ZmxlbjtcclxuICAgICAgICBzWzBdID0geFswXTtcclxuICAgICAgICBzWzFdID0geFsxXTtcclxuICAgICAgICBzWzJdID0geFsyXTtcclxuICAgICAgICBzWzNdID0geFszXTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXI4W2ldID0gYnVmLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmQocmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBjb25zdCBpID0gKGJ1ZkxlbiA+PiAyKSArIDE7XHJcbiAgICAgICAgbGV0IGRhdGFCaXRzTGVuO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IGJ1ZkxlbjtcclxuXHJcbiAgICAgICAgYnVmOFtidWZMZW5dID0gMHg4MDtcclxuICAgICAgICBidWY4W2J1ZkxlbiArIDFdID0gYnVmOFtidWZMZW4gKyAyXSA9IGJ1ZjhbYnVmTGVuICsgM10gPSAwO1xyXG4gICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eS5zdWJhcnJheShpKSwgaSk7XHJcblxyXG4gICAgICAgIGlmIChidWZMZW4gPiA1NSkge1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEbyB0aGUgZmluYWwgY29tcHV0YXRpb24gYmFzZWQgb24gdGhlIHRhaWwgYW5kIGxlbmd0aFxyXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWF5IG5vdCBmaXQgaW4gMzIgYml0cyBzbyB3ZSB0YWtlIGNhcmUgb2YgdGhhdFxyXG4gICAgICAgIGRhdGFCaXRzTGVuID0gdGhpcy5fZGF0YUxlbmd0aCAqIDg7XHJcbiAgICAgICAgaWYgKGRhdGFCaXRzTGVuIDw9IDB4RkZGRkZGRkYpIHtcclxuICAgICAgICAgICAgYnVmMzJbMTRdID0gZGF0YUJpdHNMZW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRhdGFCaXRzTGVuLnRvU3RyaW5nKDE2KS5tYXRjaCgvKC4qPykoLnswLDh9KSQvKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG8gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpID0gcGFyc2VJbnQobWF0Y2hlc1sxXSwgMTYpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBsbztcclxuICAgICAgICAgICAgYnVmMzJbMTVdID0gaGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcblxyXG4gICAgICAgIHJldHVybiByYXcgPyB0aGlzLl9zdGF0ZSA6IE1kNS5faGV4KHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/mo4Dmn6VNZDXmmK/lkKblj6/nlKhcclxuaWYgKE1kNS5oYXNoU3RyKCdoZWxsbycpICE9PSAnNWQ0MTQwMmFiYzRiMmE3NmI5NzE5ZDkxMTAxN2M1OTInKSB7XHJcbiAgICAvL+iuvue9ruS4jeiDveS9v+eUqFxyXG4gICAgTWQ1LmlmVXNlID0gZmFsc2U7XHJcbiAgICAvL1xyXG4gICAgY29uc29sZS53YXJuKCdNZDUgc2VsZiB0ZXN0IGZhaWxlZC4nKTtcclxufVxyXG4iLCIvKipcclxuICog5a+56LGh5Luj55CG5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm94eVQge1xyXG4gICAgLyoqIOebkeWQrOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX21vbml0b3JMaXN0OiB7XHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfnyAqL1xyXG4gICAgICAgIF90aGlzOiBhbnksXHJcbiAgICAgICAgLyoqIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlSAqL1xyXG4gICAgICAgIF9iYWNrOiBGdW5jdGlvbixcclxuICAgICAgICAvKiog5rqQ5a+56LGhICovXHJcbiAgICAgICAgX29iaj86IG9iamVjdCxcclxuICAgICAgICAvKiog6ZSu5YC8ICovXHJcbiAgICAgICAgX2tleT86IHN0cmluZyxcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55uR5ZCsXHJcbiAgICAgKiDnm5HlkKzmn5DkuKrlr7nosaHnmoTmn5DkuKrlsZ7mgKfmmK/lkKblj5HnlJ/mm7TmlLlcclxuICAgICAqIOWmguaenOWPr+mAieWxnuaAp+mDveS4jeWhq+eahOivneWImeebkeWQrOWFqOmDqOebkeWQrOaVsOaNruWxnuaAp+abtOaUuVxyXG4gICAgICogQHBhcmFtIF90aGlzIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtIF9iYWNrIOebkeWQrOinpuWPkeWbnuiwg+aJp+ihjOaWueazlVxyXG4gICAgICogQHBhcmFtIF9vYmog55uu5qCH5a+56LGh77yM5aaC5p6c5LiN6YCJ5YiZ55uR5ZCs5YWo6YOo5YaF5a655pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX2tleSDplK7lkI3vvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE1vbml0b3I8TyBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIE8+KF90aGlzOiBhbnksIF9iYWNrOiBGdW5jdGlvbiwgX29iaj86IE8sIF9rZXk/OiBLKSB7XHJcbiAgICAgICAgLy/mt7vliqDliLDnm5HlkKzliJfooahcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIF90aGlzLFxyXG4gICAgICAgICAgICBfYmFjayxcclxuICAgICAgICAgICAgX29iaixcclxuICAgICAgICAgICAgX2tleTogX2tleSBhcyBzdHJpbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIblm57osINcclxuICAgICAqIEBwYXJhbSBfdGhpcyDlm57osIPmiafooYzln59cclxuICAgICAqIEBwYXJhbSBfYmFjayDlm57osIPmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyTW9uaXRvcihfdGhpczogYW55LCBfYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0ID0gdGhpcy5tX21vbml0b3JMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIShcclxuICAgICAgICAgICAgICAgIGl0ZW0uX3RoaXMgPT0gX3RoaXNcclxuICAgICAgICAgICAgICAgICAgICAvL+WPr+mAieeahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICYmIF9iYWNrID8gaXRlbS5fYmFjayA9PSBfYmFjayA6IHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ku6PnkIZcclxuICAgICAqIEBwYXJhbSBfbyDmupDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFByb3h5PERhdGEgZXh0ZW5kcyBvYmplY3Q+KF9vOiBEYXRhKTogRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldFByb3h5KF9vKSBhcyBEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/phY3lkIjorr7nva7ku6PnkIZcclxuICAgIHByaXZhdGUgX3NldFByb3h5KF9vKTogb2JqZWN0IHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+aZrumAmuWAvOexu+Wei+WSjOaWueazlVxyXG4gICAgICAgIGlmICh0eXBlb2YgX28gPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBfbyAhPSBcIm9iamVjdFwiIHx8ICFfbykge1xyXG4gICAgICAgICAgICByZXR1cm4gX287XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv5Y+v6L+t5Luj5a+56LGh5ZKM5pa55rOVXHJcbiAgICAgICAgaWYgKCFfb1tTeW1ib2wuaXRlcmF0b3JdKSB7XHJcbiAgICAgICAgICAgIC8v6YGN5Y6G5a+56LGh6K6+572u5Luj55CGXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgICAgICBfb1tfaV0gPSB0aGlzLl9zZXRQcm94eShfb1tfaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6L+U5Zue5pyA57uI55qE5Luj55CG5a+56LGhXHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KF9vLCB7XHJcbiAgICAgICAgICAgIC8qKipcclxuICAgICAgICAgICAgICogIHNldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAgICAgICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/kv67mlLnlsZ7mgKdcclxuICAgICAgICAgICAgICAgIGxldCBfaWY6IGJvb2xlYW4gPSBSZWZsZWN0LnNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2lmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3mmK/mmK/kuI3mmK/mlbDnu4TnmoRsZW5ndGjlsZ7mgKfooqvkv67mlLlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShBcnJheS5pc0FycmF5KHRyYXBUYXJnZXQpICYmIGtleSA9PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/miafooYzlm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJveHlTZXQodHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lmO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgKiBnZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVjZWl2ZXIgcmVjZWl2ZXIg5pON5L2c5Y+R55Sf55qE5a+56LGh77yI6YCa5bi45piv5Luj55CG77yJXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgLy/ojrflj5blsZ7mgKdcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqXHJcbiAgICAgKiDku6PnkIblr7nosaHooqvorr7nva7ml7bnmoTlm57osINcclxuICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICogQHBhcmFtIGtleSDlsZ7mgKflkI3np7BcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcm94eVNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfku6PnkIblr7nosaHooqvorr7nva4nLCB0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICAgICAgbGV0IF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgLy/miafooYznm5HlkKxcclxuICAgICAgICB0aGlzLm1fbW9uaXRvckxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFiOWIpOaWreS7o+eQhuebruagh1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5fb2JqICYmIGl0ZW0uX29iaiAhPSByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9rZXkgJiYgaXRlbS5fa2V5ICE9IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgICAgIGl0ZW0uX2JhY2suY2FsbChpdGVtLl90aGlzLCAuLi5fYXJndW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBfR2FtZUNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOagueiwg+ivleexu++8jOaJgOacieiwg+ivleexu+W/hemhu+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZURlYnVnIHtcclxuICAgIC8qKiDliY3nvIAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUHJlZml4OiBzdHJpbmcgPSAnJERlYnVnJztcclxuXHJcbiAgICAvKiog5qC56LCD6K+V5a+56LGhICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlYnVnT2JqOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDlkI3lrZfvvIznlKggV2luZG93W+WJjee8gCArIF9uYW1lXSDorr/pl65cclxuICAgICAqIOWPr+S7pee7p+aJv+abtOaUuei/meS4quWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIF9pZkluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quiwg+ivleWvueixoVxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g6K+l5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX3R5cGUg6K+l5a+56LGh57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtKF9rZXk6IHN0cmluZywgX2l0ZW06IGFueSkge1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+VXHJcbiAgICAgICAgaWYgKCFfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pZkluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5faWZJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgQmFzZURlYnVnLkRlYnVnT2JqW3RoaXMuX25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc1tfa2V5XSA9IF9pdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuW8gOWQr+S6huiwg+ivleaooeW8j1xyXG5pZiAoX0dhbWVDb25maWcuaWZEZWJ1Zykge1xyXG4gICAgLy/ms6jlhozlhajlsYDosIPor5Xlr7nosaFcclxuICAgIHdpbmRvd1tCYXNlRGVidWcuUHJlZml4XSA9IEJhc2VEZWJ1Zy5EZWJ1Z09iajtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflvIDlkK/osIPor5XmqKHlvI/vvIzpgJrov4cnLCBCYXNlRGVidWcuUHJlZml4LCAn6K6/6ZeuJykpO1xyXG59IiwiXHJcbi8qKlxyXG4gKiDmuLjmiI/lr7nosaHmsaBcclxuICogISDlj6rog73muLjmiI/lhoXkvb/nlKjvvIzkuI3opoHlnKjlt6XlhbfkuK3kvb/nlKhcclxuICogISDlsL3ph4/lj6rlnKjph43lpI3liJvlu7rpnZ7luLjlpJrlr7nosaHnmoTlnLDmlrnkvb/nlKjvvIzkuI3nhLbkvJrlvpfkuI3lgb/lpLFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQb29sIHtcclxuICAgIC8qKiDlr7nosaHmsaDliJfooaggKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xMaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogYW55W10sXHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJdGVtPFQgZXh0ZW5kcyBhbnk+KF9zaWduOiBFR2FtZVBvb2xTaWduKTogVCB7XHJcbiAgICAgICAgLy/lhYjliLDmnKzlnLDlr7nosaHmsaDliJfooajkuK3mn6Xmib5cclxuICAgICAgICBpZiAodGhpcy5wb29sTGlzdFtfc2lnbl0gJiYgdGhpcy5wb29sTGlzdFtfc2lnbl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sTGlzdFtfc2lnbl0ucG9wKCkgYXMgVDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9zaWduKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IzKSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVHYW1lUG9vbFNpZ24udjI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgTGF5YS5WZWN0b3IyKSBhcyBhbnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLblhYPntKBcclxuICAgICAqIEBwYXJhbSBfc2lnbiDlm57mlLbmoIfor4ZcclxuICAgICAqIEBwYXJhbSBfaXRlbSDlm57mlLblhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlSXRlbShfc2lnbjogRUdhbWVQb29sU2lnbiwgLi4uX2l0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb29sTGlzdFtfc2lnbl0pIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj6rmt7vliqDkuI3ljIXlkKvnmoTlhYPntKBcclxuICAgICAgICBmb3IgKGxldCBfbyBvZiBfaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXS5pbmNsdWRlcyhfbykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9vbExpc3RbX3NpZ25dLnB1c2goX28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWMygpOiBMYXlhLlZlY3RvcjMge1xyXG4gICAgICAgIGxldCBfdjM6IExheWEuVmVjdG9yMyA9IHRoaXMuZ2V0SXRlbTxMYXlhLlZlY3RvcjM+KEVHYW1lUG9vbFNpZ24udjMpO1xyXG4gICAgICAgIF92My5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gX3YzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLZ2M1xyXG4gICAgICogQHBhcmFtIF92MyDlvoXlm57mlLbnmoR2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVWMyguLi5fdjNzOiBMYXlhLlZlY3RvcjNbXSkge1xyXG4gICAgICAgIHRoaXMucmVjeWNsZUl0ZW0oRUdhbWVQb29sU2lnbi52MywgLi4uX3Yzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2MlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYyKCk6IExheWEuVmVjdG9yMiB7XHJcbiAgICAgICAgbGV0IF92MjogTGF5YS5WZWN0b3IyID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMj4oRUdhbWVQb29sU2lnbi52Mik7XHJcbiAgICAgICAgX3YyLnNldFZhbHVlKDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYyXHJcbiAgICAgKiBAcGFyYW0gX3YyIOW+heWbnuaUtueahHYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYyKC4uLl92MnM6IExheWEuVmVjdG9yMltdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYyLCAuLi5fdjJzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoOagh+ivhlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUdhbWVQb29sU2lnbiB7XHJcbiAgICAvKiogM+e7tOWQkemHjyAqL1xyXG4gICAgdjMsXHJcbiAgICAvKiogMue7tOWQkemHjyAqL1xyXG4gICAgdjIsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgUmVzTG9hZEdyb3VwIGZyb20gXCIuLi9SZXMvUmVzTG9hZEdyb3VwXCI7XHJcbmltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi4vUmVzL1Jlc0xvYWRJdGVtXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP6L+b5YWl5LmL5YmN55qE5Yqg6L295Z+657G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgLy/miafooYzliqDovb3kuYvliY3nmoTnlJ/lkb3lkajmnJ9cclxuICAgICAgICB0aGlzLmxvYWRCZWZvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCflvIDlp4vliqDovb3muLjmiI/liJ3lp4vljJbotYTmupAnKSk7XHJcbiAgICAgICAgLy/ojrflj5bliqDovb3poblcclxuICAgICAgICBsZXQgX3Jlc0xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSA9IHRoaXMuZ2V0TG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgLy/lvILmraXliqDovb3liqDovb3poblcclxuICAgICAgICBSZXNMb2FkR3JvdXAubG9hZEFzeW5jKF9yZXNMb2FkSXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUGxhbihpKTtcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmxvYWRJdGVtc0NvbSwgdW5kZWZpbmVkLCBmYWxzZSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCfmuLjmiI/liqDovb3lrozmiJAnKSk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tKCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWIneWni+WMluS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEJlZm9yZSgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRMb2FkSXRlbXMoKTogUmVzTG9hZEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gX2kg6L+b5bqm5YC8XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkUGxhbihfaTogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKoOi9vemhueWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9yZXNMb2FkIOWKoOi9vemhueWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxvYWRDb20oKSB7IH1cclxufSIsImltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSBcIi4vRUtleVJlc05hbWVcIjtcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSBcIi4vS2V5UmVzTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIOWFrOWFsei1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tUmVzVXJsIHtcclxuICAgIC8qKlxyXG4gICAgICog6Z+z5LmQ5paH5Lu26Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDmlofku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE11c2ljVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5tcDMnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUubXVzaWMpICsgbmFtZSArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpn7PmlYjotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOmfs+aViOWQjeWtlyBcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNvdW5kVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5tcDMnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuc291bmQpICsgbmFtZSArIF87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77moIfotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBuYW1lIOWbvuagh+WQjeensCBcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEljb25VUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAnLnBuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5pY29uKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+54mH6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77niYfotYTmupDlkI3lrZdcclxuICAgICAqIEBwYXJhbSBfIOaWh+S7tuWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEltZ1VSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICdwbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuaW1nKSArIG5hbWUgKyAnLicgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55qu6IKk6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDnmq7ogqTlkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTa2luVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJ3BuZycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5za2luKSArIG5hbWUgKyAnLicgKyBfO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWQjeWtl+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUtleVJlc05hbWUge1xyXG4gICAgLyoqIOagueebruW9lSAqL1xyXG4gICAgUm9vdFJlcyA9ICdyZXMnLFxyXG4gICAgLyoqIOmFjee9ruihqOebruW9lSAqL1xyXG4gICAgQ29uZmlnSnNvbiA9ICdDb25maWdKc29uJyxcclxuICAgIC8qKiDlrZfkvZPnm67lvZUgKi9cclxuICAgIEZvbnQgPSAnRm9udCcsXHJcbiAgICAvKiogRkdVSei1hOa6kOebruW9lSAqL1xyXG4gICAgRkdVSSA9ICdGR1VJJyxcclxuICAgIC8qKiDlhbPljaHphY3nva7ooajnm67lvZUgKi9cclxuICAgIFNjZW5lSnNvbiA9ICdTY2VuZUpzb24nLFxyXG4gICAgLyoqIOWFtuWug+ebruW9lSAqL1xyXG4gICAgT3RoZXIgPSAnT3RoZXInLFxyXG4gICAgLyoqIGljb27nm67lvZUgKi9cclxuICAgIGljb24gPSAnaWNvbicsXHJcbiAgICAvKiogaW1n55uu5b2VICovXHJcbiAgICBpbWcgPSAnaW1nJyxcclxuICAgIC8qKiDpn7PkuZDmlofku7bnm67lvZUgKi9cclxuICAgIG11c2ljID0gJ211c2ljJyxcclxuICAgIC8qKiDpn7PmlYjmlofku7bnm67lvZUgKi9cclxuICAgIHNvdW5kID0gJ3NvdW5kJyxcclxuICAgIC8qKiDnmq7ogqTmlofku7bnm67lvZUgKi9cclxuICAgIHNraW4gPSAnc2tpbicsXHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gJy4uL0NvbnNvbGUvQ29uc29sZUV4JztcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tICcuL0VLZXlSZXNOYW1lJztcclxuaW1wb3J0IEtleVJlc01hbmFnZXIgZnJvbSAnLi9LZXlSZXNNYW5hZ2VyJztcclxuLyoqXHJcbiAqIOW/heimgeeahOa4uOaIj+i1hOa6kOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXNzZW50aWFsUmVzVXJscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbPljaHphY3nva7mlofku7ZcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTY2VuZUNvbmZpZ1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuU2NlbmVKc29uKSArIF9uYW1lICsgJy5qc29uJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumFjee9ruihqEpzb27mlofku7ZSVUxcclxuICAgICAqIEBwYXJhbSBfbmFtZSDphY3nva7ooajlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWdKc29uVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Db25maWdKc29uKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRkdVSeWMhVxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWMheWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZHVUlQYWNrVVJMKF9uYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5GR1VJKSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2X5L2T5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5a2X5L2T5ZCN5a2X77yM5Yqg5ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9udFVSTChfbmFtZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLkZvbnQpICsgX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miYDmnInpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgIHByaXZhdGUgc3RhdGljIF9BbGxTY2VuZVByZWZhYnNOYW1lczoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IHN0cmluZyxcclxuICAgIH0gPSB7fTtcclxuICAgIC8v6aKE5Yi25L2T5Zy65pmv57yT5a2YXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcHJlZmFic1NjZW5lQ2FjaGU6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIOmihOWItuS9k+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbkvZPlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJVUkwocHJlZmFiOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5YWI5Zyo57yT5a2Y5Lit5p+l5om+5Zy65pmv5ZCN5a2XXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKHRoaXMuX3ByZWZhYnNTY2VuZUNhY2hlW3ByZWZhYl0pICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat6K+l6aKE5Yi25L2T5Zyo5ZOq5Liq5Zy65pmv5Lit6KKr5a+85Ye655qEXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXS5pbmRleE9mKCdAJyArIHByZWZhYiArICdAJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg5Yiw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdID0gX2k7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoX2kpICsgJ0NvbnZlbnRpb25hbC8nICsgcHJlZmFiICsgJy5saCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+ayoeacieWcqOWcuuaZr+aJvuWIsOmihOWItuS9kycsIHByZWZhYiwgJ+WPr+iDveaYr+ayoeacieWvvOWHuuWcuuaZr+mihOWItuS9k+WIl+ihqOWvvOiHtOeahOOAgicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWcuuaZr+mihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICogQHBhcmFtIF9vIOWcuuaZr+mihOWItuS9k+mbhuWQiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFByZWZhYlNjZW5lTmFtZXMoX286IGFueSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gX28pIHtcclxuICAgICAgICAgICAgdGhpcy5fQWxsU2NlbmVQcmVmYWJzTmFtZXNbX2ldID0gX29bX2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcIi4uL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcblxyXG4vKipcclxuICog5YWz6ZSu6LWE5rqQ54K55YiX6KGo566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlSZXNNYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBLZXlSZXNNYW5hZ2VyO1xyXG5cclxuICAgIC8v5YWz6ZSu6LWE5rqQ5YiX6KGoXHJcbiAgICBwcml2YXRlIG1fS2V5UmVzTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/ms6jlhozlhbPplK7otYTmupDnm67lvZVcclxuICAgICAgICB0aGlzLm1fS2V5UmVzTGlzdCA9IHtcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlJvb3RSZXNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuQ29uZmlnSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5Db25maWdKc29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuRkdVSV06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5GR1VJICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuU2NlbmVKc29uXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLlNjZW5lSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZvbnRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRm9udCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLk90aGVyXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nLFxyXG4gICAgICAgICAgICAvL+WFtuS7lui3r+W+hFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaWNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLmljb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5pbWddOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pbWcgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5tdXNpY106IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyArIEVLZXlSZXNOYW1lLm11c2ljICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuc291bmRdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5zb3VuZCArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNraW5dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5za2luICsgJy8nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tX0tleVJlc0xpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWtmOWcqOafkOS4quWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaWZLZXlSZXMoX2tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KS5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT0gX2tleTtcclxuICAgICAgICB9KSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFs+mUrueCuei1hOa6kOeahOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVzVVJMKF9rZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB5re75Yqg5YWz6ZSu6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7lgLxcclxuICAgICAqIEBwYXJhbSBfc3RyaW5nIOi3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFJlc1VybChfa2V5OiBzdHJpbmcsIF9zdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldID0gX3N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu54K5a2V5XHJcbiAgICAgKiBAcGFyYW0gX3N0ciDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlZGl0S2V5UmVzTGlzdChfa2V5OiBzdHJpbmcsIF9zdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfcmVwbGFjZTogc3RyaW5nID0gdGhpcy5pbnN0YW5jZS5tX0tleVJlc0xpc3RbX2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfcmVwbGFjZSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+S/ruaUuei1hOa6kOi3r+W+hOWksei0pe+8jOayoeaciScgKyBfa2V5ICsgJ+i/meS4quWFs+mUrui3r+W+hO+8gScpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abv+aNouaJgOaciei1hOa6kOi3r+W+hOS4reeahOWFs+mUrueCuei3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXSA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19pXS5yZXBsYWNlKF9yZXBsYWNlLCBfc3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZyguLi5Db25zb2xlRXgucGFja0xvZygn5L+u5pS55YWz6ZSu54K56LWE5rqQ6Lev5b6EJywgX3JlcGxhY2UsICfmm7/mjaLmiJAnLCBfc3RyKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9veexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzTG9hZCB7XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6E5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCh1cmxzOiBhbnksIG1vZGVsOiBFUmVzTG9hZE1vZGVsLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXJscykpIHtcclxuICAgICAgICAgICAgLy/ljrvpmaTomZrlgLxcclxuICAgICAgICAgICAgdXJscyA9IHVybHMuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuacieWGheWuuemcgOimgeWKoOi9vVxyXG4gICAgICAgIGlmICghdXJscyB8fCAoQXJyYXkuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIHN3aXRjaCAobW9kZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQzOlxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGXmmK8zROeahOaOpeWPo++8jOmAgueUqOS6jjNE6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5jcmVhdGUodXJscywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVSZXNMb2FkTW9kZWwuRDI6XHJcbiAgICAgICAgICAgICAgICAvL2xvYWTmmK8yZOeahOaOpeWPo++8jOmAgueUqOS6jjJk6aG555uuXHJcbiAgICAgICAgICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMywgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vTJE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoQgXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEKHVybHM6IGFueSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLkxvYWQodXJscywgRVJlc0xvYWRNb2RlbC5EMiwgb25Db21wbGV0ZWQsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vTNE6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gdXJscyDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkM0RBc3luYyh1cmxzOiBhbnksIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgUmVzTG9hZC5Mb2FkM0QodXJscywgTGF5YS5IYW5kbGVyLmNyZWF0ZShudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDJEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDJEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5vQ2xvbmUg5piv5ZCm5LiN6I635Y+W5YWL6ZqG55qE6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmVzKHJlc1VybDogc3RyaW5nLCBub0Nsb25lOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCBnZXRSZXMgPSBMYXlhLmxvYWRlci5nZXRSZXMocmVzVXJsKTtcclxuICAgICAgICBpZiAoIWdldFJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoXCLotYTmupDlsJrmnKrliqDovb1cIiwgcmVzVXJsKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vQ2xvbmUgPyBnZXRSZXMgOiBnZXRSZXMuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuaMh+Wumui1hOa6kOWcsOWdgOe8k+WtmOOAglxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDbGVhclJlcyhyZXNVcmw6IHN0cmluZykge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyUmVzKHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIEVSZXNMb2FkTW9kZWwge1xyXG4gICAgLyoqIDNEIOi1hOa6kCAqL1xyXG4gICAgRDMsXHJcbiAgICAvKiogMmQg6LWE5rqQICovXHJcbiAgICBEMixcclxufSIsImltcG9ydCBSZXNMb2FkSXRlbSBmcm9tIFwiLi9SZXNMb2FkSXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vee7hFxyXG4gKiDotJ/otKPlpJrkuKrotYTmupDliqDovb3pobnnmoTnu5/kuIDliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRHcm91cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDliJfooajpm4blkIhcclxuICAgICAqICEg6L+Z6YeM5piv5L6d5qyh5Yqg6L295bm25LiN5piv5ZCM5pe25Yqg6L2955qEXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZWQg5a6M5oiQ5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovkvZzkuLrlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5rKh5pyJ5Yqg6L296aG5XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICBpZiAoX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbMV07XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5rWF5ou36LSd77yM6Ziy5q2i5rGh5p+T5rqQ5YiX6KGoXHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICAgIC8v5byC5q2l5YiX6KGo6ZW/5bqmXHJcbiAgICAgICAgbGV0IF9sZW5ndGg6IG51bWJlciA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAvL+S4gOatpeS4gOatpea2iOi0ueW8guatpeWIl+ihqFxyXG4gICAgICAgIGxldCBfZjogRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25JdGVtOiBSZXNMb2FkSXRlbSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBvbkl0ZW0ubG9hZEFzeW5jKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuaAu+i/m+W6plxyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLmFyZ3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2xlbmd0aCAtIGl0ZW1zLmxlbmd0aCAtIDEpICsgaSkgLyBfbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S8oOWHuuWNleS4quWKoOi9vemhueWKoOi9veWujOaIkOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20uYXJncyA9IFtvbkl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIF9vbkl0ZW1Db20ucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBfZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miafooYzpgJLlvZLliqDovb3mlrnms5VcclxuICAgICAgICBfZigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMg6LWE5rqQ5Yqg6L296aG56ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX29uSXRlbUNvbSDljZXkuKrotYTmupDpobnliqDovb3lrozmiJDlm57osIPvvIzkvJrluKbkuIror6XotYTmupDpobnlrp7kvovlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXN5bmMoaXRlbXM6IFJlc0xvYWRJdGVtW10sIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyLCBfb25JdGVtQ29tPzogTGF5YS5IYW5kbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChpdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcywgX29uSXRlbUNvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVzTG9hZCwgeyBFUmVzTG9hZE1vZGVsIH0gZnJvbSBcIi4vUmVzTG9hZFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOWKoOi9vemhuVxyXG4gKiDotJ/otKPkuIDnu4TotYTmupDliJfooajnmoTliqDovb1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRJdGVtIHtcclxuICAgIC8qKiDliqDovb3mqKHlvI8gKi9cclxuICAgIHByaXZhdGUgbV9sb2FkTW9kZWw6IEVSZXNMb2FkTW9kZWw7XHJcblxyXG4gICAgLyoqIOWKoOi9veWFs+mUrumUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogYW55O1xyXG5cclxuICAgIC8qKiDliqDovb3lrozmiJDlm57osIMgKi9cclxuICAgIHByaXZhdGUgbV9jb21CYWNrOiBMYXlhLkhhbmRsZXI7XHJcbiAgICAvKiog5Yqg6L296L+b5bqm5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fb25Qcm9ncmVzczogTGF5YS5IYW5kbGVyO1xyXG5cclxuICAgIC8qKiDotYTmupDot6/lvoTliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9yZXM6IGFueTtcclxuXHJcbiAgICAvKiog6I635Y+W5YWz6ZSu6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gX3JlcyDotYTmupDliJfooahcclxuICAgICAqIEBwYXJhbSBfbW9kZSDliqDovb3mqKHlvI9cclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrumUruWAvFxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOaXtueahOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3JlczogYW55LCBfbW9kZTogRVJlc0xvYWRNb2RlbCwgX2tleT86IGFueSwgX2NvbUJhY2s/OiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tX3JlcyA9IF9yZXM7XHJcbiAgICAgICAgdGhpcy5tX2xvYWRNb2RlbCA9IF9tb2RlO1xyXG4gICAgICAgIHRoaXMubV9rZXkgPSBfa2V5O1xyXG4gICAgICAgIHRoaXMubV9jb21CYWNrID0gX2NvbUJhY2s7XHJcbiAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MgPSBfb25Qcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChvbkNvbXBsZXRlZDogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIC8v5YyF6KOF6L+b5bqm5Zue6LCDXHJcbiAgICAgICAgbGV0IF9fb25Qcm9ncmVzczogTGF5YS5IYW5kbGVyID0gX29uUHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKF9fb25Qcm9ncmVzcyAmJiB0aGlzLm1fb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICBfX29uUHJvZ3Jlc3MgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW2ldO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fb25Qcm9ncmVzcy5hcmdzID0gW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgX19vblByb2dyZXNzID0gdGhpcy5tX29uUHJvZ3Jlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1fY29tQmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIW9uQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgdGhpcy5tX2NvbUJhY2ssIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgX19vblByb2dyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZCh0aGlzLm1fcmVzLCB0aGlzLm1fbG9hZE1vZGVsLCBvbkNvbXBsZXRlZCwgX19vblByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3luYyhfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX0dhbWVDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0dhbWVDb25maWdcIjtcclxuaW1wb3J0IF9NYWluQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19NYWluQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCJzcmMvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgRDJNYW5hZ2VyIGZyb20gXCIuL0QyL0QyTWFuYWdlclwiO1xyXG5pbXBvcnQgRDNNYW5hZ2VyIGZyb20gXCIuL0QzL0QzTWFuYWdlclwiO1xyXG5pbXBvcnQgX1RDb25maWcgZnJvbSBcIi4vX1RDb25maWdcIjtcclxuXHJcbi8qKiBcclxuICog5qGG5p625YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUTWFpbiB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ms6jlhaXmoYbmnrbkv6Hmga9cclxuICAgICAgICB3aW5kb3dbX1RDb25maWcuTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIC8qKiDmoYbmnrbphY3nva4gKi9cclxuICAgICAgICAgICAgLi4uX1RDb25maWcsXHJcbiAgICAgICAgICAgIC8qKiBsYXlh6YWN572uICovXHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IHsgLi4uR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog6aG555uu6YWN572uICovXHJcbiAgICAgICAgICAgIF9tYWluQ29uZmlnOiB7IC4uLl9NYWluQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDmuLjmiI/phY3nva4gKi9cclxuICAgICAgICAgICAgX2dhbWVDb25maWc6IHsgLi4uX0dhbWVDb25maWcgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5ZCE56eN5ZCE5qC355qE566h55CG5ZmoXHJcbiAgICAgICAgRDNNYW5hZ2VyLmluaXQoKTsvLzNE566h55CG5ZmoXHJcbiAgICAgICAgRDJNYW5hZ2VyLmluaXQoKTsvL3Vp566h55CG5ZmoXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5Y2V5L6L5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YW5jZVQge1xyXG4gICAgLyoqIOWNleS+i+WxnuaAp+WQjSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VLZXk6IHN5bWJvbCA9IFN5bWJvbCgpO1xyXG4gICAgLyoqIOWNleS+i+WxnuaAp+WQjSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VOYW1lOiBzdHJpbmcgPSAnaW5zdGFuY2UnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5L6L57G76KOF6aWw5ZmoXHJcbiAgICAgKiBAcGFyYW0gX2lmUGFzc2l2ZSDmmK/lkKbooqvliqjorr/pl67nmoTml7blgJnliJvlu7rlrp7kvovvvIzkuLpmYWxzZeeahOivneS8mueri+WNs+WIm+W7uuWHuuWunuS+i1xyXG4gICAgICogISDooqvoo4XppbDnmoTnsbvnmoTmnoTpgKDmlrnms5XkuI3og73ml7ZwdWJsaWPnsbvlnovnmoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUluc3RhbmNlKF9pZlBhc3NpdmU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoX2lmUGFzc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDkuIDkuKrnm5HlkKzlsZ7mgKdcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIEluc3RhbmNlVC5JbnN0YW5jZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0gPSBuZXcgdGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZU5hbWVdID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaVsOe7hOW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreS4pOS4quaVsOe7hOWGheWuueaYr+WQpuebuOWQjFxyXG4gICAgICogQHBhcmFtIHggeOaVsOe7hFxyXG4gICAgICogQHBhcmFtIHkgeeaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnRlbnRJZlNhbWUoeDogYW55W10sIHk6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCEoeCkgfHwgISh5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh4Lmxlbmd0aCAhPSB5Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8v5pa55rOV77yaIOeUqOS4gOS4qm1vcOadpee7n+iuoXjmlbDnu4TlkITkuKrlhYPntKDlh7rnjrDnmoTmrKHmlbDvvIzlho3nlKh55pWw57uE5p2l6YCS5YeP5ZCE5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5aaC5p6c5pyA57uI57uT5p6c5Li6MOWImeS4pOS4quaVsOe7hOebuOWQjFxyXG4gICAgICAgIGxldCBtOiBNYXA8YW55LCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHguZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBtLnNldChpdGVtLCAobS5nZXQoaXRlbSkgfHwgMCkgKyAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbS5zZXQoaXRlbSwgKG0uZ2V0KGl0ZW0pIHx8IDApIC0gMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpICs9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tljrvph43kv53nlZnpnaDliY3nmoTlhoXlrrlcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5Y676YeN5L+d55WZ6Z2g5ZCO55qE5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJldmVyc2VSZXNlcnZlVW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyci5yZXZlcnNlKCkpKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlr7nosaHmlbDnu4Tljrvph41cclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gX0Yg6I635Y+W5a+55q+U6ZSu5YC85Ye95pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT2JqVW5pcXVlPFQ+KGFycjogVFtdLCBfRjogKG86IFQpID0+IHN0cmluZyk6IFRbXSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDEsIGxlbiA9IGFyci5sZW5ndGg7IGogPCBsZW47IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9GKGFycltpXSkgPT09IF9GKGFycltqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGotLTsgICAgICAgIC8vIOavj+WIoOmZpOS4gOS4quaVsGrnmoTlgLzlsLHlh48xXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuLS07ICAgICAgLy8gauWAvOWHj+Wwj+aXtmxlbuS5n+imgeebuOW6lOWHjzHvvIjlh4/lsJHlvqrnjq/mrKHmlbDvvIzoioLnnIHmgKfog73vvIkgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i5pWw57uE55qE5p+Q5Liq5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIG9sZE9iaiDooqvmm7/mjaLnmoTlhYPntKBcclxuICAgICAqIEBwYXJhbSBuZXdPYmog5pu/5o2i5YWD57SgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVwbGFjZTxUPihhcnI6IFRbXSwgb2xkT2JqOiBULCBuZXdPYmo6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnIuaW5kZXhPZihvbGRPYmopO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxLCBuZXdPYmopO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA5Liq5YWD57Sg5bm26L+U5Zue57uT5p6cXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIG9iaiDliKDpmaTnm67moIflr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZW1vdmVJdGVtPFQ+KGFycjogVFtdLCBvYmo6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnIuaW5kZXhPZihvYmopO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrue0ouW8leWIoOmZpOS4gOS4quaVsOaNrlxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBpbmRleCDntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZW1vdmVBdDxUPihhcnI6IFRbXSwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoIDw9IGluZGV4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4TmmK/lkKbljIXlkKvmn5DkuKrmlbDmja5cclxuICAgICAqIEBwYXJhbSBhcnIgXHJcbiAgICAgKiBAcGFyYW0gb2JqIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnRhaW5zPFQ+KGFycjogVFtdLCBvYmo6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnIuaW5kZXhPZihvYmopO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSN5Yi25LiA5Liq5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvcHk8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py65omT5Lmx5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gX2FycmF5IOebruagh+aVsOe7hCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB1cHNldEFycmF5PFQ+KF9hcnJheTogVFtdKTogVFtdIHtcclxuICAgICAgICAvL+S5seW6j1xyXG4gICAgICAgIHJldHVybiBfYXJyYXkuc29ydCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py66I635Y+W5pWw57uE5Lit55qE6ZqP5py65YC877yM5Y+v5oyH5a6a6ZW/5bqmXHJcbiAgICAgKiBAcGFyYW0gX2FycmF5IOWOn+aVsOe7hFxyXG4gICAgICogQHBhcmFtIF9uIOmaj+acuuS4quaVsFxyXG4gICAgICogQHBhcmFtIF93ZWlnaHQg5p2D6YeN5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmFuZG9tR2V0PFQ+KF9hcnJheTogVFtdLCBfbjogbnVtYmVyID0gMSwgX3dlaWdodDogbnVtYmVyW10gPSBfYXJyYXkubWFwKChpdGVtKSA9PiB7IHJldHVybiAxOyB9KSk6IFRbXSB7XHJcbiAgICAgICAgaWYgKF9hcnJheS5sZW5ndGggPD0gMCkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX3Jvb3RBcnJheTogVFtdID0gW107XHJcbiAgICAgICAgbGV0IF9uZXdBcnJheTogVFtdID0gW107XHJcbiAgICAgICAgLy/mnYPph43ntKLlvJXliJfooahcclxuICAgICAgICBsZXQgX2luZGV4QXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgLy/mib7liLDmnIDlsI/nmoTmnYPph41cclxuICAgICAgICBsZXQgX21pbldlaWdodDogbnVtYmVyID0gX3dlaWdodFswXTtcclxuICAgICAgICBfd2VpZ2h0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX21pbldlaWdodCA9IE1hdGgubWluKF9taW5XZWlnaHQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF93ZWlnaHQgPSBfd2VpZ2h0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpdGVtICogKDEgLyBfbWluV2VpZ2h0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX2FycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9yb290QXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IF93ZWlnaHRbaW5kZXhdOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5kZXhBcnJheS5wdXNoKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBfaW5kZXg6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX247IF9pKyspIHtcclxuICAgICAgICAgICAgaWYgKF9yb290QXJyYXkubGVuZ3RoIDw9IDApIHsgYnJlYWs7IH1cclxuICAgICAgICAgICAgX2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX2luZGV4QXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgX2luZGV4QXJyYXkgPSBfaW5kZXhBcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtICE9IF9pbmRleDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9uZXdBcnJheS5wdXNoKF9yb290QXJyYXkuc3BsaWNlKF9pbmRleEFycmF5W19pbmRleF0sIDEpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX25ld0FycmF5O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWFs+S6jnYz5ZCR6YeP55qE5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWM1V0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H5LiA5Liq5a2X56ym5Liy5p6E5bu6djPlkJHph49cclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VWZWN0b3IzKHN0cjogc3RyaW5nLCBfb3V0VjM6IExheWEuVmVjdG9yMykge1xyXG4gICAgICAgIHZhciBzdHJzID0gc3RyLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgX291dFYzLnNldFZhbHVlKE51bWJlcihzdHJzWzBdKSwgTnVtYmVyKHN0cnNbMV0pLCBOdW1iZXIoc3Ryc1syXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572uVjPlkJHph4/plb/luqZcclxuICAgICAqIEBwYXJhbSBfdjMg55uu5qCH5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX2wg55uu5qCH6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VjNMZW5ndGgoX3YzOiBMYXlhLlZlY3RvcjMsIF9sOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgX2xlbmd0aDogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfdjMpO1xyXG4gICAgICAgIGlmIChfbGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IF9hOiBudW1iZXIgPSBfbCAvIF9sZW5ndGg7XHJcbiAgICAgICAgICAgIF92My54ID0gX3YzLnggKiBfYTtcclxuICAgICAgICAgICAgX3YzLnkgPSBfdjMueSAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueiA9IF92My56ICogX2E7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5Liq54K55o+S5YC856e75Yqo5Yiw5Y+m5LiA5Liq54K5XHJcbiAgICAgKiBAcGFyYW0gX3BvcyDlvZPliY3ngrlcclxuICAgICAqIEBwYXJhbSBfdHJhZ2V0UG90IOebruagh+eCuVxyXG4gICAgICogQHBhcmFtIF9sZXJwIOaPkuWAvOenu+WKqOavlOS+i1xyXG4gICAgICogQHBhcmFtIF9vdXRWMyDovpPlh7rlkJHph49cclxuICAgICAqIEBwYXJhbSBfaW5pdGlhbExlbmd0aCDliJ3lp4vplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQb3RMZXJwTW92ZShfcG9zOiBMYXlhLlZlY3RvcjMsIF90cmFnZXRQb3Q6IExheWEuVmVjdG9yMywgX2xlcnA6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMsIF9pbml0aWFsTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghX291dFYzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W/hemhu+acieS4gOS4qui+k+WHuueahOWQkemHj++8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLmRpc3RhbmNlKF9wb3MsIF90cmFnZXRQb3QpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmxlcnAoX3BvcywgX3RyYWdldFBvdCwgX2xlcnAsIF9vdXRWMyk7XHJcbiAgICAgICAgLy/ov5Tlm57ov5vluqZcclxuICAgICAgICByZXR1cm4gMSAtIChfZGlzdGFuY2UgLyBfaW5pdGlhbExlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnljIDpgJ/np7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX3NwZWVkIOmAn+W6plxyXG4gICAgICogQHBhcmFtIF9vdXRWMyDovpPlh7rlkJHph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQb3RDb25zdGFudFNwZWVkTW92ZShfcG9zOiBMYXlhLlZlY3RvcjMsIF90cmFnZXRQb3Q6IExheWEuVmVjdG9yMywgX3NwZWVkOiBudW1iZXIsIF9vdXRWMzogTGF5YS5WZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2lmRW5kOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBfZGlmZmVyVjM6IExheWEuVmVjdG9yMyA9IG5ldyBMYXlhLlZlY3RvcjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIExheWEuVmVjdG9yMy5zdWJ0cmFjdChfdHJhZ2V0UG90LCBfcG9zLCBfZGlmZmVyVjMpO1xyXG4gICAgICAgIGxldCBfZGlzdGFuY2U6IG51bWJlciA9IExheWEuVmVjdG9yMy5zY2FsYXJMZW5ndGgoX2RpZmZlclYzKTtcclxuICAgICAgICBpZiAoX2Rpc3RhbmNlID4gX3NwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VjNMZW5ndGgoX2RpZmZlclYzLCBfc3BlZWQpO1xyXG4gICAgICAgICAgICBfaWZFbmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfaWZFbmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ebuOWKoFxyXG4gICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3BvcywgX2RpZmZlclYzLCBfb3V0VjMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9pZkVuZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSByb3RhdGVBeGlzVjM6IExheWEuVmVjdG9yMyA9IG5ldyBMYXlhLlZlY3RvcjMoMCwgMSwgMCk7XHJcbiAgICAvKipcclxuICAgICAqIOaXi+i9rOS4gOS4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF92MyDpnIDopoHml4vovaznmoTpgqPkuKrlkJHph49cclxuICAgICAqIEBwYXJhbSBfYW5nZXIg5peL6L2s6KeS5bqmXHJcbiAgICAgKiBAcGFyYW0gX2F4aXMg5peL6L2s6L20XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUm90YXRlVjMoX3YzOiBMYXlhLlZlY3RvcjMsIF9hbmdlcjogbnVtYmVyLCBfYXhpczogTGF5YS5WZWN0b3IzID0gdGhpcy5yb3RhdGVBeGlzVjMpIHtcclxuICAgICAgICAvL+aXi+i9rOWbm+WFg+aVsFxyXG4gICAgICAgIHZhciBxID0gbmV3IExheWEuUXVhdGVybmlvbigpO1xyXG4gICAgICAgIExheWEuUXVhdGVybmlvbi5jcmVhdGVGcm9tQXhpc0FuZ2xlKF9heGlzLCAoX2FuZ2VyIC8gMTgwKSAqIE1hdGguUEksIHEpO1xyXG4gICAgICAgIExheWEuVmVjdG9yMy50cmFuc2Zvcm1RdWF0KF92MywgcSwgX3YzKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoYbmnrbphY3nva7mlofku7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UQ29uZmlnIHtcclxuICAgIC8qKiDlkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTmFtZTogc3RyaW5nID0gXCJMYXlhTWluaUdhbWVcIjtcclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgWkhOYW1lOiBzdHJpbmcgPSBcIkxheWFCb3jlsI/muLjmiI9cIjtcclxuICAgIC8qKiDniYjmnKwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVyc2lvbnM6IHN0cmluZyA9IFwiMC4wLjAuMVwiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==