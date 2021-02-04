import { Controller, Get } from '@nestjs/common';
import ConfigDispose from './dispose/ConfigDispose';

@Controller('config')
export class ConfigController {
    /** 配置表处理 */
    private m_configDispose: ConfigDispose;

    //
    public constructor() {
        this.m_configDispose = new ConfigDispose;
    }
    /**
     * 获取所有配置表
     */
    @Get('getAllConfigs')
    async getAllConfigs(): Promise<any> {
        return this.m_configDispose.getAllConfigs();
    }
}
