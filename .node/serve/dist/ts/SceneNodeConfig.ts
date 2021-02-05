/** 
 * SceneNodeConfig config配置文件
 * ! 自动导出，请不要更改
 */
export namespace SceneNodeConfig {
    /** 数据类型 */
    export class Type {
       /** 关卡id[必要] */
        id: any;
       /** 所属场景 */
        scene: string;
       /** 节点名字列表 */
        sceneName: string;
    }
    /** config数据列表 */
    export var datas: SceneNodeConfig.Type[];
    /** 文件名字 */
    export const fileName = 'SceneNodeConfig.json';
}
    