import {
  InputFindOneContentDto as Input,
  OutputFindOneContentDto as Output,
} from '@core/content/application/dtos/findone-content.dto'
import { ContentTypeOrmRepository } from '@core/content/infrastructure/repositories/content.repository'
import { Injectable } from '@nestjs/common'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindOneContentUseCase implements IUseCase<Input, Output> {
  constructor(private readonly contentRepository: ContentTypeOrmRepository) {}

  public async execute(input: Input): Promise<Output> {
    return this.contentRepository.findOne(input)
  }
}
