const { task } = require("gulp");
const { exec } = require("child_process");
const path = require('path');

//创建webpack增量编译
task("webpackCompile_", function (f) {
    f();
    console.log('\033[35m', '开启webpack增量编译。。。', '\033[0m');
    //
    let _path = path.resolve(__dirname, '../config/webpack.config.js');
    let process = exec("webpack --config " + _path);
    //
    process.stdout.on("data", (data) => {
        console.log(data);
    });
    process.stderr.on("data", (data) => {
        console.log(data);
    });
});