import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import { ImageContentStrategy } from '@core/content/infrastructure/strategies/image-content.strategy'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { LinkContentStrategy } from '@core/content/infrastructure/strategies/link-content.strategy'
import { PdfContentStrategy } from '@core/content/infrastructure/strategies/pdf-content.strategy'
import { TextContentStrategy } from '@core/content/infrastructure/strategies/text-content.strategy'
import { VideoContentStrategy } from '@core/content/infrastructure/strategies/video-content.strategy'
import { BadRequestException } from '@nestjs/common'

export class ContentFactory {
  private static readonly mapStrategy: Record<ContentTypeEnum, IContentStrategy> = {
    [ContentTypeEnum.IMAGE]: new ImageContentStrategy(),
    [ContentTypeEnum.VIDEO]: new VideoContentStrategy(),
    [ContentTypeEnum.PDF]: new PdfContentStrategy(),
    [ContentTypeEnum.LINK]: new LinkContentStrategy(),
    [ContentTypeEnum.TEXT]: new TextContentStrategy(),
  }

  public static build(contentType: ContentTypeEnum): IContentStrategy {
    if (!this.mapStrategy?.[contentType]) {
      throw new BadRequestException(`Unsupported content type: ${contentType}`)
    }

    return this.mapStrategy[contentType]
  }
}
