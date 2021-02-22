import { IResponseData } from "src/_com/IResponseData";
import { IFileData } from "../com/IFileData";
export default class FileDispose {
    static init(): void;
    uploadFile(file: IFileData, body: any): Promise<IResponseData<{
        any: any;
    }>>;
}
