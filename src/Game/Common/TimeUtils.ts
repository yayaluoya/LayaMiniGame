import LayaUtils from "src/_T/Utils/LayaUtils";

/**
 * 计时器工具
 */
export default class TimeUtils {
    /** 多少时间 */
    private _time: number;
    /** 当前时间 */
    private _onTime: number;
    /** 完成回调 */
    private _com: Laya.Handler;
    /** 进度回调 */
    private _plan: Laya.Handler;
    /** 计时粒度 */
    private _grading: number;
    /** 是否暂停 */
    private _ifPause: boolean;

    /** 设置是否暂停 */
    public set ifPause(_b: boolean) {
        this._ifPause = _b;
    }
    /** 获取是否暂停 */
    public get ifPause(): boolean {
        return this._ifPause;
    }

    /**
     * 开始计时
     * @param _time 多少时间
     * @param _com 完成回调
     * @param _handler 进度回调
     * @param _grading 计时粒度 默认为 1
     */
    public Start(_time: number, _com: Laya.Handler, _plan?: Laya.Handler, _grading: number = 1) {
        this._time = _time;
        this._onTime = 0;
        this._com = _com;
        this._plan = _plan;
        this._grading = _grading;
        //开始计时
        Laya.timer.frameLoop(this._grading, this, this.time);
    }

    /**
     * 清除计时器
     */
    public Clear() {
        Laya.timer.clearAll(this);
    }

    //
    private time() {
        if (this._ifPause) { return; }
        //
        this._onTime += (LayaUtils.deltaTime * this._grading);
        this._onTime = Math.min(this._onTime, this._time);
        //传出进度
        if (this._plan) {
            this._plan.args = [this._onTime / this._time];
            this._plan.run();
        }
        //判断进度
        if (this._onTime == this._time) {
            //完成
            this._com.run();
            //清理进度回调
            if (this._plan) {
                this._plan.recover();
            }
            //结束计时器
            Laya.timer.clearAll(this);
        }
    }
}