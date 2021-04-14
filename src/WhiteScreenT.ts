/**
 * 白屏工具
 */
export default class WhiteScreenT {
    /** 场景 */
    private static m_scene: Laya.Scene;
    private static m_bg: Laya.Sprite;

    /**
     * 加载
     */
    public static load(): Promise<void> {
        return new Promise<void>((r) => {
            Laya.loader.load([
                "initLoad.json",
                'atlas/initLoad.atlas',
                'atlas/initLoad.png',
            ], Laya.Handler.create(this, () => {
                r();
            }));
        });
    }

    /**
     * 打开
     */
    public static open(): Promise<void> {
        return new Promise<void>((r) => {
            //打开白屏ui
            Laya.Scene.open('initLoad.json', undefined, undefined, Laya.Handler.create(this, (_scene) => {
                this.m_scene = _scene;
                this.m_bg = this.m_scene.getChildByName('bg') as Laya.Sprite;
                this.updateView();
                //监听屏幕改变事件
                Laya.stage.on(Laya.Event.RESIZE, this, this.updateView);
                //
                this.openLater().then(r);
            }));
        });
    }

    /**
     * 打开之后的回调，可以在此加载分包
     */
    private static openLater(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * 设置进度
     * @param _n 进度值
     */
    public static setPlan(_n: number) {
        // console.log('设置进度', _n);
    }

    /**
     * 关闭
     */
    public static close() {
        //删除场景
        this.m_scene && this.m_scene.destroy();
        this.m_scene = null;
        this.m_bg = null;
        //关闭监听事件
        Laya.stage.offAllCaller(this);
    }

    /**
     * 更新视图
     */
    private static updateView() {
        let _width: number = Laya.stage.width;
        let _height: number = Laya.stage.height;
        //
        this.m_scene.width = _width;
        this.m_scene.height = _height;
        //
        this.m_bg.width = _width;
        this.m_bg.height = _height;
    }
}