import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('current time', new Date().toISOString());
    return this.appService.getHello();
  }

  @Get('/health')
  getHealth(): any {
    console.log('health check', new Date().toISOString());
    return {
      status: 200,
      message: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
