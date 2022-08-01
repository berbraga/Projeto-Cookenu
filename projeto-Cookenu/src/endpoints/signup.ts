import { Authenticator } from './../services/token';
import { UserDataBase } from './../data/UserDataBase';
import { IdGenerator } from './../services/generateId';
import { Response, Request } from 'express';
import { authenticationData } from '../types';
import { hashManager } from '../services/hashes';

export async function signup(req: Request, res: Response) {

    try {
        const { name, email, password, role } = req.body;
        console.log("passou aqui3");
        if (!name || !email || !password || !role) {
            console.log("passou aqui");
            throw new Error(' insira completo: name, email, password ')
        }
        console.log("passou aqui 2");
        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const a: authenticationData = { id: id, role: role } // o que 'e o role ????
        // role é o tipo de user podendo ser amin ou norma

        const t = new Authenticator();
        const token = t.generateToken(a)
        console.log('================');
        console.log(token);
        console.log(id);
        console.log('================');
        const userDB = new UserDataBase()

        const novaSenha = new hashManager()
        const senha = await novaSenha.hash(password)
        console.log(senha);
        await userDB.createUser(id, name, email, String(senha), token, role)
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxYWIxMjczLTg3YTItNDM1Ni1hZDljLTMyNjU1MGYyNGUzZSIsInJvbGUiOiJub3JtYSIsImlhdCI6MTY1NjY5ODcxMSwiZXhwIjoxNjU3MzUzOTExfQ.HW7BewhMyjbbQIHd1VgxP1IFmHPA6l9Rd7EgvjoM0-k



        res.status(200).send({ "token": token })
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }

}