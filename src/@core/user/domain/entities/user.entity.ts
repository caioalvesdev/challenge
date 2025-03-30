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
import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Company } from 'src/company/entity'

@ObjectType()
@Entity({ name: 'users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn()
  id: string

  @Field(() => String)
  @Column({ name: 'name' })
  name: string

  @Field(() => String)
  @Column({ unique: true, name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  @Field(() => String)
  @Column({ name: 'role' })
  role: string

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  company: Company
}
