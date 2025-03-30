import {
  InputFindOneUserDto,
  OutputFindOneUserDto,
} from 'src/@core/user/application/dtos/findone-user.dto'

export interface IFindOneUserRepository {
  findOne(input: IFindOneUserRepository.Input): Promise<IFindOneUserRepository.Output>
}

export namespace IFindOneUserRepository {
  export type Input = InputFindOneUserDto
  export type Output = OutputFindOneUserDto
}
