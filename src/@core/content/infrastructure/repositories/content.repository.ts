import { IFindAllContentRepository } from '@core/content/domain/@repositories/findall-content.repository.interface'
import { IFindOneContentRepository } from '@core/content/domain/@repositories/findone-content.repository.interface'
import { ContentEntity } from '@core/content/domain/entities/content.entity'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ContentTypeOrmRepository
  implements IFindAllContentRepository, IFindOneContentRepository
{
  constructor(
    @InjectRepository(ContentEntity)
    private readonly contentRepository: Repository<ContentEntity>,
  ) {}
  public async findAll(
    input: IFindAllContentRepository.Input,
  ): Promise<IFindAllContentRepository.Output> {
    try {
      return await this.contentRepository.find({
        relations: ['company'],
        skip: (input.page - 1) * input.limit,
        take: input.limit,
        order: { id: input.sortDirection },
      })
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  public async findOne(
    input: IFindOneContentRepository.Input,
  ): Promise<IFindOneContentRepository.Output> {
    try {
      return await this.contentRepository.findOne({
        relations: ['company'],
        where: { id: input.content_id },
      })
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}
