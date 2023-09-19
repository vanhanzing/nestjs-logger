import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

@Injectable()
export class ResponseLoggerMiddleware implements NestMiddleware {
  use(_req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      console.log(
        '🚀 ~ file: response-logger.middleware.ts:9 ~ ResponseLoggerMiddleware ~ res.on ~ res.statusCode:',
        res.statusCode,
      );
    });
    next();
  }
}
