import { FindAllContentUseCase } from '@core/content/application/usecases/findall-content.usecase'
import { FindOneContentUseCase } from '@core/content/application/usecases/findone-content.usecase'
import { ContentEntity } from '@core/content/domain/entities/content.entity'
import { ContentTypeOrmRepository } from '@core/content/infrastructure/repositories/content.repository'
import { FindAllContentResolver } from '@core/content/infrastructure/resolvers/findall-content.resolver'
import { FindOneContentResolver } from '@core/content/infrastructure/resolvers/findone-content.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([ContentEntity])],
  providers: [
    ContentTypeOrmRepository,
    FindAllContentUseCase,
    FindAllContentResolver,
    FindOneContentUseCase,
    FindOneContentResolver,
  ],
  exports: [],
})
export class ContentModule {}
