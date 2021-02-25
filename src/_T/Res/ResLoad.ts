import ConsoleEx from "../Console/ConsoleEx";

/**
 * 资源加载类
 */
export default class ResLoad {
    /**
     * 加载资源
     * @param urls 资源路径列表
     * @param model 加载模式
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度
     */
    public static Load(urls: any, model: EResLoadModel, onCompleted: Laya.Handler, _onProgress?: Laya.Handler) {
        //判断是否有内容需要加载
        if (!urls || (Array.isArray(urls) && urls.length == 0)) {
            onCompleted.run();
            if (_onProgress) {
                _onProgress.args = [1];
                _onProgress.run();
            }
            return;
        }
        //加载资源
        switch (model) {
            case EResLoadModel.D3:
                //create是3D的接口，适用于3D项目
                Laya.loader.create(urls, onCompleted, _onProgress);
                break;
            case EResLoadModel.D2:
                //load是2d的接口，适用于2d项目
                Laya.loader.load(urls, onCompleted, _onProgress);
                break;
        }
    }

    /**
     * 加载3D资源
     * @param urls 资源路径
     * @param onCompleted 完成回调
     * @param _onProgress 进度回调
     */
    public static Load3D(urls: any, onCompleted: Laya.Handler, _onProgress?: Laya.Handler) {
        this.Load(urls, EResLoadModel.D3, onCompleted, _onProgress);
    }

    /**
     * 加载2D资源
     * @param urls 资源路径 
     * @param onCompleted 完成回调
     * @param _onProgress 进度回调
     */
    public static Load2D(urls: any, onCompleted: Laya.Handler, _onProgress?: Laya.Handler) {
        this.Load(urls, EResLoadModel.D2, onCompleted, _onProgress);
    }

    /**
     * 异步加载3D资源
     * @param urls 资源路径
     * @param _onProgress 进度回调
     */
    public static Load3DAsync(urls: any, _onProgress?: Laya.Handler): Promise<void> {
        //
        return new Promise((resolve) => {
            ResLoad.Load3D(urls, Laya.Handler.create(null, () => {
                resolve();
            }), _onProgress);
        });
    }

    /**
     * 异步加载2D资源
     * @param urls 资源路径
     * @param _onProgress 进度回调
     */
    public static Load2DAsync(urls: any, _onProgress?: Laya.Handler): Promise<void> {
        //
        return new Promise(function (resolve) {
            ResLoad.Load2D(urls, Laya.Handler.create(null, () => {
                resolve();
            }), _onProgress);
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
     * 清理指定资源地址缓存。
     * @param resUrl 资源路径
     */
    public static ClearRes(resUrl: string) {
        Laya.loader.clearRes(resUrl);
    }
}

/**
 * 资源加载模式
 */
export enum EResLoadModel {
    /** 3D 资源 */
    D3,
    /** 2d 资源 */
    D2,
}