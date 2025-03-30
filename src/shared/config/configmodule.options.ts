import appConfig from 'src/shared/config/app.config'
import databaseConfig from 'src/shared/config/database.config'
import enviromentValidationSchema from './env.validation'
import { ConfigModuleOptions } from '@nestjs/config'

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: enviromentValidationSchema,
  load: [appConfig, databaseConfig],
}
