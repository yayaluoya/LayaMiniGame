var path = require("path");

/**
 * 资源路径类
 */
export default class ResURL {
    /** 
     * 根路径
     */
    public static get rootURL(): string {
        return __dirname;
    }
}