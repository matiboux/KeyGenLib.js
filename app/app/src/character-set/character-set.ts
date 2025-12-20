import { CharacterSetFlags } from '~/character-set/character-set-flags.enum'
import { SymbolSetFlags } from '~/character-set/symbol-set-flags.enum'
import { getSymbolSet } from '~/character-set/symbol-set'

/**
 * Generates a character set based on the provided options.
 *
 * @param characterSet - The character set flags or string to use (default: lowercase, uppercase, numeric).
 * @param symbolSet - The symbol set flags or string to use.
 * @returns The generated character set as a string.
 */
export function getCharacterSet(
	characterFlags: CharacterSetFlags = CharacterSetFlags.Lowercase | CharacterSetFlags.Uppercase | CharacterSetFlags.Numeric,
): string
{
	// if (typeof characterFlags === 'string')
	// {
	// 	if (symbolFlags !== undefined)
	// 	{
	// 		if (typeof symbolFlags === 'string')
	// 		{
	// 			return Array.from(new Set(characterFlags + symbolFlags)).join('')
	// 		}

	// 		const symbolSet = getSymbolSet(symbolFlags)
	// 		return Array.from(new Set(characterFlags + symbolSet)).join('')
	// 	}

	// 	return Array.from(new Set(characterFlags)).join('')
	// }

	const characterSet: Set<string> = new Set()

	if ((characterFlags & CharacterSetFlags.Lowercase) === CharacterSetFlags.Lowercase)
	{
		for (const character of 'abcdefghijklmnopqrstuvwxyz')
		{
			characterSet.add(character)
		}
	}

	if ((characterFlags & CharacterSetFlags.Uppercase) === CharacterSetFlags.Uppercase)
	{
		for (const character of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
		{
			characterSet.add(character)
		}
	}

	if ((characterFlags & CharacterSetFlags.Numeric) === CharacterSetFlags.Numeric)
	{
		for (const character of '0123456789')
		{
			characterSet.add(character)
		}
	}

	if ((characterFlags & CharacterSetFlags.Special) === CharacterSetFlags.Special)
	{
		if (typeof symbolFlags === 'string')
		{
			for (const character of symbolFlags)
			{
				characterSet.add(character)
			}
		}
		else
		{
			if (symbolFlags === undefined)
			{
				symbolFlags = SymbolSetFlags.Default
			}

			const symbolSet = getSymbolSet(symbolFlags)
			for (const character of symbolSet)
			{
				characterSet.add(character)
			}
		}
	}

	return Array.from(characterSet).join('')
}
