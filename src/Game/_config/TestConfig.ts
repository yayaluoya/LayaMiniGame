// ！ 自动导出，请不要修改
//
/**
 * TestConfig config配置文件
 */
export namespace TestConfig {
    /** 配置表类型 */
    export const type: string = 'config';
    /** 数据类型 */
    export class DataType {
       /** 数值，不管什么值，都会转成字符串 */
        n: number;
       /** 字符串，不管是什么值，最后都会转成字符串 */
        s: string;
       /** 布尔值，不管什么值都会转布尔值 */
        b: boolean;
    }
    /** config数据列表 */
    export var datas: TestConfig.DataType[] = [];
    /** 文件名字 */
    export const fileName: string = 'TestConfig.json';
}
    