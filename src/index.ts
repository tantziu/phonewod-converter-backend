import express, {Application} from 'express'
import dotenv from "dotenv"
import router from './routes/convertRoutes'

dotenv.config()

const app:Application = express()

const port = process.env.PORT || 4000;

//configure Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/phoneword", router)
app.use("*", (req:any, res:any) => res.status(404).json({ error: "not found"}))

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`)
})
