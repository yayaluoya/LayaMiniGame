import ResURL from "src/_com/ResURL";
import ConfigLocalData from "./ConfigLocalData";

/**
 * config资源路径
 */
export default class ConfigResURL {
    /**
     * 获取路径
     * @param _key key
     */
    public static getURL(_key: ELocalURLKey): string {
        switch (_key) {
            case ELocalURLKey.configExcelURL:
                return this.configExcelURL;
            case ELocalURLKey.configJsonURL:
                return this.configJsonURL;
            case ELocalURLKey.sceneJsonURL:
                return this.sceneJsonURL;
            case ELocalURLKey.configTSURL:
                return this.configTSURL;
        }
    }

    /** 获取配置表路径 */
    private static get configExcelURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.configExcelURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.rootURL, 'Doc/excel/');
    }

    /** 获取配置表json路径 */
    private static get configJsonURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.configJsonURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.resURL, 'ConfigJson/');
    }

    /** 获取场景配置表目录 */
    private static get sceneJsonURL(): string {
        //先看本地存储数据
        let _url: string = ConfigLocalData.instance.getItem(ELocalURLKey.sceneJsonURL);
        if (_url) {
            return ResURL.join(ResURL.rootURL, _url);
        }
        return ResURL.join(ResURL.resURL, 'SceneJson/');
    }

    /** 获取配置文件ts文件保存目录 */
    private static get configTSURL(): string {
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
    /** configJson文件路径 */
    configJsonURL = 'configJsonURL',
    /** 配置ts文件保存路径 */
    configTSURL = 'configTSURL',
    /** 场景json文件路径 */
    sceneJsonURL = 'sceneJsonURL',
}

/**
 * 本地路径数据键描述
 */
export enum ELocalURLKeyDescription {
    configExcelURL = '配置文件路径',
    configJsonURL = 'configJson文件路径',
    configTSURL = '配置ts文件保存路径',
    sceneJsonURL = '场景json文件路径',
}