import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLogger } from './service/logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
