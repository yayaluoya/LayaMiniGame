import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import Init from './Init';
import ResURL from './_com/ResURL';

async function bootstrap() {
	const app: NestExpressApplication = await NestFactory.create(AppModule) as NestExpressApplication;
	//设置静态文件目录
	app.useStaticAssets(ResURL.join(ResURL.serveRootURL, 'res'));
	//允许跨域
	app.enableCors();
	//开始监听3000端口
	await app.listen(3000);
	//初始化
	new Init();
	//输出信息
	console.log('--');
	console.log('-- 开启后端服务  ' + new Date());
	console.log('----▷ 按 F5 键启动 DeBug 浏览器，打开 http://localhost:3000/ 访问接口');
	console.log('--');
	//
	setTimeout(() => {
		console.log(JSON.stringify({
			com: true,
		}));
	}, 100);
}

//开始
bootstrap();