import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { OutputFindAllUserDto } from '@core/user/application/dtos/findall-user.dto'

@InputType()
export class InputFindOneUserDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public readonly id: string

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  public readonly email?: string
}

@ObjectType()
export class OutputFindOneUserDto extends OutputFindAllUserDto {}
