import MesT from "src/_T/Mes/MesT";

/**
 * 音效事件
 */
export enum EAudioEvent {
    /** BGM暂停 */
    BGMSuspend,
    /** BGM继续 */
    BGMGoOn,
    /** 音效暂停 */
    SoundSuspend,
    /** 音效继续 */
    SoundGoOn,
    /** BGM音量改变 */
    BGMVolumeChange,
    /** Sound音量改变 */
    SoundVolumeChange,
}

//
MesT.packE(EAudioEvent);