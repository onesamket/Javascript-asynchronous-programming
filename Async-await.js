const database = require('./Database');
function getUser(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting User.");
            const user = database.find(value => value == name)
            if (!user) {
                reject(new Error("user does't exist"))
            }
            resolve(`the ${user} Exist in index: ${database.indexOf(user)} \n `)
        }, 2000);
    })

}
function DeleteUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deleteUser = database.pop(); // return true or false
            if (!deleteUser) {
                reject(new Error("unable to delete user"));
            }
            resolve(`${deleteUser} is deleted from the database`);
        }, 2*1000);
    })
}
async function manageUser() {
    try {
        let user = await getUser('John');
        let deletedUser = await DeleteUser();
        console.log(user,deletedUser);
    } catch (error) {
        console.log(error);
    }

}
manageUser();