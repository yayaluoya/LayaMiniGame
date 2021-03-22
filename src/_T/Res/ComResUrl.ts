import { EKeyResName } from "./EKeyResName";
import KeyResManager from "./KeyResManager";

/**
 * 公共资源路径
 */
export default class ComResUrl {
    /**
     * 音乐文件路径
     * @param name 文件名称
     * @param _ 文件后缀
     */
    public static MusicURL(name: string, _: string = '.mp3'): string {
        return KeyResManager.getResURL(EKeyResName.music) + name + _;
    }

    /**
     * 音效资源路径
     * @param name 音效名字 
     * @param _ 文件后缀
     */
    public static SoundURL(name: string, _: string = '.mp3'): string {
        return KeyResManager.getResURL(EKeyResName.sound) + name + _;
    }

    /**
     * 图标资源路径
     * @param name 图标名称 
     * @param _ 文件后缀
     */
    public static IconURL(name: string, _: string = '.png'): string {
        return KeyResManager.getResURL(EKeyResName.icon) + name + _;
    }

    /**
     * 图片资源路径
     * @param name 图片资源名字
     * @param _ 文件后缀
     */
    public static ImgURL(name: string, _: string = 'png'): string {
        return KeyResManager.getResURL(EKeyResName.img) + name + '.' + _;
    }

    /**
     * 皮肤资源路径
     * @param name 皮肤名称 
     * @param _ 文件后缀
     */
    public static SkinURL(name: string, _: string = 'png'): string {
        return KeyResManager.getResURL(EKeyResName.skin) + name + '.' + _;
    }
}