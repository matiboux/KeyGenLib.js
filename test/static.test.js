const KeyGenLib = require('../KeyGenLib')

test('gets the version', () =>
	{
		const KeyGen = new KeyGenLib()
		expect(KeyGen.version).toMatch(/^\d+\.\d+\.\d+$/)
	})
