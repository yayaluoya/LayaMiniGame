"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EResponseCode_1 = require("./EResponseCode");
class ResponseDataT {
    static Pack(_data, _code = EResponseCode_1.EResponseCode.com, _mes, _test) {
        return {
            data: _data,
            code: _code,
            mes: _mes,
            test: _test,
        };
    }
}
exports.default = ResponseDataT;
//# sourceMappingURL=ResponseDataT.js.map