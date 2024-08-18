console.log(multiply(2)(3)(4)); // Output: 24

function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
} // Output: 24

function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2


function createTimer() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(i); // Outputs: 1, 2, 3 with a delay
        }, i * 1000);
    }
}

createTimer();

function creategreeting() {
    let greeting = 'Hello, World!';

    function greet() {
        console.log(greeting);
    }

    return greet;
}

const myGreeting = creategreeting();
myGreeting(); // Output: Hello, World!

function createAddition(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = createAddition(2);
console.log(addTwo(4)); // Output: 6
console.log(addTwo(10)); // Output: 12

let constant = 0;
function memoizefn(a){
     constant = a;
    return function(b){
        return constant+b;
    }
}

const sum10 = memoizefn(10);
console.log(sum10(1));
console.log(sum10(2));
console.log(sum10(3));

const sum20 = memoizefn(20);
console.log(sum20(20)); // Output: 40
console.log(sum20(30)); // Output: 50

function counter(a){
    let count = a;
    return function(){
        count = count + 1;
        return count;
    }
}

const countIncrement = counter(10);
console.log(countIncrement());
console.log(countIncrement());
console.log(countIncrement());
console.log(countIncrement());
