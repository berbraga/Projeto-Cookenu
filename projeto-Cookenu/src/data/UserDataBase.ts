
import UserModel from '../Model/UserModel';
import { connection } from "./Connection";


const TABLE_USER = 'User'


export class UserDataBase {

    public async createUser(user: UserModel) {

        try {
            console.log(user);
            await connection(TABLE_USER).insert({
                id_usuario: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })



        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)

        }



    }


    public async getUser() {
        try {
            const result = await connection(TABLE_USER)
            return result
        } catch (error) {
            throw new Error('deu erro no getUser Class')
        }
    }

//     public async getTokenUser(email: string): Promise<any> {

//         try {
//             const result = await BaseDataBase.connection('Usuario').where({ email: email })
//             console.log('================');
//             console.log(result[0]);
//             console.log('================');
//             return result[0]

//         } catch (err: any) {
//             throw new Error(err.sqlMessage || err.message)

//         }
//     }
//     public async getUserByToken(token: string) {
//         try {
//             const result = await BaseDataBase.connection('Usuario').where({ token: token })
//             return result[0]

//         } catch (err: any) {
//             throw new Error(err.sqlMessage || err.message)

//         }
//     }
//     public async getUserByTokenID(token: string, id: string) {
//         try {
//             const result = await BaseDataBase.connection('Usuario').where({
//                 token: token,
//                 id_usuario: id
//             })
//             return result[0]

//         } catch (err: any) {
//             throw new Error(err.sqlMessage || err.message)

//         }
//     }


}