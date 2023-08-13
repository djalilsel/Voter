
import { db } from "../../connect.js"
import bcrypt from "bcryptjs"

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {

        //Checking for errors
        if(err) return res.status(500).json(err)

        //Checking if the user exist
        if(data.length) return res.status(409).json("User already exist!")

        //hashing the password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        //Adding the user to the database
        const e = "INSERT INTO users (`username`, `password`, `name`) VALUES(?)"

        const values = [
            req.body.username,
            hashedPassword,
            req.body.name
        ]

        db.query(e, [values], (err, data) => {
            if(err) return res.status(500).json(err)
            
            return res.status(200).json("User created successfully")
        })
        
        
    })

}

export const login = (req, res) => {
    //check then register
}

export const logout = (req, res) => {
    //check then register
}

