import ComResUrl from "src/_T/Res/ComResUrl";
import InstanceT from "src/_T/Ts/InstanceT";
import { SetDataProxy } from "../Data/SetDataProxy";
import { EMusics } from "../ResE/EMusics";
import { ESounds } from "../ResE/ESounds";
/**
 * 音效管理类
 */
@InstanceT.DecorateInstance()
export default class AudioManager {
    /** 单例 */
    public static readonly instance: AudioManager;
    //
    private constructor() { }

    //当前播放的bgm
    private m_onBGM: Laya.SoundChannel;

    //当前播放的音效列表
    private m_onSoundList: Set<Laya.SoundChannel> = new Set();

    //初始化
    public init() {
        //根据数据设置背景音乐和音效是否静音
        AudioManager.soundMuted = !SetDataProxy.instance.data.ifOpenSound;
        AudioManager.musicMuted = !SetDataProxy.instance.data.ifOpenMusic;
    }

    /**
     * 背景音乐和所有音效是否静音。
     */
    static set muted(value: boolean) {
        Laya.SoundManager.muted = value;
    }
    /**
     * 所有音效（不包括背景音乐）是否静音。
     */
    static set soundMuted(value: boolean) {
        Laya.SoundManager.soundMuted = value;
    }
    /**
     * 背景音乐（不包括音效）是否静音。
     */
    static set musicMuted(value: boolean) {
        Laya.SoundManager.musicMuted = value;
    }

    /**
     * 音效暂停
     */
    public static pauseSound() {
        //暂停所有音效
        Laya.SoundManager.stopAllSound();
    }
    /**
     * 音效继续
     */
    public static resumeSound() {
        //继续播放当前播放的音效
        this.instance.m_onSoundList.forEach((item) => {
            item.resume();
        });
    }

    /**
     * 暂停背景音乐
     */
    public static pauseMusic() {
        Laya.SoundManager.stopMusic();
    }
    /**
     * 继续播放背景音乐
     */
    public static resumeMusic() {
        this.instance.m_onBGM && this.instance.m_onBGM.resume();
    }

    /**
     * 设置音效音量
     * @param _n 音量 0~1
     * @param _url 资源地址
     */
    public static setSoundVolume(_n: number = 1, _url?: string) {
        Laya.SoundManager.setSoundVolume(_n, _url);
    }
    /**
     * 设置背景音乐音量
     * @param _n 音量 0~1
     */
    public static setMusicVolume(_n: number = 1) {
        Laya.SoundManager.setMusicVolume(_n);
    }

    /**
     * 播放音效。音效可以同时播放多个。
     * @param name 音效名字
     * @param loops 循环次数,0表示无限循环。
     * @param complete 声音播放完成回调  Handler对象。
     * @param soundClass 使用哪个声音类进行播放，null表示自动选择。
     * @param startTime 声音播放起始时间。
     * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
     */
    static playSound(name: ESounds, loops?: number, complete?: laya.utils.Handler, soundClass?: new () => any, startTime?: number): laya.media.SoundChannel {
        if (!name) { return; }
        let _sound: Laya.SoundChannel = Laya.SoundManager.playSound(name, loops, complete, soundClass, startTime);
        this.instance.m_onSoundList.add(_sound);
        return _sound;
    }
    /**
     * 播放背景音乐。背景音乐同时只能播放一个，如果在播放背景音乐时再次调用本方法，会先停止之前的背景音乐，再播放当前的背景音乐。
     * @param name 背景音效名字
     * @param loops 循环次数,0表示无限循环。
     * @param complete 声音播放完成回调,complete 结果参数 true: 播放完成, false/undefined ：stop触发的complete。
     * @param startTime 声音播放起始时间。
     * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
     */
    static playMusic(name: EMusics, loops?: number, complete?: laya.utils.Handler, startTime?: number): laya.media.SoundChannel {
        if (!name) { return; }
        let _music: Laya.SoundChannel = Laya.SoundManager.playMusic(name, loops, complete, startTime);
        this.instance.m_onBGM = _music;
        return _music;
    }

    /**
     * 停止音效播放。
     * @param soundsName 音效名字
     */
    static stopSound(soundsName: ESounds): void {
        Laya.SoundManager.stopSound(ComResUrl.SoundURL(soundsName));
    }
    /**
     * 停止背景音效播放。
     * @param musicName 音效名字
     */
    static stopMusic(musicName: EMusics): void {
        Laya.SoundManager.stopSound(ComResUrl.MusicURL(musicName));
    }
}