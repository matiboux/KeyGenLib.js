# KeyGenLib.js v1.0.1

**KeyGenLib.js** is an open source password generator JavaScript library.  
This software has been initially made for the [KeyGen Windows App](https://www.microsoft.com/store/apps/9n1qncrnx6pb).

### Start using it

[Download the latest release of KeyGenLib.js](https://github.com/matiboux/KeyGenLib.js/releases/latest) and enjoy generating your own keygens!

*Wondering how to get started?* Here's an example code:
```
// This example uses the default settings:
var KeygenFormData = {
	numeric: true,
	lowercase: true,
	uppercase: true,
	special: false,
	length: 12,
	redundancy: false
}

KeygenLib.setParameters(KeygenFormData);
var keygen = KeygenLib.generateKeygen();

console.log(keygen); // Print the generated keygen
```

### License

Copyright (c) 2017-2020 Matiboux (Mathieu Guérin) ([matiboux.me](https://matiboux.me/))  
*You'll find a copy of the MIT LICENSE in the LICENSE file.*

**Additional notes:**
- The term « KeyGen » stands for the random password generator service.
- The noun « keygen(s) » stands for the generated passwords.

### Links

Check out [the KeyGen Windows 10 App](https://www.microsoft.com/store/apps/9n1qncrnx6pb)! [View the project on Github](https://github.com/matiboux/KeyGen-App).  
Also have a look at [the original KeyGen web project](https://github.com/matiboux/KeyGen)!
