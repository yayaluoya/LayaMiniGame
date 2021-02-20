import rootApi from "./rootApi";

/**
 * 配置api
 */
const configApi = {
    /** 获取所有配置表名字 */
    getAllConfigsNames: rootApi + 'config/getAllConfigsNames',
    /** 获取所有配置表json名字 */
    getAllConfigJsonNames: rootApi + 'config/getAllConfigJsonNames',
    /** 获取所有场景json文件名字 */
    getAllSceneJsonNames: rootApi + 'config/getAllSceneJsonNames',
    /** 获取json数据 */
    getJsonData: rootApi + 'config/getJsonData',
    /** 压缩json文件 */
    zipJsonFile: rootApi + 'config/zipJsonFile',
    /** 解压json文件 */
    unZipJsonFile: rootApi + 'config/unZipJsonFile',
    /** 导出excel到json */
    exportExcelToJson: rootApi + 'config/exportExcelToJson',
    /** 获取所有路径关键值 */
    getAllURL: rootApi + 'config/getAllURL',
    /** 修改路径 */
    alterURL: rootApi + 'config/alterURL',
};

export default configApi;