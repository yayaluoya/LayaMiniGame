import { Body, Controller, Post } from '@nestjs/common';
import LogDispose from './dispose/LogDispose';

@Controller('log')
export class LogController {
    /** 日志处理实例 */
    private m_logDispose: LogDispose;

    //
    public constructor() {
        //获取实例
        this.m_logDispose = new LogDispose();
    }

    /**
     * 写入log日志
     */
    @Post('writeLog')
    async unZipJsonFile(@Body() body) {
        this.m_logDispose.writeLog(body['log']);
    }
}
