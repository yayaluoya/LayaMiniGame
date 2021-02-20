import { IResponseData } from "src/_com/IResponseData";
import { ELocalURLKey } from "./ConfigResURL";
export default class ConfigDispose {
    static init(): void;
    getAllConfigsNames(): Promise<IResponseData<IFileComData[]>>;
    getAllConfigJsonNames(): Promise<IResponseData<IFileComData[]>>;
    getAllSceneJsonNames(): Promise<IResponseData<IFileComData[]>>;
    private getAllFileNames;
    getJsonData(_url: string): Promise<IResponseData<any>>;
    zipJsonFile(_url: string): Promise<IResponseData<any>>;
    unZipJsonFile(_url: string): Promise<IResponseData<any>>;
    exportExcelToJson(_excel: string): Promise<IResponseData<any>>;
    getAllURL(): Promise<IResponseData<any[]>>;
    alterURL(_key: ELocalURLKey, _url: string): Promise<IResponseData<any>>;
}
interface IFileComData {
    name: string;
    path: string;
}
export {};
