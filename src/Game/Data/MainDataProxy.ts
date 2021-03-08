import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import DataT from "src/_T/Data/DataT";
import InstanceT from "src/_T/Ts/InstanceT";
import MainData from "./type/MainData";

/**
 * 主要数据代理
 */
@InstanceT.DecorateInstance()
@DataT.DecorateDataTemplate(MainData)
export class MainDataProxy extends BaseLocalDataProxy<MainData>{
    /** 单例 */
    public static readonly instance: MainDataProxy;
    //
    private constructor() { super(); }
}