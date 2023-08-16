import express from 'express'
import { getAllPosts, createPost, getHottestVotes, getUserPosts, deletePost } from '../controllers/posts.js'

const router = express.Router()

router.get("/all", getAllPosts)
router.post("/create", createPost)
router.get("/hottestvotes", getHottestVotes)
router.get("/userposts/:userId", getUserPosts)
router.get("/delete/:userId/:postId", deletePost)

export default router