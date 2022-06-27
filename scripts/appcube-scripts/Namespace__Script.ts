export class Input {}

export class Output {}

@useObject([])
export class Query {
  @action.method({ input: 'Input', output: 'Output' })
  run(input: Input): Output {
    let output = new Output()
    return output
  }
}
