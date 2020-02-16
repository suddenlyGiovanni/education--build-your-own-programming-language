const LETTER = /[a-zA-Z]/
const SPACE = / /
const TAB = /\t/
const WHITESPACE = /\s+/
const NUMBER = /^[0-9]+$/

/**
 * a string compose of a single character
 */
type Character = string

/**
 * a string compose of a multiple character
 */
type Characters = string

function isLetter(character: Character): boolean {
  if (character.length > 1) {
    throw new Error('isLetter only accepts a single character at a time')
  }
  return LETTER.test(character)
}

function isSpace(character: Character): boolean {
  if (character.length > 1) {
    throw new Error('isSpace only accepts a single character at a time')
  }
  return SPACE.test(character)
}
/**
 *  Matches any whitespace character (spaces, tabs, line breaks)
 */
function isWhitespace(characters: Characters): boolean {
  return WHITESPACE.test(characters)
}

function isTab(character: Character): boolean {
  if (character.length > 1) {
    throw new Error('isTab only accepts a single character at a time')
  }
  return TAB.test(character)
}

function isNumber(character: Character): boolean {
  if (character.length > 1) {
    throw new Error('isNumber only accepts a single character at a time')
  }
  return NUMBER.test(character)
}

export { isLetter, isSpace, isTab, isWhitespace, isNumber }
