import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Company } from 'src/company/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [],
})
export class CompanyModule {}
