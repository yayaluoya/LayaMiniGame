import { join } from "node:path";

/**
 * 路径工具
 */
export default class URLT {
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