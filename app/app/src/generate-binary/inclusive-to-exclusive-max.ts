/**
 * Converts an inclusive number to an exclusive max integer.
 *
 * @param value - The inclusive number to convert.
 * @returns The exclusive max integer value.
 */
export function inclusiveToExclusiveMax(value: number): number
{
	if (!Number.isFinite(value))
	{
		return value
	}

	return Math.floor(value + 1)
}
