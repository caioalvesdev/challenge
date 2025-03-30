import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserEntity } from 'src/@core/user/domain/entities/user.entity'
import { Company } from 'src/company/entity'
import { Content } from 'src/content/entity'
import { DataSource } from 'typeorm'

type DatabaseConectionOptions = 'mysql' | 'mariadb' | 'postgres' | 'sqlite' | 'oracle'

export const buildTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: configService.get<DatabaseConectionOptions>('database.type'),
  host: configService.get<string>('database.host'),
  port: +configService.get<number>('database.port'),
  username: configService.get<string>('database.username'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.database_name'),
  entities: [UserEntity, Content, Company],
  migrations: [__dirname + '/migration/*.{ts,js}'],
  synchronize: configService.get<boolean>('database.sync'),
  logging: configService.get<boolean>('database.logging'),
})

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: buildTypeOrmConfig,
}

export const AppDataSource = new DataSource({
  type: 'postgres', // Certifique-se de ajustar o tipo de banco de dados
  host: process.env.DATABASE_HOST || 'db',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'challenge',
  entities: [UserEntity, Content, Company],
  migrations: [__dirname + '/migration/*.{ts,js}'],
  synchronize: true, // Certifique-se de desativar em produção
  logging: true,
})
