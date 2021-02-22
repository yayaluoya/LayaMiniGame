import { Controller } from '@nestjs/common';
import ComDispose from './dispose/ComDispose';

@Controller('com')
export class ComController {
    /** 公共处理实例 */
    private m_comDispose: ComDispose;

    //
    public constructor() {
        this.m_comDispose = new ComDispose;
    }
}
