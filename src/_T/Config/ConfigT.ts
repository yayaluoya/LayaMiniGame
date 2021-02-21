/**
 * 配置表工具
 */
export default class ConfigT {
    /**
     * 根据配置表列表构建配置表
     * @param _configs 配置表列表
     */
    public static Build(_configs: IBaseConfigContainer[]) {
        //
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