import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import { router } from "./routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}.`)
})