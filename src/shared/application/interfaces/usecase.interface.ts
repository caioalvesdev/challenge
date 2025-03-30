export interface IUseCase<INPUT = unknown, OUTPUT = unknown> {
  execute(input: INPUT): Promise<OUTPUT> | OUTPUT
}
