import { MainDataProxy } from "./MainDataProxy";
import { SetDataProxy } from "./SetDataProxy";
import ShortDataProxy from "./ShortDataProxy";
import { SignDataProxy } from "./SignDataProxy";
import { TestDataProxy } from "./TestDataProxy";

/**
 * 数据管理器
 */
export default class DataManager {
    /** 单例 */
    private static _instance: DataManager;
    public static get instance(): DataManager {
        if (this._instance == null) {
            this._instance = new DataManager();
        }
        return this._instance;
    }
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