import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //输出信息
  console.log('开启服务 http://localhost:3000/');
}
bootstrap();
