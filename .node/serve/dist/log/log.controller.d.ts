import { IResponseData } from 'src/_com/IResponseData';
export declare class LogController {
    private m_logDispose;
    constructor();
    getAllLog(query: any): Promise<IResponseData<any>>;
    getLog(query: any): Promise<IResponseData<any>>;
    writeLog(body: any): Promise<IResponseData<any>>;
}
