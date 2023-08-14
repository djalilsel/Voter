import Express from "express"
const app = Express()
import userRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import cookieParser from "cookie-parser"

app.use(Express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser())

app.use("/api/user", userRoutes)
app.use("/api/posts", postsRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    console.log("server listening on port 8800")
})