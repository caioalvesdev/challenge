import { InputFindOneContentDto as Input } from '@core/content/application/dtos/findone-content.dto'
import { OutputContentDto as Output } from '@core/content/infrastructure/strategies/dtos/content.dto'
import { FindOneContentUseCase } from '@core/content/application/usecases/findone-content.usecase'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { IResolver } from '@shared/presentation/resolvers/interfaces/resolver.interface'
import { AuthenticatedUser } from '@core/auth/presentation/decoractors/auth-user.decorator'
import { Logger } from '@nestjs/common'

@Resolver(() => Output)
export class FindOneContentResolver implements IResolver<Input, Output> {
  private readonly logger = new Logger(FindOneContentResolver.name)
  constructor(private readonly findOneContentUseCase: FindOneContentUseCase) {}

  @Query(() => Output, { name: 'content' })
  public async handle(
    @Args('input') input: Input,
    @AuthenticatedUser('id')
    authenticatedUserId: number,
    @AuthenticatedUser('companyId')
    authenticatedCompanyId: string,
  ): Promise<Output> {
    this.logger.log(`Provisioning content=${input.content_id} to user=${authenticatedUserId}`)
    return this.findOneContentUseCase.execute({ ...input, companyId: authenticatedCompanyId })
  }
}
