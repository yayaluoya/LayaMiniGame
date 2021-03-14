import BaseUICon, { IBaseUIConDefines } from "./BaseUICon";
import IUICreate from "./IUICreate";

/**
 * 基类单页面控制器
 */
export default abstract class BaseSingleUICon<UI extends fgui.GComponent> extends BaseUICon {
    /** _UI 类型 */
    protected _UI: IUICreate<UI>;

    /** ui类型列表 */
    protected _UIs: {
        default: IBaseUIConDefines,
    };

    /** ui */
    private m_ui: UI;

    /** 获取ui */
    public get ui(): UI {
        return this.m_ui;
    }

    /** 创建ui之前的扩展回调 */
    protected _createUIBeforeEx() {
        if (!this._UIs) {
            //设置单ui
            this._UIs = {
                default: {
                    uiCreate: this._UI,
                },
            };
        }
    }

    /** 创建完成ui后的扩展回调 */
    protected _createUIEX() {
        this.m_ui = this._UIs.default.ui as UI;
    }
}