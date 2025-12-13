import { SymbolSetFlags } from '~/character-set/symbol-set-flags.enum'

/**
 * Generates a symbol set based on the provided flags or string.
 *
 * - If flags are provided, the function will generate a symbol set based on the specified flags.
 * - If a string is provided, it will be treated as a custom symbol set and duplicate characters will be removed.
 *
 * @param flags - The flags or custom symbol set string (default: `SymbolSetFlags.Default`).
 * @returns The generated symbol set as a string.
 */
export function getSymbolSet(
	flags: SymbolSetFlags | string = SymbolSetFlags.Default,
): string
{
	if (typeof flags === 'string')
	{
		return Array.from(new Set(flags)).join('')
	}

	if (flags === SymbolSetFlags.None)
	{
		return ''
	}

	const characterSet: Set<string> = new Set()

	if ((flags & SymbolSetFlags.Default) === SymbolSetFlags.Default)
	{
		for (const character of '@#^&*$%?!_+=')
		{
			characterSet.add(character)
		}
	}

	if ((flags & SymbolSetFlags.Basic) === SymbolSetFlags.Basic)
	{
		for (const character of '@#&$%')
		{
			characterSet.add(character)
		}
	}

	if ((flags & SymbolSetFlags.Whitespace) === SymbolSetFlags.Whitespace)
	{
		characterSet.add(' ')
	}

	if ((flags & SymbolSetFlags.Underscore) === SymbolSetFlags.Underscore)
	{
		characterSet.add('_')
	}

	if ((flags & SymbolSetFlags.Punctuation) === SymbolSetFlags.Punctuation)
	{
		for (const character of '.,:;!?')
		{
			characterSet.add(character)
		}
	}

	if ((flags & SymbolSetFlags.Math) === SymbolSetFlags.Math)
	{
		for (const character of '+-*/^=<>')
		{
			characterSet.add(character)
		}
	}

	if ((flags & SymbolSetFlags.Brackets) === SymbolSetFlags.Brackets)
	{
		for (const character of '()[]{}')
		{
			characterSet.add(character)
		}
	}

	if ((flags & SymbolSetFlags.SlashAndPipe) === SymbolSetFlags.SlashAndPipe)
	{
		for (const character of '/\\|')
		{
			characterSet.add(character)
		}
	}

	return Array.from(characterSet).join('')
}
