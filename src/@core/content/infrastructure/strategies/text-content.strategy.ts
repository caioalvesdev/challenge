import { ContentExtension } from '@core/content/infrastructure/enums/content-extension.enum'
import { ContentTypeEnum } from '@core/content/infrastructure/enums/content-type.enum'
import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'
import { IContentStrategy } from '@core/content/infrastructure/strategies/interfaces/content.strategy'
import { SignedUrl } from '@shared/domain/value-objects/signed-url.vo'
import * as fs from 'fs'
import * as path from 'path'

export class TextContentStrategy implements IContentStrategy {
  public async process(content: InputContentDto): Promise<OutputContentDto> {
    const signedUrl = new SignedUrl({ url: content.url })

    // Determina o caminho do arquivo local
    const filePath = path.join(
      process.cwd(),
      'static',
      path.basename(new URL(content.url).pathname),
    )
    const fileExists = fs.existsSync(filePath)

    if (!fileExists) {
      throw new Error(`File not found: ${filePath}`)
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const wordCount = fileContent.split(/\s+/).length // Número de palavras
    const lineCount = fileContent.split('\n').length // Número de linhas
    const size = fs.statSync(filePath).size // Tamanho do arquivo em bytes

    return new OutputContentDto({
      id: content.id,
      title: content.title,
      cover: content.cover,
      created_at: content.created_at,
      description: content.description,
      total_likes: content.total_likes,
      type: ContentTypeEnum.TEXT,
      url: signedUrl.rawValue,
      allow_download: true,
      is_embeddable: false,
      format: ContentExtension.TXT,
      bytes: size,
      metadata: {
        words: wordCount,
        lines: lineCount,
      },
    })
  }
}
