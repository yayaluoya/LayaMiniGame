// ！ 自动导出，请不要修改
//
import { SceneNodeConfig } from "./SceneNodeConfig";
import { TestConfig } from "./TestConfig";
import { TestConst } from "./TestConst";

/**
* 构建全部配置表
*/
export class BuildConfigTs {
    /**
     * 获取所有的配置表内容
     */
    public static getAllConfig(): any[] {
        let configs: any[] = [];
        configs.push(SceneNodeConfig);
        configs.push(TestConfig);
        configs.push(TestConst);
        return configs;
    }
}
