import { generateNumber } from './generate-number'

describe('generateNumber', () =>
{
	describe('generate from integer min and max', () =>
	{

		it('should generate a number between positive min and max', () =>
		{
			const data = generateNumber(1, 10)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(1)
			expect(data).toBeLessThan(10)
		})

		it('should generate a number between negative min and max', () =>
		{
			const data = generateNumber(-5, -1)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-5)
			expect(data).toBeLessThan(-1)
		})

		it('should generate a number between negative min and positive max', () =>
		{
			const data = generateNumber(-10, 10)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-10)
			expect(data).toBeLessThan(10)
		})
	})

	describe('generate from float min and max', () =>
	{
		it('should generate a number between positive min and max', () =>
		{
			const data = generateNumber(1.5, 10.5)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(1.5)
			expect(data).toBeLessThan(10.5)
		})

		it('should generate a number between negative min and max', () =>
		{
			const data = generateNumber(-5.5, -1.5)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-5.5)
			expect(data).toBeLessThan(-1.5)
		})

		it('should generate a number between negative min and positive max', () =>
		{
			const data = generateNumber(-10.5, 10.5)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(-10.5)
			expect(data).toBeLessThan(10.5)
		})

		it('should generate a number smaller than Epsilon', () =>
		{
			const data = generateNumber(0, Number.EPSILON)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBeGreaterThanOrEqual(0)
			expect(data).toBeLessThan(Number.EPSILON)
		})
	})

	describe('generate precise numbers', () =>
	{
		it('should generate a zero explicitly', () =>
		{
			const data = generateNumber(0, 0)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBe(0)
		})

		it('should generate 42', () =>
		{
			const data = generateNumber(42, 42)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBe(42)
		})

		it('should generate -10', () =>
		{
			const data = generateNumber(-10, -10)
			expect(Number.isFinite(data)).toBeTruthy()
			expect(data).toBe(-10)
		})

		it('should generate either zero or the smallest number', () =>
		{
			const data = generateNumber(0, Number.MIN_VALUE)
			expect(Number.isFinite(data)).toBeTruthy()
			expect([0, Number.MIN_VALUE]).toContain(data)
		})
	})

	describe('failure cases', () =>
	{
		it('should fail if min is greater than max', () =>
		{
			expect(() => generateNumber(10, 5)).toThrow(Error)
			expect(() => generateNumber(42, 5)).toThrow(Error)
		})

		it('should fail if min is not a number', () =>
		{
			expect(() => generateNumber(NaN, 10)).toThrow(Error)
			expect(() => generateNumber(-NaN, -1)).toThrow(Error)
		})

		it('should fail if max is not a number', () =>
		{
			expect(() => generateNumber(1, NaN)).toThrow(Error)
			expect(() => generateNumber(-10, -NaN)).toThrow(Error)
		})

		it('should fail if min and max are not a number', () =>
		{
			expect(() => generateNumber(NaN, NaN)).toThrow(Error)
			expect(() => generateNumber(-NaN, -NaN)).toThrow(Error)
		})

		it('should fail if min is infinity', () =>
		{
			expect(() => generateNumber(Infinity, 10)).toThrow(Error)
			expect(() => generateNumber(-Infinity, -1)).toThrow(Error)
		})

		it('should fail if max is infinity', () =>
		{
			expect(() => generateNumber(1, Infinity)).toThrow(Error)
			expect(() => generateNumber(-10, -Infinity)).toThrow(Error)
		})

		it('should fail if min and max are infinity', () =>
		{
			expect(() => generateNumber(Infinity, Infinity)).toThrow(Error)
			expect(() => generateNumber(-Infinity, -Infinity)).toThrow(Error)
		})

		it('should fail if min is an illegal type', () =>
		{
			expect(() => generateNumber('a' as any, 10)).toThrow(Error)
		})

		it('should fail if max is an illegal type', () =>
		{
			expect(() => generateNumber(1, 'b' as any)).toThrow(Error)
		})
	})

})
