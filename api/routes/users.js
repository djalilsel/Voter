import express from 'express'
import { getUser, getSuggestions } from '../controllers/users.js'

const router = express.Router()

router.get("/suggestions", getSuggestions)
router.get("/find/:userId", getUser)

export default router
