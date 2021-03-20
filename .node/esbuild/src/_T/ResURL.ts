import URLT from "./URLT";

/**
 * 资源路径类
 */
export default class ResURL {
    /** 服务路径 */
    public static get serveURL(): string {
        return 'http://localhost:3060/';
    }

    /** 后端根路径 */
    public static get rootURL(): string {
        return URLT.resolve(__dirname, '../../');
    }

    /** src路径 */
    public static get srcURL(): string {
        // return resolve(this.rootURL, '../../src/');
        return URLT.join(this.rootURL, 'testSrc/');
    }

    /** 代码打包缓存路径 */
    public static get codeBuildCacheURL(): string {
        return URLT.join(this.rootURL, 'node_modules/_esBuildCodeUrl/');
    }
}