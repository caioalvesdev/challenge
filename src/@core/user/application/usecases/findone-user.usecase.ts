import { Injectable } from '@nestjs/common'
import {
  InputFindOneUserDto as Input,
  OutputFindOneUserDto as Output,
} from '@core/user/application/dtos/findone-user.dto'
import { FindAllUserTypeOrmRepository } from '@core/user/infrastructure/repositories/typeorm/findall-user.repository'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindOneUserUseCase implements IUseCase<Input, Output> {
  constructor(private readonly userRepository: FindAllUserTypeOrmRepository) {}

  public async execute(input: Input): Promise<Output> {
    return this.userRepository.findOne(input)
  }
}
