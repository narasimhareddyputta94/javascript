// ex -1
console.log('A');

setTimeout(function (){
    console.log('B');
},1000);

console.log('C');

for(var i = 0;i<3;i++){
    console.log('D');
}

console.log('E');

console.log("---------");

//ex_2
console.log('A');

setTimeout(function (){
    console.log('B');
},1000);

['T','T'].forEach(function (item){
    console.log(item);
});

console.log('C');

for(var i = 0;i<3;i++){
    console.log('D');
}

console.log('E');

console.log("---------");

// ex_3
function fn1(){
    fn2();
    console.log('C');
}

function fn2(){
    fn3();
    console.log('B');
}

function fn3(){
    console.log('A');
}

fn1();