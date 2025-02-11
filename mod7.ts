// 1
function isEqual(obj1: object, obj2: object): boolean{
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(isEqual({a: 2}, {a: 1}));
console.log(isEqual({a: "hello"}, {a: 1}));
console.log(isEqual({a: 1}, {a: 1}));

//2
function findIntersection(obj1: object, obj2: object): object{
    let objToCheck: object = {};
    Object.keys(obj1).length > Object.keys(obj2).length? 
        Object.assign(objToCheck, obj1) : Object.assign(objToCheck, obj1);

    for (let key in objToCheck) {
        if (obj1[key] !== obj2[key]) {
            delete objToCheck[key];
        }
    }
    return objToCheck;
}

console.log(findIntersection({a: 1, b: 2}, {a: 1, c: 3, e: 2, b: 2}));

//3
interface IstudentData {
    name: string,
    email: string
}

let roomA: IstudentData[] = [
    {name:"Student1", email:"Student1@gmail.com"}, 
    {name:"Student2", email:"Student2@gmail.com"}
];

let roomB: IstudentData[] = [
    {name:"Student1", email:"Student1@gmail.com"}, 
    {name:"Student2", email:"Student2@gmail.com"}, 
    {name:"Student4", email:"Student4@gmail.com"}, 
    {name:"Student3", email:"Student3@gmail.com"}
];

function combineUniqeData (arr1 : IstudentData[], arr2: IstudentData[]) : IstudentData[]{
    let combinedArray: IstudentData[] = [];
    arr2 =arr1.map(arr => 
        arr2 = arr2.filter((a) => !isEqual(arr, a))).pop() as IstudentData[];
    arr1.push(...arr2);
    combinedArray = arr1;
    return combinedArray;
}

console.log(combineUniqeData(roomA, roomB));

//4
let objToSwap: object[] = [{name : 'david', age : 20}];
function swapObjectValue(obj1: object[]): object[]{
    let swappedArr: object[] = obj1.map(obj =>
        Object.fromEntries(Object.entries(obj).map(([key, value]) => [value.toString(), key]))
    ) as object[];
    return swappedArr;
}

console.log(swapObjectValue(objToSwap));

//5
function factorial(input: number): number{
    let result = 1;
    if (input > 1){
        result = factorial(input - 1);
    }
    return result * input;
}

console.log(factorial(5));

//6
interface Iplayer {
    name : string,
    health : number,
    power : number
}

interface IItem {
    health : number,
    power : number
}

class shootingGame {
    player1: Iplayer;
    player2: Iplayer;

    constructor(player1: Iplayer, player2 : Iplayer){
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem(): IItem{
        return {health : Math.random() > 0.5? 10 : 0, power : Math.random() > 0.5? 10 : 0};
    }

    start(): Iplayer {
        let turn: number = 0;
        while(this.player1.health > 0 && this.player2.health > 0){
            console.log("turn => " + turn);
            console.log(this.player1);
            console.log(this.player2);
            if (turn % 2 === 0){
                player1.useItem(this.getRandomItem());
                player2.damage(player1.power);
            } else {
                player2.useItem(this.getRandomItem());
                player1.damage(player2.power);
            }
            turn++
        }
        console.log("Game End !!!");
        return this.player1.health > 0? this.player1 : this.player2;
    }
}

class Player implements Iplayer{
    name : string = "guest";
    health : number = 100;
    power : number = 10;

    constructor(name: string){
        this.name = name;
    }

    damage (power: number): void {
        this.health = this.health - power;
    }

    useItem(item: IItem): void{
        this.health += item.health;
        this.power += item.power;
    }

    showStatus(): Iplayer{
        return this;
    }
}

const player1: Player = new Player("Player1");
const player2: Player = new Player("Player2");
const game: shootingGame = new shootingGame(player1, player2);
console.log(game.start());