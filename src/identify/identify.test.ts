/* eslint-disable no-useless-escape */
import { isLetter, isWhitespace } from './identify'

const characters = 'aa'
const character = 'a'
const number = '1'
const whitespace = ' '
const tab = '\t'
const carriageReturn = '\r'
const singleQuote = `\'`
const doubleQuote = `\"`
describe('isLetter', () => {
  it('accepts only a single character at a time', () => {
    const fn = (): boolean => isLetter(characters)
    expect(fn).toThrow()
  })
  it('happy path', () => {
    expect(isLetter(character)).toBe(true)
  })

  it('Should return `false` for a number', () => {
    expect(isLetter(number)).toBe(false)
  })

  it('Should return `false` for a space', () => {
    expect(isLetter(whitespace)).toBe(false)
  })

  it('Should return `false` for a tab', () => {
    expect(isLetter(tab)).toBe(false)
  })
  it('Should return `false` for a new line', () => {
    expect(isLetter(carriageReturn)).toBe(false)
  })
  it('Should return `false` for a single quote', () => {
    expect(isLetter(singleQuote)).toBe(false)
  })
  it('Should return `false` for a double quote', () => {
    expect(isLetter(doubleQuote)).toBe(false)
  })
})

describe('isWhitespace', () => {
  it('accepts only a single character at a time', () => {
    const fn = (): boolean => isWhitespace(characters)
    expect(fn).toThrow()
  })

  it('happy path', () => {
    expect(isWhitespace(whitespace)).toBe(true)
  })

  it('Should return `false` for a tab', () => {
    expect(isWhitespace(tab)).toBe(false)
  })
})
