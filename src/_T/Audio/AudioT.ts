import ConsoleEx from "../Console/ConsoleEx";
import ComResUrl from "../Res/ComResUrl";
import InstanceT from "../Ts/InstanceT";

/**
 * 音效工具类
 * 必须要先预加载音效，不然播放会有延迟
 */
@InstanceT.DecorateInstance()
export default class AudioT {
    /** 单例 */
    public static readonly instance: AudioT;
    //
    private constructor() { }

    //
    private _bgPast: string[] = [];
    private _urlBGM: string = '';
    private _urlSOUND: string = '';

    /**
     * 播放背景音乐
     * @param name 背景音乐名字
     */
    public static playBGM(name: string, loops?: number, complete?: Handler, startTime?: number): void {
        if (name != null && this.instance._bgPast.slice(-1)[0] != name) {
            this.instance._bgPast.push(name);
            this.instance._urlBGM = ComResUrl.MusicURL(name);
            this._playMusic(loops, complete, startTime);
            console.log(...ConsoleEx.packLog("播放背景音乐", name));
        }
        else {
            if (this.instance._urlBGM != "") {
                this._playMusic(loops, complete, startTime);
                console.log(...ConsoleEx.packLog("播放背景音乐", name));
            } else {
            }
        }
    }

    /**
     * 转移背景音乐
     * @param name 
     */
    public static shiftBGM(name: string, loops?: number, complete?: Handler, startTime?: number): void {
        if (this.instance._bgPast.slice(-1)[0] == name) {
            this.instance._bgPast.pop();
            let pastBg: string = this.instance._bgPast.slice(-1)[0];
            if (pastBg) {
                this.instance._urlBGM = ComResUrl.MusicURL(name);
                this._playMusic(loops, complete, startTime);
            }
        }
    }

    // laya播放背景音乐
    private static _playMusic(loops: number = 0, complete?: Handler, startTime?: number) {
        Laya.SoundManager.stopMusic();
        Laya.SoundManager.playMusic(this.instance._urlBGM, loops, complete, startTime);
    }

    /**
     * 暂停背景音乐
     */
    public static pauseBGM() {
        Laya.SoundManager.stopMusic();
        console.log(...ConsoleEx.packLog("停止播放音乐", this.instance._urlBGM));
    }

    /**
     * 暂停特效音乐
     */
    public static pauseSound() {
        Laya.SoundManager.stopAllSound();
    }

    private _sounds: Laya.SoundChannel[] = [];
    /**
     * 播放特效音乐
     * @param type 名字
     * @param loops 是否循环
     * @param complete 完成回调
     * @param soundClass 使用哪个声音类进行播放，null表示自动选择。
     * @param startTime 开始时间
     */
    public static playSound(type: string, loops?: number, complete?: Laya.Handler, soundClass?: any, startTime?: number): void {
        this.instance._urlSOUND = ComResUrl.SoundURL(type);
        for (let i = 0; i < this.instance._sounds.length; i++) {
            if (this.instance._sounds[i]) {
                if (this.instance._sounds[i].url.indexOf(this.instance._urlSOUND) >= 0) {
                    this.instance._sounds[i].stop();
                    this.instance._sounds.splice(i, 1);
                    break;
                }
            }
        }
        let temp = Laya.SoundManager.playSound(this.instance._urlSOUND, loops, complete, soundClass, startTime);
        this.instance._sounds.push(temp);
    }

    /**
     * 停止播放某个特效音乐
     * @param type 
     */
    public static stopSound(type: string): void {
        this.instance._urlSOUND = ComResUrl.SoundURL(type);
        Laya.SoundManager.stopSound(this.instance._urlSOUND);
    }
}