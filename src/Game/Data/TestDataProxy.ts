import BaseLocalDataProxy from "src/_T/Data/BaseLocalDataProxy";
import TestData from "./type/TestData";

/**
 * 测试数据代理
 */
export class TestDataProxy extends BaseLocalDataProxy<TestData>{
    /** 单例 */
    private static _instance: TestDataProxy;
    public static get instance(): TestDataProxy {
        if (this._instance == null) {
            this._instance = new TestDataProxy();
            this._instance.m_dataTemplate = TestData;
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    //
    protected _initData() {
        //
    }
}