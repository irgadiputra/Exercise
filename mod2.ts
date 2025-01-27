let isGanjil:number = 20;
if (isGanjil%2 == 0){
    console.log("odd number");
} else {
    console.log("even number");
}

let prima:number = 3;
let isPrima:boolean = prima > 2;
for (let i = 2; i < prima; i++){
    if (prima % i == 0){
        isPrima = false;
        break;
    }
}
if (isPrima){
    console.log(prima + " is a prime number")
} else {
    console.log(prima + " is not a prime number")
}

let sum:number = 5;
for (let i = sum - 1; i > 0; i--){
    sum = sum + i;
}
console.log(sum);

let multiply:number = 6;
for (let i = multiply - 1; i > 0; i--){
    multiply = multiply * i;
}
console.log(multiply);

let fibonacci:number = 15;
let before:number = 1;
let nFibonacci:number = 0;
for (let i = 0; i < fibonacci; i++){
    nFibonacci = before + nFibonacci;
    before = nFibonacci - before;
}
console.log(nFibonacci)