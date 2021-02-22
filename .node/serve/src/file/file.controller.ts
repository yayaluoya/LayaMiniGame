
import {
    Body,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IResponseData } from 'src/_com/IResponseData';
import { IFileData } from './com/IFileData';
import FileDispose from './dispose/FileDispose';

@Controller('file')
export class FileController {
    /** 公共处理实例 */
    private m_fileDispose: FileDispose;

    //
    public constructor() {
        this.m_fileDispose = new FileDispose;
    }

    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: IFileData, @Body() body): Promise<IResponseData<any>> {
        return this.m_fileDispose.uploadFile(file, body);
    }
}