import { hashSubtleCryptoFactory } from '~/hash/hash-subtlecrypto-factory'

describe('hashSubtleCryptoFactory', () =>
{
	it('should return the sha256 hash function', () =>
	{
		const hashFunction = hashSubtleCryptoFactory('SHA-256')
		expect(hashFunction).toBeInstanceOf(Function)
	})

	it('should throw an error for unsupported algorithms', () =>
	{
		expect(() => hashSubtleCryptoFactory('unrecognized-algorithm' as any))
			.toThrow('Unsupported hashing algorithm')
	})
})
