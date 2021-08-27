import express, {Application} from 'express'
import dotenv from "dotenv"
import router from './routes/convertRoutes'

dotenv.config()

const app:Application = express()

const port = process.env.PORT || 3000;

//configure Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use("/api/v1/convert", router)
app.use('/', router)

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`)
})
