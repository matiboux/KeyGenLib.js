import { getCharacterSets } from './character-sets'
import { NUMERIC_SET, LOWERCASE_SET, UPPERCASE_SET, SPECIAL_SET } from './character-set-consts'
import { DEFAULT_PARAMETERS, getDefaultParameters } from './default-parameters'
import { get } from 'http'

it('Default parameters constant should be the expected object', () =>
{
	expect(DEFAULT_PARAMETERS).toEqual({
		numeric: true,
		lowercase: true,
		uppercase: true,
		special: false,
		length: 12,
		redundancy: true,
	})
})

describe('getDefaultParameters', () =>
{
	it('should return default parameters', () =>
	{
		const defaultParameters = getDefaultParameters()
		expect(defaultParameters).toEqual(DEFAULT_PARAMETERS)
	})
})
