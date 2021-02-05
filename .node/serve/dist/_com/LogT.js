"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ResURL_1 = require("./ResURL");
class LogT {
    static writeLog(_log) {
        return new Promise((r) => {
            try {
                let _date = new Date();
                let _content = fs_1.readFileSync(ResURL_1.default.logFileURL).toString();
                let _logTemplate = fs_1.readFileSync(ResURL_1.default.join(ResURL_1.default.serveRootURL, '/public/logTemplate.md')).toString();
                _logTemplate = _logTemplate.replace(/\${time}/, _date.toLocaleDateString() + '    -    ' + _date.toLocaleTimeString() + '');
                _logTemplate = _logTemplate.replace(/\${log}/, _log);
                _content += _logTemplate;
                fs_1.writeFileSync(ResURL_1.default.logFileURL, _content);
                r('');
            }
            catch (e) {
            }
        });
    }
}
exports.default = LogT;
//# sourceMappingURL=LogT.js.map