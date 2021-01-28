import ConsoleEx from "../Console/ConsoleEx";

/**
 * 资源加载类
 */
export default class ResLoad {

    /**
     * 加载资源
     * @param urls 资源路径
     * @param onCompleted 完成回调
     * @param onProgress 进度回调
     */
    public static Load(urls: string | string[], onCompleted: Laya.Handler, onProgress?: Laya.Handler) {
        //判断是否有内容需要加载
        if (!urls || urls.length == 0) {
            onCompleted.run();
            if (onProgress) {
                onProgress.args = [1];
                onProgress.run();
            }
            return;
        }
        Laya.loader.create(urls, onCompleted, onProgress);
    }

    /**
     * 加载2D资源
     * @param urls 资源路径 
     * @param onCompleted 完成回调
     * @param onProgress 进度回调
     */
    public static Load2D(urls: string | string[], onCompleted: Laya.Handler, onProgress?: Laya.Handler) {
        //判断是否有内容需要加载
        if (!urls || urls.length == 0) {
            onCompleted.run();
            if (onProgress) {
                onProgress.args = [1];
                onProgress.run();
            }
            return;
        }
        Laya.loader.load(urls, onCompleted, onProgress);
    }

    /**
     * 异步加载资源
     * @param urls 资源路径
     * @param onProgress 进度回调
     */
    public static LoadAsync(urls: string | string[], onProgress?: Laya.Handler): Promise<void> {
        //
        return new Promise((resolve) => {
            ResLoad.Load(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }

    /**
     * 异步加载2D资源
     * @param urls 资源路径
     * @param onProgress 进度回调
     */
    public static Load2dAsync(urls: string | string[], onProgress?: Laya.Handler): Promise<void> {
        //
        return new Promise(function (resolve) {
            ResLoad.Load2D(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }

    /**
     * 获取资源
     * @param resUrl 资源路径
     * @param noClone 是否不获取克隆的资源
     */
    public static GetRes(resUrl: string, noClone: boolean = false): any {
        let getRes = Laya.loader.getRes(resUrl);
        if (!getRes) {
            console.error(...ConsoleEx.packError("资源尚未加载", resUrl));
            return;
        }
        return noClone ? getRes : getRes.clone();
    }

    /**
     * 加载并获取资源
     * @param resUrl 资源路径
     * @param noClone 是否不获取克隆的资源
     */
    public static LoadAndGet(resUrl: string, noClone: boolean = false): Promise<any> {
        return new Promise<any>((resolve: Function) => {
            ResLoad.LoadAsync(resUrl).then((_data: any) => {
                resolve(ResLoad.GetRes(resUrl, noClone));
            });
        });
    }

    /**
     * 清理指定资源地址缓存。
     * @param resUrl 资源路径
     */
    public static UnLoad(resUrl: string) {
        Laya.loader.clearRes(resUrl);
    }
}