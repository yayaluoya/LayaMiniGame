import { IResponseData } from 'src/_com/IResponseData';
export declare class ConfigController {
    private m_configDispose;
    constructor();
    getAllConfigsNames(): Promise<IResponseData<any>>;
    getAllConfigJsonNames(): Promise<IResponseData<any>>;
    getAllSceneJsonNames(): Promise<IResponseData<any>>;
    getJsonData(query: any): Promise<IResponseData<any>>;
    zipJsonFile(body: any): Promise<IResponseData<any>>;
    unZipJsonFile(body: any): Promise<IResponseData<any>>;
    exportExcelToJson(body: any): Promise<IResponseData<any>>;
    getURL(query: any): Promise<IResponseData<any>>;
    alterURL(body: any): Promise<IResponseData<any>>;
}
