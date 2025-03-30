import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UserTypeOrmRepository } from '@core/user/infrastructure/repositories/typeorm/user.repository'
import { InputFindOneUserDto } from '@core/user/application/dtos/findone-user.dto'

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private readonly logger = new Logger(AuthenticationGuard.name)

  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly userRepository: UserTypeOrmRepository,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const ctx = GqlExecutionContext.create(context)
      const request = ctx.getContext().req

      const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
        context.getHandler(),
        context.getClass(),
      ])

      if (isPublic) {
        return true
      }

      const token = this.extractTokenFromHeader(request)

      if (!token) {
        throw new UnauthorizedException('No token provided')
      }

      const REQUEST_USER_KEY = 'user'
      request[REQUEST_USER_KEY] = await this.validateToken(token)
      return true
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, token] = request.headers.authorization?.split(' ') ?? []

    return token
  }

  private async validateToken(token: string): Promise<InputFindOneUserDto> {
    try {
      const decoded = this.jwtService.verify<InputFindOneUserDto>(token, {
        secret: process.env.JWT_SECRET,
      })

      return await this.userRepository.findOne(decoded)
    } catch (error) {
      this.logger.error(`Token validation error: ${error}`)
      throw new UnauthorizedException('Invalid token')
    }
  }
}
