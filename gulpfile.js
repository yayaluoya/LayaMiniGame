const { watch, task, src } = require("gulp");
const { exec } = require("child_process");
const { server, reload } = require("gulp-connect");
const rev = require("gulp-rev-append");

const gulpfileConfig = require("./.node/config/gulpfileConfig");

//是否正在编译
let _ifCompile = false;
//主页地址
let _homePage;
//记录时间
let _time = 0;
//记录自动唤醒编译时间
let _awakeTime = 0;

//创建一个名称为compile的gulp任务
task("compile", function (f) {
    f();
    console.log('\033[35m', '增量编译。。。', '\033[0m');
    //自动编译
    compile((code, signal) => {
        console.log('\033[35m', '正在创建服务。。。', '\033[0m');
        //获取ip
        let _ip = getLocalIP();
        //主页地址
        _homePage = '游戏主页: http://' + _ip + ':' + gulpfileConfig.port + gulpfileConfig.homepage;
        //新建一个服务
        server({
            name: gulpfileConfig.itemName,//项目名字
            livereload: gulpfileConfig.livereload,//
            port: gulpfileConfig.port,//端口
            root: gulpfileConfig.root,//默认路径
            host: _ip,
            //建立服务完成
            serverInit: (_server) => {
                //
                console.log(' ----▷');
                // console.log(' ----▷ 配置参数：\n', gulpfileConfig);
                console.log(' ----▷');
                console.log('\033[34m', '----▶ ' + _homePage, '\033[0m');
                console.log(' --');
                console.log('\033[33m', ' ----▷ 按 F5 键启动 DeBug浏览器，并打开 游戏主页 地址', '\033[0m');
                console.log(' -');

                /**
                 * @ 监听src目录下的所有子目录的所有文件，
                 * @ //
                 * @ 监听生效后执行的函数
                 */
                watch(gulpfileConfig.watchFileList, undefined, watchCompile);

                //创建一个自动编译
                autoCompile();
            },
        });
    });
});

/** 监听编译 */
function watchCompile(cb) {
    let _onTime = (new Date()).getTime();
    console.log('监听到文件变化');
    if (_onTime - _time >= gulpfileConfig.watchFileDelay) {
        console.log('\033[35m', '开始编译。。。', '\033[0m');
        _time = _onTime;
        _awakeTime = gulpfileConfig.autoAwakeCompileTime;
    } else {
        return;
    }
    //开始编译
    compile((code, signal) => {
        console.log(code, signal);
        //抛出提示
        console.log('\033[34m', '----▶ ' + _homePage, '\033[0m');
        if (gulpfileConfig.ifAutoUpdate) {
            //重新刷新页面
            src(gulpfileConfig.indexPage)
                .pipe(rev())
                .pipe(reload());
        }
        //
        cb();
    });
}

/** 自动编译 */
function autoCompile() {
    if (!gulpfileConfig.ifAutoAwakeCompile) {
        return;
    }
    //
    _awakeTime = gulpfileConfig.autoAwakeCompileTime;
    //开启自动唤醒计时器
    setInterval(_autoCompile, 100);
}
//配合自动编译
function _autoCompile() {
    //判断是否正在编译中
    if (_ifCompile) { return; }
    _awakeTime -= 100;
    // console.log(_awakeTime);
    if (_awakeTime <= 0) {
        _awakeTime = gulpfileConfig.autoAwakeCompileTime;
        console.log('\n ----▷ 自动唤醒编译');
        compile((code, signal) => {
            console.log('\n ----▷ 自动唤醒编译完成');
            console.log(code, signal);
            //抛出提示
            console.log('\033[34m', '----▶ ' + _homePage, '\033[0m');
        });
    }
}

/** 编译代码 */
function compile(_back) {
    if (_ifCompile) {
        console.log('\033[31m', '正在编译中。。。', '\033[0m');
        return;
    }
    _ifCompile = true;
    //
    let process = exec("layaair2-cmd compile");
    process.stdout.on("data", (data) => {
        console.log(data);
    });
    process.stderr.on("data", (data) => {
        console.log(data);
    });
    process.on("exit", (code, signal) => {
        _ifCompile = false;
        console.log('\n ----▷ 编译完成', new Date());
        _back(code, signal);
    });
}

//创建一个名称为webpack的gulp任务
task("webpackCompile", function (f) {
    f();
    let process = exec("webpack");
    //
    process.stdout.on("data", (data) => {
        console.log(data);
    });
    process.stderr.on("data", (data) => {
        console.log(data);
    });
});