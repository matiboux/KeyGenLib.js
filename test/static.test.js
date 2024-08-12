const KeyGenLib = require('../KeyGenLib')

test('gets the version', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.version).toMatch(/^\d+\.\d+\.\d+$/)
	})

test('gets the character sets', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.characterSets).toBeDefined()
		expect(KeyGen.characterSets.numeric).toMatch(/^[0-9]+$/)
		expect(KeyGen.characterSets.lowercase).toMatch(/^[a-z]+$/)
		expect(KeyGen.characterSets.uppercase).toMatch(/^[A-Z]+$/)
		expect(KeyGen.characterSets.special).toMatch(/^[^a-zA-Z0-9]+$/)
	})
