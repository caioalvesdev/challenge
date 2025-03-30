export interface IResolver<INPUT = undefined, OUTPUT = unknown> {
  handle(input?: INPUT): Promise<OUTPUT> | OUTPUT
}
