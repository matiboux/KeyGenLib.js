const KeyGenLib = require('../KeyGenLib')

test('generates like a PIN code', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: false,
			special: false,
			length: 4,
			redundancy: true,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
	})
