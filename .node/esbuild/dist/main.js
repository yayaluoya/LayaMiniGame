"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3060);
    console.log('--');
    console.log('-- 开启后端服务  ' + new Date());
    console.log('----▷ 按 F5 键启动 DeBug 浏览器，打开 http://localhost:3060/ 访问接口');
    console.log('--');
}
bootstrap();
//# sourceMappingURL=main.js.map