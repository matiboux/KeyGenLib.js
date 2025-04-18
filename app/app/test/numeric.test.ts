import KeyGenLib from '/KeyGenLib'

test('generates a numeric keygen', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: false,
			special: false,
			length: 12,
			redundancy: true,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
	})

test('generates a numeric keygen with forced redundancy', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: false,
			special: false,
			length: 12,
			redundancy: false,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
		expect(KeyGen.parameters.redundancy).toBe(true)
	})

test('generates a numeric keygen with no redundancy', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: false,
			special: false,
			length: 10,
			redundancy: false,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBeTruthy()
		expect(KeyGen.parameters.redundancy).toBe(false)
	})
