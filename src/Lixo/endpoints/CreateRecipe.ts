// import { Request, Response } from "express";
// import { ReceitaDataBase } from "../../Data/ReceitaDataase";
// import { IdGenerator } from "../../Services/GenerateId";

// export async function postCreateRecipe(req: Request, res: Response) {

//     try {

//         const { authorization } = req.headers
//         const { title, description, id_criador } = req.body;

//         if (!authorization || !title || !description || !id_criador) {
//             throw new Error('favor digitar authorization ou title ou description ou id_criador')
//         }

//         const s = new IdGenerator()
//         const id = s.generateId()

//         const dt = new Date()

//         const ano = dt.getFullYear()
//         const mes = dt.getMonth()
//         const dia = dt.getDay()

//         const data = `${ano}-${mes}-${dia}`



//         const rcDB = new ReceitaDataBase()

//         await rcDB.CreateReceita(authorization, title, description, data, id, id_criador)
//         res.status(200).send('receita criada')

//     } catch (err: any) {
//         res.status(400).send({ message: err.message || err.sqlMessage })
//     }
// }