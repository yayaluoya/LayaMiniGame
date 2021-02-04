(function () {
    'use strict';

    class GameMain {
        constructor() {
            console.log('打包测试');
        }
    }

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

    class _MainConfig {
    }
    _MainConfig.Team = 'LayaBox小游戏';
    _MainConfig.Name = 'LayaMiniGame';
    _MainConfig.ZHName = 'LayaBox小游戏';
    _MainConfig.Explain = 'LayaBox小游戏';
    _MainConfig.Versions = '0.0.0.1';
    _MainConfig.OnLine = false;

    class _GameConfig {
    }
    _GameConfig.ifGameTest = (!_MainConfig.OnLine) && false;
    _GameConfig.ifTest = (!_MainConfig.OnLine) && false;
    _GameConfig.ifDebug = (!_MainConfig.OnLine) && true;
    _GameConfig.ifOpenWindowDebug = (!_MainConfig.OnLine) && false;

    class _ConstConfig {
    }
    _ConstConfig.FGUI = {
        packageFileExtension: 'bin',
    };

    var EUILayer;
    (function (EUILayer) {
        EUILayer["Bg"] = "Bg";
        EUILayer["Main"] = "Main";
        EUILayer["Panel"] = "Panel";
        EUILayer["Popup"] = "Popup";
        EUILayer["Prop"] = "Prop";
        EUILayer["Tip"] = "Tip";
        EUILayer["Pause"] = "Pause";
        EUILayer["Set"] = "Set";
        EUILayer["Top"] = "Top";
        EUILayer["Loading"] = "Loading";
        EUILayer["Native"] = "Native";
    })(EUILayer || (EUILayer = {}));

    class FGUIRootManager {
        static getLayerUI(layerType) {
            return this.layerUIList[layerType];
        }
        static init() {
            fgui.UIConfig.packageFileExtension = _ConstConfig.FGUI.packageFileExtension;
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            this.layerUIList = {};
            for (let _i in EUILayer) {
                this.layerUIList[EUILayer[_i]] = fgui.GRoot.inst.addChild(new fgui.GComponent());
            }
        }
    }

    class D2Manager {
        static init() {
            FGUIRootManager.init();
        }
    }

    class SceneRootManager {
        static get Scene3D() {
            return this.m_Scene3D;
        }
        static get Camera() {
            return this.m_Camera;
        }
        static get Light() {
            return this.m_Light;
        }
        static init() {
            this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D);
            this.m_Camera = new Laya.Camera;
            this.m_Light = new Laya.DirectionLight;
            this.m_Scene3D.addChild(this.m_Camera);
            this.m_Scene3D.addChild(this.m_Light);
        }
    }

    class D3Manager {
        static init() {
            SceneRootManager.init();
        }
    }

    class MesManager extends Laya.EventDispatcher {
        constructor() { super(); }
        static get instance() {
            if (this._instance == null) {
                this._instance = new MesManager();
            }
            return this._instance;
        }
        static init() {
        }
        static hasListener(type) {
            return this.instance.hasListener(type.toString());
        }
        static event(type, data) {
            return this.instance.event(type.toString(), data);
        }
        static on(type, caller, listener, args) {
            return this.instance.on(type.toString(), caller, listener, args);
        }
        static once(type, caller, listener, args) {
            return this.instance.once(type.toString(), caller, listener, args);
        }
        static off(type, caller, listener, onceOnly) {
            return this.instance.off(type.toString(), caller, listener, onceOnly);
        }
        static offAll(type) {
            return this.instance.offAll(type.toString());
        }
        static offAllCaller(caller) {
            return this.instance.offAllCaller(caller);
        }
        static isMouseEvent(type) {
            return this.instance.isMouseEvent(type.toString());
        }
    }

    class _TConfig {
    }
    _TConfig.Name = "LayaMiniGame";
    _TConfig.ZHName = "LayaBox小游戏";
    _TConfig.Versions = "0.0.0.1";

    class TMain {
        constructor() {
            this.init();
        }
        init() {
            window[_TConfig.Name] = Object.assign(Object.assign({}, _TConfig), { gameConfig: Object.assign({}, GameConfig), _mainConfig: Object.assign({}, _MainConfig), _gameConfig: Object.assign({}, _GameConfig) });
            D2Manager.init();
            D3Manager.init();
            MesManager.init();
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new TMain();
            new GameMain();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
