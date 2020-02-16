const LETTER = /[a-zA-Z]/
const WHITESPACE = / /
// const TAB = /\t/

function isLetter(character: string): boolean {
  if (character.length > 1) {
    throw new Error('isLetter only accepts a single character at a time')
  }
  return LETTER.test(character)
}

function isWhitespace(character: string): boolean {
  if (character.length > 1) {
    throw new Error('isWhitespace only accepts a single character at a time')
  }
  return WHITESPACE.test(character)
}

export { isLetter, isWhitespace }
