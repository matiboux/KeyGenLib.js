import { LOWERCASE_SET, NUMERIC_SET, SPECIAL_SET, UPPERCASE_SET } from './character-set-consts'

export interface ICharacterSets
{
	numeric: string
	lowercase: string
	uppercase: string
	special: string
}

/**
 * Returns a dictionary of character set constants.
 *
 * @returns A dictionary of character set constants.
 */
export function getCharacterSets(): ICharacterSets
{
	return {
		numeric: NUMERIC_SET,
		lowercase: LOWERCASE_SET,
		uppercase: UPPERCASE_SET,
		special: SPECIAL_SET,
	}
}
