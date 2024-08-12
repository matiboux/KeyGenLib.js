const KeyGenLib = require('../KeyGenLib')

test('generates a long password with special characters', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			special: true,
			length: 64,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
	})
