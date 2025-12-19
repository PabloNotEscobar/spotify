import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  app.enableCors({
    origin: 'http://localhost:5000', // Укажи точный адрес фронтенда
    credentials: true,                // Обязательно разрешаем передачу кук/заголовков
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
