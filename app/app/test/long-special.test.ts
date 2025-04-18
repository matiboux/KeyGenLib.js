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

test('generates a long password with forced redundancy', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: false,
			special: false,
			length: 64,
			redundancy: false,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
		expect(KeyGen.parameters.redundancy).toBe(true)
	})
