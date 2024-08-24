const boardPromises = new Promise((resolve, reject) => {
    const passingScore = 70;
    const studentScore = 80;
    setTimeout(() => {
        if (studentScore >= passingScore) {
            resolve('Congratulations! You passed the exam.');
        } else {
            reject('Sorry! You failed the exam.');
        }
    }, 2000);
});

console.log("start");
boardPromises.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
console.log("end");
// In the above code, we create a new promise using the Promise constructor. The promise takes two arguments: resolve and reject.
// The resolve function is called when the promise is fulfilled, and the reject function is called when the promise is rejected.
// Inside the promise, we check if the student's score is greater than or equal to the passing score. If it is, we call the resolve function with a success message. Otherwise, we call the reject function with a failure message.
// We then use the then method to handle the success case and the catch method to handle the failure case.
// The output of the code will be:
// start
// end
// Congratulations! You passed the exam.

const data = {
    "todos": [
        {
            "id": 1,
            "todo": "Do something nice for someone you care about",
            "completed": false,
            "userId": 152
        },
        {
            "id": 2,
            "todo": "Memorize a poem",
            "completed": true,
            "userId": 13
        },
        {
            "id": 3,
            "todo": "Watch a classic movie",
            "completed": true,
            "userId": 68
        },
        {
            "id": 4,
            "todo": "Watch a documentary",
            "completed": false,
            "userId": 84
        },
        {
            "id": 5,
            "todo": "Invest in cryptocurrency",
            "completed": false,
            "userId": 163
        },
        {
            "id": 6,
            "todo": "Contribute code or a monetary donation to an open-source software project",
            "completed": false,
            "userId": 69
        },
        {
            "id": 7,
            "todo": "Solve a Rubik's cube",
            "completed": true,
            "userId": 76
        },
        {
            "id": 8,
            "todo": "Bake pastries for yourself and neighbor",
            "completed": true,
            "userId": 198
        },
        {
            "id": 9,
            "todo": "Go see a Broadway production",
            "completed": false,
            "userId": 7
        },
        {
            "id": 10,
            "todo": "Write a thank you letter to an influential person in your life",
            "completed": true,
            "userId": 9
        },
        {
            "id": 11,
            "todo": "Invite some friends over for a game night",
            "completed": false,
            "userId": 104
        },
        {
            "id": 12,
            "todo": "Have a football scrimmage with some friends",
            "completed": false,
            "userId": 32
        },
        {
            "id": 13,
            "todo": "Text a friend you haven't talked to in a long time",
            "completed": true,
            "userId": 2
        },
        {
            "id": 14,
            "todo": "Organize pantry",
            "completed": false,
            "userId": 46
        },
        {
            "id": 15,
            "todo": "Buy a new house decoration",
            "completed": true,
            "userId": 105
        },
        {
            "id": 16,
            "todo": "Plan a vacation you've always wanted to take",
            "completed": true,
            "userId": 162
        },
        {
            "id": 17,
            "todo": "Clean out car",
            "completed": false,
            "userId": 71
        },
        {
            "id": 18,
            "todo": "Draw and color a Mandala",
            "completed": true,
            "userId": 6
        },
        {
            "id": 19,
            "todo": "Create a cookbook with favorite recipes",
            "completed": true,
            "userId": 53
        },
        {
            "id": 20,
            "todo": "Bake a pie with some friends",
            "completed": false,
            "userId": 162
        },
        {
            "id": 21,
            "todo": "Create a compost pile",
            "completed": false,
            "userId": 13
        },
        {
            "id": 22,
            "todo": "Take a hike at a local park",
            "completed": true,
            "userId": 37
        },
        {
            "id": 23,
            "todo": "Take a class at local community center that interests you",
            "completed": true,
            "userId": 65
        },
        {
            "id": 24,
            "todo": "Research a topic interested in",
            "completed": true,
            "userId": 130
        },
        {
            "id": 25,
            "todo": "Plan a trip to another country",
            "completed": false,
            "userId": 140
        },
        {
            "id": 26,
            "todo": "Improve touch typing",
            "completed": false,
            "userId": 178
        },
        {
            "id": 27,
            "todo": "Learn Express.js",
            "completed": false,
            "userId": 194
        },
        {
            "id": 28,
            "todo": "Learn calligraphy",
            "completed": false,
            "userId": 80
        },
        {
            "id": 29,
            "todo": "Have a photo session with some friends",
            "completed": true,
            "userId": 91
        },
        {
            "id": 30,
            "todo": "Go to the gym",
            "completed": true,
            "userId": 142
        }
    ],
    "total": 254,
    "skip": 0,
    "limit": 30
}


const Fetch = function (){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, 2000);
    });
}

const FetchBYID = function (id){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const todo = data.todos.find(todo => todo.id === id);
            if (todo) {
                resolve(todo);
            } else {
                reject('Todo not found');
            }
        }, 5000);
    });
}

Fetch()
    .then(function (data) {
    console.log(data);
    })
    .catch(function (error) {
    console.log(error);
    });

FetchBYID(5)
    .then(function (todo) {
    console.log(todo);
    })
    .catch(function (error) {
    console.log(error);
    });

// In the above code, we create two functions Fetch and FetchByID that return
// promises that resolve with the data object and a todo object respectively.
// We then use the then method to handle the success case and the catch method to handle the failure case.
// The output of the code will be:

