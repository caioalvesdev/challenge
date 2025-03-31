import { OutputFindAllContentDto } from '@core/content/application/dtos/findall-content.dto'
import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, IsUUID } from 'class-validator'

@InputType()
export class InputFindOneContentDto {
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  public readonly content_id: string
}

@ObjectType()
export class OutputFindOneContentDto extends OutputFindAllContentDto {}
