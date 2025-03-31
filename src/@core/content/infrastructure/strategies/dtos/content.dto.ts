import { ContentExtension } from '@core/content/infrastructure/enums/content-extension.enum'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import { Field, Int, ObjectType } from '@nestjs/graphql'

export class InputContentDto {
  public readonly id: string

  public readonly title: string

  public readonly type: string

  public readonly description?: string

  public readonly cover?: string

  public readonly url: string

  public readonly company_id: string

  public readonly created_at: Date

  public readonly total_likes: number
}

@ObjectType()
class ContentMetadata {
  @Field(() => String, { nullable: true })
  public readonly resolution?: string

  @Field(() => Int, { nullable: true })
  public readonly duration?: number

  @Field(() => String, { nullable: true })
  public readonly aspect_ratio?: string

  @Field(() => String, { nullable: true })
  public readonly author?: string

  @Field(() => Int, { nullable: true })
  public readonly pages?: number

  @Field(() => Boolean, { nullable: true })
  public readonly trusted?: boolean

  @Field(() => Int, { nullable: true })
  public readonly words?: number

  @Field(() => Int, { nullable: true })
  public readonly lines?: number

  @Field(() => Boolean, { nullable: true })
  public readonly encrypted?: boolean
}

@ObjectType()
export class OutputContentDto {
  @Field(() => String)
  public readonly id: string

  @Field(() => String)
  public readonly title: string

  @Field(() => String, { nullable: true })
  public readonly cover: string

  @Field(() => String)
  public readonly created_at: Date

  @Field(() => String, { nullable: true })
  public readonly description?: string

  @Field(() => Number)
  public readonly total_likes: number

  @Field(() => String)
  public readonly type: ContentTypeEnum

  @Field(() => String)
  public readonly url: string

  @Field(() => Boolean)
  public readonly allow_download: boolean

  @Field(() => Boolean)
  public readonly is_embeddable: boolean

  @Field(() => String, { nullable: true })
  public readonly format: ContentExtension | string

  @Field(() => Number)
  public readonly bytes: number

  @Field(() => ContentMetadata)
  public readonly metadata: ContentMetadata

  constructor(data: Partial<OutputContentDto>) {
    Object.assign(this, data)
  }
}
