import { UserDataBase } from '../Data/UserDataBase';
import { Request, Response } from "express";


export async function getUserByToken(req: Request, res: Response) {


    try {
        const { autorization } = req.headers

        if (!autorization) {
            throw new Error('favor digite a autorization')
        }


        console.log('==============');
        console.log(autorization);
        console.log('==============');

        const userDB = new UserDataBase()

        const result = await userDB.getUserByToken(String(autorization))
        const body = {
            id: result.id_usuario,
            name: result.nome,
            email: result.email
        }

        res.status(200).send(body)

    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}