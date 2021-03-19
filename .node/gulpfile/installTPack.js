const { task } = require("gulp");
const { exec } = require("child_process");
const path = require('path');

//安装工具包
task('installTPack', function (f) {
    f();
    //
    let _esbuildUrl = path.resolve(__dirname, '../esbuild');
    let _serveUrl = path.resolve(__dirname, '../serve');
    //
    let _esbuild = exec(`cd ${_esbuildUrl} && npm install`);//打包工具
    let _serve = exec(`cd ${_serveUrl} && npm install`);//后端工具
    //
    _esbuild.stdout.on("data", (data) => {
        console.log(data);
    });
    _serve.stdout.on("data", (data) => {
        console.log(data);
    });
});