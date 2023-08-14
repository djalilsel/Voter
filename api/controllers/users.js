import { db } from "../connect.js"

const getUser = (req, res) => {

    const id = req.originalUrl.split("/")[4]
    
    const q = "SELECT name, email, background_image, pfp FROM users WHERE id = ?;"

    db.query(q, [id], (err, data) => {

        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("user doesn't exist")

        return res.status(200).json(data)
    })
}

export default getUser