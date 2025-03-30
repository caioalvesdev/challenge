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
  public readonly id: string

  @Column({ name: 'name' })
  public readonly name: string

  @Column({ unique: true, name: 'email' })
  public readonly email: string

  @Column({ name: 'password' })
  public readonly password: string

  @Column({ name: 'role' })
  public readonly role: string

  @CreateDateColumn({ name: 'created_at' })
  public readonly createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public readonly updatedAt: Date

  @ManyToOne(() => CompanyEntity, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  public readonly company: CompanyEntity
}
