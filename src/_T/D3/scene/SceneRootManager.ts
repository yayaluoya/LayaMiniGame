/**
 * 场景根管理器
 */
export default class SceneRootManager {
    /** 3d场景 */
    private static m_Scene3D: Laya.Scene3D;
    /** 摄像机 */
    private static m_Camera: Laya.Camera;
    /** 灯光 */
    private static m_Light: Laya.DirectionLight;

    /** 获取 3d场景 */
    public static get Scene3D(): Laya.Scene3D {
        return this.m_Scene3D;
    }
    /** 获取 摄像机 */
    public static get Camera(): Laya.Camera {
        return this.m_Camera;
    }
    /** 获取 灯光 */
    public static get Light(): Laya.DirectionLight {
        return this.m_Light;
    }

    /**
     * 初始化
     */
    public static init() {
        this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D) as Laya.Scene3D;
        this.m_Camera = new Laya.Camera;
        this.m_Light = new Laya.DirectionLight;
        this.m_Scene3D.addChild(this.m_Camera);
        this.m_Scene3D.addChild(this.m_Light);
    }
}