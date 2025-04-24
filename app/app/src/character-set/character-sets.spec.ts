import { getCharacterSets } from './character-sets'
import { NUMERIC_SET, LOWERCASE_SET, UPPERCASE_SET, SPECIAL_SET } from './character-set-consts'

describe('getCharacterSets', () =>
{
	it('should return the dictionary of character set constants', () =>
	{
		const characterSets = getCharacterSets()
		expect(characterSets).toEqual({
			numeric: NUMERIC_SET,
			lowercase: LOWERCASE_SET,
			uppercase: UPPERCASE_SET,
			special: SPECIAL_SET,
		})
	})
})
