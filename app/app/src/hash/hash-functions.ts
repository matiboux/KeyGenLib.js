import type { HashAlgorithms } from '~/hash/hash-algorithms.type'
import type { HashFunction } from '~/hash/hash-function.type'
import { hashSubtleCryptoFactory } from '~/hash/hash-subtlecrypto-factory'

export const hashFunctions: Record<HashAlgorithms, HashFunction> = {
	'sha1': hashSubtleCryptoFactory('SHA-1'),
	'sha256': hashSubtleCryptoFactory('SHA-256'),
	'sha384': hashSubtleCryptoFactory('SHA-384'),
	'sha512': hashSubtleCryptoFactory('SHA-512'),
}
