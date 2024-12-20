import { Request, Response, Router } from "express";

const router = Router()
router.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "hello from user end point" })
    } catch (error) {
        console.error(error);

    }
})
export { router }
