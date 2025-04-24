import { generateInteger } from './generate-integer'

describe('generateInteger', () =>
{
    it('should fail if min is greater than max', () =>
	{
		expect(() => generateInteger(10, 5)).toThrow(Error)
		expect(() => generateInteger(42, 5)).toThrow(Error)
	})

	it('should generate a number between positive min and max', () =>
	{
		const data = generateInteger(1, 10)
		expect(data).toBeGreaterThanOrEqual(1)
		expect(data).toBeLessThanOrEqual(10)
	})

	it('should generate a number between negative min and max', () =>
	{
		const data = generateInteger(-5, -1)
		expect(data).toBeGreaterThanOrEqual(-5)
		expect(data).toBeLessThanOrEqual(-1)
	})

	it('should generate a number between negative min and positive max', () =>
	{
		const data = generateInteger(-10, 10)
		expect(data).toBeGreaterThanOrEqual(-10)
		expect(data).toBeLessThanOrEqual(10)
	})

	it('should fail if min or max is not a number', () =>
	{
		expect(() => generateInteger(NaN, 10)).toThrow(Error)
		expect(() => generateInteger(1, NaN)).toThrow(Error)

		expect(() => generateInteger(-NaN, -1)).toThrow(Error)
		expect(() => generateInteger(-10, -NaN)).toThrow(Error)

		expect(() => generateInteger(NaN, NaN)).toThrow(Error)
		expect(() => generateInteger(-NaN, NaN)).toThrow(Error)
		expect(() => generateInteger(NaN, -NaN)).toThrow(Error)
		expect(() => generateInteger(-NaN, -NaN)).toThrow(Error)
	})

	it('should fail if min or max is infinity', () =>
	{
		expect(() => generateInteger(Infinity, 10)).toThrow(Error)
		expect(() => generateInteger(1, Infinity)).toThrow(Error)

		expect(() => generateInteger(-Infinity, -1)).toThrow(Error)
		expect(() => generateInteger(-10, -Infinity)).toThrow(Error)

		expect(() => generateInteger(Infinity, Infinity)).toThrow(Error)
		expect(() => generateInteger(-Infinity, Infinity)).toThrow(Error)
		expect(() => generateInteger(Infinity, -Infinity)).toThrow(Error)
		expect(() => generateInteger(-Infinity, -Infinity)).toThrow(Error)
	})

	it('should fail if min or max is an illegal type', () =>
	{
		expect(() => generateInteger(1, 'a' as unknown as number)).toThrow(Error)
		expect(() => generateInteger('a' as unknown as number, 10)).toThrow(Error)
	})
})
