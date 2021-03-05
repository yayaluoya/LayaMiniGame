import { TestDataProxy } from "../Data/TestDataProxy";
import CustomDebug from "../Debug/CustomDebug";

/**
 * 数据测试类
 */
export default class DataTest {
    /** 单例 */
    private static _instance: DataTest;
    public static get instance(): DataTest {
        if (this._instance == null) {
            this._instance = new DataTest();
        }
        return this._instance;
    }
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        console.log('数据测试', TestDataProxy.instance.data);
        //
        CustomDebug.instance.addItem('proxyData', TestDataProxy.instance.data);
        //
        TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('数据设置回调');
        });
        //
        TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('数组被设置');
        }, TestDataProxy.instance.data.array);
        //
        TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性被设置');
        }, TestDataProxy.instance.data.object);
        //
        TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
            console.log('对象属性 a 被设置');
        }, TestDataProxy.instance.data.object, 'a');
    }
}