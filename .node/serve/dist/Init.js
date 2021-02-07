"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigDispose_1 = require("./config/dispose/ConfigDispose");
const LogDispose_1 = require("./log/dispose/LogDispose");
class Init {
    constructor() {
        this.init();
    }
    init() {
        ConfigDispose_1.default.init();
        LogDispose_1.default.init();
    }
}
exports.default = Init;
//# sourceMappingURL=Init.js.map