import SceneNodeConfigProxy from "../ConfigProxy/SceneNodeConfigProxy";
import SceneManager from "../Scene/SceneManager";
import _TestMainUICon from "../UICon/_test/_TestMainUICon";
import DataTest from "./DataTest";
import LibraryTest from "./LibraryTest";

/**
 * 测试主脚本
 */
export default class TestMain {
    /** 单例 */
    private static _instance: TestMain;
    public static get instance(): TestMain {
        if (this._instance == null) {
            this._instance = new TestMain();
        }
        return this._instance;
    }
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
                console.log('场景节点配置表内容');
                console.log(SceneNodeConfigProxy.instance.dataList);
            });
        //显示测试ui
        _TestMainUICon.instance.Show();
        //
        console.log('打包测试20');
        //
        DataTest.instance.start();
        //
        LibraryTest.instance.start();
    }
}