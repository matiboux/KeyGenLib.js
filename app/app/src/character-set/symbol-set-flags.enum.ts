export const enum SymbolSetFlags
{
	None = 0,
	All = -1,

	Default = 1 << 0,
	Basic = 1 << 1,
	Whitespace = 1 << 2,
	Underscore = 1 << 3,
	Punctuation = 1 << 4,
	Math = 1 << 5,
	Brackets = 1 << 6,
	SlashAndPipe = 1 << 7,
}
