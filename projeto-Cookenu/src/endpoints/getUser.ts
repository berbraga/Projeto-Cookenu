
// import { Response } from 'express';
import { UserDataBase } from '../data/UserDataBase';
import { Request, Response } from 'express'


export async function getUser(req: Request, res: Response): Promise<any> {

    try {
        console.log('berardo ==-=-=-=-=-=-=');
        const userDB = new UserDataBase()

        const result = await userDB.getUser()
        console.log(result);
        res.status(200).send(result)

    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }

}