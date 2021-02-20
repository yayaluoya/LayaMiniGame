import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//引用路由依赖组件
import config from '../app/config/index.vue';
import log from '../app/log/index.vue';

/**
 * 路由列表
 */
const routes = [
    { path: '/', redirect: '/config' },
    { path: '/config', component: config },
    { path: '/log', component: log },
]

/**
 * 路由器实例入口
 */
const router = new VueRouter({
    routes
});

export default router;