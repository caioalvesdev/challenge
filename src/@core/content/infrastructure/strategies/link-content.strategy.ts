import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { SignedUrl } from '@shared/domain/value-objects/signed-url.vo'

export class LinkContentStrategy implements IContentStrategy {
  public async process(content: InputContentDto): Promise<OutputContentDto> {
    const signedUrl = new SignedUrl({ url: content.url })

    return new OutputContentDto({
      id: content.id,
      title: content.title,
      cover: content.cover,
      created_at: content.created_at,
      description: content.description,
      total_likes: content.total_likes,
      type: ContentTypeEnum.LINK,
      url: signedUrl.rawValue,
      allow_download: true,
      is_embeddable: true,
      format: null,
      bytes: 0,
      metadata: { trusted: content.url?.includes('https') || false },
    })
  }
}
