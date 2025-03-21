import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config(); // Chỉ load file khi chạy local
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}
void bootstrap();
