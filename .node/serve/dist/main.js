"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Init_1 = require("./Init");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    new Init_1.default();
    console.log('--');
    console.log('-- ' + new Date());
    console.log('----▷ 按 F5 键启动 DeBug 浏览器，并打开 http://localhost:3000/');
    console.log('--');
}
bootstrap();
//# sourceMappingURL=main.js.map