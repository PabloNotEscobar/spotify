import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://frontend:3000',
      'https://nowayshop.ru',
      'https://flowmusic.ru',
      'https://www.flowmusic.ru',
      'https://www.nowayshop.ru'
    ],
    credentials: true,                // Обязательно разрешаем передачу кук/заголовков
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });


  await app.listen(4000, '0.0.0.0');
}
bootstrap();
