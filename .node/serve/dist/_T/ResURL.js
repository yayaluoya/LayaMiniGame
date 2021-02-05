"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class ResURL {
    static get rootURL() {
        return path_1.join(path_1.resolve(__dirname, '../../../../'), '/');
    }
    static get serveRootURL() {
        return path_1.join(path_1.resolve(__dirname, '../../'), '/');
    }
    static get cacheURL() {
        return path_1.join(this.serveRootURL, '.cache/');
    }
    static get binURL() {
        return path_1.join(this.rootURL, 'bin/');
    }
    static get resURL() {
        return path_1.join(this.binURL, 'res/');
    }
    static get excelURL() {
        return path_1.join(this.rootURL, 'Doc/excel/');
    }
    static get configJsonURL() {
        return path_1.join(this.resURL, 'Config/');
    }
    static get sceneJsonURL() {
        return path_1.join(this.resURL, 'LvConfig/');
    }
}
exports.default = ResURL;
//# sourceMappingURL=ResURL.js.map