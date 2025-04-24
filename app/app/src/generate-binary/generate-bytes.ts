/**
 * Generate a random byte array of specified length.
 *
 * @param length - The length of the byte array to generate.
 * @returns A byte array of random values.
 * @throws {Error} If length is not a finite number.
 * @throws {Error} If length is less than zero.
 * @throws {QuotaExceededError} If length is greater than 65536.
 */
export function generateBytes(length: number): Uint8Array
{
	if (!Number.isFinite(length))
	{
		throw new Error('Length is not a finite number')
	}

	if (length < 0)
	{
		throw new Error('Length is less than zero')
	}

	// Create the byte array of specified length
	const array = new Uint8Array(length)

	// Generate secure random values
	// This will throw if length is greater than 65536
	crypto.getRandomValues(array)

	return array
}
