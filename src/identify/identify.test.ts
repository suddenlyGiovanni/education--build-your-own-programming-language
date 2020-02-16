/* eslint-disable no-useless-escape */
import { isLetter, isSpace, isTab, isWhitespace, isNumber } from './identify'

const characters = 'aa'
const character = 'a'
const number = '1'
const space = ' '
const tab = '\t'
const whitespace = '\t\n'
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
    expect(isLetter(space)).toBe(false)
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

describe('isSpace', () => {
  it('accepts only a single character at a time', () => {
    const fn = (): boolean => isSpace(characters)
    expect(fn).toThrow()
  })

  it('happy path', () => {
    expect(isSpace(space)).toBe(true)
  })

  it('Should return `false` for a tab', () => {
    expect(isSpace(tab)).toBe(false)
  })
})

describe('isTab', () => {
  it('accepts only a single character at a time', () => {
    const fn = (): boolean => isTab(characters)
    expect(fn).toThrow()
  })

  it('happy path', () => {
    expect(isTab(tab)).toBe(true)
  })

  it('Should return `false` for a whitespace', () => {
    expect(isTab(space)).toBe(false)
  })
})

describe('isWhitespace', () => {
  it('happy path', () => {
    expect(isWhitespace(whitespace)).toBe(true)
  })
})
describe('isNumber', () => {
  it('accepts only a single character at a time', () => {
    const fn = (): boolean => isNumber('1000')
    expect(fn).toThrow()
  })

  test('happy path', () => {
    expect(isNumber(number)).toBe(true)
  })

  it('Should return `false` for not numbers', () => {
    expect(isNumber(character)).toBe(false)
  })
})
