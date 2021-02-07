import ResURL from "src/_com/ResURL";
import ConfigLocalData from "./ConfigLocalData";

/**
 * config资源路径
 */
export default class ConfigResURL {
    /** 获取配置表路径 */
    public static get excelURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.configExcelURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.rootURL, 'Doc/excel/');
    }

    /** 获取配置表json路径 */
    public static get configJsonURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.configJsonURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.resURL, 'ConfigJson/');
    }

    /** 获取场景配置表目录 */
    public static get sceneJsonURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.sceneJsonURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.resURL, 'SceneJson/');
    }

    /** 获取配置文件ts文件保存目录 */
    public static get configTSURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.configTSURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.gameSrcURL, '/_config');
    }
}

/**
 * 本地路径数据键枚举
 */
export enum ELocalURLKey {
    /** 配置文件路径 */
    configExcelURL = 'configExcelURL',
    /** 场景json文件路径 */
    sceneJsonURL = 'sceneJsonURL',
    /** configJson文件路径 */
    configJsonURL = 'configJsonURL',
    /** 配置ts文件保存路径 */
    configTSURL = 'configTSURL',
}