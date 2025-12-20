export const enum CharacterSetFlags
{
	None = 0,

	Lowercase = 1 << 0, // 'a-z'
	Uppercase = 1 << 1, // 'A-Z'
	Numeric = 1 << 2, // '0-9'
	Special = 1 << 3,
}
