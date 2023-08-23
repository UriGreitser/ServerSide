const users = [
    { username: "shaked", password: "123" },
];

function checkUsernameAndPassword(username, password){
    for (const i in users) {
        const user = users[i]
        if (user.username == username && user.password == password) {
            return true;            
        }
    }
    return false;
}

module.exports = {checkUsernameAndPassword}