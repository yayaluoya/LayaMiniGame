import IPlatform from "./IPlatform";

/**
 * 录屏管理器
 */
export default interface IRecordManager {
    /**
     * 平台
     */
    Platform: IPlatform;

    /**
     * 是否支持录屏
     */
    supportRecord: boolean;

    /**
     * 是否正在录制中
     */
    isRecording: boolean;

    /**
     * 是否暂停录制
     */
    isPausing: boolean;

    /**
     * 是否录制成功
     */
    isRecordSuccess: boolean;

    /**
     * 视频保存位置
     */
    videoSavePath: string;

    /**
     * 开始录屏
     * @param onStart 正式开始的回调 
     * @param onOverTime 录屏超过最大时间的回调
     */
    StartRecord(onStart: Laya.Handler, onOverTime: Laya.Handler);

    /**
     * 暂停录制
     * @param onPause 
     */
    Pause(onPause: Laya.Handler);

    /**
     * 继续录制
     * @param onReume 
     */
    Resume(onReume: Laya.Handler);

    /**
     * 记录精彩时刻
     */
    RecordClip(timeRange: number[]);

    /**
     * 结束录屏
     * @param onStop 结束录屏回调,如果为空则使用超时回调 
     */
    StopRecord(onStop: Laya.Handler);

    /**
     * 分享视频
     * @param onSuccess 
     * @param onCancel 
     * @param onFailed 
     */
    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler);

}