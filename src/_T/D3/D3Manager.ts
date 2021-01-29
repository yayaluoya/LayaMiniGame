import SceneRootManager from "./scene/SceneRootManager";

/**
 * 3d管理器
 */
export default class D3Manager {
    /**
     * 初始化
     */
    public static init() {
        /** 场景根管理器 */
        SceneRootManager.init();
    }
}