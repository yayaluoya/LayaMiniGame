import ISceneEnvironment from "./ISceneEnvironment";

/**
 * 全局3D环境
 */
export default class GlobalD3Environment {
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

    /** 获取场景 */
    public static get Environment(): ISceneEnvironment {
        return {
            scene: this.m_Scene3D,
            camera: this.m_Camera,
            light: this.m_Light,
        };
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