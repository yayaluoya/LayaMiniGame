import _ConstConfig from "src/Config/_ConstConfig";
import { EUILayer } from "./EUILayer";

/**
 * FGUI 根管理器
 */
export default class FGUIRootManager {
    //UI层级ui列表
    public static layerUIList: { [index: string]: fgui.GComponent };

    // 获取某一层UI
    public static getLayerUI(layerType: EUILayer): fgui.GComponent {
        //
        return this.layerUIList[layerType];
    }

    /** 初始化 */
    public static init() {
        // 设置包名后缀
        fgui.UIConfig.packageFileExtension = _ConstConfig.FGUI.packageFileExtension;
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        //添加FGUI根节点按顺序显示
        this.layerUIList = {};
        for (let _i in EUILayer) {
            this.layerUIList[EUILayer[_i]] = fgui.GRoot.inst.addChild(new fgui.GComponent()) as fgui.GComponent;
        }
    }
}