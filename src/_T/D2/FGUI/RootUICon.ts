/**
 * 根ui控制器
 * 所有ui控制器类型类均由此继承
 */
export default abstract class RootUICon {
    /**
     * 显示UI
     * @param par 参数，会全部传给回调
     */
    public abstract Show(...par: any[]);

    /**
     * 显示之前调用
     * @param par 显示方法回调的参数
     */
    protected abstract _onShowBefore(...par: any[]);

    /**
     * 显示之后调用
     * @param _ifNew 是否新建
     * @param par 显示方法回调的参数
     */
    protected abstract _onShow(_ifNew: boolean, ...par: any[]);

    /**
     * 隐藏UI
     * @param par 参数，会全部传给回调
     */
    public abstract Hide(...par: any[]);

    /**
     * 隐藏之前调用
     * @param par 隐藏方法回调的参数
     */
    protected abstract _onHideBefore(...par: any[]);

    /**
     * 隐藏之后调用
     * @param _ifDelete 是否删除
     * @param par 隐藏方法回调的参数
     */
    protected abstract _onHide(_ifDelete: boolean, ...par: any[]);

}