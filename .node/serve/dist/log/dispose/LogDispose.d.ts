import { IResponseData } from "src/_com/IResponseData";
export default class LogDispose {
    static init(): void;
    getAllLog(): Promise<IResponseData<ILogData[]>>;
    getLog(_name: string): Promise<IResponseData<ILogData>>;
    writeLog(_log: string, _log_: string, _key: string): Promise<IResponseData<any>>;
    editLog(_name: string, _log: string, _log_: string): Promise<IResponseData<any>>;
}
export interface ILogData {
    name: string;
    data: string;
    data_: string;
}
