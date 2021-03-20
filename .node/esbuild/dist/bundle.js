/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/esbuild/lib/main.js":
/*!********************************************************!*\
  !*** F:/LayaMiniGame/node_modules/esbuild/lib/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// lib/node.ts
__markAsModule(exports);
__export(exports, {
  build: () => build,
  buildSync: () => buildSync,
  initialize: () => initialize,
  serve: () => serve,
  transform: () => transform,
  transformSync: () => transformSync,
  version: () => version
});

// lib/stdio_protocol.ts
function encodePacket(packet) {
  let visit = (value) => {
    if (value === null) {
      bb.write8(0);
    } else if (typeof value === "boolean") {
      bb.write8(1);
      bb.write8(+value);
    } else if (typeof value === "number") {
      bb.write8(2);
      bb.write32(value | 0);
    } else if (typeof value === "string") {
      bb.write8(3);
      bb.write(encodeUTF8(value));
    } else if (value instanceof Uint8Array) {
      bb.write8(4);
      bb.write(value);
    } else if (value instanceof Array) {
      bb.write8(5);
      bb.write32(value.length);
      for (let item of value) {
        visit(item);
      }
    } else {
      let keys = Object.keys(value);
      bb.write8(6);
      bb.write32(keys.length);
      for (let key of keys) {
        bb.write(encodeUTF8(key));
        visit(value[key]);
      }
    }
  };
  let bb = new ByteBuffer();
  bb.write32(0);
  bb.write32(packet.id << 1 | +!packet.isRequest);
  visit(packet.value);
  writeUInt32LE(bb.buf, bb.len - 4, 0);
  return bb.buf.subarray(0, bb.len);
}
function decodePacket(bytes) {
  let visit = () => {
    switch (bb.read8()) {
      case 0:
        return null;
      case 1:
        return !!bb.read8();
      case 2:
        return bb.read32();
      case 3:
        return decodeUTF8(bb.read());
      case 4:
        return bb.read();
      case 5: {
        let count = bb.read32();
        let value2 = [];
        for (let i = 0; i < count; i++) {
          value2.push(visit());
        }
        return value2;
      }
      case 6: {
        let count = bb.read32();
        let value2 = {};
        for (let i = 0; i < count; i++) {
          value2[decodeUTF8(bb.read())] = visit();
        }
        return value2;
      }
      default:
        throw new Error("Invalid packet");
    }
  };
  let bb = new ByteBuffer(bytes);
  let id = bb.read32();
  let isRequest = (id & 1) === 0;
  id >>>= 1;
  let value = visit();
  if (bb.ptr !== bytes.length) {
    throw new Error("Invalid packet");
  }
  return {id, isRequest, value};
}
var ByteBuffer = class {
  constructor(buf = new Uint8Array(1024)) {
    this.buf = buf;
    this.len = 0;
    this.ptr = 0;
  }
  _write(delta) {
    if (this.len + delta > this.buf.length) {
      let clone = new Uint8Array((this.len + delta) * 2);
      clone.set(this.buf);
      this.buf = clone;
    }
    this.len += delta;
    return this.len - delta;
  }
  write8(value) {
    let offset = this._write(1);
    this.buf[offset] = value;
  }
  write32(value) {
    let offset = this._write(4);
    writeUInt32LE(this.buf, value, offset);
  }
  write(bytes) {
    let offset = this._write(4 + bytes.length);
    writeUInt32LE(this.buf, bytes.length, offset);
    this.buf.set(bytes, offset + 4);
  }
  _read(delta) {
    if (this.ptr + delta > this.buf.length) {
      throw new Error("Invalid packet");
    }
    this.ptr += delta;
    return this.ptr - delta;
  }
  read8() {
    return this.buf[this._read(1)];
  }
  read32() {
    return readUInt32LE(this.buf, this._read(4));
  }
  read() {
    let length = this.read32();
    let bytes = new Uint8Array(length);
    let ptr = this._read(bytes.length);
    bytes.set(this.buf.subarray(ptr, ptr + length));
    return bytes;
  }
};
var encodeUTF8;
var decodeUTF8;
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
  let encoder = new TextEncoder();
  let decoder = new TextDecoder();
  encodeUTF8 = (text) => encoder.encode(text);
  decodeUTF8 = (bytes) => decoder.decode(bytes);
} else if (typeof Buffer !== "undefined") {
  encodeUTF8 = (text) => {
    let buffer = Buffer.from(text);
    if (!(buffer instanceof Uint8Array)) {
      buffer = new Uint8Array(buffer);
    }
    return buffer;
  };
  decodeUTF8 = (bytes) => Buffer.from(bytes).toString();
} else {
  throw new Error("No UTF-8 codec found");
}
function readUInt32LE(buffer, offset) {
  return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
}
function writeUInt32LE(buffer, value, offset) {
  buffer[offset++] = value;
  buffer[offset++] = value >> 8;
  buffer[offset++] = value >> 16;
  buffer[offset++] = value >> 24;
}

// lib/common.ts
function validateTarget(target) {
  target += "";
  if (target.indexOf(",") >= 0)
    throw new Error(`Invalid target: ${target}`);
  return target;
}
var canBeAnything = () => null;
var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
var mustBeBooleanOrObject = (value) => typeof value === "boolean" || typeof value === "object" && !Array.isArray(value) ? null : "a boolean or an object";
var mustBeString = (value) => typeof value === "string" ? null : "a string";
var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
var mustBeStringOrArray = (value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array";
var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
function getFlag(object, keys, key, mustBeFn) {
  let value = object[key];
  keys[key + ""] = true;
  if (value === void 0)
    return void 0;
  let mustBe = mustBeFn(value);
  if (mustBe !== null)
    throw new Error(`"${key}" must be ${mustBe}`);
  return value;
}
function checkForInvalidFlags(object, keys, where) {
  for (let key in object) {
    if (!(key in keys)) {
      throw new Error(`Invalid option ${where}: "${key}"`);
    }
  }
}
function validateInitializeOptions(options) {
  let keys = Object.create(null);
  let wasmURL = getFlag(options, keys, "wasmURL", mustBeString);
  let worker = getFlag(options, keys, "worker", mustBeBoolean);
  checkForInvalidFlags(options, keys, "in startService() call");
  return {
    wasmURL,
    worker
  };
}
function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
  let color = getFlag(options, keys, "color", mustBeBoolean);
  let logLevel = getFlag(options, keys, "logLevel", mustBeString);
  let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
  if (color)
    flags.push(`--color=${color}`);
  else if (isTTY2)
    flags.push(`--color=true`);
  flags.push(`--log-level=${logLevel || logLevelDefault}`);
  flags.push(`--log-limit=${logLimit || 0}`);
}
function pushCommonFlags(flags, options, keys) {
  let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
  let target = getFlag(options, keys, "target", mustBeStringOrArray);
  let format = getFlag(options, keys, "format", mustBeString);
  let globalName = getFlag(options, keys, "globalName", mustBeString);
  let minify = getFlag(options, keys, "minify", mustBeBoolean);
  let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
  let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
  let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
  let charset = getFlag(options, keys, "charset", mustBeString);
  let treeShaking = getFlag(options, keys, "treeShaking", mustBeStringOrBoolean);
  let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
  let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
  let define = getFlag(options, keys, "define", mustBeObject);
  let pure = getFlag(options, keys, "pure", mustBeArray);
  let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
  if (sourcesContent !== void 0)
    flags.push(`--sources-content=${sourcesContent}`);
  if (target) {
    if (Array.isArray(target))
      flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
    else
      flags.push(`--target=${validateTarget(target)}`);
  }
  if (format)
    flags.push(`--format=${format}`);
  if (globalName)
    flags.push(`--global-name=${globalName}`);
  if (minify)
    flags.push("--minify");
  if (minifySyntax)
    flags.push("--minify-syntax");
  if (minifyWhitespace)
    flags.push("--minify-whitespace");
  if (minifyIdentifiers)
    flags.push("--minify-identifiers");
  if (charset)
    flags.push(`--charset=${charset}`);
  if (treeShaking !== void 0 && treeShaking !== true)
    flags.push(`--tree-shaking=${treeShaking}`);
  if (jsxFactory)
    flags.push(`--jsx-factory=${jsxFactory}`);
  if (jsxFragment)
    flags.push(`--jsx-fragment=${jsxFragment}`);
  if (define) {
    for (let key in define) {
      if (key.indexOf("=") >= 0)
        throw new Error(`Invalid define: ${key}`);
      flags.push(`--define:${key}=${define[key]}`);
    }
  }
  if (pure)
    for (let fn of pure)
      flags.push(`--pure:${fn}`);
  if (keepNames)
    flags.push(`--keep-names`);
}
function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
  var _a;
  let flags = [];
  let keys = Object.create(null);
  let stdinContents = null;
  let stdinResolveDir = null;
  let watchMode = null;
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
  let watch = getFlag(options, keys, "watch", mustBeBooleanOrObject);
  let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
  let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
  let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
  let outfile = getFlag(options, keys, "outfile", mustBeString);
  let outdir = getFlag(options, keys, "outdir", mustBeString);
  let outbase = getFlag(options, keys, "outbase", mustBeString);
  let platform = getFlag(options, keys, "platform", mustBeString);
  let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
  let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArray);
  let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArray);
  let mainFields = getFlag(options, keys, "mainFields", mustBeArray);
  let conditions = getFlag(options, keys, "conditions", mustBeArray);
  let external = getFlag(options, keys, "external", mustBeArray);
  let loader = getFlag(options, keys, "loader", mustBeObject);
  let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
  let publicPath = getFlag(options, keys, "publicPath", mustBeString);
  let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
  let assetNames = getFlag(options, keys, "assetNames", mustBeString);
  let inject = getFlag(options, keys, "inject", mustBeArray);
  let banner = getFlag(options, keys, "banner", mustBeObject);
  let footer = getFlag(options, keys, "footer", mustBeObject);
  let entryPoints = getFlag(options, keys, "entryPoints", mustBeArray);
  let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
  let stdin = getFlag(options, keys, "stdin", mustBeObject);
  let write = (_a = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a : writeDefault;
  let incremental = getFlag(options, keys, "incremental", mustBeBoolean) === true;
  let plugins = getFlag(options, keys, "plugins", mustBeArray);
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap)
    flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
  if (bundle)
    flags.push("--bundle");
  if (watch) {
    flags.push("--watch");
    if (typeof watch === "boolean") {
      watchMode = {};
    } else {
      let watchKeys = Object.create(null);
      let onRebuild = getFlag(watch, watchKeys, "onRebuild", mustBeFunction);
      checkForInvalidFlags(watch, watchKeys, `on "watch" in ${callName}() call`);
      watchMode = {onRebuild};
    }
  }
  if (splitting)
    flags.push("--splitting");
  if (preserveSymlinks)
    flags.push("--preserve-symlinks");
  if (metafile)
    flags.push(`--metafile`);
  if (outfile)
    flags.push(`--outfile=${outfile}`);
  if (outdir)
    flags.push(`--outdir=${outdir}`);
  if (outbase)
    flags.push(`--outbase=${outbase}`);
  if (platform)
    flags.push(`--platform=${platform}`);
  if (tsconfig)
    flags.push(`--tsconfig=${tsconfig}`);
  if (resolveExtensions) {
    let values = [];
    for (let value of resolveExtensions) {
      value += "";
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid resolve extension: ${value}`);
      values.push(value);
    }
    flags.push(`--resolve-extensions=${values.join(",")}`);
  }
  if (publicPath)
    flags.push(`--public-path=${publicPath}`);
  if (chunkNames)
    flags.push(`--chunk-names=${chunkNames}`);
  if (assetNames)
    flags.push(`--asset-names=${assetNames}`);
  if (mainFields) {
    let values = [];
    for (let value of mainFields) {
      value += "";
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid main field: ${value}`);
      values.push(value);
    }
    flags.push(`--main-fields=${values.join(",")}`);
  }
  if (conditions) {
    let values = [];
    for (let value of conditions) {
      value += "";
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid condition: ${value}`);
      values.push(value);
    }
    flags.push(`--conditions=${values.join(",")}`);
  }
  if (external)
    for (let name of external)
      flags.push(`--external:${name}`);
  if (banner) {
    for (let type in banner) {
      if (type.indexOf("=") >= 0)
        throw new Error(`Invalid banner file type: ${type}`);
      flags.push(`--banner:${type}=${banner[type]}`);
    }
  }
  if (footer) {
    for (let type in footer) {
      if (type.indexOf("=") >= 0)
        throw new Error(`Invalid footer file type: ${type}`);
      flags.push(`--footer:${type}=${footer[type]}`);
    }
  }
  if (inject)
    for (let path2 of inject)
      flags.push(`--inject:${path2}`);
  if (loader) {
    for (let ext in loader) {
      if (ext.indexOf("=") >= 0)
        throw new Error(`Invalid loader extension: ${ext}`);
      flags.push(`--loader:${ext}=${loader[ext]}`);
    }
  }
  if (outExtension) {
    for (let ext in outExtension) {
      if (ext.indexOf("=") >= 0)
        throw new Error(`Invalid out extension: ${ext}`);
      flags.push(`--out-extension:${ext}=${outExtension[ext]}`);
    }
  }
  if (entryPoints) {
    for (let entryPoint of entryPoints) {
      entryPoint += "";
      if (entryPoint.startsWith("-"))
        throw new Error(`Invalid entry point: ${entryPoint}`);
      flags.push(entryPoint);
    }
  }
  if (stdin) {
    let stdinKeys = Object.create(null);
    let contents = getFlag(stdin, stdinKeys, "contents", mustBeString);
    let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
    let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
    let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
    checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
    if (sourcefile)
      flags.push(`--sourcefile=${sourcefile}`);
    if (loader2)
      flags.push(`--loader=${loader2}`);
    if (resolveDir)
      stdinResolveDir = resolveDir + "";
    stdinContents = contents ? contents + "" : "";
  }
  let nodePaths = [];
  if (nodePathsInput) {
    for (let value of nodePathsInput) {
      value += "";
      nodePaths.push(value);
    }
  }
  return {
    flags,
    write,
    plugins,
    stdinContents,
    stdinResolveDir,
    absWorkingDir,
    incremental,
    nodePaths,
    watch: watchMode
  };
}
function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
  let flags = [];
  let keys = Object.create(null);
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
  let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
  let loader = getFlag(options, keys, "loader", mustBeString);
  let banner = getFlag(options, keys, "banner", mustBeString);
  let footer = getFlag(options, keys, "footer", mustBeString);
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap)
    flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
  if (tsconfigRaw)
    flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
  if (sourcefile)
    flags.push(`--sourcefile=${sourcefile}`);
  if (loader)
    flags.push(`--loader=${loader}`);
  if (banner)
    flags.push(`--banner=${banner}`);
  if (footer)
    flags.push(`--footer=${footer}`);
  return flags;
}
function createChannel(streamIn) {
  let responseCallbacks = new Map();
  let pluginCallbacks = new Map();
  let watchCallbacks = new Map();
  let serveCallbacks = new Map();
  let nextServeID = 0;
  let isClosed = false;
  let nextRequestID = 0;
  let nextBuildKey = 0;
  let stdout = new Uint8Array(16 * 1024);
  let stdoutUsed = 0;
  let readFromStdout = (chunk) => {
    let limit = stdoutUsed + chunk.length;
    if (limit > stdout.length) {
      let swap = new Uint8Array(limit * 2);
      swap.set(stdout);
      stdout = swap;
    }
    stdout.set(chunk, stdoutUsed);
    stdoutUsed += chunk.length;
    let offset = 0;
    while (offset + 4 <= stdoutUsed) {
      let length = readUInt32LE(stdout, offset);
      if (offset + 4 + length > stdoutUsed) {
        break;
      }
      offset += 4;
      handleIncomingPacket(stdout.subarray(offset, offset + length));
      offset += length;
    }
    if (offset > 0) {
      stdout.copyWithin(0, offset, stdoutUsed);
      stdoutUsed -= offset;
    }
  };
  let afterClose = () => {
    isClosed = true;
    for (let callback of responseCallbacks.values()) {
      callback("The service was stopped", null);
    }
    responseCallbacks.clear();
    for (let callbacks of serveCallbacks.values()) {
      callbacks.onWait("The service was stopped");
    }
    serveCallbacks.clear();
    for (let callback of watchCallbacks.values()) {
      try {
        callback(new Error("The service was stopped"), null);
      } catch (e) {
        console.error(e);
      }
    }
    watchCallbacks.clear();
  };
  let sendRequest = (refs, value, callback) => {
    if (isClosed)
      return callback("The service is no longer running", null);
    let id = nextRequestID++;
    responseCallbacks.set(id, (error, response) => {
      try {
        callback(error, response);
      } finally {
        if (refs)
          refs.unref();
      }
    });
    if (refs)
      refs.ref();
    streamIn.writeToStdin(encodePacket({id, isRequest: true, value}));
  };
  let sendResponse = (id, value) => {
    if (isClosed)
      throw new Error("The service is no longer running");
    streamIn.writeToStdin(encodePacket({id, isRequest: false, value}));
  };
  let handleRequest = async (id, request) => {
    try {
      switch (request.command) {
        case "ping": {
          sendResponse(id, {});
          break;
        }
        case "resolve": {
          let callback = pluginCallbacks.get(request.key);
          if (!callback)
            sendResponse(id, {});
          else
            sendResponse(id, await callback(request));
          break;
        }
        case "load": {
          let callback = pluginCallbacks.get(request.key);
          if (!callback)
            sendResponse(id, {});
          else
            sendResponse(id, await callback(request));
          break;
        }
        case "serve-request": {
          let callbacks = serveCallbacks.get(request.serveID);
          if (callbacks && callbacks.onRequest)
            callbacks.onRequest(request.args);
          sendResponse(id, {});
          break;
        }
        case "serve-wait": {
          let callbacks = serveCallbacks.get(request.serveID);
          if (callbacks)
            callbacks.onWait(request.error);
          sendResponse(id, {});
          break;
        }
        case "watch-rebuild": {
          let callback = watchCallbacks.get(request.watchID);
          try {
            if (callback)
              callback(null, request.args);
          } catch (err) {
            console.error(err);
          }
          sendResponse(id, {});
          break;
        }
        default:
          throw new Error(`Invalid command: ` + request.command);
      }
    } catch (e) {
      sendResponse(id, {errors: [extractErrorMessageV8(e, streamIn, null, void 0)]});
    }
  };
  let isFirstPacket = true;
  let handleIncomingPacket = (bytes) => {
    if (isFirstPacket) {
      isFirstPacket = false;
      let binaryVersion = String.fromCharCode(...bytes);
      if (binaryVersion !== "0.9.3") {
        throw new Error(`Cannot start service: Host version "${"0.9.3"}" does not match binary version ${JSON.stringify(binaryVersion)}`);
      }
      return;
    }
    let packet = decodePacket(bytes);
    if (packet.isRequest) {
      handleRequest(packet.id, packet.value);
    } else {
      let callback = responseCallbacks.get(packet.id);
      responseCallbacks.delete(packet.id);
      if (packet.value.error)
        callback(packet.value.error, {});
      else
        callback(null, packet.value);
    }
  };
  let handlePlugins = (plugins, request, buildKey, stash) => {
    if (streamIn.isSync)
      throw new Error("Cannot use plugins in synchronous API calls");
    let onResolveCallbacks = {};
    let onLoadCallbacks = {};
    let nextCallbackID = 0;
    let i = 0;
    request.plugins = [];
    for (let item of plugins) {
      let keys = {};
      if (typeof item !== "object")
        throw new Error(`Plugin at index ${i} must be an object`);
      let name = getFlag(item, keys, "name", mustBeString);
      let setup = getFlag(item, keys, "setup", mustBeFunction);
      if (typeof name !== "string" || name === "")
        throw new Error(`Plugin at index ${i} is missing a name`);
      if (typeof setup !== "function")
        throw new Error(`[${name}] Plugin is missing a setup function`);
      checkForInvalidFlags(item, keys, `on plugin ${JSON.stringify(name)}`);
      let plugin = {
        name,
        onResolve: [],
        onLoad: []
      };
      i++;
      setup({
        onResolve(options, callback2) {
          let registeredText = `This error came from the "onResolve" callback registered here`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${JSON.stringify(name)}`);
          if (filter == null)
            throw new Error(`[${plugin.name}] onResolve() call is missing a filter`);
          let id = nextCallbackID++;
          onResolveCallbacks[id] = {name, callback: callback2, note: registeredNote};
          plugin.onResolve.push({id, filter: filter.source, namespace: namespace || ""});
        },
        onLoad(options, callback2) {
          let registeredText = `This error came from the "onLoad" callback registered here`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${JSON.stringify(name)}`);
          if (filter == null)
            throw new Error(`[${plugin.name}] onLoad() call is missing a filter`);
          let id = nextCallbackID++;
          onLoadCallbacks[id] = {name, callback: callback2, note: registeredNote};
          plugin.onLoad.push({id, filter: filter.source, namespace: namespace || ""});
        }
      });
      request.plugins.push(plugin);
    }
    const callback = async (request2) => {
      switch (request2.command) {
        case "resolve": {
          let response = {}, name, callback2, note;
          for (let id of request2.ids) {
            try {
              ({name, callback: callback2, note} = onResolveCallbacks[id]);
              let result = await callback2({
                path: request2.path,
                importer: request2.importer,
                namespace: request2.namespace,
                resolveDir: request2.resolveDir,
                kind: request2.kind,
                pluginData: stash.load(request2.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify(name)} to return an object`);
                let keys = {};
                let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                let path2 = getFlag(result, keys, "path", mustBeString);
                let namespace = getFlag(result, keys, "namespace", mustBeString);
                let external = getFlag(result, keys, "external", mustBeBoolean);
                let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                let errors = getFlag(result, keys, "errors", mustBeArray);
                let warnings = getFlag(result, keys, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${JSON.stringify(name)}`);
                response.id = id;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (path2 != null)
                  response.path = path2;
                if (namespace != null)
                  response.namespace = namespace;
                if (external != null)
                  response.external = external;
                if (pluginData != null)
                  response.pluginData = stash.store(pluginData);
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", stash);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", stash);
                break;
              }
            } catch (e) {
              return {id, errors: [extractErrorMessageV8(e, streamIn, stash, note)]};
            }
          }
          return response;
        }
        case "load": {
          let response = {}, name, callback2, note;
          for (let id of request2.ids) {
            try {
              ({name, callback: callback2, note} = onLoadCallbacks[id]);
              let result = await callback2({
                path: request2.path,
                namespace: request2.namespace,
                pluginData: stash.load(request2.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify(name)} to return an object`);
                let keys = {};
                let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
                let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
                let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                let loader = getFlag(result, keys, "loader", mustBeString);
                let errors = getFlag(result, keys, "errors", mustBeArray);
                let warnings = getFlag(result, keys, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${JSON.stringify(name)}`);
                response.id = id;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (contents instanceof Uint8Array)
                  response.contents = contents;
                else if (contents != null)
                  response.contents = encodeUTF8(contents);
                if (resolveDir != null)
                  response.resolveDir = resolveDir;
                if (pluginData != null)
                  response.pluginData = stash.store(pluginData);
                if (loader != null)
                  response.loader = loader;
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", stash);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", stash);
                break;
              }
            } catch (e) {
              return {id, errors: [extractErrorMessageV8(e, streamIn, stash, note)]};
            }
          }
          return response;
        }
        default:
          throw new Error(`Invalid command: ` + request2.command);
      }
    };
    let refCount = 0;
    return {
      ref() {
        if (++refCount === 1)
          pluginCallbacks.set(buildKey, callback);
      },
      unref() {
        if (--refCount === 0)
          pluginCallbacks.delete(buildKey);
      }
    };
  };
  let buildServeData = (refs, options, request) => {
    let keys = {};
    let port = getFlag(options, keys, "port", mustBeInteger);
    let host = getFlag(options, keys, "host", mustBeString);
    let servedir = getFlag(options, keys, "servedir", mustBeString);
    let onRequest = getFlag(options, keys, "onRequest", mustBeFunction);
    let serveID = nextServeID++;
    let onWait;
    let wait = new Promise((resolve, reject) => {
      onWait = (error) => {
        serveCallbacks.delete(serveID);
        if (error !== null)
          reject(new Error(error));
        else
          resolve();
      };
    });
    request.serve = {serveID};
    checkForInvalidFlags(options, keys, `in serve() call`);
    if (port !== void 0)
      request.serve.port = port;
    if (host !== void 0)
      request.serve.host = host;
    if (servedir !== void 0)
      request.serve.servedir = servedir;
    serveCallbacks.set(serveID, {
      onRequest,
      onWait
    });
    return {
      wait,
      stop() {
        sendRequest(refs, {command: "serve-stop", serveID}, () => {
        });
      }
    };
  };
  return {
    readFromStdout,
    afterClose,
    service: {
      buildOrServe(callName, callerRefs, serveOptions, options, isTTY2, defaultWD2, callback) {
        let pluginRefs;
        const details = createObjectStash();
        const logLevelDefault = "warning";
        const refs = {
          ref() {
            if (pluginRefs)
              pluginRefs.ref();
            if (callerRefs)
              callerRefs.ref();
          },
          unref() {
            if (pluginRefs)
              pluginRefs.unref();
            if (callerRefs)
              callerRefs.unref();
          }
        };
        try {
          let key = nextBuildKey++;
          let writeDefault = !streamIn.isBrowser;
          let {
            flags,
            write,
            plugins,
            stdinContents,
            stdinResolveDir,
            absWorkingDir,
            incremental,
            nodePaths,
            watch
          } = flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault);
          let request = {
            command: "build",
            key,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD2,
            incremental,
            nodePaths,
            hasOnRebuild: !!(watch && watch.onRebuild)
          };
          let serve2 = serveOptions && buildServeData(refs, serveOptions, request);
          if (plugins && plugins.length > 0)
            pluginRefs = handlePlugins(plugins, request, key, details);
          let rebuild;
          let stop;
          let buildResponseToResult = (response, callback2) => {
            let errors = replaceDetailsInMessages(response.errors, details);
            let warnings = replaceDetailsInMessages(response.warnings, details);
            if (errors.length > 0)
              return callback2(failureErrorWithLog("Build failed", errors, warnings), null);
            let result = {warnings};
            if (response.outputFiles)
              result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile)
              result.metafile = JSON.parse(response.metafile);
            if (response.writeToStdout !== void 0)
              console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
            if (response.rebuildID !== void 0) {
              if (!rebuild) {
                let isDisposed = false;
                rebuild = () => new Promise((resolve, reject) => {
                  if (isDisposed || isClosed)
                    throw new Error("Cannot rebuild");
                  sendRequest(refs, {command: "rebuild", rebuildID: response.rebuildID}, (error2, response2) => {
                    if (error2)
                      return callback2(new Error(error2), null);
                    buildResponseToResult(response2, (error3, result3) => {
                      if (error3)
                        reject(error3);
                      else
                        resolve(result3);
                    });
                  });
                });
                refs.ref();
                rebuild.dispose = () => {
                  if (isDisposed)
                    return;
                  isDisposed = true;
                  sendRequest(refs, {command: "rebuild-dispose", rebuildID: response.rebuildID}, () => {
                  });
                  refs.unref();
                };
              }
              result.rebuild = rebuild;
            }
            if (response.watchID !== void 0) {
              if (!stop) {
                let isStopped = false;
                refs.ref();
                stop = () => {
                  if (isStopped)
                    return;
                  isStopped = true;
                  watchCallbacks.delete(response.watchID);
                  sendRequest(refs, {command: "watch-stop", watchID: response.watchID}, () => {
                  });
                  refs.unref();
                };
                if (watch && watch.onRebuild) {
                  watchCallbacks.set(response.watchID, (serviceStopError, watchResponse) => {
                    if (serviceStopError)
                      return watch.onRebuild(serviceStopError, null);
                    let errors2 = replaceDetailsInMessages(watchResponse.errors, details);
                    let warnings2 = replaceDetailsInMessages(watchResponse.warnings, details);
                    if (errors2.length > 0)
                      return watch.onRebuild(failureErrorWithLog("Build failed", errors2, warnings2), null);
                    let result2 = {warnings: warnings2};
                    if (watchResponse.outputFiles)
                      result2.outputFiles = watchResponse.outputFiles.map(convertOutputFiles);
                    if (watchResponse.rebuildID !== void 0)
                      result2.rebuild = rebuild;
                    result2.stop = stop;
                    watch.onRebuild(null, result2);
                  });
                }
              }
              result.stop = stop;
            }
            return callback2(null, result);
          };
          if (write && streamIn.isBrowser)
            throw new Error(`Cannot enable "write" in the browser`);
          if (incremental && streamIn.isSync)
            throw new Error(`Cannot use "incremental" with a synchronous build`);
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            if (serve2) {
              let serveResponse = response;
              let isStopped = false;
              refs.ref();
              let result = {
                port: serveResponse.port,
                host: serveResponse.host,
                wait: serve2.wait,
                stop() {
                  if (isStopped)
                    return;
                  isStopped = true;
                  serve2.stop();
                  refs.unref();
                }
              };
              refs.ref();
              serve2.wait.then(refs.unref, refs.unref);
              return callback(null, result);
            }
            return buildResponseToResult(response, callback);
          });
        } catch (e) {
          let flags = [];
          try {
            pushLogFlags(flags, options, {}, isTTY2, logLevelDefault);
          } catch (e2) {
          }
          const error = extractErrorMessageV8(e, streamIn, details, void 0);
          sendRequest(refs, {command: "error", flags, error}, () => {
            error.detail = details.load(error.detail);
            callback(failureErrorWithLog("Build failed", [error], []), null);
          });
        }
      },
      transform(callName, refs, input, options, isTTY2, fs2, callback) {
        const details = createObjectStash();
        const logLevelDefault = "silent";
        let start = (inputPath) => {
          try {
            if (typeof input !== "string")
              throw new Error('The input to "transform" must be a string');
            let flags = flagsForTransformOptions(callName, options, isTTY2, logLevelDefault);
            let request = {
              command: "transform",
              flags,
              inputFS: inputPath !== null,
              input: inputPath !== null ? inputPath : input
            };
            sendRequest(refs, request, (error, response) => {
              if (error)
                return callback(new Error(error), null);
              let errors = replaceDetailsInMessages(response.errors, details);
              let warnings = replaceDetailsInMessages(response.warnings, details);
              let outstanding = 1;
              let next = () => --outstanding === 0 && callback(null, {warnings, code: response.code, map: response.map});
              if (errors.length > 0)
                return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
              if (response.codeFS) {
                outstanding++;
                fs2.readFile(response.code, (err, contents) => {
                  if (err !== null) {
                    callback(err, null);
                  } else {
                    response.code = contents;
                    next();
                  }
                });
              }
              if (response.mapFS) {
                outstanding++;
                fs2.readFile(response.map, (err, contents) => {
                  if (err !== null) {
                    callback(err, null);
                  } else {
                    response.map = contents;
                    next();
                  }
                });
              }
              next();
            });
          } catch (e) {
            let flags = [];
            try {
              pushLogFlags(flags, options, {}, isTTY2, logLevelDefault);
            } catch (e2) {
            }
            const error = extractErrorMessageV8(e, streamIn, details, void 0);
            sendRequest(refs, {command: "error", flags, error}, () => {
              error.detail = details.load(error.detail);
              callback(failureErrorWithLog("Transform failed", [error], []), null);
            });
          }
        };
        if (typeof input === "string" && input.length > 1024 * 1024) {
          let next = start;
          start = () => fs2.writeFile(input, next);
        }
        start(null);
      }
    }
  };
}
function createObjectStash() {
  const map = new Map();
  let nextID = 0;
  return {
    load(id) {
      return map.get(id);
    },
    store(value) {
      if (value === void 0)
        return -1;
      const id = nextID++;
      map.set(id, value);
      return id;
    }
  };
}
function extractCallerV8(e, streamIn, ident) {
  try {
    let lines = (e.stack + "").split("\n");
    lines.splice(1, 1);
    let location = parseStackLinesV8(streamIn, lines, ident);
    if (location) {
      return {text: e.message, location};
    }
  } catch (e2) {
  }
}
function extractErrorMessageV8(e, streamIn, stash, note) {
  let text = "Internal error";
  let location = null;
  try {
    text = (e && e.message || e) + "";
  } catch (e2) {
  }
  try {
    location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
  } catch (e2) {
  }
  return {text, location, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1};
}
function parseStackLinesV8(streamIn, lines, ident) {
  let at = "    at ";
  if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
    for (let i = 1; i < lines.length; i++) {
      let line = lines[i];
      if (!line.startsWith(at))
        continue;
      line = line.slice(at.length);
      while (true) {
        let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^(\S+):(\d+):(\d+)$/.exec(line);
        if (match) {
          let contents = streamIn.readFileSync(match[1], "utf8");
          let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
          let column = +match[3] - 1;
          let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
          return {
            file: match[1],
            namespace: "file",
            line: +match[2],
            column: encodeUTF8(lineText.slice(0, column)).length,
            length: encodeUTF8(lineText.slice(column, column + length)).length,
            lineText: lineText + "\n" + lines.slice(1).join("\n")
          };
        }
        break;
      }
    }
  }
  return null;
}
function failureErrorWithLog(text, errors, warnings) {
  let limit = 5;
  let summary = errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
    if (i === limit)
      return "\n...";
    if (!e.location)
      return `
error: ${e.text}`;
    let {file, line, column} = e.location;
    return `
${file}:${line}:${column}: error: ${e.text}`;
  }).join("");
  let error = new Error(`${text}${summary}`);
  error.errors = errors;
  error.warnings = warnings;
  return error;
}
function replaceDetailsInMessages(messages, stash) {
  for (const message of messages) {
    message.detail = stash.load(message.detail);
  }
  return messages;
}
function sanitizeLocation(location, where) {
  if (location == null)
    return null;
  let keys = {};
  let file = getFlag(location, keys, "file", mustBeString);
  let namespace = getFlag(location, keys, "namespace", mustBeString);
  let line = getFlag(location, keys, "line", mustBeInteger);
  let column = getFlag(location, keys, "column", mustBeInteger);
  let length = getFlag(location, keys, "length", mustBeInteger);
  let lineText = getFlag(location, keys, "lineText", mustBeString);
  checkForInvalidFlags(location, keys, where);
  return {
    file: file || "",
    namespace: namespace || "",
    line: line || 0,
    column: column || 0,
    length: length || 0,
    lineText: lineText || ""
  };
}
function sanitizeMessages(messages, property, stash) {
  let messagesClone = [];
  let index = 0;
  for (const message of messages) {
    let keys = {};
    let text = getFlag(message, keys, "text", mustBeString);
    let location = getFlag(message, keys, "location", mustBeObjectOrNull);
    let notes = getFlag(message, keys, "notes", mustBeArray);
    let detail = getFlag(message, keys, "detail", canBeAnything);
    let where = `in element ${index} of "${property}"`;
    checkForInvalidFlags(message, keys, where);
    let notesClone = [];
    if (notes) {
      for (const note of notes) {
        let noteKeys = {};
        let noteText = getFlag(note, noteKeys, "text", mustBeString);
        let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
        checkForInvalidFlags(note, noteKeys, where);
        notesClone.push({
          text: noteText || "",
          location: sanitizeLocation(noteLocation, where)
        });
      }
    }
    messagesClone.push({
      text: text || "",
      location: sanitizeLocation(location, where),
      notes: notesClone,
      detail: stash.store(detail)
    });
    index++;
  }
  return messagesClone;
}
function convertOutputFiles({path: path2, contents}) {
  let text = null;
  return {
    path: path2,
    contents,
    get text() {
      if (text === null)
        text = decodeUTF8(contents);
      return text;
    }
  };
}

// lib/node.ts
var child_process = __webpack_require__(/*! child_process */ "child_process");
var crypto = __webpack_require__(/*! crypto */ "crypto");
var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");
var os = __webpack_require__(/*! os */ "os");
var tty = __webpack_require__(/*! tty */ "tty");
var esbuildCommandAndArgs = () => {
  if (process.env.ESBUILD_BINARY_PATH) {
    return [path.resolve(process.env.ESBUILD_BINARY_PATH), []];
  }
  if (false) {}
  if (process.platform === "win32") {
    return [path.join(__dirname, "..", "esbuild.exe"), []];
  }
  let pathForYarn2 = path.join(__dirname, "..", "esbuild");
  if (fs.existsSync(pathForYarn2)) {
    return [pathForYarn2, []];
  }
  return [path.join(__dirname, "..", "bin", "esbuild"), []];
};
var isTTY = () => tty.isatty(2);
var version = "0.9.3";
var build = (options) => ensureServiceIsRunning().build(options);
var serve = (serveOptions, buildOptions) => ensureServiceIsRunning().serve(serveOptions, buildOptions);
var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
var buildSync = (options) => {
  let result;
  runServiceSync((service) => service.buildOrServe("buildSync", null, null, options, isTTY(), process.cwd(), (err, res) => {
    if (err)
      throw err;
    result = res;
  }));
  return result;
};
var transformSync = (input, options) => {
  let result;
  runServiceSync((service) => service.transform("transformSync", null, input, options || {}, isTTY(), {
    readFile(tempFile, callback) {
      try {
        let contents = fs.readFileSync(tempFile, "utf8");
        try {
          fs.unlinkSync(tempFile);
        } catch (e) {
        }
        callback(null, contents);
      } catch (err) {
        callback(err, null);
      }
    },
    writeFile(contents, callback) {
      try {
        let tempFile = randomFileName();
        fs.writeFileSync(tempFile, contents);
        callback(tempFile);
      } catch (e) {
        callback(null);
      }
    }
  }, (err, res) => {
    if (err)
      throw err;
    result = res;
  }));
  return result;
};
var initializeWasCalled = false;
var initialize = (options) => {
  options = validateInitializeOptions(options || {});
  if (options.wasmURL)
    throw new Error(`The "wasmURL" option only works in the browser`);
  if (options.worker)
    throw new Error(`The "worker" option only works in the browser`);
  if (initializeWasCalled)
    throw new Error('Cannot call "initialize" more than once');
  initializeWasCalled = true;
  return Promise.resolve();
};
var defaultWD = process.cwd();
var longLivedService;
var ensureServiceIsRunning = () => {
  if (!longLivedService)
    longLivedService = startRunningService();
  return longLivedService;
};
var startRunningService = () => {
  let [command, args] = esbuildCommandAndArgs();
  let child = child_process.spawn(command, args.concat(`--service=${"0.9.3"}`, "--ping"), {
    windowsHide: true,
    stdio: ["pipe", "pipe", "inherit"]
  });
  let {readFromStdout, afterClose, service} = createChannel({
    writeToStdin(bytes) {
      child.stdin.write(bytes);
    },
    readFileSync: fs.readFileSync,
    isSync: false,
    isBrowser: false
  });
  const stdin = child.stdin;
  const stdout = child.stdout;
  stdout.on("data", readFromStdout);
  stdout.on("end", afterClose);
  let refCount = 0;
  child.unref();
  if (stdin.unref) {
    stdin.unref();
  }
  if (stdout.unref) {
    stdout.unref();
  }
  const refs = {
    ref() {
      if (++refCount === 1)
        child.ref();
    },
    unref() {
      if (--refCount === 0)
        child.unref();
    }
  };
  return {
    build: (options) => {
      return new Promise((resolve, reject) => {
        service.buildOrServe("build", refs, null, options, isTTY(), defaultWD, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    },
    serve: (serveOptions, buildOptions) => {
      if (serveOptions === null || typeof serveOptions !== "object")
        throw new Error("The first argument must be an object");
      return new Promise((resolve, reject) => service.buildOrServe("serve", refs, serveOptions, buildOptions, isTTY(), defaultWD, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }));
    },
    transform: (input, options) => {
      return new Promise((resolve, reject) => service.transform("transform", refs, input, options || {}, isTTY(), {
        readFile(tempFile, callback) {
          try {
            fs.readFile(tempFile, "utf8", (err, contents) => {
              try {
                fs.unlink(tempFile, () => callback(err, contents));
              } catch (e) {
                callback(err, contents);
              }
            });
          } catch (err) {
            callback(err, null);
          }
        },
        writeFile(contents, callback) {
          try {
            let tempFile = randomFileName();
            fs.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
          } catch (e) {
            callback(null);
          }
        }
      }, (err, res) => err ? reject(err) : resolve(res)));
    }
  };
};
var runServiceSync = (callback) => {
  let [command, args] = esbuildCommandAndArgs();
  let stdin = new Uint8Array();
  let {readFromStdout, afterClose, service} = createChannel({
    writeToStdin(bytes) {
      if (stdin.length !== 0)
        throw new Error("Must run at most one command");
      stdin = bytes;
    },
    isSync: true,
    isBrowser: false
  });
  callback(service);
  let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.9.3"}`), {
    cwd: process.cwd(),
    windowsHide: true,
    input: stdin,
    maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
  });
  readFromStdout(stdout);
  afterClose();
};
var randomFileName = () => {
  return path.join(os.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (false);

/* WEBPACK VAR INJECTION */}.call(this, "..\\..\\node_modules\\esbuild\\lib"))

