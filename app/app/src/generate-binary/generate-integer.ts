import { generateNumber } from './generate-number'

/**
 * Generate a random integer between specified min and max values.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 */
export function generateInteger(min: number, max: number): number
{
	return Math.floor(generateNumber(min, max + 1))
}
