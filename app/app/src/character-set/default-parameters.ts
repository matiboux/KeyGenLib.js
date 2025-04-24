import { LOWERCASE_SET, NUMERIC_SET, SPECIAL_SET, UPPERCASE_SET } from './character-set-consts'

export interface IDefaultParameters
{
	numeric: boolean
	lowercase: boolean
	uppercase: boolean
	special: boolean
	length: number
	redundancy: boolean
}

export const DEFAULT_PARAMETERS: IDefaultParameters = {
	numeric: true,
	lowercase: true,
	uppercase: true,
	special: false,
	length: 12,
	redundancy: true,
}

/**
 * Returns default parameters.
 *
 * @returns Default parameters.
 */
export function getDefaultParameters(): IDefaultParameters
{
	return DEFAULT_PARAMETERS
}
