import {
  InputContentDto,
  OutputContentDto,
} from '@core/content/infrastructure/strategies/dtos/content.dto'

export interface IContentStrategy {
  process(content: InputContentDto): Promise<OutputContentDto>
}
