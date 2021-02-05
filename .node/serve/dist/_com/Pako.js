"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pako = require('pako');
class Pako {
    static deflate(_data) {
        return pako.deflate(_data);
    }
    static inflate(_data) {
        return pako.inflate(_data, { to: 'string' });
    }
}
exports.default = Pako;
//# sourceMappingURL=Pako.js.map