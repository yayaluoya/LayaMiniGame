"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class ResURL {
    static get serveURL() {
        return 'http://localhost:3000/';
    }
    static get rootURL() {
        return this.join(path_1.resolve(__dirname, '../../../../'), '/');
    }
    static get serveRootURL() {
        return this.join(path_1.resolve(__dirname, '../../'), '/');
    }
    static get publicURL() {
        return this.join(this.serveRootURL, 'public/');
    }
    static get serveResURL() {
        return this.join(this.serveRootURL, 'res/');
    }
    static get localDataURL() {
        return this.join(this.serveRootURL, '.localData/');
    }
    static get binURL() {
        return this.join(this.rootURL, 'bin/');
    }
    static get resURL() {
        return this.join(this.binURL, 'res/');
    }
    static get srcURL() {
        return this.join(this.rootURL, 'src/');
    }
    static get gameSrcURL() {
        return this.join(this.srcURL, 'Game/');
    }
    static get logURL() {
        return this.join(this.publicURL, 'log/');
    }
    static get fileURL() {
        return this.join(this.serveResURL, 'file/');
    }
    static join(..._URLs) {
        let _url = path_1.join(..._URLs);
        return _url;
    }
}
exports.default = ResURL;
//# sourceMappingURL=ResURL.js.map