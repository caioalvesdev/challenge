import { InputFindOneContentDto as Input } from '@core/content/application/dtos/findone-content.dto'
import { OutputContentDto as Output } from '@core/content/infrastructure/strategies/dtos/content.dto'
import { FindOneContentUseCase } from '@core/content/application/usecases/findone-content.usecase'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver(() => Output)
export class FindOneContentResolver implements IResolver<Input, Output> {
  constructor(private readonly findOneContentUseCase: FindOneContentUseCase) {}

  @Query(() => Output, { name: 'content' })
  public async handle(@Args('input') input: Input): Promise<Output> {
    return this.findOneContentUseCase.execute(input)
  }
}
