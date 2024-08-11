const KeyGenLib = require('../KeyGenLib');

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
