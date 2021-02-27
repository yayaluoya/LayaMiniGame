import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import SignData from "./type/SignData";

/**
 * 签到数据代理
 */
export class SignDataProxy extends BaseLocalDataProxy<SignData>{
    /** 单例 */
    private static _instance: SignDataProxy;
    public static get instance(): SignDataProxy {
        if (this._instance == null) {
            this._instance = new SignDataProxy();
            this._instance.m_dataTemplate = SignData;
        }
        return this._instance;
    }
    //
    private constructor() { super(); }
}