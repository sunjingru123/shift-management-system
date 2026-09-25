import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.setGlobalPrefix('api');
  app.enableCors();

  const configuredPort = Number.parseInt(process.env.PORT ?? '3000', 10);
  const port = Number.isNaN(configuredPort) ? 3000 : configuredPort;
  await app.listen(port, '0.0.0.0');
}

void bootstrap();
