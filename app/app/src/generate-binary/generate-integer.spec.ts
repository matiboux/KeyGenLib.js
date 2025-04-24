import { generateInteger } from './generate-integer'

describe('generateInteger', () =>
{
	describe('generate from integer min and max', () =>
	{
		it('should generate an integer between positive min and max', () =>
		{
			const data = generateInteger(1, 10)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(1)
			expect(data).toBeLessThanOrEqual(10)
		})

		it('should generate an integer between negative min and max', () =>
		{
			const data = generateInteger(-5, -1)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-5)
			expect(data).toBeLessThanOrEqual(-1)
		})

		it('should generate an integer between negative min and positive max', () =>
		{
			const data = generateInteger(-10, 10)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-10)
			expect(data).toBeLessThanOrEqual(10)
		})
	})

	describe('generate from float min and max', () =>
	{
		it('should generate an integer between positive min and max', () =>
		{
			const data = generateInteger(1.5, 10.5)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(2)
			expect(data).toBeLessThanOrEqual(10)
		})

		it('should generate an integer between negative min and max', () =>
		{
			const data = generateInteger(-5.5, -1.5)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-5)
			expect(data).toBeLessThanOrEqual(-2)
		})

		it('should generate an integer between negative min and positive max', () =>
		{
			const data = generateInteger(-10.5, 10.5)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-10)
			expect(data).toBeLessThanOrEqual(10)
		})

		it('should generate an integer smaller than Epsilon', () =>
		{
			const data = generateInteger(0, Number.EPSILON)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBe(0)
		})
	})

	describe('generate precise numbers', () =>
	{
		it('should generate a zero explicitly', () =>
		{
			const data = generateInteger(0, 0)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBe(0)
		})

		it('should generate 42', () =>
		{
			const data = generateInteger(42, 42)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBe(42)
		})

		it('should generate -10', () =>
		{
			const data = generateInteger(-10, -10)
			expect(Number.isInteger(data)).toBeTruthy()
			expect(data).toBe(-10)
		})

		it('should generate zero, constrained by the smallest number', () =>
		{
			const data = generateInteger(0, Number.MIN_VALUE)
			expect(Number.isInteger(data)).toBeTruthy()
		})
	})

	describe('failure cases', () =>
	{
		it('should fail if min is greater than max', () =>
		{
			expect(() => generateInteger(10, 5)).toThrow(Error)
			expect(() => generateInteger(42, 5)).toThrow(Error)
		})

		it('should fail if min is not a number', () =>
		{
			expect(() => generateInteger(NaN, 10)).toThrow(Error)
			expect(() => generateInteger(-NaN, -1)).toThrow(Error)
		})

		it('should fail if max is not a number', () =>
		{
			expect(() => generateInteger(1, NaN)).toThrow(Error)
			expect(() => generateInteger(-10, -NaN)).toThrow(Error)
		})

		it('should fail if min and max are not a number', () =>
		{
			expect(() => generateInteger(NaN, NaN)).toThrow(Error)
			expect(() => generateInteger(-NaN, -NaN)).toThrow(Error)
		})

		it('should fail if min is infinity', () =>
		{
			expect(() => generateInteger(Infinity, 10)).toThrow(Error)
			expect(() => generateInteger(-Infinity, -1)).toThrow(Error)
		})

		it('should fail if max is infinity', () =>
		{
			expect(() => generateInteger(1, Infinity)).toThrow(Error)
			expect(() => generateInteger(-10, -Infinity)).toThrow(Error)
		})

		it('should fail if min and max are infinity', () =>
		{
			expect(() => generateInteger(Infinity, Infinity)).toThrow(Error)
			expect(() => generateInteger(-Infinity, -Infinity)).toThrow(Error)
		})

		it('should fail if min is an illegal type', () =>
		{
			expect(() => generateInteger('a' as any, 10)).toThrow(Error)
		})

		it('should fail if max is an illegal type', () =>
		{
			expect(() => generateInteger(1, 'b' as any)).toThrow(Error)
		})
	})
})
