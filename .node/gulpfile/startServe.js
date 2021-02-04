const { task } = require("gulp");
const { exec } = require("child_process");
const path = require('path');

/** 开启本地服务 */
task('startServe', function (f) {
    f();
    console.log('\033[35m', '开启Serve。。。', '\033[0m');
    //
    let _path = path.resolve(__dirname, '../serve/dist/main.js');
    let process = exec("node " + _path);
    //
    process.stdout.on("data", (data) => {
        console.log(data);
    });
    process.stderr.on("data", (data) => {
        console.log(data);
    });
});