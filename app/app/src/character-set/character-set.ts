import { DEFAULT_PARAMETERS } from './default-parameters'
import { LOWERCASE_SET, NUMERIC_SET, SPECIAL_SET, UPPERCASE_SET } from './character-set-consts'

/**
 * Generates a character set based on the provided options.
 *
 * @param numeric - Include numeric characters (default: true).
 * @param lowercase - Include lowercase letters (default: true).
 * @param uppercase - Include uppercase letters (default: true).
 * @param special - Include special characters (default: false).
 * @param removeDuplicates - Remove duplicate characters (default: true).
 * @returns The generated character set as a string.
 */
export function getCharacterSet(
	numeric: boolean = DEFAULT_PARAMETERS.numeric,
	lowercase: boolean = DEFAULT_PARAMETERS.lowercase,
	uppercase: boolean = DEFAULT_PARAMETERS.uppercase,
	special: boolean = DEFAULT_PARAMETERS.special,
	removeDuplicates: boolean = true,
): string
{
	let characterSet = ''

	if (numeric) characterSet += NUMERIC_SET
	if (lowercase) characterSet += LOWERCASE_SET
	if (uppercase) characterSet += UPPERCASE_SET
	if (special) characterSet += SPECIAL_SET

	if (removeDuplicates)
	{
		// Use Set to remove duplicate characters and convert back to string
		characterSet = Array.from(new Set(characterSet.split(''))).join('')
	}

	return characterSet
}
