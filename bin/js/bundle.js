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

/***/ "./src/Config/SubpackagesConfig.ts":
/*!*****************************************!*\
  !*** ./src/Config/SubpackagesConfig.ts ***!
  \*****************************************/
/*! exports provided: default, CDNSubpackagesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadSubpackagesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDNSubpackagesConfig", function() { return CDNSubpackagesConfig; });
class LoadSubpackagesConfig {
}
LoadSubpackagesConfig.subpackages = [];
class CDNSubpackagesConfig {
}
CDNSubpackagesConfig.CDNURLs = [];


/***/ }),

/***/ "./src/Config/_ConstConfig.ts":
/*!************************************!*\
  !*** ./src/Config/_ConstConfig.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ConstConfig; });
class _ConstConfig {
}
_ConstConfig.FGUI = {
  packageFileExtension: "bin"
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

class _GameConfig {
}
_GameConfig.ifGameTest = !_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine && false;
_GameConfig.ifTest = !_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine && false;
_GameConfig.ifDebug = !_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine && true;


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
class _MainConfig {
}
_MainConfig.Team = "LayaBox\u5C0F\u6E38\u620F";
_MainConfig.Name = "LayaMiniGame";
_MainConfig.ZHName = "LayaBox\u5C0F\u6E38\u620F";
_MainConfig.Explain = "LayaBox\u5C0F\u6E38\u620F\uFF0C\u8BF4\u660E\u3002";
_MainConfig.Versions = "0.0.0.1";
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
class FGUI_PGameCom extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameCom");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGameCustomsLoading extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameCustomsLoading");
  }
  onConstruct() {
    this.m_shade = this.getChildAt(0);
    this.m_text = this.getChildAt(1);
    this.m_progress = this.getChildAt(2);
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
class FGUI_PGameEnd extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameEnd");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGameLoading extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameLoading");
  }
  onConstruct() {
    this.m_shade = this.getChildAt(0);
    this.m_text = this.getChildAt(1);
    this.m_progress = this.getChildAt(2);
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
class FGUI_PGameMain extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameMain");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGamePause extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGamePause");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGamePlay extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGamePlay");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGameSet extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameSet");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGameStart extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameStart");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
class FGUI_PGameTestMain extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameTestMain");
  }
  onConstruct() {
    this.m_UIButton = this.getChildAt(0);
    this.m_UI = this.getChildAt(1);
    this.m_test = this.getChildAt(3);
    this.m_testText = this.getChildAt(4);
    this.m_dataTest = this.getChildAt(6);
    this.m_dataTestText = this.getChildAt(7);
    this.m__test = this.getChildAt(9);
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
class FGUI_PGameTestPlatform extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameTestPlatform");
  }
  onConstruct() {
    this.m_bg = this.getChildAt(0);
    this.m_lookVAd = this.getChildAt(1);
    this.m_lookVAdText = this.getChildAt(2);
    this.m__lookVAd = this.getChildAt(3);
    this.m_share = this.getChildAt(4);
    this.m_shareText = this.getChildAt(5);
    this.m__share = this.getChildAt(6);
    this.m_showToast = this.getChildAt(7);
    this.m_showToastText = this.getChildAt(8);
    this.m__showToast = this.getChildAt(9);
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
class FGUI_PGameTestUI extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("GameMain", "PGameTestUI");
  }
  onConstruct() {
    this.m_bg = this.getChildAt(0);
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
class FGUI_EmptyScreenUI extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("InitEmptyScreen", "EmptyScreenUI");
  }
  onConstruct() {
    this.m_bg = this.getChildAt(0);
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
class FGUI_initLoadUI extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("InitLoad", "initLoadUI");
  }
  onConstruct() {
    this.m_bg = this.getChildAt(0);
    this.m_progress = this.getChildAt(1);
    this.m_loading_progress = this.getChildAt(2);
    this.m_text_logo = this.getChildAt(3);
    this.m_text_progress = this.getChildAt(4);
    this.m_text_laya = this.getChildAt(5);
    this.m_text_explain = this.getChildAt(6);
    this.m_text_v = this.getChildAt(7);
    this.m_text_laya_v = this.getChildAt(8);
    this.m_text_game_explain = this.getChildAt(9);
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
class FGUI_TestMain extends fgui.GComponent {
  static createInstance() {
    return fgui.UIPackage.createObject("_Test", "TestMain");
  }
  onConstruct() {
    this.m_text = this.getChildAt(0);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneNodeConfigProxy; });
/* harmony import */ var src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/BaseConfigProxy */ "./src/_T/Config/BaseConfigProxy.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_config/_SceneNodeConfig */ "./src/Game/_config/_SceneNodeConfig.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let SceneNodeConfigProxy = class extends src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
  byIdGetData(_id) {
    return this.m_dataList.find((item) => {
      return item.id == _id;
    });
  }
  byNameGetData(_name) {
    return this.m_dataList.find((item) => {
      return item.name == _name;
    });
  }
  bySceneNameGetData(_name) {
    return this.m_dataList.filter((item) => {
      return item.scene == _name;
    });
  }
  getSceneCount() {
    return Math.max(...this.m_dataList.map((item) => {
      return item.id;
    }));
  }
};
SceneNodeConfigProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateConfigProxy(_config_SceneNodeConfig__WEBPACK_IMPORTED_MODULE_3__["_SceneNodeConfig"])
], SceneNodeConfigProxy);



/***/ }),

/***/ "./src/Game/ConfigProxy/TestConstProxy.ts":
/*!************************************************!*\
  !*** ./src/Game/ConfigProxy/TestConstProxy.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestConstProxy; });
/* harmony import */ var src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Config/BaseConfigProxy */ "./src/_T/Config/BaseConfigProxy.ts");
/* harmony import */ var src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Config/ConfigT */ "./src/_T/Config/ConfigT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _config_TestConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_config/_TestConst */ "./src/Game/_config/_TestConst.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let TestConstProxy = class extends src_T_Config_BaseConfigProxy__WEBPACK_IMPORTED_MODULE_0__["BaseConstProxy"] {
  constructor() {
    super();
  }
};
TestConstProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateConfigProxy(_config_TestConst__WEBPACK_IMPORTED_MODULE_3__["_TestConst"])
], TestConstProxy);



/***/ }),

/***/ "./src/Game/Data/DataManager.ts":
/*!**************************************!*\
  !*** ./src/Game/Data/DataManager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataManager; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _MainDataProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainDataProxy */ "./src/Game/Data/MainDataProxy.ts");
/* harmony import */ var _SetDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetDataProxy */ "./src/Game/Data/SetDataProxy.ts");
/* harmony import */ var _ShortDataProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShortDataProxy */ "./src/Game/Data/ShortDataProxy.ts");
/* harmony import */ var _SignDataProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignDataProxy */ "./src/Game/Data/SignDataProxy.ts");
/* harmony import */ var _TestDataProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestDataProxy */ "./src/Game/Data/TestDataProxy.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};






let DataManager = class {
  constructor() {
  }
  init() {
    _TestDataProxy__WEBPACK_IMPORTED_MODULE_5__["TestDataProxy"].instance.initData();
    _MainDataProxy__WEBPACK_IMPORTED_MODULE_1__["MainDataProxy"].instance.initData();
    _SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.initData();
    _SignDataProxy__WEBPACK_IMPORTED_MODULE_4__["SignDataProxy"].instance.initData();
    _ShortDataProxy__WEBPACK_IMPORTED_MODULE_3__["default"].instance.initData();
  }
};
DataManager = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], DataManager);



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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let MainDataProxy = class extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
};
MainDataProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_MainData__WEBPACK_IMPORTED_MODULE_3__["default"])
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let SetDataProxy = class extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
};
SetDataProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_SetData__WEBPACK_IMPORTED_MODULE_3__["default"])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShortDataProxy; });
/* harmony import */ var src_T_Data_BaseShortDataProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Data/BaseShortDataProxy */ "./src/_T/Data/BaseShortDataProxy.ts");
/* harmony import */ var src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Data/DataT */ "./src/_T/Data/DataT.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _type_ShortData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/ShortData */ "./src/Game/Data/type/ShortData.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let ShortDataProxy = class extends src_T_Data_BaseShortDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
};
ShortDataProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_ShortData__WEBPACK_IMPORTED_MODULE_3__["default"])
], ShortDataProxy);



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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let SignDataProxy = class extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
};
SignDataProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_SignData__WEBPACK_IMPORTED_MODULE_3__["default"])
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




let TestDataProxy = class extends src_T_Data_BaseLocalDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
  _initData() {
  }
};
TestDataProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance(),
  src_T_Data_DataT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateDataTemplate(_type_TestData__WEBPACK_IMPORTED_MODULE_3__["default"])
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

class SetData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.ifOpenSound = true;
    this.ifOpenMusic = true;
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

class TestData extends src_T_Data_BaseData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.number = 0;
    this.string = 'string \u4E2D\u6587 \u7279\u6B8A\u7B26\u53F7\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014+\uFF01@#\uFFE5123!@#$%^&*()_+,/."';
    this.boolean = true;
    this.array = [];
    this.object = {
      a: 1,
      b: "b",
      c: true
    };
    this.test = "";
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDebug; });
/* harmony import */ var src_T_Debug_BaseDebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Debug/BaseDebug */ "./src/_T/Debug/BaseDebug.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let CustomDebug = class extends src_T_Debug_BaseDebug__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
};
CustomDebug = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], CustomDebug);



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







class GameMain {
  constructor() {
    this.init();
  }
  init() {
    let _gameInitLoad = new _Main_GameInitLoad__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _gameInitLoad.load(Laya.Handler.create(this, () => {
      this.gameInitLoadCom();
      this.enterGame();
    }));
  }
  gameInitLoadCom() {
    _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_4__["default"].instance.init();
    _UICon_UIConManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.init();
    _Data_DataManager__WEBPACK_IMPORTED_MODULE_1__["default"].instance.init();
    _Manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.init();
  }
  enterGame() {
    console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog("\u8FDB\u5165\u6E38\u620F"));
    _test_TestMain__WEBPACK_IMPORTED_MODULE_6__["default"].instance.start();
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
/* harmony import */ var src_Config_SubpackagesConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/Config/SubpackagesConfig */ "./src/Config/SubpackagesConfig.ts");























class GameInitLoad extends src_T_Main_BaseInitLoad__WEBPACK_IMPORTED_MODULE_9__["default"] {
  _init() {
    for (let _i in _prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_20__["_EAllScenePrefabsNames"]) {
      src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].addResUrl(_i, src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].getResURL(src_T_Res_EKeyResName__WEBPACK_IMPORTED_MODULE_11__["EKeyResName"].RootRes) + `${_i}/`);
    }
    src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].setPrefabSceneNames(_prefabsName_EAllScenePrefabsNames__WEBPACK_IMPORTED_MODULE_20__["_EAllScenePrefabsNames"]);
    src_Config_SubpackagesConfig__WEBPACK_IMPORTED_MODULE_22__["default"].subpackages.forEach((item) => {
      src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].editKeyResList(item.name, item.root);
    });
    src_Config_SubpackagesConfig__WEBPACK_IMPORTED_MODULE_22__["CDNSubpackagesConfig"].CDNURLs.forEach((item) => {
      src_T_Res_KeyResManager__WEBPACK_IMPORTED_MODULE_13__["default"].editKeyResList(item.name, item.root);
    });
  }
  _getLoadItems() {
    let _loadItems = [];
    this.immitFGUiLoadItems(_loadItems);
    this.immitConfigLoadItems(_loadItems);
    this.immitOtherLoadItems(_loadItems);
    return _loadItems;
  }
  immitFGUiLoadItems(_loadItems) {
    this.FGUIBinder();
    _loadItems.push(this.getFGUILoadItems("GameBag"));
    _loadItems.push(this.getFGUILoadItems("GameCommon"));
    _loadItems.push(this.getFGUILoadItems("_Test"));
    _loadItems.push(this.getFGUILoadItems("GameMain", 0));
  }
  FGUIBinder() {
    src_FGUI_InitEmptyScreen_InitEmptyScreenBinder__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll();
    src_FGUI_InitLoad_InitLoadBinder__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll();
    src_FGUI_GameCommon_GameCommonBinder__WEBPACK_IMPORTED_MODULE_0__["default"].bindAll();
    src_FGUI_Test_TestBinder__WEBPACK_IMPORTED_MODULE_4__["default"].bindAll();
    src_FGUI_GameMain_GameMainBinder__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll();
  }
  getFGUILoadItems(_name, _atliasCount, _comBack) {
    let _fguiRes = [];
    new src_T_D2_FGUI_FGUIPack__WEBPACK_IMPORTED_MODULE_8__["FGUIPack"](src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
    return new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_fguiRes, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, _name, Laya.Handler.create(this, () => {
      this.addFGUIPackage(_name);
      _comBack && _comBack.run();
    }));
  }
  addFGUIPackage(_name) {
    try {
      fgui.UIPackage.addPackage(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FGUIPackURL(_name));
    } catch (E) {
      console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__["default"].packWarn("FGUI\u6DFB\u52A0\u5305\u6709\u95EE\u9898\u3002", _name));
    }
  }
  immitConfigLoadItems(_loadItems) {
    let _configRes = _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig().map((item) => {
      return src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].ConfigJsonURL(item.fileName);
    });
    let sceneJsonRes = [];
    for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_21__["_EAllExportSceneName"]) {
      sceneJsonRes.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].SceneConfigURL(_sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_21__["_EAllExportSceneName"][_i]));
    }
    _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"]([..._configRes, ...sceneJsonRes], src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, "config", Laya.Handler.create(this, () => {
      src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_6__["default"].BuildConfigs(_config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig());
      console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_7__["default"].packLogLight("\u6240\u6709\u914D\u7F6E\u8868\u5185\u5BB9\uFF1A", _config_BuildConfigTs__WEBPACK_IMPORTED_MODULE_19__["BuildConfigTs"].getAllConfig()));
    }), Laya.Handler.create(this, (i) => {
    }, void 0, false)));
  }
  immitOtherLoadItems(_loadItems) {
    let _audios = [];
    for (let _i in _ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"]) {
      _ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_10__["default"].MusicURL(_ResE_EMusics__WEBPACK_IMPORTED_MODULE_17__["EMusics"][_i]));
    }
    for (let _i in _ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"]) {
      _ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"][_i] && _audios.push(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_10__["default"].SoundURL(_ResE_ESounds__WEBPACK_IMPORTED_MODULE_18__["ESounds"][_i]));
    }
    _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_audios, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, "audio", Laya.Handler.create(this, () => {
      console.log("\u6240\u6709\u97F3\u6548\u8D44\u6E90\uFF1A", _audios);
    })));
    let _font = [];
    for (let _i in _ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"]) {
      _ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"][_i] && _font.push(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_12__["default"].FontURL(_ResE_EFont__WEBPACK_IMPORTED_MODULE_16__["EFont"][_i]));
    }
    _loadItems.push(new src_T_Res_ResLoadItem__WEBPACK_IMPORTED_MODULE_15__["default"](_font, src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_14__["EResLoadModel"].D2, "font", Laya.Handler.create(this, () => {
      console.log("\u6240\u6709\u5B57\u4F53\u8D44\u6E90\uFF1A", _font);
    })));
  }
  initEmptyScreen() {
  }
  initLoad() {
  }
  _loadPlan(_i) {
    src_WhiteScreenT__WEBPACK_IMPORTED_MODULE_5__["default"].setPlan(_i);
  }
  _loadItemsCom(_resLoad) {
  }
  _loadCom() {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioManager; });
/* harmony import */ var src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Res/ComResUrl */ "./src/_T/Res/ComResUrl.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/SetDataProxy */ "./src/Game/Data/SetDataProxy.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let AudioManager = class {
  constructor() {
    this.m_onSoundList = /* @__PURE__ */ new Set();
  }
  init() {
    AudioManager.soundMuted = !_Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.data.ifOpenSound;
    AudioManager.musicMuted = !_Data_SetDataProxy__WEBPACK_IMPORTED_MODULE_2__["SetDataProxy"].instance.data.ifOpenMusic;
  }
  static set muted(value) {
    Laya.SoundManager.muted = value;
  }
  static set soundMuted(value) {
    Laya.SoundManager.soundMuted = value;
  }
  static set musicMuted(value) {
    Laya.SoundManager.musicMuted = value;
  }
  static pauseSound() {
    Laya.SoundManager.stopAllSound();
  }
  static resumeSound() {
    this.instance.m_onSoundList.forEach((item) => {
      item.resume();
    });
  }
  static pauseMusic() {
    Laya.SoundManager.stopMusic();
  }
  static resumeMusic() {
    this.instance.m_onBGM && this.instance.m_onBGM.resume();
  }
  static setSoundVolume(_n = 1, _url) {
    Laya.SoundManager.setSoundVolume(_n, _url);
  }
  static setMusicVolume(_n = 1) {
    Laya.SoundManager.setMusicVolume(_n);
  }
  static playSound(name, loops, complete, soundClass, startTime) {
    if (!name) {
      return;
    }
    let _sound = Laya.SoundManager.playSound(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].SoundURL(name), loops, complete, soundClass, startTime);
    this.instance.m_onSoundList.add(_sound);
    return _sound;
  }
  static playMusic(name, loops, complete, startTime) {
    if (!name) {
      return;
    }
    let _music = Laya.SoundManager.playMusic(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].MusicURL(name), loops, complete, startTime);
    this.instance.m_onBGM = _music;
    return _music;
  }
  static stopSound(soundsName) {
    Laya.SoundManager.stopSound(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].SoundURL(soundsName));
  }
  static stopMusic(musicName) {
    Laya.SoundManager.stopSound(src_T_Res_ComResUrl__WEBPACK_IMPORTED_MODULE_0__["default"].MusicURL(musicName));
  }
};
AudioManager = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], AudioManager);



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
var EFont = /* @__PURE__ */ ((EFont2) => {
  EFont2["null"] = "";
  return EFont2;
})(EFont || {});


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
var EMusics = /* @__PURE__ */ ((EMusics2) => {
  EMusics2["null"] = "";
  return EMusics2;
})(EMusics || {});


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
var ESounds = /* @__PURE__ */ ((ESounds2) => {
  ESounds2["null"] = "";
  return ESounds2;
})(ESounds || {});


/***/ }),

/***/ "./src/Game/Scene/SceneManager.ts":
/*!****************************************!*\
  !*** ./src/Game/Scene/SceneManager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneManager; });
/* harmony import */ var src_T_D3_scene_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D3/scene/Scene */ "./src/_T/D3/scene/Scene.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_sceneName/_EAllExportSceneName */ "./src/Game/_sceneName/_EAllExportSceneName.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let SceneManager = class {
  constructor() {
    this.m_sceneList = {};
  }
  getScene(_name) {
    return this.m_sceneList[_name];
  }
  init() {
    let _name;
    for (let _i in _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__["_EAllExportSceneName"]) {
      _name = _sceneName_EAllExportSceneName__WEBPACK_IMPORTED_MODULE_2__["_EAllExportSceneName"][_i];
      this.m_sceneList[_name] = new src_T_D3_scene_Scene__WEBPACK_IMPORTED_MODULE_0__["default"](_name);
      continue;
      switch (_name) {
      }
    }
  }
};
SceneManager = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], SceneManager);



/***/ }),

/***/ "./src/Game/UICon/EUIPanpl.ts":
/*!************************************!*\
  !*** ./src/Game/UICon/EUIPanpl.ts ***!
  \************************************/
/*! exports provided: EUIPanpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUIPanpl", function() { return EUIPanpl; });
var EUIPanpl = /* @__PURE__ */ ((EUIPanpl2) => {
  EUIPanpl2["main"] = "main";
  return EUIPanpl2;
})(EUIPanpl || {});


/***/ }),

/***/ "./src/Game/UICon/Panel/MainUICon.ts":
/*!*******************************************!*\
  !*** ./src/Game/UICon/Panel/MainUICon.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainUICon; });
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");
/* harmony import */ var src_FGUI_GameMain_FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/FGUI/GameMain/FGUI_PGameMain */ "./src/FGUI/GameMain/FGUI_PGameMain.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let MainUICon = class extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._UI = src_FGUI_GameMain_FGUI_PGameMain__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  _onShow() {
  }
  _onHideBefore() {
  }
};
MainUICon = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance()
], MainUICon);



/***/ }),

/***/ "./src/Game/UICon/UIConManager.ts":
/*!****************************************!*\
  !*** ./src/Game/UICon/UIConManager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIConManager; });
/* harmony import */ var src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUIConManager */ "./src/_T/D2/FGUI/BaseUIConManager.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _UIConManagerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIConManagerProxy */ "./src/Game/UICon/UIConManagerProxy.ts");
/* harmony import */ var _EUIPanpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EUIPanpl */ "./src/Game/UICon/EUIPanpl.ts");
/* harmony import */ var _Panel_MainUICon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Panel/MainUICon */ "./src/Game/UICon/Panel/MainUICon.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





let UIConManager = class extends src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
  _init() {
    this.m_uiConList = {
      [_EUIPanpl__WEBPACK_IMPORTED_MODULE_3__["EUIPanpl"].main]: _Panel_MainUICon__WEBPACK_IMPORTED_MODULE_4__["default"].instance
    };
    this.m_uiProxy = _UIConManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance;
  }
};
UIConManager = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], UIConManager);



/***/ }),

/***/ "./src/Game/UICon/UIConManagerProxy.ts":
/*!*********************************************!*\
  !*** ./src/Game/UICon/UIConManagerProxy.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIConManagerProxy; });
/* harmony import */ var src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseUIConManager */ "./src/_T/D2/FGUI/BaseUIConManager.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let UIConManagerProxy = class extends src_T_D2_FGUI_BaseUIConManager__WEBPACK_IMPORTED_MODULE_0__["BaseUIConManagerProxy"] {
  constructor() {
    super();
  }
};
UIConManagerProxy = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], UIConManagerProxy);



/***/ }),

/***/ "./src/Game/UICon/_test/_TestMainUICon.ts":
/*!************************************************!*\
  !*** ./src/Game/UICon/_test/_TestMainUICon.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TestMainUICon; });
/* harmony import */ var src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/FGUI/_Test/FGUI_TestMain */ "./src/FGUI/_Test/FGUI_TestMain.ts");
/* harmony import */ var src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/D2/FGUI/BaseSingleUICon */ "./src/_T/D2/FGUI/BaseSingleUICon.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let _TestMainUICon = class extends src_T_D2_FGUI_BaseSingleUICon__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
    this._UI = src_FGUI_Test_FGUI_TestMain__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
};
_TestMainUICon = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_2__["default"].DecorateInstance()
], _TestMainUICon);



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



class BuildConfigTs {
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
var _SceneNodeConfig;
((_SceneNodeConfig2) => {
  _SceneNodeConfig2.type = "config";
  class DataType {
  }
  _SceneNodeConfig2.DataType = DataType;
  _SceneNodeConfig2.datas = [];
  _SceneNodeConfig2.fileName = "SceneNodeConfig.json";
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
var _TestConfig;
((_TestConfig2) => {
  _TestConfig2.type = "config";
  class DataType {
  }
  _TestConfig2.DataType = DataType;
  _TestConfig2.datas = [];
  _TestConfig2.fileName = "TestConfig.json";
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
var _TestConst;
((_TestConst2) => {
  _TestConst2.type = "const";
  class DataType {
  }
  _TestConst2.DataType = DataType;
  _TestConst2.data = null;
  _TestConst2.fileName = "TestConst.json";
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
var _EAllScenePrefabsNames = /* @__PURE__ */ ((_EAllScenePrefabsNames2) => {
  _EAllScenePrefabsNames2["Prefab"] = "@Cube@@Sphere@";
  return _EAllScenePrefabsNames2;
})(_EAllScenePrefabsNames || {});


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
var _EAllExportSceneName = /* @__PURE__ */ ((_EAllExportSceneName2) => {
  _EAllExportSceneName2["Scene"] = "Scene";
  return _EAllExportSceneName2;
})(_EAllExportSceneName || {});


/***/ }),

/***/ "./src/Game/_test/ConfigTest.ts":
/*!**************************************!*\
  !*** ./src/Game/_test/ConfigTest.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigTest; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigProxy/SceneNodeConfigProxy */ "./src/Game/ConfigProxy/SceneNodeConfigProxy.ts");
/* harmony import */ var _ConfigProxy_TestConstProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConfigProxy/TestConstProxy */ "./src/Game/ConfigProxy/TestConstProxy.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let ConfigTest = class {
  constructor() {
  }
  start() {
    console.log("\u573A\u666F\u8282\u70B9\u914D\u7F6E\u8868\u5185\u5BB9");
    console.log(_ConfigProxy_SceneNodeConfigProxy__WEBPACK_IMPORTED_MODULE_1__["default"].instance.dataList);
    console.log("\u5E38\u91CF\u6D4B\u8BD5\u914D\u7F6E\u8868\u5185\u5BB9");
    console.log(_ConfigProxy_TestConstProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data);
  }
};
ConfigTest = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], ConfigTest);



/***/ }),

/***/ "./src/Game/_test/DataTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/DataTest.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataTest; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/TestDataProxy */ "./src/Game/Data/TestDataProxy.ts");
/* harmony import */ var _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Debug/CustomDebug */ "./src/Game/Debug/CustomDebug.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let DataTest = class {
  constructor() {
  }
  start() {
    console.log("\u6570\u636E\u6D4B\u8BD5", _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data);
    _Debug_CustomDebug__WEBPACK_IMPORTED_MODULE_2__["default"].instance.addItem("dataTest", _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data);
    _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
      console.log("\u6570\u636E\u8BBE\u7F6E\u56DE\u8C03");
    });
    _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
      console.log("\u6570\u7EC4\u88AB\u8BBE\u7F6E");
    }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.array);
    _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
      console.log("\u5BF9\u8C61\u5C5E\u6027\u88AB\u8BBE\u7F6E");
    }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.object);
    _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.objectProxyT.addMonitor(this, () => {
      console.log("\u5BF9\u8C61\u5C5E\u6027 a \u88AB\u8BBE\u7F6E");
    }, _Data_TestDataProxy__WEBPACK_IMPORTED_MODULE_1__["TestDataProxy"].instance.data.object, "a");
  }
};
DataTest = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], DataTest);



/***/ }),

/***/ "./src/Game/_test/LibraryTest.ts":
/*!***************************************!*\
  !*** ./src/Game/_test/LibraryTest.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LibraryTest; });
/* harmony import */ var src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let LibraryTest = class {
  constructor() {
  }
  start() {
    console.log(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("pako\u5DE5\u5177", pako));
  }
};
LibraryTest = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], LibraryTest);



/***/ }),

/***/ "./src/Game/_test/OtherTest.ts":
/*!*************************************!*\
  !*** ./src/Game/_test/OtherTest.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OtherTest; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

let OtherTest = class {
  constructor() {
  }
  start() {
  }
};
OtherTest = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], OtherTest);



/***/ }),

/***/ "./src/Game/_test/PackTest.ts":
/*!************************************!*\
  !*** ./src/Game/_test/PackTest.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackTest; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

let PackTest = class {
  constructor() {
  }
  start() {
    console.log("\u6253\u5305\u6D4B\u8BD570");
  }
};
PackTest = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], PackTest);



/***/ }),

/***/ "./src/Game/_test/TestMain.ts":
/*!************************************!*\
  !*** ./src/Game/_test/TestMain.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestMain; });
/* harmony import */ var src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scene/SceneManager */ "./src/Game/Scene/SceneManager.ts");
/* harmony import */ var _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UICon/_test/_TestMainUICon */ "./src/Game/UICon/_test/_TestMainUICon.ts");
/* harmony import */ var _ConfigTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigTest */ "./src/Game/_test/ConfigTest.ts");
/* harmony import */ var _DataTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataTest */ "./src/Game/_test/DataTest.ts");
/* harmony import */ var _LibraryTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LibraryTest */ "./src/Game/_test/LibraryTest.ts");
/* harmony import */ var _OtherTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OtherTest */ "./src/Game/_test/OtherTest.ts");
/* harmony import */ var _PackTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PackTest */ "./src/Game/_test/PackTest.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};








let TestMain = class {
  constructor() {
  }
  start() {
    _Scene_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].instance.getScene("Scene").getSceneNode("debug").asyncBuild().then((node) => {
      console.log("\u5F53\u524D\u573A\u666F", node.scene);
      console.log("\u5F53\u524D\u8282\u70B9", node);
      console.log("cube\u7CBE\u7075", node.getNode("Cube"));
      node.scene.setEnvironment();
    });
    _UICon_test_TestMainUICon__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    _DataTest__WEBPACK_IMPORTED_MODULE_4__["default"].instance.start();
    _LibraryTest__WEBPACK_IMPORTED_MODULE_5__["default"].instance.start();
    _ConfigTest__WEBPACK_IMPORTED_MODULE_3__["default"].instance.start();
    _PackTest__WEBPACK_IMPORTED_MODULE_7__["default"].instance.start();
    _OtherTest__WEBPACK_IMPORTED_MODULE_6__["default"].instance.start();
  }
};
TestMain = __decorateClass([
  src_T_Ts_InstanceT__WEBPACK_IMPORTED_MODULE_0__["default"].DecorateInstance()
], TestMain);



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
class GameConfig {
  constructor() {
  }
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
    Laya.URL.exportSceneToJson = _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].exportSceneToJson;
    if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].debug || Laya.Utils.getQueryString("debug") == "true")
      Laya.enableDebugPanel();
    if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].physicsDebug && Laya["PhysicsDebugDraw"])
      Laya["PhysicsDebugDraw"].enable();
    if (_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"].stat)
      Laya.Stat.show();
    Laya.alertGlobalError(true);
    Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
  }
  onVersionLoaded() {
    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
  }
  onConfigLoaded() {
    _T_TMain__WEBPACK_IMPORTED_MODULE_3__["default"].initFrame();
    _WhiteScreenT__WEBPACK_IMPORTED_MODULE_2__["default"].load().then(() => {
      _T_TMain__WEBPACK_IMPORTED_MODULE_3__["default"].initGame();
      _WhiteScreenT__WEBPACK_IMPORTED_MODULE_2__["default"].open().then(() => {
        new _Game_GameMain__WEBPACK_IMPORTED_MODULE_0__["default"]();
      });
    });
  }
}
new Main();


/***/ }),

/***/ "./src/Platform/Common/PlatformCommonEventId.ts":
/*!******************************************************!*\
  !*** ./src/Platform/Common/PlatformCommonEventId.ts ***!
  \******************************************************/
/*! exports provided: PlatformCommonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformCommonEvent", function() { return PlatformCommonEvent; });
var PlatformCommonEvent = /* @__PURE__ */ ((PlatformCommonEvent2) => {
  PlatformCommonEvent2["PAUSE_AUDIO"] = "PAUSE_AUDIO";
  PlatformCommonEvent2["RESUM_AUDIO"] = "RESUM_AUDIO";
  PlatformCommonEvent2["AD_CONFIG_GETTED"] = "AD_CONFIG_GETTED";
  PlatformCommonEvent2["SELF_AD_INITED"] = "SELF_AD_INITED";
  return PlatformCommonEvent2;
})(PlatformCommonEvent || {});


/***/ }),

/***/ "./src/Platform/Data/BDData.ts":
/*!*************************************!*\
  !*** ./src/Platform/Data/BDData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class BDData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/OPPOData.ts":
/*!***************************************!*\
  !*** ./src/Platform/Data/OPPOData.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OPPOData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class OPPOData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/PlatformData.ts":
/*!*******************************************!*\
  !*** ./src/Platform/Data/PlatformData.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformData; });
class PlatformData {
  constructor() {
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/QQData.ts":
/*!*************************************!*\
  !*** ./src/Platform/Data/QQData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QQData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class QQData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/QTTData.ts":
/*!**************************************!*\
  !*** ./src/Platform/Data/QTTData.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QTTData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class QTTData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/TTData.ts":
/*!*************************************!*\
  !*** ./src/Platform/Data/TTData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class TTData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/VIVOData.ts":
/*!***************************************!*\
  !*** ./src/Platform/Data/VIVOData.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VIVOData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class VIVOData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Data/WXData.ts":
/*!*************************************!*\
  !*** ./src/Platform/Data/WXData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXData; });
/* harmony import */ var _PlatformData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformData */ "./src/Platform/Data/PlatformData.ts");

class WXData extends _PlatformData__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.appId = "";
    this.appKey = "";
    this.bannerId = "";
    this.rewardVideoId = "";
    this.interstitialId = "";
    this.nativeId = "";
    this.nativeBannerIds = [];
    this.nativeIconIds = [];
    this.nativeinterstitialIds = [];
    this.nativeinpageIds = [];
    this.shareId = "";
  }
}


/***/ }),

/***/ "./src/Platform/Device/DefaultDevice.ts":
/*!**********************************************!*\
  !*** ./src/Platform/Device/DefaultDevice.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultDevice; });
class DefaultDevice {
  Vibrate(isLong) {
    console.log("\u8C03\u7528\u9707\u52A8", isLong);
    if (!navigator.vibrate) {
      console.log("\u4E0D\u652F\u6301\u8BBE\u5907\u9707\u52A8\uFF01");
      return;
    }
    if (isLong) {
      navigator.vibrate(400);
    } else {
      navigator.vibrate(15);
    }
  }
}


/***/ }),

/***/ "./src/Platform/Device/TTDevice.ts":
/*!*****************************************!*\
  !*** ./src/Platform/Device/TTDevice.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTDevice; });
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultDevice */ "./src/Platform/Device/DefaultDevice.ts");

class TTDevice extends _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(base) {
    super();
    this._base = base;
  }
  Vibrate(isLong) {
    console.log("\u8C03\u7528\u9707\u52A8", isLong);
    if (isLong) {
      this._base.vibrateLong({
        success(res) {
        },
        fail(res) {
          console.error("\u8C03\u7528\u9707\u52A8\u5931\u8D25", res);
        },
        complete(res) {
        }
      });
    } else {
      this._base.vibrateShort({
        success(res) {
        },
        fail(res) {
          console.error("\u8C03\u7528\u9707\u52A8\u5931\u8D25", res);
        },
        complete(res) {
        }
      });
    }
  }
}


/***/ }),

/***/ "./src/Platform/Device/WXDevice.ts":
/*!*****************************************!*\
  !*** ./src/Platform/Device/WXDevice.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXDevice; });
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultDevice */ "./src/Platform/Device/DefaultDevice.ts");

class WXDevice extends _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__["default"] {
  Vibrate(isLong) {
    console.log("\u8C03\u7528\u9707\u52A8", isLong);
    if (window["wx"]) {
      if (isLong) {
        Laya.timer.callLater(wx, wx.vibrateLong, [null]);
      } else {
        Laya.timer.callLater(wx, wx.vibrateShort, [null]);
      }
    }
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/BDPlatform.ts":
/*!**************************************************!*\
  !*** ./src/Platform/PlatformClass/BDPlatform.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDPlatform; });
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");



class BDPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].BD;
    this._showVideoLoad = false;
  }
  Init(platformData) {
    this._base = window["swan"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF");
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    this._InitLauchOption();
    this._InitShareInfo();
    this._InitSystemInfo();
    this._isBannerLoaded = false;
    this._isBannerShowed = false;
    this._CreateVideoAd();
    this._CreateInterstitalAd();
    window["iplatform"] = this;
  }
  _CreateBannerAd() {
    if (!this.platformData.bannerId) {
      console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    let windowWidth = this._base.getSystemInfoSync().windowWidth;
    let windowHeight = this._base.getSystemInfoSync().windowHeight;
    let bannerObj = {};
    bannerObj["adUnitId"] = this.platformData.bannerId;
    bannerObj["appSid"] = this.platformData.sid;
    let styleObj = {};
    styleObj["left"] = 0;
    styleObj["top"] = 0;
    styleObj["width"] = windowWidth;
    bannerObj["style"] = styleObj;
    this._bannerAd = this._base.createBannerAd(bannerObj);
    this._bannerAd.onLoad(() => {
      console.log("banner\u52A0\u8F7D\u6210\u529F");
      this._isBannerLoaded = true;
      this._bannerAd.style.top = windowHeight - this._bannerAd.style.height;
      this._bannerAd.show();
    });
    this._bannerAd.onError((res) => {
      console.error("banner\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
    });
  }
  _CreateVideoAd() {
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    videoObj["appSid"] = this.platformData.sid;
    this._rewardVideo = this._base.createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
      if (this._videoFailedCount > 10) {
        console.log("\u7B2C", this._videoFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u89C6\u9891\u5E7F\u544A");
        this._rewardVideo.load();
      }
    });
    this._rewardVideo.onClose((res) => {
      this._base.hideLoading();
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      if (isEnd) {
        if (this._rewardSuccessed)
          this._rewardSuccessed.run();
      } else {
        if (this._rewardSkipped)
          this._rewardSkipped.run();
      }
      this._rewardVideo.load();
    });
  }
  _CreateInterstitalAd() {
  }
  LoadSubpackage(name, onSuccess, onFailed, onProgress) {
    let loadObj = {};
    loadObj["name"] = name;
    loadObj["success"] = () => {
      console.log("\u5206\u5305\u52A0\u8F7D\u6210\u529F", name);
      if (onSuccess) {
        onSuccess.run();
      }
    };
    loadObj["fail"] = () => {
      console.error("\u5206\u5305\u52A0\u8F7D\u5931\u8D25", name);
      if (onFailed) {
        onFailed.run();
      }
    };
    let loadTask = this._base.loadSubpackage(loadObj);
    loadTask.onProgressUpdate((res) => {
      if (onProgress) {
        let value = res.progress / 100;
        if (isNaN(value)) {
          value = res.loaded / res.total;
        }
        onProgress.runWith(value);
      }
    });
  }
  RecordEvent(eventId, param) {
    this._base.reportAnalytics(eventId, param);
  }
  ShowBannerAd() {
    if (this._isBannerLoaded) {
      return;
    }
    this._CreateBannerAd();
  }
  HideBannerAd() {
    if (!this._isBannerLoaded)
      return;
    this._isBannerLoaded = false;
    if (this._bannerAd) {
      this._bannerAd.destroy();
    }
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/DefaultPlatform.ts":
/*!*******************************************************!*\
  !*** ./src/Platform/PlatformClass/DefaultPlatform.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultPlatform; });
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _Device_DefaultDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Device/DefaultDevice */ "./src/Platform/Device/DefaultDevice.ts");
/* harmony import */ var _Record_WebRecordManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Record/WebRecordManager */ "./src/Platform/Record/WebRecordManager.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");




class DefaultPlatform {
  constructor() {
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web;
    this.safeArea = null;
    this.recordManager = new _Record_WebRecordManager__WEBPACK_IMPORTED_MODULE_2__["WebRecordManager"]();
    this.device = new _Device_DefaultDevice__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.systemInfo = null;
    this.isSupportJumpOther = true;
  }
  Init(platformData) {
    this.loginState = {
      isLogin: false,
      code: null
    };
    this.recordManager.Platform = this;
    Laya.timer.once(500, this, this._FakeLoginEnd);
  }
  _FakeLoginEnd() {
    if (this.onLoginEnd)
      this.onLoginEnd.run();
  }
  IsBannerAvaliable() {
    return false;
  }
  IsVideoAvaliable() {
    return true;
  }
  IsInterstitalAvaliable() {
    return false;
  }
  ShowBannerAd() {
    console.log("\u8C03\u7528ShowBannerAd");
  }
  HideBannerAd() {
    console.log("\u8C03\u7528HideBannerAd");
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    console.log("\u8C03\u7528ShowRewardVideoAd");
    onSuccess.run();
  }
  ShowRewardVideoAdAsync() {
    return new Promise(function(resolve) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_3__["default"].instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        resolve(true);
      }), Laya.Handler.create(this, () => {
        resolve(false);
      }));
    });
  }
  ShowInterstitalAd() {
    console.log("\u8C03\u7528ShowInterstitalAd");
  }
  GetFromAppId() {
    return null;
  }
  ShareAppMessage(obj, onSuccess = null, onFailed = null) {
    console.log("\u5206\u4EAB\u6D88\u606F", obj);
    if (onSuccess) {
      onSuccess.run();
    }
  }
  LoadSubpackage(name, onSuccess, onFailed) {
    if (onSuccess) {
      onSuccess.run();
    }
  }
  RecordEvent(eventId, param) {
    console.log("\u8BB0\u5F55\u4E8B\u4EF6", eventId, param);
  }
  ShareVideoInfo() {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "\u6682\u672A\u5B9E\u73B0\u5F55\u5C4F\u529F\u80FD");
  }
  _CheckUpdate() {
  }
  ShowToast(str) {
    console.log("\u663E\u793A\u6D88\u606F\uFF1A", str);
  }
  OpenGameBox() {
    console.error("\u5F53\u524D\u5E73\u53F0", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "\u6682\u4E0D\u652F\u6301\u4E92\u63A8\u6E38\u620F\u76D2\u5B50");
  }
  NavigateToApp(appid, path, extra) {
    return new Promise((resolve, reject) => {
      console.error("\u5F53\u524D\u5E73\u53F0", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, `\u6682\u4E0D\u652F\u6301\u5C0F\u7A0B\u5E8F\u8DF3\u8F6Cappid:${appid}`);
      resolve(false);
    });
  }
  createShortcut() {
    console.log("\u521B\u5EFA\u684C\u9762\u56FE\u6807");
  }
  GetStorage(key) {
    console.log("\u8BFB\u672C\u5730\u5B58\u50A8");
    return Laya.LocalStorage.getItem(key);
  }
  SetStorage(key, data) {
    console.log("\u5199\u672C\u5730\u5B58\u50A8");
    Laya.LocalStorage.setItem(key, data);
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/OppoPlatform.ts":
/*!****************************************************!*\
  !*** ./src/Platform/PlatformClass/OppoPlatform.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OppoPlatform; });
/* harmony import */ var _Device_DefaultDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Device/DefaultDevice */ "./src/Platform/Device/DefaultDevice.ts");
/* harmony import */ var _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Record/DefaultRecordManager */ "./src/Platform/Record/DefaultRecordManager.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class OppoPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].OPPO;
    this.safeArea = null;
    this.recordManager = new _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.device = new _Device_DefaultDevice__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.isSupportJumpOther = true;
    this._isBannerLoaded = false;
    this._isVideoLoaded = false;
    this._isInterstitialLoaded = false;
    this._isInterstitialCanShow = true;
    this._nativeAdLoaded = false;
    this._cacheVideoAD = false;
  }
  Init(platformData) {
    this._base = window["qg"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr);
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    this._InitLauchOption();
    this._Login();
    this._InitSystemInfo();
    this.getSystemInfo();
    if (this.systemInfo.platformVersion >= 1051) {
    } else {
      this._base.initAdService({
        appId: platformData.appId,
        isDebug: true,
        success: () => {
          console.log("oppo\u5E7F\u544A", "\u521D\u59CB\u5316\u5E7F\u544A\u670D\u52A1\u6210\u529F", platformData);
          this._CreateVideoAd();
        },
        fail: () => {
          console.error("oppo\u5E7F\u544A", "\u521D\u59CB\u5316\u5E7F\u544A\u670D\u52A1\u5931\u8D25");
        }
      });
    }
    window["iplatform"] = this;
  }
  getSystemInfo() {
    this._base.getSystemInfo({
      success: (res) => {
        this.systemInfo = res;
        console.log(this.systemInfo);
      },
      fail: () => {
      },
      complete: () => {
      }
    });
  }
  reportMonitor() {
    console.log("oppo\u4E0A\u62A5\u6570\u636E", this.systemInfo);
    if (this.systemInfo && this.systemInfo.platformVersion >= 1060) {
      this._base.reportMonitor("game_scene", 0);
    }
  }
  _CheckUpdate() {
  }
  _Login() {
    this.loginState = {
      isLogin: false,
      code: ""
    };
    let loginData = {};
    loginData.success = (res) => {
      this._OnLoginSuccess(res);
    };
    loginData.fail = (res) => {
      console.error(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "\u767B\u5F55\u5931\u8D25", res);
      this.loginState.isLogin = false;
      this.loginState.code = "";
    };
    loginData.complete = (res) => {
      if (this.onLoginEnd != null) {
        this.onLoginEnd.run();
      }
    };
    this._base.login(loginData);
  }
  _OnLoginSuccess(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "\u767B\u5F55\u6210\u529F", res);
    this.loginState.isLogin = true;
    this.loginState.code = res.token;
  }
  ShareAppMessage(obj, onSuccess, onFailed) {
  }
  _InitLauchOption() {
    this._base.onShow(this._OnShow);
    this._base.onHide(this._OnHide);
    let res = this._base.getLaunchOptionsSync();
    this._OnShow(res);
  }
  canCreateShortcut() {
    return new Promise((resolve, reject) => {
      qg["hasShortcutInstalled"]({
        success: function(res) {
          resolve(res);
        },
        fail: function(err) {
          reject();
        },
        complete: function() {
        }
      });
    });
  }
  createShortcut() {
    return new Promise((resolve, reject) => {
      qg["hasShortcutInstalled"]({
        success: function(res) {
          if (res == false) {
            qg["installShortcut"]({
              success: function() {
                resolve();
              },
              fail: function(err) {
                reject();
              },
              complete: function() {
              }
            });
          } else {
            resolve();
          }
        },
        fail: function(err) {
          reject();
        },
        complete: function() {
        }
      });
    });
  }
  _CreateInterstitalAd() {
  }
  _CreateVideoAd() {
    if (!this._cacheVideoAD) {
      console.log("\u5F53\u524D\u7B56\u7565\u4E3A\u4E0D\u7F13\u5B58\u89C6\u9891\u5E7F\u544A");
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      return;
    }
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    this._rewardVideo = createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
      if (this._videoFailedCount > 10) {
        console.log("\u7B2C", this._videoFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u89C6\u9891\u5E7F\u544A");
        this._rewardVideo.load();
      }
    });
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
  }
  IsBannerAvaliable() {
    return this._isBannerLoaded;
  }
  IsVideoAvaliable() {
    return this._isVideoLoaded;
  }
  IsInterstitalAvaliable() {
    return false;
  }
  IsNativeAvaliable() {
    return this._nativeAdLoaded;
  }
  ShowBannerAd() {
    return __async(this, null, function* () {
      if (!this.platformData.bannerId) {
        console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
        return;
      }
      if (this._bannerAd) {
        this._bannerAd.show();
        console.log("\u5C55\u793A\u5DF2\u6709banner");
        return;
      }
      this.HideBannerAd();
      this._bannerAd = this._base.createBannerAd(
        {
          adUnitId: this.platformData.bannerId
        }
      );
      let isBannerLoading = true;
      let loadSuccess = false;
      this._bannerAd.show().then((res) => {
        console.log("banner\u52A0\u8F7D\u6210\u529F", res);
        if (res["code"] == 0) {
          loadSuccess = true;
        }
        isBannerLoading = false;
      }).catch((res) => {
        console.error("banner\u52A0\u8F7D\u5931\u8D25", res);
        isBannerLoading = false;
      });
      while (isBannerLoading) {
        yield new Promise((r) => {
          Laya.timer.frameOnce(1, this, r);
        });
      }
      if (loadSuccess)
        return;
      console.log("banner\u5C55\u793A\u5931\u8D25,\u5C55\u793Anative\u5E7F\u544A");
      if (this._bannerAd) {
        this._bannerAd.destroy();
        this._bannerAd = null;
      }
      for (let i = 0; i < this.platformData.nativeIconIds.length; ++i) {
        let ret = yield this._ShowNativeBanner(i);
        if (ret) {
          break;
        }
        this._bannerAd.destroy();
      }
    });
  }
  _ShowNativeBanner(index) {
    return __async(this, null, function* () {
      let nativeBanner = this.base.createNativeAd({
        adUnitId: this.platformData.nativeBannerIds[index]
      });
      this._bannerAd = nativeBanner;
      let loadRet = yield nativeBanner.load();
      if (loadRet["code"] == 0) {
        let adList = loadRet["adList"];
        if (adList == null || adList.length == 0) {
          console.error("native banner\u52A0\u8F7D\u5931\u8D25", loadRet);
          return false;
        }
        let adData = adList[0];
        if (adData == null) {
          console.error("native banner\u52A0\u8F7D\u5931\u8D25", loadRet);
          return false;
        }
        return true;
      } else {
        console.error("native banner\u52A0\u8F7D\u5931\u8D25", loadRet);
        return false;
      }
    });
  }
  HideBannerAd() {
    if (this._bannerAd) {
      this._bannerAd.destroy();
      this._bannerAd = null;
    }
  }
  ShowNativeAd() {
    return __async(this, null, function* () {
      if (!this.IsNativeAvaliable()) {
        return;
      }
    });
  }
  HideNativeAd() {
    if (!this.IsNativeAvaliable()) {
      return;
    }
  }
  _DoCacheShowVideo(onSuccess, onSkipped) {
    if (!this._isVideoLoaded) {
      console.error("\u89C6\u9891\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    this._isVideoLoaded = false;
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].PAUSE_AUDIO);
    this._rewardVideo.show();
  }
  _DoNoCacheShowVideo(onSuccess, onSkipped) {
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      this._rewardSkipped && this._rewardSkipped.run();
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      this._rewardSkipped && this._rewardSkipped.run();
      return;
    }
    if (this._rewardVideo) {
      this._rewardVideo.destroy();
    }
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    this._rewardVideo = createRewardedVideoAd(videoObj);
    console.log("\u5E7F\u544A\u521B\u5EFA\u5B8C\u6210", videoObj);
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
    this._rewardVideo.onError((err) => {
      console.log("\u5E7F\u544A\u7EC4\u4EF6\u51FA\u73B0\u95EE\u9898", err);
      if (this._rewardSkipped)
        this._rewardSkipped.run();
    });
    this._rewardVideo.onLoad((res) => {
      console.log("\u5E7F\u544A\u52A0\u8F7D\u6210\u529F", res);
    });
    this._rewardVideo.load().then(() => {
      this._rewardVideo.show();
    });
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    if (this._cacheVideoAD) {
      this._DoCacheShowVideo(onSuccess, onSkipped);
    } else {
      this._DoNoCacheShowVideo(onSuccess, onSkipped);
    }
  }
  ShowRewardVideoAdAsync() {
    return new Promise(function(resolve) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__["default"].instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        resolve(true);
      }), Laya.Handler.create(this, () => {
        resolve(false);
      }));
    });
  }
  _DisableInterstitalAd() {
    return __async(this, null, function* () {
      this._isInterstitialCanShow = false;
      yield new Promise((r) => {
        Laya.timer.once(60 * 1e3, this, r);
      });
      this._isInterstitialCanShow = true;
    });
  }
  GetFromAppId() {
    if (this.lauchOption.referrerInfo == null) {
      return null;
    }
    if (!this.lauchOption.referrerInfo.appId) {
      return null;
    }
    return this.lauchOption.referrerInfo.appId;
  }
  CreatShortcut() {
    return new Promise((resolve, reject) => {
      qg["hasShortcutInstalled"]({
        success: function(res) {
          if (res == false) {
            qg["installShortcut"]({
              success: function() {
                resolve();
              },
              fail: function(err) {
                reject();
              },
              complete: function() {
              }
            });
          } else {
            resolve();
          }
        },
        fail: function(err) {
          reject();
        },
        complete: function() {
        }
      });
    });
  }
  LoadSubpackage(name, onSuccess, onFailed, onProgress) {
    let loadObj = {};
    loadObj["name"] = name;
    loadObj["success"] = () => {
      console.log("\u5206\u5305\u52A0\u8F7D\u6210\u529F", name);
      if (onSuccess) {
        onSuccess.run();
      }
    };
    loadObj["fail"] = () => {
      console.error("\u5206\u5305\u52A0\u8F7D\u5931\u8D25", name);
      if (onFailed) {
        onFailed.run();
      }
    };
    let loadTask = this._base.loadSubpackage(loadObj);
    loadTask.onProgressUpdate((res) => {
      console.log("\u5206\u5305\u52A0\u8F7D\u8FDB\u5EA6", res);
      if (onProgress) {
        onProgress.runWith(res.progress / 100);
      }
    });
  }
  RecordEvent(eventId, param) {
    console.log("[\u8BB0\u5F55\u4E8B\u4EF6]", eventId, param);
  }
  CreateShareVideoBtn(x, y, width, height) {
  }
  HideShareVideoBtn() {
    if (this._shareVideoBtn != null) {
      this._shareVideoBtn.hide();
    }
  }
  ShowToast(str) {
    this._base.showToast(
      {
        title: str,
        duration: 2e3
      }
    );
  }
  OpenGameBox(appIds) {
    console.error("\u5F53\u524D\u5E73\u53F0", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "\u6682\u4E0D\u652F\u6301\u4E92\u63A8\u6E38\u620F\u76D2\u5B50");
  }
  NavigateToApp(appId, path, extra) {
    return new Promise((resolve, reject) => {
      Laya.Browser.window.qg.navigateToMiniGame({
        pkgName: appId,
        path,
        extraData: extra,
        success: function() {
          resolve(true);
          console.log("oppo\u5C0F\u6E38\u620F\u8DF3\u8F6C\u6210\u529F");
        },
        fail: function(res) {
          reject(false);
          console.log("oppo\u5C0F\u6E38\u620F\u8DF3\u8F6C\u5931\u8D25\uFF1A", JSON.stringify(res));
        }
      });
    });
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/QQPlatform.ts":
/*!**************************************************!*\
  !*** ./src/Platform/PlatformClass/QQPlatform.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QQPlatform; });
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");




class QQPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].QQ;
    this.isBannerShowing = false;
  }
  Init(platformData) {
    this._base = window["qq"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr);
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    this._InitLauchOption();
    this._Login();
    this._InitShareInfo();
    this._InitSystemInfo();
    this._CreateBannerAd();
    this._CreateVideoAd();
    this._CreateInterstitalAd();
    window["iplatform"] = this;
    console.error("\u5E73\u53F0\u521D\u59CB\u5316\u5B8C\u6210", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr);
  }
  _InitSystemInfo() {
    try {
      let systemInfo = this._base.getSystemInfoSync();
      this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
      this.safeArea = {};
      this.safeArea.width = systemInfo.windowWidth;
      this.safeArea.height = systemInfo.windowHeight;
      this.safeArea.top = systemInfo.statusBarHeight;
      this.safeArea.bottom = 0;
      console.log("QQ\u8986\u5199_InitSystemInfo", this.safeArea);
    } catch (e) {
      console.error(e);
      console.error("\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F\u5931\u8D25,\u6267\u884C\u9ED8\u8BA4\u521D\u59CB\u5316");
      this.safeArea = null;
    }
  }
  _CreateBannerAd(show) {
    if (!this.platformData.bannerId) {
      console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    let windowWidth = this._base.getSystemInfoSync().windowWidth;
    let windowHeight = this._base.getSystemInfoSync().windowHeight;
    let bannerObj = {};
    bannerObj["adUnitId"] = this.platformData.bannerId;
    let styleObj = {};
    styleObj["top"] = windowHeight - 80;
    styleObj["width"] = 300;
    styleObj["left"] = (windowWidth - styleObj["width"]) / 2;
    bannerObj["style"] = styleObj;
    this._bannerAd = this._base.createBannerAd(bannerObj);
    this._isBannerLoaded = false;
    this._bannerAd.onLoad(() => {
      console.log("qq banner\u52A0\u8F7D\u6210\u529F", this._bannerAd);
      this._isBannerLoaded = true;
      if (show) {
        this._bannerAd.show();
      }
    });
    this._bannerAd.onError((res) => {
      console.error("banner\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
    });
    this._bannerAd.onResize((size) => {
      console.log("onResize", size);
      this._bannerAd.style.top = windowHeight - 80;
      this._bannerAd.style.left = (windowWidth - 300) / 2;
      console.log("onResize", this._bannerAd);
    });
  }
  IsBannerAvaliable() {
    return this._isBannerLoaded;
  }
  IsVideoAvaliable() {
    return this._isVideoLoaded;
  }
  IsInterstitalAvaliable() {
    return this._isInterstitialLoaded;
  }
  ShowBannerAd() {
    if (!this.IsBannerAvaliable()) {
      return;
    }
    this._bannerAd.show();
    this.isBannerShowing = true;
    Laya.timer.loop(15 * 1e3, this, this.refreshBanner);
  }
  refreshBanner() {
    if (this.isBannerShowing) {
      console.log("refresh banner");
      this._bannerAd.hide();
      this._CreateBannerAd(true);
    }
  }
  HideBannerAd() {
    if (!this.IsBannerAvaliable())
      return;
    if (this._bannerAd) {
      this._bannerAd.hide();
      Laya.timer.clear(this, this.refreshBanner);
      this.isBannerShowing = false;
    }
    this._CreateBannerAd();
  }
  _DoCacheShowVideo(onSuccess, onSkipped) {
    if (!this._isVideoLoaded) {
      console.error("\u89C6\u9891\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    this._isVideoLoaded = false;
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].PAUSE_AUDIO);
    this._rewardVideo.show();
  }
  _DoNoCacheShowVideo(onSuccess, onSkipped) {
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    if (!this._isVideoLoaded || !this._rewardVideo) {
      if (!this.platformData.rewardVideoId) {
        console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
        onSkipped.run();
        return;
      }
      let createRewardedVideoAd = this._base["createRewardedVideoAd"];
      if (createRewardedVideoAd == null) {
        console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
        onSkipped.run();
        return;
      }
      this._videoFailedCount = 0;
      let videoObj = {};
      videoObj["adUnitId"] = this.platformData.rewardVideoId;
      this._rewardVideo = createRewardedVideoAd(videoObj);
      this._rewardVideo.onLoad(() => {
        console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
        this._isVideoLoaded = true;
      });
      this._rewardVideo.onError((res) => {
        this._videoFailedCount++;
        console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res, this._videoFailedCount);
      });
      this._rewardVideo.onClose((res) => {
        Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
        console.log(" NoCache - \u89C6\u9891\u56DE\u8C03", res);
        let isEnd = res["isEnded"];
        console.log("noCache---", isEnd, "----", !!this._rewardSuccessed, "-----", !!this._rewardSkipped);
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    }
    this._rewardVideo.show().then(() => {
    }).catch((err) => {
      console.log("\u5E7F\u544A\u7EC4\u4EF6\u51FA\u73B0\u95EE\u9898", err);
      this._rewardVideo.load().then(() => {
        console.log("\u624B\u52A8\u52A0\u8F7D\u6210\u529F");
        return this._rewardVideo.show().then(() => {
        });
      });
    });
    ;
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    if (this._cacheVideoAD) {
      this._DoCacheShowVideo(onSuccess, onSkipped);
    } else {
      this._DoNoCacheShowVideo(onSuccess, onSkipped);
    }
  }
  ShowRewardVideoAdAsync() {
    return new Promise(function(resolve) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_1__["default"].instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        resolve(true);
      }, null, true), Laya.Handler.create(this, () => {
        resolve(false);
      }, null, true));
    });
  }
  ShowInterstitalAd() {
    if (!this._isInterstitialLoaded) {
      console.error("\u63D2\u9875\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._intersitialAd.show();
  }
  OpenGameBox(appIds = []) {
    this.showAppBox();
  }
  showAppBox() {
    if (this.appBox) {
      this.appBox.show();
    }
  }
  createAppBox(show) {
    if (!this.appBox) {
      this.appBox = this._base.createAppBox({
        adUnitId: ""
      });
    }
    this.appBox.load().then(() => {
      if (show) {
        this.appBox.show();
      }
    });
    this.appBox.onClose(() => {
      console.log("\u5173\u95ED\u76D2\u5B50");
    });
  }
  hideAppBox() {
    if (this.appBox) {
      this.appBox.destroy();
    }
  }
  showBlockAd(count = 1) {
    let obj = {
      adUnitId: "",
      style: { left: 55, top: Laya.stage.height / 2 },
      size: count,
      orientation: "vertical"
    };
    this.blockAd = this._base.createBlockAd(obj);
    this.blockAd.onLoad(() => {
      console.log("\u79EF\u6728\u5E7F\u544A\u52A0\u8F7D\u5B8C\u6210");
      this.blockAd.show().then(() => {
        console.log("\u79EF\u6728\u5C55\u793A\u6210\u529F");
      }).catch((e) => {
        console.error("\u79EF\u6728\u5C55\u793A\u5931\u8D25", e);
      });
    });
    this.blockAd.onError((err) => {
      console.error("\u79EF\u6728\u5E7F\u544A\u52A0\u8F7D\u9519\u8BEF", err);
    });
    this.blockAd.onResize((res) => {
      console.log("\u79EF\u6728resize", res);
    });
  }
  hideBlockAd() {
    if (this.blockAd) {
      this.blockAd.hide();
      this.blockAd.destroy();
    }
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/QTTPlatform.ts":
/*!***************************************************!*\
  !*** ./src/Platform/PlatformClass/QTTPlatform.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QTTPlatform; });
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");



class QTTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QTT;
  }
  Init(platformData) {
    this._base = window["qttGame"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF");
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    window["iplatform"] = this;
  }
  IsBannerAvaliable() {
    return true;
  }
  ShowBannerAd() {
    this._base.showBanner({ index: 1 });
  }
  HideBannerAd() {
    this._base.hideBanner();
  }
  IsVideoAvaliable() {
    return true;
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    let options = {};
    options.index = 1;
    options.gametype = 1;
    options.rewardtype = 1;
    options.data = {};
    options.data.title = "\u83B7\u5F97\u5956\u52B1";
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].PAUSE_AUDIO);
    this._base.showVideo(
      (res) => {
        Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
        if (res == 1) {
          if (onSuccess) {
            onSuccess.run();
          }
        } else {
          if (onSkipped) {
            onSkipped.run();
          }
        }
      },
      options
    );
  }
  ShowInterstitalAd() {
    this.ShowHDReward();
  }
  ShowHDReward() {
    let options = {};
    options.index = 1;
    options.rewardtype = 1;
    this._base.showHDReward(options);
  }
  RecordEvent(eventId, param) {
    console.log("\u8BB0\u5F55\u4E8B\u4EF6", eventId, param);
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/TTPlatform.ts":
/*!**************************************************!*\
  !*** ./src/Platform/PlatformClass/TTPlatform.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTPlatform; });
/* harmony import */ var _Device_TTDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Device/TTDevice */ "./src/Platform/Device/TTDevice.ts");
/* harmony import */ var _Record_TTRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Record/TTRecordManager */ "./src/Platform/Record/TTRecordManager.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");




class TTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].TT;
    this._showVideoLoad = false;
  }
  Init(platformData) {
    this._base = window["tt"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF");
      return;
    }
    this.platformData = platformData;
    let tt = this._base;
    let systemInfo = tt.getSystemInfoSync();
    if (systemInfo.platform == "ios") {
      this.isSupportJumpOther = false;
    }
    let [major, minor] = systemInfo.SDKVersion.split(".");
    if (major >= 1 && minor >= 33) {
    } else {
      this.isSupportJumpOther = false;
    }
    this._InitLauchOption();
    this._InitShareInfo();
    this._InitSystemInfo();
    this._CreateBannerAd();
    this._CreateVideoAd();
    this._CreateInterstitalAd();
    this.recordManager = new _Record_TTRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"](this._base);
    this.recordManager.Platform = this;
    this.device = new _Device_TTDevice__WEBPACK_IMPORTED_MODULE_0__["default"](this._base);
    window["iplatform"] = this;
  }
  _CreateBannerAd() {
    if (!this.platformData.bannerId) {
      console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    let windowWidth = this._base.getSystemInfoSync().windowWidth;
    let windowHeight = this._base.getSystemInfoSync().windowHeight;
    let bannerObj = {};
    bannerObj["adUnitId"] = this.platformData.bannerId;
    bannerObj["adIntervals"] = 30;
    let styleObj = {};
    styleObj["left"] = 0;
    styleObj["top"] = 0;
    styleObj["width"] = windowWidth;
    bannerObj["style"] = styleObj;
    this._bannerAd = this._base.createBannerAd(bannerObj);
    this._isBannerLoaded = false;
    if (this._bannerAd) {
      this._bannerAd.onLoad(() => {
        console.log("banner\u52A0\u8F7D\u6210\u529F", this._bannerAd);
        this._isBannerLoaded = true;
      });
      this._bannerAd.onError((res) => {
        console.error("banner\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
        this._bannerAd == null;
      });
      this._bannerAd.onResize((size) => {
        this._bannerAd.style.top = windowHeight - size.height;
        this._bannerAd.style.left = (windowWidth - size.width) / 2;
      });
    }
  }
  RecordEvent(eventId, param) {
    let reportAnalytics = this._base["reportAnalytics"];
    if (reportAnalytics) {
      if (param == null) {
        param = {};
      }
      reportAnalytics(eventId, param);
    } else {
      console.error("reportAnalytics \u65B9\u6CD5\u4E0D\u5B58\u5728");
    }
  }
  ShowBannerAd() {
    if (!this.IsBannerAvaliable()) {
      return;
    }
    this._bannerAd.show();
  }
  ShareAppMessage(shareInfo, onSuccess, onFailed) {
    console.log("\u5206\u4EAB\u6D88\u606F", shareInfo);
    let shareObj = _WXPlatform__WEBPACK_IMPORTED_MODULE_3__["default"]._WrapShareInfo(shareInfo);
    shareObj["success"] = () => {
      if (onSuccess) {
        onSuccess.run();
      }
    };
    shareObj["fail"] = () => {
      if (onFailed) {
        onFailed.run();
      }
    };
    this._base.shareAppMessage(shareObj);
  }
  OpenGameBox(appIds) {
    let openData = [];
    for (let i = 0; i < appIds.length; ++i) {
      openData.push({
        appId: appIds[i]
      });
    }
    this._base.showMoreGamesModal({
      appLaunchOptions: openData
    });
  }
  NavigateToApp(appid, path, extra) {
    return new Promise((resolve, reject) => {
      if (!this.isSupportJumpOther) {
        reject(false);
        console.log("\u5F53\u524D\u5E73\u53F0\u4E0D\u652F\u6301\u5C0F\u6E38\u620F\u8DF3\u8F6C", this);
      } else {
        this._base.showMoreGamesModal({
          appLaunchOptions: [
            {
              appId: this.platformData.appId,
              query: "foo=bar&baz=qux",
              extraData: {}
            }
          ],
          success(res) {
            resolve(true);
            console.log("\u8DF3\u8F6C\u5C0F\u6E38\u620F\u6210\u529F", appid);
          },
          fail(err) {
            reject(false);
            console.log("\u8DF3\u8F6C\u5C0F\u6E38\u620F\u5931\u8D25", appid);
          }
        });
      }
    });
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/VivoPlatform.ts":
/*!****************************************************!*\
  !*** ./src/Platform/PlatformClass/VivoPlatform.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VivoPlatform; });
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");
/* harmony import */ var _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Record/DefaultRecordManager */ "./src/Platform/Record/DefaultRecordManager.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShareManager */ "./src/Platform/ShareManager.ts");
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");





class VivoPlatform {
  constructor() {
    this.isSupportJumpOther = true;
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].VIVO;
    this.recordManager = new _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.safeArea = null;
    this.loginCode = null;
    this._isBannerLoaded = false;
    this._isVideoLoaded = false;
    this._isInterstitialLoaded = false;
    this._cacheVideoAD = false;
    this.NavigateToAppSuccess = null;
  }
  Init(platformData) {
    this._base = window["vivo"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    this._InitLauchOption();
    this._Login();
    this._InitSystemInfo();
    this._CreateVideoAd();
    window["iplatform"] = this;
  }
  _CheckUpdate() {
    let updateManager = this._base.getUpdateManager();
    if (updateManager == null)
      return;
    updateManager.onCheckForUpdate(function(res) {
      console.log("onCheckForUpdate", res.hasUpdate);
      if (res.hasUpdate) {
        this._base.showToast({
          title: "\u5373\u5C06\u6709\u66F4\u65B0\u8BF7\u7559\u610F"
        });
      }
    });
    updateManager.onUpdateReady(() => {
      this._base.showModal({
        title: "\u66F4\u65B0\u63D0\u793A",
        content: "\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u7ACB\u5373\u4F7F\u7528\uFF1F",
        success: function(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          } else {
            this._base.showToast({
              icon: "none",
              title: "\u5C0F\u7A0B\u5E8F\u4E0B\u4E00\u6B21\u300C\u51B7\u542F\u52A8\u300D\u65F6\u4F1A\u4F7F\u7528\u65B0\u7248\u672C"
            });
          }
        }
      });
    });
    updateManager.onUpdateFailed(() => {
      this._base.showToast({
        title: "\u66F4\u65B0\u5931\u8D25\uFF0C\u4E0B\u6B21\u542F\u52A8\u7EE7\u7EED..."
      });
    });
  }
  _Login() {
    this.loginState = {
      isLogin: false,
      code: ""
    };
    let loginData = {};
    loginData.success = (res) => {
      this.loginCode = res.code;
      this._OnLoginSuccess(res);
      console.error(this.loginState);
    };
    loginData.fail = (res) => {
      console.error(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u767B\u5F55\u5931\u8D25", res);
      this.loginState.isLogin = false;
      this.loginState.code = "";
    };
    loginData.complete = () => {
      if (this.onLoginEnd != null) {
        this.onLoginEnd.run();
      }
    };
    this._base.login(loginData);
  }
  GetStorage(key) {
    if (this.base && this.base.getStorageSync && key) {
      try {
        return this.base.getStorageSync(key);
      } catch (error) {
        console.log("getStorageSync error: ", JSON.stringify(error));
        return null;
      }
    }
  }
  SetStorage(key, data) {
    if (this.base && this.base.getStorageSync && key) {
      try {
        return this.base.setStorageSync(key, data);
      } catch (error) {
        console.log("setStorageSync error: ", JSON.stringify(error));
      }
    }
  }
  _OnLoginSuccess(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u767B\u5F55\u6210\u529F", res);
    this.loginState.isLogin = true;
    this.loginState.code = res.code;
  }
  _InitLauchOption() {
    this._base.onShow(this._OnShow);
    this._base.onHide(this._OnHide);
    let res = this._base.getLaunchOptionsSync();
    this._OnShow(res);
  }
  _InitShareInfo() {
    this._base.showShareMenu({
      withShareTicket: true,
      success: (res) => {
        console.log("InitShareSuccess", res);
      },
      fail: (res) => {
        console.log("InitShareFailed", res);
      },
      complete: (res) => {
        console.log("InitShareComplete", res);
      }
    });
    this._base.onShareAppMessage(
      () => {
        let shareInfo = _ShareManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.GetShareInfo();
        return VivoPlatform._WrapShareInfo(shareInfo);
      }
    );
  }
  static _WrapShareInfo(shareInfo) {
    let shareObj = {};
    if (shareInfo.shareTitle) {
      shareObj["title"] = shareInfo.shareTitle;
    }
    if (shareInfo.shareImg) {
      shareObj["imageUrl"] = shareInfo.shareImg;
    }
    if (shareInfo.sharePath) {
      shareObj["query"] = {};
      let pathSplit = shareInfo.sharePath.split("?");
      let params = pathSplit[1].split("&");
      for (let getParam of params) {
        let splitParam = getParam.split("=");
        shareObj["query"][splitParam[0]] = splitParam[1];
      }
    }
    return shareObj;
  }
  _InitSystemInfo() {
    this.base = this._base;
    try {
      this.systemInfo = this._base.getSystemInfoSync();
      console.log("\u7CFB\u7EDF\u4FE1\u606F\u5DF2\u83B7\u53D6", this.systemInfo);
      this.safeArea = this.systemInfo.safeArea;
      this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
    } catch (e) {
      console.error(e);
      console.error("\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F\u5931\u8D25,\u6267\u884C\u9ED8\u8BA4\u521D\u59CB\u5316");
      this.safeArea = null;
    }
  }
  _CreateInterstitalAd() {
    if (!this.platformData.interstitialId) {
      console.log("\u65E0\u6709\u6548\u7684\u63D2\u9875\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._interstitalFailedCount = 0;
    let intAdObj = {};
    intAdObj["adUnitId"] = this.platformData.interstitialId;
    this._intersitialAd = this._base.createInterstitialAd(intAdObj);
    if (!this._intersitialAd)
      return;
    this._intersitialAd.onLoad(() => {
      console.log("\u63D2\u9875\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isInterstitialLoaded = true;
    });
    this._intersitialAd.onError((err) => {
      this._interstitalFailedCount++;
      console.error("\u63D2\u9875\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", err);
      if (this._interstitalFailedCount > 10) {
        console.log("\u7B2C", this._interstitalFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u63D2\u9875\u5E7F\u544A");
        this._intersitialAd.load();
      }
    });
  }
  _CreateVideoAd() {
    console.log("vedio ad id", this.platformData.rewardVideoId);
    if (!this._cacheVideoAD) {
      console.log("\u5F53\u524D\u7B56\u7565\u4E3A\u4E0D\u7F13\u5B58\u89C6\u9891\u5E7F\u544A");
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      return;
    }
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    this._rewardVideo = createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
      if (this._videoFailedCount > 10) {
        console.log("\u7B2C", this._videoFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u89C6\u9891\u5E7F\u544A");
        this._rewardVideo.load();
      }
    });
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
  }
  _CreateBannerAd() {
    if (!this.platformData.bannerId) {
      console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    let windowWidth = this._base.getSystemInfoSync().windowWidth;
    let windowHeight = this._base.getSystemInfoSync().windowHeight;
    let bannerObj = {};
    bannerObj["adUnitId"] = this.platformData.bannerId;
    bannerObj["adIntervals"] = 30;
    let styleObj = {};
    styleObj["left"] = 0;
    styleObj["top"] = 0;
    styleObj["width"] = 300;
    bannerObj["style"] = styleObj;
    this._bannerAd = this._base.createBannerAd(bannerObj);
    this._isBannerLoaded = false;
    this._bannerAd.onLoad(() => {
      console.log("banner\u52A0\u8F7D\u6210\u529F");
      this._isBannerLoaded = true;
      this._bannerAd.style.top = windowHeight - this._bannerAd.style.realHeight;
      this._bannerAd.style.left = (windowWidth - this._bannerAd.style.realWidth) / 2;
    });
    this._bannerAd.onError((res) => {
      console.error("banner\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
    });
  }
  IsBannerAvaliable() {
    return this._isBannerLoaded;
  }
  IsVideoAvaliable() {
    return this._isVideoLoaded;
  }
  IsInterstitalAvaliable() {
    return this._isInterstitialLoaded;
  }
  ShowBannerAd() {
    if (!this.IsBannerAvaliable()) {
      return;
    }
    this._bannerAd.show();
  }
  HideBannerAd() {
    this._bannerAd.hide();
  }
  _DoCacheShowVideo(onSuccess, onSkipped) {
    if (!this._isVideoLoaded) {
      console.error("\u89C6\u9891\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    this._isVideoLoaded = false;
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].PAUSE_AUDIO);
    this._rewardVideo.show();
  }
  _DoNoCacheShowVideo(onSuccess, onSkipped) {
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      onSkipped.run();
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      onSkipped.run();
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    if (this._rewardVideo) {
      this._rewardVideo.offClose(this.onVideoClose);
    }
    this._rewardVideo = createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res, this._videoFailedCount);
    });
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
    this._rewardVideo.load().then(() => {
      console.log("\u6FC0\u52B1\u89C6\u9891 \u52A0\u8F7D\u6210\u529F");
      return this._rewardVideo.show().then(() => {
      }).catch((err) => {
        console.error(err);
      });
      ;
    });
  }
  onVideoClose(res) {
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_4__["PlatformCommonEvent"].RESUM_AUDIO);
    console.log("\u89C6\u9891\u56DE\u8C03", res);
    let isEnd = res["isEnded"];
    new Promise((r) => {
      Laya.timer.frameOnce(1, this, r);
    }).then(() => {
      if (isEnd) {
        if (this._rewardSuccessed)
          this._rewardSuccessed.run();
      } else {
        if (this._rewardSkipped)
          this._rewardSkipped.run();
      }
    });
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    if (this._cacheVideoAD) {
      this._DoCacheShowVideo(onSuccess, onSkipped);
    } else {
      this._DoNoCacheShowVideo(onSuccess, onSkipped);
    }
  }
  ShowRewardVideoAdAsync() {
    return new Promise(function(resolve) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        resolve(true);
      }), Laya.Handler.create(this, () => {
        resolve(false);
      }));
    });
  }
  ShowInterstitalAd() {
    if (!this._isInterstitialLoaded) {
      console.error("\u63D2\u9875\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._intersitialAd.show();
  }
  GetFromAppId() {
    if (this.lauchOption.referrerInfo == null) {
      return null;
    }
    if (!this.lauchOption.referrerInfo.appId) {
      return null;
    }
    return this.lauchOption.referrerInfo.appId;
  }
  _OnShow(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnShow", res);
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.lauchOption = res;
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance._CheckUpdate();
    this.NavigateToAppSuccess = null;
    new Promise((r) => {
      Laya.timer.frameOnce(1, this, r);
    }).then(() => {
      if (_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onResume) {
        _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onResume.runWith(res);
      }
    });
  }
  _OnHide(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnHide", res);
    if (_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onPause) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onPause.runWith(res);
    }
    if (this.NavigateToAppSuccess) {
      this.NavigateToAppSuccess();
    }
  }
  ShareAppMessage(shareInfo, onSuccess, onFailed) {
    console.log("\u5206\u4EAB\u6D88\u606F", shareInfo);
    let shareObj = VivoPlatform._WrapShareInfo(shareInfo);
    this._base.shareAppMessage(shareObj);
    if (onSuccess) {
      onSuccess.run();
    }
  }
  LoadSubpackage(name, onSuccess, onFailed, onProgress) {
    if (this._base["loadSubpackage"] == null) {
      console.log("\u65E0\u52A0\u8F7D\u5B50\u5305\u65B9\u6CD5,\u8DF3\u8FC7\u52A0\u8F7D\u5B50\u5305", name);
      if (onSuccess) {
        onSuccess.run();
      }
      return;
    }
    let loadObj = {};
    loadObj["name"] = name;
    loadObj["success"] = () => {
      console.log("\u5206\u5305\u52A0\u8F7D\u6210\u529F", name);
      if (onSuccess) {
        onSuccess.run();
      }
    };
    loadObj["fail"] = () => {
      console.error("\u5206\u5305\u52A0\u8F7D\u5931\u8D25", name);
      if (onFailed) {
        onFailed.run();
      }
    };
    let loadTask = this._base.loadSubpackage(loadObj);
    loadTask.onProgressUpdate((res) => {
      if (Laya.Browser.onMobile) {
        console.log("\u5206\u5305\u52A0\u8F7D\u8FDB\u5EA6", res);
      }
      if (onProgress) {
        onProgress.runWith(res.progress / 100);
      }
    });
  }
  RecordEvent(eventId, param) {
    console.log("\u8BB0\u5F55\u4E8B\u4EF6", eventId, param);
    let aldSendEvent = this._base["aldSendEvent"];
    if (aldSendEvent == null) {
      console.error("\u963F\u62C9\u4E01sdk\u5C1A\u672A\u63A5\u5165,\u8BF7\u68C0\u67E5\u914D\u7F6E");
      return;
    }
    if (param != null) {
      aldSendEvent(eventId, param);
    } else {
      aldSendEvent(eventId);
    }
  }
  CreateShareVideoBtn(x, y, width, height) {
    let btnObj = {};
    btnObj.style = {
      left: x * this._cacheScreenScale,
      top: y * this._cacheScreenScale,
      height: height * this._cacheScreenScale,
      width: width * this._cacheScreenScale
    };
    btnObj.share = {
      query: {
        tick: 1
      },
      bgm: "",
      timeRange: [0, 60 * 1e3]
    };
    if (this._shareVideoBtn == null) {
      this._shareVideoBtn = this._base.createGameRecorderShareButton(btnObj);
    } else {
      this._shareVideoBtn.show();
    }
  }
  HideShareVideoBtn() {
    if (this._shareVideoBtn != null) {
      this._shareVideoBtn.hide();
    }
  }
  ShowToast(str) {
    this._base.showToast(
      {
        title: str,
        duration: 2e3
      }
    );
  }
  OpenGameBox(appIds) {
    console.error("\u5F53\u524D\u5E73\u53F0", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u6682\u4E0D\u652F\u6301\u4E92\u63A8\u6E38\u620F\u76D2\u5B50");
  }
  NavigateToApp(appid, path, extra, showGC, isbanner, adid) {
    return new Promise((resolve, reject) => {
      if (showGC) {
      }
      wx.navigateToMiniProgram({
        appId: appid,
        path,
        extraData: extra,
        envVersion: "",
        success: (res) => {
          console.log("\u5C0F\u6E38\u620F\u8DF3\u8F6C\u6210\u529F", res);
          resolve(true);
        },
        fail: () => {
          console.log("\u5C0F\u6E38\u620F\u8DF3\u8F6C\u5931\u8D25\uFF1A");
          reject(false);
          if (showGC) {
          }
        },
        complete: () => {
        }
      });
    });
  }
  createShortcut() {
    console.log("\u6682\u672A\u5B9E\u73B0");
  }
}


/***/ }),

/***/ "./src/Platform/PlatformClass/WXPlatform.ts":
/*!**************************************************!*\
  !*** ./src/Platform/PlatformClass/WXPlatform.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXPlatform; });
/* harmony import */ var _Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/PlatformCommonEventId */ "./src/Platform/Common/PlatformCommonEventId.ts");
/* harmony import */ var _Device_WXDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Device/WXDevice */ "./src/Platform/Device/WXDevice.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
/* harmony import */ var _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Record/DefaultRecordManager */ "./src/Platform/Record/DefaultRecordManager.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShareManager */ "./src/Platform/ShareManager.ts");
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");






class WXPlatform {
  constructor() {
    this.platform = _T_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].WX;
    this.safeArea = null;
    this.recordManager = new _Record_DefaultRecordManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.device = new _Device_WXDevice__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.loginCode = null;
    this.isSupportJumpOther = true;
    this._isBannerLoaded = false;
    this._isVideoLoaded = false;
    this._isInterstitialLoaded = false;
    this._cacheVideoAD = false;
    this.NavigateToAppSuccess = null;
  }
  Init(platformData) {
    this._base = window["wx"];
    if (this._base == null) {
      console.error("\u5E73\u53F0\u521D\u59CB\u5316\u9519\u8BEF", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
      return;
    }
    this.platformData = platformData;
    this.recordManager.Platform = this;
    this._InitLauchOption();
    this._Login();
    this._InitShareInfo();
    this._InitSystemInfo();
    this._CreateBannerAd();
    this._CreateVideoAd();
    this._CreateInterstitalAd();
    window["iplatform"] = this;
  }
  _CheckUpdate() {
    let updateManager = this._base.getUpdateManager();
    if (updateManager == null)
      return;
    updateManager.onCheckForUpdate(function(res) {
      console.log("onCheckForUpdate", res.hasUpdate);
      if (res.hasUpdate) {
        this._base.showToast({
          title: "\u5373\u5C06\u6709\u66F4\u65B0\u8BF7\u7559\u610F"
        });
      }
    });
    updateManager.onUpdateReady(() => {
      this._base.showModal({
        title: "\u66F4\u65B0\u63D0\u793A",
        content: "\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u7ACB\u5373\u4F7F\u7528\uFF1F",
        success: function(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          } else {
            this._base.showToast({
              icon: "none",
              title: "\u5C0F\u7A0B\u5E8F\u4E0B\u4E00\u6B21\u300C\u51B7\u542F\u52A8\u300D\u65F6\u4F1A\u4F7F\u7528\u65B0\u7248\u672C"
            });
          }
        }
      });
    });
    updateManager.onUpdateFailed(() => {
      this._base.showToast({
        title: "\u66F4\u65B0\u5931\u8D25\uFF0C\u4E0B\u6B21\u542F\u52A8\u7EE7\u7EED..."
      });
    });
  }
  _Login() {
    this.loginState = {
      isLogin: false,
      code: ""
    };
    let loginData = {};
    loginData.success = (res) => {
      this.loginCode = res.code;
      this._OnLoginSuccess(res);
      console.error(this.loginState);
    };
    loginData.fail = (res) => {
      console.error(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u767B\u5F55\u5931\u8D25", res);
      this.loginState.isLogin = false;
      this.loginState.code = "";
    };
    loginData.complete = () => {
      if (this.onLoginEnd != null) {
        this.onLoginEnd.run();
      }
    };
    this._base.login(loginData);
  }
  GetStorage(key) {
    if (this.base && this.base.getStorageSync && key) {
      try {
        return this.base.getStorageSync(key);
      } catch (error) {
        console.log("getStorageSync error: ", JSON.stringify(error));
        return null;
      }
    }
  }
  SetStorage(key, data) {
    if (this.base && this.base.getStorageSync && key) {
      try {
        return this.base.setStorageSync(key, data);
      } catch (error) {
        console.log("setStorageSync error: ", JSON.stringify(error));
      }
    }
  }
  _OnLoginSuccess(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u767B\u5F55\u6210\u529F", res);
    this.loginState.isLogin = true;
    this.loginState.code = res.code;
  }
  _InitLauchOption() {
    this._base.onShow(this._OnShow);
    this._base.onHide(this._OnHide);
    let res = this._base.getLaunchOptionsSync();
    this._OnShow(res);
  }
  _InitShareInfo() {
    this._base.showShareMenu({
      withShareTicket: true,
      success: (res) => {
        console.log("InitShareSuccess", res);
      },
      fail: (res) => {
        console.log("InitShareFailed", res);
      },
      complete: (res) => {
        console.log("InitShareComplete", res);
      }
    });
    this._base.onShareAppMessage(
      () => {
        let shareInfo = _ShareManager__WEBPACK_IMPORTED_MODULE_4__["default"].instance.GetShareInfo();
        return WXPlatform._WrapShareInfo(shareInfo);
      }
    );
  }
  static _WrapShareInfo(shareInfo) {
    let shareObj = {};
    if (shareInfo.shareTitle) {
      shareObj["title"] = shareInfo.shareTitle;
    }
    if (shareInfo.shareImg) {
      shareObj["imageUrl"] = shareInfo.shareImg;
    }
    if (shareInfo.sharePath) {
      shareObj["query"] = {};
      let pathSplit = shareInfo.sharePath.split("?");
      let params = pathSplit[1].split("&");
      for (let getParam of params) {
        let splitParam = getParam.split("=");
        shareObj["query"][splitParam[0]] = splitParam[1];
      }
    }
    return shareObj;
  }
  _InitSystemInfo() {
    this.base = this._base;
    try {
      this.systemInfo = this._base.getSystemInfoSync();
      console.log("\u7CFB\u7EDF\u4FE1\u606F\u5DF2\u83B7\u53D6", this.systemInfo);
      this.safeArea = this.systemInfo.safeArea;
      this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
    } catch (e) {
      console.error(e);
      console.error("\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F\u5931\u8D25,\u6267\u884C\u9ED8\u8BA4\u521D\u59CB\u5316");
      this.safeArea = null;
    }
  }
  _CreateInterstitalAd() {
    if (!this.platformData.interstitialId) {
      console.log("\u65E0\u6709\u6548\u7684\u63D2\u9875\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._interstitalFailedCount = 0;
    let intAdObj = {};
    intAdObj["adUnitId"] = this.platformData.interstitialId;
    this._intersitialAd = this._base.createInterstitialAd(intAdObj);
    if (!this._intersitialAd)
      return;
    this._intersitialAd.onLoad(() => {
      console.log("\u63D2\u9875\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isInterstitialLoaded = true;
    });
    this._intersitialAd.onError((err) => {
      this._interstitalFailedCount++;
      console.error("\u63D2\u9875\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", err);
      if (this._interstitalFailedCount > 10) {
        console.log("\u7B2C", this._interstitalFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u63D2\u9875\u5E7F\u544A");
        this._intersitialAd.load();
      }
    });
  }
  _CreateVideoAd() {
    console.log("vedio ad id", this.platformData.rewardVideoId);
    if (!this._cacheVideoAD) {
      console.log("\u5F53\u524D\u7B56\u7565\u4E3A\u4E0D\u7F13\u5B58\u89C6\u9891\u5E7F\u544A");
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      return;
    }
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    this._rewardVideo = createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
      if (this._videoFailedCount > 10) {
        console.log("\u7B2C", this._videoFailedCount, "\u6B21\u91CD\u65B0\u52A0\u8F7D\u89C6\u9891\u5E7F\u544A");
        this._rewardVideo.load();
      }
    });
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
  }
  _CreateBannerAd() {
    if (!this.platformData.bannerId) {
      console.log("\u65E0\u6709\u6548\u7684banner\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      return;
    }
    let windowWidth = this._base.getSystemInfoSync().windowWidth;
    let windowHeight = this._base.getSystemInfoSync().windowHeight;
    let bannerObj = {};
    bannerObj["adUnitId"] = this.platformData.bannerId;
    bannerObj["adIntervals"] = 30;
    let styleObj = {};
    styleObj["left"] = 0;
    styleObj["top"] = 0;
    styleObj["width"] = 300;
    bannerObj["style"] = styleObj;
    this._bannerAd = this._base.createBannerAd(bannerObj);
    this._isBannerLoaded = false;
    this._bannerAd.onLoad(() => {
      console.log("banner\u52A0\u8F7D\u6210\u529F");
      this._isBannerLoaded = true;
      this._bannerAd.style.top = windowHeight - this._bannerAd.style.realHeight;
      this._bannerAd.style.left = (windowWidth - this._bannerAd.style.realWidth) / 2;
    });
    this._bannerAd.onError((res) => {
      console.error("banner\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res);
    });
  }
  IsBannerAvaliable() {
    return this._isBannerLoaded;
  }
  IsVideoAvaliable() {
    return this._isVideoLoaded;
  }
  IsInterstitalAvaliable() {
    return this._isInterstitialLoaded;
  }
  ShowBannerAd() {
    if (!this.IsBannerAvaliable()) {
      return;
    }
    this._bannerAd.show();
  }
  HideBannerAd() {
    this._bannerAd.hide();
  }
  _DoCacheShowVideo(onSuccess, onSkipped) {
    if (!this._isVideoLoaded) {
      console.error("\u89C6\u9891\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    this._isVideoLoaded = false;
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].PAUSE_AUDIO);
    this._rewardVideo.show();
  }
  _DoNoCacheShowVideo(onSuccess, onSkipped) {
    this._rewardSuccessed = onSuccess;
    this._rewardSkipped = onSkipped;
    if (!this.platformData.rewardVideoId) {
      console.log("\u65E0\u6709\u6548\u7684\u89C6\u9891\u5E7F\u544AID,\u53D6\u6D88\u52A0\u8F7D");
      onSkipped.run();
      return;
    }
    let createRewardedVideoAd = this._base["createRewardedVideoAd"];
    if (createRewardedVideoAd == null) {
      console.error("\u65E0createRewardedVideoAd\u65B9\u6CD5,\u8DF3\u8FC7\u521D\u59CB\u5316");
      onSkipped.run();
      return;
    }
    this._videoFailedCount = 0;
    let videoObj = {};
    videoObj["adUnitId"] = this.platformData.rewardVideoId;
    if (this._rewardVideo) {
      this._rewardVideo.offClose(this.onVideoClose);
    }
    this._rewardVideo = createRewardedVideoAd(videoObj);
    this._rewardVideo.onLoad(() => {
      console.log("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u6210\u529F");
      this._isVideoLoaded = true;
    });
    this._rewardVideo.onError((res) => {
      this._videoFailedCount++;
      console.error("\u89C6\u9891\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", res, this._videoFailedCount);
    });
    this._rewardVideo.onClose((res) => {
      Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
      console.log("\u89C6\u9891\u56DE\u8C03", res);
      let isEnd = res["isEnded"];
      new Promise((r) => {
        Laya.timer.frameOnce(1, this, r);
      }).then(() => {
        if (isEnd) {
          if (this._rewardSuccessed)
            this._rewardSuccessed.run();
        } else {
          if (this._rewardSkipped)
            this._rewardSkipped.run();
        }
      });
    });
    this._rewardVideo.load().then(() => {
      console.log("\u6FC0\u52B1\u89C6\u9891 \u52A0\u8F7D\u6210\u529F");
      return this._rewardVideo.show().then(() => {
      }).catch((err) => {
        console.error(err);
      });
      ;
    });
  }
  onVideoClose(res) {
    Laya.stage.event(_Common_PlatformCommonEventId__WEBPACK_IMPORTED_MODULE_0__["PlatformCommonEvent"].RESUM_AUDIO);
    console.log("\u89C6\u9891\u56DE\u8C03", res);
    let isEnd = res["isEnded"];
    new Promise((r) => {
      Laya.timer.frameOnce(1, this, r);
    }).then(() => {
      if (isEnd) {
        if (this._rewardSuccessed)
          this._rewardSuccessed.run();
      } else {
        if (this._rewardSkipped)
          this._rewardSkipped.run();
      }
    });
  }
  ShowRewardVideoAd(onSuccess, onSkipped) {
    if (this._cacheVideoAD) {
      this._DoCacheShowVideo(onSuccess, onSkipped);
    } else {
      this._DoNoCacheShowVideo(onSuccess, onSkipped);
    }
  }
  ShowRewardVideoAdAsync() {
    return new Promise(function(resolve) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        resolve(true);
      }), Laya.Handler.create(this, () => {
        resolve(false);
      }));
    });
  }
  ShowInterstitalAd() {
    if (!this._isInterstitialLoaded) {
      console.error("\u63D2\u9875\u5E7F\u544A\u5C1A\u672A\u52A0\u8F7D\u597D");
      return;
    }
    this._intersitialAd.show();
  }
  GetFromAppId() {
    if (this.lauchOption.referrerInfo == null) {
      return null;
    }
    if (!this.lauchOption.referrerInfo.appId) {
      return null;
    }
    return this.lauchOption.referrerInfo.appId;
  }
  _OnShow(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnShow", res);
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.lauchOption = res;
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance._CheckUpdate();
    this.NavigateToAppSuccess = null;
    new Promise((r) => {
      Laya.timer.frameOnce(1, this, r);
    }).then(() => {
      if (_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onResume) {
        _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onResume.runWith(res);
      }
    });
  }
  _OnHide(res) {
    console.log(_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnHide", res);
    if (_PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onPause) {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PlatformInstance.onPause.runWith(res);
    }
    if (this.NavigateToAppSuccess) {
      this.NavigateToAppSuccess();
    }
  }
  ShareAppMessage(shareInfo, onSuccess, onFailed) {
    console.log("\u5206\u4EAB\u6D88\u606F", shareInfo);
    let shareObj = WXPlatform._WrapShareInfo(shareInfo);
    this._base.shareAppMessage(shareObj);
    if (onSuccess) {
      onSuccess.run();
    }
  }
  LoadSubpackage(name, onSuccess, onFailed, onProgress) {
    if (this._base["loadSubpackage"] == null) {
      console.log("\u65E0\u52A0\u8F7D\u5B50\u5305\u65B9\u6CD5,\u8DF3\u8FC7\u52A0\u8F7D\u5B50\u5305", name);
      if (onSuccess) {
        onSuccess.run();
      }
      return;
    }
    let loadObj = {};
    loadObj["name"] = name;
    loadObj["success"] = () => {
      console.log("\u5206\u5305\u52A0\u8F7D\u6210\u529F", name);
      if (onSuccess) {
        onSuccess.run();
      }
    };
    loadObj["fail"] = () => {
      console.error("\u5206\u5305\u52A0\u8F7D\u5931\u8D25", name);
      if (onFailed) {
        onFailed.run();
      }
    };
    let loadTask = this._base.loadSubpackage(loadObj);
    loadTask.onProgressUpdate((res) => {
      if (Laya.Browser.onMobile) {
        console.log("\u5206\u5305\u52A0\u8F7D\u8FDB\u5EA6", res);
      }
      if (onProgress) {
        onProgress.runWith(res.progress / 100);
      }
    });
  }
  RecordEvent(eventId, param) {
    console.log("\u8BB0\u5F55\u4E8B\u4EF6", eventId, param);
    let aldSendEvent = this._base["aldSendEvent"];
    if (aldSendEvent == null) {
      console.error("\u963F\u62C9\u4E01sdk\u5C1A\u672A\u63A5\u5165,\u8BF7\u68C0\u67E5\u914D\u7F6E");
      return;
    }
    if (param != null) {
      aldSendEvent(eventId, param);
    } else {
      aldSendEvent(eventId);
    }
  }
  CreateShareVideoBtn(x, y, width, height) {
    let btnObj = {};
    btnObj.style = {
      left: x * this._cacheScreenScale,
      top: y * this._cacheScreenScale,
      height: height * this._cacheScreenScale,
      width: width * this._cacheScreenScale
    };
    btnObj.share = {
      query: {
        tick: 1
      },
      bgm: "",
      timeRange: [0, 60 * 1e3]
    };
    if (this._shareVideoBtn == null) {
      this._shareVideoBtn = this._base.createGameRecorderShareButton(btnObj);
    } else {
      this._shareVideoBtn.show();
    }
  }
  HideShareVideoBtn() {
    if (this._shareVideoBtn != null) {
      this._shareVideoBtn.hide();
    }
  }
  ShowToast(str) {
    this._base.showToast(
      {
        title: str,
        duration: 2e3
      }
    );
  }
  OpenGameBox(appIds) {
    console.error("\u5F53\u524D\u5E73\u53F0", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "\u6682\u4E0D\u652F\u6301\u4E92\u63A8\u6E38\u620F\u76D2\u5B50");
  }
  NavigateToApp(appid, path, extra, showGC, isbanner, adid) {
    return new Promise((resolve, reject) => {
      if (showGC) {
      }
      wx.navigateToMiniProgram({
        appId: appid,
        path,
        extraData: extra,
        envVersion: "",
        success: (res) => {
          console.log("\u5C0F\u6E38\u620F\u8DF3\u8F6C\u6210\u529F", res);
          resolve(true);
        },
        fail: () => {
          console.log("\u5C0F\u6E38\u620F\u8DF3\u8F6C\u5931\u8D25\uFF1A");
          reject(false);
          if (showGC) {
          }
        },
        complete: () => {
        }
      });
    });
  }
  createShortcut() {
    console.log("\u6682\u672A\u5B9E\u73B0");
  }
}


/***/ }),

/***/ "./src/Platform/PlatformManager.ts":
/*!*****************************************!*\
  !*** ./src/Platform/PlatformManager.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformManager; });
/* harmony import */ var _PlatformClass_BDPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformClass/BDPlatform */ "./src/Platform/PlatformClass/BDPlatform.ts");
/* harmony import */ var _PlatformClass_DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlatformClass/DefaultPlatform */ "./src/Platform/PlatformClass/DefaultPlatform.ts");
/* harmony import */ var _PlatformClass_OppoPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlatformClass/OppoPlatform */ "./src/Platform/PlatformClass/OppoPlatform.ts");
/* harmony import */ var _PlatformClass_QQPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlatformClass/QQPlatform */ "./src/Platform/PlatformClass/QQPlatform.ts");
/* harmony import */ var _PlatformClass_QTTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlatformClass/QTTPlatform */ "./src/Platform/PlatformClass/QTTPlatform.ts");
/* harmony import */ var _PlatformClass_TTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlatformClass/TTPlatform */ "./src/Platform/PlatformClass/TTPlatform.ts");
/* harmony import */ var _PlatformClass_WXPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlatformClass/WXPlatform */ "./src/Platform/PlatformClass/WXPlatform.ts");
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
/* harmony import */ var _PlatformClass_VivoPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlatformClass/VivoPlatform */ "./src/Platform/PlatformClass/VivoPlatform.ts");
/* harmony import */ var _Data_BDData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Data/BDData */ "./src/Platform/Data/BDData.ts");
/* harmony import */ var _Data_OPPOData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Data/OPPOData */ "./src/Platform/Data/OPPOData.ts");
/* harmony import */ var _Data_QQData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Data/QQData */ "./src/Platform/Data/QQData.ts");
/* harmony import */ var _Data_QTTData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Data/QTTData */ "./src/Platform/Data/QTTData.ts");
/* harmony import */ var _Data_TTData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Data/TTData */ "./src/Platform/Data/TTData.ts");
/* harmony import */ var _Data_VIVOData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Data/VIVOData */ "./src/Platform/Data/VIVOData.ts");
/* harmony import */ var _Data_WXData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Data/WXData */ "./src/Platform/Data/WXData.ts");
















class PlatformManager {
  static get instance() {
    if (this._instance == null) {
      this._instance = new PlatformManager();
    }
    return this._instance;
  }
  static get PlatformInstance() {
    if (!this.instance.m_platformInstance) {
      console.log("\u8FD8\u6CA1\u6709\u8BBE\u7F6E\u8FC7\u5E73\u53F0\u5B9E\u4F8B\u4EE3\u7406\uFF01");
    }
    return this.instance.m_platformInstance;
  }
  init() {
    if (this.m_platformInstance != null) {
      console.error("\u5DF2\u8C03\u7528\u8FC7\u5E73\u53F0\u521B\u5EFA\u4E3A", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_7__["default"].GetPlatformStr(this.m_platformInstance.platform), "\u4E0D\u80FD\u91CD\u590D\u521B\u5EFA");
      return this.m_platformInstance;
    }
    let isQTT = window["qttGame"] != null;
    let isTT = window["tt"] != null;
    let result;
    if (isTT) {
      result = new _PlatformClass_TTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
      this.m_platformData = new _Data_TTData__WEBPACK_IMPORTED_MODULE_13__["default"]();
    } else if (Laya.Browser.onMiniGame) {
      result = new _PlatformClass_WXPlatform__WEBPACK_IMPORTED_MODULE_6__["default"]();
      this.m_platformData = new _Data_WXData__WEBPACK_IMPORTED_MODULE_15__["default"]();
    } else if (Laya.Browser.onBDMiniGame) {
      result = new _PlatformClass_BDPlatform__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.m_platformData = new _Data_BDData__WEBPACK_IMPORTED_MODULE_9__["default"]();
    } else if (isQTT) {
      result = new _PlatformClass_QTTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"]();
      this.m_platformData = new _Data_QTTData__WEBPACK_IMPORTED_MODULE_12__["default"]();
    } else if (Laya.Browser.onQQMiniGame) {
      result = new _PlatformClass_QQPlatform__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.m_platformData = new _Data_QQData__WEBPACK_IMPORTED_MODULE_11__["default"]();
    } else if (Laya.Browser.onQGMiniGame) {
      result = new _PlatformClass_OppoPlatform__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.m_platformData = new _Data_OPPOData__WEBPACK_IMPORTED_MODULE_10__["default"]();
    } else if (Laya.Browser.onVVMiniGame) {
      result = new _PlatformClass_VivoPlatform__WEBPACK_IMPORTED_MODULE_8__["default"]();
      this.m_platformData = new _Data_VIVOData__WEBPACK_IMPORTED_MODULE_14__["default"]();
    } else {
      console.log("\u672A\u8BC6\u522B\u5E73\u53F0,\u9ED8\u8BA4\u521B\u5EFA\u4E3Aweb", Laya.Browser.userAgent);
      result = new _PlatformClass_DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    this.m_platformInstance = result;
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_7__["default"].instance.PlatformInstance = result;
    window["$Platform"] = this.m_platformInstance;
    console.log("\u5E73\u53F0\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6210", _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_7__["default"].GetPlatformStr(this.m_platformInstance.platform));
  }
  initPlatform() {
    this.m_platformInstance.Init(this.m_platformData);
    console.log("\u5E73\u53F0\u521D\u59CB\u5316\u5B8C\u6210");
  }
}


/***/ }),

/***/ "./src/Platform/PlatformManagerProxy.ts":
/*!**********************************************!*\
  !*** ./src/Platform/PlatformManagerProxy.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformManagerProxy; });
/* harmony import */ var _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T/EPlatformType */ "./src/Platform/T/EPlatformType.ts");

class PlatformManagerProxy {
  static get instance() {
    if (this._instance == null) {
      this._instance = new PlatformManagerProxy();
    }
    return this._instance;
  }
  get PlatformInstance() {
    if (!this.m_platformInstance) {
      console.log("\u8FD8\u6CA1\u6709\u8BBE\u7F6E\u8FC7\u5E73\u53F0\u5B9E\u4F8B\u4EE3\u7406\uFF01");
    }
    return this.m_platformInstance;
  }
  set PlatformInstance(_instance) {
    this.m_platformInstance = _instance;
  }
  static get platformStr() {
    return PlatformManagerProxy.GetPlatformStr(this._instance.m_platformInstance.platform);
  }
  static GetPlatformStr(platformEnum) {
    switch (platformEnum) {
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].None:
        return "\u672A\u8BC6\u522B";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web:
        return "\u7F51\u9875";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].BD:
        return "\u767E\u5EA6";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].OPPO:
        return "Oppo";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QQ:
        return "QQ";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].TT:
        return "\u5934\u6761";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].VIVO:
        return "Vivo";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].WX:
        return "\u5FAE\u4FE1";
      case _T_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QTT:
        return "\u8DA3\u5934\u6761";
      default:
        return "\u672A\u5B9A\u4E49" + platformEnum;
    }
  }
}


/***/ }),

/***/ "./src/Platform/PlatformT.ts":
/*!***********************************!*\
  !*** ./src/Platform/PlatformT.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformT; });
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");

class PlatformT {
  static LoadSubPKG(name, progress) {
    return new Promise((r, e) => {
      _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].instance.PlatformInstance.LoadSubpackage(
        name,
        Laya.Handler.create(this, r),
        Laya.Handler.create(this, e),
        Laya.Handler.create(this, progress)
      );
    });
  }
}


/***/ }),

/***/ "./src/Platform/Record/DefaultRecordManager.ts":
/*!*****************************************************!*\
  !*** ./src/Platform/Record/DefaultRecordManager.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultRecordManager; });
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");

class DefaultRecordManager {
  constructor() {
    this.supportRecord = false;
    this.isRecording = false;
    this.isPausing = false;
    this.isRecordSuccess = false;
  }
  StartRecord(onStart, onOverTime) {
    console.log("\u8BE5\u5E73\u53F0" + _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "\u4E0D\u652F\u6301\u5F55\u5236\u89C6\u9891");
  }
  StopRecord(onStop) {
    console.log("\u8BE5\u5E73\u53F0" + _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "\u4E0D\u652F\u6301\u5F55\u5236\u89C6\u9891");
  }
  Pause(onPause) {
    console.log("\u8BE5\u5E73\u53F0" + _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "\u4E0D\u652F\u6301\u5F55\u5236\u89C6\u9891");
  }
  Resume(onReume) {
    console.log("\u8BE5\u5E73\u53F0" + _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "\u4E0D\u652F\u6301\u5F55\u5236\u89C6\u9891");
  }
  RecordClip(timeRange) {
    console.log("\u8BE5\u5E73\u53F0" + _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "\u4E0D\u652F\u6301\u5F55\u5236\u89C6\u9891");
  }
  ShareVideo(onSuccess, onCancel, onFailed) {
    if (onFailed) {
      onFailed.run();
    }
  }
}


/***/ }),

/***/ "./src/Platform/Record/TTRecordManager.ts":
/*!************************************************!*\
  !*** ./src/Platform/Record/TTRecordManager.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTRecordManager; });
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/Platform/Record/DefaultRecordManager.ts");

class TTRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(base) {
    super();
    this.supportRecord = true;
    this._base = base;
    this.isRecording = false;
    this.isRecordSuccess = false;
    this.isPausing = false;
    this._nativeManager = this._base.getGameRecorderManager();
    this._nativeManager.onStart((res) => {
      console.log("\u5E73\u53F0\u5F00\u59CB\u5F55\u5236", res);
      this.isRecording = true;
      this.isRecordSuccess = false;
      this._cacheStartHandle && this._cacheStartHandle.run();
    });
    this._nativeManager.onStop((res) => {
      console.log("\u5E73\u53F0\u505C\u6B62\u5F55\u5236", res);
      this.videoSavePath = res.videoPath;
      this.isRecording = false;
      this.isRecordSuccess = true;
      if (this._cacheStopHandle) {
        this._cacheStopHandle.run();
      } else if (this._cacheOverTimeHandle) {
        this._cacheOverTimeHandle.run();
      }
    });
    this._nativeManager.onError((err) => {
      console.log("\u5F55\u5236\u53D1\u751F\u9519\u8BEF", err);
      this.isRecordSuccess = false;
      this.isRecording = false;
    });
    this._nativeManager.onPause((res) => {
      console.log("\u6682\u505C\u5F55\u5236\u89C6\u9891", res);
      this.isPausing = true;
      this._cachePauseHandle && this._cachePauseHandle.run();
    });
    this._nativeManager.onResume((res) => {
      console.log("\u6682\u505C\u5F55\u5236\u89C6\u9891", res);
      this.isPausing = false;
      this._cacheResumeHandle && this._cacheResumeHandle.run();
    });
  }
  StartRecord(onStart, onOverTime) {
    console.log("\u8C03\u7528\u5F00\u59CB\u5F55\u5C4F");
    this._cacheStartHandle = onStart;
    this._cacheOverTimeHandle = onOverTime;
    this._cacheStopHandle = null;
    this._nativeManager.start({ duration: 300 });
  }
  Pause(onPause) {
    if (!this.isRecording) {
      console.error("\u5F53\u524D\u672A\u5F00\u59CB\u5F55\u5236,\u65E0\u6CD5\u6682\u505C\u5F55\u5236");
      return;
    }
    if (this.isPausing) {
      console.log("\u5F53\u524D\u5F55\u5236\u72B6\u6001\u5DF2\u6682\u505C");
      return;
    }
    console.log("\u8C03\u7528\u6682\u505C\u5F55\u5236");
    this._cachePauseHandle = onPause;
    this._nativeManager.pause();
  }
  Resume(onReume) {
    if (!this.isRecording) {
      console.error("\u5F53\u524D\u672A\u5F00\u59CB\u5F55\u5236,\u65E0\u6CD5\u6062\u590D\u5F55\u5236");
      return;
    }
    if (!this.isPausing) {
      console.log("\u5F53\u524D\u5F55\u5236\u72B6\u6001\u6B63\u5728\u8FDB\u884C\u4E2D");
      return;
    }
    console.log("\u8C03\u7528\u6062\u590D\u5F55\u5236");
    this._cacheResumeHandle = onReume;
    this._nativeManager.resume();
  }
  RecordClip(timeRange) {
    if (!this.isRecording) {
      console.error("\u5F53\u524D\u672A\u5F00\u59CB\u5F55\u5236,\u65E0\u6CD5\u8BB0\u5F55\u7CBE\u5F69\u65F6\u523B");
      return;
    }
    if (this.isPausing) {
      console.log("\u5F53\u524D\u5F55\u5236\u72B6\u6001\u5DF2\u6682\u505C,\u65E0\u6CD5\u8BB0\u5F55\u7CBE\u5F69\u65F6\u523B");
      return;
    }
    if (timeRange == null) {
      this._nativeManager.recordClip({});
    } else {
      this._nativeManager.recordClip({ timeRange });
    }
  }
  StopRecord(onStop) {
    console.log("\u8C03\u7528\u7ED3\u675F\u5F55\u5C4F");
    this._cacheStopHandle = onStop;
    this._nativeManager.stop();
  }
  ShareVideo(onSuccess, onCancel, onFailed) {
    if (this.isRecordSuccess) {
      let shareData = {
        channel: "video",
        title: "",
        desc: "",
        imageUrl: "",
        templateId: this.Platform.platformData.shareId,
        query: "",
        extra: {
          videoPath: this.videoSavePath,
          videoTopics: ["\u6296\u97F3\u5C0F\u6E38\u620F", "\u5F00\u95F4\u5395\u6240\u5F53\u8001\u677F"]
        },
        success() {
          if (onSuccess) {
            onSuccess.run();
          }
        },
        fail(e) {
          if (onCancel) {
            onCancel.run();
          }
        }
      };
      this._base.shareAppMessage(shareData);
    } else {
      console.log("\u65E0\u89C6\u9891\u53EF\u4EE5\u5206\u4EAB");
      if (onFailed) {
        onFailed.run();
      }
    }
  }
}


/***/ }),

/***/ "./src/Platform/Record/WebRecordManager.ts":
/*!*************************************************!*\
  !*** ./src/Platform/Record/WebRecordManager.ts ***!
  \*************************************************/
/*! exports provided: WebRecordManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRecordManager", function() { return WebRecordManager; });
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/Platform/Record/DefaultRecordManager.ts");

class WebRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.supportRecord = false;
  }
  ShareVideo(onSuccess, onCancel, onFailed) {
    if (this.supportRecord) {
      console.log("\u5F3A\u5236\u6A21\u62DF\u6210\u529F");
      if (onSuccess) {
        onSuccess.run();
      }
    } else {
      console.log("\u5F3A\u5236\u6A21\u62DF\u5931\u8D25");
      if (onFailed) {
        onFailed.run();
      }
    }
  }
}


/***/ }),

/***/ "./src/Platform/ShareManager.ts":
/*!**************************************!*\
  !*** ./src/Platform/ShareManager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareManagerAKhgfawgsda; });
/* harmony import */ var _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformManagerProxy */ "./src/Platform/PlatformManagerProxy.ts");
/* harmony import */ var _T_ShareInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T/ShareInfo */ "./src/Platform/T/ShareInfo.ts");


class ShareManagerAKhgfawgsda {
  static get instance() {
    if (this._instance == null) {
      this._instance = new ShareManagerAKhgfawgsda();
    }
    return this._instance;
  }
  constructor() {
    this._shareInfoList = [];
  }
  AddShareInfo(shareInfo) {
    for (let getInfo of this._shareInfoList) {
      if (getInfo.shareId == shareInfo.shareId)
        return;
    }
    this._shareInfoList.push(shareInfo);
  }
  GetShareInfo(id = null) {
    if (this._shareInfoList.length == 0) {
      let fakeShareInfo = new _T_ShareInfo__WEBPACK_IMPORTED_MODULE_1__["ShareInfo"]();
      return fakeShareInfo;
    }
    if (id != null) {
      for (let shareInfo of this._shareInfoList) {
        if (shareInfo.shareId == id)
          return shareInfo;
      }
    }
    let randomShare = this._shareInfoList[Math.floor(this._shareInfoList.length * Math.random())];
    return randomShare;
  }
  ShareAppMessage(shareInfo) {
    _PlatformManagerProxy__WEBPACK_IMPORTED_MODULE_0__["default"].instance.PlatformInstance.ShareAppMessage(shareInfo, Laya.Handler.create(this, () => {
      console.log("\u5206\u4EAB\u6210\u529F");
    }), null);
  }
}


/***/ }),

/***/ "./src/Platform/T/EPlatformType.ts":
/*!*****************************************!*\
  !*** ./src/Platform/T/EPlatformType.ts ***!
  \*****************************************/
/*! exports provided: EPlatformType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlatformType", function() { return EPlatformType; });
var EPlatformType = /* @__PURE__ */ ((EPlatformType2) => {
  EPlatformType2["None"] = "EPlatformType_None";
  EPlatformType2["Web"] = "EPlatformType_Web";
  EPlatformType2["WX"] = "EPlatformType_WX";
  EPlatformType2["TT"] = "EPlatformType_TT";
  EPlatformType2["QQ"] = "EPlatformType_QQ";
  EPlatformType2["VIVO"] = "EPlatformType_VIVO";
  EPlatformType2["OPPO"] = "EPlatformType_OPPO";
  EPlatformType2["BD"] = "EPlatformType_BD";
  EPlatformType2["KG"] = "EPlatformType_KG";
  EPlatformType2["Alipay"] = "EPlatformType_Alipay";
  EPlatformType2["HW"] = "EPlatformType_HW";
  EPlatformType2["QTT"] = "EPlatformType_QTT";
  return EPlatformType2;
})(EPlatformType || {});


/***/ }),

/***/ "./src/Platform/T/ShareInfo.ts":
/*!*************************************!*\
  !*** ./src/Platform/T/ShareInfo.ts ***!
  \*************************************/
/*! exports provided: ShareInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareInfo", function() { return ShareInfo; });
class ShareInfo {
}


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
/* harmony import */ var _Config_SubpackagesConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config/SubpackagesConfig */ "./src/Config/SubpackagesConfig.ts");
/* harmony import */ var _Platform_PlatformT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform/PlatformT */ "./src/Platform/PlatformT.ts");
/* harmony import */ var _Platform_PlatformManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform/PlatformManager */ "./src/Platform/PlatformManager.ts");



class WhiteScreenT {
  static load() {
    return new Promise((r) => {
      Laya.loader.load([
        "initLoad.json",
        "atlas/initLoad.atlas",
        "atlas/initLoad.png"
      ], Laya.Handler.create(this, () => {
        r();
      }));
    });
  }
  static open() {
    return new Promise((r) => {
      Laya.Scene.open("initLoad.json", void 0, void 0, Laya.Handler.create(this, (_scene) => {
        this.m_scene = _scene;
        this.m_bg = this.m_scene.getChildByName("bg");
        this.m_panNumber = this.m_scene.getChildByName("panNumber");
        this.updateView();
        Laya.stage.on(Laya.Event.RESIZE, this, this.updateView);
        this.openLater().then(r);
      }));
    });
  }
  static openLater() {
    _Platform_PlatformManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.init();
    _Platform_PlatformManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.initPlatform();
    return Promise.all(_Config_SubpackagesConfig__WEBPACK_IMPORTED_MODULE_0__["default"].subpackages.filter((item) => {
      return item.ifLoad;
    }).map((item) => {
      return _Platform_PlatformT__WEBPACK_IMPORTED_MODULE_1__["default"].LoadSubPKG(item.name);
    }));
  }
  static setPlan(_n) {
    this.m_panNumber.text = `% ${Math.floor(_n * 100)}`;
  }
  static close() {
    this.m_scene && this.m_scene.destroy();
    this.m_scene = null;
    this.m_bg = null;
    Laya.stage.offAllCaller(this);
  }
  static updateView() {
    let _width = Laya.stage.width;
    let _height = Laya.stage.height;
    this.m_scene.width = _width;
    this.m_scene.height = _height;
    this.m_bg.width = _width;
    this.m_bg.height = _height;
    this.m_panNumber.width = _width;
    this.m_panNumber.height = _height;
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
class _BaseConfigProxy {
  constructor() {
    this._initData();
    this.initData();
  }
  _initData() {
  }
  initData() {
  }
}
class BaseConfigProxy extends _BaseConfigProxy {
  get dataList() {
    return this.m_dataList;
  }
  _initData() {
    this.m_dataList = this.configTemplate.datas;
  }
}
class BaseConstProxy extends _BaseConfigProxy {
  get data() {
    return this.m_data;
  }
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



class ConfigT {
  static DecorateConfigProxy(_config) {
    return function(target) {
      target.prototype.configTemplate = _config;
    };
  }
  static BuildConfigs(_configs) {
    let _url;
    for (let _o of _configs) {
      _url = _Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_1__["default"].ConfigJsonURL(_o.fileName);
      switch (_o.type) {
        case "config":
          _o.datas = this.getConfigJsonData(_url);
          break;
        case "const":
          _o.data = this.getConfigJsonData(_url);
          break;
      }
    }
  }
  static getConfigJsonData(_url) {
    let configData = _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].GetRes(_url, true);
    _Res_ResLoad__WEBPACK_IMPORTED_MODULE_2__["default"].ClearRes(_url);
    if (configData.zip) {
      let _time = Date.now();
      configData.data = JSON.parse(pako.inflate(configData.data, { to: "string" }));
      _time = Date.now() - _time;
      if (_time > 500) {
        console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("\u914D\u7F6E\u8868\u89E3\u538B\u65F6\u95F4\u8FC7\u957F\uFF0C\u53EF\u80FD\u662F\u914D\u7F6E\u8868\u6587\u4EF6\u8FC7\u5927->", _url));
      }
    }
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
class ConsoleConst {
  static get publicStyle() {
    return `
                border-radius: 3px;
                line-height: 15px;
                `;
  }
  static get logStyle() {
    return this.getStyle("#fff", "#9BA4B4");
  }
  static get logLightStyle() {
    return this.getStyle("#776d8a", "#EBEBEB");
  }
  static get warnStyle() {
    return this.getStyle("#5c6e06", "#ffa931");
  }
  static get errorStyle() {
    return this.getStyle("#fff", "#ec0101");
  }
  static get comStyle() {
    return this.getStyle("#fff", "#ade498");
  }
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


class ConsoleEx {
  static pack(_style, _par) {
    return ["%c%s", _style, "log", ..._par];
  }
  static packLog(...any) {
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
      return any;
    }
    return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].logStyle, any);
  }
  static packLogLight(...any) {
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
      return any;
    }
    return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].logLightStyle, any);
  }
  static packCom(...any) {
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
      return any;
    }
    return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].comStyle, any);
  }
  static packWarn(...any) {
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
      return any;
    }
    return this.pack(_ConsoleConst__WEBPACK_IMPORTED_MODULE_1__["default"].warnStyle, any);
  }
  static packError(...any) {
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_0__["default"].OnLine) {
      return any;
    }
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

class D2Manager {
  static init() {
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

class BaseSingleUICon extends _BaseUICon__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get ui() {
    return this.m_ui;
  }
  _createUIBeforeEx() {
    if (!this._UIs) {
      this._UIs = {
        default: {
          uiCreate: this._UI
        }
      };
    }
  }
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





class BaseUICon extends _RootUICon__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super(...arguments);
    this.m_key = Symbol();
    this._ifClear = true;
    this._layer = _EUILayer__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].Panel;
    this.m_ifShow = false;
    this.m_proxyUIList = /* @__PURE__ */ new Set();
  }
  get key() {
    return this.m_key;
  }
  get rootUI() {
    return this.m_rootUI;
  }
  get layer() {
    return this._layer;
  }
  get ifShow() {
    return this.m_ifShow;
  }
  addUIProxy(_proxy) {
    this.m_proxyUIList.add(_proxy);
  }
  removeUIProxy(_proxy) {
    this.m_proxyUIList.delete(_proxy);
  }
  showUIProxy() {
    this.m_proxyUIList.forEach((item) => {
      item.Show();
    });
  }
  hideUIProxy() {
    this.m_proxyUIList.forEach((item) => {
      item.Hide();
    });
  }
  endUIProxy() {
    this.m_proxyUIList.forEach((item) => {
      item.endProxy();
    });
  }
  createUI() {
    this._createUIBeforeEx();
    if (!this._UIs) {
      console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError("\u6CA1\u6709\u627E\u5230ui\u521B\u5EFA\u5668\u5217\u8868!"));
    }
    this.m_rootUI = new fgui.GComponent();
    _FGUIRootManager__WEBPACK_IMPORTED_MODULE_2__["default"].getLayerUI(this._layer).addChild(this.m_rootUI);
    for (let _i in this._UIs) {
      this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance());
    }
    this._createUIEX();
    this._createUI();
  }
  _createUIBeforeEx() {
  }
  _createUIEX() {
  }
  _createUI() {
  }
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
      this.createUI();
      _ifNew = true;
    }
    if (!this.m_rootUI.visible) {
      this.m_rootUI.visible = true;
    }
    _FGUIT__WEBPACK_IMPORTED_MODULE_3__["default"].setUITopShow(this.m_rootUI);
    this.updateSize();
    Laya.stage.on(Laya.Event.RESIZE, this, this.updateSize);
    this._onShow(_ifNew, ...par);
  }
  _onShowBefore(...par) {
  }
  _onShow(_ifNew, ...par) {
  }
  Hide(_ifClear = this._ifClear, ...par) {
    if (!this.m_ifShow) {
      return;
    }
    this.m_ifShow = false;
    this._onHideBefore(par);
    if (_ifClear) {
      this.m_rootUI.dispose();
      for (let _i in this._UIs) {
        this._UIs[_i].ui = null;
      }
      this._disposeUI();
    } else {
      this.m_rootUI.visible = false;
    }
    Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
    this._onHide(_ifClear, par);
  }
  _disposeUI() {
  }
  _onHideBefore(...par) {
  }
  _onHide(_ifDelete, ...par) {
  }
  updateSize() {
    let _data;
    let _width = Laya.stage.width;
    let _height = Laya.stage.height;
    for (let _i in this._UIs) {
      _data = this._UIs[_i].data;
      if (!_data || !_data.ifUpdate) {
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

class BaseUIConManager {
  init() {
    this._init();
    this.__init();
  }
  _init() {
  }
  __init() {
    if (!this.m_uiConList) {
      console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("ui\u63A7\u5236\u7BA1\u7406\u5668\u6CA1\u6709\u521D\u59CB\u5316\u7BA1\u7406\u7684ui\u5217\u8868"));
    }
    if (!this.m_uiProxy) {
      console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("ui\u63A7\u5236\u7BA1\u7406\u5668\u6CA1\u6709\u521D\u59CB\u5316ui\u4EE3\u7406"));
    } else {
      this.m_uiProxy.setProxy(this.m_uiConList);
    }
  }
}
class BaseUIConManagerProxy {
  get onShowUI() {
    let _uiCons = [];
    for (let _i in this.m_uiConList) {
      this.m_uiConList[_i].ifShow && _uiCons.push(this.m_uiConList[_i]);
    }
    return _uiCons;
  }
  setProxy(_uiList) {
    this.m_uiConList = _uiList;
    this._init();
  }
  getUI(_key) {
    return this.m_uiConList[_key];
  }
  showUI(_uiCon, _ifHideOtherUI = true) {
    let _uiCons = [];
    if (_uiCon instanceof Array) {
      _uiCons.push(..._uiCon);
    } else {
      _uiCons.push(_uiCon);
    }
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
  hideUI(_uiCon) {
    let _uiCons = [];
    if (_uiCon instanceof Array) {
      _uiCons.push(..._uiCon);
    } else {
      _uiCons.push(_uiCon);
    }
    _uiCons.forEach((item) => {
      this.m_uiConList[item] && this.m_uiConList[item].Hide();
    });
  }
  hideAllUI() {
    this.onShowUI.forEach((item) => {
      item.Hide();
    });
  }
  _init() {
  }
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
var EUILayer = /* @__PURE__ */ ((EUILayer2) => {
  EUILayer2["Bg"] = "Bg";
  EUILayer2["Main"] = "Main";
  EUILayer2["Panel"] = "Panel";
  EUILayer2["Popup"] = "Popup";
  EUILayer2["Prop"] = "Prop";
  EUILayer2["Tip"] = "Tip";
  EUILayer2["Pause"] = "Pause";
  EUILayer2["Set"] = "Set";
  EUILayer2["Top"] = "Top";
  EUILayer2["Loading"] = "Loading";
  EUILayer2["Native"] = "Native";
  return EUILayer2;
})(EUILayer || {});


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


class FGUIPack {
  constructor(_packUrl, _atliasCount = -1) {
    this.packPath = _packUrl;
    this.atliasCount = _atliasCount;
  }
  asyncLoad(_onProgress) {
    let _urls = [];
    this.getResURL(_urls);
    return src_T_Res_ResLoad__WEBPACK_IMPORTED_MODULE_1__["default"].Load2DAsync(_urls, _onProgress);
  }
  getResURL(urls) {
    urls.push({ url: this.packPath + "." + src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__["default"].FGUI.packageFileExtension, type: Laya.Loader.BUFFER });
    if (this.atliasCount >= 0) {
      urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
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


class FGUIRootManager {
  static getLayerUI(layerType) {
    return this.layerUIList[layerType];
  }
  static init() {
    fgui.UIConfig.packageFileExtension = src_Config_ConstConfig__WEBPACK_IMPORTED_MODULE_0__["default"].FGUI.packageFileExtension;
    Laya.stage.addChild(fgui.GRoot.inst.displayObject);
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
class FGUIT {
  static setUILayer(_ui, _layer) {
    _ui[this.UILayerKey] = _layer;
  }
  static getUILayer(_ui) {
    return _ui[this.UILayerKey];
  }
  static setUITopShow(_ui) {
    let _sortingOrder = _ui.sortingOrder;
    let _parentUI = _ui.parent;
    for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
      _sortingOrder = Math.max(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
    }
    _ui.sortingOrder = _sortingOrder + 1;
  }
  static setUIDownShow(_ui) {
    let _sortingOrder = _ui.sortingOrder;
    let _parentUI = _ui.parent;
    for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
      _sortingOrder = Math.min(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
    }
    _ui.sortingOrder = _sortingOrder - 1;
  }
}
FGUIT.UILayerKey = Symbol("UILayer");


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

class D3Manager {
  static init() {
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
class GlobalD3Environment {
  static get Scene3D() {
    return this.m_Scene3D;
  }
  static get Camera() {
    return this.m_Camera;
  }
  static get Light() {
    return this.m_Light;
  }
  static get Environment() {
    return {
      scene: this.m_Scene3D,
      camera: this.m_Camera,
      light: this.m_Light
    };
  }
  static init() {
    this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D());
    this.m_Camera = new Laya.Camera();
    this.m_Light = new Laya.DirectionLight();
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


class NodeT {
  static ifPrefabsConfig(_config) {
    return _config.prefabName && true;
  }
  static setNode(_spr, _target) {
    _spr.name = _target.name;
    if (!_target.transform) {
      _spr.transform.localPosition.setValue(0, 0, 0);
      _spr.transform.localRotationEuler.setValue(0, 0, 0);
      _spr.transform.localScale.setValue(1, 1, 1);
    } else {
      if (!_target.transform.position) {
        _spr.transform.localPosition.setValue(0, 0, 0);
      } else {
        src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.position, _spr.transform.localPosition);
      }
      if (!_target.transform.euler) {
        _spr.transform.localRotationEuler.setValue(0, 0, 0);
      } else {
        src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
      }
      if (!_target.transform.scale) {
        _spr.transform.localScale.setValue(1, 1, 1);
      } else {
        src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseVector3(_target.transform.scale, _spr.transform.localScale);
      }
    }
    _spr.transform.localPosition = _spr.transform.localPosition;
    _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
    _spr.transform.localScale = _spr.transform.localScale;
    let _prefabConfig = _target;
    if (_prefabConfig.prefabName != "undefined") {
      if (_prefabConfig.prefabDiffer) {
        this.setDiffer(_spr, _prefabConfig.prefabDiffer);
      }
    }
  }
  static setDiffer(_spr, _differ) {
    let _centreV3 = src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].getV3();
    if (_differ.child) {
      for (let _diff of _differ.child) {
        this.setDiffer(_spr.getChildAt(_diff.index), _diff);
      }
    }
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
    if (_differ.transform) {
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
    src_T_GameT_GamePool__WEBPACK_IMPORTED_MODULE_0__["default"].recycleV3(...[_centreV3, ..._transform]);
  }
  static getPrefabsNames(_prefabsNames, _nodeConfig) {
    if (!_nodeConfig) {
      return;
    }
    let _prefabName = _nodeConfig.prefabName;
    if (_prefabName) {
      if (!_prefabsNames.includes(_prefabName)) {
        _prefabsNames.push(_prefabName);
      }
    } else {
      if (_nodeConfig.child && _nodeConfig.child.length > 0) {
        _nodeConfig.child.forEach((item) => {
          this.getPrefabsNames(_prefabsNames, item);
        });
      }
    }
  }
  static buildNode(_onSpr, _nodeConfig, _prefabs, _getPrefabs) {
    if (!_nodeConfig) {
      return;
    }
    this.setNode(_onSpr, _nodeConfig);
    if (_nodeConfig.child && _nodeConfig.child.length > 0) {
      let _spr;
      let _prefabName;
      _nodeConfig.child.forEach((item) => {
        _prefabName = item.prefabName;
        if (typeof _prefabName == "string") {
          _spr = _getPrefabs(_prefabName);
          _prefabs[_prefabName] = _prefabs[_prefabName] || [];
          _prefabs[_prefabName].push(_spr);
        } else {
          _spr = new Laya.Sprite3D();
        }
        _onSpr.addChild(_spr);
        this.buildNode(_spr, item, _prefabs, _getPrefabs);
      });
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
/* harmony import */ var src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_T/Utils/V3Utils */ "./src/_T/Utils/V3Utils.ts");










class Scene extends src_T_com_BaseItemPool__WEBPACK_IMPORTED_MODULE_8__["default"] {
  constructor(_sceneName) {
    super();
    this.m_sceneConfig = {};
    this.m_sceneNodesCache = /* @__PURE__ */ new Map();
    this.m_onSceneNodes = /* @__PURE__ */ new Set();
    this._sceneName = _sceneName;
    if (!this._sceneName) {
      console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packError("\u6CA1\u6709\u521D\u59CB\u5316\u573A\u666F\u7684\u540D\u5B57\uFF01"));
      return;
    }
    let _data = src_T_Config_ConfigT__WEBPACK_IMPORTED_MODULE_0__["default"].getConfigJsonData(src_T_Res_EssentialResUrls__WEBPACK_IMPORTED_MODULE_2__["default"].SceneConfigURL(this._sceneName));
    if (_data) {
      for (let _i = 0; _i < _data.length; _i++) {
        this.m_sceneConfig[_data[_i].name] = _data[_i];
      }
    } else {
      console.error(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packError("\u83B7\u53D6\u573A\u666F\u6570\u636E\u5931\u8D25->", this._sceneName));
    }
    this.m_environment = _GlobalD3Environment__WEBPACK_IMPORTED_MODULE_5__["default"].Environment;
    this._init();
  }
  get sceneConfig() {
    return this.m_sceneConfig;
  }
  get environment() {
    return this.m_environment;
  }
  get onSceneNodes() {
    return [...this.m_onSceneNodes];
  }
  getNodeConfig(_nodeName) {
    return this.m_sceneConfig[_nodeName];
  }
  getSceneNode(_name, _findCache = true, _addCache = true) {
    let _names = [];
    if (typeof _name == "string") {
      _names.push(_name);
    } else {
      _names.push(..._name);
    }
    let _nodeConfig = [];
    _names.forEach((item) => {
      if (this.m_sceneConfig[item]) {
        _nodeConfig.push(this.m_sceneConfig[item]);
      } else {
        console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn("\u6709\u4E2A\u573A\u666F\u8282\u70B9\u6CA1\u6709\u627E\u5230", item));
      }
    });
    if (_nodeConfig.length == 0) {
      console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn("\u83B7\u53D6\u573A\u666F\u8282\u70B9\u65F6\uFF0C\u4E00\u4E2A\u914D\u7F6E\u4FE1\u606F\u90FD\u6CA1\u627E\u5230", _names));
      return;
    }
    let _sceneNode;
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
    if (!_sceneNode) {
      _sceneNode = new _SceneNode__WEBPACK_IMPORTED_MODULE_4__["default"](_nodeConfig, this);
      if (_addCache) {
        let _if = false;
        for (let [_key, _value] of this.m_sceneNodesCache) {
          if (src_T_Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_6__["default"].ContentIfSame(_key, _names)) {
            _value.push(_sceneNode);
            _if = true;
            break;
          }
        }
        if (!_if) {
          this.m_sceneNodesCache.set(_names, [_sceneNode]);
        }
      }
    }
    return _sceneNode;
  }
  setEnvironment() {
    let _sceneConfig = this.m_sceneConfig;
    if (_sceneConfig.camera) {
      _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].setNode(this.m_environment.camera, _sceneConfig.camera);
      if (_sceneConfig.camera.attachData) {
        this.m_environment.camera.fieldOfView = _sceneConfig.camera.attachData.fov;
        let _v3 = new Laya.Vector3();
        src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_9__["default"].parseVector3(_sceneConfig.camera.attachData.color, _v3);
        this.m_environment.camera.clearColor = new Laya.Vector4(_v3.x, _v3.y, _v3.z, 1);
      }
    }
    if (_sceneConfig.light) {
      _NodeT__WEBPACK_IMPORTED_MODULE_3__["default"].setNode(this.m_environment.light, _sceneConfig.light);
      if (_sceneConfig.light.attachData) {
        this.m_environment.light.intensity = _sceneConfig.light.attachData.intensity;
        let _v3 = new Laya.Vector3();
        src_T_Utils_V3Utils__WEBPACK_IMPORTED_MODULE_9__["default"].parseVector3(_sceneConfig.light.attachData.color, _v3);
        this.m_environment.light.color = _v3;
      }
    }
    this._setEnvironment();
  }
  buildNode(_node) {
    this.m_onSceneNodes.add(_node);
    this._buildNode(_node);
  }
  deleteNode(_node) {
    this.m_onSceneNodes.delete(_node);
    this._deleteNode(_node);
  }
  loadProgress(_n, _node) {
    this._loadProgress(_n, _node);
  }
  getPrefabs(_name) {
    return this._getPrefabs(_name);
  }
  _init() {
  }
  _setEnvironment() {
  }
  _loadProgress(_n, _node) {
  }
  _buildNode(_node) {
  }
  _deleteNode(_node) {
  }
  _getPrefabs(_name) {
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
/* harmony import */ var src_T_Utils_SpriteUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_T/Utils/SpriteUtils */ "./src/_T/Utils/SpriteUtils.ts");
/* harmony import */ var _NodeT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeT */ "./src/_T/D3/scene/NodeT.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};





class SceneNode {
  get scene() {
    return this.m_scene;
  }
  get nodeConfigs() {
    return this.m_nodeConfigs;
  }
  get ifDelete() {
    return this.m_ifDelete;
  }
  get rootNode() {
    return this.m_rootNode;
  }
  get sceneNodes() {
    return this.m_sceneNodes;
  }
  get prefabs() {
    return this.m_prefabs;
  }
  get recoverableSprs() {
    return this.m_recoverableSprs;
  }
  get prefabsName() {
    return this.m_prefabsNames;
  }
  get ifLoad() {
    return this.m_ifLoad;
  }
  constructor(_nodeConfigs, _scene) {
    this.m_scene = _scene;
    this.m_ifDelete = true;
    this.m_nodeConfigs = _nodeConfigs;
    this.m_prefabsNames = [];
    this.m_nodeConfigs.forEach((item) => {
      _NodeT__WEBPACK_IMPORTED_MODULE_4__["default"].getPrefabsNames(this.m_prefabsNames, item);
    });
  }
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
    }, void 0, false));
  }
  asyncBuild(_onProgress) {
    this.m_ifLoad = true;
    return new Promise((resolve) => {
      this.asyncLoad(_onProgress).then(() => {
        this.m_ifLoad = false;
        this.build();
        resolve(this);
      });
    });
  }
  loadProgress(_n) {
    this.m_scene.loadProgress(_n, this);
  }
  build() {
    if (!this.m_ifDelete) {
      return;
    }
    this.m_ifDelete = false;
    this.m_rootNode = new Laya.Node();
    this.m_scene.environment.scene.addChild(this.m_rootNode);
    this.m_prefabs = {};
    this.m_sceneNodes = {};
    let _spr;
    this.m_nodeConfigs.forEach((item) => {
      _spr = new Laya.Sprite3D();
      this.m_rootNode.addChild(_spr);
      this.m_sceneNodes[item.name] = _spr;
      _NodeT__WEBPACK_IMPORTED_MODULE_4__["default"].buildNode(_spr, item, this.m_prefabs, (_name) => {
        return this.m_scene.getPrefabs(_name);
      });
    });
    this.m_recoverableSprs = __spreadValues({}, this.m_prefabs);
    this.m_scene.buildNode(this);
  }
  delete() {
    if (this.m_ifDelete) {
      return;
    }
    if (this.m_ifLoad) {
      console.warn(...src_T_Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("\u573A\u666F\u8282\u70B9\u8FD8\u5728\u6784\u5EFA\u5374\u8BD5\u56FE\u5220\u9664\u3002"));
      return;
    }
    this.m_ifDelete = true;
    this.m_scene.deleteNode(this);
    this.m_rootNode.destroy();
    this.m_rootNode = null;
    this.m_sceneNodes = null;
    this.m_prefabs = null;
    this.m_recoverableSprs = null;
  }
  sprIfRecoverable(_spr) {
    let _b = false;
    for (let _i in this.m_recoverableSprs) {
      if (this.m_recoverableSprs[_i].includes(_spr)) {
        _b = true;
        break;
      }
    }
    return _b;
  }
  addRecoverableSprs(_key, _spr) {
    if (!Array.isArray(_spr)) {
      _spr = [_spr];
    }
    _spr.forEach((item) => {
      if (this.sprIfRecoverable(item)) {
        console.warn("\u91CD\u590D\u6DFB\u52A0\u7CBE\u7075\u5230\u53EF\u56DE\u6536\u7CBE\u7075\u5217\u8868\u4E2D", _key, _spr);
        return;
      }
      (this.m_recoverableSprs[_key] = this.m_recoverableSprs[_key] || []).push(item);
    });
  }
  getNode(_sprName, _sceneNodeName) {
    switch (typeof _sceneNodeName) {
      case "undefined":
        _sceneNodeName = this.m_nodeConfigs[0].name;
        break;
      case "number":
        _sceneNodeName = this.m_nodeConfigs[Math.min(_sceneNodeName, this.m_nodeConfigs.length - 1)].name;
    }
    return this.m_sceneNodes[_sceneNodeName] && src_T_Utils_SpriteUtils__WEBPACK_IMPORTED_MODULE_3__["default"].findChild(this.m_sceneNodes[_sceneNodeName], _sprName);
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
class BaseData {
  constructor() {
    return /* @__PURE__ */ Object.create(null);
  }
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

class BaseDataProxy {
  constructor() {
    this.m_ifSetProxy = true;
  }
  get ifSetProxy() {
    return this.m_ifSetProxy;
  }
  get objectProxyT() {
    return this.m_objectProxyT;
  }
  get data() {
    return this.m_data;
  }
  getNewData() {
    if (!this.dataTemplate) {
      console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError("\u6CA1\u6709\u627E\u5230\u6570\u636E\u6A21\u677F\uFF01\u8BF7\u4F7F\u7528\u6570\u636E\u6A21\u677F\u88C5\u9970\u5668\u88C5\u9970\u8BE5\u7C7B", this.constructor.name));
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
/* harmony import */ var _Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/ArrayUtils */ "./src/_T/Utils/ArrayUtils.ts");






class BaseLocalDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this._ifDifferData = true;
    this.m_saveToDiskQueue = 0;
    this.m_saveToDiskTime = 0;
  }
  get _saveName() {
    return this.constructor.name;
  }
  get saveName() {
    return src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].Name + "-" + this._saveName + "-" + src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].Versions + (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine ? "^on" : "^test");
  }
  get differName() {
    return "---->" + this.encrypt(this.saveName + "__verify");
  }
  initData() {
    let _time = Date.now();
    this.m_data = this._readData();
    if (this.m_ifSetProxy) {
      this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_4__["default"]();
      this.m_data = this.m_objectProxyT.setProxy(this.m_data);
      this.m_objectProxyT.addMonitor(this, this._dataSetMonitor);
    }
    this._initData();
    _time = Date.now() - _time;
    if (_time > 100) {
      console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn("\u521D\u59CB\u5316\u672C\u5730\u6570\u636E\u65F6\u95F4\u8FC7\u957F", this.saveName, _time));
    }
  }
  _initData() {
  }
  _dataSetMonitor() {
    this.save(this.m_data);
  }
  Save(_ifCl = true) {
    this.save(this.m_data, _ifCl);
  }
  save(m_data, _ifCl = true) {
    if (this.m_saveToDiskTime == 0) {
      this.m_saveToDiskTime = Date.now();
    }
    if (!_ifCl) {
      this._save(m_data);
    } else {
      this.m_saveToDiskQueue++;
      Promise.resolve().then(() => {
        this.m_saveToDiskQueue--;
        if (this.m_saveToDiskQueue == 0) {
          this._save(m_data);
        }
      }).catch((E) => {
        console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packError("\u6570\u636E\u4FDD\u5B58\u65F6\u51FA\u9519", E));
      });
      ;
    }
  }
  _save(m_data) {
    let json = JSON.stringify(m_data);
    Laya.LocalStorage.setItem(this.saveName, json);
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine && this._ifDifferData) {
      let _differJson = this.getDifferData(json);
      Laya.LocalStorage.setItem(this.differName, _differJson);
    }
    let _time = Date.now() - this.m_saveToDiskTime;
    this.m_saveToDiskTime = 0;
    if (_time > 1e3) {
      console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn("\u573A\u666F\u4FDD\u5B58\u65F6\u95F4\u8FC7\u957F", this.saveName, _time));
    }
  }
  _readData() {
    let readStr = Laya.LocalStorage.getItem(this.saveName);
    if (src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine && this._ifDifferData) {
      let _differ = Laya.LocalStorage.getItem(this.differName);
      if (this.getDifferData(readStr) != _differ) {
        return this._saveNewData();
      }
    }
    let _saveData = this.getNewData();
    try {
      if (readStr) {
        let jsonData = JSON.parse(readStr);
        for (let key in _saveData) {
          _saveData[key] = jsonData[key];
        }
        if (!src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_3__["default"].OnLine) {
          let __key = [];
          for (let key in jsonData) {
            __key.push(key);
          }
          let _key = [];
          for (let key in _saveData) {
            _key.push(key);
          }
          if (!_Utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_5__["default"].ContentIfSame(__key, _key)) {
            console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn(`${this._saveName}\u7684\u5B9A\u4E49\u6570\u636E\u4E0E\u672C\u5730\u6570\u636E\u952E\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u5220\u9664\u672C\u5730\u6570\u636E\u3002
`, "\u5B9A\u4E49\u6570\u636E", _key, "\n", "\u672C\u5730\u6570\u636E", __key));
          }
        }
      } else {
        return this._saveNewData();
      }
    } catch (e) {
      return this._saveNewData();
    }
    return _saveData;
  }
  _saveNewData() {
    let m_data = this.getNewData();
    this.save(m_data, false);
    return m_data;
  }
  getDifferData(_string) {
    if (!_string)
      return "";
    return this.possibleOnly(_string);
  }
  possibleOnly(_string) {
    let _map = /* @__PURE__ */ new Map();
    let _str;
    for (let i = 0; i < _string.length; i++) {
      _str = _string.charAt(i);
      if (_map.has(_str)) {
        _map.get(_str).push(i);
      } else {
        _map.set(_str, [i]);
      }
    }
    let _conformityNumber = 0;
    [..._map.values()].forEach((item, index) => {
      _conformityNumber += item.reduce((a, b) => {
        return a + b;
      }) * (index + 1);
    });
    return btoa(_conformityNumber.toString(32));
  }
  encrypt(_string) {
    if (_Md5__WEBPACK_IMPORTED_MODULE_0__["default"].ifUse) {
      let _encryptStr = `LayaMiniGame-${this.saveName}:${_string}`;
      return _Md5__WEBPACK_IMPORTED_MODULE_0__["default"].hashStr(_encryptStr).toString();
    } else {
      return `noEncrypt_${_string}`;
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


class BaseShortDataProxy extends _BaseDataProxy__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.m_ifSetProxy = false;
  }
  initData() {
    this.m_data = this.getNewData();
    if (this.m_ifSetProxy) {
      this.m_objectProxyT = new _ObjectProxyT__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.m_data = this.m_objectProxyT.setProxy(this.m_data);
    }
    this._initData();
  }
  _initData() {
  }
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
class DataT {
  static DecorateDataTemplate(_data) {
    return function(target) {
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
const _Md5 = class {
  constructor() {
    this._state = new Int32Array(4);
    this._buffer = new ArrayBuffer(68);
    this._buffer8 = new Uint8Array(this._buffer, 0, 68);
    this._buffer32 = new Uint32Array(this._buffer, 0, 17);
    this.start();
  }
  static hashStr(str, raw = false) {
    return this.onePassHasher.start().appendStr(str).end(raw);
  }
  static hashAsciiStr(str, raw = false) {
    return this.onePassHasher.start().appendAsciiStr(str).end(raw);
  }
  static _hex(x) {
    const hc = _Md5.hexChars;
    const ho = _Md5.hexOut;
    let n;
    let offset;
    let j;
    let i;
    for (i = 0; i < 4; i += 1) {
      offset = i * 8;
      n = x[i];
      for (j = 0; j < 8; j += 2) {
        ho[offset + 1 + j] = hc.charAt(n & 15);
        n >>>= 4;
        ho[offset + 0 + j] = hc.charAt(n & 15);
        n >>>= 4;
      }
    }
    return ho.join("");
  }
  static _md5cycle(x, k) {
    let a = x[0];
    let b = x[1];
    let c = x[2];
    let d = x[3];
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
    this._state.set(_Md5.stateIdentity);
    return this;
  }
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
      } else if (code < 2048) {
        buf8[bufLen++] = (code >>> 6) + 192;
        buf8[bufLen++] = code & 63 | 128;
      } else if (code < 55296 || code > 56319) {
        buf8[bufLen++] = (code >>> 12) + 224;
        buf8[bufLen++] = code >>> 6 & 63 | 128;
        buf8[bufLen++] = code & 63 | 128;
      } else {
        code = (code - 55296) * 1024 + (str.charCodeAt(++i) - 56320) + 65536;
        if (code > 1114111) {
          throw new Error("Unicode standard supports code points up to U+10FFFF");
        }
        buf8[bufLen++] = (code >>> 18) + 240;
        buf8[bufLen++] = code >>> 12 & 63 | 128;
        buf8[bufLen++] = code >>> 6 & 63 | 128;
        buf8[bufLen++] = code & 63 | 128;
      }
      if (bufLen >= 64) {
        this._dataLength += 64;
        _Md5._md5cycle(this._state, buf32);
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
    for (; ; ) {
      i = Math.min(str.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = str.charCodeAt(j++);
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      _Md5._md5cycle(this._state, buf32);
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
    for (; ; ) {
      i = Math.min(input.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = input[j++];
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      _Md5._md5cycle(this._state, buf32);
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
    buf8[bufLen] = 128;
    buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
    buf32.set(_Md5.buffer32Identity.subarray(i), i);
    if (bufLen > 55) {
      _Md5._md5cycle(this._state, buf32);
      buf32.set(_Md5.buffer32Identity);
    }
    dataBitsLen = this._dataLength * 8;
    if (dataBitsLen <= 4294967295) {
      buf32[14] = dataBitsLen;
    } else {
      const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
      if (matches === null) {
        return;
      }
      const lo = parseInt(matches[2], 16);
      const hi = parseInt(matches[1], 16) || 0;
      buf32[14] = lo;
      buf32[15] = hi;
    }
    _Md5._md5cycle(this._state, buf32);
    return raw ? this._state : _Md5._hex(this._state);
  }
};
let Md5 = _Md5;
Md5.ifUse = true;
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = "0123456789abcdef";
Md5.hexOut = [];
Md5.onePassHasher = new _Md5();

if (Md5.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592") {
  Md5.ifUse = false;
  console.warn("Md5 self test failed.");
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
class ObjectProxyT {
  constructor() {
    this.m_monitorList = [];
  }
  addMonitor(_this, _back, _obj, _key) {
    let _keys = [];
    if (Array.isArray(_key)) {
      _keys.push(..._key);
    } else {
      _keys.push(_key);
    }
    _keys.forEach((item) => {
      this.m_monitorList.push({
        _this,
        _back,
        _obj,
        _key: item
      });
    });
  }
  clearMonitor(_this, _back) {
    this.m_monitorList = this.m_monitorList.filter((item) => {
      return !(item._this == _this && (_back ? item._back == _back : true));
    });
  }
  setProxy(_o) {
    return this._setProxy(_o);
  }
  _setProxy(_o) {
    if (typeof _o == "function" || typeof _o != "object" || !_o) {
      return _o;
    }
    if (!_o[Symbol.iterator]) {
      for (let _i in _o) {
        _o[_i] = this._setProxy(_o[_i]);
      }
    }
    let _this = this;
    return new Proxy(_o, {
      set(trapTarget, key, value, receiver) {
        let _wornValue = Reflect.get(trapTarget, key, receiver);
        let _if = Reflect.set(trapTarget, key, value, receiver);
        if (_if) {
          if (!(Array.isArray(trapTarget) && key == "length")) {
            _this.proxySet(key, value, _wornValue, trapTarget, receiver);
          }
        }
        return _if;
      },
      get(trapTarget, key, receiver) {
        return Reflect.get(trapTarget, key, receiver);
      }
    });
  }
  proxySet(key, newValue, wornValue, trapTarget, receiver) {
    let _arguments = arguments;
    this.m_monitorList.forEach((item) => {
      if (item._obj && item._obj != receiver) {
        return;
      }
      if (item._key && item._key != key) {
        return;
      }
      item._back.apply(item._this, _arguments);
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


const _BaseDebug = class {
  constructor() {
    this._ifInit = false;
  }
  get _name() {
    return this.constructor.name;
  }
  addItem(_key, _item) {
    if (!src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"].ifDebug) {
      return;
    }
    if (!this._ifInit) {
      this._ifInit = true;
      _BaseDebug.DebugObj[this._name] = this;
    }
    this[_key] = _item;
  }
};
let BaseDebug = _BaseDebug;
BaseDebug.Prefix = "$Debug";
BaseDebug.DebugObj = {};

if (src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"].ifDebug) {
  window[BaseDebug.Prefix] = BaseDebug.DebugObj;
  console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_1__["default"].packWarn("\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u901A\u8FC7", BaseDebug.Prefix, "\u8BBF\u95EE"));
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
class GamePool {
  static getItem(_sign) {
    if (this.poolList[_sign] && this.poolList[_sign].length > 0) {
      return this.poolList[_sign].pop();
    } else {
      switch (_sign) {
        case EGamePoolSign.v3:
          return new Laya.Vector3();
        case EGamePoolSign.v2:
          return new Laya.Vector2();
      }
    }
  }
  static recycleItem(_sign, ..._items) {
    if (!this.poolList[_sign]) {
      this.poolList[_sign] = [];
    }
    for (let _o of _items) {
      if (!this.poolList[_sign].includes(_o)) {
        this.poolList[_sign].push(_o);
      }
    }
  }
  static getV3() {
    let _v3 = this.getItem(EGamePoolSign.v3);
    _v3.setValue(0, 0, 0);
    return _v3;
  }
  static recycleV3(..._v3s) {
    this.recycleItem(EGamePoolSign.v3, ..._v3s);
  }
  static getV2() {
    let _v2 = this.getItem(EGamePoolSign.v2);
    _v2.setValue(0, 0);
    return _v2;
  }
  static recycleV2(..._v2s) {
    this.recycleItem(EGamePoolSign.v2, ..._v2s);
  }
}
GamePool.poolList = {};
var EGamePoolSign = /* @__PURE__ */ ((EGamePoolSign2) => {
  EGamePoolSign2[EGamePoolSign2["v3"] = 0] = "v3";
  EGamePoolSign2[EGamePoolSign2["v2"] = 1] = "v2";
  return EGamePoolSign2;
})(EGamePoolSign || {});


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


class BaseInitLoad {
  constructor() {
    this._init();
  }
  load(_comBack) {
    console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom("\u5F00\u59CB\u52A0\u8F7D\u6E38\u620F\u521D\u59CB\u5316\u8D44\u6E90"));
    this._loadBefore().then(() => {
      let _resLoadItems = this._getLoadItems();
      _Res_ResLoadGroup__WEBPACK_IMPORTED_MODULE_1__["default"].loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
        this._loadPlan(i);
      }, void 0, false), Laya.Handler.create(this, this._loadItemsCom, void 0, false)).then(() => {
        console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packCom("\u6E38\u620F\u52A0\u8F7D\u5B8C\u6210"));
        this._loadCom();
        _comBack && _comBack.run();
      });
    });
  }
  _init() {
  }
  _loadBefore() {
    return Promise.resolve();
  }
  _getLoadItems() {
    return [];
  }
  _loadPlan(_i) {
  }
  _loadItemsCom(_resLoad) {
  }
  _loadCom() {
  }
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


class ComResUrl {
  static MusicURL(name, _ = ".mp3") {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].music) + name + _;
  }
  static SoundURL(name, _ = ".mp3") {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].sound) + name + _;
  }
  static IconURL(name, _ = ".png") {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].icon) + name + _;
  }
  static ImgURL(name, _ = "png") {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].img) + name + "." + _;
  }
  static SkinURL(name, _ = "png") {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_1__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_0__["EKeyResName"].skin) + name + "." + _;
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
var EKeyResName = /* @__PURE__ */ ((EKeyResName2) => {
  EKeyResName2["RootRes"] = "res";
  EKeyResName2["ConfigJson"] = "ConfigJson";
  EKeyResName2["Font"] = "Font";
  EKeyResName2["FGUI"] = "FGUI";
  EKeyResName2["SceneJson"] = "SceneJson";
  EKeyResName2["Other"] = "Other";
  EKeyResName2["icon"] = "icon";
  EKeyResName2["img"] = "img";
  EKeyResName2["music"] = "music";
  EKeyResName2["sound"] = "sound";
  EKeyResName2["skin"] = "skin";
  return EKeyResName2;
})(EKeyResName || {});


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



class EssentialResUrls {
  static SceneConfigURL(_name) {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].SceneJson) + _name + ".json";
  }
  static ConfigJsonURL(_name) {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].ConfigJson) + _name;
  }
  static FGUIPackURL(_name) {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].FGUI) + _name;
  }
  static FontURL(_name) {
    return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_EKeyResName__WEBPACK_IMPORTED_MODULE_1__["EKeyResName"].Font) + _name;
  }
  static PrefabURL(prefab) {
    if (this._prefabsSceneCache[prefab]) {
      return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(this._prefabsSceneCache[prefab]) + "Conventional/" + prefab + ".lh";
    }
    for (let _i in this._AllScenePrefabsNames) {
      if (this._AllScenePrefabsNames[_i].indexOf("@" + prefab + "@") != -1) {
        this._prefabsSceneCache[prefab] = _i;
        return _KeyResManager__WEBPACK_IMPORTED_MODULE_2__["default"].getResURL(_i) + "Conventional/" + prefab + ".lh";
      }
    }
    console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError("\u6CA1\u6709\u5728\u573A\u666F\u627E\u5230\u9884\u5236\u4F53", prefab, "\u53EF\u80FD\u662F\u6CA1\u6709\u5BFC\u51FA\u573A\u666F\u9884\u5236\u4F53\u5217\u8868\u5BFC\u81F4\u7684\u3002"));
  }
  static setPrefabSceneNames(_o) {
    for (let _i in _o) {
      this._AllScenePrefabsNames[_i] = _o[_i];
    }
  }
}
EssentialResUrls._AllScenePrefabsNames = {};
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyResManager; });
/* harmony import */ var _Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/ConsoleEx */ "./src/_T/Console/ConsoleEx.ts");
/* harmony import */ var _Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ts/InstanceT */ "./src/_T/Ts/InstanceT.ts");
/* harmony import */ var _EKeyResName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EKeyResName */ "./src/_T/Res/EKeyResName.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let KeyResManager = class {
  constructor() {
    this.m_KeyResList = {};
    this.m_KeyResList = {
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].ConfigJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].ConfigJson + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].FGUI]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].FGUI + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].SceneJson]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].SceneJson + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Font]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Font + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].icon]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].icon + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].img]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].img + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].music]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].music + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].sound]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].sound + "/",
      [_EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].skin]: _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].RootRes + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].Other + "/" + _EKeyResName__WEBPACK_IMPORTED_MODULE_2__["EKeyResName"].skin + "/"
    };
  }
  static ifKeyRes(_key) {
    return Object.keys(this.instance.m_KeyResList).findIndex((item) => {
      return item == _key;
    }) != -1;
  }
  static getResURL(_key) {
    return this.instance.m_KeyResList[_key];
  }
  static addResUrl(_key, _string) {
    this.instance.m_KeyResList[_key] = _string;
  }
  static editKeyResList(_key, _str) {
    let _replace = this.instance.m_KeyResList[_key];
    if (typeof _replace == "undefined") {
      console.warn(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packWarn("\u4FEE\u6539\u8D44\u6E90\u8DEF\u5F84\u5931\u8D25\uFF0C\u6CA1\u6709" + _key + "\u8FD9\u4E2A\u5173\u952E\u8DEF\u5F84\uFF01"));
      return;
    }
    for (let _i in this.instance.m_KeyResList) {
      this.instance.m_KeyResList[_i] = this.instance.m_KeyResList[_i].replace(_replace, _str);
    }
    console.log(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packLog("\u4FEE\u6539\u5173\u952E\u70B9\u8D44\u6E90\u8DEF\u5F84", _replace, "\u66FF\u6362\u6210", _str));
  }
};
KeyResManager = __decorateClass([
  _Ts_InstanceT__WEBPACK_IMPORTED_MODULE_1__["default"].DecorateInstance()
], KeyResManager);



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

class ResLoad {
  static Load(urls, model, onCompleted, _onProgress) {
    if (Array.isArray(urls)) {
      urls = urls.filter(Boolean);
    }
    if (!urls || Array.isArray(urls) && urls.length == 0) {
      onCompleted.run();
      if (_onProgress) {
        _onProgress.args = [1];
        _onProgress.run();
      }
      return;
    }
    switch (model) {
      case EResLoadModel.D3:
        Laya.loader.create(urls, onCompleted, _onProgress);
        break;
      case EResLoadModel.D2:
        Laya.loader.load(urls, onCompleted, _onProgress);
        break;
    }
  }
  static Load3D(urls, onCompleted, _onProgress) {
    this.Load(urls, EResLoadModel.D3, onCompleted, _onProgress);
  }
  static Load2D(urls, onCompleted, _onProgress) {
    this.Load(urls, EResLoadModel.D2, onCompleted, _onProgress);
  }
  static Load3DAsync(urls, _onProgress) {
    return new Promise((resolve) => {
      ResLoad.Load3D(urls, Laya.Handler.create(null, () => {
        resolve();
      }), _onProgress);
    });
  }
  static Load2DAsync(urls, _onProgress) {
    return new Promise(function(resolve) {
      ResLoad.Load2D(urls, Laya.Handler.create(null, () => {
        resolve();
      }), _onProgress);
    });
  }
  static GetRes(resUrl, noClone = false) {
    let getRes = Laya.loader.getRes(resUrl);
    if (!getRes) {
      console.error(..._Console_ConsoleEx__WEBPACK_IMPORTED_MODULE_0__["default"].packError("\u8D44\u6E90\u5C1A\u672A\u52A0\u8F7D", resUrl));
      return;
    }
    return noClone ? getRes : getRes.clone();
  }
  static ClearRes(resUrl) {
    Laya.loader.clearRes(resUrl);
  }
}
var EResLoadModel = /* @__PURE__ */ ((EResLoadModel2) => {
  EResLoadModel2[EResLoadModel2["D3"] = 0] = "D3";
  EResLoadModel2[EResLoadModel2["D2"] = 1] = "D2";
  return EResLoadModel2;
})(EResLoadModel || {});


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
class ResLoadGroup {
  static load(items, onCompleted, _onProgress, _onItemCom) {
    if (items.length == 0) {
      onCompleted.run();
      if (_onProgress) {
        _onProgress.args = [1];
        _onProgress.run();
      }
      return;
    }
    items = [...items];
    let _length = items.length;
    let _f = () => {
      if (items.length > 0) {
        let onItem = items.shift();
        onItem.loadAsync(Laya.Handler.create(this, (i) => {
          _onProgress.args = [
            (_length - items.length - 1 + i) / _length
          ];
          _onProgress.run();
        })).then(() => {
          _onItemCom.args = [onItem];
          _onItemCom.run();
          _f();
        });
      } else {
        onCompleted.run();
      }
    };
    _f();
  }
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

class ResLoadItem {
  get key() {
    return this.m_key;
  }
  constructor(_res, _mode, _key, _comBack, _onProgress) {
    this.m_res = _res;
    this.m_loadModel = _mode;
    this.m_key = _key;
    this.m_comBack = _comBack;
    this.m_onProgress = _onProgress;
  }
  load(onCompleted, _onProgress) {
    let __onProgress = _onProgress;
    if (__onProgress && this.m_onProgress) {
      __onProgress = Laya.Handler.create(this, (i) => {
        _onProgress.args = [i];
        _onProgress.run();
        this.m_onProgress.args = [i];
        this.m_onProgress.run();
      }, void 0, false);
    } else if (this.m_onProgress) {
      __onProgress = this.m_onProgress;
    }
    if (this.m_comBack) {
      if (!onCompleted) {
        _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, this.m_comBack, __onProgress);
      } else {
        _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
          this.m_comBack.run();
          onCompleted.run();
        }), __onProgress);
      }
    } else {
      _ResLoad__WEBPACK_IMPORTED_MODULE_0__["default"].Load(this.m_res, this.m_loadModel, onCompleted, __onProgress);
    }
  }
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
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));






class TMain {
  static initFrame() {
    window[_TConfig__WEBPACK_IMPORTED_MODULE_5__["default"].Name] = __spreadProps(__spreadValues({}, _TConfig__WEBPACK_IMPORTED_MODULE_5__["default"]), {
      gameConfig: __spreadValues({}, src_GameConfig__WEBPACK_IMPORTED_MODULE_2__["default"]),
      _mainConfig: __spreadValues({}, src_Config_MainConfig__WEBPACK_IMPORTED_MODULE_1__["default"]),
      _gameConfig: __spreadValues({}, src_Config_GameConfig__WEBPACK_IMPORTED_MODULE_0__["default"])
    });
  }
  static initGame() {
    _D3_D3Manager__WEBPACK_IMPORTED_MODULE_4__["default"].init();
    _D2_D2Manager__WEBPACK_IMPORTED_MODULE_3__["default"].init();
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
const _InstanceT = class {
  static DecorateInstance(_ifPassive = true, name = "instance") {
    return function(target) {
      if (_ifPassive) {
        Object.defineProperty(target, name, {
          configurable: false,
          enumerable: false,
          get: function() {
            if (!target[_InstanceT.InstanceKey]) {
              target[_InstanceT.InstanceKey] = new target();
            }
            return target[_InstanceT.InstanceKey];
          }
        });
      } else {
        target[name] = new target();
      }
    };
  }
};
let InstanceT = _InstanceT;
InstanceT.InstanceKey = Symbol();



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
class ArrayUtils {
  static ContentIfSame(x, y) {
    if (!x || !y)
      return false;
    if (x.length != y.length)
      return false;
    let m = /* @__PURE__ */ new Map();
    x.forEach((item) => {
      m.set(item, (m.has(item) ? m.get(item) : 0) + 1);
    });
    y.forEach((item) => {
      m.set(item, (m.has(item) ? m.get(item) : 0) - 1);
    });
    let b = true;
    for (let [_value, _number] of m) {
      if (_number != 0) {
        b = false;
        break;
      }
    }
    return b;
  }
  static Unique(arr) {
    return Array.from(new Set(arr));
  }
  static ReverseReserveUnique(arr) {
    return Array.from(new Set(arr.reverse())).reverse();
  }
  static ObjUnique(arr, _F) {
    for (let i = 0, len = arr.length; i < len; i++) {
      for (let j = i + 1, len2 = arr.length; j < len2; j++) {
        if (_F(arr[i]) === _F(arr[j])) {
          arr.splice(j, 1);
          j--;
          len2--;
        }
      }
    }
    return arr;
  }
  static Replace(arr, oldObj, newObj) {
    let index = arr.indexOf(oldObj);
    if (index < 0)
      return false;
    arr.splice(index, 1, newObj);
    return true;
  }
  static RemoveItem(arr, obj) {
    let index = arr.indexOf(obj);
    if (index < 0)
      return false;
    arr.splice(index, 1);
    return true;
  }
  static RemoveAt(arr, index) {
    if (arr.length <= index)
      return false;
    arr.splice(index, 1);
    return true;
  }
  static Contains(arr, obj) {
    let index = arr.indexOf(obj);
    return index >= 0;
  }
  static Copy(arr) {
    let result = [];
    for (let i = 0; i < arr.length; ++i) {
      result.push(arr[i]);
    }
    return result;
  }
  static upsetArray(_array) {
    return _array.sort(() => {
      return Math.random() - 0.5;
    });
  }
  static RandomGet(_array, _n = 1, _weight = _array.map((item) => {
    return 1;
  })) {
    if (_array.length <= 0) {
      return;
    }
    let _rootArray = [];
    let _newArray = [];
    let _indexArray = [];
    let _minWeight = _weight[0];
    _weight.forEach((item) => {
      _minWeight = Math.min(_minWeight, item);
    });
    _weight = _weight.map((item) => {
      return Math.floor(item * (1 / _minWeight));
    });
    _array.forEach((item, index) => {
      _rootArray.push(item);
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
    return _newArray;
  }
}


/***/ }),

/***/ "./src/_T/Utils/SpriteUtils.ts":
/*!*************************************!*\
  !*** ./src/_T/Utils/SpriteUtils.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteUtils; });
class SpriteUtils {
  static InverseTransformPoint(parent, position) {
    let tempMatrix = new Laya.Matrix4x4();
    parent.worldMatrix.invert(tempMatrix);
    let v3 = new Laya.Vector3();
    Laya.Vector3.transformCoordinate(position, tempMatrix, v3);
    return v3;
  }
  static SetShadow(obj, castShadow, receiveShadow) {
    let meshRenderer = obj.meshRenderer;
    if (meshRenderer != null) {
      meshRenderer.castShadow = castShadow;
      meshRenderer.receiveShadow = receiveShadow;
    }
    let skinnedMeshRenderer = obj.skinnedMeshRenderer;
    if (skinnedMeshRenderer != null) {
      skinnedMeshRenderer.castShadow = castShadow;
      skinnedMeshRenderer.receiveShadow = receiveShadow;
    }
    let node = obj;
    for (let i = 0; i < node.numChildren; ++i) {
      let getChild = node.getChildAt(i);
      this.SetShadow(getChild, castShadow, receiveShadow);
    }
  }
  static findChild(sp, name) {
    if (sp.name == name)
      return sp;
    else
      return this._findChild(sp._children, name);
  }
  static _findChild(spArr, name) {
    if (!spArr)
      return null;
    let arr = [];
    for (var i = 0; i < spArr.length; i++) {
      var child = spArr[i];
      if (child.name == name) {
        return child;
      } else if (child.numChildren) {
        arr = arr.concat(child._children);
      }
    }
    if (!arr.length)
      return null;
    return this._findChild(arr, name);
  }
  static foreachSpr(_spr, _handler) {
    if (_handler) {
      _handler.args = [_spr];
      _handler.run();
    }
    for (let i = 0, length = _spr.numChildren; i < length; i++) {
      this.foreachSpr(_spr.getChildAt(i), _handler);
    }
  }
  static GetComponentsInChildren(obj, cmp) {
    let result = [];
    this._GetComponentsInChildrenHelper(obj, cmp, result);
    return result;
  }
  static _GetComponentsInChildrenHelper(obj, cmp, result) {
    let cmps = obj.getComponents(cmp);
    if (cmps != null) {
      for (let i = 0; i < cmps.length; ++i) {
        result.push(cmps[i]);
      }
    }
    for (let i = 0; i < obj.numChildren; ++i) {
      let getChild = obj.getChildAt(i);
      this._GetComponentsInChildrenHelper(getChild, cmp, result);
    }
  }
  static getScrs(_spr, _scr) {
    let _scrs = [];
    let __scrs = _spr["_components"];
    if (Array.isArray(__scrs)) {
      for (let _o of __scrs) {
        if (_o instanceof _scr) {
          _scrs.push(_o);
        }
      }
    }
    return _scrs;
  }
  static SetLayer(obj, layerIndex) {
    obj.layer = layerIndex;
    for (let i = 0; i < obj.numChildren; ++i) {
      let getChild = obj.getChildAt(i);
      this.SetLayer(getChild, layerIndex);
    }
  }
  static getPhysicComponent(_spr) {
    let _physicsCom = _spr.getComponent(Laya.PhysicsCollider);
    if (!_physicsCom) {
      _physicsCom = _spr.getComponent(Laya.Rigidbody3D);
    }
    return _physicsCom;
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
class V3Utils {
  static parseVector3(str, _outV3) {
    var strs = str.split(",");
    _outV3.setValue(Number(strs[0]), Number(strs[1]), Number(strs[2]));
  }
  static setV3Length(_v3, _l) {
    let _length = Laya.Vector3.scalarLength(_v3);
    if (_length != 0) {
      let _a = _l / _length;
      _v3.x = _v3.x * _a;
      _v3.y = _v3.y * _a;
      _v3.z = _v3.z * _a;
    }
  }
  static PotLerpMove(_pos, _tragetPot, _lerp, _outV3, _initialLength) {
    if (!_outV3) {
      console.error("\u5FC5\u987B\u6709\u4E00\u4E2A\u8F93\u51FA\u7684\u5411\u91CF\uFF01");
      return;
    }
    let _distance = Laya.Vector3.distance(_pos, _tragetPot);
    Laya.Vector3.lerp(_pos, _tragetPot, _lerp, _outV3);
    return 1 - _distance / _initialLength;
  }
  static PotConstantSpeedMove(_pos, _tragetPot, _speed, _outV3) {
    if (!_outV3) {
      console.error("\u5FC5\u987B\u6709\u4E00\u4E2A\u8F93\u51FA\u7684\u5411\u91CF\uFF01");
      return;
    }
    let _ifEnd;
    let _differV3 = new Laya.Vector3();
    Laya.Vector3.subtract(_tragetPot, _pos, _differV3);
    let _distance = Laya.Vector3.scalarLength(_differV3);
    if (_distance > _speed) {
      this.setV3Length(_differV3, _speed);
      _ifEnd = false;
    } else {
      _ifEnd = true;
    }
    Laya.Vector3.add(_pos, _differV3, _outV3);
    return _ifEnd;
  }
  static RotateV3(_v3, _anger, _axis = this.rotateAxisV3) {
    var q = new Laya.Quaternion();
    Laya.Quaternion.createFromAxisAngle(_axis, _anger / 180 * Math.PI, q);
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
class _TConfig {
}
_TConfig.Name = "LayaMiniGame";
_TConfig.ZHName = "LayaBox\u5C0F\u6E38\u620F";
_TConfig.Versions = "1.0.0";


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
class BaseItemPool {
  constructor() {
    this.m_itemPool = {};
  }
  get itemPool() {
    return this.m_itemPool;
  }
  poolHasItem(_key) {
    return Boolean(this.m_itemPool[_key] && this.m_itemPool[_key].length > 0);
  }
  getItemByPool(_key) {
    if (this.poolHasItem(_key)) {
      return this.m_itemPool[_key].pop();
    }
    return null;
  }
  addItemToPool(_key, _item) {
    if (!this.m_itemPool[_key]) {
      this.m_itemPool[_key] = [];
    }
    this.m_itemPool[_key].push(_item);
    this.m_itemPool[_key] = [...new Set(this.m_itemPool[_key])];
  }
  emptyPool() {
    this.m_itemPool = {};
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy9TdWJwYWNrYWdlc0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19Db25zdENvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnL19HYW1lQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9Db25maWcvX01haW5Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZUNvbW1vbi9HYW1lQ29tbW9uQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVDb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVFbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZUxvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVBhdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVQbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVTZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZVN0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVUZXN0TWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9HYW1lTWFpbi9GR1VJX1BHYW1lVGVzdFBsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0dhbWVNYWluL0ZHVUlfUEdhbWVUZXN0VUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvR2FtZU1haW4vR2FtZU1haW5CaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZHVUkvSW5pdEVtcHR5U2NyZWVuL0ZHVUlfRW1wdHlTY3JlZW5VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0RW1wdHlTY3JlZW4vSW5pdEVtcHR5U2NyZWVuQmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL0luaXRMb2FkL0ZHVUlfaW5pdExvYWRVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRkdVSS9fVGVzdC9GR1VJX1Rlc3RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0NvbmZpZ1Byb3h5L1NjZW5lTm9kZUNvbmZpZ1Byb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0NvbmZpZ1Byb3h5L1Rlc3RDb25zdFByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvRGF0YU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS9NYWluRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2V0RGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvU2hvcnREYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS9TaWduRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RhdGEvVGVzdERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL3R5cGUvTWFpbkRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1NldERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1Nob3J0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9EYXRhL3R5cGUvU2lnbkRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvRGF0YS90eXBlL1Rlc3REYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0RlYnVnL0N1c3RvbURlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0dhbWVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL01haW4vR2FtZUluaXRMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL01hbmFnZXIvQXVkaW9NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRUZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvUmVzRS9FTXVzaWNzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1Jlc0UvRVNvdW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvVUlDb24vRVVJUGFucGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvVUlDb24vUGFuZWwvTWFpblVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL1VJQ29uL1VJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9VSUNvbk1hbmFnZXJQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fY29uZmlnL0J1aWxkQ29uZmlnVHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fU2NlbmVOb2RlQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19jb25maWcvX1Rlc3RDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX2NvbmZpZy9fVGVzdENvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvQ29uZmlnVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9EYXRhVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9MaWJyYXJ5VGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9fdGVzdC9PdGhlclRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvUGFja1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvX3Rlc3QvVGVzdE1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL0NvbW1vbi9QbGF0Zm9ybUNvbW1vbkV2ZW50SWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL0RhdGEvQkREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9EYXRhL09QUE9EYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9EYXRhL1BsYXRmb3JtRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vRGF0YS9RUURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL0RhdGEvUVRURGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vRGF0YS9UVERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL0RhdGEvVklWT0RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL0RhdGEvV1hEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9EZXZpY2UvRGVmYXVsdERldmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vRGV2aWNlL1RURGV2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9EZXZpY2UvV1hEZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1BsYXRmb3JtQ2xhc3MvQkRQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vUGxhdGZvcm1DbGFzcy9EZWZhdWx0UGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1BsYXRmb3JtQ2xhc3MvT3Bwb1BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9QbGF0Zm9ybUNsYXNzL1FRUGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1BsYXRmb3JtQ2xhc3MvUVRUUGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1BsYXRmb3JtQ2xhc3MvVFRQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vUGxhdGZvcm1DbGFzcy9WaXZvUGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1BsYXRmb3JtQ2xhc3MvV1hQbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vUGxhdGZvcm1NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9QbGF0Zm9ybU1hbmFnZXJQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vUGxhdGZvcm1ULnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9SZWNvcmQvRGVmYXVsdFJlY29yZE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1JlY29yZC9UVFJlY29yZE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1JlY29yZC9XZWJSZWNvcmRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF0Zm9ybS9TaGFyZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXRmb3JtL1QvRVBsYXRmb3JtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhdGZvcm0vVC9TaGFyZUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1doaXRlU2NyZWVuVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0Jhc2VDb25maWdQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvQ29uZmlnL0NvbmZpZ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0NvbnNvbGUvQ29uc29sZUNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Db25zb2xlL0NvbnNvbGVFeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRDJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMi9GR1VJL0Jhc2VTaW5nbGVVSUNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9CYXNlVUlDb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9FVUlMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDIvRkdVSS9GR1VJUm9vdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvRkdVSVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QyL0ZHVUkvUm9vdFVJQ29uLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9EM01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL0dsb2JhbEQzRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0QzL3NjZW5lL05vZGVULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EMy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRDMvc2NlbmUvU2NlbmVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VEYXRhUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EYXRhL0Jhc2VTaG9ydERhdGFQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9EYXRhVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvRGF0YS9NZDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0RhdGEvT2JqZWN0UHJveHlULnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9EZWJ1Zy9CYXNlRGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL0dhbWVUL0dhbWVQb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9NYWluL0Jhc2VJbml0TG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0NvbVJlc1VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0VLZXlSZXNOYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvUmVzL0tleVJlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1Jlcy9SZXNMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXMvUmVzTG9hZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1RNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9Ucy9JbnN0YW5jZVQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1V0aWxzL1Nwcml0ZVV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9VdGlscy9WM1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9fVENvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX1QvY29tL0Jhc2VJdGVtUG9vbC50cyJdLCJuYW1lcyI6WyJFRm9udCIsIkVNdXNpY3MiLCJFU291bmRzIiwiRVVJUGFucGwiLCJfU2NlbmVOb2RlQ29uZmlnIiwiX1Rlc3RDb25maWciLCJfVGVzdENvbnN0IiwiX0VBbGxTY2VuZVByZWZhYnNOYW1lcyIsIl9FQWxsRXhwb3J0U2NlbmVOYW1lIiwiUGxhdGZvcm1Db21tb25FdmVudCIsIkVQbGF0Zm9ybVR5cGUiLCJFVUlMYXllciIsIkVHYW1lUG9vbFNpZ24iLCJFS2V5UmVzTmFtZSIsIkVSZXNMb2FkTW9kZWwiLCJsZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0FBQWUsTUFBTSxzQkFBc0I7QUFLM0M7QUFMcUIsc0JBRUgsY0FBa0MsQ0FFaEQ7QUFNRyxN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O0FBQ1AsV0FBRyxTQUFTLElBQUksS0FBSyxHQUFHLE9BQU8sSUFBSSxFQUFJO0FBQ3ZDLGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSjtBQUNBLFdBQU8sR0FBRyxLQUFLLEVBQUU7QUFBQSxFQUNyQjtBQUFBLEVBRUEsT0FBZSxVQUFVLEdBQTZCLEdBQTZCO0FBQy9FLFFBQUksSUFBSSxFQUFFO0FBQ1YsUUFBSSxJQUFJLEVBQUU7QUFDVixRQUFJLElBQUksRUFBRTtBQUNWLFFBQUksSUFBSSxFQUFFO0FBRVYsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLFdBQVc7QUFDMUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLFFBQVE7QUFDeEMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLFdBQVc7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFFL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLFlBQVk7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLFdBQVc7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLFlBQVk7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDM0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFdBQVc7QUFDMUMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDNUMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDN0MsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFFL0IsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssU0FBUztBQUNuQyxTQUFLLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSTtBQUM5QixVQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxhQUFhO0FBQ3ZDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxNQUFNLGFBQWE7QUFDeEMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLE1BQU0sV0FBVztBQUN0QyxTQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssSUFBSTtBQUM5QixVQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxhQUFhO0FBQ3ZDLFNBQUssS0FBSyxJQUFJLE1BQU0sTUFBTSxJQUFJO0FBQzlCLFVBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxLQUFLLGFBQWE7QUFDdkMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssWUFBWTtBQUN0QyxTQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsTUFBTSxhQUFhO0FBQ3hDLFNBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQzlCLFVBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxNQUFNLFlBQVk7QUFDdkMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssWUFBWTtBQUN0QyxTQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxZQUFZO0FBQ3RDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxLQUFLLFdBQVc7QUFDckMsU0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLElBQUk7QUFDOUIsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssWUFBWTtBQUN0QyxTQUFLLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSTtBQUM5QixVQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsTUFBTSxZQUFZO0FBQ3ZDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxNQUFNLFlBQVk7QUFDdkMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssWUFBWTtBQUN0QyxTQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssSUFBSTtBQUU5QixVQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLFlBQVk7QUFDekMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxhQUFhO0FBQzFDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sYUFBYTtBQUMzQyxTQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLFdBQVc7QUFDeEMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxhQUFhO0FBQzNDLFNBQUssS0FBSyxJQUFJLE1BQU0sTUFBTSxJQUFJO0FBQzlCLFVBQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssYUFBYTtBQUMxQyxTQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFVBQVU7QUFDeEMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxhQUFhO0FBQzFDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssYUFBYTtBQUMxQyxTQUFLLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSTtBQUM5QixVQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFdBQVc7QUFDekMsU0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUk7QUFDL0IsVUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxhQUFhO0FBQzFDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sYUFBYTtBQUMzQyxTQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSTtBQUMvQixVQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLFlBQVk7QUFDekMsU0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLElBQUk7QUFDOUIsVUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxhQUFhO0FBQzNDLFNBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQy9CLFVBQU0s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ZCxTQU1ILFdBQW1COzs7Ozs7Ozs7Ozs7O0FDTnJDO0FBQUE7QUFBZSxNQUFNLGFBQWE7QUFBQSxFQUFsQztBQUVJLFNBQVEsYUFFSixDQUFDO0FBQUE7QUFBQSxFQUdMLElBQWMsV0FFWjtBQUNFLFdBQU8sS0FBSztBQUFBLEVBQ2hCO0FBQUEsRUFNTyxZQUFZLE1BQXVCO0FBQ3RDLFdBQU8sUUFBUSxLQUFLLFdBQVcsU0FBUyxLQUFLLFdBQVcsTUFBTSxTQUFTLENBQUM7QUFBQSxFQUM1RTtBQUFBLEVBTU8sY0FBZ0MsTUFBaUI7QUFFcEQsUUFBSSxLQUFLLFlBQVksSUFBSSxHQUFHO0FBQ3hCLGFBQU8sS0FBSyxXQUFXLE1BQU0sSUFBSTtBQUFBLElBQ3JDO0FBRUEsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQU9PLGNBQWMsTUFBYyxPQUFlO0FBQzlDLFFBQUksQ0FBQyxLQUFLLFdBQVcsT0FBTztBQUN4QixXQUFLLFdBQVcsUUFBUSxDQUFDO0FBQUEsSUFDN0I7QUFDQSxTQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUs7QUFFaEMsU0FBSyxXQUFXLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLFdBQVcsS0FBSyxDQUFDO0FBQUEsRUFDOUQ7QUFBQSxFQUtPLFlBQVk7QUFDZixTQUFLLGFBQWEsQ0FBQztBQUFBLEVBQ3ZCO0FBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsIi8qKlxyXG4gKiDliqDovb3liIbljIXphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRTdWJwYWNrYWdlc0NvbmZpZyB7XHJcbiAgICAvKiog5YiG5YyF5YiX6KGoLOW/hemhu+WSjOWIhuWMhemFjee9ruaWh+S7tuS4reeahOWIl+ihqOS4gOiHtCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzdWJwYWNrYWdlczogSUxvYWRTdWJwYWNrYWdlc1tdID0gW1xyXG4gICAgICAgIC8vXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogY2Ru5YiG5YyF6YWN572uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ0ROU3VicGFja2FnZXNDb25maWcge1xyXG4gICAgLyoqIGNkbui3r+W+hOWIl+ihqO+8jCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDRE5VUkxzOiBJU3VicGFja2FnZXNbXSA9IFtcclxuICAgICAgICAvL1xyXG4gICAgXTtcclxufVxyXG5cclxuLy8g5L+u5pS56Lev5b6E6aG65bqP5piv5YWI5L+u5pS55Yqg6L295YiG5YyF6Lev5b6E77yM5Zyo5L+u5pS5Y2Ru6Lev5b6E77yM5omA5LulY2Ru6Lev5b6E5Lya6KaG55uW5Yqg6L296Lev5b6E77yM5LiN6KaB6YeN5aSN5bCx6KGM5LqG44CCXHJcblxyXG4vKipcclxuICog5YyF6YWN572u5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJwYWNrYWdlcyB7XHJcbiAgICAvKiog5YWz6ZSu6LWE5rqQ5ZCN5a2XICovXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAvKiog6Lev5b6EICovXHJcbiAgICByb290OiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpnIDopoHliqDovb3nmoTliIbljIXphY3nva7mjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRTdWJwYWNrYWdlcyBleHRlbmRzIElTdWJwYWNrYWdlcyB7XHJcbiAgICAvKiog5piv5ZCm6ZyA6KaB5Yqg6L29ICovXHJcbiAgICBpZkxvYWQ6IGJvb2xlYW47XHJcbn0iLCIvKipcclxuICog5bi46YeP6YWN572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQ29uc3RDb25maWcge1xyXG4gICAgLyoqIGZndWnnm7jlhbMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkdVSSA9IHtcclxuICAgICAgICAvKiog5YyF5ZCO57yAICovXHJcbiAgICAgICAgcGFja2FnZUZpbGVFeHRlbnNpb246ICdiaW4nLFxyXG4gICAgfTtcclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwiLi9fTWFpbkNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+acgOmrmOWxgumFjee9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0dhbWVDb25maWcge1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a4uOaIj+a1i+ivlSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZkdhbWVUZXN0OiBib29sZWFuID0gKCFfTWFpbkNvbmZpZy5PbkxpbmUpICYmIGZhbHNlO1xyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+a1i+ivleexuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlRlc3Q6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6LCD6K+V57G7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmRGVidWc6IGJvb2xlYW4gPSAoIV9NYWluQ29uZmlnLk9uTGluZSkgJiYgdHJ1ZTtcclxufSIsIi8qKlxyXG4gKiDpobnnm67mnIDpq5jlsYLphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NYWluQ29uZmlnIHtcclxuICAgIC8qKiDmuLjmiI/miYDlsZ7lm6LpmJ8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVGVhbTogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI8nO1xyXG4gICAgLyoqIOa4uOaIj+WQjeWtl++8jOWwvemHj+S4jeimgeWHuueOsOS4reaWh+WSjOeJueauiuWtl+espiovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5hbWU6IHN0cmluZyA9ICdMYXlhTWluaUdhbWUnO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBaSE5hbWU6IHN0cmluZyA9ICdMYXlhQm945bCP5ri45oiPJztcclxuICAgIC8qKiDmuLjmiI/or7TmmI4gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRXhwbGFpbjogc3RyaW5nID0gJ0xheWFCb3jlsI/muLjmiI/vvIzor7TmmI7jgIInO1xyXG4gICAgLyoqIOaVsOaNrueJiOacrCDlj6/ku6XluKblrZfmr43kvYbmmK/lsL3ph4/kuI3opoHlh7rnjrDkuK3mloflkoznibnmrorlrZfnrKYqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWZXJzaW9uczogc3RyaW5nID0gJzAuMC4wLjEnO1xyXG4gICAgLyoqIOaYr+WQpuS4iue6v+S4umZhbHNl5YiZ5piv5byA5Y+R546v5aKDICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9uTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29tbW9uQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZUNvbSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXEzbmc5d1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUNvbSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVDb20+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVDb21cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVDdXN0b21zTG9hZGluZyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3NoYWRlOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWRibWkxM1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lQ3VzdG9tc0xvYWRpbmdcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fc2hhZGUgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVFbmQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1sYXhkMTlcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVFbmQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lRW5kPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lRW5kXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lTG9hZGluZyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3NoYWRlOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTFvXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lTG9hZGluZyB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVMb2FkaW5nPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lTG9hZGluZ1wiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9zaGFkZSA9IDxmZ3VpLkdHcmFwaD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDEpKTtcclxuXHRcdHRoaXMubV9wcm9ncmVzcyA9IDxmZ3VpLkdQcm9ncmVzc0Jhcj4odGhpcy5nZXRDaGlsZEF0KDIpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZU1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1zeXRhOWZcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVNYWluIHtcclxuXHRcdHJldHVybiA8RkdVSV9QR2FtZU1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVNYWluXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lUGF1c2UgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW02dmNxNWdcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVQYXVzZSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVQYXVzZT4oZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFwiR2FtZU1haW5cIiwgXCJQR2FtZVBhdXNlXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX3RleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR1VJX1BHYW1lUGxheSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTFyXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lUGxheSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVQbGF5PihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lUGxheVwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVNldCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbTZ2Y3E0dVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVNldCB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVTZXQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVTZXRcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVTdGFydCBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX3RleHQ6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbWc3YTF2XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lU3RhcnQge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lU3RhcnQ+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVTdGFydFwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV90ZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDApKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RNYWluIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIG1fVUlCdXR0b246Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX1VJOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV90ZXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fZGF0YVRlc3Q6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX2RhdGFUZXN0VGV4dDpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fX3Rlc3Q6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIHN0YXRpYyBVUkw6c3RyaW5nID0gXCJ1aTovL2trN2c1bW1tbzlqczl4XCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX1BHYW1lVGVzdE1haW4ge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdE1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0TWFpblwiKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTp2b2lkIHtcclxuXHRcdHRoaXMubV9VSUJ1dHRvbiA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fVUkgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMSkpO1xyXG5cdFx0dGhpcy5tX3Rlc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3Rlc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV9kYXRhVGVzdCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fZGF0YVRlc3RUZXh0ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV9fdGVzdCA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDkpKTtcclxuXHR9XHJcbn0iLCIvKiogVGhpcyBpcyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBjbGFzcyBieSBGYWlyeUdVSS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX2xvb2tWQWQ6Zmd1aS5HQnV0dG9uO1xyXG5cdHB1YmxpYyBtX2xvb2tWQWRUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fbG9va1ZBZDpmZ3VpLkdHcm91cDtcclxuXHRwdWJsaWMgbV9zaGFyZTpmZ3VpLkdCdXR0b247XHJcblx0cHVibGljIG1fc2hhcmVUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fc2hhcmU6Zmd1aS5HR3JvdXA7XHJcblx0cHVibGljIG1fc2hvd1RvYXN0OmZndWkuR0J1dHRvbjtcclxuXHRwdWJsaWMgbV9zaG93VG9hc3RUZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV9fc2hvd1RvYXN0OmZndWkuR0dyb3VwO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly9razdnNW1tbXQxcHc5eVwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSB7XHJcblx0XHRyZXR1cm4gPEZHVUlfUEdhbWVUZXN0UGxhdGZvcm0+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkdhbWVNYWluXCIsIFwiUEdhbWVUZXN0UGxhdGZvcm1cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fbG9va1ZBZCA9IDxmZ3VpLkdCdXR0b24+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fbG9va1ZBZFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoMikpO1xyXG5cdFx0dGhpcy5tX19sb29rVkFkID0gPGZndWkuR0dyb3VwPih0aGlzLmdldENoaWxkQXQoMykpO1xyXG5cdFx0dGhpcy5tX3NoYXJlID0gPGZndWkuR0J1dHRvbj4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV9zaGFyZVRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNSkpO1xyXG5cdFx0dGhpcy5tX19zaGFyZSA9IDxmZ3VpLkdHcm91cD4odGhpcy5nZXRDaGlsZEF0KDYpKTtcclxuXHRcdHRoaXMubV9zaG93VG9hc3QgPSA8Zmd1aS5HQnV0dG9uPih0aGlzLmdldENoaWxkQXQoNykpO1xyXG5cdFx0dGhpcy5tX3Nob3dUb2FzdFRleHQgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOCkpO1xyXG5cdFx0dGhpcy5tX19zaG93VG9hc3QgPSA8Zmd1aS5HR3JvdXA+KHRoaXMuZ2V0Q2hpbGRBdCg5KSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfUEdhbWVUZXN0VUkgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV9iZzpmZ3VpLkdHcmFwaDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8va2s3ZzVtbW1oNjZlOXpcIjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpOkZHVUlfUEdhbWVUZXN0VUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX1BHYW1lVGVzdFVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJHYW1lTWFpblwiLCBcIlBHYW1lVGVzdFVJXCIpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5tX2JnID0gPGZndWkuR0dyYXBoPih0aGlzLmdldENoaWxkQXQoMCkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9QR2FtZVNldCBmcm9tIFwiLi9GR1VJX1BHYW1lU2V0XCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lUGF1c2UgZnJvbSBcIi4vRkdVSV9QR2FtZVBhdXNlXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcgZnJvbSBcIi4vRkdVSV9QR2FtZUN1c3RvbXNMb2FkaW5nXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTG9hZGluZyBmcm9tIFwiLi9GR1VJX1BHYW1lTG9hZGluZ1wiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZVBsYXkgZnJvbSBcIi4vRkdVSV9QR2FtZVBsYXlcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVTdGFydCBmcm9tIFwiLi9GR1VJX1BHYW1lU3RhcnRcIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVUZXN0VUkgZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RVSVwiO1xyXG5pbXBvcnQgRkdVSV9QR2FtZUVuZCBmcm9tIFwiLi9GR1VJX1BHYW1lRW5kXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdE1haW4gZnJvbSBcIi4vRkdVSV9QR2FtZVRlc3RNYWluXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lQ29tIGZyb20gXCIuL0ZHVUlfUEdhbWVDb21cIjtcclxuaW1wb3J0IEZHVUlfUEdhbWVNYWluIGZyb20gXCIuL0ZHVUlfUEdhbWVNYWluXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lVGVzdFBsYXRmb3JtIGZyb20gXCIuL0ZHVUlfUEdhbWVUZXN0UGxhdGZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluQmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lU2V0LlVSTCwgRkdVSV9QR2FtZVNldCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVBhdXNlLlVSTCwgRkdVSV9QR2FtZVBhdXNlKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcuVVJMLCBGR1VJX1BHYW1lQ3VzdG9tc0xvYWRpbmcpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVMb2FkaW5nLlVSTCwgRkdVSV9QR2FtZUxvYWRpbmcpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVQbGF5LlVSTCwgRkdVSV9QR2FtZVBsYXkpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVTdGFydC5VUkwsIEZHVUlfUEdhbWVTdGFydCk7XHJcblx0XHRmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oRkdVSV9QR2FtZVRlc3RVSS5VUkwsIEZHVUlfUEdhbWVUZXN0VUkpO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVFbmQuVVJMLCBGR1VJX1BHYW1lRW5kKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdE1haW4uVVJMLCBGR1VJX1BHYW1lVGVzdE1haW4pO1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfUEdhbWVDb20uVVJMLCBGR1VJX1BHYW1lQ29tKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lTWFpbi5VUkwsIEZHVUlfUEdhbWVNYWluKTtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1BHYW1lVGVzdFBsYXRmb3JtLlVSTCwgRkdVSV9QR2FtZVRlc3RQbGF0Zm9ybSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfRW1wdHlTY3JlZW5VSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBzdGF0aWMgVVJMOnN0cmluZyA9IFwidWk6Ly83a3R6aWI4b3EzbmcwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKTpGR1VJX0VtcHR5U2NyZWVuVUkge1xyXG5cdFx0cmV0dXJuIDxGR1VJX0VtcHR5U2NyZWVuVUk+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIkluaXRFbXB0eVNjcmVlblwiLCBcIkVtcHR5U2NyZWVuVUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX0VtcHR5U2NyZWVuVUkgZnJvbSBcIi4vRkdVSV9FbXB0eVNjcmVlblVJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RW1wdHlTY3JlZW5CaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfRW1wdHlTY3JlZW5VSS5VUkwsIEZHVUlfRW1wdHlTY3JlZW5VSSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfaW5pdExvYWRVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBtX2JnOmZndWkuR0dyYXBoO1xyXG5cdHB1YmxpYyBtX3Byb2dyZXNzOmZndWkuR1Byb2dyZXNzQmFyO1xyXG5cdHB1YmxpYyBtX2xvYWRpbmdfcHJvZ3Jlc3M6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfbG9nbzpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9wcm9ncmVzczpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sYXlhOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgbV90ZXh0X2V4cGxhaW46Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfdjpmZ3VpLkdUZXh0RmllbGQ7XHJcblx0cHVibGljIG1fdGV4dF9sYXlhX3Y6Zmd1aS5HVGV4dEZpZWxkO1xyXG5cdHB1YmxpYyBtX3RleHRfZ2FtZV9leHBsYWluOmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vbjNvZWRwcDZuaWhyMFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9pbml0TG9hZFVJIHtcclxuXHRcdHJldHVybiA8RkdVSV9pbml0TG9hZFVJPihmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJJbml0TG9hZFwiLCBcImluaXRMb2FkVUlcIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fYmcgPSA8Zmd1aS5HR3JhcGg+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0XHR0aGlzLm1fcHJvZ3Jlc3MgPSA8Zmd1aS5HUHJvZ3Jlc3NCYXI+KHRoaXMuZ2V0Q2hpbGRBdCgxKSk7XHJcblx0XHR0aGlzLm1fbG9hZGluZ19wcm9ncmVzcyA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgyKSk7XHJcblx0XHR0aGlzLm1fdGV4dF9sb2dvID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDMpKTtcclxuXHRcdHRoaXMubV90ZXh0X3Byb2dyZXNzID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDQpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xheWEgPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoNSkpO1xyXG5cdFx0dGhpcy5tX3RleHRfZXhwbGFpbiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg2KSk7XHJcblx0XHR0aGlzLm1fdGV4dF92ID0gPGZndWkuR1RleHRGaWVsZD4odGhpcy5nZXRDaGlsZEF0KDcpKTtcclxuXHRcdHRoaXMubV90ZXh0X2xheWFfdiA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCg4KSk7XHJcblx0XHR0aGlzLm1fdGV4dF9nYW1lX2V4cGxhaW4gPSA8Zmd1aS5HVGV4dEZpZWxkPih0aGlzLmdldENoaWxkQXQoOSkpO1xyXG5cdH1cclxufSIsIi8qKiBUaGlzIGlzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGNsYXNzIGJ5IEZhaXJ5R1VJLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gKiovXHJcblxyXG5pbXBvcnQgRkdVSV9pbml0TG9hZFVJIGZyb20gXCIuL0ZHVUlfaW5pdExvYWRVSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExvYWRCaW5kZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZEFsbCgpOnZvaWQge1xyXG5cdFx0Zmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKEZHVUlfaW5pdExvYWRVSS5VUkwsIEZHVUlfaW5pdExvYWRVSSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlfVGVzdE1haW4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgbV90ZXh0OmZndWkuR1RleHRGaWVsZDtcclxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcInVpOi8vaHh1NHpjOWRpb284MFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCk6RkdVSV9UZXN0TWFpbiB7XHJcblx0XHRyZXR1cm4gPEZHVUlfVGVzdE1haW4+KGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChcIl9UZXN0XCIsIFwiVGVzdE1haW5cIikpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6dm9pZCB7XHJcblx0XHR0aGlzLm1fdGV4dCA9IDxmZ3VpLkdUZXh0RmllbGQ+KHRoaXMuZ2V0Q2hpbGRBdCgwKSk7XHJcblx0fVxyXG59IiwiLyoqIFRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3MgYnkgRmFpcnlHVUkuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiAqKi9cclxuXHJcbmltcG9ydCBGR1VJX1Rlc3RNYWluIGZyb20gXCIuL0ZHVUlfVGVzdE1haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UZXN0QmluZGVyIHtcclxuXHRwdWJsaWMgc3RhdGljIGJpbmRBbGwoKTp2b2lkIHtcclxuXHRcdGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihGR1VJX1Rlc3RNYWluLlVSTCwgRkdVSV9UZXN0TWFpbik7XHJcblx0fVxyXG59IiwiaW1wb3J0IEJhc2VDb25maWdQcm94eSBmcm9tIFwic3JjL19UL0NvbmZpZy9CYXNlQ29uZmlnUHJveHlcIjtcclxuaW1wb3J0IENvbmZpZ1QgZnJvbSBcInNyYy9fVC9Db25maWcvQ29uZmlnVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9TY2VuZU5vZGVDb25maWcgfSBmcm9tIFwiLi4vX2NvbmZpZy9fU2NlbmVOb2RlQ29uZmlnXCI7XHJcbi8qKlxyXG4gKiDlnLrmma/oioLngrnphY3nva7ooajku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBDb25maWdULkRlY29yYXRlQ29uZmlnUHJveHkoX1NjZW5lTm9kZUNvbmZpZylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlQ29uZmlnUHJveHkgZXh0ZW5kcyBCYXNlQ29uZmlnUHJveHk8X1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVOb2RlQ29uZmlnUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+HaWTojrflj5bmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWQgaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ5SWRHZXREYXRhKF9pZDogbnVtYmVyKTogX1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdC5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IF9pZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WFs+WNoeWQjeWtl+iOt+WPluWFs+WNoeaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWFs+WNoeWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnlOYW1lR2V0RGF0YShfbmFtZTogc3RyaW5nKTogX1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kYXRhTGlzdC5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgPT0gX25hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flnLrmma/lkI3lrZfojrflj5bmlbDmja7liJfooahcclxuICAgICAqIEBwYXJhbSBfbmFtZSDlnLrmma/lkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ5U2NlbmVOYW1lR2V0RGF0YShfbmFtZTogc3RyaW5nKTogX1NjZW5lTm9kZUNvbmZpZy5EYXRhVHlwZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zY2VuZSA9PSBfbmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuWcuuaZr+S4quaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCguLi50aGlzLm1fZGF0YUxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VDb25zdFByb3h5IH0gZnJvbSBcInNyYy9fVC9Db25maWcvQmFzZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4uL19jb25maWcvX1Rlc3RDb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleW4uOmHj+mFjee9ruihqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQENvbmZpZ1QuRGVjb3JhdGVDb25maWdQcm94eShfVGVzdENvbnN0KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0Q29uc3RQcm94eSBleHRlbmRzIEJhc2VDb25zdFByb3h5PF9UZXN0Q29uc3QuRGF0YVR5cGU+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVGVzdENvbnN0UHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBNYWluRGF0YVByb3h5IH0gZnJvbSBcIi4vTWFpbkRhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBTZXREYXRhUHJveHkgfSBmcm9tIFwiLi9TZXREYXRhUHJveHlcIjtcclxuaW1wb3J0IFNob3J0RGF0YVByb3h5IGZyb20gXCIuL1Nob3J0RGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFNpZ25EYXRhUHJveHkgfSBmcm9tIFwiLi9TaWduRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IFRlc3REYXRhUHJveHkgfSBmcm9tIFwiLi9UZXN0RGF0YVByb3h5XCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u566h55CG5ZmoXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBEYXRhTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmiYDmnInmlbDmja5cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmluaXREYXRhKCk7XHJcbiAgICAgICAgTWFpbkRhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNldERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgICAgIFNpZ25EYXRhUHJveHkuaW5zdGFuY2UuaW5pdERhdGEoKTtcclxuICAgICAgICBTaG9ydERhdGFQcm94eS5pbnN0YW5jZS5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgTWFpbkRhdGEgZnJvbSBcIi4vdHlwZS9NYWluRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+imgeaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKE1haW5EYXRhKVxyXG5leHBvcnQgY2xhc3MgTWFpbkRhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxNYWluRGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBNYWluRGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFNldERhdGEgZnJvbSBcIi4vdHlwZS9TZXREYXRhXCI7XHJcblxyXG4vKipcclxuICog6K6+572u5pWw5o2u5Luj55CGXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5ARGF0YVQuRGVjb3JhdGVEYXRhVGVtcGxhdGUoU2V0RGF0YSlcclxuZXhwb3J0IGNsYXNzIFNldERhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxTZXREYXRhPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFNldERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbn0iLCJpbXBvcnQgQmFzZVNob3J0RGF0YVByb3h5IGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlU2hvcnREYXRhUHJveHlcIjtcclxuaW1wb3J0IERhdGFUIGZyb20gXCJzcmMvX1QvRGF0YS9EYXRhVFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBTaG9ydERhdGEgZnJvbSBcIi4vdHlwZS9TaG9ydERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLTml7bmlbDmja5cclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShTaG9ydERhdGEpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0RGF0YVByb3h5IGV4dGVuZHMgQmFzZVNob3J0RGF0YVByb3h5PFNob3J0RGF0YT4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2hvcnREYXRhUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEJhc2VMb2NhbERhdGFQcm94eSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZUxvY2FsRGF0YVByb3h5XCI7XHJcbmltcG9ydCBEYXRhVCBmcm9tIFwic3JjL19UL0RhdGEvRGF0YVRcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2lnbkRhdGEgZnJvbSBcIi4vdHlwZS9TaWduRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOetvuWIsOaVsOaNruS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuQERhdGFULkRlY29yYXRlRGF0YVRlbXBsYXRlKFNpZ25EYXRhKVxyXG5leHBvcnQgY2xhc3MgU2lnbkRhdGFQcm94eSBleHRlbmRzIEJhc2VMb2NhbERhdGFQcm94eTxTaWduRGF0YT57XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBTaWduRGF0YVByb3h5O1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBCYXNlTG9jYWxEYXRhUHJveHkgZnJvbSBcInNyYy9fVC9EYXRhL0Jhc2VMb2NhbERhdGFQcm94eVwiO1xyXG5pbXBvcnQgRGF0YVQgZnJvbSBcInNyYy9fVC9EYXRhL0RhdGFUXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IFRlc3REYXRhIGZyb20gXCIuL3R5cGUvVGVzdERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDmtYvor5XmlbDmja7ku6PnkIZcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbkBEYXRhVC5EZWNvcmF0ZURhdGFUZW1wbGF0ZShUZXN0RGF0YSlcclxuZXhwb3J0IGNsYXNzIFRlc3REYXRhUHJveHkgZXh0ZW5kcyBCYXNlTG9jYWxEYXRhUHJveHk8VGVzdERhdGE+e1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVGVzdERhdGFQcm94eTtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLy9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDkuLvopoHmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5EYXRhIGV4dGVuZHMgQmFzZURhdGEge1xyXG4gICAgLy9cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwic3JjL19UL0RhdGEvQmFzZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDorr7nva7mlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvKiog5piv5ZCm5omT5byA6Z+z5pWIICovXHJcbiAgICBpZk9wZW5Tb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKiog5piv5ZCm5omT5byA6IOM5pmv6Z+z5LmQICovXHJcbiAgICBpZk9wZW5NdXNpYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6ZyH5YqoICovXHJcbiAgICBpZk9wZW5WaWJyYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnREYXRhIGV4dGVuZHMgQmFzZURhdGEgeyB9IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOetvuWIsOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkRhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICAvL1xyXG59IiwiaW1wb3J0IEJhc2VEYXRhIGZyb20gXCJzcmMvX1QvRGF0YS9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOa1i+ivleaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdERhdGEgZXh0ZW5kcyBCYXNlRGF0YSB7XHJcbiAgICBudW1iZXI6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpbmc6IHN0cmluZyA9ICdzdHJpbmcg5Lit5paHIOeJueauiuespuWPt++8gUAj77+lJeKApuKApiYq77yI77yJ4oCU4oCUK++8gUAj77+lMTIzIUAjJCVeJiooKV8rLC8uXFxcIic7XHJcbiAgICBib29sZWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2JqZWN0OiB7XHJcbiAgICAgICAgYTogbnVtYmVyLFxyXG4gICAgICAgIGI6IHN0cmluZyxcclxuICAgICAgICBjOiBib29sZWFuXHJcbiAgICB9ID0ge1xyXG4gICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICBiOiAnYicsXHJcbiAgICAgICAgICAgIGM6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIHRlc3Q6IHN0cmluZyA9ICcnO1xyXG59IiwiaW1wb3J0IEJhc2VEZWJ1ZyBmcm9tIFwic3JjL19UL0RlYnVnL0Jhc2VEZWJ1Z1wiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbi8qKlxyXG4gKiDoh6rlrprkuYnosIPor5Xlr7nosaFcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURlYnVnIGV4dGVuZHMgQmFzZURlYnVnIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEN1c3RvbURlYnVnO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUluaXRMb2FkIGZyb20gXCIuL01haW4vR2FtZUluaXRMb2FkXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tIFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJQ29uTWFuYWdlciBmcm9tIFwiLi9VSUNvbi9VSUNvbk1hbmFnZXJcIjtcclxuaW1wb3J0IFRlc3RNYWluIGZyb20gXCIuL190ZXN0L1Rlc3RNYWluXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5YWl5Y+jXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFpbiB7XHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmuLjmiI/liJ3lp4vljJbliqDovb3lrp7kvotcclxuICAgICAgICBsZXQgX2dhbWVJbml0TG9hZDogR2FtZUluaXRMb2FkID0gbmV3IEdhbWVJbml0TG9hZCgpO1xyXG4gICAgICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgX2dhbWVJbml0TG9hZC5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0TG9hZENvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+WKoOi9veWujOaIkFxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdExvYWRDb20oKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJblkITkuKrnrqHnkIblmahcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5Zy65pmv566h55CG5ZmoXHJcbiAgICAgICAgVUlDb25NYW5hZ2VyLmluc3RhbmNlLmluaXQoKTsvL3Vp5o6n5Yi25Zmo566h55CG5ZmoXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpOy8v5pWw5o2u566h55CG5ZmoXHJcbiAgICAgICAgLy9cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+b5YWl5ri45oiPXHJcbiAgICBwcml2YXRlIGVudGVyR2FtZSgpIHtcclxuICAgICAgICAvL+i/m+WFpea4uOaIj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCfov5vlhaXmuLjmiI8nKSk7XHJcbiAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgLy8gVE9ETyDov5vlhaXmtYvor5XmqKHlnZdcclxuICAgICAgICBUZXN0TWFpbi5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAqL1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVDb21tb25CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVDb21tb24vR2FtZUNvbW1vbkJpbmRlclwiO1xyXG5pbXBvcnQgR2FtZU1haW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0dhbWVNYWluL0dhbWVNYWluQmluZGVyXCI7XHJcbmltcG9ydCBJbml0RW1wdHlTY3JlZW5CaW5kZXIgZnJvbSBcInNyYy9GR1VJL0luaXRFbXB0eVNjcmVlbi9Jbml0RW1wdHlTY3JlZW5CaW5kZXJcIjtcclxuaW1wb3J0IEluaXRMb2FkQmluZGVyIGZyb20gXCJzcmMvRkdVSS9Jbml0TG9hZC9Jbml0TG9hZEJpbmRlclwiO1xyXG5pbXBvcnQgX1Rlc3RCaW5kZXIgZnJvbSBcInNyYy9GR1VJL19UZXN0L19UZXN0QmluZGVyXCI7XHJcbmltcG9ydCBXaGl0ZVNjcmVlblQgZnJvbSBcInNyYy9XaGl0ZVNjcmVlblRcIjtcclxuaW1wb3J0IENvbmZpZ1QsIHsgSUJhc2VDb25maWdDb250YWluZXIgfSBmcm9tIFwic3JjL19UL0NvbmZpZy9Db25maWdUXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcInNyYy9fVC9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgeyBGR1VJUGFjayB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9GR1VJUGFja1wiO1xyXG5pbXBvcnQgQmFzZUluaXRMb2FkIGZyb20gXCJzcmMvX1QvTWFpbi9CYXNlSW5pdExvYWRcIjtcclxuaW1wb3J0IENvbVJlc1VybCBmcm9tIFwic3JjL19UL1Jlcy9Db21SZXNVcmxcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwic3JjL19UL1Jlcy9FS2V5UmVzTmFtZVwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwic3JjL19UL1Jlcy9Fc3NlbnRpYWxSZXNVcmxzXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCJzcmMvX1QvUmVzL0tleVJlc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCJzcmMvX1QvUmVzL1Jlc0xvYWRJdGVtXCI7XHJcbmltcG9ydCB7IEVGb250IH0gZnJvbSBcIi4uL1Jlc0UvRUZvbnRcIjtcclxuaW1wb3J0IHsgRU11c2ljcyB9IGZyb20gXCIuLi9SZXNFL0VNdXNpY3NcIjtcclxuaW1wb3J0IHsgRVNvdW5kcyB9IGZyb20gXCIuLi9SZXNFL0VTb3VuZHNcIjtcclxuaW1wb3J0IEluaXRFbXB0eVNjcmVlblVJQ29uIGZyb20gXCIuLi9VSUNvbi9pbml0TG9hZC9pbml0RW1wdHlTY3JlZW5VSUNvblwiO1xyXG5pbXBvcnQgSW5pdExvYWRVSUNvbiBmcm9tIFwiLi4vVUlDb24vaW5pdExvYWQvaW5pdExvYWRVSUNvblwiO1xyXG5pbXBvcnQgeyBCdWlsZENvbmZpZ1RzIH0gZnJvbSBcIi4uL19jb25maWcvQnVpbGRDb25maWdUc1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4uL19jb25maWcvX1Rlc3RDb25zdFwiO1xyXG5pbXBvcnQgeyBfRUFsbFNjZW5lUHJlZmFic05hbWVzIH0gZnJvbSBcIi4uL19wcmVmYWJzTmFtZS9fRUFsbFNjZW5lUHJlZmFic05hbWVzXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuaW1wb3J0IExvYWRTdWJwYWNrYWdlc0NvbmZpZywgeyBDRE5TdWJwYWNrYWdlc0NvbmZpZyB9IGZyb20gXCJzcmMvQ29uZmlnL1N1YnBhY2thZ2VzQ29uZmlnXCI7XHJcblxyXG4vKipcclxuICog5ri45oiP5Yid5aeL5YyW5Yqg6L29XHJcbiAqICEg5Y+q6LSf6LSj5ri45oiP5Yid5aeL5YyW5ZKM5Yqg6L2977yM5LiN5YGa5YW25LuW5LqL5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdExvYWQgZXh0ZW5kcyBCYXNlSW5pdExvYWQge1xyXG4gICAgLyoqIOeZveWxj3Vp5o6n5Yi25ZmoICovXHJcbiAgICAvLyBwcml2YXRlIG1faW5pdEVtcHR5U2NyZWVuVUlDb246IEluaXRFbXB0eVNjcmVlblVJQ29uO1xyXG4gICAgLyoqIOWIneWni+WMluWKoOi9vXVp5o6n5Yi25ZmoICovXHJcbiAgICAvLyBwcml2YXRlIG1faW5pdExvYWRVSUNvbjogSW5pdExvYWRVSUNvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbpnIDopoHnmoR1aeaOp+WItuWZqOWunuS+i1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbiA9IG5ldyBJbml0RW1wdHlTY3JlZW5VSUNvbigpO1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbmV3IEluaXRMb2FkVUlDb24oKTtcclxuICAgICAgICAvL+iuvue9rui3r+W+hFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpIHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5hZGRSZXNVcmwoX2ksIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlJvb3RSZXMpICsgYCR7X2l9L2ApOy8v5rOo5YWl6aKE5Yi25L2T6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u6aKE5Yi25L2T5Zy65pmv5a+554WnXHJcbiAgICAgICAgRXNzZW50aWFsUmVzVXJscy5zZXRQcmVmYWJTY2VuZU5hbWVzKF9FQWxsU2NlbmVQcmVmYWJzTmFtZXMpO1xyXG4gICAgICAgIC8v5L+u5pS55YiG5YyF6Lev5b6E5ZKMY2Ru6Lev5b6EXHJcbiAgICAgICAgTG9hZFN1YnBhY2thZ2VzQ29uZmlnLnN1YnBhY2thZ2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgS2V5UmVzTWFuYWdlci5lZGl0S2V5UmVzTGlzdChpdGVtLm5hbWUsIGl0ZW0ucm9vdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ0ROU3VicGFja2FnZXNDb25maWcuQ0ROVVJMcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIEtleVJlc01hbmFnZXIuZWRpdEtleVJlc0xpc3QoaXRlbS5uYW1lLCBpdGVtLnJvb3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIGxldCBfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gW107XHJcbiAgICAgICAgLy/ojrflj5ZmZ3Vp5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdEZHVWlMb2FkSXRlbXMoX2xvYWRJdGVtcyk7XHJcbiAgICAgICAgLy/ms6jlhaXphY3nva7ooajliqDovb3poblcclxuICAgICAgICB0aGlzLmltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICAgICAgdGhpcy5pbW1pdE90aGVyTG9hZEl0ZW1zKF9sb2FkSXRlbXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9sb2FkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhaVmZ3Vp55qE5omA5pyJ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0RkdVaUxvYWRJdGVtcyhfbG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdKSB7XHJcbiAgICAgICAgLy/lhYjnu5HlrprmiYDmnIl1aVxyXG4gICAgICAgIHRoaXMuRkdVSUJpbmRlcigpO1xyXG4gICAgICAgIC8v5Yqg6L29Zmd1aeWMhVxyXG4gICAgICAgIC8vIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ0luaXRFbXB0eVNjcmVlbicsIHVuZGVmaW5lZCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmluaXRFbXB0eVNjcmVlbikpKTsvL+eZveWxj3Vp5YyFXHJcbiAgICAgICAgLy8gX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnSW5pdExvYWQnLCAwLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuaW5pdExvYWQpKSk7Ly/liqDovb3nlYzpnaLljIVcclxuICAgICAgICBfbG9hZEl0ZW1zLnB1c2godGhpcy5nZXRGR1VJTG9hZEl0ZW1zKCdHYW1lQmFnJykpOy8v5Y6f5YyF77yM6YCa5bi45Li66LWE5rqQ5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZUNvbW1vbicpKTsvL+WFrOWFseWMhVxyXG4gICAgICAgIF9sb2FkSXRlbXMucHVzaCh0aGlzLmdldEZHVUlMb2FkSXRlbXMoJ19UZXN0JykpOy8v5rWL6K+V5YyFXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKHRoaXMuZ2V0RkdVSUxvYWRJdGVtcygnR2FtZU1haW4nLCAwKSk7Ly/kuLvljIVcclxuICAgIH1cclxuICAgIC8vZmd1aee7keWumlxyXG4gICAgcHJpdmF0ZSBGR1VJQmluZGVyKCkge1xyXG4gICAgICAgIEluaXRFbXB0eVNjcmVlbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICAgICAgSW5pdExvYWRCaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIEdhbWVDb21tb25CaW5kZXIuYmluZEFsbCgpO1xyXG4gICAgICAgIF9UZXN0QmluZGVyLmJpbmRBbGwoKTtcclxuICAgICAgICBHYW1lTWFpbkJpbmRlci5iaW5kQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkZHVUnliqDovb3poblcclxuICAgIHByaXZhdGUgZ2V0RkdVSUxvYWRJdGVtcyhfbmFtZTogc3RyaW5nLCBfYXRsaWFzQ291bnQ/OiBudW1iZXIsIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyKTogUmVzTG9hZEl0ZW0ge1xyXG4gICAgICAgIGxldCBfZmd1aVJlczogYW55W10gPSBbXTtcclxuICAgICAgICAvL+azqOWFpeWMhei3r+W+hFxyXG4gICAgICAgIG5ldyBGR1VJUGFjayhFc3NlbnRpYWxSZXNVcmxzLkZHVUlQYWNrVVJMKF9uYW1lKSwgX2F0bGlhc0NvdW50KS5nZXRSZXNVUkwoX2ZndWlSZXMpO1xyXG4gICAgICAgIC8v5Yib5bu65Yqg6L296aG5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNMb2FkSXRlbShfZmd1aVJlcywgRVJlc0xvYWRNb2RlbC5EMiwgX25hbWUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+a3u+WKoOWMhVxyXG4gICAgICAgICAgICB0aGlzLmFkZEZHVUlQYWNrYWdlKF9uYW1lKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2NvbUJhY2sgJiYgX2NvbUJhY2sucnVuKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgLy/mt7vliqDljIVcclxuICAgIHByaXZhdGUgYWRkRkdVSVBhY2thZ2UoX25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoRXNzZW50aWFsUmVzVXJscy5GR1VJUGFja1VSTChfbmFtZSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKEUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2FybignRkdVSea3u+WKoOWMheaciemXrumimOOAgicsIF9uYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl6YWN572u6KGo5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0Q29uZmlnTG9hZEl0ZW1zKF9sb2FkSXRlbXM6IFJlc0xvYWRJdGVtW10pIHtcclxuICAgICAgICAvL+mFjee9ruihqFxyXG4gICAgICAgIGxldCBfY29uZmlnUmVzOiBhbnlbXSA9IEJ1aWxkQ29uZmlnVHMuZ2V0QWxsQ29uZmlnKCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBFc3NlbnRpYWxSZXNVcmxzLkNvbmZpZ0pzb25VUkwoKGl0ZW0gYXMgSUJhc2VDb25maWdDb250YWluZXIpLmZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WcuuaZr2pzb27mlofku7ZcclxuICAgICAgICBsZXQgc2NlbmVKc29uUmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9FQWxsRXhwb3J0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHNjZW5lSnNvblJlcy5wdXNoKEVzc2VudGlhbFJlc1VybHMuU2NlbmVDb25maWdVUkwoX0VBbGxFeHBvcnRTY2VuZU5hbWVbX2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShbLi4uX2NvbmZpZ1JlcywgLi4uc2NlbmVKc29uUmVzXSwgRVJlc0xvYWRNb2RlbC5EMiwgJ2NvbmZpZycsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIneWni+WMluWFqOmDqOmFjee9ruihqOWGheWuuVxyXG4gICAgICAgICAgICBDb25maWdULkJ1aWxkQ29uZmlncyhCdWlsZENvbmZpZ1RzLmdldEFsbENvbmZpZygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2dMaWdodCgn5omA5pyJ6YWN572u6KGo5YaF5a6577yaJywgQnVpbGRDb25maWdUcy5nZXRBbGxDb25maWcoKSkpO1xyXG4gICAgICAgIH0pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfphY3nva7ooajliqDovb3ov5vluqYnLCBpKTtcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YWl5YW25LuW6LWE5rqQ5Yqg6L296aG5XHJcbiAgICBwcml2YXRlIGltbWl0T3RoZXJMb2FkSXRlbXMoX2xvYWRJdGVtczogUmVzTG9hZEl0ZW1bXSkge1xyXG4gICAgICAgIGxldCBfYXVkaW9zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVNdXNpY3MpIHtcclxuICAgICAgICAgICAgRU11c2ljc1tfaV0gJiYgX2F1ZGlvcy5wdXNoKENvbVJlc1VybC5NdXNpY1VSTChFTXVzaWNzW19pXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBFU291bmRzKSB7XHJcbiAgICAgICAgICAgIEVTb3VuZHNbX2ldICYmIF9hdWRpb3MucHVzaChDb21SZXNVcmwuU291bmRVUkwoRVNvdW5kc1tfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfYXVkaW9zLCBFUmVzTG9hZE1vZGVsLkQyLCAnYXVkaW8nLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOaciemfs+aViOi1hOa6kO+8micsIF9hdWRpb3MpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgbGV0IF9mb250OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVGb250KSB7XHJcbiAgICAgICAgICAgIEVGb250W19pXSAmJiBfZm9udC5wdXNoKEVzc2VudGlhbFJlc1VybHMuRm9udFVSTChFRm9udFtfaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2xvYWRJdGVtcy5wdXNoKG5ldyBSZXNMb2FkSXRlbShfZm9udCwgRVJlc0xvYWRNb2RlbC5EMiwgJ2ZvbnQnLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJgOacieWtl+S9k+i1hOa6kO+8micsIF9mb250KTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m95bGP5pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRFbXB0eVNjcmVlbigpIHtcclxuICAgICAgICAvL+aYvuekuueZveWxj3VpXHJcbiAgICAgICAgLy8gdGhpcy5tX2luaXRFbXB0eVNjcmVlblVJQ29uLlNob3coKTtcclxuICAgIH1cclxuICAgIC8v5Yqg6L295pi+56S6XHJcbiAgICBwcml2YXRlIGluaXRMb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0RW1wdHlTY3JlZW5VSUNvbi5IaWRlKCk7Ly/pmpDol49cclxuICAgICAgICAvLyB0aGlzLm1faW5pdEVtcHR5U2NyZWVuVUlDb24gPSBudWxsOy8v5riF6Zmk5byV55SoXHJcbiAgICAgICAgLy8gLy/mmL7npLrliqDovb11aVxyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQbGFuKF9pOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5ri45oiP5Yqg6L296L+b5bqmLT4nLCBfaSk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubV9pbml0TG9hZFVJQ29uICYmIHRoaXMubV9pbml0TG9hZFVJQ29uLmlmU2hvdykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm1faW5pdExvYWRVSUNvbi5zZXRQbGFuKF9pKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgV2hpdGVTY3JlZW5ULnNldFBsYW4oX2kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQ29tKCkge1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uLkhpZGUoKTsvL+makOiXj1xyXG4gICAgICAgIC8vIHRoaXMubV9pbml0TG9hZFVJQ29uID0gbnVsbDsvL+a4hemZpOW8leeUqFxyXG4gICAgICAgIFdoaXRlU2NyZWVuVC5jbG9zZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbVJlc1VybCBmcm9tIFwic3JjL19UL1Jlcy9Db21SZXNVcmxcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBTZXREYXRhUHJveHkgfSBmcm9tIFwiLi4vRGF0YS9TZXREYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgRU11c2ljcyB9IGZyb20gXCIuLi9SZXNFL0VNdXNpY3NcIjtcclxuaW1wb3J0IHsgRVNvdW5kcyB9IGZyb20gXCIuLi9SZXNFL0VTb3VuZHNcIjtcclxuLyoqXHJcbiAqIOmfs+aViOeuoeeQhuexu1xyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEF1ZGlvTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLy/lvZPliY3mkq3mlL7nmoRiZ21cclxuICAgIHByaXZhdGUgbV9vbkJHTTogTGF5YS5Tb3VuZENoYW5uZWw7XHJcblxyXG4gICAgLy/lvZPliY3mkq3mlL7nmoTpn7PmlYjliJfooahcclxuICAgIHByaXZhdGUgbV9vblNvdW5kTGlzdDogU2V0PExheWEuU291bmRDaGFubmVsPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/moLnmja7mlbDmja7orr7nva7og4zmma/pn7PkuZDlkozpn7PmlYjmmK/lkKbpnZnpn7NcclxuICAgICAgICBBdWRpb01hbmFnZXIuc291bmRNdXRlZCA9ICFTZXREYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5pZk9wZW5Tb3VuZDtcclxuICAgICAgICBBdWRpb01hbmFnZXIubXVzaWNNdXRlZCA9ICFTZXREYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5pZk9wZW5NdXNpYztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+S5kOWSjOaJgOaciemfs+aViOaYr+WQpumdmemfs+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0IG11dGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omA5pyJ6Z+z5pWI77yI5LiN5YyF5ous6IOM5pmv6Z+z5LmQ77yJ5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgc291bmRNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6Z+z5LmQ77yI5LiN5YyF5ous6Z+z5pWI77yJ5piv5ZCm6Z2Z6Z+z44CCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXQgbXVzaWNNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aViOaaguWBnFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhdXNlU291bmQoKSB7XHJcbiAgICAgICAgLy/mmoLlgZzmiYDmnInpn7PmlYhcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI57un57utXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzdW1lU291bmQoKSB7XHJcbiAgICAgICAgLy/nu6fnu63mkq3mlL7lvZPliY3mkq3mlL7nmoTpn7PmlYhcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25Tb3VuZExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VNdXNpYygpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tX29uQkdNICYmIHRoaXMuaW5zdGFuY2UubV9vbkJHTS5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumfs+aViOmfs+mHj1xyXG4gICAgICogQHBhcmFtIF9uIOmfs+mHjyAwfjFcclxuICAgICAqIEBwYXJhbSBfdXJsIOi1hOa6kOWcsOWdgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNvdW5kVm9sdW1lKF9uOiBudW1iZXIgPSAxLCBfdXJsPzogc3RyaW5nKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc2V0U291bmRWb2x1bWUoX24sIF91cmwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7og4zmma/pn7PkuZDpn7Pph49cclxuICAgICAqIEBwYXJhbSBfbiDpn7Pph48gMH4xXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TXVzaWNWb2x1bWUoX246IG51bWJlciA9IDEpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zZXRNdXNpY1ZvbHVtZShfbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PmlYjjgILpn7PmlYjlj6/ku6XlkIzml7bmkq3mlL7lpJrkuKrjgIJcclxuICAgICAqIEBwYXJhbSBuYW1lIOmfs+aViOWQjeWtl1xyXG4gICAgICogQHBhcmFtIGxvb3BzIOW+queOr+asoeaVsCww6KGo56S65peg6ZmQ5b6q546v44CCXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUg5aOw6Z+z5pKt5pS+5a6M5oiQ5Zue6LCDICBIYW5kbGVy5a+56LGh44CCXHJcbiAgICAgKiBAcGFyYW0gc291bmRDbGFzcyDkvb/nlKjlk6rkuKrlo7Dpn7Pnsbvov5vooYzmkq3mlL7vvIxudWxs6KGo56S66Ieq5Yqo6YCJ5oup44CCXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRUaW1lIOWjsOmfs+aSreaUvui1t+Wni+aXtumXtOOAglxyXG4gICAgICogQHJldHVybiBTb3VuZENoYW5uZWzlr7nosaHvvIzpgJrov4fmraTlr7nosaHlj6/ku6Xlr7nlo7Dpn7Pov5vooYzmjqfliLbvvIzku6Xlj4rojrflj5blo7Dpn7Pkv6Hmga/jgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlTb3VuZChuYW1lOiBFU291bmRzLCBsb29wcz86IG51bWJlciwgY29tcGxldGU/OiBsYXlhLnV0aWxzLkhhbmRsZXIsIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LCBzdGFydFRpbWU/OiBudW1iZXIpOiBsYXlhLm1lZGlhLlNvdW5kQ2hhbm5lbCB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfc291bmQ6IExheWEuU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKENvbVJlc1VybC5Tb3VuZFVSTChuYW1lKSwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubV9vblNvdW5kTGlzdC5hZGQoX3NvdW5kKTtcclxuICAgICAgICByZXR1cm4gX3NvdW5kO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZDjgILog4zmma/pn7PkuZDlkIzml7blj6rog73mkq3mlL7kuIDkuKrvvIzlpoLmnpzlnKjmkq3mlL7og4zmma/pn7PkuZDml7blho3mrKHosIPnlKjmnKzmlrnms5XvvIzkvJrlhYjlgZzmraLkuYvliY3nmoTog4zmma/pn7PkuZDvvIzlho3mkq3mlL7lvZPliY3nmoTog4zmma/pn7PkuZDjgIJcclxuICAgICAqIEBwYXJhbSBuYW1lIOiDjOaZr+mfs+aViOWQjeWtl1xyXG4gICAgICogQHBhcmFtIGxvb3BzIOW+queOr+asoeaVsCww6KGo56S65peg6ZmQ5b6q546v44CCXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUg5aOw6Z+z5pKt5pS+5a6M5oiQ5Zue6LCDLGNvbXBsZXRlIOe7k+aenOWPguaVsCB0cnVlOiDmkq3mlL7lrozmiJAsIGZhbHNlL3VuZGVmaW5lZCDvvJpzdG9w6Kem5Y+R55qEY29tcGxldGXjgIJcclxuICAgICAqIEBwYXJhbSBzdGFydFRpbWUg5aOw6Z+z5pKt5pS+6LW35aeL5pe26Ze044CCXHJcbiAgICAgKiBAcmV0dXJuIFNvdW5kQ2hhbm5lbOWvueixoe+8jOmAmui/h+atpOWvueixoeWPr+S7peWvueWjsOmfs+i/m+ihjOaOp+WItu+8jOS7peWPiuiOt+WPluWjsOmfs+S/oeaBr+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheU11c2ljKG5hbWU6IEVNdXNpY3MsIGxvb3BzPzogbnVtYmVyLCBjb21wbGV0ZT86IGxheWEudXRpbHMuSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKTogbGF5YS5tZWRpYS5Tb3VuZENoYW5uZWwge1xyXG4gICAgICAgIGlmICghbmFtZSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgX211c2ljOiBMYXlhLlNvdW5kQ2hhbm5lbCA9IExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhDb21SZXNVcmwuTXVzaWNVUkwobmFtZSksIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fb25CR00gPSBfbXVzaWM7XHJcbiAgICAgICAgcmV0dXJuIF9tdXNpYztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatoumfs+aViOaSreaUvuOAglxyXG4gICAgICogQHBhcmFtIHNvdW5kc05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wU291bmQoc291bmRzTmFtZTogRVNvdW5kcyk6IHZvaWQge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BTb3VuZChDb21SZXNVcmwuU291bmRVUkwoc291bmRzTmFtZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLog4zmma/pn7PmlYjmkq3mlL7jgIJcclxuICAgICAqIEBwYXJhbSBtdXNpY05hbWUg6Z+z5pWI5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdG9wTXVzaWMobXVzaWNOYW1lOiBFTXVzaWNzKTogdm9pZCB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcFNvdW5kKENvbVJlc1VybC5NdXNpY1VSTChtdXNpY05hbWUpKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlrZfkvZPotYTmupDmnprkuL4gKOS8mumihOWKoOi9vSlcclxuICogISDlv4XpobvmmK/lrZfnrKbkuLLvvIzkuI3og73mmK/mlbDlrZflkKbliJnkvJrliqDkuIrlj43lsITlsZ7mgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIEVGb250IHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6IOM5pmv6Z+z5LmQICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFTXVzaWNzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8vXHJcbn0iLCIvKipcclxuICog5omA5pyJ6Z+z5pWIICjkvJrpooTliqDovb0pXHJcbiAqICEg5b+F6aG75piv5a2X56ym5Liy77yM5LiN6IO95piv5pWw5a2X5ZCm5YiZ5Lya5Yqg5LiK5Y+N5bCE5bGe5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU291bmRzIHtcclxuICAgIG51bGwgPSAnJyxcclxuICAgIC8v6Z+z5pWIXHJcbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcInNyYy9fVC9EMy9zY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCB7IF9FQWxsRXhwb3J0U2NlbmVOYW1lIH0gZnJvbSBcIi4uL19zY2VuZU5hbWUvX0VBbGxFeHBvcnRTY2VuZU5hbWVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/nrqHnkIblmahcclxuICog566h55CG5Zy65pmv77yM6I635Y+W5Zy65pmv77yM54S25ZCO6YCa6L+H5Zy65pmv5a6e5L6L5p6E5bu65Zy65pmv5Lit5a+56LGh55qE6IqC54K5XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvKiog5Zy65pmv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fc2NlbmVMaXN0OiB7XHJcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBTY2VuZSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WcuuaZr+WQjeWtl+iOt+WPluWcuuaZr1xyXG4gICAgICogQHBhcmFtIF9uYW1lIOWcuuaZr+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmU8UyBleHRlbmRzIFNjZW5lPihfbmFtZTogc3RyaW5nKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUxpc3RbX25hbWVdIGFzIFM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhajpg6jlnLrmma9cclxuICAgICAgICBmb3IgKGxldCBfaSBpbiBfRUFsbEV4cG9ydFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBfbmFtZSA9IF9FQWxsRXhwb3J0U2NlbmVOYW1lW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tX3NjZW5lTGlzdFtfbmFtZV0gPSBuZXcgU2NlbmUoX25hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy/moLnmja7kuI3lkIznmoTlnLrmma/lrp7kvovljJbkuI3lkIznmoTnsbtcclxuICAgICAgICAgICAgc3dpdGNoIChfbmFtZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIHVp6Z2i5p2/5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFVUlQYW5wbCB7XHJcbiAgICAvKiog5Li76aG16Z2iICovXHJcbiAgICBtYWluID0gJ21haW4nLFxyXG59IiwiaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcbmltcG9ydCBGR1VJX1BHYW1lTWFpbiBmcm9tIFwic3JjL0ZHVUkvR2FtZU1haW4vRkdVSV9QR2FtZU1haW5cIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOS4u+mhtemdouaOp+WItuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblVJQ29uIGV4dGVuZHMgQmFzZVNpbmdsZVVJQ29uPEZHVUlfUEdhbWVNYWluPntcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE1haW5VSUNvbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcbiAgICAvKiogVUkgKi9cclxuICAgIHByb3RlY3RlZCBfVUkgPSBGR1VJX1BHYW1lTWFpbjtcclxuXHJcbiAgICAvKiog5pi+56S65ZCO55qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX29uU2hvdygpIHsgfVxyXG5cclxuICAgIC8qKiDpmpDol4/kuYvliY3lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfb25IaWRlQmVmb3JlKCkgeyB9XHJcbn0iLCJpbXBvcnQgQmFzZVVJQ29uTWFuYWdlciBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVVJQ29uTWFuYWdlclwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcbmltcG9ydCBVSUNvbk1hbmFnZXJQcm94eSBmcm9tIFwiLi9VSUNvbk1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgeyBFVUlQYW5wbCB9IGZyb20gXCIuL0VVSVBhbnBsXCI7XHJcbmltcG9ydCBNYWluVUlDb24gZnJvbSBcIi4vUGFuZWwvTWFpblVJQ29uXCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uTWFuYWdlciBleHRlbmRzIEJhc2VVSUNvbk1hbmFnZXI8VUlDb25NYW5hZ2VyUHJveHk+IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IFVJQ29uTWFuYWdlcjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwg++8jOe7p+aJv+S9v+eUqO+8jOS4u+imgeiuvue9rnVp5YiX6KGo5ZKM5Luj55CG5ZmoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm1fdWlDb25MaXN0ID0ge1xyXG4gICAgICAgICAgICBbRVVJUGFucGwubWFpbl06IE1haW5VSUNvbi5pbnN0YW5jZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3VpUHJveHkgPSBVSUNvbk1hbmFnZXJQcm94eS5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VVSUNvbk1hbmFnZXJQcm94eSB9IGZyb20gXCJzcmMvX1QvRDIvRkdVSS9CYXNlVUlDb25NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuXHJcbi8qKlxyXG4gKiB1aeaOp+WItuWZqOeuoeeQhuWZqOS7o+eQhlxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb25NYW5hZ2VyUHJveHkgZXh0ZW5kcyBCYXNlVUlDb25NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogVUlDb25NYW5hZ2VyUHJveHk7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59IiwiaW1wb3J0IEZHVUlfVGVzdE1haW4gZnJvbSBcInNyYy9GR1VJL19UZXN0L0ZHVUlfVGVzdE1haW5cIjtcclxuaW1wb3J0IEJhc2VTaW5nbGVVSUNvbiBmcm9tIFwic3JjL19UL0QyL0ZHVUkvQmFzZVNpbmdsZVVJQ29uXCI7XHJcbmltcG9ydCBJbnN0YW5jZVQgZnJvbSBcInNyYy9fVC9Ucy9JbnN0YW5jZVRcIjtcclxuLyoqXHJcbiAqIOa1i+ivleS4u+mhtemdouaOp+WItuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1Rlc3RNYWluVUlDb24gZXh0ZW5kcyBCYXNlU2luZ2xlVUlDb248RkdVSV9UZXN0TWFpbj4ge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogX1Rlc3RNYWluVUlDb247XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG4gICAgLyoqIHVpICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJID0gRkdVSV9UZXN0TWFpbjtcclxufSIsIi8vIO+8gSDoh6rliqjlr7zlh7rvvIzor7fkuI3opoHkv67mlLlcclxuLy9cclxuaW1wb3J0IHsgX1NjZW5lTm9kZUNvbmZpZyB9IGZyb20gXCIuL19TY2VuZU5vZGVDb25maWdcIjtcclxuaW1wb3J0IHsgX1Rlc3RDb25maWcgfSBmcm9tIFwiLi9fVGVzdENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBfVGVzdENvbnN0IH0gZnJvbSBcIi4vX1Rlc3RDb25zdFwiO1xyXG5cclxuLyoqXHJcbiog5p6E5bu65YWo6YOo6YWN572u6KGoXHJcbiogISDoh6rliqjlr7zlh7pcclxuKi9cclxuZXhwb3J0IGNsYXNzIEJ1aWxkQ29uZmlnVHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInnmoTphY3nva7ooajlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbGxDb25maWcoKTogYW55W10ge1xyXG4gICAgICAgIGxldCBjb25maWdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGNvbmZpZ3MucHVzaChfU2NlbmVOb2RlQ29uZmlnKTtcclxuICAgICAgICBjb25maWdzLnB1c2goX1Rlc3RDb25maWcpO1xyXG4gICAgICAgIGNvbmZpZ3MucHVzaChfVGVzdENvbnN0KTtcclxuICAgICAgICByZXR1cm4gY29uZmlncztcclxuICAgIH1cclxufVxyXG4iLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfU2NlbmVOb2RlQ29uZmlnIGNvbmZpZ+mFjee9ruaWh+S7tlxyXG4gKiAhIOiHquWKqOWvvOWHuu+8jOS4jeimgeS/ruaUueWSjOebtOaOpeW8leeUqFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBfU2NlbmVOb2RlQ29uZmlnIHtcclxuICAgIC8qKiDphY3nva7ooajnsbvlnosgKi9cclxuICAgIGV4cG9ydCBjb25zdCB0eXBlOiBzdHJpbmcgPSAnY29uZmlnJztcclxuICAgIC8qKiDmlbDmja7nsbvlnosgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBEYXRhVHlwZSB7XHJcbiAgICAgICAvKiog5YWz5Y2haWRb5b+F6KaBXSAqL1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAvKiog5YWz5Y2h5ZCN5a2X77yM5Y+v5Lul6YCa6L+H5ZCN5a2X6I635Y+W5YWz5Y2h5pWw5o2uICovXHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgLyoqIOaJgOWxnuWcuuaZryAqL1xyXG4gICAgICAgIHNjZW5lOiBzdHJpbmc7XHJcbiAgICAgICAvKiog6IqC54K55ZCN5a2X5YiX6KGoICovXHJcbiAgICAgICAgbm9kZU5hbWU6IHN0cmluZztcclxuICAgIH1cclxuICAgIC8qKiBjb25maWfmlbDmja7liJfooaggKi9cclxuICAgIGV4cG9ydCB2YXIgZGF0YXM6IF9TY2VuZU5vZGVDb25maWcuRGF0YVR5cGVbXSA9IFtdO1xyXG4gICAgLyoqIOaWh+S7tuWQjeWtlyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSAnU2NlbmVOb2RlQ29uZmlnLmpzb24nO1xyXG59XHJcbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfVGVzdENvbmZpZyBjb25maWfphY3nva7mlofku7ZcclxuICogISDoh6rliqjlr7zlh7rvvIzkuI3opoHkv67mlLnlkoznm7TmjqXlvJXnlKhcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgX1Rlc3RDb25maWcge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25maWcnO1xyXG4gICAgLyoqIOaVsOaNruexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIERhdGFUeXBlIHtcclxuICAgICAgIC8qKiDmlbDlgLzvvIzkuI3nrqHku4DkuYjlgLzvvIzpg73kvJrovazmiJDlrZfnrKbkuLIgKi9cclxuICAgICAgICBuOiBudW1iZXI7XHJcbiAgICAgICAvKiog5a2X56ym5Liy77yM5LiN566h5piv5LuA5LmI5YC877yM5pyA5ZCO6YO95Lya6L2s5oiQ5a2X56ym5LiyICovXHJcbiAgICAgICAgczogc3RyaW5nO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvO+8jOS4jeeuoeS7gOS5iOWAvOmDveS8mui9rOW4g+WwlOWAvCAqL1xyXG4gICAgICAgIGI6IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgICAvKiogY29uZmln5pWw5o2u5YiX6KGoICovXHJcbiAgICBleHBvcnQgdmFyIGRhdGFzOiBfVGVzdENvbmZpZy5EYXRhVHlwZVtdID0gW107XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICBleHBvcnQgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9ICdUZXN0Q29uZmlnLmpzb24nO1xyXG59XHJcbiAgICAiLCIvLyDvvIEg6Ieq5Yqo5a+85Ye677yM6K+35LiN6KaB5L+u5pS5XHJcbi8vXHJcbi8qKlxyXG4gKiBfVGVzdENvbnN0IGNvbnN06YWN572u5paH5Lu2XHJcbiAqICEg6Ieq5Yqo5a+85Ye677yM5LiN6KaB5L+u5pS55ZKM55u05o6l5byV55SoXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIF9UZXN0Q29uc3Qge1xyXG4gICAgLyoqIOmFjee9ruihqOexu+WeiyAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IHR5cGU6IHN0cmluZyA9ICdjb25zdCc7XHJcbiAgICAvKiog5pWw5o2u57G75Z6LICovXHJcbiAgICBleHBvcnQgY2xhc3MgRGF0YVR5cGUge1xyXG4gICAgICAgLyoqIOaVsOWAvOa1i+ivlSAqL1xyXG4gICAgICAgIG46IG51bWJlcjtcclxuICAgICAgIC8qKiDmlbDlgLzmtYvor5UyICovXHJcbiAgICAgICAgbjI6IG51bWJlcjtcclxuICAgICAgIC8qKiDmlbDlgLzmtYvor5UzICovXHJcbiAgICAgICAgbjM6IG51bWJlcjtcclxuICAgICAgIC8qKiDlrZfnrKbkuLLmtYvor5UgKi9cclxuICAgICAgICBzOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMiAqL1xyXG4gICAgICAgIHMyOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5a2X56ym5Liy5rWL6K+VMyAqL1xyXG4gICAgICAgIHMzOiBzdHJpbmc7XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VICovXHJcbiAgICAgICAgYjogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5UxICovXHJcbiAgICAgICAgYjI6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VMiAqL1xyXG4gICAgICAgIGIzOiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlSAqL1xyXG4gICAgICAgIGI0OiBib29sZWFuO1xyXG4gICAgICAgLyoqIOW4g+WwlOWAvOa1i+ivlTMgKi9cclxuICAgICAgICBiNTogYm9vbGVhbjtcclxuICAgICAgIC8qKiDluIPlsJTlgLzmtYvor5U0ICovXHJcbiAgICAgICAgYjY6IGJvb2xlYW47XHJcbiAgICAgICAvKiog5biD5bCU5YC85rWL6K+VNSAqL1xyXG4gICAgICAgIGI3OiBib29sZWFuO1xyXG4gICAgICAgLyoqIOWFtuS7luexu+Wei+a1i+ivlSAqL1xyXG4gICAgICAgIG86IGFueTtcclxuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UxICovXHJcbiAgICAgICAgbzI6IGFueTtcclxuICAgICAgIC8qKiDlhbbku5bnsbvlnovmtYvor5UyICovXHJcbiAgICAgICAgbzM6IGFueTtcclxuICAgIH1cclxuICAgIC8qKiBjb25zdOaVsOaNruWIl+ihqCAqL1xyXG4gICAgZXhwb3J0IHZhciBkYXRhOiBfVGVzdENvbnN0LkRhdGFUeXBlID0gbnVsbDtcclxuICAgIC8qKiDmlofku7blkI3lrZcgKi9cclxuICAgIGV4cG9ydCBjb25zdCBmaWxlTmFtZTogc3RyaW5nID0gJ1Rlc3RDb25zdC5qc29uJztcclxufVxyXG4gICAgIiwiLyoqXHJcbiAqIOaJgOacieWcuuaZr+WvueW6lOeahOmihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbFNjZW5lUHJlZmFic05hbWVzIHtcclxuICAgIFByZWZhYiA9ICdAQ3ViZUBAU3BoZXJlQCcsXHJcblxyXG59XHJcbi8vIiwiLyoqXHJcbiAqIOaJgOacieWvvOWHuuWcuuaZr+WQjeWtl1xyXG4gKiAhIOatpOaWh+S7tuaYr1VuaXR56Ieq5Yqo5a+85Ye655qE77yM5LiN6KaB5L+u5pS577yM5Lmf5LiN6KaB55u05o6l5L6d6LWW44CCXHJcbiAqL1xyXG5leHBvcnQgZW51bSBfRUFsbEV4cG9ydFNjZW5lTmFtZSB7XHJcbiAgICBTY2VuZSA9ICdTY2VuZScsXHJcblxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlQ29uZmlnUHJveHkgZnJvbSBcIi4uL0NvbmZpZ1Byb3h5L1NjZW5lTm9kZUNvbmZpZ1Byb3h5XCI7XHJcbmltcG9ydCBUZXN0Q29uc3RQcm94eSBmcm9tIFwiLi4vQ29uZmlnUHJveHkvVGVzdENvbnN0UHJveHlcIjtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7ooajmtYvor5VcclxuICovXHJcbkBJbnN0YW5jZVQuRGVjb3JhdGVJbnN0YW5jZSgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ1Rlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogQ29uZmlnVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflnLrmma/oioLngrnphY3nva7ooajlhoXlrrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhTY2VuZU5vZGVDb25maWdQcm94eS5pbnN0YW5jZS5kYXRhTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W4uOmHj+a1i+ivlemFjee9ruihqOWGheWuuScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRlc3RDb25zdFByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgeyBUZXN0RGF0YVByb3h5IH0gZnJvbSBcIi4uL0RhdGEvVGVzdERhdGFQcm94eVwiO1xyXG5pbXBvcnQgQ3VzdG9tRGVidWcgZnJvbSBcIi4uL0RlYnVnL0N1c3RvbURlYnVnXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5rWL6K+V57G7XHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBEYXRhVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7mtYvor5UnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgQ3VzdG9tRGVidWcuaW5zdGFuY2UuYWRkSXRlbSgnZGF0YVRlc3QnLCBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLmRhdGEpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7orr7nva7lm57osIMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw57uE6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLmFycmF5KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIFRlc3REYXRhUHJveHkuaW5zdGFuY2Uub2JqZWN0UHJveHlULmFkZE1vbml0b3IodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a+56LGh5bGe5oCn6KKr6K6+572uJyk7XHJcbiAgICAgICAgfSwgVGVzdERhdGFQcm94eS5pbnN0YW5jZS5kYXRhLm9iamVjdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBUZXN0RGF0YVByb3h5Lmluc3RhbmNlLm9iamVjdFByb3h5VC5hZGRNb25pdG9yKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WvueixoeWxnuaApyBhIOiiq+iuvue9ricpO1xyXG4gICAgICAgIH0sIFRlc3REYXRhUHJveHkuaW5zdGFuY2UuZGF0YS5vYmplY3QsICdhJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeVRlc3Qge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogTGlicmFyeVRlc3Q7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfml7bpl7Tlt6XlhbcnLCBkYXlqcygnMjAyMC8yLzIwJykpO1xyXG4gICAgICAgIC8vIC8v6L+Z6YeM5Y+q5pyJ5pys5Zyw6K6/6Zeu5omN6KGM77yM57q/5LiK6K6/6Zeu5Lya6Leo5Z+fXHJcbiAgICAgICAgLy8gYXhpb3MuZ2V0PHN0cmluZz4oJ2h0dHA6Ly9iYWlkdS5jb20nKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfor7fmsYLlt6Xlhbfor7fmsYLnmb7luqbnvZHpobUnLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBzdHJpbmc6IGRhdGEuZGF0YSxcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gLy9cclxuICAgICAgICAvLyBsZXQgYSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX+maj+acuuaJk+S5seaVsOe7hCcsIF8uc2h1ZmZsZShhKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1/pmo/mnLrlj5blgLzmlbDnu4QnLCBfLnNhbXBsZShhLCAyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tXYXJuKCdwYWtv5bel5YW3JywgcGFrbykpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrTG9nKCdheGlvc+W3peWFtycsIHR5cGVvZiBheGlvcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5cclxuLyoqXHJcbiAqIOexu+W6k+a1i+ivlVxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJUZXN0IHtcclxuICAgIC8qKiDljZXkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE90aGVyVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5zdGFuY2VUIGZyb20gXCJzcmMvX1QvVHMvSW5zdGFuY2VUXCI7XHJcblxyXG4vKipcclxuICog57G75bqT5rWL6K+VXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVGVzdCB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBQYWNrVGVzdDtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmiZPljIXmtYvor5U3MCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEluc3RhbmNlVCBmcm9tIFwic3JjL19UL1RzL0luc3RhbmNlVFwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuLi9TY2VuZS9TY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IF9UZXN0TWFpblVJQ29uIGZyb20gXCIuLi9VSUNvbi9fdGVzdC9fVGVzdE1haW5VSUNvblwiO1xyXG5pbXBvcnQgQ29uZmlnVGVzdCBmcm9tIFwiLi9Db25maWdUZXN0XCI7XHJcbmltcG9ydCBEYXRhVGVzdCBmcm9tIFwiLi9EYXRhVGVzdFwiO1xyXG5pbXBvcnQgTGlicmFyeVRlc3QgZnJvbSBcIi4vTGlicmFyeVRlc3RcIjtcclxuaW1wb3J0IE90aGVyVGVzdCBmcm9tIFwiLi9PdGhlclRlc3RcIjtcclxuaW1wb3J0IFBhY2tUZXN0IGZyb20gXCIuL1BhY2tUZXN0XCI7XHJcblxyXG4vKipcclxuICog5rWL6K+V5Li76ISa5pysXHJcbiAqL1xyXG5ASW5zdGFuY2VULkRlY29yYXRlSW5zdGFuY2UoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0TWFpbiB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBUZXN0TWFpbjtcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v5p6E5bu6U2NlbmXlnLrmma/kuIvnmoRkZWJ1Z+iKgueCuVxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5nZXRTY2VuZSgnU2NlbmUnKVxyXG4gICAgICAgICAgICAuZ2V0U2NlbmVOb2RlKCdkZWJ1ZycpXHJcbiAgICAgICAgICAgIC5hc3luY0J1aWxkKClcclxuICAgICAgICAgICAgLnRoZW4oKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3lnLrmma8nLCBub2RlLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3oioLngrknLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdWJl57K+54G1Jywgbm9kZS5nZXROb2RlKCdDdWJlJykpO1xyXG4gICAgICAgICAgICAgICAgLy/kuLror6XlnLrmma/orr7nva7njq/looNcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NlbmUuc2V0RW52aXJvbm1lbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mmL7npLrmtYvor5V1aVxyXG4gICAgICAgIF9UZXN0TWFpblVJQ29uLmluc3RhbmNlLlNob3coKTtcclxuICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIERhdGFUZXN0Lmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgLy/nsbvlupPmtYvor5VcclxuICAgICAgICBMaWJyYXJ5VGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v6YWN572u6KGo5rWL6K+VXHJcbiAgICAgICAgQ29uZmlnVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgICAgIC8v5omT5YyF5rWL6K+VXHJcbiAgICAgICAgUGFja1Rlc3QuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICAvL+WFtuS7lua1i+ivlVxyXG4gICAgICAgIE90aGVyVGVzdC5pbnN0YW5jZS5zdGFydCgpO1xyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcbiAgICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6IHN0cmluZyA9IFwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOiBzdHJpbmcgPSBcImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lTWFpbiBmcm9tIFwiLi9HYW1lL0dhbWVNYWluXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFdoaXRlU2NyZWVuVCBmcm9tIFwiLi9XaGl0ZVNjcmVlblRcIjtcclxuaW1wb3J0IFRNYWluIGZyb20gXCIuL19UL1RNYWluXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdFx0Ly/liJ3lp4vljJbmoYbmnrZcclxuXHRcdFRNYWluLmluaXRGcmFtZSgpO1xyXG5cdFx0LyoqIOato+W8j+W8gOWni++8jOWKoOi9veeZveWxj3VpICMyOGRmOTkgKi9cclxuXHRcdFdoaXRlU2NyZWVuVC5sb2FkKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdC8v5Yid5aeL5YyW5ri45oiPXHJcblx0XHRcdFRNYWluLmluaXRHYW1lKCk7XHJcblx0XHRcdC8v5omT5byA55m95bGPXHJcblx0XHRcdFdoaXRlU2NyZWVuVC5vcGVuKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0Ly/muLjmiI/lhaXlj6NcclxuXHRcdFx0XHRuZXcgR2FtZU1haW4oKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7IiwiLyoqXHJcbiAqIOW5s+WPsOWFrOWFseS6i+S7tlxyXG4gKi9cclxuZXhwb3J0IGVudW0gUGxhdGZvcm1Db21tb25FdmVudCB7XHJcbiAgICBQQVVTRV9BVURJTyA9IFwiUEFVU0VfQVVESU9cIixcclxuICAgIFJFU1VNX0FVRElPID0gXCJSRVNVTV9BVURJT1wiLFxyXG4gICAgQURfQ09ORklHX0dFVFRFRCA9IFwiQURfQ09ORklHX0dFVFRFRFwiLFxyXG4gICAgU0VMRl9BRF9JTklURUQgPSBcIlNFTEZfQURfSU5JVEVEXCIsXHJcbn0iLCJpbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuL1BsYXRmb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOeZvuW6puWwj+a4uOaIj+aVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQkREYXRhIGV4dGVuZHMgUGxhdGZvcm1EYXRhIHtcclxuICAgIC8qKiBiZOS4k+eUqHNpZCAqL1xyXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xyXG4gICAgLyoqIOW6lOeUqElEICovXHJcbiAgICBwdWJsaWMgYXBwSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGFwcEtleTogc3RyaW5nID0gJyc7XHJcbiAgICAvKiog5bm/5ZGKaWQgKi9cclxuICAgIHB1YmxpYyBiYW5uZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcmV3YXJkVmlkZW9JZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgaW50ZXJzdGl0aWFsSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG5hdGl2ZUlkOiBzdHJpbmcgPSAnJztcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgbmF0aXZlQmFubmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZUljb25JZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgbmF0aXZlaW50ZXJzdGl0aWFsSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWlucGFnZUlkczogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgc2hhcmVJZDogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuL1BsYXRmb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIE9QUE/lsI/muLjmiI/mlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QUE9EYXRhIGV4dGVuZHMgUGxhdGZvcm1EYXRhIHtcclxuICAgIC8qKiDlupTnlKhJRCAqL1xyXG4gICAgcHVibGljIGFwcElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBhcHBLZXk6IHN0cmluZyA9ICcnO1xyXG4gICAgLyoqIOW5v+WRimlkICovXHJcbiAgICBwdWJsaWMgYmFubmVySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHJld2FyZFZpZGVvSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGludGVyc3RpdGlhbElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBuYXRpdmVJZDogc3RyaW5nID0gJyc7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVJY29uSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWludGVyc3RpdGlhbElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVpbnBhZ2VJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvL1xyXG4gICAgcHVibGljIHNoYXJlSWQ6IHN0cmluZyA9ICcnO1xyXG59IiwiLyoqXHJcbiAqIOW5s+WPsOaVsOaNruexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1EYXRhIHtcclxuICAgIC8qKiDlupTnlKhJRCAqL1xyXG4gICAgcHVibGljIGFwcElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBhcHBLZXk6IHN0cmluZyA9ICcnO1xyXG4gICAgLyoqIOW5v+WRimlkICovXHJcbiAgICBwdWJsaWMgYmFubmVySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHJld2FyZFZpZGVvSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGludGVyc3RpdGlhbElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBuYXRpdmVJZDogc3RyaW5nID0gJyc7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVJY29uSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWludGVyc3RpdGlhbElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVpbnBhZ2VJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvL+WIhuS6q2lkXHJcbiAgICBwdWJsaWMgc2hhcmVJZDogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuL1BsYXRmb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIFFR5bCP5ri45oiP5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRUURhdGEgZXh0ZW5kcyBQbGF0Zm9ybURhdGEge1xyXG4gICAgLyoqIOW6lOeUqElEICovXHJcbiAgICBwdWJsaWMgYXBwSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGFwcEtleTogc3RyaW5nID0gJyc7XHJcbiAgICAvKiog5bm/5ZGKaWQgKi9cclxuICAgIHB1YmxpYyBiYW5uZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcmV3YXJkVmlkZW9JZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgaW50ZXJzdGl0aWFsSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG5hdGl2ZUlkOiBzdHJpbmcgPSAnJztcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgbmF0aXZlQmFubmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZUljb25JZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgbmF0aXZlaW50ZXJzdGl0aWFsSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWlucGFnZUlkczogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgc2hhcmVJZDogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuL1BsYXRmb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOi2o+WktOadoeWwj+a4uOaIj+aVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUVRURGF0YSBleHRlbmRzIFBsYXRmb3JtRGF0YSB7XHJcbiAgICAvKiog5bqU55SoSUQgKi9cclxuICAgIHB1YmxpYyBhcHBJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgYXBwS2V5OiBzdHJpbmcgPSAnJztcclxuICAgIC8qKiDlub/lkYppZCAqL1xyXG4gICAgcHVibGljIGJhbm5lcklkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyByZXdhcmRWaWRlb0lkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBpbnRlcnN0aXRpYWxJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbmF0aXZlSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBuYXRpdmVCYW5uZXJJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgbmF0aXZlSWNvbklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVpbnRlcnN0aXRpYWxJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgbmF0aXZlaW5wYWdlSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy9cclxuICAgIHB1YmxpYyBzaGFyZUlkOiBzdHJpbmcgPSAnJztcclxufSIsImltcG9ydCBQbGF0Zm9ybURhdGEgZnJvbSBcIi4vUGxhdGZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICog5aS05p2h5bCP5ri45oiP5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVERhdGEgZXh0ZW5kcyBQbGF0Zm9ybURhdGEge1xyXG4gICAgLyoqIOW6lOeUqElEICovXHJcbiAgICBwdWJsaWMgYXBwSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGFwcEtleTogc3RyaW5nID0gJyc7XHJcbiAgICAvKiog5bm/5ZGKaWQgKi9cclxuICAgIHB1YmxpYyBiYW5uZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcmV3YXJkVmlkZW9JZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgaW50ZXJzdGl0aWFsSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG5hdGl2ZUlkOiBzdHJpbmcgPSAnJztcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgbmF0aXZlQmFubmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZUljb25JZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgbmF0aXZlaW50ZXJzdGl0aWFsSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWlucGFnZUlkczogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vXHJcbiAgICBwdWJsaWMgc2hhcmVJZDogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuL1BsYXRmb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIFZJVk/lsI/muLjmiI/mlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZJVk9EYXRhIGV4dGVuZHMgUGxhdGZvcm1EYXRhIHtcclxuICAgIC8qKiDlupTnlKhJRCAqL1xyXG4gICAgcHVibGljIGFwcElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBhcHBLZXk6IHN0cmluZyA9ICcnO1xyXG4gICAgLyoqIOW5v+WRimlkICovXHJcbiAgICBwdWJsaWMgYmFubmVySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHJld2FyZFZpZGVvSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGludGVyc3RpdGlhbElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBuYXRpdmVJZDogc3RyaW5nID0gJyc7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVJY29uSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWludGVyc3RpdGlhbElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVpbnBhZ2VJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvL1xyXG4gICAgcHVibGljIHNoYXJlSWQ6IHN0cmluZyA9ICcnO1xyXG59IiwiaW1wb3J0IFBsYXRmb3JtRGF0YSBmcm9tIFwiLi9QbGF0Zm9ybURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiBXWOWwj+a4uOaIj+aVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1hEYXRhIGV4dGVuZHMgUGxhdGZvcm1EYXRhIHtcclxuICAgIC8qKiDlupTnlKhJRCAqL1xyXG4gICAgcHVibGljIGFwcElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBhcHBLZXk6IHN0cmluZyA9ICcnO1xyXG4gICAgLyoqIOW5v+WRimlkICovXHJcbiAgICBwdWJsaWMgYmFubmVySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHJld2FyZFZpZGVvSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGludGVyc3RpdGlhbElkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBuYXRpdmVJZDogc3RyaW5nID0gJyc7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVJY29uSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hdGl2ZWludGVyc3RpdGlhbElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYXRpdmVpbnBhZ2VJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvL1xyXG4gICAgcHVibGljIHNoYXJlSWQ6IHN0cmluZyA9ICcnO1xyXG59IiwiaW1wb3J0IHsgSURldmljZSB9IGZyb20gXCIuLi9UL0lEZXZpY2VcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTorr7lpIdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHREZXZpY2UgaW1wbGVtZW50cyBJRGV2aWNlIHtcclxuICAgIFZpYnJhdGUoaXNMb25nOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjpnIfliqhcIiwgaXNMb25nKTtcclxuICAgICAgICAvL+WIpOaWreW5s+WPsOaYr+WQpuaUr+aMgVxyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLnZpYnJhdGUpIHtcclxuICAgICAgICAgICAgLy8g5LiN5pSv5oyBXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN5pSv5oyB6K6+5aSH6ZyH5Yqo77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKGlzTG9uZykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSg0MDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDE1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGVmYXVsdERldmljZSBmcm9tIFwiLi9EZWZhdWx0RGV2aWNlXCI7XHJcbi8qKlxyXG4gKiDlpLTmnaHorr7lpIdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRURGV2aWNlIGV4dGVuZHMgRGVmYXVsdERldmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9iYXNlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFzZTogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9iYXNlID0gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICBWaWJyYXRlKGlzTG9uZzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6LCD55So6ZyH5YqoXCIsIGlzTG9uZyk7XHJcbiAgICAgICAgaWYgKGlzTG9uZykge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlLnZpYnJhdGVMb25nKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7IH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLosIPnlKjpnIfliqjlpLHotKVcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZShyZXMpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlLnZpYnJhdGVTaG9ydCh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykgeyB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6LCD55So6ZyH5Yqo5aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUocmVzKSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHREZXZpY2UgZnJvbSBcIi4vRGVmYXVsdERldmljZVwiO1xyXG4vKipcclxuICog5b6u5L+h6K6+5aSHXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXWERldmljZSBleHRlbmRzIERlZmF1bHREZXZpY2Uge1xyXG4gICAgVmlicmF0ZShpc0xvbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOmch+WKqFwiLCBpc0xvbmcpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Zyo5bCP5ri45oiP5bmz5Y+wXHJcbiAgICAgICAgaWYgKHdpbmRvd1snd3gnXSkge1xyXG4gICAgICAgICAgICBpZiAoaXNMb25nKSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNhbGxMYXRlcih3eCwgd3gudmlicmF0ZUxvbmcsIFtudWxsXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNhbGxMYXRlcih3eCwgd3gudmlicmF0ZVNob3J0LCBbbnVsbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxhdGZvcm1Db21tb25FdmVudCB9IGZyb20gXCIuLi9Db21tb24vUGxhdGZvcm1Db21tb25FdmVudElkXCI7XHJcbmltcG9ydCBCRERhdGEgZnJvbSBcIi4uL0RhdGEvQkREYXRhXCI7XHJcbmltcG9ydCBQbGF0Zm9ybURhdGEgZnJvbSBcIi4uL0RhdGEvUGxhdGZvcm1EYXRhXCI7XHJcbmltcG9ydCB7IEVQbGF0Zm9ybVR5cGUgfSBmcm9tIFwiLi4vVC9FUGxhdGZvcm1UeXBlXCI7XHJcbmltcG9ydCBXWFBsYXRmb3JtIGZyb20gXCIuL1dYUGxhdGZvcm1cIjtcclxuLyoqXHJcbiAqIOeZvuW6puW5s+WPsOWunuS+i1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQkRQbGF0Zm9ybSBleHRlbmRzIFdYUGxhdGZvcm0ge1xyXG5cclxuICAgIHBsYXRmb3JtOiBFUGxhdGZvcm1UeXBlID0gRVBsYXRmb3JtVHlwZS5CRDtcclxuXHJcbiAgICBwcml2YXRlIF9pc0Jhbm5lclNob3dlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dWaWRlb0xvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBJbml0KHBsYXRmb3JtRGF0YTogUGxhdGZvcm1EYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHdpbmRvd1tcInN3YW5cIl07XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5bmz5Y+w5Yid5aeL5YyW6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1EYXRhID0gcGxhdGZvcm1EYXRhO1xyXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5QbGF0Zm9ybSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fSW5pdExhdWNoT3B0aW9uKCk7XHJcbiAgICAgICAgLy8gdGhpcy5fTG9naW4oKTtcclxuICAgICAgICB0aGlzLl9Jbml0U2hhcmVJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5fSW5pdFN5c3RlbUluZm8oKTtcclxuICAgICAgICB0aGlzLl9pc0Jhbm5lckxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzQmFubmVyU2hvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgICAgICB0aGlzLl9DcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlSW50ZXJzdGl0YWxBZCgpO1xyXG4gICAgICAgIHdpbmRvd1tcImlwbGF0Zm9ybVwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9DcmVhdGVCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLmJhbm5lcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qEYmFubmVy5bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aDtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gdGhpcy5fYmFzZS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuICAgICAgICBsZXQgYmFubmVyT2JqID0ge307XHJcbiAgICAgICAgYmFubmVyT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZDsgLy8gXCJhZHVuaXQtYjQ4ODk0ZDQ0ZDMxOGU1YVwiO1xyXG4gICAgICAgIGJhbm5lck9ialtcImFwcFNpZFwiXSA9ICh0aGlzLnBsYXRmb3JtRGF0YSBhcyBCRERhdGEpLnNpZDtcclxuICAgICAgICBsZXQgc3R5bGVPYmogPSB7fTtcclxuICAgICAgICBzdHlsZU9ialtcImxlZnRcIl0gPSAwO1xyXG4gICAgICAgIHN0eWxlT2JqW1widG9wXCJdID0gMDtcclxuICAgICAgICBzdHlsZU9ialtcIndpZHRoXCJdID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgYmFubmVyT2JqW1wic3R5bGVcIl0gPSBzdHlsZU9iajtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQgPSB0aGlzLl9iYXNlLmNyZWF0ZUJhbm5lckFkKGJhbm5lck9iaik7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFubmVy5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Jhbm5lckxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLnN0eWxlLnRvcCA9IHdpbmRvd0hlaWdodCAtIHRoaXMuX2Jhbm5lckFkLnN0eWxlLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIm+W7uuWujOebtOaOpeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLm9uRXJyb3IoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYmFubmVy5bm/5ZGK5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlVmlkZW9BZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DmnInmlYjnmoTop4bpopHlub/lkYpJRCzlj5bmtojliqDovb1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHZpZGVvT2JqID0ge307XHJcbiAgICAgICAgdmlkZW9PYmpbXCJhZFVuaXRJZFwiXSA9IHRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQ7IC8vIFwiYWR1bml0LTU2MzE2MzcyMzZjZjE2YjZcIjtcclxuICAgICAgICB2aWRlb09ialtcImFwcFNpZFwiXSA9ICh0aGlzLnBsYXRmb3JtRGF0YSBhcyBCRERhdGEpLnNpZDtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlbyA9IHRoaXMuX2Jhc2UuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHZpZGVvT2JqKTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinhumikeW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNWaWRlb0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuinhumikeW5v+WRiuWKoOi9veWksei0pVwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlkZW9GYWlsZWRDb3VudCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuesrFwiLCB0aGlzLl92aWRlb0ZhaWxlZENvdW50LCBcIuasoemHjeaWsOWKoOi9veinhumikeW5v+WRilwiKTtcclxuICAgICAgICAgICAgICAgIC8vIOWksei0peiHquWKqOWKoOi9veW5v+WRilxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ubG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25DbG9zZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2UuaGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Zue6LCDXCIsIHJlcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNFbmQgPSByZXNbXCJpc0VuZGVkXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCkgdGhpcy5fcmV3YXJkU3VjY2Vzc2VkLnJ1bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYmTpnIDopoHoh6rliqjliqDovb3lub/lkYpcclxuICAgICAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlSW50ZXJzdGl0YWxBZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkU3VicGFja2FnZShuYW1lOiBzdHJpbmcsIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyLCBvblByb2dyZXNzOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgbG9hZE9iaiA9IHt9O1xyXG4gICAgICAgIGxvYWRPYmpbXCJuYW1lXCJdID0gbmFtZTtcclxuICAgICAgICBsb2FkT2JqW1wic3VjY2Vzc1wiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbljIXliqDovb3miJDlip9cIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9hZE9ialtcImZhaWxcIl0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIbljIXliqDovb3lpLHotKVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvbkZhaWxlZCkge1xyXG4gICAgICAgICAgICAgICAgb25GYWlsZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBsb2FkVGFzayA9IHRoaXMuX2Jhc2UubG9hZFN1YnBhY2thZ2UobG9hZE9iaik7XHJcbiAgICAgICAgbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByZXMucHJvZ3Jlc3MgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXMubG9hZGVkIC8gcmVzLnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcy5ydW5XaXRoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlY29yZEV2ZW50KGV2ZW50SWQ6IHN0cmluZywgcGFyYW06IG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2UucmVwb3J0QW5hbHl0aWNzKGV2ZW50SWQsIHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93QmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzQmFubmVyTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBIaWRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jhbm5lckxvYWRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2lzQmFubmVyTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRVBsYXRmb3JtVHlwZSB9IGZyb20gXCIuLi9UL0VQbGF0Zm9ybVR5cGVcIjtcclxuaW1wb3J0IHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1QvU2hhcmVJbmZvXCI7XHJcbmltcG9ydCBEZWZhdWx0RGV2aWNlIGZyb20gXCIuLi9EZXZpY2UvRGVmYXVsdERldmljZVwiO1xyXG5pbXBvcnQgSVBsYXRmb3JtIGZyb20gXCIuLi9UL0lQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBXZWJSZWNvcmRNYW5hZ2VyIH0gZnJvbSBcIi4uL1JlY29yZC9XZWJSZWNvcmRNYW5hZ2VyXCI7XHJcbmltcG9ydCBJUmVjb3JkTWFuYWdlciBmcm9tIFwiLi4vVC9JUmVjb3JkTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRGV2aWNlIH0gZnJvbSBcIi4uL1QvSURldmljZVwiO1xyXG5pbXBvcnQgUGxhdGZvcm1NYW5hZ2VyUHJveHkgZnJvbSBcIi4uL1BsYXRmb3JtTWFuYWdlclByb3h5XCI7XHJcbmltcG9ydCBQbGF0Zm9ybURhdGEgZnJvbSBcIi4uL0RhdGEvUGxhdGZvcm1EYXRhXCI7XHJcbi8qKlxyXG4gKiDpu5jorqTlubPlj7BcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRQbGF0Zm9ybSBpbXBsZW1lbnRzIElQbGF0Zm9ybSB7XHJcbiAgICBiYXNlOiBhbnk7XHJcbiAgICBwbGF0Zm9ybURhdGE6IFBsYXRmb3JtRGF0YTtcclxuICAgIG9uUGF1c2U6IExheWEuSGFuZGxlcjtcclxuICAgIGFwcElkOiBzdHJpbmc7XHJcbiAgICBwbGF0Zm9ybTogRVBsYXRmb3JtVHlwZSA9IEVQbGF0Zm9ybVR5cGUuV2ViO1xyXG4gICAgc2FmZUFyZWE6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLlNhZmVBcmVhID0gbnVsbDtcclxuICAgIGxhdWNoT3B0aW9uOiBQbGF0Zm9ybUNvbW1vbkRlZmluZS5MYXVuY2hPcHRpb247XHJcbiAgICBsb2dpblN0YXRlOiBQbGF0Zm9ybUNvbW1vbkRlZmluZS5Mb2dpblN0YXRlO1xyXG4gICAgb25Mb2dpbkVuZDogTGF5YS5IYW5kbGVyO1xyXG4gICAgb25SZXN1bWU6IExheWEuSGFuZGxlcjtcclxuICAgIHJlY29yZE1hbmFnZXI6IElSZWNvcmRNYW5hZ2VyID0gbmV3IFdlYlJlY29yZE1hbmFnZXIoKTtcclxuICAgIGRldmljZTogSURldmljZSA9IG5ldyBEZWZhdWx0RGV2aWNlKCk7XHJcbiAgICBzeXN0ZW1JbmZvOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pSv5oyB55u05o6l6Lez6L2s5Yiw5YW25LuW5bCP56iL5bqPXHJcbiAgICAgKiDpu5jorqTlubPlj7Dov5vooYzlvLrliLZmYWtlIHRydWUs5pa55L6/6L+b6KGM6LCD6K+VXHJcbiAgICAgKi9cclxuICAgIGlzU3VwcG9ydEp1bXBPdGhlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgSW5pdChwbGF0Zm9ybURhdGE6IFBsYXRmb3JtRGF0YSkge1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvZGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5QbGF0Zm9ybSA9IHRoaXM7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5fRmFrZUxvZ2luRW5kKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX0Zha2VMb2dpbkVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkxvZ2luRW5kKVxyXG4gICAgICAgICAgICB0aGlzLm9uTG9naW5FbmQucnVuKCk7XHJcbiAgICB9XHJcbiAgICBJc0Jhbm5lckF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBJc1ZpZGVvQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgSXNJbnRlcnN0aXRhbEF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekumJhbm5lclxyXG4gICAgICovXHJcbiAgICBTaG93QmFubmVyQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKhTaG93QmFubmVyQWRcIik7XHJcbiAgICB9XHJcbiAgICBIaWRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKhIaWRlQmFubmVyQWRcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuua/gOWKseinhumikVxyXG4gICAgICovXHJcbiAgICBTaG93UmV3YXJkVmlkZW9BZChvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqFNob3dSZXdhcmRWaWRlb0FkXCIpO1xyXG4gICAgICAgIC8v6buY6K6k55yL5a6M5bm/5ZGKXHJcbiAgICAgICAgb25TdWNjZXNzLnJ1bigpO1xyXG4gICAgfVxyXG4gICAgU2hvd1Jld2FyZFZpZGVvQWRBc3luYygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5TaG93UmV3YXJkVmlkZW9BZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmj5LlsY/lub/lkYpcclxuICAgICAqL1xyXG4gICAgU2hvd0ludGVyc3RpdGFsQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKhTaG93SW50ZXJzdGl0YWxBZFwiKTtcclxuICAgIH1cclxuICAgIEdldEZyb21BcHBJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgU2hhcmVBcHBNZXNzYWdlKG9iajogU2hhcmVJbmZvLCBvblN1Y2Nlc3M6IExheWEuSGFuZGxlciA9IG51bGwsIG9uRmFpbGVkOiBMYXlhLkhhbmRsZXIgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmtojmga9cIiwgb2JqKTtcclxuICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBMb2FkU3VicGFja2FnZShuYW1lOiBzdHJpbmcsIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBvblN1Y2Nlc3MucnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlY29yZEV2ZW50KGV2ZW50SWQ6IHN0cmluZywgcGFyYW06IG9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6w5b2V5LqL5Lu2XCIsIGV2ZW50SWQsIHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBTaGFyZVZpZGVvSW5mbygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0ciwgXCLmmoLmnKrlrp7njrDlvZXlsY/lip/og71cIik7XHJcbiAgICB9XHJcblxyXG4gICAgX0NoZWNrVXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBTaG93VG9hc3Qoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmmL7npLrmtojmga/vvJonLCBzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9wZW5HYW1lQm94KCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3lubPlj7BcIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi5pqC5LiN5pSv5oyB5LqS5o6o5ri45oiP55uS5a2QXCIpO1xyXG4gICAgfVxyXG4gICAgTmF2aWdhdGVUb0FwcChhcHBpZDogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3lubPlj7BcIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIGDmmoLkuI3mlK/mjIHlsI/nqIvluo/ot7PovaxhcHBpZDoke2FwcGlkfWApO1xyXG4gICAgICAgICAgICAvLyDov5nph4zkvb/nlKhyZXNvbHZlXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2hvcnRjdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uuahjOmdouWbvuaghycpO1xyXG4gICAgfVxyXG4gICAgR2V0U3RvcmFnZShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfor7vmnKzlnLDlrZjlgqgnKTtcclxuICAgICAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG4gICAgU2V0U3RvcmFnZShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WGmeacrOWcsOWtmOWCqCcpO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGVmYXVsdERldmljZSBmcm9tIFwiLi4vRGV2aWNlL0RlZmF1bHREZXZpY2VcIjtcclxuaW1wb3J0IERlZmF1bHRSZWNvcmRNYW5hZ2VyIGZyb20gXCIuLi9SZWNvcmQvRGVmYXVsdFJlY29yZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRVBsYXRmb3JtVHlwZSB9IGZyb20gXCIuLi9UL0VQbGF0Zm9ybVR5cGVcIjtcclxuaW1wb3J0IHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1QvU2hhcmVJbmZvXCI7XHJcbmltcG9ydCBXWFBsYXRmb3JtIGZyb20gXCIuL1dYUGxhdGZvcm1cIjtcclxuaW1wb3J0IElSZWNvcmRNYW5hZ2VyIGZyb20gXCIuLi9UL0lSZWNvcmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElEZXZpY2UgfSBmcm9tIFwiLi4vVC9JRGV2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtQ29tbW9uRXZlbnQgfSBmcm9tIFwiLi4vQ29tbW9uL1BsYXRmb3JtQ29tbW9uRXZlbnRJZFwiO1xyXG5pbXBvcnQgUGxhdGZvcm1NYW5hZ2VyUHJveHkgZnJvbSBcIi4uL1BsYXRmb3JtTWFuYWdlclByb3h5XCI7XHJcbmltcG9ydCBQbGF0Zm9ybURhdGEgZnJvbSBcIi4uL0RhdGEvUGxhdGZvcm1EYXRhXCI7XHJcbi8qKlxyXG4gKiBPUFBP5bmz5Y+w5a6e5L6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHBvUGxhdGZvcm0gZXh0ZW5kcyBXWFBsYXRmb3JtIHtcclxuXHJcbiAgICBvblBhdXNlOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBhcHBJZDogc3RyaW5nO1xyXG4gICAgcGxhdGZvcm06IEVQbGF0Zm9ybVR5cGUgPSBFUGxhdGZvcm1UeXBlLk9QUE87XHJcbiAgICBzYWZlQXJlYTogUGxhdGZvcm1Db21tb25EZWZpbmUuU2FmZUFyZWEgPSBudWxsO1xyXG4gICAgbGF1Y2hPcHRpb246IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbjtcclxuICAgIGxvZ2luU3RhdGU6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxvZ2luU3RhdGU7XHJcbiAgICBvbkxvZ2luRW5kOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBvblJlc3VtZTogTGF5YS5IYW5kbGVyO1xyXG4gICAgcmVjb3JkTWFuYWdlcjogSVJlY29yZE1hbmFnZXIgPSBuZXcgRGVmYXVsdFJlY29yZE1hbmFnZXIoKTtcclxuICAgIGRldmljZTogSURldmljZSA9IG5ldyBEZWZhdWx0RGV2aWNlKCk7XHJcbiAgICBzeXN0ZW1JbmZvOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmlK/mjIHnm7TmjqXot7PovazliLDlhbbku5blsI/nqIvluo9cclxuICAgICAqL1xyXG4gICAgaXNTdXBwb3J0SnVtcE90aGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2RhdGE6IFBsYXRmb3JtRGF0YTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Jhbm5lckFkO1xyXG4gICAgcHJvdGVjdGVkIF9yZXdhcmRWaWRlbztcclxuICAgIHByb3RlY3RlZCBfaXNCYW5uZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNWaWRlb0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc0ludGVyc3RpdGlhbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc0ludGVyc3RpdGlhbENhblNob3c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIF9uYXRpdmVBZExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF92aWRlb0ZhaWxlZENvdW50OiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2ludGVyc3RpdGFsRmFpbGVkQ291bnQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfbmF0aXZlQWRGYWlsZWRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfcmV3YXJkU3VjY2Vzc2VkOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3Jld2FyZFNraXBwZWQ6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhY2hlU2NyZWVuU2NhbGU6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3NoYXJlVmlkZW9CdG47XHJcblxyXG4gICAgcHJvdGVjdGVkIF9iYXNlOiBhbnk7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jYWNoZVZpZGVvQUQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBJbml0KHBsYXRmb3JtRGF0YTogUGxhdGZvcm1EYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHdpbmRvd1tcInFnXCJdO1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW5s+WPsOWIneWni+WMlumUmeivr1wiLCBQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0cik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybURhdGEgPSBwbGF0Zm9ybURhdGE7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRNYW5hZ2VyLlBsYXRmb3JtID0gdGhpcztcclxuICAgICAgICB0aGlzLl9Jbml0TGF1Y2hPcHRpb24oKTtcclxuICAgICAgICB0aGlzLl9Mb2dpbigpO1xyXG4gICAgICAgIHRoaXMuX0luaXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3lzdGVtSW5mby5wbGF0Zm9ybVZlcnNpb24gPj0gMTA1MSkge1xyXG4gICAgICAgICAgICAvLyDkuI3pnIDopoHlnKjov5vooYxpbml0QWRTZXJ2aWNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZS5pbml0QWRTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiBwbGF0Zm9ybURhdGEuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICBpc0RlYnVnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3Bwb+W5v+WRilwiLCBcIuWIneWni+WMluW5v+WRiuacjeWKoeaIkOWKn1wiLCBwbGF0Zm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeaPkOWJjei/m+ihjOmihOWKoOi9vVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX0NyZWF0ZUJhbm5lckFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fQ3JlYXRlVmlkZW9BZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX0NyZWF0ZUludGVyc3RpdGFsQWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmludGVyc2l0aWFsQWQgPSBuZXcgTmF0aXZlQURVbml0KHBsYXRmb3JtRGF0YS5pbnRlcnN0aXRpYWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pY29uTmF0aXZlID0gbmV3IE5hdGl2ZUFEVW5pdChwbGF0Zm9ybURhdGEubmF0aXZlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmF0aXZlQWQgPSBuZXcgTmF0aXZlQURVbml0KHBsYXRmb3JtRGF0YS5uYXRpdmVJZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcHBv5bm/5ZGKXCIsIFwi5Yid5aeL5YyW5bm/5ZGK5pyN5Yqh5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImlwbGF0Zm9ybVwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTeXN0ZW1JbmZvKCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3lzdGVtSW5mbyA9IHJlcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3lzdGVtSW5mbyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrmiqXmlbDmja5cclxuICAgICAqL1xyXG4gICAgcmVwb3J0TW9uaXRvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3Bwb+S4iuaKpeaVsOaNricsIHRoaXMuc3lzdGVtSW5mbyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3lzdGVtSW5mbyAmJiB0aGlzLnN5c3RlbUluZm8ucGxhdGZvcm1WZXJzaW9uID49IDEwNjApIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZS5yZXBvcnRNb25pdG9yKCdnYW1lX3NjZW5lJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9DaGVja1VwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Mb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgICBjb2RlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgbG9naW5EYXRhID0ge30gYXMgUGxhdGZvcm1Db21tb25EZWZpbmUuTG9naW5EYXRhO1xyXG4gICAgICAgIGxvZ2luRGF0YS5zdWNjZXNzID0gKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9PbkxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9naW5EYXRhLmZhaWwgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi55m75b2V5aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZS5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZS5jb2RlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRGF0YS5jb21wbGV0ZSA9IChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25Mb2dpbkVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9naW5FbmQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2Jhc2UubG9naW4obG9naW5EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX09uTG9naW5TdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi55m75b2V5oiQ5YqfXCIsIHJlcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlLmlzTG9naW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZS5jb2RlID0gcmVzLnRva2VuO1xyXG4gICAgfVxyXG4gICAgU2hhcmVBcHBNZXNzYWdlKG9iajogU2hhcmVJbmZvLCBvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25GYWlsZWQ6IExheWEuSGFuZGxlcikge1xyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfSW5pdExhdWNoT3B0aW9uKCkge1xyXG4gICAgICAgIC8vIOe7keWumm9uU2hvd+S6i+S7tlxyXG4gICAgICAgIHRoaXMuX2Jhc2Uub25TaG93KHRoaXMuX09uU2hvdyk7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5vbkhpZGUodGhpcy5fT25IaWRlKTtcclxuICAgICAgICAvLyDoh6rliqjojrflj5bkuIDmrKHlkK/liqjlj4LmlbBcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5fYmFzZS5nZXRMYXVuY2hPcHRpb25zU3luYygpIGFzIFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbjtcclxuICAgICAgICB0aGlzLl9PblNob3cocmVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5Y+v5Lul5Yib5bu65qGM6Z2i5Zu+5qCHXHJcbiAgICAgKi9cclxuICAgIGNhbkNyZWF0ZVNob3J0Y3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHFnWydoYXNTaG9ydGN1dEluc3RhbGxlZCddKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3lm77moIfmmK/lkKblrZjlnKggIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPkei1t+WIm+W7uuahjOmdouWbvuagh+ivt+axgiAqL1xyXG4gICAgY3JlYXRlU2hvcnRjdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcWdbJ2hhc1Nob3J0Y3V0SW5zdGFsbGVkJ10oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreWbvuagh+acquWtmOWcqOaXtu+8jOWIm+W7uuWbvuagh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcWdbJ2luc3RhbGxTaG9ydGN1dCddKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NyZWF0ZUludGVyc3RpdGFsQWQoKSB7XHJcbiAgICAgICAgLy8gaWYgKFN0cmluZ0V4LklzTnVsbE9yRW1wdHkodGhpcy5fcGxhdGZvcm1EYXRhLmludGVyc3RpdGlhbElkKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaXoOacieaViOeahOaPkumhteW5v+WRiklELOWPlua2iOWKoOi9vVwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLl9pbnRlcnN0aXRhbEZhaWxlZENvdW50ID0gMDtcclxuICAgICAgICAvLyBsZXQgaW50QWRPYmogPSB7fTtcclxuICAgICAgICAvLyBpbnRBZE9ialtcImFkVW5pdElkXCJdID0gdGhpcy5fcGxhdGZvcm1EYXRhLmludGVyc3RpdGlhbElkO1xyXG4gICAgICAgIC8vIHRoaXMuX2ludGVyc2l0aWFsQWQgPSB0aGlzLl9iYXNlLmNyZWF0ZUluc2VydEFkKGludEFkT2JqKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5faW50ZXJzaXRpYWxBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaPkumhteW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuX2ludGVyc2l0aWFsQWQub25DbG9zZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5o+S6aG15bm/5ZGK5YWz6ZetXCIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9pc0ludGVyc3RpdGlhbExvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9pbnRlcnNpdGlhbEFkLmxvYWQoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLl9pbnRlcnNpdGlhbEFkLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9pbnRlcnN0aXRhbEZhaWxlZENvdW50Kys7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCLmj5LpobXlub/lkYrliqDovb3lpLHotKVcIiwgZXJyKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2ludGVyc3RpdGFsRmFpbGVkQ291bnQgPiAxMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLnrKxcIiwgdGhpcy5faW50ZXJzdGl0YWxGYWlsZWRDb3VudCwgXCLmrKHph43mlrDliqDovb3mj5LpobXlub/lkYpcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDlpLHotKXoh6rliqjliqDovb3lub/lkYpcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ludGVyc2l0aWFsQWQubG9hZCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9DcmVhdGVWaWRlb0FkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVWaWRlb0FEKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN562W55Wl5Li65LiN57yT5a2Y6KeG6aKR5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjcmVhdGVSZXdhcmRlZFZpZGVvQWQgPSB0aGlzLl9iYXNlW1wiY3JlYXRlUmV3YXJkZWRWaWRlb0FkXCJdO1xyXG4gICAgICAgIGlmIChjcmVhdGVSZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5pegY3JlYXRlUmV3YXJkZWRWaWRlb0Fk5pa55rOVLOi3s+i/h+WIneWni+WMllwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DmnInmlYjnmoTop4bpopHlub/lkYpJRCzlj5bmtojliqDovb1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHZpZGVvT2JqID0ge307XHJcbiAgICAgICAgdmlkZW9PYmpbXCJhZFVuaXRJZFwiXSA9IHRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQ7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8gPSBjcmVhdGVSZXdhcmRlZFZpZGVvQWQodmlkZW9PYmopO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5bm/5ZGK5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ZpZGVvTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWRlb0ZhaWxlZENvdW50ID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ysXCIsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQsIFwi5qyh6YeN5paw5Yqg6L296KeG6aKR5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g5aSx6LSl6Ieq5Yqo5Yqg6L295bm/5ZGKXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkNsb3NlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5ldmVudChQbGF0Zm9ybUNvbW1vbkV2ZW50LlJFU1VNX0FVRElPKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlm57osINcIiwgcmVzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc0VuZCA9IHJlc1tcImlzRW5kZWRcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgLy8g5L+u5aSN5bm/5ZGKYnVnXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCByKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkU3VjY2Vzc2VkKSB0aGlzLl9yZXdhcmRTdWNjZXNzZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRTa2lwcGVkKSB0aGlzLl9yZXdhcmRTa2lwcGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBJc0Jhbm5lckF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCYW5uZXJMb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBJc1ZpZGVvQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZpZGVvTG9hZGVkO1xyXG4gICAgfVxyXG4gICAgSXNJbnRlcnN0aXRhbEF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7Ly8gTFRTREsuaW5zdGFuY2UuaXNBREVuYWJsZSAmJiB0aGlzLl9pc0ludGVyc3RpdGlhbENhblNob3cgJiYgQ29tbW9uU2F2ZURhdGEuaW5zdGFuY2UuaW50ZXJzdGl0aWFsQ291bnQgPCA4ODg7XHJcbiAgICB9XHJcbiAgICBJc05hdGl2ZUF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF0aXZlQWRMb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyBTaG93QmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOacieaViOeahGJhbm5lcuW5v+WRiklELOWPlua2iOWKoOi9vVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc2hvdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5bGV56S65bey5pyJYmFubmVyJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5IaWRlQmFubmVyQWQoKTtcclxuICAgICAgICB0aGlzLl9iYW5uZXJBZCA9IHRoaXMuX2Jhc2UuY3JlYXRlQmFubmVyQWQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaXNCYW5uZXJMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbG9hZFN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5zaG93KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFubmVy5Yqg6L295oiQ5YqfXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNbJ2NvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNCYW5uZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSkuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYmFubmVy5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlzQmFubmVyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2hpbGUgKGlzQmFubmVyTG9hZGluZykge1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9hZFN1Y2Nlc3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXLlsZXnpLrlpLHotKUs5bGV56S6bmF0aXZl5bm/5ZGKXCIpO1xyXG4gICAgICAgIC8vIOmUgOavgeW5v+WRilxyXG4gICAgICAgIGlmICh0aGlzLl9iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOayoeacieWImeWxleekuuWOn+eUn1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybURhdGEubmF0aXZlSWNvbklkcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gYXdhaXQgdGhpcy5fU2hvd05hdGl2ZUJhbm5lcihpKTtcclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfU2hvd05hdGl2ZUJhbm5lcihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5hdGl2ZUJhbm5lciA9IHRoaXMuYmFzZS5jcmVhdGVOYXRpdmVBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLnBsYXRmb3JtRGF0YS5uYXRpdmVCYW5uZXJJZHNbaW5kZXhdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6L2s5o6l5a+56LGhXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQgPSBuYXRpdmVCYW5uZXI7XHJcblxyXG4gICAgICAgIGxldCBsb2FkUmV0ID0gYXdhaXQgbmF0aXZlQmFubmVyLmxvYWQoKTtcclxuICAgICAgICBpZiAobG9hZFJldFtcImNvZGVcIl0gPT0gMCkge1xyXG4gICAgICAgICAgICAvLyDliqDovb3miJDlip9cclxuICAgICAgICAgICAgbGV0IGFkTGlzdCA9IGxvYWRSZXRbJ2FkTGlzdCddIGFzIGFueVtdO1xyXG4gICAgICAgICAgICBpZiAoYWRMaXN0ID09IG51bGwgfHwgYWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibmF0aXZlIGJhbm5lcuWKoOi9veWksei0pVwiLCBsb2FkUmV0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYWREYXRhID0gYWRMaXN0WzBdIGFzIHtcclxuICAgICAgICAgICAgICAgIGFkSWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGltZ1VybExpc3Q6IHN0cmluZ1tdLFxyXG4gICAgICAgICAgICAgICAgbG9nb1VybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogc3RyaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChhZERhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5hdGl2ZSBiYW5uZXLliqDovb3lpLHotKVcIiwgbG9hZFJldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5hdGl2ZSBiYW5uZXLliqDovb3lpLHotKVcIiwgbG9hZFJldCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgSGlkZUJhbm5lckFkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBTaG93TmF0aXZlQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLklzTmF0aXZlQXZhbGlhYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhd2FpdCB0aGlzLl9TaG93TmF0aXZlKCk7XHJcbiAgICB9XHJcbiAgICBIaWRlTmF0aXZlQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLklzTmF0aXZlQXZhbGlhYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLl9IaWRlTmF0aXZlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBpc05hdGl2ZUludGVyc3RpdGlhbEF2YWxpYWJsZSgpe1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmludGVyc2l0aWFsQWQuY2FuU2hvd0FEXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Eb0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvblNraXBwZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWaWRlb0xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5bCa5pyq5Yqg6L295aW9XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCA9IG9uU3VjY2VzcztcclxuICAgICAgICB0aGlzLl9yZXdhcmRTa2lwcGVkID0gb25Ta2lwcGVkO1xyXG4gICAgICAgIHRoaXMuX2lzVmlkZW9Mb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmV2ZW50KFBsYXRmb3JtQ29tbW9uRXZlbnQuUEFVU0VfQVVESU8pO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0RvTm9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQgPSBvblN1Y2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkU2tpcHBlZCA9IG9uU2tpcHBlZDtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DmnInmlYjnmoTop4bpopHlub/lkYpJRCzlj5bmtojliqDovb1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jld2FyZFNraXBwZWQgJiYgdGhpcy5fcmV3YXJkU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3JlYXRlUmV3YXJkZWRWaWRlb0FkID0gdGhpcy5fYmFzZVtcImNyZWF0ZVJld2FyZGVkVmlkZW9BZFwiXTtcclxuICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoGNyZWF0ZVJld2FyZGVkVmlkZW9BZOaWueazlSzot7Pov4fliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jld2FyZFNraXBwZWQgJiYgdGhpcy5fcmV3YXJkU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmV3YXJkVmlkZW8pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlkZW9PYmogPSB7fTtcclxuICAgICAgICB2aWRlb09ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEucmV3YXJkVmlkZW9JZDsgLy8gXCJhZHVuaXQtNTYzMTYzNzIzNmNmMTZiNlwiO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvID0gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHZpZGVvT2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW5v+WRiuWIm+W7uuWujOaIkFwiLCB2aWRlb09iaik7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25DbG9zZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Zue6LCDXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGxldCBpc0VuZCA9IHJlc1tcImlzRW5kZWRcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsIHIpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRTdWNjZXNzZWQpIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrnu4Tku7blh7rnjrDpl67pophcIiwgZXJyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25Mb2FkKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrliqDovb3miJDlip9cIiwgcmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFNob3dSZXdhcmRWaWRlb0FkKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvblNraXBwZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZVZpZGVvQUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fRG9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3MsIG9uU2tpcHBlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fRG9Ob0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2Vzcywgb25Ta2lwcGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgU2hvd1Jld2FyZFZpZGVvQWRBc3luYygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5TaG93UmV3YXJkVmlkZW9BZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfRGlzYWJsZUludGVyc3RpdGFsQWQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNJbnRlcnN0aXRpYWxDYW5TaG93ID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDYwICogMTAwMCwgdGhpcywgcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNJbnRlcnN0aXRpYWxDYW5TaG93ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRGcm9tQXBwSWQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5sYXVjaE9wdGlvbi5yZWZlcnJlckluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhdWNoT3B0aW9uLnJlZmVycmVySW5mby5hcHBJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1Y2hPcHRpb24ucmVmZXJyZXJJbmZvLmFwcElkO1xyXG4gICAgfVxyXG4gICAgLyoqIOWPkei1t+WIm+W7uuahjOmdouWbvuagh+ivt+axgiAqL1xyXG4gICAgcHJvdGVjdGVkIENyZWF0U2hvcnRjdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcWdbJ2hhc1Nob3J0Y3V0SW5zdGFsbGVkJ10oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreWbvuagh+acquWtmOWcqOaXtu+8jOWIm+W7uuWbvuagh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcWdbJ2luc3RhbGxTaG9ydGN1dCddKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkU3VicGFja2FnZShuYW1lOiBzdHJpbmcsIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyLCBvblByb2dyZXNzOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgbG9hZE9iaiA9IHt9O1xyXG4gICAgICAgIGxvYWRPYmpbXCJuYW1lXCJdID0gbmFtZTtcclxuICAgICAgICBsb2FkT2JqW1wic3VjY2Vzc1wiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbljIXliqDovb3miJDlip9cIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9hZE9ialtcImZhaWxcIl0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIbljIXliqDovb3lpLHotKVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvbkZhaWxlZCkge1xyXG4gICAgICAgICAgICAgICAgb25GYWlsZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBsb2FkVGFzayA9IHRoaXMuX2Jhc2UubG9hZFN1YnBhY2thZ2UobG9hZE9iaik7XHJcbiAgICAgICAgbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5YyF5Yqg6L296L+b5bqmXCIsIHJlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcy5ydW5XaXRoKHJlcy5wcm9ncmVzcyAvIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWNvcmRFdmVudChldmVudElkOiBzdHJpbmcsIHBhcmFtOiBvYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlvorrDlvZXkuovku7ZdXCIsIGV2ZW50SWQsIHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuWIhuS6q+inhumikeaMiemSrlxyXG4gICAgICogQHBhcmFtIHggXHJcbiAgICAgKiBAcGFyYW0geSBcclxuICAgICAqIEBwYXJhbSB3aWR0aCBcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDcmVhdGVTaGFyZVZpZGVvQnRuKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+WIhuS6q+inhumikeaMiemSrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZVNoYXJlVmlkZW9CdG4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYXJlVmlkZW9CdG4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFyZVZpZGVvQnRuLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1RvYXN0KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93VG9hc3QoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuR2FtZUJveChhcHBJZHM6IHN0cmluZ1tdKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3lubPlj7BcIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi5pqC5LiN5pSv5oyB5LqS5o6o5ri45oiP55uS5a2QXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYXBwSWQgb3BwbyB2aXZv5Lyg5YyF5ZCNXHJcbiAgICAgKi9cclxuICAgIE5hdmlnYXRlVG9BcHAoYXBwSWQ6IHN0cmluZywgcGF0aD86IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLkJyb3dzZXIud2luZG93LnFnLm5hdmlnYXRlVG9NaW5pR2FtZSh7XHJcbiAgICAgICAgICAgICAgICBwa2dOYW1lOiBhcHBJZCxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICBleHRyYURhdGE6IGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wcG/lsI/muLjmiI/ot7PovazmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3Bwb+Wwj+a4uOaIj+i3s+i9rOWksei0pe+8micsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBPcHBvQWREYXRhIHtcclxuICAgIGFkSWQ6IHN0cmluZztcclxuICAgIGNsaWNrQnRuVHh0OiBzdHJpbmc7XHJcbiAgICBjcmVhdGl2ZVR5cGU6IG51bWJlcjtcclxuICAgIGRlc2M6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGljb25VcmxMaXN0OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgaW1nVXJsTGlzdDogQXJyYXk8c3RyaW5nPjtcclxuICAgIGludGVyYWN0aW9uVHlwZTogbnVtYmVyO1xyXG4gICAgbG9nb1VybDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIC8qKiDmmK/lkKblt7LkuIrmiqXlsZXnpLogKi9cclxuICAgIHNob3dfcmVwb3J0ZWQ/OiBib29sZWFuLFxyXG4gICAgLyoqIOaYr+WQpuW3suS4iuaKpeeCueWHuyAqL1xyXG4gICAgY2xpY2tfcmVwb3J0ZWQ/OiBib29sZWFuLFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBQbGF0Zm9ybUNvbW1vbkV2ZW50IH0gZnJvbSBcIi4uL0NvbW1vbi9QbGF0Zm9ybUNvbW1vbkV2ZW50SWRcIjtcclxuaW1wb3J0IFBsYXRmb3JtRGF0YSBmcm9tIFwiLi4vRGF0YS9QbGF0Zm9ybURhdGFcIjtcclxuaW1wb3J0IFBsYXRmb3JtTWFuYWdlclByb3h5IGZyb20gXCIuLi9QbGF0Zm9ybU1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4uL1QvRVBsYXRmb3JtVHlwZVwiO1xyXG5pbXBvcnQgV1hQbGF0Zm9ybSBmcm9tIFwiLi9XWFBsYXRmb3JtXCI7XHJcbi8qKlxyXG4gKiBRUeW5s+WPsOWunuS+i1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUVFQbGF0Zm9ybSBleHRlbmRzIFdYUGxhdGZvcm0ge1xyXG5cclxuICAgIHBsYXRmb3JtOiBFUGxhdGZvcm1UeXBlID0gRVBsYXRmb3JtVHlwZS5RUTtcclxuICAgIGJsb2NrQWQ6IGFueTtcclxuICAgIGFwcEJveDogYW55O1xyXG4gICAgSW5pdChwbGF0Zm9ybURhdGE6IFBsYXRmb3JtRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2UgPSB3aW5kb3dbXCJxcVwiXTtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlubPlj7DliJ3lp4vljJbplJnor69cIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1EYXRhID0gcGxhdGZvcm1EYXRhO1xyXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5QbGF0Zm9ybSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fSW5pdExhdWNoT3B0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fTG9naW4oKTtcclxuICAgICAgICB0aGlzLl9Jbml0U2hhcmVJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5fSW5pdFN5c3RlbUluZm8oKTtcclxuICAgICAgICB0aGlzLl9DcmVhdGVCYW5uZXJBZCgpO1xyXG4gICAgICAgIHRoaXMuX0NyZWF0ZVZpZGVvQWQoKTtcclxuICAgICAgICB0aGlzLl9DcmVhdGVJbnRlcnN0aXRhbEFkKCk7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImlwbGF0Zm9ybVwiXSA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuW5s+WPsOWIneWni+WMluWujOaIkFwiLCBQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Jbml0U3lzdGVtSW5mbygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc3lzdGVtSW5mbyA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSA9IHN5c3RlbUluZm8uc2NyZWVuV2lkdGggLyBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnNhZmVBcmVhID0ge30gYXMgUGxhdGZvcm1Db21tb25EZWZpbmUuU2FmZUFyZWE7XHJcbiAgICAgICAgICAgIHRoaXMuc2FmZUFyZWEud2lkdGggPSBzeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnNhZmVBcmVhLmhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNhZmVBcmVhLnRvcCA9IHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNhZmVBcmVhLmJvdHRvbSA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlFR6KaG5YaZX0luaXRTeXN0ZW1JbmZvXCIsIHRoaXMuc2FmZUFyZWEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuiOt+WPluiuvuWkh+S/oeaBr+Wksei0pSzmiafooYzpu5jorqTliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2FmZUFyZWEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NyZWF0ZUJhbm5lckFkKHNob3c/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOacieaViOeahGJhbm5lcuW5v+WRiklELOWPlua2iOWKoOi9vVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB0aGlzLl9iYXNlLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGg7XHJcbiAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJhbm5lck9iaiA9IHt9O1xyXG4gICAgICAgIGJhbm5lck9ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEuYmFubmVySWQ7IC8vIFwiYWR1bml0LWI0ODg5NGQ0NGQzMThlNWFcIjtcclxuICAgICAgICBsZXQgc3R5bGVPYmogPSB7fTtcclxuXHJcbiAgICAgICAgc3R5bGVPYmpbXCJ0b3BcIl0gPSB3aW5kb3dIZWlnaHQgLSA4MDtcclxuICAgICAgICBzdHlsZU9ialtcIndpZHRoXCJdID0gMzAwO1xyXG4gICAgICAgIHN0eWxlT2JqW1wibGVmdFwiXSA9ICh3aW5kb3dXaWR0aCAtIHN0eWxlT2JqW1wid2lkdGhcIl0pIC8gMjtcclxuICAgICAgICBiYW5uZXJPYmpbXCJzdHlsZVwiXSA9IHN0eWxlT2JqO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZCA9IHRoaXMuX2Jhc2UuY3JlYXRlQmFubmVyQWQoYmFubmVyT2JqKTtcclxuICAgICAgICB0aGlzLl9pc0Jhbm5lckxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInFxIGJhbm5lcuWKoOi9veaIkOWKn1wiLCB0aGlzLl9iYW5uZXJBZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQmFubmVyTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJhbm5lcuW5v+WRiuWKoOi9veWksei0pVwiLCByZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vblJlc2l6ZSgoc2l6ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVzaXplXCIsIHNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5kb3dIZWlnaHQgLSA4MDtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUubGVmdCA9ICh3aW5kb3dXaWR0aCAtIDMwMCkgLyAyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVzaXplXCIsIHRoaXMuX2Jhbm5lckFkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzdXBlci5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBJc0Jhbm5lckF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCYW5uZXJMb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBJc1ZpZGVvQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZpZGVvTG9hZGVkO1xyXG4gICAgfVxyXG4gICAgSXNJbnRlcnN0aXRhbEF2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBpc0Jhbm5lclNob3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuSXNCYW5uZXJBdmFsaWFibGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgICAgICB0aGlzLmlzQmFubmVyU2hvd2luZyA9IHRydWU7XHJcbiAgICAgICAgTGF5YS50aW1lci5sb29wKDE1ICogMTAwMCwgdGhpcywgdGhpcy5yZWZyZXNoQmFubmVyKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hCYW5uZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYW5uZXJTaG93aW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGJhbm5lcicpO1xyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX0NyZWF0ZUJhbm5lckFkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEhpZGVCYW5uZXJBZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLklzQmFubmVyQXZhbGlhYmxlKCkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5fYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuaGlkZSgpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMucmVmcmVzaEJhbm5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYW5uZXJTaG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0NyZWF0ZUJhbm5lckFkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfRG9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzVmlkZW9Mb2FkZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuinhumikeW5v+WRiuWwmuacquWKoOi9veWlvVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQgPSBvblN1Y2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkU2tpcHBlZCA9IG9uU2tpcHBlZDtcclxuICAgICAgICB0aGlzLl9pc1ZpZGVvTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5ldmVudChQbGF0Zm9ybUNvbW1vbkV2ZW50LlBBVVNFX0FVRElPKTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Eb05vQ2FjaGVTaG93VmlkZW8ob25TdWNjZXNzOiBMYXlhLkhhbmRsZXIsIG9uU2tpcHBlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkU3VjY2Vzc2VkID0gb25TdWNjZXNzO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFNraXBwZWQgPSBvblNraXBwZWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZpZGVvTG9hZGVkIHx8ICF0aGlzLl9yZXdhcmRWaWRlbykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qE6KeG6aKR5bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICAgICAgb25Ta2lwcGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjcmVhdGVSZXdhcmRlZFZpZGVvQWQgPSB0aGlzLl9iYXNlW1wiY3JlYXRlUmV3YXJkZWRWaWRlb0FkXCJdO1xyXG4gICAgICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLml6BjcmVhdGVSZXdhcmRlZFZpZGVvQWTmlrnms5Us6Lez6L+H5Yid5aeL5YyWXCIpO1xyXG4gICAgICAgICAgICAgICAgb25Ta2lwcGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdmlkZW9PYmogPSB7fTtcclxuICAgICAgICAgICAgdmlkZW9PYmpbXCJhZFVuaXRJZFwiXSA9IHRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQ7IC8vIFwiYWR1bml0LTU2MzE2MzcyMzZjZjE2YjZcIjtcclxuICAgICAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8gPSBjcmVhdGVSZXdhcmRlZFZpZGVvQWQodmlkZW9PYmopO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlub/lkYrliqDovb3miJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1ZpZGVvTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uRXJyb3IoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuinhumikeW5v+WRiuWKoOi9veWksei0pVwiLCByZXMsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25DbG9zZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnN0YWdlLmV2ZW50KFBsYXRmb3JtQ29tbW9uRXZlbnQuUkVTVU1fQVVESU8pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgTm9DYWNoZSAtIOinhumikeWbnuiwg1wiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRW5kID0gcmVzW1wiaXNFbmRlZFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub0NhY2hlLS0tXCIsIGlzRW5kLCBcIi0tLS1cIiwgISF0aGlzLl9yZXdhcmRTdWNjZXNzZWQsIFwiLS0tLS1cIiwgISF0aGlzLl9yZXdhcmRTa2lwcGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRTdWNjZXNzZWQpIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5zaG93KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrnu4Tku7blh7rnjrDpl67pophcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8g5Y+v5Lul5omL5Yqo5Yqg6L295LiA5qyhXHJcbiAgICAgICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omL5Yqo5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Yqg6L295oiQ5Yqf5ZCO6ZyA6KaB5YaN5pi+56S65bm/5ZGKXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV3YXJkVmlkZW8uc2hvdygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7O1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dSZXdhcmRWaWRlb0FkKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvblNraXBwZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZVZpZGVvQUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fRG9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3MsIG9uU2tpcHBlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fRG9Ob0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2Vzcywgb25Ta2lwcGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1Jld2FyZFZpZGVvQWRBc3luYygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5TaG93UmV3YXJkVmlkZW9BZChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIG51bGwsIHRydWUpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCBudWxsLCB0cnVlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBTaG93SW50ZXJzdGl0YWxBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzSW50ZXJzdGl0aWFsTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmj5LpobXlub/lkYrlsJrmnKrliqDovb3lpb1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faW50ZXJzaXRpYWxBZC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgT3BlbkdhbWVCb3goYXBwSWRzOiBzdHJpbmdbXSA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5zaG93QXBwQm94KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOebkuWtkOW5v+WRilxyXG4gICAgICovXHJcbiAgICBzaG93QXBwQm94KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFwcEJveCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcEJveC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQXBwQm94KHNob3c/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcEJveCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcEJveCA9IHRoaXMuX2Jhc2UuY3JlYXRlQXBwQm94KHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXBwQm94LmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQm94LnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwQm94Lm9uQ2xvc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5YWz6Zet55uS5a2QJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgaGlkZUFwcEJveCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hcHBCb3gpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBCb3guZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56ev5pyo5bm/5ZGKIDEtNVxyXG4gICAgICovXHJcbiAgICBzaG93QmxvY2tBZChjb3VudDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiBcIlwiLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBsZWZ0OiA1NSwgdG9wOiBMYXlhLnN0YWdlLmhlaWdodCAvIDIgfSxcclxuICAgICAgICAgICAgc2l6ZTogY291bnQsLy/ojIPlm7TmmK8xfjXvvIznp6/mnKjlub/lkYrnmoTkuKrmlbDvvIjlsZXnpLrku6Xlrp7pmYXmi4nlj5blub/lkYrmlbDph4/kuLrlh4bvvIlcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcvL2xhbmRzY2FwZSDmiJbogIUgdmVydGljYWzvvIznp6/mnKjlub/lkYrmqKrlkJHlsZXnpLrmiJbogIXnq5blkJHlsZXnpLpcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ibG9ja0FkID0gdGhpcy5fYmFzZS5jcmVhdGVCbG9ja0FkKG9iaik7XHJcbiAgICAgICAgdGhpcy5ibG9ja0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnp6/mnKjlub/lkYrliqDovb3lrozmiJAnKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0FkLnNob3coKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ+enr+acqOWxleekuuaIkOWKnycpIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign56ev5pyo5bGV56S65aSx6LSlJywgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmxvY2tBZC5vbkVycm9yKChlcnI/KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+enr+acqOW5v+WRiuWKoOi9vemUmeivrycsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0FkLm9uUmVzaXplKChyZXM/KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnp6/mnKhyZXNpemUnLCByZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGlkZUJsb2NrQWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tBZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQWQuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQWQuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vL1xyXG5pbnRlcmZhY2UgQmxvY2tBREl0ZW0ge1xyXG4gICAgYWRVbml0SWQ6IHN0cmluZztcclxuICAgIHN0eWxlOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIgfTtcclxuICAgIHNpemU6IG51bWJlcjsvL+iMg+WbtOaYrzF+Ne+8jOenr+acqOW5v+WRiueahOS4quaVsO+8iOWxleekuuS7peWunumZheaLieWPluW5v+WRiuaVsOmHj+S4uuWHhu+8iVxyXG4gICAgb3JpZW50YXRpb246IHN0cmluZzsvL2xhbmRzY2FwZSDmiJbogIUgdmVydGljYWzvvIznp6/mnKjlub/lkYrmqKrlkJHlsZXnpLrmiJbogIXnq5blkJHlsZXnpLpcclxufSIsImltcG9ydCB7IFBsYXRmb3JtQ29tbW9uRXZlbnQgfSBmcm9tIFwiLi4vQ29tbW9uL1BsYXRmb3JtQ29tbW9uRXZlbnRJZFwiO1xyXG5pbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuLi9EYXRhL1BsYXRmb3JtRGF0YVwiO1xyXG5pbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4uL1QvRVBsYXRmb3JtVHlwZVwiO1xyXG5pbXBvcnQgV1hQbGF0Zm9ybSBmcm9tIFwiLi9XWFBsYXRmb3JtXCI7XHJcbi8qKlxyXG4gKiDotqPlpLTmnaHlrp7kvotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFUVFBsYXRmb3JtIGV4dGVuZHMgV1hQbGF0Zm9ybSB7XHJcblxyXG4gICAgcGxhdGZvcm06IEVQbGF0Zm9ybVR5cGUgPSBFUGxhdGZvcm1UeXBlLlFUVDtcclxuXHJcblxyXG4gICAgSW5pdChwbGF0Zm9ybURhdGE6IFBsYXRmb3JtRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2UgPSB3aW5kb3dbXCJxdHRHYW1lXCJdO1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW5s+WPsOWIneWni+WMlumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXRmb3JtRGF0YSA9IHBsYXRmb3JtRGF0YTtcclxuICAgICAgICB0aGlzLnJlY29yZE1hbmFnZXIuUGxhdGZvcm0gPSB0aGlzO1xyXG4gICAgICAgIC8vIHRoaXMuX0luaXRMYXVjaE9wdGlvbigpO1xyXG4gICAgICAgIC8vIHRoaXMuX0xvZ2luKCk7XHJcbiAgICAgICAgLy8gdGhpcy5fSW5pdFNoYXJlSW5mbygpO1xyXG4gICAgICAgIC8vIHRoaXMuX0luaXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgLy8gdGhpcy5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgICAgICAvLyB0aGlzLl9DcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgLy8gdGhpcy5fQ3JlYXRlSW50ZXJzdGl0YWxBZCgpO1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJpcGxhdGZvcm1cIl0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIElzQmFubmVyQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICB0aGlzLl9iYXNlLnNob3dCYW5uZXIoeyBpbmRleDogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBIaWRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5oaWRlQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgSXNWaWRlb0F2YWxpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93UmV3YXJkVmlkZW9BZChvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9IGFzIGFueTtcclxuICAgICAgICBvcHRpb25zLmluZGV4ID0gMTsvL+W5v+WRiuS9jee9ru+8iDHvvIwy77yMM++8jDQuLi7vvIlcclxuICAgICAgICBvcHRpb25zLmdhbWV0eXBlID0gMTsvL+S6kuWKqOa4uOaIj+exu+Wei++8jDEo56C46YeR6JuLKSAgMihsYWJhKSAgMyjlpKfovaznm5gpXHJcbiAgICAgICAgb3B0aW9ucy5yZXdhcmR0eXBlID0gMTsvL+S6kuWKqOW5v+WRiuahhu+8jOWPquaciSAxXHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhLnRpdGxlID0gXCLojrflvpflpZblirFcIjsvL+S6kuWKqOaKveS4reWlluWQjueahOmBk+WFt+aPkOekuuaWh+Wtl1xyXG4gICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5QQVVTRV9BVURJTyk7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93VmlkZW8oXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7lrozmiJDvvIzlj5HmlL7lpZblirFcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVzID0gMCAgICDloavlhYXkuI3otrNcclxuICAgICAgICAgICAgICAgICAgICAvL3JlcyA9IDIgICAg5o+Q5YmN5YWz6ZetXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uU2tpcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd0ludGVyc3RpdGFsQWQoKSB7XHJcbiAgICAgICAgLy8g6Laj5aS05p2h5o+S6aG15bm/5ZGK6L2s5o6l5Li65LqS5Yqo5bm/5ZGKXHJcbiAgICAgICAgdGhpcy5TaG93SERSZXdhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS6kuWKqOW5v+WRilxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2hvd0hEUmV3YXJkKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge30gYXMgYW55O1xyXG4gICAgICAgIG9wdGlvbnMuaW5kZXggPSAxO1xyXG4gICAgICAgIG9wdGlvbnMucmV3YXJkdHlwZSA9IDE7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93SERSZXdhcmQob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVjb3JkRXZlbnQoZXZlbnRJZDogc3RyaW5nLCBwYXJhbTogb2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLorrDlvZXkuovku7ZcIiwgZXZlbnRJZCwgcGFyYW0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXRmb3JtRGF0YSBmcm9tIFwiLi4vRGF0YS9QbGF0Zm9ybURhdGFcIjtcclxuaW1wb3J0IFRURGV2aWNlIGZyb20gXCIuLi9EZXZpY2UvVFREZXZpY2VcIjtcclxuaW1wb3J0IFRUUmVjb3JkTWFuYWdlciBmcm9tIFwiLi4vUmVjb3JkL1RUUmVjb3JkTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4uL1QvRVBsYXRmb3JtVHlwZVwiO1xyXG5pbXBvcnQgeyBJRGV2aWNlIH0gZnJvbSBcIi4uL1QvSURldmljZVwiO1xyXG5pbXBvcnQgSVJlY29yZE1hbmFnZXIgZnJvbSBcIi4uL1QvSVJlY29yZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1QvU2hhcmVJbmZvXCI7XHJcbmltcG9ydCBXWFBsYXRmb3JtIGZyb20gXCIuL1dYUGxhdGZvcm1cIjtcclxuLyoqXHJcbiAqIOWktOadoeW5s+WPsOWunuS+i1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFRQbGF0Zm9ybSBleHRlbmRzIFdYUGxhdGZvcm0ge1xyXG5cclxuICAgIHBsYXRmb3JtOiBFUGxhdGZvcm1UeXBlID0gRVBsYXRmb3JtVHlwZS5UVDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dWaWRlb0xvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICByZWNvcmRNYW5hZ2VyOiBJUmVjb3JkTWFuYWdlcjtcclxuICAgIGRldmljZTogSURldmljZTtcclxuXHJcbiAgICBJbml0KHBsYXRmb3JtRGF0YTogUGxhdGZvcm1EYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHdpbmRvd1tcInR0XCJdO1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW5s+WPsOWIneWni+WMlumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXRmb3JtRGF0YSA9IHBsYXRmb3JtRGF0YTtcclxuICAgICAgICAvLyDmo4DmtYvmmK/lkKbmlK/mjIHkuqTlj4nmjqjlub9cclxuICAgICAgICBsZXQgdHQgPSB0aGlzLl9iYXNlO1xyXG4gICAgICAgIGxldCBzeXN0ZW1JbmZvID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICBpZiAoc3lzdGVtSW5mby5wbGF0Zm9ybSA9PSBcImlvc1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdXBwb3J0SnVtcE90aGVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbbWFqb3IsIG1pbm9yXSA9IHN5c3RlbUluZm8uU0RLVmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgaWYgKG1ham9yID49IDEgJiYgbWlub3IgPj0gMzMpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N1cHBvcnRKdW1wT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX0luaXRMYXVjaE9wdGlvbigpO1xyXG4gICAgICAgIC8vIHRoaXMuX0xvZ2luKCk7XHJcbiAgICAgICAgdGhpcy5fSW5pdFNoYXJlSW5mbygpO1xyXG4gICAgICAgIHRoaXMuX0luaXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgICAgICB0aGlzLl9DcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlSW50ZXJzdGl0YWxBZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlY29yZE1hbmFnZXIgPSBuZXcgVFRSZWNvcmRNYW5hZ2VyKHRoaXMuX2Jhc2UpO1xyXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5QbGF0Zm9ybSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBuZXcgVFREZXZpY2UodGhpcy5fYmFzZSk7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImlwbGF0Zm9ybVwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9DcmVhdGVCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLmJhbm5lcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qEYmFubmVy5bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aDtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gdGhpcy5fYmFzZS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuICAgICAgICBsZXQgYmFubmVyT2JqID0ge307XHJcbiAgICAgICAgYmFubmVyT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZDsgLy8gXCJhZHVuaXQtYjQ4ODk0ZDQ0ZDMxOGU1YVwiO1xyXG4gICAgICAgIGJhbm5lck9ialtcImFkSW50ZXJ2YWxzXCJdID0gMzA7XHJcbiAgICAgICAgbGV0IHN0eWxlT2JqID0ge307XHJcbiAgICAgICAgc3R5bGVPYmpbXCJsZWZ0XCJdID0gMDtcclxuICAgICAgICBzdHlsZU9ialtcInRvcFwiXSA9IDA7XHJcbiAgICAgICAgc3R5bGVPYmpbXCJ3aWR0aFwiXSA9IHdpbmRvd1dpZHRoO1xyXG4gICAgICAgIGJhbm5lck9ialtcInN0eWxlXCJdID0gc3R5bGVPYmo7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkID0gdGhpcy5fYmFzZS5jcmVhdGVCYW5uZXJBZChiYW5uZXJPYmopO1xyXG4gICAgICAgIHRoaXMuX2lzQmFubmVyTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbm5lcuWKoOi9veaIkOWKn1wiLCB0aGlzLl9iYW5uZXJBZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0Jhbm5lckxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYmFubmVy5bm/5ZGK5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXJBZCA9PSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLm9uUmVzaXplKChzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5kb3dIZWlnaHQgLSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLnN0eWxlLmxlZnQgPSAod2luZG93V2lkdGggLSBzaXplLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZWNvcmRFdmVudChldmVudElkOiBzdHJpbmcsIHBhcmFtOiBvYmplY3QpIHtcclxuICAgICAgICBsZXQgcmVwb3J0QW5hbHl0aWNzID0gdGhpcy5fYmFzZVtcInJlcG9ydEFuYWx5dGljc1wiXTtcclxuICAgICAgICBpZiAocmVwb3J0QW5hbHl0aWNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcG9ydEFuYWx5dGljcyhldmVudElkLCBwYXJhbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlcG9ydEFuYWx5dGljcyDmlrnms5XkuI3lrZjlnKhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuSXNCYW5uZXJBdmFsaWFibGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBTaGFyZUFwcE1lc3NhZ2Uoc2hhcmVJbmZvOiBTaGFyZUluZm8sIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmtojmga9cIiwgc2hhcmVJbmZvKTtcclxuXHJcbiAgICAgICAgbGV0IHNoYXJlT2JqID0gV1hQbGF0Zm9ybS5fV3JhcFNoYXJlSW5mbyhzaGFyZUluZm8pO1xyXG4gICAgICAgIHNoYXJlT2JqW1wic3VjY2Vzc1wiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoYXJlT2JqW1wiZmFpbFwiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkZhaWxlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9iYXNlLnNoYXJlQXBwTWVzc2FnZShzaGFyZU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgT3BlbkdhbWVCb3goYXBwSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBvcGVuRGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwSWRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG9wZW5EYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkc1tpXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93TW9yZUdhbWVzTW9kYWwoe1xyXG4gICAgICAgICAgICBhcHBMYXVuY2hPcHRpb25zOiBvcGVuRGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIE5hdmlnYXRlVG9BcHAoYXBwaWQ6IHN0cmluZywgcGF0aD86IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0SnVtcE90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3lubPlj7DkuI3mlK/mjIHlsI/muLjmiI/ot7PovaxcIiwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlLnNob3dNb3JlR2FtZXNNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwTGF1bmNoT3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogdGhpcy5wbGF0Zm9ybURhdGEuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogXCJmb289YmFyJmJhej1xdXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhRGF0YToge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLot7PovazlsI/muLjmiI/miJDlip9cIiwgYXBwaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLot7PovazlsI/muLjmiI/lpLHotKVcIiwgYXBwaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSVBsYXRmb3JtIGZyb20gXCIuLi9UL0lQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBJRGV2aWNlIH0gZnJvbSBcIi4uL1QvSURldmljZVwiO1xyXG5pbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4uL1QvRVBsYXRmb3JtVHlwZVwiO1xyXG5pbXBvcnQgUGxhdGZvcm1EYXRhIGZyb20gXCIuLi9EYXRhL1BsYXRmb3JtRGF0YVwiO1xyXG5pbXBvcnQgSVJlY29yZE1hbmFnZXIgZnJvbSBcIi4uL1QvSVJlY29yZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1QvU2hhcmVJbmZvXCI7XHJcbmltcG9ydCBEZWZhdWx0UmVjb3JkTWFuYWdlciBmcm9tIFwiLi4vUmVjb3JkL0RlZmF1bHRSZWNvcmRNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF0Zm9ybU1hbmFnZXJQcm94eSBmcm9tIFwiLi4vUGxhdGZvcm1NYW5hZ2VyUHJveHlcIjtcclxuaW1wb3J0IFNoYXJlTWFuYWdlckFLaGdmYXdnc2RhIGZyb20gXCIuLi9TaGFyZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm1Db21tb25FdmVudCB9IGZyb20gXCIuLi9Db21tb24vUGxhdGZvcm1Db21tb25FdmVudElkXCI7XHJcblxyXG4vKipcclxuICogdml2byDlubPlj7Dlrp7kvotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpdm9QbGF0Zm9ybSBpbXBsZW1lbnRzIElQbGF0Zm9ybSB7XHJcbiAgICBiYXNlOiBhbnk7XHJcbiAgICBkZXZpY2U6IElEZXZpY2U7XHJcbiAgICBpc1N1cHBvcnRKdW1wT3RoZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbGF1Y2hPcHRpb246IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbjtcclxuICAgIGxvZ2luU3RhdGU6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxvZ2luU3RhdGU7XHJcbiAgICBvbkxvZ2luRW5kOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBvblBhdXNlOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBvblJlc3VtZTogTGF5YS5IYW5kbGVyO1xyXG4gICAgcGxhdGZvcm06IEVQbGF0Zm9ybVR5cGUgPSBFUGxhdGZvcm1UeXBlLlZJVk87XHJcbiAgICBwbGF0Zm9ybURhdGE6IFBsYXRmb3JtRGF0YTtcclxuICAgIHJlY29yZE1hbmFnZXI6IElSZWNvcmRNYW5hZ2VyID0gbmV3IERlZmF1bHRSZWNvcmRNYW5hZ2VyKCk7XHJcbiAgICBzeXN0ZW1JbmZvOiBhbnk7XHJcbiAgICBhcHBJRDogc3RyaW5nO1xyXG4gICAgc2FmZUFyZWE6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLlNhZmVBcmVhID0gbnVsbDtcclxuICAgIGxvZ2luQ29kZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2RhdGE6IFBsYXRmb3JtRGF0YTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Jhbm5lckFkO1xyXG4gICAgcHJvdGVjdGVkIF9yZXdhcmRWaWRlbztcclxuICAgIHByb3RlY3RlZCBfaW50ZXJzaXRpYWxBZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2lzQmFubmVyTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2lzVmlkZW9Mb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNJbnRlcnN0aXRpYWxMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfdmlkZW9GYWlsZWRDb3VudDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9pbnRlcnN0aXRhbEZhaWxlZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9yZXdhcmRTdWNjZXNzZWQ6IExheWEuSGFuZGxlcjtcclxuICAgIHByb3RlY3RlZCBfcmV3YXJkU2tpcHBlZDogTGF5YS5IYW5kbGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfY2FjaGVTY3JlZW5TY2FsZTogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfc2hhcmVWaWRlb0J0bjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Jhc2U6IGFueTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhY2hlVmlkZW9BRDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEluaXQocGxhdGZvcm1EYXRhOiBQbGF0Zm9ybURhdGEpIHtcclxuICAgICAgICB0aGlzLl9iYXNlID0gd2luZG93W1widml2b1wiXTtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlubPlj7DliJ3lp4vljJbplJnor69cIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1EYXRhID0gcGxhdGZvcm1EYXRhO1xyXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5QbGF0Zm9ybSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fSW5pdExhdWNoT3B0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fTG9naW4oKTtcclxuICAgICAgICB0aGlzLl9Jbml0U3lzdGVtSW5mbygpO1xyXG4gICAgICAgIHRoaXMuX0NyZWF0ZVZpZGVvQWQoKTtcclxuICAgICAgICB3aW5kb3dbXCJpcGxhdGZvcm1cIl0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9DaGVja1VwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlciA9IHRoaXMuX2Jhc2UuZ2V0VXBkYXRlTWFuYWdlcigpO1xyXG4gICAgICAgIGlmICh1cGRhdGVNYW5hZ2VyID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25DaGVja0ZvclVwZGF0ZVwiLCByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jhc2Uuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLljbPlsIbmnInmm7TmlrDor7fnlZnmhI9cIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5pu05paw5o+Q56S6XCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuaWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpueri+WNs+S9v+eUqO+8n1wiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXNlLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWwj+eoi+W6j+S4i+S4gOasoeOAjOWGt+WQr+WKqOOAjeaXtuS8muS9v+eUqOaWsOeJiOacrFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmm7TmlrDlpLHotKXvvIzkuIvmrKHlkK/liqjnu6fnu60uLi5cIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0xvZ2luKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvZGU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBsb2dpbkRhdGEgPSB7fSBhcyBQbGF0Zm9ybUNvbW1vbkRlZmluZS5Mb2dpbkRhdGE7XHJcbiAgICAgICAgbG9naW5EYXRhLnN1Y2Nlc3MgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Db2RlID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX09uTG9naW5TdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5sb2dpblN0YXRlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRGF0YS5mYWlsID0gKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFBsYXRmb3JtTWFuYWdlclByb3h5LnBsYXRmb3JtU3RyLCBcIueZu+W9leWksei0pVwiLCByZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUuaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUuY29kZSA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2dpbkRhdGEuY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uTG9naW5FbmQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxvZ2luRW5kLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9iYXNlLmxvZ2luKGxvZ2luRGF0YSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RvcmFnZShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZSAmJiB0aGlzLmJhc2UuZ2V0U3RvcmFnZVN5bmMgJiYga2V5KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlLmdldFN0b3JhZ2VTeW5jKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0U3RvcmFnZVN5bmMgZXJyb3I6ICcsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRTdG9yYWdlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlICYmIHRoaXMuYmFzZS5nZXRTdG9yYWdlU3luYyAmJiBrZXkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2Uuc2V0U3RvcmFnZVN5bmMoa2V5LCBkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRTdG9yYWdlU3luYyBlcnJvcjogJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfT25Mb2dpblN1Y2Nlc3MocmVzOiBQbGF0Zm9ybUNvbW1vbkRlZmluZS5Mb2dpblN1Y2Nlc3NSZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0ciwgXCLnmbvlvZXmiJDlip9cIiwgcmVzKTtcclxuICAgICAgICB0aGlzLmxvZ2luU3RhdGUuaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlLmNvZGUgPSByZXMuY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0luaXRMYXVjaE9wdGlvbigpIHtcclxuICAgICAgICAvLyDnu5HlrppvblNob3fkuovku7ZcclxuICAgICAgICB0aGlzLl9iYXNlLm9uU2hvdyh0aGlzLl9PblNob3cpO1xyXG4gICAgICAgIHRoaXMuX2Jhc2Uub25IaWRlKHRoaXMuX09uSGlkZSk7XHJcbiAgICAgICAgLy8g6Ieq5Yqo6I635Y+W5LiA5qyh5ZCv5Yqo5Y+C5pWwXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX2Jhc2UuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKSBhcyBQbGF0Zm9ybUNvbW1vbkRlZmluZS5MYXVuY2hPcHRpb247XHJcbiAgICAgICAgdGhpcy5fT25TaG93KHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Jbml0U2hhcmVJbmZvKCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2Uuc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0U2hhcmVTdWNjZXNzXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdFNoYXJlRmFpbGVkXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRTaGFyZUNvbXBsZXRlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9iYXNlLm9uU2hhcmVBcHBNZXNzYWdlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhcmVJbmZvID0gU2hhcmVNYW5hZ2VyQUtoZ2Zhd2dzZGEuaW5zdGFuY2UuR2V0U2hhcmVJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVml2b1BsYXRmb3JtLl9XcmFwU2hhcmVJbmZvKHNoYXJlSW5mbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1dyYXBTaGFyZUluZm8oc2hhcmVJbmZvOiBTaGFyZUluZm8pIHtcclxuICAgICAgICBsZXQgc2hhcmVPYmogPSB7fTtcclxuICAgICAgICBpZiAoc2hhcmVJbmZvLnNoYXJlVGl0bGUpIHtcclxuICAgICAgICAgICAgc2hhcmVPYmpbXCJ0aXRsZVwiXSA9IHNoYXJlSW5mby5zaGFyZVRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hhcmVJbmZvLnNoYXJlSW1nKSB7XHJcbiAgICAgICAgICAgIHNoYXJlT2JqW1wiaW1hZ2VVcmxcIl0gPSBzaGFyZUluZm8uc2hhcmVJbWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaGFyZUluZm8uc2hhcmVQYXRoKSB7XHJcbiAgICAgICAgICAgIHNoYXJlT2JqW1wicXVlcnlcIl0gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBhdGhTcGxpdCA9IHNoYXJlSW5mby5zaGFyZVBhdGguc3BsaXQoXCI/XCIpO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gcGF0aFNwbGl0WzFdLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2V0UGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRQYXJhbSA9IGdldFBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlT2JqW1wicXVlcnlcIl1bc3BsaXRQYXJhbVswXV0gPSBzcGxpdFBhcmFtWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGFyZU9iajtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0luaXRTeXN0ZW1JbmZvKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IHRoaXMuX2Jhc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zeXN0ZW1JbmZvID0gdGhpcy5fYmFzZS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuezu+e7n+S/oeaBr+W3suiOt+WPllwiLCB0aGlzLnN5c3RlbUluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zYWZlQXJlYSA9IHRoaXMuc3lzdGVtSW5mby5zYWZlQXJlYSBhcyBQbGF0Zm9ybUNvbW1vbkRlZmluZS5TYWZlQXJlYTtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSA9IHRoaXMuc3lzdGVtSW5mby5zY3JlZW5XaWR0aCAvIExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W6K6+5aSH5L+h5oGv5aSx6LSlLOaJp+ihjOm7mOiupOWIneWni+WMllwiKTtcclxuICAgICAgICAgICAgdGhpcy5zYWZlQXJlYSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlSW50ZXJzdGl0YWxBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLmludGVyc3RpdGlhbElkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qE5o+S6aG15bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ludGVyc3RpdGFsRmFpbGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbnRBZE9iaiA9IHt9O1xyXG4gICAgICAgIGludEFkT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5pbnRlcnN0aXRpYWxJZDtcclxuICAgICAgICB0aGlzLl9pbnRlcnNpdGlhbEFkID0gdGhpcy5fYmFzZS5jcmVhdGVJbnRlcnN0aXRpYWxBZChpbnRBZE9iaik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcnNpdGlhbEFkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5faW50ZXJzaXRpYWxBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaPkumhteW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2ludGVyc2l0aWFsQWQub25FcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVyc3RpdGFsRmFpbGVkQ291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaPkumhteW5v+WRiuWKoOi9veWksei0pVwiLCBlcnIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW50ZXJzdGl0YWxGYWlsZWRDb3VudCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuesrFwiLCB0aGlzLl9pbnRlcnN0aXRhbEZhaWxlZENvdW50LCBcIuasoemHjeaWsOWKoOi9veaPkumhteW5v+WRilwiKTtcclxuICAgICAgICAgICAgICAgIC8vIOWksei0peiHquWKqOWKoOi9veW5v+WRilxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJzaXRpYWxBZC5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NyZWF0ZVZpZGVvQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZlZGlvIGFkIGlkJywgdGhpcy5wbGF0Zm9ybURhdGEucmV3YXJkVmlkZW9JZClcclxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlVmlkZW9BRCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeetlueVpeS4uuS4jee8k+WtmOinhumikeW5v+WRilwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3JlYXRlUmV3YXJkZWRWaWRlb0FkID0gdGhpcy5fYmFzZVtcImNyZWF0ZVJld2FyZGVkVmlkZW9BZFwiXTtcclxuICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoGNyZWF0ZVJld2FyZGVkVmlkZW9BZOaWueazlSzot7Pov4fliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5yZXdhcmRWaWRlb0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qE6KeG6aKR5bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCB2aWRlb09iaiA9IHt9O1xyXG4gICAgICAgIHZpZGVvT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5yZXdhcmRWaWRlb0lkOyAvLyBcImFkdW5pdC01NjMxNjM3MjM2Y2YxNmI2XCI7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8gPSBjcmVhdGVSZXdhcmRlZFZpZGVvQWQodmlkZW9PYmopO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5bm/5ZGK5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ZpZGVvTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWRlb0ZhaWxlZENvdW50ID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ysXCIsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQsIFwi5qyh6YeN5paw5Yqg6L296KeG6aKR5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g5aSx6LSl6Ieq5Yqo5Yqg6L295bm/5ZGKXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkNsb3NlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Zue6LCDXCIsIHJlcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNFbmQgPSByZXNbXCJpc0VuZGVkXCJdIGFzIGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICAvLyDkv67lpI3lub/lkYpidWdcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsIHIpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRTdWNjZXNzZWQpIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOacieaViOeahGJhbm5lcuW5v+WRiklELOWPlua2iOWKoOi9vVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB0aGlzLl9iYXNlLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGg7XHJcbiAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJhbm5lck9iaiA9IHt9O1xyXG4gICAgICAgIGJhbm5lck9ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEuYmFubmVySWQ7IC8vIFwiYWR1bml0LWI0ODg5NGQ0NGQzMThlNWFcIjtcclxuICAgICAgICBiYW5uZXJPYmpbXCJhZEludGVydmFsc1wiXSA9IDMwO1xyXG4gICAgICAgIGxldCBzdHlsZU9iaiA9IHt9O1xyXG4gICAgICAgIHN0eWxlT2JqW1wibGVmdFwiXSA9IDA7XHJcbiAgICAgICAgc3R5bGVPYmpbXCJ0b3BcIl0gPSAwO1xyXG4gICAgICAgIHN0eWxlT2JqW1wid2lkdGhcIl0gPSAzMDA7XHJcbiAgICAgICAgYmFubmVyT2JqW1wic3R5bGVcIl0gPSBzdHlsZU9iajtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQgPSB0aGlzLl9iYXNlLmNyZWF0ZUJhbm5lckFkKGJhbm5lck9iaik7XHJcbiAgICAgICAgdGhpcy5faXNCYW5uZXJMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXLliqDovb3miJDlip9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQmFubmVyTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUudG9wID0gd2luZG93SGVpZ2h0IC0gdGhpcy5fYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUubGVmdCA9ICh3aW5kb3dXaWR0aCAtIHRoaXMuX2Jhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCkgLyAyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJhbm5lcuW5v+WRiuWKoOi9veWksei0pVwiLCByZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIElzQmFubmVyQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Jhbm5lckxvYWRlZDtcclxuICAgIH1cclxuICAgIElzVmlkZW9BdmFsaWFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlkZW9Mb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBJc0ludGVyc3RpdGFsQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludGVyc3RpdGlhbExvYWRlZDtcclxuICAgIH1cclxuICAgIFNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuSXNCYW5uZXJBdmFsaWFibGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgIH1cclxuICAgIEhpZGVCYW5uZXJBZCgpIHtcclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Eb0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvblNraXBwZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWaWRlb0xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5bCa5pyq5Yqg6L295aW9XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCA9IG9uU3VjY2VzcztcclxuICAgICAgICB0aGlzLl9yZXdhcmRTa2lwcGVkID0gb25Ta2lwcGVkO1xyXG4gICAgICAgIHRoaXMuX2lzVmlkZW9Mb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmV2ZW50KFBsYXRmb3JtQ29tbW9uRXZlbnQuUEFVU0VfQVVESU8pO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0RvTm9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQgPSBvblN1Y2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkU2tpcHBlZCA9IG9uU2tpcHBlZDtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DmnInmlYjnmoTop4bpopHlub/lkYpJRCzlj5bmtojliqDovb1cIik7XHJcbiAgICAgICAgICAgIG9uU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3JlYXRlUmV3YXJkZWRWaWRlb0FkID0gdGhpcy5fYmFzZVtcImNyZWF0ZVJld2FyZGVkVmlkZW9BZFwiXTtcclxuICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoGNyZWF0ZVJld2FyZGVkVmlkZW9BZOaWueazlSzot7Pov4fliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIG9uU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92aWRlb0ZhaWxlZENvdW50ID0gMDtcclxuICAgICAgICBsZXQgdmlkZW9PYmogPSB7fTtcclxuICAgICAgICB2aWRlb09ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEucmV3YXJkVmlkZW9JZDsgLy8gXCJhZHVuaXQtNTYzMTYzNzIzNmNmMTZiNlwiO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXdhcmRWaWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vZmZDbG9zZSh0aGlzLm9uVmlkZW9DbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvID0gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHZpZGVvT2JqKTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinhumikeW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNWaWRlb0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuinhumikeW5v+WRiuWKoOi9veWksei0pVwiLCByZXMsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uQ2xvc2UoKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5ldmVudChQbGF0Zm9ybUNvbW1vbkV2ZW50LlJFU1VNX0FVRElPKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlm57osINcIiwgcmVzKTtcclxuICAgICAgICAgICAgbGV0IGlzRW5kID0gcmVzW1wiaXNFbmRlZFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgcik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCkgdGhpcy5fcmV3YXJkU3VjY2Vzc2VkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkU2tpcHBlZCkgdGhpcy5fcmV3YXJkU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmv4DlirHop4bpopEg5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAvLyDliqDovb3miJDlip/lkI4g5YaN5pi+56S65bm/5ZGKXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXdhcmRWaWRlby5zaG93KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pOztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVmlkZW9DbG9zZShyZXMpOiBhbnkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlm57osINcIiwgcmVzKTtcclxuICAgICAgICBsZXQgaXNFbmQgPSByZXNbXCJpc0VuZGVkXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgcik7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkU2tpcHBlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRTa2lwcGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1Jld2FyZFZpZGVvQWQob25TdWNjZXNzOiBMYXlhLkhhbmRsZXIsIG9uU2tpcHBlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlVmlkZW9BRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9Eb0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2Vzcywgb25Ta2lwcGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9Eb05vQ2FjaGVTaG93VmlkZW8ob25TdWNjZXNzLCBvblNraXBwZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBTaG93UmV3YXJkVmlkZW9BZEFzeW5jKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLlNob3dSZXdhcmRWaWRlb0FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFNob3dJbnRlcnN0aXRhbEFkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaPkumhteW5v+WRiuWwmuacquWKoOi9veWlvVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pbnRlcnNpdGlhbEFkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRGcm9tQXBwSWQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5sYXVjaE9wdGlvbi5yZWZlcnJlckluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhdWNoT3B0aW9uLnJlZmVycmVySW5mby5hcHBJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1Y2hPcHRpb24ucmVmZXJyZXJJbmZvLmFwcElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCP5ri45oiP5Zue5Yiw5YmN5Y+w55qE5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfT25TaG93KHJlczogUGxhdGZvcm1Db21tb25EZWZpbmUuTGF1bmNoT3B0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwiT25TaG93XCIsIHJlcyk7XHJcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5sYXVjaE9wdGlvbiA9IHJlcztcclxuICAgICAgICBQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLl9DaGVja1VwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGVUb0FwcFN1Y2Nlc3MgPSBudWxsO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKChyKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsIHIpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblJlc3VtZSkge1xyXG4gICAgICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblJlc3VtZS5ydW5XaXRoKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwj+a4uOaIj+mAgOWHuuWJjeWPsOeahOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX09uSGlkZShyZXM6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFBsYXRmb3JtTWFuYWdlclByb3h5LnBsYXRmb3JtU3RyLCBcIk9uSGlkZVwiLCByZXMpO1xyXG4gICAgICAgIGlmIChQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLm9uUGF1c2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblBhdXNlLnJ1bldpdGgocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuTmF2aWdhdGVUb0FwcFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5OYXZpZ2F0ZVRvQXBwU3VjY2VzcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTaGFyZUFwcE1lc3NhZ2Uoc2hhcmVJbmZvOiBTaGFyZUluZm8sIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmtojmga9cIiwgc2hhcmVJbmZvKTtcclxuXHJcbiAgICAgICAgbGV0IHNoYXJlT2JqID0gVml2b1BsYXRmb3JtLl9XcmFwU2hhcmVJbmZvKHNoYXJlSW5mbyk7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaGFyZUFwcE1lc3NhZ2Uoc2hhcmVPYmopO1xyXG5cclxuICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFN1YnBhY2thZ2UobmFtZTogc3RyaW5nLCBvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25GYWlsZWQ6IExheWEuSGFuZGxlciwgb25Qcm9ncmVzczogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2VbJ2xvYWRTdWJwYWNrYWdlJ10gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOWKoOi9veWtkOWMheaWueazlSzot7Pov4fliqDovb3lrZDljIVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2FkT2JqID0ge307XHJcbiAgICAgICAgbG9hZE9ialtcIm5hbWVcIl0gPSBuYW1lO1xyXG4gICAgICAgIGxvYWRPYmpbXCJzdWNjZXNzXCJdID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuWMheWKoOi9veaIkOWKn1wiLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2FkT2JqW1wiZmFpbFwiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIhuWMheWKoOi9veWksei0pVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKG9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkZhaWxlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGxvYWRUYXNrID0gdGhpcy5fYmFzZS5sb2FkU3VicGFja2FnZShsb2FkT2JqKTtcclxuICAgICAgICBsb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChMYXlhLkJyb3dzZXIub25Nb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5YyF5Yqg6L296L+b5bqmXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLnJ1bldpdGgocmVzLnByb2dyZXNzIC8gMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlY29yZEV2ZW50KGV2ZW50SWQ6IHN0cmluZywgcGFyYW06IG9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6w5b2V5LqL5Lu2XCIsIGV2ZW50SWQsIHBhcmFtKTtcclxuICAgICAgICBsZXQgYWxkU2VuZEV2ZW50ID0gdGhpcy5fYmFzZVtcImFsZFNlbmRFdmVudFwiXTtcclxuICAgICAgICBpZiAoYWxkU2VuZEV2ZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumYv+aLieS4gXNka+WwmuacquaOpeWFpSzor7fmo4Dmn6XphY3nva5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYWxkU2VuZEV2ZW50KGV2ZW50SWQsIHBhcmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGRTZW5kRXZlbnQoZXZlbnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65YiG5Lqr6KeG6aKR5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqIEBwYXJhbSB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ3JlYXRlU2hhcmVWaWRlb0J0bih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYnRuT2JqID0ge30gYXMgYW55O1xyXG4gICAgICAgIGJ0bk9iai5zdHlsZSA9IHtcclxuICAgICAgICAgICAgbGVmdDogeCAqIHRoaXMuX2NhY2hlU2NyZWVuU2NhbGUsXHJcbiAgICAgICAgICAgIHRvcDogeSAqIHRoaXMuX2NhY2hlU2NyZWVuU2NhbGUsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoICogdGhpcy5fY2FjaGVTY3JlZW5TY2FsZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuT2JqLnNoYXJlID0ge1xyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgdGljazogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZ206IFwiXCIsXHJcbiAgICAgICAgICAgIHRpbWVSYW5nZTogWzAsIDYwICogMTAwMF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFyZVZpZGVvQnRuID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hhcmVWaWRlb0J0biA9IHRoaXMuX2Jhc2UuY3JlYXRlR2FtZVJlY29yZGVyU2hhcmVCdXR0b24oYnRuT2JqKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFyZVZpZGVvQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/liIbkuqvop4bpopHmjInpkq5cclxuICAgICAqL1xyXG4gICAgcHVibGljIEhpZGVTaGFyZVZpZGVvQnRuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFyZVZpZGVvQnRuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hhcmVWaWRlb0J0bi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFNob3dUb2FzdChzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Jhc2Uuc2hvd1RvYXN0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RyLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgT3BlbkdhbWVCb3goYXBwSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3lubPlj7BcIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi5pqC5LiN5pSv5oyB5LqS5o6o5ri45oiP55uS5a2QXCIpO1xyXG4gICAgfVxyXG4gICAgTmF2aWdhdGVUb0FwcFN1Y2Nlc3M6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgTmF2aWdhdGVUb0FwcChhcHBpZDogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBleHRyYT86IGFueSwgc2hvd0dDPzogYm9vbGVhbiwgaXNiYW5uZXI/OiBib29sZWFuLCBhZGlkPzogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3dHQykge1xyXG4gICAgICAgICAgICAgICAgLy8gR2xvYmFsVW5pdC5nYW1lTWFuYWdlci5HYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuTmF2aWdhdGVUb0FwcFN1Y2Nlc3MgPSBudWxsO1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogZXh0cmEsXHJcbiAgICAgICAgICAgICAgICBlbnZWZXJzaW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bCP5ri45oiP6Lez6L2s5oiQ5YqfJywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bCP5ri45oiP6Lez6L2s5aSx6LSl77yaJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0dDKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNyZWF0ZVNob3J0Y3V0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmmoLmnKrlrp7njrAnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGF0Zm9ybUNvbW1vbkV2ZW50IH0gZnJvbSBcIi4uL0NvbW1vbi9QbGF0Zm9ybUNvbW1vbkV2ZW50SWRcIjtcclxuaW1wb3J0IFBsYXRmb3JtRGF0YSBmcm9tIFwiLi4vRGF0YS9QbGF0Zm9ybURhdGFcIjtcclxuaW1wb3J0IFdYRGV2aWNlIGZyb20gXCIuLi9EZXZpY2UvV1hEZXZpY2VcIjtcclxuaW1wb3J0IFBsYXRmb3JtTWFuYWdlclByb3h5IGZyb20gXCIuLi9QbGF0Zm9ybU1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgRGVmYXVsdFJlY29yZE1hbmFnZXIgZnJvbSBcIi4uL1JlY29yZC9EZWZhdWx0UmVjb3JkTWFuYWdlclwiO1xyXG5pbXBvcnQgU2hhcmVNYW5hZ2VyQUtoZ2Zhd2dzZGEgZnJvbSBcIi4uL1NoYXJlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4uL1QvRVBsYXRmb3JtVHlwZVwiO1xyXG5pbXBvcnQgeyBJRGV2aWNlIH0gZnJvbSBcIi4uL1QvSURldmljZVwiO1xyXG5pbXBvcnQgSVBsYXRmb3JtIGZyb20gXCIuLi9UL0lQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgSVJlY29yZE1hbmFnZXIgZnJvbSBcIi4uL1QvSVJlY29yZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1QvU2hhcmVJbmZvXCI7XHJcblxyXG4vKipcclxuICog5b6u5L+h5bmz5Y+w5a6e5L6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXWFBsYXRmb3JtIGltcGxlbWVudHMgSVBsYXRmb3JtIHtcclxuICAgIGJhc2U6IGFueTtcclxuICAgIHBsYXRmb3JtRGF0YTogUGxhdGZvcm1EYXRhO1xyXG4gICAgb25QYXVzZTogTGF5YS5IYW5kbGVyO1xyXG4gICAgYXBwSWQ6IHN0cmluZztcclxuICAgIHBsYXRmb3JtOiBFUGxhdGZvcm1UeXBlID0gRVBsYXRmb3JtVHlwZS5XWDtcclxuICAgIHNhZmVBcmVhOiBQbGF0Zm9ybUNvbW1vbkRlZmluZS5TYWZlQXJlYSA9IG51bGw7XHJcbiAgICBsYXVjaE9wdGlvbjogUGxhdGZvcm1Db21tb25EZWZpbmUuTGF1bmNoT3B0aW9uO1xyXG4gICAgbG9naW5TdGF0ZTogUGxhdGZvcm1Db21tb25EZWZpbmUuTG9naW5TdGF0ZTtcclxuICAgIG9uTG9naW5FbmQ6IExheWEuSGFuZGxlcjtcclxuICAgIG9uUmVzdW1lOiBMYXlhLkhhbmRsZXI7XHJcbiAgICByZWNvcmRNYW5hZ2VyOiBJUmVjb3JkTWFuYWdlciA9IG5ldyBEZWZhdWx0UmVjb3JkTWFuYWdlcigpO1xyXG4gICAgZGV2aWNlOiBJRGV2aWNlID0gbmV3IFdYRGV2aWNlKCk7XHJcbiAgICBzeXN0ZW1JbmZvOiBhbnk7XHJcbiAgICBsb2dpbkNvZGU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaUr+aMgeebtOaOpei3s+i9rOWIsOWFtuS7luWwj+eoi+W6j1xyXG4gICAgICovXHJcbiAgICBpc1N1cHBvcnRKdW1wT3RoZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByb3RlY3RlZCBfZGF0YTogUGxhdGZvcm1EYXRhO1xyXG5cclxuICAgIHByb3RlY3RlZCBfYmFubmVyQWQ7XHJcbiAgICBwcm90ZWN0ZWQgX3Jld2FyZFZpZGVvO1xyXG4gICAgcHJvdGVjdGVkIF9pbnRlcnNpdGlhbEFkO1xyXG5cclxuICAgIHByb3RlY3RlZCBfaXNCYW5uZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNWaWRlb0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc0ludGVyc3RpdGlhbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF92aWRlb0ZhaWxlZENvdW50OiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2ludGVyc3RpdGFsRmFpbGVkQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Jld2FyZFN1Y2Nlc3NlZDogTGF5YS5IYW5kbGVyO1xyXG4gICAgcHJvdGVjdGVkIF9yZXdhcmRTa2lwcGVkOiBMYXlhLkhhbmRsZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jYWNoZVNjcmVlblNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaGFyZVZpZGVvQnRuO1xyXG5cclxuICAgIHByb3RlY3RlZCBfYmFzZTogYW55O1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhY2hlVmlkZW9BRDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEluaXQocGxhdGZvcm1EYXRhOiBQbGF0Zm9ybURhdGEpIHtcclxuICAgICAgICB0aGlzLl9iYXNlID0gd2luZG93W1wid3hcIl07XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5bmz5Y+w5Yid5aeL5YyW6ZSZ6K+vXCIsIFBsYXRmb3JtTWFuYWdlclByb3h5LnBsYXRmb3JtU3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXRmb3JtRGF0YSA9IHBsYXRmb3JtRGF0YTtcclxuICAgICAgICB0aGlzLnJlY29yZE1hbmFnZXIuUGxhdGZvcm0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX0luaXRMYXVjaE9wdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX0xvZ2luKCk7XHJcbiAgICAgICAgdGhpcy5fSW5pdFNoYXJlSW5mbygpO1xyXG4gICAgICAgIHRoaXMuX0luaXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlQmFubmVyQWQoKTtcclxuICAgICAgICB0aGlzLl9DcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgdGhpcy5fQ3JlYXRlSW50ZXJzdGl0YWxBZCgpO1xyXG4gICAgICAgIHdpbmRvd1tcImlwbGF0Zm9ybVwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX0NoZWNrVXBkYXRlKCkge1xyXG4gICAgICAgIGxldCB1cGRhdGVNYW5hZ2VyID0gdGhpcy5fYmFzZS5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZU1hbmFnZXIgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkNoZWNrRm9yVXBkYXRlXCIsIHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFzZS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWNs+WwhuacieabtOaWsOivt+eVmeaEj1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmm7TmlrDmj5DnpLpcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5piv5ZCm56uL5Y2z5L2/55So77yfXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jhc2Uuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5bCP56iL5bqP5LiL5LiA5qyh44CM5Ya35ZCv5Yqo44CN5pe25Lya5L2/55So5paw54mI5pysXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2Uuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuabtOaWsOWksei0pe+8jOS4i+asoeWQr+WKqOe7p+e7rS4uLlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfTG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgY29kZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGxvZ2luRGF0YSA9IHt9IGFzIFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxvZ2luRGF0YTtcclxuICAgICAgICBsb2dpbkRhdGEuc3VjY2VzcyA9IChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgdGhpcy5fT25Mb2dpblN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLmxvZ2luU3RhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9naW5EYXRhLmZhaWwgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwi55m75b2V5aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZS5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZS5jb2RlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRGF0YS5jb21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25Mb2dpbkVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9naW5FbmQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2Jhc2UubG9naW4obG9naW5EYXRhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdG9yYWdlKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlICYmIHRoaXMuYmFzZS5nZXRTdG9yYWdlU3luYyAmJiBrZXkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2UuZ2V0U3RvcmFnZVN5bmMoa2V5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRTdG9yYWdlU3luYyBlcnJvcjogJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJhc2UgJiYgdGhpcy5iYXNlLmdldFN0b3JhZ2VTeW5jICYmIGtleSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZS5zZXRTdG9yYWdlU3luYyhrZXksIGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFN0b3JhZ2VTeW5jIGVycm9yOiAnLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9PbkxvZ2luU3VjY2VzcyhyZXM6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxvZ2luU3VjY2Vzc1Jlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFBsYXRmb3JtTWFuYWdlclByb3h5LnBsYXRmb3JtU3RyLCBcIueZu+W9leaIkOWKn1wiLCByZXMpO1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZS5pc0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxvZ2luU3RhdGUuY29kZSA9IHJlcy5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfSW5pdExhdWNoT3B0aW9uKCkge1xyXG4gICAgICAgIC8vIOe7keWumm9uU2hvd+S6i+S7tlxyXG4gICAgICAgIHRoaXMuX2Jhc2Uub25TaG93KHRoaXMuX09uU2hvdyk7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5vbkhpZGUodGhpcy5fT25IaWRlKTtcclxuICAgICAgICAvLyDoh6rliqjojrflj5bkuIDmrKHlkK/liqjlj4LmlbBcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5fYmFzZS5nZXRMYXVuY2hPcHRpb25zU3luYygpIGFzIFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbjtcclxuICAgICAgICB0aGlzLl9PblNob3cocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0luaXRTaGFyZUluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRTaGFyZVN1Y2Nlc3NcIiwgcmVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0U2hhcmVGYWlsZWRcIiwgcmVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdFNoYXJlQ29tcGxldGVcIiwgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2Jhc2Uub25TaGFyZUFwcE1lc3NhZ2UoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzaGFyZUluZm8gPSBTaGFyZU1hbmFnZXJBS2hnZmF3Z3NkYS5pbnN0YW5jZS5HZXRTaGFyZUluZm8oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBXWFBsYXRmb3JtLl9XcmFwU2hhcmVJbmZvKHNoYXJlSW5mbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1dyYXBTaGFyZUluZm8oc2hhcmVJbmZvOiBTaGFyZUluZm8pIHtcclxuICAgICAgICBsZXQgc2hhcmVPYmogPSB7fTtcclxuICAgICAgICBpZiAoc2hhcmVJbmZvLnNoYXJlVGl0bGUpIHtcclxuICAgICAgICAgICAgc2hhcmVPYmpbXCJ0aXRsZVwiXSA9IHNoYXJlSW5mby5zaGFyZVRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hhcmVJbmZvLnNoYXJlSW1nKSB7XHJcbiAgICAgICAgICAgIHNoYXJlT2JqW1wiaW1hZ2VVcmxcIl0gPSBzaGFyZUluZm8uc2hhcmVJbWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaGFyZUluZm8uc2hhcmVQYXRoKSB7XHJcbiAgICAgICAgICAgIHNoYXJlT2JqW1wicXVlcnlcIl0gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBhdGhTcGxpdCA9IHNoYXJlSW5mby5zaGFyZVBhdGguc3BsaXQoXCI/XCIpO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gcGF0aFNwbGl0WzFdLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2V0UGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRQYXJhbSA9IGdldFBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlT2JqW1wicXVlcnlcIl1bc3BsaXRQYXJhbVswXV0gPSBzcGxpdFBhcmFtWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGFyZU9iajtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0luaXRTeXN0ZW1JbmZvKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IHRoaXMuX2Jhc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zeXN0ZW1JbmZvID0gdGhpcy5fYmFzZS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuezu+e7n+S/oeaBr+W3suiOt+WPllwiLCB0aGlzLnN5c3RlbUluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zYWZlQXJlYSA9IHRoaXMuc3lzdGVtSW5mby5zYWZlQXJlYSBhcyBQbGF0Zm9ybUNvbW1vbkRlZmluZS5TYWZlQXJlYTtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSA9IHRoaXMuc3lzdGVtSW5mby5zY3JlZW5XaWR0aCAvIExheWEuc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W6K6+5aSH5L+h5oGv5aSx6LSlLOaJp+ihjOm7mOiupOWIneWni+WMllwiKTtcclxuICAgICAgICAgICAgdGhpcy5zYWZlQXJlYSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlSW50ZXJzdGl0YWxBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLmludGVyc3RpdGlhbElkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qE5o+S6aG15bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ludGVyc3RpdGFsRmFpbGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpbnRBZE9iaiA9IHt9O1xyXG4gICAgICAgIGludEFkT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5pbnRlcnN0aXRpYWxJZDtcclxuICAgICAgICB0aGlzLl9pbnRlcnNpdGlhbEFkID0gdGhpcy5fYmFzZS5jcmVhdGVJbnRlcnN0aXRpYWxBZChpbnRBZE9iaik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcnNpdGlhbEFkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5faW50ZXJzaXRpYWxBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaPkumhteW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2ludGVyc2l0aWFsQWQub25FcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVyc3RpdGFsRmFpbGVkQ291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaPkumhteW5v+WRiuWKoOi9veWksei0pVwiLCBlcnIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW50ZXJzdGl0YWxGYWlsZWRDb3VudCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuesrFwiLCB0aGlzLl9pbnRlcnN0aXRhbEZhaWxlZENvdW50LCBcIuasoemHjeaWsOWKoOi9veaPkumhteW5v+WRilwiKTtcclxuICAgICAgICAgICAgICAgIC8vIOWksei0peiHquWKqOWKoOi9veW5v+WRilxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJzaXRpYWxBZC5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NyZWF0ZVZpZGVvQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZlZGlvIGFkIGlkJywgdGhpcy5wbGF0Zm9ybURhdGEucmV3YXJkVmlkZW9JZClcclxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlVmlkZW9BRCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeetlueVpeS4uuS4jee8k+WtmOinhumikeW5v+WRilwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3JlYXRlUmV3YXJkZWRWaWRlb0FkID0gdGhpcy5fYmFzZVtcImNyZWF0ZVJld2FyZGVkVmlkZW9BZFwiXTtcclxuICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoGNyZWF0ZVJld2FyZGVkVmlkZW9BZOaWueazlSzot7Pov4fliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5yZXdhcmRWaWRlb0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5pyJ5pWI55qE6KeG6aKR5bm/5ZGKSUQs5Y+W5raI5Yqg6L29XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCB2aWRlb09iaiA9IHt9O1xyXG4gICAgICAgIHZpZGVvT2JqW1wiYWRVbml0SWRcIl0gPSB0aGlzLnBsYXRmb3JtRGF0YS5yZXdhcmRWaWRlb0lkOyAvLyBcImFkdW5pdC01NjMxNjM3MjM2Y2YxNmI2XCI7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8gPSBjcmVhdGVSZXdhcmRlZFZpZGVvQWQodmlkZW9PYmopO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5bm/5ZGK5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ZpZGVvTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9GYWlsZWRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5Yqg6L295aSx6LSlXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWRlb0ZhaWxlZENvdW50ID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ysXCIsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQsIFwi5qyh6YeN5paw5Yqg6L296KeG6aKR5bm/5ZGKXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g5aSx6LSl6Ieq5Yqo5Yqg6L295bm/5ZGKXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkNsb3NlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Zue6LCDXCIsIHJlcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNFbmQgPSByZXNbXCJpc0VuZGVkXCJdIGFzIGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICAvLyDkv67lpI3lub/lkYpidWdcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsIHIpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRTdWNjZXNzZWQpIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFNraXBwZWQpIHRoaXMuX3Jld2FyZFNraXBwZWQucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfQ3JlYXRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtRGF0YS5iYW5uZXJJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOacieaViOeahGJhbm5lcuW5v+WRiklELOWPlua2iOWKoOi9vVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB0aGlzLl9iYXNlLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGg7XHJcbiAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHRoaXMuX2Jhc2UuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJhbm5lck9iaiA9IHt9O1xyXG4gICAgICAgIGJhbm5lck9ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEuYmFubmVySWQ7IC8vIFwiYWR1bml0LWI0ODg5NGQ0NGQzMThlNWFcIjtcclxuICAgICAgICBiYW5uZXJPYmpbXCJhZEludGVydmFsc1wiXSA9IDMwO1xyXG4gICAgICAgIGxldCBzdHlsZU9iaiA9IHt9O1xyXG4gICAgICAgIHN0eWxlT2JqW1wibGVmdFwiXSA9IDA7XHJcbiAgICAgICAgc3R5bGVPYmpbXCJ0b3BcIl0gPSAwO1xyXG4gICAgICAgIHN0eWxlT2JqW1wid2lkdGhcIl0gPSAzMDA7XHJcbiAgICAgICAgYmFubmVyT2JqW1wic3R5bGVcIl0gPSBzdHlsZU9iajtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQgPSB0aGlzLl9iYXNlLmNyZWF0ZUJhbm5lckFkKGJhbm5lck9iaik7XHJcbiAgICAgICAgdGhpcy5faXNCYW5uZXJMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXLliqDovb3miJDlip9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQmFubmVyTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUudG9wID0gd2luZG93SGVpZ2h0IC0gdGhpcy5fYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUubGVmdCA9ICh3aW5kb3dXaWR0aCAtIHRoaXMuX2Jhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCkgLyAyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJhbm5lcuW5v+WRiuWKoOi9veWksei0pVwiLCByZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIElzQmFubmVyQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Jhbm5lckxvYWRlZDtcclxuICAgIH1cclxuICAgIElzVmlkZW9BdmFsaWFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlkZW9Mb2FkZWQ7XHJcbiAgICB9XHJcbiAgICBJc0ludGVyc3RpdGFsQXZhbGlhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludGVyc3RpdGlhbExvYWRlZDtcclxuICAgIH1cclxuICAgIFNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuSXNCYW5uZXJBdmFsaWFibGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgIH1cclxuICAgIEhpZGVCYW5uZXJBZCgpIHtcclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9Eb0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvblNraXBwZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWaWRlb0xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6KeG6aKR5bm/5ZGK5bCa5pyq5Yqg6L295aW9XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCA9IG9uU3VjY2VzcztcclxuICAgICAgICB0aGlzLl9yZXdhcmRTa2lwcGVkID0gb25Ta2lwcGVkO1xyXG4gICAgICAgIHRoaXMuX2lzVmlkZW9Mb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmV2ZW50KFBsYXRmb3JtQ29tbW9uRXZlbnQuUEFVU0VfQVVESU8pO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0RvTm9DYWNoZVNob3dWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25Ta2lwcGVkOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQgPSBvblN1Y2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkU2tpcHBlZCA9IG9uU2tpcHBlZDtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1EYXRhLnJld2FyZFZpZGVvSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DmnInmlYjnmoTop4bpopHlub/lkYpJRCzlj5bmtojliqDovb1cIik7XHJcbiAgICAgICAgICAgIG9uU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3JlYXRlUmV3YXJkZWRWaWRlb0FkID0gdGhpcy5fYmFzZVtcImNyZWF0ZVJld2FyZGVkVmlkZW9BZFwiXTtcclxuICAgICAgICBpZiAoY3JlYXRlUmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoGNyZWF0ZVJld2FyZGVkVmlkZW9BZOaWueazlSzot7Pov4fliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIG9uU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92aWRlb0ZhaWxlZENvdW50ID0gMDtcclxuICAgICAgICBsZXQgdmlkZW9PYmogPSB7fTtcclxuICAgICAgICB2aWRlb09ialtcImFkVW5pdElkXCJdID0gdGhpcy5wbGF0Zm9ybURhdGEucmV3YXJkVmlkZW9JZDsgLy8gXCJhZHVuaXQtNTYzMTYzNzIzNmNmMTZiNlwiO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXdhcmRWaWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vZmZDbG9zZSh0aGlzLm9uVmlkZW9DbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvID0gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHZpZGVvT2JqKTtcclxuICAgICAgICB0aGlzLl9yZXdhcmRWaWRlby5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinhumikeW5v+WRiuWKoOi9veaIkOWKn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNWaWRlb0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkVmlkZW8ub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuinhumikeW5v+WRiuWKoOi9veWksei0pVwiLCByZXMsIHRoaXMuX3ZpZGVvRmFpbGVkQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLm9uQ2xvc2UoKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5ldmVudChQbGF0Zm9ybUNvbW1vbkV2ZW50LlJFU1VNX0FVRElPKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlm57osINcIiwgcmVzKTtcclxuICAgICAgICAgICAgbGV0IGlzRW5kID0gcmVzW1wiaXNFbmRlZFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgcik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZCkgdGhpcy5fcmV3YXJkU3VjY2Vzc2VkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkU2tpcHBlZCkgdGhpcy5fcmV3YXJkU2tpcHBlZC5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Jld2FyZFZpZGVvLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmv4DlirHop4bpopEg5Yqg6L295oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAvLyDliqDovb3miJDlip/lkI4g5YaN5pi+56S65bm/5ZGKXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXdhcmRWaWRlby5zaG93KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pOztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVmlkZW9DbG9zZShyZXMpOiBhbnkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuZXZlbnQoUGxhdGZvcm1Db21tb25FdmVudC5SRVNVTV9BVURJTyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHlm57osINcIiwgcmVzKTtcclxuICAgICAgICBsZXQgaXNFbmQgPSByZXNbXCJpc0VuZGVkXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHIpID0+IHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgcik7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFN1Y2Nlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRTdWNjZXNzZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkU2tpcHBlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRTa2lwcGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1Jld2FyZFZpZGVvQWQob25TdWNjZXNzOiBMYXlhLkhhbmRsZXIsIG9uU2tpcHBlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlVmlkZW9BRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9Eb0NhY2hlU2hvd1ZpZGVvKG9uU3VjY2Vzcywgb25Ta2lwcGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9Eb05vQ2FjaGVTaG93VmlkZW8ob25TdWNjZXNzLCBvblNraXBwZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBTaG93UmV3YXJkVmlkZW9BZEFzeW5jKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLlNob3dSZXdhcmRWaWRlb0FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFNob3dJbnRlcnN0aXRhbEFkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNJbnRlcnN0aXRpYWxMb2FkZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaPkumhteW5v+WRiuWwmuacquWKoOi9veWlvVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pbnRlcnNpdGlhbEFkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRGcm9tQXBwSWQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5sYXVjaE9wdGlvbi5yZWZlcnJlckluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhdWNoT3B0aW9uLnJlZmVycmVySW5mby5hcHBJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1Y2hPcHRpb24ucmVmZXJyZXJJbmZvLmFwcElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCP5ri45oiP5Zue5Yiw5YmN5Y+w55qE5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfT25TaG93KHJlczogUGxhdGZvcm1Db21tb25EZWZpbmUuTGF1bmNoT3B0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIsIFwiT25TaG93XCIsIHJlcyk7XHJcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5sYXVjaE9wdGlvbiA9IHJlcztcclxuICAgICAgICBQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLl9DaGVja1VwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGVUb0FwcFN1Y2Nlc3MgPSBudWxsO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKChyKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsIHIpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblJlc3VtZSkge1xyXG4gICAgICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblJlc3VtZS5ydW5XaXRoKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwj+a4uOaIj+mAgOWHuuWJjeWPsOeahOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX09uSGlkZShyZXM6IFBsYXRmb3JtQ29tbW9uRGVmaW5lLkxhdW5jaE9wdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFBsYXRmb3JtTWFuYWdlclByb3h5LnBsYXRmb3JtU3RyLCBcIk9uSGlkZVwiLCByZXMpO1xyXG4gICAgICAgIGlmIChQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLm9uUGF1c2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5vblBhdXNlLnJ1bldpdGgocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuTmF2aWdhdGVUb0FwcFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5OYXZpZ2F0ZVRvQXBwU3VjY2VzcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTaGFyZUFwcE1lc3NhZ2Uoc2hhcmVJbmZvOiBTaGFyZUluZm8sIG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmtojmga9cIiwgc2hhcmVJbmZvKTtcclxuXHJcbiAgICAgICAgbGV0IHNoYXJlT2JqID0gV1hQbGF0Zm9ybS5fV3JhcFNoYXJlSW5mbyhzaGFyZUluZm8pO1xyXG4gICAgICAgIHRoaXMuX2Jhc2Uuc2hhcmVBcHBNZXNzYWdlKHNoYXJlT2JqKTtcclxuXHJcbiAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBvblN1Y2Nlc3MucnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIExvYWRTdWJwYWNrYWdlKG5hbWU6IHN0cmluZywgb25TdWNjZXNzOiBMYXlhLkhhbmRsZXIsIG9uRmFpbGVkOiBMYXlhLkhhbmRsZXIsIG9uUHJvZ3Jlc3M6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlWydsb2FkU3VicGFja2FnZSddID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLml6DliqDovb3lrZDljIXmlrnms5Us6Lez6L+H5Yqg6L295a2Q5YyFXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9hZE9iaiA9IHt9O1xyXG4gICAgICAgIGxvYWRPYmpbXCJuYW1lXCJdID0gbmFtZTtcclxuICAgICAgICBsb2FkT2JqW1wic3VjY2Vzc1wiXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbljIXliqDovb3miJDlip9cIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9hZE9ialtcImZhaWxcIl0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIbljIXliqDovb3lpLHotKVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChvbkZhaWxlZCkge1xyXG4gICAgICAgICAgICAgICAgb25GYWlsZWQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBsb2FkVGFzayA9IHRoaXMuX2Jhc2UubG9hZFN1YnBhY2thZ2UobG9hZE9iaik7XHJcbiAgICAgICAgbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoTGF5YS5Ccm93c2VyLm9uTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuWMheWKoOi9vei/m+W6plwiLCByZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcy5ydW5XaXRoKHJlcy5wcm9ncmVzcyAvIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWNvcmRFdmVudChldmVudElkOiBzdHJpbmcsIHBhcmFtOiBvYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiusOW9leS6i+S7tlwiLCBldmVudElkLCBwYXJhbSk7XHJcbiAgICAgICAgbGV0IGFsZFNlbmRFdmVudCA9IHRoaXMuX2Jhc2VbXCJhbGRTZW5kRXZlbnRcIl07XHJcbiAgICAgICAgaWYgKGFsZFNlbmRFdmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLpmL/mi4nkuIFzZGvlsJrmnKrmjqXlhaUs6K+35qOA5p+l6YWN572uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJhbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFsZFNlbmRFdmVudChldmVudElkLCBwYXJhbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxkU2VuZEV2ZW50KGV2ZW50SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuWIhuS6q+inhumikeaMiemSrlxyXG4gICAgICogQHBhcmFtIHggXHJcbiAgICAgKiBAcGFyYW0geSBcclxuICAgICAqIEBwYXJhbSB3aWR0aCBcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDcmVhdGVTaGFyZVZpZGVvQnRuKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBidG5PYmogPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgYnRuT2JqLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiB4ICogdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSxcclxuICAgICAgICAgICAgdG9wOiB5ICogdGhpcy5fY2FjaGVTY3JlZW5TY2FsZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiB0aGlzLl9jYWNoZVNjcmVlblNjYWxlLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGggKiB0aGlzLl9jYWNoZVNjcmVlblNjYWxlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG5PYmouc2hhcmUgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJnbTogXCJcIixcclxuICAgICAgICAgICAgdGltZVJhbmdlOiBbMCwgNjAgKiAxMDAwXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYXJlVmlkZW9CdG4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFyZVZpZGVvQnRuID0gdGhpcy5fYmFzZS5jcmVhdGVHYW1lUmVjb3JkZXJTaGFyZUJ1dHRvbihidG5PYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXJlVmlkZW9CdG4uc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+WIhuS6q+inhumikeaMiemSrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZVNoYXJlVmlkZW9CdG4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYXJlVmlkZW9CdG4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFyZVZpZGVvQnRuLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1RvYXN0KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZS5zaG93VG9hc3QoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuR2FtZUJveChhcHBJZHM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuW9k+WJjeW5s+WPsFwiLCBQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0ciwgXCLmmoLkuI3mlK/mjIHkupLmjqjmuLjmiI/nm5LlrZBcIik7XHJcbiAgICB9XHJcbiAgICBOYXZpZ2F0ZVRvQXBwU3VjY2VzczogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBOYXZpZ2F0ZVRvQXBwKGFwcGlkOiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcsIGV4dHJhPzogYW55LCBzaG93R0M/OiBib29sZWFuLCBpc2Jhbm5lcj86IGJvb2xlYW4sIGFkaWQ/OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2hvd0dDKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHbG9iYWxVbml0LmdhbWVNYW5hZ2VyLkdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5OYXZpZ2F0ZVRvQXBwU3VjY2VzcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwaWQsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBleHRyYSxcclxuICAgICAgICAgICAgICAgIGVudlZlcnNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflsI/muLjmiI/ot7PovazmiJDlip8nLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflsI/muLjmiI/ot7PovazlpLHotKXvvJonKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93R0MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlU2hvcnRjdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aaguacquWunueOsCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXRmb3JtRGF0YSBmcm9tIFwiLi9EYXRhL1BsYXRmb3JtRGF0YVwiO1xyXG5pbXBvcnQgQkRQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybUNsYXNzL0JEUGxhdGZvcm1cIjtcclxuaW1wb3J0IERlZmF1bHRQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybUNsYXNzL0RlZmF1bHRQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgT3Bwb1BsYXRmb3JtIGZyb20gXCIuL1BsYXRmb3JtQ2xhc3MvT3Bwb1BsYXRmb3JtXCI7XHJcbmltcG9ydCBRUVBsYXRmb3JtIGZyb20gXCIuL1BsYXRmb3JtQ2xhc3MvUVFQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgUVRUUGxhdGZvcm0gZnJvbSBcIi4vUGxhdGZvcm1DbGFzcy9RVFRQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgVFRQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybUNsYXNzL1RUUGxhdGZvcm1cIjtcclxuaW1wb3J0IFdYUGxhdGZvcm0gZnJvbSBcIi4vUGxhdGZvcm1DbGFzcy9XWFBsYXRmb3JtXCI7XHJcbmltcG9ydCBQbGF0Zm9ybU1hbmFnZXJQcm94eSBmcm9tIFwiLi9QbGF0Zm9ybU1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgSVBsYXRmb3JtIGZyb20gXCIuL1QvSVBsYXRmb3JtXCI7XHJcbmltcG9ydCBWaXZvUGxhdGZvcm0gZnJvbSBcIi4vUGxhdGZvcm1DbGFzcy9WaXZvUGxhdGZvcm1cIjtcclxuaW1wb3J0IEJERGF0YSBmcm9tIFwiLi9EYXRhL0JERGF0YVwiO1xyXG5pbXBvcnQgT1BQT0RhdGEgZnJvbSBcIi4vRGF0YS9PUFBPRGF0YVwiO1xyXG5pbXBvcnQgUVFEYXRhIGZyb20gXCIuL0RhdGEvUVFEYXRhXCI7XHJcbmltcG9ydCBRVFREYXRhIGZyb20gXCIuL0RhdGEvUVRURGF0YVwiO1xyXG5pbXBvcnQgVFREYXRhIGZyb20gXCIuL0RhdGEvVFREYXRhXCI7XHJcbmltcG9ydCBWSVZPRGF0YSBmcm9tIFwiLi9EYXRhL1ZJVk9EYXRhXCI7XHJcbmltcG9ydCBXWERhdGEgZnJvbSBcIi4vRGF0YS9XWERhdGFcIjtcclxuLyoqXHJcbiAqIOW5s+WPsOeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1NYW5hZ2VyIHtcclxuICAgIC8qKiDlubPlj7Dlrp7kvosgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxhdGZvcm1NYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogUGxhdGZvcm1NYW5hZ2VyIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQbGF0Zm9ybU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlubPlj7Dlrp7kvosgKi9cclxuICAgIHByaXZhdGUgbV9wbGF0Zm9ybUluc3RhbmNlOiBJUGxhdGZvcm07XHJcblxyXG4gICAgLyoqIOW5s+WPsOaVsOaNriAqL1xyXG4gICAgcHJpdmF0ZSBtX3BsYXRmb3JtRGF0YTogUGxhdGZvcm1EYXRhO1xyXG5cclxuICAgIC8qKiDojrflj5blubPlj7Dlrp7kvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBsYXRmb3JtSW5zdGFuY2UoKTogSVBsYXRmb3JtIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UubV9wbGF0Zm9ybUluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5jmsqHmnInorr7nva7ov4flubPlj7Dlrp7kvovku6PnkIbvvIEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UubV9wbGF0Zm9ybUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5bmz5Y+wXHJcbiAgICAgKiBAcGFyYW0gYXBwSWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1fcGxhdGZvcm1JbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlt7LosIPnlKjov4flubPlj7DliJvlu7rkuLpcIiwgUGxhdGZvcm1NYW5hZ2VyUHJveHkuR2V0UGxhdGZvcm1TdHIodGhpcy5tX3BsYXRmb3JtSW5zdGFuY2UucGxhdGZvcm0pLCBcIuS4jeiDvemHjeWkjeWIm+W7ulwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNRVFQgPSB3aW5kb3dbXCJxdHRHYW1lXCJdICE9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzVFQgPSB3aW5kb3dbXCJ0dFwiXSAhPSBudWxsO1xyXG4gICAgICAgIC8v6I635Y+W5bmz5Y+w5a6e5L6LXHJcbiAgICAgICAgbGV0IHJlc3VsdDogSVBsYXRmb3JtO1xyXG4gICAgICAgIGlmIChpc1RUKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBUVFBsYXRmb3JtKCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMubV9wbGF0Zm9ybURhdGEgPSBuZXcgVFREYXRhKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChMYXlhLkJyb3dzZXIub25NaW5pR2FtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgV1hQbGF0Zm9ybSgpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLm1fcGxhdGZvcm1EYXRhID0gbmV3IFdYRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTGF5YS5Ccm93c2VyLm9uQkRNaW5pR2FtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQkRQbGF0Zm9ybSgpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLm1fcGxhdGZvcm1EYXRhID0gbmV3IEJERGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNRVFQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFFUVFBsYXRmb3JtKCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMubV9wbGF0Zm9ybURhdGEgPSBuZXcgUVRURGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTGF5YS5Ccm93c2VyLm9uUVFNaW5pR2FtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUVFQbGF0Zm9ybSgpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0aGlzLm1fcGxhdGZvcm1EYXRhID0gbmV3IFFRRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTGF5YS5Ccm93c2VyLm9uUUdNaW5pR2FtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgT3Bwb1BsYXRmb3JtKCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHRoaXMubV9wbGF0Zm9ybURhdGEgPSBuZXcgT1BQT0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoTGF5YS5Ccm93c2VyLm9uVlZNaW5pR2FtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgVml2b1BsYXRmb3JtKClcclxuICAgICAgICAgICAgdGhpcy5tX3BsYXRmb3JtRGF0YSA9IG5ldyBWSVZPRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKror4bliKvlubPlj7As6buY6K6k5Yib5bu65Li6d2ViXCIsIExheWEuQnJvd3Nlci51c2VyQWdlbnQpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgRGVmYXVsdFBsYXRmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlID0gcmVzdWx0O1xyXG4gICAgICAgIC8v6K6+572u5Luj55CGXHJcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZSA9IHJlc3VsdDtcclxuICAgICAgICAvL+iuvue9ruWIsOWFqOWxgFxyXG4gICAgICAgIHdpbmRvd1snJFBsYXRmb3JtJ10gPSB0aGlzLm1fcGxhdGZvcm1JbnN0YW5jZTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bmz5Y+w5a6e5L6L5Yib5bu65a6M5oiQXCIsIFBsYXRmb3JtTWFuYWdlclByb3h5LkdldFBsYXRmb3JtU3RyKHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlLnBsYXRmb3JtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblubPlj7BcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRQbGF0Zm9ybSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlLkluaXQodGhpcy5tX3BsYXRmb3JtRGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zb2xlLmxvZygn5bmz5Y+w5Yid5aeL5YyW5a6M5oiQJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFUGxhdGZvcm1UeXBlIH0gZnJvbSBcIi4vVC9FUGxhdGZvcm1UeXBlXCI7XHJcbmltcG9ydCBJUGxhdGZvcm0gZnJvbSBcIi4vVC9JUGxhdGZvcm1cIjtcclxuLyoqXHJcbiAqIOW5s+WPsOS7o+eQhuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1NYW5hZ2VyUHJveHkge1xyXG4gICAgLyoqIOWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF0Zm9ybU1hbmFnZXJQcm94eTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFBsYXRmb3JtTWFuYWdlclByb3h5IHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQbGF0Zm9ybU1hbmFnZXJQcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW5s+WPsOWunuS+iyAqL1xyXG4gICAgcHJpdmF0ZSBtX3BsYXRmb3JtSW5zdGFuY2U6IElQbGF0Zm9ybTtcclxuXHJcbiAgICAvKiog6I635Y+W5bmz5Y+w5a6e5L6LICovXHJcbiAgICBwdWJsaWMgZ2V0IFBsYXRmb3JtSW5zdGFuY2UoKTogSVBsYXRmb3JtIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9wbGF0Zm9ybUluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5jmsqHmnInorr7nva7ov4flubPlj7Dlrp7kvovku6PnkIbvvIEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorr7nva7lubPlj7Dlrp7kvosgKi9cclxuICAgIHB1YmxpYyBzZXQgUGxhdGZvcm1JbnN0YW5jZShfaW5zdGFuY2U6IElQbGF0Zm9ybSkge1xyXG4gICAgICAgIHRoaXMubV9wbGF0Zm9ybUluc3RhbmNlID0gX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN5bmz5Y+w5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHBsYXRmb3JtU3RyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtTWFuYWdlclByb3h5LkdldFBsYXRmb3JtU3RyKHRoaXMuX2luc3RhbmNlLm1fcGxhdGZvcm1JbnN0YW5jZS5wbGF0Zm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blubPlj7DlkI3lrZdcclxuICAgICAqIEBwYXJhbSBwbGF0Zm9ybUVudW0g5bmz5Y+w57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UGxhdGZvcm1TdHIocGxhdGZvcm1FbnVtOiBFUGxhdGZvcm1UeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYXRmb3JtRW51bSkge1xyXG4gICAgICAgICAgICBjYXNlIEVQbGF0Zm9ybVR5cGUuTm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuacquivhuWIq1wiO1xyXG4gICAgICAgICAgICBjYXNlIEVQbGF0Zm9ybVR5cGUuV2ViOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi572R6aG1XCI7XHJcbiAgICAgICAgICAgIGNhc2UgRVBsYXRmb3JtVHlwZS5CRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIueZvuW6plwiO1xyXG4gICAgICAgICAgICBjYXNlIEVQbGF0Zm9ybVR5cGUuT1BQTzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wcG9cIjtcclxuICAgICAgICAgICAgY2FzZSBFUGxhdGZvcm1UeXBlLlFROlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUVFcIjtcclxuICAgICAgICAgICAgY2FzZSBFUGxhdGZvcm1UeXBlLlRUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5aS05p2hXCI7XHJcbiAgICAgICAgICAgIGNhc2UgRVBsYXRmb3JtVHlwZS5WSVZPOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVml2b1wiO1xyXG4gICAgICAgICAgICBjYXNlIEVQbGF0Zm9ybVR5cGUuV1g6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLlvq7kv6FcIjtcclxuICAgICAgICAgICAgY2FzZSBFUGxhdGZvcm1UeXBlLlFUVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIui2o+WktOadoVwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5pyq5a6a5LmJXCIgKyBwbGF0Zm9ybUVudW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXRmb3JtTWFuYWdlclByb3h5IGZyb20gXCIuL1BsYXRmb3JtTWFuYWdlclByb3h5XCI7XHJcblxyXG4vKipcclxuICog5bmz5Y+w5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3liIbljIVcclxuICAgICAqIEBwYXJhbSBuYW1lIOWIhuWMheWQjeWtl1xyXG4gICAgICogQHBhcmFtIHByb2dyZXNzIOWKoOi9vei/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRTdWJQS0cobmFtZTogc3RyaW5nLCBwcm9ncmVzcz86IChwOiBudW1iZXIpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIsIGUpID0+IHtcclxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyUHJveHkuaW5zdGFuY2UuUGxhdGZvcm1JbnN0YW5jZS5Mb2FkU3VicGFja2FnZShuYW1lLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCByKSxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgZSksXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHByb2dyZXNzKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBpbnN0ID0gd2luZG93Wyd3eCddIGFzIGFueTtcclxuICAgICAgICAgICAgLy8gaW5zdCA9IGluc3QgPT0gbnVsbCA/IGluc3QgPSB3aW5kb3dbJ3FxJ10gYXMgYW55IDogaW5zdDtcclxuICAgICAgICAgICAgLy8gaWYgKHdpbmRvd1sncWcnXSkgeyBpbnN0ID0gd2luZG93WydxZyddOyB9XHJcbiAgICAgICAgICAgIC8vIGlmIChpbnN0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIsIGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciB0YXNrID0gaW5zdC5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogbmFtZSwgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295oiQ5Yqf5ZCO6YCa6L+HIHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbljIUnLCBuYW1lLCAn5Yqg6L295oiQ5YqfJyArIHJlcyk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHIoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295aSx6LSl6YCa6L+HIGZhaWwg5Zue6LCDXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbljIUnLCBuYW1lLCAn5Yqg6L295aSx6LSlJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBlKHJlcylcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChwcm9ncmVzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGFzay5vblByb2dyZXNzVXBkYXRlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2dyZXNzKHJlcy50b3RhbEJ5dGVzV3JpdHRlbiAvIHJlcy50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXRmb3JtTWFuYWdlclByb3h5IGZyb20gXCIuLi9QbGF0Zm9ybU1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgSVBsYXRmb3JtIGZyb20gXCIuLi9UL0lQbGF0Zm9ybVwiO1xyXG5pbXBvcnQgSVJlY29yZE1hbmFnZXIgZnJvbSBcIi4uL1QvSVJlY29yZE1hbmFnZXJcIjtcclxuLyoqXHJcbiAqIOm7mOiupOW9leWxj+euoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFJlY29yZE1hbmFnZXIgaW1wbGVtZW50cyBJUmVjb3JkTWFuYWdlciB7XHJcbiAgICBQbGF0Zm9ybTogSVBsYXRmb3JtO1xyXG5cclxuICAgIHN1cHBvcnRSZWNvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzUGF1c2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzUmVjb3JkU3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHZpZGVvU2F2ZVBhdGg6IHN0cmluZztcclxuXHJcbiAgICBTdGFydFJlY29yZChvblN0YXJ0OiBMYXlhLkhhbmRsZXIsIG9uT3ZlclRpbWU6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+l5bmz5Y+wXCIgKyBQbGF0Zm9ybU1hbmFnZXJQcm94eS5wbGF0Zm9ybVN0ciArIFwi5LiN5pSv5oyB5b2V5Yi26KeG6aKRXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0b3BSZWNvcmQob25TdG9wOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivpeW5s+WPsFwiICsgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIgKyBcIuS4jeaUr+aMgeW9leWItuinhumikVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBQYXVzZShvblBhdXNlOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivpeW5s+WPsFwiICsgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIgKyBcIuS4jeaUr+aMgeW9leWItuinhumikVwiKTtcclxuICAgIH1cclxuICAgIFJlc3VtZShvblJldW1lOiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivpeW5s+WPsFwiICsgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIgKyBcIuS4jeaUr+aMgeW9leWItuinhumikVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWNvcmRDbGlwKHRpbWVSYW5nZTogbnVtYmVyW10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivpeW5s+WPsFwiICsgUGxhdGZvcm1NYW5hZ2VyUHJveHkucGxhdGZvcm1TdHIgKyBcIuS4jeaUr+aMgeW9leWItuinhumikVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTaGFyZVZpZGVvKG9uU3VjY2VzczogTGF5YS5IYW5kbGVyLCBvbkNhbmNlbDogTGF5YS5IYW5kbGVyLCBvbkZhaWxlZDogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKG9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgIG9uRmFpbGVkLnJ1bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgRGVmYXVsdFJlY29yZE1hbmFnZXIgZnJvbSBcIi4vRGVmYXVsdFJlY29yZE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDlpLTmnaHlvZXlsY/nrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRUUmVjb3JkTWFuYWdlciBleHRlbmRzIERlZmF1bHRSZWNvcmRNYW5hZ2VyIHtcclxuXHJcbiAgICBzdXBwb3J0UmVjb3JkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhY2hlU3RhcnRIYW5kbGU6IExheWEuSGFuZGxlcjtcclxuICAgIHByb3RlY3RlZCBfY2FjaGVTdG9wSGFuZGxlOiBMYXlhLkhhbmRsZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NhY2hlT3ZlclRpbWVIYW5kbGU6IExheWEuSGFuZGxlcjtcclxuICAgIHByb3RlY3RlZCBfY2FjaGVQYXVzZUhhbmRsZTogTGF5YS5IYW5kbGVyO1xyXG4gICAgcHJvdGVjdGVkIF9jYWNoZVJlc3VtZUhhbmRsZTogTGF5YS5IYW5kbGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfYmFzZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9uYXRpdmVNYW5hZ2VyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFzZTogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9iYXNlID0gYmFzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSZWNvcmRTdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlciA9IHRoaXMuX2Jhc2UuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuX25hdGl2ZU1hbmFnZXIub25TdGFydCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bmz5Y+w5byA5aeL5b2V5Yi2XCIsIHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVjb3JkU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN0YXJ0SGFuZGxlICYmIHRoaXMuX2NhY2hlU3RhcnRIYW5kbGUucnVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5vblN0b3AoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW5s+WPsOWBnOatouW9leWItlwiLCByZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvU2F2ZVBhdGggPSByZXMudmlkZW9QYXRoO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWNvcmRTdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlU3RvcEhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9wSGFuZGxlLnJ1bigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NhY2hlT3ZlclRpbWVIYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlT3ZlclRpbWVIYW5kbGUucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9uYXRpdmVNYW5hZ2VyLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9leWItuWPkeeUn+mUmeivr1wiLCBlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVjb3JkU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5vblBhdXNlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmoLlgZzlvZXliLbop4bpopFcIiwgcmVzKTtcclxuICAgICAgICAgICAgdGhpcy5pc1BhdXNpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZVBhdXNlSGFuZGxlICYmIHRoaXMuX2NhY2hlUGF1c2VIYW5kbGUucnVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5vblJlc3VtZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pqC5YGc5b2V5Yi26KeG6aKRXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlUmVzdW1lSGFuZGxlICYmIHRoaXMuX2NhY2hlUmVzdW1lSGFuZGxlLnJ1bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0UmVjb3JkKG9uU3RhcnQ6IExheWEuSGFuZGxlciwgb25PdmVyVGltZTogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjlvIDlp4vlvZXlsY9cIik7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVTdGFydEhhbmRsZSA9IG9uU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVPdmVyVGltZUhhbmRsZSA9IG9uT3ZlclRpbWU7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVTdG9wSGFuZGxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5zdGFydCh7IGR1cmF0aW9uOiAzMDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUGF1c2Uob25QYXVzZTogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3mnKrlvIDlp4vlvZXliLYs5peg5rOV5pqC5YGc5b2V5Yi2XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGF1c2luZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeW9leWItueKtuaAgeW3suaaguWBnFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjmmoLlgZzlvZXliLZcIik7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVQYXVzZUhhbmRsZSA9IG9uUGF1c2U7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5wYXVzZSgpO1xyXG4gICAgfVxyXG4gICAgUmVzdW1lKG9uUmV1bWU6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5b2T5YmN5pyq5byA5aeL5b2V5Yi2LOaXoOazleaBouWkjeW9leWItlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5b2V5Yi254q25oCB5q2j5Zyo6L+b6KGM5LitXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOaBouWkjeW9leWItlwiKTtcclxuICAgICAgICB0aGlzLl9jYWNoZVJlc3VtZUhhbmRsZSA9IG9uUmV1bWU7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWNvcmRDbGlwKHRpbWVSYW5nZTogbnVtYmVyW10pIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW9k+WJjeacquW8gOWni+W9leWItizml6Dms5XorrDlvZXnsr7lvanml7bliLtcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5b2V5Yi254q25oCB5bey5pqC5YGcLOaXoOazleiusOW9leeyvuW9qeaXtuWIu1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZVJhbmdlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5yZWNvcmRDbGlwKHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVNYW5hZ2VyLnJlY29yZENsaXAoeyB0aW1lUmFuZ2U6IHRpbWVSYW5nZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3RvcFJlY29yZChvblN0b3A6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6LCD55So57uT5p2f5b2V5bGPXCIpO1xyXG4gICAgICAgIHRoaXMuX2NhY2hlU3RvcEhhbmRsZSA9IG9uU3RvcDtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWFuYWdlci5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hhcmVWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25DYW5jZWw6IExheWEuSGFuZGxlciwgb25GYWlsZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVjb3JkU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBsZXQgc2hhcmVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogXCJ2aWRlb1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0aGlzLlBsYXRmb3JtLnBsYXRmb3JtRGF0YS5zaGFyZUlkLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBleHRyYToge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogdGhpcy52aWRlb1NhdmVQYXRoLCAvLyDlj6/mm7/mjaLmiJDlvZXlsY/lvpfliLDnmoTop4bpopHlnLDlnYBcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1RvcGljczogWyfmipbpn7PlsI/muLjmiI8nLCAn5byA6Ze05Y6V5omA5b2T6ICB5p2/J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25DYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWwucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGFzIGFueTtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZS5zaGFyZUFwcE1lc3NhZ2Uoc2hhcmVEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOinhumikeWPr+S7peWIhuS6q1wiKTtcclxuICAgICAgICAgICAgaWYgKG9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkZhaWxlZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBEZWZhdWx0UmVjb3JkTWFuYWdlciBmcm9tIFwiLi9EZWZhdWx0UmVjb3JkTWFuYWdlclwiO1xyXG4vKipcclxuICogd2Vi5b2V5bGP5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2ViUmVjb3JkTWFuYWdlciBleHRlbmRzIERlZmF1bHRSZWNvcmRNYW5hZ2VyIHtcclxuXHJcbiAgICBzdXBwb3J0UmVjb3JkID0gZmFsc2U7XHJcblxyXG4gICAgU2hhcmVWaWRlbyhvblN1Y2Nlc3M6IExheWEuSGFuZGxlciwgb25DYW5jZWw6IExheWEuSGFuZGxlciwgb25GYWlsZWQ6IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRSZWNvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLrliLbmqKHmi5/miJDlip9cIik7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcy5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by65Yi25qih5ouf5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICBpZiAob25GYWlsZWQpIHtcclxuICAgICAgICAgICAgICAgIG9uRmFpbGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCBQbGF0Zm9ybU1hbmFnZXJQcm94eSBmcm9tIFwiLi9QbGF0Zm9ybU1hbmFnZXJQcm94eVwiO1xyXG5pbXBvcnQgeyBTaGFyZUluZm8gfSBmcm9tIFwiLi9UL1NoYXJlSW5mb1wiO1xyXG4vKipcclxuICog5YiG5Lqr566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZU1hbmFnZXJBS2hnZmF3Z3NkYSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU2hhcmVNYW5hZ2VyQUtoZ2Zhd2dzZGEge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNoYXJlTWFuYWdlckFLaGdmYXdnc2RhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zaGFyZUluZm9MaXN0OiBTaGFyZUluZm9bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9zaGFyZUluZm9MaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZFNoYXJlSW5mbyhzaGFyZUluZm86IFNoYXJlSW5mbykge1xyXG4gICAgICAgIGZvciAobGV0IGdldEluZm8gb2YgdGhpcy5fc2hhcmVJbmZvTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoZ2V0SW5mby5zaGFyZUlkID09IHNoYXJlSW5mby5zaGFyZUlkKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NoYXJlSW5mb0xpc3QucHVzaChzaGFyZUluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTaGFyZUluZm8oaWQ6IG51bWJlciA9IG51bGwpOiBTaGFyZUluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFyZUluZm9MaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBmYWtlU2hhcmVJbmZvID0gbmV3IFNoYXJlSW5mbygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFrZVNoYXJlSW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2hhcmVJbmZvIG9mIHRoaXMuX3NoYXJlSW5mb0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFyZUluZm8uc2hhcmVJZCA9PSBpZCkgcmV0dXJuIHNoYXJlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tU2hhcmUgPSB0aGlzLl9zaGFyZUluZm9MaXN0W01hdGguZmxvb3IodGhpcy5fc2hhcmVJbmZvTGlzdC5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbVNoYXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaGFyZUFwcE1lc3NhZ2Uoc2hhcmVJbmZvOiBTaGFyZUluZm8pIHtcclxuICAgICAgICBQbGF0Zm9ybU1hbmFnZXJQcm94eS5pbnN0YW5jZS5QbGF0Zm9ybUluc3RhbmNlLlNoYXJlQXBwTWVzc2FnZShzaGFyZUluZm8sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICB9KSwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIOW5s+WPsOexu+Wei+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVBsYXRmb3JtVHlwZSB7XHJcbiAgICAvKiog5pyq5a6a5LmJICovXHJcbiAgICBOb25lID0gJ0VQbGF0Zm9ybVR5cGVfTm9uZScsXHJcblxyXG4gICAgLyoqIOe9kemhteW5s+WPsCAqL1xyXG4gICAgV2ViID0gJ0VQbGF0Zm9ybVR5cGVfV2ViJyxcclxuXHJcbiAgICAvKiog5b6u5L+h5bCP5ri45oiPICovXHJcbiAgICBXWCA9ICdFUGxhdGZvcm1UeXBlX1dYJyxcclxuXHJcbiAgICAvKiog5aS05p2h77yM5oqW6Z+z5bCP5ri45oiPICovXHJcbiAgICBUVCA9ICdFUGxhdGZvcm1UeXBlX1RUJyxcclxuXHJcbiAgICAvKiogUVHlsI/muLjmiI8gKi9cclxuICAgIFFRID0gJ0VQbGF0Zm9ybVR5cGVfUVEnLFxyXG5cclxuICAgIC8qKiBWSVZP5bCP5ri45oiPICovXHJcbiAgICBWSVZPID0gJ0VQbGF0Zm9ybVR5cGVfVklWTycsXHJcblxyXG4gICAgLyoqIE9QUE/lsI/muLjmiI8gKi9cclxuICAgIE9QUE8gPSAnRVBsYXRmb3JtVHlwZV9PUFBPJyxcclxuXHJcbiAgICAvKiog55m+5bqm5bCP5ri45oiPICovXHJcbiAgICBCRCA9ICdFUGxhdGZvcm1UeXBlX0JEJyxcclxuXHJcbiAgICAvKiog5bCP57Gz5oiP5ri45oiPICovXHJcbiAgICBLRyA9ICdFUGxhdGZvcm1UeXBlX0tHJyxcclxuXHJcbiAgICAvKiog6Zi/6YeM5bCP5ri45oiPICovXHJcbiAgICBBbGlwYXkgPSAnRVBsYXRmb3JtVHlwZV9BbGlwYXknLFxyXG5cclxuICAgIC8qKiDljY7kuLrlsI/muLjmiI8gKi9cclxuICAgIEhXID0gJ0VQbGF0Zm9ybVR5cGVfSFcnLFxyXG5cclxuICAgIC8qKiDotqPlpLTmnaEgKi9cclxuICAgIFFUVCA9ICdFUGxhdGZvcm1UeXBlX1FUVCcsXHJcbn0iLCIvKipcclxuICog5YiG5Lqr5Lmm57GN5a6e5L6LXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2hhcmVJbmZvIHtcclxuICAgIC8qKlxyXG4gICAgICog5YiG5LqrSWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlSWQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIhuS6q+WbvueJh1VSTFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hhcmVJbWc6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIhuS6q+i3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hhcmVQYXRoOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbkuqvmoIfpophcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlVGl0bGU6IHN0cmluZztcclxufSIsImltcG9ydCBMb2FkU3VicGFja2FnZXNDb25maWcgZnJvbSBcIi4vQ29uZmlnL1N1YnBhY2thZ2VzQ29uZmlnXCI7XHJcbmltcG9ydCBQbGF0Zm9ybVQgZnJvbSBcIi4vUGxhdGZvcm0vUGxhdGZvcm1UXCI7XHJcbmltcG9ydCBQbGF0Zm9ybU1hbmFnZXIgZnJvbSBcIi4vUGxhdGZvcm0vUGxhdGZvcm1NYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICog55m95bGP5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZVNjcmVlblQge1xyXG4gICAgLyoqIOWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9zY2VuZTogTGF5YS5TY2VuZTtcclxuICAgIHByaXZhdGUgc3RhdGljIG1fYmc6IExheWEuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9wYW5OdW1iZXI6IExheWEuVGV4dFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZChbXHJcbiAgICAgICAgICAgICAgICBcImluaXRMb2FkLmpzb25cIixcclxuICAgICAgICAgICAgICAgICdhdGxhcy9pbml0TG9hZC5hdGxhcycsXHJcbiAgICAgICAgICAgICAgICAnYXRsYXMvaW5pdExvYWQucG5nJyxcclxuICAgICAgICAgICAgXSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByKCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5omT5byA55m95bGPdWlcclxuICAgICAgICAgICAgTGF5YS5TY2VuZS5vcGVuKCdpbml0TG9hZC5qc29uJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKF9zY2VuZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lID0gX3NjZW5lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2JnID0gdGhpcy5tX3NjZW5lLmdldENoaWxkQnlOYW1lKCdiZycpIGFzIExheWEuU3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3Bhbk51bWJlciA9IHRoaXMubV9zY2VuZS5nZXRDaGlsZEJ5TmFtZSgncGFuTnVtYmVyJykgYXMgTGF5YS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAvL+ebkeWQrOWxj+W5leaUueWPmOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LlJFU0laRSwgdGhpcywgdGhpcy51cGRhdGVWaWV3KTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5MYXRlcigpLnRoZW4ocik7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOS5i+WQjueahOWbnuiwg++8jOWPr+S7peWcqOatpOWKoOi9veWIhuWMhVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcGVuTGF0ZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvL+WIneWni+WMluW5s+WPsFxyXG4gICAgICAgIFBsYXRmb3JtTWFuYWdlci5pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLmluc3RhbmNlLmluaXRQbGF0Zm9ybSgpO1xyXG4gICAgICAgIC8v5Yqg6L296ZyA6KaB5Yqg6L2955qE5YiG5YyFXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKExvYWRTdWJwYWNrYWdlc0NvbmZpZy5zdWJwYWNrYWdlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWZMb2FkO1xyXG4gICAgICAgIH0pLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUGxhdGZvcm1ULkxvYWRTdWJQS0coaXRlbS5uYW1lKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQbGFuKF9uOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u6L+b5bqmJywgX24pO1xyXG4gICAgICAgIHRoaXMubV9wYW5OdW1iZXIudGV4dCA9IGAlICR7TWF0aC5mbG9vcihfbiAqIDEwMCl9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXrVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsb3NlKCkge1xyXG4gICAgICAgIC8v5Yig6Zmk5Zy65pmvXHJcbiAgICAgICAgdGhpcy5tX3NjZW5lICYmIHRoaXMubV9zY2VuZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1fYmcgPSBudWxsO1xyXG4gICAgICAgIC8v5YWz6Zet55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vZmZBbGxDYWxsZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDop4blm75cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVmlldygpIHtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSBMYXlhLnN0YWdlLndpZHRoO1xyXG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSBMYXlhLnN0YWdlLmhlaWdodDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS53aWR0aCA9IF93aWR0aDtcclxuICAgICAgICB0aGlzLm1fc2NlbmUuaGVpZ2h0ID0gX2hlaWdodDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubV9iZy53aWR0aCA9IF93aWR0aDtcclxuICAgICAgICB0aGlzLm1fYmcuaGVpZ2h0ID0gX2hlaWdodDtcclxuICAgICAgICB0aGlzLm1fcGFuTnVtYmVyLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9wYW5OdW1iZXIuaGVpZ2h0ID0gX2hlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElCYXNlQ29uZmlnQ29udGFpbmVyLCBJQ29uZmlnQ29udGFpbmVyLCBJQ29uc3RDb250YWluZXIgfSBmcm9tIFwiLi9Db25maWdUXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5jbGFzcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUJhc2VDb25maWdDb250YWluZXI7XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY3miafooYwgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMliDkvb/nlKjml7bopobnm5ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXREYXRhKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWfmlbDmja7ku6PnkIbln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb25maWdQcm94eTxEYXRhPiBleHRlbmRzIF9CYXNlQ29uZmlnUHJveHkge1xyXG4gICAgLyoqIOmFjee9ruihqOaooeadvyAqL1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1RlbXBsYXRlOiBJQ29uZmlnQ29udGFpbmVyO1xyXG5cclxuICAgIC8v6YWN572u5pWw5o2u5YiX6KGoXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhTGlzdDogRGF0YVtdO1xyXG5cclxuICAgIC8qKiDphY3nva7mlbDmja7liJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YUxpc3QoKTogRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGFMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbkuYvliY0gKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tX2RhdGFMaXN0ID0gdGhpcy5jb25maWdUZW1wbGF0ZS5kYXRhcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN05pWw5o2u5Luj55CG5Z+657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZUNvbnN0UHJveHk8RGF0YT4gZXh0ZW5kcyBfQmFzZUNvbmZpZ1Byb3h5IHtcclxuICAgIC8qKiDphY3nva7ooajmqKHmnb8gKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdUZW1wbGF0ZTogSUNvbnN0Q29udGFpbmVyO1xyXG5cclxuICAgIC8v6YWN572u5pWw5o2uXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhOiBEYXRhO1xyXG5cclxuICAgIC8qKiDphY3nva7mlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluS5i+WJjSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm1fZGF0YSA9IHRoaXMuY29uZmlnVGVtcGxhdGUuZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElDb25maWdEYXRhIH0gZnJvbSBcIi4uL2NvbS9JQ29uZmlnRGF0YVwiO1xyXG5pbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgRXNzZW50aWFsUmVzVXJscyBmcm9tIFwiLi4vUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICog6YWN572u6KGo5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWdUIHtcclxuICAgIC8qKlxyXG4gICAgICog6KOF6aWw6YWN572u6KGo5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZyDphY3nva7ooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUNvbmZpZ1Byb3h5KF9jb25maWc6IElCYXNlQ29uZmlnQ29udGFpbmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICAvL+iuvue9rumFjee9ruihqOaooeadv1xyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLmNvbmZpZ1RlbXBsYXRlID0gX2NvbmZpZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7rphY3nva7ooajliJfooahcclxuICAgICAqIOWPquaehOW7uu+8jOS4jeWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb25maWdzIOmFjee9ruihqOWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJ1aWxkQ29uZmlncyhfY29uZmlnczogSUJhc2VDb25maWdDb250YWluZXJbXSkge1xyXG4gICAgICAgIGxldCBfdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgZm9yIChsZXQgX28gb2YgX2NvbmZpZ3MpIHtcclxuICAgICAgICAgICAgX3VybCA9IEVzc2VudGlhbFJlc1VybHMuQ29uZmlnSnNvblVSTChfby5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgIC8v5aGr5YWF5pWw5o2uXHJcbiAgICAgICAgICAgIHN3aXRjaCAoX28udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAoX28gYXMgSUNvbmZpZ0NvbnRhaW5lcikuZGF0YXMgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29uc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIChfbyBhcyBJQ29uc3RDb250YWluZXIpLmRhdGEgPSB0aGlzLmdldENvbmZpZ0pzb25EYXRhKF91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YWN572u6KGoanNvbuaVsOaNrlxyXG4gICAgICog77yB5rOo5oSP77yM6I635Y+W5LqG6K+l6LWE5rqQ6K+l6LWE5rqQ5bCx5Lya6KKr5Yig6Zmk5o6JXHJcbiAgICAgKiBAcGFyYW0gX3VybCDphY3nva7ooajotYTmupDlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdKc29uRGF0YShfdXJsOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8v6I635Y+W6LWE5rqQXHJcbiAgICAgICAgbGV0IGNvbmZpZ0RhdGE6IElDb25maWdEYXRhID0gUmVzTG9hZC5HZXRSZXMoX3VybCwgdHJ1ZSk7XHJcbiAgICAgICAgLy/muIXnkIbotYTmupDnvJPlrZjlj6rkvb/nlKjkuIDmrKFcclxuICAgICAgICBSZXNMb2FkLkNsZWFyUmVzKF91cmwpO1xyXG4gICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5Y6L57ypXHJcbiAgICAgICAgaWYgKGNvbmZpZ0RhdGEuemlwKSB7XHJcbiAgICAgICAgICAgIC8v6Kej5Y6LXHJcbiAgICAgICAgICAgIGxldCBfdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uZmlnRGF0YS5kYXRhID0gSlNPTi5wYXJzZShwYWtvLmluZmxhdGUoY29uZmlnRGF0YS5kYXRhLCB7IHRvOiAnc3RyaW5nJyB9KSk7XHJcbiAgICAgICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgICAgICAvL+WIpOaWreino+WOi+aXtumXtOW3rlxyXG4gICAgICAgICAgICBpZiAoX3RpbWUgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+mFjee9ruihqOino+WOi+aXtumXtOi/h+mVv++8jOWPr+iDveaYr+mFjee9ruihqOaWh+S7tui/h+Wkpy0+JywgX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ0RhdGEuZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWfuuexu+mFjee9ruihqOWuueWZqOaOpeWPo1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNvbmZpZ0NvbnRhaW5lciB7XHJcbiAgICAvKiog6YWN572u6KGo57G75Z6LICovXHJcbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgICAvKiog5paH5Lu25ZCN5a2XICovXHJcbiAgICByZWFkb25seSBmaWxlTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogY29uZmlnIOWuueWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnQ29udGFpbmVyIGV4dGVuZHMgSUJhc2VDb25maWdDb250YWluZXIge1xyXG4gICAgLyoqIOaVsOaNruWIl+ihqCAqL1xyXG4gICAgZGF0YXM6IGFueVtdO1xyXG59XHJcblxyXG4vKipcclxuICogY29uc3Qg5a655ZmoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdENvbnRhaW5lciBleHRlbmRzIElCYXNlQ29uZmlnQ29udGFpbmVyIHtcclxuICAgIC8qKiDmlbDmja4gKi9cclxuICAgIGRhdGE6IGFueTtcclxufSIsIi8qKlxyXG4gKiDmiZPljbDlj7DluLjnlKjphY3nva5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVDb25zdCB7XHJcblxyXG4gICAgLyoqIOWFrOWFseagt+W8jyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHB1YmxpY1N0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pmu6YCa5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2dTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyM5QkE0QjQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6L275raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2dMaWdodFN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyM3NzZkOGEnLCAnI0VCRUJFQicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorablkYrmtojmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdhcm5TdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjNWM2ZTA2JywgJyNmZmE5MzEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6ZSZ6K+v5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBlcnJvclN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3R5bGUoJyNmZmYnLCAnI2VjMDEwMScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiog5oiQ5Yqf5raI5oGvICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBjb21TdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0eWxlKCcjZmZmJywgJyNhZGU0OTgnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmoLflvI9cclxuICAgICAqIEBwYXJhbSBfY29sb3Ig5a2X5L2T6aKc6ImyXHJcbiAgICAgKiBAcGFyYW0gX2JnQ29sb3Ig6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3R5bGUoX2NvbG9yOiBzdHJpbmcsIF9iZ0NvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtfYmdDb2xvcn07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgYCsgdGhpcy5wdWJsaWNTdHlsZTtcclxuICAgIH1cclxufSIsImltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29uc29sZUNvbnN0IGZyb20gXCIuL0NvbnNvbGVDb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOaJk+WNsOWPsOaJqeWxlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUV4IHtcclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gX3N0eWxlIOagt+W8j1xyXG4gICAgICogQHBhcmFtIF9wYXIg5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBhY2soX3N0eWxlOiBzdHJpbmcsIF9wYXI6IGFueVtdKTogYW55IHtcclxuICAgICAgICByZXR1cm4gWyclYyVzJywgX3N0eWxlLCAnbG9nJywgLi4uX3Bhcl07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWMheijheaZrumAmua2iOaBr1xyXG4gICAgICogQHBhcmFtIGFueSDlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYWNrTG9nKC4uLmFueTogYW55W10pIHtcclxuICAgICAgICBpZiAoX01haW5Db25maWcuT25MaW5lKSB7IHJldHVybiBhbnk7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhY2soQ29uc29sZUNvbnN0LmxvZ1N0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5pmu6YCa6L275raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tMb2dMaWdodCguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5sb2dMaWdodFN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF5oiQ5Yqf5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tDb20oLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3QuY29tU3R5bGUsIGFueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljIXoo4XorablkYrmtojmga9cclxuICAgICAqIEBwYXJhbSBhbnkg5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFja1dhcm4oLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChfTWFpbkNvbmZpZy5PbkxpbmUpIHsgcmV0dXJuIGFueTsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjayhDb25zb2xlQ29uc3Qud2FyblN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YyF6KOF6ZSZ6K+v5raI5oGvXHJcbiAgICAgKiBAcGFyYW0gYW55IOWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhY2tFcnJvciguLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSkgeyByZXR1cm4gYW55OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNrKENvbnNvbGVDb25zdC5lcnJvclN0eWxlLCBhbnkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZHVUlSb290TWFuYWdlciBmcm9tIFwiLi9GR1VJL0ZHVUlSb290TWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIDJk566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEMk1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8qKiBmZ3Vp5qC5566h55CG5ZmoICovXHJcbiAgICAgICAgRkdVSVJvb3RNYW5hZ2VyLmluaXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlVUlDb24sIHsgSUJhc2VVSUNvbkRlZmluZXMgfSBmcm9tIFwiLi9CYXNlVUlDb25cIjtcclxuaW1wb3J0IElVSUNyZWF0ZSBmcm9tIFwiLi9JVUlDcmVhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvljZXpobXpnaLmjqfliLblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaW5nbGVVSUNvbjxVSSBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4gZXh0ZW5kcyBCYXNlVUlDb24ge1xyXG4gICAgLyoqIF9VSSDnsbvlnosgKi9cclxuICAgIHByb3RlY3RlZCBfVUk6IElVSUNyZWF0ZTxVST47XHJcblxyXG4gICAgLyoqIHVp57G75Z6L5YiX6KGoICovXHJcbiAgICBwcm90ZWN0ZWQgX1VJczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IElCYXNlVUlDb25EZWZpbmVzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKiogdWkgKi9cclxuICAgIHByaXZhdGUgbV91aTogVUk7XHJcblxyXG4gICAgLyoqIOiOt+WPlnVpICovXHJcbiAgICBwdWJsaWMgZ2V0IHVpKCk6IFVJIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7p1aeS5i+WJjeeahOaJqeWxleWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUJlZm9yZUV4KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u5Y2VdWlcclxuICAgICAgICAgICAgdGhpcy5fVUlzID0ge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ3JlYXRlOiB0aGlzLl9VSSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJvlu7rlrozmiJB1aeWQjueahOaJqeWxleWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUVYKCkge1xyXG4gICAgICAgIHRoaXMubV91aSA9IHRoaXMuX1VJcy5kZWZhdWx0LnVpIGFzIFVJO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlVUlDb25Qcm94eSBmcm9tIFwiLi9CYXNlVUlDb25Qcm94eVwiO1xyXG5pbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcbmltcG9ydCBGR3VpRGF0YSBmcm9tIFwiLi9GR3VpRGF0YVwiO1xyXG5pbXBvcnQgRkdVSVJvb3RNYW5hZ2VyIGZyb20gXCIuL0ZHVUlSb290TWFuYWdlclwiO1xyXG5pbXBvcnQgRkdVSVQgZnJvbSBcIi4vRkdVSVRcIjtcclxuaW1wb3J0IElVSUNyZWF0ZSBmcm9tIFwiLi9JVUlDcmVhdGVcIjtcclxuaW1wb3J0IFJvb3RVSUNvbiBmcm9tIFwiLi9Sb290VUlDb25cIjtcclxuXHJcbi8qKlxyXG4gKiBVSeaOp+WItuWZqOWfuuexuyjnlKjmnaXmjqfliLZVSeeVjOmdoilcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VVSUNvbiBleHRlbmRzIFJvb3RVSUNvbiB7XHJcbiAgICAvKiogVUnliJfooajvvIzlj6/ku6XmmL7npLrlvojlpJrkuKp1aSAqL1xyXG4gICAgcHJvdGVjdGVkIF9VSXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBJQmFzZVVJQ29uRGVmaW5lcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqIOWUr+S4gOmUruWAvCAqL1xyXG4gICAgcHJpdmF0ZSBtX2tleTogc3ltYm9sID0gU3ltYm9sKCk7XHJcbiAgICAvKiog6I635Y+W5ZSv5LiA6ZSu5YC8ICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzeW1ib2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmoLl1aeWunuS+iyAqL1xyXG4gICAgcHJpdmF0ZSBtX3Jvb3RVSTogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgLyoqIOaguXVp5a6e5L6LICovXHJcbiAgICBwdWJsaWMgZ2V0IHJvb3RVSSgpOiBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcm9vdFVJO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKblnKjpmpDol4/ml7bmuIXnkIbmjol1ae+8jOm7mOiupOS4unRydWUgKi9cclxuICAgIHByb3RlY3RlZCBfaWZDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFVJ5bGC57qn57G75Z6L77yM5b+F6aG75Zyo5Yid5aeL5YyW5pe26K6+572uICovXHJcbiAgICBwcm90ZWN0ZWQgX2xheWVyOiBFVUlMYXllciA9IEVVSUxheWVyLlBhbmVsO1xyXG5cclxuICAgIC8qKiB1aeWxgue6pyAqL1xyXG4gICAgcHVibGljIGdldCBsYXllcigpOiBFVUlMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cclxuICAgIHByaXZhdGUgbV9pZlNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKiog5piv5ZCm5pi+56S6ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmU2hvdygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKiogdWnku6PnkIbliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcm94eVVJTGlzdDogU2V0PEJhc2VVSUNvblByb3h5PGZndWkuR0NvbXBvbmVudCwgQmFzZVVJQ29uPj4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuYWRkKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKp1aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF9wcm94eSDor6Xku6PnkIZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVVJUHJveHkoX3Byb3h5OiBCYXNlVUlDb25Qcm94eTxmZ3VpLkdDb21wb25lbnQsIEJhc2VVSUNvbj4pIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZGVsZXRlKF9wcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1VJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5TaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/ku6PnkIZ1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVVJUHJveHkoKSB7XHJcbiAgICAgICAgdGhpcy5tX3Byb3h5VUlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5IaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5PmnZ91aeS7o+eQhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5kVUlQcm94eSgpIHtcclxuICAgICAgICB0aGlzLm1fcHJveHlVSUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmVuZFByb3h5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7p1aVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVVSSgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVVSUJlZm9yZUV4KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLB1aeWIm+W7uuWZqOWIl+ihqCEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5YyW5qC56IqC54K5dWlcclxuICAgICAgICB0aGlzLm1fcm9vdFVJID0gbmV3IGZndWkuR0NvbXBvbmVudCgpO1xyXG4gICAgICAgIEZHVUlSb290TWFuYWdlci5nZXRMYXllclVJKHRoaXMuX2xheWVyKS5hZGRDaGlsZCh0aGlzLm1fcm9vdFVJKTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLl9VSXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aSA9IHRoaXMubV9yb290VUkuYWRkQ2hpbGQodGhpcy5fVUlzW19pXS51aUNyZWF0ZS5jcmVhdGVJbnN0YW5jZSgpKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlVUlFWCgpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIm+W7unVp5LmL5YmN55qE5omp5bGV5Zue6LCDIOWPquiDveWcqOaJqeWxleS4reS9v+eUqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVVSUJlZm9yZUV4KCkgeyB9XHJcbiAgICAvKiog5Yib5bu65a6M5oiQdWnlkI7nmoTmianlsZXlm57osIMg5Y+q6IO95Zyo5omp5bGV5Lit5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVVJRVgoKSB7IH1cclxuXHJcbiAgICAvKiog5Yib5bu65a6MdWnlkI7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVUkoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVpXHJcbiAgICAgKiBAcGFyYW0gX25hbWUgdWnlkI3lrZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJPFVJIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PihfbmFtZTogc3RyaW5nKTogVUkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9VSXNbX25hbWVdLnVpIGFzIFVJO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KC4uLnBhcjogYW55W10pIHtcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm1faWZTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9vblNob3dCZWZvcmUoLi4ucGFyKTtcclxuICAgICAgICBsZXQgX2lmTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJIHx8IHRoaXMubV9yb290VUkuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAvL+WIm+W7unVpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuICAgICAgICAgICAgX2lmTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fcm9vdFVJLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7liLDlvZPliY3lsYLnuqfpobblsYLmmL7npLpcclxuICAgICAgICBGR1VJVC5zZXRVSVRvcFNob3codGhpcy5tX3Jvb3RVSSk7XHJcbiAgICAgICAgLy/miYvliqjmm7TmlrDkuIDmrKFcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICAvL+ebkeWQrOS6i+S7tlxyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9vblNob3coX2lmTmV3LCAuLi5wYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb25TaG93QmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgcHJvdGVjdGVkIF9vblNob3coX2lmTmV3OiBib29sZWFuLCAuLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj1xyXG4gICAgICogQHBhcmFtIF9pZkNsZWFyIOaYr+WQpua4heeQhlxyXG4gICAgICogQHBhcmFtIHBhciDlhbbku5blj4LmlbDvvIzkvJrkvKDliLDpmpDol4/nmoTlm57osIPkuK1cclxuICAgICAqL1xyXG4gICAgcHVibGljIEhpZGUoX2lmQ2xlYXI6IGJvb2xlYW4gPSB0aGlzLl9pZkNsZWFyLCAuLi5wYXI6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1faWZTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZlNob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vbkhpZGVCZWZvcmUocGFyKTtcclxuICAgICAgICBpZiAoX2lmQ2xlYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIC8v5riF55CG5byV55SoXHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX1VJcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgdGhpcy5fZGlzcG9zZVVJKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RVSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+W5raI55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vZmYoTGF5YS5FdmVudC5SRVNJWkUsIHRoaXMsIHRoaXMudXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9vbkhpZGUoX2lmQ2xlYXIsIHBhcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHVp6KKr5riF55CG5pe255qE5Zue6LCDICovXHJcbiAgICBwcm90ZWN0ZWQgX2Rpc3Bvc2VVSSgpIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pIHsgfVxyXG4gICAgcHJvdGVjdGVkIF9vbkhpZGUoX2lmRGVsZXRlOiBib29sZWFuLCAuLi5wYXI6IGFueVtdKSB7IH1cclxuXHJcbiAgICAvKiog5pu05paw5aSn5bCPICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgLy/moLnmja7lrZB1aeaQuuW4pueahOaVsOaNrumAgumFjeWxj+W5leWkp+Wwj1xyXG4gICAgICAgIGxldCBfZGF0YTogRkd1aURhdGE7XHJcbiAgICAgICAgbGV0IF93aWR0aDogbnVtYmVyID0gTGF5YS5zdGFnZS53aWR0aDtcclxuICAgICAgICBsZXQgX2hlaWdodDogbnVtYmVyID0gTGF5YS5zdGFnZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgaW4gdGhpcy5fVUlzKSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gdGhpcy5fVUlzW19pXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoIV9kYXRhIHx8ICFfZGF0YS5pZlVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVUlzW19pXS51aS5zZXRYWSgwLCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX1VJc1tfaV0udWkuc2V0U2l6ZShfd2lkdGggLSBfZGF0YS5sZWZ0IC0gX2RhdGEucmlnaHQsIF9oZWlnaHQgLSBfZGF0YS5ib3R0b20gLSBfZGF0YS50b3ApO1xyXG4gICAgICAgICAgICB0aGlzLl9VSXNbX2ldLnVpLnNldFhZKF9kYXRhLmxlZnQsIF9kYXRhLnRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Z+657G7dWnmjqfliLblmajnsbvlnovmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VVSUNvbkRlZmluZXMge1xyXG4gICAgLyoqIHVp5Yib5bu65ZmoICovXHJcbiAgICB1aUNyZWF0ZTogSVVJQ3JlYXRlPGZndWkuR0NvbXBvbmVudD47XHJcbiAgICAvKiog5pWw5o2uICovXHJcbiAgICBkYXRhPzogRkd1aURhdGE7XHJcbiAgICAvKiogdWkgKi9cclxuICAgIHVpPzogZmd1aS5HQ29tcG9uZW50O1xyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBCYXNlVUlDb24gZnJvbSBcIi4vQmFzZVVJQ29uXCI7XHJcblxyXG4vKipcclxuICogdWnmjqfliLblmajnrqHnkIblmahcclxuICog57uf5LiA566h55CGdWnmjqfliLblmahcclxuICog5b+F6aG76YWN5ZCI5Luj55CG5Zmo5L2/55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlVUlDb25NYW5hZ2VyPFByb3h5IGV4dGVuZHMgQmFzZVVJQ29uTWFuYWdlclByb3h5PiB7XHJcbiAgICAvKiogdWnmjqfliLblmajliJfooaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpQ29uTGlzdDoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IEJhc2VVSUNvbixcclxuICAgIH07XHJcbiAgICAvKiogdWnku6PnkIblmaggKi9cclxuICAgIHByb3RlY3RlZCBtX3VpUHJveHk6IFByb3h5O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICog5qGG5p626LCD55So77yM5LiN6IO955u05o6l6LCD55SoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICB0aGlzLl9faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIPvvIznu6fmib/kvb/nlKjvvIzkuLvopoHorr7nva51aeWIl+ihqOWSjOS7o+eQhuWZqCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJbkuYvlkI7nmoTmo4DmtYtcclxuICAgIHByaXZhdGUgX19pbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX3VpQ29uTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCd1aeaOp+WItueuoeeQhuWZqOayoeacieWIneWni+WMlueuoeeQhueahHVp5YiX6KGoJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubV91aVByb3h5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ3Vp5o6n5Yi2566h55CG5Zmo5rKh5pyJ5Yid5aeL5YyWdWnku6PnkIYnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/orr7nva7ku6PnkIblmajku6PnkIZcclxuICAgICAgICAgICAgdGhpcy5tX3VpUHJveHkuc2V0UHJveHkodGhpcy5tX3VpQ29uTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdWkg5o6n5Yi25Zmo566h55CG5Zmo5Luj55CGXHJcbiAqIOi0n+i0o+S7o+eQhnVp5o6n5Yi25Zmo566h55CG5Zmo5Lit55qE5o6n5Yi25Zmo77yM6Ziy5q2i5b6q546v5L6d6LWWXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVVJQ29uTWFuYWdlclByb3h5IHtcclxuICAgIC8qKiB1aeaOp+WItuWZqOWIl+ihqCAqL1xyXG4gICAgcHJvdGVjdGVkIG1fdWlDb25MaXN0OiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogQmFzZVVJQ29uLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKiog6I635Y+W5b2T5YmN5pi+56S655qEdWkgKi9cclxuICAgIHB1YmxpYyBnZXQgb25TaG93VUkoKTogQmFzZVVJQ29uW10ge1xyXG4gICAgICAgIGxldCBfdWlDb25zOiBCYXNlVUlDb25bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtfaV0uaWZTaG93ICYmIF91aUNvbnMucHVzaCh0aGlzLm1fdWlDb25MaXN0W19pXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF91aUNvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeS7o+eQhlxyXG4gICAgICogQHBhcmFtIF91aUxpc3QgdWnliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFByb3h5KF91aUxpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBCYXNlVUlDb24sXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5tX3VpQ29uTGlzdCA9IF91aUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja51aemUruWAvOiOt+WPluS4gOS4qnVpXHJcbiAgICAgKiBAcGFyYW0gX2tleSB1aemUruWAvFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUk8VUlDb24gZXh0ZW5kcyBCYXNlVUlDb24+KF9rZXk6IHN0cmluZyk6IFVJQ29uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VpQ29uTGlzdFtfa2V5XSBhcyBVSUNvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekunVp5o6n5Yi25ZmoXHJcbiAgICAgKiBAcGFyYW0gX3VpQ29uIHVp5o6n5Yi25Zmo57Si5byV5oiW6ICF57Si5byV5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX2lmSGlkZU90aGVyVUkg5piv5ZCm6ZqQ6JeP5YW25LuWdWkgW3RydWVdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VUkoX3VpQ29uOiBzdHJpbmcgfCBzdHJpbmdbXSwgX2lmSGlkZU90aGVyVUk6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpumakOiXj+WFtuS7lnVpXHJcbiAgICAgICAgaWYgKF9pZkhpZGVPdGhlclVJKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMubV91aUNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICghX3VpQ29ucy5pbmNsdWRlcyhfaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W19pXS5IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3VpQ29ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fdWlDb25MaXN0W2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dLlNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePdWnmjqfliLblmahcclxuICAgICAqIEBwYXJhbSBfdWlDb24gdWnmjqfliLblmajlrp7kvovmiJbliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVVSShfdWlDb246IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgbGV0IF91aUNvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF91aUNvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaCguLi5fdWlDb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF91aUNvbnMucHVzaChfdWlDb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdWlDb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tX3VpQ29uTGlzdFtpdGVtXSAmJiB0aGlzLm1fdWlDb25MaXN0W2l0ZW1dLkhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+W9k+WJjeaYvuekuueahOaJgOaciXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlQWxsVUkoKSB7XHJcbiAgICAgICAgdGhpcy5vblNob3dVSS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uSGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJblm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHsgfVxyXG59IiwiLyoqXHJcbiAqIFVJ5YiG5bGCLOaMiemhuuW6j+aYvuekulxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVVJTGF5ZXIge1xyXG4gICAgLyoqIOiDjOaZr+mhtemdoiAqL1xyXG4gICAgQmcgPSAnQmcnLFxyXG4gICAgLyoqIOS4u+eVjOmdoiAg5rC46L+c5a2Y5ZyoICovXHJcbiAgICBNYWluID0gXCJNYWluXCIsXHJcbiAgICAvKiog6Z2i5p2/ICDlj6/ku6XmnInlvojlpJogKi9cclxuICAgIFBhbmVsID0gXCJQYW5lbFwiLFxyXG4gICAgLyoqIOW8ueeqlyAqL1xyXG4gICAgUG9wdXAgPSBcIlBvcHVwXCIsXHJcbiAgICAvKiog6YGT5YW3ICovXHJcbiAgICBQcm9wID0gJ1Byb3AnLFxyXG4gICAgLyoqIOWwj+mDqOS7tiAqL1xyXG4gICAgVGlwID0gXCJUaXBcIixcclxuICAgIC8qKiDmmoLlgZwgKi9cclxuICAgIFBhdXNlID0gJ1BhdXNlJyxcclxuICAgIC8qKiDorr7nva4gKi9cclxuICAgIFNldCA9ICdTZXQnLFxyXG4gICAgLyoqIOacgOmrmCAqL1xyXG4gICAgVG9wID0gJ1RvcCcsXHJcbiAgICAvKiog5Yqg6L296aG16Z2iICovXHJcbiAgICBMb2FkaW5nID0gJ0xvYWRpbmcnLFxyXG4gICAgLyoqIOWOn+eUnyAqL1xyXG4gICAgTmF0aXZlID0gJ05hdGl2ZScsXHJcbn0iLCJpbXBvcnQgX0NvbnN0Q29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19Db25zdENvbmZpZ1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcblxyXG4vKipcclxuICogVUnljIXnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGR1VJUGFjayB7XHJcbiAgICAvLyDljIXot6/lvoRcclxuICAgIHByaXZhdGUgcGFja1BhdGg6IHN0cmluZztcclxuICAgIC8vIOWFtuS7lui1hOa6kOaVsOmHj1xyXG4gICAgcHJpdmF0ZSBhdGxpYXNDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YyFXHJcbiAgICAgKiBAcGFyYW0gX3BhY2tVcmwg5YyF5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gX2F0bGlhc0NvdW50IOWbvumbhuaVsOmHj1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcGFja1VybDogc3RyaW5nLCBfYXRsaWFzQ291bnQ6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrUGF0aCA9IF9wYWNrVXJsO1xyXG4gICAgICAgIHRoaXMuYXRsaWFzQ291bnQgPSBfYXRsaWFzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICB0aGlzLmdldFJlc1VSTChfdXJscyk7XHJcbiAgICAgICAgcmV0dXJuIFJlc0xvYWQuTG9hZDJEQXN5bmMoX3VybHMsIF9vblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOaciei1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHVybHMg6L6T5Ye65pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZXNVUkwodXJsczogYW55W10pIHtcclxuICAgICAgICAvL+WKoOWFpeWMheWQjVxyXG4gICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArICcuJyArIF9Db25zdENvbmZpZy5GR1VJLnBhY2thZ2VGaWxlRXh0ZW5zaW9uLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSk7XHJcbiAgICAgICAgLy/liqDovb3nurnnkIbpm4ZcclxuICAgICAgICBpZiAodGhpcy5hdGxpYXNDb3VudCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHVybHMucHVzaCh7IHVybDogdGhpcy5wYWNrUGF0aCArIFwiX2F0bGFzMC5wbmdcIiwgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuYXRsaWFzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdXJscy5wdXNoKHsgdXJsOiB0aGlzLnBhY2tQYXRoICsgXCJfYXRsYXMwX1wiICsgaSArIFwiLnBuZ1wiLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBfQ29uc3RDb25maWcgZnJvbSBcInNyYy9Db25maWcvX0NvbnN0Q29uZmlnXCI7XHJcbmltcG9ydCB7IEVVSUxheWVyIH0gZnJvbSBcIi4vRVVJTGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBGR1VJIOagueeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdVSVJvb3RNYW5hZ2VyIHtcclxuICAgIC8vVUnlsYLnuqd1aeWIl+ihqFxyXG4gICAgcHVibGljIHN0YXRpYyBsYXllclVJTGlzdDogeyBbaW5kZXg6IHN0cmluZ106IGZndWkuR0NvbXBvbmVudCB9O1xyXG5cclxuICAgIC8vIOiOt+WPluafkOS4gOWxglVJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExheWVyVUkobGF5ZXJUeXBlOiBFVUlMYXllcik6IGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllclVJTGlzdFtsYXllclR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICAvLyDorr7nva7ljIXlkI3lkI7nvIBcclxuICAgICAgICBmZ3VpLlVJQ29uZmlnLnBhY2thZ2VGaWxlRXh0ZW5zaW9uID0gX0NvbnN0Q29uZmlnLkZHVUkucGFja2FnZUZpbGVFeHRlbnNpb247XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcbiAgICAgICAgLy/mt7vliqBGR1VJ5qC56IqC54K55oyJ6aG65bqP5pi+56S6XHJcbiAgICAgICAgdGhpcy5sYXllclVJTGlzdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIEVVSUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJVSUxpc3RbRVVJTGF5ZXJbX2ldXSA9IGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChuZXcgZmd1aS5HQ29tcG9uZW50KCkpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVUlMYXllciB9IGZyb20gXCIuL0VVSUxheWVyXCI7XHJcblxyXG4vKipcclxuICogZmd1aSDlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHVUlUIHtcclxuICAgIC8qKiB1aeWxgue6p2tleSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlMYXllcktleTogc3ltYm9sID0gU3ltYm9sKCdVSUxheWVyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva51aeWxgue6p++8jOmZpOS6hmZndWnmoLnnrqHnkIblmajlm57osIPnlKjvvIzlhbbku5bnmoTlnLDmlrnor7fkuI3opoHosIPnlKhcclxuICAgICAqIEBwYXJhbSBfdWkgdWkgXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyIOWxgue6pyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVSUxheWVyKF91aTogZmd1aS5HQ29tcG9uZW50LCBfbGF5ZXI6IEVVSUxheWVyKSB7XHJcbiAgICAgICAgX3VpW3RoaXMuVUlMYXllcktleV0gPSBfbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z1aeWxgue6p1xyXG4gICAgICogQHBhcmFtIF91aSB1aSBcclxuICAgICAqIEByZXR1cm5zIHVp5bGC57qnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlMYXllcihfdWk6IGZndWkuR0NvbXBvbmVudCk6IEVVSUxheWVyIHtcclxuICAgICAgICByZXR1cm4gX3VpW3RoaXMuVUlMYXllcktleV0gYXMgRVVJTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIDkuKp1aemhtuWxguaYvuekulxyXG4gICAgICogQHBhcmFtIF91aSDor6V1aVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVJVG9wU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5aSn55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWF4KF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4qnVp5bqV5bGC5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gX3VpIOivpXVpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VUlEb3duU2hvdyhfdWk6IGZndWkuR0NvbXBvbmVudCkge1xyXG4gICAgICAgIC8v6I635Y+W5pyA5bCP55qE5pi+56S66aG65bqPXHJcbiAgICAgICAgbGV0IF9zb3J0aW5nT3JkZXI6IG51bWJlciA9IF91aS5zb3J0aW5nT3JkZXI7XHJcbiAgICAgICAgbGV0IF9wYXJlbnRVSTogZmd1aS5HQ29tcG9uZW50ID0gX3VpLnBhcmVudDtcclxuICAgICAgICBmb3IgKGxldCBfaSA9IDAsIGxlbmd0aCA9IF9wYXJlbnRVSS5udW1DaGlsZHJlbjsgX2kgPCBsZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgX3NvcnRpbmdPcmRlciA9IE1hdGgubWluKF9zb3J0aW5nT3JkZXIsIF9wYXJlbnRVSS5nZXRDaGlsZEF0KF9pKS5zb3J0aW5nT3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeaWsOiuvue9rumhuuW6j1xyXG4gICAgICAgIF91aS5zb3J0aW5nT3JkZXIgPSBfc29ydGluZ09yZGVyIC0gMTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmoLl1aeaOp+WItuWZqFxyXG4gKiDmiYDmnIl1aeaOp+WItuWZqOexu+Wei+exu+Wdh+eUseatpOe7p+aJv1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUm9vdFVJQ29uIHtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6VUlcclxuICAgICAqIEBwYXJhbSBwYXIg5Y+C5pWw77yM5Lya5YWo6YOo5Lyg57uZ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTaG93KC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LmL5YmN6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gcGFyIOaYvuekuuaWueazleWbnuiwg+eahOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX29uU2hvd0JlZm9yZSguLi5wYXI6IGFueVtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS5i+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtIF9pZk5ldyDmmK/lkKbmlrDlu7pcclxuICAgICAqIEBwYXJhbSBwYXIg5pi+56S65pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TaG93KF9pZk5ldzogYm9vbGVhbiwgLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol49VSVxyXG4gICAgICogQHBhcmFtIHBhciDlj4LmlbDvvIzkvJrlhajpg6jkvKDnu5nlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IEhpZGUoLi4ucGFyOiBhbnlbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/kuYvliY3osIPnlKhcclxuICAgICAqIEBwYXJhbSBwYXIg6ZqQ6JeP5pa55rOV5Zue6LCD55qE5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25IaWRlQmVmb3JlKC4uLnBhcjogYW55W10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5LmL5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gX2lmRGVsZXRlIOaYr+WQpuWIoOmZpFxyXG4gICAgICogQHBhcmFtIHBhciDpmpDol4/mlrnms5Xlm57osIPnmoTlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vbkhpZGUoX2lmRGVsZXRlOiBib29sZWFuLCAuLi5wYXI6IGFueVtdKTtcclxuXHJcbn0iLCJpbXBvcnQgR2xvYmFsRDNFbnZpcm9ubWVudCBmcm9tIFwiLi9zY2VuZS9HbG9iYWxEM0Vudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICogM2TnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQzTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLyoqIOWIneWni+WMluWFqOWxgOeOr+WigyAqL1xyXG4gICAgICAgIEdsb2JhbEQzRW52aXJvbm1lbnQuaW5pdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElTY2VuZUVudmlyb25tZW50IGZyb20gXCIuL0lTY2VuZUVudmlyb25tZW50XCI7XHJcblxyXG4vKipcclxuICog5YWo5bGAM0Tnjq/looNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbEQzRW52aXJvbm1lbnQge1xyXG4gICAgLyoqIDNk5Zy65pmvICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtX1NjZW5lM0Q6IExheWEuU2NlbmUzRDtcclxuICAgIC8qKiDmkYTlg4/mnLogKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fQ2FtZXJhOiBMYXlhLkNhbWVyYTtcclxuICAgIC8qKiDnga/lhYkgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fTGlnaHQ6IExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcblxyXG4gICAgLyoqIOiOt+WPliAzZOWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2NlbmUzRCgpOiBMYXlhLlNjZW5lM0Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fU2NlbmUzRDtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5Yg5pGE5YOP5py6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDYW1lcmEoKTogTGF5YS5DYW1lcmEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fQ2FtZXJhO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPliDnga/lhYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExpZ2h0KCk6IExheWEuRGlyZWN0aW9uTGlnaHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fTGlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWcuuaZryAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRW52aXJvbm1lbnQoKTogSVNjZW5lRW52aXJvbm1lbnQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLm1fU2NlbmUzRCxcclxuICAgICAgICAgICAgY2FtZXJhOiB0aGlzLm1fQ2FtZXJhLFxyXG4gICAgICAgICAgICBsaWdodDogdGhpcy5tX0xpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubV9TY2VuZTNEID0gTGF5YS5zdGFnZS5hZGRDaGlsZChuZXcgTGF5YS5TY2VuZTNEKSBhcyBMYXlhLlNjZW5lM0Q7XHJcbiAgICAgICAgdGhpcy5tX0NhbWVyYSA9IG5ldyBMYXlhLkNhbWVyYTtcclxuICAgICAgICB0aGlzLm1fTGlnaHQgPSBuZXcgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fQ2FtZXJhKTtcclxuICAgICAgICB0aGlzLm1fU2NlbmUzRC5hZGRDaGlsZCh0aGlzLm1fTGlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVQb29sIGZyb20gXCJzcmMvX1QvR2FtZVQvR2FtZVBvb2xcIjtcclxuaW1wb3J0IFYzVXRpbHMgZnJvbSBcInNyYy9fVC9VdGlscy9WM1V0aWxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0NvbmZpZywgSVByZWZhYnNEaWZmZXJDb25maWcsIElQcmVmYWJzR2F0aGVyIH0gZnJvbSBcIi4vSU5vZGVDb25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiDoioLngrnlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVUIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5piv6aKE5Yi25L2T6YWN572uXHJcbiAgICAgKiBAcGFyYW0gX2NvbmZpZyDphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpZlByZWZhYnNDb25maWcoX2NvbmZpZzogSU5vZGVDb25maWcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKF9jb25maWcgYXMgSVByZWZhYnNDb25maWcpLnByZWZhYk5hbWUgJiYgdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiKgueCueaVsOaNruWIneWni+WMluiKgueCuVxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX3RhcmdldCDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlKF9zcHI6IExheWEuU3ByaXRlM0QsIF90YXJnZXQ6IElOb2RlQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3NwciwgX3RhcmdldCk7XHJcbiAgICAgICAgLy/orr7nva7lkI3lrZdcclxuICAgICAgICBfc3ByLm5hbWUgPSBfdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInlj5jmjaLnm7jlhbPnmoTlsZ7mgKdcclxuICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24uc2V0VmFsdWUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlci5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZS5zZXRWYWx1ZSgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuvue9ruS9jee9rlxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOS9jee9rlxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi5zZXRWYWx1ZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF90YXJnZXQudHJhbnNmb3JtLnBvc2l0aW9uLCBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9ruaXi+i9rFxyXG4gICAgICAgICAgICBpZiAoIV90YXJnZXQudHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOaXi+i9rFxyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3RhcmdldC50cmFuc2Zvcm0uZXVsZXIsIF9zcHIudHJhbnNmb3JtLmxvY2FsUm90YXRpb25FdWxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orr7nva7nvKnmlL5cclxuICAgICAgICAgICAgaWYgKCFfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTnvKnmlL5cclxuICAgICAgICAgICAgICAgIF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUuc2V0VmFsdWUoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZSwgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/op6blj5Hnm5HlkKxcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIgPSBfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXI7XHJcbiAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgLy/orr7nva7lt67lvIJcclxuICAgICAgICBsZXQgX3ByZWZhYkNvbmZpZzogSVByZWZhYnNDb25maWcgPSBfdGFyZ2V0IGFzIElQcmVmYWJzQ29uZmlnO1xyXG4gICAgICAgIGlmIChfcHJlZmFiQ29uZmlnLnByZWZhYk5hbWUgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX3ByZWZhYkNvbmZpZy5wcmVmYWJEaWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIsIF9wcmVmYWJDb25maWcucHJlZmFiRGlmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHIudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4gOS4queyvueBteWSjOa6kOeyvueBteeahOW3ruW8glxyXG4gICAgICogQHBhcmFtIF9zcHIg57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX2RpZmZlciDlt67lvILmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0RGlmZmVyKF9zcHI6IExheWEuU3ByaXRlM0QsIF9kaWZmZXI6IElQcmVmYWJzRGlmZmVyQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iuvue9ruW3ruW8gicsIF9zcHIsIF9kaWZmZXIpO1xyXG4gICAgICAgIC8v6I635Y+W5LiA5Liq5Li05pe25ZCR6YePXHJcbiAgICAgICAgbGV0IF9jZW50cmVWMzogTGF5YS5WZWN0b3IzID0gR2FtZVBvb2wuZ2V0VjMoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChfZGlmZmVyLmNoaWxkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9kaWZmIG9mIF9kaWZmZXIuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZmVyKF9zcHIuZ2V0Q2hpbGRBdChfZGlmZi5pbmRleCkgYXMgTGF5YS5TcHJpdGUzRCwgX2RpZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5rqQ5Y+Y5o2iXHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm06IExheWEuVmVjdG9yM1tdID0gW0dhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCksIEdhbWVQb29sLmdldFYzKCldO1xyXG4gICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIuX3RyYW5zZm9ybS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci5fdHJhbnNmb3JtLnBvc2l0aW9uLCBfdHJhbnNmb3JtWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci5fdHJhbnNmb3JtLmV1bGVyKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLl90cmFuc2Zvcm0uZXVsZXIsIF90cmFuc2Zvcm1bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLl90cmFuc2Zvcm0uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIuX3RyYW5zZm9ybS5zY2FsZSwgX3RyYW5zZm9ybVsyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnIl0cmFuc2Zvcm3lsZ7mgKdcclxuICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKF9kaWZmZXIudHJhbnNmb3JtLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfZGlmZmVyLnRyYW5zZm9ybS5wb3NpdGlvbiwgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIExheWEuVmVjdG9yMy5hZGQoX3RyYW5zZm9ybVswXSwgX2NlbnRyZVYzLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgX2NlbnRyZVYzLmNsb25lVG8oX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBfc3ByLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2RpZmZlci50cmFuc2Zvcm0uZXVsZXIpIHtcclxuICAgICAgICAgICAgICAgIFYzVXRpbHMucGFyc2VWZWN0b3IzKF9kaWZmZXIudHJhbnNmb3JtLmV1bGVyLCBfY2VudHJlVjMpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfdHJhbnNmb3JtWzFdLCBfY2VudHJlVjMsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBfY2VudHJlVjMuY2xvbmVUbyhfc3ByLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uRXVsZXIpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyID0gX3Nwci50cmFuc2Zvcm0ubG9jYWxSb3RhdGlvbkV1bGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfZGlmZmVyLnRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX2RpZmZlci50cmFuc2Zvcm0uc2NhbGUsIF9jZW50cmVWMyk7XHJcbiAgICAgICAgICAgICAgICBMYXlhLlZlY3RvcjMuYWRkKF90cmFuc2Zvcm1bMl0sIF9jZW50cmVWMywgX2NlbnRyZVYzKTtcclxuICAgICAgICAgICAgICAgIF9jZW50cmVWMy5jbG9uZVRvKF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgX3Nwci50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IF9zcHIudHJhbnNmb3JtLmxvY2FsU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lm57mlLbkuLTml7blkJHph49cclxuICAgICAgICBHYW1lUG9vbC5yZWN5Y2xlVjMoLi4uW19jZW50cmVWMywgLi4uX3RyYW5zZm9ybV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gX3ByZWZhYnNOYW1lcyDovpPlh7rnmoTpooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lczogc3RyaW5nW10sIF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZykge1xyXG4gICAgICAgIGlmICghX25vZGVDb25maWcpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/pooTliLbkvZNcclxuICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZyA9IChfbm9kZUNvbmZpZyBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICBpZiAoX3ByZWZhYk5hbWUpIHtcclxuICAgICAgICAgICAgLy/ljrvph41cclxuICAgICAgICAgICAgaWYgKCFfcHJlZmFic05hbWVzLmluY2x1ZGVzKF9wcmVmYWJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgX3ByZWZhYnNOYW1lcy5wdXNoKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm6L+Y5pyJ5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZUNvbmZpZy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcmVmYWJzTmFtZXMoX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+iKgueCueaVsOaNruaehOiKgueCuVxyXG4gICAgICogQHBhcmFtIF9vblNwciDlvZPliY3nsr7ngbVcclxuICAgICAqIEBwYXJhbSBfbm9kZUNvbmZpZyDoioLngrnphY3nva7mlbDmja5cclxuICAgICAqIEBwYXJhbSBfZ2V0UHJlZmFicyDojrflj5bpooTliLbkvZPnmoTmlrnms5VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZE5vZGUoX29uU3ByOiBMYXlhLlNwcml0ZTNELCBfbm9kZUNvbmZpZzogSU5vZGVDb25maWcsIF9wcmVmYWJzOiBJUHJlZmFic0dhdGhlciwgX2dldFByZWZhYnM6IChfbmFtZTogc3RyaW5nKSA9PiBMYXlhLlNwcml0ZTNEKSB7XHJcbiAgICAgICAgaWYgKCFfbm9kZUNvbmZpZykgeyByZXR1cm47IH1cclxuICAgICAgICAvL+iuvue9ruiKgueCueaVsOaNrlxyXG4gICAgICAgIHRoaXMuc2V0Tm9kZShfb25TcHIsIF9ub2RlQ29uZmlnKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuacieWtkOiKgueCuVxyXG4gICAgICAgIGlmIChfbm9kZUNvbmZpZy5jaGlsZCAmJiBfbm9kZUNvbmZpZy5jaGlsZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBfc3ByOiBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICBsZXQgX3ByZWZhYk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgX25vZGVDb25maWcuY2hpbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3ByZWZhYk5hbWUgPSAoaXRlbSBhcyBJUHJlZmFic0NvbmZpZykucHJlZmFiTmFtZTtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W57K+54G1XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9wcmVmYWJOYW1lID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NwciA9IF9nZXRQcmVmYWJzKF9wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOi/m+mihOWItuS9k+mbhuWQiOS4rVxyXG4gICAgICAgICAgICAgICAgICAgIF9wcmVmYWJzW19wcmVmYWJOYW1lXSA9IF9wcmVmYWJzW19wcmVmYWJOYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJlZmFic1tfcHJlZmFiTmFtZV0ucHVzaChfc3ByKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX29uU3ByLmFkZENoaWxkKF9zcHIpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGROb2RlKF9zcHIsIGl0ZW0sIF9wcmVmYWJzLCBfZ2V0UHJlZmFicyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWdUIGZyb20gXCJzcmMvX1QvQ29uZmlnL0NvbmZpZ1RcIjtcclxuaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwic3JjL19UL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBFc3NlbnRpYWxSZXNVcmxzIGZyb20gXCJzcmMvX1QvUmVzL0Vzc2VudGlhbFJlc1VybHNcIjtcclxuaW1wb3J0IHsgSU5vZGVDb25maWcsIElTY2VuZUNvbmZpZyB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBJU2NlbmVFbnZpcm9ubWVudCBmcm9tIFwiLi9JU2NlbmVFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgTm9kZVQgZnJvbSBcIi4vTm9kZVRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi9TY2VuZU5vZGVcIjtcclxuaW1wb3J0IEdsb2JhbEQzRW52aXJvbm1lbnQgZnJvbSBcIi4vR2xvYmFsRDNFbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgQXJyYXlVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL0FycmF5VXRpbHNcIjtcclxuaW1wb3J0IFJlc0xvYWQgZnJvbSBcInNyYy9fVC9SZXMvUmVzTG9hZFwiO1xyXG5pbXBvcnQgQmFzZUl0ZW1Qb29sIGZyb20gXCJzcmMvX1QvY29tL0Jhc2VJdGVtUG9vbFwiO1xyXG5pbXBvcnQgVjNVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL1YzVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma8g5a6e5L6LXHJcbiAqIOagueaNruaMh+WumueahOWcuuaZr+mFjee9ruihqOaehOW7uuWcuuaZr1xyXG4gKiDmnKzouqvnu6fmib/oh6rlr7nosaHmsaDln7rnsbvvvIznlKjmnaXnrqHnkIbpooTliLbkvZPnsr7ngbVcclxuICogKiDlj6/ku6Xnu6fmib/mraTnsbvoh6rlrprkuYnlnLrmma9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQmFzZUl0ZW1Qb29sIHtcclxuICAgIC8qKiDlnLrmma/lkI3lrZcgKi9cclxuICAgIHByb3RlY3RlZCBfc2NlbmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIOeOr+WigyAqL1xyXG4gICAgcHJvdGVjdGVkIG1fZW52aXJvbm1lbnQ6IElTY2VuZUVudmlyb25tZW50O1xyXG5cclxuICAgIC8qKiDlnLrmma/phY3nva7kv6Hmga8gKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZUNvbmZpZzoge1xyXG4gICAgICAgIFtfaW5kZXg6IHN0cmluZ106IElOb2RlQ29uZmlnLFxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKiDlnLrmma/oioLngrnlrp7kvovnvJPlrZggKi9cclxuICAgIHByaXZhdGUgbV9zY2VuZU5vZGVzQ2FjaGU6IE1hcDxzdHJpbmdbXSwgU2NlbmVOb2RlW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKiDlnLrmma/kuK3lrZjlnKjnmoRub2Rl6IqC54K5ICovXHJcbiAgICBwcml2YXRlIG1fb25TY2VuZU5vZGVzOiBTZXQ8U2NlbmVOb2RlPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv6YWN572uICovXHJcbiAgICBwdWJsaWMgZ2V0IHNjZW5lQ29uZmlnKCk6IElTY2VuZUNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlueOr+WigyAqL1xyXG4gICAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBJU2NlbmVFbnZpcm9ubWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9lbnZpcm9ubWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5Zy65pmv5b2T5YmN5a2Y5Zyo55qE6IqC54K55YiX6KGoICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uU2NlbmVOb2RlcygpOiBTY2VuZU5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1fb25TY2VuZU5vZGVzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9zY2VuZU5hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfc2NlbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fc2NlbmVOYW1lID0gX3NjZW5lTmFtZTtcclxuICAgICAgICAvL+agueaNruWcuuaZr+WQjeWtl+ivu+WPlumFjee9ruihqOS/oeaBr1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uQ29uc29sZUV4LnBhY2tFcnJvcign5rKh5pyJ5Yid5aeL5YyW5Zy65pmv55qE5ZCN5a2X77yBJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfZGF0YTogSU5vZGVDb25maWdbXSA9IENvbmZpZ1QuZ2V0Q29uZmlnSnNvbkRhdGEoRXNzZW50aWFsUmVzVXJscy5TY2VuZUNvbmZpZ1VSTCh0aGlzLl9zY2VuZU5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcucm9vdCk7XHJcbiAgICAgICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5qC56IqC54K55LiL55qE6IqC54K5XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZUNvbmZpZ1tfZGF0YVtfaV0ubmFtZV0gPSBfZGF0YVtfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+iOt+WPluWcuuaZr+aVsOaNruWksei0pS0+JywgdGhpcy5fc2NlbmVOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u546v5aKD77yM6buY6K6k5Li65YWo5bGAM2Tnjq/looPvvIzlj6/ku6Xoh6rlrprkuYnnjq/looNcclxuICAgICAgICB0aGlzLm1fZW52aXJvbm1lbnQgPSBHbG9iYWxEM0Vudmlyb25tZW50LkVudmlyb25tZW50O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6IqC54K56YWN572uXHJcbiAgICAgKiBAcGFyYW0gX25vZGVOYW1lIOiKgueCueWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUNvbmZpZyhfbm9kZU5hbWU6IHN0cmluZyk6IElOb2RlQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lQ29uZmlnW19ub2RlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnLrmma/oioLngrlcclxuICAgICAqIEBwYXJhbSBfbmFtZSDoioLngrnlkI3lrZfvvIzlj6/ku6XlpJrkuKrkuIDotbfmnoTlu7pcclxuICAgICAqIEBwYXJhbSBfZmluZENhY2hlIOaYr+WQpuWcqOe8k+WtmOS4reafpeaJviB0cnVlXHJcbiAgICAgKiBAcGFyYW0gX2FkZENhY2hlIOaYr+WQpua3u+WKoOWIsOe8k+WtmCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZU5vZGUoX25hbWU6IHN0cmluZyB8IHN0cmluZ1tdLCBfZmluZENhY2hlOiBib29sZWFuID0gdHJ1ZSwgX2FkZENhY2hlOiBib29sZWFuID0gdHJ1ZSk6IFNjZW5lTm9kZSB7XHJcbiAgICAgICAgbGV0IF9uYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIF9uYW1lID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgX25hbWVzLnB1c2goX25hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5wdXNoKC4uLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9ub2RlQ29uZmlnOiBJTm9kZUNvbmZpZ1tdID0gW107XHJcbiAgICAgICAgX25hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9zY2VuZUNvbmZpZ1tpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGVDb25maWcucHVzaCh0aGlzLm1fc2NlbmVDb25maWdbaXRlbV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5pyJ5Liq5Zy65pmv6IqC54K55rKh5pyJ5om+5YiwJywgaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9ub2RlQ29uZmlnLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+iOt+WPluWcuuaZr+iKgueCueaXtu+8jOS4gOS4qumFjee9ruS/oeaBr+mDveayoeaJvuWIsCcsIF9uYW1lcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfc2NlbmVOb2RlOiBTY2VuZU5vZGU7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblnKjnvJPlrZjkuK3mib5cclxuICAgICAgICBpZiAoX2ZpbmRDYWNoZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbX2tleSwgX3ZhbHVlXSBvZiB0aGlzLm1fc2NlbmVOb2Rlc0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXlVdGlscy5Db250ZW50SWZTYW1lKF9rZXksIF9uYW1lcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3VzYWJsZTogU2NlbmVOb2RlW10gPSBfdmFsdWUuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlmRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdXNhYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NjZW5lTm9kZSA9IF91c2FibGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKCFfc2NlbmVOb2RlKSB7XHJcbiAgICAgICAgICAgIC8v5paw5bu65LiA5Liq5a6e5L6LXHJcbiAgICAgICAgICAgIF9zY2VuZU5vZGUgPSBuZXcgU2NlbmVOb2RlKF9ub2RlQ29uZmlnLCB0aGlzKTtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmt7vliqDliLDnvJPlrZhcclxuICAgICAgICAgICAgaWYgKF9hZGRDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW19rZXksIF92YWx1ZV0gb2YgdGhpcy5tX3NjZW5lTm9kZXNDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5VXRpbHMuQ29udGVudElmU2FtZShfa2V5LCBfbmFtZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5wdXNoKF9zY2VuZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV9pZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zY2VuZU5vZGVzQ2FjaGUuc2V0KF9uYW1lcywgW19zY2VuZU5vZGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u546v5aKDXHJcbiAgICAgKiDkvJrmoLnmja7lvZPliY3lnLrmma/kuK3njq/looPphY3nva7orr7nva7njq/looNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIGxldCBfc2NlbmVDb25maWc6IElTY2VuZUNvbmZpZyA9IHRoaXMubV9zY2VuZUNvbmZpZyBhcyBJU2NlbmVDb25maWc7XHJcbiAgICAgICAgLy/orr7nva7mkYTlg4/mnLpcclxuICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmNhbWVyYSkge1xyXG4gICAgICAgICAgICBOb2RlVC5zZXROb2RlKHRoaXMubV9lbnZpcm9ubWVudC5jYW1lcmEsIF9zY2VuZUNvbmZpZy5jYW1lcmEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6K6+572u5pGE5YOP5py6JywgX3NjZW5lQ29uZmlnLmNhbWVyYSk7XHJcbiAgICAgICAgICAgIC8v6K6+572u5pGE5YOP5py65YW25a6D5pWw5o2uXHJcbiAgICAgICAgICAgIGlmIChfc2NlbmVDb25maWcuY2FtZXJhLmF0dGFjaERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbnZpcm9ubWVudC5jYW1lcmEuZmllbGRPZlZpZXcgPSBfc2NlbmVDb25maWcuY2FtZXJhLmF0dGFjaERhdGEuZm92O1xyXG4gICAgICAgICAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgICAgICAgICAgVjNVdGlscy5wYXJzZVZlY3RvcjMoX3NjZW5lQ29uZmlnLmNhbWVyYS5hdHRhY2hEYXRhLmNvbG9yLCBfdjMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2Vudmlyb25tZW50LmNhbWVyYS5jbGVhckNvbG9yID0gbmV3IExheWEuVmVjdG9yNChfdjMueCwgX3YzLnksIF92My56LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rueBr+WFiVxyXG4gICAgICAgIGlmIChfc2NlbmVDb25maWcubGlnaHQpIHtcclxuICAgICAgICAgICAgTm9kZVQuc2V0Tm9kZSh0aGlzLm1fZW52aXJvbm1lbnQubGlnaHQsIF9zY2VuZUNvbmZpZy5saWdodCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCforr7nva7nga/lhYknLCBfc2NlbmVDb25maWcubGlnaHQpO1xyXG4gICAgICAgICAgICAvL+iuvue9rueBr+WFieWFtuWug+aVsOaNrlxyXG4gICAgICAgICAgICBpZiAoX3NjZW5lQ29uZmlnLmxpZ2h0LmF0dGFjaERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbnZpcm9ubWVudC5saWdodC5pbnRlbnNpdHkgPSBfc2NlbmVDb25maWcubGlnaHQuYXR0YWNoRGF0YS5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3YzOiBMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICBWM1V0aWxzLnBhcnNlVmVjdG9yMyhfc2NlbmVDb25maWcubGlnaHQuYXR0YWNoRGF0YS5jb2xvciwgX3YzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbnZpcm9ubWVudC5saWdodC5jb2xvciA9IF92MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgIHRoaXMuX3NldEVudmlyb25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTlu7roioLngrlcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+aehOW7uuaXtuS8muiHquWKqOaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ1aWxkTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5hZGQoX25vZGUpO1xyXG4gICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5fYnVpbGROb2RlKF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOiKgueCuVxyXG4gICAgICog5b2T6L+Z5Liq5Zy65pmv5LiL55qE5p+Q5Liq6IqC54K56KKr5Yig6Zmk5pe25Lya6Ieq5Yqo5omn6KGM6L+Z5Liq5pa55rOV77yM5Lya5Zyo6IqC54K555yf5q2j6KKr5Yig6Zmk5YmN5omn6KGM77yM5Y+v5Lul5Zyo6L+Z6YeM5pS26ZuG6aKE5Yi25L2T44CCXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9ub2RlIOiKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlTm9kZShfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tX29uU2NlbmVOb2Rlcy5kZWxldGUoX25vZGUpO1xyXG4gICAgICAgIC8v5omn6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5fZGVsZXRlTm9kZShfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnliqDovb3ov5vluqZcclxuICAgICAqIOW9k+i/meS4quWcuuaZr+S4i+eahOafkOS4quiKgueCueiiq+WKoOi9veaXtu+8jOWbnuiwg+eUqOi/meS4quWbnuiwg+S8oOWHuuWKoOi9vei/m+W6plxyXG4gICAgICogISDmoYbmnrbmiafooYxcclxuICAgICAqIEBwYXJhbSBfbiDov5vluqblgLxcclxuICAgICAqIEBwYXJhbSBfbm9kZSDlvZPliY3liqDovb3nmoToioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyLCBfbm9kZTogU2NlbmVOb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX24sIF9ub2RlKTtcclxuICAgICAgICB0aGlzLl9sb2FkUHJvZ3Jlc3MoX24sIF9ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumihOWItuS9k1xyXG4gICAgICog5b2T5b2T5YmN5Zy65pmv5LiL55qE6IqC54K56KKr5p6E5bu65pe277yM5Lya5LuO6L+Z6YeM5ou/6aKE5Yi25L2T77yM5Y+v5Lul5Zyo6L+Z6YeM5pS26ZuG6aKE5Yi25L2TXHJcbiAgICAgKiAhIOahhuaetuaJp+ihjFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOmihOWItuS9k+WQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UHJlZmFicyhfbmFtZTogc3RyaW5nKTogTGF5YS5TcHJpdGUzRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFByZWZhYnMoX25hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICogLS0tLS0tLS0tLS0g5Zue6LCD5Ye95pWwXHJcblxyXG4gICAgLyoqIOWIneWni+WMluWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqIOiuvue9rueOr+Wig+WQjuaJp+ihjOeahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9zZXRFbnZpcm9ubWVudCgpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IqC54K55Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX24g6L+b5bqm5YC8XHJcbiAgICAgKiBAcGFyYW0gX25vZGUg5b2T5YmN5Yqg6L2955qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZFByb2dyZXNzKF9uOiBudW1iZXIsIF9ub2RlOiBTY2VuZU5vZGUpIHsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnooqvmnoTlu7rnmoTlm57osINcclxuICAgICAqIEBwYXJhbSBfbm9kZSDnm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9idWlsZE5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfoioLngrnmnoTlu7onLCBfbm9kZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiKgueCueiiq+WIoOmZpOeahOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9ub2RlIOebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2RlbGV0ZU5vZGUoX25vZGU6IFNjZW5lTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfoioLngrnliKDpmaQnLCBfbm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmAmui/h+mihOWItuS9k+WQjeWtl+iOt+WPlumihOWItuS9k+eahOWbnuiwgyAqL1xyXG4gICAgcHJvdGVjdGVkIF9nZXRQcmVmYWJzKF9uYW1lOiBzdHJpbmcpOiBMYXlhLlNwcml0ZTNEIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Y+W6aKE5Yi25L2TJywgX25hbWUpO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkdldFJlcyhFc3NlbnRpYWxSZXNVcmxzLlByZWZhYlVSTChfbmFtZSkpIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCJzcmMvX1QvQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEVzc2VudGlhbFJlc1VybHMgZnJvbSBcInNyYy9fVC9SZXMvRXNzZW50aWFsUmVzVXJsc1wiO1xyXG5pbXBvcnQgUmVzTG9hZCBmcm9tIFwic3JjL19UL1Jlcy9SZXNMb2FkXCI7XHJcbmltcG9ydCBTcHJpdGVVdGlscyBmcm9tIFwic3JjL19UL1V0aWxzL1Nwcml0ZVV0aWxzXCI7XHJcbmltcG9ydCB7IElOb2RlQ29uZmlnLCBJUHJlZmFic0dhdGhlciB9IGZyb20gXCIuL0lOb2RlQ29uZmlnXCI7XHJcbmltcG9ydCBOb2RlVCBmcm9tIFwiLi9Ob2RlVFwiO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbi8qKlxyXG4gKiDlnLrmma/oioLngrlcclxuICog55So5p2l5p6E5bu65Zy65pmv6IqC54K5XHJcbiAqICEg5Y+v6IO95piv5aSa5Liq5Zy65pmv57uE5ZCI55qE5Zy65pmvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGUge1xyXG4gICAgLyoqIOaJgOWxnuWcuuaZryAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lOiBTY2VuZTtcclxuICAgIC8qKiDmmK/lkKbliKDpmaQgKi9cclxuICAgIHByaXZhdGUgbV9pZkRlbGV0ZTogYm9vbGVhbjtcclxuICAgIC8qKiDoioLngrnphY3nva7kv6Hmga/liJfooaggKi9cclxuICAgIHByaXZhdGUgbV9ub2RlQ29uZmlnczogSU5vZGVDb25maWdbXTtcclxuICAgIC8qKiDmoLnoioLngrkgKi9cclxuICAgIHByaXZhdGUgbV9yb290Tm9kZTogTGF5YS5Ob2RlO1xyXG4gICAgLyoqIOWcuuaZr+iKgueCueWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3NjZW5lTm9kZXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBMYXlhLlNwcml0ZTNELFxyXG4gICAgfTtcclxuICAgIC8qKiDpooTliLbkvZPlkI3lrZfliJfooaggKi9cclxuICAgIHByaXZhdGUgbV9wcmVmYWJzTmFtZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIOmihOWItuS9k+mbhuWQiCAqL1xyXG4gICAgcHJpdmF0ZSBtX3ByZWZhYnM6IElQcmVmYWJzR2F0aGVyO1xyXG4gICAgLyoqIOWPr+WbnuaUtueyvueBteWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBtX3JlY292ZXJhYmxlU3ByczogSVByZWZhYnNHYXRoZXI7XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwcml2YXRlIG1faWZMb2FkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiDojrflj5bmiYDlsZ7lnLrmma8gKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W6IqC54K56YWN572u5L+h5oGvICovXHJcbiAgICBwdWJsaWMgZ2V0IG5vZGVDb25maWdzKCk6IElOb2RlQ29uZmlnW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbm9kZUNvbmZpZ3M7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5piv5ZCm5Yig6ZmkICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmRGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWZEZWxldGU7XHJcbiAgICB9XHJcbiAgICAvKiog6I635Y+W5qC56IqC54K5ICovXHJcbiAgICBwdWJsaWMgZ2V0IHJvb3ROb2RlKCk6IExheWEuTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yb290Tm9kZTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5blnLrmma/oioLngrnliJfooaggKi9cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVOb2RlcygpOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogTGF5YS5TcHJpdGUzRCxcclxuICAgIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fc2NlbmVOb2RlcztcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bpooTliLbkvZPpm4blkIggKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFicygpOiBJUHJlZmFic0dhdGhlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPluWPr+WbnuaUtueyvueBtSAqL1xyXG4gICAgcHVibGljIGdldCByZWNvdmVyYWJsZVNwcnMoKTogSVByZWZhYnNHYXRoZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fcmVjb3ZlcmFibGVTcHJzO1xyXG4gICAgfVxyXG4gICAgLyoqIOiOt+WPlumihOWItuS9k+WQjeWtl+WIl+ihqCAqL1xyXG4gICAgcHVibGljIGdldCBwcmVmYWJzTmFtZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVmYWJzTmFtZXM7XHJcbiAgICB9XHJcbiAgICAvKiog5piv5ZCm5Zyo5Yqg6L29ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlmTG9hZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmTG9hZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluWcuuaZr+iKgueCueWunuS+i1xyXG4gICAgICogQHBhcmFtIF9ub2RlQ29uZmlncyDoioLngrnphY3nva7kv6Hmga9cclxuICAgICAqIEBwYXJhbSBfc2NlbmUg5omA5bGe5Zy65pmvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihfbm9kZUNvbmZpZ3M6IElOb2RlQ29uZmlnW10sIF9zY2VuZTogU2NlbmUpIHtcclxuICAgICAgICB0aGlzLm1fc2NlbmUgPSBfc2NlbmU7XHJcbiAgICAgICAgLy/pu5jorqTkuLrliKDpmaTnirbmgIFcclxuICAgICAgICB0aGlzLm1faWZEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubV9ub2RlQ29uZmlncyA9IF9ub2RlQ29uZmlncztcclxuICAgICAgICAvL+aPkOWPlumihOWItuS9k+WQjeWtl+WIl+ihqFxyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzTmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1fbm9kZUNvbmZpZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBOb2RlVC5nZXRQcmVmYWJzTmFtZXModGhpcy5tX3ByZWZhYnNOYW1lcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb1cclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jTG9hZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBfcHJlZmFiTmFtZXNVUkw6IHN0cmluZ1tdID0gdGhpcy5tX3ByZWZhYnNOYW1lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEVzc2VudGlhbFJlc1VybHMuUHJlZmFiVVJMKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBSZXNMb2FkLkxvYWQzREFzeW5jKF9wcmVmYWJOYW1lc1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAobikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyhuKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW25dO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXmnoTlu7pcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmNCdWlsZChfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8U2NlbmVOb2RlPiB7XHJcbiAgICAgICAgdGhpcy5tX2lmTG9hZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNjZW5lTm9kZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3luY0xvYWQoX29uUHJvZ3Jlc3MpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lmTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9uIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyhfbjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/lkJHlnLrmma/kvKDlh7rliqDovb3ov5vluqZcclxuICAgICAgICB0aGlzLm1fc2NlbmUubG9hZFByb2dyZXNzKF9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOW7ulxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2lmRGVsZXRlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMubV9pZkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubV9yb290Tm9kZSA9IG5ldyBMYXlhLk5vZGU7XHJcbiAgICAgICAgLy/mt7vliqDliLDmiYDlsZ7lnLrmma/njq/looPkuK1cclxuICAgICAgICB0aGlzLm1fc2NlbmUuZW52aXJvbm1lbnQuc2NlbmUuYWRkQ2hpbGQodGhpcy5tX3Jvb3ROb2RlKTtcclxuICAgICAgICB0aGlzLm1fcHJlZmFicyA9IHt9O1xyXG4gICAgICAgIHRoaXMubV9zY2VuZU5vZGVzID0ge307XHJcbiAgICAgICAgbGV0IF9zcHI6IExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5tX25vZGVDb25maWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgX3NwciA9IG5ldyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdE5vZGUuYWRkQ2hpbGQoX3Nwcik7XHJcbiAgICAgICAgICAgIHRoaXMubV9zY2VuZU5vZGVzW2l0ZW0ubmFtZV0gPSBfc3ByO1xyXG4gICAgICAgICAgICBOb2RlVC5idWlsZE5vZGUoX3NwciwgaXRlbSwgdGhpcy5tX3ByZWZhYnMsIChfbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lLmdldFByZWZhYnMoX25hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJgOaciemihOWItuS9k+m7mOiupOS4uuWPr+WbnuaUtueyvueBtVxyXG4gICAgICAgIHRoaXMubV9yZWNvdmVyYWJsZVNwcnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMubV9wcmVmYWJzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/osIPnlKjlnLrmma/nmoTlm57osINcclxuICAgICAgICB0aGlzLm1fc2NlbmUuYnVpbGROb2RlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubV9pZkRlbGV0ZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAodGhpcy5tX2lmTG9hZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCflnLrmma/oioLngrnov5jlnKjmnoTlu7rljbTor5Xlm77liKDpmaTjgIInKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tX2lmRGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICAvL+WIoOmZpOS5i+WJjeiwg+eUqOWcuuaZr+eahOWbnuiwg++8jOaWueS+v+aUtumbhumihOWItuS9k1xyXG4gICAgICAgIHRoaXMubV9zY2VuZS5kZWxldGVOb2RlKHRoaXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX3Jvb3ROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL+a4heeQhuW8leeUqFxyXG4gICAgICAgIHRoaXMubV9yb290Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tX3NjZW5lTm9kZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubV9wcmVmYWJzID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1fcmVjb3ZlcmFibGVTcHJzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeyvueBteaYr+WQpuWPr+WbnuaUtlxyXG4gICAgICogQHBhcmFtIF9zcHIg6K+l57K+54G1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzcHJJZlJlY292ZXJhYmxlKF9zcHI6IExheWEuU3ByaXRlM0QpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgX2I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLm1fcmVjb3ZlcmFibGVTcHJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1fcmVjb3ZlcmFibGVTcHJzW19pXS5pbmNsdWRlcyhfc3ByKSkge1xyXG4gICAgICAgICAgICAgICAgX2IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlj6/lm57mlLbnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrumUruWAvOaIluiAheWQjeWtl1xyXG4gICAgICogQHBhcmFtIF9zcHIg55uu5qCH57K+54G15oiW5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRSZWNvdmVyYWJsZVNwcnMoX2tleTogc3RyaW5nLCBfc3ByOiBMYXlhLlNwcml0ZTNEIHwgTGF5YS5TcHJpdGUzRFtdKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9zcHIpKSB7XHJcbiAgICAgICAgICAgIF9zcHIgPSBbX3Nwcl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zcHIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvL+WFiOWIpOaWreaYr+ivpeeyvueBteaYr+WQpuWPr+WbnuaUtlxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJJZlJlY292ZXJhYmxlKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+mHjeWkjea3u+WKoOeyvueBteWIsOWPr+WbnuaUtueyvueBteWIl+ihqOS4rScsIF9rZXksIF9zcHIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5re75Yqg6L+b5Y+v5Zue5pS25YiX6KGo5LitXHJcbiAgICAgICAgICAgICh0aGlzLm1fcmVjb3ZlcmFibGVTcHJzW19rZXldID0gdGhpcy5tX3JlY292ZXJhYmxlU3Byc1tfa2V5XSB8fCBbXSkucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWcuuaZr+iKgueCueeyvueBtVxyXG4gICAgICogQHBhcmFtIF9zcHJOYW1lIOeyvueBteWQjeWtl1xyXG4gICAgICogQHBhcmFtIF9zY2VuZU5vZGVOYW1lIOiKgueCueWQjeWtl++8jOaIluiAhee0ouW8le+8jOm7mOiupOS4uuesrOS4gOS4quiKgueCueeahOWQjeWtl1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZShfc3ByTmFtZTogc3RyaW5nLCBfc2NlbmVOb2RlTmFtZT86IHN0cmluZyB8IG51bWJlcik6IExheWEuTm9kZSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgX3NjZW5lTm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcclxuICAgICAgICAgICAgICAgIF9zY2VuZU5vZGVOYW1lID0gdGhpcy5tX25vZGVDb25maWdzWzBdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgIF9zY2VuZU5vZGVOYW1lID0gdGhpcy5tX25vZGVDb25maWdzW01hdGgubWluKF9zY2VuZU5vZGVOYW1lLCB0aGlzLm1fbm9kZUNvbmZpZ3MubGVuZ3RoIC0gMSldLm5hbWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NjZW5lTm9kZXNbX3NjZW5lTm9kZU5hbWVdICYmIFNwcml0ZVV0aWxzLmZpbmRDaGlsZCh0aGlzLm1fc2NlbmVOb2Rlc1tfc2NlbmVOb2RlTmFtZV0sIF9zcHJOYW1lKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDln7rnsbvmlbDmja5cclxuICogISDlj6rog73lh7rnjrDmlbDmja7lsYLpnaLnmoTkuJzopb/vvIzogIzkuJTlv4XpobvlrprkuYnkuIDkuKrlgLzjgIJcclxuICog5pWw57uE77yM5a+56LGh77yM5YC8ICjmlbDlrZfvvIzlrZfnrKbkuLLvvIzluIPlsJTlgLwpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL+mYu+aWreWOn+Wei+mTvuOAglxyXG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuaW1wb3J0IEJhc2VEYXRhIGZyb20gXCIuL0Jhc2VEYXRhXCJcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tIFwiLi9PYmplY3RQcm94eVRcIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnsbvmlbDmja7ku6PnkIZcclxuICog5omA5pyJ5YWz5LqO5Luj55CG5pWw5o2u55qE57G76YO95LuO6L+Z6YeM57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YVByb3h5PERhdGEgZXh0ZW5kcyBCYXNlRGF0YT4ge1xyXG4gICAgLyoqIOaVsOaNruaooeadvyAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhVGVtcGxhdGU6IHsgbmV3KCk6IERhdGEgfTtcclxuXHJcbiAgICAvKiog5piv5ZCm6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiog5pWw5o2u5Luj55CG5bel5YW3ICovXHJcbiAgICBwcm90ZWN0ZWQgbV9vYmplY3RQcm94eVQ6IE9iamVjdFByb3h5VDtcclxuXHJcbiAgICAvKiog6ZyA6KaB5L+d5a2Y55qE5pWw5o2uICovXHJcbiAgICBwcm90ZWN0ZWQgbV9kYXRhOiBEYXRhO1xyXG5cclxuICAgIC8qKiDojrflj5bmmK/lkKborr7nva7ku6PnkIYgKi9cclxuICAgIHB1YmxpYyBnZXQgaWZTZXRQcm94eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lmU2V0UHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlbDmja7ku6PnkIblmahcclxuICAgICAqIOmAmui/h+i/meS4quaVsOaNruS7o+eQhuWZqOWPr+S7pea3u+WKoOS7o+eQhuaVsOaNru+8jOWSjOa3u+WKoOaVsOaNruebkeWQrOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdFByb3h5VCgpOiBPYmplY3RQcm94eVQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fb2JqZWN0UHJveHlUO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrmlrDnmoTmlbDmja5cclxuICAgICAqIOeUqOS6jumHjeaehOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV3RGF0YSgpOiBEYXRhIHtcclxuICAgICAgICAvL+WmguaenOayoeacieaVsOaNruaooeadv+eahOivnVxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInmib7liLDmlbDmja7mqKHmnb/vvIHor7fkvb/nlKjmlbDmja7mqKHmnb/oo4XppbDlmajoo4XppbDor6XnsbsnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5kYXRhVGVtcGxhdGUoKSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0RGF0YSgpO1xyXG59IiwiaW1wb3J0IE1kNSBmcm9tICcuL01kNSc7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSAnLi4vQ29uc29sZS9Db25zb2xlRXgnO1xyXG5pbXBvcnQgQmFzZURhdGFQcm94eSBmcm9tICcuL0Jhc2VEYXRhUHJveHknO1xyXG5pbXBvcnQgQmFzZURhdGEgZnJvbSAnLi9CYXNlRGF0YSc7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tICdzcmMvQ29uZmlnL19NYWluQ29uZmlnJztcclxuaW1wb3J0IE9iamVjdFByb3h5VCBmcm9tICcuL09iamVjdFByb3h5VCc7XHJcbmltcG9ydCBBcnJheVV0aWxzIGZyb20gJy4uL1V0aWxzL0FycmF5VXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIOWfuuexu+acrOWcsOaVsOaNruS7o+eQhu+8jOmAmui/h+atpOexu+WPr+S7peiuv+mXruacrOWcsOS/neWtmOeahOaVsOaNrlxyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VMb2NhbERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWvueavlOaVsOaNrlxyXG4gICAgICog6buY6K6k5Li6dHJ1Ze+8jOWmguaenOS4uuecn+W9k+S4uue6v+S4iuaooeW8j+aXtuS8mueUn+aIkOS4gOS4quWKoOWvhueahOWvueavlOaVsOaNru+8jOmYsuatoueUqOaIt+aUueWKqOacrOWcsOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2lmRGlmZmVyRGF0YTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog6I635Y+W5L+d5a2Y5ZCN56ewXHJcbiAgICAgKiDpu5jorqTov5Tlm57nsbvlkI3vvIzlj6/ku6Xph43lhplcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBfc2F2ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL+m7mOiupOi/lOWbnuexu+WQjVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bkv53lrZjmlbDmja7nmoTlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IHNhdmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy/pobnnm67lkI3lrZcgKyDkv53lrZjlkI3lrZcgKyDpobnnm67niYjmnKxcclxuICAgICAgICByZXR1cm4gX01haW5Db25maWcuTmFtZSArICctJyArIHRoaXMuX3NhdmVOYW1lICsgJy0nICsgX01haW5Db25maWcuVmVyc2lvbnMgKyAoX01haW5Db25maWcuT25MaW5lID8gJ15vbicgOiAnXnRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5blr7nmr5TmlbDmja7nmoTkv53lrZjlkI3lrZdcclxuICAgIHByaXZhdGUgZ2V0IGRpZmZlck5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiAnLS0tLT4nICsgdGhpcy5lbmNyeXB0KHRoaXMuc2F2ZU5hbWUgKyAnX192ZXJpZnknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy/orrDlvZXml7bpl7RcclxuICAgICAgICBsZXQgX3RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLl9yZWFkRGF0YSgpO1xyXG4gICAgICAgIC8v6K6+572u5Luj55CG5YyF6KOF5pWw5o2uXHJcbiAgICAgICAgaWYgKHRoaXMubV9pZlNldFByb3h5KSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5pWw5o2u5Luj55CG5bel5YW3XHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQgPSBuZXcgT2JqZWN0UHJveHlUKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5tX29iamVjdFByb3h5VC5zZXRQcm94eSh0aGlzLm1fZGF0YSk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg6K6+572u55uR5ZCsXHJcbiAgICAgICAgICAgIHRoaXMubV9vYmplY3RQcm94eVQuYWRkTW9uaXRvcih0aGlzLCB0aGlzLl9kYXRhU2V0TW9uaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIF90aW1lID0gRGF0ZS5ub3coKSAtIF90aW1lO1xyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfliJ3lp4vljJbmnKzlnLDmlbDmja7ml7bpl7Tov4fplb8nLCB0aGlzLnNhdmVOYW1lLCBfdGltZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yid5aeL5YyW5a6M5oiQ77yM57un5om/5L2/55SoICovXHJcbiAgICBwcm90ZWN0ZWQgX2luaXREYXRhKCkgeyB9XHJcblxyXG4gICAgLyoqIOaVsOaNruiiq+iuvue9ruebkeWQrCAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0YVNldE1vbml0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlKHRoaXMubV9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOS/neWtmOaVsOaNrlxyXG4gICAgICogQHBhcmFtIF9pZkNsIOaYr+WQpumZkOa1gSDpu5jorqTkuLp0cnVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTYXZlKF9pZkNsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2F2ZSh0aGlzLm1fZGF0YSwgX2lmQ2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDkv53lrZjmiafooYzpmJ/liJcgKi9cclxuICAgIHByaXZhdGUgbV9zYXZlVG9EaXNrUXVldWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fc2F2ZVRvRGlza1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOaVsOaNruWIsOacrOWcsFxyXG4gICAgICogQHBhcmFtIG1fZGF0YSDmlbDmja5cclxuICAgICAqIEBwYXJhbSBfaWZDbCDmmK/lkKbpmZDmtYFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlKG1fZGF0YTogRGF0YSwgX2lmQ2w6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgLy/mt7vliqDml7bpl7TliKTmlq1cclxuICAgICAgICBpZiAodGhpcy5tX3NhdmVUb0Rpc2tUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbpmZDmtYFcclxuICAgICAgICBpZiAoIV9pZkNsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmUobV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUrKztcclxuICAgICAgICAgICAgLy/pmZDmtYHvvIzmr4/kuIDmrKHlro/ku7vliqHlj6rkv53lrZjkuIDmrKHmlbDmja5cclxuICAgICAgICAgICAgLy/miorkv53lrZjku7vliqHms6jlhozov5vlvq7ku7vliqHliJfooajvvIzlsIbkvJrlnKjmnKzmrKHmlbDmja7kv67mlLnnmoTlro/ku7vliqHlrozmiJDlkI7lubblnKjkuIvmrKHlro/ku7vliqHlvIDlp4vliY3ooqvlhajpg6jmiafooYxcclxuICAgICAgICAgICAgLy8gcXVldWVNaWNyb3Rhc2svL+ebtOaOpeS9v+eUqOW+ruS7u+WKoeaWueazleWcqOafkOS6m+W5s+WPsOS8muS4jeWFvOWuuVxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zYXZlVG9EaXNrUXVldWUtLTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkv53lrZjmlbDmja7liY0nKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1fc2F2ZVRvRGlza1F1ZXVlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKG1fZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChFKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLkNvbnNvbGVFeC5wYWNrRXJyb3IoJ+aVsOaNruS/neWtmOaXtuWHuumUmScsIEUpKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5L+d5a2Y5pWw5o2u5Yiw5pys5ZywXHJcbiAgICBwcml2YXRlIF9zYXZlKG1fZGF0YT86IERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+d5a2Y5pWw5o2uJyk7XHJcbiAgICAgICAgLy/luo/liJfljJZcclxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG1fZGF0YSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2F2ZU5hbWUsIGpzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/ojrflj5blr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXJKc29uID0gdGhpcy5nZXREaWZmZXJEYXRhKGpzb24pO1xyXG4gICAgICAgICAgICAvL+S/neWtmOWvueavlOaVsOaNrlxyXG4gICAgICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZGlmZmVyTmFtZSwgX2RpZmZlckpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaXtumXtFxyXG4gICAgICAgIGxldCBfdGltZSA9IERhdGUubm93KCkgLSB0aGlzLm1fc2F2ZVRvRGlza1RpbWU7XHJcbiAgICAgICAgdGhpcy5tX3NhdmVUb0Rpc2tUaW1lID0gMDtcclxuICAgICAgICAvL+WIpOaWreaXtumXtOW3rlxyXG4gICAgICAgIGlmIChfdGltZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLkNvbnNvbGVFeC5wYWNrV2Fybign5Zy65pmv5L+d5a2Y5pe26Ze06L+H6ZW/JywgdGhpcy5zYXZlTmFtZSwgX3RpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47mnKzlnLDojrflj5bmlbDmja5cclxuICAgIHByaXZhdGUgX3JlYWREYXRhKCk6IERhdGEge1xyXG4gICAgICAgIC8v6K+75Y+W5pys5Zyw5pWw5o2uXHJcbiAgICAgICAgbGV0IHJlYWRTdHIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc2F2ZU5hbWUpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5piv57q/5LiK546v5aKDXHJcbiAgICAgICAgaWYgKF9NYWluQ29uZmlnLk9uTGluZSAmJiB0aGlzLl9pZkRpZmZlckRhdGEpIHtcclxuICAgICAgICAgICAgLy/lr7nmr5TmlbDmja5cclxuICAgICAgICAgICAgbGV0IF9kaWZmZXIgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZGlmZmVyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpZmZlckRhdGEocmVhZFN0cikgIT0gX2RpZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVOZXdEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bkuIDkuKrmlrDnmoTlrp7kvotcclxuICAgICAgICBsZXQgX3NhdmVEYXRhOiBEYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/liKTmlq3mlbDmja7mmK/lkKbooqvnr6HmlLlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVhZFN0cikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShyZWFkU3RyKTtcclxuICAgICAgICAgICAgICAgIC8v55So5pys5Zyw55qE5pWw5o2u5aGr5YWF5b2T5YmN5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gX3NhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NhdmVEYXRhW2tleV0gPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/mj5Dlj5bmnKzlnLDmlbDmja7lkozlrprkuYnmlbDmja7nmoTplK7lt67lvIJcclxuICAgICAgICAgICAgICAgIGlmICghX01haW5Db25maWcuT25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9fa2V5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBqc29uRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2tleS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfa2V5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBfc2F2ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2tleS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat5Lik5Liq5pWw57uE5piv5ZCm55u45ZCMXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheVV0aWxzLkNvbnRlbnRJZlNhbWUoX19rZXksIF9rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oYCR7dGhpcy5fc2F2ZU5hbWV955qE5a6a5LmJ5pWw5o2u5LiO5pys5Zyw5pWw5o2u6ZSu5LiN5LiA6Ie077yM5bu66K6u5Yig6Zmk5pys5Zyw5pWw5o2u44CCXFxuYCwgJ+WumuS5ieaVsOaNricsIF9rZXksICdcXG4nLCAn5pys5Zyw5pWw5o2uJywgX19rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZU5ld0RhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTmV3RGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfc2F2ZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blubbkv53lrZjkuIDkuKrmlrDmlbDmja5cclxuICAgIHByaXZhdGUgX3NhdmVOZXdEYXRhKCk6IERhdGEge1xyXG4gICAgICAgIGxldCBtX2RhdGE6IERhdGEgPSB0aGlzLmdldE5ld0RhdGEoKTtcclxuICAgICAgICAvL+S/neWtmOaVsOaNru+8jOS4jemZkOa1gVxyXG4gICAgICAgIHRoaXMuc2F2ZShtX2RhdGEgYXMgRGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG1fZGF0YSBhcyBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aSE55CG5a+55q+U5pWw5o2uXHJcbiAgICBwcml2YXRlIGdldERpZmZlckRhdGEoX3N0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuepulxyXG4gICAgICAgIGlmICghX3N0cmluZykgcmV0dXJuICcnO1xyXG4gICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zc2libGVPbmx5KF9zdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5o+Q5Y+W5LiA5Liq6LaL6L+R5ZSv5LiA55qE5a2X56ym5Liy77yM6YCC5ZCI6L6D6ZW/55qE5pWw5o2uXHJcbiAgICBwcml2YXRlIHBvc3NpYmxlT25seShfc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5o+Q5Y+W5a2X56ym5Liy5Lit5ZCE5Liq5a2X56ym5Ye6546w55qE5qyh5pWwXHJcbiAgICAgICAgbGV0IF9tYXA6IE1hcDxzdHJpbmcsIG51bWJlcltdPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBsZXQgX3N0cjogc3RyaW5nO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3N0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfc3RyID0gX3N0cmluZy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChfbWFwLmhhcyhfc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgX21hcC5nZXQoX3N0cikucHVzaChpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9tYXAuc2V0KF9zdHIsIFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5/orqHlrZfnrKblh7rnjrDmrKHmlbDlubbkvZznroDljZXmt7fmt4blpITnkIZcclxuICAgICAgICBsZXQgX2NvbmZvcm1pdHlOdW1iZXI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgWy4uLl9tYXAudmFsdWVzKCldLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9jb25mb3JtaXR5TnVtYmVyICs9ICgoaXRlbS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhICsgYjtcclxuICAgICAgICAgICAgfSkpICogKGluZGV4ICsgMSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9tYXAsIF9jb25mb3JtaXR5TnVtYmVyKTtcclxuICAgICAgICAvL+i9rOaIkGJhc2U2NOeahOWtl+espuS4slxyXG4gICAgICAgIHJldHVybiBidG9hKF9jb25mb3JtaXR5TnVtYmVyLnRvU3RyaW5nKDMyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDmja7ljZXlkJHliqDlr4bvvIzpgILlkIjovoPnn63nmoTmlbDmja5cclxuICAgIHByaXZhdGUgZW5jcnlwdChfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICAvL+WIpOaWreiDveWQpuS9v+eUqG1kNVxyXG4gICAgICAgIGlmIChNZDUuaWZVc2UpIHtcclxuICAgICAgICAgICAgbGV0IF9lbmNyeXB0U3RyOiBzdHJpbmcgPSBgTGF5YU1pbmlHYW1lLSR7dGhpcy5zYXZlTmFtZX06JHtfc3RyaW5nfWA7XHJcbiAgICAgICAgICAgIHJldHVybiBNZDUuaGFzaFN0cihfZW5jcnlwdFN0cikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+S4jeeUqOS7u+S9leWKoOWvhlxyXG4gICAgICAgICAgICByZXR1cm4gYG5vRW5jcnlwdF8ke19zdHJpbmd9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZURhdGEgZnJvbSBcIi4vQmFzZURhdGFcIjtcclxuaW1wb3J0IEJhc2VEYXRhUHJveHkgZnJvbSBcIi4vQmFzZURhdGFQcm94eVwiO1xyXG5pbXBvcnQgT2JqZWN0UHJveHlUIGZyb20gXCIuL09iamVjdFByb3h5VFwiO1xyXG5cclxuLyoqXHJcbiAqIOS4tOaXtuaVsOaNruS7o+eQhuWfuuexu1xyXG4gKiDms5vlnovkuLrmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VTaG9ydERhdGFQcm94eTxEYXRhIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmFzZURhdGFQcm94eTxEYXRhPiB7XHJcbiAgICAvKiog5Li05pe25pWw5o2u6buY6K6k5LiN6K6+572u5Luj55CGICovXHJcbiAgICBwcm90ZWN0ZWQgbV9pZlNldFByb3h5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubV9kYXRhID0gdGhpcy5nZXROZXdEYXRhKCk7XHJcbiAgICAgICAgLy/orr7nva7ku6PnkIZcclxuICAgICAgICBpZiAodGhpcy5tX2lmU2V0UHJveHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX29iamVjdFByb3h5VCA9IG5ldyBPYmplY3RQcm94eVQoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSB0aGlzLm1fb2JqZWN0UHJveHlULnNldFByb3h5KHRoaXMubV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJbmlbDmja7lm57osIMgKi9cclxuICAgIHByb3RlY3RlZCBfaW5pdERhdGEoKSB7IH1cclxufSIsImltcG9ydCBCYXNlRGF0YSBmcm9tIFwiLi9CYXNlRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruWkhOeQhuW3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7mqKHmnb/oo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfZGF0YSDmlbDmja7mqKHmnb9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZURhdGFUZW1wbGF0ZShfZGF0YTogeyBuZXcoKTogQmFzZURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlbDmja7mqKHmnb9cclxuICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5kYXRhVGVtcGxhdGUgPSBfZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVHlwZVNjcmlwdCBNZDXliqDlr4ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1kNSB7XHJcbiAgICAvKiog6IO95ZCm5L2/55SoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmVXNlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBPbmUgdGltZSBoYXNoaW5nIGZ1bmN0aW9uc1xyXG4gICAgcHVibGljIHN0YXRpYyBoYXNoU3RyKHN0cjogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uZVBhc3NIYXNoZXJcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgLmFwcGVuZFN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc2hBc2NpaVN0cihzdHI6IHN0cmluZywgcmF3OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRBc2NpaVN0cihzdHIpXHJcbiAgICAgICAgICAgIC5lbmQocmF3KTtcclxuICAgIH1cclxuICAgIC8vIFByaXZhdGUgU3RhdGljIFZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGVJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmZXIzMklkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGV4T3V0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8vIFBlcm1hbmVudCBpbnN0YW5jZSBpcyB0byB1c2UgZm9yIG9uZS1jYWxsIGhhc2hpbmdcclxuICAgIHByaXZhdGUgc3RhdGljIG9uZVBhc3NIYXNoZXIgPSBuZXcgTWQ1KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hleCh4OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGhjID0gTWQ1LmhleENoYXJzO1xyXG4gICAgICAgIGNvbnN0IGhvID0gTWQ1LmhleE91dDtcclxuICAgICAgICBsZXQgbjtcclxuICAgICAgICBsZXQgb2Zmc2V0O1xyXG4gICAgICAgIGxldCBqO1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGkgKiA4O1xyXG4gICAgICAgICAgICBuID0geFtpXTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7IGogKz0gMikge1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMSArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICAgICAgaG9bb2Zmc2V0ICsgMCArIGpdID0gaGMuY2hhckF0KG4gJiAweDBGKTtcclxuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoby5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbWQ1Y3ljbGUoeDogSW50MzJBcnJheSB8IFVpbnQzMkFycmF5LCBrOiBJbnQzMkFycmF5IHwgVWludDMyQXJyYXkpIHtcclxuICAgICAgICBsZXQgYSA9IHhbMF07XHJcbiAgICAgICAgbGV0IGIgPSB4WzFdO1xyXG4gICAgICAgIGxldCBjID0geFsyXTtcclxuICAgICAgICBsZXQgZCA9IHhbM107XHJcbiAgICAgICAgLy8gZmYoKVxyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMF0gLSA2ODA4NzY5MzYgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1syXSArIDYwNjEwNTgxOSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1szXSAtIDEwNDQ1MjUzMzAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s1XSArIDEyMDAwODA0MjYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbNl0gLSAxNDczMjMxMzQxIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbOF0gKyAxNzcwMDM1NDE2IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbOV0gLSAxOTU4NDE0NDE3IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzExXSAtIDE5OTA0MDQxNjIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMTJdICsgMTgwNDYwMzY4MiB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzE0XSAtIDE1MDIwMDIyOTAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTVdICsgMTIzNjUzNTMyOSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XHJcbiAgICAgICAgLy8gZ2coKVxyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMV0gLSAxNjU3OTY1MTAgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxMV0gKyA2NDM3MTc3MTMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMF0gLSAzNzM4OTczMDIgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xyXG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XHJcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxMF0gKyAzODAxNjA4MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzE1XSAtIDY2MDQ3ODMzNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s5XSArIDU2ODQ0NjQzOCB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzE0XSAtIDEwMTk4MDM2OTAgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s4XSArIDExNjM1MzE1MDEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMTNdIC0gMTQ0NDY4MTQ2NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1s3XSArIDE3MzUzMjg0NzMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMTJdIC0gMTkyNjYwNzczNCB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaGgoKVxyXG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzVdIC0gMzc4NTU4IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzhdIC0gMjAyMjU3NDQ2MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTFdICsgMTgzOTAzMDU2MiB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTRdIC0gMzUzMDk1NTYgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMV0gLSAxNTMwOTkyMDYwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzRdICsgMTI3Mjg5MzM1MyB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbN10gLSAxNTU0OTc2MzIgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzEwXSAtIDEwOTQ3MzA2NDAgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMTNdICsgNjgxMjc5MTc0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzBdIC0gMzU4NTM3MjIyIHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1szXSAtIDcyMjUyMTk3OSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbNl0gKyA3NjAyOTE4OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcclxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s5XSAtIDY0MDM2NDQ4NyB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1sxMl0gLSA0MjE4MTU4MzUgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzE1XSArIDUzMDc0MjUyMCB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMl0gLSA5OTUzMzg2NTEgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XHJcbiAgICAgICAgLy8gaWkoKVxyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzBdIC0gMTk4NjMwODQ0IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XHJcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XHJcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTRdIC0gMTQxNjM1NDkwNSB8IDA7XHJcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XHJcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbNV0gLSA1NzQzNDA1NSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMTJdICsgMTcwMDQ4NTU3MSB8IDA7XHJcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcclxuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1szXSAtIDE4OTQ5ODY2MDYgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzEwXSAtIDEwNTE1MjMgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzFdIC0gMjA1NDkyMjc5OSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbOF0gKyAxODczMzEzMzU5IHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzE1XSAtIDMwNjExNzQ0IHwgMDtcclxuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcclxuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xyXG4gICAgICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xyXG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzEzXSArIDEzMDkxNTE2NDkgfCAwO1xyXG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xyXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzRdIC0gMTQ1NTIzMDcwIHwgMDtcclxuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xyXG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xyXG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xyXG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzJdICsgNzE4Nzg3MjU5IHwgMDtcclxuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcclxuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s5XSAtIDM0MzQ4NTU1MSB8IDA7XHJcbiAgICAgICAgYiA9IChiIDw8IDIxIHwgYiA+Pj4gMTEpICsgYyB8IDA7XHJcblxyXG4gICAgICAgIHhbMF0gPSBhICsgeFswXSB8IDA7XHJcbiAgICAgICAgeFsxXSA9IGIgKyB4WzFdIHwgMDtcclxuICAgICAgICB4WzJdID0gYyArIHhbMl0gfCAwO1xyXG4gICAgICAgIHhbM10gPSBkICsgeFszXSB8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEludDMyQXJyYXkgPSBuZXcgSW50MzJBcnJheSg0KTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjogQXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNjgpO1xyXG4gICAgcHJpdmF0ZSBfYnVmZmVyODogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2J1ZmZlcjMyOiBVaW50MzJBcnJheTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyLCAwLCA2OCk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYnVmZmVyLCAwLCAxNyk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLnNldChNZDUuc3RhdGVJZGVudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhciB0byBjb2RlIHBvaW50IHRvIHRvIGFycmF5IGNvbnZlcnNpb246XHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvY2hhckNvZGVBdFxyXG4gICAgLy8gI0V4YW1wbGUuM0FfRml4aW5nX2NoYXJDb2RlQXRfdG9faGFuZGxlX25vbi1CYXNpYy1NdWx0aWxpbmd1YWwtUGxhbmVfY2hhcmFjdGVyc19pZl90aGVpcl9wcmVzZW5jZV9lYXJsaWVyX2luX3RoZV9zdHJpbmdfaXNfdW5rbm93blxyXG4gICAgcHVibGljIGFwcGVuZFN0cihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1ZjggPSB0aGlzLl9idWZmZXI4O1xyXG4gICAgICAgIGNvbnN0IGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XHJcbiAgICAgICAgbGV0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBsZXQgY29kZTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2KSArIDB4QzA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGNvZGUgJiAweDNGIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhEODAwIHx8IGNvZGUgPiAweERCRkYpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDEyKSArIDB4RTA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSAoKGNvZGUgLSAweEQ4MDApICogMHg0MDApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgLSAweERDMDApICsgMHgxMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMEZGRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaWNvZGUgc3RhbmRhcmQgc3VwcG9ydHMgY29kZSBwb2ludHMgdXAgdG8gVSsxMEZGRkYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDE4KSArIDB4RjA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMiAmIDB4M0YpIHwgMHg4MDtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgPj4+IDYgJiAweDNGKSB8IDB4ODA7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlICYgMHgzRikgfCAweDgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidWZMZW4gPj0gNjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgICAgICBidWZMZW4gLT0gNjQ7XHJcbiAgICAgICAgICAgICAgICBidWYzMlswXSA9IGJ1ZjMyWzE2XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSBidWZMZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZEFzY2lpU3RyKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XHJcbiAgICAgICAgY29uc3QgYnVmMzIgPSB0aGlzLl9idWZmZXIzMjtcclxuICAgICAgICBsZXQgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IDspIHtcclxuICAgICAgICAgICAgaSA9IE1hdGgubWluKHN0ci5sZW5ndGggLSBqLCA2NCAtIGJ1Zkxlbik7XHJcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gc3RyLmNoYXJDb2RlQXQoaisrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmTGVuID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRCeXRlQXJyYXkoaW5wdXQ6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGxldCBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBpID0gTWF0aC5taW4oaW5wdXQubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IGlucHV0W2orK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJ1ZkxlbiA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IDY0O1xyXG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XHJcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlbGYuX3N0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBidWZmZXI6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgc2VsZi5fYnVmZmVyOCksXHJcbiAgICAgICAgICAgIGJ1Zmxlbjogc2VsZi5fYnVmZmVyTGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHNlbGYuX2RhdGFMZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXRlOiBbc1swXSwgc1sxXSwgc1syXSwgc1szXV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYnVmID0gc3RhdGUuYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHggPSBzdGF0ZS5zdGF0ZTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gc3RhdGUuYnVmbGVuO1xyXG4gICAgICAgIHNbMF0gPSB4WzBdO1xyXG4gICAgICAgIHNbMV0gPSB4WzFdO1xyXG4gICAgICAgIHNbMl0gPSB4WzJdO1xyXG4gICAgICAgIHNbM10gPSB4WzNdO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcjhbaV0gPSBidWYuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZChyYXc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZkxlbiA9IHRoaXMuX2J1ZmZlckxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWY4ID0gdGhpcy5fYnVmZmVyODtcclxuICAgICAgICBjb25zdCBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xyXG4gICAgICAgIGNvbnN0IGkgPSAoYnVmTGVuID4+IDIpICsgMTtcclxuICAgICAgICBsZXQgZGF0YUJpdHNMZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gYnVmTGVuO1xyXG5cclxuICAgICAgICBidWY4W2J1Zkxlbl0gPSAweDgwO1xyXG4gICAgICAgIGJ1ZjhbYnVmTGVuICsgMV0gPSBidWY4W2J1ZkxlbiArIDJdID0gYnVmOFtidWZMZW4gKyAzXSA9IDA7XHJcbiAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5LnN1YmFycmF5KGkpLCBpKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZkxlbiA+IDU1KSB7XHJcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuICAgICAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBmaW5hbCBjb21wdXRhdGlvbiBiYXNlZCBvbiB0aGUgdGFpbCBhbmQgbGVuZ3RoXHJcbiAgICAgICAgLy8gQmV3YXJlIHRoYXQgdGhlIGZpbmFsIGxlbmd0aCBtYXkgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XHJcbiAgICAgICAgZGF0YUJpdHNMZW4gPSB0aGlzLl9kYXRhTGVuZ3RoICogODtcclxuICAgICAgICBpZiAoZGF0YUJpdHNMZW4gPD0gMHhGRkZGRkZGRikge1xyXG4gICAgICAgICAgICBidWYzMlsxNF0gPSBkYXRhQml0c0xlbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YUJpdHNMZW4udG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsbyA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcclxuICAgICAgICAgICAgY29uc3QgaGkgPSBwYXJzZUludChtYXRjaGVzWzFdLCAxNikgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGxvO1xyXG4gICAgICAgICAgICBidWYzMlsxNV0gPSBoaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhdyA/IHRoaXMuX3N0YXRlIDogTWQ1Ll9oZXgodGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ajgOafpU1kNeaYr+WQpuWPr+eUqFxyXG5pZiAoTWQ1Lmhhc2hTdHIoJ2hlbGxvJykgIT09ICc1ZDQxNDAyYWJjNGIyYTc2Yjk3MTlkOTExMDE3YzU5MicpIHtcclxuICAgIC8v6K6+572u5LiN6IO95L2/55SoXHJcbiAgICBNZDUuaWZVc2UgPSBmYWxzZTtcclxuICAgIC8vXHJcbiAgICBjb25zb2xlLndhcm4oJ01kNSBzZWxmIHRlc3QgZmFpbGVkLicpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDlr7nosaHku6PnkIblt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3h5VCB7XHJcbiAgICAvKiog55uR5ZCs5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fbW9uaXRvckxpc3Q6IHtcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fICovXHJcbiAgICAgICAgX3RoaXM6IGFueSxcclxuICAgICAgICAvKiog55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVICovXHJcbiAgICAgICAgX2JhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIC8qKiDmupDlr7nosaEgKi9cclxuICAgICAgICBfb2JqPzogb2JqZWN0LFxyXG4gICAgICAgIC8qKiDplK7lgLwgKi9cclxuICAgICAgICBfa2V5Pzogc3RyaW5nLFxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnm5HlkKxcclxuICAgICAqIOebkeWQrOafkOS4quWvueixoeeahOafkOS4quWxnuaAp+aYr+WQpuWPkeeUn+abtOaUuVxyXG4gICAgICog5aaC5p6c5Y+v6YCJ5bGe5oCn6YO95LiN5aGr55qE6K+d5YiZ55uR5ZCs5YWo6YOo55uR5ZCs5pWw5o2u5bGe5oCn5pu05pS5XHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg55uR5ZCs6Kem5Y+R5Zue6LCD5omn6KGM5pa55rOVXHJcbiAgICAgKiBAcGFyYW0gX29iaiDnm67moIflr7nosaHvvIzlpoLmnpzkuI3pgInliJnnm5HlkKzlhajpg6jlhoXlrrnmm7TmlLlcclxuICAgICAqIEBwYXJhbSBfa2V5IOmUruWQje+8jOWmguaenOS4jemAieWImeebkeWQrOWFqOmDqOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTW9uaXRvcjxPIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgTz4oX3RoaXM6IGFueSwgX2JhY2s6IEZ1bmN0aW9uLCBfb2JqPzogTywgX2tleT86IEsgfCBLW10pIHtcclxuICAgICAgICBsZXQgX2tleXM6IEtbXSA9IFtdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9rZXkpKSB7XHJcbiAgICAgICAgICAgIF9rZXlzLnB1c2goLi4uX2tleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX2tleXMucHVzaChfa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBfa2V5cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5Yiw55uR5ZCs5YiX6KGoXHJcbiAgICAgICAgICAgIHRoaXMubV9tb25pdG9yTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIF90aGlzLFxyXG4gICAgICAgICAgICAgICAgX2JhY2ssXHJcbiAgICAgICAgICAgICAgICBfb2JqLFxyXG4gICAgICAgICAgICAgICAgX2tleTogaXRlbSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3RoaXMg5Zue6LCD5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gX2JhY2sg5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhck1vbml0b3IoX3RoaXM6IGFueSwgX2JhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubV9tb25pdG9yTGlzdCA9IHRoaXMubV9tb25pdG9yTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEoXHJcbiAgICAgICAgICAgICAgICBpdGVtLl90aGlzID09IF90aGlzXHJcbiAgICAgICAgICAgICAgICAvL+WPr+mAieeahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgJiYgKF9iYWNrID8gaXRlbS5fYmFjayA9PSBfYmFjayA6IHRydWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Luj55CGXHJcbiAgICAgKiBAcGFyYW0gX28g5rqQ5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQcm94eTxEYXRhIGV4dGVuZHMgb2JqZWN0PihfbzogRGF0YSk6IERhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRQcm94eShfbykgYXMgRGF0YTtcclxuICAgIH1cclxuICAgIC8v6YWN5ZCI6K6+572u5Luj55CGXHJcbiAgICBwcml2YXRlIF9zZXRQcm94eShfbyk6IG9iamVjdCB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mma7pgJrlgLznsbvlnovlkozmlrnms5VcclxuICAgICAgICBpZiAodHlwZW9mIF9vID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgX28gIT0gXCJvYmplY3RcIiB8fCAhX28pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9vO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+WPr+i/reS7o+WvueixoeWSjOaWueazlVxyXG4gICAgICAgIGlmICghX29bU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4gICAgICAgICAgICAvL+mBjeWOhuWvueixoeiuvue9ruS7o+eQhlxyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSBpbiBfbykge1xyXG4gICAgICAgICAgICAgICAgX29bX2ldID0gdGhpcy5fc2V0UHJveHkoX29bX2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i/lOWbnuacgOe7iOeahOS7o+eQhuWvueixoVxyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShfbywge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqICBzZXQg5pa55rOVXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaFcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldCh0cmFwVGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAgICAgLy/ml6flgLxcclxuICAgICAgICAgICAgICAgIGxldCBfd29yblZhbHVlID0gUmVmbGVjdC5nZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICAvL+S/ruaUueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pZjogYm9vbGVhbiA9IFJlZmxlY3Quc2V0KHRyYXBUYXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChfaWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+aYr+S4jeaYr+aVsOe7hOeahGxlbmd0aOWxnuaAp+iiq+S/ruaUuVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkodHJhcFRhcmdldCkgJiYga2V5ID09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm94eVNldChrZXksIHZhbHVlLCBfd29yblZhbHVlLCB0cmFwVGFyZ2V0LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWY7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIGdldCDmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHRyYXBUYXJnZXQg5Luj55CG55qE55uu5qCHXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBrZXkg5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSByZWNlaXZlciByZWNlaXZlciDmk43kvZzlj5HnlJ/nmoTlr7nosaHvvIjpgJrluLjmmK/ku6PnkIbvvIlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldCh0cmFwVGFyZ2V0LCBrZXksIHJlY2VpdmVyKTogYW55IHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5bGe5oCnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodHJhcFRhcmdldCwga2V5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKlxyXG4gICAgICog5Luj55CG5a+56LGh6KKr6K6+572u5pe255qE5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWxnuaAp+WQjeensFxyXG4gICAgICogQHBhcmFtIG5ld1ZhbHVlIOaWsOWAvFxyXG4gICAgICogQHBhcmFtIHdvcm5WYWx1ZSDml6flgLxcclxuICAgICAqIEBwYXJhbSB0cmFwVGFyZ2V0IOS7o+eQhueahOebruagh1xyXG4gICAgICogQHBhcmFtIHJlY2VpdmVyIOaTjeS9nOWPkeeUn+eahOWvueixoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByb3h5U2V0KGtleSwgbmV3VmFsdWUsIHdvcm5WYWx1ZSwgdHJhcFRhcmdldCwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Luj55CG5a+56LGh6KKr6K6+572uJywgdHJhcFRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGxldCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIC8v5omn6KGM55uR5ZCsXHJcbiAgICAgICAgdGhpcy5tX21vbml0b3JMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy/lhYjliKTmlq3ku6PnkIbnm67moIdcclxuICAgICAgICAgICAgaWYgKGl0ZW0uX29iaiAmJiBpdGVtLl9vYmogIT0gcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fa2V5ICYmIGl0ZW0uX2tleSAhPSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+aJp+ihjOWbnuiwg1xyXG4gICAgICAgICAgICBpdGVtLl9iYWNrLmFwcGx5KGl0ZW0uX3RoaXMsIF9hcmd1bWVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcblxyXG4vKipcclxuICog5qC56LCD6K+V57G777yM5omA5pyJ6LCD6K+V57G75b+F6aG755Sx5q2k57un5om/XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlRGVidWcge1xyXG4gICAgLyoqIOWJjee8gCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQcmVmaXg6IHN0cmluZyA9ICckRGVidWcnO1xyXG5cclxuICAgIC8qKiDmoLnosIPor5Xlr7nosaEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVidWdPYmo6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOWQjeWtl++8jOeUqCBXaW5kb3db5YmN57yAICsgX25hbWVdIOiuv+mXrlxyXG4gICAgICog5Y+v5Lul57un5om/5pu05pS56L+Z5Liq5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgX2lmSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq6LCD6K+V5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqIEBwYXJhbSBfaXRlbSDor6Xlr7nosaFcclxuICAgICAqIEBwYXJhbSBfdHlwZSDor6Xlr7nosaHnsbvlnotcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEl0ZW0oX2tleTogc3RyaW5nLCBfaXRlbTogYW55KSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKblvIDlkK/kuobosIPor5VcclxuICAgICAgICBpZiAoIV9HYW1lQ29uZmlnLmlmRGVidWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2lmSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZkluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBCYXNlRGVidWcuRGVidWdPYmpbdGhpcy5fbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW19rZXldID0gX2l0ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5byA5ZCv5LqG6LCD6K+V5qih5byPXHJcbmlmIChfR2FtZUNvbmZpZy5pZkRlYnVnKSB7XHJcbiAgICAvL+azqOWGjOWFqOWxgOiwg+ivleWvueixoVxyXG4gICAgd2luZG93W0Jhc2VEZWJ1Zy5QcmVmaXhdID0gQmFzZURlYnVnLkRlYnVnT2JqO1xyXG4gICAgLy9cclxuICAgIGNvbnNvbGUud2FybiguLi5Db25zb2xlRXgucGFja1dhcm4oJ+W8gOWQr+iwg+ivleaooeW8j++8jOmAmui/hycsIEJhc2VEZWJ1Zy5QcmVmaXgsICforr/pl64nKSk7XHJcbn0iLCJcclxuLyoqXHJcbiAqIOa4uOaIj+WvueixoeaxoFxyXG4gKiAhIOWPquiDvea4uOaIj+WGheS9v+eUqO+8jOS4jeimgeWcqOW3peWFt+S4reS9v+eUqFxyXG4gKiAhIOWwvemHj+WPquWcqOmHjeWkjeWIm+W7uumdnuW4uOWkmuWvueixoeeahOWcsOaWueS9v+eUqO+8jOS4jeeEtuS8muW+l+S4jeWBv+WksVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBvb2wge1xyXG4gICAgLyoqIOWvueixoeaxoOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbExpc3Q6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW08VCBleHRlbmRzIGFueT4oX3NpZ246IEVHYW1lUG9vbFNpZ24pOiBUIHtcclxuICAgICAgICAvL+WFiOWIsOacrOWcsOWvueixoeaxoOWIl+ihqOS4reafpeaJvlxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xMaXN0W19zaWduXSAmJiB0aGlzLnBvb2xMaXN0W19zaWduXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2xMaXN0W19zaWduXS5wb3AoKSBhcyBUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3NpZ24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjMpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRUdhbWVQb29sU2lnbi52MjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBMYXlhLlZlY3RvcjIpIGFzIGFueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtuWFg+e0oFxyXG4gICAgICogQHBhcmFtIF9zaWduIOWbnuaUtuagh+ivhlxyXG4gICAgICogQHBhcmFtIF9pdGVtIOWbnuaUtuWGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGVJdGVtKF9zaWduOiBFR2FtZVBvb2xTaWduLCAuLi5faXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvb2xMaXN0W19zaWduXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvb2xMaXN0W19zaWduXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPqua3u+WKoOS4jeWMheWQq+eahOWFg+e0oFxyXG4gICAgICAgIGZvciAobGV0IF9vIG9mIF9pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9vbExpc3RbX3NpZ25dLmluY2x1ZGVzKF9vKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sTGlzdFtfc2lnbl0ucHVzaChfbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Z2M1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFYzKCk6IExheWEuVmVjdG9yMyB7XHJcbiAgICAgICAgbGV0IF92MzogTGF5YS5WZWN0b3IzID0gdGhpcy5nZXRJdGVtPExheWEuVmVjdG9yMz4oRUdhbWVQb29sU2lnbi52Myk7XHJcbiAgICAgICAgX3YzLnNldFZhbHVlKDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBfdjM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtnYzXHJcbiAgICAgKiBAcGFyYW0gX3YzIOW+heWbnuaUtueahHYzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjeWNsZVYzKC4uLl92M3M6IExheWEuVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbShFR2FtZVBvb2xTaWduLnYzLCAuLi5fdjNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnYyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VjIoKTogTGF5YS5WZWN0b3IyIHtcclxuICAgICAgICBsZXQgX3YyOiBMYXlhLlZlY3RvcjIgPSB0aGlzLmdldEl0ZW08TGF5YS5WZWN0b3IyPihFR2FtZVBvb2xTaWduLnYyKTtcclxuICAgICAgICBfdjIuc2V0VmFsdWUoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF92MjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS2djJcclxuICAgICAqIEBwYXJhbSBfdjIg5b6F5Zue5pS255qEdjJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN5Y2xlVjIoLi4uX3YyczogTGF5YS5WZWN0b3IyW10pIHtcclxuICAgICAgICB0aGlzLnJlY3ljbGVJdGVtKEVHYW1lUG9vbFNpZ24udjIsIC4uLl92MnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5ri45oiP5a+56LGh5rGg5qCH6K+GXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFR2FtZVBvb2xTaWduIHtcclxuICAgIC8qKiAz57u05ZCR6YePICovXHJcbiAgICB2MyxcclxuICAgIC8qKiAy57u05ZCR6YePICovXHJcbiAgICB2MixcclxufSIsImltcG9ydCBDb25zb2xlRXggZnJvbSBcIi4uL0NvbnNvbGUvQ29uc29sZUV4XCI7XHJcbmltcG9ydCBSZXNMb2FkR3JvdXAgZnJvbSBcIi4uL1Jlcy9SZXNMb2FkR3JvdXBcIjtcclxuaW1wb3J0IFJlc0xvYWRJdGVtIGZyb20gXCIuLi9SZXMvUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/ov5vlhaXkuYvliY3nmoTliqDovb3ln7rnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VJbml0TG9hZCB7XHJcbiAgICAvL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vVxyXG4gICAgICogQHBhcmFtIF9jb21CYWNrIOWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZChfY29tQmFjaz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNvbnNvbGVFeC5wYWNrQ29tKCflvIDlp4vliqDovb3muLjmiI/liJ3lp4vljJbotYTmupAnKSk7XHJcbiAgICAgICAgLy/miafooYzliqDovb3kuYvliY3nmoTlvILmraVcclxuICAgICAgICB0aGlzLl9sb2FkQmVmb3JlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5Yqg6L296aG5XHJcbiAgICAgICAgICAgIGxldCBfcmVzTG9hZEl0ZW1zOiBSZXNMb2FkSXRlbVtdID0gdGhpcy5fZ2V0TG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIC8v5byC5q2l5Yqg6L295Yqg6L296aG5XHJcbiAgICAgICAgICAgIFJlc0xvYWRHcm91cC5sb2FkQXN5bmMoX3Jlc0xvYWRJdGVtcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFBsYW4oaSk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuX2xvYWRJdGVtc0NvbSwgdW5kZWZpbmVkLCBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tDb20oJ+a4uOaIj+WKoOi9veWujOaIkCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIF9jb21CYWNrICYmIF9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKiAtLS0tLS0tLVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbml0KCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/liqDovb3kuYvliY1cclxuICAgICAqIOWPr+S7peWcqOi/memHjOWFiOWKoOi9veS4gOS6m+S4nOilv1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRCZWZvcmUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yqg6L296aG55YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfZ2V0TG9hZEl0ZW1zKCk6IFJlc0xvYWRJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6plxyXG4gICAgICogQHBhcmFtIF9pIOi/m+W6puWAvFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xvYWRQbGFuKF9pOiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2V5Liq5Yqg6L296aG55a6M5oiQ5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gX3Jlc0xvYWQg5Yqg6L296aG55a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfbG9hZEl0ZW1zQ29tKF9yZXNMb2FkOiBSZXNMb2FkSXRlbSkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9sb2FkQ29tKCkgeyB9XHJcbn0iLCJpbXBvcnQgeyBFS2V5UmVzTmFtZSB9IGZyb20gXCIuL0VLZXlSZXNOYW1lXCI7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gXCIuL0tleVJlc01hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDlhazlhbHotYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbVJlc1VybCB7XHJcbiAgICAvKipcclxuICAgICAqIOmfs+S5kOaWh+S7tui3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5paH5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNdXNpY1VSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLm11c2ljKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5pWI6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDpn7PmlYjlkI3lrZcgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTb3VuZFVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICcubXAzJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLnNvdW5kKSArIG5hbWUgKyBfO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77moIflkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJY29uVVJMKG5hbWU6IHN0cmluZywgXzogc3RyaW5nID0gJy5wbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuaWNvbikgKyBuYW1lICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvueJh+i1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg5Zu+54mH6LWE5rqQ5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gXyDmlofku7blkI7nvIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbWdVUkwobmFtZTogc3RyaW5nLCBfOiBzdHJpbmcgPSAncG5nJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLmltZykgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOearuiCpOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG5hbWUg55qu6IKk5ZCN56ewIFxyXG4gICAgICogQHBhcmFtIF8g5paH5Lu25ZCO57yAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2tpblVSTChuYW1lOiBzdHJpbmcsIF86IHN0cmluZyA9ICdwbmcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuc2tpbikgKyBuYW1lICsgJy4nICsgXztcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhbPplK7otYTmupDngrnlkI3lrZfmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVLZXlSZXNOYW1lIHtcclxuICAgIC8qKiDmoLnnm67lvZUgKi9cclxuICAgIFJvb3RSZXMgPSAncmVzJyxcclxuICAgIC8qKiDphY3nva7ooajnm67lvZUgKi9cclxuICAgIENvbmZpZ0pzb24gPSAnQ29uZmlnSnNvbicsXHJcbiAgICAvKiog5a2X5L2T55uu5b2VICovXHJcbiAgICBGb250ID0gJ0ZvbnQnLFxyXG4gICAgLyoqIEZHVUnotYTmupDnm67lvZUgKi9cclxuICAgIEZHVUkgPSAnRkdVSScsXHJcbiAgICAvKiog5YWz5Y2h6YWN572u6KGo55uu5b2VICovXHJcbiAgICBTY2VuZUpzb24gPSAnU2NlbmVKc29uJyxcclxuICAgIC8qKiDlhbblroPnm67lvZUgKi9cclxuICAgIE90aGVyID0gJ090aGVyJyxcclxuICAgIC8qKiBpY29u55uu5b2VICovXHJcbiAgICBpY29uID0gJ2ljb24nLFxyXG4gICAgLyoqIGltZ+ebruW9lSAqL1xyXG4gICAgaW1nID0gJ2ltZycsXHJcbiAgICAvKiog6Z+z5LmQ5paH5Lu255uu5b2VICovXHJcbiAgICBtdXNpYyA9ICdtdXNpYycsXHJcbiAgICAvKiog6Z+z5pWI5paH5Lu255uu5b2VICovXHJcbiAgICBzb3VuZCA9ICdzb3VuZCcsXHJcbiAgICAvKiog55qu6IKk5paH5Lu255uu5b2VICovXHJcbiAgICBza2luID0gJ3NraW4nLFxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tICcuLi9Db25zb2xlL0NvbnNvbGVFeCc7XHJcbmltcG9ydCB7IEVLZXlSZXNOYW1lIH0gZnJvbSAnLi9FS2V5UmVzTmFtZSc7XHJcbmltcG9ydCBLZXlSZXNNYW5hZ2VyIGZyb20gJy4vS2V5UmVzTWFuYWdlcic7XHJcbi8qKlxyXG4gKiDlv4XopoHnmoTmuLjmiI/otYTmupDot6/lvoRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVzc2VudGlhbFJlc1VybHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWz5Y2h6YWN572u5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5Zy65pmv5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2NlbmVDb25maWdVUkwoX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKEVLZXlSZXNOYW1lLlNjZW5lSnNvbikgKyBfbmFtZSArICcuanNvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bphY3nva7ooahKc29u5paH5Lu2UlVMXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg6YWN572u6KGo5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlnSnNvblVSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuQ29uZmlnSnNvbikgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZHVUnljIVcclxuICAgICAqIEBwYXJhbSBfbmFtZSDljIXlkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGR1VJUGFja1VSTChfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gS2V5UmVzTWFuYWdlci5nZXRSZXNVUkwoRUtleVJlc05hbWUuRkdVSSkgKyBfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtl+S9k+WcsOWdgFxyXG4gICAgICogQHBhcmFtIF9uYW1lIOWtl+S9k+WQjeWtl++8jOWKoOWQjue8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZvbnRVUkwoX25hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTChFS2V5UmVzTmFtZS5Gb250KSArIF9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omA5pyJ6aKE5Yi25L2T5ZCN5a2X5YiX6KGoXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWxsU2NlbmVQcmVmYWJzTmFtZXM6IHtcclxuICAgICAgICBbX2luZGV4OiBzdHJpbmddOiBzdHJpbmcsXHJcbiAgICB9ID0ge307XHJcbiAgICAvL+mihOWItuS9k+WcuuaZr+e8k+WtmFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ByZWZhYnNTY2VuZUNhY2hlOiB7XHJcbiAgICAgICAgW19pbmRleDogc3RyaW5nXTogc3RyaW5nLFxyXG4gICAgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliLbkvZPotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6aKE5Yi25L2T5ZCN5a2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiVVJMKHByZWZhYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvL+WFiOWcqOe8k+WtmOS4reafpeaJvuWcuuaZr+WQjeWtl1xyXG4gICAgICAgIGlmICh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBLZXlSZXNNYW5hZ2VyLmdldFJlc1VSTCh0aGlzLl9wcmVmYWJzU2NlbmVDYWNoZVtwcmVmYWJdKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreivpemihOWItuS9k+WcqOWTquS4quWcuuaZr+S4reiiq+WvvOWHuueahFxyXG4gICAgICAgIGZvciAobGV0IF9pIGluIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9BbGxTY2VuZVByZWZhYnNOYW1lc1tfaV0uaW5kZXhPZignQCcgKyBwcmVmYWIgKyAnQCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOWIsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlZmFic1NjZW5lQ2FjaGVbcHJlZmFiXSA9IF9pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtleVJlc01hbmFnZXIuZ2V0UmVzVVJMKF9pKSArICdDb252ZW50aW9uYWwvJyArIHByZWZhYiArICcubGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKCfmsqHmnInlnKjlnLrmma/mib7liLDpooTliLbkvZMnLCBwcmVmYWIsICflj6/og73mmK/msqHmnInlr7zlh7rlnLrmma/pooTliLbkvZPliJfooajlr7zoh7TnmoTjgIInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lnLrmma/pooTliLbkvZPlkI3lrZfliJfooahcclxuICAgICAqIEBwYXJhbSBfbyDlnLrmma/pooTliLbkvZPpm4blkIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmYWJTY2VuZU5hbWVzKF9vOiBhbnkpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvciAobGV0IF9pIGluIF9vKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0FsbFNjZW5lUHJlZmFic05hbWVzW19pXSA9IF9vW19pXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uc29sZUV4IGZyb20gXCIuLi9Db25zb2xlL0NvbnNvbGVFeFwiO1xyXG5pbXBvcnQgSW5zdGFuY2VUIGZyb20gXCIuLi9Ucy9JbnN0YW5jZVRcIjtcclxuaW1wb3J0IHsgRUtleVJlc05hbWUgfSBmcm9tIFwiLi9FS2V5UmVzTmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFs+mUrui1hOa6kOeCueWIl+ihqOeuoeeQhuWZqFxyXG4gKi9cclxuQEluc3RhbmNlVC5EZWNvcmF0ZUluc3RhbmNlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UmVzTWFuYWdlciB7XHJcbiAgICAvKiog5Y2V5L6LICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogS2V5UmVzTWFuYWdlcjtcclxuXHJcbiAgICAvL+WFs+mUrui1hOa6kOWIl+ihqFxyXG4gICAgcHJpdmF0ZSBtX0tleVJlc0xpc3Q6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v5rOo5YaM5YWz6ZSu6LWE5rqQ55uu5b2VXHJcbiAgICAgICAgdGhpcy5tX0tleVJlc0xpc3QgPSB7XHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Sb290UmVzXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkNvbmZpZ0pzb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuQ29uZmlnSnNvbiArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLkZHVUldOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuRkdVSSArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLlNjZW5lSnNvbl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5TY2VuZUpzb24gKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5Gb250XTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLkZvbnQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5PdGhlcl06IEVLZXlSZXNOYW1lLlJvb3RSZXMgKyAnLycgKyBFS2V5UmVzTmFtZS5PdGhlciArICcvJyxcclxuICAgICAgICAgICAgLy/lhbbku5bot6/lvoRcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLmljb25dOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5pY29uICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUuaW1nXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuaW1nICsgJy8nLFxyXG4gICAgICAgICAgICBbRUtleVJlc05hbWUubXVzaWNdOiBFS2V5UmVzTmFtZS5Sb290UmVzICsgJy8nICsgRUtleVJlc05hbWUuT3RoZXIgKyAnLycgKyBFS2V5UmVzTmFtZS5tdXNpYyArICcvJyxcclxuICAgICAgICAgICAgW0VLZXlSZXNOYW1lLnNvdW5kXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc291bmQgKyAnLycsXHJcbiAgICAgICAgICAgIFtFS2V5UmVzTmFtZS5za2luXTogRUtleVJlc05hbWUuUm9vdFJlcyArICcvJyArIEVLZXlSZXNOYW1lLk90aGVyICsgJy8nICsgRUtleVJlc05hbWUuc2tpbiArICcvJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubV9LZXlSZXNMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblrZjlnKjmn5DkuKrlhbPplK7ngrlrZXlcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlmS2V5UmVzKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09IF9rZXk7XHJcbiAgICAgICAgfSkgIT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrlhbPplK7ngrnotYTmupDnmoTot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJlc1VSTChfa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgea3u+WKoOWFs+mUrui3r+W+hFxyXG4gICAgICogQHBhcmFtIF9rZXkg5YWz6ZSu5YC8XHJcbiAgICAgKiBAcGFyYW0gX3N0cmluZyDot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhZGRSZXNVcmwoX2tleTogc3RyaW5nLCBfc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfa2V5XSA9IF9zdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv67mlLnlhbPplK7ngrnotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBfa2V5IOWFs+mUrueCuWtleVxyXG4gICAgICogQHBhcmFtIF9zdHIg6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZWRpdEtleVJlc0xpc3QoX2tleTogc3RyaW5nLCBfc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgX3JlcGxhY2U6IHN0cmluZyA9IHRoaXMuaW5zdGFuY2UubV9LZXlSZXNMaXN0W19rZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JlcGxhY2UgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uQ29uc29sZUV4LnBhY2tXYXJuKCfkv67mlLnotYTmupDot6/lvoTlpLHotKXvvIzmsqHmnIknICsgX2tleSArICfov5nkuKrlhbPplK7ot6/lvoTvvIEnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7/mjaLmiYDmnInotYTmupDot6/lvoTkuK3nmoTlhbPplK7ngrnot6/lvoRcclxuICAgICAgICBmb3IgKGxldCBfaSBpbiB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0gPSB0aGlzLmluc3RhbmNlLm1fS2V5UmVzTGlzdFtfaV0ucmVwbGFjZShfcmVwbGFjZSwgX3N0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ29uc29sZUV4LnBhY2tMb2coJ+S/ruaUueWFs+mUrueCuei1hOa6kOi3r+W+hCcsIF9yZXBsYWNlLCAn5pu/5o2i5oiQJywgX3N0cikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnNvbGVFeCBmcm9tIFwiLi4vQ29uc29sZS9Db25zb2xlRXhcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hOWIl+ihqFxyXG4gICAgICogQHBhcmFtIG1vZGVsIOWKoOi9veaooeW8j1xyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQodXJsczogYW55LCBtb2RlbDogRVJlc0xvYWRNb2RlbCwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVybHMpKSB7XHJcbiAgICAgICAgICAgIC8v5Y676Zmk6Jma5YC8XHJcbiAgICAgICAgICAgIHVybHMgPSB1cmxzLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInlhoXlrrnpnIDopoHliqDovb1cclxuICAgICAgICBpZiAoIXVybHMgfHwgKEFycmF5LmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZWQucnVuKCk7XHJcbiAgICAgICAgICAgIGlmIChfb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFsxXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVJlc0xvYWRNb2RlbC5EMzpcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRl5pivM0TnmoTmjqXlj6PvvIzpgILnlKjkuo4zROmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIuY3JlYXRlKHVybHMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFUmVzTG9hZE1vZGVsLkQyOlxyXG4gICAgICAgICAgICAgICAgLy9sb2Fk5pivMmTnmoTmjqXlj6PvvIzpgILnlKjkuo4yZOmhueebrlxyXG4gICAgICAgICAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmxzLCBvbkNvbXBsZXRlZCwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29M0TotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQzRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDMsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb0yROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EIFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyRCh1cmxzOiBhbnksIG9uQ29tcGxldGVkOiBMYXlhLkhhbmRsZXIsIF9vblByb2dyZXNzPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkKHVybHMsIEVSZXNMb2FkTW9kZWwuRDIsIG9uQ29tcGxldGVkLCBfb25Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvILmraXliqDovb0zROi1hOa6kFxyXG4gICAgICogQHBhcmFtIHVybHMg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg6L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZDNEQXN5bmModXJsczogYW55LCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlc0xvYWQuTG9hZDNEKHVybHMsIExheWEuSGFuZGxlci5jcmVhdGUobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L29MkTotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmxzIOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOi/m+W6puWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQyREFzeW5jKHVybHM6IGFueSwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQyRCh1cmxzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSksIF9vblByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui1hOa6kFxyXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSBub0Nsb25lIOaYr+WQpuS4jeiOt+WPluWFi+mahueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJlcyhyZXNVcmw6IHN0cmluZywgbm9DbG9uZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICBsZXQgZ2V0UmVzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKHJlc1VybCk7XHJcbiAgICAgICAgaWYgKCFnZXRSZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5Db25zb2xlRXgucGFja0Vycm9yKFwi6LWE5rqQ5bCa5pyq5Yqg6L29XCIsIHJlc1VybCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub0Nsb25lID8gZ2V0UmVzIDogZ2V0UmVzLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIbmjIflrprotYTmupDlnLDlnYDnvJPlrZjjgIJcclxuICAgICAqIEBwYXJhbSByZXNVcmwg6LWE5rqQ6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJSZXMocmVzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclJlcyhyZXNVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6LWE5rqQ5Yqg6L295qih5byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFUmVzTG9hZE1vZGVsIHtcclxuICAgIC8qKiAzRCDotYTmupAgKi9cclxuICAgIEQzLFxyXG4gICAgLyoqIDJkIOi1hOa6kCAqL1xyXG4gICAgRDIsXHJcbn0iLCJpbXBvcnQgUmVzTG9hZEl0ZW0gZnJvbSBcIi4vUmVzTG9hZEl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3nu4RcclxuICog6LSf6LSj5aSa5Liq6LWE5rqQ5Yqg6L296aG555qE57uf5LiA5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkR3JvdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ5YiX6KGo6ZuG5ZCIXHJcbiAgICAgKiAhIOi/memHjOaYr+S+neasoeWKoOi9veW5tuS4jeaYr+WQjOaXtuWKoOi9veeahFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVkIOWujOaIkOaXtuWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5L2c5Li65Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChpdGVtczogUmVzTG9hZEl0ZW1bXSwgb25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIsIF9vbkl0ZW1Db20/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+ayoeacieWKoOi9vemhuVxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZC5ydW4oKTtcclxuICAgICAgICAgICAgaWYgKF9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gWzFdO1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a1heaLt+i0ne+8jOmYsuatouaxoeafk+a6kOWIl+ihqFxyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAvL+W8guatpeWIl+ihqOmVv+W6plxyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgLy/kuIDmraXkuIDmraXmtojotLnlvILmraXliJfooahcclxuICAgICAgICBsZXQgX2Y6IEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uSXRlbTogUmVzTG9hZEl0ZW0gPSBpdGVtcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgb25JdGVtLmxvYWRBc3luYyhMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rmgLvov5vluqZcclxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcy5hcmdzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9sZW5ndGggLSBpdGVtcy5sZW5ndGggLSAxKSArIGkpIC8gX2xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kvKDlh7rljZXkuKrliqDovb3pobnliqDovb3lrozmiJDkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLmFyZ3MgPSBbb25JdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICBfb25JdGVtQ29tLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgX2YoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM6YCS5b2S5Yqg6L295pa55rOVXHJcbiAgICAgICAgX2YoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeWKoOi9vei1hOa6kOWIl+ihqOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGl0ZW1zIOi1hOa6kOWKoOi9vemhuembhuWQiFxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIOWKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICogQHBhcmFtIF9vbkl0ZW1Db20g5Y2V5Liq6LWE5rqQ6aG55Yqg6L295a6M5oiQ5Zue6LCD77yM5Lya5bim5LiK6K+l6LWE5rqQ6aG55a6e5L6L5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzeW5jKGl0ZW1zOiBSZXNMb2FkSXRlbVtdLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlciwgX29uSXRlbUNvbT86IExheWEuSGFuZGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoaXRlbXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MsIF9vbkl0ZW1Db20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlc0xvYWQsIHsgRVJlc0xvYWRNb2RlbCB9IGZyb20gXCIuL1Jlc0xvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3poblcclxuICog6LSf6LSj5LiA57uE6LWE5rqQ5YiX6KGo55qE5Yqg6L29XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNMb2FkSXRlbSB7XHJcbiAgICAvKiog5Yqg6L295qih5byPICovXHJcbiAgICBwcml2YXRlIG1fbG9hZE1vZGVsOiBFUmVzTG9hZE1vZGVsO1xyXG5cclxuICAgIC8qKiDliqDovb3lhbPplK7plK7lgLwgKi9cclxuICAgIHByaXZhdGUgbV9rZXk6IGFueTtcclxuXHJcbiAgICAvKiog5Yqg6L295a6M5oiQ5Zue6LCDICovXHJcbiAgICBwcml2YXRlIG1fY29tQmFjazogTGF5YS5IYW5kbGVyO1xyXG4gICAgLyoqIOWKoOi9vei/m+W6puWbnuiwgyAqL1xyXG4gICAgcHJpdmF0ZSBtX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlcjtcclxuXHJcbiAgICAvKiog6LWE5rqQ6Lev5b6E5YiX6KGoICovXHJcbiAgICBwcml2YXRlIG1fcmVzOiBhbnk7XHJcblxyXG4gICAgLyoqIOiOt+WPluWFs+mUrumUruWAvCAqL1xyXG4gICAgcHVibGljIGdldCBrZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF9yZXMg6LWE5rqQ5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gX21vZGUg5Yqg6L295qih5byPXHJcbiAgICAgKiBAcGFyYW0gX2tleSDlhbPplK7plK7lgLxcclxuICAgICAqIEBwYXJhbSBfY29tQmFjayDliqDovb3lrozmiJDml7bnmoTlm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF9yZXM6IGFueSwgX21vZGU6IEVSZXNMb2FkTW9kZWwsIF9rZXk/OiBhbnksIF9jb21CYWNrPzogTGF5YS5IYW5kbGVyLCBfb25Qcm9ncmVzcz86IExheWEuSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMubV9yZXMgPSBfcmVzO1xyXG4gICAgICAgIHRoaXMubV9sb2FkTW9kZWwgPSBfbW9kZTtcclxuICAgICAgICB0aGlzLm1fa2V5ID0gX2tleTtcclxuICAgICAgICB0aGlzLm1fY29tQmFjayA9IF9jb21CYWNrO1xyXG4gICAgICAgIHRoaXMubV9vblByb2dyZXNzID0gX29uUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlZCDlrozmiJDml7blm57osINcclxuICAgICAqIEBwYXJhbSBfb25Qcm9ncmVzcyDliqDovb3ov5vluqblm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWQob25Db21wbGV0ZWQ6IExheWEuSGFuZGxlciwgX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpIHtcclxuICAgICAgICAvL+WMheijhei/m+W6puWbnuiwg1xyXG4gICAgICAgIGxldCBfX29uUHJvZ3Jlc3M6IExheWEuSGFuZGxlciA9IF9vblByb2dyZXNzO1xyXG4gICAgICAgIGlmIChfX29uUHJvZ3Jlc3MgJiYgdGhpcy5tX29uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgX19vblByb2dyZXNzID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX29uUHJvZ3Jlc3MuYXJncyA9IFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9vblByb2dyZXNzLnJ1bigpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubV9vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIF9fb25Qcm9ncmVzcyA9IHRoaXMubV9vblByb2dyZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tX2NvbUJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIHRoaXMubV9jb21CYWNrLCBfX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUmVzTG9hZC5Mb2FkKHRoaXMubV9yZXMsIHRoaXMubV9sb2FkTW9kZWwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21CYWNrLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSksIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBSZXNMb2FkLkxvYWQodGhpcy5tX3JlcywgdGhpcy5tX2xvYWRNb2RlbCwgb25Db21wbGV0ZWQsIF9fb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byC5q2l5Yqg6L296LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3Mg5Yqg6L296L+b5bqm5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoX29uUHJvZ3Jlc3M/OiBMYXlhLkhhbmRsZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcigpO1xyXG4gICAgICAgICAgICB9KSwgX29uUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IF9HYW1lQ29uZmlnIGZyb20gXCJzcmMvQ29uZmlnL19HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBfTWFpbkNvbmZpZyBmcm9tIFwic3JjL0NvbmZpZy9fTWFpbkNvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwic3JjL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEQyTWFuYWdlciBmcm9tIFwiLi9EMi9EMk1hbmFnZXJcIjtcclxuaW1wb3J0IEQzTWFuYWdlciBmcm9tIFwiLi9EMy9EM01hbmFnZXJcIjtcclxuaW1wb3J0IF9UQ29uZmlnIGZyb20gXCIuL19UQ29uZmlnXCI7XHJcblxyXG4vKiogXHJcbiAqIOahhuaetuWFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE1haW4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmoYbmnrZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0RnJhbWUoKSB7XHJcbiAgICAgICAgLy/ms6jlhaXmoYbmnrbkv6Hmga9cclxuICAgICAgICB3aW5kb3dbX1RDb25maWcuTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIC8qKiDmoYbmnrbphY3nva4gKi9cclxuICAgICAgICAgICAgLi4uX1RDb25maWcsXHJcbiAgICAgICAgICAgIC8qKiBsYXlh6YWN572uICovXHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IHsgLi4uR2FtZUNvbmZpZyB9LFxyXG4gICAgICAgICAgICAvKiog6aG555uu6YWN572uICovXHJcbiAgICAgICAgICAgIF9tYWluQ29uZmlnOiB7IC4uLl9NYWluQ29uZmlnIH0sXHJcbiAgICAgICAgICAgIC8qKiDmuLjmiI/phY3nva4gKi9cclxuICAgICAgICAgICAgX2dhbWVDb25maWc6IHsgLi4uX0dhbWVDb25maWcgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0R2FtZSgpIHtcclxuICAgICAgICAvL+WIneWni+WMluWQhOenjeWQhOagt+eahOeuoeeQhuWZqFxyXG4gICAgICAgIEQzTWFuYWdlci5pbml0KCk7Ly8zROeuoeeQhuWZqFxyXG4gICAgICAgIEQyTWFuYWdlci5pbml0KCk7Ly91aeeuoeeQhuWZqFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWNleS+i+W3peWFt1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VUIHtcclxuICAgIC8qKiDljZXkvovlsZ7mgKflkI0gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlS2V5OiBzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+exu+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9pZlBhc3NpdmUg5piv5ZCm6KKr5Yqo6K6/6Zeu55qE5pe25YCZ5Yib5bu65a6e5L6L77yM5Li6ZmFsc2XnmoTor53kvJrnq4vljbPliJvlu7rlh7rlrp7kvotcclxuICAgICAqICEg6KKr6KOF6aWw55qE57G755qE5p6E6YCg5pa55rOV5LiN6IO95pivcHVibGlj57G75Z6L55qEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVJbnN0YW5jZShfaWZQYXNzaXZlOiBib29sZWFuID0gdHJ1ZSwgbmFtZSA9ICdpbnN0YW5jZScpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChfaWZQYXNzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOS4gOS4quebkeWQrOWxnuaAp1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W0luc3RhbmNlVC5JbnN0YW5jZUtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtJbnN0YW5jZVQuSW5zdGFuY2VLZXldID0gbmV3IHRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbSW5zdGFuY2VULkluc3RhbmNlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyB0YXJnZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmlbDnu4Tlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5VXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3kuKTkuKrmlbDnu4TlhoXlrrnmmK/lkKbnm7jlkIxcclxuICAgICAqIEBwYXJhbSB4IHjmlbDnu4RcclxuICAgICAqIEBwYXJhbSB5IHnmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250ZW50SWZTYW1lKHg6IGFueVtdLCB5OiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghKHgpIHx8ICEoeSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoeC5sZW5ndGggIT0geS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvL+aWueazle+8miDnlKjkuIDkuKptb3DmnaXnu5/orqF45pWw57uE5ZCE5Liq5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5YaN55SoeeaVsOe7hOadpemAkuWHj+WQhOWFg+e0oOWHuueOsOeahOasoeaVsO+8jOWmguaenOacgOe7iOe7k+aenOS4ujDliJnkuKTkuKrmlbDnu4Tnm7jlkIxcclxuICAgICAgICBsZXQgbTogTWFwPGFueSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICB4LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbS5zZXQoaXRlbSwgKG0uaGFzKGl0ZW0pID8gbS5nZXQoaXRlbSkgOiAwKSArIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBtLnNldChpdGVtLCAobS5oYXMoaXRlbSkgPyBtLmdldChpdGVtKSA6IDApIC0gMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lj6ropoHlhbbkuK3kuIDlhYPntKDnmoTnu5/orqHkuI3kuLow5bCx6L+U5ZueZmFsc2VcclxuICAgICAgICBsZXQgYjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgW192YWx1ZSwgX251bWJlcl0gb2YgbSkge1xyXG4gICAgICAgICAgICBpZiAoX251bWJlciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOWOu+mHjeS/neeVmemdoOWJjeeahOWGheWuuVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tljrvph43kv53nlZnpnaDlkI7nmoTlhoXlrrlcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmV2ZXJzZVJlc2VydmVVbmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyLnJldmVyc2UoKSkpLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvueixoeaVsOe7hOWOu+mHjVxyXG4gICAgICogQHBhcmFtIGFyciDmupDmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfRiDojrflj5blr7nmr5TplK7lgLzlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmpVbmlxdWU8VD4oYXJyOiBUW10sIF9GOiAobzogVCkgPT4gc3RyaW5nKTogVFtdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMSwgbGVuID0gYXJyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX0YoYXJyW2ldKSA9PT0gX0YoYXJyW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tOyAgICAgICAgLy8g5q+P5Yig6Zmk5LiA5Liq5pWwaueahOWAvOWwseWHjzFcclxuICAgICAgICAgICAgICAgICAgICBsZW4tLTsgICAgICAvLyBq5YC85YeP5bCP5pe2bGVu5Lmf6KaB55u45bqU5YePMe+8iOWHj+WwkeW+queOr+asoeaVsO+8jOiKguecgeaAp+iDve+8iSAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7/mjaLmlbDnu4TnmoTmn5DkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2xkT2JqIOiiq+abv+aNoueahOWFg+e0oFxyXG4gICAgICogQHBhcmFtIG5ld09iaiDmm7/mjaLlhYPntKBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXBsYWNlPFQ+KGFycjogVFtdLCBvbGRPYmo6IFQsIG5ld09iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9sZE9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEsIG5ld09iaik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDkuKrlhYPntKDlubbov5Tlm57nu5PmnpxcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gb2JqIOWIoOmZpOebruagh+WvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUl0ZW08VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u57Si5byV5Yig6Zmk5LiA5Liq5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gYXJyIOa6kOaVsOe7hFxyXG4gICAgICogQHBhcmFtIGluZGV4IOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUF0PFQ+KGFycjogVFtdLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPD0gaW5kZXgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOaYr+WQpuWMheWQq+afkOS4quaVsOaNrlxyXG4gICAgICogQHBhcmFtIGFyciBcclxuICAgICAqIEBwYXJhbSBvYmogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udGFpbnM8VD4oYXJyOiBUW10sIG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpI3liLbkuIDkuKrmlbDnu4RcclxuICAgICAqIEBwYXJhbSBhcnIg5rqQ5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29weTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrmiZPkubHmlbDnu4RcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg55uu5qCH5pWw57uEIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwc2V0QXJyYXk8VD4oX2FycmF5OiBUW10pOiBUW10ge1xyXG4gICAgICAgIC8v5Lmx5bqPXHJcbiAgICAgICAgcmV0dXJuIF9hcnJheS5zb3J0KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3nmoTpmo/mnLrlgLzvvIzlj6/mjIflrprplb/luqZcclxuICAgICAqIEBwYXJhbSBfYXJyYXkg5Y6f5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gX24g6ZqP5py65Liq5pWwXHJcbiAgICAgKiBAcGFyYW0gX3dlaWdodCDmnYPph43liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSYW5kb21HZXQ8VD4oX2FycmF5OiBUW10sIF9uOiBudW1iZXIgPSAxLCBfd2VpZ2h0OiBudW1iZXJbXSA9IF9hcnJheS5tYXAoKGl0ZW0pID0+IHsgcmV0dXJuIDE7IH0pKTogVFtdIHtcclxuICAgICAgICBpZiAoX2FycmF5Lmxlbmd0aCA8PSAwKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBfcm9vdEFycmF5OiBUW10gPSBbXTtcclxuICAgICAgICBsZXQgX25ld0FycmF5OiBUW10gPSBbXTtcclxuICAgICAgICAvL+adg+mHjee0ouW8leWIl+ihqFxyXG4gICAgICAgIGxldCBfaW5kZXhBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAvL+aJvuWIsOacgOWwj+eahOadg+mHjVxyXG4gICAgICAgIGxldCBfbWluV2VpZ2h0OiBudW1iZXIgPSBfd2VpZ2h0WzBdO1xyXG4gICAgICAgIF93ZWlnaHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBfbWluV2VpZ2h0ID0gTWF0aC5taW4oX21pbldlaWdodCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3dlaWdodCA9IF93ZWlnaHQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGl0ZW0gKiAoMSAvIF9taW5XZWlnaHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfYXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgX3Jvb3RBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgX3dlaWdodFtpbmRleF07IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIF9pbmRleEFycmF5LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IF9pID0gMDsgX2kgPCBfbjsgX2krKykge1xyXG4gICAgICAgICAgICBpZiAoX3Jvb3RBcnJheS5sZW5ndGggPD0gMCkgeyBicmVhazsgfVxyXG4gICAgICAgICAgICBfaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfaW5kZXhBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBfaW5kZXhBcnJheSA9IF9pbmRleEFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gX2luZGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX25ld0FycmF5LnB1c2goX3Jvb3RBcnJheS5zcGxpY2UoX2luZGV4QXJyYXlbX2luZGV4XSwgMSlbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHJldHVybiBfbmV3QXJyYXk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog57K+54G15bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGVVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOS4lueVjOWdkOagh+i9rOebuOWvueWdkOagh1xyXG4gICAgICogQHBhcmFtIHBhcmVudCBcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnZlcnNlVHJhbnNmb3JtUG9pbnQocGFyZW50OiBMYXlhLlRyYW5zZm9ybTNELCBwb3NpdGlvbjogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgbGV0IHRlbXBNYXRyaXggPSBuZXcgTGF5YS5NYXRyaXg0eDQoKTtcclxuICAgICAgICBwYXJlbnQud29ybGRNYXRyaXguaW52ZXJ0KHRlbXBNYXRyaXgpO1xyXG4gICAgICAgIGxldCB2MyA9IG5ldyBMYXlhLlZlY3RvcjMoKTtcclxuICAgICAgICBMYXlhLlZlY3RvcjMudHJhbnNmb3JtQ29vcmRpbmF0ZShwb3NpdGlvbiwgdGVtcE1hdHJpeCwgdjMpO1xyXG4gICAgICAgIHJldHVybiB2MztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4uueJqeS9k+iuvue9rumYtOW9sVxyXG4gICAgICogQHBhcmFtIG9iaiDniankvZNcclxuICAgICAqIEBwYXJhbSBjYXN0U2hhZG93IOaYr+WQpuS6p+eUn+mYtOW9sSBcclxuICAgICAqIEBwYXJhbSByZWNlaXZlU2hhZG93IOaYr+WQpuaOpeWPl+mYtOW9sVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldFNoYWRvdyhvYmo6IGFueSwgY2FzdFNoYWRvdzogYm9vbGVhbiwgcmVjZWl2ZVNoYWRvdzogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIOm7mOiupOW9k21lc2hyZW5kZXLlpITnkIZcclxuICAgICAgICBsZXQgbWVzaFJlbmRlcmVyID0gb2JqLm1lc2hSZW5kZXJlciBhcyBMYXlhLk1lc2hSZW5kZXJlcjtcclxuICAgICAgICBpZiAobWVzaFJlbmRlcmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbWVzaFJlbmRlcmVyLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93O1xyXG4gICAgICAgICAgICBtZXNoUmVuZGVyZXIucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBza2lubmVkTWVzaFJlbmRlcmVyID0gb2JqLnNraW5uZWRNZXNoUmVuZGVyZXIgYXMgTGF5YS5Ta2lubmVkTWVzaFJlbmRlcmVyO1xyXG4gICAgICAgIGlmIChza2lubmVkTWVzaFJlbmRlcmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgc2tpbm5lZE1lc2hSZW5kZXJlci5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdztcclxuICAgICAgICAgICAgc2tpbm5lZE1lc2hSZW5kZXJlci5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vZGUgPSBvYmogYXMgTGF5YS5Ob2RlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5udW1DaGlsZHJlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBnZXRDaGlsZCA9IG5vZGUuZ2V0Q2hpbGRBdChpKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRTaGFkb3coZ2V0Q2hpbGQsIGNhc3RTaGFkb3csIHJlY2VpdmVTaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5p+l5om+6IqC54K5XHJcbiAgICAqIEBwYXJhbSBzcCDnsr7ngbVcclxuICAgICogQHBhcmFtIG5hbWUg6ZyA6KaB5p+l5om+55qE6IqC54K55ZCNXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBmaW5kQ2hpbGQoc3AsIG5hbWUpIHtcclxuICAgICAgICBpZiAoc3AubmFtZSA9PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc3A7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmluZENoaWxkKHNwLl9jaGlsZHJlbiwgbmFtZSk7XHJcbiAgICB9XHJcbiAgICAvL+mFjeWQiOafpeaJvuiKgueCuVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2ZpbmRDaGlsZChzcEFyciwgbmFtZSkge1xyXG4gICAgICAgIGlmICghc3BBcnIpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHNwQXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubnVtQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGFyciA9IGFyci5jb25jYXQoY2hpbGQuX2NoaWxkcmVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kQ2hpbGQoYXJyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBjeWOhueyvueBteW5tumAmui/h+Wbnuiwg+WHveaVsOWkhOeQhuavj+S4gOS4queyvueBtVxyXG4gICAgICogQHBhcmFtIF9zcHIg6K+l57K+54G1XHJcbiAgICAgKiBAcGFyYW0gX2hhbmRsZXIg6YGN5Y6G5Zue6LCD77yM5rOo5oSP5piv5ZCm5Y+q5omn6KGM5LiA5qyh55qE5Y+C5pWw6KaB5Li6ZmFsc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JlYWNoU3ByKF9zcHI6IExheWEuU3ByaXRlM0QsIF9oYW5kbGVyPzogTGF5YS5IYW5kbGVyKSB7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbmnInpgY3ljoblm57osINcclxuICAgICAgICBpZiAoX2hhbmRsZXIpIHtcclxuICAgICAgICAgICAgX2hhbmRsZXIuYXJncyA9IFtfc3ByXTtcclxuICAgICAgICAgICAgX2hhbmRsZXIucnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5b6q546v6YGN5Y6G5a2Q6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IF9zcHIubnVtQ2hpbGRyZW47IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVhY2hTcHIoX3Nwci5nZXRDaGlsZEF0KGkpIGFzIExheWEuU3ByaXRlM0QsIF9oYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjlrZDoioLngrnkuK3ojrflj5bnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBvYmogXHJcbiAgICAgKiBAcGFyYW0gY21wIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENvbXBvbmVudHNJbkNoaWxkcmVuKG9iajogTGF5YS5TcHJpdGUzRCwgY21wOiB0eXBlb2YgTGF5YS5Db21wb25lbnQpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogdHlwZW9mIExheWEuQ29tcG9uZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLl9HZXRDb21wb25lbnRzSW5DaGlsZHJlbkhlbHBlcihvYmosIGNtcCwgcmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/phY3lkIjojrflj5bnu4Tku7ZcclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRDb21wb25lbnRzSW5DaGlsZHJlbkhlbHBlcihvYmo6IExheWEuU3ByaXRlM0QsIGNtcDogdHlwZW9mIExheWEuQ29tcG9uZW50LCByZXN1bHQ6IHR5cGVvZiBMYXlhLkNvbXBvbmVudFtdKSB7XHJcbiAgICAgICAgbGV0IGNtcHMgPSBvYmouZ2V0Q29tcG9uZW50cyhjbXApIGFzIHR5cGVvZiBMYXlhLkNvbXBvbmVudFtdO1xyXG4gICAgICAgIGlmIChjbXBzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbXBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjbXBzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5udW1DaGlsZHJlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBnZXRDaGlsZCA9IG9iai5nZXRDaGlsZEF0KGkpO1xyXG4gICAgICAgICAgICB0aGlzLl9HZXRDb21wb25lbnRzSW5DaGlsZHJlbkhlbHBlcihnZXRDaGlsZCBhcyBMYXlhLlNwcml0ZTNELCBjbXAsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W57K+54G155qE6ISa5pysXHJcbiAgICAgKiBAcGFyYW0gX3NwciDor6Xnsr7ngbVcclxuICAgICAqIEBwYXJhbSBfc2NyIOiEmuacrOexu+Wei++8jOWPr+S7peaYr+e7p+aJv+mTvuS4iueahOafkOS4que7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcnM8U2NyIGV4dGVuZHMgTGF5YS5TY3JpcHQzRD4oX3NwcjogTGF5YS5TcHJpdGUzRCwgX3NjcjogYW55KTogU2NyW10ge1xyXG4gICAgICAgIGxldCBfc2NyczogU2NyW10gPSBbXTtcclxuICAgICAgICAvL+iOt+WPluiEmuacrOWIl+ihqFxyXG4gICAgICAgIGxldCBfX3NjcnM6IExheWEuU2NyaXB0M0RbXSA9IF9zcHJbJ19jb21wb25lbnRzJ10gYXMgTGF5YS5TY3JpcHQzRFtdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9fc2NycykpIHtcclxuICAgICAgICAgICAgLy/pgY3ljobohJrmnKzliJfooahcclxuICAgICAgICAgICAgZm9yIChsZXQgX28gb2YgX19zY3JzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX28gaW5zdGFuY2VvZiBfc2NyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NjcnMucHVzaChfbyBhcyBTY3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc2NycztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lsYLnuqdcclxuICAgICAqIEBwYXJhbSBvYmogXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTZXRMYXllcihvYmo6IExheWEuU3ByaXRlM0QsIGxheWVySW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIG9iai5sYXllciA9IGxheWVySW5kZXg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubnVtQ2hpbGRyZW47ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgZ2V0Q2hpbGQgPSBvYmouZ2V0Q2hpbGRBdChpKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRMYXllcihnZXRDaGlsZCBhcyBMYXlhLlNwcml0ZTNELCBsYXllckluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuIDkuKrniankvZPnmoTniannkIbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBfc3ByIOivpeeJqeS9k1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBoeXNpY0NvbXBvbmVudChfc3ByOiBMYXlhLlNwcml0ZTNEKTogTGF5YS5QaHlzaWNzQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgX3BoeXNpY3NDb206IExheWEuUGh5c2ljc0NvbXBvbmVudCA9IF9zcHIuZ2V0Q29tcG9uZW50KExheWEuUGh5c2ljc0NvbGxpZGVyKSBhcyBMYXlhLlBoeXNpY3NDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFfcGh5c2ljc0NvbSkge1xyXG4gICAgICAgICAgICBfcGh5c2ljc0NvbSA9IF9zcHIuZ2V0Q29tcG9uZW50KExheWEuUmlnaWRib2R5M0QpIGFzIExheWEuUGh5c2ljc0NvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX3BoeXNpY3NDb207XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5YWz5LqOdjPlkJHph4/nmoTlt6XlhbdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYzVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4fkuIDkuKrlrZfnrKbkuLLmnoTlu7p2M+WQkemHj1xyXG4gICAgICogQHBhcmFtIHN0ciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVZlY3RvcjMoc3RyOiBzdHJpbmcsIF9vdXRWMzogTGF5YS5WZWN0b3IzKSB7XHJcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJywnKTtcclxuICAgICAgICBfb3V0VjMuc2V0VmFsdWUoTnVtYmVyKHN0cnNbMF0pLCBOdW1iZXIoc3Ryc1sxXSksIE51bWJlcihzdHJzWzJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5WM+WQkemHj+mVv+W6plxyXG4gICAgICogQHBhcmFtIF92MyDnm67moIflkJHph49cclxuICAgICAqIEBwYXJhbSBfbCDnm67moIfplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWM0xlbmd0aChfdjM6IExheWEuVmVjdG9yMywgX2w6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfbGVuZ3RoOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuc2NhbGFyTGVuZ3RoKF92Myk7XHJcbiAgICAgICAgaWYgKF9sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgX2E6IG51bWJlciA9IF9sIC8gX2xlbmd0aDtcclxuICAgICAgICAgICAgX3YzLnggPSBfdjMueCAqIF9hO1xyXG4gICAgICAgICAgICBfdjMueSA9IF92My55ICogX2E7XHJcbiAgICAgICAgICAgIF92My56ID0gX3YzLnogKiBfYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDkuKrngrnmj5LlgLznp7vliqjliLDlj6bkuIDkuKrngrlcclxuICAgICAqIEBwYXJhbSBfcG9zIOW9k+WJjeeCuVxyXG4gICAgICogQHBhcmFtIF90cmFnZXRQb3Qg55uu5qCH54K5XHJcbiAgICAgKiBAcGFyYW0gX2xlcnAg5o+S5YC856e75Yqo5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICogQHBhcmFtIF9pbml0aWFsTGVuZ3RoIOWIneWni+mVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdExlcnBNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfbGVycDogbnVtYmVyLCBfb3V0VjM6IExheWEuVmVjdG9yMywgX2luaXRpYWxMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFfb3V0VjMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b+F6aG75pyJ5LiA5Liq6L6T5Ye655qE5ZCR6YeP77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgX2Rpc3RhbmNlOiBudW1iZXIgPSBMYXlhLlZlY3RvcjMuZGlzdGFuY2UoX3BvcywgX3RyYWdldFBvdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBMYXlhLlZlY3RvcjMubGVycChfcG9zLCBfdHJhZ2V0UG90LCBfbGVycCwgX291dFYzKTtcclxuICAgICAgICAvL+i/lOWbnui/m+W6plxyXG4gICAgICAgIHJldHVybiAxIC0gKF9kaXN0YW5jZSAvIF9pbml0aWFsTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOS4queCueWMgOmAn+enu+WKqOWIsOWPpuS4gOS4queCuVxyXG4gICAgICogQHBhcmFtIF9wb3Mg5b2T5YmN54K5XHJcbiAgICAgKiBAcGFyYW0gX3RyYWdldFBvdCDnm67moIfngrlcclxuICAgICAqIEBwYXJhbSBfc3BlZWQg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0gX291dFYzIOi+k+WHuuWQkemHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBvdENvbnN0YW50U3BlZWRNb3ZlKF9wb3M6IExheWEuVmVjdG9yMywgX3RyYWdldFBvdDogTGF5YS5WZWN0b3IzLCBfc3BlZWQ6IG51bWJlciwgX291dFYzOiBMYXlhLlZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV9vdXRWMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCflv4XpobvmnInkuIDkuKrovpPlh7rnmoTlkJHph4/vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBfaWZFbmQ6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IF9kaWZmZXJWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnN1YnRyYWN0KF90cmFnZXRQb3QsIF9wb3MsIF9kaWZmZXJWMyk7XHJcbiAgICAgICAgbGV0IF9kaXN0YW5jZTogbnVtYmVyID0gTGF5YS5WZWN0b3IzLnNjYWxhckxlbmd0aChfZGlmZmVyVjMpO1xyXG4gICAgICAgIGlmIChfZGlzdGFuY2UgPiBfc3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWM0xlbmd0aChfZGlmZmVyVjMsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pZkVuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55u45YqgXHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLmFkZChfcG9zLCBfZGlmZmVyVjMsIF9vdXRWMyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gX2lmRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJvdGF0ZUF4aXNWMzogTGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICog5peL6L2s5LiA5Liq5ZCR6YePXHJcbiAgICAgKiBAcGFyYW0gX3YzIOmcgOimgeaXi+i9rOeahOmCo+S4quWQkemHj1xyXG4gICAgICogQHBhcmFtIF9hbmdlciDml4vovazop5LluqZcclxuICAgICAqIEBwYXJhbSBfYXhpcyDml4vovazovbRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSb3RhdGVWMyhfdjM6IExheWEuVmVjdG9yMywgX2FuZ2VyOiBudW1iZXIsIF9heGlzOiBMYXlhLlZlY3RvcjMgPSB0aGlzLnJvdGF0ZUF4aXNWMykge1xyXG4gICAgICAgIC8v5peL6L2s5Zub5YWD5pWwXHJcbiAgICAgICAgdmFyIHEgPSBuZXcgTGF5YS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgTGF5YS5RdWF0ZXJuaW9uLmNyZWF0ZUZyb21BeGlzQW5nbGUoX2F4aXMsIChfYW5nZXIgLyAxODApICogTWF0aC5QSSwgcSk7XHJcbiAgICAgICAgTGF5YS5WZWN0b3IzLnRyYW5zZm9ybVF1YXQoX3YzLCBxLCBfdjMpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOahhuaetumFjee9ruaWh+S7tlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RDb25maWcge1xyXG4gICAgLyoqIOWQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBOYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG4gICAgLyoqIOS4reaWh+WQjeWtlyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBaSE5hbWU6IHN0cmluZyA9IFwiTGF5YUJveOWwj+a4uOaIj1wiO1xyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWZXJzaW9uczogc3RyaW5nID0gXCIxLjAuMFwiO1xyXG59IiwiLyoqXHJcbiAqIOWfuuexu+WvueixoeaxoFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUl0ZW1Qb29sIHtcclxuICAgIC8qKiDmsaDlrZAgKi9cclxuICAgIHByaXZhdGUgbV9pdGVtUG9vbDoge1xyXG4gICAgICAgIFtfa2V5OiBzdHJpbmddOiBhbnlbXSxcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKiog6I635Y+W5a+56LGh5rGgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGl0ZW1Qb29sKCk6IHtcclxuICAgICAgICBbX2tleTogc3RyaW5nXTogYW55W10sXHJcbiAgICB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2l0ZW1Qb29sO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a+56LGh5rGg5piv5ZCm5pyJ5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gX2tleSBrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvb2xIYXNJdGVtKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubV9pdGVtUG9vbFtfa2V5XSAmJiB0aGlzLm1faXRlbVBvb2xbX2tleV0ubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47lr7nosaHmsaDkuK3ojrflj5blr7nosaFcclxuICAgICAqIEBwYXJhbSBfa2V5IGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SXRlbUJ5UG9vbDxUIGV4dGVuZHMgb2JqZWN0Pihfa2V5OiBzdHJpbmcpOiBUIHtcclxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuacieWGheWuuVxyXG4gICAgICAgIGlmICh0aGlzLnBvb2xIYXNJdGVtKF9rZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faXRlbVBvb2xbX2tleV0ucG9wKCkgYXMgVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWvueixoei/m+WvueixoeaxoFxyXG4gICAgICogQHBhcmFtIF9rZXkga2V5XHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtVG9Qb29sKF9rZXk6IHN0cmluZywgX2l0ZW06IG9iamVjdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2l0ZW1Qb29sW19rZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pdGVtUG9vbFtfa2V5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1faXRlbVBvb2xbX2tleV0ucHVzaChfaXRlbSk7XHJcbiAgICAgICAgLy/ljrvph41cclxuICAgICAgICB0aGlzLm1faXRlbVBvb2xbX2tleV0gPSBbLi4ubmV3IFNldCh0aGlzLm1faXRlbVBvb2xbX2tleV0pXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuWvueixoeaxoFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW1wdHlQb29sKCkge1xyXG4gICAgICAgIHRoaXMubV9pdGVtUG9vbCA9IHt9O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==