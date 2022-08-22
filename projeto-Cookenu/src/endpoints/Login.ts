import { hashManager } from '../Services/GenerateHash';
import { Request, Response } from 'express'
import { UserDataBase } from '../Data/UserDataBase';



export async function Login(req: Request, res: Response) {



    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Digite o email e/ou senha')
        }
        const userDB = new UserDataBase()

        const result = await userDB.getTokenUser(email)
        console.log(result.token);



        res.send({ token: result.token })

    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }


}