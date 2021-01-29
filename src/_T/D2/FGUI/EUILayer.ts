/**
 * UI分层,按顺序显示
 */
export enum EUILayer {
    /** 背景页面 */
    Bg = 'Bg',
    /** 主界面  永远存在 */
    Main = "Main",
    /** 面板  可以有很多 */
    Panel = "Panel",
    /** 弹窗 */
    Popup = "Popup",
    /** 道具 */
    Prop = 'Prop',
    /** 小部件 */
    Tip = "Tip",
    /** 暂停 */
    Pause = 'Pause',
    /** 设置 */
    Set = 'Set',
    /** 最高 */
    Top = 'Top',
    /** 加载页面 */
    Loading = 'Loading',
    /** 原生 */
    Native = 'Native',
}