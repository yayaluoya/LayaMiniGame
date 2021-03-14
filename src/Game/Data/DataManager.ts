import InstanceT from "src/_T/Ts/InstanceT";
import { MainDataProxy } from "./MainDataProxy";
import { SetDataProxy } from "./SetDataProxy";
import ShortDataProxy from "./ShortDataProxy";
import { SignDataProxy } from "./SignDataProxy";
import { TestDataProxy } from "./TestDataProxy";

/**
 * 数据管理器
 */
@InstanceT.DecorateInstance()
export default class DataManager {
    /** 单例 */
    public static readonly instance: DataManager;
    //
    private constructor() { }

    /**
     * 初始化
     */
    public init() {
        //初始化所有数据
        TestDataProxy.instance.initData();
        MainDataProxy.instance.initData();
        SetDataProxy.instance.initData();
        SignDataProxy.instance.initData();
        ShortDataProxy.instance.initData();
    }
}