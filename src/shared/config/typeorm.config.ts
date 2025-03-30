import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'

type DatabaseConectionOptions = 'mysql' | 'mariadb' | 'postgres' | 'sqlite' | 'oracle'

const buildTypeOrmConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
  type: configService.get<DatabaseConectionOptions>('database.type'),
  host: configService.get<string>('database.host'),
  port: +configService.get<number>('database.port'),
  username: configService.get<string>('database.username'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.name'),
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migration/*.{ts,js}'],
  synchronize: configService.get<boolean>('database.synchronize'),
  logging: configService.get<boolean>('database.logging'),
})

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: buildTypeOrmConfig,
}
