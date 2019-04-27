import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RedisIoAdapter} from "./sala/websocket/adapter/sala.redis.ws";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
