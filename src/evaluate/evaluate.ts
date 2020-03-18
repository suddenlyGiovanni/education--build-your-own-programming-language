/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { environment } from '../standard-library/standard-library'
import {
  AST,
  NumericLiteral,
  StringLiteral,
  CallExpression,
  Identifier,
} from '../ast/ast'

const last = <T>(collection: T[]): T => collection[collection.length - 1]

type StandardLibraryFunctionNames = keyof typeof environment
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function apply(node: CallExpression) {
  const fn = environment[node.name as StandardLibraryFunctionNames]
  const args: any = node.arguments.map(evaluate)

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`)
  }

  return fn(...args)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getIdentifier(node: Identifier) {
  const identifier = node.name as Extract<StandardLibraryFunctionNames, 'pi'>

  if (environment[identifier]) {
    return environment[identifier]
  }

  throw new ReferenceError(`${node.name} is not defined`)
}
function evaluate(node: AST) {
  if (CallExpression.isCallExpression(node)) {
    return apply(node)
  }

  if (Identifier.isIdentifier(node)) {
    return getIdentifier(node)
  }
  if (
    NumericLiteral.isNumericLiteral(node) ||
    StringLiteral.isStringLiteral(node)
  ) {
    return node.value
  }
}

export { evaluate }
