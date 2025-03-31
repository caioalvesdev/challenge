import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { typeOrmAsyncConfig } from '@shared/config/typeorm.config'
import { configModuleOptions } from '@shared/config/configmodule.options'
import { graphQLConfig } from '@shared/config/graphql.config'
import { UserModule } from '@core/user/user.module'
import { CompanyModule } from '@core/company/company.module'
import { ContentModule } from '@core/content/content.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard } from '@core/auth/presentation/guards/auth.guard'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from '@core/auth/presentation/guards/roles.guard'

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    GraphQLModule.forRoot(graphQLConfig),
    ConfigModule.forRoot(configModuleOptions),
    JwtModule.register({}),
    ContentModule,
    UserModule,
    CompanyModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
