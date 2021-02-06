import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Init from './Init';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	//允许跨域
	app.enableCors();
	await app.listen(3000);
	//初始化
	new Init();
	//输出信息
	console.log('--');
	console.log('-- ' + new Date());
	console.log('----▷ 按 F5 键启动 DeBug 浏览器，并打开 http://localhost:3000/');
	console.log('--');
}
bootstrap();