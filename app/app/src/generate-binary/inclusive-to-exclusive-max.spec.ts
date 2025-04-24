import { inclusiveToExclusiveMax } from './inclusive-to-exclusive-max'

describe('inclusiveToExclusiveMax', () =>
{
	describe('non-finite numbers', () =>
	{
		it('should return itself for NaN', () =>
		{
			const input = NaN
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input)
		})

		it('should return itself for -NaN', () =>
		{
			const input = -NaN
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input)
		})

		it('should return itself for Infinity', () =>
		{
			const input = Infinity
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input)
		})

		it('should return itself for -Infinity', () =>
		{
			const input = -Infinity
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input)
		})
	})

	describe('integer numbers', () =>
	{
		it('should return an increment for positive integers', () =>
		{
			const input = 10
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input + 1)
		})

		it('should return an increment for negative integers', () =>
		{
			const input = -10
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(input + 1)
		})
	})

	describe('float numbers', () =>
	{
		it('should return the ceiling value for positive floats', () =>
		{
			const input = 10.5
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(Math.ceil(input))
		})

		it('should return the ceiling value for negative floats', () =>
		{
			const input = -10.5
			const result = inclusiveToExclusiveMax(input)
			expect(result).toBe(Math.ceil(input))
		})
	})
})
