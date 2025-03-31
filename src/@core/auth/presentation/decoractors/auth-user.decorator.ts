import { AuthenticatedUserType } from '@core/auth/presentation/@types/auth.types'
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

export const AuthenticatedUser = createParamDecorator(
  (data: keyof AuthenticatedUserType | undefined, ctx: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(ctx)
    const request = gqlContext.getContext().req

    const user = request?.user as AuthenticatedUserType

    if (!user) {
      throw new UnauthorizedException('User is not authenticated')
    }

    return data ? user[data] : user
  },
)
