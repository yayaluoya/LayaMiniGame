"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComDispose_1 = require("./com/dispose/ComDispose");
const ConfigDispose_1 = require("./config/dispose/ConfigDispose");
const FileDispose_1 = require("./file/dispose/FileDispose");
const LogDispose_1 = require("./log/dispose/LogDispose");
class Init {
    constructor() {
        this.init();
    }
    init() {
        ComDispose_1.default.init();
        ConfigDispose_1.default.init();
        LogDispose_1.default.init();
        FileDispose_1.default.init();
    }
}
exports.default = Init;
//# sourceMappingURL=Init.js.map