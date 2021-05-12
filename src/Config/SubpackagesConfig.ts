/**
 * 加载分包配置
 */
export default class LoadSubpackagesConfig {
    /** 分包列表,必须和分包配置文件中的列表一致 */
    public static subpackages: ISubpackages[] = [
        //
    ];
}

/**
 * cdn分包配置
 */
export class CDNSubpackagesConfig {
    /** cdn路径列表， */
    public static CDNURLs: ISubpackages[] = [
        //
    ];
}

// 修改路径顺序是先修改加载分包路径，在修改cdn路径，所以cdn路径会覆盖加载路径，不要重复就行了。

/**
 * 分包配置接口
 */
export interface ISubpackages {
    //关键资源名字
    name: string,
    //路径
    root: string,
}