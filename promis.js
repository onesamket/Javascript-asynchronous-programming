// importing database 
const database = require('./Database');
//creating new promise 
function getUser(name) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("finding users from the database");
            // finding the name from the database
            const respose = database.find(value => value == name);
            if (!respose) {
                // rejecting the Promise with call stack
                reject(new Error("user does't exist"));
            }
            // resolving the promise 
            resolve(`the Name:${respose}`);

        }, 2000);
    });
}
getUser('Merry').then(data => {
    // display the result  that are returned from the promise
    console.log(data);
}).catch(error => {
    // diplay the error message
    console.log(error);
}).finally(() => console.log("promise is Ready..."))

