import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    console.log(
      '🚀 ~ file: request-logger.middleware.ts:7 ~ RequestLoggerMiddleware ~ use ~ req:',
      req.body,
    );

    if (next) {
      next();
    }
  }
}
