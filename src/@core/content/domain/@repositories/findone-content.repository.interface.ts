import {
  InputFindOneContentDto,
  OutputFindOneContentDto,
} from '@core/content/application/dtos/findone-content.dto'

export interface IFindOneContentRepository {
  findOne(input: IFindOneContentRepository.Input): Promise<IFindOneContentRepository.Output>
}

export namespace IFindOneContentRepository {
  export type Input = InputFindOneContentDto
  export type Output = OutputFindOneContentDto
}
