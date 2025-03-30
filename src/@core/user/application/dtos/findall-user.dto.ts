import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { IsNumber, IsOptional } from 'class-validator'

enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
  description: 'Define the sorting direction (ASC or DESC)',
})

@InputType()
export class InputFindAllUserDto {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  public readonly page: number = 1

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  public readonly limit: number = 10

  @Field(() => SortDirection, { nullable: true })
  @IsOptional()
  public readonly sortDirection: SortDirection = SortDirection.ASC
}

@ObjectType()
class Companyy {
  @Field(() => String)
  public readonly id: string

  @Field(() => String)
  public readonly name: string
}

@ObjectType()
export class OutputFindAllUserDto {
  @Field(() => String)
  public readonly id: string

  @Field(() => String)
  public readonly name: string

  @Field(() => String)
  public readonly email: string

  @Field(() => String)
  public readonly role: string

  @Field(() => Companyy, { nullable: true })
  public readonly company: Companyy

  @Field(() => Date)
  public readonly createdAt: Date

  @Field(() => Date)
  public readonly updatedAt: Date
}
