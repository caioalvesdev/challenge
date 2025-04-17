type Options = {
  url: string
  expiration?: number
}

export class SignedUrl {
  private readonly options: Options
  private readonly signedUrl?: string

  constructor(options: Options) {
    if (typeof options.url !== 'string') {
      throw new Error(`URL must be a string, received: ${typeof options.url}`)
    }

    if (!this.isValidUrl(options.url)) {
      throw new Error(`Invalid URL: ${options.url}`)
    }

    this.options = options

    this.signedUrl = this.generateSignedUrl(options.expiration)
  }

  public get value(): string {
    return this.signedUrl || this.options.url
  }

  public get rawValue(): string {
    return this.options.url
  }

  private generateSignedUrl(expirationTime: number = 3600): string {
    const expires = Math.floor(Date.now() / 1000) + expirationTime
    const signature = Math.random().toString(36).substring(7)
    return `${this.options.url}?expires=${expires}&signature=${signature}`
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
}
