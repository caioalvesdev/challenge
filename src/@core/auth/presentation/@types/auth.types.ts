import { UserEntity } from '@core/user/domain/entities/user.entity'

export type RolesType = 'admin' | 'user' | 'guest'

export type AuthenticatedUserType = Pick<UserEntity, 'name' | 'id' | 'email' | 'companyId'> & {
  role: RolesType
}
