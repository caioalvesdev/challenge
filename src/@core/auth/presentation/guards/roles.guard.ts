import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles || roles.length === 0) {
      return true
    }

    const gqlContext = GqlExecutionContext.create(context)
    const request = gqlContext.getContext().req

    const user = request?.user

    if (!user) {
      throw new ForbiddenException('User is not authenticated')
    }

    const hasRole = roles.some((role) => user.role === role)

    if (!hasRole) {
      throw new ForbiddenException('You do not have permission to access this resource')
    }

    return true
  }
}
