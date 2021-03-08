/**
 * 场景环境接口
 * * 默认只有一个场景，摄像机，平行光，可以继承该接口新建内容供场景使用
 */
export default interface ISceneEnvironment {
    /** 场景 */
    scene: Laya.Node,
    /** 摄像机 */
    camera: Laya.Camera,
    /** 灯光 */
    light: Laya.DirectionLight,
}