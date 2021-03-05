/**
 * 引入服务文件
 */
//开启web
require("./.node/gulpfile/startWeb.js");
//laya打包
require("./.node/gulpfile/layaCompile.js");

const { task } = require("gulp");

//多余命令

task('compile', (f) => {
    f();
    //
    console.log('\033[35m', '编译相关命令', '\033[0m');
});

task('publish', (f) => {
    f();
    //
    console.log('\033[35m', '打包相关命令', '\033[0m');
});

task('npm', (f) => {
    f();
    //
    console.log('\033[35m', 'npm相关命令', '\033[0m');
});