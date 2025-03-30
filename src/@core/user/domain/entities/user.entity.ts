import { CompanyEntity } from '@core/company/domain/entities/company.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
// import { Company } from 'src/company/entity'

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn()
  id: string

  @Column({ name: 'name' })
  name: string

  @Column({ unique: true, name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  @Column({ name: 'role' })
  role: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => CompanyEntity, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity
}
