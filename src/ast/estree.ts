/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * ESTree AST nodes are represented as Node objects,
 * which may have any prototype inheritance but which implement the following interface:
 */
export interface Node {
  type: string
  loc?: SourceLocation | null
}

/**
 * object consisting of
 * - a `start` position (the position of the first character of the parsed source region) and
 * - an `end` position (the position of the first character after the parsed source region)
 */
export interface SourceLocation {
  source: string | null
  start: Position
  end: Position
}

/**
 * Each Position object consists of
 * - a `line` number (1-indexed) and
 * - a `column` number (0-indexed)
 */
export interface Position {
  line: number // >= 1
  column: number // >= 0
}

/**
 * Any statement.
 */
export type Statement = Node

/**
 * Any expression node
 */
export type Expression = Node

export type Pattern = Node

/**
 * An identifier. Note that an identifier may be an expression or a destructuring pattern.
 */
export interface Identifier extends Expression, Pattern {
  type: 'Identifier'
  name: string
}

/**
 * A literal token. Note that a literal can be an expression.
 */
export interface Literal extends Expression {
  type: 'Literal' | 'NumericLiteral' | 'StringLiteral'
  value: string | boolean | null | number | RegExp
}

/**
 * A directive from the directive prologue of a script or function.
 * The directive property is the raw string source of the directive without quotes.
 */
export interface Directive extends Node {
  type: 'ExpressionStatement'
  expression: Literal
  directive: string
}

/**
 * A complete program source tree.
 */

export interface Program extends Node {
  type: 'Program'
  body: (Directive | Statement)[]
}

/**
 * An expression statement, i.e., a statement consisting of a single expression.
 */
export interface ExpressionStatement extends Statement {
  type: 'ExpressionStatement'
  expression: Expression
}

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 */
export interface BlockStatement extends Statement {
  type: 'BlockStatement'
  body: Statement[]
}

/**
 * The body of a function, which is a block statement that may begin with directives.
 */
export interface FunctionBody extends BlockStatement {
  body: (Directive | Statement)[]
}

/**
 * A function declaration or expression.
 */
export interface Function extends Node {
  id: Identifier | null
  params: Pattern[]
  body: FunctionBody
}

/**
 * A function or method call expression.
 */
export interface CallExpression extends Expression {
  // TODO: Remove null from callee def.
  callee: Expression | null
  type: 'CallExpression'
  arguments: Expression[]
}
