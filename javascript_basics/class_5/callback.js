// ex -1
function greeting(name) {
    console.log('Hello, ' + name);
}

function processUserInput(callback) {
    const name = 'John';
    callback(name);
}

processUserInput(greeting); // Outputs: Hello, John

// ex-2
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback('Data received');
    }, 2000); // Simulating a delay of 2 seconds
}

function processData(data) {
    console.log('Processing: ' + data);
}

fetchData(processData);



