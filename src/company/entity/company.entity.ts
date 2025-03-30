import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Content } from 'src/content/entity'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserEntity } from 'src/@core/user/domain/entities/user.entity'
// import { UserEntity } from 'src/@core/user/domain/entities/user.entity'

@ObjectType()
@Entity({ name: 'companies' })
export class Company {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string

  @Field(() => String)
  @Column({ name: 'name' })
  public readonly name: string

  @OneToMany(() => UserEntity, (user) => user.company)
  public readonly users: UserEntity[]

  @OneToMany(() => Content, (content) => content.company)
  public readonly contents: Content[]
}
