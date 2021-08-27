import express, {Request,Response,Application} from 'express'

const app:Application = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req:Request, res:Response):void => {
    res.send("Oh, hello there")
})

app.listen(PORT, () => {
    console.log('The application is listening on port 3000!')
})