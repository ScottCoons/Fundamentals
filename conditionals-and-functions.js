/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2< 10;

// Greater than equals
let greaterThanEq = 5 >= 5;

// Less than equals
let lessThanEq = 4 <= 9;

// Not equals
let notEquals = 5 !== 2;


let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA , storeB;
console.log(storeAIsLower);

// If Block

if (storeAIsLower) {
    console.log("Store A has a lower price.")
}   else if (storeB < storeA) {
    console.log("Store B has a lower price.")
}   else {
    console.log("Their prices are equal.")
}

// Functions

let storeA = 3.10;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices (10,5)
compareStorePrices (7,10)

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);


// Scope

let x = 10;
function addNumbers (n,m) {
    let b;
    if (1===1) {
        b = 8;
    }
    return n + m;
}


/*...*/
/*...*/
/*...*/
// Arrays

//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5];

for(let i = 0; i<5; i++) {
    console.log(ourArray[i]);
}

//Loops

let ourArray = [1, 2, 3, 4, 5];


// for(counter; comp; incr){

// }

let ourArray.length = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen>; i++) {
    console.log(ourArray[i]);
}

// While loop
//    (true)
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}