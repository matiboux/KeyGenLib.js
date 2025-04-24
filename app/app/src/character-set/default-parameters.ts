import type { IDefaultParameters } from './default-parameters.interface.d.ts'

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
