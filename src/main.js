const randomFunc={
    lower:getRandomLowerChar,
    upper:getRandomUpperChar,
    number:getRandomNumber,
    symbol:getRandomSymbol
}
//console.log(randomFunc["lower"]());

function getRandomLowerChar(){
    //we have 26 letters
    //lowercase chars start from 97
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpperChar(){
    //uppercase chars start from 65
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    return String.fromCharCode(Math.floor(Math.random()*15)+33);
}
function generatePassword(preferences){
    //Initisalize password variable
    //preferences=preferences||{};
    let generatedPassword='';
    //filter out preferences
    if(preferences===null){
        return '';
    }
    if(!Object.prototype.hasOwnProperty.call(preferences, 'length')){
        length=8;
    }
    if(!Object.prototype.hasOwnProperty.call(preferences, 'lower')){
        preferences.lower=false;
    }
    if(!Object.prototype.hasOwnProperty.call(preferences, 'upper')){
        preferences.upper=false;
    }
    if(!Object.prototype.hasOwnProperty.call(preferences, 'number')){
        preferences.number=false;
    }
    if(!Object.prototype.hasOwnProperty.call(preferences, 'symbol')){
        preferences.symbol=false;
    }
    //loop over length call generate function of each type
    for(let i=1;i<preferences.length;i++){
        for (let item in preferences){
            if(item=="length"){
                continue;
            }
            else{
                if(preferences[item]){
                    //console.log(preferences[item]);
                    //console.log(randomFunc[item]());
                    generatedPassword+=randomFunc[item]();
                }
            }
                
            }
        
        }
    
    //add final password and return it
    const finalPassword=generatedPassword.slice(0,preferences.length);

    return finalPassword;
};

module.exports = {
    generatePassword,
    getRandomLowerChar,
getRandomUpperChar,
getRandomNumber,
getRandomSymbol

};