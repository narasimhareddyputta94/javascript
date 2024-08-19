//ex-1
var x = 1;
var y = 2;

function sum(a,b){
    return a+b;
}

console.log(sum(x,y));
console.log("-----------");

//ex-2
 var z = [1,2];

 function total(arr){
     return arr[0] + arr[1];
 }

 console.log(total(z));

 z[0] = 10;

 console.log(total(z));
console.log("-----------");


//ex-3
 var x1 = 1, y1 = 2;

 function sum(a,b){
     a = 10;
     return a+b;
 }

 console.log(sum(x1,y1));
 console.log(x1,y1);
console.log("-----------");

//ex-4
 var z1 = [1,2]

function sum1(arr){
     arr[0] = 10;
     return arr[0] + arr[1];
}

console.log(sum1(z1));
 console.log(z1);
console.log("-----------");


//ex- 5
var x2 = 1, y2 = 2;

function sum(a,b){
    a = 10;
    return a+b;
}

console.log(sum(x2,y2));
console.log(sum(x2,y2));
console.log(sum(x2,y2));
console.log(sum(x2,y2));
console.log(sum(x2,y2));
console.log("-----------");

//ex-6
let count = 0;
function counter(){
   count++;
   return count;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log("-----------");

//ex-7
function compute(fn,a1,b1){
    return fn(a1,b1);
}
function subtract(x4,y4){
    return y4-x4;
}
function sum(x3,y3){
    return x3+y3;
}

console.log(compute(sum,2,3));
console.log(compute(subtract,3,4));
console.log("-----------");


//ex-8
let arr4 = [1,2,3,4,5,6];

function sum3(arr){
    var length = arr.length;
    var sum = 0
    for(var a = 0;a<length;a++){
        sum = sum + arr[a];
    }
    return sum;
}
console.log(sum3(arr4));
console.log("-----------");

var sum5 = 0
arr4.forEach(function (item,idx){sum5 = sum5 + item})
console.log(sum5);
console.log("-----------");

//ex-9

