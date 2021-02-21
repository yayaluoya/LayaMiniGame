import { join, resolve } from "path";

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

    /** 公共资源路径 */
    public static get publicURL(): string {
        return this.join(this.serveRootURL, 'public/');
    }

    /** 本地数据目录 */
    public static get localDataURL(): string {
        return this.join(this.serveRootURL, '.localData/');
    }

    /** 获取bin目录 */
    public static get binURL(): string {
        return this.join(this.rootURL, 'bin/');
    }

    /** 获取res目录 */
    public static get resURL(): string {
        return this.join(this.binURL, 'res/');
    }

    /** 代码目录 */
    public static get srcURL(): string {
        return this.join(this.rootURL, 'src/');
    }

    /** 游戏代码目录 */
    public static get gameSrcURL(): string {
        return this.join(this.srcURL, 'Game/');
    }

    /** 日志目录 */
    public static get logURL(): string {
        return this.join(this.publicURL, 'log/');
    }

    /** 图片资源目录 */
    public static get imgURL(): string {
        return this.join(this.publicURL, 'img/');
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