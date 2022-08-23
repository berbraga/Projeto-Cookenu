import { Request, Response } from "express";
import UserBissiness from "../Business/UserBusiness";
import { userController, userLogin } from "../Type/types";





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

    public async Login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            const user: userLogin = { email, password }

            const userBussiness = new UserBissiness()

            const token = await userBussiness.Login(user)

            res.status(200).send({ token })


        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }


    public async GetUser(req: Request, res: Response) {

        try {
            const userBussiness = new UserBissiness()

            const allUsers = await userBussiness.GetUser()

            res.status(200).send({ users: allUsers })


        } catch (err: any) {

            res.status(500).send({ message: err.message || err.sqlMessage })

        }

    }

    public async GetOtherUser(req: Request, res: Response) {
        try {
            const { authorization } = req.headers

            console.log('================');

            const userBussiness = new UserBissiness()

            const user = await userBussiness.GetOtherUser(String(authorization))
            console.log('================');

            res.status(200).send({ user })

        } catch (err: any) {

            res.status(500).send({ message: err.message || err.sqlMessage })

        }
    }
}