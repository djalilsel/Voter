import express from 'express'
import { getAllPosts, createPost, getHottestVotes, getUserPosts } from '../controllers/posts.js'

const router = express.Router()

router.get("/all", getAllPosts)
router.post("/create", createPost)
router.get("/hottestvotes", getHottestVotes)
router.get("/userposts/:userId", getUserPosts)

export default router