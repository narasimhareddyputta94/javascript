var Objects = {1: 10, 2: 20, 3: '30', 4: 'default'};
console.log(Objects);

console.log(String([1, 2, 3, 4, 5]));

var obj = {1: 10, 2: 20, 3: '30', 4: 'default'};
console.log(obj);

var b = {1: 10, 2: 20, "3": '30', 4: 'default'};
console.log(b);

var c = {1:1,1:"one"}
console.log(c);

console.log(String([]))

var d = [1,2];
var e = {d: 10};
console.log(e);

var biodata ={
    name: "narasimha reddy",
    age:26,
    salary: 100000,
    isMarried: false,
    isGraduated: true,
    address: {
        city: "bangalore",
        state: "karnataka",
        country: "india"
    }
}

console.log(biodata);
console.log("name " + biodata.name);
console.log("age" + biodata.age);
console.log("salary" + biodata.salary);
console.log(biodata.isMarried);
console.log(biodata.isGraduated);
console.log(biodata.address);
console.log(biodata.address.city);
console.log(biodata.address.state);
console.log(biodata.address.country);



console.log(biodata);
console.log(biodata["name"]);
console.log(biodata["age"]);
console.log(biodata["salary"]);
console.log(biodata["isMarried"]);
console.log(biodata["isGraduated"]);
console.log(biodata["address"]);
console.log(biodata["address"]["city"]);
console.log(biodata["address"]["state"]);
console.log(biodata["address"]["country"]);

biodata.name = "vijay";
console.log(biodata.name);

biodata.age = 30;
console.log(biodata.age);

biodata.salary = 200000;
console.log(biodata.salary);

biodata.isMarried = true;
console.log(biodata.isMarried);

biodata.isGraduated = false;

delete biodata.salary;
console.log(biodata);

// Using square brackets
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4);
console.log(numbers);

let firstFruit = fruits[0]; // "Apple"
console.log(firstFruit);

let secondNumber = numbers[1]; // 2
console.log(secondNumber);

fruits[1] = "Orange"; // Now fruits is ["Apple", "Orange", "Mango"]
console.log(fruits);

let size = fruits.length; // 3
console.log(size);

fruits.push("Pineapple"); // ["Apple", "Orange", "Mango", "Pineapple"]
console.log(fruits);

let lastFruit = fruits.pop(); // "Pineapple", fruits is now ["Apple", "Orange", "Mango"]
console.log(lastFruit);

let firstFruitRemoved = fruits.shift(); // "Apple", fruits is now ["Orange", "Mango"]
console.log(firstFruitRemoved);

fruits.unshift("Strawberry");// ["Strawberry", "Orange", "Mango"]
console.log(fruits);


let fruitsCopy = fruits.slice(); // ["Strawberry", "Orange", "Mango"]
console.log(fruitsCopy);

let fruitsCopy2 = fruits.slice(1, 3); // ["Orange", "Mango"]
console.log(fruitsCopy2);

let removedFruits = fruits.splice(1, 2); // ["Orange", "Mango"], fruits is now ["Strawberry"]
console.log(removedFruits);
