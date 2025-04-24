/**
 * Generate a random number between specified min and max values.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (exclusive).
 * @returns A random float number between min and max.
 * @throws {Error} If min is not a finite number.
 * @throws {Error} If max is not a finite number.
 * @throws {Error} If min is greater than max.
 */
export function generateNumber(min: number, max: number): number
{
	if (!Number.isFinite(min))
	{
		throw new Error('Minimum value is not a finite number')
	}

	if (!Number.isFinite(max))
	{
		throw new Error('Maximum value is not a finite number')
	}

	if (min > max)
	{
		throw new Error('Minimum value is greater than maximum value')
	}

	return Math.random() * (max - min) + min
}
