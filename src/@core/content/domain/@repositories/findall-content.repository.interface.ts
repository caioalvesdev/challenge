import {
  InputFindAllContentDto,
  OutputFindAllContentDto,
} from '@core/content/application/dtos/findall-content.dto'

export interface IFindAllContentRepository {
  findAll(input: IFindAllContentRepository.Input): Promise<IFindAllContentRepository.Output>
}

export namespace IFindAllContentRepository {
  export type Input = InputFindAllContentDto
  export type Output = OutputFindAllContentDto[]
}
