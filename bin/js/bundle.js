/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameConfig
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

/***/ "./src/Game/GameStart.ts":
/*!*******************************!*\
  !*** ./src/Game/GameStart.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameStart
/* harmony export */ });
/**
 * 游戏入口
 */
class GameStart {
}


/***/ }),

/***/ "./src/LayaMiniGameConfig.ts":
/*!***********************************!*\
  !*** ./src/LayaMiniGameConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LayaMiniGameConfig
/* harmony export */ });
/**
 * 框架配置文件
 */
class LayaMiniGameConfig {
    constructor() {
        /** 名字 */
        this.name = "LayaMiniGame";
        /** 中文名字 */
        this.ZHName = "LayaBox小游戏";
        /** 版本 */
        this.versions = "0.0.1";
    }
}


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_GameStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/GameStart */ "./src/Game/GameStart.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _LayaMiniGameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayaMiniGameConfig */ "./src/LayaMiniGameConfig.ts");



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
        //开始游戏
        new _Game_GameStart__WEBPACK_IMPORTED_MODULE_0__.default();
    }
}
//注入框架信息
let _LayaMiniGameConfig = new _LayaMiniGameConfig__WEBPACK_IMPORTED_MODULE_2__.default();
window['$' + _LayaMiniGameConfig.name] = _LayaMiniGameConfig;
//激活启动类
new Main();


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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYXlhTWluaUdhbWVGcmFtZS8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL0xheWFNaW5pR2FtZUZyYW1lLy4vc3JjL0dhbWUvR2FtZVN0YXJ0LnRzIiwid2VicGFjazovL0xheWFNaW5pR2FtZUZyYW1lLy4vc3JjL0xheWFNaW5pR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9MYXlhTWluaUdhbWVGcmFtZS8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL0xheWFNaW5pR2FtZUZyYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xheWFNaW5pR2FtZUZyYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MYXlhTWluaUdhbWVGcmFtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xheWFNaW5pR2FtZUZyYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGF5YU1pbmlHYW1lRnJhbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0dBQWdHO0FBRWhHOztFQUVFO0FBQ2EsTUFBTSxVQUFVO0lBYTNCLGdCQUFnQixDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxJQUFJO1FBQ1AsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFFakQsQ0FBQzs7QUFoQk0sZ0JBQUssR0FBVyxHQUFHLENBQUM7QUFDcEIsaUJBQU0sR0FBVyxJQUFJLENBQUM7QUFDdEIsb0JBQVMsR0FBVyxZQUFZLENBQUM7QUFDakMscUJBQVUsR0FBVyxNQUFNLENBQUM7QUFDNUIsaUJBQU0sR0FBVyxLQUFLLENBQUM7QUFDdkIsaUJBQU0sR0FBVyxNQUFNLENBQUM7QUFDeEIscUJBQVUsR0FBUSxFQUFFLENBQUM7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QUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBRTdELE9BQU87QUFDUCxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7O1VDN0NYO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyB3aWR0aDogbnVtYmVyID0gNzUwO1xyXG4gICAgc3RhdGljIGhlaWdodDogbnVtYmVyID0gMTMzNDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjogc3RyaW5nID0gXCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6IHN0cmluZyA9IFwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6IGFueSA9IFwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiLyoqXHJcbiAqIOa4uOaIj+WFpeWPo1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXJ0IHsgfSIsIi8qKlxyXG4gKiDmoYbmnrbphY3nva7mlofku7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWFNaW5pR2FtZUNvbmZpZyB7XHJcbiAgICAvKiog5ZCN5a2XICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkxheWFNaW5pR2FtZVwiO1xyXG5cclxuICAgIC8qKiDkuK3mloflkI3lrZcgKi9cclxuICAgIFpITmFtZTogc3RyaW5nID0gXCJMYXlhQm945bCP5ri45oiPXCI7XHJcblxyXG4gICAgLyoqIOeJiOacrCAqL1xyXG4gICAgdmVyc2lvbnM6IHN0cmluZyA9IFwiMC4wLjFcIjtcclxufSIsImltcG9ydCBHYW1lU3RhcnQgZnJvbSBcIi4vR2FtZS9HYW1lU3RhcnRcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTGF5YU1pbmlHYW1lQ29uZmlnIGZyb20gXCIuL0xheWFNaW5pR2FtZUNvbmZpZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0XHQvL+W8gOWni+a4uOaIj1xyXG5cdFx0bmV3IEdhbWVTdGFydCgpO1xyXG5cdH1cclxufVxyXG5cclxuLy/ms6jlhaXmoYbmnrbkv6Hmga9cclxubGV0IF9MYXlhTWluaUdhbWVDb25maWc6IExheWFNaW5pR2FtZUNvbmZpZyA9IG5ldyBMYXlhTWluaUdhbWVDb25maWcoKTtcclxud2luZG93WyckJyArIF9MYXlhTWluaUdhbWVDb25maWcubmFtZV0gPSBfTGF5YU1pbmlHYW1lQ29uZmlnO1xyXG5cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9NYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==