import { resolve } from "path";

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
        return resolve(__dirname, '../../');
    }

    /** src路径 */
    public static get srcURL(): string {
        return resolve(__dirname, '../../../../src/');
    }

    /** 代码路径 */
    public static codeURL(): string {
        return resolve(__dirname, '../../node_modules/esBuildCodeUrl/');
    }
}