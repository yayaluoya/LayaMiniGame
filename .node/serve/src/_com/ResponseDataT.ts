import { EResponseCode } from "./EResponseCode";
import { IResponseData } from "./IResponseData";

/**
 * 响应数据工具
 */
export default class ResponseDataT {
    /**
     * 包装响应数据
     * @param _data 数据
     * @param _code 状态码
     * @param _mes 消息
     */
    public static Pack<Data>(_data: Data, _code: EResponseCode = EResponseCode.com, _mes?: string, _test?: any): IResponseData<Data> {
        return {
            data: _data,
            code: _code,
            mes: _mes,
            test: _test,
        };
    }
}