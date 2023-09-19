import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLogger implements LoggerService {
  log(message: any, context?: string) {
    // Implement your custom logging logic here.
    console.log(`[Log] ${context || 'App'}: ${message}`);
  }

  error(message: any, trace?: string, context?: string) {
    // Implement your custom error logging logic here.
    console.error(`[Error] ${context || 'App'}: ${message}`);
    if (trace) {
      console.error(trace);
    }
  }

  warn(message: any, context?: string) {
    // Implement your custom warning logging logic here.
    console.warn(`[Warning] ${context || 'App'}: ${message}`);
  }

  debug?(message: any, context?: string) {
    // Implement your custom debug logging logic here.
    console.debug(`[Debug] ${context || 'App'}: ${message}`);
  }

  verbose?(message: any, context?: string) {
    // Implement your custom verbose logging logic here.
    console.log(`[Verbose] ${context || 'App'}: ${message}`);
  }

  fatal?(message: any, trace?: string, context?: string) {
    // Implement your custom fatal error logging logic here.
    console.error(`[Fatal] ${context || 'App'}: ${message}`);
    if (trace) {
      console.error(trace);
    }
    // You might want to handle fatal errors differently, such as exiting the application.
  }

  setLogLevels?(levels: string[]) {
    // Implement custom log levels handling if needed.
  }
}
