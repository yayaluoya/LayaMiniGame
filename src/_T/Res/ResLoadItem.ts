import ResLoad, { EResLoadModel } from "./ResLoad";

/**
 * 资源加载项
 * 负责一组资源列表的加载
 */
export default class ResLoadItem {
    /** 加载模式 */
    private m_loadModel: EResLoadModel;

    /** 加载关键键值 */
    private m_key: any;

    /** 加载完成回调 */
    private m_comBack: Laya.Handler;

    /** 资源路径列表 */
    private m_res: any;

    /** 获取关键键值 */
    public get key(): any {
        return this.m_key;
    }

    /**
     * 初始化
     * @param _res 资源列表
     * @param _mode 加载模式
     * @param _key 关键键值
     * @param _comBack 加载完成时的回调函数
     */
    public constructor(_res: any, _mode: EResLoadModel, _key?: any, _comBack?: Laya.Handler) {
        this.m_res = _res;
        this.m_loadModel = _mode;
        this.m_key = _key;
        this.m_comBack = _comBack;
    }

    /**
     * 加载资源
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度回调
     */
    public load(onCompleted: Laya.Handler, _onProgress?: Laya.Handler) {
        if (this.m_comBack) {
            if (!onCompleted) {
                ResLoad.Load(this.m_res, this.m_loadModel, this.m_comBack, _onProgress);
            } else {
                ResLoad.Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                    this.m_comBack.run();
                    onCompleted.run();
                }), _onProgress);
            }
        } else {
            ResLoad.Load(this.m_res, this.m_loadModel, onCompleted, _onProgress);
        }
    }

    /**
     * 异步加载资源
     * @param _onProgress 加载进度回调
     */
    public loadAsync(_onProgress?: Laya.Handler): Promise<void> {
        return new Promise<void>((r) => {
            this.load(Laya.Handler.create(this, () => {
                r();
            }), _onProgress);
        });
    }
}