import { User } from '../entities/user';
import { BaseDataBase } from './BaseDataBase';



export class UserDataBase extends BaseDataBase {

    public async createUser(id: string, name: string, email: string, password: string, token: string, role: string) {

        try {

            await BaseDataBase.connection('Usuario').insert({
                id_usuario: id,
                nome: name,
                email: email,
                role: role,
                senha: password,
                token: token
            })



        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)

        }



    }

    public async getUser() {
        try {
            const result = await BaseDataBase.connection('Usuario')
            return result
        } catch (error) {
            throw new Error('deu erro no getUser Class')
        }
    }

    public async getTokenUser(email: string): Promise<any> {

        try {
            const result = await BaseDataBase.connection('Usuario').where({ email: email })
            console.log('================');
            console.log(result[0]);
            console.log('================');
            return result[0]

        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)

        }
    }
    public async getUserByToken(token: string) {
        try {
            const result = await BaseDataBase.connection('Usuario').where({ token: token })
            return result[0]

        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)

        }
    }
    public async getUserByTokenID(token: string, id: string) {
        try {
            const result = await BaseDataBase.connection('Usuario').where({
                token: token,
                id_usuario: id
            })
            return result[0]

        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)

        }
    }

}