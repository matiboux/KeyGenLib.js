/**
 * Generates a UUID.
 *
 * @returns The generated UUID.
 */
export function generateUUID(): string
{
	return crypto.randomUUID()
}
