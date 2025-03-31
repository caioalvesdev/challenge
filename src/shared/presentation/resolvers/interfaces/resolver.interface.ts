export interface IResolver<INPUT = undefined, OUTPUT = unknown> {
  handle(input?: INPUT, ...args: unknown[]): Promise<OUTPUT> | OUTPUT
}
