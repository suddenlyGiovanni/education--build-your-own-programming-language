const LETTER = /[a-zA-Z]/

function isLetter(character: string): boolean {
  if (character.length > 1) {
    throw new Error('isLetter only accepts a single character at a time')
  }
  return LETTER.test(character)
}

export { isLetter }
