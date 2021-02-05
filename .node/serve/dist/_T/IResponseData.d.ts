import { EResponseCode } from "./EResponseCode";
export interface IResponseData<Data> {
    data: Data;
    code: EResponseCode;
    mes: string;
    test: any;
}
