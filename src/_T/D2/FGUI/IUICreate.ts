/**
 * UI 创建器接口
 * ! 必须满足这个要求的ui才能被创建
 * * 所有从fgui中导出的文件都要实现这个接口
 */
export default interface IUICreate {
    [index: string]: any,

    /** 创建一个实例 */
    createInstance(): fgui.GComponent,
}