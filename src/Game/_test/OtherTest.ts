import InstanceT from "src/_T/Ts/InstanceT";

/**
 * 类库测试
 */
@InstanceT.DecorateInstance()
export default class OtherTest {
    /** 单例 */
    public static readonly instance: OtherTest;
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        //
    }
}