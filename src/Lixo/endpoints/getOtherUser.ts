import { IdGenerator } from '../../Services/GenerateId';
import { UserDataBase } from '../../Data/UserDataBase';
import { Request, Response } from "express";

// export async function getOtherUser(req: Request, res: Response) {


//     try {
//         const id = req.params.id
//         const { authorization } = req.headers


//         if (!authorization || !id) {
//             throw new Error('favor digite a authorization o id')
//         }


//         console.log('==============');
//         console.log(authorization);
//         console.log('==============');

//         const userDB = new UserDataBase()

//         const result = await userDB.getUserByTokenID(String(authorization), String(id))
//         const body = {
//             id: result.id_usuario,
//             name: result.nome,
//             email: result.email
//         }

//         res.status(200).send(body)

//     } catch (err: any) {
//         res.status(400).send({ message: err.message || err.sqlMessage })
//     }
// }
