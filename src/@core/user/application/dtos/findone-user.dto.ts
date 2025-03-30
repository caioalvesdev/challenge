import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { OutputFindAllUserDto } from 'src/@core/user/application/dtos/findall-user.dto'

@InputType()
export class InputFindOneUserDto {
  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string
}

@ObjectType()
export class OutputFindOneUserDto extends OutputFindAllUserDto {}
