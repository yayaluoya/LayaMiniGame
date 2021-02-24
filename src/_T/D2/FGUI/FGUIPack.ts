import _ConstConfig from "src/Config/_ConstConfig";
import ResLoad from "src/_T/Res/ResLoad";

/**
 * UI包类
 */
export class FGUIPack {
    // 包路径
    private packPath: string;
    // 其他资源数量
    private atliasCount: number;

    /**
     * 加载包
     * @param _packUrl 包地址
     * @param _atliasCount 图集数量
     */
    constructor(_packUrl: string, _atliasCount: number = -1) {
        this.packPath = _packUrl;
        this.atliasCount = _atliasCount;
    }

    /**
     * 异步加载
     */
    public asyncLoad(_onProgress?: Laya.Handler): Promise<void> {
        let _urls: string[] = [];
        this.getResURL(_urls);
        return ResLoad.Load2DAsync(_urls, _onProgress);
    }

    /**
     * 获取所有资源路径
     * @param urls 输出数组
     */
    public getResURL(urls: any[]) {
        //加入包名
        urls.push({ url: this.packPath + '.' + _ConstConfig.FGUI.packageFileExtension, type: Laya.Loader.BUFFER });
        //加载纹理集
        if (this.atliasCount >= 0) {
            urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
            //
            for (let i = 1; i <= this.atliasCount; i++) {
                urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
            }
        }
    }
}