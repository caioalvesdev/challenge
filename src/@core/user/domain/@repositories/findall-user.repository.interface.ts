import {
  InputFindAllUserDto,
  OutputFindAllUserDto,
} from 'src/@core/user/application/dtos/findall-user.dto'

export interface IFindAllUserRepository {
  findAll(input: IFindAllUserRepository.Input): Promise<IFindAllUserRepository.Output>
}

export namespace IFindAllUserRepository {
  export type Input = InputFindAllUserDto
  export type Output = OutputFindAllUserDto[]
}
