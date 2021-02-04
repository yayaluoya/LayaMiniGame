import { join, resolve } from "path";

/**
 * 资源路径类
 */
export default class ResURL {
    /** 根路径 */
    public static get rootURL(): string {
        return resolve(__dirname, '../../../../') + '/';
    }

    /** 获取bin目录 */
    public static get binURL(): string {
        return join(this.rootURL, 'bin/');
    }

    /** 获取res目录 */
    public static get resURL(): string {
        return join(this.binURL, 'res/');
    }

    /** 获取配置表路径 */
    public static get excelURL(): string {
        return join(this.rootURL, 'Doc/excel/');
    }

    /** 获取配置表json路径 */
    public static get configJsonURL(): string {
        return join(this.resURL, 'Config/');
    }

    /** 获取场景配置表目录 */
    public static get sceneJsonURL(): string {
        return join(this.resURL, 'LvConfig/');
    }
}