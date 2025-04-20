import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { configureValidationPipe } from '@shared/config/validationpipe.config'
import * as express from 'express'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const logger = new Logger(bootstrap.name)

  app.use('/uploads', express.static(join(__dirname, '..', 'static')))

  configureValidationPipe(app)

  const configService = app.get(ConfigService)

  const port = configService.get<string>('appConfig.port')
  await app.listen(port, () => logger.log(`Server running on port ${port}`))
}

bootstrap()
