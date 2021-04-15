import PlatformManagerProxy from "./PlatformManagerProxy";

/**
 * 平台工具
 */
export default class PlatformT {
    /**
     * 加载分包
     * @param name 分包名字
     * @param progress 加载进度
     */
    public static LoadSubPKG(name: string, progress?: (p: number) => void): Promise<void> {
        return new Promise<void>((r, e) => {
            PlatformManagerProxy.instance.PlatformInstance.LoadSubpackage(name,
                Laya.Handler.create(this, r),
                Laya.Handler.create(this, e),
                Laya.Handler.create(this, progress),
            );
            // // });
            // var inst = window['wx'] as any;
            // inst = inst == null ? inst = window['qq'] as any : inst;
            // if (window['qg']) { inst = window['qg']; }
            // if (inst == null) {
            //     return Promise.resolve();
            // }
            // return new Promise<void>((r, e) => {
            //     var task = inst.loadSubpackage({
            //         name: name, // name 可以填 name 或者 root
            //         success: function (res) {
            //             // 分包加载成功后通过 success 回调
            //             console.log('分包', name, '加载成功' + res);
            //             r();
            //         },
            //         fail: function (res) {
            //             // 分包加载失败通过 fail 回调
            //             console.log('分包', name, '加载失败' + JSON.stringify(res));
            //             e(res)
            //         }
            //     });
            //     if (progress != null) {
            //         task.onProgressUpdate(res => {
            //             progress(res.totalBytesWritten / res.totalBytesExpectedToWrite);
            //         })
            //     }
        });
    }
}