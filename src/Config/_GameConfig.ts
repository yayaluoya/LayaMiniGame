import _MainConfig from "./_MainConfig";

/**
 * 游戏最高层配置
 */
export default class _GameConfig {
    /** 2D游戏 */
    public static D2: boolean = true;
    /** 3D游戏 */
    public static D3: boolean = true;
    /** 是否开启游戏测试 */
    public static ifGameTest: boolean = (!_MainConfig.OnLine) && false;
    /** 是否开启测试类 */
    public static ifTest: boolean = (!_MainConfig.OnLine) && false;
    /** 是否开启调试类 */
    public static ifDebug: boolean = (!_MainConfig.OnLine) && true;
    /** 是否打开一个新窗口调试 */
    public static ifOpenWindowDebug: boolean = (!_MainConfig.OnLine) && false;
}