/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
const {stdout: stdoutColor, stderr: stderrColor} = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __webpack_require__(/*! ./util */ "./node_modules/chalk/source/util.js");

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __webpack_require__(/*! ./templates */ "./node_modules/chalk/source/templates.js");
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ "./node_modules/chalk/source/templates.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/templates.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/chalk/source/util.js":
/*!*******************************************!*\
  !*** ./node_modules/chalk/source/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const tty = __webpack_require__(/*! tty */ "tty");
const hasFlag = __webpack_require__(/*! has-flag */ "./node_modules/has-flag/index.js");

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/Init.ts":
/*!*********************!*\
  !*** ./src/Init.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Init; });
/* harmony import */ var _file_FileWatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file/FileWatch */ "./src/file/FileWatch.ts");
/* harmony import */ var _T_ResURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_T/ResURL */ "./src/_T/ResURL.ts");


const fs = __webpack_require__(/*! fs */ "fs");
/**
 * 初始化
 */
class Init {
    /**
     * 初始化项目
     */
    static init() {
        return new Promise((r, e) => {
            try {
                //创建后端缓存目录
                fs.mkdirSync(_T_ResURL__WEBPACK_IMPORTED_MODULE_1__["default"].codeBuildCacheURL);
            }
            catch (_a) { }
            //开启文件监听
            _file_FileWatch__WEBPACK_IMPORTED_MODULE_0__["default"].start();
            //
            r();
        });
    }
}


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_FileOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file/FileOperation */ "./src/file/FileOperation.ts");
/* harmony import */ var _Init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Init */ "./src/Init.ts");


const chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
const http = __webpack_require__(/*! http */ "http");
//先初始化项目
_Init__WEBPACK_IMPORTED_MODULE_1__["default"].init().then(() => {
    // req 请求， res 响应 
    const app = http.createServer(function (req, res) {
        //设置跨域
        res.writeHead(200, {
            'Content-Type': 'application/javascript;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE'
        });
        //get请求
        if (req.method === 'GET') {
            //解析出路径
            let _url = req.url;
            //
            _file_FileOperation__WEBPACK_IMPORTED_MODULE_0__["default"].getFile(_url).then((data) => {
                //返回数据
                res.end(data);
            });
        }
        //post请求
        else if (req.method === 'POST') {
            //
            res.end('不支持post请求。');
        }
    });
    //设置端口
    app.listen(3060);
    //提示
    console.log(chalk.magenta('服务器打开成功 http://localhost:3060'));
});


/***/ }),

/***/ "./src/_T/ResURL.ts":
/*!**************************!*\
  !*** ./src/_T/ResURL.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResURL; });
/* harmony import */ var _URLT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URLT */ "./src/_T/URLT.ts");

/**
 * 资源路径类
 */
class ResURL {
    /** 服务路径 */
    static get serveURL() {
        return 'http://localhost:3060/';
    }
    /** 后端根路径 */
    static get rootURL() {
        return _URLT__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(__dirname, '../../');
    }
    /** src路径 */
    static get srcURL() {
        // return resolve(this.rootURL, '../../src/');
        return _URLT__WEBPACK_IMPORTED_MODULE_0__["default"].join(this.rootURL, 'testSrc/');
    }
    /** 代码打包缓存路径 */
    static get codeBuildCacheURL() {
        return _URLT__WEBPACK_IMPORTED_MODULE_0__["default"].join(this.rootURL, 'node_modules/_esBuildCodeUrl/');
    }
}

/* WEBPACK VAR INJECTION */}.call(this, "src\\_T"))

/***/ }),

/***/ "./src/_T/URLT.ts":
/*!************************!*\
  !*** ./src/_T/URLT.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URLT; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 路径工具
 */
class URLT {
    /**
     * 将所有参数连接在一起，并规范化结果路径。
     * 参数必须是字符串。
     * 在v0.8中，非字符串参数被无声地忽略。
     * 在v0.10及以上版本中，会抛出异常。
     * @param paths url列表
     */
    static join(...paths) {
        let _url = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(...paths);
        return _url;
    }
    /**
     * 最右边的参数被认为是{to}。
     * 其他参数被认为是{from}的数组。
     * 从最左边的{from}参数开始，将{to}解析为一个绝对路径。
     * 如果{to}还不是绝对路径，{from}参数将按从右到左的顺序前缀，直到找到一个绝对路径。
     * 如果在使用了所有的{from}路径后仍然没有找到绝对路径，也会使用当前工作目录。
     * 生成的路径被规范化，并且末尾的斜杠被删除，除非路径被解析到根目录。
     * @param pathSegments
     */
    static resolve(...pathSegments) {
        return Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(...pathSegments);
    }
}


/***/ }),

/***/ "./src/file/FileBuild.ts":
/*!*******************************!*\
  !*** ./src/file/FileBuild.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileBuild; });
/* harmony import */ var src_T_ResURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_T/ResURL */ "./src/_T/ResURL.ts");
/* harmony import */ var src_T_URLT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_T/URLT */ "./src/_T/URLT.ts");
/* harmony import */ var _FileTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileTransition */ "./src/file/FileTransition.ts");



var fs = __webpack_require__(/*! fs */ "fs");
const esbuild = __webpack_require__(/*! esbuild */ "../../node_modules/esbuild/lib/main.js");
/**
 * 文件打包
 */
class FileBuild {
    /**
     * 打包
     * @param _url 模块路径
     */
    static build(_url) {
        return new Promise((r, e) => {
            //
            let _cacheFileUrl = src_T_URLT__WEBPACK_IMPORTED_MODULE_1__["default"].join(src_T_ResURL__WEBPACK_IMPORTED_MODULE_0__["default"].codeBuildCacheURL, _url.match(/[^\/\\]*?$/)[0] + '_' + Date.now());
            //打包到缓存目录
            esbuild.buildSync({
                entryPoints: [src_T_URLT__WEBPACK_IMPORTED_MODULE_1__["default"].join(src_T_ResURL__WEBPACK_IMPORTED_MODULE_0__["default"].srcURL, _url)],
                outfile: _cacheFileUrl,
            });
            //读取目标文件
            let content = fs.readFileSync(_cacheFileUrl);
            //文件过渡
            content = _FileTransition__WEBPACK_IMPORTED_MODULE_2__["default"].buildBack(content); //打包后
            //删除文件
            fs.unlinkSync(_cacheFileUrl);
            //包装内容
            content = `//
//esBuild: ${Date.now()}
//
${content}
//          `;
            //返回内容
            r(content);
        });
    }
}


/***/ }),

/***/ "./src/file/FileCache.ts":
/*!*******************************!*\
  !*** ./src/file/FileCache.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileCache; });
/* harmony import */ var _FileModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileModule */ "./src/file/FileModule.ts");

/**
 * 文件缓存
 */
class FileCache {
    /**
     * 根据模块路径获取模块
     * @param _url 模块路径
     */
    static getModule(_url) {
        let _module = this.m_moduleCache[_url];
        if (!_module) {
            _module = new _FileModule__WEBPACK_IMPORTED_MODULE_0__["default"](_url);
            this.m_moduleCache[_url] = _module;
        }
        return _module;
    }
}
/** 文件模块缓存列表 */
FileCache.m_moduleCache = {};


/***/ }),

/***/ "./src/file/FileModule.ts":
/*!********************************!*\
  !*** ./src/file/FileModule.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileModule; });
/* harmony import */ var _FileBuild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileBuild */ "./src/file/FileBuild.ts");

/**
 * 文件模块
 */
class FileModule {
    /**
     * 初始化
     * @param _url 模块路径
     */
    constructor(_url) {
        this.m_url = _url;
        //
        this.getContent();
    }
    /** 获取 模块期约 */
    get promise() {
        return this.m_promise;
    }
    /** 获取 模块内容 */
    get content() {
        return this.m_content;
    }
    /**
     * 更新内容
     */
    update() {
        this.getContent();
    }
    /** 获取内容 */
    getContent() {
        //先判断地址是否存在
        if (this.m_url) {
            //初始化期约
            this.m_promise = new Promise((r, e) => {
                //打包文件
                _FileBuild__WEBPACK_IMPORTED_MODULE_0__["default"].build(this.m_url).then((_content) => {
                    //赋值内容
                    this.m_content = _content;
                    //
                    r(this);
                }).catch((E) => {
                    //空内容
                    this.m_content = '';
                    //
                    r(this);
                });
            });
        }
        else {
            this.m_promise = new Promise((r, e) => {
                this.m_content = '';
                r(this);
            });
        }
    }
}


/***/ }),

/***/ "./src/file/FileOperation.ts":
/*!***********************************!*\
  !*** ./src/file/FileOperation.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileOperation; });
/* harmony import */ var _FileCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileCache */ "./src/file/FileCache.ts");

/**
 * 文件操作
 */
class FileOperation {
    /**
     * 获取文件
     * @param _url 绝对路径
     */
    static getFile(_url) {
        return new Promise((r, e) => {
            _FileCache__WEBPACK_IMPORTED_MODULE_0__["default"].getModule(_url).promise.then((module) => {
                r(module.content);
            });
        });
    }
}


/***/ }),

/***/ "./src/file/FileTransition.ts":
/*!************************************!*\
  !*** ./src/file/FileTransition.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileTransition; });
/**
 * 文件过渡操作
 * 当从本地读取文件的是否会经过这个流程
 */
class FileTransition {
    /**
     * 打包后
     * @param _content 文件内容
     */
    static buildBack(_content) {
        //处理路径
        _content = _content.replace(/import.*?["'](.*?)["'];/g, (_, text) => {
            console.log(text);
            return text;
        });
        return _content;
    }
}


/***/ }),

/***/ "./src/file/FileWatch.ts":
/*!*******************************!*\
  !*** ./src/file/FileWatch.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileWatch; });
/**
 * 文件监视
 */
class FileWatch {
    /**
     * 开始监视
     */
    static start() { }
}


