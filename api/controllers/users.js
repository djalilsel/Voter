import { db } from "../connect.js"

export const getUser = (req, res) => {

    const id = req.originalUrl.split("/")[4]
    
    const q = "SELECT name, email, background_image, pfp FROM users WHERE id = ?;"

    db.query(q, [id], (err, data) => {

        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("user doesn't exist")

        return res.status(200).json(data)
    })
}

export const getSuggestions = (req, res) => {
    
    const q = "SELECT name, pfp, id FROM users WHERE pfp != ''"

    db.query(q, (err, data) => {

        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("No user Suggestions")

        res.status(200).json(data)
    })
}

