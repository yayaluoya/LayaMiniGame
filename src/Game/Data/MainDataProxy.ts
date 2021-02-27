import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import MainData from "./type/MainData";

/**
 * 主要数据代理
 */
export class MainDataProxy extends BaseLocalDataProxy<MainData>{
    /** 单例 */
    private static _instance: MainDataProxy;
    public static get instance(): MainDataProxy {
        if (this._instance == null) {
            this._instance = new MainDataProxy();
            this._instance.m_dataTemplate = MainData;
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}