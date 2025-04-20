import {
  InputFindAllContentDto as Input,
  OutputFindAllContentDto as Output,
} from '@core/content/application/dtos/findall-content.dto'
import { FindAllContentUseCase } from '@core/content/application/usecases/findall-content.usecase'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver(() => Output)
export class FindAllContentResolver implements IResolver<Input, Output[]> {
  public constructor(private readonly findAllContentUseCase: FindAllContentUseCase) {}

  @Query(() => [Output], { name: 'contents' })
  public async handle(@Args('input', { nullable: true }) input: Input): Promise<Output[]> {
    return this.findAllContentUseCase.execute(input)
  }
}
