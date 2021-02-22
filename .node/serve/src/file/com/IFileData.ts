/** 
 * 文件数据结构
 */
export interface IFileData {
    /** 字段名 */
    fieldname: string,
    /** 原始文件名 */
    originalname: string,
    /** 编码 */
    encoding: string,
    /** 文档类型 */
    mimetype: string,
    /** 内容 */
    buffer: Buffer,
    /** 大小 */
    size: number,
}