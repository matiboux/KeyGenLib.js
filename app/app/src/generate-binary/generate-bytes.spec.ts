import { generateBytes } from './generate-bytes'

describe('generateBytes', () =>
{
	describe('generate', () =>
	{
		it('should generate 10 bytes', () =>
		{
			const data = generateBytes(10)
			expect(data).toBeInstanceOf(Uint8Array)
			expect(data.length).toBe(10)
		})

		it('should generate 10_000 bytes', () =>
		{
			const data = generateBytes(10_000)
			expect(data).toBeInstanceOf(Uint8Array)
			expect(data.length).toBe(10_000)
		})

		it('should generate 65_536 bytes', () =>
		{
			const data = generateBytes(65_536)
			expect(data).toBeInstanceOf(Uint8Array)
			expect(data.length).toBe(65_536)
		})
	})

	describe('failure cases', () =>
	{
		it('should fail if length is not a number', () =>
		{
			expect(() => generateBytes(NaN)).toThrow(Error)
		})

		it('should fail if length is infinity', () =>
		{
			expect(() => generateBytes(Infinity)).toThrow(Error)
		})

		it('should fail if length is of illegal type', () =>
		{
			expect(() => generateBytes('10' as any)).toThrow(Error)
		})

		it('should fail if length is less than zero', () =>
		{
			expect(() => generateBytes(-1)).toThrow(Error)
		})

		it('should fail if length is greater than 65536', () =>
		{
			expect(() => generateBytes(65_537)).toThrow(DOMException)
		})
	})
})
