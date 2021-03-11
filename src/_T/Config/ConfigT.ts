import { IConfigData } from "../com/IConfigData";
import ConsoleEx from "../Console/ConsoleEx";
import EssentialResUrls from "../Res/EssentialResUrls";
import ResLoad from "../Res/ResLoad";

/**
 * 配置表工具
 */
export default class ConfigT {
    /**
     * 装饰配置表代理
     * @param _config 配置表
     */
    public static DecorateConfigProxy(_config: IBaseConfigContainer) {
        return function (target: any) {
            //设置配置表模板
            target.prototype.configTemplate = _config;
        }
    }

    /**
     * 构建配置表列表
     * 只构建，不加载
     * @param _configs 配置表列表
     */
    public static BuildConfigs(_configs: IBaseConfigContainer[]) {
        let _url: string;
        for (let _o of _configs) {
            _url = EssentialResUrls.ConfigJsonURL(_o.fileName);
            //填充数据
            switch (_o.type) {
                case 'config':
                    (_o as IConfigContainer).datas = this.getConfigJsonData(_url);
                    break;
                case 'const':
                    (_o as IConstContainer).data = this.getConfigJsonData(_url);
                    break;
            }
        }
    }

    /**
     * 获取配置表json数据
     * ！注意，获取了该资源该资源就会被删除掉
     * @param _url 配置表资源地址
     */
    public static getConfigJsonData(_url: string): any {
        //获取资源
        let configData: IConfigData = ResLoad.GetRes(_url, true);
        //清理资源缓存只使用一次
        ResLoad.ClearRes(_url);
        //判断有没有压缩
        if (configData.zip) {
            //解压
            let _time: number = Date.now();
            configData.data = JSON.parse(pako.inflate(configData.data, { to: 'string' }));
            _time = Date.now() - _time;
            //判断解压时间差
            if (_time > 500) {
                console.warn(...ConsoleEx.packWarn('配置表解压时间过长，可能是配置表文件过大->', _url));
            }
        }
        //
        return configData.data;
    }
}

/**
 * 基类配置表容器接口
 */
export interface IBaseConfigContainer {
    /** 配置表类型 */
    readonly type: string;
    /** 文件名字 */
    readonly fileName: string;
}

/**
 * config 容器
 */
export interface IConfigContainer extends IBaseConfigContainer {
    /** 数据列表 */
    datas: any[];
}

/**
 * const 容器
 */
export interface IConstContainer extends IBaseConfigContainer {
    /** 数据 */
    data: any;
}