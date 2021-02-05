import { join, resolve, sep } from "path";

/**
 * 资源路径类
 */
export default class ResURL {
    /** 根路径 */
    public static get rootURL(): string {
        return this.join(resolve(__dirname, '../../../../'), '/');
    }

    /** 后端根路径 */
    public static get serveRootURL(): string {
        return this.join(resolve(__dirname, '../../'), '/');
    }

    /** 缓存目录 */
    public static get cacheURL(): string {
        return this.join(this.serveRootURL, '.cache/');
    }

    /** 获取bin目录 */
    public static get binURL(): string {
        return this.join(this.rootURL, 'bin/');
    }

    /** 获取res目录 */
    public static get resURL(): string {
        return this.join(this.binURL, 'res/');
    }

    /** 获取配置表路径 */
    public static get excelURL(): string {
        return this.join(this.rootURL, 'Doc/excel/');
    }

    /** 获取配置表json路径 */
    public static get configJsonURL(): string {
        return this.join(this.resURL, 'Config/');
    }

    /** 获取场景配置表目录 */
    public static get sceneJsonURL(): string {
        return this.join(this.resURL, 'LvConfig/');
    }

    /** 获取日志文件路径 */
    public static get logFileURL(): string {
        return this.join(this.rootURL, '/文档/Serve/日志.md');
    }

    /**
     * 将所有参数连接在一起，并规范化结果路径。
     * 参数必须是字符串。
     * 在v0.8中，非字符串参数被无声地忽略。
     * 在v0.10及以上版本中，会抛出异常。
     * @param _URLs url列表
     */
    public static join(..._URLs: string[]): string {
        let _url: string = join(..._URLs);
        return _url;
    }
}