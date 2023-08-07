import { users } from './data'
import { redirect } from 'react-router'

export const userAuth = (username, password) => {
    let loggedIn = false
    let indexx
    console.log("hello 2")
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
    console.log("hello three")
    return redirect("/")
}