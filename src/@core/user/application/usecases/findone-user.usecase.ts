import {
  InputFindOneUserDto as Input,
  OutputFindOneUserDto as Output,
} from '@core/user/application/dtos/findone-user.dto'
import { UserTypeOrmRepository } from '@core/user/infrastructure/repositories/typeorm/user.repository'
import { Injectable } from '@nestjs/common'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindOneUserUseCase implements IUseCase<Input, Output> {
  public constructor(private readonly userRepository: UserTypeOrmRepository) {}

  public async execute(input: Input): Promise<Output> {
    return this.userRepository.findOne(input)
  }
}
