import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import DataT from "src/_T/Data/DataT";
import InstanceT from "src/_T/Ts/InstanceT";
import TestData from "./type/TestData";

/**
 * 测试数据代理
 */
@InstanceT.DecorateInstance()
@DataT.DecorateDataTemplate(TestData)
export class TestDataProxy extends BaseLocalDataProxy<TestData>{
    /** 单例 */
    public static readonly instance: TestDataProxy;
    //
    private constructor() { super(); }

    //
    protected _initData() {
        //
    }
}