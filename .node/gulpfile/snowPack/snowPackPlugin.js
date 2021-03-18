const chalk = require('chalk');
const path = require('path');

/**
 * sonwPack 自定义插件
 */
function MyPlugin(snowpackConfig, pluginOptions) {
    setTimeout(() => {
        console.log(chalk.yellow('----▷ 主页：', path.resolve(__dirname, '../../../bin/snowPackIndex.html')));
    }, 3000);
    return {
        name: 'my-plugin', // 必须的，将会显示在 warning 和 error 中
    }
}

//
module.exports = MyPlugin;