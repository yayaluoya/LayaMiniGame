import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IResponseData } from 'src/_com/IResponseData';
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
     * 获取所有日志基础数据
     */
    @Get('getAllLog')
    async getAllLog(@Query() query): Promise<IResponseData<any>> {
        return this.m_logDispose.getAllLog();
    }

    /**
     * 获取日志数据
     */
    @Get('getLog')
    async getLog(@Query() query): Promise<IResponseData<any>> {
        return this.m_logDispose.getLog(query['name']);
    }

    /**
     * 写入日志
     */
    @Post('writeLog')
    async writeLog(@Body() body): Promise<IResponseData<any>> {
        return this.m_logDispose.writeLog(body['log'], body['log_'], body['key']);
    }
}
