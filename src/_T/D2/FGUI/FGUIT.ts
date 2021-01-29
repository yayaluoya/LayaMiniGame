import { EUILayer } from "./EUILayer";

/**
 * fgui 工具
 */
export default class FGUIT {
    /** ui层级key */
    private static UILayerKey: symbol = Symbol('UILayer');

    /**
     * 设置ui层级，除了fgui根管理器回调用，其他的地方请不要调用
     * @param _ui ui 
     * @param _layer 层级 
     */
    public static setUILayer(_ui: fgui.GComponent, _layer: EUILayer) {
        _ui[this.UILayerKey] = _layer;
    }

    /**
     * 获取ui层级
     * @param _ui ui 
     * @returns ui层级
     */
    public static getUILayer(_ui: fgui.GComponent): EUILayer {
        return _ui[this.UILayerKey] as EUILayer;
    }

    /**
     * 设置一个ui顶层显示
     * @param _ui 该ui
     */
    public static setUITopShow(_ui: fgui.GComponent) {
        //获取最大的显示顺序
        let _sortingOrder: number = _ui.sortingOrder;
        let _parentUI: fgui.GComponent = _ui.parent;
        for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
            _sortingOrder = Math.max(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
        }
        //重新设置顺序
        _ui.sortingOrder = _sortingOrder + 1;
    }

    /**
     * 设置一个ui底层显示
     * @param _ui 该ui
     */
    public static setUIDownShow(_ui: fgui.GComponent) {
        //获取最小的显示顺序
        let _sortingOrder: number = _ui.sortingOrder;
        let _parentUI: fgui.GComponent = _ui.parent;
        for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
            _sortingOrder = Math.min(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
        }
        //重新设置顺序
        _ui.sortingOrder = _sortingOrder - 1;
    }
}