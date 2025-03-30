import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Company } from 'src/company/entity'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column({ name: 'name' })
  name: string

  @Field()
  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Field()
  @Column({ name: 'role' })
  role: string

  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  company: Company
}
