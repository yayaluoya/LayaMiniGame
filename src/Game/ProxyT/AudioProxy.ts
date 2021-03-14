import AudioT from "src/_T/Audio/AudioT";
import InstanceT from "src/_T/Ts/InstanceT";
import { SetDataProxy } from "../Data/SetDataProxy";
import { EBGMs } from "../ResE/EBGMs";
import { ESounds } from "../ResE/ESounds";

/**
 * 音效代理类
 */
@InstanceT.DecorateInstance()
export default class AudioProxy {
    /** 单例 */
    public static readonly instance: AudioProxy;

    private m_onBGM: EBGMs;
    //当前播放的循环音效列表
    private m_onLoopSoundList: Set<ESounds>;

    //游戏是否暂停
    private m_stop: boolean;

    /**
     * 初始化
     */
    private constructor() {
        this.m_stop = false;
        this.m_onLoopSoundList = new Set<ESounds>();
    }

    /**
     * 停止背景音乐
     */
    public stopBGM() {
        AudioT.pauseBGM();
    }

    /**
     * 继续播放背景音乐
     */
    public BGMGoOn() {
        this.playBGM(this.m_onBGM);
    }

    //音效暂停
    public soundSuspend() {
        this.m_stop = true;
        //暂停所有循环播放音效
        for (let _o of this.m_onLoopSoundList) {
            AudioT.stopSound(_o);
        }
    }

    //音效继续
    public soundGoOn() {
        this.m_stop = false;
        //继续播放暂停前的循环播放音效
        for (let _o of this.m_onLoopSoundList) {
            AudioT.playSound(_o, 0);
        }
    }

    /**
     * 播放背景音乐
     * @param _name 背景音乐名字
     */
    public playBGM(_name: EBGMs, loops?: number, complete?: Handler, startTime?: number): void {
        if (!SetDataProxy.instance.data.ifOpenMusic || this.m_stop) return;
        AudioT.playBGM(_name, loops, complete, startTime);
        //记录
        this.m_onBGM = _name;
    }

    /**
     * 播放音效
     * @param url 声音文件地址。
     * @param loops 循环次数,0表示无限循环。
     * @param complete 声音播放完成回调  Handler对象。
     * @param soundClass 使用哪个声音类进行播放，null表示自动选择。
     * @param startTime 声音播放起始时间。
    */
    public playSound(_eSoundName: ESounds, loops?: number, complete?: Laya.Handler, soundClass?: any, startTime?: number) {
        if (!SetDataProxy.instance.data.ifOpenSound || this.m_stop) return;
        //判断是不是循环播放的音效，如果是的话就保存起来
        if (loops == 0) {
            this.m_onLoopSoundList.add(_eSoundName);
        }
        //正式播放音效
        AudioT.playSound(_eSoundName, loops, complete, soundClass, startTime);
    }

    /**
     * 停止音效
     * @param _eSoundName 音效名字
     */
    public stopSound(_eSoundName: ESounds) {
        AudioT.stopSound(_eSoundName);
        //判断是否在当前循环播放列表中
        if (this.m_onLoopSoundList.has(_eSoundName)) {
            this.m_onLoopSoundList.delete(_eSoundName);
        }
    }
}