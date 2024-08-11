const KeyGenLib = require('../KeyGenLib');

test('imports KeyGenLib', () => {
	expect(KeyGenLib).toBeDefined();
});

test('instantiates KeyGenLib', () => {
	const KeyGen = new KeyGenLib();
	expect(KeyGen).toBeDefined();
});
