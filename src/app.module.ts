import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ContentModule } from 'src/content'
// import { UserModule } from 'src/user'
import { CompanyModule } from 'src/company'
import { ConfigModule } from '@nestjs/config'
import { typeOrmAsyncConfig } from 'src/shared/config/typeorm.config'
import { configModuleOptions } from 'src/shared/config/configmodule.options'
import { graphQLConfig } from 'src/shared/config/graphql.config'
import { UserModule } from 'src/@core/user/user.module'

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
