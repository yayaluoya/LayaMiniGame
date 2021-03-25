(function () {
    'use strict';

    class _MainConfig {
    }
    _MainConfig.Team = 'LayaBox小游戏';
    _MainConfig.Name = 'LayaMiniGame';
    _MainConfig.ZHName = 'LayaBox小游戏';
    _MainConfig.Explain = 'LayaBox小游戏，说明。';
    _MainConfig.Versions = '0.0.0.1';
    _MainConfig.OnLine = false;

    class ConsoleConst {
        static get publicStyle() {
            return `
                border-radius: 3px;
                line-height: 15px;
                `;
        }
        static get logStyle() {
            return this.getStyle('#fff', '#9BA4B4');
        }
        static get logLightStyle() {
            return this.getStyle('#776d8a', '#EBEBEB');
        }
        static get warnStyle() {
            return this.getStyle('#5c6e06', '#ffa931');
        }
        static get errorStyle() {
            return this.getStyle('#fff', '#ec0101');
        }
        static get comStyle() {
            return this.getStyle('#fff', '#ade498');
        }
        static getStyle(_color, _bgColor) {
            return `
                color: ${_color};
                background-color: ${_bgColor};
                padding: 0px 3px;
                ` + this.publicStyle;
        }
    }

    class ConsoleEx {
        static pack(_style, _par) {
            return ['%c%s', _style, 'log', ..._par];
        }
        static packLog(...any) {
            if (_MainConfig.OnLine) {
                return any;
            }
            return this.pack(ConsoleConst.logStyle, any);
        }
        static packLogLight(...any) {
            if (_MainConfig.OnLine) {
                return any;
            }
            return this.pack(ConsoleConst.logLightStyle, any);
        }
        static packCom(...any) {
            if (_MainConfig.OnLine) {
                return any;
            }
            return this.pack(ConsoleConst.comStyle, any);
        }
        static packWarn(...any) {
            if (_MainConfig.OnLine) {
                return any;
            }
            return this.pack(ConsoleConst.warnStyle, any);
        }
        static packError(...any) {
            if (_MainConfig.OnLine) {
                return any;
            }
            return this.pack(ConsoleConst.errorStyle, any);
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class InstanceT {
        static DecorateInstance(_ifPassive = true) {
            return function (target) {
                if (_ifPassive) {
                    Object.defineProperty(target, InstanceT.InstanceName, {
                        get: function () {
                            if (!target[InstanceT.InstanceKey]) {
                                target[InstanceT.InstanceKey] = new target();
                            }
                            return target[InstanceT.InstanceKey];
                        }
                    });
                }
                else {
                    target[InstanceT.InstanceName] = new target();
                }
            };
        }
    }
    InstanceT.InstanceKey = Symbol();
    InstanceT.InstanceName = 'instance';

    class Md5 {
        constructor() {
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start();
        }
        static hashStr(str, raw = false) {
            return this.onePassHasher
                .start()
                .appendStr(str)
                .end(raw);
        }
        static hashAsciiStr(str, raw = false) {
            return this.onePassHasher
                .start()
                .appendAsciiStr(str)
                .end(raw);
        }
        static _hex(x) {
            const hc = Md5.hexChars;
            const ho = Md5.hexOut;
            let n;
            let offset;
            let j;
            let i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                }
            }
            return ho.join('');
        }
        static _md5cycle(x, k) {
            let a = x[0];
            let b = x[1];
            let c = x[2];
            let d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        }
        start() {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this;
        }
        appendStr(str) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let code;
            let i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code;
                }
                else if (code < 0x800) {
                    buf8[bufLen++] = (code >>> 6) + 0xC0;
                    buf8[bufLen++] = code & 0x3F | 0x80;
                }
                else if (code < 0xD800 || code > 0xDBFF) {
                    buf8[bufLen++] = (code >>> 12) + 0xE0;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                else {
                    code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                    if (code > 0x10FFFF) {
                        throw new Error('Unicode standard supports code points up to U+10FFFF');
                    }
                    buf8[bufLen++] = (code >>> 18) + 0xF0;
                    buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16];
                }
            }
            this._bufferLength = bufLen;
            return this;
        }
        appendAsciiStr(str) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let i;
            let j = 0;
            for (;;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++);
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        }
        appendByteArray(input) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let i;
            let j = 0;
            for (;;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++];
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        }
        getState() {
            const self = this;
            const s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            };
        }
        setState(state) {
            const buf = state.buffer;
            const x = state.state;
            const s = this._state;
            let i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i);
            }
        }
        end(raw = false) {
            const bufLen = this._bufferLength;
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            const i = (bufLen >> 2) + 1;
            let dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 0x80;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity);
            }
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 0xFFFFFFFF) {
                buf32[14] = dataBitsLen;
            }
            else {
                const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return;
                }
                const lo = parseInt(matches[2], 16);
                const hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi;
            }
            Md5._md5cycle(this._state, buf32);
            return raw ? this._state : Md5._hex(this._state);
        }
    }
    Md5.ifUse = true;
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    Md5.onePassHasher = new Md5();
    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        Md5.ifUse = false;
        console.warn('Md5 self test failed.');
    }

    class BaseDataProxy {
        constructor() {
            this.m_ifSetProxy = true;
        }
        get ifSetProxy() {
            return this.m_ifSetProxy;
        }
        get objectProxyT() {
            return this.m_objectProxyT;
        }
        get data() {
            return this.m_data;
        }
        getNewData() {
            if (!this.dataTemplate) {
                console.error(...ConsoleEx.packError('没有找到数据模板！请使用数据模板装饰器装饰该类', this.constructor.name));
                return {};
            }
            return new this.dataTemplate();
        }
    }

    class ObjectProxyT {
        constructor() {
            this.m_monitorList = [];
        }
        addMonitor(_this, _back, _obj, _key) {
            this.m_monitorList.push({
                _this,
                _back,
                _obj,
                _key: _key,
            });
        }
        clearMonitor(_this, _back) {
            this.m_monitorList = this.m_monitorList.filter((item) => {
                return !(item._this == _this
                    && _back ? item._back == _back : true);
            });
        }
        setProxy(_o) {
            return this._setProxy(_o);
        }
        _setProxy(_o) {
            if (typeof _o == "function" || typeof _o != "object" || !_o) {
                return _o;
            }
            if (!_o[Symbol.iterator]) {
                for (let _i in _o) {
                    _o[_i] = this._setProxy(_o[_i]);
                }
            }
            let _this = this;
            return new Proxy(_o, {
                set(trapTarget, key, value, receiver) {
                    let _if = Reflect.set(trapTarget, key, value, receiver);
                    if (_if) {
                        if (!(Array.isArray(trapTarget) && key == 'length')) {
                            _this.proxySet(trapTarget, key, value, receiver);
                        }
                    }
                    return _if;
                },
                get(trapTarget, key, receiver) {
                    return Reflect.get(trapTarget, key, receiver);
                },
            });
        }
        proxySet(trapTarget, key, value, receiver) {
            let _arguments = arguments;
            this.m_monitorList.forEach((item) => {
                if (item._obj && item._obj != receiver) {
                    return;
                }
                if (item._key && item._key != key) {
                    return;
                }
                item._back.call(item._this, ..._arguments);
            });
        }
    }

    class BaseLocalDataProxy extends BaseDataProxy {
        constructor() {
            super(...arguments);
            this._ifDifferData = true;
            this.m_saveToDiskQueue = 0;
            this.m_saveToDiskTime = 0;
        }
        get _saveName() {
            return this.constructor.name;
        }
        get saveName() {
            return _MainConfig.Name + '-' + this._saveName + '-' + _MainConfig.Versions + (_MainConfig.OnLine ? '^on' : '^test');
        }
        get differName() {
            return this.encrypt(this.saveName + '__verify');
        }
        initData() {
            let _time = Date.now();
            this.m_data = this._readData();
            if (this.m_ifSetProxy) {
                this.m_objectProxyT = new ObjectProxyT();
                this.m_data = this.m_objectProxyT.setProxy(this.m_data);
                this.m_objectProxyT.addMonitor(this, this._dataSetMonitor);
            }
            this._initData();
            _time = Date.now() - _time;
            if (_time > 100) {
                console.warn(...ConsoleEx.packWarn('初始化本地数据时间过长', this.saveName, _time));
            }
        }
        _initData() { }
        _dataSetMonitor() {
            this.save(this.m_data);
        }
        Save(_ifCl = true) {
            this.save(this.m_data, _ifCl);
        }
        save(m_data, _ifCl = true) {
            if (this.m_saveToDiskTime == 0) {
                this.m_saveToDiskTime = Date.now();
            }
            if (!_ifCl) {
                this._save(m_data);
            }
            else {
                this.m_saveToDiskQueue++;
                Promise.resolve().then(() => {
                    this.m_saveToDiskQueue--;
                    if (this.m_saveToDiskQueue == 0) {
                        this._save(m_data);
                    }
                });
            }
        }
        _save(m_data) {
            let json = JSON.stringify(m_data);
            Laya.LocalStorage.setJSON(this.saveName, json);
            if (_MainConfig.OnLine && this._ifDifferData) {
                let _differJson = this.getDifferData(json);
                Laya.LocalStorage.setJSON(this.differName, _differJson);
            }
            let _time = Date.now() - this.m_saveToDiskTime;
            this.m_saveToDiskTime = 0;
            if (_time > 1000) {
                console.warn(...ConsoleEx.packWarn('场景保存时间过长', this.saveName, _time));
            }
        }
        _readData() {
            let readStr = Laya.LocalStorage.getJSON(this.saveName);
            if (_MainConfig.OnLine && this._ifDifferData) {
                let _differ = Laya.LocalStorage.getJSON(this.differName);
                if (this.getDifferData(readStr) != _differ) {
                    return this._saveNewData();
                }
            }
            let _saveData = this.getNewData();
            try {
                if (readStr) {
                    let jsonData = JSON.parse(readStr);
                    for (let key in _saveData) {
                        _saveData[key] = jsonData[key];
                    }
                }
                else {
                    return this._saveNewData();
                }
            }
            catch (_a) {
                return this._saveNewData();
            }
            return _saveData;
        }
        _saveNewData() {
            let m_data = this.getNewData();
            this.save(m_data, false);
            return m_data;
        }
        getDifferData(_string) {
            if (!_string)
                return '';
            return this.encrypt(_string);
        }
        encrypt(_string) {
            let _encryptStr = `LayaMiniGame-${this.saveName}:${_string}`;
            if (Md5.ifUse) {
                return Md5.hashStr(_encryptStr).toString();
            }
            else {
                return 'noEncrypt';
            }
        }
    }

    class DataT {
        static DecorateDataTemplate(_data) {
            return function (target) {
                target.prototype.dataTemplate = _data;
            };
        }
    }

    class BaseData {
    }

    class MainData extends BaseData {
    }

    let MainDataProxy = class MainDataProxy extends BaseLocalDataProxy {
        constructor() { super(); }
    };
    MainDataProxy = __decorate([
        InstanceT.DecorateInstance(),
        DataT.DecorateDataTemplate(MainData),
        __metadata("design:paramtypes", [])
    ], MainDataProxy);

    class SetData extends BaseData {
        constructor() {
            super(...arguments);
            this.ifOpenSound = true;
            this.ifOpenMusic = true;
            this.ifOpenVibration = true;
        }
    }

    let SetDataProxy = class SetDataProxy extends BaseLocalDataProxy {
        constructor() { super(); }
    };
    SetDataProxy = __decorate([
        InstanceT.DecorateInstance(),
        DataT.DecorateDataTemplate(SetData),
        __metadata("design:paramtypes", [])
    ], SetDataProxy);

    class BaseShortDataProxy extends BaseDataProxy {
        constructor() {
            super(...arguments);
            this.m_ifSetProxy = false;
        }
        initData() {
            this.m_data = this.getNewData();
            if (this.m_ifSetProxy) {
                this.m_objectProxyT = new ObjectProxyT();
                this.m_data = this.m_objectProxyT.setProxy(this.m_data);
            }
            this._initData();
        }
        _initData() { }
    }

    class ShortData extends BaseData {
    }

    let ShortDataProxy = class ShortDataProxy extends BaseShortDataProxy {
        constructor() { super(); }
    };
    ShortDataProxy = __decorate([
        InstanceT.DecorateInstance(),
        DataT.DecorateDataTemplate(ShortData),
        __metadata("design:paramtypes", [])
    ], ShortDataProxy);
    var ShortDataProxy$1 = ShortDataProxy;

    class SignData extends BaseData {
    }

    let SignDataProxy = class SignDataProxy extends BaseLocalDataProxy {
        constructor() { super(); }
    };
    SignDataProxy = __decorate([
        InstanceT.DecorateInstance(),
        DataT.DecorateDataTemplate(SignData),
        __metadata("design:paramtypes", [])
    ], SignDataProxy);

    class TestData extends BaseData {
        constructor() {
            super(...arguments);
            this.number = 0;
            this.string = 'string';
            this.boolean = true;
            this.array = [];
            this.object = {
                a: 1,
                b: 'b',
                c: true,
            };
        }
    }

    let TestDataProxy = class TestDataProxy extends BaseLocalDataProxy {
        constructor() { super(); }
        _initData() {
        }
    };
    TestDataProxy = __decorate([
        InstanceT.DecorateInstance(),
        DataT.DecorateDataTemplate(TestData),
        __metadata("design:paramtypes", [])
    ], TestDataProxy);

    let DataManager = class DataManager {
        constructor() { }
        init() {
            TestDataProxy.instance.initData();
            MainDataProxy.instance.initData();
            SetDataProxy.instance.initData();
            SignDataProxy.instance.initData();
            ShortDataProxy$1.instance.initData();
        }
    };
    DataManager = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], DataManager);
    var DataManager$1 = DataManager;

    class GameCommonBinder {
        static bindAll() {
        }
    }

    class FGUI_PGameSet extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameSet"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGameSet.URL = "ui://kk7g5mmm6vcq4u";

    class FGUI_PGamePause extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGamePause"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGamePause.URL = "ui://kk7g5mmm6vcq5g";

    class FGUI_PGameCustomsLoading extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameCustomsLoading"));
        }
        onConstruct() {
            this.m_shade = (this.getChildAt(0));
            this.m_text = (this.getChildAt(1));
            this.m_progress = (this.getChildAt(2));
        }
    }
    FGUI_PGameCustomsLoading.URL = "ui://kk7g5mmmdbmi13";

    class FGUI_PGameLoading extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameLoading"));
        }
        onConstruct() {
            this.m_shade = (this.getChildAt(0));
            this.m_text = (this.getChildAt(1));
            this.m_progress = (this.getChildAt(2));
        }
    }
    FGUI_PGameLoading.URL = "ui://kk7g5mmmg7a1o";

    class FGUI_PGamePlay extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGamePlay"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGamePlay.URL = "ui://kk7g5mmmg7a1r";

    class FGUI_PGameStart extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameStart"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGameStart.URL = "ui://kk7g5mmmg7a1v";

    class FGUI_PGameTestUI extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameTestUI"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
        }
    }
    FGUI_PGameTestUI.URL = "ui://kk7g5mmmh66e9z";

    class FGUI_PGameEnd extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameEnd"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGameEnd.URL = "ui://kk7g5mmmlaxd19";

    class FGUI_PGameTestMain extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameTestMain"));
        }
        onConstruct() {
            this.m_UIButton = (this.getChildAt(0));
            this.m_UI = (this.getChildAt(1));
            this.m_test = (this.getChildAt(3));
            this.m_testText = (this.getChildAt(4));
            this.m_dataTest = (this.getChildAt(6));
            this.m_dataTestText = (this.getChildAt(7));
            this.m__test = (this.getChildAt(9));
        }
    }
    FGUI_PGameTestMain.URL = "ui://kk7g5mmmo9js9x";

    class FGUI_PGameCom extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameCom"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGameCom.URL = "ui://kk7g5mmmq3ng9w";

    class FGUI_PGameMain extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameMain"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_PGameMain.URL = "ui://kk7g5mmmsyta9f";

    class FGUI_PGameTestPlatform extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("GameMain", "PGameTestPlatform"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
            this.m_lookVAd = (this.getChildAt(1));
            this.m_lookVAdText = (this.getChildAt(2));
            this.m__lookVAd = (this.getChildAt(3));
            this.m_share = (this.getChildAt(4));
            this.m_shareText = (this.getChildAt(5));
            this.m__share = (this.getChildAt(6));
            this.m_showToast = (this.getChildAt(7));
            this.m_showToastText = (this.getChildAt(8));
            this.m__showToast = (this.getChildAt(9));
        }
    }
    FGUI_PGameTestPlatform.URL = "ui://kk7g5mmmt1pw9y";

    class GameMainBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(FGUI_PGameSet.URL, FGUI_PGameSet);
            fgui.UIObjectFactory.setExtension(FGUI_PGamePause.URL, FGUI_PGamePause);
            fgui.UIObjectFactory.setExtension(FGUI_PGameCustomsLoading.URL, FGUI_PGameCustomsLoading);
            fgui.UIObjectFactory.setExtension(FGUI_PGameLoading.URL, FGUI_PGameLoading);
            fgui.UIObjectFactory.setExtension(FGUI_PGamePlay.URL, FGUI_PGamePlay);
            fgui.UIObjectFactory.setExtension(FGUI_PGameStart.URL, FGUI_PGameStart);
            fgui.UIObjectFactory.setExtension(FGUI_PGameTestUI.URL, FGUI_PGameTestUI);
            fgui.UIObjectFactory.setExtension(FGUI_PGameEnd.URL, FGUI_PGameEnd);
            fgui.UIObjectFactory.setExtension(FGUI_PGameTestMain.URL, FGUI_PGameTestMain);
            fgui.UIObjectFactory.setExtension(FGUI_PGameCom.URL, FGUI_PGameCom);
            fgui.UIObjectFactory.setExtension(FGUI_PGameMain.URL, FGUI_PGameMain);
            fgui.UIObjectFactory.setExtension(FGUI_PGameTestPlatform.URL, FGUI_PGameTestPlatform);
        }
    }

    class FGUI_EmptyScreenUI extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("InitEmptyScreen", "EmptyScreenUI"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
        }
    }
    FGUI_EmptyScreenUI.URL = "ui://7ktzib8oq3ng0";

    class InitEmptyScreenBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(FGUI_EmptyScreenUI.URL, FGUI_EmptyScreenUI);
        }
    }

    class FGUI_initLoadUI extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("InitLoad", "initLoadUI"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
            this.m_progress = (this.getChildAt(1));
            this.m_loading_progress = (this.getChildAt(2));
            this.m_text_logo = (this.getChildAt(3));
            this.m_text_progress = (this.getChildAt(4));
            this.m_text_laya = (this.getChildAt(5));
            this.m_text_explain = (this.getChildAt(6));
            this.m_text_v = (this.getChildAt(7));
            this.m_text_laya_v = (this.getChildAt(8));
            this.m_text_game_explain = (this.getChildAt(9));
        }
    }
    FGUI_initLoadUI.URL = "ui://n3oedpp6nihr0";

    class InitLoadBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(FGUI_initLoadUI.URL, FGUI_initLoadUI);
        }
    }

    class FGUI_TestMain extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("_Test", "TestMain"));
        }
        onConstruct() {
            this.m_text = (this.getChildAt(0));
        }
    }
    FGUI_TestMain.URL = "ui://hxu4zc9dioo80";

    class _TestBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(FGUI_TestMain.URL, FGUI_TestMain);
        }
    }

    var EKeyResName;
    (function (EKeyResName) {
        EKeyResName["RootRes"] = "res";
        EKeyResName["ConfigJson"] = "ConfigJson";
        EKeyResName["Font"] = "Font";
        EKeyResName["FGUI"] = "FGUI";
        EKeyResName["SceneJson"] = "SceneJson";
        EKeyResName["Other"] = "Other";
        EKeyResName["icon"] = "icon";
        EKeyResName["img"] = "img";
        EKeyResName["music"] = "music";
        EKeyResName["sound"] = "sound";
        EKeyResName["skin"] = "skin";
    })(EKeyResName || (EKeyResName = {}));

    let KeyResManager = class KeyResManager {
        constructor() {
            this.m_KeyResList = {};
            this.m_KeyResList = {
                [EKeyResName.RootRes]: EKeyResName.RootRes + '/',
                [EKeyResName.ConfigJson]: EKeyResName.RootRes + '/' + EKeyResName.ConfigJson + '/',
                [EKeyResName.FGUI]: EKeyResName.RootRes + '/' + EKeyResName.FGUI + '/',
                [EKeyResName.SceneJson]: EKeyResName.RootRes + '/' + EKeyResName.SceneJson + '/',
                [EKeyResName.Font]: EKeyResName.RootRes + '/' + EKeyResName.Font + '/',
                [EKeyResName.Other]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/',
                [EKeyResName.icon]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.icon + '/',
                [EKeyResName.img]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.img + '/',
                [EKeyResName.music]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.music + '/',
                [EKeyResName.sound]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.sound + '/',
                [EKeyResName.skin]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.skin + '/',
            };
        }
        ;
        static ifKeyRes(_key) {
            return Object.keys(this.instance.m_KeyResList).findIndex((item) => {
                return item == _key;
            }) != -1;
        }
        static getResURL(_key) {
            return this.instance.m_KeyResList[_key];
        }
        static addResUrl(_key, _string) {
            this.instance.m_KeyResList[_key] = _string;
        }
        static editKeyResList(_key, _str) {
            let _replace = this.instance.m_KeyResList[_key];
            if (typeof _replace == "undefined") {
                console.warn(...ConsoleEx.packWarn('修改资源路径失败，没有' + _key + '这个关键路径！'));
                return;
            }
            for (let _i in this.instance.m_KeyResList) {
                this.instance.m_KeyResList[_i] = this.instance.m_KeyResList[_i].replace(_replace, _str);
            }
            console.log(...ConsoleEx.packLog('修改关键点资源路径', _replace, '替换成', _str));
        }
    };
    KeyResManager = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], KeyResManager);
    var KeyResManager$1 = KeyResManager;

    class EssentialResUrls {
        static SceneConfigURL(_name) {
            return KeyResManager$1.getResURL(EKeyResName.SceneJson) + _name + '.json';
        }
        static ConfigJsonURL(_name) {
            return KeyResManager$1.getResURL(EKeyResName.ConfigJson) + _name;
        }
        static FGUIPackURL(_name) {
            return KeyResManager$1.getResURL(EKeyResName.FGUI) + _name;
        }
        static FontURL(_name) {
            return KeyResManager$1.getResURL(EKeyResName.Font) + _name;
        }
        static PrefabURL(prefab) {
            if (this._prefabsSceneCache[prefab]) {
                return KeyResManager$1.getResURL(this._prefabsSceneCache[prefab]) + 'Conventional/' + prefab + '.lh';
            }
            for (let _i in this._AllScenePrefabsNames) {
                if (this._AllScenePrefabsNames[_i].indexOf('@' + prefab + '@') != -1) {
                    this._prefabsSceneCache[prefab] = _i;
                    return KeyResManager$1.getResURL(_i) + 'Conventional/' + prefab + '.lh';
                }
            }
            console.error(...ConsoleEx.packError('没有在场景找到预制体', prefab, '可能是没有导出场景预制体列表导致的。'));
        }
        static setPrefabSceneNames(_o) {
            for (let _i in _o) {
                this._AllScenePrefabsNames[_i] = _o[_i];
            }
        }
    }
    EssentialResUrls._AllScenePrefabsNames = {};
    EssentialResUrls._prefabsSceneCache = {};

    class ResLoad {
        static Load(urls, model, onCompleted, _onProgress) {
            if (Array.isArray(urls)) {
                urls = urls.filter(Boolean);
            }
            if (!urls || (Array.isArray(urls) && urls.length == 0)) {
                onCompleted.run();
                if (_onProgress) {
                    _onProgress.args = [1];
                    _onProgress.run();
                }
                return;
            }
            switch (model) {
                case EResLoadModel.D3:
                    Laya.loader.create(urls, onCompleted, _onProgress);
                    break;
                case EResLoadModel.D2:
                    Laya.loader.load(urls, onCompleted, _onProgress);
                    break;
            }
        }
        static Load3D(urls, onCompleted, _onProgress) {
            this.Load(urls, EResLoadModel.D3, onCompleted, _onProgress);
        }
        static Load2D(urls, onCompleted, _onProgress) {
            this.Load(urls, EResLoadModel.D2, onCompleted, _onProgress);
        }
        static Load3DAsync(urls, _onProgress) {
            return new Promise((resolve) => {
                ResLoad.Load3D(urls, Laya.Handler.create(null, () => {
                    resolve();
                }), _onProgress);
            });
        }
        static Load2DAsync(urls, _onProgress) {
            return new Promise(function (resolve) {
                ResLoad.Load2D(urls, Laya.Handler.create(null, () => {
                    resolve();
                }), _onProgress);
            });
        }
        static GetRes(resUrl, noClone = false) {
            let getRes = Laya.loader.getRes(resUrl);
            if (!getRes) {
                console.error(...ConsoleEx.packError("资源尚未加载", resUrl));
                return;
            }
            return noClone ? getRes : getRes.clone();
        }
        static ClearRes(resUrl) {
            Laya.loader.clearRes(resUrl);
        }
    }
    var EResLoadModel;
    (function (EResLoadModel) {
        EResLoadModel[EResLoadModel["D3"] = 0] = "D3";
        EResLoadModel[EResLoadModel["D2"] = 1] = "D2";
    })(EResLoadModel || (EResLoadModel = {}));

    class ConfigT {
        static DecorateConfigProxy(_config) {
            return function (target) {
                target.prototype.configTemplate = _config;
            };
        }
        static BuildConfigs(_configs) {
            let _url;
            for (let _o of _configs) {
                _url = EssentialResUrls.ConfigJsonURL(_o.fileName);
                switch (_o.type) {
                    case 'config':
                        _o.datas = this.getConfigJsonData(_url);
                        break;
                    case 'const':
                        _o.data = this.getConfigJsonData(_url);
                        break;
                }
            }
        }
        static getConfigJsonData(_url) {
            let configData = ResLoad.GetRes(_url, true);
            ResLoad.ClearRes(_url);
            if (configData.zip) {
                let _time = Date.now();
                configData.data = JSON.parse(pako.inflate(configData.data, { to: 'string' }));
                _time = Date.now() - _time;
                if (_time > 500) {
                    console.warn(...ConsoleEx.packWarn('配置表解压时间过长，可能是配置表文件过大->', _url));
                }
            }
            return configData.data;
        }
    }

    class _ConstConfig {
    }
    _ConstConfig.FGUI = {
        packageFileExtension: 'bin',
    };

    class FGUIPack {
        constructor(_packUrl, _atliasCount = -1) {
            this.packPath = _packUrl;
            this.atliasCount = _atliasCount;
        }
        asyncLoad(_onProgress) {
            let _urls = [];
            this.getResURL(_urls);
            return ResLoad.Load2DAsync(_urls, _onProgress);
        }
        getResURL(urls) {
            urls.push({ url: this.packPath + '.' + _ConstConfig.FGUI.packageFileExtension, type: Laya.Loader.BUFFER });
            if (this.atliasCount >= 0) {
                urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
                for (let i = 1; i <= this.atliasCount; i++) {
                    urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
                }
            }
        }
    }

    class ResLoadGroup {
        static load(items, onCompleted, _onProgress, _onItemCom) {
            if (items.length == 0) {
                onCompleted.run();
                if (_onProgress) {
                    _onProgress.args = [1];
                    _onProgress.run();
                }
                return;
            }
            items = [...items];
            let _length = items.length;
            let _f = () => {
                if (items.length > 0) {
                    let onItem = items.shift();
                    onItem.loadAsync(Laya.Handler.create(this, (i) => {
                        _onProgress.args = [
                            ((_length - items.length - 1) + i) / _length
                        ];
                        _onProgress.run();
                    })).then(() => {
                        _onItemCom.args = [onItem];
                        _onItemCom.run();
                        _f();
                    });
                }
                else {
                    onCompleted.run();
                }
            };
            _f();
        }
        static loadAsync(items, _onProgress, _onItemCom) {
            return new Promise((r) => {
                this.load(items, Laya.Handler.create(this, () => {
                    r();
                }), _onProgress, _onItemCom);
            });
        }
    }

    class BaseInitLoad {
        constructor() {
            this.init();
            this._init();
        }
        _init() {
            this.loadBefore();
        }
        load(_comBack) {
            console.log(...ConsoleEx.packCom('开始加载游戏初始化资源'));
            let _resLoadItems = this.getLoadItems();
            ResLoadGroup.loadAsync(_resLoadItems, Laya.Handler.create(this, (i) => {
                this.loadPlan(i);
            }, undefined, false), Laya.Handler.create(this, this.loadItemsCom, undefined, false))
                .then(() => {
                console.log(...ConsoleEx.packCom('游戏加载完成'));
                this.loadCom();
                _comBack && _comBack.run();
            });
        }
        init() { }
        loadBefore() { }
        getLoadItems() {
            return [];
        }
        loadPlan(_i) { }
        loadItemsCom(_resLoad) { }
        loadCom() { }
    }

    class ComResUrl {
        static MusicURL(name, _ = '.mp3') {
            return KeyResManager$1.getResURL(EKeyResName.music) + name + _;
        }
        static SoundURL(name, _ = '.mp3') {
            return KeyResManager$1.getResURL(EKeyResName.sound) + name + _;
        }
        static IconURL(name, _ = '.png') {
            return KeyResManager$1.getResURL(EKeyResName.icon) + name + _;
        }
        static ImgURL(name, _ = 'png') {
            return KeyResManager$1.getResURL(EKeyResName.img) + name + '.' + _;
        }
        static SkinURL(name, _ = 'png') {
            return KeyResManager$1.getResURL(EKeyResName.skin) + name + '.' + _;
        }
    }

    class ResLoadItem {
        constructor(_res, _mode, _key, _comBack, _onProgress) {
            this.m_res = _res;
            this.m_loadModel = _mode;
            this.m_key = _key;
            this.m_comBack = _comBack;
            this.m_onProgress = _onProgress;
        }
        get key() {
            return this.m_key;
        }
        load(onCompleted, _onProgress) {
            let __onProgress = _onProgress;
            if (__onProgress && this.m_onProgress) {
                __onProgress = Laya.Handler.create(this, (i) => {
                    _onProgress.args = [i];
                    _onProgress.run();
                    this.m_onProgress.args = [i];
                    this.m_onProgress.run();
                }, undefined, false);
            }
            else if (this.m_onProgress) {
                __onProgress = this.m_onProgress;
            }
            if (this.m_comBack) {
                if (!onCompleted) {
                    ResLoad.Load(this.m_res, this.m_loadModel, this.m_comBack, __onProgress);
                }
                else {
                    ResLoad.Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                        this.m_comBack.run();
                        onCompleted.run();
                    }), __onProgress);
                }
            }
            else {
                ResLoad.Load(this.m_res, this.m_loadModel, onCompleted, __onProgress);
            }
        }
        loadAsync(_onProgress) {
            return new Promise((r) => {
                this.load(Laya.Handler.create(this, () => {
                    r();
                }), _onProgress);
            });
        }
    }

    var EFont;
    (function (EFont) {
        EFont["null"] = "";
    })(EFont || (EFont = {}));

    var EMusics;
    (function (EMusics) {
        EMusics["null"] = "";
    })(EMusics || (EMusics = {}));

    var ESounds;
    (function (ESounds) {
        ESounds["null"] = "";
    })(ESounds || (ESounds = {}));

    var EUILayer;
    (function (EUILayer) {
        EUILayer["Bg"] = "Bg";
        EUILayer["Main"] = "Main";
        EUILayer["Panel"] = "Panel";
        EUILayer["Popup"] = "Popup";
        EUILayer["Prop"] = "Prop";
        EUILayer["Tip"] = "Tip";
        EUILayer["Pause"] = "Pause";
        EUILayer["Set"] = "Set";
        EUILayer["Top"] = "Top";
        EUILayer["Loading"] = "Loading";
        EUILayer["Native"] = "Native";
    })(EUILayer || (EUILayer = {}));

    class FGUIRootManager {
        static getLayerUI(layerType) {
            return this.layerUIList[layerType];
        }
        static init() {
            fgui.UIConfig.packageFileExtension = _ConstConfig.FGUI.packageFileExtension;
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            this.layerUIList = {};
            for (let _i in EUILayer) {
                this.layerUIList[EUILayer[_i]] = fgui.GRoot.inst.addChild(new fgui.GComponent());
            }
        }
    }

    class FGUIT {
        static setUILayer(_ui, _layer) {
            _ui[this.UILayerKey] = _layer;
        }
        static getUILayer(_ui) {
            return _ui[this.UILayerKey];
        }
        static setUITopShow(_ui) {
            let _sortingOrder = _ui.sortingOrder;
            let _parentUI = _ui.parent;
            for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
                _sortingOrder = Math.max(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
            }
            _ui.sortingOrder = _sortingOrder + 1;
        }
        static setUIDownShow(_ui) {
            let _sortingOrder = _ui.sortingOrder;
            let _parentUI = _ui.parent;
            for (let _i = 0, length = _parentUI.numChildren; _i < length; _i++) {
                _sortingOrder = Math.min(_sortingOrder, _parentUI.getChildAt(_i).sortingOrder);
            }
            _ui.sortingOrder = _sortingOrder - 1;
        }
    }
    FGUIT.UILayerKey = Symbol('UILayer');

    class RootUICon {
    }

    class BaseUICon extends RootUICon {
        constructor() {
            super(...arguments);
            this.m_key = Symbol();
            this._ifClear = true;
            this._layer = EUILayer.Panel;
            this.m_ifShow = false;
            this.m_proxyUIList = new Set();
        }
        get key() {
            return this.m_key;
        }
        get rootUI() {
            return this.m_rootUI;
        }
        get layer() {
            return this._layer;
        }
        get ifShow() {
            return this.m_ifShow;
        }
        addUIProxy(_proxy) {
            this.m_proxyUIList.add(_proxy);
        }
        removeUIProxy(_proxy) {
            this.m_proxyUIList.delete(_proxy);
        }
        showUIProxy() {
            this.m_proxyUIList.forEach((item) => {
                item.Show();
            });
        }
        hideUIProxy() {
            this.m_proxyUIList.forEach((item) => {
                item.Hide();
            });
        }
        endUIProxy() {
            this.m_proxyUIList.forEach((item) => {
                item.endProxy();
            });
        }
        createUI() {
            this._createUIBeforeEx();
            if (!this._UIs) {
                console.error(...ConsoleEx.packError('没有找到ui创建器列表!'));
            }
            this.m_rootUI = new fgui.GComponent();
            FGUIRootManager.getLayerUI(this._layer).addChild(this.m_rootUI);
            for (let _i in this._UIs) {
                this._UIs[_i].ui = this.m_rootUI.addChild(this._UIs[_i].uiCreate.createInstance());
            }
            this._createUIEX();
            this._createUI();
        }
        _createUIBeforeEx() { }
        _createUIEX() { }
        _createUI() { }
        getUI(_name) {
            return this._UIs[_name].ui;
        }
        Show(...par) {
            if (this.m_ifShow) {
                return;
            }
            this.m_ifShow = true;
            this._onShowBefore(...par);
            let _ifNew = false;
            if (!this.m_rootUI || this.m_rootUI.isDisposed) {
                this.createUI();
                _ifNew = true;
            }
            if (!this.m_rootUI.visible) {
                this.m_rootUI.visible = true;
            }
            FGUIT.setUITopShow(this.m_rootUI);
            this.updateSize();
            Laya.stage.on(Laya.Event.RESIZE, this, this.updateSize);
            this._onShow(_ifNew, ...par);
        }
        _onShowBefore(...par) { }
        _onShow(_ifNew, ...par) { }
        Hide(_ifClear = this._ifClear, ...par) {
            if (!this.m_ifShow) {
                return;
            }
            this.m_ifShow = false;
            this._onHideBefore(par);
            if (_ifClear) {
                this.m_rootUI.dispose();
                for (let _i in this._UIs) {
                    this._UIs[_i].ui = null;
                }
                this._disposeUI();
            }
            else {
                this.m_rootUI.visible = false;
            }
            Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize);
            this._onHide(_ifClear, par);
        }
        _disposeUI() { }
        _onHideBefore(...par) { }
        _onHide(_ifDelete, ...par) { }
        updateSize() {
            let _data;
            let _width = Laya.stage.width;
            let _height = Laya.stage.height;
            for (let _i in this._UIs) {
                _data = this._UIs[_i].data;
                if (!_data || !_data.ifUpdate) {
                    this._UIs[_i].ui.setSize(_width, _height);
                    this._UIs[_i].ui.setXY(0, 0);
                    continue;
                }
                this._UIs[_i].ui.setSize(_width - _data.left - _data.right, _height - _data.bottom - _data.top);
                this._UIs[_i].ui.setXY(_data.left, _data.top);
            }
        }
    }

    class BaseSingleUICon extends BaseUICon {
        get ui() {
            return this.m_ui;
        }
        _createUIBeforeEx() {
            if (!this._UIs) {
                this._UIs = {
                    default: {
                        uiCreate: this._UI,
                    },
                };
            }
        }
        _createUIEX() {
            this.m_ui = this._UIs.default.ui;
        }
    }

    class InitEmptyScreenUICon extends BaseSingleUICon {
        constructor() {
            super(...arguments);
            this._UI = FGUI_EmptyScreenUI;
        }
    }

    class InitLoadUICon extends BaseSingleUICon {
        constructor() {
            super(...arguments);
            this._UI = FGUI_initLoadUI;
        }
        _OnShow() {
            this.ui.m_text_logo.text = _MainConfig.ZHName;
            this.ui.m_text_v.text = _MainConfig.Versions;
            this.ui.m_text_game_explain.text = _MainConfig.Explain;
            this.ui.m_text_explain.text = _MainConfig.Team;
            this.ui.m_text_laya_v.text = Laya.version;
        }
        setPlan(_i) {
            _i *= 100;
            this.ui.m_progress.value = _i;
            this.ui.m_loading_progress.text = Math.floor(_i) + ' %';
        }
    }

    var _SceneNodeConfig;
    (function (_SceneNodeConfig) {
        _SceneNodeConfig.type = 'config';
        class DataType {
        }
        _SceneNodeConfig.DataType = DataType;
        _SceneNodeConfig.datas = [];
        _SceneNodeConfig.fileName = 'SceneNodeConfig.json';
    })(_SceneNodeConfig || (_SceneNodeConfig = {}));

    var _TestConfig;
    (function (_TestConfig) {
        _TestConfig.type = 'config';
        class DataType {
        }
        _TestConfig.DataType = DataType;
        _TestConfig.datas = [];
        _TestConfig.fileName = 'TestConfig.json';
    })(_TestConfig || (_TestConfig = {}));

    var _TestConst;
    (function (_TestConst) {
        _TestConst.type = 'const';
        class DataType {
        }
        _TestConst.DataType = DataType;
        _TestConst.data = null;
        _TestConst.fileName = 'TestConst.json';
    })(_TestConst || (_TestConst = {}));

    class BuildConfigTs {
        static getAllConfig() {
            let configs = [];
            configs.push(_SceneNodeConfig);
            configs.push(_TestConfig);
            configs.push(_TestConst);
            return configs;
        }
    }

    var _EAllScenePrefabsNames;
    (function (_EAllScenePrefabsNames) {
        _EAllScenePrefabsNames["Prefab"] = "@Cube@@Sphere@";
    })(_EAllScenePrefabsNames || (_EAllScenePrefabsNames = {}));

    var _EAllExportSceneName;
    (function (_EAllExportSceneName) {
        _EAllExportSceneName["Scene"] = "Scene";
    })(_EAllExportSceneName || (_EAllExportSceneName = {}));

    class GameInitLoad extends BaseInitLoad {
        init() {
            this.m_initEmptyScreenUICon = new InitEmptyScreenUICon();
            this.m_initLoadUICon = new InitLoadUICon();
        }
        loadBefore() {
            for (let _i in _EAllScenePrefabsNames) {
                KeyResManager$1.addResUrl(_i, KeyResManager$1.getResURL(EKeyResName.RootRes) + `${_i}/`);
            }
            EssentialResUrls.setPrefabSceneNames(_EAllScenePrefabsNames);
        }
        getLoadItems() {
            let _loadItems = [];
            this.immitFGUiLoadItems(_loadItems);
            this.immitConfigLoadItems(_loadItems);
            this.immitOtherLoadItems(_loadItems);
            return _loadItems;
        }
        immitFGUiLoadItems(_loadItems) {
            this.FGUIBinder();
            _loadItems.push(this.getFGUILoadItems('InitEmptyScreen', undefined, Laya.Handler.create(this, this.initEmptyScreen)));
            _loadItems.push(this.getFGUILoadItems('InitLoad', 0, Laya.Handler.create(this, this.initLoad)));
            _loadItems.push(this.getFGUILoadItems('GameBag'));
            _loadItems.push(this.getFGUILoadItems('GameCommon'));
            _loadItems.push(this.getFGUILoadItems('_Test'));
            _loadItems.push(this.getFGUILoadItems('GameMain', 0));
        }
        FGUIBinder() {
            InitEmptyScreenBinder.bindAll();
            InitLoadBinder.bindAll();
            GameCommonBinder.bindAll();
            _TestBinder.bindAll();
            GameMainBinder.bindAll();
        }
        getFGUILoadItems(_name, _atliasCount, _comBack) {
            let _fguiRes = [];
            new FGUIPack(EssentialResUrls.FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
            return new ResLoadItem(_fguiRes, EResLoadModel.D2, _name, Laya.Handler.create(this, () => {
                this.addFGUIPackage(_name);
                _comBack && _comBack.run();
            }));
        }
        addFGUIPackage(_name) {
            fgui.UIPackage.addPackage(EssentialResUrls.FGUIPackURL(_name));
        }
        immitConfigLoadItems(_loadItems) {
            let _configRes = BuildConfigTs.getAllConfig().map((item) => {
                return EssentialResUrls.ConfigJsonURL(item.fileName);
            });
            let sceneJsonRes = [];
            for (let _i in _EAllExportSceneName) {
                sceneJsonRes.push(EssentialResUrls.SceneConfigURL(_EAllExportSceneName[_i]));
            }
            _loadItems.push(new ResLoadItem([..._configRes, ...sceneJsonRes], EResLoadModel.D2, 'config', Laya.Handler.create(this, () => {
                ConfigT.BuildConfigs(BuildConfigTs.getAllConfig());
                console.log(...ConsoleEx.packLogLight('所有配置表内容：', BuildConfigTs.getAllConfig()));
            }), Laya.Handler.create(this, (i) => {
            }, undefined, false)));
        }
        immitOtherLoadItems(_loadItems) {
            let _audios = [];
            for (let _i in EMusics) {
                EMusics[_i] && _audios.push(ComResUrl.MusicURL(EMusics[_i]));
            }
            for (let _i in ESounds) {
                ESounds[_i] && _audios.push(ComResUrl.SoundURL(ESounds[_i]));
            }
            _loadItems.push(new ResLoadItem(_audios, EResLoadModel.D2, 'audio', Laya.Handler.create(this, () => {
                console.log('所有音效资源：', _audios);
            })));
            let _font = [];
            for (let _i in EFont) {
                EFont[_i] && _font.push(EssentialResUrls.FontURL(EFont[_i]));
            }
            _loadItems.push(new ResLoadItem(_font, EResLoadModel.D2, 'font', Laya.Handler.create(this, () => {
                console.log('所有字体资源：', _font);
            })));
        }
        initEmptyScreen() {
            this.m_initEmptyScreenUICon.Show();
        }
        initLoad() {
            this.m_initEmptyScreenUICon.Hide();
            this.m_initEmptyScreenUICon = null;
            this.m_initLoadUICon.Show();
        }
        loadPlan(_i) {
            if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
                this.m_initLoadUICon.setPlan(_i);
            }
        }
        loadItemsCom(_resLoad) {
        }
        loadCom() {
            this.m_initLoadUICon.Hide();
            this.m_initLoadUICon = null;
        }
    }

    var AudioManager_1;
    let AudioManager = AudioManager_1 = class AudioManager {
        constructor() {
            this.m_onSoundList = new Set();
        }
        init() {
            AudioManager_1.soundMuted = !SetDataProxy.instance.data.ifOpenSound;
            AudioManager_1.musicMuted = !SetDataProxy.instance.data.ifOpenMusic;
        }
        static set muted(value) {
            Laya.SoundManager.muted = value;
        }
        static set soundMuted(value) {
            Laya.SoundManager.soundMuted = value;
        }
        static set musicMuted(value) {
            Laya.SoundManager.musicMuted = value;
        }
        static pauseSound() {
            Laya.SoundManager.stopAllSound();
        }
        static resumeSound() {
            this.instance.m_onSoundList.forEach((item) => {
                item.resume();
            });
        }
        static pauseMusic() {
            Laya.SoundManager.stopMusic();
        }
        static resumeMusic() {
            this.instance.m_onBGM && this.instance.m_onBGM.resume();
        }
        static setSoundVolume(_n = 1, _url) {
            Laya.SoundManager.setSoundVolume(_n, _url);
        }
        static setMusicVolume(_n = 1) {
            Laya.SoundManager.setMusicVolume(_n);
        }
        static playSound(name, loops, complete, soundClass, startTime) {
            if (!name) {
                return;
            }
            let _sound = Laya.SoundManager.playSound(name, loops, complete, soundClass, startTime);
            this.instance.m_onSoundList.add(_sound);
            return _sound;
        }
        static playMusic(name, loops, complete, startTime) {
            if (!name) {
                return;
            }
            let _music = Laya.SoundManager.playMusic(name, loops, complete, startTime);
            this.instance.m_onBGM = _music;
            return _music;
        }
        static stopSound(soundsName) {
            Laya.SoundManager.stopSound(ComResUrl.SoundURL(soundsName));
        }
        static stopMusic(musicName) {
            Laya.SoundManager.stopSound(ComResUrl.MusicURL(musicName));
        }
    };
    AudioManager = AudioManager_1 = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], AudioManager);
    var AudioManager$1 = AudioManager;

    class GamePool {
        static getItem(_sign) {
            if (this.poolList[_sign] && this.poolList[_sign].length > 0) {
                return this.poolList[_sign].pop();
            }
            else {
                switch (_sign) {
                    case EGamePoolSign.v3:
                        return (new Laya.Vector3);
                    case EGamePoolSign.v2:
                        return (new Laya.Vector2);
                }
            }
        }
        static recycleItem(_sign, ..._items) {
            if (!this.poolList[_sign]) {
                this.poolList[_sign] = [];
            }
            for (let _o of _items) {
                if (!this.poolList[_sign].includes(_o)) {
                    this.poolList[_sign].push(_o);
                }
            }
        }
        static getV3() {
            let _v3 = this.getItem(EGamePoolSign.v3);
            _v3.setValue(0, 0, 0);
            return _v3;
        }
        static recycleV3(..._v3s) {
            this.recycleItem(EGamePoolSign.v3, ..._v3s);
        }
        static getV2() {
            let _v2 = this.getItem(EGamePoolSign.v2);
            _v2.setValue(0, 0);
            return _v2;
        }
        static recycleV2(..._v2s) {
            this.recycleItem(EGamePoolSign.v2, ..._v2s);
        }
    }
    GamePool.poolList = {};
    var EGamePoolSign;
    (function (EGamePoolSign) {
        EGamePoolSign[EGamePoolSign["v3"] = 0] = "v3";
        EGamePoolSign[EGamePoolSign["v2"] = 1] = "v2";
    })(EGamePoolSign || (EGamePoolSign = {}));

    class V3Utils {
        static parseVector3(str, _outV3) {
            var strs = str.split(',');
            _outV3.setValue(Number(strs[0]), Number(strs[1]), Number(strs[2]));
        }
        static setV3Length(_v3, _l) {
            let _length = Laya.Vector3.scalarLength(_v3);
            if (_length != 0) {
                let _a = _l / _length;
                _v3.x = _v3.x * _a;
                _v3.y = _v3.y * _a;
                _v3.z = _v3.z * _a;
            }
        }
        static PotLerpMove(_pos, _tragetPot, _lerp, _outV3, _initialLength) {
            if (!_outV3) {
                console.error('必须有一个输出的向量！');
                return;
            }
            let _distance = Laya.Vector3.distance(_pos, _tragetPot);
            Laya.Vector3.lerp(_pos, _tragetPot, _lerp, _outV3);
            return 1 - (_distance / _initialLength);
        }
        static PotConstantSpeedMove(_pos, _tragetPot, _speed, _outV3) {
            if (!_outV3) {
                console.error('必须有一个输出的向量！');
                return;
            }
            let _ifEnd;
            let _differV3 = new Laya.Vector3();
            Laya.Vector3.subtract(_tragetPot, _pos, _differV3);
            let _distance = Laya.Vector3.scalarLength(_differV3);
            if (_distance > _speed) {
                this.setV3Length(_differV3, _speed);
                _ifEnd = false;
            }
            else {
                _ifEnd = true;
            }
            Laya.Vector3.add(_pos, _differV3, _outV3);
            return _ifEnd;
        }
        static RotateV3(_v3, _anger, _axis = this.rotateAxisV3) {
            var q = new Laya.Quaternion();
            Laya.Quaternion.createFromAxisAngle(_axis, (_anger / 180) * Math.PI, q);
            Laya.Vector3.transformQuat(_v3, q, _v3);
        }
    }
    V3Utils.rotateAxisV3 = new Laya.Vector3(0, 1, 0);

    class NodeT {
        static ifPrefabsConfig(_config) {
            return _config.prefabName && true;
        }
        static setNode(_spr, _target) {
            _spr.name = _target.name;
            if (!_target.transform) {
                _spr.transform.localPosition.setValue(0, 0, 0);
                _spr.transform.localRotationEuler.setValue(0, 0, 0);
                _spr.transform.localScale.setValue(1, 1, 1);
            }
            else {
                if (!_target.transform.position) {
                    _spr.transform.localPosition.setValue(0, 0, 0);
                }
                else {
                    V3Utils.parseVector3(_target.transform.position, _spr.transform.localPosition);
                }
                if (!_target.transform.euler) {
                    _spr.transform.localRotationEuler.setValue(0, 0, 0);
                }
                else {
                    V3Utils.parseVector3(_target.transform.euler, _spr.transform.localRotationEuler);
                }
                if (!_target.transform.scale) {
                    _spr.transform.localScale.setValue(1, 1, 1);
                }
                else {
                    V3Utils.parseVector3(_target.transform.scale, _spr.transform.localScale);
                }
            }
            _spr.transform.localPosition = _spr.transform.localPosition;
            _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
            _spr.transform.localScale = _spr.transform.localScale;
            let _prefabConfig = _target;
            if (_prefabConfig.prefabName != "undefined") {
                if (_prefabConfig.prefabDiffer) {
                    this.setDiffer(_spr, _prefabConfig.prefabDiffer);
                }
            }
        }
        static setDiffer(_spr, _differ) {
            let _centreV3 = GamePool.getV3();
            if (_differ.child) {
                for (let _diff of _differ.child) {
                    this.setDiffer(_spr.getChildAt(_diff.index), _diff);
                }
            }
            let _transform = [GamePool.getV3(), GamePool.getV3(), GamePool.getV3()];
            if (_differ._transform) {
                if (_differ._transform.position) {
                    V3Utils.parseVector3(_differ._transform.position, _transform[0]);
                }
                if (_differ._transform.euler) {
                    V3Utils.parseVector3(_differ._transform.euler, _transform[1]);
                }
                if (_differ._transform.scale) {
                    V3Utils.parseVector3(_differ._transform.scale, _transform[2]);
                }
            }
            if (_differ.transform) {
                if (_differ.transform.position) {
                    V3Utils.parseVector3(_differ.transform.position, _centreV3);
                    Laya.Vector3.add(_transform[0], _centreV3, _centreV3);
                    _centreV3.cloneTo(_spr.transform.localPosition);
                    _spr.transform.localPosition = _spr.transform.localPosition;
                }
                if (_differ.transform.euler) {
                    V3Utils.parseVector3(_differ.transform.euler, _centreV3);
                    Laya.Vector3.add(_transform[1], _centreV3, _centreV3);
                    _centreV3.cloneTo(_spr.transform.localRotationEuler);
                    _spr.transform.localRotationEuler = _spr.transform.localRotationEuler;
                }
                if (_differ.transform.scale) {
                    V3Utils.parseVector3(_differ.transform.scale, _centreV3);
                    Laya.Vector3.add(_transform[2], _centreV3, _centreV3);
                    _centreV3.cloneTo(_spr.transform.localScale);
                    _spr.transform.localScale = _spr.transform.localScale;
                }
            }
            GamePool.recycleV3(...[_centreV3, ..._transform]);
        }
        static getPrefabsNames(_prefabsNames, _nodeConfig) {
            if (!_nodeConfig) {
                return;
            }
            let _prefabName = _nodeConfig.prefabName;
            if (_prefabName) {
                if (!_prefabsNames.includes(_prefabName)) {
                    _prefabsNames.push(_prefabName);
                }
            }
            else {
                if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                    _nodeConfig.child.forEach((item) => {
                        this.getPrefabsNames(_prefabsNames, item);
                    });
                }
            }
        }
        static buildNode(_node, _nodeConfig, _prefabs) {
            if (!_nodeConfig) {
                return;
            }
            let _prefabName = _nodeConfig.prefabName;
            let _spr;
            if (_prefabName) {
                _spr = ResLoad.GetRes(EssentialResUrls.PrefabURL(_prefabName));
                _node.addChild(_spr);
                NodeT.setNode(_spr, _nodeConfig);
                _prefabs[_prefabName] = _prefabs[_prefabName] || [];
                _prefabs[_prefabName].push(_spr);
            }
            else {
                if (_nodeConfig.child && _nodeConfig.child.length > 0) {
                    _spr = new Laya.Sprite3D;
                    _node.addChild(_spr);
                    NodeT.setNode(_spr, _nodeConfig);
                    _nodeConfig.child.forEach((item) => {
                        this.buildNode(_spr, item, _prefabs);
                    });
                }
            }
        }
    }

    class SceneNode {
        constructor(_nodeConfigs, _scene) {
            this.m_scene = _scene;
            this.m_ifDelete = true;
            this.m_nodeConfigs = _nodeConfigs;
            this.m_prefabsNames = [];
            this.m_nodeConfigs.forEach((item) => {
                NodeT.getPrefabsNames(this.m_prefabsNames, item);
            });
        }
        get scene() {
            return this.m_scene;
        }
        get nodeConfigs() {
            return this.m_nodeConfigs;
        }
        get ifDelete() {
            return this.m_ifDelete;
        }
        get node() {
            return this.m_node;
        }
        get prefabs() {
            return this.m_prefabs;
        }
        get prefabsName() {
            return this.m_prefabsNames;
        }
        get ifLoad() {
            return this.m_ifLoad;
        }
        asyncLoad(_onProgress) {
            let _prefabNamesURL = this.m_prefabsNames.map((item) => {
                return EssentialResUrls.PrefabURL(item);
            });
            return ResLoad.Load3DAsync(_prefabNamesURL, Laya.Handler.create(this, (n) => {
                this.loadProgress(n);
                if (_onProgress) {
                    _onProgress.args = [n];
                    _onProgress.run();
                }
            }, undefined, false));
        }
        asyncBuild(_onProgress) {
            this.m_ifLoad = true;
            return new Promise((resolve) => {
                this.asyncLoad(_onProgress).then(() => {
                    this.m_ifLoad = false;
                    this.build();
                    resolve(this);
                });
            });
        }
        loadProgress(_n) {
            this.m_scene.loadProgress(_n, this);
        }
        build() {
            if (!this.m_ifDelete) {
                return;
            }
            this.m_ifDelete = false;
            this.m_scene.addOnNode(this);
            this.m_node = new Laya.Node;
            this.m_scene.environment.scene.addChild(this.m_node);
            this.m_prefabs = {};
            let _spr;
            this.m_nodeConfigs.forEach((item) => {
                _spr = new Laya.Sprite3D;
                this.m_node.addChild(_spr);
                NodeT.buildNode(_spr, item, this.m_prefabs);
            });
        }
        delete() {
            if (this.m_ifDelete) {
                return;
            }
            if (this.m_ifLoad) {
                console.warn(...ConsoleEx.packWarn('场景节点还在构建却试图删除。'));
                return;
            }
            this.m_ifDelete = true;
            this.m_scene.deleteOnNode(this);
            this.m_node.destroy();
            this.m_node = null;
            this.m_prefabs = null;
        }
    }

    class GlobalD3Environment {
        static get Scene3D() {
            return this.m_Scene3D;
        }
        static get Camera() {
            return this.m_Camera;
        }
        static get Light() {
            return this.m_Light;
        }
        static get Environment() {
            return {
                scene: this.m_Scene3D,
                camera: this.m_Camera,
                light: this.m_Light,
            };
        }
        static init() {
            this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D);
            this.m_Camera = new Laya.Camera;
            this.m_Light = new Laya.DirectionLight;
            this.m_Scene3D.addChild(this.m_Camera);
            this.m_Scene3D.addChild(this.m_Light);
        }
    }

    class ArrayUtils {
        static ContentIfSame(x, y) {
            if (!(x) || !(y))
                return false;
            if (x.length != y.length)
                return false;
            let m = new Map();
            x.forEach((item) => {
                m.set(item, (m.get(item) || 0) + 1);
            });
            y.forEach((item) => {
                m.set(item, (m.get(item) || 0) - 1);
            });
            let i = 0;
            m.forEach((value) => {
                i += value;
            });
            return i == 0;
        }
        static Unique(arr) {
            return Array.from(new Set(arr));
        }
        static ReverseReserveUnique(arr) {
            return Array.from(new Set(arr.reverse())).reverse();
        }
        static ObjUnique(arr, _F) {
            for (let i = 0, len = arr.length; i < len; i++) {
                for (let j = i + 1, len = arr.length; j < len; j++) {
                    if (_F(arr[i]) === _F(arr[j])) {
                        arr.splice(j, 1);
                        j--;
                        len--;
                    }
                }
            }
            return arr;
        }
        static Replace(arr, oldObj, newObj) {
            let index = arr.indexOf(oldObj);
            if (index < 0)
                return false;
            arr.splice(index, 1, newObj);
            return true;
        }
        static RemoveItem(arr, obj) {
            let index = arr.indexOf(obj);
            if (index < 0)
                return false;
            arr.splice(index, 1);
            return true;
        }
        static RemoveAt(arr, index) {
            if (arr.length <= index)
                return false;
            arr.splice(index, 1);
            return true;
        }
        static Contains(arr, obj) {
            let index = arr.indexOf(obj);
            return index >= 0;
        }
        static Copy(arr) {
            let result = [];
            for (let i = 0; i < arr.length; ++i) {
                result.push(arr[i]);
            }
            return result;
        }
        static upsetArray(_array) {
            return _array.sort(() => {
                return Math.random() - 0.5;
            });
        }
        static RandomGet(_array, _n = 1, _weight = _array.map((item) => { return 1; })) {
            if (_array.length <= 0) {
                return;
            }
            let _rootArray = [];
            let _newArray = [];
            let _indexArray = [];
            let _minWeight = _weight[0];
            _weight.forEach((item) => {
                _minWeight = Math.min(_minWeight, item);
            });
            _weight = _weight.map((item) => {
                return Math.floor(item * (1 / _minWeight));
            });
            _array.forEach((item, index) => {
                _rootArray.push(item);
                for (let _i = 0; _i < _weight[index]; _i++) {
                    _indexArray.push(index);
                }
            });
            let _index;
            for (let _i = 0; _i < _n; _i++) {
                if (_rootArray.length <= 0) {
                    break;
                }
                _index = Math.floor(Math.random() * _indexArray.length);
                _indexArray = _indexArray.filter((item) => {
                    return item != _index;
                });
                _newArray.push(_rootArray.splice(_indexArray[_index], 1)[0]);
            }
            return _newArray;
        }
    }

    class Scene {
        constructor(_sceneName) {
            this.m_sceneConfig = {};
            this.m_sceneNodesCache = new Map();
            this.m_onSceneNodes = new Set();
            this._sceneName = _sceneName;
            if (!this._sceneName) {
                console.error(...ConsoleEx.packError('没有初始化场景的名字！'));
                return;
            }
            let _data = ConfigT.getConfigJsonData(EssentialResUrls.SceneConfigURL(this._sceneName));
            if (_data) {
                for (let _i = 0; _i < _data.length; _i++) {
                    this.m_sceneConfig[_data[_i].name] = _data[_i];
                }
            }
            else {
                console.error(...ConsoleEx.packError('获取场景数据失败->', this._sceneName));
            }
            this.m_environment = GlobalD3Environment.Environment;
            this._init();
        }
        get sceneConfig() {
            return this.m_sceneConfig;
        }
        get environment() {
            return this.m_environment;
        }
        get onSceneNodes() {
            return [...this.m_onSceneNodes];
        }
        getNodeConfig(_nodeName) {
            return this.m_sceneConfig[_nodeName];
        }
        getSceneNode(_name, _findCache = true, _addCache = true) {
            let _names = [];
            if (typeof _name == "string") {
                _names.push(_name);
            }
            else {
                _names.push(..._name);
            }
            let _nodeConfig = [];
            _names.forEach((item) => {
                if (this.m_sceneConfig[item]) {
                    _nodeConfig.push(this.m_sceneConfig[item]);
                }
                else {
                    console.warn(...ConsoleEx.packWarn('有个场景节点没有找到', item));
                }
            });
            if (_nodeConfig.length == 0) {
                console.warn(...ConsoleEx.packWarn('获取场景节点时，一个配置信息都没找到', _names));
                return;
            }
            let _sceneNode;
            if (_findCache) {
                for (let [_key, _value] of this.m_sceneNodesCache) {
                    if (ArrayUtils.ContentIfSame(_key, _names)) {
                        let _usable = _value.filter((item) => {
                            return item.ifDelete;
                        });
                        if (_usable.length > 0) {
                            _sceneNode = _usable.pop();
                        }
                        break;
                    }
                }
            }
            if (!_sceneNode) {
                _sceneNode = new SceneNode(_nodeConfig, this);
                if (_addCache) {
                    let _if = false;
                    for (let [_key, _value] of this.m_sceneNodesCache) {
                        if (ArrayUtils.ContentIfSame(_key, _names)) {
                            _value.push(_sceneNode);
                            _if = true;
                            break;
                        }
                    }
                    if (!_if) {
                        this.m_sceneNodesCache.set(_names, [_sceneNode]);
                    }
                }
            }
            return _sceneNode;
        }
        addOnNode(_node) {
            this.m_onSceneNodes.add(_node);
        }
        deleteOnNode(_node) {
            this.m_onSceneNodes.delete(_node);
        }
        setEnvironment() {
            let _sceneConfig = this.m_sceneConfig;
            if (_sceneConfig.camera) {
                NodeT.setNode(this.m_environment.camera, _sceneConfig.camera);
            }
            if (_sceneConfig.light) {
                NodeT.setNode(this.m_environment.light, _sceneConfig.light);
            }
            this._setEnvironment();
        }
        loadProgress(_n, _node) {
            this._loadProgress(_n, _node);
        }
        _init() { }
        _setEnvironment() { }
        _loadProgress(_n, _node) { }
    }

    let SceneManager = class SceneManager {
        constructor() {
            this.m_sceneList = {};
        }
        getScene(_name) {
            return this.m_sceneList[_name];
        }
        init() {
            let _name;
            for (let _i in _EAllExportSceneName) {
                _name = _EAllExportSceneName[_i];
                this.m_sceneList[_name] = new Scene(_name);
                continue;
                switch (_name) {
                }
            }
        }
    };
    SceneManager = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], SceneManager);
    var SceneManager$1 = SceneManager;

    class BaseUIConManager {
        init() {
            this._init();
            this.__init();
        }
        _init() {
        }
        __init() {
            if (!this.m_uiConList) {
                console.warn(...ConsoleEx.packWarn('ui控制管理器没有初始化管理的ui列表'));
            }
            if (!this.m_uiProxy) {
                console.warn(...ConsoleEx.packWarn('ui控制管理器没有初始化ui代理'));
            }
            else {
                this.m_uiProxy.setProxy(this.m_uiConList);
            }
        }
    }
    class BaseUIConManagerProxy {
        get onShowUI() {
            let _uiCons = [];
            for (let _i in this.m_uiConList) {
                this.m_uiConList[_i].ifShow && _uiCons.push(this.m_uiConList[_i]);
            }
            return _uiCons;
        }
        setProxy(_uiList) {
            this.m_uiConList = _uiList;
            this._init();
        }
        getUI(_key) {
            return this.m_uiConList[_key];
        }
        showUI(_uiCon, _ifHideOtherUI = true) {
            let _uiCons = [];
            if (_uiCon instanceof Array) {
                _uiCons.push(..._uiCon);
            }
            else {
                _uiCons.push(_uiCon);
            }
            if (_ifHideOtherUI) {
                for (let _i in this.m_uiConList) {
                    if (!_uiCons.includes(_i)) {
                        this.m_uiConList[_i].Hide();
                    }
                }
            }
            _uiCons.forEach((item) => {
                if (this.m_uiConList[item]) {
                    this.m_uiConList[item].Show();
                }
            });
        }
        hideUI(_uiCon) {
            let _uiCons = [];
            if (_uiCon instanceof Array) {
                _uiCons.push(..._uiCon);
            }
            else {
                _uiCons.push(_uiCon);
            }
            _uiCons.forEach((item) => {
                this.m_uiConList[item] && this.m_uiConList[item].Hide();
            });
        }
        hideAllUI() {
            this.onShowUI.forEach((item) => {
                item.Hide();
            });
        }
        _init() { }
    }

    let UIConManager = class UIConManager extends BaseUIConManager {
        constructor() { super(); }
        _init() {
        }
    };
    UIConManager = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], UIConManager);
    var UIConManager$1 = UIConManager;

    let _TestMainUICon = class _TestMainUICon extends BaseSingleUICon {
        constructor() {
            super();
            this._UI = FGUI_TestMain;
        }
    };
    _TestMainUICon = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], _TestMainUICon);
    var _TestMainUICon$1 = _TestMainUICon;

    class _BaseConfigProxy {
        constructor() {
            this._initData();
            this.initData();
        }
        _initData() { }
        initData() {
        }
    }
    class BaseConfigProxy extends _BaseConfigProxy {
        get dataList() {
            return this.m_dataList;
        }
        _initData() {
            this.m_dataList = this.configTemplate.datas;
        }
    }
    class BaseConstProxy extends _BaseConfigProxy {
        get data() {
            return this.m_data;
        }
        _initData() {
            this.m_data = this.configTemplate.data;
        }
    }

    let SceneNodeConfigProxy = class SceneNodeConfigProxy extends BaseConfigProxy {
        constructor() { super(); }
        byIdGetData(_id) {
            return this.m_dataList.find((item) => {
                return item.id == _id;
            });
        }
        byNameGetData(_name) {
            return this.m_dataList.find((item) => {
                return item.name == _name;
            });
        }
        bySceneNameGetData(_name) {
            return this.m_dataList.filter((item) => {
                return item.scene == _name;
            });
        }
    };
    SceneNodeConfigProxy = __decorate([
        InstanceT.DecorateInstance(),
        ConfigT.DecorateConfigProxy(_SceneNodeConfig),
        __metadata("design:paramtypes", [])
    ], SceneNodeConfigProxy);
    var SceneNodeConfigProxy$1 = SceneNodeConfigProxy;

    let TestConstProxy = class TestConstProxy extends BaseConstProxy {
        constructor() { super(); }
    };
    TestConstProxy = __decorate([
        InstanceT.DecorateInstance(),
        ConfigT.DecorateConfigProxy(_TestConst),
        __metadata("design:paramtypes", [])
    ], TestConstProxy);
    var TestConstProxy$1 = TestConstProxy;

    let ConfigTest = class ConfigTest {
        constructor() { }
        start() {
            console.log('场景节点配置表内容');
            console.log(SceneNodeConfigProxy$1.instance.dataList);
            console.log('常量测试配置表内容');
            console.log(TestConstProxy$1.instance.data);
        }
    };
    ConfigTest = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], ConfigTest);
    var ConfigTest$1 = ConfigTest;

    class _GameConfig {
    }
    _GameConfig.ifGameTest = (!_MainConfig.OnLine) && false;
    _GameConfig.ifTest = (!_MainConfig.OnLine) && false;
    _GameConfig.ifDebug = (!_MainConfig.OnLine) && true;

    class BaseDebug {
        constructor() {
            this._ifInit = false;
        }
        get _name() {
            return this.constructor.name;
        }
        addItem(_key, _item) {
            if (!_GameConfig.ifDebug) {
                return;
            }
            if (!this._ifInit) {
                this._ifInit = true;
                BaseDebug.DebugObj[this._name] = this;
            }
            this[_key] = _item;
        }
    }
    BaseDebug.Prefix = '$Debug';
    BaseDebug.DebugObj = {};
    if (_GameConfig.ifDebug) {
        window[BaseDebug.Prefix] = BaseDebug.DebugObj;
        console.warn(...ConsoleEx.packWarn('开启调试模式，通过', BaseDebug.Prefix, '访问'));
    }

    let CustomDebug = class CustomDebug extends BaseDebug {
        constructor() { super(); }
    };
    CustomDebug = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], CustomDebug);
    var CustomDebug$1 = CustomDebug;

    let DataTest = class DataTest {
        constructor() { }
        start() {
            console.log('数据测试', TestDataProxy.instance.data);
            CustomDebug$1.instance.addItem('dataTest', TestDataProxy.instance.data);
            TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
                console.log('数据设置回调');
            });
            TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
                console.log('数组被设置');
            }, TestDataProxy.instance.data.array);
            TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
                console.log('对象属性被设置');
            }, TestDataProxy.instance.data.object);
            TestDataProxy.instance.objectProxyT.addMonitor(this, () => {
                console.log('对象属性 a 被设置');
            }, TestDataProxy.instance.data.object, 'a');
        }
    };
    DataTest = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], DataTest);
    var DataTest$1 = DataTest;

    let OtherTest = class OtherTest {
        constructor() { }
        start() {
        }
    };
    OtherTest = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], OtherTest);
    var OtherTest$1 = OtherTest;

    let PackTest = class PackTest {
        constructor() { }
        start() {
            console.log('打包测试65');
        }
    };
    PackTest = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], PackTest);
    var PackTest$1 = PackTest;

    let TestMain = class TestMain {
        constructor() { }
        start() {
            SceneManager$1.instance.getScene('Scene')
                .getSceneNode('debug')
                .asyncBuild()
                .then((node) => {
                console.log('当前场景', node.scene);
                console.log('当前节点', node);
                node.scene.setEnvironment();
            });
            _TestMainUICon$1.instance.Show();
            DataTest$1.instance.start();
            ConfigTest$1.instance.start();
            PackTest$1.instance.start();
            OtherTest$1.instance.start();
        }
    };
    TestMain = __decorate([
        InstanceT.DecorateInstance(),
        __metadata("design:paramtypes", [])
    ], TestMain);
    var TestMain$1 = TestMain;

    class GameMain {
        constructor() {
            this.init();
        }
        init() {
            let _gameInitLoad = new GameInitLoad();
            _gameInitLoad.load(Laya.Handler.create(this, () => {
                this.gameInitLoadCom();
                this.enterGame();
            }));
        }
        gameInitLoadCom() {
            SceneManager$1.instance.init();
            UIConManager$1.instance.init();
            DataManager$1.instance.init();
            AudioManager$1.instance.init();
        }
        enterGame() {
            console.log(...ConsoleEx.packLog('进入游戏'));
            TestMain$1.instance.start();
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class D2Manager {
        static init() {
            FGUIRootManager.init();
        }
    }

    class D3Manager {
        static init() {
            GlobalD3Environment.init();
        }
    }

    class _TConfig {
    }
    _TConfig.Name = "LayaMiniGame";
    _TConfig.ZHName = "LayaBox小游戏";
    _TConfig.Versions = "0.0.0.1";

    class TMain {
        constructor() {
            this.init();
        }
        init() {
            window[_TConfig.Name] = Object.assign(Object.assign({}, _TConfig), { gameConfig: Object.assign({}, GameConfig), _mainConfig: Object.assign({}, _MainConfig), _gameConfig: Object.assign({}, _GameConfig) });
            D3Manager.init();
            D2Manager.init();
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new TMain();
            new GameMain();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
