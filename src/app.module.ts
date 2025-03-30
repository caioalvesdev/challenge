import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ContentModule } from 'src/content'
import { ConfigModule } from '@nestjs/config'
import { typeOrmAsyncConfig } from '@shared/config/typeorm.config'
import { configModuleOptions } from '@shared/config/configmodule.options'
import { graphQLConfig } from '@shared/config/graphql.config'
import { UserModule } from '@core/user/user.module'
import { CompanyModule } from '@core/company/company.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    GraphQLModule.forRoot(graphQLConfig),
    ConfigModule.forRoot(configModuleOptions),
    ContentModule,
    UserModule,
    CompanyModule,
  ],
})
export class AppModule {}
