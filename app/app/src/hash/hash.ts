import type { HashAlgorithms } from '~/hash/hash-algorithms.type'
import { hashFunctions } from '~/hash/hash-functions'

/**
 * Generates a hash of the given text using the specified algorithm.
 * @param {string} text - The text to hash.
 * @param {HashAlgorithms} algorithm - The algorithm to use for hashing (default: "sha256").
 * @returns {Promise<string>} The generated hash.
 * @throws {Error} If the specified algorithm is not supported.
 * @throws {Error} If the algorithm name is unrecognized.
 */
export async function hash(
	text: string,
	algorithm: HashAlgorithms = 'sha256',
): Promise<string>
{
	const hashFunction = hashFunctions[algorithm]
	if (!hashFunction)
	{
		throw new Error('Unrecognized algorithm name')
	}

	const hash = await hashFunction(text)
	return hash
}
