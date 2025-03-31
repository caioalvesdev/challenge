import { Args, Query, Resolver } from '@nestjs/graphql'
import {
  InputFindAllUserDto as Input,
  OutputFindAllUserDto as Output,
} from '@core/user/application/dtos/findall-user.dto'
import { FindAllUserUseCase } from '@core/user/application/usecases/findall-user.usecase'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'
import { Roles } from '@core/auth/presentation/decoractors/roles.decorator'

@Resolver(() => Input)
export class FindAllUserResolver implements IResolver<Input, Output[]> {
  constructor(private readonly findAllUserUseCase: FindAllUserUseCase) {}

  @Query(() => [Output], { name: 'users' })
  @Roles('admin')
  public async handle(@Args('input', { nullable: true }) input: Input): Promise<Output[]> {
    return this.findAllUserUseCase.execute(input)
  }
}
