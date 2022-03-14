import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import './calculator/methods/methodHalfDivision';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8888);
}
bootstrap();
