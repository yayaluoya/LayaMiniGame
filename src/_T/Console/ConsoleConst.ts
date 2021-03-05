/**
 * 打印台常用配置
 */
export default class ConsoleConst {

    /** 公共样式 */
    private static get publicStyle(): string {
        return `
                border-radius: 3px;
                line-height: 15px;
                `;
    }

    /** 普通消息 */
    public static get logStyle(): string {
        return this.getStyle('#fff', '#9BA4B4');
    }

    /** 轻消息 */
    public static get logLightStyle(): string {
        return this.getStyle('#776d8a', '#EBEBEB');
    }

    /** 警告消息 */
    public static get warnStyle(): string {
        return this.getStyle('#5c6e06', '#ffa931');
    }

    /** 错误消息 */
    public static get errorStyle(): string {
        return this.getStyle('#fff', '#ec0101');

    }

    /** 成功消息 */
    public static get comStyle(): string {
        return this.getStyle('#fff', '#ade498');

    }

    /**
     * 获取样式
     * @param _color 字体颜色
     * @param _bgColor 背景颜色
     */
    public static getStyle(_color: string, _bgColor: string): string {
        return `
                color: ${_color};
                background-color: ${_bgColor};
                padding: 0px 3px;
                `+ this.publicStyle;
    }
}