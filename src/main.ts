import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';
import { ResponseLoggerMiddleware } from './middleware/response-logger.middleware';
import { CustomLogger } from './service/logger.service';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable body parsing middleware
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.useLogger(app.get(CustomLogger));
  // Register middleware classes directly
  app.use(new RequestLoggerMiddleware().use);
  app.use(new ResponseLoggerMiddleware().use);

  await app.listen(3000);
}
bootstrap();
