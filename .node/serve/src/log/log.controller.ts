import { Body, Controller, Post } from '@nestjs/common';
import LogDispose from './dispose/LogDispose';

@Controller('log')
export class LogController {
    /**
     * 写入log日志
     */
    @Post('writeLog')
    async unZipJsonFile(@Body() body) {
        LogDispose.writeLog(body['log']);
    }
}
