const path = require('path');
const MyPlugin = require('../gulpfile/vite/vitePlugin');

/** 项目目录 */
const srcURL = path.resolve(__dirname, '../../src');
// vite.config.js
export default {
    //项目根目录（index.html 文件所在的位置）。
    root: srcURL,
    resolve: {
        //路径别名
        alias: {
            'src/': '/',
        }
    },
    //插件列表
    plugins: [
        //自定义插件，主要是增加提示
        MyPlugin(),
    ],
    //
    server: {
        //端口
        port: '3003',
        //禁用hmr连接
        hmr: false,
        //使用固定端口
        strictPort: true,
    },
}