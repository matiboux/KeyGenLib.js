// @ts-ignore
import KeyGenLib from '/KeyGenLib'

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

test('gets the default parameters', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.defaultParameters).toBeDefined()
		expect(KeyGen.defaultParameters.numeric).toBeDefined()
		expect(KeyGen.defaultParameters.lowercase).toBeDefined()
		expect(KeyGen.defaultParameters.uppercase).toBeDefined()
		expect(KeyGen.defaultParameters.special).toBeDefined()
		expect(KeyGen.defaultParameters.length).toBeGreaterThan(0)
		expect(KeyGen.defaultParameters.redundancy).toBeDefined()
	})

test('gets the last parameters', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.lastParameters).toBeDefined()
		expect(KeyGen.lastParameters.numeric).toBeDefined()
		expect(KeyGen.lastParameters.lowercase).toBeDefined()
		expect(KeyGen.lastParameters.uppercase).toBeDefined()
		expect(KeyGen.lastParameters.special).toBeDefined()
		expect(KeyGen.lastParameters.length).toBeGreaterThan(0)
		expect(KeyGen.lastParameters.redundancy).toBeDefined()
	})

test('asserts last parameters are default parameters', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.lastParameters).toEqual(KeyGen.defaultParameters)
	})
