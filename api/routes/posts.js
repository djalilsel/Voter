import express from 'express'
import { getAllPosts, createPost } from '../controllers/posts.js'

const router = express.Router()

router.get("/all", getAllPosts)
router.post("/create", createPost)

export default router