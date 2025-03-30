import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindAllUserUseCase } from 'src/@core/user/application/usecases/findall-user.usecase'
import { UserEntity } from 'src/@core/user/domain/entities/user.entity'
import { FindAllUserTypeOrmRepository } from 'src/@core/user/infrastructure/repositories/typeorm/findall-user.repository'
import { FindOneUserResolver } from 'src/@core/user/infrastructure/resolvers/findone-user.resolver'
import { FindAllUserResolver } from 'src/@core/user/infrastructure/resolvers/findall-user.resolver'
import { FindOneUserUseCase } from 'src/@core/user/application/usecases/findone-user.usecase'

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
