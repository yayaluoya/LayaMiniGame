import { IResponseData } from 'src/_com/IResponseData';
import { IFileData } from './com/IFileData';
export declare class FileController {
    private m_fileDispose;
    constructor();
    uploadFile(file: IFileData, body: any): Promise<IResponseData<any>>;
}
