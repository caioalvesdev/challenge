import { ContentExtension } from '@core/content/infrastructure/enums/content-extension.enum'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { SignedUrl } from '@shared/domain/value-objects/signed-url.vo'

import * as path from 'path'
import * as fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require('sharp')

export class ImageContentStrategy implements IContentStrategy {
  private readonly expirationTime = 3600 // 1 hour

  public async process(content: InputContentDto): Promise<OutputContentDto> {
    const signedUrl = new SignedUrl({ url: content.url, expiration: this.expirationTime })
    const file = path.basename(new URL(content.url).pathname)
    const filePath = path.join(process.cwd(), 'static', file)
    const fileExists = fs.existsSync(filePath)

    if (!fileExists) {
      throw new Error('File does not exist.')
    }

    const size = fs.statSync(filePath).size
    const imageInfo = await this.getImageInfo(filePath)

    return new OutputContentDto({
      id: content.id,
      title: content.title,
      cover: content.cover,
      created_at: content.created_at,
      description: content.description,
      total_likes: content.total_likes,
      type: ContentTypeEnum.IMAGE,
      url: signedUrl.value,
      allow_download: true,
      is_embeddable: true,
      format: path?.extname(new URL(content.url).pathname)?.slice(1) ?? ContentExtension.JPG,
      bytes: size,
      metadata: { resolution: imageInfo.resolution, aspect_ratio: imageInfo.aspectRatio },
    })
  }

  private async getImageInfo(filePath: string) {
    const metadata = await sharp(filePath).metadata()
    const getAspectRatio = (width: number, height: number) => {
      const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
      const divisor = gcd(width, height)
      return `${width / divisor}:${height / divisor}`
    }

    if (!metadata.width || !metadata.height) {
      throw new Error('Não foi possível obter as dimensões da imagem.')
    }

    const aspectRatio = getAspectRatio(metadata.width, metadata.height)

    return {
      width: metadata.width,
      height: metadata.height,
      resolution: `${metadata.width}x${metadata.height}`,
      aspectRatio: aspectRatio,
    }
  }
}
