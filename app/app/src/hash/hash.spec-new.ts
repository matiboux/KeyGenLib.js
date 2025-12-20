import { hash } from '~/hash/hash'

describe('hash', () =>
{
	it('should generate a sha256 hash by default', async () =>
	{
		const result = await hash('Hello, World!')
		expect(result).toMatch(/^[a-f0-9]{64}$/) // sha256 produces a 64 character hex string
	})

	it('should generate a sha1 hash of the given text', async () =>
	{
		const result = await hash('Hello, World!', 'sha1')
		expect(result).toMatch(/^[a-f0-9]{40}$/) // sha1 produces a 40 character hex string
	})

	it('should generate a sha256 hash of the given text', async () =>
	{
		const result = await hash('Hello, World!', 'sha256')
		expect(result).toMatch(/^[a-f0-9]{64}$/) // sha256 produces a 64 character hex string
	})

	it('should generate a sha384 hash of the given text', async () =>
	{
		const result = await hash('Hello, World!', 'sha384')
		expect(result).toMatch(/^[a-f0-9]{96}$/) // sha384 produces a 96 character hex string
	})

	it('should generate a sha512 hash of the given text', async () =>
	{
		const result = await hash('Hello, World!', 'sha512')
		expect(result).toMatch(/^[a-f0-9]{128}$/) // sha512 produces a 128 character hex string
	})

	it('should throw an error for unsupported algorithms', async () =>
	{
		await expect(hash('Hello, World!', 'unrecognized-algorithm' as any))
			.rejects.toThrow('Unrecognized algorithm name')
	})
})
