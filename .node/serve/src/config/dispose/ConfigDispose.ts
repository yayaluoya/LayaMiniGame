import ResURL from "src/_T/ResURL";

/**
 * 配置文件处理类
 */
export default class ConfigDispose {
    /**
     * 获取所有配置表
     */
    public getAllConfigs(): Promise<IConfigData[]> {
        return new Promise<IConfigData[]>((resolve) => {
            resolve([{
                name: ResURL.rootURL,
                data: {},
            }]);
        });
    }
}

export interface IConfigData {
    /** 配置表名字 */
    name: string,
    /** 数据 */
    data: any,
}