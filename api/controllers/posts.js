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

export const getHottestVotes = (req, res) => {

    const q = "SELECT id, creator_id, description FROM posts WHERE image != ''"

    db.query(q, (err, data) => {

        if(err) return res.status(500).json(err)

        if(err) return res.status(404).json("Not Votes are going right now!")

        return res.status(200).json(data)
    })
}

export const getUserPosts = (req, res) =>{
    const { userId } = req.params

    const q = "SELECT * FROM posts WHERE creator_id = ?"

    db.query(q, [userId], (err, data) => {

        if(err) return res.status(500).json(err)

        if(err) return res.status(404).json("Not Votes are going right now!")

        return res.status(200).json(data)
    })
}

export const deletePost = (req, res) =>{
    const { postId, userId } = req.params

    const q = "DELETE FROM posts WHERE creator_id = ? && id = ?"

    db.query(q, [userId, postId], (err, data) => {

        if(err) return res.status(500).json(err)

        return res.status(200).json("post deleted")
    })
}
