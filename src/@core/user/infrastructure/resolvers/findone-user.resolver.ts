import {
  InputFindOneUserDto as Input,
  OutputFindOneUserDto as Output,
} from '@core/user/application/dtos/findone-user.dto'
import { FindOneUserUseCase } from '@core/user/application/usecases/findone-user.usecase'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver(() => Input)
export class FindOneUserResolver implements IResolver<Input, Output> {
  public constructor(private readonly findOneUserUseCase: FindOneUserUseCase) {}

  @Query(() => Output, { name: 'user' })
  public async handle(@Args('input') input: Input): Promise<Output> {
    return this.findOneUserUseCase.execute(input)
  }
}
