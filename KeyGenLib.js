/*\
|*|  ---------------------------
|*|  --- [  KeyGenLib.js  ] ---
|*|  --- [   BETA: 0.2.0   ] ---
|*|  ---------------------------
|*|
|*|  KeyGenLib.js is an open source password generator JavaScript library.
|*|
|*|  Copyright (C) 2017 Matiboux (Mathieu Guérin)
|*|  You'll find a copy of the MIT LICENSE in the LICENSE file.
|*|  Please see the README.md file for more infos!
|*|
|*|  --- --- ---
|*|
|*|  Developer: Matiboux (Mathieu Guérin)
|*|
|*|  --- --- ---
|*|
|*|  (ORIGINAL PROJECT) KeyGen: Created on July 30th, 2014
|*|    Github repository: https://github.com/matiboux/KeyGen
|*|
|*|  Releases date:
|*|    BETA: January 1st, 2017
|*|    * Initial development phase
|*|    * [version 0.1]:
|*|              (0.1.0): January 12th, 2017
|*|    * [version 0.2]:
|*|              (0.2.0): ...
\*/

class KeygenLib {

    // *** Public fields & properties

    // KeyGen Active Parameters
    parameters = {
        numeric: true,
        lowercase: true,
        uppercase: true,
        special: false,
        length: 12,
        redundancy: true
    };

    // *** Private fields & properties

    // The current KeyGen Lib version
    #_version = "0.2.0";
    get version() {
        return this.#_version;
    }

    // Allowed Characters Sets
    #_characterSets = {
        numeric: "1234567890",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        special: "!#$%&\\()+-;?@[]^_{|}"
    };
    get characterSets() {
        return this.#_characterSets;
    }

    // Archived state for default parameters
    #_defaultParameters = {...this.parameters};
    get defaultParameters() {
        return this.#_defaultParameters;
    }

    // Archived state for last used parameters
    #_lastParameters = {...this.parameters};
    get lastParameters() {
        return this.#_lastParameters;
    }

    // Error information
    #_errorInfo = {
        code: 0,
        message: "No error"
    };
    get errorInfo() {
        return this.#_errorInfo;
    }

    // *** Constructor

    constructor(numeric, lowercase, uppercase, special, length, redundancy) {
        this.setParameters(numeric, lowercase, uppercase, special, length, redundancy);
    }

    // *** Methods

    // Set Keygen generation parameters
    setParameters(numeric, lowercase, uppercase, special, length, redundancy) {
        if (typeof numeric === 'object') {
            const parameters = numeric;

            numeric = parameters.numeric;
            lowercase = parameters.lowercase;
            uppercase = parameters.uppercase;
            special = parameters.special;
            length = parameters.length;
            redundancy = parameters.redundancy;
        }

        this.parameters.numeric = typeof numeric !== "undefined" ? !!numeric : this.#_lastParameters.numeric;
        this.parameters.lowercase = typeof lowercase !== "undefined" ? !!lowercase : this.#_lastParameters.lowercase;
        this.parameters.uppercase = typeof uppercase !== "undefined" ? !!uppercase : this.#_lastParameters.uppercase;
        this.parameters.special = typeof special !== "undefined" ? !!special : this.#_lastParameters.special;
        this.parameters.length = typeof length !== "undefined" ? length : this.#_lastParameters.length;
        this.parameters.redundancy = typeof redundancy !== "undefined" ? !!redundancy : this.#_lastParameters.redundancy;
    }

    // Reset parameters
    resetParameters() {
        this.parameters = {...this.#_defaultParameters};
    }

    // Generate a Keygen
    generateKeygen() {
        let charactersAllowed = "";
        if (this.parameters.numeric) charactersAllowed += this.#_characterSets.numeric;
        if (this.parameters.lowercase) charactersAllowed += this.#_characterSets.lowercase;
        if (this.parameters.uppercase) charactersAllowed += this.#_characterSets.uppercase;
        if (this.parameters.special) charactersAllowed += this.#_characterSets.special;

        if (charactersAllowed === "") {
            this.#_errorInfo = {
                code: 1,
                message: 'charactersAllowed string empty'
            };
            return false;
        }
        if (this.parameters.length === "" || this.parameters.length <= 0) {
            this.#_errorInfo = {
                code: 2,
                message: 'length empty or negative'
            };
            return false;
        }

        if (!this.parameters.redundancy && this.parameters.length > charactersAllowed.length)
            this.parameters.redundancy = true;

        let keygen = "";
        while (keygen.length < this.parameters.length) {
            const randomCharacter = charactersAllowed[this.randomNumber(0, charactersAllowed.length - 1)];

            if (this.parameters.redundancy || keygen.indexOf(randomCharacter) < 0)
                keygen += randomCharacter;
        }

        if (keygen === "") {
            this.#_errorInfo = {
                code: 3,
                message: 'Generated keygen empty'
            };
        } else {
            this.#_errorInfo = {
                code: 0,
                message: 'No error'
            };
        }

        this.#_lastParameters = {...this.parameters};
        return keygen;
    }

    // Generate a random int number
    randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = KeygenLib;
