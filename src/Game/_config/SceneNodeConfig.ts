// ！ 自动导出，请不要修改
//
/**
 * SceneNodeConfig config配置文件
 */
export namespace SceneNodeConfig {
    /** 配置表类型 */
    export const type: string = 'config';
    /** 数据类型 */
    export class DataType {
       /** 关卡id[必要] */
        id: any;
       /** 所属场景 */
        scene: string;
       /** 节点名字列表 */
        sceneName: string;
    }
    /** config数据列表 */
    export var datas: SceneNodeConfig.DataType[] = [];
    /** 文件名字 */
    export const fileName: string = 'SceneNodeConfig.json';
}
    