// ！ 自动导出，请不要修改
//
import { _SceneNodeConfig } from "./_SceneNodeConfig";
import { _TestConfig } from "./_TestConfig";
import { _TestConst } from "./_TestConst";

/**
* 构建全部配置表
* ! 自动导出
*/
export class BuildConfigTs {
    /**
     * 获取所有的配置表内容
     */
    public static getAllConfig(): any[] {
        let configs: any[] = [];
        configs.push(_SceneNodeConfig);
        configs.push(_TestConfig);
        configs.push(_TestConst);
        return configs;
    }
}
