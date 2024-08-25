
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
        }
    ]
};



const myFetch = async function(delay,limit){

    try {
        await sleep(delay);
        if (data.todos.length > limit) {
            return data.todos.slice(0, limit);
        } else {
            throw new Error('Data not found');
        }
    }
    catch (error) {
        return error;
    }
}

myFetch(5000,3)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });