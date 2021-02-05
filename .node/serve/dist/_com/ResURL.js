"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class ResURL {
    static get rootURL() {
        return this.join(path_1.resolve(__dirname, '../../../../'), '/');
    }
    static get serveRootURL() {
        return this.join(path_1.resolve(__dirname, '../../'), '/');
    }
    static get cacheURL() {
        return this.join(this.serveRootURL, '.cache/');
    }
    static get binURL() {
        return this.join(this.rootURL, 'bin/');
    }
    static get resURL() {
        return this.join(this.binURL, 'res/');
    }
    static get excelURL() {
        return this.join(this.rootURL, 'Doc/excel/');
    }
    static get configJsonURL() {
        return this.join(this.resURL, 'Config/');
    }
    static get sceneJsonURL() {
        return this.join(this.resURL, 'LvConfig/');
    }
    static get logFileURL() {
        return this.join(this.rootURL, '/文档/Serve/日志.md');
    }
    static join(..._URLs) {
        let _url = path_1.join(..._URLs);
        return _url;
    }
}
exports.default = ResURL;
//# sourceMappingURL=ResURL.js.map