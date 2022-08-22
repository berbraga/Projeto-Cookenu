import { IdGenerator } from './../Services/GenerateId';
import { authenticationData, userController } from "../Type/types";
import UserModel from '../Model/UserModel';
import { userRole } from '../Enum/EnumUser';
import { UserDataBase } from '../Data/UserDataBase';
import { Authenticator } from '../Services/GenerateToken';





export default class UserBissiness {
    public async Signup(userController: userController) {
        const { name, email, password } = userController

        if (!name || !email || !password) {
            console.log("passou aqui");
            throw new Error(' insira completo: name, email, password ')
        }
        if (password.length < 6) {
            throw new Error(' falta caracter no password , deve conter no minimo 6 caracteres ')
        }

        const gId = new IdGenerator()

        const id = gId.generateId()
        const role: userRole = userRole.NORMAL

        const userModel = new UserModel(id, name, password, email, role)

        const userDB = new UserDataBase()

        await userDB.createUser(userModel)
        console.log('passou bussiness');

        const au: authenticationData = { id, role }
        const dotoken = new Authenticator()

        const token = dotoken.generateToken(au)

        return token


    }
}