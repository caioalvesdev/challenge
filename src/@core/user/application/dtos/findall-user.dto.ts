import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { IsNumber, IsOptional } from 'class-validator'

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
  description: 'Define the sorting direction (ASC or DESC)',
})

@InputType()
export class InputFindAllUserDto {
  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  public readonly page: number = 1

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  public readonly limit: number = 10

  @Field(() => SortDirection, { nullable: true })
  @IsOptional()
  public readonly sortDirection: SortDirection = SortDirection.ASC
}

@ObjectType()
class Company {
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

  @Field(() => Date)
  public readonly createdAt: Date

  @Field(() => Date)
  public readonly updatedAt: Date

  @Field(() => Company, { nullable: true })
  public readonly company: Company
}
