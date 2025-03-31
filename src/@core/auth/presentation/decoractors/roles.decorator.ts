import { RolesType } from '@core/auth/presentation/@types/auth.types'
import { SetMetadata } from '@nestjs/common'

export const Roles = (...roles: RolesType[]) => SetMetadata('roles', roles)
