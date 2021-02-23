import rootApi from "./rootApi";

/**
 * 日志api
 */
const logApi = {
    /** 获取所有日志基础数据 */
    getAllLog: rootApi + 'log/getAllLog',
    /** 获取日志数据 */
    getLog: rootApi + 'log/getLog',
    /** 写入日志 */
    writeLog: rootApi + 'log/writeLog',
    /** 修改日志 */
    editLog: rootApi + 'log/editLog',
};

export default logApi;