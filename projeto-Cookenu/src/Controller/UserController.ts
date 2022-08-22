import { Request, Response } from "express";
import UserBissiness from "../Business/UserBusiness";
import { userController } from "../Type/types";





export default class UserController {
    public async Signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body


            const user: userController = { name, email, password }

            const userBussiness = new UserBissiness()

            const token = await userBussiness.Signup(user)

            res.status(200).send({ token })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
}