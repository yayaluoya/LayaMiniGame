/**
 * laya工具
 */
export default class LayaUtils {
    /**delta
     * 获取帧率
     */
    public static get frameRate(): number {
        return 1000 / this.deltaTime;
    }

    /**
     * 获取当前帧的缩放值
     */
    public static get deltaTimeScale(): number {
        return Math.min(60, Laya.timer.delta) / 60;
    }
    public static timeScale = 1;
    private static _recordFrame: number = 0;
    private static _deltaTime: number = 30;
    private static _deltaTimeSec: number = 0.016;
    /**
     * 获取每一帧的时间。毫秒级
     * 很卡的时候可能会很大
     */
    public static get deltaTime(): number {
        if (this._recordFrame != Laya.timer.currFrame) {
            this._deltaTime = Math.min(Laya.timer.delta, 100);
            this._deltaTimeSec = this._deltaTime * 0.001;
            this._recordFrame = Laya.timer.currFrame;
        }
        return this._deltaTime * this.timeScale;
    }

    /**
     * 获取每一帧的时间，秒级
     * 很卡的时候可能会很大
     */
    public static get deltaTimeSec(): number {
        if (this._recordFrame != Laya.timer.currFrame) {
            this._deltaTime = Math.min(Laya.timer.delta, 100);
            this._deltaTimeSec = this._deltaTime * 0.001;
            this._recordFrame = Laya.timer.currFrame;
        }
        var d: Laya.TrailSprite3D;
        return this._deltaTimeSec * this.timeScale;
    }
}