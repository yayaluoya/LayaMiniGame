const pako = require('pako');

/**
 * pako压缩工具
 */
export default class Pako {

    /**
     * 压缩数据
     * @param _string 字符串
     */
    public static deflate(_data: string): Uint8Array {
        return pako.deflate(_data);
    }

    /**
     * 解压数据
     * @param _data 数据
     */
    public static inflate(_data: Uint8Array): string {
        return pako.inflate(_data, { to: 'string' });
    }
}