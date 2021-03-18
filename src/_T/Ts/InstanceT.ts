/**
 * 单例工具
 */
export default class InstanceT {
    /** 单例属性名 */
    private static InstanceKey: symbol = Symbol();
    /** 单例属性名 */
    private static InstanceName: string = 'instance';

    /**
     * 单例类装饰器
     * @param _ifPassive 是否被动访问的时候创建实例，为false的话会立即创建出实例
     * ! 被装饰的类的构造方法不能时public类型的
     */
    public static DecorateInstance(_ifPassive: boolean = true) {
        return function (target: any) {
            if (_ifPassive) {
                //添加一个监听属性
                Object.defineProperty(target, InstanceT.InstanceName, {
                    get: function () {
                        if (!target[InstanceT.InstanceKey]) {
                            target[InstanceT.InstanceKey] = new target();
                        }
                        return target[InstanceT.InstanceKey];
                    }
                });
            } else {
                target[InstanceT.InstanceName] = new target();
            }
        }
    }
}