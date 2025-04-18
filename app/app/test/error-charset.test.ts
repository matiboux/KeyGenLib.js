// @ts-ignore
import KeyGenLib from '/KeyGenLib'

test('misconfigures parameters with no characters set', () =>
	{
		const KeyGen = new KeyGenLib()
		const parameters = {
			numeric: false,
			lowercase: false,
			uppercase: false,
			special: false,
		}
		KeyGen.setParameters(parameters)
		expect(KeyGen.generateKeygen()).toBe(false)
		expect(KeyGen.errorInfo).toBeDefined()
	})
