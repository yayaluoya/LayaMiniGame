import ConsoleEx from "src/_T/Console/ConsoleEx";
import GameInitLoad from "./Main/GameInitLoad";
import SceneManager from "./Scene/SceneManager";

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
    }

    //进入游戏
    private enterGame() {
        //进入游戏
        console.log(...ConsoleEx.packLog('进入游戏'));
        //
        SceneManager.instance.getScene('Scene').getSceneNode('debug').asyncBuild().then((node) => {
            console.log(node);
        });
    }
}