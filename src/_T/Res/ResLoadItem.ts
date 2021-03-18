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
    /** 加载进度回调 */
    private m_onProgress: Laya.Handler;

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
     * @param _onProgress 加载进度回调
     */
    public constructor(_res: any, _mode: EResLoadModel, _key?: any, _comBack?: Laya.Handler, _onProgress?: Laya.Handler) {
        this.m_res = _res;
        this.m_loadModel = _mode;
        this.m_key = _key;
        this.m_comBack = _comBack;
        this.m_onProgress = _onProgress;
    }

    /**
     * 加载资源
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度回调
     */
    public load(onCompleted: Laya.Handler, _onProgress?: Laya.Handler) {
        //包装进度回调
        let __onProgress: Laya.Handler = _onProgress;
        if (__onProgress && this.m_onProgress) {
            __onProgress = Laya.Handler.create(this, (i) => {
                _onProgress.args = [i];
                _onProgress.run();
                this.m_onProgress.args = [i];
                this.m_onProgress.run();
            }, undefined, false);
        } else if (this.m_onProgress) {
            __onProgress = this.m_onProgress;
        }
        if (this.m_comBack) {
            if (!onCompleted) {
                ResLoad.Load(this.m_res, this.m_loadModel, this.m_comBack, __onProgress);
            } else {
                ResLoad.Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                    this.m_comBack.run();
                    onCompleted.run();
                }), __onProgress);
            }
        } else {
            ResLoad.Load(this.m_res, this.m_loadModel, onCompleted, __onProgress);
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