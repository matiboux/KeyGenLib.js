import crypto from 'crypto'

import type { HashFunction } from '~/hash/hash-function.type'

const subtleCryptoHashAlgorithms = [
	'SHA-1',
	'SHA-256',
	'SHA-384',
	'SHA-512',
] as const

export type SubtleCryptoHashAlgorithms = typeof subtleCryptoHashAlgorithms[number]

/**
 * Return a function that generates a hash of the given text using the specified algorithm.
 * @param {SubtleCryptoHashAlgorithms} algorithm - The algorithm to use for hashing.
 * @returns {HashFunction} A function that takes a text and returns its hash.
 * @throws {Error} If the algorithm name is unrecognized.
 */
export function hashSubtleCryptoFactory(
	algorithm: SubtleCryptoHashAlgorithms,
): HashFunction
{
	if (!subtleCryptoHashAlgorithms.includes(algorithm))
	{
		throw new Error('Unsupported hashing algorithm')
	}

	/**
	 * Generates a hash of the given text using the specified algorithm.
	 * @param {string} text - The text to hash.
	 * @returns {Promise<string>} The generated hash.
	 * @throws {Error} If the specified algorithm is not supported.
	 */
	return async (text: string): Promise<string> =>
	{
		const encoder = new TextEncoder()
		const data = encoder.encode(text)
		const hashBuffer = crypto.subtle.digest(algorithm, data)
		const hashArray = Array.from(new Uint8Array(await hashBuffer))
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
		return hashHex
	}
}
