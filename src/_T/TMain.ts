import _GameConfig from "src/Config/_GameConfig";
import _MainConfig from "src/Config/_MainConfig";
import GameConfig from "src/GameConfig";
import D2Manager from "./D2/D2Manager";
import D3Manager from "./D3/D3Manager";
import _TConfig from "./_TConfig";
import ResTransfersT from "./Res/ResTransfersT";

/** 
 * 框架入口
 */
export default class TMain {
    /**
     * 初始化框架
     */
    public static initFrame() {
        //注入框架信息
        window[_TConfig.Name] = {
            /** 框架配置 */
            ..._TConfig,
            /** laya配置 */
            gameConfig: { ...GameConfig },
            /** 项目配置 */
            _mainConfig: { ..._MainConfig },
            /** 游戏配置 */
            _gameConfig: { ..._GameConfig }
        };
        //开始拦截请求
        ResTransfersT.start();
    }

    /**
     * 初始化游戏
     */
    public static initGame() {
        //初始化各种各样的管理器
        D3Manager.init();//3D管理器
        D2Manager.init();//ui管理器
    }
}