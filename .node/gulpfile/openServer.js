const { exec } = require("child_process");

/**
 * 开始服务
 */
function openServer(f) {
    f();
    console.log('开启 HTTP 服务');
    let process = exec("http-server -p 3000 --cors");
    process.stdout.on("data", (data) => {
        console.log(data);
    });
}

module.exports = openServer;