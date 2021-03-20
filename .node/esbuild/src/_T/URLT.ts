import { join, resolve } from "path";

/**
 * 路径工具
 */
export default class URLT {
    /**
     * 将所有参数连接在一起，并规范化结果路径。
     * 参数必须是字符串。
     * 在v0.8中，非字符串参数被无声地忽略。
     * 在v0.10及以上版本中，会抛出异常。
     * @param paths url列表
     */
    public static join(...paths: string[]): string {
        let _url: string = join(...paths);
        return _url;
    }

    /**
     * 最右边的参数被认为是{to}。
     * 其他参数被认为是{from}的数组。
     * 从最左边的{from}参数开始，将{to}解析为一个绝对路径。
     * 如果{to}还不是绝对路径，{from}参数将按从右到左的顺序前缀，直到找到一个绝对路径。
     * 如果在使用了所有的{from}路径后仍然没有找到绝对路径，也会使用当前工作目录。
     * 生成的路径被规范化，并且末尾的斜杠被删除，除非路径被解析到根目录。
     * @param pathSegments 
     */
    public static resolve(...pathSegments: string[]): string {
        return resolve(...pathSegments);
    }
}