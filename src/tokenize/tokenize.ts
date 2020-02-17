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
      while (input[++cursor] && isNumber(input[cursor])) {
        number += input[cursor]
      }
      tokens.push(new Token('Number', Number.parseInt(number, 10)))
      continue
    }

    /** should tokenize letters */
    if (isLetter(character)) {
      let characters = character

      while (input[++cursor] && isLetter(input[cursor])) {
        characters += input[cursor]
      }

      tokens.push(new Token('Name', characters))
      continue
    }

    /** if case is not handled */
    throw new Error(`==> ${character} <== is not valid`)
  }
  return tokens //?
}

export { tokenize }
