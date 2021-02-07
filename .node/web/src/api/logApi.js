import rootApi from "./rootApi";

/**
 * 日志api
 */
const logApi = {
    /** 写入log日志 */
    writeLog: rootApi + 'log/writeLog',
};

export default logApi;