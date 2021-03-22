import URLT from "./URLT";

/**
 * 资源路径类
 */
export default class ResURL {
    /** 根路径 */
    public static get rootURL(): string {
        return URLT.resolve(__dirname, '../../');
    }

    /** src路径 */
    public static get srcURL(): string {
        return URLT.join(this.rootURL, '/src');
    }

    /** src路径 */
    public static get binURL(): string {
        return URLT.join(this.rootURL, '/bin');
    }
}