function sum(a,b){
    return a+b;
}

console.log(sum(1));

function sum(a, b = 0) { // Default value of 0 for b
    return a + b;
}

console.log(sum(1)); // Outputs: 1
console.log(sum(1, 2)); // Outputs: 3

var arr1 = [1,2,3];
var arr2 = arr1;
arr2[0] = 10;
console.log(arr1,arr2);


var arr1 = [1, 2, 3];
var arr2 = arr1.slice(); // Creates a shallow copy of arr1

arr2[0] = 10;

console.log(arr1); // Outputs: [1, 2, 3]
console.log(arr2); // Outputs: [10, 2, 3]


var arr1 = [1, 2, 3];
var arr2 = [...arr1]; // Creates a shallow copy of arr1

arr2[0] = 10;

console.log(arr1); // Outputs: [1, 2, 3]
console.log(arr2); // Outputs: [10, 2, 3]

