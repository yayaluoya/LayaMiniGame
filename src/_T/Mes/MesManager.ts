import InstanceT from "../Ts/InstanceT";

/**
 * 简易信息处理类
 */
@InstanceT.DecorateInstance()
export default class MesManager extends Laya.EventDispatcher {
    /** 单例 */
    private static readonly instance: MesManager;
    //
    private constructor() { super(); }

    /**
     * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。
     * @param type 事件的类型。
     * @return 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
     */
    public static hasListener(type: string | number): boolean {
        //
        return this.instance.hasListener(type.toString());
    }

    /**
     * 派发事件。
     * @param type 事件类型。
     * @param data （可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
     * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
     */
    public static event(type: string | number, data?: any): boolean {
        //
        return this.instance.event(type.toString(), data);
    }

    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
     * @param type 事件的类型。
     * @param caller 事件侦听函数的执行域。
     * @param listener 事件侦听函数。
     * @param args （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    public static on(type: string | number, caller: any, listener: Function, args?: any[]): Laya.EventDispatcher {
        //
        return this.instance.on(type.toString(), caller, listener, args);
    }

    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
     * @param type 事件的类型。
     * @param caller 事件侦听函数的执行域。
     * @param listener 事件侦听函数。
     * @param args （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    public static once(type: string | number, caller: any, listener: Function, args?: any[]): Laya.EventDispatcher {
        //
        return this.instance.once(type.toString(), caller, listener, args);
    }

    /**
     * 从 EventDispatcher 对象中删除侦听器。
     * @param type 事件的类型。
     * @param caller 事件侦听函数的执行域。
     * @param listener 事件侦听函数。
     * @param onceOnly （可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    public static off(type: string | number, caller: any, listener: Function, onceOnly?: boolean): Laya.EventDispatcher {
        //
        return this.instance.off(type.toString(), caller, listener, onceOnly);
    }

    /**
     * 从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
     * @param type （可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    public static offAll(type?: string | number): Laya.EventDispatcher {
        //
        return this.instance.offAll(type.toString());
    }

    /**
     * 移除caller为target的所有事件监听
     * @param caller caller对象
     */
    public static offAllCaller(caller: any): Laya.EventDispatcher {
        //
        return this.instance.offAllCaller(caller);
    }

    /**
     * 检测指定事件类型是否是鼠标事件。
     * @param type 事件的类型。
     * @return 如果是鼠标事件，则值为 true;否则，值为 false。
     */
    public static isMouseEvent(type: string | number): boolean {
        //
        return this.instance.isMouseEvent(type.toString());
    }

}