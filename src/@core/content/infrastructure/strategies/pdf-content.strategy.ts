import { ContentExtension } from '@core/content/infrastructure/enums/content-extension.enum'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { NotFoundException } from '@nestjs/common'
import { SignedUrl } from '@shared/domain/value-objects/signed-url.vo'
import * as fs from 'fs'
import * as path from 'path'
import { PDFDocument } from 'pdf-lib'

export class PdfContentStrategy implements IContentStrategy {
  private readonly expirationTime = 3600 // 1 hour

  public async process(content: InputContentDto): Promise<OutputContentDto> {
    const signedUrl = new SignedUrl({ url: content.url, expiration: this.expirationTime })
    const file = path.basename(new URL(content.url).pathname)
    const filePath = path.join(process.cwd(), 'static', file)
    const fileExists = fs.existsSync(filePath)
    const numberOfPages = await this.getPageCount(filePath)

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
      type: ContentTypeEnum.PDF,
      url: signedUrl.value,
      allow_download: true,
      is_embeddable: false,
      format: path?.extname(new URL(content.url).pathname)?.slice(1) ?? ContentExtension.PDF,
      bytes: size,
      metadata: {
        author: 'Unknown',
        pages: numberOfPages,
        encrypted: false,
      },
    })
  }

  private async getPageCount(filePath: string): Promise<number> {
    const pdfBytes = fs.readFileSync(filePath)
    const pdfDoc = await PDFDocument.load(pdfBytes)
    return pdfDoc.getPageCount()
  }
}
