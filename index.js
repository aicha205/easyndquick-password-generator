const express=require('express');
const PasswordGenerator = require("./src/main");

var app = express()
app.get("/",function(request,response){

    response.send("Your password is : "+PasswordGenerator.generatePassword
        ({
        length: 10, 
        lower: true, 
        upper: true,
        number: true,
        symbol: true
    }));
});
app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});
