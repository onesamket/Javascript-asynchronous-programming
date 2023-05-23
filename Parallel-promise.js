const database = require("./Database");

// promise one 
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("finding users from the database");
        // finding the name from the database
        const response = database.find(value => value == 'John');
        if (!response) {
            // rejecting the Promise with call stack
            reject(new Error("user does't exist"));
        }
        // resolving the promise 
        resolve(`the Name:${response}`);
    }, 2000);
});



// promise 2
const deleteUser = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("finding users from the database");
        const response = database.pop(); //dalating the last user from the database
        if (!response) {
            // rejecting the Promise with call stack
            reject(new Error("user does't exist"));
        }

        // resolving the promise 
        resolve(`the Name:${response} deleted from the database`);


    }, 2000);
});

// callling premises at the same time 
Promise.all([getUser, deleteUser])
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })


