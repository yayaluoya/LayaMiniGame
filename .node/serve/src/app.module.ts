import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigController } from './config/config.controller';

@Module({
	imports: [],
	controllers: [AppController, ConfigController],
	providers: [AppService],
})
export class AppModule { }
