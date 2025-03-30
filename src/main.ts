import * as express from 'express'
import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use('/uploads', express.static(join(__dirname, '..', 'static')))

  configureValidationPipe(app)

  const configService = app.get(ConfigService)

  const port = configService.get<string>('appConfig.port')

  await app.listen(port)
}
bootstrap()

function configureValidationPipe(app: INestApplication): void {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
}
