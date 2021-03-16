const chalk = require('chalk');
const path = require('path');

/**
 * vite自定义插件
 */
function MyPlugin() {
    return {
        name: 'my-plugin', // 必须的，将会显示在 warning 和 error 中
        //服务器启动时被调用
        buildStart() {
            //
            console.log(chalk.magenta('vite准备完成,按 F5 打开浏览器'));
            console.log('');
            console.log(chalk.yellow('----▷ 主页：', path.resolve(__dirname, '../../../bin/viteIndex.html')));
        },
    }
}

//
module.exports = MyPlugin;