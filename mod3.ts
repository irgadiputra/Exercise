let input:number    = 0;
for (let i=0; i <=10; i++){
    console.log(`${input} * ${i} = ` + input * i);
}

let polindrome:string    = "madam";
let isPolindrome            = true;
for (let i = 0;  i < polindrome.length ; i++){
    if (!(polindrome.slice(i, i+1) == polindrome.slice(polindrome.length-(i+1), polindrome.length-i))){
        isPolindrome = false;
        break;  
    } 
}
console.log( isPolindrome? polindrome +" is polindrome" : polindrome +" is not polindrome" );

let cm:number   = 100000;
console.log((cm/100000) + "km");

let money:number            = 1000;
let moneyInString:string    = money.toString();
let moneyInIDR:string       = "";
for (let i = moneyInString.length;  i > 0 ; i--){
    moneyInIDR = moneyInIDR + (moneyInString.slice(moneyInString.length - i, moneyInString.length - i + 1));
    if ((i - 1) % 3 == 0 && i > 1){
        moneyInIDR = moneyInIDR + ".";
    } 
}
moneyInIDR = "RP." + moneyInIDR + ",00";
console.log(moneyInIDR);

let stringToLook:string     = "Hello world";
let wordToSearch:string     = "ell";
let wordLeft:string         = "";
for (let i = 0;  i < stringToLook.length; i++){
    if ((stringToLook.slice(i, i+1) == wordToSearch.slice(0, 1)) && (stringToLook.slice(i+1, i+2) == wordToSearch.slice(1, 2)) && (stringToLook.slice(i+2, i+3) == wordToSearch.slice(2, 3))){
       i+=3;
    } 
    wordLeft = wordLeft + stringToLook.slice(i, i+1);
}
console.log(wordLeft);

let stringToCapitalize:string       = "hello world";
let stringAfterCapitalize:string    = stringToCapitalize.slice(0,1).toUpperCase();
for (let i = 1;  i < stringToCapitalize.length; i++){
    if ((stringToCapitalize.slice(i, i+1) == " " && !(stringToCapitalize.slice(i+1, i+2) == " "))){
        stringAfterCapitalize = stringAfterCapitalize + stringToCapitalize.slice(i, i+2).toUpperCase();
        i+=2;
    } 
    stringAfterCapitalize = stringAfterCapitalize + stringToCapitalize.slice(i, i+1);
}
console.log(stringAfterCapitalize);

let stringToSwapCase:string         = "The QuiCk BrOwN Fox";
let stringSwap:string               = "";
for (let i = 0; i < stringToSwapCase.length; i++){
    if (stringToSwapCase.slice(i, i+1) == stringToSwapCase.slice(i, i+1).toUpperCase()){
        stringSwap = stringSwap + stringToSwapCase.slice(i, i+1).toLowerCase();
    } else {
        stringSwap = stringSwap + stringToSwapCase.slice(i, i+1).toUpperCase();
    }
}
console.log(stringSwap);

const num1:number       = 42;
const num2:number       = 27;
console.log(num1 > num2? num1 : num2);

const num3:number       = 18;
let highest:string      ="";
let mid:string          ="";
let lowest:string       ="";
if (num1 > num2 && num1 > num3){
    highest = num1.toString();
    if (num2 > num3){
        mid = num2.toString();
        lowest = num3.toString();
    } else {
        mid = num3.toString();
        lowest = num2.toString();
    }
} else if (num2 > num1 && num2 > num3){
    highest = num2.toString();
    if (num1 > num3){
        mid = num1.toString();
        lowest = num3.toString();
    } else {
        mid = num3.toString();
        lowest = num1.toString();
    }
} else {
    highest = num3.toString();
    mid = num2.toString();
    lowest = num1.toString();
}
console.log(`${lowest}, ${mid}, ${highest}`);

const isString:string   = "string";
const isNumber:number   = 0;
const isOther:Date      = new Date();
if (typeof isString == typeof ""){
    console.log(1);
}
if (typeof isNumber == typeof 0){
    console.log(2);
}
if (!(typeof isOther == typeof 0) && !(typeof isOther == typeof "")){
    console.log(3);
}

let stringToCheck:string            = "An apple a day keeps the doctor away";
let charToSwap:string               = "a";
let sensoredString:string           = "";
for (let i = 0; i < stringToCheck.length; i++){
    if (stringToCheck.slice(i, i+1).toLowerCase() == charToSwap.toLowerCase()){
        sensoredString = sensoredString + "*";
    } else {
        sensoredString = sensoredString + stringToCheck.slice(i, i+1);
    }
}
console.log(sensoredString);