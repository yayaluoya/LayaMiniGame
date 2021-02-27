import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import SetData from "./type/SetData";

/**
 * 设置数据代理
 */
export class SetDataProxy extends BaseLocalDataProxy<SetData>{
    /** 单例 */
    private static _instance: SetDataProxy;
    public static get instance(): SetDataProxy {
        if (this._instance == null) {
            this._instance = new SetDataProxy();
            this._instance.m_dataTemplate = SetData;
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}