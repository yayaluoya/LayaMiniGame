import ConsoleEx from "src/_T/Console/ConsoleEx";
import DataManager from "./Data/DataManager";
import GameInitLoad from "./Main/GameInitLoad";
import SceneManager from "./Scene/SceneManager";
import UIConManager from "./UICon/UIConManager";
import TestMain from "./_test/TestMain";

/**
 * 游戏入口
 */
export default class GameMain {
    //初始化
    public constructor() {
        this.init();
    }

    //初始化
    private init() {
        //获取游戏初始化加载实例
        let _gameInitLoad: GameInitLoad = new GameInitLoad();
        //开始加载
        _gameInitLoad.load(Laya.Handler.create(this, () => {
            this.gameInitLoadCom();
            this.enterGame();
        }));
    }

    //游戏加载完成
    private gameInitLoadCom() {
        //初始化各个管理器
        SceneManager.instance.init();//场景管理器
        UIConManager.instance.init();//ui控制器管理器
        DataManager.instance.init();//数据管理器
    }

    //进入游戏
    private enterGame() {
        //进入游戏
        console.log(...ConsoleEx.packLog('进入游戏'));
        //TODO 进入测试模块
        TestMain.instance.start();
    }
}