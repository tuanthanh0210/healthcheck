import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  await app.listen(process.env.APP_PORT || 8080);
}
void bootstrap();
