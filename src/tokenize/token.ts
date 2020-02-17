type Type = 'Parenthesis' | 'Number' | 'Name'
type Value = string | number
export class Token {
  public type: Type
  public value: Value
  constructor(type: Type, value: Value) {
    this.type = type
    this.value = value
    return this
  }
}