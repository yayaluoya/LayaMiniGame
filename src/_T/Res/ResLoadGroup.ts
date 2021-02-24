import ResLoadItem from "./ResLoadItem";

/**
 * 资源加载组
 * 负责多个资源加载项的统一加载
 */
export default class ResLoadGroup {

    /**
     * 加载资源列表集合
     * @param items 资源加载项集合
     * @param onCompleted 完成时回调
     * @param _onProgress 加载进度回调
     * @param _onItemCom 单个资源项加载完成回调，会带上该资源项实例作为参数
     */
    public static load(items: ResLoadItem[], onCompleted: Laya.Handler, _onProgress?: Laya.Handler, _onItemCom?: Laya.Handler) {
        //没有加载项
        if (items.length == 0) {
            //加载完成
            onCompleted.run();
            if (_onProgress) {
                _onProgress.args = [1];
                _onProgress.run();
            }
            return;
        }
        //浅拷贝，防止污染源列表
        items = [...items];
        //异步列表长度
        let _length: number = items.length;
        //一步一步消费异步列表
        let _f: Function = () => {
            if (items.length > 0) {
                let onItem: ResLoadItem = items.shift();
                onItem.loadAsync(Laya.Handler.create(this, (i) => {
                    //传出总进度
                    _onProgress.args = [
                        ((_length - items.length - 1) + i) / _length
                    ];
                    _onProgress.run();
                })).then(() => {
                    //传出单个加载项加载完成事件
                    _onItemCom.args = [onItem];
                    _onItemCom.run();
                    //
                    _f();
                });
            } else {
                //加载完成
                onCompleted.run();
            }
        }
        //执行递归加载方法
        _f();
    }

    /**
     * 异步加载资源列表集合
     * @param items 资源加载项集合
     * @param _onProgress 加载进度回调
     * @param _onItemCom 单个资源项加载完成回调，会带上该资源项实例参数
     */
    public static loadAsync(items: ResLoadItem[], _onProgress?: Laya.Handler, _onItemCom?: Laya.Handler): Promise<void> {
        return new Promise<void>((r) => {
            this.load(items, Laya.Handler.create(this, () => {
                r();
            }), _onProgress, _onItemCom);
        });
    }
}