/**
 * 文件工具
 */
export default class FileUtils {
    /**
     * 缓存文件
     * @param url 文件地址
     */
    public static CachFile(url: string) {
        if (!Laya.Browser.onWeiXin) return;
        var fullUrl = Laya.URL.formatURL(url);
        var fileInfo = Laya.MiniAdpter.getFileInfo(fullUrl);
        if (fileInfo == null) {
            Laya.MiniAdpter.downLoadFile(fullUrl);
        }
    }

    /**
     * 下载文件
     * @param urls 文件地址 
     * @param complete 完成时回调
     * @param progress 下载进度
     */
    public static DownLoadFiles(urls: string[], complete?: Laya.Handler, progress?: Laya.Handler) {
        Laya.loader.create(urls, complete, progress, null, null, null, 1, true);
    }
}