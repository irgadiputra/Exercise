const recLength:number  = 5; 
const recWidth:number   = 3;
let recArea:number      = recLength * recWidth;
console.log(recArea);
let recPerimeter:number =  (2 * recLength) + (2* recWidth);
console.log(recPerimeter);


const radius:number             = 5;
let diameter:number             = radius * 2;
let circleCircumference:number  = diameter * (22 / 7);
let circleArea:number           = (22 / 7) * Math.pow(radius,2);
console.log(`diameter = ${diameter}, circumference = ${circleCircumference.toFixed(4)}, area = ${circleArea.toFixed(3)}`)

const angleA:number     = 80;
const angleB:number     = 65;
let angleC:number       = 180 - angleA - angleB;
console.log(angleC);

const year:number       = 365;
const month:number      = 30;
let dayToConvert:number = 400;
let resultYear:number   = Math.floor(dayToConvert/year);
let resultMonth:number  = Math.floor((dayToConvert - (resultYear * year)) / month);
let resultDay:number    = Math.floor(dayToConvert - ((resultYear * year) + (resultMonth * month)));
let result:string       = `${resultYear} year, ${resultMonth} month, ${resultDay} day`;
console.log(result);

dayToConvert            = 366;
resultYear              = Math.floor(dayToConvert/year);
resultMonth             = Math.floor((dayToConvert - (resultYear * year)) / month);
resultDay               = Math.floor(dayToConvert - ((resultYear * year) + (resultMonth * month)));
result                  = `${resultYear} year, ${resultMonth} month, ${resultDay} day`;
console.log(result);

const date1:Date            = new Date("2022-01-20");
const date2:Date            = new Date("2022-01-22");
const msPerDay:number       = 60*1000*60*24;
let dateDifference:number   = date2.getTime() - date1.getTime();
console.log(dateDifference / msPerDay);