const KeyGenLib = require('../KeyGenLib');

test('generates with default parameters', () => {
	const KeyGen = new KeyGenLib();
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('generates like a PIN code', () => {
	const KeyGen = new KeyGenLib();
	const parameters = {
		numeric: true,
		lowercase: false,
		uppercase: false,
		special: false,
		length: 4,
		redundancy: true
	};
	KeyGen.setParameters(parameters);
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('generates like a CD-key component', () => {
	const KeyGen = new KeyGenLib();
	const parameters = {
		numeric: true,
		lowercase: false,
		uppercase: true,
		special: false,
		length: 16,
		redundancy: true
	};
	KeyGen.setParameters(parameters);
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('resets to default parameters', () => {
	const KeyGen = new KeyGenLib();
	KeyGen.resetParameters();
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('generates a long password with special characters', () => {
	const KeyGen = new KeyGenLib();
	const parameters = {
		special: true,
		length: 64
	};
	KeyGen.setParameters(parameters);
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('misconfigures parameters with no characters set', () => {
	const KeyGen = new KeyGenLib();
	const parameters = {
		numeric: false,
		lowercase: false,
		uppercase: false,
		special: false
	};
	KeyGen.setParameters(parameters);
	expect(KeyGen.generateKeygen()).toBe(false);
	expect(KeyGen.errorInfo).toBeDefined();
});

test('misconfigures parameters with no length', () => {
	const KeyGen = new KeyGenLib();
	const parameters = {
		numeric: true,
		lowercase: true,
		uppercase: true,
		length: 0
	};
	KeyGen.setParameters(parameters);
	expect(KeyGen.generateKeygen()).toBe(false);
	expect(KeyGen.errorInfo).toBeDefined();
});
