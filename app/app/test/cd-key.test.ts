// @ts-ignore
import KeyGenLib from '/KeyGenLib'

test('generates like a CD-key component', () =>
	{
		const keygen = new KeyGenLib()
		const parameters = {
			numeric: true,
			lowercase: false,
			uppercase: true,
			special: false,
			length: 16,
			redundancy: true,
		}
		keygen.setParameters(parameters)
		const key = keygen.generateKeygen()
		expect(key).toBeTruthy()
		expect(key).toMatch(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/)
	})
