"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IFileData_1 = require("../_com/IFileData");
var fs = require("fs");
class FileT {
    static getFileData(_url) {
        return new Promise((r) => {
            console.log(_url);
            r(undefined);
        });
    }
}
exports.default = FileT;
//# sourceMappingURL=FileT.js.map