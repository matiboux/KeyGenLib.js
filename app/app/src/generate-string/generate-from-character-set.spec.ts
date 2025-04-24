import { generateFromCharacterSet } from './generate-from-character-set'

describe('generateFromCharacterSet', () =>
{
    it('should throw an error if no character set is provided', () =>
	{
        expect(() => generateFromCharacterSet('')).toThrow(Error)
		expect(() => generateFromCharacterSet('', 42)).toThrow(Error)
	})

	it('should generate a string from a single character', () =>
	{
		const data = generateFromCharacterSet('a', 5)
		expect(data).toBe('aaaaa')
	})

	it('should generate a string from a simple character set', () =>
	{
		const data = generateFromCharacterSet('abc', 5)
		expect(data.length).toBe(5)
		expect(data).toMatch(/^[abc]+$/)
	})

	it('should generate a string from a character set with symbols', () =>
	{
		const data = generateFromCharacterSet('abcABC!@#', 10)
		expect(data.length).toBe(10)
		expect(data).toMatch(/^[abcABC!@#]+$/)
	})

	it('should generate a longer string from a character set with numbers', () =>
	{
		const data = generateFromCharacterSet('abcABC12345', 42)
		expect(data.length).toBe(42)
		expect(data).toMatch(/^[abcABC12345]+$/)
	})
})
