var basketprice = 270;

if (basketprice >= 300) {
    console.log('You have a discount');
}
else {
    console.log('add more items to get discount and save more');
}


if(basketprice >= 300) {
    console.log('You have a discount');
}
else if(basketprice >= 200) {
    console.log('add ths amount to get discount' + (300 - basketprice));
}
else {
    console.log('add more items to get discount and save more');
}

/*
switch(basketprice)

 */

var num = 15;
switch (num) {
    case 10:
        console.log('10');
        break;
    case 20:
        console.log('20');
        break;
    case 30:
        console.log('30');
        break;
    default:
        console.log('default');
        break;
}



var num = 10;
switch (num) {
    case 10:
        console.log('10');

    case 20:
        console.log('20');

    case 30:
        console.log('30');

    default:
        console.log('default');

}

var num_1 = 10;

for(var i = 0; i < num_1; i++) {
    console.log(i);
}

console.log('----------------------');


var num_2 = 10;
var i = 0;
while(i < num_2) {
    console.log(i*2);
    i++;
}

console.log('----------------------');

var num_3 = 10;
var i = 0;
do {
    console.log(i*10);
    i++;
}
while(i < num_3);
