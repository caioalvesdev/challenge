import { Injectable } from '@nestjs/common'
import {
  InputFindAllUserDto as Input,
  OutputFindAllUserDto as Output,
} from '@core/user/application/dtos/findall-user.dto'
import { FindAllUserTypeOrmRepository } from '@core/user/infrastructure/repositories/typeorm/findall-user.repository'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindAllUserUseCase implements IUseCase<Input, Output[]> {
  constructor(private readonly userRepository: FindAllUserTypeOrmRepository) {}

  public async execute(input: Input): Promise<Output[]> {
    return this.userRepository.findAll(input)
  }
}
