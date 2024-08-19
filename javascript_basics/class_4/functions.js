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

function double(arr1){
    // var arr = [];
    // arr1.forEach(function(item,idx){arr.push(item*2)});
    // return arr;
    const result = arr1.map(function(item,idx){
        return item*2;
    });
    return result;
}
console.log(double(arr4));
console.log("-----------");

//ex-10
let arr5 = ['narasimha','vinay','ragav','vinodh','maniac'];

function uppercase(arr){
    return arr.map(function (item,idx){
        return item.toUpperCase();
    })
}

console.log(uppercase((arr5)));
console.log("-----------");

console.log("------------");

//ex-11
let arr6 = [1,2,3,4,5,6,7,8,9];
function filterEvennumbers(arr){
    // let arr7 = [];
    // arr.forEach(function(item,idx){
    //     if(item%2===0){
    //         arr7.push(item);
    //     }
    // })
    // return arr7
    return arr.filter(function (item,idx){
        return item%2===0;
    })
}
console.log(filterEvennumbers((arr6)));

console.log("------------");

//ex-12
let arr7 = [-1,2,-3,-4,-5,-7,8,10,14];
function getpositiveevennumber(arr){
    return arr.filter(function(item,idx){
        return (item>=0 && item%2===0);
    })
}
console.log(getpositiveevennumber(arr7));
//ex-13
let arr8 = [-1,2,-3,-4,-5,-7,8,7,10,14];
function getpositivenumber(arr){
    return arr.filter(function(item,idx){
        return item>=0;
    })
}
console.log(getpositivenumber(arr8));

//ex-14
let arr9 = [{amount:100},{amount:200},{amount:400},{amount: 1600}];
function accountsumarry(arr){
    // let balance = 0;
    // arr.forEach(function (item,idx){
    //     balance = balance + item.amount;
    // });
    // return balance;
    return arr.reduce(function (acc,item,idx){
        acc += item.amount;
        return acc;
    },0);
}
console.log(accountsumarry(arr9));

//ex-15

const letters = ['c','h','a','m','p','s'];
function combineLetters(arr){
    return arr.reduce(function(acc,item,idx){
        acc = acc + item;
        return acc;
    },"")
}
console.log(combineLetters((letters)));