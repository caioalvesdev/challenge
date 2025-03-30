import { CompanyEntity } from '@core/company/domain/entities/company.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  type: string

  @Column()
  description?: string

  @Column()
  url: string

  @Column()
  cover?: string

  @Column({ type: 'int' })
  total_likes: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date | null

  @ManyToOne(() => CompanyEntity, (company) => company.contents)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity
}
