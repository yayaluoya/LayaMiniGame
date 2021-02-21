"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Init_1 = require("./Init");
const ResURL_1 = require("./_com/ResURL");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(ResURL_1.default.join(ResURL_1.default.serveRootURL, 'res'));
    app.enableCors();
    await app.listen(3000);
    new Init_1.default();
    console.log('--');
    console.log('-- 开启后端服务  ' + new Date());
    console.log('----▷ 按 F5 键启动 DeBug 浏览器，打开 http://localhost:3000/ 访问接口');
    console.log('--');
    setTimeout(() => {
        console.log(JSON.stringify({
            com: true,
        }));
    }, 100);
}
bootstrap();
//# sourceMappingURL=main.js.map