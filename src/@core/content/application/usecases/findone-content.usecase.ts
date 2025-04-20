import { InputFindOneContentDto as Input } from '@core/content/application/dtos/findone-content.dto'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import { ContentFactory } from '@core/content/infrastructure/factories/content.factory'
import { ContentTypeOrmRepository } from '@core/content/infrastructure/repositories/content.repository'
import { OutputContentDto as Output } from '@core/content/infrastructure/strategies/dtos/content.dto'
import { Injectable } from '@nestjs/common'
import { IUseCase } from '@shared/application/interfaces/usecase.interface'

@Injectable()
export class FindOneContentUseCase implements IUseCase<Input, Output> {
  public constructor(private readonly contentRepository: ContentTypeOrmRepository) {}

  public async execute(input: Input & { companyId: string }): Promise<Output> {
    const data = await this.contentRepository.findOne(input)
    const contentFactory = ContentFactory.build(data?.type as ContentTypeEnum)
    return contentFactory.process(data)
  }
}
