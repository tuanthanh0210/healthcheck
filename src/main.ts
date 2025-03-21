import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  await app.listen(3000, '0.0.0.0');
}
void bootstrap();
