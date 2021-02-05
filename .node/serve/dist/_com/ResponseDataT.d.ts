import { EResponseCode } from "./EResponseCode";
import { IResponseData } from "./IResponseData";
export default class ResponseDataT {
    static Pack<Data>(_data: Data, _code?: EResponseCode, _mes?: string, _test?: any): IResponseData<Data>;
}
