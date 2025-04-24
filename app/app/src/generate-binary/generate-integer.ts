/**
 * Generate a random integer between specified min and max values.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 */
export function generateInteger(min: number, max: number): number
{
	if (!Number.isFinite(min))
	{
		throw new Error('Minimum value is not a finite number')
	}

	if (!Number.isFinite(max))
	{
		throw new Error('Maximum value is not a finite number')
	}

	min = Math.ceil(min)
	max = Math.floor(max)

	if (min > max)
	{
		throw new Error('Minimum value is greater than maximum value')
	}

	return Math.floor(Math.random() * (max - min + 1)) + min
}
