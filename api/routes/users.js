import express from 'express'
import { getUser, getSuggestions, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router()

router.get("/suggestions/:userId", getSuggestions)
router.get("/find/:userId", getUser)
router.post("/update/:userId", updateUser)
router.post("/delete/:userId", deleteUser)

export default router
