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
    public init() { }
}