export interface IResolver<INPUT = undefined, OUTPUT = unknown> {
  handle(input?: INPUT, inputAlt?: undefined): Promise<OUTPUT> | OUTPUT
}
