import { getCharacterSet } from './character-set'

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
		const characterSet = getCharacterSet(false, false, false, false)
		expect(characterSet.length).toBe(0)
		expect(characterSet).toBe('')
	})

    it('should return lowercase letters only', () =>
	{
		const characterSet = getCharacterSet(false, true, false, false)
		expect(characterSet.length).toBe(26)
		expect(characterSet).toMatch(/^[a-z]+$/)
	})

    it('should return uppercase letters only', () =>
	{
		const characterSet = getCharacterSet(false, false, true, false)
		expect(characterSet.length).toBe(26)
		expect(characterSet).toMatch(/^[A-Z]+$/)
    })

    it('should return lowercase and uppercase letters', () =>
	{
		const characterSet = getCharacterSet(false, true, true, false)
		expect(characterSet.length).toBe(52)
		expect(characterSet).toMatch(/^[a-zA-Z]+$/)
    })

    it('should return lowercase letters and numbers', () =>
	{
		const characterSet = getCharacterSet(true, true, false, false)
		expect(characterSet.length).toBe(36)
		expect(characterSet).toMatch(/^[a-z0-9]+$/)
    })

	it('should return numbers only', () =>
	{
		const characterSet = getCharacterSet(true, false, false, false)
		expect(characterSet.length).toBe(10)
		expect(characterSet).toMatch(/^[0-9]+$/)
	})

	it('should return symbols only', () =>
	{
		const characterSet = getCharacterSet(false, false, false, true)
		expect(characterSet.length).toBe(20)
		expect(characterSet).toMatch(/^[!#$%&\\()+-;?@[\]^_{|}]+/)
	})

	it('should return alphabetic letters and basic symbols', () =>
	{
		const characterSet = getCharacterSet(false, true, true, true)
		expect(characterSet.length).toBe(72)
		expect(characterSet).toMatch(/^[a-zA-Z!#$%&\\()+-;?@[\]^_{|}]+/)
	})
})
