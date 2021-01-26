var fs = require("fs");
var path = require("path");
const Pako = require("pako");

/**
 * 开始压缩
 */
function ZIPStart(_f) {
    _f();

    //获取上层目录
    let _rootUrl = path.resolve(__dirname, '..');
    _rootUrl = path.join(_rootUrl, '/bin/res/LvConfig');
    //
    var _configURLs = fs.readdirSync(_rootUrl).filter((item) => {
        return /\.json$/.test(item);
    }).map((item) => {
        return path.join(_rootUrl, item);
    });
    //
    // console.log(_configURLs);
    for (let _configURL of _configURLs) {
        // 同步读取
        let text = fs.readFileSync(_configURL).toString();
        // console.log(text);
        let _obj;
        try {
            _obj = JSON.parse(text);
        }
        catch (e) {
            console.log('json数据读取失败', _configURLs);
            continue;
        }
        // 判断是否已经压缩过了
        if (_obj['zip']) {
            continue;
        }
        _obj['zip'] = true;
        _obj['root'] = Pako.deflate(JSON.stringify(_obj['root']));
        //
        fs.writeFileSync(_configURL, JSON.stringify(_obj));
        console.log(_configURL, '数据压缩成功');
    }
}

module.exports = ZIPStart;