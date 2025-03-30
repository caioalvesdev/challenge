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
export class ContentEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string

  @Column({ name: 'title' })
  public readonly title: string

  @Column({ name: 'type' })
  public readonly type: string

  @Column({ name: 'description' })
  public readonly description?: string

  @Column({ name: 'url' })
  public readonly url: string

  @Column({ name: 'cover' })
  public readonly cover?: string

  @Column({ name: 'total_likes', type: 'int' })
  public readonly total_likes: number

  @CreateDateColumn()
  public readonly created_at: Date

  @Column({ name: 'company_id' })
  public readonly company_id: string

  @UpdateDateColumn({ name: 'updated_at' })
  public readonly updated_at: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  public readonly deleted_at: Date | null

  @ManyToOne(() => CompanyEntity, (company) => company.contents)
  @JoinColumn({ name: 'company_id' })
  public readonly company: CompanyEntity
}
