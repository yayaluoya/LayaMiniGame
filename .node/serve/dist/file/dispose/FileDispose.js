"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const EResponseCode_1 = require("../../_com/EResponseCode");
const IResponseData_1 = require("../../_com/IResponseData");
const ResponseDataT_1 = require("../../_com/ResponseDataT");
const ResURL_1 = require("../../_com/ResURL");
var sd = require('silly-datetime');
class FileDispose {
    static init() { }
    uploadFile(file, body) {
        return new Promise((r, e) => {
            let _time = sd.format(new Date(), 'YYYY-MM-DD');
            try {
                fs_1.mkdirSync(ResURL_1.default.join(ResURL_1.default.fileURL, _time));
            }
            catch (E) {
            }
            let _url = ResURL_1.default.join(ResURL_1.default.fileURL, _time + '/' + Date.now() + '-' + file.originalname);
            try {
                fs_1.writeFile(_url, file.buffer, () => {
                    r(ResponseDataT_1.default.Pack({
                        url: _url.replace(ResURL_1.default.serveResURL, ResURL_1.default.serveURL).replace(/\\/g, '/'),
                    }));
                });
            }
            catch (E) {
                e(ResponseDataT_1.default.Pack(undefined, EResponseCode_1.EResponseCode.lose, E));
            }
        });
    }
}
exports.default = FileDispose;
//# sourceMappingURL=FileDispose.js.map