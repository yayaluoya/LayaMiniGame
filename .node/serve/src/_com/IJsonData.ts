/**
 * json数据接口
 * 所有能处理的json文件必须满足这个接口定义
 */
interface IJsonData {
    /** 数据 */
    data: any,
    /** 是否压缩 */
    zip: boolean,
}