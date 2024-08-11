const KeyGenLib = require('../KeyGenLib');

test('generates with default parameters', () => {
	const KeyGen = new KeyGenLib();
	expect(KeyGen.generateKeygen()).toBeTruthy();
});

test('resets to default parameters', () => {
	const KeyGen = new KeyGenLib();
	KeyGen.resetParameters();
	expect(KeyGen.generateKeygen()).toBeTruthy();
});
