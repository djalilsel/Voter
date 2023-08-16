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

    const { userId } = req.params
    
    const q = "SELECT name, pfp, id FROM users WHERE id != ?"

    db.query(q, userId, (err, data) => {

        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("No user Suggestions")

        res.status(200).json(data)
    })
}

export const updateUser = (req, res) => {

    const { userId } = req.params

    let name =  ""
    let pfp = ""
    let bgImg = ""

    let values = []

    if( req.body.name !== "") {
        name = "name = ?"
        values.push(req.body.name)
    }
    if( req.body.profilePicture !== "") {
        pfp = "pfp = ?"
        values.push(req.body.profilePicture)
    }
    if( req.body.bgImg !== "") {
        bgImg = "background_image = ?"
        values.push(req.body.bgImg)
    }

    values.push(userId)

    const q = `UPDATE users SET ${name} ${pfp !== "" && name !== "" ? "," : ""} ${pfp} ${bgImg !== "" && pfp !== "" ? "," : ""} ${bgImg} WHERE id = ?`

    db.query(q, values, (err ,data) => {
        if(err) return res.status(500).json(err)
        res.status(200).json("user Updated Successfully")
    })
}

export const deleteUser = (req, res) => {
    
    const { userId } = req.params

    const q = "DELETE FROM users WHERE id = ?"

    db.query(q, userId, (err, data) => {
        if(err) return res.status(500).json(err)

        const qq = "DELETE FROM posts WHERE creator_id = ?"
        db.query(qq, userId, (err, data) => {
            if(err) return res.status(500).json(err)
        })

        res.status(200).json("user deleted")
    })

    
}

