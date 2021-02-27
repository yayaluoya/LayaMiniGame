/** 
 * webpack插件
 */
class webpackPlugin {
    apply(compiler) {
        // 插入钩子函数
        // compiler.hooks.emit;
        console.log(Object.keys(compiler.hooks));
    }
}

//
module.exports = webpackPlugin;