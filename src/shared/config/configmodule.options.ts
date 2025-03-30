import appConfig from '@shared/config/app.config'
import databaseConfig from '@shared/config/database.config'
import enviromentValidationSchema from './env.validation'
import { ConfigModuleOptions } from '@nestjs/config'

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: enviromentValidationSchema,
  load: [appConfig, databaseConfig],
}
