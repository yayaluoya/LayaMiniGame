import IFileData from "src/_com/IFileData";
export default class FileT {
    static getFileData(_url: string): Promise<IFileData>;
}
