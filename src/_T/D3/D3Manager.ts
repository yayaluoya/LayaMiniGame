import GlobalD3Environment from "./scene/GlobalD3Environment";

/**
 * 3d管理器
 */
export default class D3Manager {
    /**
     * 初始化
     */
    public static init() {
        /** 初始化全局环境 */
        GlobalD3Environment.init();
    }
}