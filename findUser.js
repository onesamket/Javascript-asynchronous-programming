
function getUser(name, callback) {
    setTimeout(() => {
        // finding users by name 
        console.log("finding users from the database");
        const respose = database.find(value => value === name);
        if (!respose) {
            console.log("user does't Exist");
        } else {
            // if the user exist
            callback({ respose })

        }
    }, 2000);
}
getUser('Marry', (data) => {
    console.log(data)
});


/*
if you have many promises you can use promise chain implmentation.

        promise().then(response=>{
            doing something... 
        }).then(response=>{
            doing something... 
        }).then(response=>{
            doing something... 
        }).then(response=>{
            doing something... 
        }).catch(error=>{
            desplay error 
        })

*/
