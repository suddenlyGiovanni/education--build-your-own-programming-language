import {
  // isWhitespace,
  isNumber,
  isParenthesis,
  isWhitespace,
  isLetter,
  // isQuote,
} from '../identify/identify'
import { Token } from './token'

function tokenize(input: string): Token[] {
  const tokens: Token[] = []
  let cursor = 0
  while (cursor < input.length) {
    const character = input[cursor] //?

    /** should tokenize parentheses */
    if (isParenthesis(character)) {
      tokens.push(new Token('Parenthesis', character))
      cursor++
      continue
    }

    /** should ignore whitespace completely*/
    if (isWhitespace(character)) {
      cursor++
      continue
    }

    /** should tokenize digits */
    if (isNumber(character)) {
      let number = character
      while (isNumber(input[++cursor])) {
        number += input[cursor]
      }
      tokens.push(new Token('Number', Number.parseInt(number, 10)))
      continue
    }

    /** should tokenize single letters in expressions */
    if (isLetter(character)) {
      tokens.push(new Token('Name', character))
      cursor++
      continue
    }

    /** if case is not handled */
    throw new Error(`==> ${character} <== is not valid`)
  }
  return tokens //?
}

export { tokenize }
