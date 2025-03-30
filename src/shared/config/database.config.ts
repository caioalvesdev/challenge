import { registerAs } from '@nestjs/config'
import * as process from 'node:process'

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE || 'postgres',
  host: process.env.DATABASE_HOST || 'db',
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database_name: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNC === 'true',
  logging: Boolean(process.env.DATABASE_LOGGING) || true,
}))
