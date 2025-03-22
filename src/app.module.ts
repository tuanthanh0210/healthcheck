import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsoleModule } from 'nestjs-console';
import { AppConsole } from 'src/app.console';

@Module({
  imports: [ConsoleModule],
  controllers: [AppController],
  providers: [AppService, AppConsole],
})
export class AppModule {}
