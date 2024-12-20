import express, { Request, Response } from 'express'
import cors from 'cors'
import { appConfig } from '../config'
import { router } from './routes'
const app = express()
app.use(cors())
app.use(express.json())
//healty
app.get('/', (_req: Request, res: Response) => {
    try {
        res.send({ message: "Hello from Ts Express App" })
    } catch (error) {
        console.error(error);
    }
})
//Routes
app.use(router)
const PORT = appConfig.port
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})