var fs = require("fs");
var path = require("path");

/**
 * 设置调试页面首页
 */
function setDebugIndexHtml(f) {
    //获取上层目录
    let _rootUrl = path.resolve(__dirname, '..');
    fs.readFile(path.join(_rootUrl, '/src/aTGame/Debug/html/debugHTML_.ts'), 'utf8', function (err, debugHTML) {
        fs.readFile(path.join(_rootUrl, '/DebugPage/dist/index.html'), 'utf8', function (err, index) {
            if (err) throw err;
            debugHTML = debugHTML.replace('{html}', index);
            // console.log(debugHTML);
            fs.writeFile(path.join(_rootUrl, '/src/aTGame/Debug/html/debugHTML.ts'), debugHTML, 'utf8', (err) => {
                if (err) throw err;
                //
                console.log('设置调试首页完成，请重新编译项目');
                f();
            });
        });
    });
}

module.exports = setDebugIndexHtml;