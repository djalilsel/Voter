import express from 'express'
import { register, login, logout, emailVerification } from '../controllers/auth.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/sendemail", emailVerification)

export default router