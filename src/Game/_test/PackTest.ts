import InstanceT from "src/_T/Ts/InstanceT";

/**
 * 类库测试
 */
@InstanceT.DecorateInstance()
export default class PackTest {
    /** 单例 */
    public static readonly instance: PackTest;
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        console.log('打包测试66');
    }
}