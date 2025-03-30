import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindAllUserUseCase } from 'src/@core/user/application/usecases/findall-user.usecase'
import { UserEntity } from '@core/user/domain/entities/user.entity'
import { FindAllUserTypeOrmRepository } from '@core/user/infrastructure/repositories/typeorm/findall-user.repository'
import { FindOneUserResolver } from '@core/user/infrastructure/resolvers/findone-user.resolver'
import { FindAllUserResolver } from '@core/user/infrastructure/resolvers/findall-user.resolver'
import { FindOneUserUseCase } from '@core/user/application/usecases/findone-user.usecase'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    FindAllUserTypeOrmRepository,
    FindAllUserUseCase,
    FindOneUserUseCase,
    FindAllUserResolver,
    FindOneUserResolver,
  ],
})
export class UserModule {}
