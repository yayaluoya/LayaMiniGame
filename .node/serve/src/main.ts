import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //输出信息
  console.log('\n');
  console.log('----▷ 按 F5 键启动 DeBug 浏览器，并打开 http://localhost:3000/ 地址');
}
bootstrap();