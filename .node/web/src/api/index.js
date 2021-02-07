import configApi from "./configApi.js";
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
    /** 主要api模块 */
    main: mainApi,
    /** 配置api模块 */
    config: configApi,
    /** 日志api模块 */
    log: logApi,
};

export default api;