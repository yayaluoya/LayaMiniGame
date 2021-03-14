import BaseShortDataProxy from "src/_T/Data/BaseShortDataProxy";
import DataT from "src/_T/Data/DataT";
import InstanceT from "src/_T/Ts/InstanceT";
import ShortData from "./type/ShortData";

/**
 * 临时数据
 */
@InstanceT.DecorateInstance()
@DataT.DecorateDataTemplate(ShortData)
export default class ShortDataProxy extends BaseShortDataProxy<ShortData> {
    /** 单例 */
    public static readonly instance: ShortDataProxy;
    //
    private constructor() { super(); }
}