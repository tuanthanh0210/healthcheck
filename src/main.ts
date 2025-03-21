import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_PORT);
  console.log(process.env.REDIS_URL);
  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}
void bootstrap();
