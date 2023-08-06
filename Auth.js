import { users } from './data'

export const userAuth = (username, password) => {
    let loggedIn = false
    let indexx
    users.map((user, index) => {
        if(user.username === username && user.password === password){
            loggedIn = true
            indexx = index
        }
        return;
    })

    if(loggedIn){
        localStorage.setItem("user", JSON.stringify(users[indexx])) 
    }

    return;
}