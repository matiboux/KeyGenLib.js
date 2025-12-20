import { getCharacterSet } from '~/character-set/character-set'
import type { GeneratePasswordOptions } from '~/generate-password/generate-password-options.interface'

/**
 * Generates a password based on the provided options.
 * @param {Object} options - Options for password generation.
 * @param {number} options.length - Length of the password (default: 12).
 * @param {boolean} options.characterSet - Character set to use for password generation (default: "a-zA-Z0-9").
 * @returns {string} The generated password.
 * @throws {Error} If the character set is empty.
 */
export function generatePassword({
	length = 12,
	characterSet = getCharacterSet(),
}: GeneratePasswordOptions = {}): string
{
	if (characterSet.length <= 0)
	{
		throw new Error('Empty character set provided')
	}

    const passwordCharacters: string[] = []
	for (let i = 0; i < length; i++)
	{
		const randomIndex = Math.floor(Math.random() * characterSet.length)
		passwordCharacters.push(characterSet[randomIndex])
	}

	return passwordCharacters.join('')
}
