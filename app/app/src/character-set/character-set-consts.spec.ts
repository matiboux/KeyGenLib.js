import { NUMERIC_SET, LOWERCASE_SET, UPPERCASE_SET, SPECIAL_SET } from './character-set-consts'

it('Numeric character set should be the expected string', () =>
{
	expect(NUMERIC_SET).toBe('0123456789')
})

it('Lowercase character set should be the expected string', () =>
{
	expect(LOWERCASE_SET).toBe('abcdefghijklmnopqrstuvwxyz')
})

it('Uppercase character set should be the expected string', () =>
{
	expect(UPPERCASE_SET).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
})

it('Special character set should be the expected string', () =>
{
	expect(SPECIAL_SET).toBe('!#$%&\\()+-;?@[]^_{|}')
})
