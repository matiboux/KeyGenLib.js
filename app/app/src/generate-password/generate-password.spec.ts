import { generatePassword } from '~/generate-password/generate-password'

describe('generatePassword', () =>
{
    it('should generate a password by default', () =>
	{
        const password = generatePassword()
        expect(password.length).toBe(12)
		expect(password).toMatch(/^[a-zA-Z0-9]+$/)
    })

	it('should generate a password with specified length', () =>
	{
		const password = generatePassword({
			length: 16,
		})
		expect(password.length).toBe(16)
		expect(password).toMatch(/^[a-zA-Z0-9]+$/)
	})

	it('should fail if no character set options are selected', () =>
	{
		expect(() => generatePassword({
			characterSet: '',
		})).toThrow('Empty character set provided')
	})
})
