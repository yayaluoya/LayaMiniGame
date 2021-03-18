const { task } = require("gulp");
const { exec } = require("child_process");
const { server } = require("gulp-connect");
const path = require('path');
const chalk = require('chalk');
const { getLocalIP } = require("./_T");

//打开web
task('startWeb', function (f) {
    f();
    //先开启server
    console.log(chalk.magenta('开启Serve。。。'));
    //
    let _path = path.resolve(__dirname, '../serve/dist/main.js');
    let process = exec("node " + _path);//执行一个shell命令
    //
    process.stdout.on("data", (data) => {
        //
        try {
            let _data = JSON.parse(data);
            if (_data.com) {
                //然后开启web
                console.log(chalk.magenta('开启Web。。。'));
                //
                let _ip = getLocalIP();
                //新建一个服务
                server({
                    name: 'LayaMiniGameWeb',//项目名字
                    port: 8080,//端口
                    root: path.resolve(__dirname, '../web/dist/'),//默认路径
                    host: _ip,
                    //建立服务完成
                    serverInit: (_server) => {
                        //
                        console.log(' ->');
                        console.log(chalk.hex('#ff4b5c')(' ----▷ 在浏览器中打开 http://' + _ip + ':8080'));
                        console.log(' ->');
                    },
                });
            }
        } catch { }
    });
    process.stderr.on("data", (data) => {
        console.log(data);
    });
});