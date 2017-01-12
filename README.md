# KeyGen JS Lib v0.1.0

The **KeyGen JS Lib** is an *open source password generator* JavaScript library.  
This software has been initially made for the [KeyGen Windows App](https://www.microsoft.com/store/apps/9n1qncrnx6pb).

KeyGen JS Lib is an open source password generator JavaScript library.

### Start using it

[Download the KeyGen JS Lib v0.1.0 release](https://github.com/matiboux/KeyGen/releases/tag/v0.1.0) and enjoy generating your own keygens!

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

alert(keygen);
// console.log(keygen);
```

### License

Copyright (C) 2017 Mathieu Guérin (aka "Matiboux")  
*You'll find a copy of the MIT LICENSE in the LICENSE file.*

**Additional notes:**
- The term « KeyGen » stands for the random password generator service
- The noun « keygen(s) » represents the generated passwords

### About me & the project

I'm Mathieu Guérin, aka "Matiboux", a young developer.  
This JavaScript library has been created on January 1st, 2017.

Check out [the KeyGen Windows 10 App](https://www.microsoft.com/store/apps/9n1qncrnx6pb)! [View the project on Github](https://github.com/matiboux/KeyGen-App).  
Also have a look at [the original KeyGen web project](https://github.com/matiboux/KeyGen)!
Want to *disvover my other projects*? Check out [my projects list](https://sites.google.com/view/matiboux/my-projects).

*Get in touch with me*:
 - **Email**: [matiboux@gmail.com](mailto:matiboux@gmail.com)
 - **Github**: [matiboux](https://github.com/matiboux)
 - **Twitter**: [@Matiboux](https://twitter.com/Matiboux)
 - **Telegram**: [@Matiboux](https://t.me/Matiboux)