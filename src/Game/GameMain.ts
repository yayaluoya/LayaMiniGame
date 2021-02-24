import ConsoleEx from "src/_T/Console/ConsoleEx";
import GameInitLoad from "./Main/GameInitLoad";

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
        _gameInitLoad.load(Laya.Handler.create(this, this.gameInitLoadCom));
    }

    //游戏加载完成
    private gameInitLoadCom() {
        //进入游戏
        console.log(...ConsoleEx.packLog('进入游戏'));
    }
}