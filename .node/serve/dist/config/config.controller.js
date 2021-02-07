"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const IResponseData_1 = require("../_com/IResponseData");
const ConfigDispose_1 = require("./dispose/ConfigDispose");
const ConfigResURL_1 = require("./dispose/ConfigResURL");
let ConfigController = class ConfigController {
    constructor() {
        this.m_configDispose = new ConfigDispose_1.default();
    }
    async getAllConfigsNames() {
        return this.m_configDispose.getAllConfigsNames();
    }
    async getAllConfigJsonNames() {
        return this.m_configDispose.getAllConfigJsonNames();
    }
    async getAllSceneJsonNames() {
        return this.m_configDispose.getAllSceneJsonNames();
    }
    async getJsonData(query) {
        return this.m_configDispose.getJsonData(query.url);
    }
    async zipJsonFile(body) {
        return this.m_configDispose.zipJsonFile(body.url);
    }
    async unZipJsonFile(body) {
        return this.m_configDispose.unZipJsonFile(body.url);
    }
    async exportExcelToJson(body) {
        return this.m_configDispose.exportExcelToJson(body.excel);
    }
    async getURL(query) {
        return this.m_configDispose.getURL(ConfigResURL_1.ELocalURLKey[query.key]);
    }
    async alterURL(body) {
        return this.m_configDispose.alterURL(ConfigResURL_1.ELocalURLKey[body.key], body.url);
    }
};
__decorate([
    common_1.Get('getAllConfigsNames'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getAllConfigsNames", null);
__decorate([
    common_1.Get('getAllConfigJsonNames'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getAllConfigJsonNames", null);
__decorate([
    common_1.Get('getAllSceneJsonNames'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getAllSceneJsonNames", null);
__decorate([
    common_1.Get('getJsonData'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getJsonData", null);
__decorate([
    common_1.Post('zipJsonFile'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "zipJsonFile", null);
__decorate([
    common_1.Post('unZipJsonFile'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "unZipJsonFile", null);
__decorate([
    common_1.Post('exportExcelToJson'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "exportExcelToJson", null);
__decorate([
    common_1.Get('getURL'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getURL", null);
__decorate([
    common_1.Post('alterURL'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "alterURL", null);
ConfigController = __decorate([
    common_1.Controller('config'),
    __metadata("design:paramtypes", [])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map