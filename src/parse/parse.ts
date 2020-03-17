import {
  Token,
  isNumberToken,
  isStringToken,
  isNameToken,
} from '../tokenize/token'
import { peek, pop } from '../utils/utils'
import {
  isOpeningParenthesis,
  isClosingParenthesis,
} from '../identify/identify'
import {
  NumericLiteral,
  StringLiteral,
  Identifier,
  CallExpression,
  AST,
} from '../ast/ast'

// TODO: this is a bad interface, please address it ASAP
type ArrayToken = Token | Token[] | ArrayToken[]
function parenthesize(tokens: Token[]): ArrayToken {
  const token = pop(tokens)
  if (!token) {
    return []
  } else if (isOpeningParenthesis(String(token.value))) {
    const expression = []

    while (!isClosingParenthesis(String(peek(tokens).value))) {
      expression.push(parenthesize(tokens))
    }

    pop(tokens)

    return expression
  } else {
    return token
  }
}

function parse(tokens: ArrayToken): AST {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens
    const name = String(first.value)
    return new CallExpression(name, rest.map(parse))
  }
  const token = tokens //?
  if (isNumberToken(token)) {
    return new NumericLiteral(token.value)
  }

  if (isStringToken(token)) {
    return new StringLiteral(token.value)
  }

  if (isNameToken(token)) {
    return new Identifier(token.value)
  }

  return undefined
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  parse(tokens: Token[]) {
    return parse(parenthesize(tokens))
  },
  parenthesize,
}
