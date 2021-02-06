import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * 全局状态管理器入口
 */
const store = new Vuex.Store({
    /** 状态 */
    state: {
        cs: 'cs',
    },
    /** 计算属性 */
    getters: {
    },
    /** 方法 */
    mutations: {
    }
});

/** 导出 */
export default store;