import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IResponseData } from 'src/_com/IResponseData';
import ConfigDispose from './dispose/ConfigDispose';
import { ELocalURLKey } from './dispose/ConfigResURL';

@Controller('config')
export class ConfigController {
    /** 配置表处理实例 */
    private m_configDispose: ConfigDispose;

    //
    public constructor() {
        //获取实例
        this.m_configDispose = new ConfigDispose();
    }

    /**
     * 获取所有配置表名字
     */
    @Get('getAllConfigsNames')
    async getAllConfigsNames(): Promise<IResponseData<any>> {
        return this.m_configDispose.getAllConfigsNames();
    }

    /**
     * 获取所有配置表json名字
     */
    @Get('getAllConfigJsonNames')
    async getAllConfigJsonNames(): Promise<IResponseData<any>> {
        return this.m_configDispose.getAllConfigJsonNames();
    }

    /**
     * 获取所有场景json文件名字
     */
    @Get('getAllSceneJsonNames')
    async getAllSceneJsonNames(): Promise<IResponseData<any>> {
        return this.m_configDispose.getAllSceneJsonNames();
    }

    /**
     * 获取json数据
     */
    @Get('getJsonData')
    async getJsonData(@Query() query): Promise<IResponseData<any>> {
        return this.m_configDispose.getJsonData(query.url);
    }

    /**
     * 压缩json文件
     */
    @Post('zipJsonFile')
    async zipJsonFile(@Body() body): Promise<IResponseData<any>> {
        return this.m_configDispose.zipJsonFile(body.url);
    }

    /**
     * 解压json文件
     */
    @Post('unZipJsonFile')
    async unZipJsonFile(@Body() body): Promise<IResponseData<any>> {
        return this.m_configDispose.unZipJsonFile(body.url);
    }

    /**
     * 导出excel到json
     */
    @Post('exportExcelToJson')
    async exportExcelToJson(@Body() body): Promise<IResponseData<any>> {
        return this.m_configDispose.exportExcelToJson(body.excel);
    }

    /**
     * 获取路径
     */
    @Get('getURL')
    async getURL(@Query() query): Promise<IResponseData<any>> {
        return this.m_configDispose.getURL(ELocalURLKey[query.key]);
    }

    /**
    * 修改路径
    */
    @Post('alterURL')
    async alterURL(@Body() body): Promise<IResponseData<any>> {
        return this.m_configDispose.alterURL(ELocalURLKey[body.key], body.url);
    }
}
