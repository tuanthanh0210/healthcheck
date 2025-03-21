import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('======================');
  console.log('======================');
  console.log('======================');
  console.log('DB_HOST', process.env.DB_HOST);
  console.log('DB_PORT', process.env.DB_PORT);
  console.log('REDIS_URL', process.env.REDIS_URL);
  console.log('======================');
  console.log('======================');
  console.log('======================');
  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}
void bootstrap();
