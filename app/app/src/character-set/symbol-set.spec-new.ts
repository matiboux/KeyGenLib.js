import { getSymbolSet } from '~/character-set/symbol-set'
import { SymbolSetFlags } from '~/character-set/symbol-set-flags.enum'

describe('getSymbolSet', () =>
{
	it('should return the default symbol set', () =>
	{
		const symbolSet = getSymbolSet()
		expect(symbolSet.length).toBe(12)
		expect(symbolSet).toMatch(/^[@#^&*$%?!_+=]+$/)
	})

	it('should return the given symbol set string', () =>
	{
		const customSymbolSet = 'abc12345'
		const symbolSet = getSymbolSet(customSymbolSet)
		expect(symbolSet).toBe(customSymbolSet)
	})

	it('should remove duplicate characters from the symbol set string', () =>
	{
		const customSymbolSet = 'abcabc1222345'
		const symbolSet = getSymbolSet(customSymbolSet)
		expect(symbolSet).toBe('abc12345')
	})

	it('should return the symbol set from the default flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Default)
		expect(symbolSet.length).toBe(12)
		expect(symbolSet).toMatch(/^[@#^&*$%?!_+=]+$/)
		expect(symbolSet).not.toMatch(/[^@#^&*$%?!_+=]/)
	})

	it('should return the symbol set from the basic flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Basic)
		expect(symbolSet.length).toBe(5)
		expect(symbolSet).toMatch(/^[@#&$%]+$/)
		expect(symbolSet).not.toMatch(/[^@#&$%]/)
	})

	it('should return the symbol set from the whitespace flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Whitespace)
		expect(symbolSet.length).toBe(1)
		expect(symbolSet).toBe(' ')
		expect(symbolSet).not.toMatch(/[^ ]/)
	})

	it('should return the symbol set from the underscore flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Underscore)
		expect(symbolSet.length).toBe(1)
		expect(symbolSet).toBe('_')
		expect(symbolSet).not.toMatch(/[^_]/)
	})

	it('should return the symbol set from the punctuation flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Punctuation)
		expect(symbolSet.length).toBe(6)
		expect(symbolSet).toMatch(/^[.,;:!?]+$/)
		expect(symbolSet).not.toMatch(/[^.,;:!?]/)
	})

	it('should return the symbol set from the math flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Math)
		expect(symbolSet.length).toBe(8)
		expect(symbolSet).toMatch(/^[-+*/^=<>]+$/)
		expect(symbolSet).not.toMatch(/[^-+*/^=<>]/)
	})

	it('should return the symbol set from the brackets flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.Brackets)
		expect(symbolSet.length).toBe(6)
		expect(symbolSet).toMatch(/^[(){}[\]]+$/)
		expect(symbolSet).not.toMatch(/[^(){}[\]]/)
	})

	it('should return the symbol set from the slash and pipe flag', () =>
	{
		const symbolSet = getSymbolSet(SymbolSetFlags.SlashAndPipe)
		expect(symbolSet.length).toBe(3)
		expect(symbolSet).toMatch(/^[/\\|]+$/)
		expect(symbolSet).not.toMatch(/[^/\\|]/)
	})
})
