const LETTER = /[a-zA-Z]/
const SPACE = / /
const TAB = /\t/
const WHITESPACE = /\s+/
const NUMBER = /^[0-9]+$/
const OPENING_PARENTHESIS = /\(/

/**
 * a string compose of a single character
 */
type Character = string

/**
 * a string compose of a multiple character
 */
type Characters = string

function assertSingleCharacter(str: string): asserts str is Character {
  if (str.length > 1) {
    throw new Error('only accepts a single character at a time')
  }
}

function isLetter(character: Character): boolean {
  assertSingleCharacter(character)
  return LETTER.test(character)
}

function isSpace(character: Character): boolean {
  assertSingleCharacter(character)
  return SPACE.test(character)
}
/**
 *  Matches any whitespace character (spaces, tabs, line breaks)
 */
function isWhitespace(characters: Characters): boolean {
  return WHITESPACE.test(characters)
}

function isTab(character: Character): boolean {
  assertSingleCharacter(character)
  return TAB.test(character)
}

function isNumber(character: Character): boolean {
  assertSingleCharacter(character)
  return NUMBER.test(character)
}

function isOpeningParenthesis(character: Character): boolean {
  assertSingleCharacter(character)
  return OPENING_PARENTHESIS.test(character)
}

export {
  isLetter,
  isSpace,
  isTab,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
}
