import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigController } from './config/config.controller';
import { LogController } from './log/log.controller';
import { ComController } from './com/com.controller';
import { FileController } from './file/file.controller';

@Module({
	imports: [],
	controllers: [AppController, ConfigController, LogController, ComController, FileController],
	providers: [AppService],
})
export class AppModule { }
