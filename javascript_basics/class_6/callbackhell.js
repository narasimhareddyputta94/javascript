doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
        doAnotherThing(result2, function(result3) {
            doFinalThing(result3, function(result4) {
                console.log('All done!');
            });
        });
    });
});


console.log(function (result1){
    console.log(result1);
});

getDataFromApi1(function(response1) {
    console.log('Data from API 1:', response1);
    getDataFromApi2(response1, function(response2) {
        console.log('Data from API 2:', response2);
        getDataFromApi3(response2, function(response3) {
            console.log('Data from API 3:', response3);
            processFinalResult(response3, function(finalResult) {
                console.log('Final result:', finalResult);
            });
        });
    });
});

// The above code is an example of callback hell. It is a situation where you have multiple nested callbacks that make the code hard to read and maintain.
// The code becomes difficult to understand and debug as the number of nested callbacks increases.

// To avoid callback hell, you can use promises or async/await. Promises are a built-in feature in JavaScript that allows you to work with asynchronous code in a more readable and maintainable way.

