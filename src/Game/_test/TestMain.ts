import InstanceT from "src/_T/Ts/InstanceT";
import SceneManager from "../Scene/SceneManager";
import _TestMainUICon from "../UICon/_test/_TestMainUICon";
import ConfigTest from "./ConfigTest";
import DataTest from "./DataTest";
import LibraryTest from "./LibraryTest";
import OtherTest from "./OtherTest";
import PackTest from "./PackTest";

/**
 * 测试主脚本
 */
@InstanceT.DecorateInstance()
export default class TestMain {
    /** 单例 */
    public static readonly instance: TestMain;
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        //构建Scene场景下的debug节点
        SceneManager.instance.getScene('Scene')
            .getSceneNode('debug')
            .asyncBuild()
            .then((node) => {
                console.log('当前场景', node.scene);
                console.log('当前节点', node);
                //为该场景设置环境
                node.scene.setEnvironment();
            });
        //显示测试ui
        _TestMainUICon.instance.Show();
        //数据
        DataTest.instance.start();
        //类库测试
        // LibraryTest.instance.start();
        //配置表测试
        ConfigTest.instance.start();
        //打包测试
        PackTest.instance.start();
        //其他测试
        OtherTest.instance.start();
    }
}