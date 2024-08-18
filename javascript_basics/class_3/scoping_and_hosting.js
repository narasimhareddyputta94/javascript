var globalVariable = "I'm global";

function accessGlobal() {
    console.log(globalVariable); // Accessible here
}

accessGlobal(); // Outputs: I'm global


function myFunction() {
    var localVariable = "I'm local";
    console.log(localVariable); // Accessible here
}

myFunction(); // Outputs: I'm local
console.log("error so it is commented");
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined


if (true) {
    let blockScopedVariable = "I'm block-scoped";
    console.log(blockScopedVariable); // Accessible here
}
console.log("error so it is commented");
// console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined


function outerFunction() {
    var outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Accessible here
    }

    innerFunction(); // Outputs: I'm outside!
}

outerFunction();



// now we will see the hosting concept

//before
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I'm hoisted!";
console.log(hoistedVar); // Outputs: I'm hoisted!

//after
var hoistedVar; // Declaration is hoisted
console.log(hoistedVar); // Outputs: undefined
hoistedVar = "I'm hoisted!"; // Assignment stays in place
console.log(hoistedVar); // Outputs: I'm hoisted!

// function hoisting
//before
hoistedFunction(); // Outputs: I'm a hoisted function!

function hoistedFunction() {
    console.log("I'm a hoisted function!");
}

// this is not good practice because it causes unexpected errors and bugs
function sum(a, b) {
    total = a+b;
    return total;
}
var result = sum(10, 20);
console.log(total,result); // 30

// this is good practice
var total;
function sum(a, b) {
     total = a+b;
    return total;
}
var result = sum(10, 20);
console.log(total,result); // Uncaught ReferenceError: total is not defined

function sum(a, b) {
    let total = a+b;
    return total;
}
let result1 = sum(10, 20);
console.log(result1,sum);


