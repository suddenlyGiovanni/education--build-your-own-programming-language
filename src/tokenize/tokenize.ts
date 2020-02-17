import {
  // isLetter,
  // isWhitespace,
  // isNumber,
  isParenthesis,
  isWhitespace,
  // isQuote,
} from '../identify/identify'

type Type = 'Parenthesis' | 'Number' | 'Name'

type Value = string | number
export type Token = {
  type: Type
  value: Value
}
function tokenize(input: string): Token[] {
  const tokens: Token[] = []
  let cursor = 0
  while (cursor < input.length) {
    const character = input[cursor] //?

    /** should tokenize parentheses */
    if (isParenthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character,
      })
      cursor++
      continue
    }

    /** should ignore whitespace completely*/
    if (isWhitespace(character)) {
      cursor++
      continue
    }
  }
  return tokens //?
}

export { tokenize }
