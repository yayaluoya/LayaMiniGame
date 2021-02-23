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
exports.LogController = void 0;
const common_1 = require("@nestjs/common");
const IResponseData_1 = require("../_com/IResponseData");
const LogDispose_1 = require("./dispose/LogDispose");
let LogController = class LogController {
    constructor() {
        this.m_logDispose = new LogDispose_1.default();
    }
    async getAllLog(query) {
        return this.m_logDispose.getAllLog();
    }
    async getLog(query) {
        return this.m_logDispose.getLog(query['name']);
    }
    async writeLog(body) {
        return this.m_logDispose.writeLog(body['log'], body['log_'], body['key']);
    }
    async editLog(body) {
        return this.m_logDispose.editLog(body['name'], body['log'], body['log_']);
    }
};
__decorate([
    common_1.Get('getAllLog'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "getAllLog", null);
__decorate([
    common_1.Get('getLog'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "getLog", null);
__decorate([
    common_1.Post('writeLog'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "writeLog", null);
__decorate([
    common_1.Post('editLog'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "editLog", null);
LogController = __decorate([
    common_1.Controller('log'),
    __metadata("design:paramtypes", [])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map