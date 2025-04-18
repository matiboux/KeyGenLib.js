import KeyGenLib from '/KeyGenLib'

test('misconfigures parameters with no length', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: true,
			uppercase: true,
			length: 0,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBe(false)
		expect(KeyGen.errorInfo).toBeDefined()
	})
