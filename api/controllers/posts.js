import { db } from "../connect.js"

const getAllPosts = (req, res) => {
    const q = "SELECT * FROM posts"

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("No more Posts")

        return res.status(200).json(data)
    })
}

export default getAllPosts