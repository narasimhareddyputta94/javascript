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
