import { EResponseCode } from "./EResponseCode";

/**
 * 响应事件接口
 * 所有响应的数据必须实现这个接口
 */
export interface IResponseData<Data> {
    /** 数据 */
    data: Data,
    /** 状态码 */
    code: EResponseCode,
    /** 消息 */
    mes: string,
    /** 测试内容 */
    test: any,
}