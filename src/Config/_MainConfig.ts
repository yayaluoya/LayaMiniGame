/**
 * 项目最高层配置
 */
export default class _MainConfig {
    /** 游戏所属团队 */
    public static readonly Team: string = 'LayaBox小游戏';
    /** 游戏名字，尽量不要出现中文和特殊字符*/
    public static readonly Name: string = 'LayaMiniGame';
    /** 中文名字 */
    public static readonly ZHName: string = 'LayaBox小游戏';
    /** 游戏说明 */
    public static readonly Explain: string = 'LayaBox小游戏，说明。';
    /** 数据版本 可以带字母但是尽量不要出现中文和特殊字符*/
    public static readonly Versions: string = '0.0.0.1';
    /** 是否上线为false则是开发环境 */
    public static readonly OnLine: boolean = false;
}