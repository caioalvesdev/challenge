import { Args, Query, Resolver } from '@nestjs/graphql'
import {
  InputFindOneUserDto as Input,
  OutputFindOneUserDto as Output,
} from '@core/user/application/dtos/findone-user.dto'
import { FindOneUserUseCase } from '@core/user/application/usecases/findone-user.usecase'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver()
export class FindOneUserResolver implements IResolver<Input, Output> {
  constructor(private readonly findOneUserUseCase: FindOneUserUseCase) {}

  @Query(() => Output, { name: 'user' })
  public async handle(@Args('input') input: Input): Promise<Output> {
    return this.findOneUserUseCase.execute(input)
  }
}
