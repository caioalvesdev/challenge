import { ContentExtension } from '@core/content/infrastructure/enums/content-extension.enum'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { NotFoundException } from '@nestjs/common'
import { SignedUrl } from '@shared/domain/value-objects/signed-url.vo'
import { getVideoDurationInSeconds } from 'get-video-duration'

import * as fs from 'fs'
import * as path from 'path'

export class VideoContentStrategy implements IContentStrategy {
  private readonly expirationTime = 3600 // 1 hour

  public async process(content: InputContentDto): Promise<OutputContentDto> {
    const signedUrl = new SignedUrl({ url: content.url, expiration: this.expirationTime })
    const file = path.basename(new URL(content.url).pathname)
    const filePath = path.join(process.cwd(), 'static', file)
    const fileExists = fs.existsSync(filePath)
    const duration = await this.getVideoDuration(filePath)

    if (!fileExists) {
      throw new NotFoundException(`File not found: ${filePath}`)
    }

    const size = fs.statSync(filePath).size

    return new OutputContentDto({
      id: content.id,
      title: content.title,
      cover: content.cover,
      created_at: content.created_at,
      description: content.description,
      total_likes: content.total_likes,
      type: ContentTypeEnum.VIDEO,
      url: signedUrl.value,
      allow_download: false,
      is_embeddable: true,
      format: path?.extname(new URL(content.url).pathname)?.slice(1) ?? ContentExtension.MP4,
      bytes: size,
      metadata: { duration: duration, resolution: '1080p' },
    })
  }

  public async getVideoDuration(filePath: string): Promise<number> {
    try {
      const duration = await getVideoDurationInSeconds(filePath)
      return Math.floor(duration)
    } catch (error) {
      throw new NotFoundException(`Error getting video duration: ${error.message}`)
    }
  }
}
