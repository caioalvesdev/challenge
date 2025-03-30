import { Query, Resolver } from '@nestjs/graphql'
import { IResolver } from 'src/shared/presentation/resolvers/interfaces/resolver.interface'

@Resolver()
export class FindAllUserResolver implements IResolver {
  constructor() {}

  @Query(() => [String])
  public async handle() {
    throw new Error('Method not implemented.')
  }
}
