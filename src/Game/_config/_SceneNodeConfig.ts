// ！ 自动导出，请不要修改
//
/**
 * _SceneNodeConfig config配置文件
 * ! 自动导出，不要修改和直接引用
 */
export namespace _SceneNodeConfig {
    /** 配置表类型 */
    export const type: string = 'config';
    /** 数据类型 */
    export class DataType {
       /** 关卡id[必要] */
        id: number;
       /** 关卡名字，可以通过名字获取关卡数据 */
        name: string;
       /** 所属场景 */
        scene: string;
       /** 节点名字列表 */
        nodeName: string;
    }
    /** config数据列表 */
    export var datas: _SceneNodeConfig.DataType[] = [];
    /** 文件名字 */
    export const fileName: string = 'SceneNodeConfig.json';
}
    