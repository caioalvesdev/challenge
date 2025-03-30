import { SortDirection } from '@core/user/application/dtos/findall-user.dto'
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsNumber, IsOptional } from 'class-validator'

@InputType()
export class InputFindAllContentDto {
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
export class OutputFindAllContentDto {
  @Field(() => String)
  public readonly id: string

  @Field(() => String)
  public readonly title: string

  @Field(() => String)
  public readonly type: string

  @Field(() => String, { nullable: true })
  public readonly description?: string

  @Field(() => String, { nullable: true })
  public readonly cover?: string

  @Field(() => String)
  public readonly url: string

  @Field(() => String)
  public readonly company_id: string

  @Field(() => Date)
  public readonly created_at: Date

  @Field(() => Int)
  public readonly total_likes: number
}
