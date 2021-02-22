"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const EResponseCode_1 = require("../../_com/EResponseCode");
const IResponseData_1 = require("../../_com/IResponseData");
const ResponseDataT_1 = require("../../_com/ResponseDataT");
const ResURL_1 = require("../../_com/ResURL");
class LogDispose {
    static init() { }
    getAllLog() {
        return new Promise((r, e) => {
            let _datas = [];
            try {
                let _urls = fs_1.readdirSync(ResURL_1.default.logURL).filter((item) => {
                    return /\.log$/.test(item);
                });
                let _name;
                for (let _o of _urls) {
                    _name = _o.replace('.log', '');
                    _datas.push({
                        name: _name,
                        data: fs_1.readFileSync(ResURL_1.default.join(ResURL_1.default.logURL, _name + '.log')).toString(),
                        data_: '',
                    });
                }
            }
            catch (_a) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '获取所有日志数据失败！'));
                return;
            }
            r(ResponseDataT_1.default.Pack(_datas));
        });
    }
    getLog(_name) {
        return new Promise((r, e) => {
            try {
                let _data = fs_1.readFileSync(ResURL_1.default.join(ResURL_1.default.logURL, _name + '.log')).toString();
                let _data_ = fs_1.readFileSync(ResURL_1.default.join(ResURL_1.default.logURL, _name + '.log_')).toString();
                r(ResponseDataT_1.default.Pack({
                    name: _name,
                    data: _data,
                    data_: _data_,
                }));
            }
            catch (_a) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose));
            }
        });
    }
    writeLog(_log, _log_, _key) {
        return new Promise((r, e) => {
            let _name = _key + '_' + Date.now();
            _name = _name.replace(/[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g, '');
            try {
                fs_1.writeFile(ResURL_1.default.join(ResURL_1.default.logURL, _name + '.log').replace(/ +/g, ''), _log, () => {
                    fs_1.writeFile(ResURL_1.default.join(ResURL_1.default.logURL, _name + '.log_').replace(/ +/g, ''), _log_, () => {
                        r(ResponseDataT_1.default.Pack({
                            name: _name,
                        }));
                    });
                });
            }
            catch (_a) {
                r(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, '写入日志失败!'));
            }
        });
    }
}
exports.default = LogDispose;
//# sourceMappingURL=LogDispose.js.map