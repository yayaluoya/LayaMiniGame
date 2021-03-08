/**
 * 单例工具
 */
export default class InstanceT {
    /** 单例属性名 */
    private static InstanceKey: symbol = Symbol();

    /**
     * 单例类装饰器
     * ! 被装饰的类的构造方法不能时public类型的
     */
    public static DecorateInstance() {
        return function (target: any) {
            //添加一个监听属性
            Object.defineProperty(target, 'instance', {
                get: function () {
                    if (!target[InstanceT.InstanceKey]) {
                        target[InstanceT.InstanceKey] = new target();
                    }
                    return target[InstanceT.InstanceKey];
                }
            });
        }
    }
}