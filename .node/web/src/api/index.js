import comApi from "./comApi.js";
import configApi from "./configApi.js";
import fileApi from "./fileApi.js";
import logApi from "./logApi.js";
import rootApi from "./rootApi.js";

/**
 * 主要api
 */
const mainApi = {
    root: rootApi,
};

/**
 * api集合
 */
const api = {
    /** 公共api */
    com: comApi,
    /** 主要api模块 */
    main: mainApi,
    /** 配置api模块 */
    config: configApi,
    /** 日志api模块 */
    log: logApi,
    /** 文件api */
    file: fileApi,
};

export default api;