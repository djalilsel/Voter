
import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


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
        const e = "INSERT INTO users (`username`, `password`, `name`, `email`) VALUES(?)"

        const values = [
            req.body.username,
            hashedPassword,
            req.body.name,
            req.body.email
        ]

        db.query(e, [values], (err, data) => {
            if(err) return res.status(500).json(err)
            
            return res.status(200).json("User created successfully")
        })
        
        
    })

}

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {

        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("User doesn't exist!")

        const checkedPasswrod = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkedPasswrod) return res.status(400).json("Wrong username or password")

        const { password, ...others } = data[0]

        const accessToken = jwt.sign({id: data[0].id}, "secretKey", {
            expiresIn: '1h',
        })
        const refreshToken = jwt.sign({id: data[0].id}, "secretKey", {
            expiresIn: '7d',
        })


        const qq = "UPDATE users SET refresh_token = ? WHERE id = ?"
        
        db.query(qq, [refreshToken, data[0].id], (err, data) => {
        })

        res.cookie('refreshtoken', refreshToken, {
            httpOnly: true,

        }).status(200).json(others)

    })
}

export const logout = (req, res) => {
    res.clearCookie('refreshtoken').status(200).json("token cleared")
}

