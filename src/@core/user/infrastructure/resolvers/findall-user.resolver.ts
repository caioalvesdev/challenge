import { Args, Query, Resolver } from '@nestjs/graphql'
import {
  InputFindAllUserDto as Input,
  OutputFindAllUserDto as Output,
} from 'src/@core/user/application/dtos/findall-user.dto'
import { FindAllUserUseCase } from 'src/@core/user/application/usecases/findall-user.usecase'
import { IResolver } from 'src/shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver()
export class FindAllUserResolver implements IResolver<Input, Output[]> {
  constructor(private readonly findAllUserUseCase: FindAllUserUseCase) {}

  @Query(() => [Output], { name: 'users' })
  public async handle(@Args('input', { nullable: true }) input: Input): Promise<Output[]> {
    return this.findAllUserUseCase.execute(input)
  }
}
