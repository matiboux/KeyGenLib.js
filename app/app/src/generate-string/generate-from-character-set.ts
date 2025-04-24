/**
 * Generates a password based on the provided parameters.
 *
 * @param characterSet - The set of characters to use for generating the password.
 * @param length - The length of the password to generate.
 * @returns {string} The generated password.
 * @throws {Error} If the character set is empty.
 */
export function generateFromCharacterSet(
	characterSet: string,
	length: number = 12
): string
{
	if (!characterSet)
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
