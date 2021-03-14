import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import DataT from "src/_T/Data/DataT";
import InstanceT from "src/_T/Ts/InstanceT";
import SetData from "./type/SetData";

/**
 * 设置数据代理
 */
@InstanceT.DecorateInstance()
@DataT.DecorateDataTemplate(SetData)
export class SetDataProxy extends BaseLocalDataProxy<SetData>{
    /** 单例 */
    public static readonly instance: SetDataProxy;
    //
    private constructor() { super(); }
}