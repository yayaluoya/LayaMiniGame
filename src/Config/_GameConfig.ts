import _MainConfig from "./_MainConfig";

/**
 * 游戏最高层配置
 */
export default class _GameConfig {
    /** 是否开启游戏测试 */
    public static ifGameTest: boolean = (!_MainConfig.OnLine) && false;
    /** 是否开启测试类 */
    public static ifTest: boolean = (!_MainConfig.OnLine) && false;
    /** 是否开启调试类 */
    public static ifDebug: boolean = (!_MainConfig.OnLine) && true;
}