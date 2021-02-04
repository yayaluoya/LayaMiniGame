const os = require('os');

/**
 * 获取局域网ip地址
 */
function getLocalIP() {
    let _ip = 'localhost';
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                _ip = alias.address;
            }
        }
    }
    // console.log(_ip);
    return _ip;
}

module.exports = {
    getLocalIP,
};