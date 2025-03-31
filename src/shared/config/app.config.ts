import { registerAs } from '@nestjs/config'

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
  port: process.env.APP_PORT || 3000,
}))
