import InstanceT from "src/_T/Ts/InstanceT";
import SceneNodeConfigProxy from "../ConfigProxy/SceneNodeConfigProxy";
import TestConstProxy from "../ConfigProxy/TestConstProxy";

/**
 * 配置表测试
 */
@InstanceT.DecorateInstance()
export default class ConfigTest {
    /** 单例 */
    public static readonly instance: ConfigTest;
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        console.log('场景节点配置表内容');
        console.log(SceneNodeConfigProxy.instance.dataList);
        console.log('常量测试配置表内容');
        console.log(TestConstProxy.instance.data);
    }
}