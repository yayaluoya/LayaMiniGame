import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //允许跨域
  app.enableCors();
  await app.listen(3060);
  console.log('--');
  console.log('-- 开启后端服务  ' + new Date());
  console.log('----▷ 按 F5 键启动 DeBug 浏览器，打开 http://localhost:3060/ 访问接口');
  console.log('--');
}
bootstrap();
