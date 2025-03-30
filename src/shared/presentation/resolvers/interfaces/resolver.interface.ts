export interface IResolver<INPUT = undefined, OUTPUT = unknown> {
  handle(input?: INPUT, inputAlt?: INPUT): Promise<OUTPUT> | OUTPUT
}
