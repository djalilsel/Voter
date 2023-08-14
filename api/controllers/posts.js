import { db } from "../connect.js"

export const getAllPosts = (req, res) => {
    const q = "SELECT * FROM posts ORDER BY posts.create_date DESC"

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("No more Posts")

        return res.status(200).json(data)
    })
}

export const createPost = (req, res) => {

    console.log(req.body)

    const q = "INSERT INTO posts (creator_id, description, image) VALUES (?)"

    const values = [
        req.body.creatorId,
        req.body.description,
        req.body.image,
    ]
    db.query(q, [values], (err, data) => {

        if(err) return res.status(500).json(err)

        return res.status(200).json("user created successfully")
    })
}

