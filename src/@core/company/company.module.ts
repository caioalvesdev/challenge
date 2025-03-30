import { CompanyEntity } from '@core/company/domain/entities/company.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
})
export class CompanyModule {}
