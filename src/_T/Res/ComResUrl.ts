import { EKeyResName } from "./EKeyResName";
import KeyResManager from "./KeyResManager";

/**
 * 公共资源路径
 */
export default class ComResUrl {
    /**
     * 音乐文件路径
     * @param name 文件名称
     */
    public static MusicURL(name: string): string {
        return KeyResManager.getResURL(EKeyResName.music) + name + '.mp3';
    }

    /**
     * 音效资源路径
     * @param name 音效名字 
     */
    public static SoundURL(name: string): string {
        return KeyResManager.getResURL(EKeyResName.sound) + name + '.mp3';
    }

    /**
     * 图标资源路径
     * @param name 图标名称 
     */
    public static IconURL(name: string): string {
        return KeyResManager.getResURL(EKeyResName.icon) + name + '.png';
    }

    /**
     * 图片资源路径
     * @param name 图片资源名字
     * @param _suffix 图片资源后缀
     */
    public static ImgURL(name: string, _suffix: string = 'png'): string {
        return KeyResManager.getResURL(EKeyResName.img) + name + '.' + _suffix;
    }

    /**
     * 皮肤资源路径
     * @param name 皮肤名称 
     * @param _suffix 皮肤资源后缀
     */
    public static SkinURL(name: string, _suffix: string = 'png'): string {
        return KeyResManager.getResURL(EKeyResName.skin) + name + '.' + _suffix;
    }
}