import Express from "express"
const app = Express()
import userRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'

app.use(Express.json())

app.use("/api/user", userRoutes)
app.use("/api/posts", postsRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    console.log("server listening on port 8800")
})