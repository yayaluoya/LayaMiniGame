const { task } = require("gulp");
const { exec } = require("child_process");

//创建webpack增量编译
task("openServer", function (f) {
    f();
    console.log('\033[35m', '开启 局域网 HTTP 服务。。。', '\033[0m');
    //
    let process = exec("http-server -p 3300 --cors");
    process.stdout.on("data", (data) => {
        console.log(data);
    });
});