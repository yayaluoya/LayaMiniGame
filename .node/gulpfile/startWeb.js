const { task } = require("gulp");
const { server } = require("gulp-connect");
const path = require('path');
const { getLocalIP } = require("./_T");

/** 打开web端 */
task('startWeb', function (f) {
    f();
    console.log('\033[35m', '开启Web。。。', '\033[0m');
    //
    let _ip = getLocalIP();
    //新建一个服务
    server({
        name: 'LayaMiniGameWeb',//项目名字
        port: 80,//端口
        root: path.resolve(__dirname, '../web/dist/'),//默认路径
        host: _ip,
        //建立服务完成
        serverInit: (_server) => {
            //
            console.log(' ->');
            console.log('\033[33m', ' ----▷ 按 F5 键启动浏览器，并打开 http://' + _ip, '\033[0m');
            console.log(' ->');
        },
    });
});