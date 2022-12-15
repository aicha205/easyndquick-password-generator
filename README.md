# What is this ?

Get a quick and strong password with a single click.

# Installation

`npm i easyndquick-password-generator --save`

Then...
```
const PasswordGenerator = require("./src/main");


PasswordGenerator.generatePassword
        ({
        length: 10, 
        lower: true, 
        upper: true,
        number: true,
        symbol: true
    }));
});
```
## Options 

Easyndquick-password-generator supports 5 options :
* *length* - (Integer) defaults to 10 characters.
* *lower* -  (Boolean) set up lower characters in password.
* *upper* - (Boolean) set up upper characters in password.
* *number* - (Boolean) set up numebrs in password.
* *symbol* _ (Boolean) set up symbols in password.


