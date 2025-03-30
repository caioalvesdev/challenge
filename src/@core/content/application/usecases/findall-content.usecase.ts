import {
  InputFindAllContentDto as Input,
  OutputFindAllContentDto as Output,
} from '@core/content/application/dtos/findall-content.dto'
import { ContentTypeOrmRepository } from '@core/content/infrastructure/repositories/content.repository'
import { Injectable } from '@nestjs/common'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindAllContentUseCase implements IUseCase<Input, Output[]> {
  constructor(private readonly contentRepository: ContentTypeOrmRepository) {}

  public async execute(input: Input): Promise<Output[]> {
    return this.contentRepository.findAll(input)
  }
}
