/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/test'],
	transform: {
	  '^.+\\.tsx?$': ['ts-jest', {}],
	},
	testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	coverageReporters: ['lcov', 'text'],
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: Number(process.env.COVERAGE_THRESHOLD || 50),
			functions: Number(process.env.COVERAGE_THRESHOLD || 50),
			lines: Number(process.env.COVERAGE_THRESHOLD || 50),
			statements: Number(process.env.COVERAGE_THRESHOLD || 50),
		},
	},
	moduleNameMapper: {},
};