/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0Y6L0xheWFNaW5pR2FtZS9ub2RlX21vZHVsZXMvZXNidWlsZC9saWIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9Jbml0LnRzIiwid2VicGFjazovLy8uL3NyYy9NYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9fVC9SZXNVUkwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19UL1VSTFQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGUvRmlsZUJ1aWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9maWxlL0ZpbGVDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsZS9GaWxlTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9maWxlL0ZpbGVPcGVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGUvRmlsZVRyYW5zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGUvRmlsZVdhdGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0dHlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsZ0JBQWdCLFFBQVEsU0FBUztBQUNqQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGlCQUFpQixPQUFPLFFBQVE7QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQyxnQkFBZ0IsU0FBUyxPQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxFQUFFLFVBQVUsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYixXQUFXLG1CQUFPLENBQUMsY0FBSTtBQUN2QixZQUFZLG1CQUFPLENBQUMsZ0JBQUs7QUFDekIsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDLE9BQU8sSUFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FB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QztDQUNKOzs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTs7O0dBR0c7QUFDWSxNQUFNLGNBQWM7SUFDL0I7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFnQjtRQUNwQyxNQUFNO1FBQ04sUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUFBO0FBQUE7O0dBRUc7QUFDWSxNQUFNLFNBQVM7SUFDMUI7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUM7Q0FDNUI7Ozs7Ozs7Ozs7OztBQ1JELDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL01haW4udHNcIik7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufTtcblxuLy8gbGliL25vZGUudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBidWlsZDogKCkgPT4gYnVpbGQsXG4gIGJ1aWxkU3luYzogKCkgPT4gYnVpbGRTeW5jLFxuICBpbml0aWFsaXplOiAoKSA9PiBpbml0aWFsaXplLFxuICBzZXJ2ZTogKCkgPT4gc2VydmUsXG4gIHRyYW5zZm9ybTogKCkgPT4gdHJhbnNmb3JtLFxuICB0cmFuc2Zvcm1TeW5jOiAoKSA9PiB0cmFuc2Zvcm1TeW5jLFxuICB2ZXJzaW9uOiAoKSA9PiB2ZXJzaW9uXG59KTtcblxuLy8gbGliL3N0ZGlvX3Byb3RvY29sLnRzXG5mdW5jdGlvbiBlbmNvZGVQYWNrZXQocGFja2V0KSB7XG4gIGxldCB2aXNpdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgYmIud3JpdGU4KDApO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgYmIud3JpdGU4KDEpO1xuICAgICAgYmIud3JpdGU4KCt2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGJiLndyaXRlOCgyKTtcbiAgICAgIGJiLndyaXRlMzIodmFsdWUgfCAwKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgYmIud3JpdGU4KDMpO1xuICAgICAgYmIud3JpdGUoZW5jb2RlVVRGOCh2YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICBiYi53cml0ZTgoNCk7XG4gICAgICBiYi53cml0ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBiYi53cml0ZTgoNSk7XG4gICAgICBiYi53cml0ZTMyKHZhbHVlLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgIHZpc2l0KGl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgIGJiLndyaXRlOCg2KTtcbiAgICAgIGJiLndyaXRlMzIoa2V5cy5sZW5ndGgpO1xuICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgYmIud3JpdGUoZW5jb2RlVVRGOChrZXkpKTtcbiAgICAgICAgdmlzaXQodmFsdWVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBsZXQgYmIgPSBuZXcgQnl0ZUJ1ZmZlcigpO1xuICBiYi53cml0ZTMyKDApO1xuICBiYi53cml0ZTMyKHBhY2tldC5pZCA8PCAxIHwgKyFwYWNrZXQuaXNSZXF1ZXN0KTtcbiAgdmlzaXQocGFja2V0LnZhbHVlKTtcbiAgd3JpdGVVSW50MzJMRShiYi5idWYsIGJiLmxlbiAtIDQsIDApO1xuICByZXR1cm4gYmIuYnVmLnN1YmFycmF5KDAsIGJiLmxlbik7XG59XG5mdW5jdGlvbiBkZWNvZGVQYWNrZXQoYnl0ZXMpIHtcbiAgbGV0IHZpc2l0ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYmIucmVhZDgoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICEhYmIucmVhZDgoKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGJiLnJlYWQzMigpO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gZGVjb2RlVVRGOChiYi5yZWFkKCkpO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gYmIucmVhZCgpO1xuICAgICAgY2FzZSA1OiB7XG4gICAgICAgIGxldCBjb3VudCA9IGJiLnJlYWQzMigpO1xuICAgICAgICBsZXQgdmFsdWUyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhbHVlMi5wdXNoKHZpc2l0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTI7XG4gICAgICB9XG4gICAgICBjYXNlIDY6IHtcbiAgICAgICAgbGV0IGNvdW50ID0gYmIucmVhZDMyKCk7XG4gICAgICAgIGxldCB2YWx1ZTIgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFsdWUyW2RlY29kZVVURjgoYmIucmVhZCgpKV0gPSB2aXNpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTI7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhY2tldFwiKTtcbiAgICB9XG4gIH07XG4gIGxldCBiYiA9IG5ldyBCeXRlQnVmZmVyKGJ5dGVzKTtcbiAgbGV0IGlkID0gYmIucmVhZDMyKCk7XG4gIGxldCBpc1JlcXVlc3QgPSAoaWQgJiAxKSA9PT0gMDtcbiAgaWQgPj4+PSAxO1xuICBsZXQgdmFsdWUgPSB2aXNpdCgpO1xuICBpZiAoYmIucHRyICE9PSBieXRlcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhY2tldFwiKTtcbiAgfVxuICByZXR1cm4ge2lkLCBpc1JlcXVlc3QsIHZhbHVlfTtcbn1cbnZhciBCeXRlQnVmZmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihidWYgPSBuZXcgVWludDhBcnJheSgxMDI0KSkge1xuICAgIHRoaXMuYnVmID0gYnVmO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLnB0ciA9IDA7XG4gIH1cbiAgX3dyaXRlKGRlbHRhKSB7XG4gICAgaWYgKHRoaXMubGVuICsgZGVsdGEgPiB0aGlzLmJ1Zi5sZW5ndGgpIHtcbiAgICAgIGxldCBjbG9uZSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmxlbiArIGRlbHRhKSAqIDIpO1xuICAgICAgY2xvbmUuc2V0KHRoaXMuYnVmKTtcbiAgICAgIHRoaXMuYnVmID0gY2xvbmU7XG4gICAgfVxuICAgIHRoaXMubGVuICs9IGRlbHRhO1xuICAgIHJldHVybiB0aGlzLmxlbiAtIGRlbHRhO1xuICB9XG4gIHdyaXRlOCh2YWx1ZSkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLl93cml0ZSgxKTtcbiAgICB0aGlzLmJ1ZltvZmZzZXRdID0gdmFsdWU7XG4gIH1cbiAgd3JpdGUzMih2YWx1ZSkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLl93cml0ZSg0KTtcbiAgICB3cml0ZVVJbnQzMkxFKHRoaXMuYnVmLCB2YWx1ZSwgb2Zmc2V0KTtcbiAgfVxuICB3cml0ZShieXRlcykge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLl93cml0ZSg0ICsgYnl0ZXMubGVuZ3RoKTtcbiAgICB3cml0ZVVJbnQzMkxFKHRoaXMuYnVmLCBieXRlcy5sZW5ndGgsIG9mZnNldCk7XG4gICAgdGhpcy5idWYuc2V0KGJ5dGVzLCBvZmZzZXQgKyA0KTtcbiAgfVxuICBfcmVhZChkZWx0YSkge1xuICAgIGlmICh0aGlzLnB0ciArIGRlbHRhID4gdGhpcy5idWYubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhY2tldFwiKTtcbiAgICB9XG4gICAgdGhpcy5wdHIgKz0gZGVsdGE7XG4gICAgcmV0dXJuIHRoaXMucHRyIC0gZGVsdGE7XG4gIH1cbiAgcmVhZDgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmW3RoaXMuX3JlYWQoMSldO1xuICB9XG4gIHJlYWQzMigpIHtcbiAgICByZXR1cm4gcmVhZFVJbnQzMkxFKHRoaXMuYnVmLCB0aGlzLl9yZWFkKDQpKTtcbiAgfVxuICByZWFkKCkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLnJlYWQzMigpO1xuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgbGV0IHB0ciA9IHRoaXMuX3JlYWQoYnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQodGhpcy5idWYuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW5ndGgpKTtcbiAgICByZXR1cm4gYnl0ZXM7XG4gIH1cbn07XG52YXIgZW5jb2RlVVRGODtcbnZhciBkZWNvZGVVVEY4O1xuaWYgKHR5cGVvZiBUZXh0RW5jb2RlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgVGV4dERlY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgbGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgbGV0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgZW5jb2RlVVRGOCA9ICh0ZXh0KSA9PiBlbmNvZGVyLmVuY29kZSh0ZXh0KTtcbiAgZGVjb2RlVVRGOCA9IChieXRlcykgPT4gZGVjb2Rlci5kZWNvZGUoYnl0ZXMpO1xufSBlbHNlIGlmICh0eXBlb2YgQnVmZmVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGVuY29kZVVURjggPSAodGV4dCkgPT4ge1xuICAgIGxldCBidWZmZXIgPSBCdWZmZXIuZnJvbSh0ZXh0KTtcbiAgICBpZiAoIShidWZmZXIgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcbiAgZGVjb2RlVVRGOCA9IChieXRlcykgPT4gQnVmZmVyLmZyb20oYnl0ZXMpLnRvU3RyaW5nKCk7XG59IGVsc2Uge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBVVEYtOCBjb2RlYyBmb3VuZFwiKTtcbn1cbmZ1bmN0aW9uIHJlYWRVSW50MzJMRShidWZmZXIsIG9mZnNldCkge1xuICByZXR1cm4gYnVmZmVyW29mZnNldCsrXSB8IGJ1ZmZlcltvZmZzZXQrK10gPDwgOCB8IGJ1ZmZlcltvZmZzZXQrK10gPDwgMTYgfCBidWZmZXJbb2Zmc2V0KytdIDw8IDI0O1xufVxuZnVuY3Rpb24gd3JpdGVVSW50MzJMRShidWZmZXIsIHZhbHVlLCBvZmZzZXQpIHtcbiAgYnVmZmVyW29mZnNldCsrXSA9IHZhbHVlO1xuICBidWZmZXJbb2Zmc2V0KytdID0gdmFsdWUgPj4gODtcbiAgYnVmZmVyW29mZnNldCsrXSA9IHZhbHVlID4+IDE2O1xuICBidWZmZXJbb2Zmc2V0KytdID0gdmFsdWUgPj4gMjQ7XG59XG5cbi8vIGxpYi9jb21tb24udHNcbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0KHRhcmdldCkge1xuICB0YXJnZXQgKz0gXCJcIjtcbiAgaWYgKHRhcmdldC5pbmRleE9mKFwiLFwiKSA+PSAwKVxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0YXJnZXQ6ICR7dGFyZ2V0fWApO1xuICByZXR1cm4gdGFyZ2V0O1xufVxudmFyIGNhbkJlQW55dGhpbmcgPSAoKSA9PiBudWxsO1xudmFyIG11c3RCZUJvb2xlYW4gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgPyBudWxsIDogXCJhIGJvb2xlYW5cIjtcbnZhciBtdXN0QmVCb29sZWFuT3JPYmplY3QgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IG51bGwgOiBcImEgYm9vbGVhbiBvciBhbiBvYmplY3RcIjtcbnZhciBtdXN0QmVTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IG51bGwgOiBcImEgc3RyaW5nXCI7XG52YXIgbXVzdEJlUmVnRXhwID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCA/IG51bGwgOiBcImEgUmVnRXhwIG9iamVjdFwiO1xudmFyIG11c3RCZUludGVnZXIgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA9PT0gKHZhbHVlIHwgMCkgPyBudWxsIDogXCJhbiBpbnRlZ2VyXCI7XG52YXIgbXVzdEJlRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gbnVsbCA6IFwiYSBmdW5jdGlvblwiO1xudmFyIG11c3RCZUFycmF5ID0gKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IG51bGwgOiBcImFuIGFycmF5XCI7XG52YXIgbXVzdEJlT2JqZWN0ID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gbnVsbCA6IFwiYW4gb2JqZWN0XCI7XG52YXIgbXVzdEJlT2JqZWN0T3JOdWxsID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gbnVsbCA6IFwiYW4gb2JqZWN0IG9yIG51bGxcIjtcbnZhciBtdXN0QmVTdHJpbmdPckJvb2xlYW4gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiID8gbnVsbCA6IFwiYSBzdHJpbmcgb3IgYSBib29sZWFuXCI7XG52YXIgbXVzdEJlU3RyaW5nT3JPYmplY3QgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gbnVsbCA6IFwiYSBzdHJpbmcgb3IgYW4gb2JqZWN0XCI7XG52YXIgbXVzdEJlU3RyaW5nT3JBcnJheSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpID8gbnVsbCA6IFwiYSBzdHJpbmcgb3IgYW4gYXJyYXlcIjtcbnZhciBtdXN0QmVTdHJpbmdPclVpbnQ4QXJyYXkgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBudWxsIDogXCJhIHN0cmluZyBvciBhIFVpbnQ4QXJyYXlcIjtcbmZ1bmN0aW9uIGdldEZsYWcob2JqZWN0LCBrZXlzLCBrZXksIG11c3RCZUZuKSB7XG4gIGxldCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICBrZXlzW2tleSArIFwiXCJdID0gdHJ1ZTtcbiAgaWYgKHZhbHVlID09PSB2b2lkIDApXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgbGV0IG11c3RCZSA9IG11c3RCZUZuKHZhbHVlKTtcbiAgaWYgKG11c3RCZSAhPT0gbnVsbClcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtrZXl9XCIgbXVzdCBiZSAke211c3RCZX1gKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tGb3JJbnZhbGlkRmxhZ3Mob2JqZWN0LCBrZXlzLCB3aGVyZSkge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5IGluIGtleXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgb3B0aW9uICR7d2hlcmV9OiBcIiR7a2V5fVwiYCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUluaXRpYWxpemVPcHRpb25zKG9wdGlvbnMpIHtcbiAgbGV0IGtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgd2FzbVVSTCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJ3YXNtVVJMXCIsIG11c3RCZVN0cmluZyk7XG4gIGxldCB3b3JrZXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwid29ya2VyXCIsIG11c3RCZUJvb2xlYW4pO1xuICBjaGVja0ZvckludmFsaWRGbGFncyhvcHRpb25zLCBrZXlzLCBcImluIHN0YXJ0U2VydmljZSgpIGNhbGxcIik7XG4gIHJldHVybiB7XG4gICAgd2FzbVVSTCxcbiAgICB3b3JrZXJcbiAgfTtcbn1cbmZ1bmN0aW9uIHB1c2hMb2dGbGFncyhmbGFncywgb3B0aW9ucywga2V5cywgaXNUVFkyLCBsb2dMZXZlbERlZmF1bHQpIHtcbiAgbGV0IGNvbG9yID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImNvbG9yXCIsIG11c3RCZUJvb2xlYW4pO1xuICBsZXQgbG9nTGV2ZWwgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwibG9nTGV2ZWxcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IGxvZ0xpbWl0ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImxvZ0xpbWl0XCIsIG11c3RCZUludGVnZXIpO1xuICBpZiAoY29sb3IpXG4gICAgZmxhZ3MucHVzaChgLS1jb2xvcj0ke2NvbG9yfWApO1xuICBlbHNlIGlmIChpc1RUWTIpXG4gICAgZmxhZ3MucHVzaChgLS1jb2xvcj10cnVlYCk7XG4gIGZsYWdzLnB1c2goYC0tbG9nLWxldmVsPSR7bG9nTGV2ZWwgfHwgbG9nTGV2ZWxEZWZhdWx0fWApO1xuICBmbGFncy5wdXNoKGAtLWxvZy1saW1pdD0ke2xvZ0xpbWl0IHx8IDB9YCk7XG59XG5mdW5jdGlvbiBwdXNoQ29tbW9uRmxhZ3MoZmxhZ3MsIG9wdGlvbnMsIGtleXMpIHtcbiAgbGV0IHNvdXJjZXNDb250ZW50ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInNvdXJjZXNDb250ZW50XCIsIG11c3RCZUJvb2xlYW4pO1xuICBsZXQgdGFyZ2V0ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInRhcmdldFwiLCBtdXN0QmVTdHJpbmdPckFycmF5KTtcbiAgbGV0IGZvcm1hdCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJmb3JtYXRcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IGdsb2JhbE5hbWUgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiZ2xvYmFsTmFtZVwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgbWluaWZ5ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcIm1pbmlmeVwiLCBtdXN0QmVCb29sZWFuKTtcbiAgbGV0IG1pbmlmeVN5bnRheCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJtaW5pZnlTeW50YXhcIiwgbXVzdEJlQm9vbGVhbik7XG4gIGxldCBtaW5pZnlXaGl0ZXNwYWNlID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcIm1pbmlmeVdoaXRlc3BhY2VcIiwgbXVzdEJlQm9vbGVhbik7XG4gIGxldCBtaW5pZnlJZGVudGlmaWVycyA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJtaW5pZnlJZGVudGlmaWVyc1wiLCBtdXN0QmVCb29sZWFuKTtcbiAgbGV0IGNoYXJzZXQgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiY2hhcnNldFwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgdHJlZVNoYWtpbmcgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwidHJlZVNoYWtpbmdcIiwgbXVzdEJlU3RyaW5nT3JCb29sZWFuKTtcbiAgbGV0IGpzeEZhY3RvcnkgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwianN4RmFjdG9yeVwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQganN4RnJhZ21lbnQgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwianN4RnJhZ21lbnRcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IGRlZmluZSA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJkZWZpbmVcIiwgbXVzdEJlT2JqZWN0KTtcbiAgbGV0IHB1cmUgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwicHVyZVwiLCBtdXN0QmVBcnJheSk7XG4gIGxldCBrZWVwTmFtZXMgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwia2VlcE5hbWVzXCIsIG11c3RCZUJvb2xlYW4pO1xuICBpZiAoc291cmNlc0NvbnRlbnQgIT09IHZvaWQgMClcbiAgICBmbGFncy5wdXNoKGAtLXNvdXJjZXMtY29udGVudD0ke3NvdXJjZXNDb250ZW50fWApO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSlcbiAgICAgIGZsYWdzLnB1c2goYC0tdGFyZ2V0PSR7QXJyYXkuZnJvbSh0YXJnZXQpLm1hcCh2YWxpZGF0ZVRhcmdldCkuam9pbihcIixcIil9YCk7XG4gICAgZWxzZVxuICAgICAgZmxhZ3MucHVzaChgLS10YXJnZXQ9JHt2YWxpZGF0ZVRhcmdldCh0YXJnZXQpfWApO1xuICB9XG4gIGlmIChmb3JtYXQpXG4gICAgZmxhZ3MucHVzaChgLS1mb3JtYXQ9JHtmb3JtYXR9YCk7XG4gIGlmIChnbG9iYWxOYW1lKVxuICAgIGZsYWdzLnB1c2goYC0tZ2xvYmFsLW5hbWU9JHtnbG9iYWxOYW1lfWApO1xuICBpZiAobWluaWZ5KVxuICAgIGZsYWdzLnB1c2goXCItLW1pbmlmeVwiKTtcbiAgaWYgKG1pbmlmeVN5bnRheClcbiAgICBmbGFncy5wdXNoKFwiLS1taW5pZnktc3ludGF4XCIpO1xuICBpZiAobWluaWZ5V2hpdGVzcGFjZSlcbiAgICBmbGFncy5wdXNoKFwiLS1taW5pZnktd2hpdGVzcGFjZVwiKTtcbiAgaWYgKG1pbmlmeUlkZW50aWZpZXJzKVxuICAgIGZsYWdzLnB1c2goXCItLW1pbmlmeS1pZGVudGlmaWVyc1wiKTtcbiAgaWYgKGNoYXJzZXQpXG4gICAgZmxhZ3MucHVzaChgLS1jaGFyc2V0PSR7Y2hhcnNldH1gKTtcbiAgaWYgKHRyZWVTaGFraW5nICE9PSB2b2lkIDAgJiYgdHJlZVNoYWtpbmcgIT09IHRydWUpXG4gICAgZmxhZ3MucHVzaChgLS10cmVlLXNoYWtpbmc9JHt0cmVlU2hha2luZ31gKTtcbiAgaWYgKGpzeEZhY3RvcnkpXG4gICAgZmxhZ3MucHVzaChgLS1qc3gtZmFjdG9yeT0ke2pzeEZhY3Rvcnl9YCk7XG4gIGlmIChqc3hGcmFnbWVudClcbiAgICBmbGFncy5wdXNoKGAtLWpzeC1mcmFnbWVudD0ke2pzeEZyYWdtZW50fWApO1xuICBpZiAoZGVmaW5lKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmluZSkge1xuICAgICAgaWYgKGtleS5pbmRleE9mKFwiPVwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVmaW5lOiAke2tleX1gKTtcbiAgICAgIGZsYWdzLnB1c2goYC0tZGVmaW5lOiR7a2V5fT0ke2RlZmluZVtrZXldfWApO1xuICAgIH1cbiAgfVxuICBpZiAocHVyZSlcbiAgICBmb3IgKGxldCBmbiBvZiBwdXJlKVxuICAgICAgZmxhZ3MucHVzaChgLS1wdXJlOiR7Zm59YCk7XG4gIGlmIChrZWVwTmFtZXMpXG4gICAgZmxhZ3MucHVzaChgLS1rZWVwLW5hbWVzYCk7XG59XG5mdW5jdGlvbiBmbGFnc0ZvckJ1aWxkT3B0aW9ucyhjYWxsTmFtZSwgb3B0aW9ucywgaXNUVFkyLCBsb2dMZXZlbERlZmF1bHQsIHdyaXRlRGVmYXVsdCkge1xuICB2YXIgX2E7XG4gIGxldCBmbGFncyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzdGRpbkNvbnRlbnRzID0gbnVsbDtcbiAgbGV0IHN0ZGluUmVzb2x2ZURpciA9IG51bGw7XG4gIGxldCB3YXRjaE1vZGUgPSBudWxsO1xuICBwdXNoTG9nRmxhZ3MoZmxhZ3MsIG9wdGlvbnMsIGtleXMsIGlzVFRZMiwgbG9nTGV2ZWxEZWZhdWx0KTtcbiAgcHVzaENvbW1vbkZsYWdzKGZsYWdzLCBvcHRpb25zLCBrZXlzKTtcbiAgbGV0IHNvdXJjZW1hcCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJzb3VyY2VtYXBcIiwgbXVzdEJlU3RyaW5nT3JCb29sZWFuKTtcbiAgbGV0IGJ1bmRsZSA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJidW5kbGVcIiwgbXVzdEJlQm9vbGVhbik7XG4gIGxldCB3YXRjaCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJ3YXRjaFwiLCBtdXN0QmVCb29sZWFuT3JPYmplY3QpO1xuICBsZXQgc3BsaXR0aW5nID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInNwbGl0dGluZ1wiLCBtdXN0QmVCb29sZWFuKTtcbiAgbGV0IHByZXNlcnZlU3ltbGlua3MgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwicHJlc2VydmVTeW1saW5rc1wiLCBtdXN0QmVCb29sZWFuKTtcbiAgbGV0IG1ldGFmaWxlID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcIm1ldGFmaWxlXCIsIG11c3RCZUJvb2xlYW4pO1xuICBsZXQgb3V0ZmlsZSA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJvdXRmaWxlXCIsIG11c3RCZVN0cmluZyk7XG4gIGxldCBvdXRkaXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwib3V0ZGlyXCIsIG11c3RCZVN0cmluZyk7XG4gIGxldCBvdXRiYXNlID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcIm91dGJhc2VcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IHBsYXRmb3JtID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInBsYXRmb3JtXCIsIG11c3RCZVN0cmluZyk7XG4gIGxldCB0c2NvbmZpZyA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJ0c2NvbmZpZ1wiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgcmVzb2x2ZUV4dGVuc2lvbnMgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwicmVzb2x2ZUV4dGVuc2lvbnNcIiwgbXVzdEJlQXJyYXkpO1xuICBsZXQgbm9kZVBhdGhzSW5wdXQgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwibm9kZVBhdGhzXCIsIG11c3RCZUFycmF5KTtcbiAgbGV0IG1haW5GaWVsZHMgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwibWFpbkZpZWxkc1wiLCBtdXN0QmVBcnJheSk7XG4gIGxldCBjb25kaXRpb25zID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImNvbmRpdGlvbnNcIiwgbXVzdEJlQXJyYXkpO1xuICBsZXQgZXh0ZXJuYWwgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiZXh0ZXJuYWxcIiwgbXVzdEJlQXJyYXkpO1xuICBsZXQgbG9hZGVyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImxvYWRlclwiLCBtdXN0QmVPYmplY3QpO1xuICBsZXQgb3V0RXh0ZW5zaW9uID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcIm91dEV4dGVuc2lvblwiLCBtdXN0QmVPYmplY3QpO1xuICBsZXQgcHVibGljUGF0aCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJwdWJsaWNQYXRoXCIsIG11c3RCZVN0cmluZyk7XG4gIGxldCBjaHVua05hbWVzID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImNodW5rTmFtZXNcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IGFzc2V0TmFtZXMgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiYXNzZXROYW1lc1wiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgaW5qZWN0ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImluamVjdFwiLCBtdXN0QmVBcnJheSk7XG4gIGxldCBiYW5uZXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiYmFubmVyXCIsIG11c3RCZU9iamVjdCk7XG4gIGxldCBmb290ZXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiZm9vdGVyXCIsIG11c3RCZU9iamVjdCk7XG4gIGxldCBlbnRyeVBvaW50cyA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJlbnRyeVBvaW50c1wiLCBtdXN0QmVBcnJheSk7XG4gIGxldCBhYnNXb3JraW5nRGlyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImFic1dvcmtpbmdEaXJcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IHN0ZGluID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInN0ZGluXCIsIG11c3RCZU9iamVjdCk7XG4gIGxldCB3cml0ZSA9IChfYSA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJ3cml0ZVwiLCBtdXN0QmVCb29sZWFuKSkgIT0gbnVsbCA/IF9hIDogd3JpdGVEZWZhdWx0O1xuICBsZXQgaW5jcmVtZW50YWwgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwiaW5jcmVtZW50YWxcIiwgbXVzdEJlQm9vbGVhbikgPT09IHRydWU7XG4gIGxldCBwbHVnaW5zID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInBsdWdpbnNcIiwgbXVzdEJlQXJyYXkpO1xuICBjaGVja0ZvckludmFsaWRGbGFncyhvcHRpb25zLCBrZXlzLCBgaW4gJHtjYWxsTmFtZX0oKSBjYWxsYCk7XG4gIGlmIChzb3VyY2VtYXApXG4gICAgZmxhZ3MucHVzaChgLS1zb3VyY2VtYXAke3NvdXJjZW1hcCA9PT0gdHJ1ZSA/IFwiXCIgOiBgPSR7c291cmNlbWFwfWB9YCk7XG4gIGlmIChidW5kbGUpXG4gICAgZmxhZ3MucHVzaChcIi0tYnVuZGxlXCIpO1xuICBpZiAod2F0Y2gpIHtcbiAgICBmbGFncy5wdXNoKFwiLS13YXRjaFwiKTtcbiAgICBpZiAodHlwZW9mIHdhdGNoID09PSBcImJvb2xlYW5cIikge1xuICAgICAgd2F0Y2hNb2RlID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB3YXRjaEtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IG9uUmVidWlsZCA9IGdldEZsYWcod2F0Y2gsIHdhdGNoS2V5cywgXCJvblJlYnVpbGRcIiwgbXVzdEJlRnVuY3Rpb24pO1xuICAgICAgY2hlY2tGb3JJbnZhbGlkRmxhZ3Mod2F0Y2gsIHdhdGNoS2V5cywgYG9uIFwid2F0Y2hcIiBpbiAke2NhbGxOYW1lfSgpIGNhbGxgKTtcbiAgICAgIHdhdGNoTW9kZSA9IHtvblJlYnVpbGR9O1xuICAgIH1cbiAgfVxuICBpZiAoc3BsaXR0aW5nKVxuICAgIGZsYWdzLnB1c2goXCItLXNwbGl0dGluZ1wiKTtcbiAgaWYgKHByZXNlcnZlU3ltbGlua3MpXG4gICAgZmxhZ3MucHVzaChcIi0tcHJlc2VydmUtc3ltbGlua3NcIik7XG4gIGlmIChtZXRhZmlsZSlcbiAgICBmbGFncy5wdXNoKGAtLW1ldGFmaWxlYCk7XG4gIGlmIChvdXRmaWxlKVxuICAgIGZsYWdzLnB1c2goYC0tb3V0ZmlsZT0ke291dGZpbGV9YCk7XG4gIGlmIChvdXRkaXIpXG4gICAgZmxhZ3MucHVzaChgLS1vdXRkaXI9JHtvdXRkaXJ9YCk7XG4gIGlmIChvdXRiYXNlKVxuICAgIGZsYWdzLnB1c2goYC0tb3V0YmFzZT0ke291dGJhc2V9YCk7XG4gIGlmIChwbGF0Zm9ybSlcbiAgICBmbGFncy5wdXNoKGAtLXBsYXRmb3JtPSR7cGxhdGZvcm19YCk7XG4gIGlmICh0c2NvbmZpZylcbiAgICBmbGFncy5wdXNoKGAtLXRzY29uZmlnPSR7dHNjb25maWd9YCk7XG4gIGlmIChyZXNvbHZlRXh0ZW5zaW9ucykge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiByZXNvbHZlRXh0ZW5zaW9ucykge1xuICAgICAgdmFsdWUgKz0gXCJcIjtcbiAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiLFwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVzb2x2ZSBleHRlbnNpb246ICR7dmFsdWV9YCk7XG4gICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGZsYWdzLnB1c2goYC0tcmVzb2x2ZS1leHRlbnNpb25zPSR7dmFsdWVzLmpvaW4oXCIsXCIpfWApO1xuICB9XG4gIGlmIChwdWJsaWNQYXRoKVxuICAgIGZsYWdzLnB1c2goYC0tcHVibGljLXBhdGg9JHtwdWJsaWNQYXRofWApO1xuICBpZiAoY2h1bmtOYW1lcylcbiAgICBmbGFncy5wdXNoKGAtLWNodW5rLW5hbWVzPSR7Y2h1bmtOYW1lc31gKTtcbiAgaWYgKGFzc2V0TmFtZXMpXG4gICAgZmxhZ3MucHVzaChgLS1hc3NldC1uYW1lcz0ke2Fzc2V0TmFtZXN9YCk7XG4gIGlmIChtYWluRmllbGRzKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIG1haW5GaWVsZHMpIHtcbiAgICAgIHZhbHVlICs9IFwiXCI7XG4gICAgICBpZiAodmFsdWUuaW5kZXhPZihcIixcIikgPj0gMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1haW4gZmllbGQ6ICR7dmFsdWV9YCk7XG4gICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGZsYWdzLnB1c2goYC0tbWFpbi1maWVsZHM9JHt2YWx1ZXMuam9pbihcIixcIil9YCk7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gW107XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgY29uZGl0aW9ucykge1xuICAgICAgdmFsdWUgKz0gXCJcIjtcbiAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiLFwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29uZGl0aW9uOiAke3ZhbHVlfWApO1xuICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBmbGFncy5wdXNoKGAtLWNvbmRpdGlvbnM9JHt2YWx1ZXMuam9pbihcIixcIil9YCk7XG4gIH1cbiAgaWYgKGV4dGVybmFsKVxuICAgIGZvciAobGV0IG5hbWUgb2YgZXh0ZXJuYWwpXG4gICAgICBmbGFncy5wdXNoKGAtLWV4dGVybmFsOiR7bmFtZX1gKTtcbiAgaWYgKGJhbm5lcikge1xuICAgIGZvciAobGV0IHR5cGUgaW4gYmFubmVyKSB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKFwiPVwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYmFubmVyIGZpbGUgdHlwZTogJHt0eXBlfWApO1xuICAgICAgZmxhZ3MucHVzaChgLS1iYW5uZXI6JHt0eXBlfT0ke2Jhbm5lclt0eXBlXX1gKTtcbiAgICB9XG4gIH1cbiAgaWYgKGZvb3Rlcikge1xuICAgIGZvciAobGV0IHR5cGUgaW4gZm9vdGVyKSB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKFwiPVwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZm9vdGVyIGZpbGUgdHlwZTogJHt0eXBlfWApO1xuICAgICAgZmxhZ3MucHVzaChgLS1mb290ZXI6JHt0eXBlfT0ke2Zvb3Rlclt0eXBlXX1gKTtcbiAgICB9XG4gIH1cbiAgaWYgKGluamVjdClcbiAgICBmb3IgKGxldCBwYXRoMiBvZiBpbmplY3QpXG4gICAgICBmbGFncy5wdXNoKGAtLWluamVjdDoke3BhdGgyfWApO1xuICBpZiAobG9hZGVyKSB7XG4gICAgZm9yIChsZXQgZXh0IGluIGxvYWRlcikge1xuICAgICAgaWYgKGV4dC5pbmRleE9mKFwiPVwiKSA+PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbG9hZGVyIGV4dGVuc2lvbjogJHtleHR9YCk7XG4gICAgICBmbGFncy5wdXNoKGAtLWxvYWRlcjoke2V4dH09JHtsb2FkZXJbZXh0XX1gKTtcbiAgICB9XG4gIH1cbiAgaWYgKG91dEV4dGVuc2lvbikge1xuICAgIGZvciAobGV0IGV4dCBpbiBvdXRFeHRlbnNpb24pIHtcbiAgICAgIGlmIChleHQuaW5kZXhPZihcIj1cIikgPj0gMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG91dCBleHRlbnNpb246ICR7ZXh0fWApO1xuICAgICAgZmxhZ3MucHVzaChgLS1vdXQtZXh0ZW5zaW9uOiR7ZXh0fT0ke291dEV4dGVuc2lvbltleHRdfWApO1xuICAgIH1cbiAgfVxuICBpZiAoZW50cnlQb2ludHMpIHtcbiAgICBmb3IgKGxldCBlbnRyeVBvaW50IG9mIGVudHJ5UG9pbnRzKSB7XG4gICAgICBlbnRyeVBvaW50ICs9IFwiXCI7XG4gICAgICBpZiAoZW50cnlQb2ludC5zdGFydHNXaXRoKFwiLVwiKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGVudHJ5IHBvaW50OiAke2VudHJ5UG9pbnR9YCk7XG4gICAgICBmbGFncy5wdXNoKGVudHJ5UG9pbnQpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RkaW4pIHtcbiAgICBsZXQgc3RkaW5LZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBsZXQgY29udGVudHMgPSBnZXRGbGFnKHN0ZGluLCBzdGRpbktleXMsIFwiY29udGVudHNcIiwgbXVzdEJlU3RyaW5nKTtcbiAgICBsZXQgcmVzb2x2ZURpciA9IGdldEZsYWcoc3RkaW4sIHN0ZGluS2V5cywgXCJyZXNvbHZlRGlyXCIsIG11c3RCZVN0cmluZyk7XG4gICAgbGV0IHNvdXJjZWZpbGUgPSBnZXRGbGFnKHN0ZGluLCBzdGRpbktleXMsIFwic291cmNlZmlsZVwiLCBtdXN0QmVTdHJpbmcpO1xuICAgIGxldCBsb2FkZXIyID0gZ2V0RmxhZyhzdGRpbiwgc3RkaW5LZXlzLCBcImxvYWRlclwiLCBtdXN0QmVTdHJpbmcpO1xuICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKHN0ZGluLCBzdGRpbktleXMsICdpbiBcInN0ZGluXCIgb2JqZWN0Jyk7XG4gICAgaWYgKHNvdXJjZWZpbGUpXG4gICAgICBmbGFncy5wdXNoKGAtLXNvdXJjZWZpbGU9JHtzb3VyY2VmaWxlfWApO1xuICAgIGlmIChsb2FkZXIyKVxuICAgICAgZmxhZ3MucHVzaChgLS1sb2FkZXI9JHtsb2FkZXIyfWApO1xuICAgIGlmIChyZXNvbHZlRGlyKVxuICAgICAgc3RkaW5SZXNvbHZlRGlyID0gcmVzb2x2ZURpciArIFwiXCI7XG4gICAgc3RkaW5Db250ZW50cyA9IGNvbnRlbnRzID8gY29udGVudHMgKyBcIlwiIDogXCJcIjtcbiAgfVxuICBsZXQgbm9kZVBhdGhzID0gW107XG4gIGlmIChub2RlUGF0aHNJbnB1dCkge1xuICAgIGZvciAobGV0IHZhbHVlIG9mIG5vZGVQYXRoc0lucHV0KSB7XG4gICAgICB2YWx1ZSArPSBcIlwiO1xuICAgICAgbm9kZVBhdGhzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZsYWdzLFxuICAgIHdyaXRlLFxuICAgIHBsdWdpbnMsXG4gICAgc3RkaW5Db250ZW50cyxcbiAgICBzdGRpblJlc29sdmVEaXIsXG4gICAgYWJzV29ya2luZ0RpcixcbiAgICBpbmNyZW1lbnRhbCxcbiAgICBub2RlUGF0aHMsXG4gICAgd2F0Y2g6IHdhdGNoTW9kZVxuICB9O1xufVxuZnVuY3Rpb24gZmxhZ3NGb3JUcmFuc2Zvcm1PcHRpb25zKGNhbGxOYW1lLCBvcHRpb25zLCBpc1RUWTIsIGxvZ0xldmVsRGVmYXVsdCkge1xuICBsZXQgZmxhZ3MgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBwdXNoTG9nRmxhZ3MoZmxhZ3MsIG9wdGlvbnMsIGtleXMsIGlzVFRZMiwgbG9nTGV2ZWxEZWZhdWx0KTtcbiAgcHVzaENvbW1vbkZsYWdzKGZsYWdzLCBvcHRpb25zLCBrZXlzKTtcbiAgbGV0IHNvdXJjZW1hcCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJzb3VyY2VtYXBcIiwgbXVzdEJlU3RyaW5nT3JCb29sZWFuKTtcbiAgbGV0IHRzY29uZmlnUmF3ID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInRzY29uZmlnUmF3XCIsIG11c3RCZVN0cmluZ09yT2JqZWN0KTtcbiAgbGV0IHNvdXJjZWZpbGUgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwic291cmNlZmlsZVwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgbG9hZGVyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImxvYWRlclwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgYmFubmVyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImJhbm5lclwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgZm9vdGVyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcImZvb3RlclwiLCBtdXN0QmVTdHJpbmcpO1xuICBjaGVja0ZvckludmFsaWRGbGFncyhvcHRpb25zLCBrZXlzLCBgaW4gJHtjYWxsTmFtZX0oKSBjYWxsYCk7XG4gIGlmIChzb3VyY2VtYXApXG4gICAgZmxhZ3MucHVzaChgLS1zb3VyY2VtYXA9JHtzb3VyY2VtYXAgPT09IHRydWUgPyBcImV4dGVybmFsXCIgOiBzb3VyY2VtYXB9YCk7XG4gIGlmICh0c2NvbmZpZ1JhdylcbiAgICBmbGFncy5wdXNoKGAtLXRzY29uZmlnLXJhdz0ke3R5cGVvZiB0c2NvbmZpZ1JhdyA9PT0gXCJzdHJpbmdcIiA/IHRzY29uZmlnUmF3IDogSlNPTi5zdHJpbmdpZnkodHNjb25maWdSYXcpfWApO1xuICBpZiAoc291cmNlZmlsZSlcbiAgICBmbGFncy5wdXNoKGAtLXNvdXJjZWZpbGU9JHtzb3VyY2VmaWxlfWApO1xuICBpZiAobG9hZGVyKVxuICAgIGZsYWdzLnB1c2goYC0tbG9hZGVyPSR7bG9hZGVyfWApO1xuICBpZiAoYmFubmVyKVxuICAgIGZsYWdzLnB1c2goYC0tYmFubmVyPSR7YmFubmVyfWApO1xuICBpZiAoZm9vdGVyKVxuICAgIGZsYWdzLnB1c2goYC0tZm9vdGVyPSR7Zm9vdGVyfWApO1xuICByZXR1cm4gZmxhZ3M7XG59XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKHN0cmVhbUluKSB7XG4gIGxldCByZXNwb25zZUNhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbiAgbGV0IHBsdWdpbkNhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbiAgbGV0IHdhdGNoQ2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuICBsZXQgc2VydmVDYWxsYmFja3MgPSBuZXcgTWFwKCk7XG4gIGxldCBuZXh0U2VydmVJRCA9IDA7XG4gIGxldCBpc0Nsb3NlZCA9IGZhbHNlO1xuICBsZXQgbmV4dFJlcXVlc3RJRCA9IDA7XG4gIGxldCBuZXh0QnVpbGRLZXkgPSAwO1xuICBsZXQgc3Rkb3V0ID0gbmV3IFVpbnQ4QXJyYXkoMTYgKiAxMDI0KTtcbiAgbGV0IHN0ZG91dFVzZWQgPSAwO1xuICBsZXQgcmVhZEZyb21TdGRvdXQgPSAoY2h1bmspID0+IHtcbiAgICBsZXQgbGltaXQgPSBzdGRvdXRVc2VkICsgY2h1bmsubGVuZ3RoO1xuICAgIGlmIChsaW1pdCA+IHN0ZG91dC5sZW5ndGgpIHtcbiAgICAgIGxldCBzd2FwID0gbmV3IFVpbnQ4QXJyYXkobGltaXQgKiAyKTtcbiAgICAgIHN3YXAuc2V0KHN0ZG91dCk7XG4gICAgICBzdGRvdXQgPSBzd2FwO1xuICAgIH1cbiAgICBzdGRvdXQuc2V0KGNodW5rLCBzdGRvdXRVc2VkKTtcbiAgICBzdGRvdXRVc2VkICs9IGNodW5rLmxlbmd0aDtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAob2Zmc2V0ICsgNCA8PSBzdGRvdXRVc2VkKSB7XG4gICAgICBsZXQgbGVuZ3RoID0gcmVhZFVJbnQzMkxFKHN0ZG91dCwgb2Zmc2V0KTtcbiAgICAgIGlmIChvZmZzZXQgKyA0ICsgbGVuZ3RoID4gc3Rkb3V0VXNlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG9mZnNldCArPSA0O1xuICAgICAgaGFuZGxlSW5jb21pbmdQYWNrZXQoc3Rkb3V0LnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKSk7XG4gICAgICBvZmZzZXQgKz0gbGVuZ3RoO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgc3Rkb3V0LmNvcHlXaXRoaW4oMCwgb2Zmc2V0LCBzdGRvdXRVc2VkKTtcbiAgICAgIHN0ZG91dFVzZWQgLT0gb2Zmc2V0O1xuICAgIH1cbiAgfTtcbiAgbGV0IGFmdGVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgaXNDbG9zZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGNhbGxiYWNrIG9mIHJlc3BvbnNlQ2FsbGJhY2tzLnZhbHVlcygpKSB7XG4gICAgICBjYWxsYmFjayhcIlRoZSBzZXJ2aWNlIHdhcyBzdG9wcGVkXCIsIG51bGwpO1xuICAgIH1cbiAgICByZXNwb25zZUNhbGxiYWNrcy5jbGVhcigpO1xuICAgIGZvciAobGV0IGNhbGxiYWNrcyBvZiBzZXJ2ZUNhbGxiYWNrcy52YWx1ZXMoKSkge1xuICAgICAgY2FsbGJhY2tzLm9uV2FpdChcIlRoZSBzZXJ2aWNlIHdhcyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgICBzZXJ2ZUNhbGxiYWNrcy5jbGVhcigpO1xuICAgIGZvciAobGV0IGNhbGxiYWNrIG9mIHdhdGNoQ2FsbGJhY2tzLnZhbHVlcygpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJUaGUgc2VydmljZSB3YXMgc3RvcHBlZFwiKSwgbnVsbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHdhdGNoQ2FsbGJhY2tzLmNsZWFyKCk7XG4gIH07XG4gIGxldCBzZW5kUmVxdWVzdCA9IChyZWZzLCB2YWx1ZSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoaXNDbG9zZWQpXG4gICAgICByZXR1cm4gY2FsbGJhY2soXCJUaGUgc2VydmljZSBpcyBubyBsb25nZXIgcnVubmluZ1wiLCBudWxsKTtcbiAgICBsZXQgaWQgPSBuZXh0UmVxdWVzdElEKys7XG4gICAgcmVzcG9uc2VDYWxsYmFja3Muc2V0KGlkLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHJlZnMpXG4gICAgICAgICAgcmVmcy51bnJlZigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChyZWZzKVxuICAgICAgcmVmcy5yZWYoKTtcbiAgICBzdHJlYW1Jbi53cml0ZVRvU3RkaW4oZW5jb2RlUGFja2V0KHtpZCwgaXNSZXF1ZXN0OiB0cnVlLCB2YWx1ZX0pKTtcbiAgfTtcbiAgbGV0IHNlbmRSZXNwb25zZSA9IChpZCwgdmFsdWUpID0+IHtcbiAgICBpZiAoaXNDbG9zZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2VydmljZSBpcyBubyBsb25nZXIgcnVubmluZ1wiKTtcbiAgICBzdHJlYW1Jbi53cml0ZVRvU3RkaW4oZW5jb2RlUGFja2V0KHtpZCwgaXNSZXF1ZXN0OiBmYWxzZSwgdmFsdWV9KSk7XG4gIH07XG4gIGxldCBoYW5kbGVSZXF1ZXN0ID0gYXN5bmMgKGlkLCByZXF1ZXN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAocmVxdWVzdC5jb21tYW5kKSB7XG4gICAgICAgIGNhc2UgXCJwaW5nXCI6IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoaWQsIHt9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicmVzb2x2ZVwiOiB7XG4gICAgICAgICAgbGV0IGNhbGxiYWNrID0gcGx1Z2luQ2FsbGJhY2tzLmdldChyZXF1ZXN0LmtleSk7XG4gICAgICAgICAgaWYgKCFjYWxsYmFjaylcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShpZCwge30pO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShpZCwgYXdhaXQgY2FsbGJhY2socmVxdWVzdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJsb2FkXCI6IHtcbiAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBwbHVnaW5DYWxsYmFja3MuZ2V0KHJlcXVlc3Qua2V5KTtcbiAgICAgICAgICBpZiAoIWNhbGxiYWNrKVxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKGlkLCB7fSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKGlkLCBhd2FpdCBjYWxsYmFjayhyZXF1ZXN0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlcnZlLXJlcXVlc3RcIjoge1xuICAgICAgICAgIGxldCBjYWxsYmFja3MgPSBzZXJ2ZUNhbGxiYWNrcy5nZXQocmVxdWVzdC5zZXJ2ZUlEKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlcXVlc3QpXG4gICAgICAgICAgICBjYWxsYmFja3Mub25SZXF1ZXN0KHJlcXVlc3QuYXJncyk7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKGlkLCB7fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlcnZlLXdhaXRcIjoge1xuICAgICAgICAgIGxldCBjYWxsYmFja3MgPSBzZXJ2ZUNhbGxiYWNrcy5nZXQocmVxdWVzdC5zZXJ2ZUlEKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tzKVxuICAgICAgICAgICAgY2FsbGJhY2tzLm9uV2FpdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoaWQsIHt9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwid2F0Y2gtcmVidWlsZFwiOiB7XG4gICAgICAgICAgbGV0IGNhbGxiYWNrID0gd2F0Y2hDYWxsYmFja3MuZ2V0KHJlcXVlc3Qud2F0Y2hJRCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdC5hcmdzKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKGlkLCB7fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29tbWFuZDogYCArIHJlcXVlc3QuY29tbWFuZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2VuZFJlc3BvbnNlKGlkLCB7ZXJyb3JzOiBbZXh0cmFjdEVycm9yTWVzc2FnZVY4KGUsIHN0cmVhbUluLCBudWxsLCB2b2lkIDApXX0pO1xuICAgIH1cbiAgfTtcbiAgbGV0IGlzRmlyc3RQYWNrZXQgPSB0cnVlO1xuICBsZXQgaGFuZGxlSW5jb21pbmdQYWNrZXQgPSAoYnl0ZXMpID0+IHtcbiAgICBpZiAoaXNGaXJzdFBhY2tldCkge1xuICAgICAgaXNGaXJzdFBhY2tldCA9IGZhbHNlO1xuICAgICAgbGV0IGJpbmFyeVZlcnNpb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmJ5dGVzKTtcbiAgICAgIGlmIChiaW5hcnlWZXJzaW9uICE9PSBcIjAuOS4zXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3RhcnQgc2VydmljZTogSG9zdCB2ZXJzaW9uIFwiJHtcIjAuOS4zXCJ9XCIgZG9lcyBub3QgbWF0Y2ggYmluYXJ5IHZlcnNpb24gJHtKU09OLnN0cmluZ2lmeShiaW5hcnlWZXJzaW9uKX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhY2tldCA9IGRlY29kZVBhY2tldChieXRlcyk7XG4gICAgaWYgKHBhY2tldC5pc1JlcXVlc3QpIHtcbiAgICAgIGhhbmRsZVJlcXVlc3QocGFja2V0LmlkLCBwYWNrZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2FsbGJhY2sgPSByZXNwb25zZUNhbGxiYWNrcy5nZXQocGFja2V0LmlkKTtcbiAgICAgIHJlc3BvbnNlQ2FsbGJhY2tzLmRlbGV0ZShwYWNrZXQuaWQpO1xuICAgICAgaWYgKHBhY2tldC52YWx1ZS5lcnJvcilcbiAgICAgICAgY2FsbGJhY2socGFja2V0LnZhbHVlLmVycm9yLCB7fSk7XG4gICAgICBlbHNlXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHBhY2tldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuICBsZXQgaGFuZGxlUGx1Z2lucyA9IChwbHVnaW5zLCByZXF1ZXN0LCBidWlsZEtleSwgc3Rhc2gpID0+IHtcbiAgICBpZiAoc3RyZWFtSW4uaXNTeW5jKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBwbHVnaW5zIGluIHN5bmNocm9ub3VzIEFQSSBjYWxsc1wiKTtcbiAgICBsZXQgb25SZXNvbHZlQ2FsbGJhY2tzID0ge307XG4gICAgbGV0IG9uTG9hZENhbGxiYWNrcyA9IHt9O1xuICAgIGxldCBuZXh0Q2FsbGJhY2tJRCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHJlcXVlc3QucGx1Z2lucyA9IFtdO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgcGx1Z2lucykge1xuICAgICAgbGV0IGtleXMgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbHVnaW4gYXQgaW5kZXggJHtpfSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgICAgbGV0IG5hbWUgPSBnZXRGbGFnKGl0ZW0sIGtleXMsIFwibmFtZVwiLCBtdXN0QmVTdHJpbmcpO1xuICAgICAgbGV0IHNldHVwID0gZ2V0RmxhZyhpdGVtLCBrZXlzLCBcInNldHVwXCIsIG11c3RCZUZ1bmN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBuYW1lID09PSBcIlwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsdWdpbiBhdCBpbmRleCAke2l9IGlzIG1pc3NpbmcgYSBuYW1lYCk7XG4gICAgICBpZiAodHlwZW9mIHNldHVwICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dIFBsdWdpbiBpcyBtaXNzaW5nIGEgc2V0dXAgZnVuY3Rpb25gKTtcbiAgICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKGl0ZW0sIGtleXMsIGBvbiBwbHVnaW4gJHtKU09OLnN0cmluZ2lmeShuYW1lKX1gKTtcbiAgICAgIGxldCBwbHVnaW4gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG9uUmVzb2x2ZTogW10sXG4gICAgICAgIG9uTG9hZDogW11cbiAgICAgIH07XG4gICAgICBpKys7XG4gICAgICBzZXR1cCh7XG4gICAgICAgIG9uUmVzb2x2ZShvcHRpb25zLCBjYWxsYmFjazIpIHtcbiAgICAgICAgICBsZXQgcmVnaXN0ZXJlZFRleHQgPSBgVGhpcyBlcnJvciBjYW1lIGZyb20gdGhlIFwib25SZXNvbHZlXCIgY2FsbGJhY2sgcmVnaXN0ZXJlZCBoZXJlYDtcbiAgICAgICAgICBsZXQgcmVnaXN0ZXJlZE5vdGUgPSBleHRyYWN0Q2FsbGVyVjgobmV3IEVycm9yKHJlZ2lzdGVyZWRUZXh0KSwgc3RyZWFtSW4sIFwib25SZXNvbHZlXCIpO1xuICAgICAgICAgIGxldCBrZXlzMiA9IHt9O1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMyLCBcImZpbHRlclwiLCBtdXN0QmVSZWdFeHApO1xuICAgICAgICAgIGxldCBuYW1lc3BhY2UgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMyLCBcIm5hbWVzcGFjZVwiLCBtdXN0QmVTdHJpbmcpO1xuICAgICAgICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKG9wdGlvbnMsIGtleXMyLCBgaW4gb25SZXNvbHZlKCkgY2FsbCBmb3IgcGx1Z2luICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9YCk7XG4gICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbJHtwbHVnaW4ubmFtZX1dIG9uUmVzb2x2ZSgpIGNhbGwgaXMgbWlzc2luZyBhIGZpbHRlcmApO1xuICAgICAgICAgIGxldCBpZCA9IG5leHRDYWxsYmFja0lEKys7XG4gICAgICAgICAgb25SZXNvbHZlQ2FsbGJhY2tzW2lkXSA9IHtuYW1lLCBjYWxsYmFjazogY2FsbGJhY2syLCBub3RlOiByZWdpc3RlcmVkTm90ZX07XG4gICAgICAgICAgcGx1Z2luLm9uUmVzb2x2ZS5wdXNoKHtpZCwgZmlsdGVyOiBmaWx0ZXIuc291cmNlLCBuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCBcIlwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTG9hZChvcHRpb25zLCBjYWxsYmFjazIpIHtcbiAgICAgICAgICBsZXQgcmVnaXN0ZXJlZFRleHQgPSBgVGhpcyBlcnJvciBjYW1lIGZyb20gdGhlIFwib25Mb2FkXCIgY2FsbGJhY2sgcmVnaXN0ZXJlZCBoZXJlYDtcbiAgICAgICAgICBsZXQgcmVnaXN0ZXJlZE5vdGUgPSBleHRyYWN0Q2FsbGVyVjgobmV3IEVycm9yKHJlZ2lzdGVyZWRUZXh0KSwgc3RyZWFtSW4sIFwib25Mb2FkXCIpO1xuICAgICAgICAgIGxldCBrZXlzMiA9IHt9O1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMyLCBcImZpbHRlclwiLCBtdXN0QmVSZWdFeHApO1xuICAgICAgICAgIGxldCBuYW1lc3BhY2UgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMyLCBcIm5hbWVzcGFjZVwiLCBtdXN0QmVTdHJpbmcpO1xuICAgICAgICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKG9wdGlvbnMsIGtleXMyLCBgaW4gb25Mb2FkKCkgY2FsbCBmb3IgcGx1Z2luICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9YCk7XG4gICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbJHtwbHVnaW4ubmFtZX1dIG9uTG9hZCgpIGNhbGwgaXMgbWlzc2luZyBhIGZpbHRlcmApO1xuICAgICAgICAgIGxldCBpZCA9IG5leHRDYWxsYmFja0lEKys7XG4gICAgICAgICAgb25Mb2FkQ2FsbGJhY2tzW2lkXSA9IHtuYW1lLCBjYWxsYmFjazogY2FsbGJhY2syLCBub3RlOiByZWdpc3RlcmVkTm90ZX07XG4gICAgICAgICAgcGx1Z2luLm9uTG9hZC5wdXNoKHtpZCwgZmlsdGVyOiBmaWx0ZXIuc291cmNlLCBuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCBcIlwifSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVxdWVzdC5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhc3luYyAocmVxdWVzdDIpID0+IHtcbiAgICAgIHN3aXRjaCAocmVxdWVzdDIuY29tbWFuZCkge1xuICAgICAgICBjYXNlIFwicmVzb2x2ZVwiOiB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge30sIG5hbWUsIGNhbGxiYWNrMiwgbm90ZTtcbiAgICAgICAgICBmb3IgKGxldCBpZCBvZiByZXF1ZXN0Mi5pZHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICh7bmFtZSwgY2FsbGJhY2s6IGNhbGxiYWNrMiwgbm90ZX0gPSBvblJlc29sdmVDYWxsYmFja3NbaWRdKTtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNhbGxiYWNrMih7XG4gICAgICAgICAgICAgICAgcGF0aDogcmVxdWVzdDIucGF0aCxcbiAgICAgICAgICAgICAgICBpbXBvcnRlcjogcmVxdWVzdDIuaW1wb3J0ZXIsXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiByZXF1ZXN0Mi5uYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZURpcjogcmVxdWVzdDIucmVzb2x2ZURpcixcbiAgICAgICAgICAgICAgICBraW5kOiByZXF1ZXN0Mi5raW5kLFxuICAgICAgICAgICAgICAgIHBsdWdpbkRhdGE6IHN0YXNoLmxvYWQocmVxdWVzdDIucGx1Z2luRGF0YSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBvblJlc29sdmUoKSBjYWxsYmFjayBpbiBwbHVnaW4gJHtKU09OLnN0cmluZ2lmeShuYW1lKX0gdG8gcmV0dXJuIGFuIG9iamVjdGApO1xuICAgICAgICAgICAgICAgIGxldCBrZXlzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IHBsdWdpbk5hbWUgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJwbHVnaW5OYW1lXCIsIG11c3RCZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGgyID0gZ2V0RmxhZyhyZXN1bHQsIGtleXMsIFwicGF0aFwiLCBtdXN0QmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGxldCBuYW1lc3BhY2UgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJuYW1lc3BhY2VcIiwgbXVzdEJlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBsZXQgZXh0ZXJuYWwgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJleHRlcm5hbFwiLCBtdXN0QmVCb29sZWFuKTtcbiAgICAgICAgICAgICAgICBsZXQgcGx1Z2luRGF0YSA9IGdldEZsYWcocmVzdWx0LCBrZXlzLCBcInBsdWdpbkRhdGFcIiwgY2FuQmVBbnl0aGluZyk7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGdldEZsYWcocmVzdWx0LCBrZXlzLCBcImVycm9yc1wiLCBtdXN0QmVBcnJheSk7XG4gICAgICAgICAgICAgICAgbGV0IHdhcm5pbmdzID0gZ2V0RmxhZyhyZXN1bHQsIGtleXMsIFwid2FybmluZ3NcIiwgbXVzdEJlQXJyYXkpO1xuICAgICAgICAgICAgICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKHJlc3VsdCwga2V5cywgYGZyb20gb25SZXNvbHZlKCkgY2FsbGJhY2sgaW4gcGx1Z2luICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9YCk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luTmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGgyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICByZXNwb25zZS5wYXRoID0gcGF0aDI7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVzcGFjZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZXJuYWwgPSBleHRlcm5hbDtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luRGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucGx1Z2luRGF0YSA9IHN0YXNoLnN0b3JlKHBsdWdpbkRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9ycyA9IHNhbml0aXplTWVzc2FnZXMoZXJyb3JzLCBcImVycm9yc1wiLCBzdGFzaCk7XG4gICAgICAgICAgICAgICAgaWYgKHdhcm5pbmdzICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICByZXNwb25zZS53YXJuaW5ncyA9IHNhbml0aXplTWVzc2FnZXMod2FybmluZ3MsIFwid2FybmluZ3NcIiwgc3Rhc2gpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQsIGVycm9yczogW2V4dHJhY3RFcnJvck1lc3NhZ2VWOChlLCBzdHJlYW1Jbiwgc3Rhc2gsIG5vdGUpXX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibG9hZFwiOiB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge30sIG5hbWUsIGNhbGxiYWNrMiwgbm90ZTtcbiAgICAgICAgICBmb3IgKGxldCBpZCBvZiByZXF1ZXN0Mi5pZHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICh7bmFtZSwgY2FsbGJhY2s6IGNhbGxiYWNrMiwgbm90ZX0gPSBvbkxvYWRDYWxsYmFja3NbaWRdKTtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNhbGxiYWNrMih7XG4gICAgICAgICAgICAgICAgcGF0aDogcmVxdWVzdDIucGF0aCxcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IHJlcXVlc3QyLm5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5EYXRhOiBzdGFzaC5sb2FkKHJlcXVlc3QyLnBsdWdpbkRhdGEpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgb25Mb2FkKCkgY2FsbGJhY2sgaW4gcGx1Z2luICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9IHRvIHJldHVybiBhbiBvYmplY3RgKTtcbiAgICAgICAgICAgICAgICBsZXQga2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBwbHVnaW5OYW1lID0gZ2V0RmxhZyhyZXN1bHQsIGtleXMsIFwicGx1Z2luTmFtZVwiLCBtdXN0QmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGdldEZsYWcocmVzdWx0LCBrZXlzLCBcImNvbnRlbnRzXCIsIG11c3RCZVN0cmluZ09yVWludDhBcnJheSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVEaXIgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJyZXNvbHZlRGlyXCIsIG11c3RCZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgbGV0IHBsdWdpbkRhdGEgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJwbHVnaW5EYXRhXCIsIGNhbkJlQW55dGhpbmcpO1xuICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJsb2FkZXJcIiwgbXVzdEJlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZ2V0RmxhZyhyZXN1bHQsIGtleXMsIFwiZXJyb3JzXCIsIG11c3RCZUFycmF5KTtcbiAgICAgICAgICAgICAgICBsZXQgd2FybmluZ3MgPSBnZXRGbGFnKHJlc3VsdCwga2V5cywgXCJ3YXJuaW5nc1wiLCBtdXN0QmVBcnJheSk7XG4gICAgICAgICAgICAgICAgY2hlY2tGb3JJbnZhbGlkRmxhZ3MocmVzdWx0LCBrZXlzLCBgZnJvbSBvbkxvYWQoKSBjYWxsYmFjayBpbiBwbHVnaW4gJHtKU09OLnN0cmluZ2lmeShuYW1lKX1gKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5pZCA9IGlkO1xuICAgICAgICAgICAgICAgIGlmIChwbHVnaW5OYW1lICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICByZXNwb25zZS5wbHVnaW5OYW1lID0gcGx1Z2luTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgaW5zdGFuY2VvZiBVaW50OEFycmF5KVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY29udGVudHMgPSBjb250ZW50cztcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250ZW50cyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY29udGVudHMgPSBlbmNvZGVVVEY4KGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZURpciAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucmVzb2x2ZURpciA9IHJlc29sdmVEaXI7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbkRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnBsdWdpbkRhdGEgPSBzdGFzaC5zdG9yZShwbHVnaW5EYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICByZXNwb25zZS5sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzID0gc2FuaXRpemVNZXNzYWdlcyhlcnJvcnMsIFwiZXJyb3JzXCIsIHN0YXNoKTtcbiAgICAgICAgICAgICAgICBpZiAod2FybmluZ3MgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLndhcm5pbmdzID0gc2FuaXRpemVNZXNzYWdlcyh3YXJuaW5ncywgXCJ3YXJuaW5nc1wiLCBzdGFzaCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtpZCwgZXJyb3JzOiBbZXh0cmFjdEVycm9yTWVzc2FnZVY4KGUsIHN0cmVhbUluLCBzdGFzaCwgbm90ZSldfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbW1hbmQ6IGAgKyByZXF1ZXN0Mi5jb21tYW5kKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCByZWZDb3VudCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZigpIHtcbiAgICAgICAgaWYgKCsrcmVmQ291bnQgPT09IDEpXG4gICAgICAgICAgcGx1Z2luQ2FsbGJhY2tzLnNldChidWlsZEtleSwgY2FsbGJhY2spO1xuICAgICAgfSxcbiAgICAgIHVucmVmKCkge1xuICAgICAgICBpZiAoLS1yZWZDb3VudCA9PT0gMClcbiAgICAgICAgICBwbHVnaW5DYWxsYmFja3MuZGVsZXRlKGJ1aWxkS2V5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBsZXQgYnVpbGRTZXJ2ZURhdGEgPSAocmVmcywgb3B0aW9ucywgcmVxdWVzdCkgPT4ge1xuICAgIGxldCBrZXlzID0ge307XG4gICAgbGV0IHBvcnQgPSBnZXRGbGFnKG9wdGlvbnMsIGtleXMsIFwicG9ydFwiLCBtdXN0QmVJbnRlZ2VyKTtcbiAgICBsZXQgaG9zdCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJob3N0XCIsIG11c3RCZVN0cmluZyk7XG4gICAgbGV0IHNlcnZlZGlyID0gZ2V0RmxhZyhvcHRpb25zLCBrZXlzLCBcInNlcnZlZGlyXCIsIG11c3RCZVN0cmluZyk7XG4gICAgbGV0IG9uUmVxdWVzdCA9IGdldEZsYWcob3B0aW9ucywga2V5cywgXCJvblJlcXVlc3RcIiwgbXVzdEJlRnVuY3Rpb24pO1xuICAgIGxldCBzZXJ2ZUlEID0gbmV4dFNlcnZlSUQrKztcbiAgICBsZXQgb25XYWl0O1xuICAgIGxldCB3YWl0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb25XYWl0ID0gKGVycm9yKSA9PiB7XG4gICAgICAgIHNlcnZlQ2FsbGJhY2tzLmRlbGV0ZShzZXJ2ZUlEKTtcbiAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKVxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmVxdWVzdC5zZXJ2ZSA9IHtzZXJ2ZUlEfTtcbiAgICBjaGVja0ZvckludmFsaWRGbGFncyhvcHRpb25zLCBrZXlzLCBgaW4gc2VydmUoKSBjYWxsYCk7XG4gICAgaWYgKHBvcnQgIT09IHZvaWQgMClcbiAgICAgIHJlcXVlc3Quc2VydmUucG9ydCA9IHBvcnQ7XG4gICAgaWYgKGhvc3QgIT09IHZvaWQgMClcbiAgICAgIHJlcXVlc3Quc2VydmUuaG9zdCA9IGhvc3Q7XG4gICAgaWYgKHNlcnZlZGlyICE9PSB2b2lkIDApXG4gICAgICByZXF1ZXN0LnNlcnZlLnNlcnZlZGlyID0gc2VydmVkaXI7XG4gICAgc2VydmVDYWxsYmFja3Muc2V0KHNlcnZlSUQsIHtcbiAgICAgIG9uUmVxdWVzdCxcbiAgICAgIG9uV2FpdFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB3YWl0LFxuICAgICAgc3RvcCgpIHtcbiAgICAgICAgc2VuZFJlcXVlc3QocmVmcywge2NvbW1hbmQ6IFwic2VydmUtc3RvcFwiLCBzZXJ2ZUlEfSwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHJlYWRGcm9tU3Rkb3V0LFxuICAgIGFmdGVyQ2xvc2UsXG4gICAgc2VydmljZToge1xuICAgICAgYnVpbGRPclNlcnZlKGNhbGxOYW1lLCBjYWxsZXJSZWZzLCBzZXJ2ZU9wdGlvbnMsIG9wdGlvbnMsIGlzVFRZMiwgZGVmYXVsdFdEMiwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHBsdWdpblJlZnM7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBjcmVhdGVPYmplY3RTdGFzaCgpO1xuICAgICAgICBjb25zdCBsb2dMZXZlbERlZmF1bHQgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgY29uc3QgcmVmcyA9IHtcbiAgICAgICAgICByZWYoKSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luUmVmcylcbiAgICAgICAgICAgICAgcGx1Z2luUmVmcy5yZWYoKTtcbiAgICAgICAgICAgIGlmIChjYWxsZXJSZWZzKVxuICAgICAgICAgICAgICBjYWxsZXJSZWZzLnJlZigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5yZWYoKSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luUmVmcylcbiAgICAgICAgICAgICAgcGx1Z2luUmVmcy51bnJlZigpO1xuICAgICAgICAgICAgaWYgKGNhbGxlclJlZnMpXG4gICAgICAgICAgICAgIGNhbGxlclJlZnMudW5yZWYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGtleSA9IG5leHRCdWlsZEtleSsrO1xuICAgICAgICAgIGxldCB3cml0ZURlZmF1bHQgPSAhc3RyZWFtSW4uaXNCcm93c2VyO1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICBmbGFncyxcbiAgICAgICAgICAgIHdyaXRlLFxuICAgICAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgICAgIHN0ZGluQ29udGVudHMsXG4gICAgICAgICAgICBzdGRpblJlc29sdmVEaXIsXG4gICAgICAgICAgICBhYnNXb3JraW5nRGlyLFxuICAgICAgICAgICAgaW5jcmVtZW50YWwsXG4gICAgICAgICAgICBub2RlUGF0aHMsXG4gICAgICAgICAgICB3YXRjaFxuICAgICAgICAgIH0gPSBmbGFnc0ZvckJ1aWxkT3B0aW9ucyhjYWxsTmFtZSwgb3B0aW9ucywgaXNUVFkyLCBsb2dMZXZlbERlZmF1bHQsIHdyaXRlRGVmYXVsdCk7XG4gICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBjb21tYW5kOiBcImJ1aWxkXCIsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBmbGFncyxcbiAgICAgICAgICAgIHdyaXRlLFxuICAgICAgICAgICAgc3RkaW5Db250ZW50cyxcbiAgICAgICAgICAgIHN0ZGluUmVzb2x2ZURpcixcbiAgICAgICAgICAgIGFic1dvcmtpbmdEaXI6IGFic1dvcmtpbmdEaXIgfHwgZGVmYXVsdFdEMixcbiAgICAgICAgICAgIGluY3JlbWVudGFsLFxuICAgICAgICAgICAgbm9kZVBhdGhzLFxuICAgICAgICAgICAgaGFzT25SZWJ1aWxkOiAhISh3YXRjaCAmJiB3YXRjaC5vblJlYnVpbGQpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgc2VydmUyID0gc2VydmVPcHRpb25zICYmIGJ1aWxkU2VydmVEYXRhKHJlZnMsIHNlcnZlT3B0aW9ucywgcmVxdWVzdCk7XG4gICAgICAgICAgaWYgKHBsdWdpbnMgJiYgcGx1Z2lucy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcGx1Z2luUmVmcyA9IGhhbmRsZVBsdWdpbnMocGx1Z2lucywgcmVxdWVzdCwga2V5LCBkZXRhaWxzKTtcbiAgICAgICAgICBsZXQgcmVidWlsZDtcbiAgICAgICAgICBsZXQgc3RvcDtcbiAgICAgICAgICBsZXQgYnVpbGRSZXNwb25zZVRvUmVzdWx0ID0gKHJlc3BvbnNlLCBjYWxsYmFjazIpID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSByZXBsYWNlRGV0YWlsc0luTWVzc2FnZXMocmVzcG9uc2UuZXJyb3JzLCBkZXRhaWxzKTtcbiAgICAgICAgICAgIGxldCB3YXJuaW5ncyA9IHJlcGxhY2VEZXRhaWxzSW5NZXNzYWdlcyhyZXNwb25zZS53YXJuaW5ncywgZGV0YWlscyk7XG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjazIoZmFpbHVyZUVycm9yV2l0aExvZyhcIkJ1aWxkIGZhaWxlZFwiLCBlcnJvcnMsIHdhcm5pbmdzKSwgbnVsbCk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge3dhcm5pbmdzfTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vdXRwdXRGaWxlcylcbiAgICAgICAgICAgICAgcmVzdWx0Lm91dHB1dEZpbGVzID0gcmVzcG9uc2Uub3V0cHV0RmlsZXMubWFwKGNvbnZlcnRPdXRwdXRGaWxlcyk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UubWV0YWZpbGUpXG4gICAgICAgICAgICAgIHJlc3VsdC5tZXRhZmlsZSA9IEpTT04ucGFyc2UocmVzcG9uc2UubWV0YWZpbGUpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLndyaXRlVG9TdGRvdXQgIT09IHZvaWQgMClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVjb2RlVVRGOChyZXNwb25zZS53cml0ZVRvU3Rkb3V0KS5yZXBsYWNlKC9cXG4kLywgXCJcIikpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlYnVpbGRJRCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGlmICghcmVidWlsZCkge1xuICAgICAgICAgICAgICAgIGxldCBpc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVidWlsZCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc0Rpc3Bvc2VkIHx8IGlzQ2xvc2VkKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVidWlsZFwiKTtcbiAgICAgICAgICAgICAgICAgIHNlbmRSZXF1ZXN0KHJlZnMsIHtjb21tYW5kOiBcInJlYnVpbGRcIiwgcmVidWlsZElEOiByZXNwb25zZS5yZWJ1aWxkSUR9LCAoZXJyb3IyLCByZXNwb25zZTIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yMilcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2syKG5ldyBFcnJvcihlcnJvcjIpLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRSZXNwb25zZVRvUmVzdWx0KHJlc3BvbnNlMiwgKGVycm9yMywgcmVzdWx0MykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcjMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IzKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdDMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucmVmKCk7XG4gICAgICAgICAgICAgICAgcmVidWlsZC5kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzRGlzcG9zZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIGlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc2VuZFJlcXVlc3QocmVmcywge2NvbW1hbmQ6IFwicmVidWlsZC1kaXNwb3NlXCIsIHJlYnVpbGRJRDogcmVzcG9uc2UucmVidWlsZElEfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICByZWZzLnVucmVmKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQucmVidWlsZCA9IHJlYnVpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uud2F0Y2hJRCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGlmICghc3RvcCkge1xuICAgICAgICAgICAgICAgIGxldCBpc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZWZzLnJlZigpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNTdG9wcGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICBpc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgd2F0Y2hDYWxsYmFja3MuZGVsZXRlKHJlc3BvbnNlLndhdGNoSUQpO1xuICAgICAgICAgICAgICAgICAgc2VuZFJlcXVlc3QocmVmcywge2NvbW1hbmQ6IFwid2F0Y2gtc3RvcFwiLCB3YXRjaElEOiByZXNwb25zZS53YXRjaElEfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICByZWZzLnVucmVmKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2ggJiYgd2F0Y2gub25SZWJ1aWxkKSB7XG4gICAgICAgICAgICAgICAgICB3YXRjaENhbGxiYWNrcy5zZXQocmVzcG9uc2Uud2F0Y2hJRCwgKHNlcnZpY2VTdG9wRXJyb3IsIHdhdGNoUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcnZpY2VTdG9wRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdhdGNoLm9uUmVidWlsZChzZXJ2aWNlU3RvcEVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yczIgPSByZXBsYWNlRGV0YWlsc0luTWVzc2FnZXMod2F0Y2hSZXNwb25zZS5lcnJvcnMsIGRldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2FybmluZ3MyID0gcmVwbGFjZURldGFpbHNJbk1lc3NhZ2VzKHdhdGNoUmVzcG9uc2Uud2FybmluZ3MsIGRldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzMi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3YXRjaC5vblJlYnVpbGQoZmFpbHVyZUVycm9yV2l0aExvZyhcIkJ1aWxkIGZhaWxlZFwiLCBlcnJvcnMyLCB3YXJuaW5nczIpLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSB7d2FybmluZ3M6IHdhcm5pbmdzMn07XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaFJlc3BvbnNlLm91dHB1dEZpbGVzKVxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDIub3V0cHV0RmlsZXMgPSB3YXRjaFJlc3BvbnNlLm91dHB1dEZpbGVzLm1hcChjb252ZXJ0T3V0cHV0RmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2F0Y2hSZXNwb25zZS5yZWJ1aWxkSUQgIT09IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQyLnJlYnVpbGQgPSByZWJ1aWxkO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQyLnN0b3AgPSBzdG9wO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaC5vblJlYnVpbGQobnVsbCwgcmVzdWx0Mik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnN0b3AgPSBzdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrMihudWxsLCByZXN1bHQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHdyaXRlICYmIHN0cmVhbUluLmlzQnJvd3NlcilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGVuYWJsZSBcIndyaXRlXCIgaW4gdGhlIGJyb3dzZXJgKTtcbiAgICAgICAgICBpZiAoaW5jcmVtZW50YWwgJiYgc3RyZWFtSW4uaXNTeW5jKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXNlIFwiaW5jcmVtZW50YWxcIiB3aXRoIGEgc3luY2hyb25vdXMgYnVpbGRgKTtcbiAgICAgICAgICBzZW5kUmVxdWVzdChyZWZzLCByZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoZXJyb3IpLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZTIpIHtcbiAgICAgICAgICAgICAgbGV0IHNlcnZlUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgbGV0IGlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICByZWZzLnJlZigpO1xuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIHBvcnQ6IHNlcnZlUmVzcG9uc2UucG9ydCxcbiAgICAgICAgICAgICAgICBob3N0OiBzZXJ2ZVJlc3BvbnNlLmhvc3QsXG4gICAgICAgICAgICAgICAgd2FpdDogc2VydmUyLndhaXQsXG4gICAgICAgICAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc1N0b3BwZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIGlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzZXJ2ZTIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgcmVmcy51bnJlZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmVmcy5yZWYoKTtcbiAgICAgICAgICAgICAgc2VydmUyLndhaXQudGhlbihyZWZzLnVucmVmLCByZWZzLnVucmVmKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVpbGRSZXNwb25zZVRvUmVzdWx0KHJlc3BvbnNlLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZmxhZ3MgPSBbXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHVzaExvZ0ZsYWdzKGZsYWdzLCBvcHRpb25zLCB7fSwgaXNUVFkyLCBsb2dMZXZlbERlZmF1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUyKSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGVycm9yID0gZXh0cmFjdEVycm9yTWVzc2FnZVY4KGUsIHN0cmVhbUluLCBkZXRhaWxzLCB2b2lkIDApO1xuICAgICAgICAgIHNlbmRSZXF1ZXN0KHJlZnMsIHtjb21tYW5kOiBcImVycm9yXCIsIGZsYWdzLCBlcnJvcn0sICgpID0+IHtcbiAgICAgICAgICAgIGVycm9yLmRldGFpbCA9IGRldGFpbHMubG9hZChlcnJvci5kZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2soZmFpbHVyZUVycm9yV2l0aExvZyhcIkJ1aWxkIGZhaWxlZFwiLCBbZXJyb3JdLCBbXSksIG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHJhbnNmb3JtKGNhbGxOYW1lLCByZWZzLCBpbnB1dCwgb3B0aW9ucywgaXNUVFkyLCBmczIsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBjcmVhdGVPYmplY3RTdGFzaCgpO1xuICAgICAgICBjb25zdCBsb2dMZXZlbERlZmF1bHQgPSBcInNpbGVudFwiO1xuICAgICAgICBsZXQgc3RhcnQgPSAoaW5wdXRQYXRoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IHRvIFwidHJhbnNmb3JtXCIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gZmxhZ3NGb3JUcmFuc2Zvcm1PcHRpb25zKGNhbGxOYW1lLCBvcHRpb25zLCBpc1RUWTIsIGxvZ0xldmVsRGVmYXVsdCk7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgY29tbWFuZDogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgICAgIGlucHV0RlM6IGlucHV0UGF0aCAhPT0gbnVsbCxcbiAgICAgICAgICAgICAgaW5wdXQ6IGlucHV0UGF0aCAhPT0gbnVsbCA/IGlucHV0UGF0aCA6IGlucHV0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZFJlcXVlc3QocmVmcywgcmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcihlcnJvciksIG51bGwpO1xuICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gcmVwbGFjZURldGFpbHNJbk1lc3NhZ2VzKHJlc3BvbnNlLmVycm9ycywgZGV0YWlscyk7XG4gICAgICAgICAgICAgIGxldCB3YXJuaW5ncyA9IHJlcGxhY2VEZXRhaWxzSW5NZXNzYWdlcyhyZXNwb25zZS53YXJuaW5ncywgZGV0YWlscyk7XG4gICAgICAgICAgICAgIGxldCBvdXRzdGFuZGluZyA9IDE7XG4gICAgICAgICAgICAgIGxldCBuZXh0ID0gKCkgPT4gLS1vdXRzdGFuZGluZyA9PT0gMCAmJiBjYWxsYmFjayhudWxsLCB7d2FybmluZ3MsIGNvZGU6IHJlc3BvbnNlLmNvZGUsIG1hcDogcmVzcG9uc2UubWFwfSk7XG4gICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZmFpbHVyZUVycm9yV2l0aExvZyhcIlRyYW5zZm9ybSBmYWlsZWRcIiwgZXJyb3JzLCB3YXJuaW5ncyksIG51bGwpO1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZUZTKSB7XG4gICAgICAgICAgICAgICAgb3V0c3RhbmRpbmcrKztcbiAgICAgICAgICAgICAgICBmczIucmVhZEZpbGUocmVzcG9uc2UuY29kZSwgKGVyciwgY29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNvZGUgPSBjb250ZW50cztcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tYXBGUykge1xuICAgICAgICAgICAgICAgIG91dHN0YW5kaW5nKys7XG4gICAgICAgICAgICAgICAgZnMyLnJlYWRGaWxlKHJlc3BvbnNlLm1hcCwgKGVyciwgY29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLm1hcCA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBwdXNoTG9nRmxhZ3MoZmxhZ3MsIG9wdGlvbnMsIHt9LCBpc1RUWTIsIGxvZ0xldmVsRGVmYXVsdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlMikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBleHRyYWN0RXJyb3JNZXNzYWdlVjgoZSwgc3RyZWFtSW4sIGRldGFpbHMsIHZvaWQgMCk7XG4gICAgICAgICAgICBzZW5kUmVxdWVzdChyZWZzLCB7Y29tbWFuZDogXCJlcnJvclwiLCBmbGFncywgZXJyb3J9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGVycm9yLmRldGFpbCA9IGRldGFpbHMubG9hZChlcnJvci5kZXRhaWwpO1xuICAgICAgICAgICAgICBjYWxsYmFjayhmYWlsdXJlRXJyb3JXaXRoTG9nKFwiVHJhbnNmb3JtIGZhaWxlZFwiLCBbZXJyb3JdLCBbXSksIG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiICYmIGlucHV0Lmxlbmd0aCA+IDEwMjQgKiAxMDI0KSB7XG4gICAgICAgICAgbGV0IG5leHQgPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9ICgpID0+IGZzMi53cml0ZUZpbGUoaW5wdXQsIG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdFN0YXNoKCkge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGxldCBuZXh0SUQgPSAwO1xuICByZXR1cm4ge1xuICAgIGxvYWQoaWQpIHtcbiAgICAgIHJldHVybiBtYXAuZ2V0KGlkKTtcbiAgICB9LFxuICAgIHN0b3JlKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgY29uc3QgaWQgPSBuZXh0SUQrKztcbiAgICAgIG1hcC5zZXQoaWQsIHZhbHVlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBleHRyYWN0Q2FsbGVyVjgoZSwgc3RyZWFtSW4sIGlkZW50KSB7XG4gIHRyeSB7XG4gICAgbGV0IGxpbmVzID0gKGUuc3RhY2sgKyBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgICBsaW5lcy5zcGxpY2UoMSwgMSk7XG4gICAgbGV0IGxvY2F0aW9uID0gcGFyc2VTdGFja0xpbmVzVjgoc3RyZWFtSW4sIGxpbmVzLCBpZGVudCk7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4ge3RleHQ6IGUubWVzc2FnZSwgbG9jYXRpb259O1xuICAgIH1cbiAgfSBjYXRjaCAoZTIpIHtcbiAgfVxufVxuZnVuY3Rpb24gZXh0cmFjdEVycm9yTWVzc2FnZVY4KGUsIHN0cmVhbUluLCBzdGFzaCwgbm90ZSkge1xuICBsZXQgdGV4dCA9IFwiSW50ZXJuYWwgZXJyb3JcIjtcbiAgbGV0IGxvY2F0aW9uID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB0ZXh0ID0gKGUgJiYgZS5tZXNzYWdlIHx8IGUpICsgXCJcIjtcbiAgfSBjYXRjaCAoZTIpIHtcbiAgfVxuICB0cnkge1xuICAgIGxvY2F0aW9uID0gcGFyc2VTdGFja0xpbmVzVjgoc3RyZWFtSW4sIChlLnN0YWNrICsgXCJcIikuc3BsaXQoXCJcXG5cIiksIFwiXCIpO1xuICB9IGNhdGNoIChlMikge1xuICB9XG4gIHJldHVybiB7dGV4dCwgbG9jYXRpb24sIG5vdGVzOiBub3RlID8gW25vdGVdIDogW10sIGRldGFpbDogc3Rhc2ggPyBzdGFzaC5zdG9yZShlKSA6IC0xfTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3RhY2tMaW5lc1Y4KHN0cmVhbUluLCBsaW5lcywgaWRlbnQpIHtcbiAgbGV0IGF0ID0gXCIgICAgYXQgXCI7XG4gIGlmIChzdHJlYW1Jbi5yZWFkRmlsZVN5bmMgJiYgIWxpbmVzWzBdLnN0YXJ0c1dpdGgoYXQpICYmIGxpbmVzWzFdLnN0YXJ0c1dpdGgoYXQpKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgIGlmICghbGluZS5zdGFydHNXaXRoKGF0KSlcbiAgICAgICAgY29udGludWU7XG4gICAgICBsaW5lID0gbGluZS5zbGljZShhdC5sZW5ndGgpO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gL14oPzpuZXcgfGFzeW5jICk/XFxTKyBcXCgoLiopXFwpJC8uZXhlYyhsaW5lKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgbGluZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoID0gL15ldmFsIGF0IFxcUysgXFwoKC4qKVxcKSg/OiwgXFxTKzpcXGQrOlxcZCspPyQvLmV4ZWMobGluZSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGxpbmUgPSBtYXRjaFsxXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaCA9IC9eKFxcUyspOihcXGQrKTooXFxkKykkLy5leGVjKGxpbmUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBsZXQgY29udGVudHMgPSBzdHJlYW1Jbi5yZWFkRmlsZVN5bmMobWF0Y2hbMV0sIFwidXRmOFwiKTtcbiAgICAgICAgICBsZXQgbGluZVRleHQgPSBjb250ZW50cy5zcGxpdCgvXFxyXFxufFxccnxcXG58XFx1MjAyOHxcXHUyMDI5LylbK21hdGNoWzJdIC0gMV0gfHwgXCJcIjtcbiAgICAgICAgICBsZXQgY29sdW1uID0gK21hdGNoWzNdIC0gMTtcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gbGluZVRleHQuc2xpY2UoY29sdW1uLCBjb2x1bW4gKyBpZGVudC5sZW5ndGgpID09PSBpZGVudCA/IGlkZW50Lmxlbmd0aCA6IDA7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGU6IG1hdGNoWzFdLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBcImZpbGVcIixcbiAgICAgICAgICAgIGxpbmU6ICttYXRjaFsyXSxcbiAgICAgICAgICAgIGNvbHVtbjogZW5jb2RlVVRGOChsaW5lVGV4dC5zbGljZSgwLCBjb2x1bW4pKS5sZW5ndGgsXG4gICAgICAgICAgICBsZW5ndGg6IGVuY29kZVVURjgobGluZVRleHQuc2xpY2UoY29sdW1uLCBjb2x1bW4gKyBsZW5ndGgpKS5sZW5ndGgsXG4gICAgICAgICAgICBsaW5lVGV4dDogbGluZVRleHQgKyBcIlxcblwiICsgbGluZXMuc2xpY2UoMSkuam9pbihcIlxcblwiKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZmFpbHVyZUVycm9yV2l0aExvZyh0ZXh0LCBlcnJvcnMsIHdhcm5pbmdzKSB7XG4gIGxldCBsaW1pdCA9IDU7XG4gIGxldCBzdW1tYXJ5ID0gZXJyb3JzLmxlbmd0aCA8IDEgPyBcIlwiIDogYCB3aXRoICR7ZXJyb3JzLmxlbmd0aH0gZXJyb3Ike2Vycm9ycy5sZW5ndGggPCAyID8gXCJcIiA6IFwic1wifTpgICsgZXJyb3JzLnNsaWNlKDAsIGxpbWl0ICsgMSkubWFwKChlLCBpKSA9PiB7XG4gICAgaWYgKGkgPT09IGxpbWl0KVxuICAgICAgcmV0dXJuIFwiXFxuLi4uXCI7XG4gICAgaWYgKCFlLmxvY2F0aW9uKVxuICAgICAgcmV0dXJuIGBcbmVycm9yOiAke2UudGV4dH1gO1xuICAgIGxldCB7ZmlsZSwgbGluZSwgY29sdW1ufSA9IGUubG9jYXRpb247XG4gICAgcmV0dXJuIGBcbiR7ZmlsZX06JHtsaW5lfToke2NvbHVtbn06IGVycm9yOiAke2UudGV4dH1gO1xuICB9KS5qb2luKFwiXCIpO1xuICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoYCR7dGV4dH0ke3N1bW1hcnl9YCk7XG4gIGVycm9yLmVycm9ycyA9IGVycm9ycztcbiAgZXJyb3Iud2FybmluZ3MgPSB3YXJuaW5ncztcbiAgcmV0dXJuIGVycm9yO1xufVxuZnVuY3Rpb24gcmVwbGFjZURldGFpbHNJbk1lc3NhZ2VzKG1lc3NhZ2VzLCBzdGFzaCkge1xuICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcbiAgICBtZXNzYWdlLmRldGFpbCA9IHN0YXNoLmxvYWQobWVzc2FnZS5kZXRhaWwpO1xuICB9XG4gIHJldHVybiBtZXNzYWdlcztcbn1cbmZ1bmN0aW9uIHNhbml0aXplTG9jYXRpb24obG9jYXRpb24sIHdoZXJlKSB7XG4gIGlmIChsb2NhdGlvbiA9PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuICBsZXQga2V5cyA9IHt9O1xuICBsZXQgZmlsZSA9IGdldEZsYWcobG9jYXRpb24sIGtleXMsIFwiZmlsZVwiLCBtdXN0QmVTdHJpbmcpO1xuICBsZXQgbmFtZXNwYWNlID0gZ2V0RmxhZyhsb2NhdGlvbiwga2V5cywgXCJuYW1lc3BhY2VcIiwgbXVzdEJlU3RyaW5nKTtcbiAgbGV0IGxpbmUgPSBnZXRGbGFnKGxvY2F0aW9uLCBrZXlzLCBcImxpbmVcIiwgbXVzdEJlSW50ZWdlcik7XG4gIGxldCBjb2x1bW4gPSBnZXRGbGFnKGxvY2F0aW9uLCBrZXlzLCBcImNvbHVtblwiLCBtdXN0QmVJbnRlZ2VyKTtcbiAgbGV0IGxlbmd0aCA9IGdldEZsYWcobG9jYXRpb24sIGtleXMsIFwibGVuZ3RoXCIsIG11c3RCZUludGVnZXIpO1xuICBsZXQgbGluZVRleHQgPSBnZXRGbGFnKGxvY2F0aW9uLCBrZXlzLCBcImxpbmVUZXh0XCIsIG11c3RCZVN0cmluZyk7XG4gIGNoZWNrRm9ySW52YWxpZEZsYWdzKGxvY2F0aW9uLCBrZXlzLCB3aGVyZSk7XG4gIHJldHVybiB7XG4gICAgZmlsZTogZmlsZSB8fCBcIlwiLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlIHx8IFwiXCIsXG4gICAgbGluZTogbGluZSB8fCAwLFxuICAgIGNvbHVtbjogY29sdW1uIHx8IDAsXG4gICAgbGVuZ3RoOiBsZW5ndGggfHwgMCxcbiAgICBsaW5lVGV4dDogbGluZVRleHQgfHwgXCJcIlxuICB9O1xufVxuZnVuY3Rpb24gc2FuaXRpemVNZXNzYWdlcyhtZXNzYWdlcywgcHJvcGVydHksIHN0YXNoKSB7XG4gIGxldCBtZXNzYWdlc0Nsb25lID0gW107XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xuICAgIGxldCBrZXlzID0ge307XG4gICAgbGV0IHRleHQgPSBnZXRGbGFnKG1lc3NhZ2UsIGtleXMsIFwidGV4dFwiLCBtdXN0QmVTdHJpbmcpO1xuICAgIGxldCBsb2NhdGlvbiA9IGdldEZsYWcobWVzc2FnZSwga2V5cywgXCJsb2NhdGlvblwiLCBtdXN0QmVPYmplY3RPck51bGwpO1xuICAgIGxldCBub3RlcyA9IGdldEZsYWcobWVzc2FnZSwga2V5cywgXCJub3Rlc1wiLCBtdXN0QmVBcnJheSk7XG4gICAgbGV0IGRldGFpbCA9IGdldEZsYWcobWVzc2FnZSwga2V5cywgXCJkZXRhaWxcIiwgY2FuQmVBbnl0aGluZyk7XG4gICAgbGV0IHdoZXJlID0gYGluIGVsZW1lbnQgJHtpbmRleH0gb2YgXCIke3Byb3BlcnR5fVwiYDtcbiAgICBjaGVja0ZvckludmFsaWRGbGFncyhtZXNzYWdlLCBrZXlzLCB3aGVyZSk7XG4gICAgbGV0IG5vdGVzQ2xvbmUgPSBbXTtcbiAgICBpZiAobm90ZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiBub3Rlcykge1xuICAgICAgICBsZXQgbm90ZUtleXMgPSB7fTtcbiAgICAgICAgbGV0IG5vdGVUZXh0ID0gZ2V0RmxhZyhub3RlLCBub3RlS2V5cywgXCJ0ZXh0XCIsIG11c3RCZVN0cmluZyk7XG4gICAgICAgIGxldCBub3RlTG9jYXRpb24gPSBnZXRGbGFnKG5vdGUsIG5vdGVLZXlzLCBcImxvY2F0aW9uXCIsIG11c3RCZU9iamVjdE9yTnVsbCk7XG4gICAgICAgIGNoZWNrRm9ySW52YWxpZEZsYWdzKG5vdGUsIG5vdGVLZXlzLCB3aGVyZSk7XG4gICAgICAgIG5vdGVzQ2xvbmUucHVzaCh7XG4gICAgICAgICAgdGV4dDogbm90ZVRleHQgfHwgXCJcIixcbiAgICAgICAgICBsb2NhdGlvbjogc2FuaXRpemVMb2NhdGlvbihub3RlTG9jYXRpb24sIHdoZXJlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVzc2FnZXNDbG9uZS5wdXNoKHtcbiAgICAgIHRleHQ6IHRleHQgfHwgXCJcIixcbiAgICAgIGxvY2F0aW9uOiBzYW5pdGl6ZUxvY2F0aW9uKGxvY2F0aW9uLCB3aGVyZSksXG4gICAgICBub3Rlczogbm90ZXNDbG9uZSxcbiAgICAgIGRldGFpbDogc3Rhc2guc3RvcmUoZGV0YWlsKVxuICAgIH0pO1xuICAgIGluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2VzQ2xvbmU7XG59XG5mdW5jdGlvbiBjb252ZXJ0T3V0cHV0RmlsZXMoe3BhdGg6IHBhdGgyLCBjb250ZW50c30pIHtcbiAgbGV0IHRleHQgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgyLFxuICAgIGNvbnRlbnRzLFxuICAgIGdldCB0ZXh0KCkge1xuICAgICAgaWYgKHRleHQgPT09IG51bGwpXG4gICAgICAgIHRleHQgPSBkZWNvZGVVVEY4KGNvbnRlbnRzKTtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbGliL25vZGUudHNcbnZhciBjaGlsZF9wcm9jZXNzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG52YXIgY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbnZhciBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG52YXIgb3MgPSByZXF1aXJlKFwib3NcIik7XG52YXIgdHR5ID0gcmVxdWlyZShcInR0eVwiKTtcbnZhciBlc2J1aWxkQ29tbWFuZEFuZEFyZ3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5FU0JVSUxEX0JJTkFSWV9QQVRIKSB7XG4gICAgcmV0dXJuIFtwYXRoLnJlc29sdmUocHJvY2Vzcy5lbnYuRVNCVUlMRF9CSU5BUllfUEFUSCksIFtdXTtcbiAgfVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXR1cm4gW1wibm9kZVwiLCBbcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImJpblwiLCBcImVzYnVpbGRcIildXTtcbiAgfVxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgcmV0dXJuIFtwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiZXNidWlsZC5leGVcIiksIFtdXTtcbiAgfVxuICBsZXQgcGF0aEZvcllhcm4yID0gcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImVzYnVpbGRcIik7XG4gIGlmIChmcy5leGlzdHNTeW5jKHBhdGhGb3JZYXJuMikpIHtcbiAgICByZXR1cm4gW3BhdGhGb3JZYXJuMiwgW11dO1xuICB9XG4gIHJldHVybiBbcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImJpblwiLCBcImVzYnVpbGRcIiksIFtdXTtcbn07XG52YXIgaXNUVFkgPSAoKSA9PiB0dHkuaXNhdHR5KDIpO1xudmFyIHZlcnNpb24gPSBcIjAuOS4zXCI7XG52YXIgYnVpbGQgPSAob3B0aW9ucykgPT4gZW5zdXJlU2VydmljZUlzUnVubmluZygpLmJ1aWxkKG9wdGlvbnMpO1xudmFyIHNlcnZlID0gKHNlcnZlT3B0aW9ucywgYnVpbGRPcHRpb25zKSA9PiBlbnN1cmVTZXJ2aWNlSXNSdW5uaW5nKCkuc2VydmUoc2VydmVPcHRpb25zLCBidWlsZE9wdGlvbnMpO1xudmFyIHRyYW5zZm9ybSA9IChpbnB1dCwgb3B0aW9ucykgPT4gZW5zdXJlU2VydmljZUlzUnVubmluZygpLnRyYW5zZm9ybShpbnB1dCwgb3B0aW9ucyk7XG52YXIgYnVpbGRTeW5jID0gKG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgcnVuU2VydmljZVN5bmMoKHNlcnZpY2UpID0+IHNlcnZpY2UuYnVpbGRPclNlcnZlKFwiYnVpbGRTeW5jXCIsIG51bGwsIG51bGwsIG9wdGlvbnMsIGlzVFRZKCksIHByb2Nlc3MuY3dkKCksIChlcnIsIHJlcykgPT4ge1xuICAgIGlmIChlcnIpXG4gICAgICB0aHJvdyBlcnI7XG4gICAgcmVzdWx0ID0gcmVzO1xuICB9KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHRyYW5zZm9ybVN5bmMgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgcnVuU2VydmljZVN5bmMoKHNlcnZpY2UpID0+IHNlcnZpY2UudHJhbnNmb3JtKFwidHJhbnNmb3JtU3luY1wiLCBudWxsLCBpbnB1dCwgb3B0aW9ucyB8fCB7fSwgaXNUVFkoKSwge1xuICAgIHJlYWRGaWxlKHRlbXBGaWxlLCBjYWxsYmFjaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHRlbXBGaWxlLCBcInV0ZjhcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZnMudW5saW5rU3luYyh0ZW1wRmlsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhudWxsLCBjb250ZW50cyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdyaXRlRmlsZShjb250ZW50cywgY2FsbGJhY2spIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0ZW1wRmlsZSA9IHJhbmRvbUZpbGVOYW1lKCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmModGVtcEZpbGUsIGNvbnRlbnRzKTtcbiAgICAgICAgY2FsbGJhY2sodGVtcEZpbGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIChlcnIsIHJlcykgPT4ge1xuICAgIGlmIChlcnIpXG4gICAgICB0aHJvdyBlcnI7XG4gICAgcmVzdWx0ID0gcmVzO1xuICB9KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIGluaXRpYWxpemVXYXNDYWxsZWQgPSBmYWxzZTtcbnZhciBpbml0aWFsaXplID0gKG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IHZhbGlkYXRlSW5pdGlhbGl6ZU9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gIGlmIChvcHRpb25zLndhc21VUkwpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJ3YXNtVVJMXCIgb3B0aW9uIG9ubHkgd29ya3MgaW4gdGhlIGJyb3dzZXJgKTtcbiAgaWYgKG9wdGlvbnMud29ya2VyKVxuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwid29ya2VyXCIgb3B0aW9uIG9ubHkgd29ya3MgaW4gdGhlIGJyb3dzZXJgKTtcbiAgaWYgKGluaXRpYWxpemVXYXNDYWxsZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2FsbCBcImluaXRpYWxpemVcIiBtb3JlIHRoYW4gb25jZScpO1xuICBpbml0aWFsaXplV2FzQ2FsbGVkID0gdHJ1ZTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcbnZhciBkZWZhdWx0V0QgPSBwcm9jZXNzLmN3ZCgpO1xudmFyIGxvbmdMaXZlZFNlcnZpY2U7XG52YXIgZW5zdXJlU2VydmljZUlzUnVubmluZyA9ICgpID0+IHtcbiAgaWYgKCFsb25nTGl2ZWRTZXJ2aWNlKVxuICAgIGxvbmdMaXZlZFNlcnZpY2UgPSBzdGFydFJ1bm5pbmdTZXJ2aWNlKCk7XG4gIHJldHVybiBsb25nTGl2ZWRTZXJ2aWNlO1xufTtcbnZhciBzdGFydFJ1bm5pbmdTZXJ2aWNlID0gKCkgPT4ge1xuICBsZXQgW2NvbW1hbmQsIGFyZ3NdID0gZXNidWlsZENvbW1hbmRBbmRBcmdzKCk7XG4gIGxldCBjaGlsZCA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncy5jb25jYXQoYC0tc2VydmljZT0ke1wiMC45LjNcIn1gLCBcIi0tcGluZ1wiKSwge1xuICAgIHdpbmRvd3NIaWRlOiB0cnVlLFxuICAgIHN0ZGlvOiBbXCJwaXBlXCIsIFwicGlwZVwiLCBcImluaGVyaXRcIl1cbiAgfSk7XG4gIGxldCB7cmVhZEZyb21TdGRvdXQsIGFmdGVyQ2xvc2UsIHNlcnZpY2V9ID0gY3JlYXRlQ2hhbm5lbCh7XG4gICAgd3JpdGVUb1N0ZGluKGJ5dGVzKSB7XG4gICAgICBjaGlsZC5zdGRpbi53cml0ZShieXRlcyk7XG4gICAgfSxcbiAgICByZWFkRmlsZVN5bmM6IGZzLnJlYWRGaWxlU3luYyxcbiAgICBpc1N5bmM6IGZhbHNlLFxuICAgIGlzQnJvd3NlcjogZmFsc2VcbiAgfSk7XG4gIGNvbnN0IHN0ZGluID0gY2hpbGQuc3RkaW47XG4gIGNvbnN0IHN0ZG91dCA9IGNoaWxkLnN0ZG91dDtcbiAgc3Rkb3V0Lm9uKFwiZGF0YVwiLCByZWFkRnJvbVN0ZG91dCk7XG4gIHN0ZG91dC5vbihcImVuZFwiLCBhZnRlckNsb3NlKTtcbiAgbGV0IHJlZkNvdW50ID0gMDtcbiAgY2hpbGQudW5yZWYoKTtcbiAgaWYgKHN0ZGluLnVucmVmKSB7XG4gICAgc3RkaW4udW5yZWYoKTtcbiAgfVxuICBpZiAoc3Rkb3V0LnVucmVmKSB7XG4gICAgc3Rkb3V0LnVucmVmKCk7XG4gIH1cbiAgY29uc3QgcmVmcyA9IHtcbiAgICByZWYoKSB7XG4gICAgICBpZiAoKytyZWZDb3VudCA9PT0gMSlcbiAgICAgICAgY2hpbGQucmVmKCk7XG4gICAgfSxcbiAgICB1bnJlZigpIHtcbiAgICAgIGlmICgtLXJlZkNvdW50ID09PSAwKVxuICAgICAgICBjaGlsZC51bnJlZigpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBidWlsZDogKG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNlcnZpY2UuYnVpbGRPclNlcnZlKFwiYnVpbGRcIiwgcmVmcywgbnVsbCwgb3B0aW9ucywgaXNUVFkoKSwgZGVmYXVsdFdELCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNlcnZlOiAoc2VydmVPcHRpb25zLCBidWlsZE9wdGlvbnMpID0+IHtcbiAgICAgIGlmIChzZXJ2ZU9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mIHNlcnZlT3B0aW9ucyAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0XCIpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHNlcnZpY2UuYnVpbGRPclNlcnZlKFwic2VydmVcIiwgcmVmcywgc2VydmVPcHRpb25zLCBidWlsZE9wdGlvbnMsIGlzVFRZKCksIGRlZmF1bHRXRCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIHRyYW5zZm9ybTogKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gc2VydmljZS50cmFuc2Zvcm0oXCJ0cmFuc2Zvcm1cIiwgcmVmcywgaW5wdXQsIG9wdGlvbnMgfHwge30sIGlzVFRZKCksIHtcbiAgICAgICAgcmVhZEZpbGUodGVtcEZpbGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKHRlbXBGaWxlLCBcInV0ZjhcIiwgKGVyciwgY29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmcy51bmxpbmsodGVtcEZpbGUsICgpID0+IGNhbGxiYWNrKGVyciwgY29udGVudHMpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgY29udGVudHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3cml0ZUZpbGUoY29udGVudHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZW1wRmlsZSA9IHJhbmRvbUZpbGVOYW1lKCk7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGUodGVtcEZpbGUsIGNvbnRlbnRzLCAoZXJyKSA9PiBlcnIgIT09IG51bGwgPyBjYWxsYmFjayhudWxsKSA6IGNhbGxiYWNrKHRlbXBGaWxlKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyLCByZXMpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXMpKSk7XG4gICAgfVxuICB9O1xufTtcbnZhciBydW5TZXJ2aWNlU3luYyA9IChjYWxsYmFjaykgPT4ge1xuICBsZXQgW2NvbW1hbmQsIGFyZ3NdID0gZXNidWlsZENvbW1hbmRBbmRBcmdzKCk7XG4gIGxldCBzdGRpbiA9IG5ldyBVaW50OEFycmF5KCk7XG4gIGxldCB7cmVhZEZyb21TdGRvdXQsIGFmdGVyQ2xvc2UsIHNlcnZpY2V9ID0gY3JlYXRlQ2hhbm5lbCh7XG4gICAgd3JpdGVUb1N0ZGluKGJ5dGVzKSB7XG4gICAgICBpZiAoc3RkaW4ubGVuZ3RoICE9PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHJ1biBhdCBtb3N0IG9uZSBjb21tYW5kXCIpO1xuICAgICAgc3RkaW4gPSBieXRlcztcbiAgICB9LFxuICAgIGlzU3luYzogdHJ1ZSxcbiAgICBpc0Jyb3dzZXI6IGZhbHNlXG4gIH0pO1xuICBjYWxsYmFjayhzZXJ2aWNlKTtcbiAgbGV0IHN0ZG91dCA9IGNoaWxkX3Byb2Nlc3MuZXhlY0ZpbGVTeW5jKGNvbW1hbmQsIGFyZ3MuY29uY2F0KGAtLXNlcnZpY2U9JHtcIjAuOS4zXCJ9YCksIHtcbiAgICBjd2Q6IHByb2Nlc3MuY3dkKCksXG4gICAgd2luZG93c0hpZGU6IHRydWUsXG4gICAgaW5wdXQ6IHN0ZGluLFxuICAgIG1heEJ1ZmZlcjogK3Byb2Nlc3MuZW52LkVTQlVJTERfTUFYX0JVRkZFUiB8fCAxNiAqIDEwMjQgKiAxMDI0XG4gIH0pO1xuICByZWFkRnJvbVN0ZG91dChzdGRvdXQpO1xuICBhZnRlckNsb3NlKCk7XG59O1xudmFyIHJhbmRvbUZpbGVOYW1lID0gKCkgPT4ge1xuICByZXR1cm4gcGF0aC5qb2luKG9zLnRtcGRpcigpLCBgZXNidWlsZC0ke2NyeXB0by5yYW5kb21CeXRlcygzMikudG9TdHJpbmcoXCJoZXhcIil9YCk7XG59O1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJ1aWxkLFxuICBidWlsZFN5bmMsXG4gIGluaXRpYWxpemUsXG4gIHNlcnZlLFxuICB0cmFuc2Zvcm0sXG4gIHRyYW5zZm9ybVN5bmMsXG4gIHZlcnNpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGNvZGUgPSBmbiguLi5hcmdzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7Y29kZSArIG9mZnNldH1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGNvZGUgPSBmbiguLi5hcmdzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kxNm0gPSAoZm4sIG9mZnNldCkgPT4gKC4uLmFyZ3MpID0+IHtcblx0Y29uc3QgcmdiID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmdiWzBdfTske3JnYlsxXX07JHtyZ2JbMl19bWA7XG59O1xuXG5jb25zdCBhbnNpMmFuc2kgPSBuID0+IG47XG5jb25zdCByZ2IycmdiID0gKHIsIGcsIGIpID0+IFtyLCBnLCBiXTtcblxuY29uc3Qgc2V0TGF6eVByb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHksIGdldCkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwge1xuXHRcdGdldDogKCkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXQoKTtcblxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9LFxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xufTtcblxuLyoqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCdjb2xvci1jb252ZXJ0Jyl9ICovXG5sZXQgY29sb3JDb252ZXJ0O1xuY29uc3QgbWFrZUR5bmFtaWNTdHlsZXMgPSAod3JhcCwgdGFyZ2V0U3BhY2UsIGlkZW50aXR5LCBpc0JhY2tncm91bmQpID0+IHtcblx0aWYgKGNvbG9yQ29udmVydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29sb3JDb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXHR9XG5cblx0Y29uc3Qgb2Zmc2V0ID0gaXNCYWNrZ3JvdW5kID8gMTAgOiAwO1xuXHRjb25zdCBzdHlsZXMgPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtzb3VyY2VTcGFjZSwgc3VpdGVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9yQ29udmVydCkpIHtcblx0XHRjb25zdCBuYW1lID0gc291cmNlU3BhY2UgPT09ICdhbnNpMTYnID8gJ2Fuc2knIDogc291cmNlU3BhY2U7XG5cdFx0aWYgKHNvdXJjZVNwYWNlID09PSB0YXJnZXRTcGFjZSkge1xuXHRcdFx0c3R5bGVzW25hbWVdID0gd3JhcChpZGVudGl0eSwgb2Zmc2V0KTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzdWl0ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoc3VpdGVbdGFyZ2V0U3BhY2VdLCBvZmZzZXQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59O1xuXG5mdW5jdGlvbiBhc3NlbWJsZVN0eWxlcygpIHtcblx0Y29uc3QgY29kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRtb2RpZmllcjoge1xuXHRcdFx0cmVzZXQ6IFswLCAwXSxcblx0XHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRcdGJvbGQ6IFsxLCAyMl0sXG5cdFx0XHRkaW06IFsyLCAyMl0sXG5cdFx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0XHR1bmRlcmxpbmU6IFs0LCAyNF0sXG5cdFx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdFx0aGlkZGVuOiBbOCwgMjhdLFxuXHRcdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XVxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRcdHJlZDogWzMxLCAzOV0sXG5cdFx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdFx0Ymx1ZTogWzM0LCAzOV0sXG5cdFx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRcdGN5YW46IFszNiwgMzldLFxuXHRcdFx0d2hpdGU6IFszNywgMzldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJsYWNrQnJpZ2h0OiBbOTAsIDM5XSxcblx0XHRcdHJlZEJyaWdodDogWzkxLCAzOV0sXG5cdFx0XHRncmVlbkJyaWdodDogWzkyLCAzOV0sXG5cdFx0XHR5ZWxsb3dCcmlnaHQ6IFs5MywgMzldLFxuXHRcdFx0Ymx1ZUJyaWdodDogWzk0LCAzOV0sXG5cdFx0XHRtYWdlbnRhQnJpZ2h0OiBbOTUsIDM5XSxcblx0XHRcdGN5YW5CcmlnaHQ6IFs5NiwgMzldLFxuXHRcdFx0d2hpdGVCcmlnaHQ6IFs5NywgMzldXG5cdFx0fSxcblx0XHRiZ0NvbG9yOiB7XG5cdFx0XHRiZ0JsYWNrOiBbNDAsIDQ5XSxcblx0XHRcdGJnUmVkOiBbNDEsIDQ5XSxcblx0XHRcdGJnR3JlZW46IFs0MiwgNDldLFxuXHRcdFx0YmdZZWxsb3c6IFs0MywgNDldLFxuXHRcdFx0YmdCbHVlOiBbNDQsIDQ5XSxcblx0XHRcdGJnTWFnZW50YTogWzQ1LCA0OV0sXG5cdFx0XHRiZ0N5YW46IFs0NiwgNDldLFxuXHRcdFx0YmdXaGl0ZTogWzQ3LCA0OV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0YmdCbGFja0JyaWdodDogWzEwMCwgNDldLFxuXHRcdFx0YmdSZWRCcmlnaHQ6IFsxMDEsIDQ5XSxcblx0XHRcdGJnR3JlZW5CcmlnaHQ6IFsxMDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93QnJpZ2h0OiBbMTAzLCA0OV0sXG5cdFx0XHRiZ0JsdWVCcmlnaHQ6IFsxMDQsIDQ5XSxcblx0XHRcdGJnTWFnZW50YUJyaWdodDogWzEwNSwgNDldLFxuXHRcdFx0YmdDeWFuQnJpZ2h0OiBbMTA2LCA0OV0sXG5cdFx0XHRiZ1doaXRlQnJpZ2h0OiBbMTA3LCA0OV1cblx0XHR9XG5cdH07XG5cblx0Ly8gQWxpYXMgYnJpZ2h0IGJsYWNrIGFzIGdyYXkgKGFuZCBncmV5KVxuXHRzdHlsZXMuY29sb3IuZ3JheSA9IHN0eWxlcy5jb2xvci5ibGFja0JyaWdodDtcblx0c3R5bGVzLmJnQ29sb3IuYmdHcmF5ID0gc3R5bGVzLmJnQ29sb3IuYmdCbGFja0JyaWdodDtcblx0c3R5bGVzLmNvbG9yLmdyZXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JleSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cblx0Zm9yIChjb25zdCBbZ3JvdXBOYW1lLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzKSkge1xuXHRcdGZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVdIG9mIE9iamVjdC5lbnRyaWVzKGdyb3VwKSkge1xuXHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0XHRcdG9wZW46IGBcXHUwMDFCWyR7c3R5bGVbMF19bWAsXG5cdFx0XHRcdGNsb3NlOiBgXFx1MDAxQlske3N0eWxlWzFdfW1gXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHR2YWx1ZTogY29kZXMsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0fSk7XG5cblx0c3R5bGVzLmNvbG9yLmNsb3NlID0gJ1xcdTAwMUJbMzltJztcblx0c3R5bGVzLmJnQ29sb3IuY2xvc2UgPSAnXFx1MDAxQls0OW0nO1xuXG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNiwgJ2Fuc2kxNicsIGFuc2kyYW5zaSwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5jb2xvciwgJ2Fuc2kyNTYnLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTI1NiwgJ2Fuc2kyNTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNiwgJ2Fuc2kxNicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCB0cnVlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuYmdDb2xvciwgJ2Fuc2kxNm0nLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTE2bSwgJ3JnYicsIHJnYjJyZ2IsIHRydWUpKTtcblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG4vLyBNYWtlIHRoZSBleHBvcnQgaW1tdXRhYmxlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBhc3NlbWJsZVN0eWxlc1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBhbnNpU3R5bGVzID0gcmVxdWlyZSgnYW5zaS1zdHlsZXMnKTtcbmNvbnN0IHtzdGRvdXQ6IHN0ZG91dENvbG9yLCBzdGRlcnI6IHN0ZGVyckNvbG9yfSA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5jb25zdCB7XG5cdHN0cmluZ1JlcGxhY2VBbGwsXG5cdHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleFxufSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLy8gYHN1cHBvcnRzQ29sb3IubGV2ZWxgIOKGkiBgYW5zaVN0eWxlcy5jb2xvcltuYW1lXWAgbWFwcGluZ1xuY29uc3QgbGV2ZWxNYXBwaW5nID0gW1xuXHQnYW5zaScsXG5cdCdhbnNpJyxcblx0J2Fuc2kyNTYnLFxuXHQnYW5zaTE2bSdcbl07XG5cbmNvbnN0IHN0eWxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmNvbnN0IGFwcGx5T3B0aW9ucyA9IChvYmplY3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRpZiAob3B0aW9ucy5sZXZlbCAmJiAhKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5sZXZlbCkgJiYgb3B0aW9ucy5sZXZlbCA+PSAwICYmIG9wdGlvbnMubGV2ZWwgPD0gMykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgbGV2ZWxgIG9wdGlvbiBzaG91bGQgYmUgYW4gaW50ZWdlciBmcm9tIDAgdG8gMycpO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IGxldmVsIGlmIG5vdCBzZXQgbWFudWFsbHlcblx0Y29uc3QgY29sb3JMZXZlbCA9IHN0ZG91dENvbG9yID8gc3Rkb3V0Q29sb3IubGV2ZWwgOiAwO1xuXHRvYmplY3QubGV2ZWwgPSBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQgPyBjb2xvckxldmVsIDogb3B0aW9ucy5sZXZlbDtcbn07XG5cbmNsYXNzIENoYWxrQ2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuXHRcdHJldHVybiBjaGFsa0ZhY3Rvcnkob3B0aW9ucyk7XG5cdH1cbn1cblxuY29uc3QgY2hhbGtGYWN0b3J5ID0gb3B0aW9ucyA9PiB7XG5cdGNvbnN0IGNoYWxrID0ge307XG5cdGFwcGx5T3B0aW9ucyhjaGFsaywgb3B0aW9ucyk7XG5cblx0Y2hhbGsudGVtcGxhdGUgPSAoLi4uYXJndW1lbnRzXykgPT4gY2hhbGtUYWcoY2hhbGsudGVtcGxhdGUsIC4uLmFyZ3VtZW50c18pO1xuXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsaywgQ2hhbGsucHJvdG90eXBlKTtcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLnRlbXBsYXRlLCBjaGFsayk7XG5cblx0Y2hhbGsudGVtcGxhdGUuY29uc3RydWN0b3IgPSAoKSA9PiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdgY2hhbGsuY29uc3RydWN0b3IoKWAgaXMgZGVwcmVjYXRlZC4gVXNlIGBuZXcgY2hhbGsuSW5zdGFuY2UoKWAgaW5zdGVhZC4nKTtcblx0fTtcblxuXHRjaGFsay50ZW1wbGF0ZS5JbnN0YW5jZSA9IENoYWxrQ2xhc3M7XG5cblx0cmV0dXJuIGNoYWxrLnRlbXBsYXRlO1xufTtcblxuZnVuY3Rpb24gQ2hhbGsob3B0aW9ucykge1xuXHRyZXR1cm4gY2hhbGtGYWN0b3J5KG9wdGlvbnMpO1xufVxuXG5mb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhhbnNpU3R5bGVzKSkge1xuXHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBidWlsZGVyID0gY3JlYXRlQnVpbGRlcih0aGlzLCBjcmVhdGVTdHlsZXIoc3R5bGUub3Blbiwgc3R5bGUuY2xvc2UsIHRoaXMuX3N0eWxlciksIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHN0eWxlTmFtZSwge3ZhbHVlOiBidWlsZGVyfSk7XG5cdFx0XHRyZXR1cm4gYnVpbGRlcjtcblx0XHR9XG5cdH07XG59XG5cbnN0eWxlcy52aXNpYmxlID0ge1xuXHRnZXQoKSB7XG5cdFx0Y29uc3QgYnVpbGRlciA9IGNyZWF0ZUJ1aWxkZXIodGhpcywgdGhpcy5fc3R5bGVyLCB0cnVlKTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Zpc2libGUnLCB7dmFsdWU6IGJ1aWxkZXJ9KTtcblx0XHRyZXR1cm4gYnVpbGRlcjtcblx0fVxufTtcblxuY29uc3QgdXNlZE1vZGVscyA9IFsncmdiJywgJ2hleCcsICdrZXl3b3JkJywgJ2hzbCcsICdoc3YnLCAnaHdiJywgJ2Fuc2knLCAnYW5zaTI1NiddO1xuXG5mb3IgKGNvbnN0IG1vZGVsIG9mIHVzZWRNb2RlbHMpIHtcblx0c3R5bGVzW21vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCB7bGV2ZWx9ID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRcdFx0XHRjb25zdCBzdHlsZXIgPSBjcmVhdGVTdHlsZXIoYW5zaVN0eWxlcy5jb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuY29sb3IuY2xvc2UsIHRoaXMuX3N0eWxlcik7XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCdWlsZGVyKHRoaXMsIHN0eWxlciwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuZm9yIChjb25zdCBtb2RlbCBvZiB1c2VkTW9kZWxzKSB7XG5cdGNvbnN0IGJnTW9kZWwgPSAnYmcnICsgbW9kZWxbMF0udG9VcHBlckNhc2UoKSArIG1vZGVsLnNsaWNlKDEpO1xuXHRzdHlsZXNbYmdNb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3Qge2xldmVsfSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGVyID0gY3JlYXRlU3R5bGVyKGFuc2lTdHlsZXMuYmdDb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZSwgdGhpcy5fc3R5bGVyKTtcblx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJ1aWxkZXIodGhpcywgc3R5bGVyLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBwcm90byA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCgpID0+IHt9LCB7XG5cdC4uLnN0eWxlcyxcblx0bGV2ZWw6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZW5lcmF0b3IubGV2ZWw7XG5cdFx0fSxcblx0XHRzZXQobGV2ZWwpIHtcblx0XHRcdHRoaXMuX2dlbmVyYXRvci5sZXZlbCA9IGxldmVsO1xuXHRcdH1cblx0fVxufSk7XG5cbmNvbnN0IGNyZWF0ZVN0eWxlciA9IChvcGVuLCBjbG9zZSwgcGFyZW50KSA9PiB7XG5cdGxldCBvcGVuQWxsO1xuXHRsZXQgY2xvc2VBbGw7XG5cdGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wZW5BbGwgPSBvcGVuO1xuXHRcdGNsb3NlQWxsID0gY2xvc2U7XG5cdH0gZWxzZSB7XG5cdFx0b3BlbkFsbCA9IHBhcmVudC5vcGVuQWxsICsgb3Blbjtcblx0XHRjbG9zZUFsbCA9IGNsb3NlICsgcGFyZW50LmNsb3NlQWxsO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuLFxuXHRcdGNsb3NlLFxuXHRcdG9wZW5BbGwsXG5cdFx0Y2xvc2VBbGwsXG5cdFx0cGFyZW50XG5cdH07XG59O1xuXG5jb25zdCBjcmVhdGVCdWlsZGVyID0gKHNlbGYsIF9zdHlsZXIsIF9pc0VtcHR5KSA9PiB7XG5cdGNvbnN0IGJ1aWxkZXIgPSAoLi4uYXJndW1lbnRzXykgPT4ge1xuXHRcdGlmIChpc0FycmF5KGFyZ3VtZW50c19bMF0pICYmIGlzQXJyYXkoYXJndW1lbnRzX1swXS5yYXcpKSB7XG5cdFx0XHQvLyBDYWxsZWQgYXMgYSB0ZW1wbGF0ZSBsaXRlcmFsLCBmb3IgZXhhbXBsZTogY2hhbGsucmVkYDIgKyAzID0ge2JvbGQgJHsyKzN9fWBcblx0XHRcdHJldHVybiBhcHBseVN0eWxlKGJ1aWxkZXIsIGNoYWxrVGFnKGJ1aWxkZXIsIC4uLmFyZ3VtZW50c18pKTtcblx0XHR9XG5cblx0XHQvLyBTaW5nbGUgYXJndW1lbnQgaXMgaG90IHBhdGgsIGltcGxpY2l0IGNvZXJjaW9uIGlzIGZhc3RlciB0aGFuIGFueXRoaW5nXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgKGFyZ3VtZW50c18ubGVuZ3RoID09PSAxKSA/ICgnJyArIGFyZ3VtZW50c19bMF0pIDogYXJndW1lbnRzXy5qb2luKCcgJykpO1xuXHR9O1xuXG5cdC8vIFdlIGFsdGVyIHRoZSBwcm90b3R5cGUgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihidWlsZGVyLCBwcm90byk7XG5cblx0YnVpbGRlci5fZ2VuZXJhdG9yID0gc2VsZjtcblx0YnVpbGRlci5fc3R5bGVyID0gX3N0eWxlcjtcblx0YnVpbGRlci5faXNFbXB0eSA9IF9pc0VtcHR5O1xuXG5cdHJldHVybiBidWlsZGVyO1xufTtcblxuY29uc3QgYXBwbHlTdHlsZSA9IChzZWxmLCBzdHJpbmcpID0+IHtcblx0aWYgKHNlbGYubGV2ZWwgPD0gMCB8fCAhc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHNlbGYuX2lzRW1wdHkgPyAnJyA6IHN0cmluZztcblx0fVxuXG5cdGxldCBzdHlsZXIgPSBzZWxmLl9zdHlsZXI7XG5cblx0aWYgKHN0eWxlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHtvcGVuQWxsLCBjbG9zZUFsbH0gPSBzdHlsZXI7XG5cdGlmIChzdHJpbmcuaW5kZXhPZignXFx1MDAxQicpICE9PSAtMSkge1xuXHRcdHdoaWxlIChzdHlsZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gUmVwbGFjZSBhbnkgaW5zdGFuY2VzIGFscmVhZHkgcHJlc2VudCB3aXRoIGEgcmUtb3BlbmluZyBjb2RlXG5cdFx0XHQvLyBvdGhlcndpc2Ugb25seSB0aGUgcGFydCBvZiB0aGUgc3RyaW5nIHVudGlsIHNhaWQgY2xvc2luZyBjb2RlXG5cdFx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nUmVwbGFjZUFsbChzdHJpbmcsIHN0eWxlci5jbG9zZSwgc3R5bGVyLm9wZW4pO1xuXG5cdFx0XHRzdHlsZXIgPSBzdHlsZXIucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFdlIGNhbiBtb3ZlIGJvdGggbmV4dCBhY3Rpb25zIG91dCBvZiBsb29wLCBiZWNhdXNlIHJlbWFpbmluZyBhY3Rpb25zIGluIGxvb3Agd29uJ3QgaGF2ZVxuXHQvLyBhbnkvdmlzaWJsZSBlZmZlY3Qgb24gcGFydHMgd2UgYWRkIGhlcmUuIENsb3NlIHRoZSBzdHlsaW5nIGJlZm9yZSBhIGxpbmVicmVhayBhbmQgcmVvcGVuXG5cdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPUzogaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2NoYWxrL3B1bGwvOTJcblx0Y29uc3QgbGZJbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nKTtcblx0aWYgKGxmSW5kZXggIT09IC0xKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4KHN0cmluZywgY2xvc2VBbGwsIG9wZW5BbGwsIGxmSW5kZXgpO1xuXHR9XG5cblx0cmV0dXJuIG9wZW5BbGwgKyBzdHJpbmcgKyBjbG9zZUFsbDtcbn07XG5cbmxldCB0ZW1wbGF0ZTtcbmNvbnN0IGNoYWxrVGFnID0gKGNoYWxrLCAuLi5zdHJpbmdzKSA9PiB7XG5cdGNvbnN0IFtmaXJzdFN0cmluZ10gPSBzdHJpbmdzO1xuXG5cdGlmICghaXNBcnJheShmaXJzdFN0cmluZykgfHwgIWlzQXJyYXkoZmlyc3RTdHJpbmcucmF3KSkge1xuXHRcdC8vIElmIGNoYWxrKCkgd2FzIGNhbGxlZCBieSBpdHNlbGYgb3Igd2l0aCBhIHN0cmluZyxcblx0XHQvLyByZXR1cm4gdGhlIHN0cmluZyBpdHNlbGYgYXMgYSBzdHJpbmcuXG5cdFx0cmV0dXJuIHN0cmluZ3Muam9pbignICcpO1xuXHR9XG5cblx0Y29uc3QgYXJndW1lbnRzXyA9IHN0cmluZ3Muc2xpY2UoMSk7XG5cdGNvbnN0IHBhcnRzID0gW2ZpcnN0U3RyaW5nLnJhd1swXV07XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBmaXJzdFN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdHBhcnRzLnB1c2goXG5cdFx0XHRTdHJpbmcoYXJndW1lbnRzX1tpIC0gMV0pLnJlcGxhY2UoL1t7fVxcXFxdL2csICdcXFxcJCYnKSxcblx0XHRcdFN0cmluZyhmaXJzdFN0cmluZy5yYXdbaV0pXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlKGNoYWxrLCBwYXJ0cy5qb2luKCcnKSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGFsay5wcm90b3R5cGUsIHN0eWxlcyk7XG5cbmNvbnN0IGNoYWxrID0gQ2hhbGsoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5jaGFsay5zdXBwb3J0c0NvbG9yID0gc3Rkb3V0Q29sb3I7XG5jaGFsay5zdGRlcnIgPSBDaGFsayh7bGV2ZWw6IHN0ZGVyckNvbG9yID8gc3RkZXJyQ29sb3IubGV2ZWwgOiAwfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuY2hhbGsuc3RkZXJyLnN1cHBvcnRzQ29sb3IgPSBzdGRlcnJDb2xvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFsaztcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IFRFTVBMQVRFX1JFR0VYID0gLyg/OlxcXFwodSg/OlthLWZcXGRdezR9fFxce1thLWZcXGRdezEsNn1cXH0pfHhbYS1mXFxkXXsyfXwuKSl8KD86XFx7KH4pPyhcXHcrKD86XFwoW14pXSpcXCkpPyg/OlxcLlxcdysoPzpcXChbXildKlxcKSk/KSopKD86WyBcXHRdfCg/PVxccj9cXG4pKSl8KFxcfSl8KCg/Oi58W1xcclxcblxcZl0pKz8pL2dpO1xuY29uc3QgU1RZTEVfUkVHRVggPSAvKD86XnxcXC4pKFxcdyspKD86XFwoKFteKV0qKVxcKSk/L2c7XG5jb25zdCBTVFJJTkdfUkVHRVggPSAvXihbJ1wiXSkoKD86XFxcXC58KD8hXFwxKVteXFxcXF0pKilcXDEkLztcbmNvbnN0IEVTQ0FQRV9SRUdFWCA9IC9cXFxcKHUoPzpbYS1mXFxkXXs0fXx7W2EtZlxcZF17MSw2fX0pfHhbYS1mXFxkXXsyfXwuKXwoW15cXFxcXSkvZ2k7XG5cbmNvbnN0IEVTQ0FQRVMgPSBuZXcgTWFwKFtcblx0WyduJywgJ1xcbiddLFxuXHRbJ3InLCAnXFxyJ10sXG5cdFsndCcsICdcXHQnXSxcblx0WydiJywgJ1xcYiddLFxuXHRbJ2YnLCAnXFxmJ10sXG5cdFsndicsICdcXHYnXSxcblx0WycwJywgJ1xcMCddLFxuXHRbJ1xcXFwnLCAnXFxcXCddLFxuXHRbJ2UnLCAnXFx1MDAxQiddLFxuXHRbJ2EnLCAnXFx1MDAwNyddXG5dKTtcblxuZnVuY3Rpb24gdW5lc2NhcGUoYykge1xuXHRjb25zdCB1ID0gY1swXSA9PT0gJ3UnO1xuXHRjb25zdCBicmFja2V0ID0gY1sxXSA9PT0gJ3snO1xuXG5cdGlmICgodSAmJiAhYnJhY2tldCAmJiBjLmxlbmd0aCA9PT0gNSkgfHwgKGNbMF0gPT09ICd4JyAmJiBjLmxlbmd0aCA9PT0gMykpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjLnNsaWNlKDEpLCAxNikpO1xuXHR9XG5cblx0aWYgKHUgJiYgYnJhY2tldCkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludChwYXJzZUludChjLnNsaWNlKDIsIC0xKSwgMTYpKTtcblx0fVxuXG5cdHJldHVybiBFU0NBUEVTLmdldChjKSB8fCBjO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhuYW1lLCBhcmd1bWVudHNfKSB7XG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gYXJndW1lbnRzXy50cmltKCkuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0bGV0IG1hdGNoZXM7XG5cblx0Zm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcblx0XHRjb25zdCBudW1iZXIgPSBOdW1iZXIoY2h1bmspO1xuXHRcdGlmICghTnVtYmVyLmlzTmFOKG51bWJlcikpIHtcblx0XHRcdHJlc3VsdHMucHVzaChudW1iZXIpO1xuXHRcdH0gZWxzZSBpZiAoKG1hdGNoZXMgPSBjaHVuay5tYXRjaChTVFJJTkdfUkVHRVgpKSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKG1hdGNoZXNbMl0ucmVwbGFjZShFU0NBUEVfUkVHRVgsIChtLCBlc2NhcGUsIGNoYXJhY3RlcikgPT4gZXNjYXBlID8gdW5lc2NhcGUoZXNjYXBlKSA6IGNoYXJhY3RlcikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQ2hhbGsgdGVtcGxhdGUgc3R5bGUgYXJndW1lbnQ6ICR7Y2h1bmt9IChpbiBzdHlsZSAnJHtuYW1lfScpYCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3R5bGUoc3R5bGUpIHtcblx0U1RZTEVfUkVHRVgubGFzdEluZGV4ID0gMDtcblxuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGxldCBtYXRjaGVzO1xuXG5cdHdoaWxlICgobWF0Y2hlcyA9IFNUWUxFX1JFR0VYLmV4ZWMoc3R5bGUpKSAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IG5hbWUgPSBtYXRjaGVzWzFdO1xuXG5cdFx0aWYgKG1hdGNoZXNbMl0pIHtcblx0XHRcdGNvbnN0IGFyZ3MgPSBwYXJzZUFyZ3VtZW50cyhuYW1lLCBtYXRjaGVzWzJdKTtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0uY29uY2F0KGFyZ3MpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykge1xuXHRjb25zdCBlbmFibGVkID0ge307XG5cblx0Zm9yIChjb25zdCBsYXllciBvZiBzdHlsZXMpIHtcblx0XHRmb3IgKGNvbnN0IHN0eWxlIG9mIGxheWVyLnN0eWxlcykge1xuXHRcdFx0ZW5hYmxlZFtzdHlsZVswXV0gPSBsYXllci5pbnZlcnNlID8gbnVsbCA6IHN0eWxlLnNsaWNlKDEpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjdXJyZW50ID0gY2hhbGs7XG5cdGZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVzXSBvZiBPYmplY3QuZW50cmllcyhlbmFibGVkKSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIShzdHlsZU5hbWUgaW4gY3VycmVudCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBDaGFsayBzdHlsZTogJHtzdHlsZU5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0Y3VycmVudCA9IHN0eWxlcy5sZW5ndGggPiAwID8gY3VycmVudFtzdHlsZU5hbWVdKC4uLnN0eWxlcykgOiBjdXJyZW50W3N0eWxlTmFtZV07XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoY2hhbGssIHRlbXBvcmFyeSkgPT4ge1xuXHRjb25zdCBzdHlsZXMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gW107XG5cdGxldCBjaHVuayA9IFtdO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdHRlbXBvcmFyeS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYLCAobSwgZXNjYXBlQ2hhcmFjdGVyLCBpbnZlcnNlLCBzdHlsZSwgY2xvc2UsIGNoYXJhY3RlcikgPT4ge1xuXHRcdGlmIChlc2NhcGVDaGFyYWN0ZXIpIHtcblx0XHRcdGNodW5rLnB1c2godW5lc2NhcGUoZXNjYXBlQ2hhcmFjdGVyKSk7XG5cdFx0fSBlbHNlIGlmIChzdHlsZSkge1xuXHRcdFx0Y29uc3Qgc3RyaW5nID0gY2h1bmsuam9pbignJyk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0Y2h1bmtzLnB1c2goc3R5bGVzLmxlbmd0aCA9PT0gMCA/IHN0cmluZyA6IGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoc3RyaW5nKSk7XG5cdFx0XHRzdHlsZXMucHVzaCh7aW52ZXJzZSwgc3R5bGVzOiBwYXJzZVN0eWxlKHN0eWxlKX0pO1xuXHRcdH0gZWxzZSBpZiAoY2xvc2UpIHtcblx0XHRcdGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRm91bmQgZXh0cmFuZW91cyB9IGluIENoYWxrIHRlbXBsYXRlIGxpdGVyYWwnKTtcblx0XHRcdH1cblxuXHRcdFx0Y2h1bmtzLnB1c2goYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShjaHVuay5qb2luKCcnKSkpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdHN0eWxlcy5wb3AoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2h1bmsucHVzaChjaGFyYWN0ZXIpO1xuXHRcdH1cblx0fSk7XG5cblx0Y2h1bmtzLnB1c2goY2h1bmsuam9pbignJykpO1xuXG5cdGlmIChzdHlsZXMubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGVyck1lc3NhZ2UgPSBgQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCBpcyBtaXNzaW5nICR7c3R5bGVzLmxlbmd0aH0gY2xvc2luZyBicmFja2V0JHtzdHlsZXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9IChcXGB9XFxgKWA7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xuXHR9XG5cblx0cmV0dXJuIGNodW5rcy5qb2luKCcnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ1JlcGxhY2VBbGwgPSAoc3RyaW5nLCBzdWJzdHJpbmcsIHJlcGxhY2VyKSA9PiB7XG5cdGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKHN1YnN0cmluZyk7XG5cdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3Qgc3Vic3RyaW5nTGVuZ3RoID0gc3Vic3RyaW5nLmxlbmd0aDtcblx0bGV0IGVuZEluZGV4ID0gMDtcblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGRvIHtcblx0XHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4LCBpbmRleCAtIGVuZEluZGV4KSArIHN1YnN0cmluZyArIHJlcGxhY2VyO1xuXHRcdGVuZEluZGV4ID0gaW5kZXggKyBzdWJzdHJpbmdMZW5ndGg7XG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcsIGVuZEluZGV4KTtcblx0fSB3aGlsZSAoaW5kZXggIT09IC0xKTtcblxuXHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4KTtcblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuY29uc3Qgc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4ID0gKHN0cmluZywgcHJlZml4LCBwb3N0Zml4LCBpbmRleCkgPT4ge1xuXHRsZXQgZW5kSW5kZXggPSAwO1xuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0ZG8ge1xuXHRcdGNvbnN0IGdvdENSID0gc3RyaW5nW2luZGV4IC0gMV0gPT09ICdcXHInO1xuXHRcdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgsIChnb3RDUiA/IGluZGV4IC0gMSA6IGluZGV4KSAtIGVuZEluZGV4KSArIHByZWZpeCArIChnb3RDUiA/ICdcXHJcXG4nIDogJ1xcbicpICsgcG9zdGZpeDtcblx0XHRlbmRJbmRleCA9IGluZGV4ICsgMTtcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nLCBlbmRJbmRleCk7XG5cdH0gd2hpbGUgKGluZGV4ICE9PSAtMSk7XG5cblx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCk7XG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdHJpbmdSZXBsYWNlQWxsLFxuXHRzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXhcbn07XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5jb25zdCBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxuY29uc3QgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjc3NLZXl3b3JkcykpIHtcblx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xufVxuXG5jb25zdCBjb252ZXJ0ID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG4vLyBIaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbnZlcnQpKSB7XG5cdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRjb25zdCB7Y2hhbm5lbHMsIGxhYmVsc30gPSBjb252ZXJ0W21vZGVsXTtcblx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuXHRsZXQgaDtcblx0bGV0IHM7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHJkaWY7XG5cdGxldCBnZGlmO1xuXHRsZXQgYmRpZjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSAwO1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdO1xuXHRjb25zdCBnID0gcmdiWzFdO1xuXHRsZXQgYiA9IHJnYlsyXTtcblx0Y29uc3QgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHRjb25zdCB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Y29uc3QgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjb25zdCBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0Lypcblx0XHRTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2Vcblx0Ki9cblx0cmV0dXJuIChcblx0XHQoKHhbMF0gLSB5WzBdKSAqKiAyKSArXG5cdFx0KCh4WzFdIC0geVsxXSkgKiogMikgK1xuXHRcdCgoeFsyXSAtIHlbMl0pICoqIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdGxldCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdGxldCBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yIChjb25zdCBrZXl3b3JkIG9mIE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGxldCBnID0gcmdiWzFdIC8gMjU1O1xuXHRsZXQgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyAoKChyICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gKCgoZyArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/ICgoKGIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdGNvbnN0IHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdGNvbnN0IHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdGNvbnN0IHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdGxldCB4ID0geHl6WzBdO1xuXHRsZXQgeSA9IHh5elsxXTtcblx0bGV0IHogPSB4eXpbMl07XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/ICh4ICoqICgxIC8gMykpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gKHkgKiogKDEgLyAzKSkgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyAoeiAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRjb25zdCBsID0gKDExNiAqIHkpIC0gMTY7XG5cdGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRjb25zdCBiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdIC8gMzYwO1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgdDI7XG5cdGxldCB0Mztcblx0bGV0IHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHRjb25zdCB0MSA9IDIgKiBsIC0gdDI7XG5cblx0Y29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdO1xuXHRsZXQgcyA9IGhzbFsxXSAvIDEwMDtcblx0bGV0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCBzbWluID0gcztcblx0Y29uc3QgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdGNvbnN0IHYgPSAobCArIHMpIC8gMjtcblx0Y29uc3Qgc3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXSAvIDYwO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRsZXQgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3QgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHRjb25zdCBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdGNvbnN0IHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0Y29uc3QgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHRjb25zdCB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdGxldCBzbDtcblx0bGV0IGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRjb25zdCBsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCBoID0gaHdiWzBdIC8gMzYwO1xuXHRsZXQgd2ggPSBod2JbMV0gLyAxMDA7XG5cdGxldCBibCA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgcmF0aW8gPSB3aCArIGJsO1xuXHRsZXQgZjtcblxuXHQvLyBXaCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGNvbnN0IGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0Y29uc3QgdiA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdGNvbnN0IG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gTGluZWFyIGludGVycG9sYXRpb25cblxuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgIGcgPSBuOyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyAgZyA9IHY7ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgIGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47ICBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgIGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7ICBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0Y29uc3QgYyA9IGNteWtbMF0gLyAxMDA7XG5cdGNvbnN0IG0gPSBjbXlrWzFdIC8gMTAwO1xuXHRjb25zdCB5ID0gY215a1syXSAvIDEwMDtcblx0Y29uc3QgayA9IGNteWtbM10gLyAxMDA7XG5cblx0Y29uc3QgciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHRjb25zdCB4ID0geHl6WzBdIC8gMTAwO1xuXHRjb25zdCB5ID0geHl6WzFdIC8gMTAwO1xuXHRjb25zdCB6ID0geHl6WzJdIC8gMTAwO1xuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKHIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGcgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCB4O1xuXHRsZXQgeTtcblx0bGV0IHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHRjb25zdCB5MiA9IHkgKiogMztcblx0Y29uc3QgeDIgPSB4ICoqIDM7XG5cdGNvbnN0IHoyID0geiAqKiAzO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCBoO1xuXG5cdGNvbnN0IGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdGNvbnN0IGwgPSBsY2hbMF07XG5cdGNvbnN0IGMgPSBsY2hbMV07XG5cdGNvbnN0IGggPSBsY2hbMl07XG5cblx0Y29uc3QgaHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGNvbnN0IGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRjb25zdCBiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MsIHNhdHVyYXRpb24gPSBudWxsKSB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IGFyZ3M7XG5cdGxldCB2YWx1ZSA9IHNhdHVyYXRpb24gPT09IG51bGwgPyBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl0gOiBzYXR1cmF0aW9uOyAvLyBIc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHRsZXQgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBPcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IHIgPSBhcmdzWzBdO1xuXHRjb25zdCBnID0gYXJnc1sxXTtcblx0Y29uc3QgYiA9IGFyZ3NbMl07XG5cblx0Ly8gV2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHRjb25zdCBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0bGV0IGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIEhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdGNvbnN0IG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHRjb25zdCByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdGNvbnN0IGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0bGV0IHJlbTtcblx0Y29uc3QgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHRjb25zdCBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdGxldCBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoY2hhciA9PiB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHRjb25zdCBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0Y29uc3QgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdGNvbnN0IGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdGNvbnN0IGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0Y29uc3QgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdGxldCBncmF5c2NhbGU7XG5cdGxldCBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYTtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBsIDwgMC41ID8gKDIuMCAqIHMgKiBsKSA6ICgyLjAgKiBzICogKDEuMCAtIGwpKTtcblxuXHRsZXQgZiA9IDA7XG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGNvbnN0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IHMgKiB2O1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGggPSBoY2dbMF0gLyAzNjA7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHRjb25zdCBwdXJlID0gWzAsIDAsIDBdO1xuXHRjb25zdCBoaSA9IChoICUgMSkgKiA2O1xuXHRjb25zdCB2ID0gaGkgJSAxO1xuXHRjb25zdCB3ID0gMSAtIHY7XG5cdGxldCBtZyA9IDA7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0bGV0IGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0bGV0IHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IHcgPSBod2JbMV0gLyAxMDA7XG5cdGNvbnN0IGIgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSAxIC0gYjtcblx0Y29uc3QgYyA9IHYgLSB3O1xuXHRsZXQgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc3YgPSBjb252ZXJ0LmdyYXkuaHNsO1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0Y29uc3QgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdGNvbnN0IGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsImNvbnN0IGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3Qgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbmNvbnN0IGNvbnZlcnQgPSB7fTtcblxuY29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdGNvbnN0IHdyYXBwZWRGbiA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Y29uc3QgYXJnMCA9IGFyZ3NbMF07XG5cdFx0aWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJnMDtcblx0XHR9XG5cblx0XHRpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gYXJnMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gUHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXG5cdFx0aWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJnMDtcblx0XHR9XG5cblx0XHRpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gYXJnMDtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIFdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKGxldCBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnJvbU1vZGVsID0+IHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0Y29uc3Qgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0Y29uc3Qgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2godG9Nb2RlbCA9PiB7XG5cdFx0Y29uc3QgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0VGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdGNvbnN0IGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0Y29uc3QgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gVW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdGNvbnN0IGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAobGV0IGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGNvbnN0IGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0Y29uc3QgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHRsZXQgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdGxldCBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0Y29uc3QgY29udmVyc2lvbiA9IHt9O1xuXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yIChsZXQgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGNvbnN0IHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBObyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZsYWcsIGFyZ3YgPSBwcm9jZXNzLmFyZ3YpID0+IHtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblx0Y29uc3QgdGVybWluYXRvclBvc2l0aW9uID0gYXJndi5pbmRleE9mKCctLScpO1xuXHRyZXR1cm4gcG9zaXRpb24gIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zaXRpb24gPT09IC0xIHx8IHBvc2l0aW9uIDwgdGVybWluYXRvclBvc2l0aW9uKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCB7ZW52fSA9IHByb2Nlc3M7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1uZXZlcicpKSB7XG5cdGZvcmNlQ29sb3IgPSAwO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gMTtcbn1cblxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICd0cnVlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAxO1xuXHR9IGVsc2UgaWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ2ZhbHNlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApLCAzKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCBzdHJlYW1Jc1RUWSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKGhhdmVTdHJlYW0gJiYgIXN0cmVhbUlzVFRZICYmIGZvcmNlQ29sb3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciB8fCAwO1xuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy5cblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSScsICdHSVRIVUJfQUNUSU9OUycsICdCVUlMREtJVEUnXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtLCBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMSkpKSxcblx0c3RkZXJyOiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMikpKVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBGaWxlV2F0Y2ggZnJvbSBcIi4vZmlsZS9GaWxlV2F0Y2hcIjtcclxuaW1wb3J0IFJlc1VSTCBmcm9tIFwiLi9fVC9SZXNVUkxcIjtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuLyoqXHJcbiAqIOWIneWni+WMllxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlumhueebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIm+W7uuWQjuerr+e8k+WtmOebruW9lVxyXG4gICAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKFJlc1VSTC5jb2RlQnVpbGRDYWNoZVVSTCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICAgICAgICAgIC8v5byA5ZCv5paH5Lu255uR5ZCsXHJcbiAgICAgICAgICAgIEZpbGVXYXRjaC5zdGFydCgpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICByKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRmlsZU9wZXJhdGlvbiBmcm9tIFwiLi9maWxlL0ZpbGVPcGVyYXRpb25cIjtcclxuaW1wb3J0IEluaXQgZnJvbSBcIi4vSW5pdFwiO1xyXG5jb25zdCBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJyk7XHJcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XHJcblxyXG5cclxuLy/lhYjliJ3lp4vljJbpobnnm65cclxuSW5pdC5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAvLyByZXEg6K+35rGC77yMIHJlcyDlk43lupQgXHJcbiAgICBjb25zdCBhcHAgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgICAgICAvL+iuvue9rui3qOWfn1xyXG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdDtjaGFyc2V0PVVURi04JyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlLFhGSUxFTkFNRSxYRklMRUNBVEVHT1JZLFhGSUxFU0laRSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vZ2V06K+35rGCXHJcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICAgIC8v6Kej5p6Q5Ye66Lev5b6EXHJcbiAgICAgICAgICAgIGxldCBfdXJsOiBzdHJpbmcgPSByZXEudXJsO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBGaWxlT3BlcmF0aW9uLmdldEZpbGUoX3VybCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/ov5Tlm57mlbDmja5cclxuICAgICAgICAgICAgICAgIHJlcy5lbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3Bvc3Tor7fmsYJcclxuICAgICAgICBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgcmVzLmVuZCgn5LiN5pSv5oyBcG9zdOivt+axguOAgicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/orr7nva7nq6/lj6NcclxuICAgIGFwcC5saXN0ZW4oMzA2MCk7XHJcbiAgICAvL+aPkOekulxyXG4gICAgY29uc29sZS5sb2coY2hhbGsubWFnZW50YSgn5pyN5Yqh5Zmo5omT5byA5oiQ5YqfIGh0dHA6Ly9sb2NhbGhvc3Q6MzA2MCcpKTtcclxufSk7IiwiaW1wb3J0IFVSTFQgZnJvbSBcIi4vVVJMVFwiO1xyXG5cclxuLyoqXHJcbiAqIOi1hOa6kOi3r+W+hOexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzVVJMIHtcclxuICAgIC8qKiDmnI3liqHot6/lvoQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNlcnZlVVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjMwNjAvJztcclxuICAgIH1cclxuXHJcbiAgICAvKiog5ZCO56uv5qC56Lev5b6EICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByb290VVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFVSTFQucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogc3Jj6Lev5b6EICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzcmNVUkwoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyByZXR1cm4gcmVzb2x2ZSh0aGlzLnJvb3RVUkwsICcuLi8uLi9zcmMvJyk7XHJcbiAgICAgICAgcmV0dXJuIFVSTFQuam9pbih0aGlzLnJvb3RVUkwsICd0ZXN0U3JjLycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDku6PnoIHmiZPljIXnvJPlrZjot6/lvoQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvZGVCdWlsZENhY2hlVVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFVSTFQuam9pbih0aGlzLnJvb3RVUkwsICdub2RlX21vZHVsZXMvX2VzQnVpbGRDb2RlVXJsLycpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG4vKipcclxuICog6Lev5b6E5bel5YW3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVUkxUIHtcclxuICAgIC8qKlxyXG4gICAgICog5bCG5omA5pyJ5Y+C5pWw6L+e5o6l5Zyo5LiA6LW377yM5bm26KeE6IyD5YyW57uT5p6c6Lev5b6E44CCXHJcbiAgICAgKiDlj4LmlbDlv4XpobvmmK/lrZfnrKbkuLLjgIJcclxuICAgICAqIOWcqHYwLjjkuK3vvIzpnZ7lrZfnrKbkuLLlj4LmlbDooqvml6Dlo7DlnLDlv73nlaXjgIJcclxuICAgICAqIOWcqHYwLjEw5Y+K5Lul5LiK54mI5pys5Lit77yM5Lya5oqb5Ye65byC5bi444CCXHJcbiAgICAgKiBAcGFyYW0gcGF0aHMgdXJs5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgam9pbiguLi5wYXRoczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBfdXJsOiBzdHJpbmcgPSBqb2luKC4uLnBhdGhzKTtcclxuICAgICAgICByZXR1cm4gX3VybDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWPs+i+ueeahOWPguaVsOiiq+iupOS4uuaYr3t0b33jgIJcclxuICAgICAqIOWFtuS7luWPguaVsOiiq+iupOS4uuaYr3tmcm9tfeeahOaVsOe7hOOAglxyXG4gICAgICog5LuO5pyA5bem6L6555qEe2Zyb2195Y+C5pWw5byA5aeL77yM5bCGe3Rvfeino+aekOS4uuS4gOS4que7neWvuei3r+W+hOOAglxyXG4gICAgICog5aaC5p6ce3Rvfei/mOS4jeaYr+e7neWvuei3r+W+hO+8jHtmcm9tfeWPguaVsOWwhuaMieS7juWPs+WIsOW3pueahOmhuuW6j+WJjee8gO+8jOebtOWIsOaJvuWIsOS4gOS4que7neWvuei3r+W+hOOAglxyXG4gICAgICog5aaC5p6c5Zyo5L2/55So5LqG5omA5pyJ55qEe2Zyb2196Lev5b6E5ZCO5LuN54S25rKh5pyJ5om+5Yiw57ud5a+56Lev5b6E77yM5Lmf5Lya5L2/55So5b2T5YmN5bel5L2c55uu5b2V44CCXHJcbiAgICAgKiDnlJ/miJDnmoTot6/lvoTooqvop4TojIPljJbvvIzlubbkuJTmnKvlsL7nmoTmlpzmnaDooqvliKDpmaTvvIzpmaTpnZ7ot6/lvoTooqvop6PmnpDliLDmoLnnm67lvZXjgIJcclxuICAgICAqIEBwYXJhbSBwYXRoU2VnbWVudHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZSguLi5wYXRoU2VnbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSguLi5wYXRoU2VnbWVudHMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlc1VSTCBmcm9tIFwic3JjL19UL1Jlc1VSTFwiO1xyXG5pbXBvcnQgVVJMVCBmcm9tIFwic3JjL19UL1VSTFRcIjtcclxuaW1wb3J0IEZpbGVUcmFuc2l0aW9uIGZyb20gXCIuL0ZpbGVUcmFuc2l0aW9uXCI7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgZXNidWlsZCA9IHJlcXVpcmUoJ2VzYnVpbGQnKTtcclxuXHJcbi8qKlxyXG4gKiDmlofku7bmiZPljIVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVCdWlsZCB7XHJcbiAgICAvKipcclxuICAgICAqIOaJk+WMhVxyXG4gICAgICogQHBhcmFtIF91cmwg5qih5Z2X6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGQoX3VybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigociwgZSkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgX2NhY2hlRmlsZVVybDogc3RyaW5nID0gVVJMVC5qb2luKFJlc1VSTC5jb2RlQnVpbGRDYWNoZVVSTCwgX3VybC5tYXRjaCgvW15cXC9cXFxcXSo/JC8pWzBdICsgJ18nICsgRGF0ZS5ub3coKSk7XHJcbiAgICAgICAgICAgIC8v5omT5YyF5Yiw57yT5a2Y55uu5b2VXHJcbiAgICAgICAgICAgIGVzYnVpbGQuYnVpbGRTeW5jKHtcclxuICAgICAgICAgICAgICAgIGVudHJ5UG9pbnRzOiBbVVJMVC5qb2luKFJlc1VSTC5zcmNVUkwsIF91cmwpXSxcclxuICAgICAgICAgICAgICAgIG91dGZpbGU6IF9jYWNoZUZpbGVVcmwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v6K+75Y+W55uu5qCH5paH5Lu2XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50OiBzdHJpbmcgPSBmcy5yZWFkRmlsZVN5bmMoX2NhY2hlRmlsZVVybCk7XHJcbiAgICAgICAgICAgIC8v5paH5Lu26L+H5rihXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBGaWxlVHJhbnNpdGlvbi5idWlsZEJhY2soY29udGVudCk7Ly/miZPljIXlkI5cclxuICAgICAgICAgICAgLy/liKDpmaTmlofku7ZcclxuICAgICAgICAgICAgZnMudW5saW5rU3luYyhfY2FjaGVGaWxlVXJsKTtcclxuICAgICAgICAgICAgLy/ljIXoo4XlhoXlrrlcclxuICAgICAgICAgICAgY29udGVudCA9IGAvL1xyXG4vL2VzQnVpbGQ6ICR7RGF0ZS5ub3coKX1cclxuLy9cclxuJHtjb250ZW50fVxyXG4vLyAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAvL+i/lOWbnuWGheWuuVxyXG4gICAgICAgICAgICByKGNvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZpbGVNb2R1bGUgZnJvbSBcIi4vRmlsZU1vZHVsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOaWh+S7tue8k+WtmFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNhY2hlIHtcclxuICAgIC8qKiDmlofku7bmqKHlnZfnvJPlrZjliJfooaggKi9cclxuICAgIHByaXZhdGUgc3RhdGljIG1fbW9kdWxlQ2FjaGU6IHtcclxuICAgICAgICBbaW5kZXg6IHN0cmluZ106IEZpbGVNb2R1bGVcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruaooeWdl+i3r+W+hOiOt+WPluaooeWdl1xyXG4gICAgICogQHBhcmFtIF91cmwg5qih5Z2X6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TW9kdWxlKF91cmw6IHN0cmluZyk6IEZpbGVNb2R1bGUge1xyXG4gICAgICAgIGxldCBfbW9kdWxlOiBGaWxlTW9kdWxlID0gdGhpcy5tX21vZHVsZUNhY2hlW191cmxdO1xyXG4gICAgICAgIGlmICghX21vZHVsZSkge1xyXG4gICAgICAgICAgICBfbW9kdWxlID0gbmV3IEZpbGVNb2R1bGUoX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9tb2R1bGVDYWNoZVtfdXJsXSA9IF9tb2R1bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfbW9kdWxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEZpbGVCdWlsZCBmcm9tIFwiLi9GaWxlQnVpbGRcIjtcclxuXHJcbi8qKlxyXG4gKiDmlofku7bmqKHlnZdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVNb2R1bGUge1xyXG4gICAgLyoqIOi3r+W+hCAqL1xyXG4gICAgcHJpdmF0ZSBtX3VybDogc3RyaW5nO1xyXG5cclxuICAgIC8qKiDmnJ/nuqYgKi9cclxuICAgIHByaXZhdGUgbV9wcm9taXNlOiBQcm9taXNlPEZpbGVNb2R1bGU+O1xyXG5cclxuICAgIC8qKiDlhoXlrrkgKi9cclxuICAgIHByaXZhdGUgbV9jb250ZW50OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIOiOt+WPliDmqKHlnZfmnJ/nuqYgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPEZpbGVNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPliDmqKHlnZflhoXlrrkgKi9cclxuICAgIHB1YmxpYyBnZXQgY29udGVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIF91cmwg5qih5Z2X6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihfdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1fdXJsID0gX3VybDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPluWGheWuuSAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDb250ZW50KCkge1xyXG4gICAgICAgIC8v5YWI5Yik5pat5Zyw5Z2A5piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgaWYgKHRoaXMubV91cmwpIHtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJbmnJ/nuqZcclxuICAgICAgICAgICAgdGhpcy5tX3Byb21pc2UgPSBuZXcgUHJvbWlzZTxGaWxlTW9kdWxlPigociwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/miZPljIXmlofku7ZcclxuICAgICAgICAgICAgICAgIEZpbGVCdWlsZC5idWlsZCh0aGlzLm1fdXJsKS50aGVuKChfY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6LWL5YC85YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbnRlbnQgPSBfY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHIodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoRSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v56m65YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHIodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Byb21pc2UgPSBuZXcgUHJvbWlzZTxGaWxlTW9kdWxlPigociwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIHIodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBGaWxlQ2FjaGUgZnJvbSBcIi4vRmlsZUNhY2hlXCI7XHJcblxyXG4vKipcclxuICog5paH5Lu25pON5L2cXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlT3BlcmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gX3VybCDnu53lr7not6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGaWxlKF91cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHIsIGUpID0+IHtcclxuICAgICAgICAgICAgRmlsZUNhY2hlLmdldE1vZHVsZShfdXJsKS5wcm9taXNlLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcihtb2R1bGUuY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaWh+S7tui/h+a4oeaTjeS9nFxyXG4gKiDlvZPku47mnKzlnLDor7vlj5bmlofku7bnmoTmmK/lkKbkvJrnu4/ov4fov5nkuKrmtYHnqItcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVUcmFuc2l0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICog5omT5YyF5ZCOXHJcbiAgICAgKiBAcGFyYW0gX2NvbnRlbnQg5paH5Lu25YaF5a65XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRCYWNrKF9jb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5aSE55CG6Lev5b6EXHJcbiAgICAgICAgX2NvbnRlbnQgPSBfY29udGVudC5yZXBsYWNlKC9pbXBvcnQuKj9bXCInXSguKj8pW1wiJ107L2csIChfLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX2NvbnRlbnQ7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5paH5Lu255uR6KeGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlV2F0Y2gge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vnm5Hop4ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydCgpIHsgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9