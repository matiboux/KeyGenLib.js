const KeyGenLib = require('../KeyGenLib');

const KeyGen = new KeyGenLib();
let parameters;

console.log("Testing generating keygens!");
console.log();

console.log("Using the default parameters:");
console.log("> " + KeyGen.generateKeygen());
console.log();

parameters = {
    numeric: true,
    lowercase: false,
    uppercase: false,
    special: false,
    length: 4,
    redundancy: true
};
KeyGen.setParameters(parameters);
console.log(parameters);
console.log("Parameters for a PIN code:");
console.log("> " + KeyGen.generateKeygen());
console.log();

parameters = {
    uppercase: true,
    length: 16
};
KeyGen.setParameters(parameters);
console.log(parameters);
console.log("Parameters for a CD-key component:");
console.log("> " + KeyGen.generateKeygen());
console.log();

KeyGen.resetParameters();
console.log("Restoring the default parameters:");
console.log("> " + KeyGen.generateKeygen());
console.log();

parameters = {
    special: true,
    length: 64
};
KeyGen.setParameters(parameters);
console.log(parameters);
console.log("Long password with special characters:");
console.log("> " + KeyGen.generateKeygen());
console.log();

parameters = {
    numeric: false,
    lowercase: false,
    uppercase: false,
    special: false
};
KeyGen.setParameters(parameters);
console.log(parameters);
console.log("Generating error 1:");
console.log("> " + KeyGen.generateKeygen());
console.log();

console.log("Error Info:");
console.log(KeyGen.errorInfo);
console.log();

parameters = {
    numeric: true,
    lowercase: true,
    uppercase: true,
    length: 0
};
KeyGen.setParameters(parameters);
console.log(parameters);
console.log("Generating error 2:");
console.log("> " + KeyGen.generateKeygen());
console.log();

console.log("Error Info:");
console.log(KeyGen.errorInfo);
console.log();
