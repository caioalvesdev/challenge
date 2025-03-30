import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { IFindAllUserRepository } from '@core/user/domain/@repositories/findall-user.repository.interface'
import { IFindOneUserRepository } from '@core/user/domain/@repositories/findone-user.repository.interface'
import { UserEntity } from '@core/user/domain/entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class FindAllUserTypeOrmRepository
  implements IFindAllUserRepository, IFindOneUserRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findAll(
    input: IFindAllUserRepository.Input,
  ): Promise<IFindAllUserRepository.Output> {
    try {
      return await this.userRepository.find({
        relations: ['company'],
        skip: (input.page - 1) * input.limit,
        take: input.limit,
        order: { id: input.sortDirection },
      })
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  public async findOne(
    input: IFindOneUserRepository.Input,
  ): Promise<IFindOneUserRepository.Output> {
    try {
      return this.userRepository.findOne({
        where: { email: input.email },
        relations: ['company'],
      })
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}
