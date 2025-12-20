import { getCharacterSet } from '~/character-set/character-set'
import { getSymbolSet } from '~/character-set/symbol-set'
import { CharacterSetFlags } from '~/character-set/character-set-flags.enum'
import { SymbolSetFlags } from './symbol-set-flags.enum'

describe('getCharacterSet', () =>
{
	it('should return alphanumeric characters by default', () =>
	{
		const characterSet = getCharacterSet()
		expect(characterSet.length).toBe(62)
		expect(characterSet).toMatch(/^[a-zA-Z0-9]+$/)
		expect(characterSet).not.toMatch(/[^a-zA-Z0-9]/)
	})

	it('should return an empty string when all options are false', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.None)
		expect(characterSet.length).toBe(0)
		expect(characterSet).toBe('')
	})

    it('should return lowercase letters only', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Lowercase)
		expect(characterSet.length).toBe(26)
		expect(characterSet).toMatch(/^[a-z]+$/)
	})

    it('should return uppercase letters only', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Uppercase)
		expect(characterSet.length).toBe(26)
		expect(characterSet).toMatch(/^[A-Z]+$/)
    })

    it('should return lowercase and uppercase letters', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Lowercase | CharacterSetFlags.Uppercase)
		expect(characterSet.length).toBe(52)
		expect(characterSet).toMatch(/^[a-zA-Z]+$/)
    })

    it('should return lowercase letters and numbers', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Lowercase | CharacterSetFlags.Numeric)
		expect(characterSet.length).toBe(36)
		expect(characterSet).toMatch(/^[a-z0-9]+$/)
    })

	it('should return numbers only', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Numeric)
		expect(characterSet.length).toBe(10)
		expect(characterSet).toMatch(/^[0-9]+$/)
	})

	it('should return default symbols only', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Symbols)
		const symbolSet = getSymbolSet()
		expect(characterSet.length).toBe(symbolSet.length)
	})

	it('should return basic symbols only', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Symbols, SymbolSetFlags.Basic)
		const symbolSet = getSymbolSet(SymbolSetFlags.Basic)
		expect(characterSet.length).toBe(symbolSet.length)
		expect(characterSet).toBe(symbolSet)
	})

	it('should return alphabetic letters and basic symbols', () =>
	{
		const characterSet = getCharacterSet(CharacterSetFlags.Lowercase | CharacterSetFlags.Uppercase | CharacterSetFlags.Symbols, SymbolSetFlags.Basic)
		const symbolSet = getSymbolSet(SymbolSetFlags.Basic)
		expect(characterSet.length).toBe(52 + symbolSet.length)
		expect(characterSet).toMatch(/^[a-zA-Z@#&$%]+$/)
	})
})
