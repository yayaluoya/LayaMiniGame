import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigController } from './config/config.controller';
import { LogController } from './log/log.controller';

@Module({
	imports: [],
	controllers: [AppController, ConfigController, LogController],
	providers: [AppService],
})
export class AppModule { }
