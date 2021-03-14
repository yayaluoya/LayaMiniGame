import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import DataT from "src/_T/Data/DataT";
import InstanceT from "src/_T/Ts/InstanceT";
import SignData from "./type/SignData";

/**
 * 签到数据代理
 */
@InstanceT.DecorateInstance()
@DataT.DecorateDataTemplate(SignData)
export class SignDataProxy extends BaseLocalDataProxy<SignData>{
    /** 单例 */
    public static readonly instance: SignDataProxy;
    //
    private constructor() { super(); }
}