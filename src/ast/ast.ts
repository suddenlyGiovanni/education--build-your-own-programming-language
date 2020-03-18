import * as ESTree from './estree'
export class Position implements ESTree.Position {
  public line: number
  public column: number

  constructor(line: number, column: number) {
    this.validateLine(line)
    this.validateColum(column)

    this.line = line
    this.column = column
  }

  private validateLine(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error('Error: the line is not an integer')
    }
    if (!(value >= 1)) {
      throw new Error('Error: the line is not 1-indexed')
    }
  }
  private validateColum(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error('Error: the column is not an integer')
    }
    if (!(value >= 0)) {
      throw new Error('Error: the column is not 0-indexed')
    }
  }
}

export class Identifier implements ESTree.Identifier {
  public type: 'Identifier'
  public name: string
  public loc: ESTree.SourceLocation | null
  constructor(value: string) {
    this.type = 'Identifier'
    this.name = value
    this.loc = null
  }

  public static isIdentifier(node: ESTree.Node): node is Identifier {
    return node.type === 'Identifier'
  }
}

export class NumericLiteral implements ESTree.Literal {
  public readonly type: 'NumericLiteral'
  public readonly value: number
  public readonly loc: ESTree.SourceLocation | null
  constructor(value: number) {
    this.type = 'NumericLiteral'
    this.value = value
    this.loc = null
  }

  public static isNumericLiteral(node: ESTree.Node): node is NumericLiteral {
    return node.type === 'NumericLiteral'
  }
}

export class StringLiteral implements ESTree.Literal {
  public readonly type: 'StringLiteral'
  public readonly value: string
  public readonly loc: ESTree.SourceLocation | null
  constructor(value: string) {
    this.type = 'StringLiteral'
    this.value = value
    this.loc = null
  }

  public static isStringLiteral(node: ESTree.Node): node is StringLiteral {
    return node.type === 'StringLiteral'
  }
}

export class CallExpression implements ESTree.CallExpression {
  public name: string
  public type: 'CallExpression'
  public loc: ESTree.SourceLocation | null
  public arguments: ESTree.Expression[]
  public callee: ESTree.Expression | null
  constructor(name: string, args: ESTree.Expression[]) {
    this.type = 'CallExpression'
    this.name = name
    this.loc = null
    this.arguments = args
    this.callee = null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static isCallExpression(node: any): node is CallExpression {
    return node.type === 'CallExpression'
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AST = ESTree.Node | NumericLiteral | StringLiteral
