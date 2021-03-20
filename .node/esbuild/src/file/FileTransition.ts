/**
 * 文件过渡操作
 * 当从本地读取文件的是否会经过这个流程
 */
export default class FileTransition {
    /**
     * 打包后
     * @param _content 文件内容
     */
    public static buildBack(_content: string): string {
        //处理路径
        _content = _content.replace(/import.*?["'](.*?)["'];/g, (_, text) => {
            console.log(text);
            return text;
        });
        return _content;
    }
}