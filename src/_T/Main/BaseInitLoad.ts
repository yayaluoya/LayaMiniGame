import ConsoleEx from "../Console/ConsoleEx";
import ResLoadGroup from "../Res/ResLoadGroup";
import ResLoadItem from "../Res/ResLoadItem";

/**
 * 游戏进入之前的加载基类
 */
export default abstract class BaseInitLoad {
    //
    public constructor() {
        this._init();
    }

    /**
     * 加载
     * @param _comBack 加载完成回调
     */
    public load(_comBack?: Laya.Handler) {
        console.log(...ConsoleEx.packCom('开始加载游戏初始化资源'));
        //执行加载之前的异步
        this._loadBefore().then(() => {
            //获取加载项
            let _resLoadItems: ResLoadItem[] = this._getLoadItems();
            //异步加载加载项
            ResLoadGroup.loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
                this._loadPlan(i);
            }, undefined, false), Laya.Handler.create(this, this._loadItemsCom, undefined, false))
                .then(() => {
                    console.log(...ConsoleEx.packCom('游戏加载完成'));
                    //
                    this._loadCom();
                    //
                    _comBack && _comBack.run();
                });
        });
    }

    // * --------
    /**
     * 初始化
     */
    protected _init() { }

    /**
     * 游戏加载之前
     * 可以在这里先加载一些东西
     */
    protected _loadBefore(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * 获取加载项列表
     */
    protected _getLoadItems(): ResLoadItem[] {
        return [];
    }

    /**
     * 加载进度
     * @param _i 进度值
     */
    protected _loadPlan(_i: number) { }

    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    protected _loadItemsCom(_resLoad: ResLoadItem) { }

    /**
     * 加载完成
     */
    protected _loadCom() { }
}